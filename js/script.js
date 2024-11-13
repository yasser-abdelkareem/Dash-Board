// Data for Sold Products Chart
const soldProductsData = {
    labels: ['Monitor Stand', 'Conference Chair', 'Whiteboard Pen', 'Magnetic Board', 'Cabinet with Doors'],
    datasets: [
      {
        label: 'Subtotal',
        data: [50, 40, 30, 20, 60],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Quantity',
        data: [25, 20, 15, 10, 30],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      }
    ]
  };
  
  // Data for Categories Chart
  const categoriesData = {
    labels: ['Office Furniture'],
    datasets: [
      {
        label: 'Total Price',
        data: [6000],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  };
  
  // Configurations for Sold Products Chart
  const soldProductsConfig = {
    type: 'bar',
    data: soldProductsData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
      },
    },
  };
  
  // Configurations for Categories Chart
  const categoriesConfig = {
    type: 'bar',
    data: categoriesData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
      },
    },
  };
  
  // Render Charts
  window.onload = function() {
    const soldProductsChart = new Chart(
      document.getElementById('soldProductsChart'),
      soldProductsConfig
    );
  
    const categoriesChart = new Chart(
      document.getElementById('categoriesChart'),
      categoriesConfig
    );
  };
////////////////////////////////////////////
// Top Selling Days Chart
const ctx1 = document.getElementById('topSellingDaysChart').getContext('2d');
new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['10 Jun 2019', '18 Jun 2019', '25 Jun 2019', '26 Jun 2019'],
        datasets: [{
            label: 'Total',
            data: [4000, 1500, 0, 2000],
            borderColor: '#4A90E2',
            backgroundColor: 'rgba(74, 144, 226, 0.2)',
            fill: true
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Top 5 Selling Days'
            }
        }
    }
});

// Total Sales Per Week Chart
const ctx2 = document.getElementById('salesPerWeekChart').getContext('2d');
new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['W24 2019', 'W25 2019', 'W26 2019'],
        datasets: [{
            label: 'Total',
            data: [3500, 2000, 1000],
            backgroundColor: '#FF6F61'
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Total Sales Per Week'
            }
        }
    }
});

// Total Sales Per Year Chart
const ctx3 = document.getElementById('salesPerYearChart').getContext('2d');
new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['2019'],
        datasets: [{
            label: 'Total',
            data: [6500],
            backgroundColor: '#D81B60'
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Total Sales Per Year'
            }
        }
    }
});

// Total Sales Per Month Chart
const ctx4 = document.getElementById('salesPerMonthChart').getContext('2d');
new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['June 2019'],
        datasets: [{
            label: 'Total',
            data: [6500],
            backgroundColor: '#42A5F5'
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Total Sales Per Month'
            }
        }
    }
});
// Top 5 Employees Chart
const ctxEmployees = document.getElementById('employeesChart').getContext('2d');
new Chart(ctxEmployees, {
    type: 'doughnut',
    data: {
        labels: ['Mitchell Admin', 'Demo'],
        datasets: [{
            data: [50, 50],
            backgroundColor: ['#d4a44e', '#4e3b2e']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});

// Payment by Journal Chart
const ctxPayment = document.getElementById('paymentChart').getContext('2d');
new Chart(ctxPayment, {
    type: 'doughnut',
    data: {
        labels: ['Cash (USD)'],
        datasets: [{
            data: [100],
            backgroundColor: ['#e74c3c']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});

// Sales Per Location Chart
const ctxSales = document.getElementById('salesChart').getContext('2d');
new Chart(ctxSales, {
    type: 'doughnut',
    data: {
        labels: ['WH/Stock'],
        datasets: [{
            data: [100],
            backgroundColor: ['#3498db']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});