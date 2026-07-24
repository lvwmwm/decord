// Module ID: 9095
// Function ID: 71319
// Name: isVideoMode
// Dependencies: [4149, 1348, 4177, 1906, 4146, 566, 2]
// Exports: default

// Module 9095 (isVideoMode)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";

const require = arg1;
function isVideoMode(outer1_9, outer1_11, outer1_8, outer1_12, outer1_10) {
  let obj = outer1_9;
  let obj2 = outer1_11;
  let obj3 = outer1_8;
  let obj4 = outer1_12;
  let obj5 = outer1_10;
  if (outer1_9 === undefined) {
    obj = closure_3;
  }
  if (obj2 === undefined) {
    obj2 = closure_5;
  }
  if (obj3 === undefined) {
    obj3 = _isNativeReflectConstruct;
  }
  if (obj4 === undefined) {
    obj4 = closure_6;
  }
  if (obj5 === undefined) {
    obj5 = closure_4;
  }
  const channel = obj.getChannel(obj2.getVoiceChannelId());
  let tmp2 = null != channel;
  if (tmp2) {
    tmp2 = obj3.getAllActiveStreams().length > 0 || obj4.hasVideo(channel.id) || obj5.isVideoEnabled();
    const tmp3 = obj3.getAllActiveStreams().length > 0 || obj4.hasVideo(channel.id) || obj5.isVideoEnabled();
  }
  return tmp2;
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/video_calls/native/useIsVideoMode.tsx");

export default function useIsVideoMode() {
  const items = [closure_3, closure_5, closure_4, closure_6, _isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_7(outer1_3, outer1_5, outer1_2, outer1_6, outer1_4));
};
export { isVideoMode };
