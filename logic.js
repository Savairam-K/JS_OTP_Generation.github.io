const otpBtn = document.getElementById('btn');
const finalResult = document.getElementById('result');

otpBtn.addEventListener('click', () => {
    finalOTP = Math.floor(1000 + Math.random() * 9000);
    finalResult.textContent = `OTP is: ${finalOTP}`;
})