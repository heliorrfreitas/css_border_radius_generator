var borderRadius = "0px";


function setBorderRadius(){
    let topLeft = document.getElementById('borderRadiusTopLeft').value;
    let topRight = document.getElementById('borderRadiusTopRight').value;
    let bottomRight = document.getElementById('borderRadiusBottomRight').value;
    let bottomLeft = document.getElementById('borderRadiusBottomLeft').value;

    borderRadius = topLeft + "px " + topRight + "px " + bottomRight + "px " + bottomLeft + "px" ;
}

function setCircleModelBorderRadius(){        
    document.getElementById('circleModel').style.borderRadius = borderRadius;
}

function setCssResult(){
    document.getElementById('cssResult').value = "border-radius: " + borderRadius;
}

function changeBorderRadius(){
    setBorderRadius();     
    setCircleModelBorderRadius();
    setCssResult();
}

function copyCss() {
    let css = document.getElementById("cssResult");
    css.select();
    css.setSelectionRange(0, 99999);
    document.execCommand("copy");
}