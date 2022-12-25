## Search Engine for JSON

Building this project was really fun for me, as it was kind of a reality check as to, I need to learn and get better day by day no matter what. In the beginning of the project I just knew that there had to be made some sort of  Search Engine which searches from data taken from a JSON file. 

So I started reading the documentation of Typesense and unfortnately wasn't able to setup it properly due to the time crunch.

So I took the tradional way to create this project and following are the steps I followed:

<ol>
    <li>Using <code>npx create-react-app</code> to create a react app for the project.</li>
    <li>I imported the dataset and played around with it just as to make sure I don't cause problems while handling the data at the time of execution of code.</li>
    <li>I then created the component for the card (Card.js) which will be used to showcase a single searh result.</li>
    <li>I then created a component for the list of searches that will be shown when the user searches something. The SearchList.js component uses the .map feauture to print out the cards by taking value of links as an array named filteredLinks. </li>
    <li>The array filteredLinks is taken as a prop from Search.js. Search.js uses the filter method to filter our searches and creates a new array with just the links relevenant to the search (called filteredLinks). </li>
    <li> Search component is then used in App.js and the JSON data is passed to it as a prop.</li>
    <li> I then styled the application a little bit, given the time crunch I could not do a lot of styling, so my page is really simple.</li>
    <li>I thought of implementing scroll in the search results but found a better idea of using Pagination using a react module - 'react-paginate'. I read its documentation and implemented, it was quite simple actually. </li> 
    <li>Coming to the dockerization of the application. I had just watched some videos about what is docker until now. So it was pretty challenging for me. I tried to implement the dockerization. But unfortunately my laptop crashed and I could not proceed after the creation of docker image.</li>
    <li>Finally, after throwing my laptop, and using my sister's, I deployed my website on netlify.
</ol>

## Installation
1. Download the code.
2. Type in terminal <code>npm install </code> to install the dependancies.
3. Type in terminal <code>npm start </code> to start the application on localhost.

## Link to deployed website
<a href="https://search-json.netlify.app/" target="_blank">https://search-json.netlify.app/</a>
