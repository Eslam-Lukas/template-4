let searchI = document.querySelector('.fa-solid.fa-search'),
	inpSearch = document.querySelector('.search>input');
searchI.addEventListener('click', () => {
	inpSearch.style.zIndex = 1;

	inpSearch.classList.toggle('show');
	inpSearch.focus();
});

inpSearch.onblur = () => {
	bars.style.display === 'block'
		? setTimeout(() => {
				nav.style.display = 'none';
		  }, 5000)
		: setTimeout(() => {
				inpSearch.classList.toggle('show');
		  }, 3000);
};
let bars = document.getElementById('navicon'),
	nav = document.getElementById('nav-link');
bars.addEventListener('click', () => {
	nav.classList.toggle('show');
});
nav.onmouseleave = () => {
	bars.style.display === ''
		? setTimeout(() => {
				nav.classList.toggle('show');
		  }, 5000)
		: '';
};
let scrool = document.createElement('button'),
	icon = document.createElement('i');
scrool.classList.add('scrool');
icon.className = 'fa-solid fa-arrow-up';
scrool.style.cssText = `
position: sticky;
bottom: 50px;
left: 89%;
width: 50px;
height: 50px;
border-radius: 50%;
font-size: 35px;
outline: none;
border: none;
background: var(--main-color);
color: white;
display:none;
`;
scrool.appendChild(icon);
document.body.appendChild(scrool);
window.onscroll = () => {
	if (window.scrollY > 1000) {
		scrool.style.display = 'block';
	} else {
		scrool.style.display = 'none';
	}
};
scrool.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});
