/* Written by Ogundele Olalekan
Task 13 for Hyperion Web Dev Bootcamp
written on 15-03-2020 */

function myLoad() {
    let htmlSelect = document.getElementById("musicInfo");

    if (sessionStorage.getItem("hasCodeRunBefore") === null) {

        sessionStorage.setItem("tracklist", JSON.stringify(track));
        sessionStorage.setItem("hasCodeRunBefore", true);
    } else {

        track = JSON.parse(sessionStorage.getItem("tracklist"));
        let i = 0;
        track.forEach(function(p) {
            let optItem = document.createElement("option");
            optItem.innerHTML = p.artistname;
            optItem.value = i;
            i = i + 1;
            htmlSelect.appendChild(optItem);
        });
        if (i > 0) {
            htmlSelect.style.visibility = "visible";
        }
    }
}

var track = [];


function ArtistsInfo(artistname, musictitle, album, genre, yearproduced, producername)

{
    this.artistname = artistname;
    this.musictitle = musictitle;
    this.album = album;
    this.genre = genre;
    this.yearproduced = yearproduced;
    this.producername = producername;

}
// Funtion to add track infro to session storage

function addInfo() {
    let htmlSelect = document.getElementById("musicInfo");
    let opt = document.createElement("option");
    //track = JSON.parse(sessionStorage.getItem("tracklist"));
    let tracklist = new ArtistsInfo(
        document.getElementById("artistNM").value,
        document.getElementById("musicTitle").value,
        document.getElementById("albumName").value,
        document.getElementById("musicGenre").value,
        document.getElementById("yearProduced").value,
        document.getElementById("prodName").value,
    );

    track.push(tracklist);
    opt.innerHTML = tracklist.artistname;
    htmlSelect.appendChild(opt);
    sessionStorage.setItem("tracklist", JSON.stringify(track));
}

// funtion to delete a previously created track from storage

function deleteItem() {

    track = JSON.parse(sessionStorage.getItem("tracklist"));
    let name = document.getElementById("musicInfo");
    let meIndex = name.options[name.selectedIndex].value;
    track.splice(meIndex, 1);
    sessionStorage.setItem("tracklist", JSON.stringify(track));
    location.reload();


}