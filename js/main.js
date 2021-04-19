$( document ).ready(function() {

var $persons = $('.my-panel');
var $results = $('.results');
var $counter=0;

      $.ajax({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users',
        success: function(data){
            $.each(data,function(i, person){
                $counter++;
                
                $persons.append(
                    '<div class="mb-5 col-sm-6 col-md-4 col-lg-3 "><div class="card border-primary h-100"><div class="card-body"><h2 class="card-title">'+person.name+'</h2><br><p>Address:</p><p class="card-text font-weight-bold">'+person.address.street+' '+person.address.suite+'<br>'+person.address.city+' '+person.address.zipcode+'</p></div><div class="card-footer text-right"><button href="#" class="card-link btn btn-outline-primary"><i class="fa fa-trash" aria-hidden="true"></i> Delete</button></div></div></div>'
                )
            });
            $results.append('<h1>Showing '+$counter+' Records ' );
        }
        
      });
    

      $('.my-panel').on('click', 'button', function() {
        if (confirm('Are you sure you want to delete the selected record')) {
            $(this).prev('span.text').remove();
        }

        $(this).closest('.card').parent('div').hide();
        $counter--;
        $results.empty().append('<h1>Showing '+$counter+' Records ' );
        $( "#appAlert" ).append('<div class="col-sm-12 alert alert-success alert-dismissible fade show" data-alert="alert">Person card was successfully deleted<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
        
        setTimeout(function() {
            $("#appAlert").empty();
        }, 2000);
    });


      

      });




