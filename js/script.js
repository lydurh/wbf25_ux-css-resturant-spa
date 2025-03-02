'use strict';

document.querySelector("#button-home").addEventListener("click", outPutHome);

document.querySelector("#button-menu").addEventListener("click", outPutMenu);

document.querySelector("#button-contact").addEventListener("click", outPutContact);




function showConent(templateId) {
  const template = document.querySelector(templateId);
  const content = template.content.cloneNode(true);

  const mainContent = document.querySelector("#main-content");
  mainContent.innerHTML = '';
  mainContent.appendChild(content);
}

function outPutHome() {
  showConent("#template-home");
}

function outPutMenu() {
  showConent("#template-menu")
}

function outPutContact() {
  showConent("#template-contact");
}