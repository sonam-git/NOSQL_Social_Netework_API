# NoSQL Social Network API 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description.

The NoSQL Social Network API is an API for Node.js that enables users to carry out CRUD operations on social networking data models using a NoSQL database. These data models consist of friends, users, thoughts, and reaction data, and can be accessed either by their ID or as a whole. Developed with Node.js and Mongoose, this API offers a straightforward and scalable solution for managing social networking data, free from the limitations imposed by traditional relational databases.

## Table of Contents:
- [Overview](#Overview)
- [The Challenge](#The-Challenge)
- [Usage Instruction](#Usage-Instruction)
- [Installation Process](#Installation-Process)
- [Built With](#Built-With)
- [What I Learned](#What-I-Learned)
- [Continued Development](#Continued-Development)
- [License](#License)
- [Author](#Author)

# Overview

## The Challenge:

The task involved constructing a RESTful API that enables a social media startup to carry out CRUD operations on users, thoughts, and reactions data models utilizing a NoSQL database. The API needs to be developed utilizing Node.js and Mongoose, and it should offer endpoints capable of managing substantial volumes of unstructured data.

API must allow users to:

- Create and delete user accounts.
- Create, read, update, and delete thoughts.
- Add and remove reactions to thoughts.
- Add and remove friends to a user's friend list.

Test API: use Postman or a similar API testing tool to send HTTP requests to the API endpoints and verify that the responses are correct.

## Assigned User Story:
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria:
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```


## Usage Instructions:

1. Repository: Open documentation run 'npm i' and update '.env'.
2. Create a .env file in the root directory of the project and add the following variables:
3. Once the server is running, use a tool like Postman to test the API endpoints. 
4. Use Postman or any similar tool to test http://localhost:3001 with the following route end points API GET, POST, PUT, and DELETE routes for users, thoughts, and reactions, ensuring successful creation, updating, and deletion of data in the database.

#### Available Endpoints:

Each endpoint must include the necessary data in the request body or URL parameters as specified in the acceptance criteria.

1. GET /api/users -> get all users
2. GET /api/users/:userId -> get a single user by ID
3. POST /api/users -> create a new user
4. PUT /api/users/:userId -> update a user by ID
5. DELETE /api/users/:userId -> delete a user by ID
6. GET /api/thoughts -> get all thoughts
7. GET /api/thoughts/:thoughtId -> get a single thought by ID
8. POST /api/thoughts -> create a new thought
9. PUT /api/thoughts/:thoughtId -> update a thought by ID
10. DELETE /api/thoughts/:thoughtId -> delete a thought by ID
11. POST /api/thoughts/:thoughtId/reactions -> add a reaction to a thought
12. DELETE /api/thoughts/:thoughtId/reactions/:reactionId -> remove a reaction from a thought
13. POST /api/users/:userId/friends/:friendId -> add a friend to a user's friend list
14. DELETE /api/users/:userId/friends/:friendId -> remove a friend from a user's friend list

## Deployed Application Link:
[Deployed Application Link:](https://github.com/sonam-git/NOSQL_Social_Netework_API)

## GitHub Repository:
[GitHub Repository:](https://github.com/sonam-git/NOSQL_Social_Netework_API)

## Walkthrough Video:
[Click Here to Watch](https://drive.google.com/file/d/1X5qP8El0S2wi7slaag5S48gsO8nz_5iD/view)

## Screenshots:
*  VS Code & Postman 

![](/Public/assets/images/NOSQL.png)

## Installation Process:
1. Clone the Repository from GitHub (or) Download Zip Folder from Repository from GitHub.
2. Open the cloned (or downloaded) repository in any source code editor.
3. Open the integrated terminal of the document and complete the respective installation guides provided in "Built With" to ensure the cloned documentation will operate.

## Built With:
- Postman [Postman](https://www.postman.com/)
- JSON: [JSON](https://www.npmjs.com/package/json)
- Dynamic JavaScript
- Mongoose: [7.0.3](https://www.npmjs.com/package/mongoose)
- Express: [4.18.2](https://www.npmjs.com/package/express)
- Node.js: [16.18.1](https://nodejs.org/en/blog/release/v16.18.1/)
- MongoDB: [Website](https://www.mongodb.com/)
- Nodemon: [2.0.12](https://www.npmjs.com/package/nodemon/v/2.0.12)
- License Badge: [Shields.io](https://shields.io/)
- Visual Studio Code: [Website](https://code.visualstudio.com/)

## What I Learned:
1. Developed an API following the RESTful architecture using Node.js and Mongoose.
2. Employed a NoSQL database to effectively manage unstructured data.
3. Established endpoints for performing CRUD operations on data models related to users, thoughts, and reactions.
4. Implemented functionality to add or remove friends from a user's friend list through dedicated endpoints.
5. Throughly tested the API endpoints using Postman, ensuring they are properly functioning.
6. Collaborated extensively with HTTP requests and processed JSON-formatted data.
### Continued Development:
1. Implement additional features to enhance the user experience.
2. Improve error handling and response messaging for better user feedback.
3. Optimize database performance to handle large amounts of data efficiently.
4. Explore different types of NoSQL databases and evaluate their suitability for the project requirements.
5. Expand API documentation to assist developers with using the API.

## License 
  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Author

* Follow me on Github at [Sonam J Sherpa](https://github.com/sonam-git)
* Additional questions or concerns? feel free to contact me at [Email](sherpa.sjs@gmail.com)

