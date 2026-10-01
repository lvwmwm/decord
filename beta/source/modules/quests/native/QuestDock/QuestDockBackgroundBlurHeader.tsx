// Module ID: 14721
// Function ID: 14722
// Name: QuestDockBackgroundBlurHeader
// Dependencies: [32, 19, 17, 5756, 14624, 21, 4836, 576, 5280, 14625, 1365, 4531, 14713, 4566, 5435, 4832, 1115, 10568, 6494, 14722, 14690, 14724, 7365, 2]

// Module 14721 (QuestDockBackgroundBlurHeader)
import nativeDefault from "native" /* 576 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import spring from "spring" /* 5280 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import QuestDockConstants from "QuestDockConstants" /* 14624 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT;
let QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT;
let QUEST_DOCK_COLLAPSED_HEIGHT;
let c10;
let c9;
let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
let react = react_mod;
({ AccessibilityInfo: hasOwnProperty, View: metroRequire } = react_native);
const QuestDockMode = QuestConstants.QuestDockMode;
const QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = QuestDockConstants.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
({ QUEST_DOCK_CONTENT_BORDER_RADII: c9, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: c10, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: unpackModuleId, QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT, QUEST_DOCK_COLLAPSED_HEIGHT, QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT } = QuestDockConstants);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, secondaryContent: { flexGrow: 0, flexShrink: 0 }, secondaryContentStretched: { alignSelf: "stretch" }, secondaryContentOverlay: { justifyContent: "center", position: "absolute", bottom: 0, top: 0, right: 0 }, expandedContent: obj3, leadingContent: { alignItems: "center", alignSelf: "stretch", flex: 1, flexDirection: "row" }, actionDisclosures: { alignItems: "center", display: "flex", flexDirection: "row", gap: 4 }, actionDisclosuresIcon: { height: 14, width: 14 }, tertiaryContent: { opacity: 0.7 } };
obj2 = { alignItems: "center", justifyContent: "space-between", flexDirection: "row", height: QUEST_DOCK_COLLAPSED_HEIGHT, overflow: "hidden", paddingRight: QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT, paddingLeft: QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT, gap: nativeDefault.space.PX_8, position: "absolute", zIndex: 2 };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 };
let closure_15 = createStyles(obj);
function questDockHeaderLayoutAnimation(originX) {
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  const obj = { initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight }, animations: size };
  size = { originX: obj3.withSpring(originX.targetOriginX, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED), originY: obj4.withSpring(originX.targetOriginY, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED), height: obj5.withSpring(originX.targetHeight, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED), width: obj6.withSpring(originX.targetWidth, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
  obj3 = spring;
  obj4 = spring;
  obj5 = spring;
  obj6 = spring;
  return obj;
}
let obj4 = { withSpring: spring.withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
questDockHeaderLayoutAnimation.__closure = obj4;
questDockHeaderLayoutAnimation.__workletHash = 13829887811453;
questDockHeaderLayoutAnimation.__initData = { code: "function questDockHeaderLayoutAnimation_QuestDockBackgroundBlurHeaderTsx1(values){const{withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:withSpring(values.targetOriginX,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),originY:withSpring(values.targetOriginY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:withSpring(values.targetHeight,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:withSpring(values.targetWidth,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}};}" };
const __initData = { code: "function QuestDockBackgroundBlurHeaderTsx2(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:activeQuestDockMode.get()===QuestDockMode.EXPANDED?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}]};}" };
const __initData2 = { code: "function QuestDockBackgroundBlurHeaderTsx3(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData3 = { code: "function QuestDockBackgroundBlurHeaderTsx4(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED*-1:0};}" };
const __initData4 = { code: "function QuestDockBackgroundBlurHeaderTsx5(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData5 = { code: "function QuestDockBackgroundBlurHeaderTsx6(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED};}" };
const __initData6 = { code: "function QuestDockBackgroundBlurHeaderTsx7(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};}" };
const __initData7 = { code: "function QuestDockBackgroundBlurHeaderTsx8(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs}=this.__closure;return{borderRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:questDockWrapperSpecs.get().width};}" };
const __initData8 = { code: "function QuestDockBackgroundBlurHeaderTsx9(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const memoResult = react.memo(function QuestDockBackgroundBlurHeader(collapsedContent) {
  let MoreHorizontalIcon;
  let Text;
  let blurHash;
  let c2;
  let children;
  let closure_4;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items10;
  let items11;
  let items12;
  let items2;
  let items3;
  let items7;
  let items8;
  let items9;
  let obj16;
  let obj20;
  let obj27;
  let obj29;
  let obj32;
  let onDisclosurePress;
  let onSubmenuPress;
  let secondaryContentWidth;
  let tmp20Result;
  let tmp23;
  let tmp5;
  let tmp7Result6;
  let withPressableDisclosure;
  ({ blurHash, children, secondaryContentWidth, withPressableDisclosure } = collapsedContent);
  collapsedContent = collapsedContent.collapsedContent;
  if (withPressableDisclosure === undefined) {
    withPressableDisclosure = false;
  }
  let flag = collapsedContent.promotedLabelLeading;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = collapsedContent.hideBlurWhenCollapsed;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let activeQuestDockMode;
  dependencyMap = undefined;
  let token;
  react = undefined;
  const tmp = activeQuestDockMode;
  ({ onDisclosurePress, onSubmenuPress } = collapsedContent);
  const context = react.useContext(activeQuestDockMode(14625).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  const questDockWrapperSpecs = context.questDockWrapperSpecs;
  [tmp5, c2] = token(react.useState(false), 2);
  const tmp4 = token(react.useState(false), 2);
  const effect = react.useEffect(() => {
    const obj = utils_PlatformUtils;
    if (obj.isIOS()) {
      const result = hasOwnProperty.isReduceTransparencyEnabled();
      result.then(c2);
      let closure_0 = hasOwnProperty.addEventListener("reduceTransparencyChanged", c2);
      return () => closure_0.remove();
    }
  }, []);
  let obj = activeQuestDockMode(4531);
  token = obj.useToken(questDockWrapperSpecs(576).modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp9 = questDockWrapperSpecs(14713)(token);
  react = tmp9;
  let obj2 = activeQuestDockMode(4566);
  const fn = function q() {
    let items;
    let width;
    let withSpringResult;
    let withSpringResult1;
    const obj2 = { borderTopLeftRadius: activeQuestDockMode.get() === QuestDockMode.EXPANDED ? c9 : token, borderTopRightRadius: activeQuestDockMode.get() === QuestDockMode.EXPANDED ? c9 : token, borderBottomLeftRadius: withSpringResult, borderBottomRightRadius: withSpringResult1, width, transform: items };
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      withSpringResult = c9;
    } else {
      const obj3 = spring;
      withSpringResult = obj3.withSpring(closure_4.get(), QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
    }
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      withSpringResult1 = c9;
    } else {
      const obj4 = spring;
      withSpringResult1 = obj4.withSpring(closure_4.get(), QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
    }
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      width = questDockWrapperSpecs.get().width - 2 * unpackModuleId;
    } else {
      width = questDockWrapperSpecs.get().width;
    }
    const withSpring = spring.withSpring;
    let num2 = 0;
    spring;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num2 = unpackModuleId;
    }
    items = [{ translateX: withSpring(num2, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) }, ];
    ({ translateX: withSpring(num2, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) });
    const withSpring2 = tmp15(5280).withSpring;
    let num3 = 0;
    spring;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num3 = unpackModuleId;
    }
    items[1] = { translateY: withSpring2(num3, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
    ({ translateY: withSpring2(num3, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) });
    return obj2;
  };
  let obj3 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, withSpring: activeQuestDockMode(5280).withSpring, questDockAnimatedBorderRadius: tmp9, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11 };
  fn.__closure = obj3;
  fn.__workletHash = 17202411570804;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj4 = activeQuestDockMode(4566);
  class W {
    constructor() {
      const withSpring = spring.withSpring;
      let num = 1;
      spring;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        num = 0;
      }
      const obj = { opacity: withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
      return obj;
    }
  }
  const obj5 = { withSpring: activeQuestDockMode(5280).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  W.__closure = obj5;
  W.__workletHash = 5804990093011;
  W.__initData = __initData2;
  const animatedStyle1 = obj4.useAnimatedStyle(W);
  const obj6 = activeQuestDockMode(4566);
  class F {
    constructor() {
      let right = 0;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        right = -1 * authStore;
      }
      return { right };
    }
  }
  const obj7 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  F.__closure = obj7;
  F.__workletHash = 14001429324395;
  F.__initData = __initData3;
  const animatedStyle2 = obj6.useAnimatedStyle(F);
  const obj8 = activeQuestDockMode(4566);
  class V {
    constructor() {
      const withSpring = spring.withSpring;
      let num = 0;
      spring;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        num = 1;
      }
      const obj = { opacity: withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
      return obj;
    }
  }
  V.__closure = { withSpring: activeQuestDockMode(5280).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  V.__workletHash = 6229744150165;
  V.__initData = __initData4;
  ({ withSpring: activeQuestDockMode(5280).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED });
  const animatedStyle3 = obj8.useAnimatedStyle(V);
  const obj10 = activeQuestDockMode(4566);
  class Z {
    constructor() {
      let right = 0;
      if (activeQuestDockMode.get() !== QuestDockMode.EXPANDED) {
        right = authStore;
      }
      return { right };
    }
  }
  Z.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  Z.__workletHash = 10870034799551;
  Z.__initData = __initData5;
  const animatedStyle4 = obj10.useAnimatedStyle(Z);
  const fn2 = function j() {
    let pointerEvents = "none";
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      pointerEvents = "auto";
    }
    return { pointerEvents };
  };
  fn2.__closure = { activeQuestDockMode, QuestDockMode };
  fn2.__workletHash = 3272003844163;
  fn2.__initData = __initData6;
  const obj11 = activeQuestDockMode(4566);
  const animatedProps = obj11.useAnimatedProps(fn2);
  const fn3 = function z() {
    let withSpringResult;
    let withSpringResult1;
    const obj2 = { borderRadius: activeQuestDockMode.get() === QuestDockMode.EXPANDED ? c9 : token, borderBottomLeftRadius: withSpringResult, borderBottomRightRadius: withSpringResult1, width: questDockWrapperSpecs.get().width };
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      withSpringResult = c9;
    } else {
      const obj3 = spring;
      withSpringResult = obj3.withSpring(closure_4.get(), QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
    }
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      withSpringResult1 = c9;
    } else {
      const obj4 = spring;
      withSpringResult1 = obj4.withSpring(closure_4.get(), QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
    }
    return obj2;
  };
  const obj12 = activeQuestDockMode(4566);
  fn3.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, withSpring: activeQuestDockMode(5280).withSpring, questDockAnimatedBorderRadius: tmp9, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs };
  fn3.__workletHash = 8904986205240;
  fn3.__initData = __initData7;
  ({ activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, withSpring: activeQuestDockMode(5280).withSpring, questDockAnimatedBorderRadius: tmp9, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs });
  const animatedStyle5 = obj12.useAnimatedStyle(fn3);
  const tmp17 = activeQuestDockMode(4566);
  class J {
    constructor() {
      const withSpring = spring.withSpring;
      let num = 0;
      spring;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        num = 1;
      }
      const obj = { opacity: withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
      return obj;
    }
  }
  const useAnimatedStyle = tmp17.useAnimatedStyle;
  J.__closure = { withSpring: activeQuestDockMode(5280).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  J.__workletHash = 10022958892825;
  J.__initData = __initData8;
  let animatedStyle6;
  ({ withSpring: activeQuestDockMode(5280).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED });
  if (flag2) {
    animatedStyle6 = useAnimatedStyle(J);
  }
  const tmp19 = closure_15();
  if (withPressableDisclosure) {
    const obj15 = { onPress: onDisclosurePress, accessibilityRole: "button", style: items, children: closure_14(closure_13, obj16) };
    items = [, ];
    ({ actionDisclosures: arr2[0], tertiaryContent: arr2[1] } = tmp19);
    obj16 = { children: items1 };
    const PressableOpacity = tmp(5435).PressableOpacity;
    const obj17 = { color: "interactive-text-active", variant: "text-sm/medium", children: intl2.string(tmp(1115).t.o6FLcF) };
    const Text2 = tmp(4832).Text;
    intl2 = tmp(1115).intl;
    items1 = [closure_12(Text2, obj17), ];
    const obj18 = { color: questDockWrapperSpecs(576).colors.INTERACTIVE_TEXT_ACTIVE, style: tmp19.actionDisclosuresIcon };
    const CircleQuestionIcon = tmp(10568).CircleQuestionIcon;
    items1[1] = closure_12(CircleQuestionIcon, obj18);
    tmp20Result = tmp20(PressableOpacity, obj15);
    tmp23 = tmp20;
  } else {
    const obj19 = { style: items2, children: closure_12(Text, obj20) };
    items2 = [, ];
    ({ actionDisclosures: arr[0], tertiaryContent: arr[1] } = tmp19);
    obj20 = { color: "text-default", variant: "text-sm/medium", children: intl.string(tmp(1115).t.o6FLcF) };
    Text = tmp(4832).Text;
    intl = tmp(1115).intl;
    tmp20Result = tmp20(closure_6, obj19);
    tmp23 = tmp20;
  }
  const obj21 = { style: items3, layout: questDockHeaderLayoutAnimation, children: null };
  items3 = [tmp19.header, animatedStyle];
  const tmp7Result = questDockWrapperSpecs(6494);
  const tmpResult = tmp(1365);
  if (tmpResult.isAndroid()) {
    let tmp23Result;
    if (null != blurHash) {
      const obj22 = { placeholder: blurHash, layoutAnimatedStyle: animatedStyle5, opacityAnimatedStyle: animatedStyle6, layoutAnimation: questDockHeaderLayoutAnimation };
      tmp23Result = tmp23(tmp7(14722), obj22);
    }
    const items4 = [tmp23Result, , ];
    let tmp23Result2 = children;
    if (flag) {
      const obj23 = { style: tmp19.leadingContent, children };
      tmp23Result2 = tmp23(closure_6, obj23);
    }
    items4[1] = tmp23Result2;
    const items5 = [tmp19.secondaryContent, ];
    let tmp35 = null != secondaryContentWidth;
    const tmp33 = closure_6;
    if (tmp35) {
      const items6 = [tmp19.secondaryContentStretched, ];
      const obj24 = { width: secondaryContentWidth };
      items6[1] = obj24;
      tmp35 = items6;
    }
    const obj25 = { style: items5, children: items8 };
    items5[1] = tmp35;
    const obj26 = { style: items7, layout: questDockHeaderLayoutAnimation, children: tmp23(questDockWrapperSpecs(6494), obj27) };
    items7 = [tmp19.secondaryContentOverlay, animatedStyle2];
    obj27 = { style: animatedStyle1, children: collapsedContent };
    const tmp7Result4 = questDockWrapperSpecs(6494);
    items8 = [tmp23(tmp7Result4, obj26), ];
    let secondaryContentOverlay = null != secondaryContentWidth;
    const obj28 = { animatedProps, style: items9, layout: questDockHeaderLayoutAnimation, children: closure_14(tmp7Result6, obj29) };
    const tmp7Result5 = questDockWrapperSpecs(6494);
    if (secondaryContentOverlay) {
      secondaryContentOverlay = tmp19.secondaryContentOverlay;
    }
    items9 = [secondaryContentOverlay, animatedStyle4];
    obj29 = { style: items10, children: items12 };
    items10 = [tmp19.expandedContent, animatedStyle3];
    let tmp26Result = !flag;
    tmp7Result6 = questDockWrapperSpecs(6494);
    if (!flag) {
      const obj30 = { children: items11 };
      items11 = [tmp20Result, tmp23(tmp7(14724), {})];
      tmp26Result = tmp26(closure_13, obj30);
    }
    items12 = [tmp26Result, ];
    const obj31 = { accessibilityRole: "button", accessibilityLabel: intl3.string(tmp(1115).t.PdRCRg), onPress: onSubmenuPress, style: tmp19.tertiaryContent, children: tmp23(MoreHorizontalIcon, obj32) };
    const PressableOpacity2 = tmp(5435).PressableOpacity;
    intl3 = tmp(1115).intl;
    obj32 = { color: questDockWrapperSpecs(576).colors.INTERACTIVE_TEXT_ACTIVE };
    MoreHorizontalIcon = tmp(7365).MoreHorizontalIcon;
    items12[1] = tmp23(PressableOpacity2, obj31);
    items8[1] = tmp23(tmp7Result5, obj28);
    items4[2] = closure_14(tmp33, obj25);
    class W {
      constructor() {
        const withSpring = spring.withSpring;
        let num = 1;
        spring;
        if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
          num = 0;
        }
        const obj = { opacity: withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
        return obj;
      }
    }
    return closure_14(tmp7Result, obj21);
  }
  tmp23Result = tmp23(tmp7(14690), { layoutAnimatedStyle: animatedStyle5, opacityAnimatedStyle: animatedStyle6, layoutAnimation: tmp28 });
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBackgroundBlurHeader.tsx");

export default memoResult;
