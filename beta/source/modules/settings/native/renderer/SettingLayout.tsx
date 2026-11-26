// Module ID: 15997
// Function ID: 15998
// Name: SettingLayout
// Dependencies: [19, 11943, 21, 15998, 16012, 2]

// Module 15997 (SettingLayout)
import Fragment from "Fragment" /* 21 */;
import SettingRendererConstants from "SettingRendererConstants" /* 11943 */;
import SettingListRenderer from "SettingListRenderer" /* 15998 */;
import SettingSegmentedControlRendererDefault from "SettingSegmentedControlRenderer" /* 16012 */;
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
