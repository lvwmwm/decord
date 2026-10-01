// Module ID: 12916
// Function ID: 12917
// Name: PremiumPlanWhatYouLoseActionSheet
// Dependencies: [19, 17, 1374, 21, 4836, 576, 5899, 4832, 4488, 6583, 12917, 38, 12921, 1115, 12922, 12873, 12923, 12924, 4800, 6571, 6851, 5281, 10126, 2]
// Exports: default

// Module 12916 (PremiumPlanWhatYouLoseActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl9 from "intl" /* 1115 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import FastImageDefault from "FastImage" /* 5899 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10126 */;
import AssetRegistryDefault from "AssetRegistry" /* 12873 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12921 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 12922 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 12923 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 12924 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
function WhatYouLoseItem(arg0) {
  let imageSource;
  let items;
  let text;
  ({ imageSource, text } = arg0);
  const tmp = closure_8();
  const obj = { style: tmp.item, children: items };
  items = [metroRequire(FastImageDefault, { source: imageSource }), ];
  const obj2 = { variant: "text-md/medium", style: tmp.itemLabel, children: text };
  items[1] = metroRequire(Text_Text.Text, obj2);
  return metroImportDefault(View, obj);
}
const View = react_native.View;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { body: { paddingTop: 24, paddingHorizontal: 24 }, title: obj2, subtitle: obj3, item: obj4, itemLabel: { marginTop: 8 }, footer: { paddingHorizontal: 16 }, button: { marginBottom: 8 }, keepText: obj5 };
obj2 = { marginBottom: 8, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: 16, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj4 = { marginBottom: 16, borderRadius: nativeDefault.radii.sm, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: 16 };
obj5 = { textAlign: "center", paddingVertical: 8, color: nativeDefault.colors.TEXT_SUBTLE };
let closure_8 = createStyles(obj);
let obj6 = { DOWNGRADE: 0, [0]: "DOWNGRADE", CANCEL: 1, [1]: "CANCEL" };
let result = size.fileFinishedImporting("modules/premium/native/PremiumPlanWhatYouLoseActionSheet.tsx");

export default function PremiumPlanWhatYouLoseActionSheet(arg0) {
  let Button;
  let format2Result;
  let intl5;
  let intl6;
  let items2;
  let items3;
  let mode;
  let obj11;
  let stringResult;
  let subscription;
  let tmp2Result;
  let tmp2Result2;
  ({ mode, onContinue: require, subscription } = arg0);
  let premiumTypeFromSubscription;
  let tmp = closure_8();
  let obj = require("PremiumUtils");
  premiumTypeFromSubscription = obj.getPremiumTypeFromSubscription(subscription);
  const analyticsLocations = subscription(premiumTypeFromSubscription[9])().analyticsLocations;
  let obj2 = require("WhatYouLoseProfileTier1");
  const whatYouLoseProfileTier1Source = obj2.useWhatYouLoseProfileTier1Source();
  subscription(premiumTypeFromSubscription[11])(null != premiumTypeFromSubscription, "Expected premium type");
  let items = [premiumTypeFromSubscription, whatYouLoseProfileTier1Source];
  const memo = analyticsLocations.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let intl7;
    let intl8;
    if (PremiumTypes.TIER_0 === premiumTypeFromSubscription) {
      const obj2 = { imageSource: AssetRegistryDefault2, text: intl7.format(intl9.t["0hUHi6"], {}) };
      intl7 = intl9.intl;
      const items = [obj2, ];
      const obj3 = { imageSource: AssetRegistryDefault3, text: intl8.format(intl9.t.wFWO6D, {}) };
      intl8 = intl9.intl;
      items[1] = obj3;
      return items;
    } else if (PremiumTypes.TIER_1 === premiumTypeFromSubscription) {
      const obj4 = { imageSource: whatYouLoseProfileTier1Source, text: intl4.format(intl9.t.xCaYwE, {}) };
      intl4 = intl9.intl;
      const items1 = [obj4, , ];
      const obj5 = { imageSource: AssetRegistryDefault, text: intl5.format(intl9.t.wK04T1, {}) };
      intl5 = intl9.intl;
      items1[1] = obj5;
      obj6 = { imageSource: AssetRegistryDefault4, text: intl6.format(intl9.t.K4Hv69, {}) };
      intl6 = intl9.intl;
      items1[2] = obj6;
      return items1;
    } else if (PremiumTypes.TIER_2 === premiumTypeFromSubscription) {
      const obj = { imageSource: AssetRegistryDefault5, text: intl.format(intl9.t["gpqr+n"], {}) };
      intl = intl9.intl;
      const items2 = [obj, , ];
      const obj7 = { imageSource: AssetRegistryDefault4, text: intl2.format(intl9.t.wRxEDW, {}) };
      intl2 = intl9.intl;
      items2[1] = obj7;
      const obj8 = { imageSource: AssetRegistryDefault, text: intl3.format(intl9.t["4WZ7T2"], {}) };
      intl3 = intl9.intl;
      items2[2] = obj8;
      return items2;
    } else {
      return [];
    }
  }, items);
  BottomSheet = require("Sheet/BottomSheet").BottomSheet;
  let items1 = [closure_6(subscription(premiumTypeFromSubscription[20]), { premiumType: premiumTypeFromSubscription }), , ];
  let obj3 = { style: tmp.body, children: items2 };
  let obj4 = { variant: "heading-xl/extrabold", style: tmp.title, children: stringResult };
  const Text = require("Text/Text").Text;
  const tmp10 = obj6;
  if (mode === obj6.CANCEL) {
    let intl2 = tmp2(tmp3[13]).intl;
    stringResult = intl2.string(tmp2(tmp3[13]).t.PWq8TL);
  } else {
    let intl = tmp2(tmp3[13]).intl;
    stringResult = intl.string(tmp2(tmp3[13]).t["7VcWW0"]);
  }
  items2 = [tmp8(Text, obj4), , ];
  let obj5 = { variant: "text-md/medium", style: tmp.subtitle, children: format2Result };
  const Text2 = tmp2(tmp3[7]).Text;
  if (mode === tmp10.CANCEL) {
    let intl4 = tmp2(tmp3[13]).intl;
    const format2 = intl4.format;
    obj6 = { subscriptionName: tmp2Result.getPremiumTypeDisplayName(premiumTypeFromSubscription, true) };
    const jh5mUz = tmp2(tmp3[13]).t.jh5mUz;
    tmp2Result = require("PremiumUtils");
    format2Result = format2(jh5mUz, obj6);
  } else {
    let intl3 = tmp2(tmp3[13]).intl;
    const format = intl3.format;
    let obj7 = { subscriptionName: tmp2Result2.getPremiumTypeDisplayName(premiumTypeFromSubscription, true) };
    const Qk34Ik = tmp2(tmp3[13]).t.Qk34Ik;
    tmp2Result2 = require("PremiumUtils");
    format2Result = format(Qk34Ik, obj7);
  }
  let obj8 = { children: items1 };
  items2[1] = closure_6(Text2, obj5);
  items2[2] = memo.map((item, index) => {
    const obj = {};
    const merged = Object.assign(item);
    return closure_1_6(WhatYouLoseItem, obj, index);
  });
  items1[1] = closure_7(whatYouLoseProfileTier1Source, obj3);
  const obj9 = { style: tmp.footer, children: items3 };
  const obj10 = { style: tmp.button, children: closure_6(Button, obj11) };
  obj11 = {
    text: intl5.string(require("intl").t["3PatSz"]),
    grow: true,
    onPress() {
      require(PremiumAnalyticsUtils.STEP_ANALYTICS_NAMES[PremiumAnalyticsUtils.CancellationFlowSteps.WHAT_YOU_LOSE]);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  };
  Button = tmp2(tmp3[21]).Button;
  intl5 = tmp2(tmp3[13]).intl;
  items3 = [tmp8(tmp9, obj10), ];
  const obj12 = {
    variant: "text-sm/medium",
    style: tmp.keepText,
    onPress() {
      const trackPremiumSubscriptionCancellationFlowStep = PremiumAnalyticsUtils.trackPremiumSubscriptionCancellationFlowStep;
      const obj = { subscription, analyticsLocations, fromStep: PremiumAnalyticsUtils.STEP_ANALYTICS_NAMES[PremiumAnalyticsUtils.CancellationFlowSteps.WHAT_YOU_LOSE], toStep: null };
      const result = trackPremiumSubscriptionCancellationFlowStep(obj);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    },
    children: intl6.string(require("intl").t.rzVN6j)
  };
  const Text3 = tmp2(tmp3[7]).Text;
  intl6 = tmp2(tmp3[13]).intl;
  items3[1] = closure_6(Text3, obj12);
  items1[2] = closure_7(whatYouLoseProfileTier1Source, obj9);
  return closure_7(BottomSheet, obj8);
};
export const WhatYouLoseMode = obj6;
