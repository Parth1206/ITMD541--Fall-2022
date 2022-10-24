let billTotal;
let rangeCalculator;
let tipPercent;
let tipAmount;
let totalBillWithTip;
let tipPercentDisplay = 0;

window.addEventListener('change',function(){

    billTotal = document.getElementById("billTotal");
    rangeCalculator = document.getElementById("rangeCalculator");
    tipPercent = document.getElementById("tipPercent");
    tipAmount = document.getElementById("tipAmount");
    totalBillWithTip = document.getElementById("totalBillWithTip");

    function getData(){

        billTotal = parseInt(billTotal.value);
        tipPercentDisplay = rangeCalculator.value;
        tipPercent = rangeCalculator.value / 100;
        tipAmount = tipPercent * billTotal;
        tipAmount.toFixed(2);
        totalBillWithTip = billTotal + tipAmount;
        totalBillWithTip = totalBillWithTip.toFixed(2);

        validateBill();
        document.getElementById("tipPercent").value = tipPercentDisplay;
        document.getElementById("tipAmount").value = tipAmount;
        document.getElementById("totalBillWithTip").value = totalBillWithTip;

        console.log("Bill Total" + billTotal);
        console.log("Tip percent Display" + tipPercentDisplay);
        console.log("Tip Percent " + tipPercent);
        console.log("Tip Amount " + tipAmount);
        console.log("Total BIll With Tip " + totalBillWithTip);

        validateData();
        }

        function validateData(){
            if(billTotal.value = NaN && billTotal.value == null){
                alert("Bill Amount cannot be null");
                console.log("Worked here 2");
            }

           //getData();
        }

        getData();
        
    });

    function validateBill(){
        if(isNaN(billTotal)){
            alert("Please enter valid input");
            
        }
        if(billTotal == 0){
            alert("Bill Value must not be 0");
        }
    }