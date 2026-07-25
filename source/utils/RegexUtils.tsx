// Module ID: 4119
// Function ID: 34106
// Name: set
// Dependencies: [2]

// Module 4119 (set)
const result = require("set").fileFinishedImporting("utils/RegexUtils.tsx");

export default {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
};
