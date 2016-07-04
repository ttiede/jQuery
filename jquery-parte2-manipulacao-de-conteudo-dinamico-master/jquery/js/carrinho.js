var atualizaDados = function(){
  var carrinhos = $(".carrinho");
  $.each(carrinhos, function() {
    var carrinho = $(this);
    var items = carrinho.find(".item-total:visible");
    var total = 0;
    var quantidade_de_itens = 0;
    $.each(items, function() {
      var item = this;
      total = total + parseFloat($(item).text());
      quantidade_de_itens = quantidade_de_itens + 1;
    });
    carrinho.find(".valor-total").text(total);
    carrinho.find(".quantidade-de-itens").text(quantidade_de_itens);

  });
};

var removeItem = function( object ) {
  //var itemTotal = self.closest("td").siblings(".item-total");
  //var itemTotal = self.closest("td").find(".item-total");

  var self = $(object);
  self.closest("tr").hide();
  atualizaDados();
};

var undo = function(){
    var carrinho = $(this).closest('.carrinho');
    $("tr:visible").removeClass("recuperado");
    var trs = $("tr:hidden");
    trs.addClass("recuperado");
    trs.show();
    atualizaDados();
}

var aposInicializado = function() {
  $("td").on("click", ".remove-item", function(event){
    event.preventDefault();
    removeItem($(this));
  });
  atualizaDados();
  $("div").on("click", ".undo", function(event){
    event.preventDefault();
    undo();
  });
};

 $(aposInicializado);
