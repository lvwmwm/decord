// Module ID: 11366
// Function ID: 88363
// Name: updateChatOpen
// Dependencies: []

// Module 11366 (updateChatOpen)
function updateChatOpen(arg0, arg1) {
  importDefault(dependencyMap[6]).updateChatOpen(arg0, arg1);
}
const importAllResult = importAll(dependencyMap[0]);
const Platform = arg1(dependencyMap[1]).Platform;
const CONTROLS_DRAWER_HEADER_SIZE = arg1(dependencyMap[2]).CONTROLS_DRAWER_HEADER_SIZE;
({ ComponentActions: closure_4, ME: closure_5 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
const obj = { 9223372036854775807: 10, 9223372036854775807: 10, paddingTop: CONTROLS_DRAWER_HEADER_SIZE };
let closure_8 = arg1(dependencyMap[5]).createStyles({ container: obj, gradientWrapper: { top: CONTROLS_DRAWER_HEADER_SIZE }, titleBlur: { opacity: 0 } });
let closure_9 = { code: "function VoicePanelChatViewTsx1(){const{windowDimensions}=this.__closure;return{width:windowDimensions.get().width,height:windowDimensions.get().height};}" };
const obj2 = arg1(dependencyMap[5]);
let closure_10 = importAllResult.memo(() => {
  const windowDimensions = importAllResult.useContext(importDefault(dependencyMap[13])).windowDimensions;
  const arg1 = windowDimensions;
  let obj = arg1(dependencyMap[14]);
  const fn = function n() {
    return { width: windowDimensions.get().width, height: windowDimensions.get().height };
  };
  fn.__closure = { windowDimensions };
  fn.__workletHash = 16775846409623;
  fn.__initData = closure_9;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items };
  const items = [callback2().gradientWrapper, animatedStyle];
  const tmp = callback2();
  obj.children = callback(importDefault(dependencyMap[16]), { absolute: true });
  return callback(importDefault(dependencyMap[15]), obj);
});
const memoResult = importAllResult.memo(function VoicePanelDismissChatButton() {
  const callback = importAllResult.useCallback(() => {
    const ComponentDispatch = callback(closure_2[8]).ComponentDispatch;
    ComponentDispatch.dispatch(constants.VOICE_PANEL_TIV_CLOSE);
  }, []);
  if (tmp) {
    let obj = {};
    const intl2 = arg1(dependencyMap[10]).intl;
    obj.accessibilityLabel = intl2.string(arg1(dependencyMap[10]).t.5MstTl);
    obj.icon = importDefault(dependencyMap[11]);
    obj.onPress = callback;
    let tmp3Result = tmp3(importDefault(dependencyMap[9]), obj);
    const tmp10 = importDefault(dependencyMap[9]);
  } else {
    obj = {};
    const intl = arg1(dependencyMap[10]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[10]).t.5MstTl);
    obj.icon = importDefault(dependencyMap[11]);
    obj.onPress = callback;
    obj.variant = "primary-overlay";
    tmp3Result = tmp3(arg1(dependencyMap[12]).IconButton, obj);
  }
  return tmp3Result;
});
const memoResult1 = importAllResult.memo(function VoicePanelChatView(shown) {
  shown = shown.shown;
  const arg1 = shown;
  const tmp = callback2();
  const ref = importAllResult.useRef(null);
  const importDefault = ref;
  const context = importAllResult.useContext(importDefault(dependencyMap[13]));
  let guildId = context.guildId;
  const dependencyMap = guildId;
  const channelId = context.channelId;
  let obj = arg1(dependencyMap[17]);
  const gradientTop = obj.useGradientTop();
  const rect = importDefault(dependencyMap[19])();
  let obj1 = arg1(dependencyMap[20]);
  const items = [guildId, channelId];
  const controlsDrawerOpenWidth = obj1.getControlsDrawerOpenWidth(importDefault(dependencyMap[18])().width, rect.left, rect.right);
  const effect = importAllResult.useEffect(() => {
    ref(guildId[21]).preload(null != guildId ? guildId : closure_5, channelId);
    return () => {
      callback(closure_3, false);
    };
  }, items);
  const items1 = [channelId, shown];
  const effect1 = importAllResult.useEffect(() => {
    callback(channelId, shown);
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
  const callback = importAllResult.useCallback(() => {
    const ComponentDispatch = shown(guildId[8]).ComponentDispatch;
    ComponentDispatch.dispatch(constants.VOICE_PANEL_TIV_CLOSE);
  }, []);
  obj = { value: controlsDrawerOpenWidth };
  obj = { gradient: importDefault(dependencyMap[22])() };
  obj1 = { nativeID: "voice-panel-chat-view", accessibilityViewIsModal: shown, onAccessibilityEscape: callback, style: items2 };
  const items2 = [tmp.container, gradientTop];
  const items3 = [callback(closure_10, {}), , ];
  const obj2 = {};
  const tmp11 = closure_7;
  const tmp9 = importDefault(dependencyMap[22])();
  const intl = arg1(dependencyMap[10]).intl;
  obj2.title = intl.string(arg1(dependencyMap[10]).t./VQax8);
  obj2.disablePill = true;
  obj2.blurStyle = tmp.titleBlur;
  items3[1] = callback(importDefault(dependencyMap[26]), obj2);
  const obj3 = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true };
  const tmp12 = importDefault(dependencyMap[26]);
  if (null == guildId) {
    guildId = closure_5;
  }
  obj3.guildId = guildId;
  obj3.channelId = channelId;
  obj3.chatInputRef = ref;
  obj3.screenIndex = "voice-panel";
  items3[2] = callback(importDefault(dependencyMap[27]), obj3);
  obj1.children = items3;
  obj.children = tmp11(arg1(dependencyMap[25]).AccessibilityView, obj1);
  obj.children = callback(arg1(dependencyMap[24]).ThemeContextProvider, obj);
  return callback(importDefault(dependencyMap[23]).Provider, obj);
});
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelChatView.tsx");

export default memoResult1;
export const MemoedVoicePanelDismissChatButton = memoResult;
