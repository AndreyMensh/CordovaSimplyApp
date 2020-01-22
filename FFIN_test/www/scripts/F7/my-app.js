
// Let's register Template7 helper so we can pass json string in links
Template7.registerHelper('json_stringify', function (context) {
    return JSON.stringify(context);
});

// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon: true,
    // Enable templates auto precompilation
    precompileTemplates: true,
    // Enabled pages rendering using Template7
    template7Pages: true,
    // Specify Template7 data for pages
    template7Data1: {

       
    }

});


// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
});


$$(document).on('page:init', '.page[data-page="details"]', function (e) {
    var page = e.detail.page;
    var ItemID = page.query.item_id;

    $$('#lblItemID')[0].textContent = "Item # " + ItemID + " Title";
    $$('#lblItemDetails1')[0].textContent = "Item # " + ItemID + " Some text .....  Some text .....  Some text .....  Some text .....  Some text .....  Some text .....  Some text .....  Some text .....  Some text .....  Some text .....  Some text .....  Some text .....  Some text .....  Some text .....  Some text .....  Some text .....  Some text .....  Some text .....  Some text .....  Some text .....  ";
    $$('#lblItemDetails2')[0].textContent = "Item # " + ItemID + " Also Some text .....   Also Some text .....   Also Some text .....   Also Some text .....   Also Some text .....   Also Some text .....   Also Some text .....   Also Some text .....   Also Some text .....   Also Some text .....   Also Some text .....   Also Some text .....   Also Some text .....   Also Some text .....   Also Some text .....   Also Some text .....   Also Some text .....   Also Some text .....   Also Some text .....   Also Some text .....   Also Some text .....   Also Some text .....  ";

}); // $$(document).on('page:init', '.page[data-page="details"]', function (e) {


var i_id = 0;
var i_name = 'Item # ';

var AddHTML_ItemsList = '<ul>';

while (i_id < 30) { 

    AddHTML_ItemsList = AddHTML_ItemsList +
        '<li>' +
        '<a href="details.html?item_id=' + i_id + '" class="item-content item-link">' +
        '<div class="item-inner">' +
        '<div class="item-title-row">' +
        '<div class="item-title">' + i_name + i_id + '</div>' +
        '</div>' + '</div>' +
        '</a>' +
        '</li>';

    i_id++;
}

AddHTML_ItemsList = AddHTML_ItemsList + '</ul>';

$$('#divItemsList').append(AddHTML_ItemsList);

