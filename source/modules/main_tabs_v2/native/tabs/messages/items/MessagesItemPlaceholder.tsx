// Module ID: 15185
// Function ID: 15186
// Dependencies: [19, 21, 9081, 2]

// Module 15185
import { jsx } from "jsxProd";
import importAllResult from "noop";

const memoResult = require("noop").memo(function MessagesItemPlaceholder(arg0) {
  let height;
  let row;
  ({ row, height } = arg0);
  return jsx(importDefault(9081), { row, height });
});
const result = require("module_9081").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemPlaceholder.tsx");

export default memoResult;
