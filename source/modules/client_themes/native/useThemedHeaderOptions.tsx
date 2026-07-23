// Module ID: 15434
// Function ID: 118670
// Name: headerBackground
// Dependencies: [31, 33, 4662, 8830, 1557, 477, 4110, 2]
// Exports: default

// Module 15434 (headerBackground)
import result from "result";
import { jsx } from "jsxProd";

let require = arg1;
function headerBackground(arg0) {
  return jsx(importDefault(4662), { absolute: true, tall: true, wide: true });
}
let closure_5 = { headerBackground: undefined, contentStyle: undefined };
const result = require("getThemeMixColor").fileFinishedImporting("modules/client_themes/native/useThemedHeaderOptions.tsx");

export default function useThemedHeaderOptions() {
  const tmp = top(8830)();
  const require = tmp;
  top = top(1557)().top;
  const items = [top, tmp];
  return React.useMemo(() => {
    if (tmp) {
      let obj = tmp(outer1_2[5]);
      if (obj.isIOS()) {
        let num3 = 0;
        if (top > 50) {
          num3 = 5;
        }
        let num5 = 44;
        if (obj3.isIpadOS()) {
          num5 = 46;
        }
        obj = { headerBackground: outer1_6 };
        obj = { marginTop: -top + num3 + (56 - num5) };
        obj.contentStyle = obj;
        return obj;
      } else {
        const obj1 = { headerBackground: outer1_6, contentStyle: outer1_5.contentStyle };
        return obj1;
      }
    } else {
      return outer1_5;
    }
  }, items);
};
