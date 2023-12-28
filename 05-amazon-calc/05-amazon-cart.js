function keyDown(event){
        if (event.key === 'Enter'){
                calculateCost();
        }
}

function calculateCost(){
        const inputElement = document.querySelector('.amz-cost');
        let cost = Number(inputElement.value);

        if (cost < 40){
                cost += 10;
        }

        document.querySelector('.total-cost').innerHTML = `$${cost}`;
}