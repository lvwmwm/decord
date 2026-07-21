// Module ID: 13960
// Function ID: 106121
// Name: questDockHeaderLayoutAnimation
// Dependencies: []

// Module 13960 (questDockHeaderLayoutAnimation)
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ AccessibilityInfo: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
const QuestDockMode = arg1(dependencyMap[3]).QuestDockMode;
const tmp3 = arg1(dependencyMap[4]);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_8, QUEST_DOCK_CONTENT_BORDER_RADII: closure_9, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11 } = tmp3);
const ThemeTypes = arg1(dependencyMap[5]).ThemeTypes;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_13, jsxs: closure_14, Fragment: closure_15 } = arg1(dependencyMap[6]));
const tmp4 = arg1(dependencyMap[6]);
let obj = { questDockHeader: { height: tmp3.QUEST_DOCK_COLLAPSED_HEIGHT }, wreathImage: { "Bool(false)": "png", "Bool(false)": 99, "Bool(false)": "absolute" }, questDockHeaderPrimary: {}, logo: { marginTop: 2 }, questDockHeaderSecondary: { isArray: -536870861, diversity: -299892737 }, questDockHeaderContentCollapsed: {}, questDockHeaderContentExpanded: {}, questDockHeaderActionDisclosures: {}, questDockHeaderActionDisclosuresIcon: { y: false, isArray: false } };
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.TEXT_DEFAULT };
obj.questDockHeaderActionSeparator = obj;
obj.questDockHeaderTertiaryContent = { opacity: 0.7 };
let closure_16 = arg1(dependencyMap[7]).createStyles(obj);
let closure_17 = { code: "function questDockHeaderLayoutAnimation_QuestDockUnenrolledHeaderTsx1(values){const{withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:withSpring(values.targetOriginX,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),originY:withSpring(values.targetOriginY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:withSpring(values.targetHeight,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:withSpring(values.targetWidth,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}};}" };
let closure_18 = () => {
  function questDockHeaderLayoutAnimation(currentOriginX) {
    let obj = { initialValues: obj };
    obj = { originX: currentOriginX.currentOriginX, originY: currentOriginX.currentOriginY, width: currentOriginX.currentWidth, height: currentOriginX.currentHeight };
    obj = { originX: callback(closure_2[9]).withSpring(currentOriginX.targetOriginX, closure_8) };
    const obj4 = callback(closure_2[9]);
    obj.originY = callback(closure_2[9]).withSpring(currentOriginX.targetOriginY, closure_8);
    const obj5 = callback(closure_2[9]);
    obj.height = callback(closure_2[9]).withSpring(currentOriginX.targetHeight, closure_8);
    const obj6 = callback(closure_2[9]);
    obj.width = callback(closure_2[9]).withSpring(currentOriginX.targetWidth, closure_8);
    obj.animations = obj;
    return obj;
  }
  questDockHeaderLayoutAnimation.__closure = { withSpring: arg1(dependencyMap[9]).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_8 };
  questDockHeaderLayoutAnimation.__workletHash = 6787168806966;
  questDockHeaderLayoutAnimation.__initData = closure_17;
  return questDockHeaderLayoutAnimation;
}();
let closure_19 = { code: "function QuestDockUnenrolledHeaderTsx2(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:activeQuestDockMode.get()===QuestDockMode.EXPANDED?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}]};}" };
let closure_20 = { code: "function QuestDockUnenrolledHeaderTsx3(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
let closure_21 = { code: "function QuestDockUnenrolledHeaderTsx4(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED*-1:0};}" };
let closure_22 = { code: "function QuestDockUnenrolledHeaderTsx5(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
let closure_23 = { code: "function QuestDockUnenrolledHeaderTsx6(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED};}" };
let closure_24 = { code: "function QuestDockUnenrolledHeaderTsx7(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};}" };
let closure_25 = { code: "function QuestDockUnenrolledHeaderTsx8(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs}=this.__closure;return{borderRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:questDockWrapperSpecs.get().width};}" };
const obj2 = arg1(dependencyMap[7]);
const memoResult = importAllResult.memo(function QuestDockUnenrolledHeader() {
  let tmp3;
  const quest = importAllResult.useContext(importDefault(dependencyMap[10])).quest;
  const arg1 = quest;
  const context = importAllResult.useContext(arg1(dependencyMap[11]).QuestDockGestureContext);
  const activeQuestDockMode = context.activeQuestDockMode;
  const importDefault = activeQuestDockMode;
  const dependencyMap = questDockWrapperSpecs;
  [tmp3, closure_3] = callback(importAllResult.useState(false), 2);
  const effect = importAllResult.useEffect(() => {
    if (obj.isIOS()) {
      const result = tmp11.isReduceTransparencyEnabled();
      result.then(closure_3);
      const quest = tmp11.addEventListener("reduceTransparencyChanged", closure_3);
      return () => closure_0.remove();
    }
    const obj = quest(questDockWrapperSpecs[12]);
  }, []);
  let obj = arg1(dependencyMap[13]);
  const items = [quest];
  const tmp2 = callback(importAllResult.useState(false), 2);
  const callback = importAllResult.useCallback(() => {
    let obj = activeQuestDockMode(questDockWrapperSpecs[14]);
    obj = { quest, isTargetedDisclosure: true };
    obj = { content: quest(questDockWrapperSpecs[15]).QuestContent.QUEST_BAR_MOBILE, ctaContent: quest(questDockWrapperSpecs[16]).QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: quest(questDockWrapperSpecs[15]).QuestContent.QUEST_BAR_MOBILE };
    obj.trackingCtx = obj;
    obj.showModal(obj);
  }, items);
  const actionSheetPressHandler = obj.useActionSheetPressHandler(quest);
  let obj1 = arg1(dependencyMap[18]);
  const tmp7 = importDefault(dependencyMap[17])();
  let obj2 = arg1(dependencyMap[19]);
  const token = obj2.useToken(importDefault(dependencyMap[8]).modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp11 = importDefault(dependencyMap[20])(token);
  let obj3 = arg1(dependencyMap[21]);
  class K {
    constructor() {
      obj = { borderTopLeftRadius: activeQuestDockMode.get() === closure_7.EXPANDED ? closure_9 : closure_4, borderTopRightRadius: activeQuestDockMode.get() === closure_7.EXPANDED ? closure_9 : closure_4 };
      if (activeQuestDockMode.get() === closure_7.EXPANDED) {
        withSpringResult = closure_9;
      } else {
        tmp = quest;
        tmp2 = questDockWrapperSpecs;
        num = 9;
        obj2 = quest(questDockWrapperSpecs[9]);
        tmp3 = closure_5;
        tmp4 = closure_8;
        withSpringResult = obj2.withSpring(closure_5.get(), closure_8);
      }
      obj.borderBottomLeftRadius = withSpringResult;
      if (activeQuestDockMode.get() === closure_7.EXPANDED) {
        withSpringResult1 = closure_9;
      } else {
        tmp6 = quest;
        tmp7 = questDockWrapperSpecs;
        num2 = 9;
        obj3 = quest(questDockWrapperSpecs[9]);
        tmp8 = closure_5;
        tmp9 = closure_8;
        withSpringResult1 = obj3.withSpring(closure_5.get(), closure_8);
      }
      obj.borderBottomRightRadius = withSpringResult1;
      if (activeQuestDockMode.get() === closure_7.EXPANDED) {
        tmp12 = questDockWrapperSpecs;
        tmp13 = closure_11;
        num3 = 2;
        width = questDockWrapperSpecs.get().width - 2 * closure_11;
      } else {
        tmp11 = questDockWrapperSpecs;
        width = questDockWrapperSpecs.get().width;
      }
      obj.width = width;
      obj = {};
      obj5 = quest(questDockWrapperSpecs[9]);
      num4 = 0;
      if (activeQuestDockMode.get() === closure_7.EXPANDED) {
        num4 = closure_11;
      }
      obj.translateX = obj5.withSpring(num4, closure_8);
      items = [, ];
      items[0] = obj;
      obj1 = {};
      obj7 = quest(questDockWrapperSpecs[9]);
      num5 = 0;
      if (activeQuestDockMode.get() === closure_7.EXPANDED) {
        num5 = closure_11;
      }
      obj1.translateY = obj7.withSpring(num5, closure_8);
      items[1] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  obj = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII: closure_9, questDockBorderRadius: token, withSpring: arg1(dependencyMap[9]).withSpring, questDockAnimatedBorderRadius: tmp11, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_8, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11 };
  K.__closure = obj;
  K.__workletHash = 15527986377887;
  K.__initData = closure_19;
  const animatedStyle = obj3.useAnimatedStyle(K);
  let obj5 = arg1(dependencyMap[21]);
  class X {
    constructor() {
      obj = {};
      obj2 = quest(questDockWrapperSpecs[9]);
      num = 1;
      if (activeQuestDockMode.get() === closure_7.EXPANDED) {
        num = 0;
      }
      obj.opacity = obj2.withSpring(num, closure_8);
      return obj;
    }
  }
  obj = { withSpring: arg1(dependencyMap[9]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_8 };
  X.__closure = obj;
  X.__workletHash = 15527972438968;
  X.__initData = closure_20;
  const animatedStyle1 = obj5.useAnimatedStyle(X);
  let obj7 = arg1(dependencyMap[21]);
  const fn = function q() {
    const obj = {};
    let num = 0;
    if (activeQuestDockMode.get() === constants.EXPANDED) {
      num = -1 * closure_10;
    }
    obj.right = num;
    return obj;
  };
  obj1 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  fn.__closure = obj1;
  fn.__workletHash = 7866036039040;
  fn.__initData = closure_21;
  const animatedStyle2 = obj7.useAnimatedStyle(fn);
  let obj9 = arg1(dependencyMap[21]);
  const fn2 = function f() {
    const obj = {};
    let num = 0;
    if (activeQuestDockMode.get() === constants.EXPANDED) {
      num = 1;
    }
    obj.opacity = quest(questDockWrapperSpecs[9]).withSpring(num, closure_8);
    return obj;
  };
  obj2 = { withSpring: arg1(dependencyMap[9]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_8 };
  fn2.__closure = obj2;
  fn2.__workletHash = 11647269239934;
  fn2.__initData = closure_22;
  const animatedStyle3 = obj9.useAnimatedStyle(fn2);
  let obj11 = arg1(dependencyMap[21]);
  class B {
    constructor() {
      obj = {};
      num = 0;
      if (activeQuestDockMode.get() !== closure_7.EXPANDED) {
        num = closure_10;
      }
      obj.right = num;
      return obj;
    }
  }
  B.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
  B.__workletHash = 14794727045076;
  B.__initData = closure_23;
  const animatedStyle4 = obj11.useAnimatedStyle(B);
  let obj12 = arg1(dependencyMap[21]);
  class G {
    constructor() {
      obj = {};
      str = "none";
      if (activeQuestDockMode.get() === closure_7.EXPANDED) {
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
  let obj13 = arg1(dependencyMap[21]);
  const fn3 = function x() {
    const obj = { borderRadius: activeQuestDockMode.get() === constants.EXPANDED ? closure_9 : token };
    if (activeQuestDockMode.get() === constants.EXPANDED) {
      let withSpringResult = closure_9;
    } else {
      withSpringResult = quest(questDockWrapperSpecs[9]).withSpring(tmp11.get(), closure_8);
      const obj2 = quest(questDockWrapperSpecs[9]);
    }
    obj.borderBottomLeftRadius = withSpringResult;
    if (activeQuestDockMode.get() === constants.EXPANDED) {
      let withSpringResult1 = closure_9;
    } else {
      withSpringResult1 = quest(questDockWrapperSpecs[9]).withSpring(tmp11.get(), closure_8);
      const obj3 = quest(questDockWrapperSpecs[9]);
    }
    obj.borderBottomRightRadius = withSpringResult1;
    obj.width = questDockWrapperSpecs.get().width;
    return obj;
  };
  obj3 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII: closure_9, questDockBorderRadius: token, withSpring: arg1(dependencyMap[9]).withSpring, questDockAnimatedBorderRadius: tmp11, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_8, questDockWrapperSpecs };
  fn3.__closure = obj3;
  fn3.__workletHash = 16321960714067;
  fn3.__initData = closure_25;
  const animatedStyle5 = obj13.useAnimatedStyle(fn3);
  const tmp19 = callback4();
  let obj15 = arg1(dependencyMap[22]);
  const questBarHeroBlurhash = quest.config.assets.questBarHeroBlurhash;
  const questGameLogotypeAssetUrl = obj15.useQuestGameLogotypeAssetUrl(quest);
  const obj4 = { style: items1, layout: closure_18 };
  const items1 = [tmp19.questDockHeader, animatedStyle];
  const tmp21 = callback3;
  const tmp9 = obj1.isThemeDark(importDefault(dependencyMap[17])()) ? ThemeTypes.DARK : ThemeTypes.LIGHT;
  let obj17 = arg1(dependencyMap[12]);
  if (obj17.isAndroid()) {
    if (null != questBarHeroBlurhash) {
      obj5 = { placeholder: questBarHeroBlurhash, animatedStyle: animatedStyle5, animatedLayout: closure_18 };
      let tmp24 = callback2(importDefault(dependencyMap[24]), obj5);
    }
    const items2 = [tmp24, , ];
    const obj6 = { style: tmp19.questDockHeaderPrimary };
    obj7 = {};
    if (tmp9 === ThemeTypes.DARK) {
      let tmp38 = importDefault(dependencyMap[27]);
    } else {
      tmp38 = importDefault(dependencyMap[28]);
    }
    obj7.source = tmp38;
    obj7.resizeMode = "contain";
    obj7.style = tmp19.wreathImage;
    const items3 = [callback2(importDefault(dependencyMap[26]), obj7), ];
    const obj8 = { assetUrl: questGameLogotypeAssetUrl, style: tmp19.logo };
    items3[1] = callback2(importDefault(dependencyMap[29]), obj8);
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
    const tmp34 = importDefault(dependencyMap[26]);
    obj11 = { style: animatedStyle1 };
    const tmp46 = importDefault(dependencyMap[23]);
    obj12 = { style: tmp19.questDockHeaderTertiaryContent };
    class K {
      constructor() {
        obj = { borderTopLeftRadius: activeQuestDockMode.get() === closure_7.EXPANDED ? closure_9 : closure_4, borderTopRightRadius: activeQuestDockMode.get() === closure_7.EXPANDED ? closure_9 : closure_4 };
        if (activeQuestDockMode.get() === closure_7.EXPANDED) {
          withSpringResult = closure_9;
        } else {
          tmp = quest;
          tmp2 = questDockWrapperSpecs;
          num = 9;
          obj2 = quest(questDockWrapperSpecs[9]);
          tmp3 = closure_5;
          tmp4 = closure_8;
          withSpringResult = obj2.withSpring(closure_5.get(), closure_8);
        }
        obj.borderBottomLeftRadius = withSpringResult;
        if (activeQuestDockMode.get() === closure_7.EXPANDED) {
          withSpringResult1 = closure_9;
        } else {
          tmp6 = quest;
          tmp7 = questDockWrapperSpecs;
          num2 = 9;
          obj3 = quest(questDockWrapperSpecs[9]);
          tmp8 = closure_5;
          tmp9 = closure_8;
          withSpringResult1 = obj3.withSpring(closure_5.get(), closure_8);
        }
        obj.borderBottomRightRadius = withSpringResult1;
        if (activeQuestDockMode.get() === closure_7.EXPANDED) {
          tmp12 = questDockWrapperSpecs;
          tmp13 = closure_11;
          num3 = 2;
          width = questDockWrapperSpecs.get().width - 2 * closure_11;
        } else {
          tmp11 = questDockWrapperSpecs;
          width = questDockWrapperSpecs.get().width;
        }
        obj.width = width;
        obj = {};
        obj5 = quest(questDockWrapperSpecs[9]);
        num4 = 0;
        if (activeQuestDockMode.get() === closure_7.EXPANDED) {
          num4 = closure_11;
        }
        obj.translateX = obj5.withSpring(num4, closure_8);
        items = [, ];
        items[0] = obj;
        obj1 = {};
        obj7 = quest(questDockWrapperSpecs[9]);
        num5 = 0;
        if (activeQuestDockMode.get() === closure_7.EXPANDED) {
          num5 = closure_11;
        }
        obj1.translateY = obj7.withSpring(num5, closure_8);
        items[1] = obj1;
        obj.transform = items;
        return obj;
      }
    }
    const intl = arg1(dependencyMap[31]).intl;
    obj12.children = intl.string(arg1(dependencyMap[31]).t.3mgEQf);
    obj11.children = callback2(arg1(dependencyMap[30]).Text, obj12);
    obj10.children = callback2(importDefault(dependencyMap[23]), obj11);
    const items5 = [callback2(tmp46, obj10), ];
    obj13 = { animatedProps, style: animatedStyle4, layout: closure_18 };
    importDefault(dependencyMap[23]);
    const obj14 = {};
    const items6 = [tmp19.questDockHeaderContentExpanded, animatedStyle3];
    obj14.style = items6;
    const tmp48 = importDefault(dependencyMap[23]);
    obj15 = { onPress: callback };
    class X {
      constructor() {
        obj = {};
        obj2 = quest(questDockWrapperSpecs[9]);
        num = 1;
        if (activeQuestDockMode.get() === closure_7.EXPANDED) {
          num = 0;
        }
        obj.opacity = obj2.withSpring(num, closure_8);
        return obj;
      }
    }
    const items7 = [, ];
    ({ questDockHeaderActionDisclosures: arr8[0], questDockHeaderTertiaryContent: arr8[1] } = tmp19);
    obj15.style = items7;
    const obj16 = {};
    obj17 = {};
    const intl2 = arg1(dependencyMap[31]).intl;
    obj17.children = intl2.string(arg1(dependencyMap[31]).t.o6FLcF);
    const items8 = [callback2(arg1(dependencyMap[30]).Text, obj17), ];
    const obj18 = { color: importDefault(dependencyMap[8]).colors.INTERACTIVE_TEXT_ACTIVE, style: tmp19.questDockHeaderActionDisclosuresIcon };
    items8[1] = callback2(arg1(dependencyMap[33]).CircleQuestionIcon, obj18);
    obj16.children = items8;
    obj15.children = callback3(closure_15, obj16);
    const items9 = [callback2(arg1(dependencyMap[32]).PressableOpacity, obj15), , ];
    const obj19 = { style: tmp19.questDockHeaderActionSeparator };
    items9[1] = callback2(closure_6, obj19);
    const obj20 = { accessibilityRole: "button", onPress: actionSheetPressHandler, style: tmp19.questDockHeaderTertiaryContent };
    const obj21 = { color: importDefault(dependencyMap[8]).colors.INTERACTIVE_TEXT_ACTIVE };
    obj20.children = callback2(arg1(dependencyMap[34]).MoreHorizontalIcon, obj21);
    items9[2] = callback2(arg1(dependencyMap[32]).PressableOpacity, obj20);
    obj14.children = items9;
    obj13.children = callback3(importDefault(dependencyMap[23]), obj14);
    class B {
      constructor() {
        obj = {};
        num = 0;
        if (activeQuestDockMode.get() !== closure_7.EXPANDED) {
          num = closure_10;
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
  tmp24 = callback2(importDefault(dependencyMap[25]), { animatedStyle: animatedStyle5, animatedLayout: closure_18 });
});
const result = arg1(dependencyMap[35]).fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx");

export default memoResult;
