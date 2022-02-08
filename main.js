// $('#equal').on('click', () => {

// })




$(".num").click(function() {
    let number = (this.id); // or alert($(this).attr('id'));
    $(".ans").append(number)
});