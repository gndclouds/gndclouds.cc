---
layout: post
title:  "Nomad x Home Insurance"
date:   2016-11-23 03:28:01 +0000
description:
f_image:
permalink:
categories: client
tag:
  - IDEO CoLab
language: en
---

Nomad x Home Insurance

Reporting on Small-Scale Personal Assets

Nomad is an open source protocol to discover, publish, and remix live data streams from anyone, anywhere.Built on IPFS, a distributed network, Nomad is engineered as universal infrastructure: to be open, scalable, and durable. Anyone can create a new node, subscribe to existing streams, and publish a stream without signing up for any proprietary service.
To learn more about Nomad, visit getnomad.io.

The rise of the sharing economy has fueled a system where we can automatically and seamlessly connect with one another and better use our resources. Inevitably, problems come up in a distributed system — from riders who vomit in Ubers to guests who trash Airbnbs. Today, our risk management systems rely primarily on human judgment in parsing through different, biased accounts of an incident, and little by way of unbiased, real-time data. t’s difficult, if not impossible, to prove what happened when things go wrong and take corrective action…

…until Nomad.

The following narrative is a short depiction how Nomad might support an AirBnB host by monitoring their appliances and valuables, advocating on their behalf if a breakage or misuse occurs, and ensuring comprehensive accountability, coverage, and repair.


Let’s take someone like Kate, who leases her apartment on platforms like Airbnb and HomeAway when she travels. Kate lives at her place most of the year, and uses short term rentals as a way to help keep the cost of her mortgage manageable. Kate lives in a “smart home” — nearly all of the elements of her home are connected. She’s got sensors in the fridge, measuring temperature, weight of goods and what’s inside. She has sensors on her water heater, her radiator, showerhead, television, and even her locks.

The sensors measure everything from what’s in use to what’s worn down or needs replacement. In Kate’s home, all of the sensors that sit on top of her goods are set up as Nomad atomic nodes, quietly publishing to a composite node that aggregates the information and publishes a report on 4121 Maple Drive every five minutes that notes any unusual changes or breakages.


When Kate leases her home on Airbnb, the atomic node that connects to her Airbnb account parses the information and publishes it to the 4121 Maple Drive composite sensor. That way, when the guest arrives, changes in the house’s appliances and item status are aggregated and tagged with the guest’s name.

Most of the time, the sensors just sit in Kate’s home, fairly passively publishing information. Kate makes a mental note to look at the report every month or so to get ahead of any maintenance or work required. Her insurance company even gave her a major break on her home insurance costs, since subscribing to Kate’s composite node let them price risk much more granularly. Now, instead of paying a fixed fee every month, Kate’s payment fluctuates within a certain band depending on the choices she’s made to keep her home in tip top shape and rewarding her for her efforts.

Her composite node definitely came in handy last spring when Kate leased her home out to a group of guys who were hosting a bachelor party. Her guests ended up breaking her hot tub by trying to fit too many people inside and pushing the heating knob beyond its safety lock.

Before she’d connected her home to the Nomad platform, Kate might not have discovered the broken hot tub until she next went to use it — perhaps months later. It would have been hard to prove that the guests were responsible, and Kate would have struggled to get either her insurance company or Airbnb’s to pay out.

Instead, the moment the hot tub pressure sensors identified that thresholds were exceeded, her home’s composite node highlighted that risk. When the composite node received the information on the broken knob, it published another report. And when the hot tub cooled, even while the knob was turned, the composite node published a third update.


Airbnb, who subscribes to Kate’s composite node, had invested in an algorithm that evaluated the reports published by composite nodes to identify any harm done unto a user’s belongings. The company immediately triggered an email to Kate:

Hey! Looks like your guests may have broken your hot tub. We’ve scheduled a repairman to come out and fix it next week, and we’ll hold the guests’ security deposit until then. Not to worry Kate — we’ve got your back!

Risk algorithms suggested that this would probably only be part of the damage. Upon the composite node alert, Airbnb began to listen to some of the other sensors in Kate’s home — like the air quality sensors, that were detecting high levels of organic matter that matched marijuana, and her Roomba, which was picking up much higher than normal volumes of dirt and mud. Identifying that the home would likely need a deep clean, Airbnb automatically scheduled an additional cleaning crew to arrive at the close of the reservation, and charged the group for the costs.

Airbnb’s insurance immediately got a copy of the composite node data and the triggered subscriptions. Because of the sensor evidence from Kate’s home, the insurance company didn’t need to waste time manually processing her claim, sifting through the guests’ accounts and Kate’s and likely being unable to find in Kate’s favor. Instead, they were able to easily and automatically resolve Kate’s issues without an adversarial confrontation.

For Kate, having a smart home equipped with Nomad sensors has been invaluable. Not only has it been helpful to know when and what needs to be repaired, and to be rewarded for her proactivity, but it makes participating in the sharing economy feel so much easier, simpler, and fairer. Kate can rely on her home’s information to trigger the best possible resolution to issues, making her trust the systems and platforms she interacts with even more.


IDEO CoLab is developing Nomad, a peer-to-peer communication system between devices, people and organizations. You can follow our progress on github.

Written in collaboration by Brett Killoran, Adam Lukasik, Eric Chan & William Felker
