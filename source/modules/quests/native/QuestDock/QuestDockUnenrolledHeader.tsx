// Module ID: 14131
// Function ID: 108640
// Name: questDockHeaderLayoutAnimation
// Dependencies: [57, 31, 27, 4976, 14044, 482, 33, 4130, 689, 4542, 14126, 14045, 478, 14041, 14054, 4979, 6968, 4066, 3976, 3834, 14128, 3991, 14040, 7678, 14132, 14106, 5085, 14134, 14135, 14097, 4126, 1212, 4660, 9834, 9007, 2]

// Module 14131 (questDockHeaderLayoutAnimation)
import _slicedToArray from "_slicedToArray";
import importAllResult from "getSystemLocale";
import get_ActivityIndicator from "registerAsset";
import { QuestDockMode } from "QuestsExperimentLocations";
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT";
import { ThemeTypes } from "sum";
import jsxProd from "CircleQuestionIcon";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_13;
let closure_14;
let closure_15;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
({ AccessibilityInfo: closure_5, View: closure_6 } = get_ActivityIndicator);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_8, QUEST_DOCK_CONTENT_BORDER_RADII: closure_9, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11 } = QUEST_DOCK_COLLAPSED_HEIGHT);
({ jsx: closure_13, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
obj = { questDockHeader: obj, wreathImage: { height: 35, marginRight: 4, width: 35 }, questDockHeaderPrimary: { alignItems: "center", flexDirection: "row" }, logo: { marginTop: 2 }, questDockHeaderSecondary: { flexGrow: 0, flexShrink: 0 }, questDockHeaderContentCollapsed: { justifyContent: "center", position: "absolute", bottom: 0, top: 0, right: 0 }, questDockHeaderContentExpanded: { alignItems: "center", flexDirection: "row", gap: 8 }, questDockHeaderActionDisclosures: { alignItems: "center", display: "flex", flexDirection: "row", gap: 4 }, questDockHeaderActionDisclosuresIcon: { height: 14, width: 14 } };
obj = { alignItems: "center", justifyContent: "space-between", flexDirection: "row", height: QUEST_DOCK_COLLAPSED_HEIGHT.QUEST_DOCK_COLLAPSED_HEIGHT, overflow: "hidden", paddingRight: 16, paddingLeft: 8, position: "absolute", zIndex: 2 };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, opacity: 0.2, height: 18, width: 1.5 };
obj.questDockHeaderActionSeparator = _createForOfIteratorHelperLoose;
obj.questDockHeaderTertiaryContent = { opacity: 0.7 };
let closure_16 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_17 = { code: "function questDockHeaderLayoutAnimation_QuestDockUnenrolledHeaderTsx1(values){const{withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:withSpring(values.targetOriginX,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),originY:withSpring(values.targetOriginY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:withSpring(values.targetHeight,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:withSpring(values.targetWidth,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}};}" };
let closure_18 = (() => {
  function questDockHeaderLayoutAnimation(currentOriginX) {
    obj = { initialValues: obj };
    obj = { originX: currentOriginX.currentOriginX, originY: currentOriginX.currentOriginY, width: currentOriginX.currentWidth, height: currentOriginX.currentHeight };
    obj = { originX: outer1_0(outer1_2[9]).withSpring(currentOriginX.targetOriginX, outer1_8) };
    const obj4 = outer1_0(outer1_2[9]);
    obj.originY = outer1_0(outer1_2[9]).withSpring(currentOriginX.targetOriginY, outer1_8);
    const obj5 = outer1_0(outer1_2[9]);
    obj.height = outer1_0(outer1_2[9]).withSpring(currentOriginX.targetHeight, outer1_8);
    const obj6 = outer1_0(outer1_2[9]);
    obj.width = outer1_0(outer1_2[9]).withSpring(currentOriginX.targetWidth, outer1_8);
    obj.animations = obj;
    return obj;
  }
  questDockHeaderLayoutAnimation.__closure = { withSpring: require(4542) /* withSpring */.withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_8 };
  questDockHeaderLayoutAnimation.__workletHash = 6787168806966;
  questDockHeaderLayoutAnimation.__initData = closure_17;
  return questDockHeaderLayoutAnimation;
})();
let closure_19 = { code: "function QuestDockUnenrolledHeaderTsx2(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:activeQuestDockMode.get()===QuestDockMode.EXPANDED?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}]};}" };
let closure_20 = { code: "function QuestDockUnenrolledHeaderTsx3(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
let closure_21 = { code: "function QuestDockUnenrolledHeaderTsx4(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED*-1:0};}" };
let closure_22 = { code: "function QuestDockUnenrolledHeaderTsx5(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
let closure_23 = { code: "function QuestDockUnenrolledHeaderTsx6(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED};}" };
let closure_24 = { code: "function QuestDockUnenrolledHeaderTsx7(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};}" };
let closure_25 = { code: "function QuestDockUnenrolledHeaderTsx8(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs}=this.__closure;return{borderRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:questDockWrapperSpecs.get().width};}" };
const memoResult = importAllResult.memo(function QuestDockUnenrolledHeader() {
  let _slicedToArray;
  let tmp3;
  const quest = token.useContext(activeQuestDockMode(questDockWrapperSpecs[10])).quest;
  const context = token.useContext(quest(questDockWrapperSpecs[11]).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  [tmp3, _slicedToArray] = callback(token.useState(false), 2);
  const effect = token.useEffect(() => {
    if (obj.isIOS()) {
      const result = tmp11.isReduceTransparencyEnabled();
      result.then(_slicedToArray);
      let closure_0 = tmp11.addEventListener("reduceTransparencyChanged", _slicedToArray);
      return () => closure_0.remove();
    }
    obj = quest(questDockWrapperSpecs[12]);
  }, []);
  let obj = quest(questDockWrapperSpecs[13]);
  let items = [quest];
  const tmp2 = callback(token.useState(false), 2);
  callback = token.useCallback(() => {
    let obj = activeQuestDockMode(questDockWrapperSpecs[14]);
    obj = { quest, isTargetedDisclosure: true };
    obj = { content: quest(questDockWrapperSpecs[15]).QuestContent.QUEST_BAR_MOBILE, ctaContent: quest(questDockWrapperSpecs[16]).QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: quest(questDockWrapperSpecs[15]).QuestContent.QUEST_BAR_MOBILE };
    obj.trackingCtx = obj;
    obj.showModal(obj);
  }, items);
  const actionSheetPressHandler = obj.useActionSheetPressHandler(quest);
  let obj1 = quest(questDockWrapperSpecs[18]);
  const tmp7 = activeQuestDockMode(questDockWrapperSpecs[17])();
  let obj2 = quest(questDockWrapperSpecs[19]);
  token = obj2.useToken(activeQuestDockMode(questDockWrapperSpecs[8]).modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp11 = activeQuestDockMode(questDockWrapperSpecs[20])(token);
  let closure_5 = tmp11;
  let obj3 = quest(questDockWrapperSpecs[21]);
  class K {
    constructor() {
      obj = { borderTopLeftRadius: activeQuestDockMode.get() === outer1_7.EXPANDED ? outer1_9 : closure_4, borderTopRightRadius: activeQuestDockMode.get() === outer1_7.EXPANDED ? outer1_9 : closure_4 };
      if (activeQuestDockMode.get() === outer1_7.EXPANDED) {
        withSpringResult = outer1_9;
      } else {
        tmp = quest;
        tmp2 = questDockWrapperSpecs;
        num = 9;
        obj2 = quest(questDockWrapperSpecs[9]);
        tmp3 = closure_5;
        tmp4 = outer1_8;
        withSpringResult = obj2.withSpring(closure_5.get(), outer1_8);
      }
      obj.borderBottomLeftRadius = withSpringResult;
      if (activeQuestDockMode.get() === outer1_7.EXPANDED) {
        withSpringResult1 = outer1_9;
      } else {
        tmp6 = quest;
        tmp7 = questDockWrapperSpecs;
        num2 = 9;
        obj3 = quest(questDockWrapperSpecs[9]);
        tmp8 = closure_5;
        tmp9 = outer1_8;
        withSpringResult1 = obj3.withSpring(closure_5.get(), outer1_8);
      }
      obj.borderBottomRightRadius = withSpringResult1;
      if (activeQuestDockMode.get() === outer1_7.EXPANDED) {
        tmp12 = questDockWrapperSpecs;
        tmp13 = outer1_11;
        num3 = 2;
        width = questDockWrapperSpecs.get().width - 2 * outer1_11;
      } else {
        tmp11 = questDockWrapperSpecs;
        width = questDockWrapperSpecs.get().width;
      }
      obj.width = width;
      obj = {};
      obj5 = quest(questDockWrapperSpecs[9]);
      num4 = 0;
      if (activeQuestDockMode.get() === outer1_7.EXPANDED) {
        num4 = outer1_11;
      }
      obj.translateX = obj5.withSpring(num4, outer1_8);
      items = [, ];
      items[0] = obj;
      obj1 = {};
      obj7 = quest(questDockWrapperSpecs[9]);
      num5 = 0;
      if (activeQuestDockMode.get() === outer1_7.EXPANDED) {
        num5 = outer1_11;
      }
      obj1.translateY = obj7.withSpring(num5, outer1_8);
      items[1] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  obj = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII: closure_9, questDockBorderRadius: token, withSpring: quest(questDockWrapperSpecs[9]).withSpring, questDockAnimatedBorderRadius: tmp11, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_8, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11 };
  K.__closure = obj;
  K.__workletHash = 15527986377887;
  K.__initData = closure_19;
  const animatedStyle = obj3.useAnimatedStyle(K);
  let obj5 = quest(questDockWrapperSpecs[21]);
  class X {
    constructor() {
      obj = {};
      obj2 = quest(questDockWrapperSpecs[9]);
      num = 1;
      if (activeQuestDockMode.get() === outer1_7.EXPANDED) {
        num = 0;
      }
      obj.opacity = obj2.withSpring(num, outer1_8);
      return obj;
    }
  }
  obj = { withSpring: quest(questDockWrapperSpecs[9]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_8 };
  X.__closure = obj;
  X.__workletHash = 15527972438968;
  X.__initData = closure_20;
  const animatedStyle1 = obj5.useAnimatedStyle(X);
  let obj7 = quest(questDockWrapperSpecs[21]);
  const fn = function q() {
    const obj = {};
    let num = 0;
    if (activeQuestDockMode.get() === outer1_7.EXPANDED) {
      num = -1 * outer1_10;
    }
    obj.right = num;
    return obj;
  };
  obj1 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  fn.__closure = obj1;
  fn.__workletHash = 7866036039040;
  fn.__initData = closure_21;
  const animatedStyle2 = obj7.useAnimatedStyle(fn);
  let obj9 = quest(questDockWrapperSpecs[21]);
  const fn2 = function f() {
    const obj = {};
    let num = 0;
    if (activeQuestDockMode.get() === outer1_7.EXPANDED) {
      num = 1;
    }
    obj.opacity = quest(questDockWrapperSpecs[9]).withSpring(num, outer1_8);
    return obj;
  };
  obj2 = { withSpring: quest(questDockWrapperSpecs[9]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_8 };
  fn2.__closure = obj2;
  fn2.__workletHash = 11647269239934;
  fn2.__initData = closure_22;
  const animatedStyle3 = obj9.useAnimatedStyle(fn2);
  let obj11 = quest(questDockWrapperSpecs[21]);
  class B {
    constructor() {
      obj = {};
      num = 0;
      if (activeQuestDockMode.get() !== outer1_7.EXPANDED) {
        num = outer1_10;
      }
      obj.right = num;
      return obj;
    }
  }
  B.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  B.__workletHash = 14794727045076;
  B.__initData = closure_23;
  const animatedStyle4 = obj11.useAnimatedStyle(B);
  let obj12 = quest(questDockWrapperSpecs[21]);
  class G {
    constructor() {
      obj = {};
      str = "none";
      if (activeQuestDockMode.get() === outer1_7.EXPANDED) {
        str = "auto";
      }
      obj.pointerEvents = str;
      return obj;
    }
  }
  G.__closure = { activeQuestDockMode, QuestDockMode };
  G.__workletHash = 6738114933032;
  G.__initData = closure_24;
  const animatedProps = obj12.useAnimatedProps(G);
  let obj13 = quest(questDockWrapperSpecs[21]);
  const fn3 = function x() {
    const obj = { borderRadius: activeQuestDockMode.get() === outer1_7.EXPANDED ? outer1_9 : token };
    if (activeQuestDockMode.get() === outer1_7.EXPANDED) {
      let withSpringResult = outer1_9;
    } else {
      withSpringResult = quest(questDockWrapperSpecs[9]).withSpring(tmp11.get(), outer1_8);
      const obj2 = quest(questDockWrapperSpecs[9]);
    }
    obj.borderBottomLeftRadius = withSpringResult;
    if (activeQuestDockMode.get() === outer1_7.EXPANDED) {
      let withSpringResult1 = outer1_9;
    } else {
      withSpringResult1 = quest(questDockWrapperSpecs[9]).withSpring(tmp11.get(), outer1_8);
      const obj3 = quest(questDockWrapperSpecs[9]);
    }
    obj.borderBottomRightRadius = withSpringResult1;
    obj.width = questDockWrapperSpecs.get().width;
    return obj;
  };
  obj3 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII: closure_9, questDockBorderRadius: token, withSpring: quest(questDockWrapperSpecs[9]).withSpring, questDockAnimatedBorderRadius: tmp11, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_8, questDockWrapperSpecs };
  fn3.__closure = obj3;
  fn3.__workletHash = 16321960714067;
  fn3.__initData = closure_25;
  const animatedStyle5 = obj13.useAnimatedStyle(fn3);
  const tmp19 = callback4();
  let obj15 = quest(questDockWrapperSpecs[22]);
  const questBarHeroBlurhash = quest.config.assets.questBarHeroBlurhash;
  const questGameLogotypeAssetUrl = obj15.useQuestGameLogotypeAssetUrl(quest);
  const obj4 = { style: items1, layout: closure_18 };
  items1 = [tmp19.questDockHeader, animatedStyle];
  const tmp21 = callback3;
  const tmp9 = obj1.isThemeDark(activeQuestDockMode(questDockWrapperSpecs[17])()) ? ThemeTypes.DARK : ThemeTypes.LIGHT;
  let obj17 = quest(questDockWrapperSpecs[12]);
  if (obj17.isAndroid()) {
    if (null != questBarHeroBlurhash) {
      obj5 = { placeholder: questBarHeroBlurhash, animatedStyle: animatedStyle5, animatedLayout: closure_18 };
      let tmp24 = callback2(activeQuestDockMode(questDockWrapperSpecs[24]), obj5);
    }
    const items2 = [tmp24, , ];
    const obj6 = { style: tmp19.questDockHeaderPrimary };
    obj7 = {};
    if (tmp9 === ThemeTypes.DARK) {
      let tmp38 = activeQuestDockMode(questDockWrapperSpecs[27]);
    } else {
      tmp38 = activeQuestDockMode(questDockWrapperSpecs[28]);
    }
    obj7.source = tmp38;
    obj7.resizeMode = "contain";
    obj7.style = tmp19.wreathImage;
    const items3 = [callback2(activeQuestDockMode(questDockWrapperSpecs[26]), obj7), ];
    const obj8 = { assetUrl: questGameLogotypeAssetUrl, height: 36, maxWidth: 120, style: tmp19.logo };
    items3[1] = callback2(activeQuestDockMode(questDockWrapperSpecs[29]), obj8);
    obj6.children = items3;
    items2[1] = callback3(closure_6, obj6);
    obj9 = { style: tmp19.questDockHeaderSecondary };
    const obj10 = {};
    const items4 = [tmp19.questDockHeaderContentCollapsed, animatedStyle2];
    obj10.style = items4;
    obj10.layout = closure_18;
    const tmp29 = callback3;
    const tmp30 = closure_6;
    const tmp31 = callback2;
    const tmp34 = activeQuestDockMode(questDockWrapperSpecs[26]);
    obj11 = { style: animatedStyle1 };
    const tmp46 = activeQuestDockMode(questDockWrapperSpecs[23]);
    obj12 = { style: tmp19.questDockHeaderTertiaryContent, variant: "text-sm/medium", color: "interactive-text-active" };
    class K {
      constructor() {
        obj = { borderTopLeftRadius: activeQuestDockMode.get() === outer1_7.EXPANDED ? outer1_9 : closure_4, borderTopRightRadius: activeQuestDockMode.get() === outer1_7.EXPANDED ? outer1_9 : closure_4 };
        if (activeQuestDockMode.get() === outer1_7.EXPANDED) {
          withSpringResult = outer1_9;
        } else {
          tmp = quest;
          tmp2 = questDockWrapperSpecs;
          num = 9;
          obj2 = quest(questDockWrapperSpecs[9]);
          tmp3 = closure_5;
          tmp4 = outer1_8;
          withSpringResult = obj2.withSpring(closure_5.get(), outer1_8);
        }
        obj.borderBottomLeftRadius = withSpringResult;
        if (activeQuestDockMode.get() === outer1_7.EXPANDED) {
          withSpringResult1 = outer1_9;
        } else {
          tmp6 = quest;
          tmp7 = questDockWrapperSpecs;
          num2 = 9;
          obj3 = quest(questDockWrapperSpecs[9]);
          tmp8 = closure_5;
          tmp9 = outer1_8;
          withSpringResult1 = obj3.withSpring(closure_5.get(), outer1_8);
        }
        obj.borderBottomRightRadius = withSpringResult1;
        if (activeQuestDockMode.get() === outer1_7.EXPANDED) {
          tmp12 = questDockWrapperSpecs;
          tmp13 = outer1_11;
          num3 = 2;
          width = questDockWrapperSpecs.get().width - 2 * outer1_11;
        } else {
          tmp11 = questDockWrapperSpecs;
          width = questDockWrapperSpecs.get().width;
        }
        obj.width = width;
        obj = {};
        obj5 = quest(questDockWrapperSpecs[9]);
        num4 = 0;
        if (activeQuestDockMode.get() === outer1_7.EXPANDED) {
          num4 = outer1_11;
        }
        obj.translateX = obj5.withSpring(num4, outer1_8);
        items = [, ];
        items[0] = obj;
        obj1 = {};
        obj7 = quest(questDockWrapperSpecs[9]);
        num5 = 0;
        if (activeQuestDockMode.get() === outer1_7.EXPANDED) {
          num5 = outer1_11;
        }
        obj1.translateY = obj7.withSpring(num5, outer1_8);
        items[1] = obj1;
        obj.transform = items;
        return obj;
      }
    }
    const intl = quest(questDockWrapperSpecs[31]).intl;
    obj12.children = intl.string(quest(questDockWrapperSpecs[31]).t["3mgEQf"]);
    obj11.children = callback2(quest(questDockWrapperSpecs[30]).Text, obj12);
    obj10.children = callback2(activeQuestDockMode(questDockWrapperSpecs[23]), obj11);
    const items5 = [callback2(tmp46, obj10), ];
    obj13 = { animatedProps, style: animatedStyle4, layout: closure_18 };
    activeQuestDockMode(questDockWrapperSpecs[23]);
    const obj14 = {};
    const items6 = [tmp19.questDockHeaderContentExpanded, animatedStyle3];
    obj14.style = items6;
    const tmp48 = activeQuestDockMode(questDockWrapperSpecs[23]);
    obj15 = { onPress: callback };
    class X {
      constructor() {
        obj = {};
        obj2 = quest(questDockWrapperSpecs[9]);
        num = 1;
        if (activeQuestDockMode.get() === outer1_7.EXPANDED) {
          num = 0;
        }
        obj.opacity = obj2.withSpring(num, outer1_8);
        return obj;
      }
    }
    const items7 = [, ];
    ({ questDockHeaderActionDisclosures: arr8[0], questDockHeaderTertiaryContent: arr8[1] } = tmp19);
    obj15.style = items7;
    const obj16 = {};
    obj17 = { color: "interactive-text-active", variant: "text-sm/medium" };
    const intl2 = quest(questDockWrapperSpecs[31]).intl;
    obj17.children = intl2.string(quest(questDockWrapperSpecs[31]).t.o6FLcF);
    const items8 = [callback2(quest(questDockWrapperSpecs[30]).Text, obj17), ];
    const obj18 = { color: activeQuestDockMode(questDockWrapperSpecs[8]).colors.INTERACTIVE_TEXT_ACTIVE, style: tmp19.questDockHeaderActionDisclosuresIcon };
    items8[1] = callback2(quest(questDockWrapperSpecs[33]).CircleQuestionIcon, obj18);
    obj16.children = items8;
    obj15.children = callback3(closure_15, obj16);
    const items9 = [callback2(quest(questDockWrapperSpecs[32]).PressableOpacity, obj15), , ];
    const obj19 = { style: tmp19.questDockHeaderActionSeparator };
    items9[1] = callback2(closure_6, obj19);
    const obj20 = { accessibilityRole: "button", onPress: actionSheetPressHandler, style: tmp19.questDockHeaderTertiaryContent };
    const obj21 = { color: activeQuestDockMode(questDockWrapperSpecs[8]).colors.INTERACTIVE_TEXT_ACTIVE };
    obj20.children = callback2(quest(questDockWrapperSpecs[34]).MoreHorizontalIcon, obj21);
    items9[2] = callback2(quest(questDockWrapperSpecs[32]).PressableOpacity, obj20);
    obj14.children = items9;
    obj13.children = callback3(activeQuestDockMode(questDockWrapperSpecs[23]), obj14);
    class B {
      constructor() {
        obj = {};
        num = 0;
        if (activeQuestDockMode.get() !== outer1_7.EXPANDED) {
          num = outer1_10;
        }
        obj.right = num;
        return obj;
      }
    }
    obj9.children = items5;
    items2[2] = callback3(closure_6, obj9);
    obj4.children = items2;
    return tmp21(tmp22, obj4);
  }
  tmp24 = callback2(activeQuestDockMode(questDockWrapperSpecs[25]), { animatedStyle: animatedStyle5, animatedLayout: closure_18 });
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx");

export default memoResult;
