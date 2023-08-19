function convertTemperature() {
  const temperatureInput = parseFloat(
    document.getElementById("temperatureInput").value
  );
  const unitSelect = document.getElementById("unitSelect").value;
  let convertedTemperature;
  let convertedUnit;

  if (isNaN(temperatureInput)) {
    document.getElementById("result").innerText =
      "Please enter a valid number.";
    return;
  }

  if (unitSelect === "celsius") {
    convertedTemperature = temperatureInput;
    convertedUnit = "°C";
  } else if (unitSelect === "fahrenheit") {
    convertedTemperature = (temperatureInput * 9) / 5 + 32;
    convertedUnit = "°F";
  } else if (unitSelect === "kelvin") {
    convertedTemperature = temperatureInput + 273.15;
    convertedUnit = "K";
  }

  document.getElementById("result").innerHTML = `
  <p>
        <strong>Converted Temperature</strong> 
        <div class='converted-result'>
          <span>${temperatureInput} °C = ${convertedTemperature.toFixed(2)} ${convertedUnit}</span>
        </div>
  </p>`;
}
