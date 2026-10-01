// Module ID: 14247
// Function ID: 14248
// Name: SettingLayout
// Dependencies: [19, 11007, 21, 14248, 14261, 2]

// Module 14247 (SettingLayout)
import Fragment from "Fragment" /* 21 */;
import SettingRendererConstants from "SettingRendererConstants" /* 11007 */;
import SettingListRenderer from "SettingListRenderer" /* 14248 */;
import SettingSegmentedControlRendererDefault from "SettingSegmentedControlRenderer" /* 14261 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const NodeType = SettingRendererConstants.NodeType;
const jsx = Fragment.jsx;
const memoResult = react.memo(function SettingLayout(node) {
  node = node.node;
  const type = node.type;
  if (NodeType.LIST === type) {
    return jsx(SettingListRenderer.SettingsList, { node });
  } else if (tmp.SEGMENTED_CONTROL === type) {
    return jsx(SettingSegmentedControlRendererDefault, { node });
  }
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingLayout.tsx");

export default memoResult;
