var atualizaDados = function(){
  var items = $(".item-total:visible");
  var total = 0;
  var quantidade_de_itens = 0;

  $.each(items, function() {
    var item = this;
    total = total + parseFloat($(item).text());
    quantidade_de_itens = quantidade_de_itens + 1;
  });

  $("#valor-total").text(total);
  $("#quantidade-de-itens").text(quantidade_de_itens);
};

var removeItem = function( object ) {
  //var itemTotal = self.closest("td").siblings(".item-total");
  //var itemTotal = self.closest("td").find(".item-total");

  var self = $(object);
  self.closest("tr").hide();
  atualizaDados();
};

var undo = function(){
    $("tr:visible").removeClass("recuperado");
    var trs = $("tr:hidden");
    trs.addClass("recuperado");
    trs.show();
}

var aposInicializado = function() {
  $("td").on("click", ".remove-item", function(event){
    event.preventDefault();
    removeItem($(this));
  });
  atualizaDados();
  $("div").on("click", "#undo", function(event){
    event.preventDefault();
    undo();
  });
};

 $(aposInicializado);
