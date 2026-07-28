// Module ID: 13657
// Function ID: 104773
// Dependencies: [31, 10100, 33, 13658, 14689, 2]

// Module 13657
import { NodeType } from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo(function SettingLayout(node) {
  node = node.node;
  const type = node.type;
  if (NodeType.LIST === type) {
    let obj = { node };
    return jsx(require(13658) /* SearchListSectionLabel */.SettingsList, { node });
  } else if (NodeType.SEGMENTED_CONTROL === type) {
    obj = { node };
    return jsx(importDefault(14689), { node });
  }
});
const result = require("jsxProd").fileFinishedImporting("modules/settings/native/renderer/SettingLayout.tsx");

export default memoResult;
