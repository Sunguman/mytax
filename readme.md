FORM INPUT 1.Provide a user with a form to fill basic salary and benefits 2.User fills the form and submits it 3.JS extracts form values and performs computations with defined functions 4.Display the output from JS back to HTML

id attribute -> an attribute that is used by JS to uniquely identify and target a HTML element document.getElementById() -> an inbuilt function used by JS to access and target html elements using their id

JS functions 1.User interactivity -> the ability of a user to interact with an application. It gives the user the ability to perform actions when using an application => anything a user can when using an application is called an event e.g. scroll, click, zoom , hover,copy, paste,submit, typing addEventListener - a function meant to wait for a end user's action(event) and trigger JS function(event) -> a function that waits for an event to occur to trigger JS 2.Reactivity

addEventListener -> function(event) -> calculate_gross(),calculate_nhif()

document.getElementById().innerHTML -> used by JS to access ,extract and pass values from all HTML elements document.getElementByID().value -> used by JS to access , extract and pass values from form inputs specifically

N/B:- Any value coming from user input is always a string

After an event occurs, the default behaviour of the browser is to refresh -> to prevent this use the function event.preventDefault()
