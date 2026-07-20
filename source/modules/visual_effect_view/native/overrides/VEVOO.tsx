// Module ID: 14578
// Function ID: 109881
// Name: VisualEffectViewOverrideOverlay_
// Dependencies: []

// Module 14578 (VisualEffectViewOverrideOverlay_)
function VisualEffectViewOverrideOverlay_(arg0) {
  const x = arg0.x;
  const arg1 = x;
  const y = arg0.y;
  const importDefault = y;
  const tmp = callback3();
  const PX_8 = importDefault(dependencyMap[6]).space.PX_8;
  const dependencyMap = PX_8;
  let obj = arg1(dependencyMap[7]);
  const fn = function _() {
    const obj = {};
    const sum = y.get() - PX_8 + closure_5;
    obj.top = x(PX_8[8]).withSpring(sum, x(PX_8[9]).springUnclamped);
    const obj2 = x(PX_8[8]);
    const diff = x.get() - PX_8;
    obj.left = x(PX_8[8]).withSpring(diff, x(PX_8[9]).springUnclamped);
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[8]).withSpring, y, px8: PX_8, DEV_WIDGET_SIZE, springUnclamped: arg1(dependencyMap[9]).springUnclamped, x };
  fn.__closure = obj;
  fn.__workletHash = 8104480272354;
  fn.__initData = closure_9;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items };
  const items = [tmp.wrapper, animatedStyle];
  const obj1 = { style: tmp.scrollView };
  const obj2 = { title: "Blur View Global Overrides", sectionBodyStyle: tmp.scrollViewContent };
  const items1 = [callback(importDefault(dependencyMap[11]), {}), callback(importDefault(dependencyMap[12]), {}), callback(importDefault(dependencyMap[13]), {})];
  obj2.children = items1;
  obj1.children = callback2(arg1(dependencyMap[10]).FormSection, obj2);
  const items2 = [callback(ScrollView, obj1), ];
  const obj3 = { styles: tmp.close, type: "neutral", IconComponent: arg1(dependencyMap[15]).XSmallIcon, onPress: arg0.onClose, accessibilityLabel: "Close" };
  items2[1] = callback(importDefault(dependencyMap[14]), obj3);
  obj.children = items2;
  return callback2(importDefault(dependencyMap[7]).View, obj);
}
const ScrollView = arg1(dependencyMap[1]).ScrollView;
let closure_4 = importDefault(dependencyMap[2]);
const DEV_WIDGET_SIZE = arg1(dependencyMap[3]).DEV_WIDGET_SIZE;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
const styles = obj1.createStyles({ zeroPadding: { value: false, alignItems: true }, zeroPaddingVertical: { paddingVertical: 0 }, zeroPaddingHorizontal: { paddingHorizontal: 0 }, zeroHeight: { height: 0 }, enabledSwitchStyle: { alignSelf: "flex-start" } });
let obj2 = arg1(dependencyMap[5]);
let obj = {};
obj = { borderColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE, backgroundColor: importDefault(dependencyMap[6]).unsafe_rawColors.PRIMARY_660, borderRadius: importDefault(dependencyMap[6]).radii.lg };
const merged = Object.assign(importDefault(dependencyMap[6]).shadows.SHADOW_MOBILE_NAVIGATOR_X);
obj.wrapper = obj;
obj1 = { borderRadius: importDefault(dependencyMap[6]).radii.lg, paddingTop: importDefault(dependencyMap[6]).space.PX_24, overflow: "hidden" };
obj.scrollView = obj1;
obj2 = { paddingBottom: importDefault(dependencyMap[6]).space.PX_24 };
obj.scrollViewContent = obj2;
const tmp2 = arg1(dependencyMap[4]);
const merged1 = Object.assign(importDefault(dependencyMap[6]).shadows.SHADOW_LOW_HOVER);
obj.close = { position: "absolute", right: importDefault(dependencyMap[6]).space.PX_8, top: importDefault(dependencyMap[6]).space.PX_8 };
let closure_8 = obj2.createStyles(obj);
let closure_9 = { code: "function VEVOOTsx1(){const{withSpring,y,px8,DEV_WIDGET_SIZE,springUnclamped,x}=this.__closure;return{top:withSpring(y.get()-px8+DEV_WIDGET_SIZE,springUnclamped),left:withSpring(x.get()-px8,springUnclamped)};}" };
const obj3 = { position: "absolute", right: importDefault(dependencyMap[6]).space.PX_8, top: importDefault(dependencyMap[6]).space.PX_8 };
const memoResult = importAllResult.memo(function VisualEffectViewOverrideOverlay(arg0) {
  let obj = arg1(dependencyMap[16]);
  const items = [closure_4];
  let tmp = null;
  if (obj.useStateFromStores(items, () => closure_4.get("visual_effect_view_overrides"))) {
    obj = {
      onClose() {
          callback(closure_2[17]).toggle("visual_effect_view_overrides", false);
        }
    };
    const merged = Object.assign(arg0);
    tmp = callback(VisualEffectViewOverrideOverlay_, obj);
  }
  return tmp;
});
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOO.tsx");

export default memoResult;
export const useVisualEffectViewOverrideSharedStyles = styles;
