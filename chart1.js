const ctx = document.getElementById('barchart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['0.4:47 01 Oct', '06:00 02 Oct', '0.80:00 01 Oct', '09:00 01 Oct', '10:00 01 Oct', '12.23: 01 Oct'],
      datasets: [{
        label: 'TaskView by Users ',
        data: [12, 19, 3, 5, 2, 3],
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