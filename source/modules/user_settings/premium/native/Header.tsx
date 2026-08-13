// Module ID: 12808
// Function ID: 12809
// Name: Header
// Dependencies: [19, 17, 21, 4342, 4278, 5308, 1236, 1363, 7795, 12809, 4338, 2]
// Exports: default

// Module 12808 (Header)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { flexDirection: "column", alignItems: "center" }, headerText: { marginTop: 16, marginBottom: 24 } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/premium/native/Header.tsx");

export default function Header(style) {
  const tmp = callback();
  let obj = { style: items, children: null };
  items = [tmp.container, style.style];
  obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", source: null };
  const tmp4 = importDefault(4278)();
  const tmp5 = closure_5;
  const tmp6 = View;
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t.lpNrPu);
  const tmp8 = importDefault(5308);
  if (obj3.isThemeDark(tmp4)) {
    let tmp2Result = tmp2(7795);
  } else {
    tmp2Result = tmp2(12809);
  }
  obj[3] = tmp2Result;
  const items1 = [closure_4(tmp8, obj), ];
  obj = { style: tmp.headerText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp9(1236).intl;
  obj[3] = intl2.string(require(1236) /* getSystemLocale */.t.SD5MJW);
  items1[1] = closure_4(require(4338) /* Text */.Text, obj);
  obj[1] = items1;
  return tmp5(tmp6, obj);
};
