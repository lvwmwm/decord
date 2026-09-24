// Module ID: 10651
// Function ID: 10652
// Name: PremiumUpsellSectionDivider
// Dependencies: [19, 17, 7762, 21, 4829, 576, 10652, 5285, 1094, 5401, 2]
// Exports: default

// Module 10651 (PremiumUpsellSectionDivider)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import LinearGradientDefault from "LinearGradient" /* 5285 */;
import PremiumUpsellGradientBackground from "PremiumUpsellGradientBackground" /* 10652 */;
import noop from "module_19" /* 19 */;

const LockIcon2 = LockIcon(5401);
require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const Gradients = fn(7762).Gradients;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
let closure_8 = createStyles.createStyles((arg0) => {
  let num;
  if (arg0 === obj2.START) {
    num = 6;
  }
  const obj = { height: 28, flex: 1, justifyContent: "center", marginTop: num, marginBottom: null };
  let num2;
  if (arg0 === obj2.END) {
    num2 = 6;
  }
  obj2 = { container: obj, lockContainer: null, lockGradient: null, lock: null, divider: null, gradient: null };
  obj.marginBottom = num2;
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj2.lockContainer = { justifyContent: "center", alignItems: "center" };
  const size = { width: 28, height: 28, justifyContent: "center", borderRadius: nativeDefault.radii.round };
  obj2.lockGradient = size;
  obj2.lock = { width: 16, height: 16, alignSelf: "center" };
  obj2.divider = { height: 1 };
  let num3;
  if (arg0 === obj2.START) {
    num3 = 0;
  }
  const rect = { flex: 1, height: 14, left: 0, right: 0, position: "absolute", bottom: num3, top: null };
  let num4;
  if (arg0 === obj2.END) {
    num4 = 0;
  }
  rect.top = num4;
  obj2.gradient = rect;
  return obj2;
});
let obj2 = { START: 0, [0]: "START", END: 1, [1]: "END" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellSectionDivider.tsx");

export default function PremiumUpsellSectionDivider(arg0) {
  ({ useTier0UpsellContent, position } = arg0);
  let lock = closure_8(position);
  const obj = { style: lock.container, children: null };
  obj2 = { style: lock.gradient, children: timestampProducer(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, { useTier0UpsellContent }) };
  let LockIcon = require;
  let WHITE = dependencyMap;
  const items = [timestampProducer(React4, obj2), , ];
  const obj3 = { style: lock.divider, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: null };
  if (true === useTier0UpsellContent) {
    let PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
    let tmp6 = Gradients;
  } else {
    tmp6 = Gradients;
    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
  }
  obj3.colors = PREMIUM_TIER_2_TRI_COLOR;
  items[1] = timestampProducer(LinearGradientDefault, obj3);
  if (position !== obj2.START) {
    items[2] = tmp8;
    obj.children = items;
    return React5(tmp2, obj);
  } else {
    const obj4 = { style: lock.lockContainer, children: null };
    let obj5 = { style: lock.lockGradient, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: useTier0UpsellContent ? tmp6.PREMIUM_TIER_0 : tmp6.PREMIUM_TIER_2_TRI_COLOR, children: null };
    LockIcon = LockIcon2.LockIcon;
    const obj6 = { color: null, style: null };
    WHITE = tmp4(576).colors.WHITE;
    obj6.color = WHITE;
    lock = lock.lock;
    obj6.style = lock;
    obj5.children = tmp3(LockIcon, obj6);
    obj5 = tmp3(tmp4(5285), obj5);
    obj4.children = obj5;
    tmp3(tmp2, obj4);
    const tmp4Result = tmp4(5285);
  }
};
export const PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT = 28;
export const PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN = 6;
export const PremiumUpsellSectionDividerPosition = obj2;
