'use strict';

const list = Array.from(document.querySelectorAll('li'));

const parseToNumber = (string) => +string.replace(/[^0-9.-]+/g, '');

const sortList = function (elements) {
  const sortedList = list.sort(
    (a, b) => parseToNumber(b.dataset.salary) - parseToNumber(a.dataset.salary),
  );

  const ul = document.querySelector('ul');

  sortedList.forEach((el) => ul.appendChild(el));
};
const getEmployees = (elements) => {
  const rightObjects = [];

  list.map((el) => {
    rightObjects.push({
      name: el.textContent.trim(),
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    });
  });

  return rightObjects;
};

sortList(list);
getEmployees(list);
