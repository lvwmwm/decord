// Module ID: 9352
// Function ID: 73014
// Name: PremiumUpsellSectionDivider
// Dependencies: []
// Exports: default

// Module 9352 (PremiumUpsellSectionDivider)
importAll(dependencyMap[0]);
({ StyleSheet: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const Gradients = arg1(dependencyMap[2]).Gradients;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
let closure_8 = obj.createStyles((arg0) => {
  let obj = {};
  obj = {};
  let num;
  if (arg0 === obj.START) {
    num = 6;
  }
  obj.marginTop = num;
  let num2;
  if (arg0 === obj.END) {
    num2 = 6;
  }
  obj.marginBottom = num2;
  obj.container = obj;
  obj = { margin: null, backgroundColor: null };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.lockContainer = obj;
  obj.lockGradient = { borderRadius: importDefault(dependencyMap[5]).radii.round };
  obj.lock = { backgroundColor: "<string:3192994401>", borderRadius: "<string:684289>", height: "<string:141754368>" };
  obj.divider = { height: 1 };
  const obj2 = { EMOJI_REACTIONS_ON_MESSAGES: null, paddingVertical: false, isInitial: false, ModalActionCreators: false, YOUTUBE: null };
  let num3;
  if (arg0 === obj.START) {
    num3 = 0;
  }
  obj2.bottom = num3;
  let num4;
  if (arg0 === obj.END) {
    num4 = 0;
  }
  obj2.top = num4;
  obj.gradient = obj2;
  return obj;
});
obj = { START: 0, [0]: "START", END: 1, [1]: "END" };
const tmp4 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellSectionDivider.tsx");

export default function PremiumUpsellSectionDivider(arg0) {
  let position;
  let useTier0UpsellContent;
  ({ useTier0UpsellContent, position } = arg0);
  let lock = callback2(position);
  let obj = { style: lock.container };
  obj = { style: lock.gradient, children: callback(arg1(dependencyMap[6]).PremiumUpsellGradientBackground, { useTier0UpsellContent }) };
  const items = [callback(closure_4, obj), , ];
  obj = { style: lock.divider, start: arg1(dependencyMap[8]).HorizontalGradient.START, end: arg1(dependencyMap[8]).HorizontalGradient.END };
  if (true === useTier0UpsellContent) {
    let PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
  } else {
    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
  }
  obj.colors = PREMIUM_TIER_2_TRI_COLOR;
  items[1] = callback(importDefault(dependencyMap[7]), obj);
  if (position !== obj.START) {
    items[2] = tmp7;
    obj.children = items;
    return closure_7(closure_4, obj);
  } else {
    const obj1 = { style: lock.lockContainer };
    let obj2 = { style: lock.lockGradient, start: arg1(dependencyMap[8]).HorizontalGradient.START, end: arg1(dependencyMap[8]).HorizontalGradient.END };
    let LockIcon = Gradients;
    obj2.colors = useTier0UpsellContent ? LockIcon.PREMIUM_TIER_0 : LockIcon.PREMIUM_TIER_2_TRI_COLOR;
    LockIcon = arg1(dependencyMap[9]).LockIcon;
    const obj3 = { color: importDefault(dependencyMap[5]).colors.WHITE };
    lock = lock.lock;
    obj3.style = lock;
    obj2.children = callback(LockIcon, obj3);
    obj2 = tmp8(importDefault(dependencyMap[7]), obj2);
    obj1.children = obj2;
    callback(closure_4, obj1);
    const tmp12 = importDefault(dependencyMap[7]);
    const tmp9 = closure_4;
  }
};
export const PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT = 28;
export const PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN = 6;
export const PremiumUpsellSectionDividerPosition = obj;
