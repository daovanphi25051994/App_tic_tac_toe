let arrayValue = [];
let winNumber;
let status = "x";

function showTable(column) {
    let table = "<table>";
    for (let i = 0; i < column; i++) {
        table += "<tr>";
        arrayValue[i] = [];
        for (let j = 0; j < column; j++) {
            table += "<td onclick='changeStatus(this," + i + "," + j + ")'></td>";
            arrayValue[i].push(-1);
        }
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById("table").innerHTML = table;
}

function changeStatus(cels, xPos, yPos) {
    if (cels.innerHTML === "") {
        if (status === "x") {
            cels.innerHTML = "x";
            arrayValue[xPos][yPos] = 1;
            status = "o";
        } else {
            cels.innerHTML = "o";
            arrayValue[xPos][yPos] = 0;
            status = "x";
            cels.style.color = 'red';
        }
    }
    checkWin(winNumber, xPos, yPos);
}

function checkWin(winNumber, xPos, yPos) {
    let count = 1;
    let i = xPos;
    let j = yPos;
    let valueOfCell = arrayValue[xPos][yPos];
    while (arrayValue[i][j + 1] === valueOfCell) {
        count++;
        confirmWinner(count, winNumber);
        j++;
    }
    i = xPos;
    j = yPos;
    while (arrayValue[i][j - 1] === valueOfCell) {
        count++;
        confirmWinner(count, winNumber);
        j--;
    }
    count = 1;
    i = xPos;
    j = yPos;
    while (arrayValue[i + 1][j] === valueOfCell) {
        count++;
        confirmWinner(count, winNumber);
        i++;
    }
    i = xPos;
    j = yPos;
    while (arrayValue[i - 1][j] === valueOfCell) {
        count++;
        confirmWinner(count, winNumber);
        i--;
    }
    count = 1;
    i = xPos;
    j = yPos;
    while (arrayValue[i + 1][j + 1] === valueOfCell) {
        count++;
        confirmWinner(count, winNumber);
        i++;
        j++
    }
    i = xPos;
    j = yPos;
    while (arrayValue[i - 1][j - 1] === valueOfCell) {
        count++;
        confirmWinner(count, winNumber);
        i--;
        j--;
    }
    count = 1;
    i = xPos;
    j = yPos;
    while (arrayValue[i + 1][j - 1] === valueOfCell) {
        count++;
        confirmWinner(count, winNumber);
        i++;
        j--
    }
    i = xPos;
    j = yPos;
    while (arrayValue[i - 1][j + 1] === valueOfCell) {
        count++;
        confirmWinner(count, winNumber);
        i--;
        j++;
    }
}

function confirmWinner(count, winNumber) {
    if (count === winNumber) {
        alert("You are winner !!");
    }
}

function playGame() {
    let column = parseInt(document.getElementById("column").value);
    if (column === 3) {
        winNumber = 3;
    } else if (column === 10) {
        winNumber = 4;
    } else {
        winNumber = 5;
    }
    showTable(column);
    changeStatus(this, i, j);
}

