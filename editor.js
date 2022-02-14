function createRow() {
	const element = document.createElement('div');
	element.contentEditable = true;

	element.addEventListener('keypress', function (e) {
		if (!e.shiftKey && e.key === 'Enter') {
			e.preventDefault();
			this.newLine();
		}
	});

	element.newLine = function () {
		const line = createRow();
		this.after(line);
		line.focus();
	}

	return element;
}

function initEditor(element) {
	element.dataset.editor = true;
	element.classList.add('editor-theme-default');

	element.appendChild(createRow());

	return element;
}
