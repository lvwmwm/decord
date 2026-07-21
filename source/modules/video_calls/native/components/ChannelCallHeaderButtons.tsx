// Module ID: 10751
// Function ID: 83512
// Name: CameraButton
// Dependencies: []
// Exports: CameraButton, GridButton

// Module 10751 (CameraButton)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/video_calls/native/components/ChannelCallHeaderButtons.tsx");

export const CameraButton = function CameraButton() {
  let obj = arg1(dependencyMap[3]);
  const items = [closure_3];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isVideoEnabled: store.isVideoEnabled(), videoDeviceId: store.getVideoDeviceId(), videoDevices: store.getVideoDevices() }));
  ({ videoDeviceId: closure_0, videoDevices: closure_1 } = stateFromStoresObject);
  let tmp2 = null;
  if (stateFromStoresObject.isVideoEnabled) {
    obj = {};
    const intl = arg1(dependencyMap[5]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[5]).t.t9eQ/g);
    obj.source = importDefault(dependencyMap[6]);
    obj.onPress = function onPress() {
      const keys = Object.keys(callback);
      const found = keys.find((arg0) => arg0 !== closure_0);
      if (null != found) {
        callback(closure_2[7]).setVideoDevice(found);
        const obj = callback(closure_2[7]);
      }
    };
    obj.disableBackground = true;
    tmp2 = jsx(importDefault(dependencyMap[4]), obj);
    const tmp6 = importDefault(dependencyMap[4]);
  }
  return tmp2;
};
export const GridButton = function GridButton(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let tmp2 = null;
  if (null != importDefault(dependencyMap[9])(channel)) {
    tmp2 = null;
    if (!tmp) {
      const obj = {};
      const intl = arg1(dependencyMap[5]).intl;
      obj.accessibilityLabel = intl.string(arg1(dependencyMap[5]).t.HK4JIu);
      obj.source = importDefault(dependencyMap[10]);
      obj.onPress = function onPress() {
        return callback(closure_2[11]).selectParticipant(channel.id, null);
      };
      obj.disableBackground = true;
      tmp2 = jsx(importDefault(dependencyMap[4]), obj);
      const tmp6 = importDefault(dependencyMap[4]);
    }
  }
  return tmp2;
};
