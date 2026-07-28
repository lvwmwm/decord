// Module ID: 12480
// Function ID: 96672
// Name: Header
// Dependencies: [31, 27, 33, 4165, 4101, 5119, 1212, 4011, 6660, 12481, 4161, 2]
// Exports: default

// Module 12480 (Header)
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
  const tmp2 = importDefault(4101)();
  const tmp3 = closure_5;
  const tmp4 = View;
  const tmp5 = callback;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.lpNrPu);
  const tmp6 = importDefault(5119);
  if (obj3.isThemeDark(tmp2)) {
    let tmp7Result = tmp7(6660);
  } else {
    tmp7Result = tmp7(12481);
  }
  obj.source = tmp7Result;
  const items1 = [tmp5(tmp6, obj), ];
  obj = { style: tmp.headerText, variant: "text-md/medium", color: "mobile-text-heading-primary" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.children = intl2.string(require(1212) /* getSystemLocale */.t.SD5MJW);
  items1[1] = callback(require(4161) /* Text */.Text, obj);
  obj.children = items1;
  return tmp3(tmp4, obj);
};
