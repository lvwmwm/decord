// Module ID: 19471
// Function ID: 19472
// Name: VoicePanelDockPIPWatchPrompt
// Dependencies: [19, 17, 6782, 1386, 1071, 21, 5012, 575, 11733, 6348, 6349, 8377, 1255, 19472, 504, 6776, 5073, 1653, 5222, 1706, 7024, 6128, 1112, 5603, 3430, 5610, 7910, 7216, 2]
// Exports: useVoicePanelDockWatchPromptActions

// Module 19471 (VoicePanelDockPIPWatchPrompt)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import _mod1706 from "module_1706" /* 1706 */;
import native from "native" /* 5073 */;
import timing_timing from "timing/timing" /* 5222 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6348 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6349 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11733 */;
import react from "react" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6782 */;
import UserStore from "UserStore" /* 1386 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, streamForUser;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let rect;
function WatchPrompt(ownerId) {
  let IconButton;
  let channelId;
  let cleanUp;
  let closure_2;
  let guildId;
  let hideContent;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let isConnecting;
  let items10;
  let items7;
  let items8;
  let obj11;
  let obj14;
  let obj9;
  let str;
  let streamKey;
  let tmp15;
  let tmp16;
  let transitionState;
  ownerId = ownerId.ownerId;
  ({ streamKey, isConnecting, cleanUp } = ownerId);
  dependencyMap = undefined;
  let sharedValue;
  ({ hideContent, transitionState } = ownerId);
  let tmp = closure_10();
  const tmp2 = cleanUp;
  let tmp3 = dependencyMap;
  const context = sharedValue.useContext(cleanUp(11733));
  const tmp5 = ownerId;
  ({ channelId, guildId } = context);
  let obj = ownerId(504);
  let items = [UserStore];
  let items1 = [ownerId];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(ownerId), items1);
  let obj2 = cleanUp(6776);
  const name = obj2.useName(guildId, channelId, stateFromStores);
  const context1 = sharedValue.useContext(cleanUp(11733));
  const channelId2 = context1.channelId;
  const guildId2 = context1.guildId;
  const tmp9 = cleanUp(6348);
  const analyticsLocations = tmp9(cleanUp(6349).STREAM_WATCH_PROMPT_PIP).analyticsLocations;
  const items2 = [ownerId, guildId2, isConnecting, analyticsLocations];
  const items3 = [guildId2, channelId2, isConnecting, streamKey, analyticsLocations];
  const callback = sharedValue.useCallback(() => {
    const tmp = isConnecting;
    if (!tmp) {
      if (null != ownerId) {
        streamForUser = streamForUser.getStreamForUser(tmp2, guildId2);
        if (null != streamForUser) {
          const obj2 = { forceMultiple: true, noFocus: true, analyticsLocations };
          const obj = ownerId(isConnecting[11]);
          obj.watchStream(streamForUser, obj2);
        }
      }
    }
  }, items2);
  const callback1 = sharedValue.useCallback(() => {
    const obj = cleanUp(isConnecting[12]);
    const obj2 = { guild_id: guildId2, channel_id: channelId2, location_stack: analyticsLocations };
    obj.track(constants.STREAM_WATCH_PROMPT_PIP_DISMISSED, obj2);
    const tmp3 = isConnecting && null != streamKey;
    if (tmp3) {
      const obj3 = ownerId(isConnecting[11]);
      obj3.stopStream(streamKey, false);
    }
    const obj4 = ownerId(isConnecting[13]);
    const result = obj4.dismissVoicePanelDockWatchPrompt();
  }, items3);
  const tmp12 = transitionState !== ownerId(5073).TransitionStates.YEETED;
  dependencyMap = tmp12;
  let obj3 = ownerId(1653);
  sharedValue = obj3.useSharedValue(1);
  const items4 = [sharedValue, tmp12, cleanUp];
  const effect = sharedValue.useEffect(() => {
    let tmp10;
    let tmp11;
    let tmp9;
    if (closure_2) {
      const result = set(1);
    } else {
      const items = [closure_11, , ];
      const withTiming = timing_timing.withTiming;
      items[1] = _mod1706.scheduleOnRN;
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
  let obj4 = ownerId(1653);
  const items5 = [closure_12, sharedValue];
  let c0;
  [tmp15, tmp16] = items5;
  class VoicePanelDockPIPWatchPromptTsx2 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items6 = [tmp16];
  VoicePanelDockPIPWatchPromptTsx2.__closure = items6;
  VoicePanelDockPIPWatchPromptTsx2.__workletHash = 9976352241568;
  VoicePanelDockPIPWatchPromptTsx2.__initData = tmp15;
  let tmp18 = !tmp12;
  const animatedStyle = obj4.useAnimatedStyle(VoicePanelDockPIPWatchPromptTsx2);
  if (tmp12) {
    tmp18 = hideContent;
  }
  const obj5 = { style: items7, pointerEvents: str, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items8 };
  items7 = [tmp.container, animatedStyle];
  str = "auto";
  const View = tmp2(1653).View;
  if (tmp18) {
    str = "none";
  }
  items8 = [, , ];
  const obj6 = { style: tmp.border, pointerEvents: "none" };
  items8[0] = closure_7(tmp2(7024), obj6);
  const items9 = [tmp.content, ];
  let hidden = null;
  const tmp2Result = tmp2(7024);
  if (tmp18) {
    hidden = tmp.hidden;
  }
  const obj7 = { style: items9, children: items10 };
  items9[1] = hidden;
  const obj8 = { type: obj9, variant: "critical" };
  obj9 = { text: intl.string(tmp5(1112).t.dI3q4h) };
  const Badge = tmp5(6128).Badge;
  intl = tmp5(1112).intl;
  items10 = [closure_7(Badge, obj8), , ];
  let tmp20Result = null != stateFromStores;
  if (tmp20Result) {
    const obj10 = { variant: "body-sm/medium", color: "text-default", lineClamp: 1, style: tmp.label, children: intl2.formatToPlainString(tmp2(3430)["g9x8/M"], obj11) };
    const Text = tmp5(5603).Text;
    intl2 = tmp5(1112).intl;
    obj11 = { username: name };
    tmp20Result = tmp20(Text, obj10);
  }
  items10[1] = tmp20Result;
  const obj12 = { size: "sm", variant: "primary-overlay", text: intl3.string(tmp5(1112).t.I6JG46), onPress: callback, loading: isConnecting };
  const Button = tmp5(5610).Button;
  intl3 = tmp5(1112).intl;
  items10[2] = closure_7(Button, obj12);
  items8[1] = closure_8(tmp2Result, obj7);
  const items11 = [tmp.dismissButton, ];
  let hidden1 = null;
  const tmp2Result2 = tmp2(7024);
  if (tmp18) {
    hidden1 = tmp.hidden;
  }
  items11[1] = hidden1;
  const obj13 = { style: items11, children: closure_7(IconButton, obj14) };
  obj14 = { size: "sm", variant: "tertiary", icon: closure_7(tmp5(7216).XSmallIcon, { size: "sm" }), onPress: callback1, accessibilityLabel: intl4.string(tmp5(1112).t.WAI6xu) };
  IconButton = tmp5(7910).IconButton;
  intl4 = tmp5(1112).intl;
  items8[2] = closure_7(tmp2Result2, obj13);
  return closure_8(View, obj5);
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
let obj = { container: obj2, border: obj3, content: { alignSelf: "stretch", alignItems: "center" }, hidden: { opacity: 0 }, dismissButton: rect, label: obj4 };
obj2 = { alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
rect = { position: "absolute", top: nativeDefault.space.PX_4, right: nativeDefault.space.PX_4 };
obj4 = { textAlign: "center", marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let closure_11 = { code: "(function VoicePanelDockPIPWatchPromptTsx1(finished){let[scheduleOnRN,cleanUp]=this.__closure;if(finished===true){scheduleOnRN(cleanUp);}})" };
let closure_12 = { code: "(function VoicePanelDockPIPWatchPromptTsx2(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
const memoResult = react.memo(function VoicePanelDockPIPWatchPrompt(arg0) {
  let hideContent;
  let isConnecting;
  let ownerId;
  let streamKey;
  let visible;
  ({ ownerId, streamKey, isConnecting, hideContent, visible } = arg0);
  let tmp2;
  const TransitionItem = native.TransitionItem;
  const tmp = metroImportDefault;
  if (visible) {
    tmp2 = { ownerId, streamKey, isConnecting, hideContent };
    const obj = { ownerId, streamKey, isConnecting, hideContent };
  }
  const obj2 = { item: tmp2, renderItem: renderWatchPrompt };
  return tmp(TransitionItem, obj2);
});
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockPIPWatchPrompt.tsx");

export default memoResult;
export function useVoicePanelDockWatchPromptActions(ownerId, streamKey, arg2) {
  let channelId;
  let closure_2;
  let items;
  let items1;
  let closure_0 = ownerId;
  importDefault = streamKey;
  dependencyMap = arg2;
  const context = channelId.useContext(VoicePanelStateContextDefault);
  channelId = context.channelId;
  const guildId = context.guildId;
  const tmp2 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp2(AnalyticsLocationDefault.STREAM_WATCH_PROMPT_PIP).analyticsLocations;
  const obj = {
    handleWatch: channelId.useCallback(() => {
      const tmp = isConnecting;
      if (!tmp) {
        if (null != ownerId) {
          streamForUser = streamForUser.getStreamForUser(tmp2, guildId2);
          if (null != streamForUser) {
            const obj2 = { forceMultiple: true, noFocus: true, analyticsLocations };
            const obj = ownerId(isConnecting[11]);
            obj.watchStream(streamForUser, obj2);
          }
        }
      }
    }, items),
    handleDismiss: channelId.useCallback(() => {
      const obj = cleanUp(isConnecting[12]);
      const obj2 = { guild_id: guildId2, channel_id: channelId2, location_stack: analyticsLocations };
      obj.track(constants.STREAM_WATCH_PROMPT_PIP_DISMISSED, obj2);
      const tmp3 = isConnecting && null != streamKey;
      if (tmp3) {
        const obj3 = ownerId(isConnecting[11]);
        obj3.stopStream(streamKey, false);
      }
      const obj4 = ownerId(isConnecting[13]);
      const result = obj4.dismissVoicePanelDockWatchPrompt();
    }, items1)
  };
  items = [ownerId, guildId, arg2, analyticsLocations];
  items1 = [guildId, channelId, arg2, streamKey, analyticsLocations];
  return obj;
}
