// Module ID: 8883
// Function ID: 8884
// Dependencies: [19, 21, 4383, 1363, 4886, 2]

// Module 8883
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import useThemeDefault from "useTheme" /* 4383 */;
import isBlurDisabledDefault from "isBlurDisabled" /* 4886 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const forwardRefResult = importAllResult.forwardRef(function VisualEffectViewThemed(arg0, ref) {
  let obj = AccessibilityAnnouncer;
  let str = "dark";
  if (obj.isThemeLight(tmp3)) {
    str = "light";
  }
  obj = { ref, blurTheme: str };
  const tmp = importDefault;
  tmp3 = useThemeDefault();
  const merged = Object.assign(arg0);
  return jsx(isBlurDisabledDefault, { ref, blurTheme: str });
});
const result = require("set").fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewThemed.tsx");

export default forwardRefResult;
