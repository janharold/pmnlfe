$(document).ready(function() {

	// TextFields
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
			$('.accountPanel').animate({marginLeft:'+=360px'},{duration:'500'});
			$('.loginForm').fadeToggle(600);
			$('.closePanel').fadeToggle(300);
		}else if(panelSwitcher == 2){
			$('.loginForm').slideToggle(200);
			$('.signupForm').slideToggle(200);
		}
		panelSwitcher = 1;
		return false;
	});
	$('.signupBTN').click(function(){
		
		if(panelSwitcher == 0){
			$('.accountPanel').animate({marginLeft:'+=360px'},{duration:'500'});
			$('.signupForm').fadeToggle(600);
			$('.closePanel').fadeToggle(300);
		}else if(panelSwitcher == 1){
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
		$('.accountPanel').animate({marginLeft:'-=360px'},{duration:'400'});
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
	    	menu.fadeToggle(200);
	    });

	    $(menu).hover(
	        function(){},
	        function(){
	            menu.fadeToggle(200);
	        }
	    );
	});
	$('.joblistFilter li ul li a').each(function(){
		
		$(this).click(function(){
			var filterText = $(this).text();
			var mainFilter = $(this).parent().parent().parent().find('a.mainBtn');
			var swapFilter = $(this).parent().parent().parent().find('a.mainBtn').text();

			mainFilter.text(filterText); 
			$(this).text(swapFilter);
		});
	});

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
});