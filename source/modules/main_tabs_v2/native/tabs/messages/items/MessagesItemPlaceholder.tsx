// Module ID: 14909
// Function ID: 113651
// Dependencies: [31, 33, 8491, 2]

// Module 14909
import { jsx } from "jsxProd";
import importAllResult from "result";

const memoResult = require("result").memo(function MessagesItemPlaceholder(arg0) {
  let height;
  let row;
  ({ row, height } = arg0);
  return jsx(importDefault(8491), { row, height });
});
const result = require("placeholderRowWidth").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemPlaceholder.tsx");

export default memoResult;
