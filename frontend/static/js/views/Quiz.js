import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
        constructor() {
            super();
            this.setTitle("Quiz"); 
        }
    
        async getHtml() {
            return `
            <title>Quiz Site</title>
            <div id="welcomeDiv">
                <h1>Welcome to the Quiz Site</h1>
                <p>This is where you can create your own quiz questions and challenge your friends!</p>
                <br>
                <!-- Add your quiz content here -->
                <button id="startQuizBtn">Start Quiz</button>
            </div>
                </div>
            `;
        }

        async afterRender() {
            document.getElementById('startQuizBtn').addEventListener('click', function() {
                window.navigateTo('/questions');
            });
        }
    }