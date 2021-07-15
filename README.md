# BrandLive Coding Challenge
Code challenge for BrandLive full stack developer (focusing on front end).

This project was built with [Create React App](https://github.com/facebook/create-react-app).

## Chat App Requirements
Create a React project that is a chat room. Leverage Redux or Context API, and use our codechallenge.brand.live socket.io server, and scss to make it pretty.
1. User lands on page and enters name
2. Name is stored in local storage
3. User can enter chat messages and see chat messages from other people using the
app.
4. Store chat history in local storage so that if user refreshes, their chat will reappear.
This local storage can expire after 1 hour.

## Getting Started
* Clone repository
* `yarn install`
* `yarn start`
* To use the chat app, go to [http://localhost:3000](http://localhost:3000) in one browser and then the same address in another browser.
You should then be able to chat back and forth between browsers while keeping different user states.
