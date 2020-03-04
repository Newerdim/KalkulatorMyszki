window.onload = () => {
    document.getElementById('input-group').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            Calc();
        }
    });
}

function Calc() {
    const width = document.getElementById('screenWidth').value;
    const height = document.getElementById('screenHeight').value;
    const dpi = document.getElementById('mouseDpi').value;

    if (!width || !height || !dpi) {
        document.getElementById('error').innerHTML = 'Wprowadź wszystkie dane!';
        return;
    }

    document.getElementById('error').innerHTML = '';

    let distanceA = width / dpi * 2.54;
    let distanceB = height / dpi * 2.54;
    let distanceC = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / dpi * 2.54;
    let onePixel = 2.54 / dpi;
    distanceA = Math.floor(distanceA * 100) / 100;
    distanceB = Math.floor(distanceB * 100) / 100;
    distanceC = Math.floor(distanceC * 100) / 100;
    onePixel = Math.floor(onePixel * 100) / 100;

    document.getElementById('valueA').innerHTML = `A = ${distanceA}cm`;
    document.getElementById('valueB').innerHTML = `B = ${distanceB}cm`;
    document.getElementById('valueC').innerHTML = `C = ${distanceC}cm`;
    document.getElementById('value1').innerHTML = `Jeden pixel = ${onePixel}cm`;
}