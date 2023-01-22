function calc(){
  let amt = document.getElementById("billamt").value;
  let pplAmt = document.getElementById("peopleamt").value;
 
  if(amt==""){
  alert("Please Enter Bill Amount");
  }
   function update() {
      var select = document.getElementById('serviceQual');
      var option = select.options[select.selectedIndex];

      select.value = option.value;
                  if(pplAmt>1){
                  let num = (select.value*amt)/pplAmt ;
                  let n = num.toFixed(2);
                  document.getElementById("tip").innerHTML=`TIP AMOUNT<br>${n} <br>Each`;
                  }else{
                   let num = (select.value*amt)/pplAmt ;
                  let n = num.toFixed(2);
                  document.getElementById("tip").innerHTML=`TIP AMOUNT<br>${n}`;
                  }
      
    }

    update();

}