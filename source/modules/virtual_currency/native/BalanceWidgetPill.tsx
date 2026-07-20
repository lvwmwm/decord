// Module ID: 9774
// Function ID: 75993
// Name: BalanceWidgetPill
// Dependencies: []

// Module 9774 (BalanceWidgetPill)
class BalanceWidgetPill {
  constructor(arg0) {
    prop = global.initialRenderedBalance;
    if (prop === undefined) {
      prop = null;
    }
    balance = global.balance;
    tmp2 = null === prop && null === balance;
    obj = arg1(dependencyMap[7]);
    obj = {};
    obj.initialRenderedBalance = prop;
    obj.balance = balance;
    virtualCurrencyBalanceAnimationData = obj.useVirtualCurrencyBalanceAnimationData(obj);
    ({ onValueChange, onValueReached, showInitialRenderedBalance, currentAnimationType, lottieRef } = virtualCurrencyBalanceAnimationData);
    tmp4 = closure_5();
    obj1 = { style: tmp4.container };
    tmp7 = arg1;
    tmp8 = dependencyMap;
    tmp5 = jsxs;
    tmp6 = View;
    intl = arg1(dependencyMap[8]).intl;
    if (tmp2) {
      stringResult = intl.string(tmp7(tmp8[8]).t.y0WGqP);
    } else {
      obj2 = {};
      obj2.balance = balance;
      stringResult = intl.formatToPlainString(tmp7(tmp8[8]).t.zPaLL9, obj2);
    }
    obj1.accessibilityLabel = stringResult;
    obj1.accessibilityState = { busy: tmp2 };
    obj1.accessible = true;
    obj3 = { style: tmp4.orbsLottieContainer, children: jsx(arg1(dependencyMap[9]).OrbLottieAnimation, { ref: lottieRef, animationType: currentAnimationType }) };
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
    obj5.targetTotalCounterTime = arg1(dependencyMap[11]).EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS;
    obj5.style = tmp4.balanceText;
    obj4.children = tmp12(arg1(dependencyMap[10]).BalanceCounter, obj5);
    items[1] = tmp10(tmp11, obj4);
    obj1.children = items;
    return tmp5(tmp6, obj1);
  }
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { "Bool(false)": "d\u01B0\u1EDBi 1 ph\u00FAt", "Bool(false)": "d\u01B0\u1EDBi {{count}} ph\u00FAt", "Bool(false)": "1 ph\u00FAt", "Bool(false)": "{{count}} ph\u00FAt", "Bool(false)": "kho\u1EA3ng 1 gi\u1EDD", minHeight: arg1(dependencyMap[4]).SMALL_BUTTON_HEIGHT, borderRadius: importDefault(dependencyMap[5]).radii.round, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_12, paddingVertical: importDefault(dependencyMap[5]).space.PX_4, backgroundColor: importDefault(dependencyMap[5]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, gap: 4 };
obj.container = obj;
obj.orbsLottieContainer = {};
obj.balanceCounterContainer = { IS_MEDIA_CHANNEL: 22, SUMMARIES_DISABLED: 22 };
const obj1 = { color: importDefault(dependencyMap[5]).colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, textAlign: "right" };
const tmp3 = arg1(dependencyMap[2]);
let num;
if (obj5.isAndroid()) {
  num = 14;
}
obj1.lineHeight = num;
obj.balanceText = obj1;
let closure_5 = obj.createStyles(obj);
BalanceWidgetPill.displayName = "BalanceWidgetPill";
const obj5 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetPill.tsx");

export default BalanceWidgetPill;
export { BalanceWidgetPill };
