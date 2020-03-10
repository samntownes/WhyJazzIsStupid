const ionianButton = document.getElementById("ionianBtn");
const gAltButton = document.getElementById("gbAltBtn");
const fourVsElevenButton = document.getElementById("4v11Btn");
const superLocrianButton = document.getElementById("superLocrianBtn");

ionianButton.addEventListener('click', navToIonian);
gAltButton.addEventListener('click', navToGAlt);
fourVsElevenButton.addEventListener('click', navToFourVsEleven);
superLocrianButton.addEventListener('click', navToSuperLocrian);

function navToIonian() {
    window.location.assign("ionian.html");
}

function navToGAlt() {
    window.location.assign("gbAlt.html");
}

function navToFourVsEleven() {
    window.location.assign("fourVsEleven.html");
}

function navToSuperLocrian() {
    window.location.assign("superLocrian.html");
}