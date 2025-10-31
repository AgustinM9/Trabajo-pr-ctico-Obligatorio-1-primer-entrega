$(document).ready(function(){

    $("#btnCalcular").click(function(){
    
        var totalCompra = $("#totalCompra").val();
        
        totalCompra = parseFloat(totalCompra);

        var descuento = 0;
        var totalFinal = totalCompra;

        if (totalCompra > 30000) {
            descuento = totalCompra * 0.10;
            totalFinal = totalCompra - descuento;
        }

        $("#res-subtotal").text(totalCompra);
        $("#res-descuento").text(descuento);
        $("#res-total").text(totalFinal);
    });

});