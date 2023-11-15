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