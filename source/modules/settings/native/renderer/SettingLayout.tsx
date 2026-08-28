// Module ID: 14273
// Function ID: 14274
// Dependencies: [19, 11007, 21, 14274, 14287, 2]

// Module 14273
import SearchListSectionLabel from "SearchListSectionLabel" /* 14274 */;
import SettingSegmentedControlDefault from "SettingSegmentedControl" /* 14287 */;
import { NodeType } from "GUILD_SELECT_ALL_SERVERS_OPTION_ID" /* 11007 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo(function SettingLayout(node) {
  node = node.node;
  const type = node.type;
  if (NodeType.LIST === type) {
    let obj = { node: null };
    obj[0] = node;
    return jsx(SearchListSectionLabel.SettingsList, { node: null });
  } else if (tmp.SEGMENTED_CONTROL === type) {
    obj = { node: null };
    obj[0] = node;
    return jsx(SettingSegmentedControlDefault, { node: null });
  }
});
const result = require("set").fileFinishedImporting("modules/settings/native/renderer/SettingLayout.tsx");

export default memoResult;
