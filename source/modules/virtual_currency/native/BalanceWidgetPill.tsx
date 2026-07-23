// Module ID: 9787
// Function ID: 76074
// Name: BalanceWidgetPill
// Dependencies: [31, 27, 33, 4130, 4547, 689, 477, 9788, 1212, 9789, 9795, 9796, 2]

// Module 9787 (BalanceWidgetPill)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
class BalanceWidgetPill {
  constructor(arg0) {
    prop = global.initialRenderedBalance;
    if (prop === undefined) {
      prop = null;
    }
    balance = global.balance;
    tmp2 = null === prop && null === balance;
    obj = require("useVirtualCurrencyBalanceAnimationData");
    obj = {};
    obj.initialRenderedBalance = prop;
    obj.balance = balance;
    virtualCurrencyBalanceAnimationData = obj.useVirtualCurrencyBalanceAnimationData(obj);
    ({ onValueChange, onValueReached, showInitialRenderedBalance, currentAnimationType, lottieRef } = virtualCurrencyBalanceAnimationData);
    tmp4 = c5();
    obj1 = { style: tmp4.container };
    tmp7 = closure_0;
    tmp8 = closure_1;
    tmp5 = jsxs;
    tmp6 = View;
    intl = require("getSystemLocale").intl;
    if (tmp2) {
      stringResult = intl.string(require("getSystemLocale").t.y0WGqP);
    } else {
      obj2 = {};
      obj2.balance = balance;
      stringResult = intl.formatToPlainString(require("getSystemLocale").t.zPaLL9, obj2);
    }
    obj1.accessibilityLabel = stringResult;
    obj1.accessibilityState = { busy: tmp2 };
    obj1.accessible = true;
    obj3 = { style: tmp4.orbsLottieContainer, children: jsx(require("OrbLottieAnimation").OrbLottieAnimation, { ref: lottieRef, animationType: currentAnimationType }) };
    items = [, ];
    items[0] = jsx(View, obj3);
    obj4 = { style: tmp4.balanceCounterContainer };
    tmp10 = jsx;
    tmp11 = View;
    tmp12 = jsx;
    obj5 = {};
    if (showInitialRenderedBalance) {
      balance = prop;
    }
    obj5.value = balance;
    obj5.onValueChange = onValueChange;
    obj5.onValueReached = onValueReached;
    obj5.targetTotalCounterTime = require("EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS").EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS;
    obj5.style = tmp4.balanceText;
    obj4.children = tmp12(require("BalanceCounter").BalanceCounter, obj5);
    items[1] = tmp10(tmp11, obj4);
    obj1.children = items;
    return tmp5(tmp6, obj1);
  }
}
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { minHeight: require("getButtonPadding").SMALL_BUTTON_HEIGHT, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, justifyContent: "center", alignItems: "center", flexDirection: "row", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4, backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, gap: 4 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.orbsLottieContainer = { position: "relative", height: 18, width: 18, justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.balanceCounterContainer = { justifyContent: "center", alignItems: "flex-end" };
let obj1 = { color: require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, textAlign: "right" };
let num;
if (set.isAndroid()) {
  num = 14;
}
obj1.lineHeight = num;
_createForOfIteratorHelperLoose.balanceText = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
BalanceWidgetPill.displayName = "BalanceWidgetPill";
const result = set.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetPill.tsx");

export default BalanceWidgetPill;
export { BalanceWidgetPill };
