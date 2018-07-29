function save(dbx, text) {
  console.log(text);

  var file = text;

  dbx.filesUpload({path: '/tostie.txt', contents: file, mode: 'overwrite'})
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.error(error);
    });
}
