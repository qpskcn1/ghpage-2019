---
title: 'Products'
subtitle: 'Representing products` in advertising'
category: Photography
date: 2016-05-03 00:00:00
description:
featured_image: '/images/projects/products/DSC7592.jpg'
---

<div class="gallery" data-columns="3">
	{% assign image_files = site.static_files | where: "image", true %}
	{% for image in image_files reversed %}
		{% if image.path contains '/images/projects/products/' %}
			<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
		{% endif %}
	{% endfor %}
</div>