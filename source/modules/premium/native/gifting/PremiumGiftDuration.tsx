// Module ID: 9796
// Function ID: 76140
// Name: PremiumGiftDurationButton
// Dependencies: [31, 27, 1851, 33, 4130, 689, 8848, 5165, 7639, 9723, 3848, 4126, 1212, 8849, 5450, 2]
// Exports: default

// Module 9796 (PremiumGiftDurationButton)
import result from "result";
import { View } from "get ActivityIndicator";
import GuildFeatures from "GuildFeatures";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let SubscriptionIntervalTypes;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
function PremiumGiftDurationButton(arg0) {
  let accessibilityRole;
  let accessibilityState;
  let planInterval;
  let selected;
  ({ selected, planInterval } = arg0);
  let obj = planInterval(8848);
  const nativeGiftContext = obj.useNativeGiftContext();
  const setPlanInterval = nativeGiftContext.setPlanInterval;
  const tmp2 = _createForOfIteratorHelperLoose();
  if (selected) {
    let RowButton = tmp3(5165).TableRow;
  } else {
    RowButton = tmp3(7639).RowButton;
  }
  let combined = null;
  if (planInterval === SubscriptionIntervalTypes.YEAR) {
    const _HermesInternal = HermesInternal;
    combined = "" + closure_5 + "%";
  }
  let obj1 = planInterval(3848);
  obj = { selected };
  const radioA11yNative = obj1.useRadioA11yNative(obj);
  obj = {};
  const items = [tmp2.container, ];
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (selected) {
    selected = tmp2.containerSelected;
  }
  items[1] = selected;
  obj.style = items;
  obj1 = {};
  const obj2 = { style: tmp2.labelContainer };
  const obj3 = { variant: "text-md/semibold" };
  if (planInterval === SubscriptionIntervalTypes.MONTH) {
    const intl2 = planInterval(1212).intl;
    let stringResult = intl2.string(planInterval(1212).t.Mh9bTt);
  } else {
    const intl = planInterval(1212).intl;
    stringResult = intl.string(planInterval(1212).t.DRgqMo);
  }
  obj3.children = stringResult;
  const items1 = [callback(planInterval(4126).Text, obj3), ];
  let tmp21 = null != combined;
  if (tmp21) {
    const obj4 = { style: tmp2.labelPromo };
    const obj5 = { variant: "text-md/bold", color: "text-overlay-light" };
    const intl3 = planInterval(1212).intl;
    const obj6 = { discount: combined };
    obj5.children = intl3.formatToPlainString(planInterval(1212).t.IAybsG, obj6).toUpperCase();
    obj4.children = callback(planInterval(4126).Text, obj5);
    tmp21 = callback(View, obj4);
    const str3 = intl3.formatToPlainString(planInterval(1212).t.IAybsG, obj6);
  }
  items1[1] = tmp21;
  obj2.children = items1;
  obj1.label = closure_8(View, obj2);
  obj1.trailing = callback(planInterval(4126).Text, { variant: "text-md/semibold", children: setPlanInterval(9723)(nativeGiftContext.premiumType, planInterval) });
  obj1.onPress = function onPress() {
    setPlanInterval(planInterval);
  };
  obj1.arrow = false;
  obj1.accessibilityRole = accessibilityRole;
  obj1.accessibilityState = accessibilityState;
  obj1.start = true;
  obj1.end = true;
  obj.children = callback(RowButton, obj1);
  return callback(View, obj);
}
({ PREMIUM_YEARLY_DISCOUNT_PERCENT: closure_5, SubscriptionIntervalTypes } = GuildFeatures);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let items = [, ];
({ YEAR: arr[0], MONTH: arr[1] } = SubscriptionIntervalTypes);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.containerSelected = { borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderWidth: 2 };
_createForOfIteratorHelperLoose.labelContainer = { flexDirection: "row" };
let obj1 = { borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderWidth: 2 };
_createForOfIteratorHelperLoose.labelPromo = { marginStart: require("_createForOfIteratorHelperLoose").space.PX_8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.STATUS_POSITIVE_BACKGROUND, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = {};
let obj2 = { marginStart: require("_createForOfIteratorHelperLoose").space.PX_8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.STATUS_POSITIVE_BACKGROUND, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
obj3.durationContainer = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
obj3.durationTitle = _createForOfIteratorHelperLoose;
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj3);
let obj4 = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("GuildFeatures").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftDuration.tsx");

export default function PremiumGiftDuration() {
  const tmp = callback3();
  let obj = planInterval(8848);
  planInterval = obj.useNativeGiftContext().planInterval;
  const tmp2 = importDefault(5450)(importDefault(8849).useConfig({ location: "PremiumGiftDuration" }).monthlyDefaultSelected);
  importDefault = tmp2;
  let items = [tmp2];
  const memo = React.useMemo(() => {
    if (closure_1) {
      const items = [];
      HermesBuiltin.arraySpread(tmp, 0);
      let reversed = items.reverse();
    } else {
      reversed = tmp;
    }
    return reversed;
  }, items);
  obj = { style: tmp.durationContainer };
  obj = { style: tmp.durationTitle, variant: "text-sm/semibold" };
  const intl = planInterval(1212).intl;
  obj.children = intl.string(planInterval(1212).t["8XT6Nf"]);
  const items1 = [callback(planInterval(4126).Text, obj), memo.map((planInterval) => outer1_7(outer1_12, { selected: planInterval === planInterval, planInterval }, arg1))];
  obj.children = items1;
  return callback2(View, obj);
};
