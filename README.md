# Linkbase-task

## Linkbase mini coding challenge
<!-- ![PurpleBarVersion](https://github.com/smokycoffee/Linkbase-task/blob/main/WithPurpleBar.gif) -->

You can copy paste the code in the respective file in App.js and run locally to see the different UI's

### Some challenges faced. 
Making the UI was pretty straightforward. Theres a file called SwiperVersion.js. That was the initial UI i tried out but i tried to re-create it with Jan's vision where i can only swipe with a navigation bar at the bottom of the screen.

Which is the PurpleBarVersion. The issue I faced with that is cuz i'm loading the current index or url one at a time. so everytime i swipe left or right with the purple container, i reload the webpage to its current index. wasn't sure if that's what the task intended so i have another version.

The FlatlistVersion fixes the WebView loading one at a time as i'm pre-loading them in a flatlist and when i start traversing all the URls are loaded so there's no loading time. but the con is flatlist swiping cant be limited to the bottom area.

Another alternative, i thought of is creating the webpages in a stack and having that stack on top of one another but that adds unnecessary resources to the app and might have side effects. an alternative is to load only 2 items at once from the list of URLs and whenever I remove/swipe the top layer, the bottom layer becomes the top layer and i can start pre-loading the bottom layer and repeats till i reach the end so the user has a seamless and smooth experience but i think it's out of scope for this challenge but interesting!

## PurpleBarVersion.js UI
Simulates only using the purple navigation container to be able to swipe through the "links".
### <img src="https://github.com/smokycoffee/Linkbase-task/blob/main/WithPurpleBar.gif" width="300" height="680" />

## FlatlistVerion.js UI
This renders the list of URLs at the same time so there is no loading each webpage when we scroll, instead of loads everything at once but the con is that we are able to navigate through swiping left and right from anywhere within the phone screen, not limiting it to the bottom area for example.
### <img src="https://github.com/smokycoffee/Linkbase-task/blob/main/FlatlistVersion.gif" width="300" height="680" />

