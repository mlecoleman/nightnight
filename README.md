Cure insomnia using this simple web app to count sheep. 

Before the era of cellphone alarm clocks, I had a clock radio by my bed.  When I was having trouble sleeping I would close my eyes when the minute on my clock radio changed, and then I would try to count seconds as accurately as I could up to 60.  I would open my eyes when I got up to 50, and then would watch the clock as I finished counting to 60 to see how accurate I was.  I would repeat this game until I fell asleep.

Now that I use my phone as an alarm clock, I no longer have a clock radio by my bed and have missed playing my sleeping game.  That's where Night Night comes in!

Clicking on the "How To Play" link opens a menu with instructions and an input form.  The user can enter how many seconds they wish to count up to, and also how long they wish to play.  I used the Wake Lock API to keep the browser from dimming or phone from locking for the duration of play time set by the user.  This is a newer JavaScript API which doesn't work in all browsers, so if your browser doesn't support this feature, an alert message will be present. Wake Lock is best supported by desktop Chrome and Edge.

Also present is a countdown to April 15th, which is when Code Louisville has promised we will hear back about pass fail status. 

Pressing the Play button closes the dropdown, and starts the counter.  The counter will increase every second until it counts to the number specified by the user, and then it will reset and repeat the count.  Once the specified total play time is reached, the page will refresh which releases Wake Lock and resets the timer to 00.

Local storage is also used so that when a user returns, the users previous form inputs will be saved an reflected in the form.

Another feature of note is that the colors chosen have no blue since blue light is thought to make it difficult to sleep.

Special Instructions:

Wake Lock API is not supported in all browsers.  It is best supported by desktop Chrome and Edge.  My web app will alert you if your browser is not supported, or you can check here for more information: https://caniuse.com/?search=wake%20lock

3 required features:

1. Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value

My time counter takes in two user inputs and resets after a certain number of seconds has been counted through, and also refreshes the page after that counter has repeated itself for the number of minutes input by the user.  The value updates and changes based on user input.


2. Create a form and save the values (on click of Submit button) to an external file 
You must show us or document where that information is being stored so we can confirm that it’s being saved/persisted

Form inputs are saved in local storage, and when the page reloads the form will be populated with the inputs from the previous time the user added inputs to the form.


3. Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event)

My mentor coudn't guarantee I would pass because while he felt I did a cool and interesting project and he felt that I showed an understanding of JavaScript... I didn't technically have three of the officially listed requirements. So! I put this timer on the drop down menu just to make sure I can pass. This timer counts down to April 15th because of this sentence received in a recent Code Louisvill e-mail: "So long as you turn in a project, you will hear from us by April 15th on whether you successfully completed the course or not."


Hope I pass!!! XD  Thanks Code Louisville! <3
