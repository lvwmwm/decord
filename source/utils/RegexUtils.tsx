// Module ID: 4177
// Function ID: 4178
// Name: set
// Dependencies: [2]

// Module 4177 (set)
const result = require("set").fileFinishedImporting("utils/RegexUtils.tsx");

export default {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
};
