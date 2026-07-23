// Module ID: 15884
// Function ID: 122694
// Name: NOOP
// Dependencies: [31, 27, 1348, 10013, 33, 4130, 689, 3991, 10014, 15719, 10836, 3803, 15783, 10712, 12722, 4541, 5503, 15885, 1212, 10722, 566, 11222, 4528, 5217, 1553, 5517, 5121, 11380, 2]

// Module 15884 (NOOP)
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { CONTROLS_DRAWER_HEADER_EXPANDED_SIZE } from "VoicePanelControlsModes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function NOOP() {

}
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = jsxProd);
let obj = {};
obj = { flex: 1, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.scrollView = obj;
_createForOfIteratorHelperLoose = { flex: 1, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, marginTop: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
obj.scrollViewScreenReader = _createForOfIteratorHelperLoose;
obj.blurRegion = { height: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_9 = require("module_3991").createAnimatedComponent(require("StyleSheet").ScrollView);
let closure_10 = importAllResult.memo((arg0) => {
  let channel;
  let openTab;
  ({ channel, openTab } = arg0);
  const channelId = importAllResult.useContext(importDefault(10014)).channelId;
  const tmp = importDefault(15719)(channelId);
  let obj = require(10836) /* getEmbeddedActivityLaunchability */;
  const embeddedActivityLaunchability = obj.useEmbeddedActivityLaunchability(channelId);
  const DeveloperMode = require(3803) /* explicitContentFromProto */.DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj1 = importDefault(15783);
  const treatment = obj1.useConfig({ location: "VoicePanelVoiceControls" }).treatment;
  let obj2 = importDefault(10712);
  let nonContextualStreamOutputPresent = obj2.useConfig({ location: "VoicePanelVoiceControls" }).nonContextualStreamOutputPresent;
  const tmp4 = importDefault(12722)(channel);
  obj = { spacing: 24 };
  if (!tmp) {
    const items = [tmp, , , , , , ];
    obj = { channel, connected: tmp };
    items[1] = callback(require(15885) /* GameConsoleAccountButton */.GameConsoles, obj);
    if (nonContextualStreamOutputPresent) {
      nonContextualStreamOutputPresent = callback(require(15885) /* GameConsoleAccountButton */.StreamVolumeItem, {});
    }
    items[2] = nonContextualStreamOutputPresent;
    obj1 = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj1.title = intl.string(require(1212) /* getSystemLocale */.t.NiTd0e);
    obj1.hasIcons = true;
    const items1 = [callback(require(15885) /* GameConsoleAccountButton */.DeafenSwitch, {}), , , , ];
    obj2 = { channel, connected: tmp };
    items1[1] = callback(require(15885) /* GameConsoleAccountButton */.AudioRouteButton, obj2);
    const obj3 = { channelId };
    items1[2] = callback(require(15885) /* GameConsoleAccountButton */.HideNonVideoParticipants, obj3);
    items1[3] = callback(require(15885) /* GameConsoleAccountButton */.HideSelfVideo, {});
    let tmp34 = tmp;
    if (tmp) {
      const obj4 = { channel, connected: tmp };
      tmp34 = callback(require(15885) /* GameConsoleAccountButton */.InviteButton, obj4);
    }
    items1[4] = tmp34;
    obj1.children = items1;
    items[3] = callback2(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj1);
    items[4] = callback(require(10722) /* VoiceProcessingOptions */.VoiceProcessingOptions, {});
    const obj5 = { hasIcons: true };
    const obj6 = { guildId: channel.guild_id };
    const items2 = [callback(require(15885) /* GameConsoleAccountButton */.VoiceSettingsButton, obj6), ];
    let tmp43 = null != tmp4;
    if (tmp43) {
      const obj7 = { stream: tmp4 };
      tmp43 = callback(require(15885) /* GameConsoleAccountButton */.ReportStreamIssueButton, obj7);
    }
    items2[1] = tmp43;
    obj5.children = items2;
    items[5] = callback2(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj5);
    let tmp47 = null;
    if (tmp) {
      tmp47 = null;
      if (setting) {
        tmp47 = null;
        if (embeddedActivityLaunchability === require(10836) /* getEmbeddedActivityLaunchability */.EmbeddedActivityLaunchability.CAN_LAUNCH) {
          const obj8 = {};
          const intl2 = require(1212) /* getSystemLocale */.intl;
          obj8.title = intl2.string(require(1212) /* getSystemLocale */.t.J6rqB7);
          obj8.hasIcons = true;
          const items3 = [callback(require(15885) /* GameConsoleAccountButton */.LeaveActivitiesButton, {}), callback(require(15885) /* GameConsoleAccountButton */.ShareActivityLogsButton, {}), callback(require(15885) /* GameConsoleAccountButton */.ToggleShowActivitiesDebugOverlay, {})];
          obj8.children = items3;
          tmp47 = callback2(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj8);
        }
      }
    }
    items[6] = tmp47;
    obj.children = items;
    return callback2(tmp6, obj);
  } else {
    const obj9 = { hasIcons: true };
    const obj10 = { openTab };
    const items4 = [callback(require(15885) /* GameConsoleAccountButton */.ActivitiesButton, obj10), ];
    if (require(15783) /* apexExperiment */.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT === treatment) {
      const obj11 = { openTab };
      let tmp16 = callback(require(15885) /* GameConsoleAccountButton */.ChatButton, obj11);
      items4[1] = tmp16;
      obj9.children = items4;
      tmp7(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj9);
    } else if (require(15783) /* apexExperiment */.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD !== treatment) {
      const obj12 = { channel };
      tmp16 = callback(require(15885) /* GameConsoleAccountButton */.ScreenshareButton, obj12);
    }
    const obj13 = { channel };
    tmp16 = callback(require(15885) /* GameConsoleAccountButton */.SoundboardButton, obj13);
    tmp7 = callback2;
  }
});
let closure_11 = { top: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
let closure_12 = { code: "function VoicePanelVoiceControlsTsx1({offset:offset}){const{isScrolled}=this.__closure;isScrolled.set(offset>0);}" };
const memoResult = importAllResult.memo(function VoicePanelVoiceControls(isVisible) {
  let animatedProps;
  let onScroll;
  isVisible = isVisible.isVisible;
  let tmp = callback3();
  channelId = gestureRef.useContext(channelId(sharedValue[8])).channelId;
  let obj = isVisible(sharedValue[20]);
  const items = [scrollerRef];
  const stateFromStores = obj.useStateFromStores(items, () => scrollerRef.getChannel(channelId));
  let obj1 = isVisible(sharedValue[7]);
  sharedValue = obj1.useSharedValue(false);
  const fn = function s(offset) {
    const result = sharedValue.set(offset.offset > 0);
  };
  fn.__closure = { isScrolled: sharedValue };
  fn.__workletHash = 16758626276795;
  fn.__initData = closure_12;
  const items1 = [sharedValue];
  const callback = gestureRef.useCallback(fn, items1);
  const tmp5 = gestureRef.useContext(isVisible(sharedValue[21]).ControlsGestureScrollLock)({ onScrollHandlerWorkletized: callback });
  gestureRef = tmp5.gestureRef;
  scrollerRef = tmp5.scrollerRef;
  ({ onScroll, animatedProps } = tmp5);
  let obj2 = isVisible(sharedValue[22]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  const items2 = [isVisible, scrollerRef];
  const effect = gestureRef.useEffect(() => {
    let tmp = isVisible;
    if (isVisible) {
      tmp = null != scrollerRef;
    }
    if (tmp) {
      const current = scrollerRef.current;
      if (null != current) {
        current.scrollTo({ x: 0, y: 0, animated: false });
      }
    }
  }, items2);
  const items3 = [gestureRef];
  obj = {};
  const memo = gestureRef.useMemo(() => {
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
    tmp13 = callback(channelId(sharedValue[25]), obj2);
  }
  const items4 = [tmp13, , ];
  let tmp17 = null != stateFromStores;
  if (tmp17) {
    const obj3 = { channel: stateFromStores, openTab: isVisible.openTab };
    tmp17 = callback(closure_10, obj3);
  }
  items4[1] = tmp17;
  items4[2] = callback(isVisible(sharedValue[26]).SafeAreaPaddingView, { bottom: true });
  obj1.children = items4;
  obj.children = closure_6(closure_9, obj1);
  const items5 = [callback(isVisible(sharedValue[23]).GestureDetector, obj), ];
  let tmp20 = !isScreenReaderEnabled;
  if (tmp20) {
    const obj4 = { shown: sharedValue, style: tmp.blurRegion };
    tmp20 = callback(channelId(sharedValue[27]), obj4);
  }
  items5[1] = tmp20;
  obj.children = items5;
  return closure_6(closure_7, obj);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelVoiceControls.tsx");

export default memoResult;
