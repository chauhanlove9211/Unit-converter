function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;

    let metersValue;

    switch (inputUnit) {
        case 'meters':
            metersValue = inputValue;
            break;
        case 'kilometers':
            metersValue = inputValue * 1000;
            break;
        case 'inches':
            metersValue = inputValue * 0.0254;
            break;
        case 'feet':
            metersValue = inputValue * 0.3048;
            break;
        default:
            metersValue = 0;
    }

    const conversions = {
        meters: metersValue,
        kilometers: metersValue / 1000,
        inches: metersValue / 0.0254,
        feet: metersValue / 0.3048
    };

    let result = '<h2>Converted Values:</h2><ul>';
    for (const unit in conversions) {
        result += `<li>${conversions[unit]} ${unit}</li>`;
    }
    result += '</ul>';

    document.getElementById('result').innerHTML = result;
}
