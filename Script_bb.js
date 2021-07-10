var i = 0;
		var slides = [];
		var time = 2000;

		slides[0] = 'https://occ-0-1068-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABeq9Fg04r6qPCr1dq7VKOglPPuluLbGBoyy60tgKnh9KsXWh5Y2VaY7jDWhrl4QQV1NhshZxCtLJrM_3V_WJc5J0p-eW.jpg?r=776';
		slides[1] = 'https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/TVSeries/BreakingBad_5145200-BREAKINGBAD._V392940581_SX1080_.jpg';
		slides[2] = 'https://images.theconversation.com/files/32113/original/zddchmvm-1380482556.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip';
		slides[3] = 'https://media.vanityfair.com/photos/54caa6547e4b004120bc1286/master/w_2560%2Cc_limit/image.jpg';

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
