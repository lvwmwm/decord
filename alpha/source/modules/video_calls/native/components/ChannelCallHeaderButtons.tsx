// Module ID: 9483
// Function ID: 9484
// Name: ChannelCallHeaderButtons
// Dependencies: [19, 1992, 21, 504, 9370, 1115, 9484, 9093, 8823, 8824, 9485, 5030, 2]
// Exports: CameraButton, GridButton

// Module 9483 (ChannelCallHeaderButtons)
import initialize from "initialize" /* 504 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5030 */;
import useSelectedParticipantDefault from "useSelectedParticipant" /* 8824 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9093 */;
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon" /* 9370 */;
import _modDef9484 from "module_9484" /* 9484 */;
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
    obj2.source = _modDef9484;
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
      obj.source = tmp(9485);
      obj.onPress = function onPress() {
        return ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
      };
      tmp4 = jsx(tmp(9370), { accessibilityLabel: null, source: null, onPress: null, disableBackground: true });
      const tmpResult = tmp(9370);
    }
  }
  return tmp4;
};
