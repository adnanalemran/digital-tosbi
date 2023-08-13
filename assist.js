let status1Value = 0 ;

Btn1add.addEventListener('click', function() {
    if(status1Value<33){
    status1Value +=1;
    status1.innerText= status1Value;
    }
    else{
        alert("এই ধাপটি সম্পন্ন হয়েছে");
    }
});

Btn1Min.addEventListener('click',function(){
    if(status1Value<=0){
        alert("বিয়োগ মান করা যাবে না ");
    }
    else{
        status1Value -= 1;
        status1.innerText= status1Value;
    }
})
