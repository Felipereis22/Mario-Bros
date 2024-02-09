/*

    Variáveis
       
        Um espaço de memória que você
        reserva e pode guardar o que 
        quiser lá dentro

        3 Jeitos de criar uma variável
            - var / jeito antigo - NÃO USE 
            - let -> VOCÊ pode alterar o valor depois 
            - const -> constante

*/


/*

    Funções 
    
        Um trecho de código que, só é executado,
        quando é chamado

*/

const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function mostrarForm() {
    form.style.left = "50%"
    form.style.transform = "translateX(-150px)"
    mascara.style.visibility = "visible"
}


function esconderForm() {
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}
