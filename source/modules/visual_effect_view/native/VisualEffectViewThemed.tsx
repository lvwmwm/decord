// Module ID: 8354
// Function ID: 66903
// Dependencies: [31, 33, 4101, 4011, 4568, 2]

// Module 8354
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const forwardRefResult = require("result").forwardRef(function VisualEffectViewThemed(arg0, ref) {
  let obj = require(4011) /* AccessibilityAnnouncer */;
  let str = "dark";
  if (obj.isThemeLight(tmp)) {
    str = "light";
  }
  obj = { ref, blurTheme: str };
  tmp = importDefault(4101)();
  const merged = Object.assign(arg0);
  return jsx(importDefault(4568), { ref, blurTheme: str });
});
const result = require("useTheme").fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewThemed.tsx");

export default forwardRefResult;
