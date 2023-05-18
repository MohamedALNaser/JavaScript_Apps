let saturate = document.querySelector("#saturate");
let contrast = document.querySelector("#contrast");
let brightness = document.querySelector("#brightness");
let sepia = document.querySelector("#sepia");
let grayscale = document.querySelector("#grayscale");
let blur = document.querySelector("#blur");
let hueRotate = document.querySelector("#hue-rotate");

let downLoad = document.querySelector("#download");
let reset = document.querySelector(".reset");
let uplaod = document.querySelector("#uplaod");

let imgBox = document.querySelector(".img-box");
let img = document.querySelector("#img");
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

function resetValues() {
    img.style.filter = "none";
    saturate.value = saturate.defaultValue;
    contrast.value = contrast.defaultValue;
    brightness.value = brightness.defaultValue;
    sepia.value = sepia.defaultValue;
    grayscale.value = grayscale.defaultValue;
    blur.value = blur.defaultValue;
    hueRotate.value = hueRotate.defaultValue;
}
window.onload = function() {
    downLoad.style.display = "none";
    imgBox.style.display = "none";
    reset.style.display = "none";
}
let imgItem;
uplaod.addEventListener("click", () => {
    uplaod.onchange = function() {
        resetValues();
        imgItem = uplaod.files[0];
        downLoad.style.display = "block";
        imgBox.style.display = "block";
        reset.style.display = "block";
        let file = new FileReader();
        file.readAsDataURL(imgItem);
        file.onload = () => {
            img.src = file.result;

            // console.log(
            //     imgItem.name,
            //     imgItem.type
            // )

        }
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
            img.style.display = "none";
            console.log(
                canvas.toDataURL(imgItem.type)
            )
        }
    }
})

let filters = document.querySelectorAll(".filters ul li input");
filters.forEach((filter) => {
    filter.addEventListener("input", () => {
        ctx.filter = `
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            brightness(${brightness.value}%)
            sepia(${sepia.value}%)
            grayscale(${grayscale.value})
            blur(${blur.value}px)
            hue-rotate(${hueRotate.value}deg)
        `;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    })
})

reset.addEventListener("click", () => { resetValues() })


downLoad.addEventListener("click", () => {
    let imgName = imgItem.name;
    let imginfo = imgItem.name;
    imgName = imgName.match(/(?=.)\w+/ig);
    imginfo = imgItem.name.replaceAll(`.`, " ");
    imgName = imginfo.replace(`${imgName[imgName.length-1]}`, "[edit]");
    downLoad.download = imgName;
    downLoad.href = canvas.toDataURL(imgItem.type);
})