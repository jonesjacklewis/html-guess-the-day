function toggleDarkMode(){

  currentStylePath = document.getElementById("stylesheet").href.split("/");
  currentStyleSheet = currentStylePath[currentStylePath.length - 1];
  newStylePath = currentStylePath.slice(0,[currentStylePath.length - 1]);
  if(document.getElementById("darkModeSwitch").checked){
    newStylePath.push("darkStyle.css");
    document.getElementById("stylesheet").href = newStylePath.join("/");
  }else{
    newStylePath.push("lightStyle.css");
    document.getElementById("stylesheet").href = newStylePath.join("/");
  }

  currentStylePath = document.getElementById("stylesheet").href.split("/");
  currentStyleSheet = currentStylePath[currentStylePath.length - 1];

  if(currentStyleSheet == "darkStyle.css"){
    document.getElementById("darkModeSwitch").checked = true;
  }else{
    document.getElementById("darkModeSwitch").checked = false;
  }



  localStorage.setItem("style",newStylePath.join("/"));
}


function rememberSheet(){
  if(localStorage.getItem("style") == null){
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    
    if(prefersDarkScheme.matches()){
      newStylePath.push("darkStyle.css");
      document.getElementById("stylesheet").href = newStylePath.join("/");
    }else{
      newStylePath.push("lightStyle.css");
      document.getElementById("stylesheet").href = newStylePath.join("/");
    }
    localStorage.setItem("style",newStylePath.join("/"));
  }else{
    document.getElementById("stylesheet").href = localStorage.getItem("style");
  }
  currentStylePath = document.getElementById("stylesheet").href.split("/");
  currentStyleSheet = currentStylePath[currentStylePath.length - 1];

  if(currentStyleSheet == "darkStyle.css"){
    document.getElementById("darkModeSwitch").checked = true;
  }else{
    document.getElementById("darkModeSwitch").checked = false;
  }
}