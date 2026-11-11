// Module ID: 17095
// Function ID: 17096
// Name: SettingLayout
// Dependencies: [19, 12318, 21, 17096, 17110, 2]

// Module 17095 (SettingLayout)
import Fragment from "Fragment" /* 21 */;
import SettingRendererConstants from "SettingRendererConstants" /* 12318 */;
import SettingListRenderer from "SettingListRenderer" /* 17096 */;
import SettingSegmentedControlRendererDefault from "SettingSegmentedControlRenderer" /* 17110 */;
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
