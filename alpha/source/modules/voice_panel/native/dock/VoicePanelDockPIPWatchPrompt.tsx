// Module ID: 20056
// Function ID: 20057
// Name: VoicePanelDockPIPWatchPrompt
// Dependencies: [19, 17, 6820, 1388, 1072, 21, 5306, 575, 11984, 504, 6351, 7918, 7937, 6862, 1256, 20055, 5377, 1655, 5548, 1708, 7459, 1113, 5929, 3253, 5936, 7722, 7988, 7549, 2]

// Module 20056 (VoicePanelDockPIPWatchPrompt)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import _mod1708 from "module_1708" /* 1708 */;
import native from "native" /* 5377 */;
import timing_timing from "timing/timing" /* 5548 */;
import StreamActionCreators from "StreamActionCreators" /* 6862 */;
import VoicePanelDockActionCreators from "VoicePanelDockActionCreators" /* 20055 */;
import react from "react" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6820 */;
import UserStore from "UserStore" /* 1388 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let rect;
function WatchPrompt(ownerId) {
  let IconButton;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items7;
  let items8;
  let obj12;
  let obj7;
  let obj9;
  let str;
  let str2;
  let tmp14;
  let tmp15;
  ownerId = ownerId.ownerId;
  const streamKey = ownerId.streamKey;
  const isConnecting = ownerId.isConnecting;
  const cleanUp = ownerId.cleanUp;
  const transitionState = ownerId.transitionState;
  let tmp = closure_10();
  const tmp2 = streamKey;
  let tmp3 = isConnecting;
  const context = cleanUp.useContext(streamKey(isConnecting[8]));
  const channelId = context.channelId;
  const guildId = context.guildId;
  const tmp5 = ownerId;
  let obj = ownerId(isConnecting[9]);
  let items = [guildId];
  let items1 = [ownerId];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(ownerId), items1);
  let obj2 = streamKey(isConnecting[10]);
  const name = obj2.useName(guildId, channelId, stateFromStores);
  const tmp8 = streamKey(isConnecting[11]);
  const analyticsLocations = tmp8(streamKey(isConnecting[12]).STREAM_WATCH_PROMPT_PIP).analyticsLocations;
  const items2 = [ownerId, guildId, isConnecting, analyticsLocations];
  const items3 = [guildId, channelId, isConnecting, streamKey, analyticsLocations];
  const callback = cleanUp.useCallback(() => {
    const tmp = isConnecting;
    if (!tmp) {
      const streamForUser = ApplicationStreamingStore.getStreamForUser(ownerId, guildId);
      if (null != streamForUser) {
        const obj2 = { forceMultiple: true, noFocus: true, analyticsLocations };
        const obj = StreamActionCreators;
        obj.watchStream(streamForUser, obj2);
      }
    }
  }, items2);
  const callback1 = cleanUp.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { guild_id: guildId, channel_id: channelId, location_stack: analyticsLocations };
    obj.track(AnalyticEvents.STREAM_WATCH_PROMPT_PIP_DISMISSED, obj2);
    const tmp3 = isConnecting && null != streamKey;
    if (tmp3) {
      const obj3 = StreamActionCreators;
      obj3.stopStream(streamKey, false);
    }
    const obj4 = VoicePanelDockActionCreators;
    const result = obj4.dismissVoicePanelDockWatchPrompt();
  }, items3);
  const tmp11 = transitionState !== ownerId(isConnecting[16]).TransitionStates.YEETED;
  let closure_7 = tmp11;
  let obj3 = ownerId(isConnecting[17]);
  const sharedValue = obj3.useSharedValue(1);
  const items4 = [sharedValue, tmp11, cleanUp];
  const effect = cleanUp.useEffect(() => {
    let tmp10;
    let tmp11;
    let tmp9;
    if (closure_7) {
      const result = set(1);
    } else {
      const items = [closure_11, , ];
      const withTiming = timing_timing.withTiming;
      items[1] = _mod1708.scheduleOnRN;
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
  let obj4 = ownerId(isConnecting[17]);
  const items5 = [closure_12, sharedValue];
  let c0;
  [tmp14, tmp15] = items5;
  class VoicePanelDockPIPWatchPromptTsx2 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items6 = [tmp15];
  VoicePanelDockPIPWatchPromptTsx2.__closure = items6;
  VoicePanelDockPIPWatchPromptTsx2.__workletHash = 9976352241568;
  VoicePanelDockPIPWatchPromptTsx2.__initData = tmp14;
  const animatedStyle = obj4.useAnimatedStyle(VoicePanelDockPIPWatchPromptTsx2);
  const obj5 = { style: items7, pointerEvents: str, accessibilityElementsHidden: !tmp11, importantForAccessibility: str2, children: items8 };
  items7 = [tmp.container, animatedStyle];
  str = "none";
  const View = tmp2(tmp3[17]).View;
  const tmp17 = sharedValue;
  if (tmp11) {
    str = "auto";
  }
  str2 = "no-hide-descendants";
  if (tmp11) {
    str2 = "auto";
  }
  const obj6 = { type: obj7, variant: "critical" };
  obj7 = { text: intl.string(tmp5(tmp3[21]).t.dI3q4h) };
  const Badge = tmp5(tmp3[20]).Badge;
  intl = tmp5(tmp3[21]).intl;
  items8 = [closure_7(Badge, obj6), , , ];
  let tmp18Result = null != stateFromStores;
  if (tmp18Result) {
    const obj8 = { variant: "body-sm/medium", color: "text-default", lineClamp: 1, style: tmp.label, children: intl2.formatToPlainString(tmp2(tmp3[23])["g9x8/M"], obj9) };
    const Text = tmp5(tmp3[22]).Text;
    intl2 = tmp5(tmp3[21]).intl;
    obj9 = { username: name };
    tmp18Result = tmp18(Text, obj8);
  }
  items8[1] = tmp18Result;
  const obj10 = { size: "sm", variant: "primary-overlay", text: intl3.string(tmp5(tmp3[21]).t.I6JG46), onPress: callback, loading: isConnecting };
  const Button = tmp5(tmp3[24]).Button;
  intl3 = tmp5(tmp3[21]).intl;
  items8[2] = closure_7(Button, obj10);
  const obj11 = { style: tmp.dismissButton, children: closure_7(IconButton, obj12) };
  obj12 = { size: "sm", variant: "tertiary", icon: closure_7(tmp5(tmp3[27]).XSmallIcon, { size: "sm" }), onPress: callback1, accessibilityLabel: intl4.string(tmp5(tmp3[21]).t.WAI6xu) };
  const tmp2Result = tmp2(tmp3[25]);
  IconButton = tmp5(tmp3[26]).IconButton;
  intl4 = tmp5(tmp3[21]).intl;
  items8[3] = closure_7(tmp2Result, obj11);
  return tmp17(View, obj5);
}
function renderWatchPrompt(arg0, arg1, transitionState, cleanUp) {
  const obj = { transitionState, cleanUp };
  const merged = Object.assign(arg1);
  return metroImportDefault(WatchPrompt, obj, arg0);
}
const StyleSheet = react_native.StyleSheet;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = { duration: 200 };
let createStyles = createStyles_mod;
let obj = { container: obj2, dismissButton: rect, label: obj3 };
obj2 = { alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8 };
obj3 = { textAlign: "center", marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_16 };
let closure_10 = createStyles(obj);
let closure_11 = { code: "(function VoicePanelDockPIPWatchPromptTsx1(finished){let[scheduleOnRN,cleanUp]=this.__closure;if(finished===true){scheduleOnRN(cleanUp);}})" };
let closure_12 = { code: "(function VoicePanelDockPIPWatchPromptTsx2(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
const memoResult = react.memo(function VoicePanelDockPIPWatchPrompt(arg0) {
  let isConnecting;
  let ownerId;
  let streamKey;
  let visible;
  ({ ownerId, streamKey, isConnecting, visible } = arg0);
  let tmp2;
  const TransitionItem = native.TransitionItem;
  const tmp = metroImportDefault;
  if (visible) {
    tmp2 = { ownerId, streamKey, isConnecting };
    const obj = { ownerId, streamKey, isConnecting };
  }
  const obj2 = { item: tmp2, renderItem: renderWatchPrompt };
  return tmp(TransitionItem, obj2);
});
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockPIPWatchPrompt.tsx");

export default memoResult;
