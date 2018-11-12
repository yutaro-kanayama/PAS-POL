$(function(){
	'use strict'; 

	/*
	 * メインビジュアル切り替え（jQuery）
	 */
    // $('#mainVisual').bgSwitcher({
    //     images: [
    //     	'images/main_visual_13-0x0.jpg',
    //     	'images/main_visual_6-0x0.jpg',
    //     	'images/main_visual_2-0x0.jpg',
    //     	'images/main_visual_7-0x0.jpg',
    //     	'images/main_visual_111-0x0.jpg'
    //     ]
    // });

	/*
	 * スマホグローバルナビアコーディオン （jQuery）
	 */
	// $('#nav_toggle').on('click', function(){
	// 	$('.header-nav').slideToggle(500);
	// });

	/*
	 * トップへ戻る（jQuery）
	 */
	// $('#backTop').on('click', function(){
	// 	$('body,html').animate({
	// 		scrollTop: 0
	// 	}, 1000);
	// 	return false;
	// });

});

(function() {
    'use strict';

	/*
	 * トップへ戻る（JS Native）
	 */
	document.getElementById('backTop').addEventListener('click', function(){
		// 現在のスクロール位置を取得
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		
		var begin = new Date() - 0;
		var period = 500;

		var id = setInterval(function(){
	    	var current = new Date() - begin;
		    if (current > period) {
		        clearInterval(id);
		        current = period;
		    }
		    var position = scrollTop * (1 - (current / period));
		    // console.log(position);
	    	window.scrollTo(0, position);
		}, 10);
	});


	/*
	 * スマホグローバルナビアコーディオン（JS Native）
	 */
	document.getElementById('nav_toggle').addEventListener('click', function(){
		
		var headerNav = document.getElementById('header-nav');

		// 現在のグローバルナビの高さを取得
		var height = headerNav.offsetHeight;
		
		var begin = new Date() - 0;
		var period = 300;

		var id = setInterval(function(){
	    	var current = new Date() - begin;
		    if (current > period) {
		        clearInterval(id);
		        current = period;
		        headerNav.style.height = 0;
		        headerNav.style.display = "none";
		    }

			if (height) {
				var position = height * (1 - (current / period));
			    // console.log(position);
	    		headerNav.style.height = position + "px";
			} else {
				headerNav.style.display = "block";
				var position = 275 * (current / period);
		    	// console.log(position);
	    		headerNav.style.height = position + "px";
			}

		}, 10);
	});


	/*
	 * メインビジュアル切り替え（JS Native）
	 */
	const images = [
    	'images/main_visual_13-0x0.jpg',
    	'images/main_visual_6-0x0.jpg',
    	'images/main_visual_2-0x0.jpg',
    	'images/main_visual_7-0x0.jpg',
    	'images/main_visual_111-0x0.jpg'
    ];
	let i = 0;

	setInterval(function(){
		let frontVisual = document.getElementById('front-visual');
		let backVisual = document.getElementById('back-visual');

		frontVisual.style.backgroundImage = `url(${images[i]})`;
		frontVisual.style.opacity = 1;

		if (i >= images.length - 1) {
			i = 0;
		} else {
			i++;
		}
		backVisual.style.backgroundImage = `url(${images[i]})`;

		// フロント画像をフェードアウト
		var begin = new Date() - 0;
		var period = 1000;

		var id = setInterval(function(){
	    	var current = new Date() - begin;
		    if (current > period) {
		        clearInterval(id);
		        current = period;
		    }
		    var opacity = 1 * (1 - (current / period));
	    	frontVisual.style.opacity = opacity;
		}, 10);
		
	}, 5000);

}());
