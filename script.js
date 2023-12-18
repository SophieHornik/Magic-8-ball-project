function shakeMagic8Ball() {
    const question = prompt ('Ask the Magic 8-Ball a Question:')

    if(question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question!'
    document.getElementById('response-text').classList = 'text-danger'
    document.getElementById('response-image').src = 'badimage'
    }
    if (!question.trim()) {
        alert('Please enter a valid question!') 
        return
    }

    const randomNumber = Math.floor(Math.random() * 8);
    let answer, image, color;

    switch (randomNumber) {
        case 0:
            answer = "Yes";
            image = "Magic_eight_ball_yes.png" //change this!!;
            color = "text-success";
            break;
        case 1:
            answer = "No";
            image = "Magic_eight_ball_no.png" //change this!!;
            color = "text-danger";
            break;
        case 2:
            answer = "Ask again later";
            image = "Magic_eight_ball_later.png" //change this!!;
            color = "text-secondary";
            break;
        case 3:
            answer = "Maybe";
            image = "Magic_eight_ball_maybe.png";//change this!!;
            color = "text-warning";
            break;
        case 4:
            answer = "Cannot predict now";
            image = "Magic_eight_ball_cannotpredictnow.png";//change this!!;
            color = "text-muted";
            break;
        case 5:
            answer = "Don't count on it";
            image = "Magic_eight_ball_dontcountonit.png";//change this!!;
            color = "text-danger";
            break;
        case 6:
            answer = "Most likely";
            image = "Magic_eight_ball_mostlikely.png";//change this!!;
            color = "text-success";
            break;
        case 7:
            answer = "Outlook not so good";
            image = "Magic_eight_ball_outlooknotsogood.png";//change this!!;
            color = "text-danger";
            break;
        default:
            break;
    }

const responseText = document.getElementById('response-text');
responseText.innerText = answer;
responseText.classList = `display-4 ${color}`;
document.getElementById('response-image').src = image;

}
