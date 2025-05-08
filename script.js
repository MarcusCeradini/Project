//This initializes the periodicTable element and gives it the property
// of talking about the periodTable ID in the html.
const periodicTable = document.getElementById("periodicTable");
let coffee = 0;


//This function sets up a table of squares which are buttons
// meaning that later when these buttons/squares are clicked
// on, something will happen. Whats left is to format the table
// and add the page to which the user will be sent to
function setupElement(startAt, amount, parent) {
    for (let i = startAt; i < startAt + amount; i++) {
        const button = document.createElement("button");
        button.id = `element${i}`;
        button.style.width = "100px";
        button.style.height = "100px";

        const trueI = ((i >= 57 && i <= 71) ? i + 15 :
                       (i >= 72 && i <= 74) ? i + 15  :
                       (i >= 75 && i <= 89) ? i + 29 :
                       (i >= 90 && i <= 103) ? i - 32 :
                       (i >= 104 && i <= 117) ? i - 14 : i + 1);

        const img = document.createElement("img");
        img.src = `https://marcusceradini.github.io/Project/images/element${trueI}.png`;
        img.alt = `Element ${trueI}`;
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        button.appendChild(img);

        button.addEventListener("click", function () {
            window.location.href = `https://marcusceradini.github.io/Project/elements/element${trueI}.html`;
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

const searchContainer = document.createElement("div");
searchContainer.setAttribute('class' , 'searchContainer')
searchContainer.setAttribute('class' , 'search')
const searchInput = document.createElement("input");
searchInput.type = "number";
searchInput.placeholder = "Enter element number (1–118)";
searchInput.style.margin = "10px";
searchInput.setAttribute('class' , 'search__input') 

const searchButton = document.createElement("button");
searchButton.textContent = "Search";
searchButton.setAttribute('class' , 'search__button')
searchContainer.appendChild(searchInput);
searchContainer.appendChild(searchButton);
document.body.insertBefore(searchContainer, periodicTable);

searchButton.addEventListener("click", () => {
    const atomicNumber = parseInt(searchInput.value);
    if (isNaN(atomicNumber) || atomicNumber < 1 || atomicNumber > 118) {
        alert("Please enter a valid element number (1–118).");
        return;
    }

    // Recreate the mapping used in setupElement to find the correct ID
    let foundId = null;
    for (let i = 0; i < 118; i++) {
        const trueI = ((i >= 57 && i <= 71) ? i + 15 :
                      (i >= 72 && i <= 74) ? i + 15  :
                      (i >= 75 && i <= 89) ? i + 29 :
                      (i >= 90 && i <= 103) ? i - 32 :
                      (i >= 104 && i <= 117) ? i - 14 : i + 1);
        if (trueI === atomicNumber) {
            foundId = `element${i}`;
            break;
        }
    }

    if (foundId) {
        const button = document.getElementById(foundId);
        button.scrollIntoView({ behavior: "smooth", block: "center" });
        button.style.backgroundColor = "yellow";
        setTimeout(() => button.style.backgroundColor = "", 1500);
    } else {
        alert("Element not found.");
    }
});

// wehnevre the user clicks on the screen, the menu will be hidden
document.onclick = hideMenu;
//when the user right clicks, the righclick function will be called
    document.oncontextmenu = rightClick;
    //hides the contextmenu
    function hideMenu() {
        document.getElementById(
            "contextMenu").style.display = "none"
    }
    // function that handles the right click event, the default brwoser context menu is preveneted
    // from showing and if hides the custom context menu if it is already open
    function rightClick(e) {
        e.preventDefault();

        if (document.getElementById(
            "contextMenu").style.display == "block")
            hideMenu();
        else {
            //if not visble, it will be shown and perform an action
            let menu = document
                .getElementById("contextMenu")
            // coffee varibale is incremeneted and user is alerted
            coffee ++
            window.alert("Plus one to coffee added")
            window.alert(`${coffee}`)
                
        }
    }