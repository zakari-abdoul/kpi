//variable
var date= null;
var x = 0
var y = 0

let pays = $('#pays').val()
let op = $('#op').val()
let opcode = $('#opcode').val()
let = new Date($('#datepicker').val()+' '+$('#timepicker').val()).getHours();
y = new Date($('#datepicker').val()+' '+$('#timepicker2').val()).getHours();



$.getJSON("https://restcountries.eu/rest/v2/all", function(data){
    console.log(data)
    $.each(data, function(index, value){
        //ajouter ligne
        //ajouter cellules			
        //$('#op').append('<option value = " ' + value.name + ' ">' + value.name + '</option value = "">');
        
        $('#pays').append($("<option></option>")
                    .attr("value", value.name)
                    .text(value.name));
    });
});
			
