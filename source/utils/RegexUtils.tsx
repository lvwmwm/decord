// Module ID: 4243
// Function ID: 4244
// Name: set
// Dependencies: [2]

// Module 4243 (set)
const result = require("set").fileFinishedImporting("utils/RegexUtils.tsx");

export default {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
};
