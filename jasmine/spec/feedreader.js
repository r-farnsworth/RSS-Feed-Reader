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
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty.
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* This test loops through each feed
     * in the allFeeds object and ensures a URL is defined
     * and that the URL is not empty. COMPLETE 28/5/18
     */
    beforeEach(function() {
      expect(allFeeds.url).toBeTruthy;
      expect(allFeeds.url).not.toBe(0);
    });


    /* This test loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty. COMPLETE 28/5/18
     */

    beforeEach(function() {
      expect(allFeeds.name).toBeTruthy;
      expect(allFeeds.name).not.toBe(0);
    });
  });



  describe('The menu', function() {
    /* Test that ensures the menu element is
     * hidden by default. A class is applied to the body and removed when
     * the hamburger icon is clicked.
     */
    it('should be hidden by default', function() {
      expect(document.body.classList.contains('menu-hidden')).toBe(true);
    });

    /* This test ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    it('should toggle on and off', function() {

      // menu is shown on when hamburger is clicked
      $('.menu-icon-link').click();
      expect(document.body.classList.contains('menu-hidden')).toBe(false);

      // menu is hidden when hamburger is clicked again
      $('.menu-icon-link').click();
      expect(document.body.classList.contains('menu-hidden')).toBe(true);

    });
  });


  describe('Initial entries', function(){
    /* this test ensures that there is at least one entry in the RSS feed when loaded.
    * beforeEach is necessary as we don't want the expectation to be tested before the feed has had a chance to load.
    */

      let entries;

      beforeEach(function(done){
          loadFeed(0, done());
      });

      it('has at least one entry in the feed', function(done){
        entries = document.getElementsByClassName('entry').length;
        expect($('.feed').length).toBe(1);
        done();
      });
  });





  describe('New Feed Selection', function() {
    /* This test ensures that when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */

  });









}());
