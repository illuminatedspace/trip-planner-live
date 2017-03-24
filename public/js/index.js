  //options for hotels
  //$('#hotel-choices').append("<option>hotels</option>")

var initialItinerary = $('#itinerary');


  //function to push hotels, activity and restaurant to array
  var daysArray = [];

  var pushToDaysArray = function(dayIndex, itinerary){
    daysArray[dayIndex] = itinerary;
    // console.log(daysArray)
  }

//given solution---------------------------------------------------------------
// var $optionsPanel = $('#options-panel');
// var $hotelSelect = $('#options-panel').find('#hotel-choices');
// var $restaurantSelect = $('#options-panel').find('#hotel-choices');
// var $activitySelect = $('#options-panel').find('#hotel-choices');

// hotels.forEach(makeOption, $hotelSelect);
// restaurants.forEach(makeOption, $restaurantSelect);
// activities.forEach(makeOption, $activitySelect);

// function makeOption (databaseAttraction) {
//   var $option = $('<option></option>')
//     .text(databaseAttraction.name)
//     .val(databaseAttraction.id);
//   this.append($option);
// }

  var option = '';
  for(var i = 0; i< hotels.length; i++){
    option += '<option value="'+ hotels[i].name +'">' + hotels[i].name +'</option>';
  }
$('#hotel-choices').append(option);


//Restaurants
var option2 = '';
  for(var i = 0; i< hotels.length; i++){
    option2 += '<option value="'+ restaurants[i].name +'">' + restaurants[i].name +'</option>';
  }
$('#restaurant-choices').append(option2);

//Activities
var option3 = '';
  for(var i = 0; i< hotels.length; i++){
    option3 += '<option value="'+ activities[i].name +'">' + activities[i].name +'</option>';
  }
$('#activity-choices').append(option3);

$('#add-hotel').on('click', () => {
  var chosenHotel = $("#hotel-choices option:selected").val();
  $("#itinerary .hotel-list-group").append('<li>' + chosenHotel + '</li>');
  let coordinates;
  for (let hotel of hotels) {
    if (hotel.name === chosenHotel) {
      coordinates = hotel.place.location;
    }
  }
  globe('hotel', coordinates);
});
//----------------------------------------------------------------------------------------------------

$('#add-restaurant').on('click', () => {
  //this is the current selection of the dropdown
  var chosenRestaurant = $("#restaurant-choices option:selected").val();
  //adds the name to the itinerary in the correct group
  $("#itinerary .restaurant-list-group").append('<li>' + chosenRestaurant + '</li>');
  //gets coordinates off of the hotel object
  let coordinates;
  for (let restaurant of restaurants) {
    if (restaurant.name === chosenRestaurant) {
      coordinates = restaurant.place.location;
    }
  }
  //puts marker on map. calling drawMarker from map.js
  globe('restaurant', coordinates);
});

$('#add-activity').on('click', () => {
  var chosenActivity = $("#activity-choices option:selected").val();


  //adds name and remove button to list
  $("#itinerary .activity-list-group").append('<li>' + chosenActivity + '<button class="btn btn-xs btn-danger remove btn-circle">x</button></li>');

  //gets coordinate for google.maps
    let coordinates;
  for (let activity of activities) {
    if (activity.name === chosenActivity) {
      coordinates = activity.place.location;
    }
  }
  //puts marker on map. calling drawMarker from map.js
  globe('activity', coordinates);
});

//adds event listner to remove button
$("#itinerary").on('click', '.remove', function () {
  let chosenActivity = $(this).parent();
  // console.log(chosenActivity);
  // let coordinates;
  // for (let activity of activities) {
  //   if (activity.name === chosenActivity) {
  //     coordinates = activity.place.location;
  //   }
  // }
  // removeMarker('activity', coordinates);
  chosenActivity.remove();
});

//Cloning day button and adding it to day buttons pane
$(".day-buttons").on('click', '#day-add', function () {
  let prevDay = $(this).prev();
  let num = parseInt(prevDay.text());

  //might not need to be true
  let clone = prevDay.clone( true );
  clone.text(num + 1);
  clone.removeClass('current-day');

  prevDay.after(clone);

  //creating empty object to the daysArray
  daysArray[num+1] = initialItinerary;;
})

//selecting day and adding class to it
$(".day-buttons").on('click', '.day-btn', function () {

if ($(this).attr('id') !== 'day-add') {
    var day = parseInt($('.current-day').text());
    console.log(day)
    var itinerary = $('#itinerary');
    console.log('Itinerary',itinerary)
    pushToDaysArray(day, itinerary[0])
    console.log('daysArray after push:', daysArray)


    $(this).siblings().removeClass("current-day");
    $(this).addClass("current-day");
    // console.log($(this));
    var newDay = parseInt($('.current-day').text());
    $('#itinerary').replaceWith(daysArray[newDay])
  }


})
