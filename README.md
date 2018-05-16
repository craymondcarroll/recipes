## React Geting Started ##

- Safaribooks online video by Tom Dunclf
- React Projects
- Pub Date Feb 2017
- http://techbus.safaribooksonline.com/video/web-development/9781786465504?bookview=overview


- **Webpack** bundles all application code along React modules into a single javascript file. But it cant convert .jsx or ES6 to something that ES5 browser understand for that we need something else
- **Bable** which is a transpiler that can convert **ES6** to **ES5** which is understood by most browsers.


### Create a Recipe  React Application ###

- **We copied the react-template** project over to use as a initial framework. To learn how to set up an initial project and what 
basic **npm** we need to install look at the **ToDo List** React project.
 

 - Initialize Node ***npm install***  Makes sure all packages in package.json is installed
 - We may need to install **webpack** which will bundle all the necessary files together. **Don't know** if you have to do this again because it is in the Template, but I  did anyway
   - **npm install --save-dev webpack**
   - **npm install --save-dev webpack-cli**
 
 
 - We need to install React Property Types Library
  - **npm install prop-types --save**
 
 - We plan to use a local web server so install ***npm i -g local-web-server***
  + Once installed type the word ***ws*** to start the web server
  
- We also want to have our **webpack watch task** running so in the terminal run **npm start**

 

