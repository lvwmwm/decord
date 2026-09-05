// Module ID: 4547
// Function ID: 4548
// Name: set
// Dependencies: [2]

// Module 4547 (set)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("utils/RegexUtils.tsx");

export default {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
};
