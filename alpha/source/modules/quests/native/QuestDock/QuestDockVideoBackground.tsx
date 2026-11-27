// Module ID: 16803
// Function ID: 16804
// Name: QuestDockVideoBackground
// Dependencies: [32, 19, 17, 5044, 6871, 16687, 1071, 21, 5043, 16688, 1654, 5644, 16691, 16777, 8620, 1495, 1629, 504, 16686, 671, 16804, 1379, 9890, 16805, 2024, 8881, 5730, 5598, 2]

// Module 16803 (QuestDockVideoBackground)
import _modDef671 from "module_671" /* 671 */;
import Constants from "Constants" /* 1071 */;
import _mod1654 from "module_1654" /* 1654 */;
import react_nativeDefault from "react-native" /* 2024 */;
import spring_spring from "spring/spring" /* 5644 */;
import QuestDockUtils from "QuestDockUtils" /* 16686 */;
import QuestDockGestureContext from "QuestDockGestureContext" /* 16688 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;
import QuestConstants from "QuestConstants" /* 6871 */;
import QuestDockConstants from "QuestDockConstants" /* 16687 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

const _modDef1654 = _mod1654;
let constants;

let StyleSheet;
let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let unpackModuleId;
function QuestDockBackgroundMediaFade(arg0) {
  let children;
  let items2;
  let style;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  ({ children, style } = arg0);
  let tmp = closure_19();
  const activeQuestDockMode = react.useContext(QuestDockGestureContext.QuestDockGestureContext).activeQuestDockMode;
  const items = [closure_20, , , , ];
  const useAnimatedStyle = _mod1654.useAnimatedStyle;
  _mod1654;
  items[1] = spring_spring.withSpring;
  items[2] = activeQuestDockMode;
  items[3] = React4;
  items[4] = unpackModuleId;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp4, tmp5, tmp6, tmp7, tmp8] = items;
  class QuestDockVideoBackgroundTsx1 {
    constructor() {
      tmp = closure_0;
      num = 0;
      if (closure_1.get() === closure_2.EXPANDED) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_3) };
      return obj;
    }
  }
  const items1 = [tmp5, tmp6, tmp7, tmp8];
  QuestDockVideoBackgroundTsx1.__closure = items1;
  QuestDockVideoBackgroundTsx1.__workletHash = 17022773946287;
  QuestDockVideoBackgroundTsx1.__initData = tmp4;
  const animatedStyle = useAnimatedStyle(QuestDockVideoBackgroundTsx1);
  let obj = { style: items2, children };
  items2 = [tmp.media, style, animatedStyle];
  return gesture(_modDef1654.View, obj);
}
let _slicedToArray = _slicedToArray_mod;
({ AppState: hasOwnProperty, Pressable: metroRequire, StyleSheet, View: metroImportDefault } = react_native);
({ QuestDockMode: c9, QuestsExperimentLocations: c10 } = QuestConstants);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: unpackModuleId, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_12 } = QuestDockConstants);
const VerticalGradient = Constants.VerticalGradient;
let Fragment = Fragment_mod;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let closure_16 = [0, 0.1, 0.8, 1];
const locations = [0, 0.33, 0.76, 1];
const QuestDockBackgroundCollapsedMediaMode = { PAUSED: "paused", HIDDEN: "hidden" };
let createStyles = createStyles_mod;
let obj2 = { backgroundWrapper: obj3, backgroundImage: obj4, backgroundImageWrapper: obj5, backgroundVideo: obj6, media: obj7, backgroundGradient: obj8, backdrop: obj9 };
obj3 = { right: undefined, bottom: undefined, zIndex: 1 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { resizeMode: "cover" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj5 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj6 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj7 = {};
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj8 = {};
const merged5 = Object.assign(StyleSheet.absoluteFillObject);
obj9 = {};
const merged6 = Object.assign(StyleSheet.absoluteFillObject);
let closure_19 = createStyles(obj2);
let closure_20 = { code: "(function QuestDockVideoBackgroundTsx1(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})" };
let closure_22 = { code: "(function QuestDockVideoBackgroundTsx2(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,windowDimensions]=this.__closure;return{transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}],width:windowDimensions.get().width};})" };
let closure_23 = { code: "(function QuestDockVideoBackgroundTsx3(){let[withSpring,shouldShowVideo,isVideoReadyForDisplay,isMediaHiddenWhenCollapsed,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(shouldShowVideo&&isVideoReadyForDisplay&&(isMediaHiddenWhenCollapsed||activeQuestDockMode.get()===QuestDockMode.EXPANDED)?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})" };
const memoResult = react.memo(function QuestDockVideoBackground(imageUrl) {
  let _undefined2;
  let backdropColor;
  let c8;
  let closure_3;
  let collapsedMediaMode;
  let disabled;
  let expandedHeight;
  let foregroundContent;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let obj;
  let obj4;
  let obj7;
  let obj8;
  let onPress;
  let str;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp26;
  let tmp36;
  let tmp37;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp46;
  let tmp47;
  let tmp48;
  let tmp49;
  let tmp50;
  let useReducedMotion;
  let videoUrl;
  imageUrl = imageUrl.imageUrl;
  ({ videoUrl, collapsedMediaMode } = imageUrl);
  const videoMimetype = imageUrl.videoMimetype;
  if (collapsedMediaMode === undefined) {
    let tmp = obj;
    collapsedMediaMode = obj.PAUSED;
  }
  const gradientBaseColor = imageUrl.gradientBaseColor;
  ({ backdropColor, expandedHeight } = imageUrl);
  ({ onPress, disabled, foregroundContent } = imageUrl);
  if (disabled === undefined) {
    disabled = false;
  }
  let activeQuestDockMode;
  c8 = undefined;
  constants = undefined;
  let tmp2 = collapsedMediaMode === obj.HIDDEN;
  _slicedToArray = tmp2;
  let tmp3 = closure_19();
  obj = activeQuestDockMode;
  const tmp4 = imageUrl;
  const context = activeQuestDockMode.useContext(imageUrl(expandedHeight[9]).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  const setRestingQuestDockMode = activeQuestDockMode.useContext(imageUrl(expandedHeight[12]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const isRendered = activeQuestDockMode.useContext(gradientBaseColor(expandedHeight[13])).isRendered;
  const tmp8 = gradientBaseColor(expandedHeight[14])(activeQuestDockMode);
  const height = gradientBaseColor(expandedHeight[15])().height;
  const top = gradientBaseColor(expandedHeight[16])().top;
  let obj2 = imageUrl(expandedHeight[17]);
  let items = [c8];
  const items1 = [height, top, expandedHeight];
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const memo = activeQuestDockMode.useMemo(() => {
    let obj2;
    const obj = { height: obj2.getQuestDockExpandedHeightLimits(height, top, expandedHeight).maxHeight };
    obj2 = QuestDockUtils;
    return obj;
  }, items1);
  const items2 = [gradientBaseColor];
  const memo1 = activeQuestDockMode.useMemo(() => {
    let closure_0 = _modDef671(gradientBaseColor);
    return closure_16.map((item) => {
      const alphaResult = closure_0.alpha(item);
      return alphaResult.hex();
    });
  }, items2);
  const items3 = [closure_22, , , , , , ];
  const useAnimatedStyle = imageUrl(expandedHeight[10]).useAnimatedStyle;
  imageUrl(expandedHeight[10]);
  items3[1] = imageUrl(expandedHeight[11]).withSpring;
  items3[2] = activeQuestDockMode;
  items3[3] = constants;
  items3[4] = closure_12;
  items3[5] = closure_11;
  items3[6] = windowDimensions;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items3;
  class QuestDockVideoBackgroundTsx2 {
    constructor() {
      let num = 0;
      const obj = _undefined;
      const tmp2 = _undefined2;
      if (_undefined.get() === _undefined2.COLLAPSED) {
        num = -1 * c3;
      }
      const items = [{ translateX: _undefined(num, c4) }, ];
      let num3 = 0;
      ({ translateX: _undefined(num, c4) });
      if (obj.get() === tmp2.COLLAPSED) {
        num3 = -1 * c3;
      }
      const obj3 = { transform: items, width: _undefined3.get().width };
      items[1] = { translateY: _undefined(num3, c4) };
      ({ translateY: _undefined(num3, c4) });
      return obj3;
    }
  }
  const items4 = [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21];
  QuestDockVideoBackgroundTsx2.__closure = items4;
  QuestDockVideoBackgroundTsx2.__workletHash = 3758457817349;
  QuestDockVideoBackgroundTsx2.__initData = tmp15;
  const animatedStyle = useAnimatedStyle(QuestDockVideoBackgroundTsx2);
  const tmp23 = gradientBaseColor(expandedHeight[20])(constants.EXPANDED);
  [tmp26, c8] = obj.useState("active" !== setRestingQuestDockMode.currentState);
  const items5 = [activeQuestDockMode, setRestingQuestDockMode];
  _slicedToArray(obj.useState("active" !== setRestingQuestDockMode.currentState), 2);
  const effect = obj.useEffect(() => {
    let closure_0 = setRestingQuestDockMode.addEventListener("change", (event) => {
      _undefined("active" !== event);
      const obj = imageUrl(expandedHeight[21]);
      const tmp3 = obj.isIOS() && tmp && activeQuestDockMode.get() === constants.EXPANDED;
      if (tmp3) {
        setRestingQuestDockMode(constants.COLLAPSED);
      }
    });
    return () => {
      closure_0.remove();
    };
  }, items5);
  let isHeroVideoSupportedResult = !tmp26 && isRendered && !stateFromStores;
  const tmp14 = closure_11;
  if (isHeroVideoSupportedResult) {
    isHeroVideoSupportedResult = null != videoUrl;
  }
  if (isHeroVideoSupportedResult) {
    const tmp4Result = tmp4(expandedHeight[22]);
    isHeroVideoSupportedResult = tmp4Result.isHeroVideoSupported(videoMimetype);
  }
  if (isHeroVideoSupportedResult) {
    let tmp30 = !tmp2;
    if (tmp2) {
      tmp30 = tmp23;
    }
    isHeroVideoSupportedResult = tmp30;
  }
  const tmp4Result3 = tmp4(expandedHeight[21]);
  const isAndroidResult = tmp4Result3.isAndroid();
  const QuestBarAndroidVideoExperiment = tmp4(tmp5[23]).QuestBarAndroidVideoExperiment;
  if (isHeroVideoSupportedResult) {
    let tmp34 = !isAndroidResult;
    if (isAndroidResult) {
      tmp34 = tmp33;
    }
    isHeroVideoSupportedResult = tmp34;
  }
  [tmp36, tmp37] = _slicedToArray(obj.useState(false), 2);
  constants = tmp37;
  let tmp39 = tmp36;
  _slicedToArray(obj.useState(false), 2);
  const callback = obj.useCallback(() => {
    _undefined2(true);
  }, []);
  if (tmp36) {
    tmp39 = !isHeroVideoSupportedResult;
  }
  if (tmp39) {
    tmp37(false);
  }
  const items6 = [imageUrl, tmp2];
  const effect1 = obj.useEffect(() => {
    let tmp2 = null != imageUrl;
    const tmp = imageUrl;
    if (tmp2) {
      tmp2 = closure_3;
    }
    if (tmp2) {
      const obj2 = { uri: tmp };
      const obj = react_nativeDefault;
      obj.preload(obj2);
    }
  }, items6);
  const items7 = [closure_23, , , , , , , ];
  const useAnimatedStyle2 = tmp4(tmp5[10]).useAnimatedStyle;
  tmp4(expandedHeight[10]);
  items7[1] = tmp4(expandedHeight[11]).withSpring;
  items7[2] = isHeroVideoSupportedResult;
  items7[3] = tmp36;
  items7[4] = tmp2;
  items7[5] = activeQuestDockMode;
  items7[6] = constants;
  items7[7] = tmp14;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  let c6;
  [tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50] = items7;
  class QuestDockVideoBackgroundTsx3 {
    constructor() {
      let num = 1;
      const tmp = c0;
      if (c1) {
        num = 1;
        if (c2) {
          const tmp3 = c3;
          if (tmp3) {
            num = 0;
          } else {
            num = 1;
          }
        }
      }
      const obj = { opacity: tmp(num, c6) };
      return obj;
    }
  }
  const items8 = [tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50];
  QuestDockVideoBackgroundTsx3.__closure = items8;
  QuestDockVideoBackgroundTsx3.__workletHash = 1846993177152;
  QuestDockVideoBackgroundTsx3.__initData = tmp43;
  let tmp52 = null;
  const animatedStyle2 = useAnimatedStyle2(QuestDockVideoBackgroundTsx3);
  if (isHeroVideoSupportedResult) {
    tmp52 = null;
    if (null != videoUrl) {
      let obj3 = { style: tmp3.backgroundVideo, onReadyForDisplay: callback, source: obj4, paused: tmp8 !== constants.EXPANDED, resizeMode: "cover", muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false };
      obj4 = { uri: videoUrl };
      tmp52 = closure_14(tmp4(tmp5[25]).VideoComponent, obj3);
    }
  }
  let tmp55 = tmp52;
  const Fragment = obj.Fragment;
  if (null != onPress) {
    const obj5 = { style: tmp3.backgroundVideo, onPress, disabled, children: tmp52 };
    tmp55 = closure_14(height, obj5);
  }
  const items9 = [tmp55, ];
  let tmp58 = null;
  if (null != imageUrl) {
    if (!tmp2) {
      const obj6 = { pointerEvents: "none", style: items10, children: closure_14(gradientBaseColor(expandedHeight[26]), obj7) };
      items10 = [tmp3.backgroundImageWrapper, memo, animatedStyle2];
      const View = tmp7(tmp5[10]).View;
      obj7 = { style: items11, source: obj8 };
      items11 = [tmp3.backgroundImage, memo];
      obj8 = { uri: imageUrl };
      tmp58 = closure_14(View, obj6);
    } else {
      tmp58 = null;
    }
  }
  items9[1] = tmp58;
  const tmp54Result = closure_15(Fragment, { children: items9 });
  const obj9 = { style: items12, pointerEvents: str, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items14 };
  items12 = [tmp3.backgroundWrapper, memo, animatedStyle];
  str = "none";
  const View2 = tmp7(tmp5[10]).View;
  if (null != onPress) {
    str = "box-none";
  }
  let tmp61 = null;
  if (null != backdropColor) {
    const obj10 = { style: items13 };
    items13 = [tmp3.backdrop, memo, ];
    const obj11 = { backgroundColor: backdropColor };
    items13[2] = obj11;
    tmp61 = closure_14(top, obj10);
  }
  items14 = [tmp61, , , ];
  let tmp64 = tmp54Result;
  if (tmp2) {
    const obj12 = { style: memo, children: tmp54Result };
    tmp64 = closure_14(QuestDockBackgroundMediaFade, obj12);
  }
  items14[1] = tmp64;
  const obj13 = { locations, style: items15, start: VerticalGradient.START, end: VerticalGradient.END, colors: memo1, pointerEvents: "none" };
  items15 = [tmp3.backgroundGradient, memo];
  items14[2] = closure_14(gradientBaseColor(expandedHeight[27]), obj13);
  items14[3] = foregroundContent;
  return closure_15(View2, obj9);
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockVideoBackground.tsx");

export default memoResult;
export { QuestDockBackgroundCollapsedMediaMode };
