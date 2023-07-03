AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" }
    },
    init: function() {
        this.handleClickEvents();
      },

    handleClickEvents: function() {
        window.addEventListener("keydown", (e) => {
            if (
                e.key === "ArrowUp" ){
                    
              }
        })
    }
})