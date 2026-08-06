// Module ID: 4273
// Function ID: 4274
// Name: set
// Dependencies: [2]

// Module 4273 (set)
const result = require("set").fileFinishedImporting("utils/RegexUtils.tsx");

export default {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
};
