// Module ID: 10763
// Function ID: 83519
// Name: CameraButton
// Dependencies: [31, 4178, 33, 566, 10659, 1212, 10764, 8770, 10175, 10176, 10765, 4324, 2]
// Exports: CameraButton, GridButton

// Module 10763 (CameraButton)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/video_calls/native/components/ChannelCallHeaderButtons.tsx");

export const CameraButton = function CameraButton() {
  let importDefault;
  let require;
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isVideoEnabled: outer1_3.isVideoEnabled(), videoDeviceId: outer1_3.getVideoDeviceId(), videoDevices: outer1_3.getVideoDevices() }));
  ({ videoDeviceId: require, videoDevices: importDefault } = stateFromStoresObject);
  let tmp2 = null;
  if (stateFromStoresObject.isVideoEnabled) {
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t["t9eQ/g"]);
    obj.source = importDefault(10764);
    obj.onPress = function onPress() {
      const keys = Object.keys(closure_1);
      const found = keys.find((arg0) => arg0 !== outer1_0);
      if (null != found) {
        outer1_1(outer1_2[7]).setVideoDevice(found);
        const obj = outer1_1(outer1_2[7]);
      }
    };
    obj.disableBackground = true;
    tmp2 = jsx(importDefault(10659), {});
    const tmp6 = importDefault(10659);
  }
  return tmp2;
};
export const GridButton = function GridButton(channel) {
  channel = channel.channel;
  let tmp2 = null;
  if (null != importDefault(10176)(channel)) {
    tmp2 = null;
    if (!tmp) {
      const obj = {};
      const intl = channel(1212).intl;
      obj.accessibilityLabel = intl.string(channel(1212).t.HK4JIu);
      obj.source = importDefault(10765);
      obj.onPress = function onPress() {
        return outer1_1(outer1_2[11]).selectParticipant(channel.id, null);
      };
      obj.disableBackground = true;
      tmp2 = jsx(importDefault(10659), {});
      const tmp6 = importDefault(10659);
    }
  }
  return tmp2;
};
