// Module ID: 4153
// Function ID: 34209
// Name: set
// Dependencies: [2]

// Module 4153 (set)
const result = require("set").fileFinishedImporting("utils/RegexUtils.tsx");

export default {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
};
