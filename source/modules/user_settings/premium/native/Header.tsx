// Module ID: 13020
// Function ID: 13021
// Name: Header
// Dependencies: [19, 17, 21, 4444, 4379, 5440, 1236, 1363, 7962, 13021, 4440, 2]
// Exports: default

// Module 13020 (Header)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useThemeDefault from "useTheme" /* 4379 */;
import Text from "Text" /* 4440 */;
import preloadDefault from "preload" /* 5440 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { flexDirection: "column", alignItems: "center" }, headerText: { marginTop: 16, marginBottom: 24 } });
const result = require("set").fileFinishedImporting("modules/user_settings/premium/native/Header.tsx");

export default function Header(style) {
  const tmp = callback();
  let obj = { style: items, children: null };
  items = [tmp.container, style.style];
  obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", source: null };
  const tmp4 = useThemeDefault();
  const tmp5 = closure_5;
  const tmp6 = View;
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.lpNrPu);
  const tmp8 = preloadDefault;
  if (obj3.isThemeDark(tmp4)) {
    let tmp2Result = tmp2(7962);
  } else {
    tmp2Result = tmp2(13021);
  }
  obj[3] = tmp2Result;
  const items1 = [closure_4(tmp8, obj), ];
  obj = { style: tmp.headerText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp9(1236).intl;
  obj[3] = intl2.string(getSystemLocale.t.SD5MJW);
  items1[1] = closure_4(Text.Text, obj);
  obj[1] = items1;
  return tmp5(tmp6, obj);
};
