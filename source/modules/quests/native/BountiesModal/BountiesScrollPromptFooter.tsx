// Module ID: 13785
// Function ID: 104250
// Name: BountiesScrollPromptFooter
// Dependencies: [57, 31, 27, 6646, 653, 33, 689, 8140, 4126, 666, 3989, 4538, 4542]
// Exports: default

// Module 13785 (BountiesScrollPromptFooter)
import _slicedToArray from "_slicedToArray";
import { StyleSheet } from "module_31";
import keys from "keys";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import SUBTLE_SPRING from "SUBTLE_SPRING";

({ jsx: closure_6, jsxs: closure_7 } = _isNativeReflectConstruct);
let closure_8 = ME.createStyles(() => {
  let obj = { root: {} };
  obj = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
  obj.content = obj;
  obj = {};
  const merged = Object.assign(StyleSheet.absoluteFillObject);
  obj.gradient = obj;
  return obj;
});
const result = SUBTLE_SPRING.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollPromptFooter.tsx");

export default function BountiesScrollPromptFooter(zIndex) {
  let children;
  let onContentLayout;
  let visible;
  zIndex = zIndex.zIndex;
  const arg1 = zIndex;
  const opacityStyle = zIndex.opacityStyle;
  ({ visible, children, onContentLayout } = zIndex);
  const tmp = callback2();
  let obj = arg1(dependencyMap[6]);
  obj = { visible, entranceTiming: arg1(dependencyMap[7]).timingStandard, exitTiming: arg1(dependencyMap[7]).timingStandard };
  const visibilityTransition = obj.useVisibilityTransition(obj);
  let shouldRender = visibilityTransition.shouldRender;
  const items = [zIndex];
  const memo = React.useMemo(() => {
    let tmp;
    if (null != zIndex) {
      const obj = { zIndex };
      tmp = obj;
    }
    return tmp;
  }, items);
  let obj2 = arg1(dependencyMap[8]);
  const items1 = [keys];
  const stateFromStores = obj2.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const tmp5 = importDefault(dependencyMap[9])();
  const importDefault = tmp5;
  [][0] = tmp5.bottom;
  if (shouldRender) {
    obj = {};
    const items2 = [tmp.root, visibilityTransition.opacityStyle, memo];
    obj.style = items2;
    obj.pointerEvents = "none";
    const obj1 = {};
    const items3 = [tmp.gradient, opacityStyle];
    obj1.style = items3;
    obj2 = { borderWidth: 7471105, position: 0, alignSelf: 50331648 };
    let str2 = "play";
    if (stateFromStores) {
      str2 = "halt";
    }
    obj2.withReducedMotion = str2;
    obj1.children = callback(arg1(dependencyMap[11]).BountiesScrollGradientRive, obj2);
    const items4 = [callback(importDefault(dependencyMap[10]).View, obj1), ];
    const obj3 = {};
    const items5 = [tmp.content, tmp6, opacityStyle];
    obj3.style = items5;
    obj3.onLayout = onContentLayout;
    obj3.children = children;
    items4[1] = callback(importDefault(dependencyMap[10]).View, obj3);
    obj.children = items4;
    shouldRender = closure_7(importDefault(dependencyMap[10]).View, obj);
    const tmp7 = closure_7;
  }
  return shouldRender;
};
export const BOUNTIES_MODAL_BASE_FOOTER_HEIGHT = 97;
