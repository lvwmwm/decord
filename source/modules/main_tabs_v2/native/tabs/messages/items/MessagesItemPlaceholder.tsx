// Module ID: 15071
// Function ID: 15072
// Dependencies: [19, 21, 8997, 2]

// Module 15071
import { jsx } from "jsxProd";
import importAllResult from "noop";

const memoResult = require("noop").memo(function MessagesItemPlaceholder(arg0) {
  let height;
  let row;
  ({ row, height } = arg0);
  return jsx(importDefault(8997), { row, height });
});
const result = require("module_8997").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemPlaceholder.tsx");

export default memoResult;
