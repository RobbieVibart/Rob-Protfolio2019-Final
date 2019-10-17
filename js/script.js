
let fadeOptions = {
    root: null,
    rootMargin: "0px 0px",
    threshold: 0, 
};

let imageObserver = new IntersectionObserver(fadeIntersect, fadeOptions);

document.querySelectorAll('.fade_up').forEach(p => {
    imageObserver.observe(p);
    // console.log('watching', p);
    
});

function fadeIntersect(entries) {
    
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            // console.log('intersecting');
            // console.log(entry.time, entry.intersectionRatio);
            entry.target.classList.add('active');
            
        } else {
            entry.target.classList.remove('active');
            // imageObserver.unobserve(p);
            
        }
    });
}
// // --COPY OBSERVER FADEIN -- END --//


// --COPY-OBSERVER -- START --//
let options = {
    root: null,
    rootMargin: "0px 0px",
    threshold: 0, 
};

let observer = new IntersectionObserver(intersect, options);

document.querySelectorAll('div, .right').forEach(img => {
observer.observe(img);
// console.log('watching');

});

function intersect(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
        // console.log('intersecting');
        // console.log(entry.time, entry.intersectionRatio);
        entry.target.classList.add('appearRight');
        } else {
                !entry.target.classList.remove('appearRight');
					// console.log('not intersecting');
                // observer.unobserve(imgs);
					
										

			}
	}); 
}
// --COPY-OBSERVER -- END --//

// SMOOTH SCROLL --START-- //
$(function() {
    $('a[href*=#]').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop : 
            
            $($(this).attr('href')).offset().top}, 800, 'linear');
        });
    });
// SMOOTH SCROLL --END-- //
