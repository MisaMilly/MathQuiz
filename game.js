player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    get_one = document.getElementById("Get_o").value;
    get_two = document.getElementById("Get_t").value;
    answer = parseInt(get_one) * parseInt(get_two);

one = "<h4 id='word_display'> Q. "+ get_one +"X"+ get_two +"</h4>";
two= "<br>Answer : <input type='text' id='input_check_box'>";
three = "<br><br><button class='btn btn-danger' onclick='check()'>Check</button>";
row = one + two + three;
document.getElementById("output").innerHTML = row;
document.getElementById("Get_o").value = "";
document.getElementById("Get_t").value = "";
console.log(get_one +"X"+ get_two +"="+ answer)
}

q_turn = "player1";
a_turn = "player2";

function check() {
    getAns = document.getElementById("input_check_box").value;
    if(getAns == answer) {
        if(a_turn == "player1") {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(getAns != answer) {
        if(a_turn == "player1") {
            player1_score = player1_score -1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score -1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(q_turn == "player1") {
        q_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question turn - " + player2_name;
    }
    else {
        q_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
    }
    if(a_turn == "player1") {
        a_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;
    }
    else {
        a_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}