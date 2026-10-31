// Module ID: 16575
// Function ID: 16576
// Name: SettingLayout
// Dependencies: [19, 11540, 21, 16576, 16590, 2]

// Module 16575 (SettingLayout)
import Fragment from "Fragment" /* 21 */;
import SettingRendererConstants from "SettingRendererConstants" /* 11540 */;
import SettingListRenderer from "SettingListRenderer" /* 16576 */;
import SettingSegmentedControlRendererDefault from "SettingSegmentedControlRenderer" /* 16590 */;
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
