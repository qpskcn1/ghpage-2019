---
title: 'Portraits'
subtitle: 'Creativity'
category: Photography
date: 2014-05-03 00:00:00
description:
featured_image: '/images/projects/portraits/DSC_9114.jpg'
---

<div class="gallery" data-columns="3">
	{% for image in site.static_files %}
		{% if image.path contains '/images/projects/portraits/' %}
			<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
		{% endif %}
	{% endfor %}
</div>
