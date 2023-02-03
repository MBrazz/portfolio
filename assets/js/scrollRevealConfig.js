const s = [
  {
    element: "nav",
    animation: { delay: 200, distance: "25px", origin: "top" },
  },

  {
    element: ".presentation",
    animation: {
      delay: 400,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".avatar",
    animation: {
      delay: 700,
      origin: window.innerWidth > 768 ? "right" : "bottom",
    },
  },
  {
    element: ".about",
    animation: { delay: 300, origin: "bottom" },
  },
  // {
  //   element: ".about",
  //   animation: {
  //     delay: 1e3,
  //     origin: window.innerWidth > 768 ? "left" : "bottom",
  //   },
  // },
  {
    element: ".image",
    animation: {
      delay: 300,
      origin: window.innerWidth > 768 ? "top" : "bottom",
    },
  },

  {
    element: ".info",
    animation: {
      delay: 650,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },

  {
    element: ".project h2",
    animation: { delay: 800, distance: "0px", origin: "left" },
  },
  {
    element: ".project-img",
    animation: {
      delay: 900,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".project-info",
    animation: {
      delay: 400,
      origin: window.innerWidth > 768 ? "right" : "bottom",
    },
  },

  {
    element: ".contact-info",
    animation: {
      delay: 400,
      origin: window.innerWidth > 768 ? "top" : "bottom",
    },
  },

  {
    element: ".contact-form",
    animation: {
      delay: 800,
      origin: window.innerWidth > 768 ? "bottom" : "bottom",
    },
  },

  // { element: "#wave-bottom", animation: { delay: 490, origin: "center" } },
  // {
  //   element: ".contact, #wave-bottom",
  //   animation: { delay: 0, origin: "center" },
  // },

  // { element: "footer", animation: { delay: 0, origin: "left" } },
]

var a, o
;;

;(o = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "30px",
  duration: 1e3,
  desktop: !0,
  mobile: !0,
}),
  (a = s).length &&
    (ScrollReveal({ reset: !1 }),
    a.forEach(({ element: t, animation: e }) => {
      ScrollReveal().reveal(t, Object.assign({}, o, e))
    })),

  //Reset scroll top
  (history.scrollRestoration = "manual")

$(window).on("beforeunload", function () {
  $(window).scrollTop(0)
})



