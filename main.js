//Get open modal element
var modalBtn = document.getElementById('modalBtn');
//Get modal element
var modal = document.getElementById('eventModal');
//Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
//Get submission button
var submitBtn = document.getElementsByClassName('saveBtn')[0];

//Function to open modal
modalBtn.onclick = function () {
    modal.style.display = 'block';
}

//Function to close modal
closeBtn.onclick = function () {
    modal.style.display = 'none';
}

//Function to close modal by submit
submitBtn.onclick = function () {
    modal.style.display = 'none';
}