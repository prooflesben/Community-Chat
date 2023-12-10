
# A high level overview
This React application has 5 main components with two screens. It also uses firebase to store our messages in a database so all users can see the messages and it keeps it there between program runs. 
# An explanation of the components and their interactions
There are two main screens the welcome screen that has the NavBar and Welcome components. This screen is to welcome the user and redirect the user to sign in with google. The next screen is the actual chat that has the messages and the test box to send the messages. When the messages are sent they are sent to the database and and shown in the chat box ordered by the most recent ones.
# Why you fulfill the requirements
This application fulfills the requirements since it works with multiple users showing their messages from the most recent ones shown first. The application will send you an error message if your message is empty or longer than 128 characters
# How to start the application (installation, build instructions, etc.)
To run the application the following commands need to 
# Extra features 
The application has the messages persist even after the application is closed due to using the firebase database and sign in is required using google and with google someones picture and username is displayed when they send a message.



