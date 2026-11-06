// Module ID: 19606
// Function ID: 19607
// Name: VoicePanelDockPIPWatchPrompt
// Dependencies: [19, 17, 6794, 1385, 21, 5170, 575, 11380, 504, 6199, 8000, 19607, 5229, 1652, 5400, 1705, 7075, 1113, 5781, 3184, 7048, 5788, 8119, 7145, 2]

// Module 19606 (VoicePanelDockPIPWatchPrompt)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1705 from "module_1705" /* 1705 */;
import native from "native" /* 5229 */;
import timing_timing from "timing/timing" /* 5400 */;
import StreamActionCreators from "StreamActionCreators" /* 8000 */;
import VoicePanelDockActionCreators from "VoicePanelDockActionCreators" /* 19607 */;
import react from "react" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6794 */;
import UserStore from "UserStore" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let rect;
function WatchPrompt(ownerId) {
  let Button;
  let IconButton;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items7;
  let items8;
  let obj11;
  let obj13;
  let obj7;
  let obj9;
  let str;
  let str2;
  let tmp13;
  let tmp14;
  ownerId = ownerId.ownerId;
  const streamKey = ownerId.streamKey;
  const isConnecting = ownerId.isConnecting;
  const cleanUp = ownerId.cleanUp;
  let closure_5;
  const transitionState = ownerId.transitionState;
  let tmp = closure_9();
  const tmp2 = streamKey;
  const tmp3 = isConnecting;
  const context = cleanUp.useContext(streamKey(isConnecting[7]));
  const guildId = context.guildId;
  const tmp5 = ownerId;
  const channelId = context.channelId;
  let obj = ownerId(isConnecting[8]);
  let items = [closure_5];
  let items1 = [ownerId];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(ownerId), items1);
  let obj2 = streamKey(isConnecting[9]);
  const items2 = [ownerId, guildId, isConnecting];
  const name = obj2.useName(guildId, channelId, stateFromStores);
  const items3 = [isConnecting, streamKey];
  const callback = cleanUp.useCallback(() => {
    const tmp = isConnecting;
    if (!tmp) {
      const streamForUser = ApplicationStreamingStore.getStreamForUser(ownerId, guildId);
      if (null != streamForUser) {
        const obj = StreamActionCreators;
        obj.watchStream(streamForUser, { forceMultiple: true, noFocus: true });
      }
    }
  }, items2);
  const callback1 = cleanUp.useCallback(() => {
    const tmp = isConnecting && null != streamKey;
    if (tmp) {
      const obj = StreamActionCreators;
      obj.stopStream(streamKey, false);
    }
    const obj2 = VoicePanelDockActionCreators;
    const result = obj2.dismissVoicePanelDockWatchPrompt();
  }, items3);
  const tmp10 = transitionState !== ownerId(isConnecting[12]).TransitionStates.YEETED;
  closure_5 = tmp10;
  const obj3 = ownerId(isConnecting[13]);
  const sharedValue = obj3.useSharedValue(1);
  const items4 = [sharedValue, tmp10, cleanUp];
  const effect = cleanUp.useEffect(() => {
    let tmp10;
    let tmp11;
    let tmp9;
    if (closure_5) {
      const result = set(1);
    } else {
      const items = [closure_10, , ];
      const withTiming = timing_timing.withTiming;
      items[1] = _mod1705.scheduleOnRN;
      items[2] = cleanUp;
      let c0;
      let c1;
      [tmp9, tmp10, tmp11] = items;
      class VoicePanelDockPIPWatchPromptTsx1 {
        constructor(arg0) {
          if (true === arg0) {
            tmp = closure_0;
            tmp2 = closure_1;
            tmp3 = closure_0(closure_1);
          }
          return;
        }
      }
      const items1 = [tmp10, tmp11];
      VoicePanelDockPIPWatchPromptTsx1.__closure = items1;
      VoicePanelDockPIPWatchPromptTsx1.__workletHash = 10790735232603;
      VoicePanelDockPIPWatchPromptTsx1.__initData = tmp9;
      const result1 = set(withTiming(0, tmp5, "respect-motion-settings", VoicePanelDockPIPWatchPromptTsx1));
    }
  }, items4);
  const items5 = [closure_11, sharedValue];
  let c0;
  [tmp13, tmp14] = items5;
  const obj4 = ownerId(isConnecting[13]);
  class VoicePanelDockPIPWatchPromptTsx2 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items6 = [tmp14];
  VoicePanelDockPIPWatchPromptTsx2.__closure = items6;
  VoicePanelDockPIPWatchPromptTsx2.__workletHash = 9976352241568;
  VoicePanelDockPIPWatchPromptTsx2.__initData = tmp13;
  const animatedStyle = obj4.useAnimatedStyle(VoicePanelDockPIPWatchPromptTsx2);
  const obj5 = { style: items7, pointerEvents: str, accessibilityElementsHidden: !tmp10, importantForAccessibility: str2, children: items8 };
  items7 = [tmp.container, animatedStyle];
  str = "none";
  const View = tmp2(tmp3[13]).View;
  const tmp16 = closure_7;
  if (tmp10) {
    str = "auto";
  }
  str2 = "no-hide-descendants";
  if (tmp10) {
    str2 = "auto";
  }
  const obj6 = { type: obj7, variant: "critical" };
  obj7 = { text: intl.string(tmp5(tmp3[17]).t.dI3q4h) };
  const Badge = tmp5(tmp3[16]).Badge;
  intl = tmp5(tmp3[17]).intl;
  items8 = [sharedValue(Badge, obj6), , , ];
  let tmp17Result = null != stateFromStores;
  if (tmp17Result) {
    const obj8 = { variant: "body-sm/medium", color: "text-default", lineClamp: 1, style: tmp.label, children: intl2.formatToPlainString(tmp2(tmp3[19])["g9x8/M"], obj9) };
    const Text = tmp5(tmp3[18]).Text;
    intl2 = tmp5(tmp3[17]).intl;
    obj9 = { username: name };
    tmp17Result = tmp17(Text, obj8);
  }
  items8[1] = tmp17Result;
  const obj10 = { style: tmp.buttonRow, children: sharedValue(Button, obj11) };
  obj11 = { size: "sm", variant: "primary-overlay", text: intl3.string(tmp5(tmp3[17]).t.I6JG46), onPress: callback, loading: isConnecting, grow: true };
  const tmp2Result = tmp2(tmp3[20]);
  Button = tmp5(tmp3[21]).Button;
  intl3 = tmp5(tmp3[17]).intl;
  items8[2] = sharedValue(tmp2Result, obj10);
  const obj12 = { style: tmp.dismissButton, children: sharedValue(IconButton, obj13) };
  obj13 = { size: "sm", variant: "tertiary", icon: sharedValue(tmp5(tmp3[23]).XSmallIcon, { size: "sm" }), onPress: callback1, accessibilityLabel: intl4.string(tmp5(tmp3[17]).t.WAI6xu) };
  const tmp2Result2 = tmp2(tmp3[20]);
  IconButton = tmp5(tmp3[22]).IconButton;
  intl4 = tmp5(tmp3[17]).intl;
  items8[3] = sharedValue(tmp2Result2, obj12);
  return tmp16(View, obj5);
}
function renderWatchPrompt(arg0, arg1, transitionState, cleanUp) {
  const obj = { transitionState, cleanUp };
  const merged = Object.assign(arg1);
  return metroRequire(WatchPrompt, obj, arg0);
}
const StyleSheet = react_native.StyleSheet;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = { duration: 200 };
let createStyles = createStyles_mod;
let obj = { container: obj2, dismissButton: rect, buttonRow: { flexDirection: "row", alignSelf: "stretch" }, label: obj3 };
obj2 = { alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8 };
obj3 = { textAlign: "center", marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
let closure_10 = { code: "(function VoicePanelDockPIPWatchPromptTsx1(finished){let[scheduleOnRN,cleanUp]=this.__closure;if(finished===true){scheduleOnRN(cleanUp);}})" };
let closure_11 = { code: "(function VoicePanelDockPIPWatchPromptTsx2(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
const memoResult = react.memo(function VoicePanelDockPIPWatchPrompt(arg0) {
  let isConnecting;
  let ownerId;
  let streamKey;
  let visible;
  ({ ownerId, streamKey, isConnecting, visible } = arg0);
  let tmp2;
  const TransitionItem = native.TransitionItem;
  const tmp = metroRequire;
  if (visible) {
    tmp2 = { ownerId, streamKey, isConnecting };
    const obj = { ownerId, streamKey, isConnecting };
  }
  const obj2 = { item: tmp2, renderItem: renderWatchPrompt };
  return tmp(TransitionItem, obj2);
});
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockPIPWatchPrompt.tsx");

export default memoResult;
