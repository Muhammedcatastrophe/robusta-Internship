/*start holding input elements with js*/
let width = document.getElementById("width_Input");
let height = document.getElementById("height_Input");
let colorPicker = document.getElementById("color_Input");
let myTable = document.getElementById("my-table");

let myBtn = document.getElementById("myBtn");
/*end holding input elements with js*/



myBtn.addEventListener("click", function (e) {

    deleteGrid();
    makeGrid(width.value, height.value);
    clear();

});


/*start makeGrid Function*/

let makeRow;

function makeGrid(w, h) {

    for (let x = 1; x <= w; x++)
     {
        let trs = document.createElement("tr"); // i've created tr element in html document using DOM propritey
        makeRow = myTable.appendChild(trs);

        for (let y = 1; y <= h; y++)
        {
            let cls = document.createElement("td"); // then created the desired columns using nested loop 
            let cell = makeRow.appendChild(cls);

            cell.addEventListener("click", function(event)
          {

            let myTarget= event.target; // to use event property (target) to detect the clicked cell(target)
            console.log(myTarget); // for testing my target
         
            myTarget.style.backgroundColor = colorPicker.value; /* for entering target's css and setting the desired color which will be equal to the input color value */
         
          });

        }
    }
}

/*end makeGrid Function*/


function clear() // for clearing input value 
{
    width.value = "";
    height.value = "";
}


function deleteGrid() // for deleting innerHtml data 
{
    myTable.innerHTML = "";
}





















// for (let x = 0; x < w; x++) {
//     trs += "<tr><td></td></tr>";

//     for (let y = 0; y < h; y++) {
//       cls += "<td></td";
//     }
//     console.log(w + " " + h)
// }

// myTable.innerHtml = trs;