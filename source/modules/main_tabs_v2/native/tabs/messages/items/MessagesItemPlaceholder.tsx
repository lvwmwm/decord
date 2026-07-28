// Module ID: 15011
// Function ID: 114277
// Dependencies: [31, 33, 8334, 2]

// Module 15011
import { jsx } from "jsxProd";
import importAllResult from "result";

const memoResult = require("result").memo(function MessagesItemPlaceholder(arg0) {
  let height;
  let row;
  ({ row, height } = arg0);
  return jsx(importDefault(8334), { row, height });
});
const result = require("placeholderRowWidth").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemPlaceholder.tsx");

export default memoResult;
