$(document).ready(function(){

    $('#telefone').mask('(00) 00000 - 0000', { 
        placeholder: ('(DDD) 12345-6789') 
    });

    $('#nome').on('input', function() {
        let valor = $(this).val();
        $(this).val(valor.replace(/[^a-zA-ZÀ-ÿ\s]/g, ''));
    });

    $('form').validate({
        rules: {
            nome: { 
                required: true 
            },
            email: { 
                required: true,
                email: true 
            }
        },

        submitHandler: function (form) {
            alert("Obrigado por nos enviar sua mensagem! Nossa equipe responderá o mais breve possível.");
            form.reset();
        },

        invalidHandler: function (evento, validador) {
            alert("Por favor, preencha os campos para prosseguir com o envio da mensagem!");
        }
    });
});
