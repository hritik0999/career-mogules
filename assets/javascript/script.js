const body = document.getElementsByTagName('body')[0];
const fontSize = document.getElementsByClassName('second');
// onclicking the search bar
const SearchIcon = document.getElementById('search');
const cutIcon = document.getElementById('cut');
const searchIconDiv = document.getElementById('search-icon');
const header = document.getElementById('desktop-view-header');
const searchBox = document.getElementById('text-box');
const mobileViewHeader = document.getElementById('mobile-view-header');
const bannerImageDiv = document.getElementById('banner');
const tilesDiv = document.getElementById('tiles');
const visionDiv = document.getElementById('vision');
const footerDiv = document.getElementById('footer');
const cutMobile = document.getElementById('cut-mobile');
const hamburgerMobile = document.getElementById('hambuger-mobile');
const mobileViewMenu = document.getElementById('menu-mobile-view');
//clicking to search icon
//globlly performing operation
mobileViewHeader.style.display = 'none';
mobileViewMenu.style.display = 'none';
cutMobile.style.display = 'none';
//onclicking the input tag
const inputClick = () => {
    const ourBodyWidth = body.clientWidth;
    if (ourBodyWidth < 1214) {
        for (i = 0; i <= 6; i++) {
            document.getElementsByClassName('redirection')[i].style.fontSize = '8px';
        }
    }
    if (ourBodyWidth == 1024) {
        for (i = 0; i <= 6; i++) {
            document.getElementsByClassName('redirection')[i].style.fontSize = '11px';
        }
    }
    cutIcon.style.display = 'block';
    SearchIcon.style.display = 'none';
    searchBox.style.width = '151px';
}
SearchIcon.addEventListener('click', inputClick);
//clicking to cut icon
cutIcon.addEventListener('click', () => {
    SearchIcon.style.display = 'block';
    cutIcon.style.display = 'none';
    searchIconDiv.style.display = 'block';
    searchBox.style.width = '50px';
    searchBox.value = '';
});
//for handling operations after resize
const changeSize = () => {
    const bodyWidth = body.clientWidth;
    if (bodyWidth <= 998) {
        for (i = 0; i <= 6; i++) {
            document.getElementsByClassName('redirection')[i].style.fontSize = '11px';
        }
    }
    if (bodyWidth <= 768) {
        header.style.display = 'none';
        // bannerImageDiv.style.display='none';
        // tilesDiv.style.display='none';
        // visionDiv.style.display='none';
        // footerDiv.style.display='none';
        mobileViewHeader.style.display = 'block';
    } else {
        mobileViewHeader.style.display = 'none';
        header.style.display = 'block';
    }
    if (bodyWidth > 895) {
        header.style.display = '';
        header.removeAttribute('style');
    }
    if (bodyWidth == 1024) {
        for (i = 0; i <= 6; i++) {
            document.getElementsByClassName('redirection')[i].style.fontSize = '12px';
        }
    }
    if (bodyWidth >= 1324) {
        for (i = 0; i <= 6; i++) {
            document.getElementsByClassName('redirection')[i].style.fontSize = '18px';
        }
    }
}
hamburgerMobile.addEventListener('click', () => {
    mobileViewMenu.style.display = 'block';
    hamburgerMobile.style.display = 'none';
    cutMobile.style.display = 'block';
    bannerImageDiv.style.display = 'none';
    tilesDiv.style.display = 'none';
    visionDiv.style.display = 'none';
    footerDiv.style.display = 'none';
})
cutMobile.addEventListener('click', () => {
    mobileViewMenu.style.display = 'none';
    hamburgerMobile.style.display = 'block';
    cutMobile.style.display = 'none';
    bannerImageDiv.style.display = 'block';
    tilesDiv.style.display = 'block';
    visionDiv.style.display = 'block';
    footerDiv.style.display = 'block';
})