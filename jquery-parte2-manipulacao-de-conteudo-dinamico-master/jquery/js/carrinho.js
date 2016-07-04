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

var umaPropaganda = function() {
	var propagandas = ["O que acha de comprar uma motocicleta?",
						"O que acha de comprar uma lancha?",
						"O que acha de comprar uma bicicleta?",
						"O que acha de comprar um carro?"
						];
	var posicao = Math.floor(propagandas.length * Math.random());
	var texto = propagandas[posicao];
	var tr = $("<tr>").addClass("propaganda").append($("<td>"));
	tr.find("td").attr("colspan", 6).text(texto);
	return tr;
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

  $(".carrinho").each(function() {
		$(this).find("tr:nth-child(3n)").each(function() {
			umaPropaganda().insertAfter($(this));
		});
	});
	$(".carrinho tbody tr").hover(daDestaque, tiraDestaque);
  $(".alterna-propaganda").click(alternaPropaganda);
};

var daDestaque = function(){
   $(this).find(".remove-item").fadeIn();
  $(this).addClass("hovering");
}

var tiraDestaque = function(){
  $(this).find(".remove-item").fadeOut();
  $(this).removeClass("hovering");
}

var alternaPropaganda = function(event){
    event.preventDefault();
    $(".propaganda").fadeToggle();
    $(".alterna-propaganda").toggle();
}

$(aposInicializado);
