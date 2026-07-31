// Module ID: 8388
// Function ID: 8389
// Dependencies: [19, 21, 4129, 4039, 4594, 2]

// Module 8388
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const forwardRefResult = require("noop").forwardRef(function VisualEffectViewThemed(arg0, ref) {
  let obj = require(4039) /* AccessibilityAnnouncer */;
  let str = "dark";
  if (obj.isThemeLight(tmp3)) {
    str = "light";
  }
  obj = { ref, blurTheme: str };
  const tmp = importDefault;
  tmp3 = importDefault(4129)();
  const merged = Object.assign(arg0);
  return jsx(importDefault(4594), { ref, blurTheme: str });
});
const result = require("useTheme").fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewThemed.tsx");

export default forwardRefResult;
