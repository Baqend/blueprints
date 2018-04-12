# Blueprints
This repository collects ready-to-use blueprints for Baqend Code.

The idea is that as a Baqend user, you can share your modules with the community, get feedback & improvements and start your projects with blueprints for common problems: intergrations to payment providers, social networks, 3rd party APIs, data mining algorithms, tracking implementations, etc.

## Overview of Available Blueprints
These are the currently available blueprints, what they do and who contributed them:
* **Rate-Limiter** - limits the number of calls that can be made from a given IP per minute. Userful for expensive computations or for Baqend code that uses rate-limited 3rd party APIs. _Contributor_: Baqend, support@baqend.com

## Installing a Blueprint
To learn how Baqend Code works in general, check out the [Guide on Baqend Code](https://www.baqend.com/guide/topics/baqend-code/).

### Manually
If you are using the [dashboard](http://dashboard.baqend.com) directly, simply copy the `*.js` files from the blueprint's folder and paste each in the dashboard as a new Baqend code.

### By CLI
If you are using the [Baqend CLI](https://www.baqend.com/guide/topics/cli/#deployment), copy the `*.js` files from the blueprint's folder into the `/baqend` folder of your project. Use `baqend deploy` to deploy the blueprint to your app.

## Contributing a Blueprint
To share a blueprint with the community, simply open a pull request. A Baqend developer will review the code and accept it to this repository or request certain changes. Check out the existing blueprints as refernce for how they should look like. 

## License
All blueprints fall under the very permissive [MIT license](LICENSE.md)
