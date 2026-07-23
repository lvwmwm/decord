// Module ID: 14660
// Function ID: 111744
// Dependencies: [31, 27, 33, 4130, 689, 10970, 1212, 9014, 4632, 5807, 4126, 3776, 14661, 4543, 7871, 2]

// Module 14660
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
const memoResult = require("result").memo(function PremiumTrialOfferActionSheetContent(onConfirm) {
  let intervalDuration;
  let trialOffer;
  ({ trialOffer, intervalDuration } = onConfirm);
  const tmp = callback2();
  let subscription_trial;
  if (null != trialOffer) {
    subscription_trial = trialOffer.subscription_trial;
  }
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
  const obj1 = { style: tmp.contentContainer };
  const items1 = [callback(View, { style: tmp.heroIllustrationContainer, children: callback(require(5807) /* AccountAgeTier10LargeBadge */.NitroWumpusFlightRight3dIllustration, { width: 180, height: 180 }) }), , , ];
  const obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title };
  const intl7 = require(1212) /* getSystemLocale */.intl;
  const obj4 = {};
  let sku_id;
  if (null != subscription_trial) {
    sku_id = subscription_trial.sku_id;
  }
  let displayNameFromSku = null;
  if (null != sku_id) {
    let obj7 = require(3776) /* _createForOfIteratorHelperLoose */;
    let sku_id1;
    if (null != subscription_trial) {
      sku_id1 = subscription_trial.sku_id;
    }
    displayNameFromSku = obj7.getDisplayNameFromSku(sku_id1);
  }
  obj4.displayName = displayNameFromSku;
  obj4.duration = intervalDuration;
  obj3.children = intl7.formatToPlainString(require(1212) /* getSystemLocale */.t.q8eMc0, obj4);
  items1[1] = callback(require(4126) /* Text */.Text, obj3);
  items1[2] = callback(importDefault(14661), { perks: items });
  const obj5 = { style: tmp.buttonContainer };
  const obj6 = { size: "lg" };
  const intl8 = require(1212) /* getSystemLocale */.intl;
  obj6.text = intl8.formatToPlainString(require(1212) /* getSystemLocale */.t.xASjq5, { duration: intervalDuration });
  obj6.onPress = onConfirm.onConfirm;
  obj6.grow = true;
  obj7 = { size: "md", color: importDefault(689).unsafe_rawColors.WHITE };
  obj6.icon = callback(require(7871) /* NitroWheelIcon */.NitroWheelIcon, obj7);
  obj5.children = callback(require(4543) /* Button */.Button, obj6);
  items1[3] = callback(View, obj5);
  obj1.children = items1;
  return closure_5(View, obj1);
});
const result = require("jsxProd").fileFinishedImporting("modules/premium/native/trials/PremiumTrialOfferActionSheetContent.tsx");

export default memoResult;
