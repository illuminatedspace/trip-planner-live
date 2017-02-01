  //options for hotels
  //$('#hotel-choices').append("<option>hotels</option>")
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

$(".day-buttons").on('click', '#day-add', function () {
  let prevDay = $(this).prev();
  let num = parseInt(prevDay.text());

  //might not need to be true
  let clone = prevDay.clone( true );
  clone.text(num + 1);
  clone.removeClass('current-day');

  prevDay.after(clone);
})

$(".day-buttons").on('click', '.day-btn', function () {
  if ($(this).attr('id') !== 'day-add') {
    $(this).siblings().removeClass("current-day");
    $(this).addClass("current-day");
    // console.log($(this));
  }
})
