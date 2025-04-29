const periodicTable = document.getElementById("periodicTable");


function setupElement(startAt, amount, parent) {
    for (let i = startAt; i < startAt + amount; i++) {
        const button = document.createElement("button");
        button.id = `element${i}`;
        button.style.width = "65px";
        button.style.height = "65px";
        const trueI = ((i >= 57 && i <= 71) ? i + 15 :
                       (i >= 72 && i <= 74) ? i + 15  :
                       (i >= 75 && i <= 89) ? i + 29 :
                       (i >= 90 && i <= 103) ? i - 32 :
                       (i >= 104 && i <= 117) ? i - 14 : i + 1);

        button.addEventListener("click", function elementClicked() {
            prompt(`Element id=${trueI}`);
        });
        parent.appendChild(button);
    }
    return amount;
}

function setupTable() {
    let currentElement = 0;
    let elementsInRow = [2, 8, 8, 18, 18, 18, 18, 14, 14];

    for (let i = 0; i < 9; i++) {
        const row = document.createElement("div");
        row.id = `row${i}`;
        periodicTable.appendChild(row);
        currentElement += setupElement(currentElement, elementsInRow[i], row);
    }
}

setupTable();