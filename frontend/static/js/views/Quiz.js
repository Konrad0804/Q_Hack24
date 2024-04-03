import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
        constructor() {
            super();
            this.setTitle("Quiz"); 
        }
    
        async getHtml() {
            return `
                <title>Quiz Site</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f0f0f0;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: #fff;
                        border-radius: 5px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        text-align: center;
                    }
                    /* Add more styles as needed */
                </style>
                <div id="welcomeDiv" class="container">
                    <h1>Welcome to the Quiz Site</h1>
                    <p>This is where you can create your own quiz questions and challenge your friends!</p>
                    <!-- Add your quiz content here -->
                    <button id="startQuizBtn">Start Quiz</button>
                </div>
            `;
        }

        async afterRender() {
            document.getElementById('startQuizBtn').addEventListener('click', function() {
                window.navigateTo('/questions');
            });
        }
    }