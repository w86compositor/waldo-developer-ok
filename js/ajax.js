function loadBooks() {
    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         document.getElementById("categories").innerHTML =
    //             this.response;
    //     }
    // };
    // xhttp.open("GET", "partials/books-categories.html", true);
    // xhttp.send();

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'images/books/art-books.jpg', true);
    xhr.responseType = 'blob';

    xhr.onload = function(e) {
        if (this.readyState == 4 && this.status == 200) {
            var blob = new Blob([this.response], {type: 'image/png'});
        }
    };

    xhr.send();
}