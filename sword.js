// Laser sword Blue
const laser_b = document.getElementById("laser_b");
const btn_b = document.getElementById("btn_b");

btn_b.addEventListener("click", () => {
    laser_b.classList.toggle("laser_on");
});

// Laser sword red
const laser_r = document.getElementById("laser_r");
const btn_r = document.getElementById("btn_r");

btn_r.addEventListener("click", () => {
    laser_r.classList.toggle("laser_on");
});

// Laser sword purple
const laser_p = document.getElementById("laser_p");
const btn_p = document.getElementById("btn_p");

btn_p.addEventListener("click", () => {
    laser_p.classList.toggle("laser_on");
});

