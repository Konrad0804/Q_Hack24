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
                    <div class="question">
                        <h2>Example Question</h2>
                        <div class="answers">
                            <div class="answer">Answer 1</div>
                            <div class="answer">Answer 2</div>
                            <div class="answer">Answer 3</div>
                            <div class="answer">Answer 4</div>
                        </div>
                    </div>
                </div>
            `;
        }
    }