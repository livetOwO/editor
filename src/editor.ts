class EditorBlock extends HTMLDivElement {
	constructor() {
		super();
		this.classList.add('block');
	}

	connectedCallback() {
		this.setAttribute('contentEditable', 'true');
		this.addEventListener('keydown', this.onKeyDown);
		this.addEventListener('keypress', this.onKeyPress);
	}

	newLine() {
		const line = new EditorBlock();
		this.after(line);
		line.focus();

		return this;
	}

	onKeyDown(e: KeyboardEvent) {
		if (e.key === 'ArrowUp' && this.previousElementSibling instanceof EditorBlock) {
			this.previousElementSibling?.focus();
		}

		if (e.key === 'ArrowDown' && this.nextElementSibling instanceof EditorBlock) {
			this.nextElementSibling?.focus();
		}
	}

	onKeyPress(e: KeyboardEvent) {
		if (!e.shiftKey && e.key === 'Enter') {
			e.preventDefault();
			this.newLine();
		}
	}
}

window.customElements.define('editor-block', EditorBlock, { extends: 'div' });

function initEditor(element: HTMLElement) {
	element.dataset.editor = "true";
	element.classList.add('editor-theme-default');

	const line = new EditorBlock();

	element.appendChild(line);
	

	return element;
}
