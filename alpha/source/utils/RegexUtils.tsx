// Module ID: 4816
// Function ID: 4817
// Name: RegexUtils
// Dependencies: [2]

// Module 4816 (RegexUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/RegexUtils.tsx");

export default {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
};
