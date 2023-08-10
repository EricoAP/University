function mudarCorR() {
    var body = document.querySelector('body');
    var temperatura = parseFloat(document.getElementById('temperaturaR').value);
  
    var red, green, blue, alpha;
  
    if (temperatura >= 0) {
      red = 255;
      green = 0;
      blue = 0;
      alpha = 0.5;
    } else {
      red = 255 + temperatura;
      green = 0 - temperatura;
      blue = 0 - temperatura;
      alpha = 0.8;
    }
  
    body.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }
  
  function mudarCorG() {
    var body = document.querySelector('body');
    var temperatura = parseFloat(document.getElementById('temperaturaG').value);
  
    var red, green, blue, alpha;
  
    if (temperatura >= 0) {
      red = 0;
      green = 255;
      blue = 0;
      alpha = 0.5;
    } else {
      red = 0 - temperatura;
      green = 255 + temperatura;
      blue = 0 - temperatura;
      alpha = 0.8;
    }
  
    body.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }
  
  function mudarCorB() {
    var body = document.querySelector('body');
    var temperatura = parseFloat(document.getElementById('temperaturaB').value);
  
    var red, green, blue, alpha;
  
    if (temperatura >= 0) {
      red = 0;
      green = 0;
      blue = 255;
      alpha = 0.5;
    } else {
      red = 0 - temperatura;
      green = 0 - temperatura;
      blue = 255 + temperatura;
      alpha = 0.8;
    }
  
    body.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }
