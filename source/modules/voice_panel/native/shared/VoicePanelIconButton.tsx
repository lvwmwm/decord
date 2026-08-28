// Module ID: 16546
// Function ID: 16547
// Dependencies: [19, 21, 7743, 7952, 2]

// Module 16546
import setDefault from "set" /* 7743 */;
import IconButton from "IconButton" /* 7952 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
const memoResult = importAllResult.memo(importAllResult.forwardRef((overrideVariant, ref) => {
  let str = overrideVariant.overrideVariant;
  ({ style, layout } = overrideVariant);
  const merged = Object.assign(overrideVariant, Object.create(null));
  let obj = { ref, style, layout, children: null };
  obj = {};
  const merged1 = Object.assign(merged);
  obj.size = "sm";
  if (str == null) {
    str = "secondary-overlay";
  }
  obj.variant = str;
  obj.maxFontSizeMultiplier = 2;
  obj[3] = jsx(IconButton.IconButton, {});
  return jsx(setDefault, {});
}));
const result = require("set").fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelIconButton.tsx");

export default memoResult;
