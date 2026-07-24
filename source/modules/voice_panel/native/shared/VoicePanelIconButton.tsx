// Module ID: 15764
// Function ID: 121548
// Dependencies: [31, 33, 7678, 7533, 2]

// Module 15764
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
  obj.children = jsx(require(7533) /* IconButton */.IconButton, {});
  return jsx(importDefault(7678), {});
}));
const result = require("module_7678").fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelIconButton.tsx");

export default memoResult;
