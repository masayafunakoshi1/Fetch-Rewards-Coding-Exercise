# Fetch Rewards Coding Exercise
#### Instructions Here: (https://fetch-hiring.s3.us-east-1.amazonaws.com/points.pdf)
---
## Getting Started
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Clone down this repository. You will need node and npm installed globally on your machine.

Installation:

`npm install`

To Start Server:

`npm start`

I also used an Easy Rest API JSON Server npm package(https://www.npmjs.com/package/json-server)

To access my "database" (db.json file) first download package globally
`npm install -g json-server`

To start the server on the proper localhost
`json-server --watch db.json --port 8000`

Has a frontend UI that has
* total points
* individual payer total points
* full history of earned and spent points from oldest to newest
* inputs to add points and subtract points (subtract doesn't work as I couldn't finish)

---
## Personal Message:
I was unable to completely finish this problem, couldn't implement the "Spending Points" portion of the assessment due to time constraints. If given more time, I am confident I would've been able to complete it.

Here is the logic I came up with for the part that was missing: 
* iterate through data until total Spending Points is 0
* subtract Spending Points from oldest points first, subtracting them from the specific payers in listOfTotalPoints
* send all subtractions into main table/database
* test cases: if subtracting from specific payer makes their total on the listOfTotalPoints go to negative, only subtract what you could and move on to next on list until all of Spending Points are gone
* already ordered from oldest to newest in my app, so no need to worry about that

Might not make much sense, but I put it here to show that the logic is there. It just needed to be implemented through code, tweaked with here and there, and squashed of any little bugs :^)

## Thanks for checking it out!

