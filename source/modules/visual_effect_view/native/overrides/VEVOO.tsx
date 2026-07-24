// Module ID: 14758
// Function ID: 112463
// Name: VisualEffectViewOverrideOverlay_
// Dependencies: [31, 27, 4129, 687, 33, 4130, 689, 3991, 4542, 4546, 7636, 14759, 14761, 14762, 9127, 5119, 566, 14709, 2]

// Module 14758 (VisualEffectViewOverrideOverlay_)
import { ScrollView } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { DEV_WIDGET_SIZE } from "STORAGE_KEY_LOG_DISPATCHES";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_6;
let closure_7;
const require = arg1;
function VisualEffectViewOverrideOverlay_(arg0) {
  const x = arg0.x;
  const _require = x;
  const y = arg0.y;
  const importDefault = y;
  const tmp = callback3();
  PX_8 = importDefault(PX_8[6]).space.PX_8;
  let obj = _require(PX_8[7]);
  const fn = function _() {
    const obj = {};
    const sum = closure_1.get() - PX_8 + outer1_5;
    obj.top = x(PX_8[8]).withSpring(sum, x(PX_8[9]).springUnclamped);
    const obj2 = x(PX_8[8]);
    const diff = x.get() - PX_8;
    obj.left = x(PX_8[8]).withSpring(diff, x(PX_8[9]).springUnclamped);
    return obj;
  };
  obj = { withSpring: _require(PX_8[8]).withSpring, y, px8: PX_8, DEV_WIDGET_SIZE, springUnclamped: _require(PX_8[9]).springUnclamped, x };
  fn.__closure = obj;
  fn.__workletHash = 8104480272354;
  fn.__initData = closure_9;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items };
  items = [tmp.wrapper, animatedStyle];
  const obj1 = { style: tmp.scrollView };
  let obj2 = { title: "Blur View Global Overrides", sectionBodyStyle: tmp.scrollViewContent };
  const items1 = [callback(importDefault(PX_8[11]), {}), callback(importDefault(PX_8[12]), {}), callback(importDefault(PX_8[13]), {})];
  obj2.children = items1;
  obj1.children = callback2(_require(PX_8[10]).FormSection, obj2);
  const items2 = [callback(ScrollView, obj1), ];
  const obj3 = { styles: tmp.close, type: "neutral", IconComponent: _require(PX_8[15]).XSmallIcon, onPress: arg0.onClose, accessibilityLabel: "Close" };
  items2[1] = callback(importDefault(PX_8[14]), obj3);
  obj.children = items2;
  return callback2(importDefault(PX_8[7]).View, obj);
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
const styles = _createForOfIteratorHelperLoose.createStyles({ zeroPadding: { paddingVertical: 0, paddingHorizontal: 0 }, zeroPaddingVertical: { paddingVertical: 0 }, zeroPaddingHorizontal: { paddingHorizontal: 0 }, zeroHeight: { height: 0 }, enabledSwitchStyle: { alignSelf: "flex-start" } });
let obj = {};
obj = { borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderWidth: 1, backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_660, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, position: "absolute", top: 0, left: 0, width: 300, height: 400 };
let merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_MOBILE_NAVIGATOR_X);
obj.wrapper = obj;
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24, overflow: "hidden" };
obj.scrollView = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
obj.scrollViewContent = _createForOfIteratorHelperLoose;
const merged1 = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_LOW_HOVER);
obj.close = { position: "absolute", right: require("_createForOfIteratorHelperLoose").space.PX_8, top: require("_createForOfIteratorHelperLoose").space.PX_8 };
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_9 = { code: "function VEVOOTsx1(){const{withSpring,y,px8,DEV_WIDGET_SIZE,springUnclamped,x}=this.__closure;return{top:withSpring(y.get()-px8+DEV_WIDGET_SIZE,springUnclamped),left:withSpring(x.get()-px8,springUnclamped)};}" };
let obj3 = { position: "absolute", right: require("_createForOfIteratorHelperLoose").space.PX_8, top: require("_createForOfIteratorHelperLoose").space.PX_8 };
const memoResult = importAllResult.memo(function VisualEffectViewOverrideOverlay(arg0) {
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  let tmp = null;
  if (obj.useStateFromStores(items, () => outer1_4.get("visual_effect_view_overrides"))) {
    obj = {
      onClose() {
          outer1_0(outer1_2[17]).toggle("visual_effect_view_overrides", false);
        }
    };
    const merged = Object.assign(arg0);
    tmp = callback(VisualEffectViewOverrideOverlay_, obj);
  }
  return tmp;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOO.tsx");

export default memoResult;
export const useVisualEffectViewOverrideSharedStyles = styles;
