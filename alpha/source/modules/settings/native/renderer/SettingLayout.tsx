// Module ID: 16731
// Function ID: 16732
// Name: SettingLayout
// Dependencies: [19, 11678, 21, 16732, 16746, 2]

// Module 16731 (SettingLayout)
import Fragment from "Fragment" /* 21 */;
import SettingRendererConstants from "SettingRendererConstants" /* 11678 */;
import SettingListRenderer from "SettingListRenderer" /* 16732 */;
import SettingSegmentedControlRendererDefault from "SettingSegmentedControlRenderer" /* 16746 */;
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
