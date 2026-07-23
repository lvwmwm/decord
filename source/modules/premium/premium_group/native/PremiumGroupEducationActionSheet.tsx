// Module ID: 12446
// Function ID: 96586
// Name: PremiumGroupEducationActionSheet
// Dependencies: [27, 3790, 33, 4130, 689, 5187, 7507, 4126, 5459, 1212, 2780, 2]
// Exports: default

// Module 12446 (PremiumGroupEducationActionSheet)
import { View } from "get ActivityIndicator";
import { HELP_CENTER_LINK } from "TOTAL_PREMIUM_GROUP_MEMBER_SEATS";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = { container: { marginTop: 32, marginHorizontal: 30 } };
obj = { flexDirection: "row", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, marginBottom: 12 };
obj.aboutContainer = obj;
obj.warningIcon = { margin: 16 };
obj.aboutTextContainer = { justifyContent: "center", flex: 1, marginRight: 30 };
obj.helpdeskText = { textAlign: "center", marginBottom: 24 };
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("jsxProd").fileFinishedImporting("modules/premium/premium_group/native/PremiumGroupEducationActionSheet.tsx");

export default function PremiumGroupEducationActionSheet(aboutText) {
  const tmp = callback3();
  let obj = {};
  obj = { style: tmp.container };
  obj = { style: tmp.aboutContainer };
  const items = [callback(require(7507) /* CircleErrorIcon */.CircleErrorIcon, { size: "lg", style: tmp.warningIcon }), ];
  const obj3 = { variant: "text-sm/medium", color: "text-overlay-light", children: aboutText.aboutText };
  items[1] = callback(View, { style: tmp.aboutTextContainer, children: callback(require(4126) /* Text */.Text, obj3) });
  obj.children = items;
  const items1 = [callback2(View, obj), ];
  const obj4 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.helpdeskText };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj4.children = intl.format(importDefault(2780).ah1Ecm, { helpCenterLink: HELP_CENTER_LINK });
  items1[1] = callback(require(5459) /* findLinks */.TextWithIOSLinkWorkaround, obj4);
  obj.children = items1;
  obj.children = callback2(View, obj);
  return callback(require(5187) /* Background */.BottomSheet, obj);
};
