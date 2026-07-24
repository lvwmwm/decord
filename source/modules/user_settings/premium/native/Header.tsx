// Module ID: 12455
// Function ID: 96646
// Name: Header
// Dependencies: [31, 27, 33, 4130, 4066, 5085, 1212, 3976, 7532, 12456, 4126, 2]
// Exports: default

// Module 12455 (Header)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ container: { flexDirection: "column", alignItems: "center" }, headerText: { marginTop: 16, marginBottom: 24 } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/premium/native/Header.tsx");

export default function Header(style) {
  const tmp = callback2();
  let obj = { style: items };
  items = [tmp.container, style.style];
  obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header" };
  const tmp2 = importDefault(4066)();
  const tmp3 = closure_5;
  const tmp4 = View;
  const tmp5 = callback;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.lpNrPu);
  const tmp6 = importDefault(5085);
  if (obj3.isThemeDark(tmp2)) {
    let tmp7Result = tmp7(7532);
  } else {
    tmp7Result = tmp7(12456);
  }
  obj.source = tmp7Result;
  const items1 = [tmp5(tmp6, obj), ];
  obj = { style: tmp.headerText, variant: "text-md/medium", color: "mobile-text-heading-primary" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.children = intl2.string(require(1212) /* getSystemLocale */.t.SD5MJW);
  items1[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items1;
  return tmp3(tmp4, obj);
};
