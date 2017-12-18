export default class AppBar extends HTMLElement {

    static get observedAttributes() {
        return [];
    }

    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'open'});

        shadowRoot.innerHTML = `
            <style>
                #container {
                    display: grid;
                    grid-template-columns: 1fr 10fr 1fr;
                    padding: 15px;
                    background: var(--app-bar-background, #999999);
                }
                ::slotted([slot="left-content"]),
                ::slotted([slot="right-content"]) {
                    cursor: pointer;
                }
                ::slotted([slot="left-content"]) {
                    margin-right: 10px;
                }
                ::slotted([slot="right-content"]) {
                    margin-left: 10px;
                }
                .left-content {
                    grid-column: 1 / 2;
                }
                .middle-content {
                    grid-column: 2 / 3;
                }
                .right-content {
                    grid-column: 3 / 4;
                    display: flex;
                    justify-content: flex-end;
                }
            </style>
            
            <div id="container">
                <div class="left-content">
                    <slot name="left-content"></slot>
                </div>
                <div class="middle-content">
                    <slot name="title"></slot>
                </div>
                <div class="right-content">
                    <slot name="right-content"></slot>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        this.shadowRoot.querySelectorAll('[name$="icon"]').forEach(icon => {
            icon.addEventListener('click', ({target}) => {
                this.dispatchEvent(new CustomEvent('app-bar-clicked', {
                    detail: {target}
                }))
            });
        });
    }
}

customElements.define('app-bar', AppBar);