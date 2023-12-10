function getCurrentTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Ensure minutes and seconds are displayed with two digits
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // Create a string representation of the time
    var timeString = hours + ":" + minutes + ":" + seconds;

    return timeString;
  }

  // Function to show the welcome popup
  function showWelcomePopup() {
    // Create a container for the popup
    var popupContainer = document.createElement("div");
    popupContainer.id = "popupContainer";

    // Create content for the popup
    var welcomeMessage = document.createTextNode("欢迎访问本网站！");
    var timeMessage = document.createTextNode("当前时间：" + getCurrentTime());

    // Append content to the popup container
    popupContainer.appendChild(welcomeMessage);
    popupContainer.appendChild(document.createElement("br")); // Add a line break
    popupContainer.appendChild(timeMessage);

    // Append the popup container to the body
    document.body.appendChild(popupContainer);

    // Trigger a reflow to apply initial styles
    popupContainer.offsetHeight;

    // Add the 'visible' class to start the transition
    popupContainer.classList.add("visible");

    // Set a timeout to hide the popup after 1000 milliseconds (1 second)
    setTimeout(function() {
      popupContainer.classList.remove("visible");
    }, 2000); // Adjust the timeout as needed
  }

  // Execute the showWelcomePopup function after the document is fully loaded
  document.addEventListener("DOMContentLoaded", function() {
    showWelcomePopup();
  });
  document.addEventListener("DOMContentLoaded", function () {
    const messageBoard = document.getElementById("message-board");
    const addMessageBtn = document.getElementById("add-message-btn");
    const messageInput = document.getElementById("message-input");

    let messageId = 1;

    addMessageBtn.addEventListener("click", function () {
      const messageContent = messageInput.value.trim();
      if (messageContent === "") {
        alert("请输入留言内容！");
        return;
      }

      const messageDiv = document.createElement("div");
      messageDiv.classList.add("message");

      const now = new Date();
      const formattedTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

      messageDiv.innerHTML = `
    <span class="message-info">昵称: 用户${messageId} | 时间: ${formattedTime}</span>
    <p>${messageContent}</p>
    <button class="btn danger">删除</button>
  `;
      const firstMessage = messageBoard.firstChild;
      messageBoard.insertBefore(messageDiv, firstMessage);

      const deleteBtn = messageDiv.querySelector(".btn");
      deleteBtn.addEventListener("click", function () {
        messageBoard.removeChild(messageDiv);
      });
      // 清空输入框
      messageInput.value = "";
      messageId++;
    });
  });
