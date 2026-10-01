// Module ID: 17033
// Function ID: 17034
// Name: VoicePanelVoiceControls
// Dependencies: [19, 17, 2045, 11753, 21, 4836, 576, 4566, 11754, 16861, 8800, 2021, 16926, 9437, 13337, 5279, 5999, 17034, 1115, 9448, 504, 11585, 5266, 6073, 1610, 5901, 6544, 11764, 2]

// Module 17033 (VoicePanelVoiceControls)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import UserSettings from "UserSettings" /* 2021 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
import getEmbeddedActivityLaunchability from "getEmbeddedActivityLaunchability" /* 8800 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 9437 */;
import UserSettingsVoiceProcessing from "UserSettingsVoiceProcessing" /* 9448 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11753 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11754 */;
import useSelectedActiveStreamDefault from "useSelectedActiveStream" /* 13337 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 16861 */;
import MobileGoLiveEntrypointExperiment from "MobileGoLiveEntrypointExperiment" /* 16926 */;
import VoicePanelVoiceControlsButtons from "VoicePanelVoiceControlsButtons" /* 17034 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import size from "module_2" /* 2 */;

const MobileGoLiveEntrypointExperimentDefault = MobileGoLiveEntrypointExperiment;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function NOOP() {

}
const ScrollView = react_native.ScrollView;
const CONTROLS_DRAWER_HEADER_EXPANDED_SIZE = VoicePanelControlsConstants.CONTROLS_DRAWER_HEADER_EXPANDED_SIZE;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { scrollView: obj2, scrollViewScreenReader: obj3, blurRegion: { height: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE } };
obj2 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, marginTop: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
let closure_8 = createStyles(obj);
let closure_9 = ReanimatedRexport.createAnimatedComponent(ScrollView);
let closure_10 = react.memo((arg0) => {
  let channel;
  let intl;
  let intl2;
  let items2;
  let items4;
  let openTab;
  ({ channel, openTab } = arg0);
  const channelId = react.useContext(VoicePanelStateContextDefault).channelId;
  const tmp2 = useIsConnectedToVoiceChannelDefault(channelId);
  const obj = getEmbeddedActivityLaunchability;
  const embeddedActivityLaunchability = obj.useEmbeddedActivityLaunchability(channelId);
  const DeveloperMode = UserSettings.DeveloperMode;
  const setting = DeveloperMode.useSetting();
  const obj2 = MobileGoLiveEntrypointExperimentDefault;
  const treatment = obj2.useConfig({ location: "VoicePanelVoiceControls" }).treatment;
  const obj3 = MobileAudioOutputExperimentDefault;
  let nonContextualStreamOutputPresent = obj3.useConfig({ location: "VoicePanelVoiceControls" }).nonContextualStreamOutputPresent;
  const tmp6 = useSelectedActiveStreamDefault(channel);
  let tmp7Result = tmp2;
  const Stack = Stack_Stack.Stack;
  if (tmp2) {
    let tmp9Result;
    const TableRowGroup = tmp3(5999).TableRowGroup;
    const obj4 = { openTab };
    const items = [hasOwnProperty(VoicePanelVoiceControlsButtons.ActivitiesButton, obj4), ];
    if (MobileGoLiveEntrypointExperiment.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT === treatment) {
      const obj5 = { openTab };
      tmp9Result = tmp9(tmp3(17034).ChatButton, obj5);
    } else if (MobileGoLiveEntrypointExperiment.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD === treatment) {
      const obj6 = { channel };
      tmp9Result = tmp9(tmp3(17034).SoundboardButton, obj6);
    } else {
      const obj7 = { channel };
      tmp9Result = tmp9(tmp3(17034).ScreenshareButton, obj7);
    }
    const obj8 = { hasIcons: true, children: items };
    items[1] = tmp9Result;
    tmp7Result = tmp7(TableRowGroup, obj8);
  }
  const children = [tmp7Result, hasOwnProperty(VoicePanelVoiceControlsButtons.GameConsoles, { channel, connected: tmp2 }), , , , , ];
  if (nonContextualStreamOutputPresent) {
    nonContextualStreamOutputPresent = tmp11(tmp3(17034).StreamVolumeItem, {});
  }
  children[2] = nonContextualStreamOutputPresent;
  const obj9 = { title: intl.string(intl3.t.dsXapM), hasIcons: true, children: items2 };
  const TableRowGroup2 = tmp3(5999).TableRowGroup;
  intl = tmp3(1115).intl;
  items2 = [hasOwnProperty(VoicePanelVoiceControlsButtons.DeafenSwitch, {}), hasOwnProperty(VoicePanelVoiceControlsButtons.AudioRouteButton, { channel, connected: tmp2 }), hasOwnProperty(VoicePanelVoiceControlsButtons.HideNonVideoParticipants, { channelId }), hasOwnProperty(VoicePanelVoiceControlsButtons.HideSelfVideo, {}), ];
  let tmp11Result = tmp2;
  if (tmp11Result) {
    const obj10 = { channel, connected: tmp2 };
    tmp11Result = tmp11(tmp3(17034).InviteButton, obj10);
  }
  items2[4] = tmp11Result;
  children[3] = metroRequire(TableRowGroup2, obj9);
  children[4] = hasOwnProperty(UserSettingsVoiceProcessing.VoiceProcessingOptions, {});
  const TableRowGroup3 = tmp3(5999).TableRowGroup;
  const items3 = [, ];
  const obj11 = { guildId: channel.guild_id };
  items3[0] = hasOwnProperty(VoicePanelVoiceControlsButtons.VoiceSettingsButton, obj11);
  let tmp11Result2 = null != tmp6;
  if (tmp11Result2) {
    const obj12 = { stream: tmp6 };
    tmp11Result2 = tmp11(tmp3(17034).ReportStreamIssueButton, obj12);
  }
  items3[1] = tmp11Result2;
  children[5] = metroRequire(TableRowGroup3, { hasIcons: true, children: items3 });
  let tmp7Result2 = null;
  if (tmp2) {
    tmp7Result2 = null;
    if (setting) {
      tmp7Result2 = null;
      if (embeddedActivityLaunchability === getEmbeddedActivityLaunchability.EmbeddedActivityLaunchability.CAN_LAUNCH) {
        const obj13 = { title: intl2.string(intl3.t.J6rqB7), hasIcons: true, children: items4 };
        const TableRowGroup4 = tmp3(5999).TableRowGroup;
        intl2 = tmp3(1115).intl;
        items4 = [hasOwnProperty(VoicePanelVoiceControlsButtons.LeaveActivitiesButton, {}), hasOwnProperty(VoicePanelVoiceControlsButtons.ShareActivityLogsButton, {}), hasOwnProperty(VoicePanelVoiceControlsButtons.ToggleShowActivitiesDebugOverlay, {})];
        tmp7Result2 = tmp7(TableRowGroup4, obj13);
      }
    }
  }
  children[6] = tmp7Result2;
  return metroRequire(Stack, { spacing: 24, children });
});
const scrollIndicatorInsets = { top: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
const __initData = { code: "function VoicePanelVoiceControlsTsx1({offset:offset}){const{isScrolled}=this.__closure;isScrolled.set(offset>0);}" };
const memoResult = react.memo(function VoicePanelVoiceControls(isVisible) {
  let animatedProps;
  let items4;
  let obj6;
  let onScroll;
  let tmp15;
  isVisible = isVisible.isVisible;
  let channelId;
  let sharedValue;
  let gestureRef;
  let scrollerRef;
  const openTab = isVisible.openTab;
  let tmp = closure_8();
  channelId = gestureRef.useContext(channelId(sharedValue[8])).channelId;
  let obj = isVisible(sharedValue[20]);
  const items = [scrollerRef];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const obj2 = isVisible(sharedValue[7]);
  sharedValue = obj2.useSharedValue(false);
  const fn = function s(offset) {
    const result = sharedValue.set(offset.offset > 0);
  };
  fn.__closure = { isScrolled: sharedValue };
  fn.__workletHash = 16758626276795;
  fn.__initData = __initData;
  const items1 = [sharedValue];
  const callback = gestureRef.useCallback(fn, items1);
  const obj3 = isVisible(sharedValue[21]);
  const animatedScrollLock = obj3.useAnimatedScrollLock({ onScrollHandlerWorkletized: callback });
  gestureRef = animatedScrollLock.gestureRef;
  scrollerRef = animatedScrollLock.scrollerRef;
  ({ onScroll, animatedProps } = animatedScrollLock);
  const obj4 = isVisible(sharedValue[22]);
  const isScreenReaderEnabled = obj4.useIsScreenReaderEnabled();
  const items2 = [isVisible, scrollerRef];
  const effect = gestureRef.useEffect(() => {
    const tmp = isVisible;
    if (tmp) {
      const current = scrollerRef.current;
      if (current != null) {
        current.scrollTo({ x: 0, y: 0, animated: false });
      }
    }
  }, items2);
  const items3 = [gestureRef];
  const memo = gestureRef.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const enabled = Gesture.Native().enabled;
    Gesture.Native();
    const obj = MetaQuestUtils;
    const enabledResult = enabled(!obj.isMetaQuest());
    return enabledResult.simultaneousWithExternalGesture(gestureRef);
  }, items3);
  const obj5 = { gesture: memo, children: closure_6(tmp15, obj6) };
  let tmp14Result = !isScreenReaderEnabled;
  obj6 = { style: isScreenReaderEnabled ? tmp.scrollViewScreenReader : tmp.scrollView, ref: scrollerRef, onScroll, animatedProps, onMomentumScrollEnd: NOOP, scrollEventThrottle: 8.333333333333334, scrollIndicatorInsets, children: items4 };
  const GestureDetector = isVisible(sharedValue[23]).GestureDetector;
  const tmp13 = closure_7;
  tmp15 = closure_9;
  const tmp4 = isVisible;
  if (!isScreenReaderEnabled) {
    const obj7 = { style: tmp.blurRegion };
    tmp14Result = tmp14(tmp2(tmp3[25]), obj7);
  }
  items4 = [tmp14Result, , ];
  let tmp14Result3 = null != stateFromStores;
  if (tmp14Result3) {
    const obj8 = { channel: stateFromStores, openTab };
    tmp14Result3 = tmp14(closure_10, obj8);
  }
  items4[1] = tmp14Result3;
  items4[2] = closure_5(tmp4(sharedValue[26]).SafeAreaPaddingView, { bottom: true });
  const children = [closure_5(GestureDetector, obj5), ];
  let tmp14Result4 = !isScreenReaderEnabled;
  if (tmp14Result4) {
    const obj9 = { shown: sharedValue, style: tmp.blurRegion };
    tmp14Result4 = tmp14(tmp2(tmp3[27]), obj9);
  }
  children[1] = tmp14Result4;
  return closure_6(tmp13, { children });
});
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelVoiceControls.tsx");

export default memoResult;
