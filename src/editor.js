"use strict";
class EditorRow extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.setAttribute('contentEditable', 'true');
        this.addEventListener('keydown', this.onKeyDown);
        this.addEventListener('keypress', this.onKeyPress);
    }
    newLine() {
        const line = new EditorRow();
        this.after(line);
        line.focus();
        return this;
    }
    onKeyDown(e) {
        var _a, _b;
        if (e.key === 'ArrowUp' && this.previousElementSibling instanceof EditorRow) {
            (_a = this.previousElementSibling) === null || _a === void 0 ? void 0 : _a.focus();
        }
        if (e.key === 'ArrowDown' && this.nextElementSibling instanceof EditorRow) {
            (_b = this.nextElementSibling) === null || _b === void 0 ? void 0 : _b.focus();
        }
    }
    onKeyPress(e) {
        if (!e.shiftKey && e.key === 'Enter') {
            e.preventDefault();
            this.newLine();
        }
    }
}
window.customElements.define('editor-row', EditorRow);
function initEditor(element) {
    element.dataset.editor = "true";
    element.classList.add('editor-theme-default');
    const line = document.createElement('editor-row');
    element.appendChild(line);
    return element;
}
