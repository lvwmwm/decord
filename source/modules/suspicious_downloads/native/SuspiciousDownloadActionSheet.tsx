// Module ID: 12879
// Function ID: 12880
// Name: SuspiciousDownloadActionSheet
// Dependencies: [19, 21, 4481, 709, 1627, 7090, 4934, 5647, 4477, 1233, 4936, 4448, 4184, 2]
// Exports: default

// Module 12879 (SuspiciousDownloadActionSheet)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

const require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { container: null, title: null, body: null };
createCacheKey = { padding: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
createCacheKey[2] = { textAlign: "center" };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/suspicious_downloads/native/SuspiciousDownloadActionSheet.tsx");

export default function SuspiciousDownloadActionSheet(href) {
  href = href.href;
  const tmp = callback3();
  let obj = { startExpanded: true, children: null };
  obj = { spacing: 16, justify: "center", align: "center", style: items, children: null };
  items = [tmp.container, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj = { spacing: 8, justify: "center", align: "center", children: null };
  const items1 = [callback(href(5647).TrafficConeSpotIllustration, {}), , ];
  obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = href(1233).intl;
  obj1[4] = intl.string(href(1233).t.XtDo9Z);
  items1[1] = callback(href(4477).Text, obj1);
  const obj2 = { style: tmp.body, variant: "text-md/medium", children: null };
  const intl2 = href(1233).intl;
  obj2[2] = intl2.string(href(1233).t.L9yFko);
  items1[2] = callback(href(4477).Text, obj2);
  obj[3] = items1;
  const items2 = [callback2(href(4934).Stack, obj), ];
  const obj3 = { spacing: 8, children: null };
  const obj4 = { text: null, onPress: null };
  const intl3 = href(1233).intl;
  obj4[0] = intl3.string(href(1233).t.j7Vi2i);
  obj4[1] = function onPress() {
    return callback(table[11]).hideActionSheet();
  };
  const items3 = [callback(href(4936).Button, obj4), ];
  const obj5 = { text: null, onPress: null, variant: "secondary" };
  const intl4 = href(1233).intl;
  obj5[0] = intl4.string(href(1233).t["/bHu89"]);
  obj5[1] = function onPress() {
    closure_1_1(closure_1_2[11]).hideActionSheet();
    closure_1_1(closure_1_2[12])(href, true);
  };
  items3[1] = callback(href(4936).Button, obj5);
  obj3[1] = items3;
  items2[1] = callback2(href(4934).Stack, obj3);
  obj[4] = items2;
  obj[1] = callback2(href(4934).Stack, obj);
  return callback(href(7090).BottomSheet, obj);
};
