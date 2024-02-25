function emailProceed() {
  event.preventDefault();
  let emailInput = document.getElementById("email").value;
  if (emailInput == "") {
    document.getElementById("emailAlert").style.display = "flex";
  } else {
    document.getElementById("cardLogin").style.display = "none";
    document.getElementById("cardWelcome").style.display = "flex";
    document.getElementById("welcomeUser").innerHTML =
      "<p>Welcome," + "" + emailInput;
    document.getElementById("cardCalc").style.display = "flex";
    document.getElementById("cardHistory").style.display = "flex";
  }
}

function logOut() {
  document.getElementById("cardLogin").style.display = "flex";
  document.getElementById("cardWelcome").style.display = "none";
  document.getElementById("cardCalc").style.display = "none";
  document.getElementById("cardHistory").style.display = "none";
}

function calcBMI() {
  event.preventDefault();
  let emailInput = document.getElementById("email").value;
  let heightInput = document.getElementById("height").value;
  let weightInput = document.getElementById("weight").value;
  if (heightInput == "" || weightInput == "") {
    alert("Please fill out the input fields!");
    return;
  }
  // BMI = weight in KG / (height in m * height in m)
  heightBMI = heightInput / 100;
  let BMI = weightInput / (heightBMI * heightBMI);
  BMI = BMI.toFixed(2);
  document.getElementById("resultBMI").innerHTML = BMI;

  if (BMI < 18.5) {
    document.getElementById("cardResult").style.display = "flex";
    document.getElementById("resultBMI").style.color = "magenta";
    document.getElementById("resultCategory").innerText = "😅 Underweight";
    document.getElementById("resultComment").innerHTML =
      "Based on your BMI, it seems you’re underweight.It’s essential to focus on balanced nutrition and consider consulting a healthcare professional.<br><br>Remember that being underweight can have health implications. Consider incorporating more nutrient-dense foods into your diet.";
  }
  if (BMI >= 18.5 && BMI < 25) {
    document.getElementById("cardResult").style.display = "flex";
    document.getElementById("resultBMI").style.color = "green";
    document.getElementById("resultCategory").innerText = "😊 Healthy";
    document.getElementById("resultComment").innerHTML =
      "Congratulations! Your BMI falls within the normal weight range. Keep up the healthy habits!<br><br>Maintaining a healthy weight is crucial for overall well-being.<br><br>Regular exercise and a balanced diet are key.";
  }
  if (BMI >= 25 && BMI < 30) {
    document.getElementById("cardResult").style.display = "flex";
    document.getElementById("resultBMI").style.color = "red";
    document.getElementById("resultCategory").innerText = "😦 Overweight";
    document.getElementById("resultComment").innerHTML =
      "Your BMI indicates that you’re in the overweight category.<br>Consider making lifestyle changes to manage your weight.<br><br>Being overweight can increase the risk of health conditions. Focus on portion control and physical activity.";
  }
  if (BMI >= 30 && BMI < 35) {
    document.getElementById("cardResult").style.display = "flex";
    document.getElementById("resultBMI").style.color = "maroon";
    document.getElementById("resultCategory").innerText = "😖 Obese (Class 1)";
    document.getElementById("resultComment").innerHTML =
      "It appears that you’re in the obese category.<br>Prioritize your health by seeking professional guidance.<br><br>Obesity is associated with various health risks. <br><br>Consider a personalized plan to achieve a healthier weight.";
  }
  if (BMI >= 35 && BMI < 40) {
    document.getElementById("cardResult").style.display = "flex";
    document.getElementById("resultBMI").style.color = "maroon";
    document.getElementById("resultCategory").innerText = "😖 Obese (Class 2)";
    document.getElementById("resultComment").innerHTML =
      "It appears that you’re in the obese category.<br>Prioritize your health by seeking professional guidance.<br><br>Obesity is associated with various health risks. <br><br>Consider a personalized plan to achieve a healthier weight.";
  }
  if (BMI > 40) {
    document.getElementById("cardResult").style.display = "flex";
    document.getElementById("resultBMI").style.color = "maroon";
    document.getElementById("resultCategory").innerText = "😖 Obese (Class 3)";
    document.getElementById("resultComment").innerHTML =
      "It appears that you’re in the obese category.<br>Prioritize your health by seeking professional guidance.<br><br>Obesity is associated with various health risks. <br><br>Consider a personalized plan to achieve a healthier weight.";
  }

  const resultView = document.getElementById("cardResult");
  resultView.scrollIntoView(true);

  const todayInput = new Date().toDateString();
  const newEntryArray = {
    date: todayInput,
    height: heightInput + "cm",
    weight: weightInput + "kg",
    bmi: BMI,
  };
  getUserArray = JSON.parse(localStorage.getItem(emailInput));
  if (getUserArray === null) {
    localStorage.setItem(emailInput, JSON.stringify(newEntryArray));
    console.log("Welcome :)");
  } else {
    console.log("Updated");
    let combined = getUserArray.push(newEntryArray);
    localStorage.setItem(emailInput, combined);
  }
  allData();
  document.getElementById("form").reset();
}

function saveBMI() {
  let heightInput = document.getElementById("height").value;
  let weightInput = document.getElementById("weight").value;
}

function allData() {
  table.innerHTML = ``;
  bookList = JSON.parse(localStorage.getItem("listItem4")) ?? [];
  bookList.forEach(function (value, i) {
    var table = document.getElementById("table");
    // if(value.isComplete == 0){
    table.innerHTML += `
          <tr>
              <td>${i + 1}</td>
              <td>${value.title}</td>
              <td>${value.author}</td>
              <td>${value.year}</td>
   
              <td>
                  <button class="btn btn-sm btn-success" onclick="find(${
                    value.id
                  })">
                      <i class="fa fa-edit"></i>
                  </button>
              </td>
              <td>
                  <button class="btn btn-sm btn-danger" onclick="removeData4(${
                    value.id
                  })">
                      <i class="fa fa-trash"></i>
                  </button>
              </td>
          </tr>`;
    // }
  });
}

function removeData4(id) {
  bookList = JSON.parse(localStorage.getItem("listItem4")) ?? [];
  bookList = bookList.filter(function (value) {
    return value.id != id;
  });
  localStorage.setItem("listItem4", JSON.stringify(bookList));
  allData();
}

function find(id) {
  bookList = JSON.parse(localStorage.getItem("listItem4")) ?? [];
  bookList.forEach(function (value) {
    if (value.id == id) {
      console.log(id);
      document.getElementById("inputBookId").value = id;
      document.getElementById("inputBookTitle").value = value.title;
      document.getElementById("inputBookAuthor").value = value.author;
      document.getElementById("inputBookYear").value = value.year;
    }
  });
}
