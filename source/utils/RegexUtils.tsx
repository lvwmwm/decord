// Module ID: 4432
// Function ID: 4433
// Name: set
// Dependencies: [2]

// Module 4432 (set)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("utils/RegexUtils.tsx");

export default {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
};
