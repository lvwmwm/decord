// Module ID: 15256
// Function ID: 15257
// Dependencies: [19, 21, 9138, 2]

// Module 15256
import { jsx } from "jsxProd";
import importAllResult from "noop";

const memoResult = require("noop").memo(function MessagesItemPlaceholder(arg0) {
  let height;
  let row;
  ({ row, height } = arg0);
  return jsx(importDefault(9138), { row, height });
});
const result = require("module_9138").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemPlaceholder.tsx");

export default memoResult;
