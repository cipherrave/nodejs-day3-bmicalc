function saveBMI() {
  let email = document.querySelector("#email").value;
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  // BMI = weight in KG / (height in m * height in m)
  height = height / 100;
  let BMI = weight / (height * height);
  BMI = BMI.toFixed(2);

  //write to a json file for history
  const today = new Date().toDateString();
  let obj = {
    date: today,
    height: height,
    weight: weight,
    bmi: BMI,
    email: email,
  };
  console.log(obj);

  fs.writeFile("db.json", jsonStor, (error) => {
    if (error) throw error;
    console.log("Data has been written to db.json");
  });

  // read json file
}
