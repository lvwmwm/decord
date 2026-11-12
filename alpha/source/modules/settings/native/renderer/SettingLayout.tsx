// Module ID: 17090
// Function ID: 17091
// Name: SettingLayout
// Dependencies: [19, 12312, 21, 17091, 17105, 2]

// Module 17090 (SettingLayout)
import Fragment from "Fragment" /* 21 */;
import SettingRendererConstants from "SettingRendererConstants" /* 12312 */;
import SettingListRenderer from "SettingListRenderer" /* 17091 */;
import SettingSegmentedControlRendererDefault from "SettingSegmentedControlRenderer" /* 17105 */;
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
