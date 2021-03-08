//variable
var date= null;
var x = 0
var y = 0

let pays = $('#pays').val()
let op = $('#op').val()
let opcode = $('#opcode').val()
let = new Date($('#datepicker').val()+' '+$('#timepicker').val()).getHours();
y = new Date($('#datepicker').val()+' '+$('#timepicker2').val()).getHours();


// axios.get(defaultAPI+"countries/")
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });


  // fetch(defaultAPI+"countries/",{
  //   //mode: 'no-cors',
  //   //credentials: 'include',
  //   method: 'GET',
  //   //headers: headers
  // })
  // .then(response => console.log(response.body))
  // //.then(response => response.data.json())
  // .then(json => {
  //   // console.log(json);
  //   console.log(json);
  // });

$.getJSON(defaultAPI+"countries/", function(res){
    console.log(res.data)
    $.each(res.data, function(index, value){
        //ajouter ligne
        //ajouter cellules
        $('#pays').append($("<option></option>")
                    .attr("value", value)
                    .text(value.nom));
    });
});
			
