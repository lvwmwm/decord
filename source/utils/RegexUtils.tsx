// Module ID: 4291
// Function ID: 4292
// Name: set
// Dependencies: [2]

// Module 4291 (set)
const result = require("set").fileFinishedImporting("utils/RegexUtils.tsx");

export default {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
};
