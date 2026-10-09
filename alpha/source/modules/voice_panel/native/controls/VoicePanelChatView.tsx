// Module ID: 11923
// Function ID: 11924
// Name: VoicePanelChatView
// Dependencies: [19, 17, 11924, 1085, 21, 5091, 5105, 558, 576, 1121, 11921, 1126, 4997, 11925, 4811, 10196, 6760, 9279, 1497, 1631, 11933, 7008, 4933, 11934, 10329, 5358, 4788, 10646, 2]

// Module 11923 (VoicePanelChatView)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import intl2 from "intl" /* 1126 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import AssetRegistryDefault from "AssetRegistry" /* 4997 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5105 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 6760 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7008 */;
import ThemedGradientDefault from "ThemedGradient" /* 10196 */;
import ChatFloatingNavButtonDefault from "ChatFloatingNavButton" /* 11921 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11924 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11925 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let preloadResult;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const Platform = react_native.Platform;
const CONTROLS_DRAWER_HEADER_SIZE = VoicePanelControlsConstants.CONTROLS_DRAWER_HEADER_SIZE;
({ ComponentActions: closure_4, ME: hasOwnProperty } = Constants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: { flex: 1, overflow: "hidden", paddingTop: CONTROLS_DRAWER_HEADER_SIZE }, gradientWrapper: { position: "absolute", top: CONTROLS_DRAWER_HEADER_SIZE, left: 0 }, titleBlur: { opacity: 0 } };
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const __initData = { code: "function VoicePanelChatViewTsx1(){const{windowDimensions}=this.__closure;return{width:windowDimensions.get().width,height:windowDimensions.get().height};}" };
const __initData2 = { code: "function VoicePanelChatViewTsx2(){const{windowDimensions}=this.__closure;return{width:windowDimensions.get().width,height:windowDimensions.get().height};}" };
const memo = react.memo;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelDismissChatButton() {
  let first;
  let intl;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants.VOICE_PANEL_TIV_CLOSE);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { accessibilityLabel: intl.string(intl2.t["5MstTl"]), icon: AssetRegistryDefault, onPress: first };
    const tmp8 = ChatFloatingNavButtonDefault;
    intl = tmp(1126).intl;
    const tmp9 = metroRequire(tmp8, obj2);
    cResult[1] = tmp9;
    tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function VoicePanelDismissChatButton() {
  let intl;
  const callback = react.useCallback(() => {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.dispatch(constants.VOICE_PANEL_TIV_CLOSE);
  }, []);
  const obj = { accessibilityLabel: intl.string(intl2.t["5MstTl"]), icon: AssetRegistryDefault, onPress: callback };
  const tmp2 = ChatFloatingNavButtonDefault;
  intl = intl2.intl;
  return metroRequire(tmp2, obj);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GradientHack() {
  const obj = react2;
  const cResult = obj.c(6);
  const windowDimensions = react.useContext(VoicePanelStateContextDefault).windowDimensions;
  const tmp4 = closure_8();
  const fn = function n() {
    size = { width: windowDimensions.get().width, height: windowDimensions.get().height };
    return size;
  };
  fn.__closure = { windowDimensions };
  fn.__workletHash = 16775846409623;
  fn.__initData = __initData;
  const obj2 = ReanimatedRexport;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] === animatedStyle) {
    let tmp6;
    let tmp8;
    let tmp11;
    if (cResult[1] === tmp4.gradientWrapper) {
      tmp6 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp10 = metroRequire(ThemedGradientDefault, { absolute: true });
      cResult[3] = tmp10;
      tmp8 = tmp10;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] !== tmp6) {
      const obj3 = { style: tmp6, children: tmp8 };
      const tmp13 = metroRequire(ReanimatedNativeViewDefault, obj3);
      cResult[4] = tmp6;
      cResult[5] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[5];
    }
    return tmp11;
  }
  const items = [tmp4.gradientWrapper, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = tmp4.gradientWrapper;
  cResult[2] = items;
  tmp6 = items;
}) : (function GradientHack() {
  let items;
  const windowDimensions = react.useContext(VoicePanelStateContextDefault).windowDimensions;
  const fn = function n() {
    size = { width: windowDimensions.get().width, height: windowDimensions.get().height };
    return size;
  };
  fn.__closure = { windowDimensions };
  fn.__workletHash = 8873787995284;
  fn.__initData = __initData2;
  const tmp = closure_8();
  const obj = ReanimatedRexport;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj2 = { style: items, children: metroRequire(ThemedGradientDefault, { absolute: true }) };
  items = [tmp.gradientWrapper, animatedStyle];
  const tmp3 = ReanimatedNativeViewDefault;
  return metroRequire(tmp3, obj2);
}));
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult1 = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelChatView(shown) {
  let channelId;
  let guildId;
  const tmp = shown;
  let tmp2 = guildId;
  let obj = shown(guildId[8]);
  const cResult = obj.c(34);
  shown = shown.shown;
  closure_8();
  const ref = channelId.useRef(null);
  const context = channelId.useContext(ref(guildId[13]));
  guildId = context.guildId;
  const obj2 = channelId;
  channelId = context.channelId;
  const obj3 = shown(guildId[17]);
  const gradientTop = obj3.useGradientTop();
  const width = ref(guildId[18])().width;
  const rect = ref(guildId[19])();
  if (cResult[0] === rect.left) {
    if (cResult[1] === rect.right) {
      if (cResult[4] === channelId) {
        let tmp10;
        let tmp11;
        if (cResult[5] === guildId) {
          tmp10 = cResult[6];
          tmp11 = cResult[7];
        }
        const effect = obj2.useEffect(tmp10, tmp11);
        class D {
          constructor() {
            tmp = closure_1(closure_2[21]);
            tmp2 = guildId;
            preload = tmp.preload;
            if (guildId == null) {
              tmp2 = ME;
            }
            preloadResult = preload(tmp2, channelId);
            return () => {
              const obj = ref(guildId[6]);
              obj.updateChatOpen(channelId, false);
            };
          }
        }
        const fn = function x() {
          const obj = ChannelRTCActionCreatorsDefault;
          obj.updateChatOpen(channelId, shown);
          const current = ref.current;
          if (shown) {
            if (current != null) {
              const result = current.chatInputTrackerRegister();
            }
          } else {
            if (current != null) {
              const result1 = current.chatInputTrackerUnregister();
            }
            const current2 = tmp2.current;
            if (current2 != null) {
              current2.blur();
            }
          }
        };
        const items = [channelId, shown];
        cResult[8] = channelId;
        cResult[9] = shown;
        cResult[10] = fn;
        cResult[11] = items;
      }
      class D {
        constructor() {
          tmp = closure_1(closure_2[21]);
          tmp2 = guildId;
          preload = tmp.preload;
          if (guildId == null) {
            tmp2 = ME;
          }
          preloadResult = preload(tmp2, channelId);
          return () => {
            const obj = ref(guildId[6]);
            obj.updateChatOpen(channelId, false);
          };
        }
      }
      const items1 = [guildId, channelId];
      cResult[4] = channelId;
      cResult[5] = guildId;
      cResult[6] = D;
      cResult[7] = items1;
      tmp11 = items1;
      tmp10 = D;
    }
  }
  const tmpResult = tmp(tmp2[20]);
  const controlsDrawerOpenWidth = tmpResult.getControlsDrawerOpenWidth(width, rect.left, rect.right);
  cResult[0] = rect.left;
  cResult[1] = rect.right;
  cResult[2] = width;
  cResult[3] = controlsDrawerOpenWidth;
}) : (function VoicePanelChatView(shown) {
  let AccessibilityView;
  let ThemeContextProvider;
  let intl;
  let items2;
  let items3;
  let obj4;
  let obj5;
  let tmp11;
  shown = shown.shown;
  let guildId;
  let channelId;
  const tmp = closure_8();
  const ref = channelId.useRef(null);
  const context = channelId.useContext(ref(guildId[13]));
  guildId = context.guildId;
  channelId = context.channelId;
  let obj = shown(guildId[17]);
  const gradientTop = obj.useGradientTop();
  const width = ref(guildId[18])().width;
  const rect = ref(guildId[19])();
  const items = [guildId, channelId];
  const obj2 = shown(guildId[20]);
  const controlsDrawerOpenWidth = obj2.getControlsDrawerOpenWidth(width, rect.left, rect.right);
  const effect = channelId.useEffect(() => {
    let tmp2 = guildId;
    const preload = ChannelActionCreatorsDefault.preload;
    ChannelActionCreatorsDefault;
    if (guildId == null) {
      tmp2 = hasOwnProperty;
    }
    preload(tmp2, channelId);
    return () => {
      const obj = ref(guildId[6]);
      obj.updateChatOpen(channelId, false);
    };
  }, items);
  const items1 = [channelId, shown];
  const effect1 = channelId.useEffect(() => {
    const obj = ChannelRTCActionCreatorsDefault;
    obj.updateChatOpen(channelId, shown);
    const current = ref.current;
    if (shown) {
      if (current != null) {
        const result = current.chatInputTrackerRegister();
      }
    } else {
      if (current != null) {
        const result1 = current.chatInputTrackerUnregister();
      }
      const current2 = tmp2.current;
      if (current2 != null) {
        current2.blur();
      }
    }
  }, items1);
  const callback = channelId.useCallback(() => {
    const ComponentDispatch = shown(guildId[9]).ComponentDispatch;
    ComponentDispatch.dispatch(constants.VOICE_PANEL_TIV_CLOSE);
  }, []);
  const obj3 = { value: controlsDrawerOpenWidth, children: closure_6(ThemeContextProvider, obj4) };
  const tmp9 = ref(guildId[22])();
  const Provider = ref(guildId[27]).Provider;
  obj4 = { gradient: tmp9, children: tmp11(AccessibilityView, obj5) };
  ThemeContextProvider = shown(guildId[26]).ThemeContextProvider;
  obj5 = { nativeID: "voice-panel-chat-view", accessibilityViewIsModal: shown, onAccessibilityEscape: callback, style: items2, children: items3 };
  items2 = [tmp.container, gradientTop];
  AccessibilityView = shown(guildId[25]).AccessibilityView;
  items3 = [closure_6(closure_11, {}), , ];
  const obj6 = { title: intl.string(shown(guildId[11]).t["/VQax8"]), disablePill: true, blurStyle: tmp.titleBlur };
  const tmp12 = ref(guildId[23]);
  intl = shown(guildId[11]).intl;
  items3[1] = closure_6(tmp12, obj6);
  tmp11 = closure_7;
  const tmp13 = ref(guildId[24]);
  if (guildId == null) {
    guildId = closure_5;
  }
  items3[2] = closure_6(tmp13, { disableGradient: true, alwaysRespectKeyboard: false, setNoExtractUI: false, guildId, channelId, chatInputRef: ref, screenIndex: "voice-panel" });
  return closure_6(Provider, obj3);
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelChatView.tsx");

export default memoResult1;
export const MemoedVoicePanelDismissChatButton = memoResult;
