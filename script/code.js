function timeConvert( ){
    let num = document.getElementById('number').value;
    const hours = Math.floor(num/60);
    const minutes = num % 60;
    document.getElementById('result').innerHTML = hours + minutes + '<br>' + '(' + hours + 'Hours & ' + minutes + 'Minutes)';
}