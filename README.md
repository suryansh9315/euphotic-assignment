npm install in both client & server directory.
Create a .env file in server and add MongoDB Atlas databass URL.
      - sign in on cloud.mongodb.com
      - create a new cluster
      - click on connect -> drivers -> nodejs -> copy mongo uri
      - configure database access user and network access
      - paste "MONGO_URI=YOUR_MONGO_URI" in your .env
run server by typing "npm start" in the terminal
run client by typing "npm run dev" in the terminal
