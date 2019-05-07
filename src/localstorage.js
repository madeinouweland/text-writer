function openDatabase() {

  let request = window.indexedDB.open('text-writer', 3);

  request.onupgradeneeded = (e) => {
    let db = e.target.result;
    console.log("created or upgraded database " + db.name + ", version: " + db.version);
    let store = db.createObjectStore("story", { keyPath: "id" });
  }

  return new Promise(function(resolve, reject) {
    request.onsuccess = (e) => resolve(request.result);
  });
}

async function saveText(text) {
  let db = await openDatabase();

  console.log(text, db);

  let transaction = db.transaction("story", "readwrite");
  let store = transaction.objectStore("story");
  var query = store.put({ id: 1, text: text});

  return new Promise(function(resolve, reject) {
    query.onsuccess = (e) => resolve(query.result);
  });
}

async function loadText(id) {
  let db = await openDatabase();

  var transaction = db.transaction("story", "readonly");
    var store = transaction.objectStore("story");
    let query = store.get(id);

    return new Promise(function(resolve, reject) {
      query.onsuccess = (e) => resolve(query.result.text);
    });
}
