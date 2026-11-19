// Module ID: 15898
// Function ID: 15899
// Name: SettingLayout
// Dependencies: [19, 11876, 21, 15899, 15913, 2]

// Module 15898 (SettingLayout)
import Fragment from "Fragment" /* 21 */;
import SettingRendererConstants from "SettingRendererConstants" /* 11876 */;
import SettingListRenderer from "SettingListRenderer" /* 15899 */;
import SettingSegmentedControlRendererDefault from "SettingSegmentedControlRenderer" /* 15913 */;
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
