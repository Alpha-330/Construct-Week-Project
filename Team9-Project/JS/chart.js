const ctx = document.getElementById('barchart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Task_1 01 Oct', 'Task_2 02 Oct', 'Task_3 01 Oct', 'Task_4 01 Oct', 'Task_5 01 Oct', 'Task_6 01 Oct'],
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


  const ctx2 = document.getElementById('doughnut');

  new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['Task_1 01 Oct', 'Task_2 02 Oct', 'Task_3 06 Oct', 'Task_4 05 Oct', 'Task_5 03 Oct', 'Task_6 10 Oct'],
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


