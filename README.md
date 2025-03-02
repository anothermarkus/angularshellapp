# Angular App Development: Comparison of Approaches and Pitfalls

This project is the result of two approaches to building an Angular app with Material Design, there are pitfalls when bootstrapping development using tools like ChatGPT.

## Approach 1: Bootstrapping with ChatGPT 
"Please create a simple angular app with material with selections on the left, masthead on top and empty working area."

Resulted in commands such as:
>npm install -g @angular/cli

>ng new angular-material-app

>cd angular-material-app

>ng add @angular/material


This approach resulted in a standalone app and <B>hours of wasted time</b> troubleshooting this error

"'mat-sidenav-container' is not a known element"



## Approach 2: bootstrapping Angular 19 from classic info sources: Google/Angular site

>npm install -g @angular/cli

>ng new my-app <b>--no-standalone</b>

>cd my-app

>ng generate module my-module

>ng add @angular/material


This approach resulted in no dependency errors


# GPT Layout Recommendations: Flex-Layout and Alternatives

## Issue with Flex-Layout

Initially, the recommendation from GPT to use `@angular/flex-layout` for managing the layout of the Angular app. However, when I installed the dependency, the output redirected me to the following blog post:

[Modern CSS in Angular Layouts](https://blog.angular.dev/modern-css-in-angular-layouts-4a259dca9127)

This post explained that `@angular/flex-layout` is now deprecated, and Angular suggests using modern CSS layout techniques instead.

## Recommended Alternatives

### 1. **CSS Grid**:
   CSS Grid provides a powerful way to create complex, two-dimensional layouts with ease. It offers a more flexible and robust solution than Flexbox for more intricate designs.

### 2. **CSS Flexbox**:
   Flexbox is suitable for simpler, one-dimensional layouts (either rows or columns). It allows for easy alignment and distribution of space within a container.

### 3. **Angular CDK Layout**:
   For more advanced layout management, Angular provides the Component Dev Kit (CDK) Layout module. This offers responsive design tools and utilities to manage layouts effectively.

## Learn More About CSS

To get up to speed with modern CSS techniques like Grid and Flexbox, check out the following resources:

- [Learn CSS Grid](https://web.dev/learn/css/)
- [Learn CSS Flexbox](https://web.dev/learn/css/)

#

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.
