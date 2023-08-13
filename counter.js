
const status2 = document.getElementById('status2');
const Btn2add = document.getElementById('Btn2add');
const Btn2Min = document.getElementById('Btn2Min');

const status3 = document.getElementById('status3');
const Btn3add = document.getElementById('Btn3add');
const Btn3Min = document.getElementById('Btn3Min');

let status2Value = 0 ;

Btn2add.addEventListener('click', function() {
    if(status2Value<33){
    status2Value +=1;
    status2.innerText= status2Value;
    }
    else{
        alert("এই ধাপটি সম্পন্ন হয়েছে");
    }
});

Btn2Min.addEventListener('click',function(){
    if(status2Value<=0){
        alert("বিয়োগ মান করা যাবে না ");
    }
    else{
        status2Value -= 1;
        status2.innerText= status2Value;
    }
})


let status3Value = 0 ;

Btn3add.addEventListener('click', function() {
    if(status3Value<33){
    status3Value +=1;
    status3.innerText= status3Value;
    }
    else{
        alert("এই ধাপটি সম্পন্ন হয়েছে");
    }
});

Btn3Min.addEventListener('click',function(){
    if(status3Value<=0){
        alert("বিয়োগ মান করা যাবে না ");
    }
    else{
        status3Value -= 1;
        status3.innerText= status3Value;
    }
})












// alternative option
function sAddbtn(){
    const subhanStutas = document.getElementById('subhanStutas');
    const subhanStutasText = subhanStutas.innerText;
    subhanStutasNum = parseInt(subhanStutasText);

    if(subhanStutasNum<33){
        const  newsubhanStutas =  subhanStutasNum +1;
        subhanStutas.innerText = newsubhanStutas ;
    }
    else{
        alert("এই ধাপটি সম্পন্ন হয়েছে");
    }
 
}

function sMaibtn(){
    const subhanStutas = document.getElementById('subhanStutas');
    const subhanStutasText = subhanStutas.innerText;
    subhanStutasNum = parseInt(subhanStutasText);

    if(subhanStutasNum<=0){
         alert("বিয়োগ মান করা যাবে না ");
    }
    else{
        const  newsubhanStutas =  subhanStutasNum -1;
        subhanStutas.innerText = newsubhanStutas ;
    }
}
