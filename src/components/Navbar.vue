<template lang="">
    <div>
        <div class="nav-logo justify-content-center p-4">
            <div class="logo-content text-black"><h3>Logo Team</h3></div>
            <div class="icon" id="menu"><i class="fas fa-bars" id="toggler"></i></div>  
        </div>  
        <header id="main">
            <nav id="navbar">
                <ul id="links">
                    <li><a href="#">home</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">portfolio</a></li>
                    <li><a href="#">design</a></li>
                    <li><a href="#">contact us</a></li>
                </ul>
            </nav>

            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
        </header>
    </div>
</template>

<script>
export default {
    mounted () {
        const icon = document.getElementById('toggler');
const nav = document.getElementById('navbar');
// functions
nav.style.display = 'none';
const showNav = (e) => {
    e.target.parentElement.classList.toggle('change-backGround');
    e.target.classList.toggle('clicked');
    //setTimeout ==> because when i display:none for elements not animated so i delay it to be smooth
    e.target.classList.contains('clicked') ? (nav.style.cssText = 'dispaly: flex;', setTimeout(() => nav.style.transform = 'translateY(0)', 300)) : (nav.style.transform = 'translateY(-100%)', setTimeout(() => nav.style.display = 'none', 700));
}
//events 
icon.addEventListener('click', showNav);
    }
}
</script>

<style lang="">
    
</style>