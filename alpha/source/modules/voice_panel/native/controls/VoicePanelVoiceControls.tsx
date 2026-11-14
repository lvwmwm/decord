// Module ID: 20109
// Function ID: 20110
// Name: VoicePanelVoiceControls
// Dependencies: [19, 17, 5155, 11983, 21, 5306, 575, 1655, 11984, 20104, 12778, 5131, 19986, 13002, 16100, 11951, 6337, 20110, 7746, 20120, 1113, 13031, 504, 13434, 5568, 5598, 1627, 7722, 7415, 14679, 2]

// Module 20109 (VoicePanelVoiceControls)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
import UserSettings from "UserSettings" /* 5131 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5598 */;
import Stack_Stack from "Stack/Stack" /* 6337 */;
import StageChannelUnifiedCallExperiment from "StageChannelUnifiedCallExperiment" /* 11951 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11983 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11984 */;
import getEmbeddedActivityLaunchability from "getEmbeddedActivityLaunchability" /* 12778 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 13002 */;
import UserSettingsVoiceProcessing from "UserSettingsVoiceProcessing" /* 13031 */;
import useSelectedActiveStreamDefault from "useSelectedActiveStream" /* 16100 */;
import MobileGoLiveEntrypointExperiment from "MobileGoLiveEntrypointExperiment" /* 19986 */;
import useShowConnectedControlsDefault from "useShowConnectedControls" /* 20104 */;
import VoicePanelVoiceControlsButtons from "VoicePanelVoiceControlsButtons" /* 20110 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import module_1655 from "module_1655" /* 1655 */;
import size from "module_2" /* 2 */;

