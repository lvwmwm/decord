// Module ID: 7395
// Function ID: 59476
// Name: WhatYouLoseItem
// Dependencies: []
// Exports: default

// Module 7395 (WhatYouLoseItem)
function WhatYouLoseItem(arg0) {
  let imageSource;
  let text;
  ({ imageSource, text } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.item };
  const items = [callback(importDefault(dependencyMap[6]), { source: imageSource }), ];
  obj = { variant: "text-md/medium", style: tmp.itemLabel, children: text };
  items[1] = callback(arg1(dependencyMap[7]).Text, obj);
  obj.children = items;
  return callback2(View, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const PremiumTypes = arg1(dependencyMap[2]).PremiumTypes;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { body: { isArray: "<string:1027735553>", no: "<string:4143972873>" } };
obj = { marginBottom: 8, color: importDefault(dependencyMap[5]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.title = obj;
const tmp2 = arg1(dependencyMap[3]);
obj.subtitle = { marginBottom: 16, color: importDefault(dependencyMap[5]).colors.MOBILE_TEXT_HEADING_PRIMARY };
const obj2 = { -2046852097: 175177729, -1996519425: 1912602624, -1929409793: 1, -1979740161: 336, -1912632321: 1359070546, -1845522177: 2912753, -1778412545: 1359020032, -1795190017: 960578957, borderRadius: importDefault(dependencyMap[5]).radii.sm, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST };
obj.item = obj2;
obj.itemLabel = { marginTop: 8 };
obj.footer = { paddingHorizontal: 16 };
obj.button = { marginBottom: 8 };
const obj3 = { "Bool(false)": "absolute", "Bool(false)": 0, color: importDefault(dependencyMap[5]).colors.TEXT_SUBTLE };
obj.keepText = obj3;
let closure_8 = obj.createStyles(obj);
const obj4 = { DOWNGRADE: 0, [0]: "DOWNGRADE", CANCEL: 1, [1]: "CANCEL" };
const obj1 = { marginBottom: 16, color: importDefault(dependencyMap[5]).colors.MOBILE_TEXT_HEADING_PRIMARY };
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/premium/native/PremiumPlanWhatYouLoseActionSheet.tsx");

export default function PremiumPlanWhatYouLoseActionSheet(arg0) {
  let mode;
  let subscription;
  ({ mode, onContinue: closure_0, subscription } = arg0);
  const importDefault = subscription;
  function onClose() {
    subscription(premiumTypeFromSubscription[18]).hideActionSheet();
  }
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  const premiumTypeFromSubscription = obj.getPremiumTypeFromSubscription(subscription);
  const dependencyMap = premiumTypeFromSubscription;
  const React = importDefault(dependencyMap[9])().analyticsLocations;
  let obj1 = arg1(dependencyMap[10]);
  const whatYouLoseProfileTier1Source = obj1.useWhatYouLoseProfileTier1Source();
  const View = whatYouLoseProfileTier1Source;
  importDefault(dependencyMap[11])(null != premiumTypeFromSubscription, "Expected premium type");
  const items = [premiumTypeFromSubscription, whatYouLoseProfileTier1Source];
  const memo = React.useMemo(() => {
    if (onClose.TIER_0 === premiumTypeFromSubscription) {
      let obj = { imageSource: subscription(premiumTypeFromSubscription[12]) };
      const intl7 = callback(premiumTypeFromSubscription[13]).intl;
      obj.text = intl7.format(callback(premiumTypeFromSubscription[13]).t.0hUHi6, {});
      const items = [obj, ];
      obj = { imageSource: subscription(premiumTypeFromSubscription[14]) };
      const intl8 = callback(premiumTypeFromSubscription[13]).intl;
      obj.text = intl8.format(callback(premiumTypeFromSubscription[13]).t.wFWO6D, {});
      items[1] = obj;
      return items;
    } else if (onClose.TIER_1 === tmp) {
      const obj1 = { imageSource: whatYouLoseProfileTier1Source };
      const intl4 = callback(premiumTypeFromSubscription[13]).intl;
      obj1.text = intl4.format(callback(premiumTypeFromSubscription[13]).t.xCaYwE, {});
      const items1 = [obj1, , ];
      const obj2 = { imageSource: subscription(premiumTypeFromSubscription[15]) };
      const intl5 = callback(premiumTypeFromSubscription[13]).intl;
      obj2.text = intl5.format(callback(premiumTypeFromSubscription[13]).t.wK04T1, {});
      items1[1] = obj2;
      const obj3 = { imageSource: subscription(premiumTypeFromSubscription[16]) };
      const intl6 = callback(premiumTypeFromSubscription[13]).intl;
      obj3.text = intl6.format(callback(premiumTypeFromSubscription[13]).t.K4Hv69, {});
      items1[2] = obj3;
      return items1;
    } else if (onClose.TIER_2 === tmp) {
      obj = { imageSource: subscription(premiumTypeFromSubscription[17]) };
      const intl = callback(premiumTypeFromSubscription[13]).intl;
      obj.text = intl.format(callback(premiumTypeFromSubscription[13]).t.gpqr+n, {});
      const items2 = [obj, , ];
      const obj4 = { imageSource: subscription(premiumTypeFromSubscription[16]) };
      const intl2 = callback(premiumTypeFromSubscription[13]).intl;
      obj4.text = intl2.format(callback(premiumTypeFromSubscription[13]).t.wRxEDW, {});
      items2[1] = obj4;
      const obj5 = { imageSource: subscription(premiumTypeFromSubscription[15]) };
      const intl3 = callback(premiumTypeFromSubscription[13]).intl;
      obj5.text = intl3.format(callback(premiumTypeFromSubscription[13]).t.4WZ7T2, {});
      items2[2] = obj5;
      return items2;
    } else {
      return [];
    }
  }, items);
  obj = {};
  const items1 = [callback(importDefault(dependencyMap[20]), { premiumType: premiumTypeFromSubscription }), , ];
  obj = { style: tmp.body };
  obj1 = { variant: "heading-xl/extrabold", style: tmp.title };
  if (mode === obj4.CANCEL) {
    const intl2 = arg1(dependencyMap[13]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[13]).t.PWq8TL);
  } else {
    const intl = arg1(dependencyMap[13]).intl;
    stringResult = intl.string(arg1(dependencyMap[13]).t.7VcWW0);
  }
  obj1.children = stringResult;
  const items2 = [callback(arg1(dependencyMap[7]).Text, obj1), , ];
  const obj2 = { variant: "text-md/medium", style: tmp.subtitle };
  if (mode === obj4.CANCEL) {
    const intl4 = arg1(dependencyMap[13]).intl;
    const obj3 = { subscriptionName: arg1(dependencyMap[8]).getPremiumTypeDisplayName(premiumTypeFromSubscription, true) };
    let formatResult = intl4.format(arg1(dependencyMap[13]).t.jh5mUz, obj3);
    const obj10 = arg1(dependencyMap[8]);
  } else {
    const intl3 = arg1(dependencyMap[13]).intl;
    const obj4 = {};
    let obj7 = arg1(dependencyMap[8]);
    obj4.subscriptionName = obj7.getPremiumTypeDisplayName(premiumTypeFromSubscription, true);
    formatResult = intl3.format(arg1(dependencyMap[13]).t.Qk34Ik, obj4);
  }
  obj2.children = formatResult;
  items2[1] = callback(arg1(dependencyMap[7]).Text, obj2);
  items2[2] = memo.map((arg0, arg1) => {
    const merged = Object.assign(arg0);
    return callback2(closure_10, {}, arg1);
  });
  obj.children = items2;
  items1[1] = callback2(View, obj);
  const obj5 = { style: tmp.footer };
  const obj6 = { style: tmp.button };
  obj7 = {};
  const intl5 = arg1(dependencyMap[13]).intl;
  obj7.text = intl5.string(arg1(dependencyMap[13]).t.3PatSz);
  obj7.grow = true;
  obj7.onPress = function onPress() {
    callback(callback(premiumTypeFromSubscription[22]).STEP_ANALYTICS_NAMES[closure_0(undefined, closure_2[22]).CancellationFlowSteps.WHAT_YOU_LOSE]);
    onClose();
  };
  obj6.children = callback(arg1(dependencyMap[21]).Button, obj7);
  const items3 = [callback(View, obj6), ];
  const obj8 = {
    variant: "text-sm/medium",
    style: tmp.keepText,
    onPress() {
      let obj = callback(premiumTypeFromSubscription[22]);
      obj = { subscription, analyticsLocations, fromStep: callback(premiumTypeFromSubscription[22]).STEP_ANALYTICS_NAMES[closure_0(undefined, closure_2[22]).CancellationFlowSteps.WHAT_YOU_LOSE], toStep: null };
      const result = obj.trackPremiumSubscriptionCancellationFlowStep(obj);
      onClose();
    }
  };
  const intl6 = arg1(dependencyMap[13]).intl;
  obj8.children = intl6.string(arg1(dependencyMap[13]).t.rzVN6j);
  items3[1] = callback(arg1(dependencyMap[7]).Text, obj8);
  obj5.children = items3;
  items1[2] = callback2(View, obj5);
  obj.children = items1;
  return callback2(arg1(dependencyMap[19]).BottomSheet, obj);
};
export const WhatYouLoseMode = obj4;
