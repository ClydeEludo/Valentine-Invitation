

//-----------------------------------------------
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  document.addEventListener('wheel', function(event) {
    event.preventDefault();
}, { passive: false });


document.getElementById("yesID").addEventListener("click", function() {
    document.querySelector('.panel').style.display = 'block';
});

document.getElementById("noID").addEventListener("click", function() {
    document.querySelector('.first-panel').style.display = 'none';
    document.querySelector('.second-panel').style.display = 'block';
    
});

document.getElementById("goBackID").addEventListener("click", function() {
    document.querySelector('.first-panel').style.display = 'block';
    document.querySelector('.second-panel').style.display = 'none';
    
});


