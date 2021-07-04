const courses = [
  {
    courseName: "Complete Angular Course",
    price: "159",
  },
  {
    courseName: "Complete React Course",
    price: "199",
  },
  {
    courseName: "Complete Javascript Course",
    price: "59",
  },
  {
    courseName: "Complete Bootstrap Course",
    price: "99",
  },
];

const ulElement = document.querySelector(".list-group");

function getListItem() {
  ulElement.innerHTML = "";
  courses.forEach((course) => {
    const li = document.createElement("li");
    li.classList = "list-group-item";
    li.innerText = course.courseName;
    const span = document.createElement("span");
    span.classList = "float-right";
    span.innerText = `Rs.${course.price}`;
    li.appendChild(span);
    ulElement.appendChild(li);
  });
}
//getListItem();
window.addEventListener("load", getListItem);

const sortBtnLowToHigh = document.querySelector(".btn-success");

sortBtnLowToHigh.addEventListener("click", () => {
  courses.sort(function (a, b) {
    return a.price - b.price;
  });
  //console.log(courses);
  getListItem();
});

const sortBtnHighToLow = document.querySelector(".btn-primary");

sortBtnHighToLow.addEventListener("click", () => {
  courses.sort(function (a, b) {
    return b.price - a.price;
  });
  //console.log(courses);
  getListItem();
});
