window.WebChat = {
  default: function (config) {
    const root = document.querySelector(config.selector || "body");
    const div = document.createElement("div");
    div.innerHTML = `
      <style>
        #fake-chatbox {border:1px solid #ccc; padding:1em; max-width:400px;}
        #fake-chatbox input {width:100%; margin-top:0.5em;}
      </style>
      <div id="fake-chatbox">
        <strong>${config.title}</strong><br/>
        <em>${config.subtitle}</em>
        <div id="response"></div>
        <input id="msgInput" placeholder="${config.inputTextFieldHint || 'Escribe...'}"/>
      </div>`;
    root.appendChild(div);

    document.getElementById("msgInput").addEventListener("keydown", async (e) => {
      if (e.key === "Enter") {
        const msg = e.target.value;
        e.target.value = "";
        const resDiv = document.getElementById("response");
        resDiv.innerHTML += "<br/><b>Tú:</b> " + msg;
        const response = await fetch(config.socketUrl + "/webhooks/rest/webhook", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({sender: "usuario", message: msg})
        });
        const data = await response.json();
        data.forEach(r => {
          resDiv.innerHTML += "<br/><b>Bot:</b> " + r.text;
        });
      }
    });
  }
};