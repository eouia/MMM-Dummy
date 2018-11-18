Module.register("MMM-Dummy", {
  defaults: {
    width:"100vw",
    height:"100vh",
    innerHTML: "",
    className: null,
  },

  start: function(){},

  getDom: function() {
    var wrapper = document.createElement("div")
    wrapper.className = "DUMMY"
    wrapper.style.width = this.config.width
    wrapper.style.height = this.config.height
    wrapper.style.innerHTML = this.config.innerHTML
    wrapper.className = this.config.className
    return wrapper
  }
})
