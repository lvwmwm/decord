// Module ID: 14488
// Function ID: 14489
// Name: virtual_currency/BalanceWidgetPill
// Dependencies: [19, 17, 21, 5014, 5640, 575, 1375, 14489, 1113, 14490, 14495, 14496, 2]

// Module 14488 (virtual_currency/BalanceWidgetPill)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import ButtonConstants from "ButtonConstants" /* 5640 */;
import useVirtualCurrencyBalanceAnimationData from "useVirtualCurrencyBalanceAnimationData" /* 14489 */;
import OrbLottieAnimation from "OrbLottieAnimation" /* 14490 */;
import AnimationUtils from "AnimationUtils" /* 14496 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let num;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, orbsLottieContainer: { position: "relative", height: 18, width: 18, justifyContent: "center", alignItems: "center" }, balanceCounterContainer: { justifyContent: "center", alignItems: "flex-end" }, balanceText: obj3 };
obj2 = { minHeight: ButtonConstants.SMALL_BUTTON_HEIGHT, borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center", flexDirection: "row", paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, gap: 4 };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, textAlign: "right", lineHeight: num };
num = undefined;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
class BalanceWidgetPill {
  constructor(initialRenderedBalance) {
    let BalanceCounter;
    let currentAnimationType;
    let items;
    let items1;
    let lottieRef;
    let obj6;
    let onValueChange;
    let onValueReached;
    let showInitialRenderedBalance;
    let stringResult;
    let prop = initialRenderedBalance.initialRenderedBalance;
    if (prop === undefined) {
      prop = null;
    }
    let balance = initialRenderedBalance.balance;
    let tmp2 = null === prop;
    const style = initialRenderedBalance.style;
    if (tmp2) {
      tmp2 = null === balance;
    }
    const obj = useVirtualCurrencyBalanceAnimationData;
    const virtualCurrencyBalanceAnimationData = obj.useVirtualCurrencyBalanceAnimationData({ initialRenderedBalance: prop, balance });
    ({ onValueChange, onValueReached, showInitialRenderedBalance, currentAnimationType, lottieRef } = virtualCurrencyBalanceAnimationData);
    const tmp6 = closure_5();
    const obj2 = { style: items, accessibilityLabel: stringResult, accessibilityState: { busy: tmp2 }, accessible: true, children: items1 };
    items = [tmp6.container, style];
    const intl = intl2.intl;
    const tmp7 = React3;
    if (tmp2) {
      stringResult = intl.string(tmp3(1113).t.y0WGqP);
    } else {
      const obj3 = { balance };
      stringResult = intl.formatToPlainString(tmp3(1113).t.zPaLL9, obj3);
    }
    items1 = [, ];
    const obj4 = { style: tmp6.orbsLottieContainer, children: _false(OrbLottieAnimation.OrbLottieAnimation, { ref: lottieRef, animationType: currentAnimationType }) };
    items1[0] = _false(View, obj4);
    const obj5 = { style: tmp6.balanceCounterContainer, children: _false(BalanceCounter, obj6) };
    BalanceCounter = tmp3(14495).BalanceCounter;
    if (showInitialRenderedBalance) {
      balance = prop;
    }
    obj6 = { value: balance, onValueChange, onValueReached, targetTotalCounterTime: AnimationUtils.EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS, style: tmp6.balanceText };
    items1[1] = _false(View, obj5);
    return tmp7(View, obj2);
  }
}
const hasOwnProperty = createStyles(obj);
BalanceWidgetPill.displayName = "BalanceWidgetPill";
const result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetPill.tsx");

export default BalanceWidgetPill;
export { BalanceWidgetPill };
