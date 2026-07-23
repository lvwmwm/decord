// Module ID: 15173
// Function ID: 115519
// Name: ForYouUnreadClearedState
// Dependencies: [31, 27, 33, 4130, 689, 1273, 9670, 4126, 1212, 2]
// Exports: ForYouUnreadClearedState

// Module 15173 (ForYouUnreadClearedState)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { marginBottom: 4, marginHorizontal: 24, alignItems: "center", flexDirection: "row" } };
_createForOfIteratorHelperLoose = { width: 48, height: 48, backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_400, opacity: 0.16, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl, marginRight: 16, justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.imageContainer = _createForOfIteratorHelperLoose;
let obj1 = { margin: 12, position: "absolute", color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_400 };
_createForOfIteratorHelperLoose.icon = obj1;
_createForOfIteratorHelperLoose.headerText = { marginBottom: 2 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/notification_center/native/ForYouUnreadClearedState.tsx");

export const ForYouUnreadClearedState = function ForYouUnreadClearedState() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container };
  obj = { style: tmp.imageContainer };
  const items = [callback(View, obj), , ];
  obj = { source: importDefault(9670), style: tmp.icon, color: tmp.icon.color };
  items[1] = callback(require(1273) /* Button */.Icon, obj);
  const obj1 = {};
  const obj2 = { color: "mobile-text-heading-primary", variant: "text-md/semibold", style: tmp.headerText };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl.string(require(1212) /* getSystemLocale */.t.DonStq);
  const items1 = [callback(require(4126) /* Text */.Text, obj2), ];
  const obj3 = { color: "text-default", variant: "text-md/medium" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl2.string(require(1212) /* getSystemLocale */.t.jXFsai);
  items1[1] = callback(require(4126) /* Text */.Text, obj3);
  obj1.children = items1;
  items[2] = callback2(View, obj1);
  obj.children = items;
  return callback2(View, obj);
};
