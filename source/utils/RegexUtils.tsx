// Module ID: 4332
// Function ID: 4333
// Name: set
// Dependencies: [2]

// Module 4332 (set)
const result = require("set").fileFinishedImporting("utils/RegexUtils.tsx");

export default {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
};
