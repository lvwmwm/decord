// Module ID: 8714
// Function ID: 8715
// Dependencies: [19, 21, 4238, 4147, 4702, 2]

// Module 8714
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const forwardRefResult = require("noop").forwardRef(function VisualEffectViewThemed(arg0, ref) {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  let str = "dark";
  if (obj.isThemeLight(tmp3)) {
    str = "light";
  }
  obj = { ref, blurTheme: str };
  const tmp = importDefault;
  tmp3 = importDefault(4238)();
  const merged = Object.assign(arg0);
  return jsx(importDefault(4702), { ref, blurTheme: str });
});
const result = require("useTheme").fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewThemed.tsx");

export default forwardRefResult;
