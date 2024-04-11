# Theory

## What is `NPM`?

NPM is a package manager. It is used to install packages like react, react-dom and parcel. It is in fact a software registry. Developers around the world build their packages and uploads them to npm and the developers who need them install these packages using npm.

## What is `Parcel/Webpack`? Why do we need it?

Parcel is a bundler we need it to bundle our code. No matter how many files there are in the project, bundler will reduce them to three files. It also minify and compress our files and it also provides a live server to run the code with the ability of hot reloading.

## What is `.parcel-cache`?

When parcel builds a project it caches the data in the .parcel-cache folder. It does this to reduce build time. When the app is build next time it uses .parcel-cache and build only the parts that are updated.

## What is `npx` ?

npx is used to execute npm packages.

## What is difference between `dependencies` vs `devDependencies`?

DevDependecies are the packages that an application uses in the process of developement and they are not uploaded on server as they are not the part of the application but the developement process on the other hand Dependencies are packages that an application uses and depend on to function properly. They are uploaded to sever as the appliction caanot function without them.

## What is Tree Shaking?

Tree Shaking is the process of eliminating the unused code from the application. It is also called 'dead code elimination'. Parcel uses tree shaking to minify code.

## What is Hot Module Replacement?

When you make changes to your code and save it Parcel automattically reload the page it is called hot reloading and is implemented using file watchers. But in some cases Hot Module Replacement is used HMR allows the changes to apply during runtime instead of reloading the whole page.

## List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

1. Zero configuration required.
2. Transpiling
3. Caching
4. Live Server and Hot Reloading
5. Bundling and Minification

### Transpiling

There is no need to configure a transpiler separately. Parcel took care of it by providing transpiling superpower within itself using Babel.

### Zero Configuration Required

There is no need to make a configuration file and write your own configuration like in webpack and other bunlers.

### Caching

Parcel caches the build data to use in the subsequent builds.

## What is `.gitignore`? What should we add and not add into it?

.gitignore is a file in a git repository that contains the name of all the files and folders that are not to be pushed on the repository. Anything that can be regenrated using package.json should be added in .gitignore.

## What is the difference between `package.json` and `package-lock.json`

package.json includes the metadata about the project such as name of the project, entry point, scripts, dependencies and devdependencies package-lock.json on the other hand contains the exact version of of dependencies and devdependencies that were used while the project was in development.

## What is `node_modules` ? Is it a good idea to push that on git?

It is not a good idea to put node_modules on git because it can be regenerated using package.json.

## What is the `dist` folder?

After the code is built, minified and compressed it is saved in a seperate folder called dist.

## What is `browserlists`?

For telling the parcel transpiler to which version should transpiling be done. browserlists command is specified in package.json.
