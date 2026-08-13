FORM INPUT 1.Provide a user with a form to fill basic salary and benefits 2.User fills the form and submits it 3.JS extracts form values and performs computations with defined functions 4.Display the output from JS back to HTML

id attribute -> an attribute that is used by JS to uniquely identify and target a HTML element document.getElementById() -> an inbuilt function used by JS to access and target html elements using their id

JS functions 1.User interactivity -> the ability of a user to interact with an application. It gives the user the ability to perform actions when using an application => anything a user can when using an application is called an event e.g. scroll, click, zoom , hover,copy, paste,submit, typing addEventListener - a function meant to wait for a end user's action(event) and trigger JS function(event) -> a function that waits for an event to occur to trigger JS 2.Reactivity

addEventListener -> function(event) -> calculate_gross(),calculate_nhif()

document.getElementById().innerHTML -> used by JS to access ,extract and pass values from all HTML elements document.getElementByID().value -> used by JS to access , extract and pass values from form inputs specifically

N/B:- Any value coming from user input is always a string

After an event occurs, the default behaviour of the browser is to refresh -> to prevent this use the function event.preventDefault()

Netlify -> a paas that enables developers deploy applications easily without worrying about hardware management

Cloud service models 1.Paas -> Platform as a service -> Enable developers deploy applications without having to manage servers -> examples => vercel , netlify , heroku 2.Iaas -> Infrastructure as a service -> allows developers to deploy apps and manage their servers -> e.g deploying an app on AWS 3.Saas -> software as an application -> ready to use software deployed on a cloud platform -> how the application is deployed is abstracted / hidden away from the end user -> e.g. Google drive, icloud, github

planning -> requirements gathering => development -> deploy -> maintain

www.janedoe.netlify.com Task on Tax Calculator 1.Make sure all functions are working as expected and output to table working correctly 2.Style index.html with your own custom designs -> Have a navbar with links : => Home (where you input basic salary & benefits and output tax values) => My Tax (Display info about Kenyan taxes -> nhif bands, nhdf calculation,nssf rates,payee rates, finance bill) => ITax (on clicking this take a user to KRA's page for possible tax filing)

-> A good footer with copyright message e.g lesley-tax@2026 CopyRight