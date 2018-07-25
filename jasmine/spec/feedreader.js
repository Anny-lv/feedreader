/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    describe('RSS Feeds', function() {
        /* Test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Loop through each feed
         * in the allFeeds object and ensure it has a URL defined
         * and that the URL is not empty.
         */
        it('URL defined and not empty', function() {
            allFeeds.forEach(function(feed) {
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
        });
    });

        /* Loop through each feed
         * ensure it has a name defined
         * and that the name is not empty.
         */
        it('name defined and name is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            });
        });
});

//The Menu - Test Suite

    describe('The menu', function() {

        /* Test that ensures the menu element is
         * hidden by default. 
         */
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked. 
          */
        it('menu icon toggles when clicked', function() { 
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
});

//Initial Entries - Test Suite

describe('Initial Entries', function() {
    
//beforeEach allows to do async test. used to ensure that feeds are loaded before they are tested
        beforeEach(function(done) {
            loadFeed(0, function() {
            done();
            });
        });

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it('there is at least a single entry element within the feed container', function() {
            expect($('.entry').length).toBeGreaterThan(0);
        });
});

//New Feed Selection - Test Suite

describe('New Feed Selection', function() {

        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

//beforeEach allows to do async test. used to ensure that feeds are loaded before they are tested
         beforeEach(function(done) {
            loadFeed(0, function() {
            feedOne = $('.feed').html();
            done();
            });
        });

        it('feed content is changed after loading feed', function(done) {
            expect(after).not.toEqual(initial);
        });
    });
}());
