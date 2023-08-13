document.addEventListener('DOMContentLoaded', function () {
    const progressElement1 = document.getElementById('progress1');
    const statusElement1 = document.getElementById('status1');
    const Btn1add = document.getElementById('Btn1add');
    const Btn1Min = document.getElementById('Btn1Min');

    const progressElement2 = document.getElementById('progress2');
    const statusElement2 = document.getElementById('status2');
    const Btn2add = document.getElementById('Btn2add');
    const Btn2Min = document.getElementById('Btn2Min');

    const progressElement3 = document.getElementById('progress3');
    const statusElement3 = document.getElementById('status3');
    const Btn3add = document.getElementById('Btn3add');
    const Btn3Min = document.getElementById('Btn3Min');

    let value1 = 0;

    Btn1add.addEventListener('click', function () {
        if (value1 < 33) {
            value1 += 1;
            statusElement1.innerText = value1;
            progressElement1.value = (value1 / 33) * 100;
        } else {
            alert("এই ধাপটি সম্পন্ন হয়েছে");
        }
    });

    Btn1Min.addEventListener('click', function () {
        if (value1 > 0) {
            value1 -= 1;
            statusElement1.innerText = value1;
            progressElement1.value = (value1 / 33) * 100;
        } else {
            alert("বিয়োগ মান করা যাবে না");
        }
    });

    let value2 = 0;

    Btn2add.addEventListener('click', function () {
        if (value2 < 33) {
            value2 += 1;
            statusElement2.innerText = value2;
            progressElement2.value = (value2 / 33) * 100;
        } else {
            alert("এই ধাপটি সম্পন্ন হয়েছে");
        }
    });

    Btn2Min.addEventListener('click', function () {
        if (value2 > 0) {
            value2 -= 1;
            statusElement2.innerText = value2;
            progressElement2.value = (value2 / 33) * 100;
        } else {
            alert("বিয়োগ মান করা যাবে না");
        }
    });

    let value3 = 0;

    Btn3add.addEventListener('click', function () {
        if (value3 < 33) {
            value3 += 1;
            statusElement3.innerText = value3;
            progressElement3.value = (value3 / 33) * 100;
        } else {
            alert("এই ধাপটি সম্পন্ন হয়েছে");
        }
    });

    Btn3Min.addEventListener('click', function () {
        if (value3 > 0) {
            value3 -= 1;
            statusElement3.innerText = value3;
            progressElement3.value = (value3 / 33) * 100;
        } else {
            alert("বিয়োগ মান করা যাবে না");
        }
    });
});

const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', function () {
    const confirmed = confirm("আপনি কি সব স্ট্যাটাস রিসেট করার বিষয়ে নিশ্চিত?");
    if (confirmed) {
        const progressElements = document.querySelectorAll('.progress');
        const statusElements = document.querySelectorAll('.card-title');

        progressElements.forEach((progressElement) => {
            progressElement.value = 0;
        });

        statusElements.forEach((statusElement) => {
            statusElement.innerText = '0';
        });
    }
});
