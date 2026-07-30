// Module ID: 15031
// Function ID: 15032
// Dependencies: [19, 21, 8355, 2]

// Module 15031
import { jsx } from "jsxProd";
import importAllResult from "noop";

const memoResult = require("noop").memo(function MessagesItemPlaceholder(arg0) {
  let height;
  let row;
  ({ row, height } = arg0);
  return jsx(importDefault(8355), { row, height });
});
const result = require("module_8355").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemPlaceholder.tsx");

export default memoResult;
