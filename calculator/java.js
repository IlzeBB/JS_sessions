function insrt(num) {
  $(".display").val($(".display").val() + num);
}
function eql() {
  $(".display").val(eval($(".display").val()));
}
function c() {
  $(".display").val("");
}
function del() {
  value = $(".display").val();
  $(".display").val(value.substring(0, value.length - 1));
}
function sqrt() {
  $(".display").val(Math.sqrt($(".display").val()));
}
function square() {
  value = $(".display").val();
  $(".display").val(eval(value) * eval(value));
}
function changeSign() {
  value = $(".display").val();
  if (value.substring(0, 1) == "-")
    $(".display").val(value.substring(1, value.length));
  else $(".display").val("-" + value);
}
function inverse() {
  $(".display").val(1 / $(".display").val());
}

