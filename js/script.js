// --img-OBSERVER -- START --//
let options = {
    root: null,
    rootMargin: "-600px 0px 600px 0px",
    threshold: 0, 
};

let observer = new IntersectionObserver(intersect, options);

document.querySelectorAll('.right').forEach(img => {
observer.observe(img);
// console.log('watching', img);

});

function intersect(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
        // console.log('intersecting');
        // console.log(entry.time, entry.intersectionRatio);
        entry.target.classList.add('appear');
        } else {
                entry.target.classList.remove('appear');
                observer.unobserve(img);
			}
	}); 
}
// --img OBSERVER -- END --//

// --COPY OBSERVER -- START --//

let textOptions = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0, 
};

let imageObserver = new IntersectionObserver(textIntersect, textOptions);

document.querySelectorAll('p').forEach(p => {
    imageObserver.observe(p);
    console.log('watching', p);
    
});

function textIntersect(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            // console.log('intersecting');
            // console.log(entry.time, entry.intersectionRatio);
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
            imageObserver.unobserve(p);
        }
    });
}
// --COPY OBSERVER -- END --//
