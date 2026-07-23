// Module ID: 11377
// Function ID: 88438
// Name: updateChatOpen
// Dependencies: [31, 27, 10013, 653, 33, 4130, 4323, 1324, 1207, 11375, 1212, 4085, 7771, 10014, 3991, 7589, 4662, 8829, 1450, 1557, 11378, 4140, 3977, 10851, 3842, 4525, 11379, 10386, 2]

// Module 11377 (updateChatOpen)
import importAllResult from "result";
import { Platform } from "module_10386";
import { CONTROLS_DRAWER_HEADER_SIZE } from "VoicePanelControlsModes";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function updateChatOpen(arg0, arg1) {
  importDefault(4323).updateChatOpen(arg0, arg1);
}
({ ComponentActions: closure_4, ME: closure_5 } = ME);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let obj = { flex: 1, overflow: "hidden", paddingTop: CONTROLS_DRAWER_HEADER_SIZE };
obj = { position: "absolute", top: CONTROLS_DRAWER_HEADER_SIZE, left: 0 };
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ container: obj, gradientWrapper: obj, titleBlur: { opacity: 0 } });
let closure_9 = { code: "function VoicePanelChatViewTsx1(){const{windowDimensions}=this.__closure;return{width:windowDimensions.get().width,height:windowDimensions.get().height};}" };
let closure_10 = importAllResult.memo(() => {
  const windowDimensions = importAllResult.useContext(importDefault(10014)).windowDimensions;
  let obj = windowDimensions(3991);
  const fn = function n() {
    return { width: windowDimensions.get().width, height: windowDimensions.get().height };
  };
  fn.__closure = { windowDimensions };
  fn.__workletHash = 16775846409623;
  fn.__initData = closure_9;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items };
  items = [callback2().gradientWrapper, animatedStyle];
  const tmp = callback2();
  obj.children = callback(importDefault(4662), { absolute: true });
  return callback(importDefault(7589), obj);
});
const memoResult = importAllResult.memo(function VoicePanelDismissChatButton() {
  const callback = importAllResult.useCallback(() => {
    const ComponentDispatch = outer1_0(outer1_2[8]).ComponentDispatch;
    ComponentDispatch.dispatch(outer1_4.VOICE_PANEL_TIV_CLOSE);
  }, []);
  if (tmp) {
    let obj = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.accessibilityLabel = intl2.string(require(1212) /* getSystemLocale */.t["5MstTl"]);
    obj.icon = importDefault(4085);
    obj.onPress = callback;
    let tmp3Result = tmp3(importDefault(11375), obj);
    const tmp10 = importDefault(11375);
  } else {
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t["5MstTl"]);
    obj.icon = importDefault(4085);
    obj.onPress = callback;
    obj.variant = "primary-overlay";
    tmp3Result = tmp3(require(7771) /* IconButton */.IconButton, obj);
  }
  return tmp3Result;
});
const memoResult1 = importAllResult.memo(function VoicePanelChatView(shown) {
  shown = shown.shown;
  const tmp = callback2();
  const ref = channelId.useRef(null);
  const context = channelId.useContext(ref(guildId[13]));
  guildId = context.guildId;
  channelId = context.channelId;
  let obj = shown(guildId[17]);
  const gradientTop = obj.useGradientTop();
  const rect = ref(guildId[19])();
  let obj1 = shown(guildId[20]);
  const items = [guildId, channelId];
  const controlsDrawerOpenWidth = obj1.getControlsDrawerOpenWidth(ref(guildId[18])().width, rect.left, rect.right);
  const effect = channelId.useEffect(() => {
    ref(guildId[21]).preload(null != guildId ? guildId : outer1_5, channelId);
    return () => {
      outer2_11(outer1_3, false);
    };
  }, items);
  const items1 = [channelId, shown];
  const effect1 = channelId.useEffect(() => {
    outer1_11(channelId, shown);
    const current = ref.current;
    if (shown) {
      if (null != current) {
        const result = current.chatInputTrackerRegister();
      }
    } else {
      if (null != current) {
        const result1 = current.chatInputTrackerUnregister();
      }
      const current2 = ref.current;
      if (null != current2) {
        current2.blur();
      }
    }
  }, items1);
  const callback = channelId.useCallback(() => {
    const ComponentDispatch = shown(guildId[8]).ComponentDispatch;
    ComponentDispatch.dispatch(outer1_4.VOICE_PANEL_TIV_CLOSE);
  }, []);
  obj = { value: controlsDrawerOpenWidth };
  obj = { gradient: ref(guildId[22])() };
  obj1 = { nativeID: "voice-panel-chat-view", accessibilityViewIsModal: shown, onAccessibilityEscape: callback, style: items2 };
  items2 = [tmp.container, gradientTop];
  const items3 = [callback(closure_10, {}), , ];
  const obj2 = {};
  const tmp11 = closure_7;
  const tmp9 = ref(guildId[22])();
  const intl = shown(guildId[10]).intl;
  obj2.title = intl.string(shown(guildId[10]).t["/VQax8"]);
  obj2.disablePill = true;
  obj2.blurStyle = tmp.titleBlur;
  items3[1] = callback(ref(guildId[26]), obj2);
  const obj3 = { disableGradient: true, alwaysRespectKeyboard: false, setNoExtractUI: false };
  const tmp12 = ref(guildId[26]);
  if (null == guildId) {
    guildId = closure_5;
  }
  obj3.guildId = guildId;
  obj3.channelId = channelId;
  obj3.chatInputRef = ref;
  obj3.screenIndex = "voice-panel";
  items3[2] = callback(ref(guildId[27]), obj3);
  obj1.children = items3;
  obj.children = tmp11(shown(guildId[25]).AccessibilityView, obj1);
  obj.children = callback(shown(guildId[24]).ThemeContextProvider, obj);
  return callback(ref(guildId[23]).Provider, obj);
});
let result = require("VoicePanelControlsModes").fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelChatView.tsx");

export default memoResult1;
export const MemoedVoicePanelDismissChatButton = memoResult;
