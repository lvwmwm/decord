// Module ID: 16184
// Function ID: 16185
// Dependencies: [19, 21, 8050, 7792, 2]

// Module 16184
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
  obj[3] = jsx(require(7792) /* IconButton */.IconButton, {});
  return jsx(importDefault(8050), {});
}));
const result = require("module_8050").fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelIconButton.tsx");

export default memoResult;
