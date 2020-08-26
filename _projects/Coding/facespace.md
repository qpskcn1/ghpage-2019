---
title: 'Facespace'
subtitle: 'Automatic face touch detection web app'
category: Coding
date: 2020-02-15 00:00:00
description: Using new Google ML models, including a 3D facemesh and handpose, we created a web app that detects when your hand is touching your face and notifies you! But don't take my word for it!
featured_image: '/images/projects/facespace/facespace.jpg'
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/u2yVwdbd1M0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Using new Google ML models, including a 3D facemesh and handpose, we created a web app that detects when your hand is touching your face and notifies you! But don't take my word for it!
You can test the app out here: [https://facespace.app/](https://facespace.app/).

<div class="gallery" data-columns="2">
	<img src="/images/projects/facespace/fs_screenshot1.png">
	<img src="/images/projects/facespace/fs_demo.jpg">
	<img src="/images/projects/facespace/fs_notification.jpg">
	<!-- <img src="/images/demo/demo-landscape-2.jpg"> --> -->
</div>

## Inspiration
One of our team members, Steven, stumbled upon on this article from [GeekWire](https://www.geekwire.com/2020/response-coronavirus-seattle-team-creates-smartband-vibrates-touch-face/). Inspired by the simplicity, positive response, and demand for such a product, we thought about being able to create a similar detection mechanism using off-the-shelf technologies over spring break. We shared this information with our teacher Sidhant to validate the idea, and word got out to our other teachers and heads of our university program. Next thing we are hosting a Hackathon with our fellow cohort of students in the Global Innovation Exchange program at the University of Washington.

## What it does
We created [FaceSpace](https://facespace.app/), an app that helps you protect yourself by bringing mindfulness to when you touch your face while working. We accomplish this by running machine learning models for the hand and face all in your browser. We take your privacy very seriously and want you to know that none of your hand or face data ever leaves your browser. These models run completely locally within your browser window. All code is open source and can be viewed on [GitHub](https://github.com/Global-Innovation-Exchange/FaceSpace).

Just click start and FaceSpace will begin loading Machine Learning models into your browser. This can take some time so please hang tight and be patient while it loads. You will be asked to accept camera access and notification access. These are used to correctly determine when you touch your face and notify you when this happens.

**Please note that this is an imperfect solution which does not distinguish between other behaviors that occur around your face, such as drinking or touching glasses. It does its best to determine what a hand is and what a face is and when they intersect.**

## How we built it
During our first meeting, a team member spoke of an idea of using the webcam to detect face touching. We thought that it was a great idea. The first MVP was created using the handtrack.js and face-api.js libraries. We then moved to using some of the latest models which have come from Google, handpose and facemesh. All of our work thus far has been built upon existing tensorflow.js libraries. Using git we practiced branching and merging methodologies and communicated several times as a team to merge code seamlessly. We tracked our progress over time and delegated tasks using Trello. Features were discussed and we decided to implement the ones that we thought would drive the most impact for those using our application. We focused heavily on the user experience in ensuring that our application made it clear what it can and can't do, as well as addressing privacy concerns.

## Challenges we ran into
Given the short period of time we of course could not implement all features, but we believe the key capability for our application is to notify users when they're touching their face. Getting to this point would prove to be difficult though. In the beginning we'd used handtrack and face-api, and, while face-api worked great, handtrack was just not able to reliably track hands in the image. It was crucial that we got to this point though because we'd then learn in another meeting that Google had just made new models for face tracking and hand tracking; these models are much more reliable and can brought our vision to reality. Getting these models to work in conjunction with each other would prove to be the biggest challenge we'd faced, as there are even some issues with the handpose model which we could not change upstream given the time frame we're working in. We persisted and worked around these issues, allowing us to deliver a delightful user experience.

## Accomplishments that we're proud of
As students of University of Washington's Global Innovation Exchange, we're proud that we are able to bring innovation to help in these unprecedented times. The best situation is the one where we bring awareness to a user so they become aware of touching their face and can stop when they otherwise wouldn't have been. We knew that when developing this application and it got to the point where it would detect us touching our faces when we weren't aware of doing so, that we're so proud it actually worked!

## What we learned
Due to our strict timeline to develop this application, we spent the majority of our days coding and meeting. Throughout this process we learned a lot about implementing new technologies. Multiple team members have never worked in the industry as software developers and needed to use technologies like GIT. We wanted to ensure that each team member could contribute to our project, which in itself was a challenge. Others hadn't done web development and needed to learn the responsive framework Bootstrap. We had some members working on design and others taking that design and turning it into code. We also ran a short survey to test our application and gained a lot of valuable insight from our users which we took to quickly improve our application. There was so much we learned in the short time that we developed this application that it was like being part of a startup. It was super fun and we can't wait to learn more on other projects inside and outside of our program!

## What's next for FaceSpace
We want to continue improving our application. There are many features which we didn't end up implementing but could really make a difference in our users' lives. We have a heat map feature in development which can help users visually see where they touch their face throughout the day. This is something that would simply not be possible without using some way to track hand and face separately and be able to pinpoint their individual landmarks. With our newly developed basis through we can now do this and present the user data in another way that's useful to them. To identify the optimal ways to display this information and which features to work on next, we hope to get feedback from our users and continue to use this application for ourselves.