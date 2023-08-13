

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