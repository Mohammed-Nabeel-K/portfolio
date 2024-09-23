




function sendMail(){

  var params = {
    from_name : document.getElementById("from_name").value,
    from_email : document.getElementById("from_email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value
  }
    
  emailjs.send("service_9tvua0o","template_4ivojc5",params).then (function (res){
    alert("success"+ res.status);
    // document.contact-form.reset();
  });
}



document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-animate');
      } else {
        entry.target.classList.remove('show-animate');
      }
    });
  });

  const squares = document.querySelectorAll('.headings');
  squares.forEach((element) => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        writing();
      } else {
       
      }
    });
  });

  const squares = document.querySelectorAll('.text-animate');
  squares.forEach((element) => observer.observe(element));
});