// Module ID: 15299
// Function ID: 116395
// Name: headerBackground
// Dependencies: [5, 57, 31, 27, 1352, 1348, 3765, 5599]
// Exports: default

// Module 15299 (headerBackground)
import asyncGeneratorStep from "asyncGeneratorStep";
import { jsx } from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function headerBackground(arg0) {
  return jsx(importDefault(dependencyMap[2]), {});
}
let closure_5 = { headerBackground: undefined, contentStyle: undefined };
const result = _isNativeReflectConstruct.fileFinishedImporting("modules/client_themes/native/useThemedHeaderOptions.tsx");

export default function useThemedHeaderOptions() {
  const tmp = importDefault(dependencyMap[3])();
  const arg1 = tmp;
  const top = importDefault(dependencyMap[4])().top;
  const importDefault = top;
  const items = [top, tmp];
  return React.useMemo(() => {
    if (tmp) {
      let obj = tmp(closure_2[5]);
      if (obj.isIOS()) {
        let num3 = 0;
        if (top > 50) {
          num3 = 5;
        }
        let num5 = 44;
        if (obj3.isIpadOS()) {
          num5 = 46;
        }
        obj = { headerBackground: closure_6 };
        obj = { marginTop: -top + num3 + (56 - num5) };
        obj.contentStyle = obj;
        return obj;
      } else {
        const obj1 = { headerBackground: closure_6, contentStyle: contentStyle.contentStyle };
        return obj1;
      }
    } else {
      return contentStyle;
    }
  }, items);
};
