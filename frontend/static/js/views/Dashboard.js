import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor() {
      super();
       this.setTitle("Dashboard"); 
    }

    async getHtml(){
      return `
      <h1>Welcome back, Dom</h1>
      <p>
          Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
      </p>
      <p>
          <a href="/posts" data-link>View recent posts</a>.
      </p>
      <p>
          <input type="file" id="imageUpload" accept="image/*" />
          <button id="uploadButton">Upload</button>
      </p>
      <img id="uploadedImage" />
  `;
    }

    afterRender() {
        document.getElementById('uploadButton').addEventListener('click', () => {
            const file = document.getElementById('imageUpload').files[0];
            const reader = new FileReader();
    
            reader.onloadend = () => {
                document.getElementById('uploadedImage').src = reader.result;
            }
    
            if (file) {
                reader.readAsDataURL(file);
            }
        });
    }
    
}