// Module ID: 9048
// Function ID: 71050
// Name: isVideoMode
// Dependencies: [0, 4294967295, 0, 0, 4294967295, 0, 0]
// Exports: default

// Module 9048 (isVideoMode)
import closure_2 from "result";
import closure_4 from "result";
import closure_5 from "result";
import result from "result";

function isVideoMode(closure_9, closure_11, closure_8, closure_12, closure_10) {
  let obj = closure_9;
  let obj2 = closure_11;
  let obj3 = closure_8;
  let obj4 = closure_12;
  let obj5 = closure_10;
  if (closure_9 === undefined) {
    obj = closure_3;
  }
  if (obj2 === undefined) {
    obj2 = closure_5;
  }
  if (obj3 === undefined) {
    obj3 = closure_2;
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
let closure_3 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[4]);
result = result.fileFinishedImporting("modules/video_calls/native/useIsVideoMode.tsx");

export default function useIsVideoMode() {
  const items = [closure_3, closure_5, closure_4, closure_6, closure_2];
  return arg1(dependencyMap[5]).useStateFromStores(items, () => callback(closure_3, closure_5, closure_2, closure_6, closure_4));
};
export { isVideoMode };
