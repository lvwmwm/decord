// Module ID: 13952
// Function ID: 13953
// Dependencies: [19, 10494, 21, 13953, 15005, 2]

// Module 13952
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
    return jsx(require(13953) /* SearchListSectionLabel */.SettingsList, { node: null });
  } else if (tmp.SEGMENTED_CONTROL === type) {
    obj = { node: null };
    obj[0] = node;
    return jsx(importDefault(15005), { node: null });
  }
});
const result = require("jsxProd").fileFinishedImporting("modules/settings/native/renderer/SettingLayout.tsx");

export default memoResult;
