$(function() {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keyup", (e) => {

        if (e.code === "Enter") {

            let input = inputField.value;
            inputField.value = "";
            const messagesContainer = document.getElementById("messages");

            let userDiv = document.createElement("div");
            userDiv.id = "user";
            userDiv.className = "chat-bubble me";
            userDiv.innerHTML = `${input}`;
            messagesContainer.appendChild(userDiv);
            if (input == '') {
                input = 'Product';
            }
            setTimeout(() => {
                output(input);
            }, 2000);

        }
    });
});


function chstmassege() {
    const inputField = document.getElementById("input");
    let input = inputField.value;
    inputField.value = "";

    const messagesContainer = document.getElementById("messages");

    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "chat-bubble me";
    userDiv.innerHTML = `${input}`;
    messagesContainer.appendChild(userDiv);
    if (input == '') {
        input = 'Product';
    }

    setTimeout(() => {
        output(input);
    }, 2000)

}


function retriveDATAFromText(text, promptsArray) {
    let reply;
    let replyFound = false;
    var foundstring = '';
    var splittext = text.split(' ');
    for (var i = 0; i < splittext.length; i++) {
        // console.log(x[i]);
        for (let x = 0; x < promptsArray.length; x++) {
            for (let y = 0; y < promptsArray[x].length; y++) {
                if (promptsArray[x][y].toLowerCase() === splittext[i].toLowerCase()) {
                    foundstring = splittext[i];
                    //console.log(splittext[i]);
                    // reply = replies[Math.floor(Math.random() * replies.length)];
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
        if (replyFound) {
            // Stop outer loop when reply is found instead of interating through the entire array
            break;
        }
    }

    return foundstring;
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

    string = retriveDATAFromText(string, promptsArray)

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


    if(product=="I don't understand :/"){
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

        messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
        botText.innerText = `${'Sorry I could not understand! Please try again.'}`;

        const messagesContainer1 = $('#messages');
        
       
         
    }
    

    if (product == 'Please choose one of following') {
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

        messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
        botText.innerText = `${'Please choose from the followings'}`;

        const messagesContainer1 = $('#messages');
        var userDiv =
            '<span style="text-align: right;float: right;">' +
            // '<button class="btn-question" id="askquestion" onclick="GetChat(this);"> Ask a Question?</button>' +
          
            ' <button class="btn-question" id="knowProduct" onclick="GetChat(this);" > Our Products</button>' +
            ' <button class="btn-question" id="service" onclick="GetChat(this);">Services</button>' +
            ' <button class="btn-question" id="salesDemo" onclick="GetChat(this);">Sales / Demo</button>' +
            '  <div class="chat-bubble you askquestionanswer"> Or ask me anything. </div></span>';

        messagesContainer1.append(userDiv);

         

    }

    if (product == 'About US') {

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

        messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
        botText.innerText = `${'Ravi Malviya Industries Pvt. Ltd. manufactures Gold Machinery using the outstanding Manufacturing Technique. Over the years the company has grown and diversified into areas of manufacturing, exporting, importing and trading a high-quality assortment of the Jewellery Machinery.'}`;

        const messagesContainer1 = $('#messages');

        var userDiv =
            '<span style="text-align: right;float: right;">' +
            '<a class="btn-question" id="salesdemo" href="about.html" Style="text-decoration: none;">Learn More</a>' +
            '  </span>';

        messagesContainer1.append(userDiv);

    }

    if (product == 'Rolling Machine') {

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

        messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
        botText.innerText = `${'Click the below button to know more about '+product+'.' }`;

        const messagesContainer1 = $('#messages');

        var userDiv =
            '<span style="text-align: right;float: right;">' +
            ' <a class="btn-question" id="ourproduct" href="project.html?id=roll" Style="text-decoration: none;">Rolling Machine</a>' +
            '  </span>';

        messagesContainer1.append(userDiv);

    }
    if (product == 'Wire Drawing Machine') {

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

        messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
        botText.innerText = `${'Click the below button to know more about '+product+'.' }`;

        const messagesContainer1 = $('#messages');

        var userDiv =
            '<span style="text-align: right;float: right;">' +
            '<a class="btn-question" id="ourservices" href="project.html?id=wire " Style="text-decoration: none;">Wire Drawing Machine</a>' +
            '  </span>';

        messagesContainer1.append(userDiv);

    }
    if (product == 'Hydraulic') {

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

        messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
        botText.innerText = `${'Click the below button to know more about '+product+'.' }`;

        const messagesContainer1 = $('#messages');

        var userDiv =
            '<span style="text-align: right;float: right;">' +

            '<a class="btn-question" id="salesdemo" href="project.html?id=hydras" Style="text-decoration: none;">Hydraulics</a>' +
            '  </span>';

        messagesContainer1.append(userDiv);

    }
    if (product == 'Furnace Machine') {

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

        messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
        botText.innerText = `${'Click the below button to know more about '+product+'.' }`;

        const messagesContainer1 = $('#messages');

        var userDiv =
            '<span style="text-align: right;float: right;">' +

            '<a class="btn-question" id="salesdemo" href="project.html?id=furnance" Style="text-decoration: none;">Furnace Machine</a>' +
            '  </span>';

        messagesContainer1.append(userDiv);

    }
    if (product == 'Tools & Accessories') {

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

        messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
        botText.innerText = `${'Click the below button to know more about '+product+'.' }`;

        const messagesContainer1 = $('#messages');

        var userDiv =
            '<span style="text-align: right;float: right;">' +

            '<a class="btn-question" id="salesdemo" href="project.html?id=tools" Style="text-decoration: none;">Tools & Accessories</a>' +
            '  </span>';

        messagesContainer1.append(userDiv);

    }
    if (product == 'Hollow chain setup') {

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

        messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
        botText.innerText = `${'Click the below button to know more about '+product+'.' }`;

        const messagesContainer1 = $('#messages');

        var userDiv =
            '<span style="text-align: right;float: right;">' +

            '<a class="btn-question" id="salesdemo" href="project.html?id=hollow" Style="text-decoration: none;">Hollow chain setup</a>' +
            '  </span>';

        messagesContainer1.append(userDiv);


    }

    if (product == 'Brochure & Video') {

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

        messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
        botText.innerText = `${'Click the below button to know more about '+product+'.' }`;

        const messagesContainer1 = $('#messages');

        var userDiv =
            '<span style="text-align: right;float: right;">' +

            '<a class="btn-question" id="salesdemo" href="project.html?id=video" Style="text-decoration: none;">Brochure & Video</a>' +
            '  </span>';

        messagesContainer1.append(userDiv);

    }
    if (product == 'Careers') {

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

        messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
        botText.innerText = `${"We are Manufacture of Gold Machineries using world's Best Manufacturing practice. We make great efforts in selecting the right candidates and invest heavily to provide the retention and training."}`;

        const messagesContainer1 = $('#messages');

        var userDiv =
            '<span style="text-align: right;float: right;">' +

            '<a class="btn-question" id="salesdemo" href="carrier.html " Style="text-decoration: none;">Learn More</a>' +
            '  </span>';
         

        messagesContainer1.append(userDiv);

    }
    if (product == 'Contact us') {

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

        messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
        botText.innerText = `${"We are Manufacture of Gold Machineries using world's Best Manufacturing practice. We make great efforts in selecting the right candidates and invest heavily to provide the retention and training."}`;

        const messagesContainer1 = $('#messages');

        var userDiv =
            '  <div class="chat-bubble you askquestionanswer"> Explore our product Brochure & Video, we will reach you soon.' +
            ' </div> <span style="text-align: right;float: right;">';

            window.location.href = "RMI/project.html?id=video";
        messagesContainer1.append(userDiv);

    }

    if (product == 'Product') {

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

        messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
        botText.innerText = `${"Product Details."}`;

        const messagesContainer1 = $('#messages');


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

        messagesContainer1.append(userDiv);

    }
    $("#messages").animate({ scrollTop: $('#messages').height() }, "slow");
    var htmlString = $('#messages').html();
    sessionStorage.setItem("chatSession", htmlString);
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
     //   $('#knowProduct').attr("disabled", true)
        messagesContainer.append(userDiv);

    }
    if ($(chatID).attr('id') == 'askquestion') {

        var userDiv =
            '  <div class="chat-bubble you askquestionanswer">Please put in your question. We shall share an adequate reply shortly.  </div> <span style="text-align: right;float: right;">';
       // $('#askquestion').attr("disabled", true)
        messagesContainer.append(userDiv);

    }

    if ($(chatID).attr('id') == 'service') {

        var userDiv =
            '<div class="chat-bubble you ">We are here to support you..  </div> <span style="text-align: right;float: right;">' +

            ' <a class="btn-question" id="callsupport" href="#" onclick="GetChat(this);" Style="text-decoration: none;"> Call Support</a>' +
            '<a class="btn-question" id="mailsupport"  href="#"  onclick="GetChat(this);" Style="text-decoration: none;">Mail Support</a>' +
            '<a class="btn-question" id="toolaccessories" href="project.html?id=tools" Style="text-decoration: none;">Tools & Accessories </a>';

      //  $('#service').attr("disabled", true)
        messagesContainer.append(userDiv);

    }

    if ($(chatID).attr('id') == 'callsupport') {

        var userDiv =
            '  <div class="chat-bubble you askquestionanswer"> Call Support: <br> Sales:  +91 78740-81360,  <br> +91 95100-26428,  <br>' +
            ' +91 93747-10436   <br> Administrator: +91 81609-35884 </div> <span style="text-align: right;float: right;">';
      //  $('#callsupport').attr("disabled", true)
        messagesContainer.append(userDiv);

    }
    if ($(chatID).attr('id') == 'mailsupport') {

        var userDiv =
            '  <div class="chat-bubble you askquestionanswer"> Mail Support: <br> Email Us : ravimalviyaindustries@gmail.com   <br> office.ravimalviyaindustries@gmail.com' +
            ' </div> <span style="text-align: right;float: right;">';
      //  $('#mailsupport').attr("disabled", true)
        messagesContainer.append(userDiv);

    }

    if ($(chatID).attr('id') == 'salesDemo') {

        var userDiv =
            '  <div class="chat-bubble you "> Email Us : ravimalviyaindustries@gmail.com   <br> office.ravimalviyaindustries@gmail.com' +
            ' </div>  ' +
            '  <div class="chat-bubble you askquestionanswer"> Sales:  +91 78740-81360,  <br> +91 95100-26428,  <br>' +
            ' +91 93747-10436   <br> Administrator: +91 81609-35884 </div> ' +
            ' <span style="text-align: right;float: right;"> <a class="btn-question" id="interested" href="#" onclick="GetChat(this);" Style="text-decoration: none;"> Are you interested?</a></span>  ';

      //  $('#salesDemo').attr("disabled", true)
        messagesContainer.append(userDiv);

    }
    if ($(chatID).attr('id') == 'interested') {

        var userDiv =
            '  <div class="chat-bubble you askquestionanswer">  We will reach you soon.' +
            ' </div> <span style="text-align: right;float: right;">';
      //  $('#interested').attr("disabled", true)
        messagesContainer.append(userDiv);

    }

    $("#messages").animate({ scrollTop: $('#messages').height() }, "slow");
    var htmlString = $('#messages').html();
    sessionStorage.setItem("chatSession", htmlString);
    //localStorage.setItem("chatSession", htmlString);
    //localStorage.setItem("chatstrt", "true");
}