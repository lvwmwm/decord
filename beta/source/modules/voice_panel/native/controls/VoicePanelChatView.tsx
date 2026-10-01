// Module ID: 11752
// Function ID: 11753
// Name: VoicePanelChatView
// Dependencies: [19, 17, 11753, 1074, 21, 4836, 5037, 1110, 11750, 1115, 4786, 11754, 4566, 6494, 5437, 7297, 1479, 1613, 11762, 4849, 4688, 11022, 4540, 5263, 11763, 10882, 2]

// Module 11752 (VoicePanelChatView)
import react_native from "react-native" /* 17 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import intl2 from "intl" /* 1115 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import AssetRegistryDefault from "AssetRegistry" /* 4786 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4849 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5037 */;
import ThemedGradientDefault from "ThemedGradient" /* 5437 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 6494 */;
import ChatFloatingNavButtonDefault from "ChatFloatingNavButton" /* 11750 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11753 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11754 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

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
const __initData = { code: "function VoicePanelChatViewTsx1(){const{windowDimensions}=this.__closure;return{width:windowDimensions.get().width,height:windowDimensions.get().height};}" };
const memoResult = react.memo(function VoicePanelDismissChatButton() {
  let intl;
  const callback = react.useCallback(() => {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.dispatch(constants.VOICE_PANEL_TIV_CLOSE);
  }, []);
  const obj = { accessibilityLabel: intl.string(intl2.t["5MstTl"]), icon: AssetRegistryDefault, onPress: callback };
  const tmp2 = ChatFloatingNavButtonDefault;
  intl = intl2.intl;
  return metroRequire(tmp2, obj);
});
let closure_10 = react.memo(() => {
  let items;
  const windowDimensions = react.useContext(VoicePanelStateContextDefault).windowDimensions;
  const fn = function n() {
    size = { width: windowDimensions.get().width, height: windowDimensions.get().height };
    return size;
  };
  fn.__closure = { windowDimensions };
  fn.__workletHash = 16775846409623;
  fn.__initData = __initData;
  const tmp = closure_8();
  const obj = ReanimatedRexport;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj2 = { style: items, children: metroRequire(ThemedGradientDefault, { absolute: true }) };
  items = [tmp.gradientWrapper, animatedStyle];
  const tmp3 = ReanimatedNativeViewDefault;
  return metroRequire(tmp3, obj2);
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
  let obj = shown(guildId[15]);
  const gradientTop = obj.useGradientTop();
  const width = ref(guildId[16])().width;
  const rect = ref(guildId[17])();
  const items = [guildId, channelId];
  const obj2 = shown(guildId[18]);
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
  const tmp9 = ref(guildId[20])();
  const Provider = ref(guildId[21]).Provider;
  obj4 = { gradient: tmp9, children: tmp11(AccessibilityView, obj5) };
  ThemeContextProvider = shown(guildId[22]).ThemeContextProvider;
  obj5 = { nativeID: "voice-panel-chat-view", accessibilityViewIsModal: shown, onAccessibilityEscape: callback, style: items2, children: items3 };
  items2 = [tmp.container, gradientTop];
  AccessibilityView = shown(guildId[23]).AccessibilityView;
  items3 = [closure_6(closure_10, {}), , ];
  const obj6 = { title: intl.string(shown(guildId[9]).t["/VQax8"]), disablePill: true, blurStyle: tmp.titleBlur };
  const tmp12 = ref(guildId[24]);
  intl = shown(guildId[9]).intl;
  items3[1] = closure_6(tmp12, obj6);
  tmp11 = closure_7;
  const tmp13 = ref(guildId[25]);
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
