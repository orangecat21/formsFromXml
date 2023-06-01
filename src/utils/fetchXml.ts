export const getDocument = () =>
  fetch("http://127.0.0.1:8080/aai_oxm_v27.xml")
    .then((response) => response.text())
    .then((text) => new DOMParser().parseFromString(text, "text/xml"));
