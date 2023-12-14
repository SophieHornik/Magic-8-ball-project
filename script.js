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
}