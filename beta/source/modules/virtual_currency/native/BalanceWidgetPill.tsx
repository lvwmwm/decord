// Module ID: 11476
// Function ID: 11477
// Name: virtual_currency/BalanceWidgetPill
// Dependencies: [19, 17, 21, 4758, 5193, 580, 1368, 558, 568, 11477, 1119, 11478, 11483, 11484, 2]

// Module 11476 (virtual_currency/BalanceWidgetPill)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import useVirtualCurrencyBalanceAnimationData from "useVirtualCurrencyBalanceAnimationData" /* 11477 */;
import OrbLottieAnimation from "OrbLottieAnimation" /* 11478 */;
import BalanceCounter from "BalanceCounter" /* 11483 */;
import AnimationUtils from "AnimationUtils" /* 11484 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { container: { minHeight: fn(5193).SMALL_BUTTON_HEIGHT, borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center", flexDirection: "row", paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, gap: 4 }, orbsLottieContainer: { position: "relative", height: 18, width: 18, justifyContent: "center", alignItems: "center" }, balanceCounterContainer: { justifyContent: "center", alignItems: "flex-end" }, balanceText: null };
let obj4 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, textAlign: "right", lineHeight: null };
const PlatformUtils = fn(1368);
let num;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
obj4.lineHeight = num;
obj2.balanceText = obj4;
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(31);
  ({ initialRenderedBalance, balance, style } = arg0);
  let tmp4 = null;
  if (undefined !== initialRenderedBalance) {
    tmp4 = initialRenderedBalance;
  }
  if (cResult[0] === balance) {
    if (cResult[1] === tmp4) {
      let tmp6 = cResult[2];
    }
    const virtualCurrencyBalanceAnimationData = tmp(11477).useVirtualCurrencyBalanceAnimationData(tmp6);
    ({ onValueChange, onValueReached, currentAnimationType, lottieRef } = virtualCurrencyBalanceAnimationData);
    const tmp9 = closure_5();
    if (cResult[3] === style) {
      if (cResult[4] === tmp9.container) {
        let tmp10 = cResult[5];
      }
      if (cResult[6] === balance) {
        if (cResult[7] === tmp5) {
          if (cResult[9] !== tmp5) {
            const obj2 = { busy: tmp5 };
            cResult[9] = tmp5;
            cResult[10] = obj2;
            let tmp14 = obj2;
          } else {
            tmp14 = cResult[10];
          }
          if (cResult[11] === currentAnimationType) {
            if (cResult[12] === lottieRef) {
              let tmp15 = cResult[13];
            }
            if (cResult[14] === tmp9.orbsLottieContainer) {
              if (cResult[15] === tmp15) {
                let tmp18 = cResult[16];
              }
              if (virtualCurrencyBalanceAnimationData.showInitialRenderedBalance) {
                balance = tmp4;
              }
              if (cResult[17] === onValueChange) {
                if (cResult[18] === onValueReached) {
                  if (cResult[19] === tmp9.balanceText) {
                    if (cResult[20] === balance) {
                      let tmp22 = cResult[21];
                    }
                    if (cResult[22] === tmp9.balanceCounterContainer) {
                      if (cResult[23] === tmp22) {
                        let tmp25 = cResult[24];
                      }
                      if (cResult[25] === tmp25) {
                        if (cResult[26] === tmp10) {
                          if (cResult[27] === tmp11) {
                            if (cResult[28] === tmp14) {
                              if (cResult[29] === tmp18) {
                                let tmp29 = cResult[30];
                              }
                              return tmp29;
                            }
                          }
                        }
                      }
                      const obj3 = { style: tmp10, accessibilityLabel: tmp11, accessibilityState: tmp14, accessible: true, children: null };
                      const items = [tmp18, tmp25];
                      obj3.children = items;
                      const tmp32 = React4(View, obj3);
                      cResult[25] = tmp25;
                      cResult[26] = tmp10;
                      cResult[27] = tmp11;
                      cResult[28] = tmp14;
                      cResult[29] = tmp18;
                      cResult[30] = tmp32;
                      tmp29 = tmp32;
                    }
                    const obj4 = { style: tmp9.balanceCounterContainer, children: tmp22 };
                    const tmp28 = React3(View, obj4);
                    cResult[22] = tmp9.balanceCounterContainer;
                    cResult[23] = tmp22;
                    cResult[24] = tmp28;
                    tmp25 = tmp28;
                  }
                }
              }
              const obj5 = { value: balance, onValueChange, onValueReached, targetTotalCounterTime: tmp(11484).EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS, style: tmp9.balanceText };
              const tmp24 = React3(tmp(11483).BalanceCounter, obj5);
              cResult[17] = onValueChange;
              cResult[18] = onValueReached;
              cResult[19] = tmp9.balanceText;
              cResult[20] = balance;
              cResult[21] = tmp24;
              tmp22 = tmp24;
            }
            const obj6 = { style: tmp9.orbsLottieContainer, children: tmp15 };
            const tmp21 = React3(View, obj6);
            cResult[14] = tmp9.orbsLottieContainer;
            cResult[15] = tmp15;
            cResult[16] = tmp21;
            tmp18 = tmp21;
          }
          const obj7 = { ref: lottieRef, animationType: currentAnimationType };
          const tmp17 = React3(tmp(11478).OrbLottieAnimation, obj7);
          cResult[11] = currentAnimationType;
          cResult[12] = lottieRef;
          cResult[13] = tmp17;
          tmp15 = tmp17;
        }
      }
      const intl = tmp(1119).intl;
      if (tmp5) {
        let stringResult = intl.string(tmp(1119).t.y0WGqP);
      } else {
        const obj8 = { balance };
        stringResult = intl.formatToPlainString(tmp(1119).t.zPaLL9, obj8);
      }
      cResult[6] = balance;
      cResult[7] = tmp5;
      cResult[8] = stringResult;
    }
    const items1 = [tmp9.container, style];
    cResult[3] = style;
    cResult[4] = tmp9.container;
    cResult[5] = items1;
    tmp10 = items1;
    const tmpResult = tmp(11477);
  }
  const obj9 = { initialRenderedBalance: tmp4, balance };
  cResult[0] = balance;
  cResult[1] = tmp4;
  cResult[2] = obj9;
  tmp6 = obj9;
}) : ((initialRenderedBalance) => {
  let prop = initialRenderedBalance.initialRenderedBalance;
  if (prop === undefined) {
    prop = null;
  }
  let balance = initialRenderedBalance.balance;
  let tmp2 = null === prop;
  if (tmp2) {
    tmp2 = null === balance;
  }
  const virtualCurrencyBalanceAnimationData = useVirtualCurrencyBalanceAnimationData.useVirtualCurrencyBalanceAnimationData({ initialRenderedBalance: prop, balance });
  ({ onValueChange, onValueReached, showInitialRenderedBalance, currentAnimationType, lottieRef } = virtualCurrencyBalanceAnimationData);
  const tmp6 = closure_5();
  const obj2 = { style: null, accessibilityLabel: null, accessibilityState: null, accessible: true, children: null };
  const items = [tmp6.container, initialRenderedBalance.style];
  obj2.style = items;
  const intl = util.intl;
  if (tmp2) {
    let stringResult = intl.string(tmp3(1119).t.y0WGqP);
  } else {
    const obj3 = { balance };
    stringResult = intl.formatToPlainString(tmp3(1119).t.zPaLL9, obj3);
  }
  obj2.accessibilityLabel = stringResult;
  obj2.accessibilityState = { busy: tmp2 };
  const tmp7 = React4;
  const items1 = [React3(View, { style: tmp6.orbsLottieContainer, children: React3(OrbLottieAnimation.OrbLottieAnimation, { ref: lottieRef, animationType: currentAnimationType }) }), ];
  const obj5 = { style: tmp6.balanceCounterContainer, children: null };
  if (showInitialRenderedBalance) {
    balance = prop;
  }
  const obj4 = { style: tmp6.orbsLottieContainer, children: React3(OrbLottieAnimation.OrbLottieAnimation, { ref: lottieRef, animationType: currentAnimationType }) };
  obj5.children = React3(BalanceCounter.BalanceCounter, { value: balance, onValueChange, onValueReached, targetTotalCounterTime: AnimationUtils.EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS, style: tmp6.balanceText });
  items1[1] = React3(View, obj5);
  obj2.children = items1;
  return tmp7(View, obj2);
});
tmp4.displayName = "BalanceWidgetPill";
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetPill.tsx");

export default tmp4;
export const BalanceWidgetPill = tmp4;
