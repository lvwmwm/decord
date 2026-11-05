// Module ID: 19648
// Function ID: 19649
// Name: VoicePanelVoiceControls
// Dependencies: [19, 17, 4992, 11417, 21, 5143, 575, 1652, 11418, 19643, 11954, 4968, 19526, 12149, 15448, 6165, 7204, 19649, 1113, 12161, 504, 12657, 5400, 5430, 1624, 7104, 7431, 14061, 2]

// Module 19648 (VoicePanelVoiceControls)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import UserSettings from "UserSettings" /* 4968 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5430 */;
import Stack_Stack from "Stack/Stack" /* 6165 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11417 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11418 */;
import getEmbeddedActivityLaunchability from "getEmbeddedActivityLaunchability" /* 11954 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 12149 */;
import UserSettingsVoiceProcessing from "UserSettingsVoiceProcessing" /* 12161 */;
import useSelectedActiveStreamDefault from "useSelectedActiveStream" /* 15448 */;
import MobileGoLiveEntrypointExperiment from "MobileGoLiveEntrypointExperiment" /* 19526 */;
import useShowConnectedControlsDefault from "useShowConnectedControls" /* 19643 */;
import VoicePanelVoiceControlsButtons from "VoicePanelVoiceControlsButtons" /* 19649 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4992 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5143 */;
import module_1652 from "module_1652" /* 1652 */;
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
let closure_9 = module_1652.createAnimatedComponent(ScrollView);
let closure_10 = react.memo(function ListItems(arg0) {
  let channel;
  let intl;
  let intl2;
  let items2;
  let items4;
  let openTab;
  ({ channel, openTab } = arg0);
  const channelId = react.useContext(VoicePanelStateContextDefault).channelId;
  const tmp2 = useShowConnectedControlsDefault(channelId);
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
    const TableRowGroup = tmp3(7204).TableRowGroup;
    const obj4 = { openTab };
    const items = [hasOwnProperty(VoicePanelVoiceControlsButtons.ActivitiesButton, obj4), ];
    if (MobileGoLiveEntrypointExperiment.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT === treatment) {
      const obj5 = { openTab };
      tmp9Result = tmp9(tmp3(19649).ChatButton, obj5);
    } else if (MobileGoLiveEntrypointExperiment.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD === treatment) {
      const obj6 = { channel };
      tmp9Result = tmp9(tmp3(19649).SoundboardButton, obj6);
    } else {
      const obj7 = { channel };
      tmp9Result = tmp9(tmp3(19649).ScreenshareButton, obj7);
    }
    const obj8 = { hasIcons: true, children: items };
    items[1] = tmp9Result;
    tmp7Result = tmp7(TableRowGroup, obj8);
  }
  const children = [tmp7Result, hasOwnProperty(VoicePanelVoiceControlsButtons.GameConsoles, { channel, connected: tmp2 }), , , , , ];
  if (nonContextualStreamOutputPresent) {
    nonContextualStreamOutputPresent = tmp11(tmp3(19649).StreamVolumeItem, {});
  }
  children[2] = nonContextualStreamOutputPresent;
  const obj9 = { title: intl.string(intl3.t.dsXapM), hasIcons: true, children: items2 };
  const TableRowGroup2 = tmp3(7204).TableRowGroup;
  intl = tmp3(1113).intl;
  items2 = [hasOwnProperty(VoicePanelVoiceControlsButtons.DeafenSwitch, {}), hasOwnProperty(VoicePanelVoiceControlsButtons.AudioRouteButton, { channel, connected: tmp2 }), hasOwnProperty(VoicePanelVoiceControlsButtons.HideNonVideoParticipants, { channelId }), hasOwnProperty(VoicePanelVoiceControlsButtons.HideSelfVideo, {}), ];
  let tmp11Result = tmp2;
  if (tmp11Result) {
    const obj10 = { channel, connected: tmp2 };
    tmp11Result = tmp11(tmp3(19649).InviteButton, obj10);
  }
  items2[4] = tmp11Result;
  children[3] = metroRequire(TableRowGroup2, obj9);
  children[4] = hasOwnProperty(UserSettingsVoiceProcessing.VoiceProcessingOptions, {});
  const TableRowGroup3 = tmp3(7204).TableRowGroup;
  const items3 = [, ];
  const obj11 = { guildId: channel.guild_id };
  items3[0] = hasOwnProperty(VoicePanelVoiceControlsButtons.VoiceSettingsButton, obj11);
  let tmp11Result2 = null != tmp6;
  if (tmp11Result2) {
    const obj12 = { stream: tmp6 };
    tmp11Result2 = tmp11(tmp3(19649).ReportStreamIssueButton, obj12);
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
        const TableRowGroup4 = tmp3(7204).TableRowGroup;
        intl2 = tmp3(1113).intl;
        items4 = [hasOwnProperty(VoicePanelVoiceControlsButtons.LeaveActivitiesButton, {}), hasOwnProperty(VoicePanelVoiceControlsButtons.ShareActivityLogsButton, {}), hasOwnProperty(VoicePanelVoiceControlsButtons.ToggleShowActivitiesDebugOverlay, {})];
        tmp7Result2 = tmp7(TableRowGroup4, obj13);
      }
    }
  }
  children[6] = tmp7Result2;
  return metroRequire(Stack, { spacing: 24, children });
});
const scrollIndicatorInsets = { top: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
let closure_13 = { code: "(function VoicePanelVoiceControlsTsx1({offset:offset}){let[isScrolled]=this.__closure;isScrolled.set(offset>0);})" };
const memoResult = react.memo(function VoicePanelVoiceControls(isVisible) {
  let animatedProps;
  let items6;
  let obj5;
  let onScroll;
  let tmp17;
  let tmp7;
  let tmp8;
  isVisible = isVisible.isVisible;
  let channelId;
  let gestureRef;
  let scrollerRef;
  const openTab = isVisible.openTab;
  let tmp = closure_8();
  let obj = scrollerRef;
  channelId = scrollerRef.useContext(channelId(gestureRef[8])).channelId;
  const items = [ChannelStore];
  const obj2 = isVisible(gestureRef[20]);
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const obj3 = isVisible(gestureRef[7]);
  const sharedValue = obj3.useSharedValue(false);
  const items1 = [closure_13, sharedValue];
  let c0;
  [tmp7, tmp8] = items1;
  class VoicePanelVoiceControlsTsx1 {
    constructor(offset) {
      const result = _undefined.set(offset.offset > 0);
    }
  }
  const items2 = [tmp8];
  VoicePanelVoiceControlsTsx1.__closure = items2;
  VoicePanelVoiceControlsTsx1.__workletHash = 4252778421250;
  VoicePanelVoiceControlsTsx1.__initData = tmp7;
  const items3 = [sharedValue];
  const callback = scrollerRef.useCallback(VoicePanelVoiceControlsTsx1, items3);
  const tmp4Result = isVisible(gestureRef[21]);
  const animatedScrollLock = tmp4Result.useAnimatedScrollLock({ onScrollHandlerWorkletized: callback });
  gestureRef = animatedScrollLock.gestureRef;
  scrollerRef = animatedScrollLock.scrollerRef;
  ({ onScroll, animatedProps } = animatedScrollLock);
  const tmp4Result2 = isVisible(gestureRef[22]);
  const isScreenReaderEnabled = tmp4Result2.useIsScreenReaderEnabled();
  const items4 = [isVisible, scrollerRef];
  const effect = obj.useEffect(() => {
    const tmp = isVisible;
    if (tmp) {
      const current = scrollerRef.current;
      if (current != null) {
        current.scrollTo({ x: 0, y: 0, animated: false });
      }
    }
  }, items4);
  const items5 = [gestureRef];
  const memo = obj.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const enabled = Gesture.Native().enabled;
    Gesture.Native();
    const obj = MetaQuestUtils;
    const enabledResult = enabled(!obj.isMetaQuest());
    return enabledResult.simultaneousWithExternalGesture(gestureRef);
  }, items5);
  const obj4 = { gesture: memo, children: closure_6(tmp17, obj5) };
  let tmp16Result = !isScreenReaderEnabled;
  obj5 = { style: isScreenReaderEnabled ? tmp.scrollViewScreenReader : tmp.scrollView, ref: scrollerRef, onScroll, animatedProps, onMomentumScrollEnd: NOOP, scrollEventThrottle: 8.333333333333334, scrollIndicatorInsets, children: items6 };
  const GestureDetector = tmp4(tmp3[23]).GestureDetector;
  const tmp15 = closure_7;
  tmp17 = closure_9;
  if (!isScreenReaderEnabled) {
    const obj6 = { style: tmp.blurRegion };
    tmp16Result = tmp16(tmp2(tmp3[25]), obj6);
  }
  items6 = [tmp16Result, , ];
  let tmp16Result3 = null != stateFromStores;
  if (tmp16Result3) {
    const obj7 = { channel: stateFromStores, openTab };
    tmp16Result3 = tmp16(closure_10, obj7);
  }
  items6[1] = tmp16Result3;
  items6[2] = closure_5(isVisible(gestureRef[26]).SafeAreaPaddingView, { bottom: true });
  const children = [closure_5(GestureDetector, obj4), ];
  let tmp16Result4 = !isScreenReaderEnabled;
  if (tmp16Result4) {
    const obj8 = { shown: sharedValue, style: tmp.blurRegion };
    tmp16Result4 = tmp16(tmp2(tmp3[27]), obj8);
  }
  children[1] = tmp16Result4;
  return closure_6(tmp15, { children });
});
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelVoiceControls.tsx");

export default memoResult;
