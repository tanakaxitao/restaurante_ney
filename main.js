$(document).ready(function () {
  $("#telefone").mask("(00) 00000-0000");

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      mensagem: {
        required: true,
      },
      email: {
        required: true,
      },
      telefone: {
        required: true,
      },
    },
    messages: {
      nome: "por favor insira o seu nome!",
      email: "por favor insira seu email",
      telefone: "por favor insira seu telefone!",
      mensagem: "por favor insira uma mensagem!",
    },
    submitHandler: function (form) {
      const nome = $("#nome").val();
      alert(`muito Obrigado ${nome} entraremos em contato em breve!`);
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`existe ${camposIncorretos} campos incorretos!`);
      }
    },
  });
});
