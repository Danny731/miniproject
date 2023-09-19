# EC463 MiniProject Firebase Chat Web
# Author: Hao Chen & Tian Huang

# Design Decision & Overview 

In this mini project, the end goal is to design a chat application that utilizes many modern principles, methods, and ideas that has become standard practice in the software industry. While designing the chat app, principles such as agile SW development, REST APIs, code management using github, user stories, and the likes were kept in mind.

The program we used for developing our chat application was React and Firebase. React is the front end while firebase is the cloud service for the back end. The main reason for picking React is because of its UI development capabilities and the reusable UI components that it provides. Also, since the app is a dynamic chat app, React excels at building a dynamic and interactive UI that responds quickly to user input. Firebase is used for this design because it is backed by Google (easier to use with google logins) and it provides many features like realtime database, cloud storage, authentication, and has good privacy and security. Overall, the decision to use React and firebase is because both are great for chat app development.

Firebase allows us to authenticate users through Google accounts with firebase's firestore database. When a user login with their account, they then can post messages in the app. Each message is a document in the cloud firestore database from firebase with each document containing the text, user id, and time stamp of that specific message. Thus, whenever the data changes in the backend, React will update accordingly (Real time sync). React overall is a very versatile framework for web technologies. 

For the design of the App, it is relatively straightforward. If a user is signed out, then the user will be in the sign in page asking to be signed in. Once signed in, the user will enter a chat room to communicate or send messages with each other. The main chat can have multiple users interacting at the same time. However, we set a limit for the amount of messages being displayed to prevent spamming. The app is also able to distinguish between message send and received by having two different color codes for the two. There is also a header and a sign out button for switching accounts. Lastly, there is also design focus put into the css file to make sure the app looks aesthetically pleasing and focuses on simplicity. The message also automatically scrolls toward the bottom. The inspiration is mainly from live chat.

The security was implemented in the back end. All of the security was implemented in Cloud Firestore using js. It's implemented by first matching the path to the firebase database, then we check user credentials such as login information and making sure the user that is sending the message is the same as the user logged in. For security design, we also tried to implement a ban system and word collectors for profanities, but those are still in the development phase.

Lastly, the design decision puts emphasis on REST API and agile SW development. The app is flexible, secure, and scales with the cloud in firebase. The team ultimately decided on a web application because it is very easily compatible with React and Firebase. One last important thing to mention about design is the UI and style. The style we were aiming for was casual and simple, thus, the color combination is white and different shades of blue. The text is white for readability and we outline most of the clickable buttons in darker colors. Overall, the design of the app gives a smooth and simple feel. The UI is done similarly.

The video link demo: https://drive.google.com/file/d/1ncWI1fA2kO1-AarRgJ6jjecir8humqHV/view?usp=sharing

REST APIs are in Github Wiki.

Testing and results are under issues.

A few functionalities like scrollbar and navigation bars didn't make it into the final stage.