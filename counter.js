// Get the elements for status1 and its buttons
const status1 = document.getElementById('status1');
const Btn1add = document.getElementById('Btn1add');
const Btn1Min = document.getElementById('Btn1Min');

// Get the elements for status2 and its buttons
const status2 = document.getElementById('status2');
const Btn2add = document.getElementById('Btn2add');
const Btn2Min = document.getElementById('Btn2Min');

// Get the elements for status3 and its buttons
const status3 = document.getElementById('status3');
const Btn3add = document.getElementById('Btn3add');
const Btn3Min = document.getElementById('Btn3Min');

// Get the reset button
const resetBtn = document.getElementById('resetBtn');

// Initialize variables to store status values
let status1Value = 0;
let status2Value = 0;
let status3Value = 0;

// Event listener for Btn1add
Btn1add.addEventListener('click', function() {
    if (status1Value < 33) {
        status1Value += 1;
        status1.innerText = status1Value;
    } else {
        alert("এই ধাপটি সম্পন্ন হয়েছে");
    }
});

// Event listener for Btn1Min
Btn1Min.addEventListener('click', function() {
    if (status1Value <= 0) {
        alert("বিয়োগ মান করা যাবে না ");
    } else {
        status1Value -= 1;
        status1.innerText = status1Value;
    }
});

// Event listener for Btn2add
Btn2add.addEventListener('click', function() {
    if (status2Value < 33) {
        status2Value += 1;
        status2.innerText = status2Value;
    } else {
        alert("এই ধাপটি সম্পন্ন হয়েছে");
    }
});

// Rest of the Btn2Min, Btn3add, Btn3Min, resetBtn event listeners...

// Event listener for Btn2Min
Btn2Min.addEventListener('click', function() {
    if (status2Value <= 0) {
        alert("বিয়োগ মান করা যাবে না ");
    } else {
        status2Value -= 1;
        status2.innerText = status2Value;
    }
});

// Event listener for Btn3add
Btn3add.addEventListener('click', function() {
    if (status3Value < 33) {
        status3Value += 1;
        status3.innerText = status3Value;
    } else {
        alert("এই ধাপটি সম্পন্ন হয়েছে");
    }
});

// Event listener for Btn3Min
Btn3Min.addEventListener('click', function() {
    if (status3Value <= 0) {
        alert("বিয়োগ মান করা যাবে না ");
    } else {
        status3Value -= 1;
        status3.innerText = status3Value;
    }
});

// Event listener for resetBtn
resetBtn.addEventListener('click', function() {
    status1Value = 0;
    status1.innerText = status1Value;

    status2Value = 0;
    status2.innerText = status2Value;

    status3Value = 0;
    status3.innerText = status3Value;
});
