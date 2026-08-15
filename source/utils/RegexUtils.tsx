// Module ID: 4362
// Function ID: 4363
// Name: set
// Dependencies: [2]

// Module 4362 (set)
const result = require("set").fileFinishedImporting("utils/RegexUtils.tsx");

export default {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
};
