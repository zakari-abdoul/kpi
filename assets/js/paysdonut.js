

var ctxdonut = document.getElementById('myDonut').getContext('2d');
var ctx1donut = document.getElementById('myDonut1').getContext('2d');
var ctx2donut = document.getElementById('myDonut2').getContext('2d');
var ctx3donut = document.getElementById('myDonut3').getContext('2d');
var myPieChart = new Chart(ctxdonut, {
    type: 'pie',
    data: [87, 125, 36, 50],
    data: {
        datasets: [{
            data: [87, 125, 36, 50], 
            backgroundColor: [
                '#F76304', 
                '#17a2b8', 
                '#ffc107', 
                '#2E9334', 
            ],
            borderColor: [
                '#F76304', 
                '#17a2b8', 
                '#ffc107', 
                '#2E9334', 
            ],
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [ 'SAI', 'LU', 'BEARER','PDP']
    }
});

var myPieChart2 = new Chart(ctx1donut, {
    type: 'doughnut',
    data: [87, 125],
    data: {
        datasets: [{
            data: [87, 125],
            backgroundColor: [
                '#F76304', 
                '#17a2b8', 
                '#ffc107', 
            ],
            borderColor: [
                '#F76304', 
                '#17a2b8', 
                '#ffc107', 
            ],
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [ 'IN', 'OUT']
    }
});

var myPieChart3 = new Chart(ctx2donut, {
    type: 'doughnut',
    data: [125, 44, 87],
    data: {
        datasets: [{
            data: [125, 87, 44],
            backgroundColor: [
                '#F76304', 
                '#17a2b8', 
                '#ffc107', 
            ],
            borderColor: [
                '#F76304', 
                '#17a2b8', 
                '#ffc107', 
            ],
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [ 'Sonatel', 'Tigo', 'Free']
    }
});

var myPieChart4 = new Chart(ctx3donut, {
    type: 'pie',
    data: [0.9, 0.1],
    data: {
        datasets: [{
            data: [80.9, 0.1],
            backgroundColor: [
                '#F76304', 
                '#17a2b8', 
                '#ffc107', 
            ],
            borderColor: [
                '#F76304', 
                '#17a2b8', 
                '#ffc107', 
            ],
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [ 'Efficacite', 'Erreur']
    }
});