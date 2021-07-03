player_name1 = localStorage.getItem("key1");
player_name2 = localStorage.getItem("key2");

player_score1 = 0;
player_score2 = 0;

document.getElementById("player_name1_1").innerHTML = player_name1 + " : ";
document.getElementById("player_name2_2").innerHTML = player_name2 + " : ";
document.getElementById("lol_span_1").innerHTML = player_score1;
document.getElementById("lol_span_2").innerHTML = player_score2;
document.getElementById("question-turn").innerHTML = player_name1;
document.getElementById("anser-turn").innerHTML = player_name2;

function send() {
    getword1 = document.getElementById("input").value;
    word = getword1.toLowerCase();
    console.log(word);
    charer1 = word.charAt(1);
    divder = Math.floor(word.length / 2);
    charer2 = word.charAt(divder);
    charer3 = word.charAt(word.length - 1);
    replaceword1 = word.replace(charer1, "_");
    replaceword2 = replaceword1.replace(charer2, "_");
    replaceword3 = replaceword2.replace(charer3, "_");
    console.log(replaceword3);
    question_word = "<h4 id='lolman'>Ques. " + replaceword3 + "</h4>"
    input_box = "<br> <input type='text' id='input_checker'> <br> <button class='btn btn-info' onclick='check()'>check</button>"
    row = question_word + input_box;
    document.getElementById("output").innerHTML = row;
    document.getElementById("input").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check() {
    getanswer = document.getElementById("input_checker").value;
    answer = getanswer.toLowerCase();
    if (answer == word) {
        if (answer_turn == "player1") {
            player_score1 = player_score1 + 1;
            document.getElementById("lol_span_1").innerHTML = player_score1;
        } else {
            player_score2 = player_score2 + 1;
            document.getElementById("lol_span_2").innerHTML = player_score2;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("question-turn").innerHTML = player_name2;
    } else {
        question_turn = "player1";
        document.getElementById("question-turn").innerHTML = player_name1;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("anser-turn").innerHTML = player_name2;
    } else {
        answer_turn = "player1";
        document.getElementById("anser-turn").innerHTML = player_name1;
    }
    document.getElementById("output").innerHTML = "";
}