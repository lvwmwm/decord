// Module ID: 13650
// Function ID: 13651
// Name: PremiumPlanWhatYouLoseActionSheet
// Dependencies: [19, 17, 1378, 21, 4758, 580, 558, 568, 5802, 4754, 4418, 7409, 13651, 38, 13655, 1119, 13656, 13607, 13657, 13658, 4725, 10961, 7675, 5188, 7397, 2]

// Module 13650 (PremiumPlanWhatYouLoseActionSheet)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import Text_Text from "Text/Text" /* 4754 */;
import FastImageDefault from "FastImage" /* 5802 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10961 */;
import _modDef13607 from "module_13607" /* 13607 */;
import _modDef13655 from "module_13655" /* 13655 */;
import _modDef13656 from "module_13656" /* 13656 */;
import _modDef13657 from "module_13657" /* 13657 */;
import _modDef13658 from "module_13658" /* 13658 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const PremiumTypes = fn(1378).PremiumTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { body: { paddingTop: 24, paddingHorizontal: 24 }, title: { marginBottom: 8, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY }, subtitle: null, item: null, itemLabel: null, footer: null, button: null, keepText: null };
let obj3 = { marginBottom: 8, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.subtitle = { marginBottom: 16, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj4 = { marginBottom: 16, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.item = { marginBottom: 16, borderRadius: nativeDefault.radii.sm, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: 16 };
obj2.itemLabel = { marginTop: 8 };
obj2.footer = { paddingHorizontal: 16 };
obj2.button = { marginBottom: 8 };
let obj5 = { marginBottom: 16, borderRadius: nativeDefault.radii.sm, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: 16 };
obj2.keepText = { textAlign: "center", paddingVertical: 8, color: nativeDefault.colors.TEXT_SUBTLE };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(9);
  ({ imageSource, text } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] !== imageSource) {
    const obj2 = { source: imageSource };
    const tmp8 = timestampProducer(FastImageDefault, obj2);
    cResult[0] = imageSource;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.itemLabel) {
    if (cResult[3] === text) {
      let tmp9 = cResult[4];
    }
    if (cResult[5] === tmp4.item) {
      if (cResult[6] === tmp5) {
        if (cResult[7] === tmp9) {
          let tmp11 = cResult[8];
        }
        return tmp11;
      }
    }
    const obj3 = { style: tmp4.item, children: null };
    const items = [tmp5, tmp9];
    obj3.children = items;
    const tmp14 = React5(View, obj3);
    cResult[5] = tmp4.item;
    cResult[6] = tmp5;
    cResult[7] = tmp9;
    cResult[8] = tmp14;
    tmp11 = tmp14;
  }
  const tmp10 = timestampProducer(Text_Text.Text, { variant: "text-md/medium", style: tmp4.itemLabel, children: text });
  cResult[2] = tmp4.itemLabel;
  cResult[3] = text;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : ((arg0) => {
  ({ imageSource, text } = arg0);
  const tmp = closure_8();
  const obj = { style: tmp.item, children: null };
  const items = [timestampProducer(FastImageDefault, { source: imageSource }), timestampProducer(Text_Text.Text, { variant: "text-md/medium", style: tmp.itemLabel, children: text })];
  obj.children = items;
  return React5(View, obj);
});
let obj8 = { DOWNGRADE: 0, [0]: "DOWNGRADE", CANCEL: 1, [1]: "CANCEL" };
ReactCompilerGating = fn(558);
let obj6 = { textAlign: "center", paddingVertical: 8, color: nativeDefault.colors.TEXT_SUBTLE };
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/PremiumPlanWhatYouLoseActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((subscription) => {
  const cResult = onContinue(analyticsLocations[7]).c(69);
  ({ mode, onContinue } = subscription);
  subscription = subscription.subscription;
  const tmp4 = closure_8();
  if (cResult[0] !== subscription) {
    const premiumTypeFromSubscription = tmp(tmp2[10]).getPremiumTypeFromSubscription(subscription);
    cResult[0] = subscription;
    cResult[1] = premiumTypeFromSubscription;
    let tmp5 = premiumTypeFromSubscription;
    const tmpResult = tmp(tmp2[10]);
  } else {
    tmp5 = cResult[1];
  }
  analyticsLocations = subscription(tmp2[11])().analyticsLocations;
  let obj = onContinue(analyticsLocations[7]);
  const whatYouLoseProfileTier1Source = onContinue(analyticsLocations[12]).useWhatYouLoseProfileTier1Source();
  subscription(analyticsLocations[13])(null != tmp5, "Expected premium type");
  if (PremiumTypes.TIER_0 === tmp5) {
    const _Symbol7 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { imageSource: tmp7(tmp2[14]), text: null };
      const intl7 = tmp(tmp2[15]).intl;
      obj2.text = intl7.format(tmp(tmp2[15]).t["0hUHi6"], {});
      cResult[2] = obj2;
      let tmp27 = obj2;
    } else {
      tmp27 = cResult[2];
    }
    const _Symbol8 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { imageSource: tmp7(tmp2[16]), text: null };
      const intl8 = tmp(tmp2[15]).intl;
      obj3.text = intl8.format(tmp(tmp2[15]).t.wFWO6D, {});
      cResult[3] = obj3;
      let tmp28 = obj3;
    } else {
      tmp28 = cResult[3];
    }
    if (cResult[4] === tmp27) {
    }
    const items = [tmp27, tmp28];
    cResult[4] = tmp27;
    cResult[5] = tmp28;
    cResult[6] = items;
  } else {
    if (tmp10.TIER_1 === tmp5) {
      const _Symbol4 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = tmp(tmp2[15]).intl;
        const formatResult = intl4.format(tmp(tmp2[15]).t.xCaYwE, {});
        cResult[7] = formatResult;
        let tmp19 = formatResult;
      } else {
        tmp19 = cResult[7];
      }
      if (cResult[8] === tmp19) {
        if (cResult[9] === whatYouLoseProfileTier1Source) {
          let tmp21 = cResult[10];
        }
        const _Symbol5 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { imageSource: tmp7(tmp2[17]), text: null };
          const intl5 = tmp(tmp2[15]).intl;
          obj4.text = intl5.format(tmp(tmp2[15]).t.wK04T1, {});
          cResult[11] = obj4;
          let tmp22 = obj4;
        } else {
          tmp22 = cResult[11];
        }
        const _Symbol6 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { imageSource: tmp7(tmp2[18]), text: null };
          const intl6 = tmp(tmp2[15]).intl;
          obj5.text = intl6.format(tmp(tmp2[15]).t.K4Hv69, {});
          cResult[12] = obj5;
          let tmp23 = obj5;
        } else {
          tmp23 = cResult[12];
        }
        if (cResult[13] === tmp21) {
          if (cResult[14] === tmp22) {
          }
        }
        class F {
          constructor() {
            obj = closure_0(closure_2[21]);
            obj1 = { subscription, analyticsLocations, fromStep: closure_0(closure_2[21]).STEP_ANALYTICS_NAMES[closure_0(undefined, closure_2[21]).CancellationFlowSteps.WHAT_YOU_LOSE], toStep: null };
            result = obj.trackPremiumSubscriptionCancellationFlowStep(obj1);
            tmp2 = closure_3();
            return;
          }
        }
        tmp25[0] = tmp21;
        tmp25[1] = tmp22;
        tmp25[2] = tmp23;
        cResult[13] = tmp21;
        cResult[14] = tmp22;
        cResult[15] = tmp23;
        cResult[16] = tmp25;
      }
      const obj6 = { imageSource: whatYouLoseProfileTier1Source, text: null };
      class F {
        constructor() {
          obj = closure_0(closure_2[21]);
          obj1 = { subscription, analyticsLocations, fromStep: closure_0(closure_2[21]).STEP_ANALYTICS_NAMES[closure_0(undefined, closure_2[21]).CancellationFlowSteps.WHAT_YOU_LOSE], toStep: null };
          result = obj.trackPremiumSubscriptionCancellationFlowStep(obj1);
          tmp2 = closure_3();
          return;
        }
      }
      cResult[8] = tmp19;
      cResult[9] = whatYouLoseProfileTier1Source;
      cResult[10] = obj6;
      tmp21 = obj6;
    } else if (tmp10.TIER_2 === tmp5) {
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = { imageSource: tmp7(tmp2[19]), text: null };
        const intl = tmp(tmp2[15]).intl;
        obj7.text = intl.format(tmp(tmp2[15]).t["gpqr+n"], {});
        cResult[17] = obj7;
        let tmp14 = obj7;
      } else {
        tmp14 = cResult[17];
      }
      const _Symbol3 = Symbol;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        obj8 = { imageSource: tmp7(tmp2[18]), text: null };
        const intl2 = tmp(tmp2[15]).intl;
        obj8.text = intl2.format(tmp(tmp2[15]).t.wRxEDW, {});
        cResult[18] = obj8;
        let tmp15 = obj8;
      } else {
        tmp15 = cResult[18];
      }
      class F {
        constructor() {
          obj = closure_0(closure_2[21]);
          obj1 = { subscription, analyticsLocations, fromStep: closure_0(closure_2[21]).STEP_ANALYTICS_NAMES[closure_0(undefined, closure_2[21]).CancellationFlowSteps.WHAT_YOU_LOSE], toStep: null };
          result = obj.trackPremiumSubscriptionCancellationFlowStep(obj1);
          tmp2 = closure_3();
          return;
        }
      }
      if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
        const obj9 = { imageSource: tmp7(tmp2[17]), text: null };
        const intl3 = tmp(tmp2[15]).intl;
        obj9.text = intl3.format(tmp(tmp2[15]).t["4WZ7T2"], {});
        cResult[19] = obj9;
        let tmp16 = obj9;
      } else {
        tmp16 = cResult[19];
      }
      if (cResult[20] === tmp14) {
        if (cResult[21] === tmp15) {
        }
      }
      const items1 = [tmp14, tmp15, tmp16];
      cResult[20] = tmp14;
      cResult[21] = tmp15;
      cResult[22] = tmp16;
      cResult[23] = items1;
    } else {
      const _Symbol = Symbol;
      if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [];
        cResult[24] = items2;
      }
    }
    const _Symbol9 = Symbol;
    if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor() {
          obj = subscription(analyticsLocations[20]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
      cResult[25] = B;
      const tmp32 = B;
    } else {
      class B {
        constructor() {
          obj = subscription(analyticsLocations[20]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
    }
    noop = tmp32;
    if (cResult[26] === analyticsLocations) {
      class B {
        constructor() {
          obj = subscription(analyticsLocations[20]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
      if (cResult[29] !== onContinue) {
        class U {
          constructor(arg0) {
            tmp = onContinue(subscription);
            tmp2 = closure_3();
            return;
          }
        }
        cResult[29] = onContinue;
        cResult[30] = U;
        const tmp34 = U;
      } else {
        class U {
          constructor(arg0) {
            tmp = onContinue(subscription);
            tmp2 = closure_3();
            return;
          }
        }
      }
      U = tmp34;
      if (cResult[31] !== tmp5) {
        class U {
          constructor(arg0) {
            tmp = onContinue(subscription);
            tmp2 = closure_3();
            return;
          }
        }
        const obj10 = { premiumType: tmp5 };
        cResult[31] = tmp5;
        cResult[32] = closure_6(tmp7(tmp2[22]), obj10);
        class F {
          constructor() {
            obj = closure_0(closure_2[21]);
            obj1 = { subscription, analyticsLocations, fromStep: closure_0(closure_2[21]).STEP_ANALYTICS_NAMES[closure_0(undefined, closure_2[21]).CancellationFlowSteps.WHAT_YOU_LOSE], toStep: null };
            result = obj.trackPremiumSubscriptionCancellationFlowStep(obj1);
            tmp2 = closure_3();
            return;
          }
        }
        const tmp35 = closure_6(tmp7(tmp2[22]), obj10);
      } else {
        class U {
          constructor(arg0) {
            tmp = onContinue(subscription);
            tmp2 = closure_3();
            return;
          }
        }
      }
      if (cResult[33] !== mode) {
        class U {
          constructor(arg0) {
            tmp = onContinue(subscription);
            tmp2 = closure_3();
            return;
          }
        }
        if (mode === obj8.CANCEL) {
          class U {
            constructor(arg0) {
              tmp = onContinue(subscription);
              tmp2 = closure_3();
              return;
            }
          }
          let stringResult = obj14.string(tmp(tmp2[15]).t.PWq8TL);
        } else {
          class U {
            constructor(arg0) {
              tmp = onContinue(subscription);
              tmp2 = closure_3();
              return;
            }
          }
          stringResult = obj13.string(tmp(tmp2[15]).t["7VcWW0"]);
        }
        cResult[33] = mode;
        cResult[34] = stringResult;
      } else {
        class U {
          constructor(arg0) {
            tmp = onContinue(subscription);
            tmp2 = closure_3();
            return;
          }
        }
        if (cResult[35] === tmp4.title) {
          class U {
            constructor(arg0) {
              tmp = onContinue(subscription);
              tmp2 = closure_3();
              return;
            }
          }
          if (cResult[38] === mode) {
            class U {
              constructor(arg0) {
                tmp = onContinue(subscription);
                tmp2 = closure_3();
                return;
              }
            }
          }
          if (mode === obj8.CANCEL) {
            class U {
              constructor(arg0) {
                tmp = onContinue(subscription);
                tmp2 = closure_3();
                return;
              }
            }
            const obj11 = { subscriptionName: tmp(tmp2[10]).getPremiumTypeDisplayName(tmp5, true) };
            let formatResult1 = obj19.format(tmp(tmp2[15]).t.jh5mUz, obj11);
            const tmpResult5 = tmp(tmp2[10]);
          } else {
            class U {
              constructor(arg0) {
                tmp = onContinue(subscription);
                tmp2 = closure_3();
                return;
              }
            }
            const obj12 = { subscriptionName: tmp(tmp2[10]).getPremiumTypeDisplayName(tmp5, true) };
            formatResult1 = obj16.format(tmp(tmp2[15]).t.Qk34Ik, obj12);
            const tmpResult6 = tmp(tmp2[10]);
          }
          cResult[38] = mode;
          cResult[39] = tmp5;
          class F {
            constructor() {
              obj = closure_0(closure_2[21]);
              obj1 = { subscription, analyticsLocations, fromStep: closure_0(closure_2[21]).STEP_ANALYTICS_NAMES[closure_0(undefined, closure_2[21]).CancellationFlowSteps.WHAT_YOU_LOSE], toStep: null };
              result = obj.trackPremiumSubscriptionCancellationFlowStep(obj1);
              tmp2 = closure_3();
              return;
            }
          }
          cResult[40] = formatResult1;
        }
        const obj15 = { variant: "heading-xl/extrabold", style: tmp4.title, children: tmp36 };
        const tmp41 = closure_6(tmp(tmp2[9]).Text, obj15);
        class F {
          constructor() {
            obj = closure_0(closure_2[21]);
            obj1 = { subscription, analyticsLocations, fromStep: closure_0(closure_2[21]).STEP_ANALYTICS_NAMES[closure_0(undefined, closure_2[21]).CancellationFlowSteps.WHAT_YOU_LOSE], toStep: null };
            result = obj.trackPremiumSubscriptionCancellationFlowStep(obj1);
            tmp2 = closure_3();
            return;
          }
        }
        cResult[36] = tmp36;
        cResult[37] = tmp41;
      }
    }
    class F {
      constructor() {
        obj = closure_0(closure_2[21]);
        obj1 = { subscription, analyticsLocations, fromStep: closure_0(closure_2[21]).STEP_ANALYTICS_NAMES[closure_0(undefined, closure_2[21]).CancellationFlowSteps.WHAT_YOU_LOSE], toStep: null };
        result = obj.trackPremiumSubscriptionCancellationFlowStep(obj1);
        tmp2 = closure_3();
        return;
      }
    }
    cResult[26] = analyticsLocations;
    cResult[27] = subscription;
    cResult[28] = F;
  }
}) : ((arg0) => {
  ({ mode, onContinue: require, subscription } = arg0);
  let premiumTypeFromSubscription;
  const tmp = closure_8();
  premiumTypeFromSubscription = require("PremiumUtils").getPremiumTypeFromSubscription(subscription);
  const analyticsLocations = subscription(premiumTypeFromSubscription[11])().analyticsLocations;
  let obj = require("PremiumUtils");
  const whatYouLoseProfileTier1Source = require("WhatYouLoseProfileTier1").useWhatYouLoseProfileTier1Source();
  subscription(premiumTypeFromSubscription[13])(null != premiumTypeFromSubscription, "Expected premium type");
  let items = [premiumTypeFromSubscription, whatYouLoseProfileTier1Source];
  const memo = analyticsLocations.useMemo(() => {
    if (PremiumTypes.TIER_0 === premiumTypeFromSubscription) {
      const obj2 = { imageSource: _modDef13655, text: null };
      const intl7 = util.intl;
      obj2.text = intl7.format(util.t["0hUHi6"], {});
      const items = [obj2, ];
      const obj3 = { imageSource: _modDef13656, text: null };
      const intl8 = util.intl;
      obj3.text = intl8.format(util.t.wFWO6D, {});
      items[1] = obj3;
      return items;
    } else if (tmp2.TIER_1 === tmp) {
      const obj4 = { imageSource: whatYouLoseProfileTier1Source, text: null };
      const intl4 = util.intl;
      obj4.text = intl4.format(util.t.xCaYwE, {});
      const items1 = [obj4, , ];
      const obj5 = { imageSource: _modDef13607, text: null };
      const intl5 = util.intl;
      obj5.text = intl5.format(util.t.wK04T1, {});
      items1[1] = obj5;
      const obj6 = { imageSource: _modDef13657, text: null };
      const intl6 = util.intl;
      obj6.text = intl6.format(util.t.K4Hv69, {});
      items1[2] = obj6;
      return items1;
    } else if (tmp2.TIER_2 === tmp) {
      const obj = { imageSource: _modDef13658, text: null };
      const intl = util.intl;
      obj.text = intl.format(util.t["gpqr+n"], {});
      const items2 = [obj, , ];
      const obj7 = { imageSource: _modDef13657, text: null };
      const intl2 = util.intl;
      obj7.text = intl2.format(util.t.wRxEDW, {});
      items2[1] = obj7;
      obj8 = { imageSource: _modDef13607, text: null };
      const intl3 = util.intl;
      obj8.text = intl3.format(util.t["4WZ7T2"], {});
      items2[2] = obj8;
      return items2;
    } else {
      return [];
    }
  }, items);
  let items1 = [closure_6(subscription(premiumTypeFromSubscription[22]), { premiumType: premiumTypeFromSubscription }), , ];
  let obj3 = { style: tmp.body, children: null };
  let obj4 = { variant: "heading-xl/extrabold", style: tmp.title, children: null };
  if (mode === obj8.CANCEL) {
    let intl2 = tmp2(tmp3[15]).intl;
    let stringResult = intl2.string(tmp2(tmp3[15]).t.PWq8TL);
  } else {
    let intl = tmp2(tmp3[15]).intl;
    stringResult = intl.string(tmp2(tmp3[15]).t["7VcWW0"]);
  }
  obj4.children = stringResult;
  let items2 = [closure_6(require("Text/Text").Text, obj4), , ];
  let obj5 = { variant: "text-md/medium", style: tmp.subtitle, children: null };
  if (mode === obj8.CANCEL) {
    let intl4 = tmp2(tmp3[15]).intl;
    let obj6 = { subscriptionName: tmp2(tmp3[10]).getPremiumTypeDisplayName(premiumTypeFromSubscription, true) };
    let formatResult = intl4.format(tmp2(tmp3[15]).t.jh5mUz, obj6);
    const tmp2Result = tmp2(tmp3[10]);
  } else {
    let intl3 = tmp2(tmp3[15]).intl;
    let obj7 = { subscriptionName: tmp2(tmp3[10]).getPremiumTypeDisplayName(premiumTypeFromSubscription, true) };
    formatResult = intl3.format(tmp2(tmp3[15]).t.Qk34Ik, obj7);
    const tmp2Result2 = tmp2(tmp3[10]);
  }
  obj8 = { children: null };
  obj5.children = formatResult;
  items2[1] = closure_6(require("Text/Text").Text, obj5);
  items2[2] = memo.map((item, index) => {
    const merged = Object.assign(item);
    return closure_1_6(closure_1_9, {}, index);
  });
  obj3.children = items2;
  items1[1] = closure_7(whatYouLoseProfileTier1Source, obj3);
  const obj9 = { style: tmp.footer, children: null };
  const obj10 = { style: tmp.button, children: null };
  const obj11 = { text: null, grow: true, onPress: null };
  let intl5 = tmp2(tmp3[15]).intl;
  obj11.text = intl5.string(require("util").t["3PatSz"]);
  obj11.onPress = function onPress() {
    _require(PremiumAnalyticsUtils.STEP_ANALYTICS_NAMES[PremiumAnalyticsUtils.CancellationFlowSteps.WHAT_YOU_LOSE]);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  obj10.children = closure_6(require("components/Button/Button").Button, obj11);
  const items3 = [closure_6(whatYouLoseProfileTier1Source, obj10), ];
  const obj12 = {
    variant: "text-sm/medium",
    style: tmp.keepText,
    onPress() {
      const obj = PremiumAnalyticsUtils;
      const result = obj.trackPremiumSubscriptionCancellationFlowStep({ subscription, analyticsLocations, fromStep: PremiumAnalyticsUtils.STEP_ANALYTICS_NAMES[PremiumAnalyticsUtils.CancellationFlowSteps.WHAT_YOU_LOSE], toStep: null });
      const obj2 = { subscription, analyticsLocations, fromStep: PremiumAnalyticsUtils.STEP_ANALYTICS_NAMES[PremiumAnalyticsUtils.CancellationFlowSteps.WHAT_YOU_LOSE], toStep: null };
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    children: null
  };
  let intl6 = tmp2(tmp3[15]).intl;
  obj12.children = intl6.string(require("util").t.rzVN6j);
  items3[1] = closure_6(require("Text/Text").Text, obj12);
  obj9.children = items3;
  items1[2] = closure_7(whatYouLoseProfileTier1Source, obj9);
  obj8.children = items1;
  return closure_7(require("Sheet/BottomSheet").BottomSheet, obj8);
});
export const WhatYouLoseMode = obj8;
