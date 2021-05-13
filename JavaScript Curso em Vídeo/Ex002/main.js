function verificar(){
    var anoAtual = new Date().getFullYear()
    var anoUsuario = document.getElementById('txtAno')
    var res = document.getElementById('res')

    if (anoUsuario.value == 0 || anoUsuario.value > anoAtual) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var idade = Number(anoAtual) - Number(anoUsuario.value)
        var genero = document.getElementsByName('radSex')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(genero[0].checked){
            genero = 'homem'
            if (idade >=0 && idade<=14) {
                img.setAttribute('src', 'assets/img/foto-bebe-m.png')
            } else if(idade >14 && idade <=25) {
                img.setAttribute('src', 'assets/img/foto-jovem-m.png')
            } else if(idade > 25 && idade <=60) {
                img.setAttribute('src', 'assets/img/foto-adulto-m.png')
            } else if (idade > 60){
                img.setAttribute('src', 'assets/img/foto-idoso-m.png')
            }
        } else {
            genero = 'mulher'
            if (idade >=0 && idade<=14) {
                img.setAttribute('src', 'assets/img/foto-bebe-f.png')
            } else if(idade >14 && idade <=25) {
                img.setAttribute('src', 'assets/img/foto-jovem-f.png')
            } else if(idade > 25 && idade <=60) {
                img.setAttribute('src', 'assets/img/foto-adulto-f.png')
            } else if (idade > 60){ 
                img.setAttribute('src', 'assets/img/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        img.style.marginLeft = '62px'
    }
}