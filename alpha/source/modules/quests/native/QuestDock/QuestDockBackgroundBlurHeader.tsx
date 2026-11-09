// Module ID: 17486
// Function ID: 17487
// Name: QuestDockBackgroundBlurHeader
// Dependencies: [32, 19, 17, 6836, 17393, 21, 5140, 575, 5761, 17394, 1357, 5724, 17478, 1652, 7043, 5751, 1113, 14752, 17487, 17458, 17489, 9846, 2]

// Module 17486 (QuestDockBackgroundBlurHeader)
import nativeDefault from "native" /* 575 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1357 */;
import _modDef1652 from "module_1652" /* 1652 */;
import spring_spring from "spring/spring" /* 5761 */;
import QuestConstants from "QuestConstants" /* 6836 */;
import useQuestDockAnimatedBorderRadiusDefault from "useQuestDockAnimatedBorderRadius" /* 17478 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import QuestDockConstants from "QuestDockConstants" /* 17393 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

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
let tmp6;
let tmp7;
let tmp8;
let unpackModuleId;
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
let items = [{ code: "(function questDockHeaderLayoutAnimation_QuestDockBackgroundBlurHeaderTsx1(values){let[withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:withSpring(values.targetOriginX,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),originY:withSpring(values.targetOriginY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:withSpring(values.targetHeight,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:withSpring(values.targetWidth,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}};})" }, spring_spring.withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED];
let c0;
let c1;
[tmp6, tmp7, tmp8] = items;
function questDockHeaderLayoutAnimation(originX) {
  const obj = { initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight }, animations: size };
  size = { originX: _undefined(originX.targetOriginX, c1), originY: _undefined(originX.targetOriginY, c1), height: _undefined(originX.targetHeight, c1), width: _undefined(originX.targetWidth, c1) };
  return obj;
}
let items1 = [tmp7, tmp8];
questDockHeaderLayoutAnimation.__closure = items1;
questDockHeaderLayoutAnimation.__workletHash = 9861898236452;
questDockHeaderLayoutAnimation.__initData = tmp6;
let closure_17 = { code: "(function QuestDockBackgroundBlurHeaderTsx2(){let[activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED]=this.__closure;return{borderTopLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:activeQuestDockMode.get()===QuestDockMode.EXPANDED?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}]};})" };
let closure_18 = { code: "(function QuestDockBackgroundBlurHeaderTsx3(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})" };
let closure_19 = { code: "(function QuestDockBackgroundBlurHeaderTsx4(){let[activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED]=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED*-1:0};})" };
let closure_20 = { code: "(function QuestDockBackgroundBlurHeaderTsx5(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})" };
let closure_21 = { code: "(function QuestDockBackgroundBlurHeaderTsx6(){let[activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED]=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED};})" };
let closure_22 = { code: "(function QuestDockBackgroundBlurHeaderTsx7(){let[activeQuestDockMode,QuestDockMode]=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};})" };
let closure_23 = { code: "(function QuestDockBackgroundBlurHeaderTsx8(){let[activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs]=this.__closure;return{borderRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:questDockWrapperSpecs.get().width};})" };
let closure_24 = { code: "(function QuestDockBackgroundBlurHeaderTsx9(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})" };
const memoResult = react.memo(function QuestDockBackgroundBlurHeader(collapsedContent) {
  let MoreHorizontalIcon;
  let Text;
  let View4;
  let activeQuestDockMode;
  let blurHash;
  let c0;
  let children;
  let intl;
  let intl2;
  let intl3;
  let items16;
  let items17;
  let items18;
  let items19;
  let items23;
  let items24;
  let items25;
  let items26;
  let items27;
  let items28;
  let obj14;
  let obj16;
  let obj19;
  let obj3;
  let obj7;
  let onDisclosurePress;
  let onSubmenuPress;
  let questDockWrapperSpecs;
  let secondaryContentWidth;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp39;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp43;
  let tmp45;
  let tmp46;
  let tmp47;
  let tmp48;
  let tmp5;
  let tmp50;
  let tmp51;
  let tmp52;
  let tmp55;
  let tmp56;
  let tmp57;
  let tmp58;
  let tmp59;
  let tmp60;
  let tmp61;
  let tmp62;
  let tmp63;
  let tmp66;
  let tmp67;
  let tmp68;
  let tmp69;
  let tmp70;
  let tmp73Result;
  let tmp76;
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
  _require = undefined;
  let tmp = _require;
  ({ onDisclosurePress, onSubmenuPress } = collapsedContent);
  const context = react.useContext(require("QuestDockGestureContext").QuestDockGestureContext);
  ({ activeQuestDockMode, questDockWrapperSpecs } = context);
  [tmp5, c0] = _slicedToArray(react.useState(false), 2);
  const tmp4 = _slicedToArray(react.useState(false), 2);
  const effect = react.useEffect(() => {
    const obj = utils_PlatformUtils;
    if (obj.isIOS()) {
      const result = hasOwnProperty.isReduceTransparencyEnabled();
      result.then(c0);
      let closure_0 = hasOwnProperty.addEventListener("reduceTransparencyChanged", c0);
      return () => closure_0.remove();
    }
  }, []);
  let obj = require("useToken");
  const token = obj.useToken(nativeDefault.modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  let tmp9 = useQuestDockAnimatedBorderRadiusDefault(token);
  let items = [closure_17, activeQuestDockMode, , , , , , , , ];
  items[2] = QuestDockMode;
  items[3] = closure_9;
  items[4] = token;
  const useAnimatedStyle = require("module_1652").useAnimatedStyle;
  const tmp10 = require("module_1652");
  items[5] = require("spring/spring").withSpring;
  items[6] = tmp9;
  items[7] = QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
  items[8] = questDockWrapperSpecs;
  items[9] = closure_11;
  _require = undefined;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23] = items;
  const tmp12 = closure_9;
  class QuestDockBackgroundBlurHeaderTsx2 {
    constructor() {
      let items;
      let tmp5;
      let tmp9;
      let width;
      const obj2 = { borderTopLeftRadius: _undefined.get() === _undefined2.EXPANDED ? c2 : c3, borderTopRightRadius: _undefined.get() === _undefined2.EXPANDED ? c2 : c3, borderBottomLeftRadius: tmp5, borderBottomRightRadius: tmp9, width, transform: items };
      if (_undefined.get() === _undefined2.EXPANDED) {
        tmp5 = c2;
      } else {
        tmp5 = _undefined3(_undefined4.get(), c6);
      }
      if (_undefined.get() === _undefined2.EXPANDED) {
        tmp9 = c2;
      } else {
        tmp9 = _undefined3(_undefined4.get(), c6);
      }
      if (_undefined.get() === _undefined2.EXPANDED) {
        width = _undefined5.get().width - 2 * c8;
      } else {
        width = _undefined5.get().width;
      }
      let num2 = 0;
      if (_undefined.get() === _undefined2.EXPANDED) {
        num2 = c8;
      }
      items = [{ translateX: _undefined3(num2, c6) }, ];
      let num3 = 0;
      ({ translateX: _undefined3(num2, c6) });
      if (_undefined.get() === _undefined2.EXPANDED) {
        num3 = c8;
      }
      items[1] = { translateY: _undefined3(num3, c6) };
      ({ translateY: _undefined3(num3, c6) });
      return obj2;
    }
  }
  const items1 = [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23];
  QuestDockBackgroundBlurHeaderTsx2.__closure = items1;
  QuestDockBackgroundBlurHeaderTsx2.__workletHash = 15843117992557;
  QuestDockBackgroundBlurHeaderTsx2.__initData = tmp14;
  const animatedStyle = useAnimatedStyle(QuestDockBackgroundBlurHeaderTsx2);
  const items2 = [closure_18, , , , ];
  const useAnimatedStyle2 = tmp(1652).useAnimatedStyle;
  tmp(1652);
  items2[1] = tmp(5761).withSpring;
  items2[2] = activeQuestDockMode;
  items2[3] = QuestDockMode;
  items2[4] = QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
  _require = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp26, tmp27, tmp28, tmp29, tmp30] = items2;
  class QuestDockBackgroundBlurHeaderTsx3 {
    constructor() {
      let num = 1;
      const tmp = c0;
      if (_undefined.get() === _undefined2.EXPANDED) {
        num = 0;
      }
      const obj = { opacity: tmp(num, c3) };
      return obj;
    }
  }
  const items3 = [tmp27, tmp28, tmp29, tmp30];
  QuestDockBackgroundBlurHeaderTsx3.__closure = items3;
  QuestDockBackgroundBlurHeaderTsx3.__workletHash = 13259096238986;
  QuestDockBackgroundBlurHeaderTsx3.__initData = tmp26;
  const animatedStyle2 = useAnimatedStyle2(QuestDockBackgroundBlurHeaderTsx3);
  const items4 = [closure_19, activeQuestDockMode, tmp11, closure_10];
  _require = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp33, tmp34, tmp35, tmp36] = items4;
  const tmpResult8 = tmp(1652);
  class QuestDockBackgroundBlurHeaderTsx4 {
    constructor() {
      let right = 0;
      if (_undefined.get() === _undefined2.EXPANDED) {
        right = -1 * c2;
      }
      return { right };
    }
  }
  const items5 = [tmp34, tmp35, tmp36];
  QuestDockBackgroundBlurHeaderTsx4.__closure = items5;
  QuestDockBackgroundBlurHeaderTsx4.__workletHash = 5498318902770;
  QuestDockBackgroundBlurHeaderTsx4.__initData = tmp33;
  const animatedStyle1 = tmpResult8.useAnimatedStyle(QuestDockBackgroundBlurHeaderTsx4);
  const items6 = [closure_20, , , , ];
  const useAnimatedStyle3 = tmp(1652).useAnimatedStyle;
  tmp(1652);
  items6[1] = tmp(5761).withSpring;
  items6[2] = activeQuestDockMode;
  items6[3] = QuestDockMode;
  items6[4] = QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
  _require = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp39, tmp40, tmp41, tmp42, tmp43] = items6;
  const tmp32 = closure_10;
  class QuestDockBackgroundBlurHeaderTsx5 {
    constructor() {
      let num = 0;
      const tmp = c0;
      if (_undefined.get() === _undefined2.EXPANDED) {
        num = 1;
      }
      const obj = { opacity: tmp(num, c3) };
      return obj;
    }
  }
  const items7 = [tmp40, tmp41, tmp42, tmp43];
  QuestDockBackgroundBlurHeaderTsx5.__closure = items7;
  QuestDockBackgroundBlurHeaderTsx5.__workletHash = 4711611266444;
  QuestDockBackgroundBlurHeaderTsx5.__initData = tmp39;
  const animatedStyle3 = useAnimatedStyle3(QuestDockBackgroundBlurHeaderTsx5);
  const items8 = [closure_21, activeQuestDockMode, tmp11, tmp32];
  _require = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp45, tmp46, tmp47, tmp48] = items8;
  const tmpResult10 = tmp(1652);
  class QuestDockBackgroundBlurHeaderTsx6 {
    constructor() {
      let right = 0;
      if (_undefined.get() !== _undefined2.EXPANDED) {
        right = c2;
      }
      return { right };
    }
  }
  const items9 = [tmp46, tmp47, tmp48];
  QuestDockBackgroundBlurHeaderTsx6.__closure = items9;
  QuestDockBackgroundBlurHeaderTsx6.__workletHash = 9528005254022;
  QuestDockBackgroundBlurHeaderTsx6.__initData = tmp45;
  const animatedStyle4 = tmpResult10.useAnimatedStyle(QuestDockBackgroundBlurHeaderTsx6);
  const items10 = [closure_22, activeQuestDockMode, tmp11];
  _require = undefined;
  c1 = undefined;
  [tmp50, tmp51, tmp52] = items10;
  const tmpResult11 = tmp(1652);
  class QuestDockBackgroundBlurHeaderTsx7 {
    constructor() {
      let pointerEvents = "none";
      if (_undefined.get() === _undefined2.EXPANDED) {
        pointerEvents = "auto";
      }
      return { pointerEvents };
    }
  }
  const items11 = [tmp51, tmp52];
  QuestDockBackgroundBlurHeaderTsx7.__closure = items11;
  QuestDockBackgroundBlurHeaderTsx7.__workletHash = 4001448257594;
  QuestDockBackgroundBlurHeaderTsx7.__initData = tmp50;
  const animatedProps = tmpResult11.useAnimatedProps(QuestDockBackgroundBlurHeaderTsx7);
  const items12 = [closure_23, activeQuestDockMode, tmp11, tmp12, token, , , , ];
  const useAnimatedStyle4 = tmp(1652).useAnimatedStyle;
  tmp(1652);
  items12[5] = tmp(5761).withSpring;
  items12[6] = tmp9;
  items12[7] = QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
  items12[8] = questDockWrapperSpecs;
  _require = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63] = items12;
  class QuestDockBackgroundBlurHeaderTsx8 {
    constructor() {
      let tmp5;
      let tmp9;
      const obj2 = { borderRadius: _undefined.get() === _undefined2.EXPANDED ? c2 : c3, borderBottomLeftRadius: tmp5, borderBottomRightRadius: tmp9, width: _undefined5.get().width };
      if (_undefined.get() === _undefined2.EXPANDED) {
        tmp5 = c2;
      } else {
        tmp5 = _undefined3(_undefined4.get(), c6);
      }
      if (_undefined.get() === _undefined2.EXPANDED) {
        tmp9 = c2;
      } else {
        tmp9 = _undefined3(_undefined4.get(), c6);
      }
      return obj2;
    }
  }
  const items13 = [tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63];
  QuestDockBackgroundBlurHeaderTsx8.__closure = items13;
  QuestDockBackgroundBlurHeaderTsx8.__workletHash = 4109714632929;
  QuestDockBackgroundBlurHeaderTsx8.__initData = tmp55;
  const animatedStyle41 = useAnimatedStyle4(QuestDockBackgroundBlurHeaderTsx8);
  const items14 = [closure_24, , , , ];
  const useAnimatedStyle5 = tmp(1652).useAnimatedStyle;
  tmp(1652);
  items14[1] = tmp(5761).withSpring;
  items14[2] = activeQuestDockMode;
  items14[3] = QuestDockMode;
  items14[4] = QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
  _require = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp66, tmp67, tmp68, tmp69, tmp70] = items14;
  class QuestDockBackgroundBlurHeaderTsx9 {
    constructor() {
      let num = 0;
      const tmp = c0;
      if (_undefined.get() === _undefined2.EXPANDED) {
        num = 1;
      }
      const obj = { opacity: tmp(num, c3) };
      return obj;
    }
  }
  const items15 = [tmp67, tmp68, tmp69, tmp70];
  QuestDockBackgroundBlurHeaderTsx9.__closure = items15;
  QuestDockBackgroundBlurHeaderTsx9.__workletHash = 6712330626688;
  QuestDockBackgroundBlurHeaderTsx9.__initData = tmp66;
  let animatedStyle5;
  if (flag2) {
    animatedStyle5 = useAnimatedStyle5(QuestDockBackgroundBlurHeaderTsx9);
  }
  const tmp72 = closure_15();
  if (withPressableDisclosure) {
    let obj2 = { onPress: onDisclosurePress, accessibilityRole: "button", style: items16, children: closure_14(closure_13, obj3) };
    items16 = [, ];
    ({ actionDisclosures: arr18[0], tertiaryContent: arr18[1] } = tmp72);
    obj3 = { children: items17 };
    const PressableOpacity = tmp(7043).PressableOpacity;
    const obj4 = { color: "interactive-text-active", variant: "body-sm/medium", children: intl2.string(tmp(1113).t.o6FLcF) };
    const Text2 = tmp(5751).Text;
    intl2 = tmp(1113).intl;
    items17 = [closure_12(Text2, obj4), ];
    const obj5 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, style: tmp72.actionDisclosuresIcon };
    const CircleQuestionIcon = tmp(14752).CircleQuestionIcon;
    items17[1] = closure_12(CircleQuestionIcon, obj5);
    tmp73Result = tmp73(PressableOpacity, obj2);
    tmp76 = tmp73;
  } else {
    const obj6 = { style: items18, children: closure_12(Text, obj7) };
    items18 = [, ];
    ({ actionDisclosures: arr17[0], tertiaryContent: arr17[1] } = tmp72);
    obj7 = { color: "text-default", variant: "body-sm/medium", children: intl.string(tmp(1113).t.o6FLcF) };
    Text = tmp(5751).Text;
    intl = tmp(1113).intl;
    tmp73Result = tmp73(closure_6, obj6);
    tmp76 = tmp73;
  }
  const obj8 = { style: items19, layout: questDockHeaderLayoutAnimation, children: null };
  items19 = [tmp72.header, animatedStyle];
  const View = tmp7(1652).View;
  const tmpResult14 = tmp(1357);
  if (tmpResult14.isAndroid()) {
    let tmp76Result;
    if (null != blurHash) {
      const obj9 = { placeholder: blurHash, layoutAnimatedStyle: animatedStyle41, opacityAnimatedStyle: animatedStyle5, layoutAnimation: questDockHeaderLayoutAnimation };
      tmp76Result = tmp76(tmp7(17487), obj9);
    }
    const items20 = [tmp76Result, , ];
    let tmp76Result2 = children;
    if (flag) {
      const obj10 = { style: tmp72.leadingContent, children };
      tmp76Result2 = tmp76(closure_6, obj10);
    }
    items20[1] = tmp76Result2;
    const items21 = [tmp72.secondaryContent, ];
    let tmp87 = null != secondaryContentWidth;
    const tmp85 = closure_6;
    if (tmp87) {
      const items22 = [tmp72.secondaryContentStretched, ];
      const obj11 = { width: secondaryContentWidth };
      items22[1] = obj11;
      tmp87 = items22;
    }
    const obj12 = { style: items21, children: items24 };
    items21[1] = tmp87;
    const obj13 = { style: items23, layout: questDockHeaderLayoutAnimation, children: tmp76(_modDef1652.View, obj14) };
    items23 = [tmp72.secondaryContentOverlay, animatedStyle1];
    const View2 = tmp7(1652).View;
    obj14 = { style: animatedStyle2, children: collapsedContent };
    items24 = [tmp76(View2, obj13), ];
    ({ animatedProps, style: items25, layout: questDockHeaderLayoutAnimation, children: closure_14(View4, obj16) });
    let secondaryContentOverlay = null != secondaryContentWidth;
    const View3 = tmp7(1652).View;
    if (secondaryContentOverlay) {
      secondaryContentOverlay = tmp72.secondaryContentOverlay;
    }
    items25 = [secondaryContentOverlay, animatedStyle4];
    obj16 = { style: items26, children: items28 };
    items26 = [tmp72.expandedContent, animatedStyle3];
    let tmp79Result = !flag;
    View4 = tmp7(1652).View;
    if (!flag) {
      const obj17 = { children: items27 };
      items27 = [tmp73Result, tmp76(tmp7(17489), {})];
      tmp79Result = tmp79(closure_13, obj17);
    }
    items28 = [tmp79Result, ];
    const obj18 = { accessibilityRole: "button", accessibilityLabel: intl3.string(tmp(1113).t.PdRCRg), onPress: onSubmenuPress, style: tmp72.tertiaryContent, children: tmp76(MoreHorizontalIcon, obj19) };
    const PressableOpacity2 = tmp(7043).PressableOpacity;
    intl3 = tmp(1113).intl;
    obj19 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
    MoreHorizontalIcon = tmp(9846).MoreHorizontalIcon;
    items28[1] = tmp76(PressableOpacity2, obj18);
    class QuestDockBackgroundBlurHeaderTsx2 {
      constructor() {
        let items;
        let tmp5;
        let tmp9;
        let width;
        const obj2 = { borderTopLeftRadius: _undefined.get() === _undefined2.EXPANDED ? c2 : c3, borderTopRightRadius: _undefined.get() === _undefined2.EXPANDED ? c2 : c3, borderBottomLeftRadius: tmp5, borderBottomRightRadius: tmp9, width, transform: items };
        if (_undefined.get() === _undefined2.EXPANDED) {
          tmp5 = c2;
        } else {
          tmp5 = _undefined3(_undefined4.get(), c6);
        }
        if (_undefined.get() === _undefined2.EXPANDED) {
          tmp9 = c2;
        } else {
          tmp9 = _undefined3(_undefined4.get(), c6);
        }
        if (_undefined.get() === _undefined2.EXPANDED) {
          width = _undefined5.get().width - 2 * c8;
        } else {
          width = _undefined5.get().width;
        }
        let num2 = 0;
        if (_undefined.get() === _undefined2.EXPANDED) {
          num2 = c8;
        }
        items = [{ translateX: _undefined3(num2, c6) }, ];
        let num3 = 0;
        ({ translateX: _undefined3(num2, c6) });
        if (_undefined.get() === _undefined2.EXPANDED) {
          num3 = c8;
        }
        items[1] = { translateY: _undefined3(num3, c6) };
        ({ translateY: _undefined3(num3, c6) });
        return obj2;
      }
    }
    items20[2] = closure_14(tmp85, obj12);
    obj8.children = items20;
    return closure_14(View, obj8);
  }
  tmp76Result = tmp76(tmp7(17458), { layoutAnimatedStyle: animatedStyle41, opacityAnimatedStyle: animatedStyle5, layoutAnimation: tmp80 });
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBackgroundBlurHeader.tsx");

export default memoResult;
