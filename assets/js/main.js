/*===MENU SHOW======*/

const showMenu = (toogleId,navId)=>{
	const toogle = document.getElementById(toogleId),
		  nav= document.getElementById(navId),
	if(toogle && nav){
	toogle.addEventListener('click',()=>{
		nav.classList.toogle('show')
	})

	}
}

showMenu('nav-toggle','nav-menu')

/*===REMOVE MENU MOBILE======*/
cost navLink = document.querySelectorAll('.nav__link')
funtion linkAction(){
	//Active link
	navLink.forEach(n=>n.classList.remove('active'))
	this.classList.add('active')

	//Remove menu mobile

	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show')
}

navLink.forEach(n=>n.addEventListener('click',linkAction))