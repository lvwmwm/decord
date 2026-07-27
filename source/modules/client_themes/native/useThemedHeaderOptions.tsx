// Module ID: 15504
// Function ID: 119169
// Name: headerBackground
// Dependencies: [31, 33, 4663, 8757, 1557, 477, 4111, 2]
// Exports: default

// Module 15504 (headerBackground)
import result from "result";
import { jsx } from "jsxProd";

let require = arg1;
function headerBackground(arg0) {
  return jsx(importDefault(4663), { absolute: true, tall: true, wide: true });
}
let closure_5 = { headerBackground: undefined, contentStyle: undefined };
const result = require("getThemeMixColor").fileFinishedImporting("modules/client_themes/native/useThemedHeaderOptions.tsx");

export default function useThemedHeaderOptions() {
  const tmp = top(8757)();
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
