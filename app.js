const count = document.querySelector("#count");
const unreadNotification = document.querySelectorAll(".unread");
const redCircle = document.querySelectorAll("#red-circle");

let unreadNotificationLength = unreadNotification.length;

let index;

function getIndex(num) {
    index = num;
}

count.innerHTML = unreadNotificationLength;

document.addEventListener("click", (e) => {


    if (e.target.closest(".unread")) {

        if (unreadNotificationLength > 0) {

            unreadNotificationLength--;

            count.innerHTML = unreadNotificationLength;

            redCircle[index].remove();

            unreadNotification[index].style.background = "white";
        }

    }

})

const allReadBtn = document.querySelector("#all-read");

allReadBtn.addEventListener("click", () => {

    for (let index = 0; index < unreadNotification.length; index++) {
        unreadNotification[index].style.background = "white";
        redCircle[index].remove();
        count.innerHTML = 0;
    }

})
