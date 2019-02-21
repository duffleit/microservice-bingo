var setBingoEventHandlers = (function() {
  const aspectsThreshold = 3;
  const aspects = [
    "independent-deployments",
    "autonomous-operations",
    "different-technologies",
    "strong-isolation",
    "diverse-scaling"
  ];

  const updateBody = () => {
    let body =
      "Hi,\r\nthanks for sharing your data. You have real swag!\r\n-----------------\r\nPlease tell me if you have choose to go with microservices: (YES|NO)\r\n-----------------\r\nselected aspects:\r\n";
    aspects.forEach(aspect => {
      const aspectElement = document.getElementById(aspect);
      const isActive = aspectElement.classList.contains("active");

      body += aspect + ": ";
      body += isActive ? "yes" : "no";
      body += "\r\n";
    });
    body += "\r\n\r\nbest, David";
    document.getElementById("submit-button").href =
      "mailto:microservices@leitner.io?subject=Microservice-Bingo&body=" + encodeURIComponent(body);
  };

  const setFormTouched = () => {
    document.getElementById("result").classList.remove("hidden");
  };

  const updateResult = () => {
    const count = aspects.filter(aspect => {
      const aspectElement = document.getElementById(aspect);
      return aspectElement.classList.contains("active");
    }).length;

    if (count > aspectsThreshold) {
      document.getElementById("result-yes").classList.remove("hidden");
      document.getElementById("result-no").classList.add("hidden");
    } else {
      document.getElementById("result-yes").classList.add("hidden");
      document.getElementById("result-no").classList.remove("hidden");
    }
  };

  aspects.forEach(aspect => {
    const aspectElement = document.getElementById(aspect);
    aspectElement.addEventListener("click", () => {
      const isActive = aspectElement.classList.contains("active");
      if (isActive) {
        aspectElement.classList.remove("active");
      } else {
        aspectElement.classList.add("active");
      }
      setFormTouched();
      updateBody();
      updateResult();
    });
  });
})();
