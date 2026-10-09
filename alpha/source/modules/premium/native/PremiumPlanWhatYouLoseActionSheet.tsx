// Module ID: 13593
// Function ID: 13594
// Name: PremiumPlanWhatYouLoseActionSheet
// Dependencies: [19, 17, 1392, 21, 5091, 587, 558, 576, 6163, 5087, 4728, 6848, 13594, 38, 13598, 1126, 13599, 12838, 13600, 13601, 5055, 10023, 7144, 5376, 6836, 2]

// Module 13593 (PremiumPlanWhatYouLoseActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl15 from "intl" /* 1126 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import FastImageDefault from "FastImage" /* 6163 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10023 */;
import AssetRegistryDefault from "AssetRegistry" /* 12838 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13598 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13599 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13600 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13601 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp;
const Text_Text = tmp(5087);
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function WhatYouLoseItem(arg0) {
  let imageSource;
  let items;
  let text;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(9);
  ({ imageSource, text } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] !== imageSource) {
    const obj2 = { source: imageSource };
    const tmp8 = metroRequire(FastImageDefault, obj2);
    cResult[0] = imageSource;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.itemLabel) {
    let tmp9;
    if (cResult[3] === text) {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp4.item) {
      if (cResult[6] === tmp5) {
        let tmp11;
        if (cResult[7] === tmp9) {
          tmp11 = cResult[8];
        }
        return tmp11;
      }
    }
    const obj3 = { style: tmp4.item, children: items };
    items = [tmp5, tmp9];
    const tmp14 = metroImportDefault(View, obj3);
    cResult[5] = tmp4.item;
    cResult[6] = tmp5;
    cResult[7] = tmp9;
    cResult[8] = tmp14;
    tmp11 = tmp14;
  }
  const obj4 = { variant: "text-md/medium", style: tmp4.itemLabel, children: text };
  const tmp10 = metroRequire(Text_Text.Text, obj4);
  cResult[2] = tmp4.itemLabel;
  cResult[3] = text;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : (function WhatYouLoseItem(arg0) {
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
});
let obj6 = { DOWNGRADE: 0, [0]: "DOWNGRADE", CANCEL: 1, [1]: "CANCEL" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumPlanWhatYouLoseActionSheet(subscription) {
  let analyticsLocations;
  let arr;
  let button;
  let footer;
  let intl;
  let intl2;
  let intl3;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items4;
  let items5;
  let items6;
  let mode;
  let onContinue;
  let tmp28;
  let tmp5;
  let tmpResult5;
  let tmpResult6;
  let tmp = onContinue;
  let obj = onContinue(analyticsLocations[7]);
  const cResult = obj.c(69);
  ({ mode, onContinue } = subscription);
  subscription = subscription.subscription;
  const tmp4 = closure_8();
  if (cResult[0] !== subscription) {
    const tmpResult = tmp(analyticsLocations[10]);
    const premiumTypeFromSubscription = tmpResult.getPremiumTypeFromSubscription(subscription);
    cResult[0] = subscription;
    cResult[1] = premiumTypeFromSubscription;
    tmp5 = premiumTypeFromSubscription;
  } else {
    tmp5 = cResult[1];
  }
  analyticsLocations = subscription(tmp2[11])().analyticsLocations;
  const tmpResult4 = tmp(analyticsLocations[12]);
  const whatYouLoseProfileTier1Source = tmpResult4.useWhatYouLoseProfileTier1Source();
  subscription(analyticsLocations[13])(null != tmp5, "Expected premium type");
  if (PremiumTypes.TIER_0 === tmp5) {
    let tmp25;
    let tmp26;
    const _Symbol8 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { imageSource: subscription(analyticsLocations[14]), text: intl7.format(tmp(analyticsLocations[15]).t["0hUHi6"], {}) };
      intl7 = tmp(tmp2[15]).intl;
      cResult[2] = obj2;
      tmp25 = obj2;
    } else {
      tmp25 = cResult[2];
    }
    const _Symbol9 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { imageSource: subscription(analyticsLocations[16]), text: intl8.format(tmp(analyticsLocations[15]).t.wFWO6D, {}) };
      intl8 = tmp(tmp2[15]).intl;
      cResult[3] = obj3;
      tmp26 = obj3;
    } else {
      tmp26 = cResult[3];
    }
    if (cResult[4] === tmp25) {
      let tmp27;
      if (cResult[5] === tmp26) {
        tmp27 = cResult[6];
      }
      arr = tmp27;
    }
    const items = [tmp25, tmp26];
    cResult[4] = tmp25;
    cResult[5] = tmp26;
    cResult[6] = items;
    tmp27 = items;
  } else if (PremiumTypes.TIER_1 === tmp5) {
    let tmp18;
    const _Symbol5 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = tmp(tmp2[15]).intl;
      const formatResult = intl4.format(tmp(analyticsLocations[15]).t.xCaYwE, {});
      cResult[7] = formatResult;
      tmp18 = formatResult;
    } else {
      tmp18 = cResult[7];
    }
    if (cResult[8] === tmp18) {
      let tmp20;
      let tmp21;
      let tmp22;
      if (cResult[9] === whatYouLoseProfileTier1Source) {
        tmp20 = cResult[10];
      }
      const _Symbol6 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { imageSource: subscription(analyticsLocations[17]), text: intl5.format(tmp(analyticsLocations[15]).t.wK04T1, {}) };
        intl5 = tmp(tmp2[15]).intl;
        cResult[11] = obj4;
        tmp21 = obj4;
      } else {
        tmp21 = cResult[11];
      }
      const _Symbol7 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { imageSource: subscription(analyticsLocations[18]), text: intl6.format(tmp(analyticsLocations[15]).t.K4Hv69, {}) };
        intl6 = tmp(tmp2[15]).intl;
        cResult[12] = obj5;
        tmp22 = obj5;
      } else {
        tmp22 = cResult[12];
      }
      if (cResult[13] === tmp20) {
        if (cResult[14] === tmp21) {
          let tmp23;
          if (cResult[15] === tmp22) {
            tmp23 = cResult[16];
          }
          arr = tmp23;
        }
      }
      const items1 = [tmp20, tmp21, tmp22];
      cResult[13] = tmp20;
      cResult[14] = tmp21;
      cResult[15] = tmp22;
      cResult[16] = items1;
      tmp23 = items1;
    }
    obj6 = { imageSource: whatYouLoseProfileTier1Source, text: tmp18 };
    cResult[8] = tmp18;
    cResult[9] = whatYouLoseProfileTier1Source;
    cResult[10] = obj6;
    tmp20 = obj6;
  } else if (PremiumTypes.TIER_2 === tmp5) {
    let tmp13;
    let tmp14;
    let tmp15;
    const _Symbol2 = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      const obj7 = { imageSource: subscription(analyticsLocations[19]), text: intl.format(tmp(analyticsLocations[15]).t["gpqr+n"], {}) };
      intl = tmp(tmp2[15]).intl;
      cResult[17] = obj7;
      tmp13 = obj7;
    } else {
      tmp13 = cResult[17];
    }
    const _Symbol3 = Symbol;
    if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
      const obj8 = { imageSource: subscription(analyticsLocations[18]), text: intl2.format(tmp(analyticsLocations[15]).t.wRxEDW, {}) };
      intl2 = tmp(tmp2[15]).intl;
      cResult[18] = obj8;
      tmp14 = obj8;
    } else {
      tmp14 = cResult[18];
    }
    const _Symbol4 = Symbol;
    if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
      const obj9 = { imageSource: subscription(analyticsLocations[17]), text: intl3.format(tmp(analyticsLocations[15]).t["4WZ7T2"], {}) };
      intl3 = tmp(tmp2[15]).intl;
      cResult[19] = obj9;
      tmp15 = obj9;
    } else {
      tmp15 = cResult[19];
    }
    if (cResult[20] === tmp13) {
      if (cResult[21] === tmp14) {
        let tmp16;
        if (cResult[22] === tmp15) {
          tmp16 = cResult[23];
        }
        arr = tmp16;
      }
    }
    const items2 = [tmp13, tmp14, tmp15];
    cResult[20] = tmp13;
    cResult[21] = tmp14;
    cResult[22] = tmp15;
    cResult[23] = items2;
    tmp16 = items2;
  } else {
    const _Symbol = Symbol;
    if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
      const items3 = [];
      cResult[24] = items3;
      arr = items3;
    } else {
      arr = cResult[24];
    }
  }
  if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
    function onClose() {
      const obj = subscription(analyticsLocations[20]);
      obj.hideActionSheet();
    }
    cResult[25] = onClose;
    tmp28 = onClose;
  } else {
    tmp28 = cResult[25];
  }
  let closure_3 = tmp28;
  if (cResult[26] === analyticsLocations) {
    let tmp29;
    let tmp30;
    let tmp31;
    let tmp34;
    if (cResult[27] === subscription) {
      tmp29 = cResult[28];
    }
    if (cResult[29] !== onContinue) {
      function onContinueDowngradeOrCancellation(arg0) {
        onContinue(arg0);
        closure_3();
      }
      cResult[29] = onContinue;
      cResult[30] = onContinueDowngradeOrCancellation;
      tmp30 = onContinueDowngradeOrCancellation;
    } else {
      tmp30 = cResult[30];
    }
    let closure_4 = tmp30;
    if (cResult[31] !== tmp5) {
      const obj10 = { premiumType: tmp5 };
      const tmp33 = closure_6(subscription(analyticsLocations[22]), obj10);
      cResult[31] = tmp5;
      cResult[32] = tmp33;
      tmp31 = tmp33;
    } else {
      tmp31 = cResult[32];
    }
    const body = tmp4.body;
    if (cResult[33] !== mode) {
      let stringResult;
      if (mode === obj6.CANCEL) {
        const intl10 = tmp(tmp2[15]).intl;
        stringResult = intl10.string(tmp(tmp2[15]).t.PWq8TL);
      } else {
        const intl9 = tmp(tmp2[15]).intl;
        stringResult = intl9.string(tmp(tmp2[15]).t["7VcWW0"]);
      }
      cResult[33] = mode;
      cResult[34] = stringResult;
      tmp34 = stringResult;
    } else {
      tmp34 = cResult[34];
    }
    if (cResult[35] === tmp4.title) {
      let tmp37;
      let format2Result;
      if (cResult[36] === tmp34) {
        tmp37 = cResult[37];
      }
      if (cResult[38] === mode) {
        let tmp40;
        if (cResult[39] === tmp5) {
          tmp40 = cResult[40];
        }
        if (cResult[41] === tmp4.subtitle) {
          let tmp43;
          let tmp46;
          if (cResult[42] === tmp40) {
            tmp43 = cResult[43];
          }
          if (cResult[44] !== arr) {
            const mapped = arr.map((item, index) => {
              const obj = {};
              const merged = Object.assign(item);
              return closure_1_6(closure_1_9, obj, index);
            });
            cResult[44] = arr;
            cResult[45] = mapped;
            tmp46 = mapped;
          } else {
            tmp46 = cResult[45];
          }
          if (cResult[46] === tmp4.body) {
            if (cResult[47] === tmp43) {
              if (cResult[48] === tmp46) {
                let tmp48;
                let tmp52;
                let tmp54;
                if (cResult[49] === tmp37) {
                  tmp48 = cResult[50];
                }
                const _Symbol10 = Symbol;
                ({ footer, button } = tmp4);
                if (cResult[51] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl13 = tmp(tmp2[15]).intl;
                  const stringResult1 = intl13.string(tmp(analyticsLocations[15]).t["3PatSz"]);
                  cResult[51] = stringResult1;
                  tmp52 = stringResult1;
                } else {
                  tmp52 = cResult[51];
                }
                if (cResult[52] !== tmp30) {
                  const obj11 = {
                    text: tmp52,
                    grow: true,
                    onPress() {
                                      closure_4(PremiumAnalyticsUtils.STEP_ANALYTICS_NAMES[PremiumAnalyticsUtils.CancellationFlowSteps.WHAT_YOU_LOSE]);
                                    }
                  };
                  const tmp56 = closure_6(tmp(analyticsLocations[23]).Button, obj11);
                  cResult[52] = tmp30;
                  cResult[53] = tmp56;
                  tmp54 = tmp56;
                } else {
                  tmp54 = cResult[53];
                }
                if (cResult[54] === tmp4.button) {
                  let tmp57;
                  let tmp61;
                  if (cResult[55] === tmp54) {
                    tmp57 = cResult[56];
                  }
                  const _Symbol11 = Symbol;
                  const keepText = tmp4.keepText;
                  if (cResult[57] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl14 = tmp(tmp2[15]).intl;
                    const stringResult2 = intl14.string(tmp(analyticsLocations[15]).t.rzVN6j);
                    cResult[57] = stringResult2;
                    tmp61 = stringResult2;
                  } else {
                    tmp61 = cResult[57];
                  }
                  if (cResult[58] === tmp29) {
                    let tmp63;
                    if (cResult[59] === tmp4.keepText) {
                      tmp63 = cResult[60];
                    }
                    if (cResult[61] === tmp4.footer) {
                      if (cResult[62] === tmp57) {
                        let tmp66;
                        if (cResult[63] === tmp63) {
                          tmp66 = cResult[64];
                        }
                        if (cResult[65] === tmp48) {
                          if (cResult[66] === tmp66) {
                            let tmp70;
                            if (cResult[67] === tmp31) {
                              tmp70 = cResult[68];
                            }
                            return tmp70;
                          }
                        }
                        const obj12 = { children: items4 };
                        items4 = [tmp31, tmp48, tmp66];
                        const tmp72 = closure_7(tmp(analyticsLocations[24]).BottomSheet, obj12);
                        cResult[65] = tmp48;
                        cResult[66] = tmp66;
                        cResult[67] = tmp31;
                        cResult[68] = tmp72;
                        tmp70 = tmp72;
                      }
                    }
                    const obj13 = { style: footer, children: items5 };
                    items5 = [tmp57, tmp63];
                    const tmp69 = closure_7(closure_4, obj13);
                    cResult[61] = tmp4.footer;
                    cResult[62] = tmp57;
                    cResult[63] = tmp63;
                    cResult[64] = tmp69;
                    tmp66 = tmp69;
                  }
                  const obj14 = { variant: "text-sm/medium", style: keepText, onPress: tmp29, children: tmp61 };
                  const tmp65 = closure_6(tmp(analyticsLocations[9]).Text, obj14);
                  cResult[58] = tmp29;
                  cResult[59] = tmp4.keepText;
                  cResult[60] = tmp65;
                  tmp63 = tmp65;
                }
                const obj15 = { style: button, children: tmp54 };
                const tmp60 = closure_6(closure_4, obj15);
                cResult[54] = tmp4.button;
                cResult[55] = tmp54;
                cResult[56] = tmp60;
                tmp57 = tmp60;
              }
            }
          }
          const obj16 = { style: body, children: items6 };
          items6 = [tmp37, tmp43, tmp46];
          const tmp51 = closure_7(closure_4, obj16);
          cResult[46] = tmp4.body;
          cResult[47] = tmp43;
          cResult[48] = tmp46;
          cResult[49] = tmp37;
          cResult[50] = tmp51;
          tmp48 = tmp51;
        }
        const obj17 = { variant: "text-md/medium", style: tmp4.subtitle, children: tmp40 };
        const tmp45 = closure_6(tmp(analyticsLocations[9]).Text, obj17);
        cResult[41] = tmp4.subtitle;
        cResult[42] = tmp40;
        cResult[43] = tmp45;
        tmp43 = tmp45;
      }
      if (mode === obj6.CANCEL) {
        const intl12 = tmp(tmp2[15]).intl;
        const format2 = intl12.format;
        const obj18 = { subscriptionName: tmpResult5.getPremiumTypeDisplayName(tmp5, true) };
        const jh5mUz = tmp(tmp2[15]).t.jh5mUz;
        tmpResult5 = tmp(analyticsLocations[10]);
        format2Result = format2(jh5mUz, obj18);
      } else {
        const intl11 = tmp(tmp2[15]).intl;
        const format = intl11.format;
        const obj19 = { subscriptionName: tmpResult6.getPremiumTypeDisplayName(tmp5, true) };
        const Qk34Ik = tmp(tmp2[15]).t.Qk34Ik;
        tmpResult6 = tmp(analyticsLocations[10]);
        format2Result = format(Qk34Ik, obj19);
      }
      cResult[38] = mode;
      cResult[39] = tmp5;
      cResult[40] = format2Result;
      tmp40 = format2Result;
    }
    const obj20 = { variant: "heading-xl/extrabold", style: tmp4.title, children: tmp34 };
    const tmp39 = closure_6(tmp(analyticsLocations[9]).Text, obj20);
    cResult[35] = tmp4.title;
    cResult[36] = tmp34;
    cResult[37] = tmp39;
    tmp37 = tmp39;
  }
  function onCloseWithTracking() {
    const trackPremiumSubscriptionCancellationFlowStep = PremiumAnalyticsUtils.trackPremiumSubscriptionCancellationFlowStep;
    const obj = { subscription, analyticsLocations, fromStep: PremiumAnalyticsUtils.STEP_ANALYTICS_NAMES[PremiumAnalyticsUtils.CancellationFlowSteps.WHAT_YOU_LOSE], toStep: null };
    const result = trackPremiumSubscriptionCancellationFlowStep(obj);
    closure_3();
  }
  cResult[26] = analyticsLocations;
  cResult[27] = subscription;
  cResult[28] = onCloseWithTracking;
  tmp29 = onCloseWithTracking;
}) : (function PremiumPlanWhatYouLoseActionSheet(arg0) {
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
  const analyticsLocations = subscription(premiumTypeFromSubscription[11])().analyticsLocations;
  let obj2 = require("WhatYouLoseProfileTier1");
  const whatYouLoseProfileTier1Source = obj2.useWhatYouLoseProfileTier1Source();
  subscription(premiumTypeFromSubscription[13])(null != premiumTypeFromSubscription, "Expected premium type");
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
      const obj2 = { imageSource: AssetRegistryDefault2, text: intl7.format(intl15.t["0hUHi6"], {}) };
      intl7 = intl15.intl;
      const items = [obj2, ];
      const obj3 = { imageSource: AssetRegistryDefault3, text: intl8.format(intl15.t.wFWO6D, {}) };
      intl8 = intl15.intl;
      items[1] = obj3;
      return items;
    } else if (PremiumTypes.TIER_1 === premiumTypeFromSubscription) {
      const obj4 = { imageSource: whatYouLoseProfileTier1Source, text: intl4.format(intl15.t.xCaYwE, {}) };
      intl4 = intl15.intl;
      const items1 = [obj4, , ];
      const obj5 = { imageSource: AssetRegistryDefault, text: intl5.format(intl15.t.wK04T1, {}) };
      intl5 = intl15.intl;
      items1[1] = obj5;
      obj6 = { imageSource: AssetRegistryDefault4, text: intl6.format(intl15.t.K4Hv69, {}) };
      intl6 = intl15.intl;
      items1[2] = obj6;
      return items1;
    } else if (PremiumTypes.TIER_2 === premiumTypeFromSubscription) {
      const obj = { imageSource: AssetRegistryDefault5, text: intl.format(intl15.t["gpqr+n"], {}) };
      intl = intl15.intl;
      const items2 = [obj, , ];
      const obj7 = { imageSource: AssetRegistryDefault4, text: intl2.format(intl15.t.wRxEDW, {}) };
      intl2 = intl15.intl;
      items2[1] = obj7;
      const obj8 = { imageSource: AssetRegistryDefault, text: intl3.format(intl15.t["4WZ7T2"], {}) };
      intl3 = intl15.intl;
      items2[2] = obj8;
      return items2;
    } else {
      return [];
    }
  }, items);
  BottomSheet = require("Sheet/BottomSheet").BottomSheet;
  let items1 = [closure_6(subscription(premiumTypeFromSubscription[22]), { premiumType: premiumTypeFromSubscription }), , ];
  let obj3 = { style: tmp.body, children: items2 };
  let obj4 = { variant: "heading-xl/extrabold", style: tmp.title, children: stringResult };
  const Text = require("Text/Text").Text;
  const tmp10 = obj6;
  if (mode === obj6.CANCEL) {
    let intl2 = tmp2(tmp3[15]).intl;
    stringResult = intl2.string(tmp2(tmp3[15]).t.PWq8TL);
  } else {
    let intl = tmp2(tmp3[15]).intl;
    stringResult = intl.string(tmp2(tmp3[15]).t["7VcWW0"]);
  }
  items2 = [tmp8(Text, obj4), , ];
  let obj5 = { variant: "text-md/medium", style: tmp.subtitle, children: format2Result };
  const Text2 = tmp2(tmp3[9]).Text;
  if (mode === tmp10.CANCEL) {
    let intl4 = tmp2(tmp3[15]).intl;
    const format2 = intl4.format;
    obj6 = { subscriptionName: tmp2Result.getPremiumTypeDisplayName(premiumTypeFromSubscription, true) };
    const jh5mUz = tmp2(tmp3[15]).t.jh5mUz;
    tmp2Result = require("PremiumUtils");
    format2Result = format2(jh5mUz, obj6);
  } else {
    let intl3 = tmp2(tmp3[15]).intl;
    const format = intl3.format;
    let obj7 = { subscriptionName: tmp2Result2.getPremiumTypeDisplayName(premiumTypeFromSubscription, true) };
    const Qk34Ik = tmp2(tmp3[15]).t.Qk34Ik;
    tmp2Result2 = require("PremiumUtils");
    format2Result = format(Qk34Ik, obj7);
  }
  let obj8 = { children: items1 };
  items2[1] = closure_6(Text2, obj5);
  items2[2] = memo.map((item, index) => {
    const obj = {};
    const merged = Object.assign(item);
    return closure_1_6(closure_1_9, obj, index);
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
  Button = tmp2(tmp3[23]).Button;
  intl5 = tmp2(tmp3[15]).intl;
  items3 = [tmp8(tmp9, obj10), ];
  const obj12 = {
    variant: "text-sm/medium",
    style: tmp.keepText,
    onPress: function onCloseWithTracking() {
      const trackPremiumSubscriptionCancellationFlowStep = PremiumAnalyticsUtils.trackPremiumSubscriptionCancellationFlowStep;
      const obj = { subscription, analyticsLocations, fromStep: PremiumAnalyticsUtils.STEP_ANALYTICS_NAMES[PremiumAnalyticsUtils.CancellationFlowSteps.WHAT_YOU_LOSE], toStep: null };
      const result = trackPremiumSubscriptionCancellationFlowStep(obj);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    },
    children: intl6.string(require("intl").t.rzVN6j)
  };
  const Text3 = tmp2(tmp3[9]).Text;
  intl6 = tmp2(tmp3[15]).intl;
  items3[1] = closure_6(Text3, obj12);
  items1[2] = closure_7(whatYouLoseProfileTier1Source, obj9);
  return closure_7(BottomSheet, obj8);
});
let result = size.fileFinishedImporting("modules/premium/native/PremiumPlanWhatYouLoseActionSheet.tsx");

export default tmp4;
export const WhatYouLoseMode = obj6;
