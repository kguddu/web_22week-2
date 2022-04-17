let cells=document.querySelectorAll('.cell')
cells=Array.from(cells)

let winningCombination=[
    [0,1,2],
    [3,4,4],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function checkWinner(){
    winningCombination.forEach(function(combination){
        let check=combination.every(i=>cells[i].innerText.trim()==currentPlayer)
        if(check){
            higlightCells(combination)
        }
    })
}

function higlightCells(combination){
    combination.forEach(function(idx){
        cells[idx].classList.add('highlights')

    })
}

let currentPlayer= "x"
cells.forEach(function(cell){
    cell.addEventListener('click',function(){
        if(cell.innerText.trim() !="") return
        cell.innerText= currentPlayer
        checkWinner()
        currentPlayer=currentPlayer == "x" ? "o" : "x"
    })

})

    

