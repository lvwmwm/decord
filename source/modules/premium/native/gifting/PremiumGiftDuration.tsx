// Module ID: 9756
// Function ID: 75892
// Name: PremiumGiftDurationButton
// Dependencies: []
// Exports: default

// Module 9756 (PremiumGiftDurationButton)
let SubscriptionIntervalTypes;
function PremiumGiftDurationButton(arg0) {
  let accessibilityRole;
  let accessibilityState;
  let planInterval;
  let selected;
  ({ selected, planInterval } = arg0);
  const arg1 = planInterval;
  let obj = arg1(dependencyMap[6]);
  const nativeGiftContext = obj.useNativeGiftContext();
  const importDefault = nativeGiftContext.setPlanInterval;
  const tmp2 = callback3();
  if (selected) {
    let RowButton = tmp3(tmp4[7]).TableRow;
  } else {
    RowButton = tmp3(tmp4[8]).RowButton;
  }
  let combined = null;
  if (planInterval === SubscriptionIntervalTypes.YEAR) {
    const _HermesInternal = HermesInternal;
    combined = "" + closure_5 + "%";
  }
  let obj1 = arg1(dependencyMap[10]);
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
    const intl2 = arg1(dependencyMap[12]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[12]).t.Mh9bTt);
  } else {
    const intl = arg1(dependencyMap[12]).intl;
    stringResult = intl.string(arg1(dependencyMap[12]).t.DRgqMo);
  }
  obj3.children = stringResult;
  const items1 = [callback(arg1(dependencyMap[11]).Text, obj3), ];
  let tmp21 = null != combined;
  if (tmp21) {
    const obj4 = { style: tmp2.labelPromo };
    const obj5 = { hasMaxConnections: 20, isBoostOnlySubscription: 20 };
    const intl3 = arg1(dependencyMap[12]).intl;
    const obj6 = { discount: combined };
    obj5.children = intl3.formatToPlainString(arg1(dependencyMap[12]).t.IAybsG, obj6).toUpperCase();
    obj4.children = callback(arg1(dependencyMap[11]).Text, obj5);
    tmp21 = callback(View, obj4);
    const str3 = intl3.formatToPlainString(arg1(dependencyMap[12]).t.IAybsG, obj6);
  }
  items1[1] = tmp21;
  obj2.children = items1;
  obj1.label = closure_8(View, obj2);
  obj1.trailing = callback(arg1(dependencyMap[11]).Text, { variant: "text-md/semibold", children: importDefault(dependencyMap[9])(nativeGiftContext.premiumType, planInterval) });
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
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ PREMIUM_YEARLY_DISCOUNT_PERCENT: closure_5, SubscriptionIntervalTypes } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
const items = [, ];
({ YEAR: arr[0], MONTH: arr[1] } = SubscriptionIntervalTypes);
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { marginTop: importDefault(dependencyMap[5]).space.PX_8 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.containerSelected = { borderColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND, borderRadius: importDefault(dependencyMap[5]).radii.lg, borderWidth: 2 };
obj.labelContainer = { flexDirection: "row" };
const obj1 = { borderColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND, borderRadius: importDefault(dependencyMap[5]).radii.lg, borderWidth: 2 };
obj.labelPromo = { marginStart: importDefault(dependencyMap[5]).space.PX_8, backgroundColor: importDefault(dependencyMap[5]).colors.STATUS_POSITIVE_BACKGROUND, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_8, borderRadius: importDefault(dependencyMap[5]).radii.round };
let closure_10 = obj.createStyles(obj);
let obj5 = arg1(dependencyMap[4]);
const obj3 = {};
const obj2 = { marginStart: importDefault(dependencyMap[5]).space.PX_8, backgroundColor: importDefault(dependencyMap[5]).colors.STATUS_POSITIVE_BACKGROUND, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_8, borderRadius: importDefault(dependencyMap[5]).radii.round };
obj3.durationContainer = { marginHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
obj5 = { marginTop: importDefault(dependencyMap[5]).space.PX_24 };
obj3.durationTitle = obj5;
let closure_11 = obj5.createStyles(obj3);
const obj4 = { marginHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/premium/native/gifting/PremiumGiftDuration.tsx");

export default function PremiumGiftDuration() {
  const tmp = callback4();
  let obj = arg1(dependencyMap[6]);
  const arg1 = obj.useNativeGiftContext().planInterval;
  const tmp2 = importDefault(dependencyMap[14])(importDefault(dependencyMap[13]).useConfig({ location: "PremiumGiftDuration" }).monthlyDefaultSelected);
  const importDefault = tmp2;
  const items = [tmp2];
  const memo = React.useMemo(() => {
    if (tmp2) {
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
  const intl = arg1(dependencyMap[12]).intl;
  obj.children = intl.string(arg1(dependencyMap[12]).t.8XT6Nf);
  const items1 = [callback(arg1(dependencyMap[11]).Text, obj), memo.map((planInterval) => callback(closure_12, { selected: planInterval === planInterval, planInterval }, arg1))];
  obj.children = items1;
  return callback2(View, obj);
};
