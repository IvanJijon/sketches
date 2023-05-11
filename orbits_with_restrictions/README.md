# Orbits - With Restrictions

In this mini-project I tried to re-create the `orbits` animation in JS using p5.js as canvas framework, but this time with some restrictions.

## Restrictions

    - No global variables
    - No classes
    - No objects

## What I like about my solution

This approach is more straight forward and code is much more succinct.

## Comments on my approach

Fewer lines of code than the Object Oriented approach.
This code is much easier to test since each function has one goal.

Nevertheless, this code is not very flexible. For example if I wanted to draw triangles in stead of circles, there is not an easy way to change the drawing strategy. A strategy pattern could be used to improve this.
