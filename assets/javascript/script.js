const body=document.getElementsByTagName('body')[0];
const fontSize=document.getElementsByClassName('second');
// onclicking the search bar
const SearchIcon=document.getElementById('search');
const cutIcon=document.getElementById('cut');
const searchIconDiv=document.getElementById('search-icon');
const header=document.getElementsByTagName('header')[0];
const searchBox=document.getElementById('text-box');
//clicking to search icon
SearchIcon.addEventListener('click',()=>{
    const ourBodyWidth=body.clientWidth;
    if(ourBodyWidth<1214){
        for(i=0;i<=6;i++){
            document.getElementsByClassName('redirection')[i].style.fontSize='8px';
        }  
    }
    if(ourBodyWidth==1024){
        for(i=0;i<=6;i++){
            document.getElementsByClassName('redirection')[i].style.fontSize='11px';
        }  
    }
    cutIcon.style.display='block';
    SearchIcon.style.display='none';
    searchBox.style.width='151px';
});
//clicking to cut icon
cutIcon.addEventListener('click',()=>{
    SearchIcon.style.display='block';
    cutIcon.style.display='none';
    searchIconDiv.style.display='block';
    searchBox.style.width='50px';
});
//for handling operations after resize
const changeSize=()=>{
    const bodyWidth=body.clientWidth;
    if(bodyWidth<=998){
        for(i=0;i<=6;i++){
            document.getElementsByClassName('redirection')[i].style.fontSize='11px';
        }
    }
    if(bodyWidth<=768){
        header.style.display='none';
    }
    if(bodyWidth>895){
        header.style.display='';
        header.removeAttribute('style');
    }
    if(bodyWidth==1024){
        for(i=0;i<=6;i++){
            document.getElementsByClassName('redirection')[i].style.fontSize='12px';
        }
    }
    if(bodyWidth>=1324){
        for(i=0;i<=6;i++){
            document.getElementsByClassName('redirection')[i].style.fontSize='18px';
        }
    }
}