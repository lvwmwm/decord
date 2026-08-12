// Module ID: 8819
// Function ID: 8820
// Dependencies: [19, 21, 4280, 1363, 4744, 2]

// Module 8819
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const forwardRefResult = require("noop").forwardRef(function VisualEffectViewThemed(arg0, ref) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  let str = "dark";
  if (obj.isThemeLight(tmp3)) {
    str = "light";
  }
  obj = { ref, blurTheme: str };
  const tmp = importDefault;
  tmp3 = importDefault(4280)();
  const merged = Object.assign(arg0);
  return jsx(importDefault(4744), { ref, blurTheme: str });
});
const result = require("useTheme").fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewThemed.tsx");

export default forwardRefResult;
