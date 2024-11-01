// Seleciona o ícone do menu e o aside
const menuIcon = document.getElementById("menu-icon");
const sideMenu = document.getElementById("side-menu");

// Adiciona o evento de clique no ícone do menu
menuIcon.addEventListener("click", () => {
    sideMenu.classList.toggle("show"); // Alterna a classe 'show' para exibir/ocultar o menu
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    
    // Verifica se o modo escuro está ativado nas preferências do usuário
    if (localStorage.getItem('dark-mode') === 'enabled') {
        ativarModoEscuro();
    } else {
        desativarModoEscuro();
    }
    
    // Alternar modo ao clicar no botão
    toggleButton.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            desativarModoEscuro();
        } else {
            ativarModoEscuro();
        }
    });
    
    function ativarModoEscuro() {
        document.body.classList.add('dark-mode');
        
        document.getElementsByClassName("logo")[0].src = "images/cordeiro_rosa.png";

        document.getElementsByClassName("logo2")[0].src = "images/cordeiro_rosa.png";
        
        document.getElementById("img").src = "images/lua.png";
        document.getElementById("img-mobile").src = "images/lua.png";
        
        console.log(document.getElementById("img"));
        
        localStorage.setItem('dark-mode', 'enabled');
        
        document.getElementById('dark-mode-toggle').classList.remove('dark-mode-toggle');
        document.getElementById('dark-mode-toggle').classList.add('dark-mode-toggle-rosa');
        
        document.getElementById('header').classList.remove('header1');
        document.getElementById('header').classList.add('header2')
        
        document.getElementById('line').classList.remove('line');
        document.getElementById('line').classList.add('line-rosa');
        
        document.getElementById('links').classList.remove('link-item');
        document.getElementById('links').classList.add('links-rosa');
        
        document.getElementById('link-item1').classList.remove('link-item');
        document.getElementById('link-item1').classList.add('link-item-rosa');
        document.getElementById('link-item2').classList.remove('link-item');
        document.getElementById('link-item2').classList.add('link-item-rosa');
        document.getElementById('link-item3').classList.remove('link-item');
        document.getElementById('link-item3').classList.add('link-item-rosa');
        document.getElementById('link-item4').classList.remove('link-item');
        document.getElementById('link-item4').classList.add('link-item-rosa');
        
        document.getElementById('b1').classList.remove('b1');
        document.getElementById('b1').classList.add('b01');
        
        document.getElementById('span1').classList.remove('span1');
        document.getElementById('span1').classList.add('span01');
        document.getElementById('span2').classList.remove('span2');
        document.getElementById('span2').classList.add('span02');
        
        document.getElementById('background').classList.remove('background');
        document.getElementById('background').classList.add('background-rosa');
        
        document.getElementById('span3').classList.remove('span3');
        document.getElementById('span3').classList.add('span03');
        document.getElementById('span4').classList.remove('span4');
        document.getElementById('span4').classList.add('span04');
        
        document.getElementById('conhecimento-span').classList.remove('conhecimento-span')
        document.getElementById('conhecimento-span').classList.add('conhecimento-span-rosa')
        document.getElementById('conhecimento-element1').classList.remove('conhecimento-element');
        document.getElementById('conhecimento-element1').classList.add('conhecimento-element-rosa');
        
        document.getElementById('conhecimento-element2').classList.remove('conhecimento-element');
        document.getElementById('conhecimento-element2').classList.add('conhecimento-element-rosa');
        
        document.getElementById('conhecimento-element3').classList.remove('conhecimento-element');
        document.getElementById('conhecimento-element3').classList.add('conhecimento-element-rosa');
        
        document.getElementById('conhecimento-element4').classList.remove('conhecimento-element');
        document.getElementById('conhecimento-element4').classList.add('conhecimento-element-rosa');
        document.getElementById('sql').src = "images/sql-branco.png"
        
        document.getElementById('conhecimento-element5').classList.remove('conhecimento-element');
        document.getElementById('conhecimento-element5').classList.add('conhecimento-element-rosa');
        document.getElementById('js').classList.add('js-rosa');
        document.getElementById('js').classList.remove('js');
        
        document.getElementById('conhecimento-element6').classList.remove('conhecimento-element');
        document.getElementById('conhecimento-element6').classList.add('conhecimento-element-rosa');
        document.getElementById('img2').src = "images/branco.png";
        
        document.getElementById('projeto-span').classList.remove('projeto-span');
        document.getElementById('projeto-span').classList.add('projeto-span-rosa');
        document.getElementById('projetos').classList.add('background-rosa');
        document.getElementById('projetos').classList.remove('background');

        document.getElementById('grid-element1').classList.remove('grid-element');
        document.getElementById('grid-element1').classList.add('grid-element-rosa');
        
        document.getElementById('form').classList.remove('form');
        document.getElementById('form').classList.add('form-rosa');
        document.getElementById('conteiner-form').classList.remove('conteiner-form');
        document.getElementById('conteiner-form').classList.add('conteiner-form-rosa');

        document.getElementById('fancy').classList.remove('fancy');
        document.getElementById('fancy').classList.add('fancy-rosa');
        
        document.getElementById('footer').classList.remove('footer');
        document.getElementById('footer').classList.add('footer-rosa');
    }
    
    function desativarModoEscuro() {
        document.body.classList.remove('dark-mode');
        document.getElementsByClassName("logo")[0].src = "images/cordeiro.png";
        document.getElementsByClassName("logo2")[0].src = "images/cordeiro.png";
        document.getElementById("img").src = "images/sol.png";
        document.getElementById("img-mobile").src = "images/sol.png";
        localStorage.setItem('dark-mode', 'disabled');
        document.getElementById('dark-mode-toggle').classList.add('dark-mode-toggle');
        document.getElementById('dark-mode-toggle').classList.remove('dark-mode-toggle-rosa');
        document.getElementById('header').classList.add('header1');
        document.getElementById('header').classList.remove('header2')
        
        document.getElementById('line').classList.add('line');
        document.getElementById('line').classList.remove('line-rosa');
        
        document.getElementById('links').classList.add('links');
        document.getElementById('links').classList.remove('links-rosa');

        
        document.getElementById('link-item1').classList.add('link-item');
        document.getElementById('link-item1').classList.remove('link-item-rosa');
        document.getElementById('link-item2').classList.add('link-item');
        document.getElementById('link-item2').classList.remove('link-item-rosa');
        document.getElementById('link-item3').classList.add('link-item');
        document.getElementById('link-item3').classList.remove('link-item-rosa');
        document.getElementById('link-item4').classList.add('link-item');
        document.getElementById('link-item4').classList.remove('link-item-rosa');
        
        document.getElementById('b1').classList.add('b1');
        document.getElementById('b1').classList.remove('b01');
        
        document.getElementById('span1').classList.add('span1');
        document.getElementById('span1').classList.remove('span01');
        
        document.getElementById('span2').classList.add('span2');
        document.getElementById('span2').classList.remove('span02');
        
        document.getElementById('background').classList.add('background');
        document.getElementById('background').classList.remove('background-rosa');
        
        document.getElementById('conhecimento-span').classList.add('conhecimento-span')
        document.getElementById('conhecimento-span').classList.remove('conhecimento-span-rosa')
        
        document.getElementById('conhecimento-element1').classList.add('conhecimento-element');
        document.getElementById('conhecimento-element1').classList.remove('conhecimento-element-rosa');
        
        document.getElementById('conhecimento-element2').classList.add('conhecimento-element');
        document.getElementById('conhecimento-element2').classList.remove('conhecimento-element-rosa');
        
        document.getElementById('conhecimento-element3').classList.add('conhecimento-element');
        document.getElementById('conhecimento-element3').classList.remove('conhecimento-element-rosa');
        
        document.getElementById('conhecimento-element4').classList.add('conhecimento-element');
        document.getElementById('conhecimento-element4').classList.remove('conhecimento-element-rosa');
        document.getElementById('sql').src = "images/SQL.png"
        
        document.getElementById('conhecimento-element5').classList.remove('conhecimento-element-rosa');
        document.getElementById('conhecimento-element5').classList.add('conhecimento-element');
        document.getElementById('js').classList.remove('js-rosa');
        document.getElementById('js').classList.add('js');
        
        document.getElementById('conhecimento-element6').classList.remove('conhecimento-element-rosa');
        document.getElementById('conhecimento-element6').classList.add('conhecimento-element');
        document.getElementById('img2').src = "images/C Sharp Logo.png";
        
        document.getElementById('span3').classList.add('span3');
        document.getElementById('span3').classList.remove('span03');
        
        document.getElementById('span4').classList.add('span4');
        document.getElementById('span4').classList.remove('span04');
        document.getElementById('projeto-span').classList.add('projeto-span');
        document.getElementById('projeto-span').classList.remove('projeto-span-rosa');
        document.getElementById('projetos').classList.remove('background-rosa');
        document.getElementById('projetos').classList.add('background');

        document.getElementById('grid-element1').classList.add('grid-element');
        document.getElementById('grid-element1').classList.remove('grid-element-rosa');

        document.getElementById('form').classList.add('form');
        document.getElementById('form').classList.remove('form-rosa');
        document.getElementById('conteiner-form').classList.add('conteiner-form');
        document.getElementById('conteiner-form').classList.remove('conteiner-form-rosa');
        
        document.getElementById('fancy').classList.add('fancy');
        document.getElementById('fancy').classList.remove('fancy-rosa');
        
        document.getElementById('footer').classList.remove('footer-rosa');
        document.getElementById('footer').classList.add('footer');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-toggle');
    
    // Verifica se o modo escuro está ativado nas preferências do usuário
    if (localStorage.getItem('dark-mode') === 'enabled') {
        ativarModoEscuro();
    } else {
        desativarModoEscuro();
    }
    
    // Alternar modo ao clicar no botão
    toggleButton.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            desativarModoEscuro();
        } else {
            ativarModoEscuro();
        }
    });
    
    function ativarModoEscuro() {
        document.body.classList.add('dark-mode');
        
        document.getElementsByClassName("logo")[0].src = "images/cordeiro_rosa.png";

        document.getElementsByClassName("logo2")[0].src = "images/cordeiro_rosa.png";
        
        document.getElementById("img").src = "images/lua.png";
        document.getElementById("img-mobile").src = "images/lua.png";
        
        console.log(document.getElementById("img"));
        
        localStorage.setItem('dark-mode', 'enabled');
        
        document.getElementById('dark-toggle').classList.remove('dark-mode-toggle');
        document.getElementById('dark-toggle').classList.add('dark-mode-toggle-rosa');
        
        document.getElementById('header').classList.remove('header1');
        document.getElementById('header').classList.add('header2')
        
        document.getElementById('line').classList.remove('line');
        document.getElementById('line').classList.add('line-rosa');
        
        document.getElementById('links').classList.remove('link-item');
        document.getElementById('links').classList.add('links-rosa');
        
        document.getElementById('link-item1').classList.remove('link-item');
        document.getElementById('link-item1').classList.add('link-item-rosa');
        document.getElementById('link-item2').classList.remove('link-item');
        document.getElementById('link-item2').classList.add('link-item-rosa');
        document.getElementById('link-item3').classList.remove('link-item');
        document.getElementById('link-item3').classList.add('link-item-rosa');
        document.getElementById('link-item4').classList.remove('link-item');
        document.getElementById('link-item4').classList.add('link-item-rosa');
        
        document.getElementById('b1').classList.remove('b1');
        document.getElementById('b1').classList.add('b01');
        
        document.getElementById('span1').classList.remove('span1');
        document.getElementById('span1').classList.add('span01');
        document.getElementById('span2').classList.remove('span2');
        document.getElementById('span2').classList.add('span02');
        
        document.getElementById('background').classList.remove('background');
        document.getElementById('background').classList.add('background-rosa');
        
        document.getElementById('span3').classList.remove('span3');
        document.getElementById('span3').classList.add('span03');
        document.getElementById('span4').classList.remove('span4');
        document.getElementById('span4').classList.add('span04');
        
        document.getElementById('conhecimento-span').classList.remove('conhecimento-span')
        document.getElementById('conhecimento-span').classList.add('conhecimento-span-rosa')
        document.getElementById('conhecimento-element1').classList.remove('conhecimento-element');
        document.getElementById('conhecimento-element1').classList.add('conhecimento-element-rosa');
        
        document.getElementById('conhecimento-element2').classList.remove('conhecimento-element');
        document.getElementById('conhecimento-element2').classList.add('conhecimento-element-rosa');
        
        document.getElementById('conhecimento-element3').classList.remove('conhecimento-element');
        document.getElementById('conhecimento-element3').classList.add('conhecimento-element-rosa');
        
        document.getElementById('conhecimento-element4').classList.remove('conhecimento-element');
        document.getElementById('conhecimento-element4').classList.add('conhecimento-element-rosa');
        document.getElementById('sql').src = "images/sql-branco.png"
        
        document.getElementById('conhecimento-element5').classList.remove('conhecimento-element');
        document.getElementById('conhecimento-element5').classList.add('conhecimento-element-rosa');
        document.getElementById('js').classList.add('js-rosa');
        document.getElementById('js').classList.remove('js');
        
        document.getElementById('conhecimento-element6').classList.remove('conhecimento-element');
        document.getElementById('conhecimento-element6').classList.add('conhecimento-element-rosa');
        document.getElementById('img2').src = "images/branco.png";
        
        document.getElementById('projeto-span').classList.remove('projeto-span');
        document.getElementById('projeto-span').classList.add('projeto-span-rosa');
        document.getElementById('projetos').classList.add('background-rosa');
        document.getElementById('projetos').classList.remove('background');

        document.getElementById('grid-element1').classList.remove('grid-element');
        document.getElementById('grid-element1').classList.add('grid-element-rosa');
        
        document.getElementById('form').classList.remove('form');
        document.getElementById('form').classList.add('form-rosa');
        document.getElementById('conteiner-form').classList.remove('conteiner-form');
        document.getElementById('conteiner-form').classList.add('conteiner-form-rosa');

        document.getElementById('fancy').classList.remove('fancy');
        document.getElementById('fancy').classList.add('fancy-rosa');
        
        document.getElementById('footer').classList.remove('footer');
        document.getElementById('footer').classList.add('footer-rosa');
    }
    
    function desativarModoEscuro() {
        document.body.classList.remove('dark-mode');
        document.getElementsByClassName("logo")[0].src = "images/cordeiro.png";
        document.getElementsByClassName("logo2")[0].src = "images/cordeiro.png";
        document.getElementById("img").src = "images/sol.png";
        document.getElementById("img-mobile").src = "images/sol.png";
        localStorage.setItem('dark-mode', 'disabled');
        document.getElementById('dark-toggle').classList.add('dark-mode-toggle');
        document.getElementById('dark-toggle').classList.remove('dark-mode-toggle-rosa');
        document.getElementById('header').classList.add('header1');
        document.getElementById('header').classList.remove('header2')
        
        document.getElementById('line').classList.add('line');
        document.getElementById('line').classList.remove('line-rosa');
        
        document.getElementById('links').classList.add('links');
        document.getElementById('links').classList.remove('links-rosa');

        
        document.getElementById('link-item1').classList.add('link-item');
        document.getElementById('link-item1').classList.remove('link-item-rosa');
        document.getElementById('link-item2').classList.add('link-item');
        document.getElementById('link-item2').classList.remove('link-item-rosa');
        document.getElementById('link-item3').classList.add('link-item');
        document.getElementById('link-item3').classList.remove('link-item-rosa');
        document.getElementById('link-item4').classList.add('link-item');
        document.getElementById('link-item4').classList.remove('link-item-rosa');
        
        document.getElementById('b1').classList.add('b1');
        document.getElementById('b1').classList.remove('b01');
        
        document.getElementById('span1').classList.add('span1');
        document.getElementById('span1').classList.remove('span01');
        
        document.getElementById('span2').classList.add('span2');
        document.getElementById('span2').classList.remove('span02');
        
        document.getElementById('background').classList.add('background');
        document.getElementById('background').classList.remove('background-rosa');
        
        document.getElementById('conhecimento-span').classList.add('conhecimento-span')
        document.getElementById('conhecimento-span').classList.remove('conhecimento-span-rosa')
        
        document.getElementById('conhecimento-element1').classList.add('conhecimento-element');
        document.getElementById('conhecimento-element1').classList.remove('conhecimento-element-rosa');
        
        document.getElementById('conhecimento-element2').classList.add('conhecimento-element');
        document.getElementById('conhecimento-element2').classList.remove('conhecimento-element-rosa');
        
        document.getElementById('conhecimento-element3').classList.add('conhecimento-element');
        document.getElementById('conhecimento-element3').classList.remove('conhecimento-element-rosa');
        
        document.getElementById('conhecimento-element4').classList.add('conhecimento-element');
        document.getElementById('conhecimento-element4').classList.remove('conhecimento-element-rosa');
        document.getElementById('sql').src = "images/SQL.png"
        
        document.getElementById('conhecimento-element5').classList.remove('conhecimento-element-rosa');
        document.getElementById('conhecimento-element5').classList.add('conhecimento-element');
        document.getElementById('js').classList.remove('js-rosa');
        document.getElementById('js').classList.add('js');
        
        document.getElementById('conhecimento-element6').classList.remove('conhecimento-element-rosa');
        document.getElementById('conhecimento-element6').classList.add('conhecimento-element');
        document.getElementById('img2').src = "images/C Sharp Logo.png";
        
        document.getElementById('span3').classList.add('span3');
        document.getElementById('span3').classList.remove('span03');
        
        document.getElementById('span4').classList.add('span4');
        document.getElementById('span4').classList.remove('span04');
        document.getElementById('projeto-span').classList.add('projeto-span');
        document.getElementById('projeto-span').classList.remove('projeto-span-rosa');
        document.getElementById('projetos').classList.remove('background-rosa');
        document.getElementById('projetos').classList.add('background');

        document.getElementById('grid-element1').classList.add('grid-element');
        document.getElementById('grid-element1').classList.remove('grid-element-rosa');

        document.getElementById('form').classList.add('form');
        document.getElementById('form').classList.remove('form-rosa');
        document.getElementById('conteiner-form').classList.add('conteiner-form');
        document.getElementById('conteiner-form').classList.remove('conteiner-form-rosa');
        
        document.getElementById('fancy').classList.add('fancy');
        document.getElementById('fancy').classList.remove('fancy-rosa');
        
        document.getElementById('footer').classList.remove('footer-rosa');
        document.getElementById('footer').classList.add('footer');
    }
});