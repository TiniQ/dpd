var swipe = document.getElementsByClassName('swipe__item');
        var i;
        for (i = 0; i < swipe.length; i++) {
            swipe[i].addEventListener('click', function() {
                this.classList.toggle('active');
                var swipe__info = thus.nextElementSibling;
                if (swipe__info.style.maxHeight) {
                    swipe__info.style.maxHeight == null;
                } else {
                    swipe__info.style.maxHeight = swipe__info.scrollHeight + 'rem';
                }
            });
        }