document.addEventListener('DOMContentLoaded', function () {
    const nextButton = document.querySelector('#next');
    const prevButton = document.querySelector('#prev');
    const item = document.querySelectorAll('.item');

   nextButton.onclick = function () {
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').appendChild(item[0]);
    };
      
    prevButton.onclick = function () {
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').prepend(lists[lists.length - 1]);
    };
});