$( document ).ready(function() {
  var issues = 'https://github.com/vbrosso/api_github/issues';


  $.getJSON(issues, function(data){
   for (i = 0; i < data.length; i++) { 
      tituloName = data[i].title;
      criadoem = data[i].created_at;
      
      atualizada = data[i].updated_at;
      atualizada = atualizada.replace("T", "&nbsp;&nbsp;ás&nbsp;");
      atualizada = atualizada.replace("Z", "");

      criadoem = criadoem.toString();
      criadoem = criadoem.replace("T", "&nbsp;&nbsp;ás&nbsp;");
      criadoem = criadoem.replace("Z", "");

      criadoem = "<h3>Data de criação: " + criadoem + "</h3>"
      atualizada = "<h3>Atualizado em: " + atualizada + "</h3></div>"
      tituloName = "<h2><a href='#' title='"+tituloName+"'>" + tituloName + "</a><input type='text' id='tituloIssue'></h1><button type='button' class='btnEdit'>Editar</button><button type='button' class='btnCancelar'>Cancelar</button><button type='button' class='btnSalvar'>Salvar</button>"

      $('#testeissue').append(tituloName);
      $('#testeissue').append("<div class='esconde'>" + criadoem + atualizada + "</div>");
    }    
    $(".esconde").hide();    
    $('h2 a').click(function() {
      $(this).parent().next().next().next().next().slideToggle();
      return false;
      event.preventDefault();
    });
    $('.btnEdit').click(function() {
      $(this).hide();
      $(this).next().show();
      $(this).next().next().show();
      var thisText = "";
      thisText = $(this).prev().find('a').attr('title');
      $(this).prev().find('a').hide();
      $(this).prev().find('input').val(thisText).show();
      $(this).prev().find('input').focus();
    });
    $('.btnCancelar').click(function() {
      $(this).hide();
      $(this).prev().show();
      $(this).next().hide();
      $(this).prev().prev().find('input').hide();
      $(this).prev().prev().find('a').show();
    });
    $('.btnSalvar').click(function(){
        var editissues = 'https://api.github.com/repos/vbrosso/arizona_teste/issues/1';
        novoTitulo = $(this).prev().prev().prev().find('input').val();
        novoInput = $(this);
        $.ajax({
          httpMethod: "PATCH",
          url: editissues,
          contentType: "application/json",
          dataType: "json",
          data: JSON.stringify({
              "content": "aGVsbG8=",
              "encoding": "utf-8"
            })
        })
          .done(function( data ) {
            data.title = novoTitulo;
            console.log(data.title);
             novoInput.prev().prev().prev().find('a').html(novoTitulo).show();
             novoInput.prev().prev().prev().find('input').hide();
             novoInput.hide();
             novoInput.prev().hide();
             novoInput.prev().prev().show();
             novoInput.prev().prev().prev().find('input').val(novoTitulo);
          });
       
    });
  });           
});