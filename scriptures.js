const Scriptures = (function () {
  const REQUEST_GET = "GET";
  const URL_BASE = "https://scriptures.byu.edu/mapscrp/";
  const URL_BOOKS = `${URL_BASE}model/books.php`;
  const URL_VOLUMES = `${URL_BASE}model/volumes.php`;

  function init() {
    let request = new XMLHttpRequest();

    function handleAjaxError() {
      console.log("There was an AJAX problem.");
    }

    function handleAjaxResponse() {
      console.log("Request received.");
    }

    request.open(REQUEST_GET, URL_BOOKS, true);
    request.onload = handleAjaxResponse;
    request.onerror = handleAjaxError;
    request.send();
  }

  return {
    init,
  }; // if you don't return anything, it will by default return undefined
})();

// need to create a module to avoide poluting global name space

// put in function for encapsulation to hide from others
// local variables are encapsulated and anything returned can be seen/accessed
