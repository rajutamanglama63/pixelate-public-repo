// Your code here

// grabbing the table element our DOM i.e index.html
const table = document.querySelector(".our-table");

// creating makeRow function to make row of our table
const makeRow = () => {
  const tableRow = document.createElement("tr");
  const tableColmn = document.querySelector("#column-size-selector").value;

  for (let i = 0; i < tableColmn; i++) {
    const tableData = document.createElement("td");
    tableRow.appendChild(tableData);
  }

  table.appendChild(tableRow);
};

// providing access to user to add whatever number of row they want
const addRowBtn = document.querySelector("#add-row");

addRowBtn.addEventListener("click", function () {
  makeRow();
});

// colorizing the clicked element

let color = "yellow";

const selectBtnElement = document.querySelector("#color-selector");

selectBtnElement.addEventListener("change", function (e) {
  //   console.log(e.target.value);
  color = e.target.value;
});

const colorize = (e) => {
  targetedElement = e.target;
  //   console.log(targetedElement);

  if (targetedElement.className === color) {
    targetedElement.className = "";
  } else {
    targetedElement.className = color;
  }
};

table.addEventListener("mouseover", function (e) {
  if (e.target.tagName === "TD") {
    colorize(e);
  }
});
