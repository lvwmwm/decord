// Module ID: 13673
// Function ID: 13674
// Dependencies: [19, 10117, 21, 13674, 14708, 2]

// Module 13673
import { NodeType } from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(function SettingLayout(node) {
  node = node.node;
  const type = node.type;
  if (NodeType.LIST === type) {
    let obj = { node: null };
    obj[0] = node;
    return jsx(require(13674) /* SearchListSectionLabel */.SettingsList, { node: null });
  } else if (tmp.SEGMENTED_CONTROL === type) {
    obj = { node: null };
    obj[0] = node;
    return jsx(importDefault(14708), { node: null });
  }
});
const result = require("jsxProd").fileFinishedImporting("modules/settings/native/renderer/SettingLayout.tsx");

export default memoResult;
