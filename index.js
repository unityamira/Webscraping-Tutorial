function redirectAction() {
    var suspect = document.getElementById("suspect").value;
    var form = this;

    var suspect_lower = suspect.toLowerCase();
    var trimmed_suspect = suspect_lower.trim();
    var suspect_submit = trimmed_suspect.replace(/\s+/g, '-');
    
    location.assign("https://unityamira.github.io/Webscraping-Tutorial/accuse/" + suspect_submit);
    form.submit();
  }