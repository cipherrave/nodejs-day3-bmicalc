function calculateBMI() {
  event.preventDefault();
  let email = document.querySelector("#email").value;
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;
  if (height == "" || weight == "") {
    alert("Please fill out the input fields!");
    return;
  }
  // BMI = weight in KG / (height in m * height in m)
  height = height / 100;
  let BMI = weight / (height * height);
  BMI = BMI.toFixed(2);
  document.querySelector("#result").innerHTML = BMI;

  if (BMI < 18.5) {
    document.getElementById("cardResult").style.display = "flex";
    document.getElementById("result").style.color = "magenta";
    document.getElementById("category").innerText = "😅 Underweight";
    document.getElementById("comment").innerHTML =
      "Based on your BMI, it seems you’re underweight.It’s essential to focus on balanced nutrition and consider consulting a healthcare professional.<br><br>Remember that being underweight can have health implications. Consider incorporating more nutrient-dense foods into your diet.";
  }
  if (BMI >= 18.5 && BMI < 25) {
    document.getElementById("cardResult").style.display = "flex";
    document.getElementById("result").style.color = "green";
    document.getElementById("category").innerText = "😊 Healthy";
    document.getElementById("comment").innerHTML =
      "Congratulations! Your BMI falls within the normal weight range. Keep up the healthy habits!<br><br>Maintaining a healthy weight is crucial for overall well-being.<br><br>Regular exercise and a balanced diet are key.";
  }
  if (BMI >= 25 && BMI < 30) {
    document.getElementById("cardResult").style.display = "flex";
    document.getElementById("result").style.color = "red";
    document.getElementById("category").innerText = "😦 Overweight";
    document.getElementById("comment").innerHTML =
      "Your BMI indicates that you’re in the overweight category.<br>Consider making lifestyle changes to manage your weight.<br><br>Being overweight can increase the risk of health conditions. Focus on portion control and physical activity.";
  }
  if (BMI >= 30 && BMI < 35) {
    document.getElementById("cardResult").style.display = "flex";
    document.getElementById("result").style.color = "maroon";
    document.getElementById("category").innerText = "😖 Obese (Class 1)";
    document.getElementById("comment").innerHTML =
      "It appears that you’re in the obese category.<br>Prioritize your health by seeking professional guidance.<br><br>Obesity is associated with various health risks. <br><br>Consider a personalized plan to achieve a healthier weight.";
  }
  if (BMI >= 35 && BMI < 40) {
    document.getElementById("cardResult").style.display = "flex";
    document.getElementById("result").style.color = "maroon";
    document.getElementById("category").innerText = "😖 Obese (Class 2)";
    document.getElementById("comment").innerHTML =
      "It appears that you’re in the obese category.<br>Prioritize your health by seeking professional guidance.<br><br>Obesity is associated with various health risks. <br><br>Consider a personalized plan to achieve a healthier weight.";
  }
  if (BMI > 40) {
    document.getElementById("cardResult").style.display = "flex";
    document.getElementById("result").style.color = "maroon";
    document.getElementById("category").innerText = "😖 Obese (Class 3)";
    document.getElementById("comment").innerHTML =
      "It appears that you’re in the obese category.<br>Prioritize your health by seeking professional guidance.<br><br>Obesity is associated with various health risks. <br><br>Consider a personalized plan to achieve a healthier weight.";
  }

  const resultView = document.getElementById("cardResult");
  resultView.scrollIntoView(true);

  //write to a json file for history
  const today = new Date().toDateString();
  let formElement = {
    date: today,
    height: height,
    weight: weight,
    bmi: BMI,
    email: email,
  };
  console.log(formElement);
}
