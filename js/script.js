$('#textareaWidthResize1').keydown(function(e) {
    if (e.key == 'Tab') {
      e.preventDefault();
      var start = this.selectionStart;
      var end = this.selectionEnd;
  
      // set textarea value to: text before caret + tab + text after caret
      this.value = this.value.substring(0, start) +
        "\t" + this.value.substring(end);
  
      // put caret at right position again
      this.selectionStart = this.selectionEnd = start +1;
    } else if(e.key == '{') {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;
        this.value = this.value.substring(0, start) + "{}" + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start +1;
    } else if(e.key == '[') {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;
        this.value = this.value.substring(0, start) + "[]" + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start +1;
    } else if(e.key == '(') {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;
        this.value = this.value.substring(0, start) + "()" + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start +1;
    } else if(e.key == '"') {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;
        this.value = this.value.substring(0, start) + '""' + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start +1;
    } else if(e.key == "'") {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;
        this.value = this.value.substring(0, start) + "''" + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start +1;
    } else if(e.key == "<") {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;
        this.value = this.value.substring(0, start) + "<>" + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start +1;
    }
});
$('#textareaWidthResize2').keydown(function(e) {
    if (e.key == 'Tab') {
      e.preventDefault();
      var start = this.selectionStart;
      var end = this.selectionEnd;
  
      // set textarea value to: text before caret + tab + text after caret
      this.value = this.value.substring(0, start) +
        "\t" + this.value.substring(end);
  
      // put caret at right position again
      this.selectionStart = this.selectionEnd = start + 1;
    } else if(e.key == '{') {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;
        this.value = this.value.substring(0, start) + "{}" + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start +1;
    } else if(e.key == '[') {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;
        this.value = this.value.substring(0, start) + "[]" + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start +1;
    } else if(e.key == '(') {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;
        this.value = this.value.substring(0, start) + "()" + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start +1;
    } else if(e.key == '"') {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;
        this.value = this.value.substring(0, start) + '""' + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start +1;
    } else if(e.key == "'") {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;
        this.value = this.value.substring(0, start) + "''" + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start +1;
    }
});
$('#textareaWidthResize3').keydown(function(e) {
    if (e.key == 'Tab') {
      e.preventDefault();
      var start = this.selectionStart;
      var end = this.selectionEnd;
  
      // set textarea value to: text before caret + tab + text after caret
      this.value = this.value.substring(0, start) +
        "\t" + this.value.substring(end);
  
      // put caret at right position again
      this.selectionStart =
        this.selectionEnd = start + 1;
    } else if(e.key == '{') {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;
        this.value = this.value.substring(0, start) + "{}" + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start +1;
    } else if(e.key == '[') {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;
        this.value = this.value.substring(0, start) + "[]" + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start +1;
    } else if(e.key == '(') {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;
        this.value = this.value.substring(0, start) + "()" + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start +1;
    } else if(e.key == '"') {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;
        this.value = this.value.substring(0, start) + '""' + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start +1;
    } else if(e.key == "'") {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;
        this.value = this.value.substring(0, start) + "''" + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start +1;
    }
});
var hideTextArea2 = false;
function hideTextArea() {
    $("#allTextareaHideShow").toggle();
    if(hideTextArea2){
        $("#changeUpperButton").html("^");
        hideTextArea2 = false;
    } else {
        $("#changeUpperButton").html("˅");
        hideTextArea2 = true;
    }
}
function resetTextViewer(){
    $("#textareaWidthResize1").val("");
    $("#textareaWidthResize2").val("");
    $("#textareaWidthResize3").val("");
}
function runTextViewer() {
    $("#livePreviewHTML").html($("#textareaWidthResize1").val());
    $("#livePreviewCSS").html($("#textareaWidthResize2").val());
    $("#livePreviewJavaScript").html($("#textareaWidthResize3").val());
}
