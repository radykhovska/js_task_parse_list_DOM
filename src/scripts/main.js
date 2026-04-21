'use strict';

const list = Array.from(document.querySelectorAll('li'));

const parseToNumber = (string) => +string.replace(/[^0-9.-]+/g, '');

const sortList = (elements) => {
  const sortedList = [...elements].sort(
    (a, b) => parseToNumber(b.dataset.salary) - parseToNumber(a.dataset.salary),
  );

  const ul = document.querySelector('ul');

  sortedList.forEach((el) => ul.appendChild(el));
};

const getEmployees = (elements) => {
  return elements.map((el) => {
    const { position, salary, age } = el.dataset;

    return {
      name: el.textContent.trim(),
      position,
      salary: parseToNumber(salary),
      age,
    };
  });
};

sortList(list);
getEmployees(list);
