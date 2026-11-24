// Module ID: 15983
// Function ID: 15984
// Name: SettingLayout
// Dependencies: [19, 11938, 21, 15984, 15998, 2]

// Module 15983 (SettingLayout)
import Fragment from "Fragment" /* 21 */;
import SettingRendererConstants from "SettingRendererConstants" /* 11938 */;
import SettingListRenderer from "SettingListRenderer" /* 15984 */;
import SettingSegmentedControlRendererDefault from "SettingSegmentedControlRenderer" /* 15998 */;
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
