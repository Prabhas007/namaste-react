/***
 * 
 * <div id = "parent">
 *      <div id="child">
 *          <h1>I Am Prabhas</h1>
 *          <h2>I Am Prabhas</h2>
 *      </div>
 * </div>
 * 
 * 
 */



const heading = React.createElement("div",
    {id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I am Prabhas"),React.createElement("h2",{},"I am Prabhas")]))
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);