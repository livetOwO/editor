class EditorBlock extends HTMLDivElement {
	constructor() {
		super();
		this.classList.add('block');
	}

	get prevBlock(): EditorBlock | null {
		return this.previousElementSibling instanceof EditorBlock ? this.previousElementSibling : null;
	}

	get nextBlock(): EditorBlock | null {
		return this.nextElementSibling instanceof EditorBlock ? this.nextElementSibling : null;
	}

	connectedCallback() {
		this.innerHTML = '\n';
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
		if (e.key === 'ArrowUp') {
			this.prevBlock?.focus();
		}

		if (e.key === 'ArrowDown') {
			this.nextBlock?.focus();
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
	element.contentEditable = 'true';
	element.dataset.editor = "true";
	element.classList.add('editor-theme-default');

	const line = new EditorBlock();

	element.appendChild(line);
	

	return element;
}
