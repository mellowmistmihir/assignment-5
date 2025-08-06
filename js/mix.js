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