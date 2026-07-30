// Module ID: 15855
// Function ID: 15856
// Dependencies: [19, 21, 7676, 6679, 2]

// Module 15855
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo(importAllResult.forwardRef((overrideVariant, ref) => {
  let layout;
  let style;
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
  obj[3] = jsx(require(6679) /* IconButton */.IconButton, {});
  return jsx(importDefault(7676), {});
}));
const result = require("module_7676").fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelIconButton.tsx");

export default memoResult;
