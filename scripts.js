const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('active'));
        tab.classList.add('active');
        
        contents.forEach(content => content.classList.remove('active'));
        document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
    });
});

function convertVolume() {
    const input = parseFloat(document.getElementById('volume-input').value);
    const from = document.getElementById('volume-from').value;
    const to = document.getElementById('volume-to').value;
    let result;

    const volumeConversions = {
        tsp: 5,
        tbsp: 15,
        cup: 240,
        liter: 1000,
        ml: 1
    };

    result = input * (volumeConversions[from] / volumeConversions[to]);
    document.getElementById('volume-result').innerText = `ผลลัพธ์: ${result.toFixed(2)} ${to}`;
}

function convertWeight() {
    const input = parseFloat(document.getElementById('weight-input').value);
    const from = document.getElementById('weight-from').value;
    const to = document.getElementById('weight-to').value;
    let result;

    const weightConversions = {
        g: 1,
        kg: 1000,
        oz: 28.3495,
        lb: 453.592
    };

    result = input * (weightConversions[from] / weightConversions[to]);
    document.getElementById('weight-result').innerText = `ผลลัพธ์: ${result.toFixed(2)} ${to}`;
}

function convertTemperature() {
    const input = parseFloat(document.getElementById('temperature-input').value);
    const from = document.getElementById('temperature-from').value;
    const to = document.getElementById('temperature-to').value;
    let result;

    if (from === 'celsius' && to === 'fahrenheit') {
        result = (input * 9/5) + 32;
    } else if (from === 'fahrenheit' && to === 'celsius') {
        result = (input - 32) * 5/9;
    } else {
        result = input;
    }

    document.getElementById('temperature-result').innerText = `ผลลัพธ์: ${result.toFixed(2)} °${to.charAt(0).toUpperCase()}`;
}
