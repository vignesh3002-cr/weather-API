import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const app=express();
const port=3000;
let result;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const options = {
    headers: {
      'x-rapidapi-key': '874ab84bacmsh0d2bdbeff9ad888p15ca98jsne88e72c06312',
      'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
  };

app.get("/",(req,res)=>{
    res.render("index.ejs");
});
app.post("/weather",async(req,res)=>{
    try{
       switch(req.body.choice){
           case "chennai":
              result= await axios.request("https://weatherbit-v1-mashape.p.rapidapi.com/forecast/minutely?lat=13.067439&lon=80.237617&units=metric&lang =en",options);
              res.render("index.ejs",{temp:JSON.stringify(result.data.data[0].temp)});
              break;
            case "madurai":
              result= await axios.request("https://weatherbit-v1-mashape.p.rapidapi.com/forecast/minutely?lat=9.939093&lon=78.121719&units=metric&lang =en",options);
              res.render("index.ejs",{temp:JSON.stringify(result.data.data[0].temp)});
             break;
             case "kanyakumari":
              result= await axios.request("https://weatherbit-v1-mashape.p.rapidapi.com/forecast/minutely?lat=8.0883&lon=77.5385&units=metric&lang =en",options);
              res.render("index.ejs",{temp:JSON.stringify(result.data.data[0].temp)});
             break;
             case "coimbatore":
              result= await axios.request("https://weatherbit-v1-mashape.p.rapidapi.com/forecast/minutely?lat=11.0168&lon=76.9558&units=metric&lang =en",options);
              res.render("index.ejs",{temp:JSON.stringify(result.data.data[0].temp)});
             break;
             case "salem":
              result= await axios.request("https://weatherbit-v1-mashape.p.rapidapi.com/forecast/minutely?lat=11.6643&lon=78.146&units=metric&lang =en",options);
              res.render("index.ejs",{temp:JSON.stringify(result.data.data[0].temp)});
             break;
             case "salem":
              result= await axios.request("https://weatherbit-v1-mashape.p.rapidapi.com/forecast/minutely?lat=11.6643&lon=78.146&units=metric&lang =en",options);
              res.render("index.ejs",{temp:JSON.stringify(result.data.data[0].temp)});
             break;
             case "ramanathapuram":
              result= await axios.request("https://weatherbit-v1-mashape.p.rapidapi.com/forecast/minutely?lat=10.99&lon=76.9902&units=metric&lang =en",options);
              res.render("index.ejs",{temp:JSON.stringify(result.data.data[0].temp)});
             break;
             case "nilgiris":
              result= await axios.request("https://weatherbit-v1-mashape.p.rapidapi.com/forecast/minutely?lat=11.416667&lon=76.683334&units=metric&lang =en",options);
              res.render("index.ejs",{temp:JSON.stringify(result.data.data[0].temp)});
             break;
             case "vellore":
              result= await axios.request("https://weatherbit-v1-mashape.p.rapidapi.com/forecast/minutely?lat=12.934968&lon=79.146881&units=metric&lang =en",options);
              res.render("index.ejs",{temp:JSON.stringify(result.data.data[0].temp)});
             break;
             case "thiruvannamalai":
              result= await axios.request("https://weatherbit-v1-mashape.p.rapidapi.com/forecast/minutely?lat=12.228628&lon=79.066544&units=metric&lang =en",options);
              res.render("index.ejs",{temp:JSON.stringify(result.data.data[0].temp)});
             break;
             case "kanchipuram":
              result= await axios.request("https://weatherbit-v1-mashape.p.rapidapi.com/forecast/minutely?lat=12.834174&lon=79.703644&units=metric&lang =en",options);
              res.render("index.ejs",{temp:JSON.stringify(result.data.data[0].temp)});
             break;
             case "karur":
              result= await axios.request("https://weatherbit-v1-mashape.p.rapidapi.com/forecast/minutely?lat=10.9338334&lon=78.0883645&units=metric&lang =en",options);
              res.render("index.ejs",{temp:JSON.stringify(result.data.data[0].temp)});
             break;
             case "thanjavur":
              result= await axios.request("https://weatherbit-v1-mashape.p.rapidapi.com/forecast/minutely?lat=10.786999&lon=79.137825&units=metric&lang =en",options);
              res.render("index.ejs",{temp:JSON.stringify(result.data.data[0].temp)});
             break;
           default:
             console.log("it's not fetch any data ");
            break;
       }
    }catch(error)
    {
      console.log(error.response.data);
        res.status(500);
    }
});
app.listen(port,()=>{
    console.log(`succesfully run on  port ${port}`);
});