const initLogoHome = () => {
  let logos = document.querySelectorAll(".right-logo");
  let borderRight = document.getElementById("scroll-border-right");
  let borderLeft = document.getElementById("scroll-border-left");
  if(logos){
    let margin = 120;
    logos.forEach(function(logo){
      logo.style.marginTop = `${margin}px`
      margin+=70
    });
  };
  if(borderRight && borderLeft){
    borderRight.style.borderRight = "3px solid black";
    borderLeft.style.borderLeft = "3px solid black";
  };
}

export { initLogoHome };
