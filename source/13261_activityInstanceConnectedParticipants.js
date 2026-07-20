// Module ID: 13261
// Function ID: 100772
// Name: activityInstanceConnectedParticipants
// Dependencies: []

// Module 13261 (activityInstanceConnectedParticipants)
function activityInstanceConnectedParticipants() {
  const currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
  if (null == currentEmbeddedActivity) {
    let obj = { participants: [] };
    return obj;
  } else {
    const callback = callback(dependencyMap[3]).getEmbeddedActivityLocationGuildId(currentEmbeddedActivity.location);
    const obj2 = callback(dependencyMap[3]);
    const embeddedActivityLocationChannelId = callback(dependencyMap[3]).getEmbeddedActivityLocationChannelId(currentEmbeddedActivity.location);
    obj = {};
    const _Array = Array;
    const obj3 = callback(dependencyMap[3]);
    obj.participants = Array.from(currentEmbeddedActivity.userIds, (arg0) => {
      const user = user.getUser(arg0);
      if (null != user) {
        let tmp4;
        let obj = callback(closure_2[4]);
        const nickname = obj.getNickname(callback, callback2, user);
        obj = {};
        const merged = Object.assign(callback2(closure_2[5])(user));
        if (null != nickname) {
          tmp4 = nickname;
        }
        obj["nickname"] = tmp4;
        return obj;
      }
    }).filter(callback(dependencyMap[6]).isNotNullish);
    return obj;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
let obj = { [tmp2.RPC_SCOPE_CONFIG.ANY]: items };
const items = [tmp2.RPC_AUTHENTICATED_SCOPE];
obj = {
  scope: obj,
  handler() {
    return (arg0) => {
      let dispatch;
      let prevState;
      ({ prevState, dispatch } = arg0);
      const tmp = callback2();
      if (!obj.isEqual(tmp, prevState)) {
        dispatch(tmp);
      }
      return tmp;
    };
  }
};
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/rpc/helpers/activityInstanceConnectedParticipants.tsx");

export { activityInstanceConnectedParticipants };
export const activityInstanceConnectedParticipantsScope = obj;
export const activityInstanceConnectedParticipantsUpdateEvent = obj;
