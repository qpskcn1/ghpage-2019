---
title: 'Memory Lane'
subtitle: A solution to promote reminiscence therapy for Alzheimer's
category: Coding
date: 2020-08-15 00:00:00
description: A solution to promote reminiscence therapy for Alzheimer's
featured_image: '/images/projects/memorylane/demo.png'
---


## Problem Statement
Alzheimer's disease is the most common cause of dementia, and older adults with Alzheimer's often suffer from behavioral and psychological symptoms of dementia(BPSD). Reminiscence therapy is a treatment that has proved to help lower BPSD symptoms notably, but traditional reminiscence therapy can be challenging to implement (e.g. time-intensive and costly for caregivers, those who are in rural settings, COVID-19). Other digital therapeutics solutions currently on the market lack [**personalized experience**](#) and [**user autonomy**](#).

## Our solution
Our solution uses an iPad to play music and videos, in hopes of fostering conversations and memories for people with memory loss. Much of the content is older to prompt some of the remote memories that people with memory loss tend to hold onto.

![](/images/projects/memorylane/demo.png)

However, after some primary research (surveys, interviews with one of our competitors and another HCI expert), we found out the [touchscreen interaction is a huge barrier between the older adults and our system](#).

So after rounds of brainstorm, we decide to add [**a tangible device**](#) to help older adults control the system.
Between several ideas, we then dececided to adopt the box design with 4 color distinguished physical buttons.
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
<div class="gallery" data-columns="2">
    <img src="/images/projects/memorylane/test1.gif">
    <img src="/images/projects/memorylane/test2.gif">
    <img src="/images/projects/memorylane/test3.gif">
    <img src="/images/projects/memorylane/test4.gif">
</div>

<!-- ![](/images/projects/memorylane/affinityDiagram.jpg) -->