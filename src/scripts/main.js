'use strict';

const list = Array.from(document.querySelectorAll('li'));

const parseToNumber = (string) => +string.replace(/[^0-9.-]+/g, '');

const sortList = function (elements) {
  return list.sort(
    (a, b) => parseToNumber(b.dataset.salary) - parseToNumber(a.dataset.salary),
  );
};

const sortedList = sortList(list);

const ul = document.querySelector('ul');

sortedList.forEach((el) => ul.appendChild(el));
