$('#submit').click(() =>
  $('#submit').addClass('clicked', validate())
);

validate = () => {
  setTimeout (() => {
    $('#submit').removeClass('clicked');
    $('#submit').addClass('validated', reset());
  }, 2500)
}

reset = () => {
  setTimeout (() => {
    $('#submit').removeClass('validated')
  }, 4500)
}
