var i = 0;
		var slides = [];
		var time = 2000;

		slides[0] = 'https://www.koimoi.com/wp-content/new-galleries/2021/06/scam-1992-is-top-indian-series-in-imdb-list-of-highest-rated-tv-shows-001.jpg';
		slides[1] = 'https://m.media-amazon.com/images/M/MV5BMDVlYzdiNzMtMWM5MC00M2EzLTgzYzEtM2FiYjljMzY5YTI0XkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg';
		slides[2] = 'https://assets.architecturaldigest.in/photos/60083e7fa87939f78414f120/16:9/w_2560%2Cc_limit/Scam-1992-Harshad-Mehta-SonyLIV-1366x768.jpg';
		slides[3] = 'https://bingeddata.s3.amazonaws.com/uploads/2020/10/Scam-1992-The-Harshad-Mehta.jpg';

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
