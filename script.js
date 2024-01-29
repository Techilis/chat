function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");
    
    var userMessage = "<div class='alert alert-primary' role='alert'>" + userInput + "</div>";
    chatBox.innerHTML += userMessage;
    
    // Clear input field
    document.getElementById("user-input").value = "";
    
    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}
