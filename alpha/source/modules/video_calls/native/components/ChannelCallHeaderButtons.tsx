// Module ID: 10297
// Function ID: 10298
// Name: ChannelCallHeaderButtons
// Dependencies: [19, 1992, 21, 504, 10188, 1115, 10298, 9917, 9648, 9649, 10299, 4958, 2]
// Exports: CameraButton, GridButton

// Module 10297 (ChannelCallHeaderButtons)
import initialize from "initialize" /* 504 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4958 */;
import useSelectedParticipantDefault from "useSelectedParticipant" /* 9649 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9917 */;
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon" /* 10188 */;
import _modDef10298 from "module_10298" /* 10298 */;
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
    obj2.source = _modDef10298;
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
      obj.source = tmp(10299);
      obj.onPress = function onPress() {
        return ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
      };
      tmp4 = jsx(tmp(10188), { accessibilityLabel: null, source: null, onPress: null, disableBackground: true });
      const tmpResult = tmp(10188);
    }
  }
  return tmp4;
};
