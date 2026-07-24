// Module ID: 15222
// Function ID: 115846
// Name: ForYouEmptyState
// Dependencies: [31, 27, 33, 4130, 5807, 4126, 1212, 2]
// Exports: ForYouEmptyState

// Module 15222 (ForYouEmptyState)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ image: { marginBottom: 16 }, container: { paddingHorizontal: 48, alignItems: "center", justifyContent: "center" }, headerText: { fontSize: 18, marginTop: 16, marginBottom: 8 }, text: { textAlign: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/notification_center/native/ForYouEmptyState.tsx");

export const ForYouEmptyState = function ForYouEmptyState(height) {
  const tmp = callback3();
  let obj = { style: items };
  items = [tmp.container, { height: height.height }];
  obj = { style: tmp.image, children: callback(require(5807) /* AccountAgeTier10LargeBadge */.MailboxSpotIllustration, { scale: 0.75 }) };
  const items1 = [callback(View, obj), , ];
  obj = { accessibilityRole: "header", color: "mobile-text-heading-primary", variant: "heading-md/bold" };
  const items2 = [, ];
  ({ text: arr3[0], headerText: arr3[1] } = tmp);
  obj.style = items2;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.MwjTvn);
  items1[1] = callback(require(4126) /* Text */.Text, obj);
  const obj1 = { color: "text-default", variant: "text-md/medium", style: tmp.text };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl2.string(require(1212) /* getSystemLocale */.t.AKBgPy);
  items1[2] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items1;
  return callback2(View, obj);
};
