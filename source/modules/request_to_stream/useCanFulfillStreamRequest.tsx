// Module ID: 10908
// Function ID: 84771
// Name: canFulfillStreamRequest
// Dependencies: []
// Exports: default

// Module 10908 (canFulfillStreamRequest)
function canFulfillStreamRequest(channel_id, arg1) {
  let flag = arg1;
  let obj = arg2;
  let obj2 = arg3;
  let obj3 = arg4;
  let obj4 = arg6;
  if (arg1 === undefined) {
    flag = false;
  }
  arg1 = flag;
  if (obj === undefined) {
    obj = closure_3;
  }
  if (obj2 === undefined) {
    obj2 = closure_5;
  }
  if (obj3 === undefined) {
    obj3 = closure_8;
  }
  if (obj4 === undefined) {
    obj4 = closure_9;
  }
  let dependencyMap;
  let DESKTOP;
  const channel = obj2.getChannel(channel_id.channel_id);
  if (null == channel) {
    const items = [false, obj.NOT_IN_VOICE_CHANNEL];
    return items;
  } else {
    const channelId = obj4.getChannelId();
    const tmp18 = null != obj.getCurrentUserActiveStream();
    const application = channel_id.application;
    let id;
    const videoPermission = arg1(dependencyMap[9]).getVideoPermission(channel);
    if (null != application) {
      id = application.id;
    }
    dependencyMap = id;
    DESKTOP = constants.DESKTOP;
    const obj6 = arg1(dependencyMap[9]);
    DESKTOP = arg1(dependencyMap[10]).isAndroid() ? tmp6.ANDROID : tmp6.IOS;
    if (null == id) {
      const items1 = [false, obj.NOT_RUNNING_GAME];
      return items1;
    } else {
      const activities = obj3.getActivities(id.getId(), channel.guild_id);
      if (tmp18) {
        const items2 = [false, obj.ALREADY_STREAMING];
        let items4 = items2;
      } else if (channelId === channel_id.channel_id) {
        const items3 = [, ];
        if (!videoPermission) {
          items3[0] = false;
          items3[1] = obj.NO_PERMISSION;
        }
        if (tmp24) {
          items3[0] = true;
          items3[1] = null;
          let tmp11 = items3;
        } else {
          items3[0] = false;
          items3[1] = obj.NOT_RUNNING_GAME;
          tmp11 = items3;
        }
      } else {
        items4 = [false, obj.NOT_IN_VOICE_CHANNEL];
      }
      return items4;
    }
    const obj5 = arg1(dependencyMap[10]);
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
({ ActivityGamePlatforms: closure_10, ActivityTypes: closure_11 } = arg1(dependencyMap[8]));
const obj = { NOT_IN_VOICE_CHANNEL: "NOT_IN_VOICE_CHANNEL", NOT_RUNNING_GAME: "NOT_RUNNING_GAME", ALREADY_STREAMING: "ALREADY_STREAMING", NO_PERMISSION: "NO_PERMISSION", PENDING_REQUEST: "PENDING_REQUEST", EXPIRED: "EXPIRED" };
const tmp2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/request_to_stream/useCanFulfillStreamRequest.tsx");

export default function useCanFulfillStreamRequest(arg0) {
  let flag = arg1;
  const arg1 = arg0;
  if (arg1 === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  const items = [closure_3, closure_5, closure_8, closure_2, closure_9, closure_6, closure_7];
  return arg1(dependencyMap[11]).useStateFromStores(items, () => callback(arg0, flag, closure_3, closure_5, closure_8, closure_2, closure_9, closure_6, closure_7));
};
export const StreamRequestUnfulfillableReason = obj;
export { canFulfillStreamRequest };
