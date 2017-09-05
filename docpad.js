module.exports = {

  outPath: "out",
  srcPath: "src",

  /* =================================
   * Template Data
   */
  templateData: {
    // Development URL
    site: {
      url: "http://newyork.internal.travelsoft.fr:9778",
      url_component: function(){
        return this.url+"documents/components";
      }
    },

    /* -----------------------------
     * Helpers
     */

    // Read File
    readFile: function(relativePath) {
      var fsUtil, path, result;
      fsUtil = require("fs");
      path = this.document.fullDirPath + "/" + relativePath;
      result = fsUtil.readFileSync(path);
      if (result instanceof Error) {
        throw result;
      } else {
        return result.toString();
      }
    }

  },

  /* =================================
   * Collections
   */
  collections: {
    sections: function() {
      return this.getCollection("html").findAllLive({
        isSection:true
      }, [ 
        {
          type: 1,
          order: 1,
          title: 1
        }
      ]);
    }
  } 

};