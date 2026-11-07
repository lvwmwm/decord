// Module ID: 19723
// Function ID: 19724
// Name: VoicePanelVoiceControls
// Dependencies: [19, 17, 4989, 11361, 21, 5140, 575, 1652, 11362, 19718, 11911, 4965, 19601, 12109, 15478, 11327, 6159, 19724, 7126, 1113, 12121, 504, 12635, 5390, 5420, 1624, 7023, 7355, 14063, 2]

// Module 19723 (VoicePanelVoiceControls)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import UserSettings from "UserSettings" /* 4965 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5420 */;
import Stack_Stack from "Stack/Stack" /* 6159 */;
import StageChannelUnifiedCallExperiment from "StageChannelUnifiedCallExperiment" /* 11327 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11361 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11362 */;
import getEmbeddedActivityLaunchability from "getEmbeddedActivityLaunchability" /* 11911 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 12109 */;
import UserSettingsVoiceProcessing from "UserSettingsVoiceProcessing" /* 12121 */;
import useSelectedActiveStreamDefault from "useSelectedActiveStream" /* 15478 */;
import MobileGoLiveEntrypointExperiment from "MobileGoLiveEntrypointExperiment" /* 19601 */;
import useShowConnectedControlsDefault from "useShowConnectedControls" /* 19718 */;
import VoicePanelVoiceControlsButtons from "VoicePanelVoiceControlsButtons" /* 19724 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
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
  const obj4 = StageChannelUnifiedCallExperiment;
  const isStageUnifiedCall = obj4.useIsStageUnifiedCall(channel, "VoicePanelVoiceControls");
  let tmp9 = tmp2;
  const Stack = Stack_Stack.Stack;
  if (tmp2) {
    tmp9 = isStageUnifiedCall;
  }
  if (tmp9) {
    const obj5 = { channel, openTab };
    tmp9 = hasOwnProperty(tmp3(19724).StageButtons, obj5);
  }
  const children = [tmp9, , , , , , , ];
  let tmp8Result = tmp2 && !isStageUnifiedCall;
  if (tmp8Result) {
    let tmp12Result;
    const TableRowGroup = tmp3(7126).TableRowGroup;
    const obj6 = { openTab };
    const items1 = [hasOwnProperty(VoicePanelVoiceControlsButtons.ActivitiesButton, obj6), ];
    if (MobileGoLiveEntrypointExperiment.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT === treatment) {
      const obj7 = { openTab };
      tmp12Result = tmp12(tmp3(19724).ChatButton, obj7);
    } else if (MobileGoLiveEntrypointExperiment.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD === treatment) {
      const obj8 = { channel };
      tmp12Result = tmp12(tmp3(19724).SoundboardButton, obj8);
    } else {
      const obj9 = { channel };
      tmp12Result = tmp12(tmp3(19724).ScreenshareButton, obj9);
    }
    const obj10 = { hasIcons: true, children: items1 };
    items1[1] = tmp12Result;
    tmp8Result = tmp8(TableRowGroup, obj10);
  }
  children[1] = tmp8Result;
  let tmp14 = !isStageUnifiedCall;
  if (tmp14) {
    const obj11 = { channel, connected: tmp2 };
    tmp14 = hasOwnProperty(tmp3(19724).GameConsoles, obj11);
  }
  children[2] = tmp14;
  if (nonContextualStreamOutputPresent) {
    nonContextualStreamOutputPresent = hasOwnProperty(tmp3(19724).StreamVolumeItem, {});
  }
  children[3] = nonContextualStreamOutputPresent;
  const obj12 = { title: intl.string(intl3.t.dsXapM), hasIcons: true, children: items2 };
  const TableRowGroup2 = tmp3(7126).TableRowGroup;
  intl = tmp3(1113).intl;
  items2 = [hasOwnProperty(VoicePanelVoiceControlsButtons.DeafenSwitch, {}), hasOwnProperty(VoicePanelVoiceControlsButtons.AudioRouteButton, { channel, connected: tmp2 }), , , ];
  let tmp17Result = !isStageUnifiedCall;
  if (tmp17Result) {
    const obj13 = { channelId };
    tmp17Result = tmp17(tmp3(19724).HideNonVideoParticipants, obj13);
  }
  items2[2] = tmp17Result;
  items2[3] = hasOwnProperty(VoicePanelVoiceControlsButtons.HideSelfVideo, {});
  let tmp17Result3 = tmp2;
  if (tmp17Result3) {
    const obj14 = { channel, connected: tmp2 };
    tmp17Result3 = tmp17(tmp3(19724).InviteButton, obj14);
  }
  items2[4] = tmp17Result3;
  children[4] = metroRequire(TableRowGroup2, obj12);
  children[5] = hasOwnProperty(UserSettingsVoiceProcessing.VoiceProcessingOptions, {});
  const TableRowGroup3 = tmp3(7126).TableRowGroup;
  const items3 = [, ];
  const obj15 = { guildId: channel.guild_id };
  items3[0] = hasOwnProperty(VoicePanelVoiceControlsButtons.VoiceSettingsButton, obj15);
  let tmp17Result4 = null != tmp6;
  if (tmp17Result4) {
    const obj16 = { stream: tmp6 };
    tmp17Result4 = tmp17(tmp3(19724).ReportStreamIssueButton, obj16);
  }
  items3[1] = tmp17Result4;
  children[6] = metroRequire(TableRowGroup3, { hasIcons: true, children: items3 });
  let tmp8Result2 = null;
  if (tmp2) {
    tmp8Result2 = null;
    if (setting) {
      tmp8Result2 = null;
      if (embeddedActivityLaunchability === getEmbeddedActivityLaunchability.EmbeddedActivityLaunchability.CAN_LAUNCH) {
        const obj17 = { title: intl2.string(intl3.t.J6rqB7), hasIcons: true, children: items4 };
        const TableRowGroup4 = tmp3(7126).TableRowGroup;
        intl2 = tmp3(1113).intl;
        items4 = [hasOwnProperty(VoicePanelVoiceControlsButtons.LeaveActivitiesButton, {}), hasOwnProperty(VoicePanelVoiceControlsButtons.ShareActivityLogsButton, {}), hasOwnProperty(VoicePanelVoiceControlsButtons.ToggleShowActivitiesDebugOverlay, {})];
        tmp8Result2 = tmp8(TableRowGroup4, obj17);
      }
    }
  }
  children[7] = tmp8Result2;
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
  const obj2 = isVisible(gestureRef[21]);
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
  const tmp4Result = isVisible(gestureRef[22]);
  const animatedScrollLock = tmp4Result.useAnimatedScrollLock({ onScrollHandlerWorkletized: callback });
  gestureRef = animatedScrollLock.gestureRef;
  scrollerRef = animatedScrollLock.scrollerRef;
  ({ onScroll, animatedProps } = animatedScrollLock);
  const tmp4Result2 = isVisible(gestureRef[23]);
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
  const GestureDetector = tmp4(tmp3[24]).GestureDetector;
  const tmp15 = closure_7;
  tmp17 = closure_9;
  if (!isScreenReaderEnabled) {
    const obj6 = { style: tmp.blurRegion };
    tmp16Result = tmp16(tmp2(tmp3[26]), obj6);
  }
  items6 = [tmp16Result, , ];
  let tmp16Result3 = null != stateFromStores;
  if (tmp16Result3) {
    const obj7 = { channel: stateFromStores, openTab };
    tmp16Result3 = tmp16(closure_10, obj7);
  }
  items6[1] = tmp16Result3;
  items6[2] = closure_5(isVisible(gestureRef[27]).SafeAreaPaddingView, { bottom: true });
  const children = [closure_5(GestureDetector, obj4), ];
  let tmp16Result4 = !isScreenReaderEnabled;
  if (tmp16Result4) {
    const obj8 = { shown: sharedValue, style: tmp.blurRegion };
    tmp16Result4 = tmp16(tmp2(tmp3[28]), obj8);
  }
  children[1] = tmp16Result4;
  return closure_6(tmp15, { children });
});
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelVoiceControls.tsx");

export default memoResult;
