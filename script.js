function actualizarDiasRestantes() {
    // Obtener el título que contiene la fecha objetivo
    const pageTitle =  document.getElementById('pageTitle').innerText;
      
    // Extraer la fecha de la cadena del título
    const objetivoDate = new Date(pageTitle.split(": ")[1]);
  
    // Obtener la fecha actual
    const currentDate = new Date();
  
    // Calcular la diferencia en milisegundos entre las dos fechas
    const timeDiff = objetivoDate - currentDate;
  
    // Calcular la cantidad de días
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  
    // Mostrar el resultado
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Faltan ${daysDiff} días para llegar a la carrera.`;
  }
  
  // Actualizar la cantidad de días cada segundo (puedes ajustar este valor según tus necesidades)
  setInterval(actualizarDiasRestantes, 1000);
  
  // Llamar a la función automáticamente al cargar la página
  actualizarDiasRestantes();

  
document.addEventListener("DOMContentLoaded", function() {
  // Datos de ejemplo (reemplaza con tus propios datos)
  var dias = ["Día 1", "Día 2", "Día 3", "Día 4"];
  var kmRecorridos = [5, 8, 12, 18];

  // Calcula el total de kilómetros recorridos cada día
  var totalKmPorDia = kmRecorridos.reduce(function(acc, km) {
      acc.push((acc.length > 0 ? acc[acc.length - 1] : 0) + km);
      return acc;
  }, []);

  // Configura y dibuja el gráfico
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: dias,
          datasets: [{
              label: 'Total de Kilómetros Recorridos',
              data: totalKmPorDia,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
});