let board = document.querySelector("#board");
let reset_btn = document.querySelector("#reset_btn");
let result = document.querySelector("#result");
let x_box = document.getElementById("x_box");
let o_box = document.getElementById("o_box");

let turn = 'O';
let count = 0;
let win_declare = false; 

let win_Pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let user_pattern = new Array(9).fill('Empty');


let winner_check = () => {
    for(let [a , b , c] of win_Pattern){
        if(user_pattern[a] === user_pattern[b] && user_pattern[b] === user_pattern[c] && user_pattern[a] != 'Empty'){
            result.innerHTML = `${turn} is winner`;
            board.removeEventListener('click' , print);
            win_declare = true;

            if(turn == 'O'){
                x_box.style.fontSize = "5rem";
                o_box.style.fontSize = "20rem";
            }else{
                x_box.style.fontSize = "10rem";
                o_box.style.fontSize = "3rem";
            }
        }
    }
}



let print = (event) => {
    
    if(event.target.className === "box")
    {let box = event.target;

    if (turn === "O") {
        box.innerText = 'O';
        user_pattern[box.id] = turn;
        x_box.style.fontSize = "10rem";
        o_box.style.fontSize = "3rem";
        
        winner_check();
        turn = 'X';
    }
    else {
        box.innerText = 'X';
        user_pattern[box.id] = turn;
        o_box.style.fontSize = "10rem";
        x_box.style.fontSize = "3rem";
        winner_check();
        turn = 'O';
    }

    if(win_declare == true)
        return

    count++;
    if(count == 9)
        result.innerHTML = `Match is draw`;
}}

let reset_fun = () => {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.innerHTML = "";
    });
    result.innerHTML = "";
    board.addEventListener('click' , print);
    turn = 'O';
    user_pattern.fill('Empty');
    count = 0;
    o_box.style.fontSize = "20rem";
    x_box.style.fontSize = "5rem";
}


board.addEventListener('click', print)
reset_btn.addEventListener("click" , reset_fun);