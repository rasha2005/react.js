/** 
 * 
 * 
 * <div id = "parent"> 
 *    <div id = "child">
 *      <h1>this is h1 tag</h1>
 *      <h1>this the sibling h1 tag here</h1>
 *     </div>
 * <div id = "child">
 *      <h1>this is h1 tag</h1>
 *      <h1>this the sibling h1 tag here</h1>
 *     </div>
 * </div
 * 
 * 
 * 
 * 
*/
const parent = React.createElement('div' , {id : 'parent'} ,[
    React.createElement('div' , {id : 'child'} , [
        React.createElement('h1' , {} , 
        'this is h1 tag') , 
        React.createElement('h1' , {},"this the sibling h1 tag here")
    ]),
    React.createElement('div' , {id : 'child'} , [
        React.createElement('h1' , {} , 
        'this is h1 tag') , 
        React.createElement('h1' , {},"this the sibling h1 tag here")
    ])
]
   
   
);


const heading =  React.createElement(
    'h1' , 
    {id: 'heading'} , //we can use this object to add attribute to the class,we can also add the one we made like xyz: "abc"
    "hello world from react.js"
    );
    console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);