var data,
    metadata = {},
    $meta_div = $("<div>", {class: 'meta'});

metadata.words = $('body span').map(function(i,el){
  return $(el).text().split(" ");
}).length

metadata.characters = $('body span').text().replace(/\s/g, '').length

for (data in metadata) {
  $meta_div.append(data + ": " + metadata[data] + "<br>")
}

$("body").append($meta_div);
