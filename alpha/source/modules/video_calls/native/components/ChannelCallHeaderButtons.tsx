// Module ID: 11978
// Function ID: 11979
// Name: ChannelCallHeaderButtons
// Dependencies: [19, 2007, 21, 504, 11857, 1114, 11979, 5896, 10983, 10984, 11980, 5754, 2]
// Exports: CameraButton, GridButton

// Module 11978 (ChannelCallHeaderButtons)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1114 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5754 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5896 */;
import useIsPrivateAudioOnlyCallDefault from "useIsPrivateAudioOnlyCall" /* 10983 */;
import useSelectedParticipantDefault from "useSelectedParticipant" /* 10984 */;
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon" /* 11857 */;
import AssetRegistryDefault from "AssetRegistry" /* 11979 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11980 */;
import react from "react" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 2007 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallHeaderButtons.tsx");

export function CameraButton() {
  let obj = get_initialized;
  const items = [MediaEngineStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { isVideoEnabled: MediaEngineStore.isVideoEnabled(), videoDeviceId: MediaEngineStore.getVideoDeviceId(), videoDevices: MediaEngineStore.getVideoDevices() };
    return obj;
  });
  ({ videoDeviceId: require, videoDevices: importDefault } = stateFromStoresObject);
  let tmp4 = null;
  if (stateFromStoresObject.isVideoEnabled) {
    ChannelCallNavigatorIconDefault;
    const intl = tmp(1114).intl;
    tmp4 = <tmp7 accessibilityLabel={intl.string(intl2.t["t9eQ/g"])} source={AssetRegistryDefault} onPress={function handleCamera() {
      const keys = Object.keys(importDefault);
      const found = keys.find((item) => item !== closure_1_0);
      if (null != found) {
        const obj = AudioActionCreatorsDefault;
        obj.setVideoDevice(found);
      }
    }} disableBackground />;
  }
  return tmp4;
}
export function GridButton(channel) {
  channel = channel.channel;
  let tmp4 = null;
  const tmp3 = useIsPrivateAudioOnlyCallDefault(channel);
  if (null != useSelectedParticipantDefault(channel)) {
    tmp4 = null;
    if (!tmp3) {
      ChannelCallNavigatorIconDefault;
      const intl = channel(1114).intl;
      tmp4 = <tmpResult accessibilityLabel={intl.string(channel(1114).t.HK4JIu)} source={AssetRegistryDefault2} onPress={function onPress() {
        const obj = ChannelRTCActionCreatorsDefault;
        return obj.selectParticipant(channel.id, null);
      }} disableBackground />;
    }
  }
  return tmp4;
}
