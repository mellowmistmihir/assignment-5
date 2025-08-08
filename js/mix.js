     function getInputFieldById(id){
        const inputField = document.getElementById(id).value;
       const inputNumber = parseFloat(inputField);
       return inputNumber;

     }

     function getTextFieldById(id){
        const textField = document.getElementById(id).innerText
        const textNumber = parseFloat (textField);
        return textNumber
     }


     function showSectionById(id){
       document.getElementById('donate-section').classList.add('hidden');
       document.getElementById('history-section').classList.add ('hidden')
       document.getElementById(id).classList.remove('hidden')
     } 



         function showbuttonbyid (id){
          document.getElementById('donation-btn').classList.remove('bg-green')
          document.getElementById('history-btn').classList.remove('bg-green')
          document.getElementById(id).classList.add('bg-green')

          
         }



     // format
 const options = {
    timeZone: 'Asia/Dhaka',
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, // 24-hour format
    timeZoneName: 'long'
  };

  const formatter = new Intl.DateTimeFormat('en-BD', options);
  const now = new Date();

  const formatted = "Date : " + formatter.format(now);


   document.getElementById('blog-btn').addEventListener('click', function(){
   	window.location.href="blog.html";

 });



 const donationBtn = document.getElementById("donation-open");
        const historyBtn = document.getElementById("history-open");

        
        donationBtn.addEventListener("click", function () {
            donationBtn.classList.add("active");   
            historyBtn.classList.remove("active"); 
        });

        
        historyBtn.addEventListener("click", function () {
            historyBtn.classList.add("active");    
            donationBtn.classList.remove("active");
        });



        const donateButton = document.getElementById('donate-btn');
const modal = document.getElementById('confirmationModal');
const closeBtn = document.getElementById('closeBtn');

donateBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
