$(document).ready(function() {

	/* 
	//TextFields
	$('.tField').each(function(){
	    var defaultText = '';
	    $(this).focus(function(){
	    	console.log($(this).val());
	   		defaultText = ($(this).val());
	    	$(this).val('');
			$(this).addClass('active');
			console.log(defaultText);
		});
		$(this).blur(function(){
			
			if($(this).val() == ''){
				$(this).val(defaultText);
				$(this).removeClass('active');
			}
		});
	});
	
	$('textarea').each(function(){
	    var defaultText = '';
	    $(this).focus(function(){
	    	console.log($(this).val());
	   		defaultText = ($(this).val());
	    	$(this).val('');
			$(this).addClass('active');
			console.log(defaultText);
		});
		$(this).blur(function(){
			
			if($(this).val() == ''){
				$(this).val(defaultText);
				$(this).removeClass('active');
			}
		});
	});
	*/


	//
	// Resume Form
	//
	$('.avCB').iCheck({
		checkboxClass: 'icheckbox_square-blue',
		radioClass: 'iradio_square-blue'
	});

	//
	// Profile Form
	//
	$('.creativeFields').multiSelect();
	$('.genderRadio').iCheck({
		checkboxClass: 'icheckbox_square-blue',
		radioClass: 'iradio_square-blue'
	});
	$('.genderRadio').on('ifChecked', function(event){
			alert(event.type + ' callback');
	});

	// Account Panel Switching
	// Panel Switcher is 0 by default, this is to make sure that
	// toggling the forms on the account panel won't have any conflict
	var panelSwitcher = 0;
	$('.loginBTN').click(function(){
		if(panelSwitcher == 0){
			$('.accountPanel').animate({marginLeft:'+=280px'},{duration:'500'});
			$('.signupBTN').removeClass('active');
			$(this).addClass('active');
			$('.loginForm').fadeToggle(600);
			$('.closePanel').fadeToggle(300);
		}else if(panelSwitcher == 2){
			$('.signupBTN').removeClass('active');
			$(this).addClass('active');
			$('.loginForm').slideToggle(200);
			$('.signupForm').slideToggle(200);
		}
		panelSwitcher = 1;
		return false;
	});
	$('.signupBTN').click(function(){
		
		if(panelSwitcher == 0){
			$('.loginBTN').removeClass('active');
			$(this).addClass('active');
			$('.accountPanel').animate({marginLeft:'+=280px'},{duration:'500'});
			$('.signupForm').fadeToggle(600);
			$('.closePanel').fadeToggle(300);
		}else if(panelSwitcher == 1){
			$('.loginBTN').removeClass('active');
			$(this).addClass('active');
			$('.signupForm').slideToggle(200);
			$('.loginForm').slideToggle(200);
		}
		panelSwitcher = 2;
		return false;
	});
	$('.closePanel').click(function(){
		$(this).fadeToggle(300);
		if(panelSwitcher == 1){
			$('.loginForm').fadeToggle(500);
		}else if(panelSwitcher == 2){
			$('.signupForm').fadeToggle(500);
		}
		$('.accountPanel').animate({marginLeft:'-=280px'},{duration:'400'});
		panelSwitcher = 0;
		return false;
	});
			// Signed-in Account
			var panelSwitcher2 = false;
			$('.accountSwitch.signedIn').click(function(){
				if(panelSwitcher2 == false){
					panelSwitcher2 = true;
					$('.accountPanel.signedIn').animate({marginLeft:'+=250px'},{duration:'500'});
				}else{
					panelSwitcher2 = false;
					$('.accountPanel.signedIn').animate({marginLeft:'-=250px'},{duration:'500'});
				}
				return false;
			});

	// 
	// Portfolio Form
	//

	$('.creativeFields').multiSelect();
	$('.avCB').iCheck({
		checkboxClass: 'icheckbox_square-blue',
		radioClass: 'iradio_square-blue'
	});

	var tempString = '';
	$('.addItem').click(function(e){
		
		if($(this).is(':contains("Add")')){
			tempString = $(this).text();
			$(this).text('Cancel');
		}else if($(this).is(':contains("Cancel")')){
			$(this).text(tempString);
		}
		$(this).parent().find('.addItemFields').slideToggle('700');
		e.preventDefault();
	});

	$('.collapseAlbum').click(function(e){
		var cAlbum = $(this).parent().parent().parent().find('.albumContent');
		if(cAlbum.is(":visible")){
			$(this).find('img').attr('src', 'images/icons/maximize.png');
		}else{
			$(this).find('img').attr('src', 'images/icons/minus.png');
		}
		cAlbum.slideToggle(450);
		e.preventDefault();
	});

			//Editing Album Name
			var tempTitleName = '';
			$('.editAlbumName').click(function(e){
				var dtitleText = $(this).parent().parent().find('h4').text();
				var dAlbumHeader = $(this).parent().parent().parent().find('.albumHeader');
				var dAlbumTitle = $(this).parent().parent().parent().find('.titleForm');
				
				dAlbumTitle.find('input').attr('value', dtitleText);
				dAlbumTitle.slideToggle(100);
				dAlbumHeader.slideToggle(100);

				e.preventDefault();
			});
			//Submitting New Album Title
			$('.titleEdit').click(function(e){
				var eAlbumHeader = $(this).parent().parent().find('.albumHeader');
				var eAlbumTitle = $(this).parent().parent().find('.titleForm');
				var editedName = eAlbumTitle.find('input').val();
				
				$(this).parent().parent().find('h4').text(editedName);

				eAlbumTitle.slideToggle(100);
				eAlbumHeader.slideToggle(100);
				console.log('')
				e.preventDefault();
			});

			//Editing Items
			$('.editItem').click(function(e){
				var fItemEditForm = $(this).parent().parent().parent().find('.itemEdit');
				var fItemDescription = $(this).parent().parent().parent().find('.itemDetails');
					var fitemTitle = fItemDescription.find('h5').text();
					var fitemDesc = fItemDescription.find('p').text();

					fItemEditForm.find('input').attr('value', fitemTitle);
					fItemEditForm.find('textarea').val(fitemDesc);

				fItemEditForm.slideToggle(100);
				fItemDescription.slideToggle(100);
				e.preventDefault();
			});

			$('.doneEditItem').click(function(e){
				var gitemTitle = $(this).parent().find('input').val();
				var gitemDesc = $(this).parent().find('textarea').val();
				var gformHolder = $(this).parent();
				var gItemDescription = $(this).parent().parent().find('.itemDetails');
					gItemDescription.find('h5').text(gitemTitle);
					gItemDescription.find('p').text(gitemDesc);
				gformHolder.slideToggle(100);
				gItemDescription.slideToggle(100);
				e.preventDefault();
			});


    //
	// Job Listing Filtering
	//
	$('.joblistFilter li a.mainBtn').each(function(){
	    var menu = $(this).parent().find('ul');
	    $(this).click(function(){
	    	menu.css('top','48px');
	    });

	    $(menu).hover(
	        function(){},
	        function(){
	           menu.css('top','-999px');
	        }
	    );
	});
	/*$('.joblistFilter li ul div li a').each(function(){
		
		$(this).click(function(){
			var filterText2 = $(this).text();
			var mainFilter2 = $(this).parent().parent().parent().parent().find('a.mainBtn');
			var swapFilter2 = $(this).parent().parent().parent().parent().find('a.mainBtn').text();

			mainFilter2.text(filterText2); 
			$(this).text(swapFilter2);
		});
	});*/

	//
	// Job Applicant
	//

	//
	// Payment Form
	//
	$('.paymentMethod').iCheck({
		checkboxClass: 'icheckbox_square-blue',
		radioClass: 'iradio_square-blue'
	});
	$('.paymentMethod').on('ifChecked', function(event){
			alert(event.type + ' callback');
	});

	//
	// Portfolio Page
	//

		// Thumbnails
		$('.thumbBatches').rhinoslider({
			controlsMousewheel: false,
			controlsKeyboard: false,
			controlsPrevNext: false,
			controlsPlayPause: false,
			cycled: false,
			shiftValue: '100',
			effectTime:'500',
			showBullets: 'never',
			showControls: 'never',
			slidePrevDirection: 'toRight',
			slideNextDirection: 'toLeft'
		});

		var indexBatch = 0;
		var batchTotal = $('.thumbBatches').children().length;

		if(batchTotal == 1){
			$('.nextBatch').addClass('hiddenControl');
		}

		$('.itemControl.prevBatch').click(function(){
			console.log('prev');
			if(indexBatch >= 1){
				indexBatch--;
			}
			if(indexBatch == batchTotal-2){
				$('.itemControl.nextBatch').removeClass('hiddenControl');
			}
			if(indexBatch == 0){
				$(this).addClass('hiddenControl');
			}
			$('.thumbBatches').data('rhinoslider').prev();
			return false;
			
		});
		$('.itemControl.nextBatch').click(function(){
			console.log('next');
			if(indexBatch >= 0 && indexBatch != batchTotal-1){
				indexBatch++;
			}
			if(indexBatch <= 1){
				$('.itemControl.prevBatch').removeClass('hiddenControl');
			}
			if(indexBatch == batchTotal-1){
				$(this).addClass('hiddenControl');
			}
			$('.thumbBatches').data('rhinoslider').next();
			return false;
		});

	//
	// Sticker Post
	//
	var initNum = 0;
	setInterval(function() {
		var sContainer = $('.stickerPost .stickies');
	    var stickyPosts = sContainer.children().length;
	   
		if(initNum != stickyPosts-1){
	    	initNum++;
	    }else if(initNum == stickyPosts-1){
	    	initNum = 0;
	    }

	    sContainer.find('.active').animate({top:'-=10px',opacity:0},{duration:150}).removeClass('active');
	    sContainer.children().eq(initNum).css('top','-10px').delay(170).animate({top:'-=10px',opacity:1},{duration:150}).delay(400).addClass('active');

	    console.log('hey');
	}, 3000);

	//
	// Shortlisting
	//
	$('.shortlistUser').click(function(){
		$(this).toggleClass('addedTolist');

		if($(this).is(':contains("Add")')){
			$(this).text('Remove to Shortlist');
		}else if($(this).is(':contains("Remove")')){
			$(this).text('Add to Shortlist');
		}
	});
	
	//
	// Switching / Account Switcher
	//
	$('.bool-slider .inset .control').click(function() {
        if (!$(this).parent().parent().hasClass('disabled')) {
            if ($(this).parent().parent().hasClass('true')) {
                $(this).parent().parent().addClass('false').removeClass('true');
            } else {
                $(this).parent().parent().addClass('true').removeClass('false');
            }
        }
    });

    //
    // Homepage Slider Banner
    // 
    $('.homepageBanner ul').rhinoslider({
		effectTime: 500,
		showTime: 4000,
		controlsMousewheel: false,
		controlsKeyboard: false,
		controlsPlayPause: false,
		autoPlay: true
	});

	//
	// Job Filter Scrollbar
	//
	$(".groupScroll").mCustomScrollbar();

});