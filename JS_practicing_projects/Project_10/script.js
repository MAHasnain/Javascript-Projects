const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".reset-btn");
const msgContainer = document.querySelector(".msg-container");

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 5],
]

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn0) {
            box.innerHTML = "O";
            turn0 = false;
        } else {
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })

})
const checkWinner = () => {
    for (let pattern of winPatterns) {
        // // console.log(pattern);
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerHTML,
        //     boxes[pattern[0]].innerHTML,
        //     boxes[pattern[2]].innerHTML)
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;
        
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                msgContainer.innerHTML = "Winner";
            }
        }
    }
}