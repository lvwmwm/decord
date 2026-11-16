// Module ID: 17213
// Function ID: 17214
// Name: SettingLayout
// Dependencies: [19, 12407, 21, 17214, 17228, 2]

// Module 17213 (SettingLayout)
import Fragment from "Fragment" /* 21 */;
import SettingRendererConstants from "SettingRendererConstants" /* 12407 */;
import SettingListRenderer from "SettingListRenderer" /* 17214 */;
import SettingSegmentedControlRendererDefault from "SettingSegmentedControlRenderer" /* 17228 */;
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
