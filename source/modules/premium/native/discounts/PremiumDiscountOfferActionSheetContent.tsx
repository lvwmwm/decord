// Module ID: 15618
// Function ID: 120455
// Dependencies: [31, 27, 33, 4130, 689, 10970, 1212, 9014, 4632, 5807, 4126, 14661, 4543, 7871, 2]

// Module 15618
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let obj = {};
obj = { paddingHorizontal: 36, paddingTop: 18, paddingBottom: 36, width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, alignItems: "flex-start", display: "flex", flexDirection: "column", gap: 0 };
obj.contentContainer = obj;
obj.buttonContainer = { marginVertical: 6, width: "100%", height: 48 };
obj.title = { width: "100%", textAlign: "center" };
obj.heroIllustrationContainer = { alignItems: "center", justifyContent: "center", height: 188, width: "100%" };
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function PremiumDiscountOfferActionSheetContent(arg0) {
  let discountOffer;
  let onConfirm;
  ({ discountOffer, onConfirm } = arg0);
  const tmp = callback3();
  let obj = { IconComponent: require(10970) /* UserIcon */.UserIcon };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t.kpMomJ);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl2.string(require(1212) /* getSystemLocale */.t.uVUtPw);
  const items = [obj, , ];
  obj = { IconComponent: require(9014) /* ChatSmileIcon */.ChatSmileIcon };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl3.string(require(1212) /* getSystemLocale */.t["R2IV/Q"]);
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl4.string(require(1212) /* getSystemLocale */.t["3SUJLd"]);
  items[1] = obj;
  obj = { IconComponent: require(4632) /* FolderIcon */.FolderIcon };
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl5.string(require(1212) /* getSystemLocale */.t["u/NJKc"]);
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl6.string(require(1212) /* getSystemLocale */.t.i1UuMk);
  items[2] = obj;
  const amount = discountOffer.discount.amount;
  const obj1 = { style: tmp.contentContainer };
  const items1 = [callback(View, { style: tmp.heroIllustrationContainer, children: callback(require(5807) /* AccountAgeTier10LargeBadge */.NitroWumpusFlightRight3dIllustration, { width: 180, height: 180 }) }), , , ];
  const obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title };
  const intl7 = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl7.formatToPlainString(require(1212) /* getSystemLocale */.t.qowbUk, { percent: amount });
  items1[1] = callback(require(4126) /* Text */.Text, obj3);
  items1[2] = callback(importDefault(14661), { perks: items });
  const obj4 = { style: tmp.buttonContainer };
  const obj5 = { size: "lg" };
  const intl8 = require(1212) /* getSystemLocale */.intl;
  obj5.text = intl8.formatToPlainString(require(1212) /* getSystemLocale */.t.bkQ4bH, { percent: amount });
  obj5.onPress = onConfirm;
  obj5.grow = true;
  const obj6 = { size: "md", color: importDefault(689).unsafe_rawColors.WHITE };
  obj5.icon = callback(require(7871) /* NitroWheelIcon */.NitroWheelIcon, obj6);
  obj4.children = callback(require(4543) /* Button */.Button, obj5);
  items1[3] = callback(View, obj4);
  obj1.children = items1;
  return callback2(View, obj1);
});
const result = require("jsxProd").fileFinishedImporting("modules/premium/native/discounts/PremiumDiscountOfferActionSheetContent.tsx");

export default memoResult;
