// Module ID: 15767
// Function ID: 120521
// Name: NOOP
// Dependencies: []

// Module 15767 (NOOP)
function NOOP() {

}
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[2]);
const CONTROLS_DRAWER_HEADER_EXPANDED_SIZE = arg1(dependencyMap[3]).CONTROLS_DRAWER_HEADER_EXPANDED_SIZE;
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = {};
obj = { flex: 1, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
obj.scrollView = obj;
obj1 = { flex: 1, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, marginTop: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
obj.scrollViewScreenReader = obj1;
obj.blurRegion = { height: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
let closure_8 = obj1.createStyles(obj);
const tmp2 = arg1(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[7]).createAnimatedComponent(arg1(dependencyMap[1]).ScrollView);
let closure_10 = importAllResult.memo((arg0) => {
  let channel;
  let openTab;
  ({ channel, openTab } = arg0);
  const channelId = importAllResult.useContext(importDefault(dependencyMap[8])).channelId;
  const tmp = importDefault(dependencyMap[9])(channelId);
  let obj = arg1(dependencyMap[10]);
  const embeddedActivityLaunchability = obj.useEmbeddedActivityLaunchability(channelId);
  const DeveloperMode = arg1(dependencyMap[11]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj1 = importDefault(dependencyMap[12]);
  const treatment = obj1.useConfig({ location: "VoicePanelVoiceControls" }).treatment;
  let obj2 = importDefault(dependencyMap[13]);
  let nonContextualStreamOutputPresent = obj2.useConfig({ location: "VoicePanelVoiceControls" }).nonContextualStreamOutputPresent;
  const tmp4 = importDefault(dependencyMap[14])(channel);
  obj = { spacing: 24 };
  if (!tmp) {
    const items = [tmp, , , , , , ];
    obj = { channel, connected: tmp };
    items[1] = callback(arg1(dependencyMap[17]).GameConsoles, obj);
    if (nonContextualStreamOutputPresent) {
      nonContextualStreamOutputPresent = callback(arg1(dependencyMap[17]).StreamVolumeItem, {});
    }
    items[2] = nonContextualStreamOutputPresent;
    obj1 = {};
    const intl = arg1(dependencyMap[18]).intl;
    obj1.title = intl.string(arg1(dependencyMap[18]).t.NiTd0e);
    obj1.hasIcons = true;
    const items1 = [callback(arg1(dependencyMap[17]).DeafenSwitch, {}), , , , ];
    obj2 = { channel, connected: tmp };
    items1[1] = callback(arg1(dependencyMap[17]).AudioRouteButton, obj2);
    const obj3 = { channelId };
    items1[2] = callback(arg1(dependencyMap[17]).HideNonVideoParticipants, obj3);
    items1[3] = callback(arg1(dependencyMap[17]).HideSelfVideo, {});
    let tmp34 = tmp;
    if (tmp) {
      const obj4 = { channel, connected: tmp };
      tmp34 = callback(arg1(dependencyMap[17]).InviteButton, obj4);
    }
    items1[4] = tmp34;
    obj1.children = items1;
    items[3] = callback2(arg1(dependencyMap[16]).TableRowGroup, obj1);
    items[4] = callback(arg1(dependencyMap[19]).VoiceProcessingOptions, {});
    const obj5 = { hasIcons: true };
    const obj6 = { guildId: channel.guild_id };
    const items2 = [callback(arg1(dependencyMap[17]).VoiceSettingsButton, obj6), ];
    let tmp43 = null != tmp4;
    if (tmp43) {
      const obj7 = { stream: tmp4 };
      tmp43 = callback(arg1(dependencyMap[17]).ReportStreamIssueButton, obj7);
    }
    items2[1] = tmp43;
    obj5.children = items2;
    items[5] = callback2(arg1(dependencyMap[16]).TableRowGroup, obj5);
    let tmp47 = null;
    if (tmp) {
      tmp47 = null;
      if (setting) {
        tmp47 = null;
        if (embeddedActivityLaunchability === arg1(dependencyMap[10]).EmbeddedActivityLaunchability.CAN_LAUNCH) {
          const obj8 = {};
          const intl2 = arg1(dependencyMap[18]).intl;
          obj8.title = intl2.string(arg1(dependencyMap[18]).t.J6rqB7);
          obj8.hasIcons = true;
          const items3 = [callback(arg1(dependencyMap[17]).LeaveActivitiesButton, {}), callback(arg1(dependencyMap[17]).ShareActivityLogsButton, {}), callback(arg1(dependencyMap[17]).ToggleShowActivitiesDebugOverlay, {})];
          obj8.children = items3;
          tmp47 = callback2(arg1(dependencyMap[16]).TableRowGroup, obj8);
        }
      }
    }
    items[6] = tmp47;
    obj.children = items;
    return callback2(tmp6, obj);
  } else {
    const obj9 = { hasIcons: true };
    const obj10 = { openTab };
    const items4 = [callback(arg1(dependencyMap[17]).ActivitiesButton, obj10), ];
    if (arg1(dependencyMap[12]).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT === treatment) {
      const obj11 = { openTab };
      let tmp16 = callback(arg1(dependencyMap[17]).ChatButton, obj11);
      items4[1] = tmp16;
      obj9.children = items4;
      tmp7(arg1(dependencyMap[16]).TableRowGroup, obj9);
    } else if (arg1(dependencyMap[12]).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD !== treatment) {
      const obj12 = { channel };
      tmp16 = callback(arg1(dependencyMap[17]).ScreenshareButton, obj12);
    }
    const obj13 = { channel };
    tmp16 = callback(arg1(dependencyMap[17]).SoundboardButton, obj13);
    const tmp7 = callback2;
  }
});
let closure_11 = { top: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
let closure_12 = { code: "function VoicePanelVoiceControlsTsx1({offset:offset}){const{isScrolled}=this.__closure;isScrolled.set(offset>0);}" };
const importDefaultResult = importDefault(dependencyMap[7]);
const memoResult = importAllResult.memo(function VoicePanelVoiceControls(isVisible) {
  let animatedProps;
  let onScroll;
  isVisible = isVisible.isVisible;
  const arg1 = isVisible;
  const tmp = callback3();
  const importDefault = importAllResult.useContext(importDefault(dependencyMap[8])).channelId;
  let obj = arg1(dependencyMap[20]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => scrollerRef.getChannel(channelId));
  let obj1 = arg1(dependencyMap[7]);
  const sharedValue = obj1.useSharedValue(false);
  const dependencyMap = sharedValue;
  const fn = function s(offset) {
    const result = sharedValue.set(offset.offset > 0);
  };
  fn.__closure = { isScrolled: sharedValue };
  fn.__workletHash = 16758626276795;
  fn.__initData = closure_12;
  const items1 = [sharedValue];
  const callback = importAllResult.useCallback(fn, items1);
  const tmp5 = importAllResult.useContext(arg1(dependencyMap[21]).ControlsGestureScrollLock)({ onScrollHandlerWorkletized: callback });
  const gestureRef = tmp5.gestureRef;
  const scrollerRef = tmp5.scrollerRef;
  closure_4 = scrollerRef;
  ({ onScroll, animatedProps } = tmp5);
  let obj2 = arg1(dependencyMap[22]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  const items2 = [isVisible, scrollerRef];
  const effect = importAllResult.useEffect(() => {
    let tmp = isVisible;
    if (isVisible) {
      tmp = null != scrollerRef;
    }
    if (tmp) {
      const current = scrollerRef.current;
      if (null != current) {
        current.scrollTo({});
      }
    }
  }, items2);
  const items3 = [gestureRef];
  obj = {};
  const memo = importAllResult.useMemo(() => {
    const Gesture = isVisible(sharedValue[23]).Gesture;
    const NativeResult = Gesture.Native();
    const enabledResult = NativeResult.enabled(!isVisible(sharedValue[24]).isMetaQuest());
    let result = enabledResult;
    if (null != gestureRef) {
      result = enabledResult.simultaneousWithExternalGesture(gestureRef);
    }
    return result;
  }, items3);
  obj = { gesture: memo };
  obj1 = { style: isScreenReaderEnabled ? tmp.scrollViewScreenReader : tmp.scrollView, ref: scrollerRef, onScroll, animatedProps, onMomentumScrollEnd: NOOP, scrollEventThrottle: 8.333333333333334, scrollIndicatorInsets: closure_11 };
  let tmp13 = !isScreenReaderEnabled;
  if (tmp13) {
    obj2 = { style: tmp.blurRegion };
    tmp13 = callback(importDefault(dependencyMap[25]), obj2);
  }
  const items4 = [tmp13, , ];
  let tmp17 = null != stateFromStores;
  if (tmp17) {
    const obj3 = { channel: stateFromStores, openTab: isVisible.openTab };
    tmp17 = callback(closure_10, obj3);
  }
  items4[1] = tmp17;
  items4[2] = callback(arg1(dependencyMap[26]).SafeAreaPaddingView, { bottom: true });
  obj1.children = items4;
  obj.children = closure_6(closure_9, obj1);
  const items5 = [callback(arg1(dependencyMap[23]).GestureDetector, obj), ];
  let tmp20 = !isScreenReaderEnabled;
  if (tmp20) {
    const obj4 = { shown: sharedValue, style: tmp.blurRegion };
    tmp20 = callback(importDefault(dependencyMap[27]), obj4);
  }
  items5[1] = tmp20;
  obj.children = items5;
  return closure_6(closure_7, obj);
});
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelVoiceControls.tsx");

export default memoResult;
