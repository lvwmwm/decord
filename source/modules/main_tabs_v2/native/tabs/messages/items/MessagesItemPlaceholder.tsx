// Module ID: 15088
// Function ID: 15089
// Dependencies: [19, 21, 8998, 2]

// Module 15088
import { jsx } from "jsxProd";
import importAllResult from "noop";

const memoResult = require("noop").memo(function MessagesItemPlaceholder(arg0) {
  let height;
  let row;
  ({ row, height } = arg0);
  return jsx(importDefault(8998), { row, height });
});
const result = require("module_8998").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemPlaceholder.tsx");

export default memoResult;
