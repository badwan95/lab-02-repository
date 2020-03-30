$(document).ready(function() {
    // Constructor function for gallery items
    function Gallery(item) {
      this.image_url = item.image_url;
      this.title = item.title;
      this.description = item.description;
      this.keyword = item.keyword;
      this.horns = item.horns;
    }
    Gallery.prototype.render = function() {
        let $galleryCopy = $('#photo-template').clone();
        $('#photo-template section').remove();
        $galleryCopy.find('h2').text(this.title);
        $galleryCopy.find('img').attr('src',this.image_url);
        $galleryCopy.removeAttr('id');
        $galleryCopy.find('p').text(this.description);
        $('main').append($galleryCopy);
    }
    

    // TO GET THE INFO INSIDE JSON FILE
    const getJson = function(){
        $.ajax('./data/page-1.json', {method: 'get', dataType: 'JSON'}).then(data => {
            console.log(data);
            data.forEach(value => {
                let galleryPicture = new Gallery(value)
                console.log(galleryPicture);
                galleryPicture.render();
            })
        })
    }
    getJson();
});


// {
//     "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
//     "title": "UniWhal",
//     "description": "A unicorn and a narwhal nuzzling their horns",
//     "keyword": "narwhal",
//     "horns": 1
//   }