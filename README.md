Cure insomnia using this simple web app to count sheep. 

Before the era of cellphone alarm clocks, I had a clock radio by my bed.  When I was having trouble sleeping I would close my eyes when the minute on my clock radio changed, and then I would try to count seconds as accurately as I could up to 60.  I would open my eyes when I got up to 50, and then would watch the clock as I finished counting to 60 to see how accurate I was.  I would repeat this game until I fell asleep.

Now that I use my phone as an alarm clock, I no longer have a clock radio by my bed and have missed playing my sleeping game.  That's where Night Night comes in!

Clicking on the "Click To Play" link opens a menu with instructions and an input form.  The user can enter how many seconds they wish to count up to, and also how long they wish to play.  I used the Wake Lock API to keep the browser from dimming or phone from locking for the duration of play time set by the user.  This is a newer JavaScript API which doesn't work in all browsers, so if your browser doesn't support this feature, an alert message will be present. Wake Lock is best supported by Chrome and Edge.

Pressing the Play button closes the dropdown, and starts the counter.  The counter will increase every second until it counts to the number specified by the user, and then it will reset and repeat the count.  Once the specified total play time is reached Wake Lock will be released and the phone/computer/browser will sleep and dim like normal.

Another feature of note is that the colors chosen have no blue since blue light is thought to make it difficult to sleep.

Special Instructions:

Wake Lock API is not supported in all browsers.  It is best supported by desktop Chrome and Edge.  My web app will alert you if your browser is not supported, or you can check here for more information: https://caniuse.com/?search=wake%20lock

3 required features:

1. 

2.

3.

