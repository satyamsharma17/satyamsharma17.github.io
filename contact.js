//Unique Firebase Object
const firebaseConfig = {
    apiKey: "AIzaSyC_jrYf-eufSqXIyRE3beWINNEuGo7WuJU",
    authDomain: "portfolio-7aa22.firebaseapp.com",
    projectId: "portfolio-7aa22",
    storageBucket: "portfolio-7aa22.appspot.com",
    messagingSenderId: "925295490619",
    appId: "1:925295490619:web:f868113b1ede3bbec30e1e"
  };
  
  //Initialize Firebase 
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore()
  
  //Variable to access database collection
  const db = firestore.collection("formData")
  
  //Get Submit Form
  let submitButton = document.getElementById('submit')
  
  //Create Event Listener To Allow Form Submission
  submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
  
    //Get Form Values
    let name = document.getElementById('name').value
    let company = document.getElementById('company').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let message = document.getElementById('message').value
  
    //Save Form Data To Firebase
    db.doc().set({
      name: name,
      company: company,
      email: email,
      phone: phone,
      message: message
    }).then( () => {
      console.log("Data saved!")
    }).catch((error) => {
      console.log(error)
    })

    const inputs = document.querySelectorAll('#name, #company, #email, #phone, #message');
    inputs.forEach(input => {
       input.value="";
    });
  
    //alert
    alert("Congrats, your form has been submitted successfully!")
  })