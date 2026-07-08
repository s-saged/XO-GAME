let title = document.querySelector(".title");
let turn = 'X';
let squares = [];

function game(id) {
    let element = document.getElementById(id);

    if (turn === 'X' && element.innerHTML == "") {
        element.innerHTML = 'X';
        turn = 'O';
        title.innerHTML = 'O';
    } else if (turn === 'O' && element.innerHTML == "") {
        element.innerHTML = 'O';
        turn = 'X';
        title.innerHTML = 'X';
    }
    winner();
}

function end(num1, num2, num3) {
    title.innerHTML = `${squares[num1]} Winner!`;

    document.getElementById('s' + num1).style.backgroundColor = '#000';
    document.getElementById('s' + num2).style.backgroundColor = '#000';
    document.getElementById('s' + num3).style.backgroundColor = '#000';

    setInterval(() => {
        title.innerHTML += '.';
    }, 1000);

    setTimeout(() => {
        location.reload();
    }, 4000);
}

function winner() {
    // 1. نملأ المصفوفة أولاً بالقيم الحالية من المربعات
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById("s" + i).innerHTML;
    }

    // 2. نفحص احتمالات الفوز
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
        end(1, 2, 3);
        return; // نوقف الدالة هنا إذا وجدنا فائزاً
    } else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != '') {
        end(4, 5, 6);
        return;
    } else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != '') {
        end(7, 8, 9);
        return;
    } else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != '') {
        end(1, 5, 9);
        return;
    } else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != '') {
        end(3, 5, 7);
        return;
    } else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '') {
        end(1, 4, 7);
        return;
    } else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != '') {
        end(2, 5, 8);
        return;
    } else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != '') {
        end(3, 6, 9);
        return;
    }

    // 3. نفحص حالة التعادل (إذا كانت كل المربعات مليئة ولا يوجد فائز)
    if (squares[1] != '' && squares[2] != '' && squares[3] != '' && 
        squares[4] != '' && squares[5] != '' && squares[6] != '' && 
        squares[7] != '' && squares[8] != '' && squares[9] != '') {
        
        title.innerHTML = `🛑 There is no winner 🛑`;

        for (let i = 1; i <= 9; i++) {
            document.getElementById('s' + i).style.backgroundColor = '#ff0000';
        }

        setInterval(() => {
            title.innerHTML += '.';
        }, 1000);

        setTimeout(() => {
            location.reload();
        }, 4000);
    }
}