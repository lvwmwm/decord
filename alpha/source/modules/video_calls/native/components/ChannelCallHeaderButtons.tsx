// Module ID: 10552
// Function ID: 10553
// Name: ChannelCallHeaderButtons
// Dependencies: [19, 2132, 21, 504, 10330, 1112, 10553, 5996, 10011, 10012, 10554, 6129, 2]
// Exports: CameraButton, GridButton

// Module 10552 (ChannelCallHeaderButtons)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1112 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5996 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 6129 */;
import useIsPrivateAudioOnlyCallDefault from "useIsPrivateAudioOnlyCall" /* 10011 */;
import useSelectedParticipantDefault from "useSelectedParticipant" /* 10012 */;
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon" /* 10330 */;
import AssetRegistryDefault from "AssetRegistry" /* 10553 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10554 */;
import react from "react" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 2132 */;
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
    const intl = tmp(1112).intl;
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
      const intl = channel(1112).intl;
      tmp4 = <tmpResult accessibilityLabel={intl.string(channel(1112).t.HK4JIu)} source={AssetRegistryDefault2} onPress={function onPress() {
        const obj = ChannelRTCActionCreatorsDefault;
        return obj.selectParticipant(channel.id, null);
      }} disableBackground />;
    }
  }
  return tmp4;
}
