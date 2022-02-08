// $('#equal').on('click', () => {

// })


$(".num").click(function() {
    let number = (this.id);
    $("#ans").val($("#ans").val() + number);



})

$(".symb").click(function() {
    let symbol = (this.id);
    $("#ans").val($("#ans").val() + symbol);
});

$('#equal').click(function() {
    let fname = $('.ans').val();
    alert(fname)

});