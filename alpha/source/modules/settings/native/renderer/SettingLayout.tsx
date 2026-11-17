// Module ID: 17250
// Function ID: 17251
// Name: SettingLayout
// Dependencies: [19, 12613, 21, 17251, 17265, 2]

// Module 17250 (SettingLayout)
import Fragment from "Fragment" /* 21 */;
import SettingRendererConstants from "SettingRendererConstants" /* 12613 */;
import SettingListRenderer from "SettingListRenderer" /* 17251 */;
import SettingSegmentedControlRendererDefault from "SettingSegmentedControlRenderer" /* 17265 */;
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
