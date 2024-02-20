const qrFormEl = document.getElementById("qrForm");
const qrContainerEl = document.getElementById("qrContainer");
const qrImageEl = document.getElementById("qrImage");
const qrInputTextEl = document.getElementById("qrInputText");
const generateBtnEl = document.getElementById("generateBtn");


const renderQRCode = (url) => {
    if(!url) return;
    generateBtnEl.innerText = "Generating Qr Code...";

    qrImageEl.src = url;
    

    const onImageLoad = ()=>{
        const interval = setInterval(()=>{
            qrContainerEl.classList.add("show");
            clearInterval(interval);
            generateBtnEl.innerText = "Qr Code Generated"

        },500);
        
       
    }

    qrImageEl.addEventListener("load",onImageLoad)
}



qrFormEl.addEventListener("submit",(event)=>{
    event.preventDefault();

    const formData = new FormData(qrFormEl);
    const textValue = formData.get("qrText");
    const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textValue}`

   renderQRCode(qrURL)
})

qrInputTextEl.addEventListener("keyup",()=>{
    if(!qrInputTextEl.value.trim()){
        qrContainerEl.classList.remove("show");
        generateBtnEl.innerText = "Generate QR Code"
    }
})
