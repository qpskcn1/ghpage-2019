---
title: 'Memory Lane'
subtitle: A solution to promote reminiscence therapy for Alzheimer's
category: Coding
date: 2020-08-15 00:00:00
description: A solution to promote reminiscence therapy for Alzheimer's
featured_image: '/images/projects/memorylane/demo.png'
---


## Problem Statement
People with dementia become less social, experience anxiety, and feel powerless adding challenges on caregivers. A good, clinically proven, approach to minimize those symptoms is to engage in reminiscing about the old times (known as reminiscence therapy). Family members want to help and engage, but are burned-out and find it hard to figure out the right contents. When no such list is provided, caregivers (family/paid) play random contents in the hope of uplifting the mood. Even with the right contents, caregivers do not know how to encourage a talk, and have full control which empowers the “dependency” feeling. These lead to reduction of the impact of a good reminiscence time, and addition of stress on caregivers.
Current technological solutions in the market are digital apps that serve as repositories without much [personalization](*), do not give [autonomy](*) to people with dementia and add more workload on caregivers.


## Our solution
Our solution uses an iPad to play music and videos, in hopes of fostering conversations and memories for people with memory loss. Much of the content is older to prompt some of the remote memories that people with memory loss tend to hold onto.

![](/images/projects/memorylane/demo.png)

However, after some primary research (surveys, interviews with one of our competitors and another HCI expert), we found out the [touchscreen interaction is a huge barrier between the older adults and our system](#).

So after rounds of brainstorm, we decide to add [**a tangible device**](#) to help older adults control the system.
Among several ideas, we then dececided to adopt the box design with 4 color distinguished physical buttons.
To make the entire setup process as easy as possible, instead of creating another connected devices, we decided to use the [camera](#) to receive signals. This also allowed us to explore more possibilies like scanning 3D objects to select themes.

![](/images/projects/memorylane/newdesign.png)

We followed the rapid prototyping techniques, starting from sketch, cardboard prototype to laser cut MDF, builded our hardware prototype.
For software, in order to read the raw camera data and achieve the better performance of buttons and object detection, we chose Swift over React Native for the App development.

<div class="gallery" data-columns="3">
	<img src="/images/projects/memorylane/cardboard.gif">
    <img src="/images/projects/memorylane/mdf1.gif">
    <img src="/images/projects/memorylane/mdf2.gif">
</div>

<div class="gallery" data-columns="3">
    <img src="/images/projects/memorylane/mdf3.gif">
	<img src="/images/projects/memorylane/ButtonPressed.gif">
    <img src="/images/projects/memorylane/ObjectDetection.gif">
</div>

To validate our new concept and design, we recruited 5 older adults. They were able to figure out the function of buttons and 3D objects by themselves with minimum instruction and hints. We also received a lot of positive feedback about the button design and its responsiveness.
<!-- <div class="gallery" data-columns="2">
    <img src="/images/projects/memorylane/test1.gif">
    <img src="/images/projects/memorylane/test2.gif">
    <img src="/images/projects/memorylane/test3.gif">
    <img src="/images/projects/memorylane/test4.gif">
</div> -->


After the first round of user evaluation, we kept improving both the hardware and software of our prototype based on the feedback we got from users.
I, as the software engineer in the team, was in charge of the iOS app development using [**Swift**](#).
Since it was my first time developing App using Swift, it took me a while to understand the [**Camera**](#) module and how we can use [DispatchQueue](#) to manage the execution of tasks serially or concurrently on the app's main thread. I also used the [NotificationCenter](#) and [Observer](#) to pass data and signals between different ViewControllers.
The App also sends requests to our backend to get a playlist or update the user's profile, those requests are also sent asynchronously.

![](/images/projects/memorylane/UML.jpg)

In addition, I implemented [auto lighting calibration](*) and [device setup validation](*) to make the setup process more smooth and seamless. For animated visual feedback, the [Lottie](*) Library developed by Airbnb is used.
<div class="gallery" data-columns="4">
    <img src="/images/projects/memorylane/m2ipad.gif">
    <img src="/images/projects/memorylane/ipadPlacementAnimation.gif">
    <img src="/images/projects/memorylane/m2reflector.gif">
    <img src="/images/projects/memorylane/reflectorPlacementAniamtion.gif">
</div>

For both button detection and object detection, we called [VNRecognizedObjectObservation](*), [VNDetectRectanglesRequest](*) directly from the [Vision Framework](*) provided by Apple. We also did a lot of fine-tuning and trained our own object detection model.
<div class="gallery" data-columns="3">
    <img src="/images/projects/memorylane/slotDetection.gif">
    <img src="/images/projects/memorylane/objectDectection.gif">
    <img src="/images/projects/memorylane/cassett.gif">
</div>



During the session, when people are watching the video or listening to the music, we also provide several content related question at bottom of the screen as a conversation starter. We also collect data like how long the user spends on each content, how many times the repeat button is pressed, if they press the like button, etc. Our [recommendation system](*) will generate more personalized playlist each time by analyzing the data we collected.

![](/images/projects/memorylane/highlevelDiagram.jpg)


We recruited 15 people this time to help us with the user evaluation. 6 of them are older adults with different levels of dementia. We also had two care facilties who were assisting us during the evaluation.

![](/images/projects/memorylane/participants.png)

![](/images/projects/memorylane/carefacilities.png)

 “I think the instructions and interactions are really clear and direct to the point that they don’t leave room for questions at all. I like it”.

“Though she is legally blind, cannot follow directions and wasn’t able to touch buttons herself, she was able to make decisions about what to do next, she sang along and was engaged fully. I’m amazed she was able to do that”

“It’s neat!”

We received a lot of good feedback from users, people enjoyed our prototype, some of them were even unwilling to stop the session. We also had conversations with caregivers after each session, they helped us identified a lot of things that we couldn't find out via Zoom video calls. In general, caregivers in this round of user evaluation believe this device can truly bring some user's autonomy back to older adults and make them engage with the content. However, people in the more advanced dementia stage may still need assistance from the caregiver to operate the device.

<!-- ![](/images/projects/memorylane/affinityDiagram.jpg) -->