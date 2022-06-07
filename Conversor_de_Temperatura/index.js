document.getElementById("submitButton").onclick = function() {
    let temp = Number(document.getElementById("textBox").value);

    if(document.getElementById("cfButton").checked){
        if(document.getElementById("ctButton").checked){
            document.getElementById("tempOutput").innerHTML = `${temp}°C`;
        } else if (document.getElementById("ftButton").checked){
            temp = celsiustoFahrenheit(temp);
            document.getElementById("tempOutput").innerHTML = `${temp}°F`;
        } else {
            temp = celsiustoKelvin(temp);
            document.getElementById("tempOutput").innerHTML = `${temp}K`;
        }
    } else if (document.getElementById("ffButton").checked){
        if(document.getElementById("ctButton").checked){
            temp = fahrenheittoCelsius(temp);
            document.getElementById("tempOutput").innerHTML = `${temp}°C`;
        } else if (document.getElementById("ftButton").checked){
            document.getElementById("tempOutput").innerHTML = `${temp}°F`;
        } else {
            temp = fahrenheittoKelvin(temp);
            document.getElementById("tempOutput").innerHTML = `${temp}K`;
        }
    } else {
        if(document.getElementById("ctButton").checked){
            temp = kelvintoCelsius(temp);
            document.getElementById("tempOutput").innerHTML = `${temp}°C`;
        } else if (document.getElementById("ftButton").checked){
            temp = kelvintoFahrenheit(temp);
            document.getElementById("tempOutput").innerHTML = `${temp}°F`;
        } else {
            document.getElementById("tempOutput").innerHTML = `${temp}K`;
        }
    }
}

let temp;

function celsiustoFahrenheit(temp) {
    return temp * 9/5 + 32;
}

function celsiustoKelvin(temp){
    return temp - 273.15;
}

function fahrenheittoCelsius(temp){
    return (temp - 32) * (5/9);
}

function fahrenheittoKelvin(temp){
    return (temp - 32) * (5/9) + 273.15;
}

function kelvintoCelsius(temp){
    return temp + 273.15;
}

function kelvintoFahrenheit(temp){
    return (temp - 273.15) * 9/5 + 32; 
}