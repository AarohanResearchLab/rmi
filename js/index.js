document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            output(input);
        }
    });
});




function chstmassege() {
    const inputField = document.getElementById("input");
    let input = inputField.value;
    inputField.value = "";
    output(input);
}

function output(input) {
    let product;

    // Regex remove non word/space chars
    // Trim trailing whitespce
    // Remove digits - not sure if this is best
    // But solves problem of entering something like 'hi1'

    let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
    text = text
        .replace(/ a /g, " ") // 'tell me a story' -> 'tell me story'
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "")
        .replace(/r u/g, "are you");

    if (compare(prompts, replies, text)) {
        // Search for exact match in `prompts`
        product = compare(prompts, replies, text);
    } else if (text.match(/thank/gi)) {
        product = "You're welcome!"
    } else if (text.match(/(corona|covid|virus)/gi)) {
        // If no match, check if message contains `coronavirus`
        product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
    } else {
        // If all else fails: random alternative
        product = alternative[Math.floor(Math.random() * alternative.length)];
    }

    // Update DOM
    addChat(input, product);
}

function compare(promptsArray, repliesArray, string) {
    let reply;
    let replyFound = false;
    for (let x = 0; x < promptsArray.length; x++) {
        for (let y = 0; y < promptsArray[x].length; y++) {
            if (promptsArray[x][y] === string) {
                let replies = repliesArray[x];
                reply = replies[Math.floor(Math.random() * replies.length)];
                replyFound = true;
                // Stop inner loop when input value matches prompts
                break;
            }
        }
        if (replyFound) {
            // Stop outer loop when reply is found instead of interating through the entire array
            break;
        }
    }
    return reply;
}

function addChat(input, product) {
    const messagesContainer = document.getElementById("messages");



    let botDiv = document.createElement("div");
    let botImg = document.createElement("img");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botDiv.className = "chat-bubble you";
    botText.innerText = "Typing...";
    botDiv.appendChild(botText);
    botDiv.appendChild(botImg);
    messagesContainer.appendChild(botDiv);
    // Keep messages at most recent
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
    botText.innerText = `${product}`;

    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "chat-bubble me";
    userDiv.innerHTML = `${input}`;
    messagesContainer.appendChild(userDiv);
    // Fake delay to seem "real"
    // setTimeout(() => {
    //   botText.innerText = `${product}`;
    //   textToSpeech(product)
    // }, 2000
    // )

}

function validatechat() {

    $(".startchat").each(function() {
        if ($(this).val() == '') {

            $(this).focus();
            $(this).addClass('error');




        } else {

            $('.chat-mail').addClass('hide');
            $('.chat-body').removeClass('hide');
            $('.chat-input').removeClass('hide');
            $('.chat-header-option').removeClass('hide');


        }
    });

}

function validateEmail(email) {

    var mail = email.value;
    const checkmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!checkmail.test(mail)) {
        $(this).focus();
        $('#email').addClass('error');
        $('#email').val('');

    } else {

        $('#email').removeClass('error');

    }
}

function GetChat(chatID) {

    const messagesContainer = $('#messages');

    if ($(chatID).attr('id') == 'knowProduct') {
        var userDiv =
            '  <div class="chat-bubble you">Please choose one of our products category.</div> <span style="text-align: right;float: right;">' +
            ' <a class="btn-question" id="ourproduct" href="project.html?id=roll" Style="text-decoration: none;">Rolling Machine</a>' +
            '<a class="btn-question" id="ourservices" href="project.html?id=wire " Style="text-decoration: none;">Wire Drawing Machine</a>' +
            '<a class="btn-question" id="salesdemo" href="project.html?id=hydras" Style="text-decoration: none;">Hydraulics</a>' +
            '<a class="btn-question" id="salesdemo" href="project.html?id=furnance" Style="text-decoration: none;">Furnace Machine</a>' +
            '<a class="btn-question" id="salesdemo" href="project.html?id=tools" Style="text-decoration: none;">Tools & Accessories</a>' +
            '<a class="btn-question" id="salesdemo" href="project.html?id=hollow" Style="text-decoration: none;">Hollow chain setup</a>' +
            '<a class="btn-question" id="salesdemo" href="project.html?id=video" Style="text-decoration: none;">Brochure & Video</a>' +

            '</span>';
        $('#knowProduct').attr("disabled", true)
        messagesContainer.append(userDiv);

    }
    if ($(chatID).attr('id') == 'askquestion') {

        var userDiv =
            '  <div class="chat-bubble you askquestionanswer">Please put in your question. We shall share an adequate reply shortly.  </div> <span style="text-align: right;float: right;">';
        $('#askquestion').attr("disabled", true)
        messagesContainer.append(userDiv);

    }

    if ($(chatID).attr('id') == 'service') {

        var userDiv =
            '<div class="chat-bubble you ">We are here to support you..  </div> <span style="text-align: right;float: right;">' +

            ' <a class="btn-question" id="callsupport" href="#" onclick="GetChat(this);" Style="text-decoration: none;"> Call Support</a>' +
            '<a class="btn-question" id="mailsupport"  href="#"  onclick="GetChat(this);" Style="text-decoration: none;">Mail Support</a>' +
            '<a class="btn-question" id="toolaccessories" href="project.html?id=tools" Style="text-decoration: none;">Tools & Accessories </a>';

        $('#service').attr("disabled", true)
        messagesContainer.append(userDiv);

    }

    if ($(chatID).attr('id') == 'callsupport') {

        var userDiv =
            '  <div class="chat-bubble you askquestionanswer"> Call Support: <br> Sales:  +91 78740-81360,  <br> +91 95100-26428,  <br>' +
            ' +91 93747-10436   <br> Administrator: +91 81609-35884 </div> <span style="text-align: right;float: right;">';
        $('#callsupport').attr("disabled", true)
        messagesContainer.append(userDiv);

    }
    if ($(chatID).attr('id') == 'mailsupport') {

        var userDiv =
            '  <div class="chat-bubble you askquestionanswer"> Mail Support: <br> Email Us : info@ravimalviyaindustries.com   <br> commercials@ravimalviyaindustries.com' +
            ' </div> <span style="text-align: right;float: right;">';
        $('#mailsupport').attr("disabled", true)
        messagesContainer.append(userDiv);

    }

    if ($(chatID).attr('id') == 'salesDemo') {

        var userDiv =
            '  <div class="chat-bubble you "> Email Us : info@ravimalviyaindustries.com   <br> commercials@ravimalviyaindustries.com' +
            ' </div>  ' +
            '  <div class="chat-bubble you askquestionanswer"> Sales:  +91 78740-81360,  <br> +91 95100-26428,  <br>' +
            ' +91 93747-10436   <br> Administrator: +91 81609-35884 </div> ' +
            ' <span style="text-align: right;float: right;"> <a class="btn-question" id="interested" href="#" onclick="GetChat(this);" Style="text-decoration: none;"> Are you interested?</a></span>  ';

        $('#salesDemo').attr("disabled", true)
        messagesContainer.append(userDiv);

    }
    if ($(chatID).attr('id') == 'interested') {

        var userDiv =
            '  <div class="chat-bubble you askquestionanswer">  We will reach you soon.' +
            ' </div> <span style="text-align: right;float: right;">';
        $('#interested').attr("disabled", true)
        messagesContainer.append(userDiv);

    }

    $("#messages").animate({ scrollTop: $('#messages').height() }, "slow");
}