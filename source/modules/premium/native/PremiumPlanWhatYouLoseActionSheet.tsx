// Module ID: 7401
// Function ID: 59533
// Name: WhatYouLoseItem
// Dependencies: [31, 27, 1851, 33, 4130, 689, 5085, 4126, 3776, 5464, 7402, 44, 7407, 1212, 7408, 7409, 7410, 7411, 4098, 5187, 6670, 4543, 7156, 2]
// Exports: default

// Module 7401 (WhatYouLoseItem)
import result from "result";
import { View } from "get ActivityIndicator";
import { PremiumTypes } from "GuildFeatures";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function WhatYouLoseItem(arg0) {
  let imageSource;
  let text;
  ({ imageSource, text } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.item };
  const items = [callback(importDefault(5085), { source: imageSource }), ];
  obj = { variant: "text-md/medium", style: tmp.itemLabel, children: text };
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(View, obj);
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { body: { paddingTop: 24, paddingHorizontal: 24 } };
_createForOfIteratorHelperLoose = { marginBottom: 8, color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.title = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.subtitle = { marginBottom: 16, color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj2 = { marginBottom: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, padding: 16 };
_createForOfIteratorHelperLoose.item = obj2;
_createForOfIteratorHelperLoose.itemLabel = { marginTop: 8 };
_createForOfIteratorHelperLoose.footer = { paddingHorizontal: 16 };
_createForOfIteratorHelperLoose.button = { marginBottom: 8 };
let obj3 = { textAlign: "center", paddingVertical: 8, color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
_createForOfIteratorHelperLoose.keepText = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { DOWNGRADE: 0, [0]: "DOWNGRADE", CANCEL: 1, [1]: "CANCEL" };
let obj1 = { marginBottom: 16, color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
let result = require("GuildFeatures").fileFinishedImporting("modules/premium/native/PremiumPlanWhatYouLoseActionSheet.tsx");

export default function PremiumPlanWhatYouLoseActionSheet(arg0) {
  let mode;
  let require;
  let subscription;
  ({ mode, onContinue: require, subscription } = arg0);
  function onClose() {
    subscription(premiumTypeFromSubscription[18]).hideActionSheet();
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(premiumTypeFromSubscription[8]);
  premiumTypeFromSubscription = obj.getPremiumTypeFromSubscription(subscription);
  const analyticsLocations = subscription(premiumTypeFromSubscription[9])().analyticsLocations;
  let obj1 = require(premiumTypeFromSubscription[10]);
  const whatYouLoseProfileTier1Source = obj1.useWhatYouLoseProfileTier1Source();
  subscription(premiumTypeFromSubscription[11])(null != premiumTypeFromSubscription, "Expected premium type");
  let items = [premiumTypeFromSubscription, whatYouLoseProfileTier1Source];
  const memo = analyticsLocations.useMemo(() => {
    if (onClose.TIER_0 === premiumTypeFromSubscription) {
      let obj = { imageSource: subscription(premiumTypeFromSubscription[12]) };
      const intl7 = outer1_0(premiumTypeFromSubscription[13]).intl;
      obj.text = intl7.format(outer1_0(premiumTypeFromSubscription[13]).t["0hUHi6"], {});
      const items = [obj, ];
      obj = { imageSource: subscription(premiumTypeFromSubscription[14]) };
      const intl8 = outer1_0(premiumTypeFromSubscription[13]).intl;
      obj.text = intl8.format(outer1_0(premiumTypeFromSubscription[13]).t.wFWO6D, {});
      items[1] = obj;
      return items;
    } else if (onClose.TIER_1 === tmp) {
      const obj1 = { imageSource: whatYouLoseProfileTier1Source };
      const intl4 = outer1_0(premiumTypeFromSubscription[13]).intl;
      obj1.text = intl4.format(outer1_0(premiumTypeFromSubscription[13]).t.xCaYwE, {});
      const items1 = [obj1, , ];
      const obj2 = { imageSource: subscription(premiumTypeFromSubscription[15]) };
      const intl5 = outer1_0(premiumTypeFromSubscription[13]).intl;
      obj2.text = intl5.format(outer1_0(premiumTypeFromSubscription[13]).t.wK04T1, {});
      items1[1] = obj2;
      const obj3 = { imageSource: subscription(premiumTypeFromSubscription[16]) };
      const intl6 = outer1_0(premiumTypeFromSubscription[13]).intl;
      obj3.text = intl6.format(outer1_0(premiumTypeFromSubscription[13]).t.K4Hv69, {});
      items1[2] = obj3;
      return items1;
    } else if (onClose.TIER_2 === tmp) {
      obj = { imageSource: subscription(premiumTypeFromSubscription[17]) };
      const intl = outer1_0(premiumTypeFromSubscription[13]).intl;
      obj.text = intl.format(outer1_0(premiumTypeFromSubscription[13]).t["gpqr+n"], {});
      const items2 = [obj, , ];
      const obj4 = { imageSource: subscription(premiumTypeFromSubscription[16]) };
      const intl2 = outer1_0(premiumTypeFromSubscription[13]).intl;
      obj4.text = intl2.format(outer1_0(premiumTypeFromSubscription[13]).t.wRxEDW, {});
      items2[1] = obj4;
      const obj5 = { imageSource: subscription(premiumTypeFromSubscription[15]) };
      const intl3 = outer1_0(premiumTypeFromSubscription[13]).intl;
      obj5.text = intl3.format(outer1_0(premiumTypeFromSubscription[13]).t["4WZ7T2"], {});
      items2[2] = obj5;
      return items2;
    } else {
      return [];
    }
  }, items);
  obj = {};
  let items1 = [callback(subscription(premiumTypeFromSubscription[20]), { premiumType: premiumTypeFromSubscription }), , ];
  obj = { style: tmp.body };
  obj1 = { variant: "heading-xl/extrabold", style: tmp.title };
  if (mode === obj4.CANCEL) {
    let intl2 = require(premiumTypeFromSubscription[13]).intl;
    let stringResult = intl2.string(require(premiumTypeFromSubscription[13]).t.PWq8TL);
  } else {
    let intl = require(premiumTypeFromSubscription[13]).intl;
    stringResult = intl.string(require(premiumTypeFromSubscription[13]).t["7VcWW0"]);
  }
  obj1.children = stringResult;
  let items2 = [callback(require(premiumTypeFromSubscription[7]).Text, obj1), , ];
  let obj2 = { variant: "text-md/medium", style: tmp.subtitle };
  if (mode === obj4.CANCEL) {
    let intl4 = require(premiumTypeFromSubscription[13]).intl;
    let obj3 = { subscriptionName: require(premiumTypeFromSubscription[8]).getPremiumTypeDisplayName(premiumTypeFromSubscription, true) };
    let formatResult = intl4.format(require(premiumTypeFromSubscription[13]).t.jh5mUz, obj3);
    const obj10 = require(premiumTypeFromSubscription[8]);
  } else {
    let intl3 = require(premiumTypeFromSubscription[13]).intl;
    obj4 = {};
    let obj7 = require(premiumTypeFromSubscription[8]);
    obj4.subscriptionName = obj7.getPremiumTypeDisplayName(premiumTypeFromSubscription, true);
    formatResult = intl3.format(require(premiumTypeFromSubscription[13]).t.Qk34Ik, obj4);
  }
  obj2.children = formatResult;
  items2[1] = callback(require(premiumTypeFromSubscription[7]).Text, obj2);
  items2[2] = memo.map((arg0, arg1) => {
    const merged = Object.assign(arg0);
    return outer1_6(outer1_10, {}, arg1);
  });
  obj.children = items2;
  items1[1] = callback2(whatYouLoseProfileTier1Source, obj);
  let obj5 = { style: tmp.footer };
  const obj6 = { style: tmp.button };
  obj7 = {};
  let intl5 = require(premiumTypeFromSubscription[13]).intl;
  obj7.text = intl5.string(require(premiumTypeFromSubscription[13]).t["3PatSz"]);
  obj7.grow = true;
  obj7.onPress = function onPress() {
    callback(outer1_0(premiumTypeFromSubscription[22]).STEP_ANALYTICS_NAMES[outer1_0(undefined, premiumTypeFromSubscription[22]).CancellationFlowSteps.WHAT_YOU_LOSE]);
    onClose();
  };
  obj6.children = callback(require(premiumTypeFromSubscription[21]).Button, obj7);
  const items3 = [callback(whatYouLoseProfileTier1Source, obj6), ];
  const obj8 = {
    variant: "text-sm/medium",
    style: tmp.keepText,
    onPress() {
      let obj = outer1_0(premiumTypeFromSubscription[22]);
      obj = { subscription, analyticsLocations, fromStep: outer1_0(premiumTypeFromSubscription[22]).STEP_ANALYTICS_NAMES[outer1_0(undefined, premiumTypeFromSubscription[22]).CancellationFlowSteps.WHAT_YOU_LOSE], toStep: null };
      const result = obj.trackPremiumSubscriptionCancellationFlowStep(obj);
      onClose();
    }
  };
  let intl6 = require(premiumTypeFromSubscription[13]).intl;
  obj8.children = intl6.string(require(premiumTypeFromSubscription[13]).t.rzVN6j);
  items3[1] = callback(require(premiumTypeFromSubscription[7]).Text, obj8);
  obj5.children = items3;
  items1[2] = callback2(whatYouLoseProfileTier1Source, obj5);
  obj.children = items1;
  return callback2(require(premiumTypeFromSubscription[19]).BottomSheet, obj);
};
export const WhatYouLoseMode = obj4;
