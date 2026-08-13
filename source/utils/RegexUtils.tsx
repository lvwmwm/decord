// Module ID: 4330
// Function ID: 4331
// Name: set
// Dependencies: [2]

// Module 4330 (set)
const result = require("set").fileFinishedImporting("utils/RegexUtils.tsx");

export default {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
};
