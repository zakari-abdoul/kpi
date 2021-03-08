function getColors(color, tab){
    var liste = []
    for (let index = 0; index < tab.length; index++) {
        liste.push(color)
    }
    return liste
}

function initAttempsLine(labels, data, color){
    if(myLine != null){
        myLine.destroy();
    }
    myLine = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Courbe LU',
                fill: false,
                borderColor: color,
                backgroundColor: color,
                data: data
            }]
        },
        options: defaultOptions
    });
}
function initAttempsCourbe(labels, data, color) {
    if(myChart != null){
        myChart.destroy();
    }
    myChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Tentative',
                data: data,
                backgroundColor: getColors(color,data),
                borderColor: getColors(color,data),
                borderWidth: 1
            }]
        },
        options: defaultOptions
    });
}

function initPie(tab){
    if(myPieChart != null){
        myPieChart.destroy();
    }
    myPieChart = new Chart(ctx1donut, {
        type: 'pie',
        data: tab,
        data: {
            datasets: [{
                data: tab,
                backgroundColor: [
                    '#F76304', 
                    '#17a2b8', 
                    '#ffc107', 
                    '#28a745', 
                ],
                borderColor: [
                    '#F76304', 
                    '#17a2b8', 
                    '#ffc107', 
                    '#28a745', 
                ],
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [ 'SAI', 'LU', 'BEARER','PDP']
        }
    });
}

//diagramme bar par pays
// function initpaysBar(labels, data) {
//     mixedChart = new Chart(paysBar, {
//         type: 'bar',
//         data: {
//             datasets: [{
//                 label: 'Tentative',
//                 backgroundColor: '#F76304',
//                 borderColor: 'white',
//                 data: [randomScalingFactor(), randomScalingFactor(), 97, randomScalingFactor(), 
//                 randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), 
//                 randomScalingFactor(), randomScalingFactor(),randomScalingFactor(),  ],
//                 yAxisID: 'y',
//                 borderWidth: 1
//             }],
//             labels: ['Mali', 'Burkina Faso', 'Niger', 'Bissau', 'Maroc', 'Conakry', 'Algerie', 'Tunisie', 'Ghana', 'Gambie'],
//         },
//         options: {
//             responsive: true,
//             title: {
//                 display: true,
//                 text: 'KPI'
//             },
//             tooltips: {
//                 mode: 'index',
//                 intersect: true
//             },
//             scales: {
//                 y: {
//                     type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
//                     display: true,
//                     position: 'left',
//                 },
//             }
//         }
//     });
// }