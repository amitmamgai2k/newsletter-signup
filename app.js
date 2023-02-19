const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https")
const path = require("path");

const app = express()

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: true }));


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html")

});
app.post("/", function(req,res){
  const fname = req.body.fname
  const lname = req.body.Lname
  const email = req.body.email
  const data = {
    members:[
      {
        email_address:email,
        status:"subscribed",
        merge_fields:{
          FNAME: fname,
          LNAME: lname
        }


        }

    ]
  };
  var jsonData = JSON.stringify(data);
  const url= "https://us21.api.mailchimp.com/3.0/lists/7d1d3b31ac";
  const options = {
    method:"POST",
    auth :"Amit:7d0a22dcc698f4834cabad5feaa049b-us21"
  };
  const request = https.request(url,options, function(response){
    if (response.statusCode === 200){
      res.sendFile(__dirname +"/success.html")
    }
    else if (response.statusCode != 200) {
      res.sendFile(__dirname +"/failure.html")
      document.getE
    }
    response.on("data", function(data){
       console.log(JSON.parse(data));

  });
});
//request.write(jsonData);
request.end();


});
app.post("/failure", function(req,res){
  res.redirect("/")

});


  // var firstname = req.body.fname;
  // var lastname = req.body.Lname;
  // var email = req.body.email;


  // console.log(firstname,lastname,email);
  // var data = {
  //   members: [{
  //     email_address: email,
  //     status: "Subscribed",
  //     merge_fields: {
  //       FNAME: firstname,
  //       LNAME: lastname
  //     }
  //   }
  // ]
  // };
  // const jsonData = JSON.stringify(data);
  // const url = "https://us21.api.mailchimp.com/3.0/lists/7d1d3b31ac";
  // const options = {
  //   method:"POST",
  //   auth :"Amit:e7d0a22dcc698f4834cabad5feaa049b - us21"
  // };
  // const request = https.request(url,options,function(response){
  //   response.on("data", function(data){
  //     console.log(JSON.parse(data));
  //   });
  // });
  // request.write(jsonData);
  // request.end();



app.listen(process.env.PORT || 3000, function(){
  console.log(`Example app listening on port 3000`)
})
// e7d0a22dcc698f4834cabad5feaa049b - us21
// 7 d1d3b31ac.
// Requiring mailchimp's module
// For this we need to install the npm module @mailchimp/mailchimp_marketing. To do that we write:
// npm install @mailchimp/mailchimp_marketing


// 7d1d3b31ac.








// const mailchimp = require("mailchimp_marketing");
// //Requiring express and body parser and initializing the constant "app"
// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// //Using bod-parser
// app.use(bodyParser.urlencoded({extended:true}));
// //The public folder which holds the CSS
// app.use(express.static("public"));
// //Listening on port 3000 and if it goes well then logging a message saying that the server is running
// app.listen(process.env.PORT||3000,function () {
//  console.log("Server is running at port 3000");
// });
// //Sending the signup.html file to the browser as soon as a request is made on localhost:3000
// app.get("/", function (req, res) {
//  res.sendFile(__dirname + "/signup.html");
// });
// //Setting up MailChimp
// mailchimp.setConfig({
// //*****************************ENTER YOUR API KEY HERE******************************
//  apiKey: "1c4fe749d59d6060ab47296be1d1d5cc-us17",
// //*****************************ENTER YOUR API KEY PREFIX HERE i.e.THE SERVER******************************
//  server: "us17"
// });
// //As soon as the sign in button is pressed execute this
// app.post("/", function (req,res) {
// //*****************************CHANGE THIS ACCORDING TO THE VALUES YOU HAVE ENTERED IN THE INPUT ATTRIBUTE IN HTML******************************
// const firstName = req.body.firstName;
// const secondName = req.body.secondName;
// const email = req.body.email;
// //*****************************ENTER YOU LIST ID HERE******************************
// const listId = "6709310fbe";
// //Creating an object with the users data
// const subscribingUser = {
//  firstName: firstName,
//  lastName: secondName,
//  email: email
// };
// //Uploading the data to the server
//  async function run() {
// const response = await mailchimp.lists.addListMember(listId, {
//  email_address: subscribingUser.email,
//  status: "subscribed",
//  merge_fields: {
//  FNAME: subscribingUser.firstName,
//  LNAME: subscribingUser.lastName
// }
// });
// //If all goes well logging the contact's id
//  res.sendFile(__dirname + "/success.html")
//  console.log(
// `Successfully added contact as an audience member. The contact's id is ${
//  response.id
//  }.`
// );
// }
// //Running the function and catching the errors (if any)
// // ************************THIS IS THE CODE THAT NEEDS TO BE ADDED FOR THE NEXT LECTURE*************************
// // So the catch statement is executed when there is an error so if anything goes wrong the code in the catch code is executed. In the catch block we're sending back the failure page. This means if anything goes wrong send the faliure page
//  run().catch(e => res.sendFile(__dirname + "/failure.html"));
// });
