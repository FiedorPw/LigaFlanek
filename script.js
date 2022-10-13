
var playersTotal =[]
var playersL =[]
var playersR =[]
let currentTableRow = 1


let nameFieldsL = document.querySelectorAll('.teamNameL');
    nameFieldsL.forEach(field =>{
        field.innerText = "Perłowi";
});
let nameFieldsR = document.querySelectorAll('.teamNameR');
    nameFieldsR.forEach(field =>{
        field.innerText = "Beczkowi";
});


class Student{
    //czemu to zakomentowane nie działa???
    
    // wins = 0;
    // matches = 0;
    constructor(wins,matches,name){
        this.name = name;;
        this.wins = wins;
        this.matches = matches;
    }
    // addWin(){
    //     wins += 1;
    //     matches = 5 ;
    //     name = 'kiemon';
    // }
    // addMatch(){
    //     // matches++;
    // }

}




    // lewa strona
function addPlayerL(){
    let playerInput = document.getElementById('playerInputL').value
    let lista = document.getElementById("listaL")
    
    let debil = new Student(0,0,playerInput)
    playersL.push(debil)

    var li = document.createElement('li');
    li.innerText = playerInput;
    lista.appendChild(li);

    let table = document.getElementById('table');
    currentTableRow += 1
    let row = table.inertRow(currentTableRow)
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)

    cell1.innerHtml = playerInput





}
function showTeamChangeInputL(){
    document.getElementById("teamNameInputL").style.display = "block";
    document.getElementById("acceptL").style.display = "block"
}
function changeTeamNameL(){
    let input = document.getElementById("teamNameInputL").value;
    let nameFieldsL = document.querySelectorAll('.teamNameL');
    nameFieldsL.forEach(field =>{
        field.innerText = input;
    });
    //document.querySelector('.teamNameL').innerText = input;
}

// prawa strona



function addPlayerR(){
    let playerInput = document.getElementById('playerInputR').value
    let lista = document.getElementById("listaR")

    let debil = new Student(0,0,playerInput)
    playersR.push(debil)
    
    var li = document.createElement('li');
    li.innerText = playerInput;
    lista.appendChild(li);
}
function showTeamChangeInputR(){
    document.getElementById("teamNameInputR").style.display = "block";
    document.getElementById("acceptR").style.display = "block"
}
function changeTeamNameR(){
    let input = document.getElementById("teamNameInputR").value;
    let nameFieldsR = document.querySelectorAll('.teamNameR');
    nameFieldsR.forEach(field =>{
        field.innerText = input;
    });
}


//srodek dół
function showAfterEnding(){
    document.getElementById("afterEnding").style.display = "flex";
}
function debuguj(){
    console.log(playersL)

}
function chceckEnd(){
    // let dupa = document.querySelector('input[name="team"]:chcecked').value
    // console.log(dupa)
    playersL.forEach(player=>{
        let playerWins= player.wins + 1
        player.wins = playerWins

        let playerMatches = player.matches + 1
        player.matches = playerMatches

        playersTotal.push(player)
    })
    playersR.forEach(player=>{
        let playerMatches = player.matches + 1
        player.matches = playerMatches
        playersTotal.push(player)
    })


    console.log(playersL )
    console.log(playersTotal )
}

