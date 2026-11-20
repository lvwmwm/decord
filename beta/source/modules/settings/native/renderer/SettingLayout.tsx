// Module ID: 17215
// Function ID: 17216
// Name: SettingLayout
// Dependencies: [19, 12409, 21, 17216, 17230, 2]

// Module 17215 (SettingLayout)
import Fragment from "Fragment" /* 21 */;
import SettingRendererConstants from "SettingRendererConstants" /* 12409 */;
import SettingListRenderer from "SettingListRenderer" /* 17216 */;
import SettingSegmentedControlRendererDefault from "SettingSegmentedControlRenderer" /* 17230 */;
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
