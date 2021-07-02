## Default Layout Minimalist

Este projeto foi desenvolvido durante os estudos com o desenvolvimento web front-end, utilizando css, html e javascript, com o intuito de construir um template para criação de uma landing page para pequenos projetos.




<p align = "center">
  <img src= "assets_page\images\example_screen_desktop-mobile.png" alt = "Shield Sterring Wheel" width = "500"/>
</p>

#### Visualize um exemplo da utilização deste projeto.
* [Steering_Wheel_UNO](https://steering-wheel-uno.vercel.app/)
***
### 📌 Resumo

Desenvolvido seguindo um layout minimalista, este template segue a premissa de facilitar a construção de uma landing page em pequenos projetos, dando prioridade a um design limpo e de fácil utilização, com suporte para dispositivos desktop e mobile. Este projeto foi construído durante os estudos com css, html e javascript "puro", sem a utilização de bibliotecas, como o JQuery. O projeto foi construído dessa maneira para exercitar o código em js.

***

### 🖥️ Layout

O template é dividido em: "Início", "Informações" e "Downloads", onde o acesso é realizado pela barra de navegação superior. No mobile, a barra de navegação fica recolhida em um menu hambúrguer.

<p align = "center">
  <img src= "assets_page\images\example_menu.png" alt = "Shield Sterring Wheel" width = "300"/>
</p>

>*Para evitar a repetição do trecho de código do menu de navegação, ele foi inserido em um iframe, onde o redimensionamento é calculado por js.*



```
window.onload = function(){calcIframeHeight();}

// Corrige o bug de redimensionamento ao expandir o menu na versao mobile.

window.onclick = function(){calcIframeHeight();}

// Retorna o valor correto da altura da pagina para o iframe.

function calcIframeHeight(){
    parent.document.getElementById("iframe").setAttribute('height',getIframeHeight());
}

// Retorna a altura do menu de navegação.

function getIframeHeight(){
    return document.getElementById("iframePage").scrollHeight;
}
```


### 🏠 Início

Na tela de Início, temos a presença de um pequeno resumo do projeto, abaixo do logotipo das tecnologias utilizadas e do título do projeto. Além disso, também existe uma série de imagens do projeto em questão, onde a navegação acontece por meio dos botões no canto inferior.


<p align = "center">
  <img src= "assets_page\images\example_home.png" width = "500"/>
</p>

### 🧮  Informações

Este espaço é destinado à documentação da página, onde existe um breve sumário para facilitar o acesso. O sumário é gerado automaticamente pelo js, não sendo necessário a sua construção, apenas que o texto obedeça o seguinte padrão:

#### Títulos:

```
<h2 class="title" href = "#">Mussum Ipsum</h2>

```

#### Subtítulos:

```
<h2 class="subtitle" href = "#">Cacilds vidis litro abertis</h2>

```
No mobile, o sumário fica retraído, onde é necessário abri-lo para navegar entre os títulos.

<p align = "center">
  <img src= "assets_page\images\example_documentation-menu.png" width = "500"/>
</p>

### 📂 Downloads

Esta pagina é destinada ao download de arquivos compartilhados, seguindo um layout que se mantem em sua versão mobile.
O html do butão de download segue o seguinte modelo:

```
<div class="files">
  <h3>Titulo</h3>
  <div>
      <button onclick="download('diretorio do arquivo')">
          <img class="img-icon" src="/assets_page/icons/download.png">
      </button>
  </div>
</div>
```
>*Caso o link de download esteja em outro diretório ou link, será necessário modificar a função download(), localizada em download_file.js*

***
### 📝 Conclusão:
Durante os estudos pude observar a flexibilidade de utilização do javascript, em conjunto com o css e o html. Esta foi uma das minhas primeiras experiencias com esta linguagem, onde, apesar de em um primeiro momento ser um pouco confusa, me possibilitou a abertura de novos caminhos e possibilidades de desenvolvimento.
***
### 📚 Leitura recomendada 

* [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

***

### 📝 Licença

Este projeto está sobe a licença [MIT](https://github.com/JosManoel/Default_Layout-Minimalist/blob/main/LICENSE).













