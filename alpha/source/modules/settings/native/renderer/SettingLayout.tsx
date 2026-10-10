// Module ID: 14942
// Function ID: 14943
// Name: SettingLayout
// Dependencies: [19, 10664, 21, 558, 576, 14943, 14957, 2]

// Module 14942 (SettingLayout)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import SettingRendererConstants from "SettingRendererConstants" /* 10664 */;
import SettingSegmentedControlRendererDefault from "SettingSegmentedControlRenderer" /* 14957 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const SettingListRenderer = tmp(14943);
const NodeType = SettingRendererConstants.NodeType;
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SettingLayout(node) {
  const obj = react2;
  const cResult = obj.c(4);
  node = node.node;
  const type = node.type;
  if (NodeType.LIST === type) {
    let tmp9;
    if (cResult[0] !== node) {
      const tmp11 = jsx(SettingListRenderer.SettingsList, { node });
      cResult[0] = node;
      cResult[1] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[1];
    }
    return tmp9;
  } else if (tmp4.SEGMENTED_CONTROL === type) {
    let tmp5;
    if (cResult[2] !== node) {
      const tmp8 = jsx(SettingSegmentedControlRendererDefault, { node });
      cResult[2] = node;
      cResult[3] = tmp8;
      tmp5 = tmp8;
    } else {
      tmp5 = cResult[3];
    }
    return tmp5;
  }
}) : (function SettingLayout(node) {
  node = node.node;
  const type = node.type;
  if (NodeType.LIST === type) {
    return jsx(SettingListRenderer.SettingsList, { node });
  } else if (tmp.SEGMENTED_CONTROL === type) {
    return jsx(SettingSegmentedControlRendererDefault, { node });
  }
}));
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingLayout.tsx");

export default memoResult;
