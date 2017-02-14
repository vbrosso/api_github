# api_github aplicação lista todos os issue do repositório: https://github.com/vbrosso/api_github## O que faz?
1 - Lista issues do repositório.

2 - Ao clicar em cada issue exibe as informaçes (data de criação e data de atualização).




Para listar as issues de outro repositório basta atualizar a linha 2 do arquivo js/funcoes.js

var issues = 'https://api.github.com/repos/vbrosso/{SEUREPOSITORIO}/issues';