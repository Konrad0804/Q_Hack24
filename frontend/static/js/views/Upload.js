import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor() {
      super();
       this.setTitle("Upload"); 
    }

    async getHtml(){
      return `
      <h1>Please Upload file:</h1>
    
      <p>
          <input type="file" id="fileUpload" />
          <button id="uploadButton">Upload</button>
      </p>

      <p>
      <a href="/posts" data-link>View recent posts</a>.
      </p>
  `;
    }
    afterRender() {
        document.getElementById('fileUpload').addEventListener('change', (event) => {
            const file = event.target.files[0];
            // handle file here
        });
    }
}