
var username = "wsquser_desa";
var password = "Quadient_desa123";
var id = '178891860002';
var nit = '06072008820015';
var flag = 0;
var flagHP = 0;

function navegador() {
  var agente = window.navigator.userAgent;
  var navegadores = ["Chrome", "Firefox", "Safari", "Opera", "Trident", "MSIE", "Edge"];
  for (var i in navegadores) {
    if (agente.indexOf(navegadores[i]) != -1) {
      return navegadores[i];
    }
  }
}
var browser = document.getElementById("navegador");
        window.onload = function () {
          console.log("El navegador es: " + navegador());
}
$(document).ready(function () {

});



var click_ev = document.createEvent("MouseEvents");
// inicia liza el evento
click_ev.initEvent("click", true /* bubble */, true /* cancelable */);
// dispara el evento
document.getElementById("carnet").dispatchEvent(click_ev);

  $(document).on("click", 'button#carnet' , function () {
         reporteIndividual()
        });
  
  


      var data = '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Ci9NZWRpYUJveCBbMCAwIDc5MiA2MTJdCj4+CmVuZG9iago5IDAgb2JqCjw8Ci9DcmVhdG9yIChRdWFkaWVudCBHcm91cCBBR35JbnNwaXJlfjE0LjMuMzIuNikKL1Byb2R1Y2VyICgpCi9DcmVhdGlvbkRhdGUgKEQ6MjAyMTAyMDQyMTQzNDNaKQo+PgplbmRvYmoKMSAwIG9iagpbL1BERi9UZXh0L0ltYWdlQi9JbWFnZUMvSW1hZ2VJXQplbmRvYmoKNSAwIG9iago8PAovVHlwZS9Gb250Ci9TdWJ0eXBlL1R5cGUxCi9CYXNlRm9udC9DYWxpYnJpLUJvbGQKL0ZpcnN0Q2hhciAzMgovTGFzdENoYXIgMTIyCi9XaWR0aHMgWzIyNiAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDI3NiAwIDAgMCAwIDAgMCAwIDAgNTI5IDAgMCAwIDAgMCAyNjcgMCAwIDAgMCA2NTkgMCAwIDAgNTYzIDQ3MyA0OTUgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgNDk0IDAgNDE4IDUzNyA1MDMgMCA0NzQgMCAyNDYgMCAwIDI0NiA4MTMgNTM3IDUzOCA1MzcgMCAzNTUgMzk5IDM0NyA1MzcgMCAwIDAgMCAzOTddCi9Gb250RGVzY3JpcHRvciAxMCAwIFIKPj4KZW5kb2JqCjEwIDAgb2JqCjw8Ci9UeXBlL0ZvbnREZXNjcmlwdG9yCi9Gb250TmFtZS9DYWxpYnJpLUJvbGQKL0ZvbnRCQm94IFswIC0xNzggNzU0IDY4MF0KL0ZsYWdzIDMyCi9DYXBIZWlnaHQgMAovQXNjZW50IDAKL0Rlc2NlbnQgMAovU3RlbVYgNTAKL0l0YWxpY0FuZ2xlIDAKL0ZvbnRGaWxlMyAxMSAwIFIKPj4KZW5kb2JqCjExIDAgb2JqCjw8Ci9TdWJ0eXBlL1R5cGUxQwovRmlsdGVyL0ZsYXRlRGVjb2RlCi9MZW5ndGggNDQxOAo+PgpzdHJlYW0KeJzFWWuMZGlZrgGm61HWWdjdBglegiAavKOCMfwgoMvFGwRdQzbiLrvADvT09r2qq06d63eu37nf69LVl+mZnRl2FliCiQRRMMaY4A/1vxr8Q3ANf0iq214T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';
      
      function reporteIndividual(){
      const linkSource = "data:application/pdf;base64,"+ data;
      
      alert("El navegador es:!!!!!!!!!!!!! " + navegador());
        
        
      try {
        // if(navegador() == 'Safari')
        // {
        const downloadLink = document.createElement("a");
        const fileName = 'TestPDF.pdf';
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        //downloadLink.click();
        var click_ev = document.createEvent("MouseEvents");
        // inicia liza el evento
        click_ev.initEvent("click", true /* bubble */, true /* cancelable */);
        // dispara el evento
        downloadLink.dispatchEvent(click_ev);
        isDonwloaded = true;
  
        // } 
        // else
        // {
        var byteCharacters = atob(data);
        var byteNumbers = new Array(byteCharacters.length);
        for (var i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        var file = new Blob([byteArray], { type: 'application/pdf;base64' });
        var fileURL = URL.createObjectURL(file);
        window.open(fileURL, "_blank");
        
        // }
    } catch (e) {
      alert('error'+ e);
    }
   
   
}
