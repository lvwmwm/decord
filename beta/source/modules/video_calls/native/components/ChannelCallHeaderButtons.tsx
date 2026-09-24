// Module ID: 10327
// Function ID: 10328
// Name: ChannelCallHeaderButtons
// Dependencies: [19, 1996, 21, 558, 568, 504, 9921, 10200, 1119, 10328, 9670, 9671, 10329, 4991, 2]

// Module 10327 (ChannelCallHeaderButtons)
import initialize from "initialize" /* 504 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4991 */;
import useIsPrivateAudioOnlyCallDefault from "useIsPrivateAudioOnlyCall" /* 9670 */;
import useSelectedParticipantDefault from "useSelectedParticipant" /* 9671 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9921 */;
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon" /* 10200 */;
import _modDef10328 from "module_10328" /* 10328 */;
import noop from "module_19" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1996 */;

require = fn;
const jsx = fn(21).jsx;
fn(558);
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = videoDeviceId(568).c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function l() {
      return { isVideoEnabled: MediaEngineStore.isVideoEnabled(), videoDeviceId: MediaEngineStore.getVideoDeviceId(), videoDevices: MediaEngineStore.getVideoDevices() };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = videoDeviceId(568);
  const stateFromStoresObject = videoDeviceId(504).useStateFromStoresObject(tmp4, tmp5);
  ({ isVideoEnabled, videoDeviceId } = stateFromStoresObject);
  const videoDevices = stateFromStoresObject.videoDevices;
  if (cResult[2] === videoDeviceId) {
    if (cResult[3] === videoDevices) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] === tmp8) {
      if (cResult[6] === isVideoEnabled) {
        let tmp9 = cResult[7];
      }
      return tmp9;
    }
    let tmp10 = null;
    if (isVideoEnabled) {
      const obj2 = { accessibilityLabel: null, source: null, onPress: null, disableBackground: true };
      const intl = tmp(1119).intl;
      obj2.accessibilityLabel = intl.string(tmp(1119).t["t9eQ/g"]);
      obj2.source = videoDevices(10328);
      obj2.onPress = tmp8;
      tmp10 = jsx(videoDevices(10200), { accessibilityLabel: null, source: null, onPress: null, disableBackground: true });
      const tmp13 = videoDevices(10200);
    }
    cResult[5] = tmp8;
    cResult[6] = isVideoEnabled;
    cResult[7] = tmp10;
    tmp9 = tmp10;
  }
  const fn2 = function o() {
    const keys = Object.keys(videoDevices);
    const found = keys.find((item) => item !== videoDeviceId);
    if (null != found) {
      AudioActionCreatorsDefault.setVideoDevice(found);
    }
  };
  cResult[2] = videoDeviceId;
  cResult[3] = videoDevices;
  cResult[4] = fn2;
  tmp8 = fn2;
}) : (() => {
  const items = [MediaEngineStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => ({ isVideoEnabled: MediaEngineStore.isVideoEnabled(), videoDeviceId: MediaEngineStore.getVideoDeviceId(), videoDevices: MediaEngineStore.getVideoDevices() }));
  ({ videoDeviceId: require, videoDevices: importDefault } = stateFromStoresObject);
  let tmp4 = null;
  if (stateFromStoresObject.isVideoEnabled) {
    const obj2 = { accessibilityLabel: null, source: null, onPress: null, disableBackground: true };
    const intl = tmp(1119).intl;
    obj2.accessibilityLabel = intl.string(tmp(1119).t["t9eQ/g"]);
    obj2.source = _modDef10328;
    obj2.onPress = function onPress() {
      const keys = Object.keys(closure_1_1);
      const found = keys.find((item) => item !== closure_1_0);
      if (null != found) {
        AudioActionCreatorsDefault.setVideoDevice(found);
      }
    };
    tmp4 = jsx(ChannelCallNavigatorIconDefault, { accessibilityLabel: null, source: null, onPress: null, disableBackground: true });
  }
  return tmp4;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallHeaderButtons.tsx");

export const CameraButton = tmp3;
export const GridButton = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(568).c(4);
  channel = channel.channel;
  const tmp5 = useIsPrivateAudioOnlyCallDefault(channel);
  const tmp6 = useSelectedParticipantDefault(channel);
  if (cResult[0] === channel) {
    if (cResult[1] === tmp5) {
      if (cResult[2] === tmp6) {
        let tmp7 = cResult[3];
      }
      return tmp7;
    }
  }
  let tmp8 = null;
  if (null != tmp6) {
    tmp8 = null;
    if (!tmp5) {
      const obj2 = { accessibilityLabel: null, source: null, onPress: null, disableBackground: true };
      const intl = tmp(1119).intl;
      obj2.accessibilityLabel = intl.string(tmp(1119).t.HK4JIu);
      obj2.source = tmp4(10329);
      obj2.onPress = function onPress() {
        return ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
      };
      tmp8 = jsx(tmp4(10200), { accessibilityLabel: null, source: null, onPress: null, disableBackground: true });
      const tmp4Result = tmp4(10200);
    }
  }
  cResult[0] = channel;
  cResult[1] = tmp5;
  cResult[2] = tmp6;
  cResult[3] = tmp8;
  tmp7 = tmp8;
}) : ((channel) => {
  channel = channel.channel;
  let tmp4 = null;
  if (null != useSelectedParticipantDefault(channel)) {
    tmp4 = null;
    if (!tmp3) {
      const obj = { accessibilityLabel: null, source: null, onPress: null, disableBackground: true };
      const intl = channel(1119).intl;
      obj.accessibilityLabel = intl.string(channel(1119).t.HK4JIu);
      obj.source = tmp(10329);
      obj.onPress = function onPress() {
        return ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
      };
      tmp4 = jsx(tmp(10200), { accessibilityLabel: null, source: null, onPress: null, disableBackground: true });
      const tmpResult = tmp(10200);
    }
  }
  return tmp4;
});
