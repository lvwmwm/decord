// Module ID: 10330
// Function ID: 10331
// Name: ChannelCallHeaderButtons
// Dependencies: [19, 1992, 21, 504, 10221, 1115, 10331, 9943, 9674, 9675, 10332, 4989, 2]
// Exports: CameraButton, GridButton

// Module 10330 (ChannelCallHeaderButtons)
import initialize from "initialize" /* 504 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4989 */;
import useSelectedParticipantDefault from "useSelectedParticipant" /* 9675 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9943 */;
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon" /* 10221 */;
import _modDef10331 from "module_10331" /* 10331 */;
import noop from "module_19" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallHeaderButtons.tsx");

export const CameraButton = function CameraButton() {
  const items = [MediaEngineStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => ({ isVideoEnabled: MediaEngineStore.isVideoEnabled(), videoDeviceId: MediaEngineStore.getVideoDeviceId(), videoDevices: MediaEngineStore.getVideoDevices() }));
  ({ videoDeviceId: require, videoDevices: importDefault } = stateFromStoresObject);
  let tmp4 = null;
  if (stateFromStoresObject.isVideoEnabled) {
    const obj2 = { accessibilityLabel: null, source: null, onPress: null, disableBackground: true };
    const intl = tmp(1115).intl;
    obj2.accessibilityLabel = intl.string(tmp(1115).t["t9eQ/g"]);
    obj2.source = _modDef10331;
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
};
export const GridButton = function GridButton(channel) {
  channel = channel.channel;
  let tmp4 = null;
  if (null != useSelectedParticipantDefault(channel)) {
    tmp4 = null;
    if (!tmp3) {
      const obj = { accessibilityLabel: null, source: null, onPress: null, disableBackground: true };
      const intl = channel(1115).intl;
      obj.accessibilityLabel = intl.string(channel(1115).t.HK4JIu);
      obj.source = tmp(10332);
      obj.onPress = function onPress() {
        return ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
      };
      tmp4 = jsx(tmp(10221), { accessibilityLabel: null, source: null, onPress: null, disableBackground: true });
      const tmpResult = tmp(10221);
    }
  }
  return tmp4;
};
