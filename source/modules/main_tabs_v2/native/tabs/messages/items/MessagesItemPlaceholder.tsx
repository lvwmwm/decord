// Module ID: 15242
// Function ID: 15243
// Dependencies: [19, 21, 9120, 2]

// Module 15242
import { jsx } from "jsxProd";
import importAllResult from "noop";

const memoResult = require("noop").memo(function MessagesItemPlaceholder(arg0) {
  let height;
  let row;
  ({ row, height } = arg0);
  return jsx(importDefault(9120), { row, height });
});
const result = require("module_9120").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemPlaceholder.tsx");

export default memoResult;
