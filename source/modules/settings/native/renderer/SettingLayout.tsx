// Module ID: 13959
// Function ID: 13960
// Dependencies: [19, 10422, 21, 13960, 15019, 2]

// Module 13959
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
    return jsx(require(13960) /* SearchListSectionLabel */.SettingsList, { node: null });
  } else if (tmp.SEGMENTED_CONTROL === type) {
    obj = { node: null };
    obj[0] = node;
    return jsx(importDefault(15019), { node: null });
  }
});
const result = require("jsxProd").fileFinishedImporting("modules/settings/native/renderer/SettingLayout.tsx");

export default memoResult;
