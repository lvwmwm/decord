// Module ID: 4181
// Function ID: 4182
// Name: set
// Dependencies: [2]

// Module 4181 (set)
const result = require("set").fileFinishedImporting("utils/RegexUtils.tsx");

export default {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
};
