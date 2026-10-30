// Module ID: 16533
// Function ID: 16534
// Name: SettingLayout
// Dependencies: [19, 11506, 21, 16534, 16548, 2]

// Module 16533 (SettingLayout)
import Fragment from "Fragment" /* 21 */;
import SettingRendererConstants from "SettingRendererConstants" /* 11506 */;
import SettingListRenderer from "SettingListRenderer" /* 16534 */;
import SettingSegmentedControlRendererDefault from "SettingSegmentedControlRenderer" /* 16548 */;
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
