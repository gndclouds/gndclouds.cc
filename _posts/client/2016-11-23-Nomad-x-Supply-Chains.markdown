---
layout: post
title:  "Nomad x Supply Chains"
date:   2016-11-23 03:28:01 +0000
description:
f_image:
permalink:
categories: client
tag:
  - IDEO CoLab
language: en
---


# Nomad x Supply Chains

Coordinating Supply for a Boutique Brewery

> Nomad is an open source protocol to discover, publish, and remix live data streams from anyone, anywhere. Built on IPFS, a distributed network, Nomad is engineered as universal infrastructure: to be open, scalable, and durable. Anyone can create a new node, subscribe to existing streams, and publish a stream without signing up for any proprietary service.

> To learn more about Nomad, visit getnomad.io.

Supply chains are sets of long branching trees of dependencies worked in tandem to produce a suite of products. Over 770 suppliers, dispersed across the globe, are part of creating Apple’s iPhone alone. Properties of the current method of organization and purchase such as delivery delays, order batching, shortage gaming, and sales and price discounts all contribute to a $30+ billion loss in the grocery supply chain alone.

This fundamentally is problem of coordination, exacerbated by consumer data being siloed at the varying points of sale. As the chain get longer, the latency of information between the retailers and each link becomes greater and turnaround time slows. Longer supply chains are much less resilient and adaptable. Each link in the supply chain uses their own algorithm to predict demand based on the fuzzier and fuzzier data as it gets closer and closer to the roots of the supply chain.

In a supply chain, each step of production is one step further from consumer demand. This distortion leads to excessive inventory throughout the system, poor product forecasts, insufficient or excessive capacities, product unavailability, and higher costs generally as the global game of telephone goes awry…

…until Nomad.

We were intrigued by this problem, and wrote the following narrative to imagine how Nomad might help a boutique San Diego brewery investigate demand, iterate on their current product offerings with available resources, and swiftly respond to demand.

---

![](/_assets/_nomad/nomad-havoc-0.png)

Bill, the chief brewer and owner of the Havoc Craft Brewing Company in San Diego, arrives on the brewing floor and walks over to his production monitors.

As the screens blink to life, Bill looks over the monthly report on the sales of the three beers currently brewed by Havoc. He has noticed that sales for their current product offerings has been dropping steadily for the past few months and decides to subscribe to a Nomad atomic node that scrubs Twitter for any mentions of his brand and subsequent beers for positive and/or negative feedback. His dashboard displays trending sentiments within the scrubbed tweets: highlights including multiple references of #havocbeer being “unambitious”, “forgettable”, and “underwhelming”.

Feeling down but not out, Bill’s curiosity about current beer trends peaks, he searches the Nomad discover platform for a composite node that culls sales data from local pubs, grocery stores, and boutique retailers to find growing trends in beer consumption. Quickly importing the data to his dashboard, Bill sees that the San Francisco area, one of the most competitive and profitable regions for beer sales, has seen a spike in desire for Double IPAs with fruity notes. Havoc beer doesn’t currently brew any Double IPAs and Bill has always wanted to experiment with fruit in the brewing process.

![](/_assets/_nomad/nomad-havoc-1.gif)

Inspired and empowered, Bill makes his way to the stockroom. He knows that Double IPAs require twice as much malt and three times as many hops as a typical lager, so he checks through his digitized grind sheets that parse Havoc’s current inventory of hops, yeast, and malt. sensors gauge the weight of each set of ingredients and display that he should have enough ingredients to make a few trial batches.

While Bill has all the ingredient to make a basic Double IPA, there isn’t any fruit to add into the production beer wort. If this beer is to be successful in the competitive landscape, they are going to need the finest ingredients.

![](/_assets/_nomad/nomad-havoc-2.png)

Bill subscribes to a Nomad node that displays the current fruit harvest at orchards nearby. The node consistently streams updates, and Bill finds that a farm in Moorpark, CA has just had an unexpectedly abundant harvest of heirloom apricots and is willing to let them go for a fraction of the usual cost per pound. Bill calls the farm and places an order for 200 pounds of their sweetest apricots. After confirming the sale, the small farm is quick to respond to Havoc’s order and sends GPS tagged crates to the brewing company loading bay.

Over the next few days, Bill and his crew dries bitter malt knowing that the sweet apricots will balance the sugar levels in the wort further down the production line. Hardware sensors monitor and optimize the temperature of the cracking process based on Nomad data for his specific ingredient set, brewing floor conditions, and the level of moisture in the air.

As Bill pours the malt into the mash drums, the brewing status of Havoc Brewing’s new Apricotastrophe Double IPA is published on their website, promoting the beer, as dynamic advertisements display an intimate view at the brewing process as well as a message publishing an ETA to “bars near you!” — promoting engagement with fans and accumulating hype will be imperative to a successful launch; it is craft beer after all.

![](/_assets/_nomad/nomad-havoc-3.gif)

After the finishing touches on fermentation, packaging, bottling are carried out, Bill’s heart beats with excitement as he repurposes the GPS crates he received the apricots in and re-tags them with the shipping data for the first introductory batch and flags the crate for pickup.

In the coming weeks, Bill monitors the distribution of Apricotastrophe to local bars, pubs, and corner stores as the shipping crates publish location data, as well as sun exposure, temperature, and quality of handling. If any crates receive undesirable shipping conditions that may spoil or taint the beer, the batch is flagged as subpar and not distributed to consumers. It is crucial that the first experiences of consumers is as pleasurable as possible and wholly unaffected by conditions outside of Havoc’s purview, especially as they would deter prospective customers, erode their brand name, and ruin the new product’s prospect of success.

![](/_assets/_nomad/nomad-havoc-4.png)

As the first crates arrive in the market, hardware sensors on kegs monitor consumption. They publish their data, and the the monitors on Havoc’s brewing floor subscribe. If the bar or pub has enabled automatic reordering, a new keg is automatically shipped as soon as an old one is getting low. This enables a shorter turnaround as product demand can be received and acted upon immediately instead of relying on supply chain politics. Bill and his crew gather around to watch as their creation meets the public.

Within the day, Havoc has received an onslaught of new orders and reorders for Apricotastrophe as sales spike and social media posts pour in favoring their new offering. The crew cracks open some beers as Bill creates his own Nomad composite node to link a tapped keg with the ordering of new ingredients to any of their various produce suppliers. He sits back and relaxes in front of the brewing floor monitors as his team continues working on what they do best — brewing beer.

![](/_assets/_nomad/nomad-havoc-5.gif)

With Bill’s supply chain backed by the power of Nomad, he has the ability to now bring the bullwhip effect under his control. He can see what consumers downstream are doing — helping him develop new products and order more ingredients. The future of supply chains has unified understanding of consumer’s data as it gets broadcast from its source to ensure that all stakeholders are able to work fully in sync saving money, time, and resources.

---

**[IDEO CoLab](https://medium.com/r/?url=http%3A%2F%2Fideocolab.com) is developing [Nomad](https://medium.com/r/?url=http%3A%2F%2Fgetnomad.io), a peer-to-peer communication system between devices, people and organizations. You can follow our progress on [github](https://medium.com/r/?url=https%3A%2F%2Fgithub.com%2FIDEO-coLAB%2Fnomad).**

*Written in collaboration by [Brett Killoran](https://medium.com/@brettkilloran), [Adam Lukasik](https://medium.com/r/?url=http%3A%2F%2Fadam%20lukasik), [Eric Chan](https://medium.com/@Chanman) & [William Felker](https://medium.com/@gndclouds)*
