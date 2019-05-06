// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function build(data) {
  tbody.html("");
  data.forEach((dataRow) => {
    // Append a row to the table body
    var row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}


//   data.forEach((sighting) =>{
//     var row = tbody.append("tr");
//     Object.values(sighting).forEach(value) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });
// };

var filter = d3.select("#filter-btn");

filter.on("click", function() {
  d3.event.preventDefault();

  var dateVal = d3.select("#datetime").property("value");
  console.log(dateVal);
  console.log(tableData);

  var filteredData = tableData.filter(tableData => tableData.datetime  === dateVal);
  build(filteredData);
});
build(tableData);
