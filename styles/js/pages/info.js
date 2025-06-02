document.addEventListener("DOMContentLoaded", async () => {
    
  /* Prompts
  ===================================================================== */
  // the tab id is sent after the #
    var hash = window.location.hash; 
    if (hash != "" && hash != null) {
        const bsTab = new bootstrap.Tab(hash)
        bsTab.show();
    }
});