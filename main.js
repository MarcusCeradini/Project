//This initializes the periodicTable element and gives it the property
// of talking about the periodTable ID in the html.
const periodicTable = document.getElementById("periodicTable");


//This function sets up a table of squares which are buttons
// meaning that later when these buttons/squares are clicked
// on, something will happen. Whats left is to format the table
// and add the page to which the user will be sent to
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


//The table is formatted by creating a list of how many elements
//should be in each row. It proceeds to create 9 rows by looping
//it 9 times and adds the amount of elements needed by iterating 
//through the elementsInRow variable which contains the list.
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

// The function is called and the table is setup
setupTable();