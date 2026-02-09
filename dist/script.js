export {};
var currentChat = { messages: [] };
/**
 * Simulates a bot response to a user message
 * @param {string} userMessage - The user's message
 * @returns {string} - The bot's response
 */
function simulateBotResponse(userMessage) {
    // Simulate bot response with a delay
    setTimeout(function () {
        var botReply = "You said: \"".concat(userMessage, "\"");
        sendMessage('Echo', botReply);
    }, 500);
}
/**
 * Sends a message in the current chat
 * @param {string} role - The role of the message sender ('User' or 'Echo')
 * @param {string} message - The message content
 */
function sendMessage(role, message) {
    var msg = { role: role, content: message };
    currentChat.messages.push(msg);
    localStorage.setItem('chat', JSON.stringify(currentChat));
    renderMessages(currentChat.messages);
}
/**
 * Renders the messages in the chat current selected
 * @param {{role: string, content: string}[]} messages - The messages to render
 */
function renderMessages(messages) {
    var container = document.getElementById('messages');
    container.innerHTML = '';
    for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
        var msg = messages_1[_i];
        var bubble = document.createElement('div');
        bubble.classList.add('message');
        bubble.classList.add(msg.role === 'User' ? 'message-user' : 'message-bot');
        var roleLabel = document.createElement('div');
        roleLabel.classList.add('message-role');
        roleLabel.textContent = msg.role;
        var content = document.createElement('div');
        content.textContent = msg.content;
        bubble.appendChild(roleLabel);
        bubble.appendChild(content);
        container.appendChild(bubble);
    }
    // scroll to the bottom so the newest message is visible
    var chatArea = document.getElementById('chat-area');
    chatArea.scrollTop = chatArea.scrollHeight;
}
/**
 * Creates a new chat
 * @requirements
 * - If no chat exists, create a new chat object and stores it in local storage
 * - If a chat exits, delete the old chat object and creates a new one
 * - Always render the chat list and messages after creating a new chat
 */
function createNewChat() {
    currentChat = { messages: [] };
    localStorage.setItem('chat', JSON.stringify(currentChat));
    renderMessages(currentChat.messages);
}
/**
 * Initializes the app
 * @requirements
 * - Fetch the chat object from local storage
 * - Renders the chat messages from the saved chat
 * - If no chat exists, create a new chat
 */
function initializeApp() {
    var saved = localStorage.getItem('chat');
    if (saved) {
        var parsed = JSON.parse(saved);
        currentChat = parsed;
        renderMessages(currentChat.messages);
    }
    else {
        createNewChat();
    }
}
// Event listener to reset the chat messages when the "New Chat" button is clicked
var newChatBtn = document.getElementById('new-chat-btn');
newChatBtn.addEventListener('click', function () {
    createNewChat();
});
// Event listener to handle sending messages when the user submits the chat input form
var chatForm = document.getElementById('chat-form');
var chatInput = document.getElementById('chat-input');
var sendBtn = document.getElementById('send-btn');
// disable send button when input is empty
chatInput.addEventListener('input', function () {
    sendBtn.disabled = chatInput.value.trim() === '';
});
chatForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var text = chatInput.value.trim();
    if (text === '') {
        return;
    }
    sendMessage('User', text);
    simulateBotResponse(text);
    chatInput.value = '';
    sendBtn.disabled = true;
});
// Initialize the app upon reload
initializeApp();
