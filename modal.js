// Popup function for small screen warning.
export let smallScreenModal = function(msg, btn) {
  // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
  // Select elements
  const body = document.querySelector("body");
  const template = document.querySelector("#modal");
  // Clone the template
  const clone = template.content.cloneNode(true);
  let content = clone.querySelector(".modal-content");
  // Modal should fill 80% of screen height
  content.style = "min-height: 80vh;";
  // Adding <p> tag:
  let p = document.createElement("p");
  p.textContent = msg;
  content.appendChild(p);
  // Adding <button>:
  let button = document.createElement("button");
  button.textContent = btn;
  button.onclick = function() {return this.parentNode.parentNode.remove()};
  content.appendChild(button);
  // Add modal to body
  body.appendChild(clone);
};

export let showModal = function(e, [type, value]) {
  // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
  // Select elements
  const body = document.querySelector("body");
  const template = document.querySelector("#modal");
  // Clone the template
  const clone = template.content.cloneNode(true);
  let content = clone.querySelector(".modal-content");
  // Determine type of modal.
  if (type === 'p') {
    // Adding <p> tag:
    let p = document.createElement("p");
    p.textContent = value;
    content.appendChild(p)
  } else if (type === 'iframe') {
    // Adding <iframe> tag with video url:
    let iframe = document.createElement("iframe");
    // Styling
    iframe.allowFullscreen = true;
    iframe.width = "100%";
    iframe.style = "min-height: 80vh;";
    iframe.frameBorder = "0";
    // Set url of iframe to value
    iframe.src = value;
    content.appendChild(iframe);
  } else if (type === 'img') {
    // Adding <img> tag with img url:
    let img = document.createElement("img");
    // Styling
    img.style = "width: 100%; min-height: 80vh;";
    // Set url of img to value
    img.src = value;
    content.appendChild(img);
  }
  // Add modal to body
  body.appendChild(clone);
};