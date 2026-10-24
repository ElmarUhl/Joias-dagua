function clicked() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}
function resize() {
    if (innerWidth >= 992) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}
function password() {
    var nome_user = 'Elmar'
    var senha_user = '123456'

    var fuser = window.document.getElementById('iuser')
    var fpass = window.document.getElementById('ipass')

    if ( nome_user == fuser.value && senha_user == fpass.value) {
        window.open('links.html')
        window.alert(fuser.value + ' ' + fpass.value)
    } else {
        window.alert('[ERRO] Verifique seu nome de usuário e senha.')
    }

    
}