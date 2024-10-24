function getAnswers() {
    const answers = {};
    let count=0;
    const questions = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10'];
    const sol=['Guido van Rossum','1989','C','Indentation','#','Objects are real-world entities while classes are not real','Function','It indicates a private variable of a class','val','Parentheses, Exponential, Multiplication, Division, Addition, Subtraction']
    questions.forEach((question) => {
        
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        answers[question] = selectedOption ? selectedOption.value : 'No answer selected';
    })  
        for (let i=1;i<11;i++){
         if(answers[`question${ i }`]   === sol[i-1]){
            count++;
        }
    }
    

    console.log(answers);
    console.log(count);
    localStorage.setItem('answers', JSON.stringify(answers));
    localStorage.setItem('count', count);

    window.location.href = '/result';
}