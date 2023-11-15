/*
const fillDivs = document.querySelectorAll('.fill');
const emptyDivs = document.querySelectorAll('.puzzle:not(.fill)');

let draggedDiv = null;

for (const fillDiv of fillDivs) {
    fillDiv.addEventListener('dragstart', dragStart);
    fillDiv.addEventListener('dragend', dragEnd);
}
for (const emptyDiv of emptyDivs) {
    emptyDiv.addEventListener('dragover', dragOver);
    emptyDiv.addEventListener('dragenter', dragEnter);
    emptyDiv.addEventListener('dragleave', dragLeave);
    emptyDiv.addEventListener('drop', drop);
}

function dragStart() {
    draggedDiv = this;
    setTimeout(() => {
    this.classList.add('hold');
    }, 0);
}

function dragEnd() {
    draggedDiv = null;
    this.classList.remove('hold');
}

function dragOver(event) {
    event.preventDefault();
}

function dragEnter(event) {
    event.preventDefault();
    this.classList.add('hovered');
}

function dragLeave() {
    this.classList.remove('hovered');
}

function drop() {
    if (this.classList.contains('fill')) return;
    this.append(draggedDiv);
    this.classList.remove('hovered');
}
*/
$(document).ready(function() {
  $('.fill').on('dragstart', dragStart);
  $('.fill').on('dragend', dragEnd);
  $('.puzzle:not(.fill)').on('dragover', dragOver);
  $('.puzzle:not(.fill)').on('dragenter', dragEnter);
  $('.puzzle:not(.fill)').on('dragleave', dragLeave);
  $('.puzzle:not(.fill)').on('drop', drop);
});

function dragStart(event) {
  const holdTimeout = setTimeout(function() {
    $(this).addClass('hold');
  }, 0);
  draggedDiv = this;
  return false;
}

function dragEnd(event) {
  draggedDiv = null;
  $(this).removeClass('hold');
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.preventDefault();
  $(this).addClass('hovered');
}

function dragLeave(event) {
  $(this).removeClass('hovered');
}

function drop(event) {
  if ($(this).hasClass('fill')) {
    return;
  }
  $(this).append(draggedDiv);
  $(this).removeClass('hovered');
}
