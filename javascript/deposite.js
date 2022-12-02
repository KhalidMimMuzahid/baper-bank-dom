// for the event of deposite button
document.getElementById('deposite-button').addEventListener('click', function(){
    // getting the amount of deposite input field as number
    const depositeInput = document.getElementById('deposite-input');
    const depositeValue=depositeInput.value;
    const depositeAmount= parseInt(depositeValue);

    // check the deposite input is valid or not
    if(isNaN(depositeAmount)){
        alert('please, enter a valid number');
        depositeInput.value="";
        return;
    }
    
    // getting the amount of total deposite as number
    const totalCurrentDeposite= document.getElementById('total-deposite');
    const totalCurrentDepositeString = totalCurrentDeposite.innerText;
    const totalCurrentDepositeAmount= parseInt(totalCurrentDepositeString);

    // updating the total deposite balance
    const totalDepositeUpdateBalance= totalCurrentDepositeAmount + depositeAmount;
    totalCurrentDeposite.innerText=totalDepositeUpdateBalance;

    // getting the amount of total current Balance
    const totalCurrentBalance= document.getElementById('total-balence');
    const totalCurrentBalanceString = totalCurrentBalance.innerText;
    const totalCurrentBalanceAmount= parseInt(totalCurrentBalanceString);
    
    //updating the total Current Balance
    const totalUpdateBalance= totalCurrentBalanceAmount + depositeAmount;
    totalCurrentBalance.innerText= totalUpdateBalance;
    
    depositeInput.value="";
    // console.log(totalCurrentBalanceAmount);
    // console.log(typeof(totalDepositeUpdateBalance));
})


// for the event of deposite button
document.getElementById('withdraw-button').addEventListener('click', function(){
    // getting the amount of withdraw input field as number
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValue=withdrawInput.value;
    const withdrawAmount= parseInt(withdrawValue);

    // check the deposite input is valid or not
    if(isNaN(withdrawAmount)){
        alert('please, enter a valid number');
        withdrawInput.value="";
        return;
    }

    // getting the amount of total withdraw as number
    const totalCurrentWithdraw= document.getElementById('total-withdraw');
    const totalCurrentWithdrawString = totalCurrentWithdraw.innerText;
    const totalCurrentWithdrawAmount= parseInt(totalCurrentWithdrawString);

    // getting the amount of total current Balance
    const totalCurrentBalance= document.getElementById('total-balence');
    const totalCurrentBalanceString = totalCurrentBalance.innerText;
    const totalCurrentBalanceAmount= parseInt(totalCurrentBalanceString);
    
    // Check the balance validity
    if( withdrawAmount > totalCurrentBalanceAmount ){
        alert('incuficient balance !');
        withdrawInput.value="";
        return;
    }
    
    // updating the total withdraw balance
    const totalWithdrawUpdateBalance= totalCurrentWithdrawAmount + withdrawAmount;
    totalCurrentWithdraw.innerText=totalWithdrawUpdateBalance;
    
    //updating the total Current Balance
    const totalUpdateBalance= totalCurrentBalanceAmount - withdrawAmount;
    totalCurrentBalance.innerText= totalUpdateBalance;
    
    withdrawInput.value="";
})

// logout button change the page to log in page
document.getElementById('log-out').addEventListener('click',function(){
    window.location.href = "index.html";
})