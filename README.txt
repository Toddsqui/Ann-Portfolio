Note to future developers working on this project:

I have included documentation on all of the pages at the very beginning of the code to help you navigate this website better. There are many stylesheets on this project, and many JS files as well. Not to mention, there are some inline styles that have yet to be taken out. I would recommend reading the documentation just in case you get a little confused as to what is going on. This structure can be a bit disorienting for the novice developer, but once you understand what is going on, it's easy.

Most people are using sidebar div tags that are powered by bootstrap. You should know that I used a background gradient for most of the pages to help the layout expand as Ann was adding content. You can view the background gradients in the style.css file. They look like this:


body {
  background-image: -webkit-gradient(linear,
    left top,
    right top,
    color-stop(0, #eee),
    color-stop(12%, #F5F5F5),
    color-stop(12%, #F5F5F5),
    color-stop(12%, #fff),
    color-stop(14%, #fff),
    color-stop(14%, #FED660),
    color-stop(100%, #FED660)
	);
}


I used this because I figured it would be easier to get the layout to adjust as Ann was adding content.

The other thing you should know about this website is that it is using SlickNav for the banner menu which appears after you reduce the browser window below 961px. You can view the documentation for the SlickNav menu bar here: www.slicknav.com
The SlickNav is only covering the top menu bar that appears. For the side menu, you will have to edit the .sidebar and .sidebar2 to get that looking differently.

For the side menu that appears when you click on the portfolio link, you'll have to edit the movablist class and the accompanying movable options. The id to trigger this slideout menu is the #portfBtn id which is featured on every page.

When you click on the hamburger icon from the slick nav menu, it shows white text and a black background. I would have liked to have made the words more centered, but there wasn't enough time for this. You'll probaby be able to do this much better when you install WordPress with it, perhaps even replace the whole slicknav css styling with something else that WordPress includes.

Most of the website is mobile friendly, although the contact page could be adjusted a bit to make it more in line with what Ann is looking for.

The blog section has its own styling pages that are linked to it. These must be included.
Also, the test css files are also important. To clean up the code, you may want to transfer this coding to another file just as a more optimal solution.

The font that Ann wanted was Proxima Nova. I downloaded all versions of this font and installed them into the webpage. Here are the different types of Proxima Nova font that you can use:

ProximaRegular
ProximaLight
ProximaLight2
ProximaNova
ProximaNova2
ProximaNovaBlack
ProximaNovaBlackBold
ProximaExtraBold
ProximaThin
ProximaBest


Just change the font family to any one of these and you should be good to go. You can see the coding for these fonts in the font.css file. All pages use this font.

When I was working on this site, Ann wanted the eyes of the face on the index.html page to move as the cursor moved but getting the eyes to align properly when the browser resolution changed was becoming quite cumbersome so we scrapped it. I think Ann still wants this but perhaps with using a better solution. Mine was to just style the eyes and then move them in place with margin-adjusting. This wasn't great and it took up a lot of time. If you can figure out a better solution to this, then give it a go. It would be really cool to have this in place.

Finally, as a last resort, if you have any questions, you can contact me:
toddsqui@gmail.com
I may not be able to get back to you right away because I am traveling around the world, but I will touch base with you as soon as I can.

I hope this helps!
