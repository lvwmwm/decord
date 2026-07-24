// Module ID: 13959
// Function ID: 106785
// Name: BountiesScrollPromptFooter
// Dependencies: [31, 27, 4122, 33, 4130, 689, 13960, 4134, 566, 1557, 3991, 3842, 2]
// Exports: default

// Module 13959 (BountiesScrollPromptFooter)
import result from "result";
import { StyleSheet } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = { root: { position: "absolute", bottom: 0, left: 0, right: 0 } };
  obj = { flex: 1, minHeight: 97, alignItems: "center", justifyContent: "center", paddingHorizontal: importDefault(689).space.PX_16 };
  obj.content = obj;
  obj = {};
  const merged = Object.assign(StyleSheet.absoluteFillObject);
  obj.gradient = obj;
  return obj;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollPromptFooter.tsx");

export default function BountiesScrollPromptFooter(zIndex) {
  let children;
  let onContentLayout;
  let visible;
  zIndex = zIndex.zIndex;
  const opacityStyle = zIndex.opacityStyle;
  ({ visible, children, onContentLayout } = zIndex);
  let tmp = callback2();
  let obj = zIndex(13960);
  obj = { visible, entranceTiming: zIndex(4134).timingStandard, exitTiming: zIndex(4134).timingStandard };
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
  let obj2 = zIndex(566);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores = obj2.useStateFromStores(items1, () => outer1_5.useReducedMotion);
  const tmp5 = importDefault(1557)();
  importDefault = tmp5;
  [][0] = tmp5.bottom;
  if (shouldRender) {
    obj = {};
    const items2 = [tmp.root, visibilityTransition.opacityStyle, memo];
    obj.style = items2;
    obj.pointerEvents = "none";
    const obj1 = {};
    const items3 = [tmp.gradient, opacityStyle];
    obj1.style = items3;
    obj2 = { stateMachine: "State Machine 1", fit: "fill", alignment: "bottom-center" };
    let str2 = "play";
    if (stateFromStores) {
      str2 = "halt";
    }
    obj2.withReducedMotion = str2;
    obj1.children = callback(zIndex(3842).BountiesScrollGradientRive, obj2);
    const items4 = [callback(importDefault(3991).View, obj1), ];
    const obj3 = {};
    const items5 = [tmp.content, tmp6, opacityStyle];
    obj3.style = items5;
    obj3.onLayout = onContentLayout;
    obj3.children = children;
    items4[1] = callback(importDefault(3991).View, obj3);
    obj.children = items4;
    shouldRender = closure_7(importDefault(3991).View, obj);
    const tmp7 = closure_7;
  }
  return shouldRender;
};
export const BOUNTIES_MODAL_BASE_FOOTER_HEIGHT = 97;
