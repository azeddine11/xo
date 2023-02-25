let title = document.querySelector('.title')
let turn = 'x'
let squares = []


// THEARD FUNCTION
function theReapet(num1, num2, num3)
{
    title.innerHTML = `${squares[num1]} is the WINNER`
    document.getElementById('item'+num1).style.background = 'red'
    document.getElementById('item'+num2).style.background = 'red'
    document.getElementById('item'+num3).style.background = 'red'

    setTimeout(function(){
        location.reload()
    },3000)
}

// SECOND FUNCTION
function theWinner()
{
    for( i = 1 ; i < 10; i++)
    {
        squares[i] = document.getElementById('item' + i).innerHTML
    }
    
    if(squares[1] == squares[2] &&  squares[2] == squares[3] && squares[1] != '')
    {
        theReapet(1,2,3)

    }else if(squares[4] == squares[5] &&  squares[5] == squares[6] && squares[4] != '')
    {
        theReapet(4,5,6)

    }else if(squares[7] == squares[8] &&  squares[8] == squares[9] && squares[7] != '')
    {
        theReapet(7,8,9)
        
    }else if(squares[1] == squares[4] &&  squares[4] == squares[7] && squares[1] != '')
    {
        theReapet(1,4,7)
        
    }else if(squares[2] == squares[5] &&  squares[5] == squares[8] && squares[2] != '')
    {
        theReapet(2,5,8)
        
    }else if(squares[3] == squares[6] &&  squares[6] == squares[9] && squares[3] != '')
    {
        theReapet(3,6,9)
        
    }else if(squares[1] == squares[5] &&  squares[5] == squares[9] && squares[1] != '')
    {
        theReapet(1,5,9)
        
    }else if(squares[3] == squares[5] &&  squares[5] == squares[7] && squares[3] != '')
    {
        theReapet(3,5,7)
        
    }else if (squares[1] != '' && squares[2] != '' && squares[3] != '' && squares[4] != '' && squares[5] != '' && squares[6] != '' && squares[7] != '' && squares[8] != '' && squares[9] != '' ){
        title.innerHTML = 'NO ONE IS THE WINNER'
        setTimeout(function(){
            location.reload()
        },3000)
    }
}

// FIRST FUNCTION
function game(id)
{
    let item = document.getElementById(id)
    if(turn === 'x' && item.innerHTML =='')
    {
        item.innerHTML = 'X'
        turn = 'o'
        title.innerHTML = 'O TURN'

    }else if(turn === 'o' && item.innerHTML ==''){ 
        item.innerHTML = 'O'
        turn = 'x'
        title.innerHTML = 'X TURN'
    }
    theWinner()
}



