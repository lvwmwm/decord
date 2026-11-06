// Module ID: 14035
// Function ID: 14036
// Name: VoicePanelChatView
// Dependencies: [19, 17, 11379, 1072, 21, 5170, 5915, 1108, 14033, 1113, 10905, 11380, 1652, 10872, 9927, 1493, 1627, 14036, 7572, 5340, 11719, 5229, 6176, 14037, 11372, 2]

// Module 14035 (VoicePanelChatView)
import react_native from "react-native" /* 17 */;
import intl2 from "intl" /* 1113 */;
import _mod1652 from "module_1652" /* 1652 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5915 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7572 */;
import ThemedGradientDefault from "ThemedGradient" /* 10872 */;
import AssetRegistryDefault from "AssetRegistry" /* 10905 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11379 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11380 */;
import ChatFloatingNavButtonDefault from "ChatFloatingNavButton" /* 14033 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;

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
let closure_9 = { code: "(function VoicePanelChatViewTsx1(){let[windowDimensions]=this.__closure;return{width:windowDimensions.get().width,height:windowDimensions.get().height};})" };
const memoResult = react.memo(function VoicePanelDismissChatButton() {
  let intl;
  const callback = react.useCallback(() => {
    const ComponentDispatch = require("ComponentDispatchUtils").ComponentDispatch;
    ComponentDispatch.dispatch(constants.VOICE_PANEL_TIV_CLOSE);
  }, []);
  const obj = { accessibilityLabel: intl.string(intl2.t["5MstTl"]), icon: AssetRegistryDefault, onPress: callback };
  const tmp2 = ChatFloatingNavButtonDefault;
  intl = intl2.intl;
  return metroRequire(tmp2, obj);
});
let closure_10 = react.memo(function GradientHack() {
  let items2;
  let tmp4;
  let tmp5;
  const windowDimensions = react.useContext(VoicePanelStateContextDefault).windowDimensions;
  const items = [closure_9, windowDimensions];
  let c0;
  [tmp4, tmp5] = items;
  const tmp3 = closure_8();
  const obj = _mod1652;
  class VoicePanelChatViewTsx1 {
    constructor() {
      size = { width: closure_0.get().width, height: closure_0.get().height };
      return size;
    }
  }
  const items1 = [tmp5];
  VoicePanelChatViewTsx1.__closure = items1;
  VoicePanelChatViewTsx1.__workletHash = 6734453041358;
  VoicePanelChatViewTsx1.__initData = tmp4;
  const animatedStyle = obj.useAnimatedStyle(VoicePanelChatViewTsx1);
  const obj2 = { style: items2, children: metroRequire(ThemedGradientDefault, { absolute: true }) };
  items2 = [tmp3.gradientWrapper, animatedStyle];
  const View = tmp(1652).View;
  return metroRequire(View, obj2);
});
const memoResult1 = react.memo(function VoicePanelChatView(shown) {
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
  const context = channelId.useContext(ref(guildId[11]));
  guildId = context.guildId;
  channelId = context.channelId;
  let obj = shown(guildId[14]);
  const gradientTop = obj.useGradientTop();
  const width = ref(guildId[15])().width;
  const rect = ref(guildId[16])();
  const items = [guildId, channelId];
  const obj2 = shown(guildId[17]);
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
    const ComponentDispatch = shown(guildId[7]).ComponentDispatch;
    ComponentDispatch.dispatch(constants.VOICE_PANEL_TIV_CLOSE);
  }, []);
  const obj3 = { value: controlsDrawerOpenWidth, children: closure_6(ThemeContextProvider, obj4) };
  const tmp9 = ref(guildId[19])();
  const Provider = ref(guildId[20]).Provider;
  obj4 = { gradient: tmp9, children: tmp11(AccessibilityView, obj5) };
  ThemeContextProvider = shown(guildId[21]).ThemeContextProvider;
  obj5 = { nativeID: "voice-panel-chat-view", accessibilityViewIsModal: shown, onAccessibilityEscape: callback, style: items2, children: items3 };
  items2 = [tmp.container, gradientTop];
  AccessibilityView = shown(guildId[22]).AccessibilityView;
  items3 = [closure_6(closure_10, {}), , ];
  const obj6 = { title: intl.string(shown(guildId[9]).t["/VQax8"]), disablePill: true, blurStyle: tmp.titleBlur };
  const tmp12 = ref(guildId[23]);
  intl = shown(guildId[9]).intl;
  items3[1] = closure_6(tmp12, obj6);
  tmp11 = closure_7;
  const tmp13 = ref(guildId[24]);
  if (guildId == null) {
    guildId = closure_5;
  }
  items3[2] = closure_6(tmp13, { disableGradient: true, alwaysRespectKeyboard: false, setNoExtractUI: false, guildId, channelId, chatInputRef: ref, screenIndex: "voice-panel" });
  return closure_6(Provider, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelChatView.tsx");

export default memoResult1;
export const MemoedVoicePanelDismissChatButton = memoResult;
