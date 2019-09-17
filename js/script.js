// // --img-OBSERVER -- START -- OLD//
// let options = {
//     root: null,
//     rootMargin: "-600px 0px 600px 0px",
//     threshold: 0, 
// };

// let observer = new IntersectionObserver(intersect, options);

// document.querySelectorAll('div, .right').forEach(img => {
// observer.observe(img);
// // console.log('watching', img);

// });

// function intersect(entries) {
//     entries.forEach(entry => {
//         if(entry.isIntersecting) {
//         // console.log('is intersecting', entry);
//         // console.log(entry.time, entry.intersectionRatio);
//         entry.target.classList.add('appearRight');
//     } else {
//         // console.log('not intersecting', entry);
//         entry.target.classList.remove('appearRight');
//         // observer.unobserve(img);
//     }
// }); 
// }
// // --img OBSERVER -- END -- OLD//

// // --COPY OBSERVER FADEIN -- START --//

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