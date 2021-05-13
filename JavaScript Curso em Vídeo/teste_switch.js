var agora = new Date();
var diaDaSemanaEmNum = agora.getDay();
var diaDaSemanaEmTxt;

switch (diaDaSemanaEmNum) {
    case 0:
        diaDaSemanaEmTxt = `Domingo`;
        break;

    case 1:
        diaDaSemanaEmTxt = `Segunda`;
        break;

    case 2:
        diaDaSemanaEmTxt = `Terca`;
        break;

    case 3:
        diaDaSemanaEmTxt = `Quarta`;
        break;

    case 4:
        diaDaSemanaEmTxt = `Quinta`;
        break;
    
    case 5:
        diaDaSemanaEmTxt = `Sexta`;
        break;

    case 6:
        diaDaSemanaEmTxt = `Sabado`
        break;

    default:
        break;
}

console.log(`Hoje eh ${diaDaSemanaEmTxt}`)