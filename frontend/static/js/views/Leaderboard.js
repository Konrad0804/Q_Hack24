import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor() {
      super();
       this.setTitle("Leaderboard"); 
    }

    async getHtml(){
        return `
        <h1>Welcome back, Dom</h1>
        <p>
            Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
        </p>
        <table>
            <thead>
                <tr>
                    <th>Rang</th>
                    <th>Username</th>
                    <th>Punkte</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Benutzer1</td>
                    <td>1000</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Benutzer2</td>
                    <td>900</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Benutzer3</td>
                    <td>800</td>
                </tr>
                <!-- Fügen Sie hier weitere Zeilen für weitere Benutzer hinzu -->
            </tbody>
        </table>
        <p>
            <a href="/posts" data-link>View recent posts</a>.
        </p>
      `;
      }
    }