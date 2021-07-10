var i = 0;
		var slides = [];
		var time = 2000;

		slides[0] = 'https://theculturednerd.org/wp-content/uploads/2020/05/the-dark-poster.jpg';
		slides[1] = 'https://external-preview.redd.it/Ka1KtRZdq_w5g16uR7l33xbIlWzZr6AGJIK1swD07fc.jpg?auto=webp&s=9785dcc24bb429e955fbaf8747edf6bcb5b3683b';
		slides[2] = 'https://www.tvguide.com/a/img/resize/652aed5b8690c1db5dc2a4e5b8fd7459aa42c2d6/hub/2019/06/22/75f2bd40-75ac-425b-9d87-58ee98a10125/dark-news.jpg?fit=crop&height=1293&width=2300';
		slides[3] = 'https://cultartes.com/wp-content/uploads/2020/09/Dark-Season-3-German-series-is-streaming-online-on-Netflix-with-English-subtitles-release-date-27th-June-1.jpg';

		function slideshow(){
			document.slide.src = slides[i];

			if(i < slides.length - 1){
				i++;
			} else{
				i=0;
			}

			setTimeout("slideshow()", time)
		}

		window.onload = slideshow;
