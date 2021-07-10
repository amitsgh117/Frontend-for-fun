var i = 0;
		var slides = [];
		var time = 2000;

		slides[0] = 'https://deadline.com/wp-content/uploads/2020/10/money-heist-part-4-preview-netflix.jpg';
		slides[1] = 'https://pbs.twimg.com/media/EYJHbkQUcAI-BKS.jpg:large';
		slides[2] = 'https://i.tribune.com.pk/media/images/2038859-moneyheeist-1566387980/2038859-moneyheeist-1566387980.jpeg';
		slides[3] = 'https://www.cnet.com/a/img/UJoI5vH7U87Riq6BjyZH6y1pZag=/2019/06/20/41b78c8f-c2f3-463e-879c-2cc619d43edf/casa-de-papel-parte-3.jpg';

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