const MobileGoLiveEntrypointExperimentDefault = MobileGoLiveEntrypointExperiment;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp;
const StreamVolumeMovedNoticeDefault = tmp(20120);
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
let closure_9 = module_1655.createAnimatedComponent(ScrollView);
let closure_10 = react.memo(function ListItems(arg0) {
  let StreamVolumeItem;
  let channel;
  let intl;
  let intl2;
  let items2;
  let items4;
  let openTab;
  ({ channel, openTab } = arg0);
  const channelId = react.useContext(VoicePanelStateContextDefault).channelId;
  const tmp3 = useShowConnectedControlsDefault(channelId);
  const obj = getEmbeddedActivityLaunchability;
  const embeddedActivityLaunchability = obj.useEmbeddedActivityLaunchability(channelId);
  const DeveloperMode = UserSettings.DeveloperMode;
  const setting = DeveloperMode.useSetting();
  const obj2 = MobileGoLiveEntrypointExperimentDefault;
  const treatment = obj2.useConfig({ location: "VoicePanelVoiceControls" }).treatment;
  const obj3 = MobileAudioOutputExperimentDefault;
  const nonContextualStreamOutputPresent = obj3.useConfig({ location: "VoicePanelVoiceControls" }).nonContextualStreamOutputPresent;
  const tmp7 = useSelectedActiveStreamDefault(channel);
  const obj4 = StageChannelUnifiedCallExperiment;
  const isStageUnifiedCall = obj4.useIsStageUnifiedCall(channel, "VoicePanelVoiceControls");
  let tmp10 = tmp3;
  const Stack = Stack_Stack.Stack;
  if (tmp3) {
    tmp10 = isStageUnifiedCall;
  }
  if (tmp10) {
    const obj5 = { channel, openTab };
    tmp10 = hasOwnProperty(tmp4(20110).StageButtons, obj5);
  }
  const children = [tmp10, , , , , , , ];
  let tmp9Result = tmp3 && !isStageUnifiedCall;
  if (tmp9Result) {
    let tmp13Result;
    const TableRowGroup = tmp4(7746).TableRowGroup;
    const obj6 = { openTab };
    const items1 = [hasOwnProperty(VoicePanelVoiceControlsButtons.ActivitiesButton, obj6), ];
    if (MobileGoLiveEntrypointExperiment.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT === treatment) {
      const obj7 = { openTab };
      tmp13Result = tmp13(tmp4(20110).ChatButton, obj7);
    } else if (MobileGoLiveEntrypointExperiment.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD === treatment) {
      const obj8 = { channel };
      tmp13Result = tmp13(tmp4(20110).SoundboardButton, obj8);
    } else {
      const obj9 = { channel };
      tmp13Result = tmp13(tmp4(20110).ScreenshareButton, obj9);
    }
    const obj10 = { hasIcons: true, children: items1 };
    items1[1] = tmp13Result;
    tmp9Result = tmp9(TableRowGroup, obj10);
  }
  children[1] = tmp9Result;
  let tmp15 = !isStageUnifiedCall;
  if (tmp15) {
    const obj11 = { channel, connected: tmp3 };
    tmp15 = hasOwnProperty(tmp4(20110).GameConsoles, obj11);
  }
  children[2] = tmp15;
  if (nonContextualStreamOutputPresent) {
    StreamVolumeItem = tmp4(20110).StreamVolumeItem;
  } else {
    StreamVolumeItem = StreamVolumeMovedNoticeDefault;
  }
  children[3] = hasOwnProperty(StreamVolumeItem, {});
  const obj12 = { title: intl.string(intl3.t.dsXapM), hasIcons: true, children: items2 };
  const TableRowGroup2 = tmp4(7746).TableRowGroup;
  intl = tmp4(1113).intl;
  items2 = [hasOwnProperty(VoicePanelVoiceControlsButtons.DeafenSwitch, {}), hasOwnProperty(VoicePanelVoiceControlsButtons.AudioRouteButton, { channel, connected: tmp3 }), , , ];
  let tmp17Result = !isStageUnifiedCall;
  if (tmp17Result) {
    const obj13 = { channelId };
    tmp17Result = tmp17(tmp4(20110).HideNonVideoParticipants, obj13);
  }
  items2[2] = tmp17Result;
  items2[3] = hasOwnProperty(VoicePanelVoiceControlsButtons.HideSelfVideo, {});
  let tmp17Result3 = tmp3;
  if (tmp17Result3) {
    const obj14 = { channel, connected: tmp3 };
    tmp17Result3 = tmp17(tmp4(20110).InviteButton, obj14);
  }
  items2[4] = tmp17Result3;
  children[4] = metroRequire(TableRowGroup2, obj12);
  children[5] = hasOwnProperty(UserSettingsVoiceProcessing.VoiceProcessingOptions, {});
  const TableRowGroup3 = tmp4(7746).TableRowGroup;
  const items3 = [, ];
  const obj15 = { guildId: channel.guild_id };
  items3[0] = hasOwnProperty(VoicePanelVoiceControlsButtons.VoiceSettingsButton, obj15);
  let tmp17Result4 = null != tmp7;
  if (tmp17Result4) {
    const obj16 = { stream: tmp7 };
    tmp17Result4 = tmp17(tmp4(20110).ReportStreamIssueButton, obj16);
  }
  items3[1] = tmp17Result4;
  children[6] = metroRequire(TableRowGroup3, { hasIcons: true, children: items3 });
  let tmp9Result2 = null;
  if (tmp3) {
    tmp9Result2 = null;
    if (setting) {
      tmp9Result2 = null;
      if (embeddedActivityLaunchability === getEmbeddedActivityLaunchability.EmbeddedActivityLaunchability.CAN_LAUNCH) {
        const obj17 = { title: intl2.string(intl3.t.J6rqB7), hasIcons: true, children: items4 };
        const TableRowGroup4 = tmp4(7746).TableRowGroup;
        intl2 = tmp4(1113).intl;
        items4 = [hasOwnProperty(VoicePanelVoiceControlsButtons.LeaveActivitiesButton, {}), hasOwnProperty(VoicePanelVoiceControlsButtons.ShareActivityLogsButton, {}), hasOwnProperty(VoicePanelVoiceControlsButtons.ToggleShowActivitiesDebugOverlay, {})];
        tmp9Result2 = tmp9(TableRowGroup4, obj17);
      }
    }
  }
  children[7] = tmp9Result2;
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
  const obj2 = isVisible(gestureRef[22]);
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
  const tmp4Result = isVisible(gestureRef[23]);
  const animatedScrollLock = tmp4Result.useAnimatedScrollLock({ onScrollHandlerWorkletized: callback });
  gestureRef = animatedScrollLock.gestureRef;
  scrollerRef = animatedScrollLock.scrollerRef;
  ({ onScroll, animatedProps } = animatedScrollLock);
  const tmp4Result2 = isVisible(gestureRef[24]);
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
  const GestureDetector = tmp4(tmp3[25]).GestureDetector;
  const tmp15 = closure_7;
  tmp17 = closure_9;
  if (!isScreenReaderEnabled) {
    const obj6 = { style: tmp.blurRegion };
    tmp16Result = tmp16(tmp2(tmp3[27]), obj6);
  }
  items6 = [tmp16Result, , ];
  let tmp16Result3 = null != stateFromStores;
  if (tmp16Result3) {
    const obj7 = { channel: stateFromStores, openTab };
    tmp16Result3 = tmp16(closure_10, obj7);
  }
  items6[1] = tmp16Result3;
  items6[2] = closure_5(isVisible(gestureRef[28]).SafeAreaPaddingView, { bottom: true });
  const children = [closure_5(GestureDetector, obj4), ];
  let tmp16Result4 = !isScreenReaderEnabled;
  if (tmp16Result4) {
    const obj8 = { shown: sharedValue, style: tmp.blurRegion };
    tmp16Result4 = tmp16(tmp2(tmp3[29]), obj8);
  }
  children[1] = tmp16Result4;
  return closure_6(tmp15, { children });
});
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelVoiceControls.tsx");

export default memoResult;
