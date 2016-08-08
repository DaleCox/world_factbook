The World Factbook Refactored
================

The World Factbook Refactored

This is a project for exploring the use of the React framework. As I hit milestones I'll update the demo page - https://dalecox.github.io/world_factbook/Public/index.html

Many thanks to http://www.favicon-generator.org/ for generating the favicon sets I'm using for the site.

The wireframes for the site can be found in the design folder, they were created using Balsamiq.

The Data for the site is taken from https://www.cia.gov/library/publications/resources/the-world-factbook/ summer 2016. 

## Local Development
To enable localhost development I have leveraged the model used in the React tutorial and am using node to host the app.

```sh
npm install
node server.js
```
## Tree Component
The React Tree Component uses CSS to hide and show branches / leafs. For small trees this approach will be fine. If the tree becomes very large then I would approach it with a lazy loading approach, only loading data at depth of two from the current selected node.  This would allow the model to scale to a large data set.  

## TODO List
- Wireframe the content panes
- Create React components
 - Nav tree 
  - Leaf node class (img and background color when selected)
 - Region Content
 - Country Content
- Format footer 
- Unit testing 
- Analytics
 - Might be worth checking out https://developers.facebook.com/products/analytics 
 - can always fall back on GA
 - Should also add in New Relic 