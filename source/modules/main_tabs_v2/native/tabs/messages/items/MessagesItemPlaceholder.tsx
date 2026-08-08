// Module ID: 15174
// Function ID: 15175
// Dependencies: [19, 21, 9075, 2]

// Module 15174
import { jsx } from "jsxProd";
import importAllResult from "noop";

const memoResult = require("noop").memo(function MessagesItemPlaceholder(arg0) {
  let height;
  let row;
  ({ row, height } = arg0);
  return jsx(importDefault(9075), { row, height });
});
const result = require("module_9075").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemPlaceholder.tsx");

export default memoResult;
