# Camera App

## Purpose:

* Show a map, take pictures, and store them to the cloud

## Basic: 

* Autheticate with email and password
* Take pictures and upload them to Firebase
* Show a map


## User stories: 

* As a user, I want to create an account and be able to login and logout of this account using my email and a password
* As a user, I want to take pictures of things and store the pictures to the cloud (firebase)
* As a user, I want to see on a map

## Technology

* Language => Javascript 
* Framework => React Native with React Native CLI
* Hosting => Firebase 
* DB => Firebase 
* Platform => IOS

# Start
* Install dependencies: https://reactnative.dev/docs/environment-setup
* Install yarn: https://classic.yarnpkg.com/en/docs/install/#mac-stable
* Install XCode: https://apps.apple.com/us/app/xcode/id497799835?mt=12
* Go to the project directory in terminal
* Install dependencies: ```yarn install```
* Start emulator ```npx react-native run-ios``` (the app should launch on your emulator)
* In XCode open the project ios folder
* Go to "Signing & Capabilities" to set up your team and append 1 to the bundle identifier
* Connect your device to your computer and XCode and allow on your device the developper mode
* Press the play button in the XCode project window (the app should launch on your phone after compiling)


## Resources:

* https://reactnative.dev/docs/environment-setup
* https://reactnative.dev/docs/tutorial
* https://github.com/react-native-community/react-native-maps
* https://github.com/react-native-camera/react-native-camera
* https://rnfirebase.io/
* https://blog.logrocket.com/how-to-set-up-email-authentication-with-react-native-react-navigation-and-firebase/