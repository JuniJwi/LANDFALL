/* ==================================================================== */
/* Import Utilities
======================================================================= */
import { charadex } from '../utilities.js';

/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  charadex.tools.loadIncludedFiles();
  charadex.tools.updateMeta();
  charadex.tools.loadPage('#charadex-body', 100);
});

// the tab id is sent after the #
var hash = window.location.hash; 
if (hash != "" && hash != null) {
    const bsTab = new bootstrap.Tab(hash)
    bsTab.show();
}