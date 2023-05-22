function calcularPrecio() {
  // Obtener valores del formulario
  let zonasPSR = parseFloat(document.getElementById("zonasPSR").value);
  let tipoEntrada = document.getElementById("tipoEntrada").value;

  
  // Definir precio por metro cuadrado y factor de nivel de detalle
  let precioZonas;
  let precioZonas2;
  switch (tipoEntrada) 
  {
      case "largo":
          precioZonas= 5;

           // Calcular Precio de Entrada1
            let precioEntrada1 = zonasPSR + precioZonas;
            let Stoploss1 = precioEntrada1 - 40; 
            let Takeprofit1 = precioEntrada1 + 25;

           // Calcular Precio de Entrada2

           let precioEntrada2 = precioEntrada1 - 10;
           let Stoploss2 = precioEntrada2 - 40; 
           let Takeprofit2 = precioEntrada2 + 50;

           // Calcular Precio de Entrada3

           let precioEntrada3 = precioEntrada2 - 10;
           let Stoploss3 = precioEntrada3 - 40; 

            // Mostrar resultados en la página
             let resultado = document.getElementById("resultado");
             resultado.innerHTML = "EN LARGO" + "<br>" + "<br>" + "PRECIO ENTRADA # 1: " + precioEntrada1.toFixed(0) + " " + "SL: " + Stoploss1.toFixed(0) + " " + "TP: " + Takeprofit1.toFixed(0) + "<br>" + "<br>" + "PRECIO ENTRADA # 2: " + precioEntrada2.toFixed(0) + " " + "SL: " + Stoploss2.toFixed(0) + " " + "TP: " + Takeprofit2.toFixed(0) + "<br>" + "<br>" + "PRECIO ENTRADA # 3: " + precioEntrada3.toFixed(0) + " " + "SL: " + Stoploss3.toFixed(0);

           break;


      case "corto":
          precioZonas2 = -5;

          // Calcular Precio de Entrada1
          let precioEntrada01 = zonasPSR + precioZonas2;
          let Stoploss01 = precioEntrada01 + 40; 
          let Takeprofit01 = precioEntrada01 - 25;

         // Calcular Precio de Entrada2

         let precioEntrada02 = precioEntrada01 + 10;
         let Stoploss02 = precioEntrada02 + 40; 
         let Takeprofit02 = precioEntrada02 - 50;

         // Calcular Precio de Entrada3

         let precioEntrada03 = precioEntrada02 + 10;
         let Stoploss03 = precioEntrada03 + 40; 

          // Mostrar resultados en la página
          let resultado2 = document.getElementById("resultado");
          resultado2.innerHTML = "EN CORTO" + "<br>" + "<br>" + "PRECIO ENTRADA # 1: " + precioEntrada01.toFixed(0) + " " + "SL: " + Stoploss01.toFixed(0) + " " + "TP: " + Takeprofit01.toFixed(0) + "<br>" + "<br>" + "PRECIO ENTRADA # 2: " + precioEntrada02.toFixed(0) + " " + "SL: " + Stoploss02.toFixed(0) + " " + "TP: " + Takeprofit02.toFixed(0) + "<br>" + "<br>" + "PRECIO ENTRADA # 3: " + precioEntrada03.toFixed(0) + " " + "SL: " + Stoploss03.toFixed(0);

      
          break;
  }
  
}
