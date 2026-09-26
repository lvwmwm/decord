// Module ID: 14992
// Function ID: 14993
// Name: SettingLayout
// Dependencies: [19, 11755, 21, 14993, 15006, 2]

// Module 14992 (SettingLayout)
import SettingListRenderer from "SettingListRenderer" /* 14993 */;
import SettingSegmentedControlRendererDefault from "SettingSegmentedControlRenderer" /* 15006 */;
import noop from "module_19" /* 19 */;

require = fn;
const NodeType = fn(11755).NodeType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingLayout.tsx");

export default noop.memo(function SettingLayout(node) {
  node = node.node;
  const type = node.type;
  if (NodeType.LIST === type) {
    const obj2 = { node };
    return jsx(SettingListRenderer.SettingsList, { node });
  } else if (tmp.SEGMENTED_CONTROL === type) {
    const obj = { node };
    return jsx(SettingSegmentedControlRendererDefault, { node });
  }
});
