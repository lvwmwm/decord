// Module ID: 16000
// Function ID: 16001
// Dependencies: [19, 21, 7932, 7672, 2]

// Module 16000
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
  obj[3] = jsx(require(7672) /* IconButton */.IconButton, {});
  return jsx(importDefault(7932), {});
}));
const result = require("module_7932").fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelIconButton.tsx");

export default memoResult;
