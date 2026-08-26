// Module ID: 4431
// Function ID: 4432
// Name: set
// Dependencies: [2]

// Module 4431 (set)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("utils/RegexUtils.tsx");

export default {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
};
