const buttons = document.querySelectorAll(".hover_glow"),
  navigation = document.getElementsByTagName("nav"),
  lists_1 = document.querySelector(".lists_1"),
  lists_2 = document.querySelector(".lists_2"),
  menu_btn = document.querySelector(".menu_btn"),
  ham_bx_inn = document.querySelector(".ham_bx_inn"),
  menu_section = document.querySelector(".menu_section"),
  menu_inn = document.querySelector(".menu_inn");

buttons.forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const { x, y } = button.getBoundingClientRect();
    button.style.setProperty("--x", e.clientX - x);
    button.style.setProperty("--y", e.clientY - y);
  });
});

menu_btn.addEventListener("click", menu_Click);

ham_bx_inn.style.setProperty("--after_top", "-7px");
ham_bx_inn.style.setProperty("--after_width", "20px");

function menu_Click() {
  ham_bx_inn.classList.toggle("on");
  switch (ham_bx_inn.classList[1]) {
    case "on":
      set_on();
      break;
    case undefined:
      set_off();
      break;
  }
}

function set_on() {
  ham_bx_inn.style.setProperty("--transform_first", "rotate(225deg)");
  ham_bx_inn.style.setProperty(
    "--transform",
    "rotate(90deg)"
  ); /* initial 270 */
  ham_bx_inn.style.setProperty("--opacity_menu", "0");
  ham_bx_inn.style.setProperty("--after_width", "30px");
  ham_bx_inn.style.setProperty("--after_top", "0");
  menu_section.classList.add("menu_active");
  menu_inn.style.display = "block";
}

function set_off() {
  ham_bx_inn.style.setProperty("--transform_first", "rotate(0deg)");
  ham_bx_inn.style.setProperty("--transform", "rotate(0deg)");
  ham_bx_inn.style.setProperty("--opacity_menu", "1");
  ham_bx_inn.style.setProperty("--after_width", "20px");
  ham_bx_inn.style.setProperty("--after_top", "-7px");
  menu_section.classList.remove("menu_active");
  menu_inn.style.display = "none";
}

let screenX =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

window.onresize = () => {
  screenX = window.innerWidth;
};

let lastScrollTop = 0;

document.addEventListener("scroll", () => {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (screenX > 768) {
    if (st > lastScrollTop) {
      nav.classList.add("down");
      lists_1.classList.remove("hide");
      lists_2.classList.remove("show");
      menu_btn.classList.remove("show");
      menu_btn.parentElement.classList.remove("show");
    } else {
      nav.classList.remove("down");
      lists_1.classList.add("hide");
      lists_2.classList.add("show");
      menu_btn.parentElement.classList.add("show");
    }
  } else {
    if (st > lastScrollTop) {
      nav.classList.add("down");
    } else {
      nav.classList.remove("down");
    }
  }
  lastScrollTop = st <= 0 ? 0 : st;
});
