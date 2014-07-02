$(document).ready(function(){

  $('.top-navigation').singlePageNav({
      offset: $('.top-navigation').outerHeight(),
      filter: ':not(.external)',
      updateHash: true,
      beforeStart: function() {
      },
      onComplete: function() {
      }
  });

  // Initialize jribbble

  /**

  <div class="dribbble-portfolio--item col-4 col-lg-4">
      <a href="#" target="_blank">
          <img src="images/work_1.jpg" class="img-thumbnail" alt="Work no.1">
      </a>

      <div class="details">
        <h2><a href="#" target="_blank" class="inverted">Title</a></h2>
        <p><em>by</em> Player</p>
        <p class="shot-meta">
          <i class="fa fa-eye"></i> 213 
          <i class="fa fa-comments"></i> 122 
          <i class="fa fa-heart"></i> 1999
        </p>
      </div>
  </div>

  **/



  var callback = function (listDetails) {
    var html = '';
    var image_url = '';
    $.each(listDetails.shots, function (i, shot) {
        if(shot.image_400_url){
          image_url = shot.image_400_url;
        }else {
          image_url = shot.image_url;
        }
        html += '<div class="dribbble-portfolio--item col-4 col-lg-4 col-md-6">';
        html += '<a href="' + shot.url + '" target="_blank">';
        html += '<img src="' + image_url + '"';
        html += 'alt="' + shot.title + '" class="img-thumbnail">';
        html += '</a>';
        html += '<div class="details">';
        html += '<h2><a href="' + shot.url + '" target="_blank" class="inverted">' + shot.title + '</a></h2>';
        html += '<p><em>by</em> '+ shot.player.name +'</p>';
        html += '<p class="shot-meta">';
        html += '<i class="fa fa-eye"></i> '+ shot.views_count +' ';
        html += '<i class="fa fa-comments"></i> '+ shot.comments_count +' ';
        html += '<i class="fa fa-heart"></i> '+ shot.likes_count +' ';
        html += '</p></div></div>';
    });

     $('.dribbble-portfolio').html(html);
  };

  //$.jribbble.getShotsByList('popular', callback, {page: 1, per_page: 12});

  // Or fetch from user
  // Replace 'ryanhopkins' username with yours
  $.jribbble.getShotsByPlayerId('ryanhopkins', callback, {page: 1, per_page: 8});

});
