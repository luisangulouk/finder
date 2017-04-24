# Mypersonalfinder
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Directions
A live demo can be found at https://pluggedin.link/finder/index.html be aware this current dist/ file was created thinking on folder /finder at this location for production deploys at root domains just run ng build --prod no extra flags needed

this application requests the current location and show the marker on the map using google map API, based on this location the coords are passed to foursquare API to find venues around this coords

additionally the user can also search by name using google autocomplete API to provide valid names and then produce valid locations

## Work in progress
There are 2 types of google maps in this project the main one if a fully functional map with features and functionality as such however the component was not yet included in the links (map) at the venues cards.
