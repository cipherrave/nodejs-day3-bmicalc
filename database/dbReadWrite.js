function saveBMI() {
  event.preventDefault();
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  // BMI = weight in KG / (height in m * height in m)
  height = height / 100;
  let BMI = weight / (height * height);
  BMI = BMI.toFixed(2);

  //write to a json file for history
  const today = new Date().toDateString();
  let obj = { date: today, height, weight, BMI };
  console.log(obj);

  // read json file
}
