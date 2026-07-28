// Module ID: 15826
// Function ID: 121920
// Dependencies: [31, 33, 7656, 6661, 2]

// Module 15826
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo(importAllResult.forwardRef((overrideVariant, ref) => {
  let layout;
  let style;
  overrideVariant = overrideVariant.overrideVariant;
  let obj = { style: 0, overrideVariant: 0, layout: 0 };
  ({ style, layout } = overrideVariant);
  Object.setPrototypeOf(null);
  const merged = Object.assign(overrideVariant, obj);
  obj = { ref, style, layout };
  obj = {};
  const merged1 = Object.assign(merged);
  obj["size"] = "sm";
  let str = "secondary-overlay";
  if (null != overrideVariant) {
    str = overrideVariant;
  }
  obj["variant"] = str;
  obj["maxFontSizeMultiplier"] = 2;
  obj.children = jsx(require(6661) /* IconButton */.IconButton, {});
  return jsx(importDefault(7656), {});
}));
const result = require("module_7656").fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelIconButton.tsx");

export default memoResult;
