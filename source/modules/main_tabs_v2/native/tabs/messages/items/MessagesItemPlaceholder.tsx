// Module ID: 15037
// Function ID: 15038
// Dependencies: [19, 21, 8667, 2]

// Module 15037
import { jsx } from "jsxProd";
import importAllResult from "noop";

const memoResult = require("noop").memo(function MessagesItemPlaceholder(arg0) {
  let height;
  let row;
  ({ row, height } = arg0);
  return jsx(importDefault(8667), { row, height });
});
const result = require("module_8667").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemPlaceholder.tsx");

export default memoResult;
