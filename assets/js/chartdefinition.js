var mixedChart = null
var paysLineChart = null
var myPieChart = null // code pie chart
var myChart = null // courbe evolution temtative par code
//var paysBar = document.getElementById('paysBar').getContext('2d');
//var paysLine = document.getElementById('paysLine').getContext('2d');
var myLine = null
var ctxBar = document.getElementById('myChart').getContext('2d');
var ctxLine = document.getElementById('myLine').getContext('2d');
var ctx1donut = document.getElementById('myDonut').getContext('2d');


dataPays =[randomScalingFactor(), randomScalingFactor(), 97, randomScalingFactor(), 
    randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), 
    randomScalingFactor(), randomScalingFactor(),randomScalingFactor(),  ],
labelsPays = ['Mali', 'Burkina Faso', 'Niger', 'Bissau', 'Maroc', 'Conakry', 'Algerie', 'Tunisie', 'Ghana', 'Gambie']

labelsAttempsB= ['20', '21', '22', '23', '00', '01', '02', '03', '04', '05', '06', '07']

initPie([5,5,5,5])

//initpaysBar(labelsPays, dataPays)

initAttempsCourbe(labelsAttempsB, defaultData,"#F76304")
initAttempsLine(labelsAttempsB, defaultData,"#F76304")