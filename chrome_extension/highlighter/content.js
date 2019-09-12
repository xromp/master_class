/**
 * @fileoverview Description of this file.
 */
console.log("Chrome extension go!");

/* 
// Clearing all the components in a existing web page and replace with something else
document.body.textContent="";
const img = document.createElement("img")
img.src = chrome.extension.getURL("thanos.gif");
img.classList.add("thanos");
document.body.append(img);
 */

/* 
// Highlighting titles in Stack Overflow
const titles = document.querySelectorAll(".summary > h3");

for (const title of titles) {
    title.classList.add("highlight");
}  
*/

console.log('Kittens of the world, unite as one!');

let filenames = [
  "freddie-marriage-40645.jpg",
  "koen-eijkelenboom-353684.jpg",
  "mikhail-vasilyev-130018.jpg",
  "mikhail-vasilyev-253977.jpg",
  "roxanne-desgagnes-277568.jpg"
];

/* let imgs = document.getElementsByTagName('img');

for (let imgElt of imgs) {
  let r = Math.floor(Math.random() * filenames.length);
  let file = 'images/kittens/' + filenames[r];
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  console.log(url);
} */


function replaceImgWithKittens() {
    let imgs = document.getElementsByTagName('img');

    for (let imgElt of imgs) {
    let r = Math.floor(Math.random() * filenames.length);
    let file = 'images/kittens/' + filenames[r];
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
    console.log(url);
    }
}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
    if (message.isEnable) {
        replaceImgWithKittens();
    }
}