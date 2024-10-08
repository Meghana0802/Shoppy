$('.plus-cart').click(function() {
    console.log('Button clicked');
    var id = $(this).attr('pid').toString();
    var quantity = this.parentNode.children[2];
    $.ajax({
        type: 'GET',
        url: '/pluscart',
        data: {
            cart_id: id
        },
        success: function(data) {
            quantity.innerText = data.quantity;
            document.getElementById(`quantity${id}`).innerText = data.quantity;
            document.getElementById('amount_tt').innerText = data.amount;
            document.getElementById('totalamount').innerText = data.total;
        },
        error: function(xhr, status, error) {
            console.log(`Error: ${xhr.responseText}`);
        }
    });
});

$('.minus-cart').click(function() {
    console.log('Button clicked');
    var id = $(this).attr('pid').toString();
    var quantity = this.parentNode.children[2];
    $.ajax({
        type: 'GET',
        url: '/minuscart',
        data: {
            cart_id: id
        },
        success: function(data) {
            quantity.innerText = data.quantity;
            document.getElementById(`quantity${id}`).innerText = data.quantity;
            document.getElementById('amount_tt').innerText = data.amount;
            document.getElementById('totalamount').innerText = data.total;
        },
        error: function(xhr, status, error) {
            console.log(`Error: ${xhr.responseText}`);
        }
    });
});

$('.remove-cart').click(function(){
    
    var id = $(this).attr('pid').toString()

    var to_remove = this.parentNode.parentNode.parentNode.parentNode

    $.ajax({
        type: 'GET',
        url: '/removecart',
        data: {
            cart_id: id
        },

        success: function(data){
            document.getElementById('amount_tt').innerText = data.amount
            document.getElementById('totalamount').innerText = data.total
            to_remove.remove()
        }
    })


})