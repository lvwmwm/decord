// Module ID: 14411
// Function ID: 14412
// Name: PremiumGiftDuration
// Dependencies: [19, 17, 1386, 21, 5009, 575, 10542, 6969, 8171, 10601, 5077, 5619, 1114, 2]
// Exports: default

// Module 14411 (PremiumGiftDuration)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import react_native2 from "react-native" /* 5077 */;
import Text_Text from "Text/Text" /* 5619 */;
import NativeGiftContext from "NativeGiftContext" /* 10542 */;
import usePremiumProductPricingStringDefault from "usePremiumProductPricingString" /* 10601 */;
import react from "react" /* 19 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let SubscriptionIntervalTypes;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj6;
let obj7;
function PremiumGiftDurationButton(arg0) {
  let RowButton;
  let Text2;
  let accessibilityRole;
  let accessibilityState;
  let items1;
  let obj5;
  let obj7;
  let planInterval;
  let selected;
  let str3;
  let stringResult;
  ({ selected, planInterval } = arg0);
  const obj = NativeGiftContext;
  const nativeGiftContext = obj.useNativeGiftContext();
  const setPlanInterval = nativeGiftContext.setPlanInterval;
  const premiumType = nativeGiftContext.premiumType;
  const tmp4 = closure_9();
  if (selected) {
    RowButton = tmp(6969).TableRow;
  } else {
    RowButton = tmp(8171).RowButton;
  }
  let combined = null;
  const tmp5 = SubscriptionIntervalTypes;
  if (planInterval === SubscriptionIntervalTypes.YEAR) {
    const _HermesInternal = HermesInternal;
    combined = "" + React3 + "%";
  }
  const tmp9 = usePremiumProductPricingStringDefault(premiumType, planInterval);
  const tmpResult = react_native2;
  const radioA11yNative = tmpResult.useRadioA11yNative({ selected });
  items = [tmp4.container, ];
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (selected) {
    selected = tmp4.containerSelected;
  }
  items[1] = selected;
  const obj2 = { style: items, children: metroRequire(RowButton, obj7) };
  const obj3 = { style: tmp4.labelContainer, children: items1 };
  const Text = tmp(5619).Text;
  const tmp13 = metroImportDefault;
  if (planInterval === tmp5.MONTH) {
    const intl2 = tmp(1114).intl;
    stringResult = intl2.string(tmp(1114).t.Mh9bTt);
  } else {
    const intl = tmp(1114).intl;
    stringResult = intl.string(tmp(1114).t.DRgqMo);
  }
  items1 = [metroRequire(Text, { variant: "text-md/semibold", children: stringResult }), ];
  let tmp11Result = null != combined;
  if (tmp11Result) {
    const obj4 = { style: tmp4.labelPromo, children: metroRequire(Text2, obj5) };
    obj5 = { variant: "text-md/bold", color: "text-overlay-light", children: str3.toUpperCase() };
    Text2 = tmp(5619).Text;
    const intl3 = tmp(1114).intl;
    const obj6 = { discount: combined };
    str3 = intl3.formatToPlainString(intl4.t.IAybsG, obj6);
    tmp11Result = tmp11(tmp12, obj4);
  }
  items1[1] = tmp11Result;
  obj7 = {
    label: tmp13(View, obj3),
    trailing: metroRequire(Text_Text.Text, { variant: "text-md/semibold", children: tmp9 }),
    onPress() {
      setPlanInterval(planInterval);
    },
    arrow: false,
    accessibilityRole,
    accessibilityState,
    start: true,
    end: true
  };
  return metroRequire(View, obj2);
}
const View = react_native.View;
({ PREMIUM_YEARLY_DISCOUNT_PERCENT: closure_4, SubscriptionIntervalTypes } = PremiumConstants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let items = [, ];
({ YEAR: arr[0], MONTH: arr[1] } = SubscriptionIntervalTypes);
let createStyles = createStyles_mod;
let obj = { container: obj2, containerSelected: obj3, labelContainer: { flexDirection: "row" }, labelPromo: obj4 };
obj2 = { marginTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.lg, borderWidth: 2 };
obj4 = { marginStart: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
let closure_9 = createStyles(obj);
createStyles = createStyles_mod;
let obj5 = { durationContainer: obj6, durationTitle: obj7 };
obj6 = { marginHorizontal: nativeDefault.space.PX_16 };
const createStyles2 = createStyles.createStyles;
obj7 = { marginTop: nativeDefault.space.PX_24 };
let closure_11 = createStyles2(obj5);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftDuration.tsx");

export default function PremiumGiftDuration() {
  let intl;
  let planInterval;
  const tmp = closure_11();
  let obj = planInterval(10542);
  planInterval = obj.useNativeGiftContext().planInterval;
  const obj2 = { style: tmp.durationContainer, children: items };
  const obj3 = { style: tmp.durationTitle, variant: "text-sm/semibold", children: intl.string(planInterval(1114).t["8XT6Nf"]) };
  const Text = planInterval(5619).Text;
  intl = planInterval(1114).intl;
  items = [closure_6(Text, obj3), ];
  items[1] = items.map((planInterval, index) => {
    const obj = { selected: planInterval === planInterval, planInterval };
    return metroRequire(PremiumGiftDurationButton, obj, index);
  });
  return closure_7(View, obj2);
};
