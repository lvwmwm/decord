// Module ID: 16939
// Function ID: 16940
// Name: SettingLayout
// Dependencies: [19, 11718, 21, 16940, 16954, 2]

// Module 16939 (SettingLayout)
import Fragment from "Fragment" /* 21 */;
import SettingRendererConstants from "SettingRendererConstants" /* 11718 */;
import SettingListRenderer from "SettingListRenderer" /* 16940 */;
import SettingSegmentedControlRendererDefault from "SettingSegmentedControlRenderer" /* 16954 */;
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
