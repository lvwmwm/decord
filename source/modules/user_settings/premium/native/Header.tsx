// Module ID: 12496
// Function ID: 12497
// Name: Header
// Dependencies: [19, 17, 21, 4189, 4125, 5141, 1236, 4035, 6678, 12497, 4185, 2]
// Exports: default

// Module 12496 (Header)
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
  const tmp4 = importDefault(4125)();
  const tmp5 = closure_5;
  const tmp6 = View;
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t.lpNrPu);
  const tmp8 = importDefault(5141);
  if (obj3.isThemeDark(tmp4)) {
    let tmp2Result = tmp2(6678);
  } else {
    tmp2Result = tmp2(12497);
  }
  obj[3] = tmp2Result;
  const items1 = [closure_4(tmp8, obj), ];
  obj = { style: tmp.headerText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp9(1236).intl;
  obj[3] = intl2.string(require(1236) /* getSystemLocale */.t.SD5MJW);
  items1[1] = closure_4(require(4185) /* Text */.Text, obj);
  obj[1] = items1;
  return tmp5(tmp6, obj);
};
