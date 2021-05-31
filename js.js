let dropdown = document.querySelector('.dropdown')

dropdown.addEventListener('click', (e) => {
    if (dropdown.classList.contains('closed'))
    {
        dropdown.classList.remove('closed')
    }
    else {
        dropdown.classList.add('closed')
    }
    
})



function load_home() {
    document.getElementById("container").innerHTML='<object type="text/html" data="aboutme.html" ></object>';
}
