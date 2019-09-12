/**
 * @fileoverview Description of this file.
 */
(function() {
    window.addEventListener("DOMContentLoaded", loaded);
    
    function loaded() {
        let filenames = [
            "freddie-marriage-40645.jpg",
            "koen-eijkelenboom-353684.jpg",
            "mikhail-vasilyev-130018.jpg",
            "mikhail-vasilyev-253977.jpg",
            "roxanne-desgagnes-277568.jpg"
          ];

        let r = Math.floor(Math.random() * filenames.length);
        let file = 'images/kittens/' + filenames[r];
        const img = document.createElement("img")
        img.src = chrome.extension.getURL(file);
        img.classList.add("full-screen");
        document.body.append(img);
    }
})();
  