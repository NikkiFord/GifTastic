# GIFTASTIC!

## What it does

This project pulls down results from the Giphy API and shows them as still images on the page. Once clicked the images will animate themselves until clicked again or another image is clicked.

## How it does it

To accomplish this I used JQuery to generate image tags for every result in the API response and I store still and animatd image URLs on that image tag. I set up a click handler on the document that catches all click events for images in the document. Inside the handler I check if the image clicked is currently animated by comparing the image src to the animated image URL stored on the tag. If it's animated then stop the animation by replacing the src with the still image URL. Otherwise replace the src with the animated image URL.

## Additional features

I even added a .animated class to the currently animated image so I can grab it again if a different image is clicked. That way I can stop the previosuly animated image before animating the new one.

The user also has the ability to add a custom search term to the list of buttons. Simply type in the text box and click "Add" :)

## Get started

To check it out simply clone the repistory with Git and open index.html in your favorite browser!

