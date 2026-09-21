// Module ID: 15450
// Function ID: 15451
// Name: QuestDockBackgroundBlurHeader
// Dependencies: [32, 19, 17, 5663, 15351, 21, 4758, 580, 5187, 558, 568, 15352, 1369, 4462, 15440, 4497, 15451, 15417, 7320, 5341, 4754, 1119, 11490, 15453, 8180, 2]

// Module 15450 (QuestDockBackgroundBlurHeader)
import nativeDefault from "native" /* 580 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1369 */;
import spring from "spring" /* 5187 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ AccessibilityInfo: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const QuestDockMode = fn(5663).QuestDockMode;
const QuestDockConstants = fn(15351);
const QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = QuestDockConstants.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
({ QUEST_DOCK_CONTENT_BORDER_RADII: closure_9, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: c10, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11, QUEST_DOCK_COLLAPSED_HEIGHT } = QuestDockConstants);
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4758);
let obj = { header: { alignItems: "center", justifyContent: "space-between", flexDirection: "row", height: QUEST_DOCK_COLLAPSED_HEIGHT, overflow: "hidden", paddingRight: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8, position: "absolute", zIndex: 2 }, secondaryContent: { flexGrow: 0, flexShrink: 0 }, collapsedContent: { justifyContent: "center", position: "absolute", bottom: 0, top: 0, right: 0 }, expandedContent: null, actionDisclosures: null, actionDisclosuresIcon: null, tertiaryContent: null };
let obj3 = { alignItems: "center", justifyContent: "space-between", flexDirection: "row", height: QUEST_DOCK_COLLAPSED_HEIGHT, overflow: "hidden", paddingRight: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8, position: "absolute", zIndex: 2 };
obj.expandedContent = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj.actionDisclosures = { alignItems: "center", display: "flex", flexDirection: "row", gap: 4 };
obj.actionDisclosuresIcon = { height: 14, width: 14 };
obj.tertiaryContent = { opacity: 0.7 };
let closure_15 = createStyles.createStyles(obj);
function questDockHeaderLayoutAnimation(originX) {
  const obj = { initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight }, animations: null };
  const size = { originX: spring.withSpring(originX.targetOriginX, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED), originY: null, height: null, width: null };
  size.originY = spring.withSpring(originX.targetOriginY, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
  size.height = spring.withSpring(originX.targetHeight, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
  size.width = spring.withSpring(originX.targetWidth, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
  obj.animations = size;
  return obj;
}
let obj4 = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 };
questDockHeaderLayoutAnimation.__closure = { withSpring: fn(5187).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
questDockHeaderLayoutAnimation.__workletHash = 13829887811453;
questDockHeaderLayoutAnimation.__initData = { code: "function questDockHeaderLayoutAnimation_QuestDockBackgroundBlurHeaderTsx1(values){const{withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:withSpring(values.targetOriginX,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),originY:withSpring(values.targetOriginY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:withSpring(values.targetHeight,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:withSpring(values.targetWidth,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}};}" };
const __initData = { code: "function QuestDockBackgroundBlurHeaderTsx2(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:activeQuestDockMode.get()===QuestDockMode.EXPANDED?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}]};}" };
const __initData2 = { code: "function QuestDockBackgroundBlurHeaderTsx3(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData3 = { code: "function QuestDockBackgroundBlurHeaderTsx4(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED*-1:0};}" };
const __initData4 = { code: "function QuestDockBackgroundBlurHeaderTsx5(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData5 = { code: "function QuestDockBackgroundBlurHeaderTsx6(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED};}" };
const __initData6 = { code: "function QuestDockBackgroundBlurHeaderTsx7(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?\"auto\":\"none\"};}" };
const __initData7 = { code: "function QuestDockBackgroundBlurHeaderTsx8(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs}=this.__closure;return{borderRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:questDockWrapperSpecs.get().width};}" };
const __initData8 = { code: "function QuestDockBackgroundBlurHeaderTsx9(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData9 = { code: "function QuestDockBackgroundBlurHeaderTsx10(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:activeQuestDockMode.get()===QuestDockMode.EXPANDED?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}]};}" };
const __initData10 = { code: "function QuestDockBackgroundBlurHeaderTsx11(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData11 = { code: "function QuestDockBackgroundBlurHeaderTsx12(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED*-1:0};}" };
const __initData12 = { code: "function QuestDockBackgroundBlurHeaderTsx13(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData13 = { code: "function QuestDockBackgroundBlurHeaderTsx14(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED};}" };
const __initData14 = { code: "function QuestDockBackgroundBlurHeaderTsx15(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};}" };
const __initData15 = { code: "function QuestDockBackgroundBlurHeaderTsx16(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs}=this.__closure;return{borderRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:questDockWrapperSpecs.get().width};}" };
const __initData16 = { code: "function QuestDockBackgroundBlurHeaderTsx17(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const ReactCompilerGating = fn(558);
let obj5 = { withSpring: fn(5187).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBackgroundBlurHeader.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = activeQuestDockMode(568).c(51);
  ({ blurHash, children, collapsedContent, withPressableDisclosure, hideBlurWhenCollapsed, onDisclosurePress, onSubmenuPress } = arg0);
  const context = noop.useContext(tmp(15352).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  const questDockWrapperSpecs = context.questDockWrapperSpecs;
  let obj = activeQuestDockMode(568);
  let obj2 = noop;
  const tmp4 = undefined !== hideBlurWhenCollapsed && hideBlurWhenCollapsed;
  [tmp7, dependencyMap] = token(noop.useState(false), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        obj = closure_0(closure_2[12]);
        if (obj.isIOS()) {
          tmp = AccessibilityInfo;
          result = AccessibilityInfo.isReduceTransparencyEnabled();
          tmp2 = closure_2;
          nextPromise = result.then(closure_2);
          str = "reduceTransparencyChanged";
          closure_0 = AccessibilityInfo.addEventListener("reduceTransparencyChanged", closure_2);
          return () => closure_0.remove();
        } else {
          return;
        }
      }
    }
    let items = [];
    cResult[0] = E;
    cResult[1] = items;
    let tmp9 = items;
    const tmp8 = E;
  } else {
    class E {
      constructor() {
        obj = closure_0(closure_2[12]);
        if (obj.isIOS()) {
          tmp = AccessibilityInfo;
          result = AccessibilityInfo.isReduceTransparencyEnabled();
          tmp2 = closure_2;
          nextPromise = result.then(closure_2);
          str = "reduceTransparencyChanged";
          closure_0 = AccessibilityInfo.addEventListener("reduceTransparencyChanged", closure_2);
          return () => closure_0.remove();
        } else {
          return;
        }
      }
    }
    tmp9 = cResult[1];
  }
  const effect = obj2.useEffect(tmp8, tmp9);
  const tmp6 = token(noop.useState(false), 2);
  token = activeQuestDockMode(4462).useToken(questDockWrapperSpecs(580).modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp13 = questDockWrapperSpecs(15440)(token);
  noop = tmp13;
  const tmpResult = activeQuestDockMode(4462);
  class F {
    constructor() {
      obj = activeQuestDockMode;
      tmp = QuestDockMode;
      obj1 = { borderTopLeftRadius: activeQuestDockMode.get() === QuestDockMode.EXPANDED ? closure_9 : closure_3, borderTopRightRadius: obj.get() === tmp.EXPANDED ? closure_9 : closure_3, borderBottomLeftRadius: null, borderBottomRightRadius: null, width: null, transform: null };
      if (obj.get() === tmp.EXPANDED) {
        withSpringResult = closure_9;
      } else {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj3 = closure_0(closure_2[8]);
        tmp4 = closure_4;
        tmp5 = closure_8;
        withSpringResult = obj3.withSpring(closure_4.get(), closure_8);
      }
      obj1.borderBottomLeftRadius = withSpringResult;
      if (obj.get() === tmp.EXPANDED) {
        withSpringResult1 = closure_9;
      } else {
        tmp7 = closure_0;
        tmp8 = closure_2;
        obj4 = closure_0(closure_2[8]);
        tmp9 = closure_4;
        tmp10 = closure_8;
        withSpringResult1 = obj4.withSpring(closure_4.get(), closure_8);
      }
      obj1.borderBottomRightRadius = withSpringResult1;
      if (obj.get() === tmp.EXPANDED) {
        tmp13 = questDockWrapperSpecs;
        tmp14 = closure_11;
        num = 2;
        width = questDockWrapperSpecs.get().width - 2 * closure_11;
      } else {
        tmp12 = questDockWrapperSpecs;
        width = questDockWrapperSpecs.get().width;
      }
      obj1.width = width;
      tmp15 = closure_0;
      tmp16 = closure_2;
      obj5 = closure_0(closure_2[8]);
      num2 = 0;
      if (obj.get() === tmp.EXPANDED) {
        num2 = closure_11;
      }
      obj9 = { translateX: obj5.withSpring(num2, closure_8) };
      tmp17 = closure_8;
      items = [, ];
      items[0] = obj9;
      tmp15Result = tmp15(tmp16[8]);
      num3 = 0;
      if (obj.get() === tmp.EXPANDED) {
        num3 = closure_11;
      }
      obj10 = { translateY: tmp15Result.withSpring(num3, tmp17) };
      items[1] = obj10;
      obj1.transform = items;
      return obj1;
    }
  }
  const tmpResult10 = activeQuestDockMode(4497);
  F.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, withSpring: activeQuestDockMode(5187).withSpring, questDockAnimatedBorderRadius: tmp13, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11 };
  F.__workletHash = 17202411570804;
  F.__initData = __initData;
  const animatedStyle = tmpResult10.useAnimatedStyle(F);
  let obj3 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, withSpring: activeQuestDockMode(5187).withSpring, questDockAnimatedBorderRadius: tmp13, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11 };
  const fn = function j() {
    let num = 1;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 0;
    }
    return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
  };
  const tmpResult11 = activeQuestDockMode(4497);
  fn.__closure = { withSpring: activeQuestDockMode(5187).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn.__workletHash = 5804990093011;
  fn.__initData = __initData2;
  const animatedStyle1 = tmpResult11.useAnimatedStyle(fn);
  let obj4 = { withSpring: activeQuestDockMode(5187).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  const fn2 = function z() {
    let right = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      right = -1 * v65535;
    }
    return { right };
  };
  fn2.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  fn2.__workletHash = 14001429324395;
  fn2.__initData = __initData3;
  const animatedStyle2 = activeQuestDockMode(4497).useAnimatedStyle(fn2);
  let obj5 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  const tmpResult12 = activeQuestDockMode(4497);
  class J {
    constructor() {
      obj = closure_0(closure_2[8]);
      num = 0;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        num = 1;
      }
      obj1 = { opacity: obj.withSpring(num, closure_8) };
      return obj1;
    }
  }
  const tmpResult13 = activeQuestDockMode(4497);
  J.__closure = { withSpring: activeQuestDockMode(5187).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  J.__workletHash = 6229744150165;
  J.__initData = __initData4;
  const animatedStyle3 = tmpResult13.useAnimatedStyle(J);
  let obj6 = { withSpring: activeQuestDockMode(5187).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  const fn3 = function $() {
    let right = 0;
    if (activeQuestDockMode.get() !== QuestDockMode.EXPANDED) {
      right = v65535;
    }
    return { right };
  };
  fn3.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  fn3.__workletHash = 10870034799551;
  fn3.__initData = __initData5;
  const animatedStyle4 = activeQuestDockMode(4497).useAnimatedStyle(fn3);
  const tmpResult14 = activeQuestDockMode(4497);
  function ee() {
    let pointerEvents = "none";
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      pointerEvents = "auto";
    }
    return { pointerEvents };
  }
  ee.__closure = { activeQuestDockMode, QuestDockMode };
  ee.__workletHash = 800759970563;
  ee.__initData = __initData6;
  const animatedProps = activeQuestDockMode(4497).useAnimatedProps(ee);
  const tmpResult15 = activeQuestDockMode(4497);
  function te() {
    const obj2 = { borderRadius: activeQuestDockMode.get() === QuestDockMode.EXPANDED ? QUEST_DOCK_CONTENT_BORDER_RADII : token, borderBottomLeftRadius: null, borderBottomRightRadius: null, width: null };
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      let withSpringResult = QUEST_DOCK_CONTENT_BORDER_RADII;
    } else {
      withSpringResult = spring.withSpring(closure_4.get(), QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
    }
    obj2.borderBottomLeftRadius = withSpringResult;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      let withSpringResult1 = QUEST_DOCK_CONTENT_BORDER_RADII;
    } else {
      withSpringResult1 = spring.withSpring(closure_4.get(), QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
    }
    obj2.borderBottomRightRadius = withSpringResult1;
    obj2.width = questDockWrapperSpecs.get().width;
    return obj2;
  }
  const tmpResult16 = activeQuestDockMode(4497);
  te.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, withSpring: activeQuestDockMode(5187).withSpring, questDockAnimatedBorderRadius: tmp13, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs };
  te.__workletHash = 8904986205240;
  te.__initData = __initData7;
  const animatedStyle5 = tmpResult16.useAnimatedStyle(te);
  activeQuestDockMode(4497);
  function oe() {
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 1;
    }
    return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
  }
  const obj7 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, withSpring: activeQuestDockMode(5187).withSpring, questDockAnimatedBorderRadius: tmp13, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs };
  oe.__closure = { withSpring: activeQuestDockMode(5187).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  oe.__workletHash = 10022958892825;
  oe.__initData = __initData8;
  if (tmp4) {
    class E {
      constructor() {
        obj = closure_0(closure_2[12]);
        if (obj.isIOS()) {
          tmp = AccessibilityInfo;
          result = AccessibilityInfo.isReduceTransparencyEnabled();
          tmp2 = closure_2;
          nextPromise = result.then(closure_2);
          str = "reduceTransparencyChanged";
          closure_0 = AccessibilityInfo.addEventListener("reduceTransparencyChanged", closure_2);
          return () => closure_0.remove();
        } else {
          return;
        }
      }
    }
  }
  const tmp23 = closure_15();
  if (cResult[2] === animatedStyle) {
    class E {
      constructor() {
        obj = closure_0(closure_2[12]);
        if (obj.isIOS()) {
          tmp = AccessibilityInfo;
          result = AccessibilityInfo.isReduceTransparencyEnabled();
          tmp2 = closure_2;
          nextPromise = result.then(closure_2);
          str = "reduceTransparencyChanged";
          closure_0 = AccessibilityInfo.addEventListener("reduceTransparencyChanged", closure_2);
          return () => closure_0.remove();
        } else {
          return;
        }
      }
    }
    if (cResult[5] === blurHash) {
      class E {
        constructor() {
          obj = closure_0(closure_2[12]);
          if (obj.isIOS()) {
            tmp = AccessibilityInfo;
            result = AccessibilityInfo.isReduceTransparencyEnabled();
            tmp2 = closure_2;
            nextPromise = result.then(closure_2);
            str = "reduceTransparencyChanged";
            closure_0 = AccessibilityInfo.addEventListener("reduceTransparencyChanged", closure_2);
            return () => closure_0.remove();
          } else {
            return;
          }
        }
      }
    }
    if (tmpResult18.isAndroid()) {
      class E {
        constructor() {
          obj = closure_0(closure_2[12]);
          if (obj.isIOS()) {
            tmp = AccessibilityInfo;
            result = AccessibilityInfo.isReduceTransparencyEnabled();
            tmp2 = closure_2;
            nextPromise = result.then(closure_2);
            str = "reduceTransparencyChanged";
            closure_0 = AccessibilityInfo.addEventListener("reduceTransparencyChanged", closure_2);
            return () => closure_0.remove();
          } else {
            return;
          }
        }
      }
      if (null != blurHash) {
        class E {
          constructor() {
            obj = closure_0(closure_2[12]);
            if (obj.isIOS()) {
              tmp = AccessibilityInfo;
              result = AccessibilityInfo.isReduceTransparencyEnabled();
              tmp2 = closure_2;
              nextPromise = result.then(closure_2);
              str = "reduceTransparencyChanged";
              closure_0 = AccessibilityInfo.addEventListener("reduceTransparencyChanged", closure_2);
              return () => closure_0.remove();
            } else {
              return;
            }
          }
        }
        const obj9 = { placeholder: blurHash, layoutAnimatedStyle: animatedStyle5, opacityAnimatedStyle: tmp22, layoutAnimation: questDockHeaderLayoutAnimation };
        let tmp26 = closure_12(tmp11(15451), obj9);
      }
      cResult[5] = blurHash;
      cResult[6] = animatedStyle5;
      cResult[7] = tmp22;
      cResult[8] = tmp7;
      cResult[9] = tmp26;
    } else {
      class E {
        constructor() {
          obj = closure_0(closure_2[12]);
          if (obj.isIOS()) {
            tmp = AccessibilityInfo;
            result = AccessibilityInfo.isReduceTransparencyEnabled();
            tmp2 = closure_2;
            nextPromise = result.then(closure_2);
            str = "reduceTransparencyChanged";
            closure_0 = AccessibilityInfo.addEventListener("reduceTransparencyChanged", closure_2);
            return () => closure_0.remove();
          } else {
            return;
          }
        }
      }
    }
    const obj10 = { layoutAnimatedStyle: animatedStyle5, opacityAnimatedStyle: tmp22, layoutAnimation: questDockHeaderLayoutAnimation };
    tmp26 = closure_12(tmp11(15417), obj10);
    tmpResult18 = tmp(1369);
  }
  const items1 = [tmp23.header, animatedStyle];
  cResult[2] = animatedStyle;
  cResult[3] = tmp23.header;
  cResult[4] = items1;
}) : ((hideBlurWhenCollapsed) => {
  ({ blurHash, withPressableDisclosure } = hideBlurWhenCollapsed);
  ({ children, collapsedContent } = hideBlurWhenCollapsed);
  if (withPressableDisclosure === undefined) {
    withPressableDisclosure = false;
  }
  let flag = hideBlurWhenCollapsed.hideBlurWhenCollapsed;
  if (flag === undefined) {
    flag = false;
  }
  let activeQuestDockMode;
  dependencyMap = undefined;
  let token;
  noop = undefined;
  ({ onDisclosurePress, onSubmenuPress } = hideBlurWhenCollapsed);
  const context = noop.useContext(activeQuestDockMode(15352).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  const questDockWrapperSpecs = context.questDockWrapperSpecs;
  [tmp5, c2] = token(noop.useState(false), 2);
  const effect = noop.useEffect(() => {
    if (obj.isIOS()) {
      const result = hasOwnProperty.isReduceTransparencyEnabled();
      result.then(c2);
      closure_0 = hasOwnProperty.addEventListener("reduceTransparencyChanged", c2);
      return () => closure_0.remove();
    }
    obj = utils_PlatformUtils;
  }, []);
  const tmp4 = token(noop.useState(false), 2);
  token = activeQuestDockMode(4462).useToken(questDockWrapperSpecs(580).modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp9 = questDockWrapperSpecs(15440)(token);
  noop = tmp9;
  let obj = activeQuestDockMode(4462);
  class Y {
    constructor() {
      obj = activeQuestDockMode;
      tmp = QuestDockMode;
      obj1 = { borderTopLeftRadius: activeQuestDockMode.get() === QuestDockMode.EXPANDED ? closure_9 : closure_3, borderTopRightRadius: obj.get() === tmp.EXPANDED ? closure_9 : closure_3, borderBottomLeftRadius: null, borderBottomRightRadius: null, width: null, transform: null };
      if (obj.get() === tmp.EXPANDED) {
        withSpringResult = closure_9;
      } else {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj3 = closure_0(closure_2[8]);
        tmp4 = closure_4;
        tmp5 = closure_8;
        withSpringResult = obj3.withSpring(closure_4.get(), closure_8);
      }
      obj1.borderBottomLeftRadius = withSpringResult;
      if (obj.get() === tmp.EXPANDED) {
        withSpringResult1 = closure_9;
      } else {
        tmp7 = closure_0;
        tmp8 = closure_2;
        obj4 = closure_0(closure_2[8]);
        tmp9 = closure_4;
        tmp10 = closure_8;
        withSpringResult1 = obj4.withSpring(closure_4.get(), closure_8);
      }
      obj1.borderBottomRightRadius = withSpringResult1;
      if (obj.get() === tmp.EXPANDED) {
        tmp13 = questDockWrapperSpecs;
        tmp14 = closure_11;
        num = 2;
        width = questDockWrapperSpecs.get().width - 2 * closure_11;
      } else {
        tmp12 = questDockWrapperSpecs;
        width = questDockWrapperSpecs.get().width;
      }
      obj1.width = width;
      tmp15 = closure_0;
      tmp16 = closure_2;
      obj5 = closure_0(closure_2[8]);
      num2 = 0;
      if (obj.get() === tmp.EXPANDED) {
        num2 = closure_11;
      }
      obj9 = { translateX: obj5.withSpring(num2, closure_8) };
      tmp17 = closure_8;
      items = [, ];
      items[0] = obj9;
      tmp15Result = tmp15(tmp16[8]);
      num3 = 0;
      if (obj.get() === tmp.EXPANDED) {
        num3 = closure_11;
      }
      obj10 = { translateY: tmp15Result.withSpring(num3, tmp17) };
      items[1] = obj10;
      obj1.transform = items;
      return obj1;
    }
  }
  let obj2 = activeQuestDockMode(4497);
  Y.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, withSpring: activeQuestDockMode(5187).withSpring, questDockAnimatedBorderRadius: tmp9, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11 };
  Y.__workletHash = 3882883093351;
  Y.__initData = __initData9;
  const animatedStyle = obj2.useAnimatedStyle(Y);
  let obj3 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, withSpring: activeQuestDockMode(5187).withSpring, questDockAnimatedBorderRadius: tmp9, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11 };
  const fn = function x() {
    let num = 1;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 0;
    }
    return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
  };
  let obj4 = activeQuestDockMode(4497);
  fn.__closure = { withSpring: activeQuestDockMode(5187).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn.__workletHash = 5461767762400;
  fn.__initData = __initData10;
  const animatedStyle1 = obj4.useAnimatedStyle(fn);
  let obj5 = { withSpring: activeQuestDockMode(5187).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  const fn2 = function q() {
    let right = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      right = -1 * v65535;
    }
    return { right };
  };
  fn2.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  fn2.__workletHash = 17147681641180;
  fn2.__initData = __initData11;
  const animatedStyle2 = activeQuestDockMode(4497).useAnimatedStyle(fn2);
  let obj6 = activeQuestDockMode(4497);
  const obj7 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  class W {
    constructor() {
      obj = closure_0(closure_2[8]);
      num = 0;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        num = 1;
      }
      obj1 = { opacity: obj.withSpring(num, closure_8) };
      return obj1;
    }
  }
  const obj8 = activeQuestDockMode(4497);
  W.__closure = { withSpring: activeQuestDockMode(5187).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  W.__workletHash = 17362940839906;
  W.__initData = __initData12;
  const animatedStyle3 = obj8.useAnimatedStyle(W);
  const obj9 = { withSpring: activeQuestDockMode(5187).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  class Z {
    constructor() {
      right = 0;
      if (activeQuestDockMode.get() !== QuestDockMode.EXPANDED) {
        right = closure_10;
      }
      return { right };
    }
  }
  Z.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  Z.__workletHash = 7937699213196;
  Z.__initData = __initData13;
  const animatedStyle4 = activeQuestDockMode(4497).useAnimatedStyle(Z);
  const obj10 = activeQuestDockMode(4497);
  class V {
    constructor() {
      pointerEvents = "none";
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        pointerEvents = "auto";
      }
      return { pointerEvents };
    }
  }
  V.__closure = { activeQuestDockMode, QuestDockMode };
  V.__workletHash = 1087474161008;
  V.__initData = __initData14;
  const animatedProps = activeQuestDockMode(4497).useAnimatedProps(V);
  const obj11 = activeQuestDockMode(4497);
  class F {
    constructor() {
      obj = activeQuestDockMode;
      tmp = QuestDockMode;
      obj1 = { borderRadius: activeQuestDockMode.get() === QuestDockMode.EXPANDED ? closure_9 : closure_3, borderBottomLeftRadius: null, borderBottomRightRadius: null, width: null };
      if (obj.get() === tmp.EXPANDED) {
        withSpringResult = closure_9;
      } else {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj3 = closure_0(closure_2[8]);
        tmp4 = closure_4;
        tmp5 = closure_8;
        withSpringResult = obj3.withSpring(closure_4.get(), closure_8);
      }
      obj1.borderBottomLeftRadius = withSpringResult;
      if (obj.get() === tmp.EXPANDED) {
        withSpringResult1 = closure_9;
      } else {
        tmp7 = closure_0;
        tmp8 = closure_2;
        obj4 = closure_0(closure_2[8]);
        tmp9 = closure_4;
        tmp10 = closure_8;
        withSpringResult1 = obj4.withSpring(closure_4.get(), closure_8);
      }
      obj1.borderBottomRightRadius = withSpringResult1;
      obj1.width = questDockWrapperSpecs.get().width;
      return obj1;
    }
  }
  const obj12 = activeQuestDockMode(4497);
  F.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, withSpring: activeQuestDockMode(5187).withSpring, questDockAnimatedBorderRadius: tmp9, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs };
  F.__workletHash = 5464365691303;
  F.__initData = __initData15;
  const animatedStyle5 = obj12.useAnimatedStyle(F);
  const obj13 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, withSpring: activeQuestDockMode(5187).withSpring, questDockAnimatedBorderRadius: tmp9, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs };
  const fn3 = function j() {
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 1;
    }
    return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
  };
  const obj14 = activeQuestDockMode(4497);
  fn3.__closure = { withSpring: activeQuestDockMode(5187).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn3.__workletHash = 7025233131750;
  fn3.__initData = __initData16;
  let animatedStyle6;
  if (flag) {
    animatedStyle6 = obj14.useAnimatedStyle(fn3);
  }
  const tmp18 = closure_15();
  const obj16 = { style: null, layout: questDockHeaderLayoutAnimation, children: null };
  let items = [tmp18.header, animatedStyle];
  obj16.style = items;
  const obj15 = { withSpring: activeQuestDockMode(5187).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  const tmp7Result = questDockWrapperSpecs(7320);
  if (tmpResult.isAndroid()) {
    if (null != blurHash) {
      const obj17 = { placeholder: blurHash, layoutAnimatedStyle: animatedStyle5, opacityAnimatedStyle: animatedStyle6, layoutAnimation: tmp21 };
      let tmp24 = closure_12(tmp7(15451), obj17);
      let tmp23 = closure_12;
    }
    const items1 = [tmp24, children, ];
    const obj18 = { style: tmp18.secondaryContent, children: null };
    const obj19 = { style: null, layout: null, children: null };
    const items2 = [tmp18.collapsedContent, animatedStyle2];
    obj19.style = items2;
    obj19.layout = tmp21;
    const obj20 = { style: animatedStyle1, children: collapsedContent };
    obj19.children = tmp23(tmp7(7320), obj20);
    const items3 = [tmp23(tmp7(7320), obj19), ];
    const obj21 = { animatedProps, style: animatedStyle4, layout: tmp21, children: null };
    const tmp7Result4 = tmp7(7320);
    const obj22 = { style: null, children: null };
    const items4 = [tmp18.expandedContent, animatedStyle3];
    obj22.style = items4;
    const tmp7Result5 = tmp7(7320);
    if (withPressableDisclosure) {
      const obj23 = { onPress: onDisclosurePress, accessibilityRole: "button", style: null, children: null };
      const items5 = [, ];
      ({ actionDisclosures: arr7[0], tertiaryContent: arr7[1] } = tmp18);
      obj23.style = items5;
      const obj24 = { children: null };
      const obj25 = { color: "interactive-text-active", variant: "text-sm/medium", children: null };
      const intl2 = tmp(1119).intl;
      obj25.children = intl2.string(tmp(1119).t.o6FLcF);
      const items6 = [tmp23(tmp(4754).Text, obj25), ];
      const obj26 = { color: tmp7(580).colors.INTERACTIVE_TEXT_ACTIVE, style: tmp18.actionDisclosuresIcon };
      items6[1] = tmp23(tmp(11490).CircleQuestionIcon, obj26);
      obj24.children = items6;
      obj23.children = tmp19(closure_13, obj24);
      let tmp23Result = tmp23(tmp(5341).PressableOpacity, obj23);
    } else {
      const obj27 = { style: null, children: null };
      const items7 = [, ];
      ({ actionDisclosures: arr6[0], tertiaryContent: arr6[1] } = tmp18);
      obj27.style = items7;
      const obj28 = { color: "text-default", variant: "text-sm/medium", children: null };
      const intl = tmp(1119).intl;
      obj28.children = intl.string(tmp(1119).t.o6FLcF);
      obj27.children = tmp23(tmp(4754).Text, obj28);
      tmp23Result = tmp23(tmp26, obj27);
    }
    const items8 = [tmp23Result, tmp23(tmp7(15453), {}), ];
    const obj29 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    const string = tmp(1119).intl.string;
    class Y {
      constructor() {
        obj = activeQuestDockMode;
        tmp = QuestDockMode;
        obj1 = { borderTopLeftRadius: activeQuestDockMode.get() === QuestDockMode.EXPANDED ? closure_9 : closure_3, borderTopRightRadius: obj.get() === tmp.EXPANDED ? closure_9 : closure_3, borderBottomLeftRadius: null, borderBottomRightRadius: null, width: null, transform: null };
        if (obj.get() === tmp.EXPANDED) {
          withSpringResult = closure_9;
        } else {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj3 = closure_0(closure_2[8]);
          tmp4 = closure_4;
          tmp5 = closure_8;
          withSpringResult = obj3.withSpring(closure_4.get(), closure_8);
        }
        obj1.borderBottomLeftRadius = withSpringResult;
        if (obj.get() === tmp.EXPANDED) {
          withSpringResult1 = closure_9;
        } else {
          tmp7 = closure_0;
          tmp8 = closure_2;
          obj4 = closure_0(closure_2[8]);
          tmp9 = closure_4;
          tmp10 = closure_8;
          withSpringResult1 = obj4.withSpring(closure_4.get(), closure_8);
        }
        obj1.borderBottomRightRadius = withSpringResult1;
        if (obj.get() === tmp.EXPANDED) {
          tmp13 = questDockWrapperSpecs;
          tmp14 = closure_11;
          num = 2;
          width = questDockWrapperSpecs.get().width - 2 * closure_11;
        } else {
          tmp12 = questDockWrapperSpecs;
          width = questDockWrapperSpecs.get().width;
        }
        obj1.width = width;
        tmp15 = closure_0;
        tmp16 = closure_2;
        obj5 = closure_0(closure_2[8]);
        num2 = 0;
        if (obj.get() === tmp.EXPANDED) {
          num2 = closure_11;
        }
        obj9 = { translateX: obj5.withSpring(num2, closure_8) };
        tmp17 = closure_8;
        items = [, ];
        items[0] = obj9;
        tmp15Result = tmp15(tmp16[8]);
        num3 = 0;
        if (obj.get() === tmp.EXPANDED) {
          num3 = closure_11;
        }
        obj10 = { translateY: tmp15Result.withSpring(num3, tmp17) };
        items[1] = obj10;
        obj1.transform = items;
        return obj1;
      }
    }
    obj29.onPress = onSubmenuPress;
    obj29.style = tmp18.tertiaryContent;
    const obj30 = { color: tmp7(580).colors.INTERACTIVE_TEXT_ACTIVE };
    obj29.children = tmp23(tmp(8180).MoreHorizontalIcon, obj30);
    items8[2] = tmp23(tmp(5341).PressableOpacity, obj29);
    obj22.children = items8;
    obj21.children = tmp19(tmp7(7320), obj22);
    items3[1] = tmp23(tmp7Result5, obj21);
    obj18.children = items3;
    items1[2] = tmp19(closure_6, obj18);
    obj16.children = items1;
    return tmp19(tmp7Result, obj16);
  }
  tmp23 = closure_12;
  tmp24 = closure_12(tmp7(15417), { layoutAnimatedStyle: animatedStyle5, opacityAnimatedStyle: animatedStyle6, layoutAnimation: tmp21 });
}));
