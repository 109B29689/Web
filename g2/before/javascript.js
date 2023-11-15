
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
