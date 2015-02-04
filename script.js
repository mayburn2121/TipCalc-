function myFunction() {

   

    var _total = document.getElementById("billTotal").value;
    var _percent = document.getElementById("tipPercent").value;
    

    var totalTip = parseInt(_total) * parseInt(_percent) / 100;
    var totalBill = parseInt(_total) + parseInt(totalTip);


    
    document.getElementById("tipAmount").innerHTML = (totalTip);
    document.getElementById("totalPay").innerHTML = (totalBill);

    return false;

}