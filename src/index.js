function getDropbox() {
  var token = window.localStorage.getItem("token");
    if (token) {
      return dbx = new Dropbox.Dropbox({ accessToken: token });
    } else {
      window.location.href='requestaccess.html';
    };
}
