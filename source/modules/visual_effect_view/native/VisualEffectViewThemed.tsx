// Module ID: 8556
// Function ID: 68138
// Dependencies: [31, 33, 4066, 3976, 4533, 2]

// Module 8556
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const forwardRefResult = require("result").forwardRef(function VisualEffectViewThemed(arg0, ref) {
  let obj = require(3976) /* AccessibilityAnnouncer */;
  let str = "dark";
  if (obj.isThemeLight(tmp)) {
    str = "light";
  }
  obj = { ref, blurTheme: str };
  tmp = importDefault(4066)();
  const merged = Object.assign(arg0);
  return jsx(importDefault(4533), { ref, blurTheme: str });
});
const result = require("useTheme").fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewThemed.tsx");

export default forwardRefResult;
