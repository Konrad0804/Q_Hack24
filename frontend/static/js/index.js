import Dashboard from "./views/Dashboard.js";
import Upload from "./views/Upload.js";
import Quiz from "./views/Quiz.js";
import Questions from "./views/Questions.js";
import Leaderboard from "./views/Leaderboard.js";

window.navigateTo = function(url) {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        {path: "/", view: Dashboard},
        {path: "/upload", view: Upload},
        {path: "/quiz", view: Quiz},
        {path: "/questions", view: Questions},
        {path: "/leaderboard", view: Leaderboard}
    ];

    const potentialMatches = routes.map(route =>{
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if(!match){
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();

    if(view.afterRender) view.afterRender();

    console.log(match.route.view());
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () =>{
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});