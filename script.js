

// pin-area--------------->


const pinBtn = document.getElementById('pin-btn');
pinBtn.addEventListener('click', function(){
    const newPin = Math.floor(Math.random() * (2000 - 1001)) +  1001;
    document.getElementById('pin-input').value = newPin;
    let fail = document.getElementById('fail');
    fail.style.display = 'none';
    let success = document.getElementById('success');
    success.style.display = 'none';
})
document.getElementById("pin-input").value = "";



// input-section -------------------->


function inputValue(data) {
    let submitInput = document.getElementById("submitInput");
    switch (data) {
              case 'c':submitInput.value = "";
                break;
              case '<':submitInput.value = submitInput.value.substr(0, submitInput.value.length - 1);
                break;
              default:submitInput.value += data;
                break;
    }
}
document.getElementById("submitInput").value = "";


// Sum button area ------------->


const submitBtn =document.getElementById("sumBtn");
submitBtn.addEventListener("click", function(){
          let pinInput =  document.getElementById("pin-input").value;
          let submitInput = document.getElementById("submitInput").value;
          if (submitInput === pinInput && submitInput.length > 0 && pinInput.length > 0 ) {
                    let success = document.getElementById("success");
                    success.style.display = "block";
                    document.getElementById("submitInput").value = "";
                    document.getElementById("pin-input").value = "";
          }  
          else if (submitInput !== pinInput) {
                    let fail = document.getElementById("fail");
                    fail.style.display = "block";
                    document.getElementById("submitInput").value = "";
                    document.getElementById("pin-input").value = "";     
          }        
});