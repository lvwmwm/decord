// Module ID: 4290
// Function ID: 4291
// Name: set
// Dependencies: [2]

// Module 4290 (set)
const result = require("set").fileFinishedImporting("utils/RegexUtils.tsx");

export default {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
};
