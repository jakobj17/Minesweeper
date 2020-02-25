

var url = 'https://veff213-minesweeper.herokuapp.com';

var numCols = undefined;
var numRows = undefined;
var numMines = undefined;
var minePositions = undefined;
var dataGenerated = undefined;
var container = document.getElementById("container");
let tableRows = document.getElementsByClassName("rows");




function doAjax() {
            //Prepare the parameter value for 'myParam'
            var rowValue = document.getElementById('numberOfRows').value;
            var colsValue = document.getElementById('numberOfCols').value;
            var mineValue = document.getElementById('numberOfMines').value;

            //The URL to which we will send the request
            var url = 'https://veff213-minesweeper.herokuapp.com/api/v1/minesweeper';

            //Perform an AJAX POST request to the url, and set the param 'myParam' in the request body to paramValue
            axios.post(url, { rows: rowValue, cols:colsValue, mines:mineValue})
                .then(function (response) {
                    //When successful, print 'Success: ' and the received data
                    console.log("Success: ", response.data);
                    numCols = response.data.board.cols;
                    console.log("Number of columns:",numCols);
                    numRows = response.data.board.rows;
                    console.log("Number of rows:",numRows);
                    numMines = response.data.board.mines;
                    console.log("Number of mines:",numMines);

                    createGrid(numRows,numCols);
                })
                .catch(function (error) {
                    //When unsuccessful, print the error.
                    console.log(error);
                })
                .then(function () {
                    // This code is always executed, independent of whether the request succeeds or fails.
                });}

function createGrid(cols,rows){
    createRows(cols);
    createColumns(rows);}

function createRows(rows) {
    for (i = 0; i < rows; i++) {
        var newDiv = document.createElement("DIV");
        document.body.appendChild(newDiv).className="rows";
    }}

function createColumns(cellNum) {
    for (i = 0; i < tableRows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            var newDiv = document.createElement("DIV");
            tableRows[i].appendChild(newDiv).className="square"
        }}}







   /* for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {}
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };
    var newDiv = document.createElement("DIV");
    newDiv.innerHTML = "";
    document.body.appendChild(newDiv).className="cell"}*/

