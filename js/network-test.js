
const networkIcon = document.querySelector('.network-test');

function handleOffline() {
    networkIcon.innerHTML = "no connection 😧";
}

function handleOnline() {
    networkIcon.innerHTML = '<i id="network-icon" class="network-test__icon fa fa-wifi" aria-hidden="true"></i>';
}

function init() {
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);
}

init();



