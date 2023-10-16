class Nav extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
    <nav class="top-nav">
    <ul class="nav-link-list">
      <li><a href="">Home</a></li>
      <li><a href="./pages/aboutBlindness.html">About blindness</a></li>
      <li><a href="">Blindness questions</a></li>
      <li><a href="">Tools for the blind</a></li>
      <li><a href="">Resources for the blind</a></li>
    </ul>
  </nav>`;
	}
}

customElements.define("be-top-nav", Nav);
