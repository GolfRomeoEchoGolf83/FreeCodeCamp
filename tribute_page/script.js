/**
 * Created by Greg on 24/02/2017.
 */

// dealing with anchor being hided due to Scrollspy
var shiftWindow = function() {
    scrollBy(0, -50)
};

window.addEventListener("hashchange", shiftWindow);

function load() {
    if (window.location.hash) shiftWindow();
}