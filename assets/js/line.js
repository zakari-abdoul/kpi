var canvas = document.getElementById('lineChart');
var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            data: [0, 30, 20, 70, 05, 10, 100],
            fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderWidth: 3,
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'round',
          borderJoinStyle: 'round',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 3,
          pointHitRadius: 20,
          pointStyle: 'circle',
        }
    ]
};

var myBarChart = Chart.Line(canvas,{
	data:data,
  options:{}
});