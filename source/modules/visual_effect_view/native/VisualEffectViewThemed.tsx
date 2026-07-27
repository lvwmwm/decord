// Module ID: 8316
// Function ID: 66793
// Dependencies: [31, 33, 4067, 3977, 4534, 2]

// Module 8316
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const forwardRefResult = require("result").forwardRef(function VisualEffectViewThemed(arg0, ref) {
  let obj = require(3977) /* AccessibilityAnnouncer */;
  let str = "dark";
  if (obj.isThemeLight(tmp)) {
    str = "light";
  }
  obj = { ref, blurTheme: str };
  tmp = importDefault(4067)();
  const merged = Object.assign(arg0);
  return jsx(importDefault(4534), { ref, blurTheme: str });
});
const result = require("useTheme").fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewThemed.tsx");

export default forwardRefResult;
