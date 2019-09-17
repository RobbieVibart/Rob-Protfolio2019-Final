// --img-OBSERVER -- START --//
let options = {
    root: null,
    rootMargin: "-600px 0px 600px 0px",
    threshold: 0, 
};

let observer = new IntersectionObserver(intersect, options);

document.querySelectorAll('div, .right').forEach(img => {
observer.observe(img);
// console.log('watching', img);

});

function intersect(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
        // console.log('is intersecting', entry);
        // console.log(entry.time, entry.intersectionRatio);
        entry.target.classList.add('appearRight');
    } else {
        // console.log('not intersecting', entry);
        entry.target.classList.remove('appearRight');
        // observer.unobserve(img);
    }
}); 
}
// --img OBSERVER -- END --//

// --COPY OBSERVER -- START --//

let textOptions = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 1, 
};

let imageObserver = new IntersectionObserver(textIntersect, textOptions);

document.querySelectorAll(' div, .left').forEach(p => {
    imageObserver.observe(p);
    // console.log('watching', p);
    
});

function textIntersect(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            // console.log('intersecting');
            // console.log(entry.time, entry.intersectionRatio);
            entry.target.classList.add('appearLeft');
        } else {
            entry.target.classList.remove('appearLeft');
            // imageObserver.unobserve(p);
        }
    });
}
// --COPY OBSERVER -- END --//
