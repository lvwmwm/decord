// Module ID: 4118
// Function ID: 34094
// Name: set
// Dependencies: [2]

// Module 4118 (set)
const result = require("set").fileFinishedImporting("utils/RegexUtils.tsx");

export default {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
};
