# topo-profiler
# README

## :small_blue_diamond:Background:small_blue_diamond:
Topo Profiler uses an elevation API to render the topographic map of a location that is provided by the user.

For context, a topographic map is a map that consists of a series of points of elevation. Non-intersecting lines called contour lines connect points of equal elevation. Topographic maps show an aerial view of an area but a cross section can be created when given the elevation data of points along a straight path on the map. 

In this app, the user will be able to draw a straight line anywhere on the topographic map of the location of their choosing. Beneath the map, a profile will be rendered which will show the change in elevation along their drawn path.



## :small_blue_diamond:Functionality & MVPs:small_blue_diamond:
### In Topo Profiler, users will be able to:
* retrieve the topographic map for a given location
* have the user draw a straight path on the map
* have an icon trace the path
* draw an elevation graph

### In addition, this project will include:
* instructions pop up for each action: select a location, draw a path, profile complete
* a production readMe
* if I have extra time, I’d like to create preset locations and profiles for users to browse and use as inspiration



## :small_blue_diamond:Wireframes:small_blue_diamond:
![Opening with Alert](/assets/1opening_with_alert.png)
![Opening](/assets/2opening.png)
![Map with Alert](/assets/3map_with_alert.png)
![Map Blank](/assets/4map_blank.png)
![Map Filled](/assets/5map_filled.png)



## :small_blue_diamond:Technologies, Libraries, APIs:small_blue_diamond:
* Google Earth Engine will be used to retrieve elevation data and render topographic map
* D3 will be used to create the profile line graph



## :small_blue_diamond:Implementation Timeline:small_blue_diamond:
### Friday Afternoon & Weekend
* be able to access API from VS Code
* retrieve topographic map for a location
* get topographic map on browser
* retrieve elevation data for a location
* retrieve elevation data for points from path that user drew

### Monday
* figure out how to graph the elevation data for the drawn path as a profile
    * will need to auto generate x & y axes based on data
        * x-axis: holds elevation and will need to scale & round based on max elevation
        * y-axis: holds distance and will need to scale & round based on path length

### Tuesday 
* create three preset topographic maps that user can choose from if they don’t enter a custom location
* focus on UI experience and flow
    * for example, could I have a demo preset that auto draws like a gif?
* start basic styling

### Wednesday
* stylize webpage
* focus mainly on content placement (flexing, etc.)

### Thursday
* figure out how to deploy webpage
* superficial styling if extra time (images, color scheme)



* ...
# topo-profiler
