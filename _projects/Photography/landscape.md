---
title: 'Landscape'
subtitle: 'Random Shots'
category: Photography
date: 2023-08-12 00:00:00
description:
featured_image: '/images/projects/landscape/L1000640.jpg'
---

<div class="gallery" data-columns="3">
	{% assign image_files = site.static_files | where: "image", true %}
	{% for image in image_files reversed %}
		{% if image.path contains '/images/projects/landscape/' %}
			<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
		{% endif %}
	{% endfor %}
</div>