function createRow() {
	const element = document.createElement('div');
	element.contentEditable = true;

	return element;
}

function initEditor(element) {
	element.dataset.editor = true;
	element.classList.add('editor-theme-default');

	element.appendChild(createRow());

	return element;
}
