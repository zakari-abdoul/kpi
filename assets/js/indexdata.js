// Tentative 
var total = $('total');
var totalS = $('totalS');
var totalE = $('totalE');
var totalF = $('totalF');

// tentative par code
var pdpT = $('pdpT');
var saiT = $('saiT');
var luT = $('luT');
var bearerT = $('bearerT');
myPieData = []

$.getJSON(defaultAPI+"homestats/", function(res){
    console.log(res)
    $('#total').text(res.total);
    $('#totalS').text(res.totalOUT);
    $('#totalE').text(res.totalIN);
    $('#totalF').text(res.totalFailed);
    $('#bearerT').text(res.attempsbearerIN);
    $('#saiT').text(res.attempssaiIN);
    $('#pdpT').text(res.attempspdpIN);
    $('#pdpT').text(0);
    
    myPieData.push(res.attempssaiIN)
    myPieData.push(0) //Add Lu data to pie chart
    myPieData.push(res.attempsbearerIN)
    myPieData.push(res.attempspdpIN)

    initPie(myPieData);
//     attempsbearerIN: 0
// attempsbearerOUT: 1006
// attempspdpIN: 0
// attempspdpOUT: 0
// attempssaiIN: 4050640
// attempssaiOUT: 103543363
});