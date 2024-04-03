import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
        constructor() {
            super();
            this.setTitle("Quiz Questions"); 
        }
    
        async getHtml() {
            return `
            <div class="quiz">
            <h1>Quiz Questions</h1>
            <div class="quiz container">
                <h2>Example Question</h2>
                <div class="answers">
                    <button class="answer">Answer 1</button>
                    <button class="answer">Answer 2</button>
                    <button class="answer">Answer 3</button>
                    <button class="answer">Answer 4</button>
                </div>
            </div>
        </div>
            `;
        }
    }