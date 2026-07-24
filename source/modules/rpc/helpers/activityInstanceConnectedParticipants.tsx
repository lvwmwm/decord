// Module ID: 13444
// Function ID: 103333
// Name: activityInstanceConnectedParticipants
// Dependencies: [1347, 1849, 4033, 3748, 4319, 10531, 1327, 22, 2]

// Module 13444 (activityInstanceConnectedParticipants)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG";

const require = arg1;
function activityInstanceConnectedParticipants() {
  currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
  if (null == currentEmbeddedActivity) {
    let obj = { participants: [] };
    return obj;
  } else {
    _require = _require(3748).getEmbeddedActivityLocationGuildId(currentEmbeddedActivity.location);
    const obj2 = _require(3748);
    const embeddedActivityLocationChannelId = _require(3748).getEmbeddedActivityLocationChannelId(currentEmbeddedActivity.location);
    obj = {};
    const _Array = Array;
    const obj3 = _require(3748);
    obj.participants = Array.from(currentEmbeddedActivity.userIds, (arg0) => {
      const user = outer1_4.getUser(arg0);
      if (null != user) {
        let tmp4;
        let obj = callback(outer1_2[4]);
        const nickname = obj.getNickname(callback, callback2, user);
        obj = {};
        const merged = Object.assign(callback2(outer1_2[5])(user));
        if (null != nickname) {
          tmp4 = nickname;
        }
        obj["nickname"] = tmp4;
        return obj;
      }
    }).filter(_require(1327).isNotNullish);
    return obj;
  }
}
let obj = { [RPC_SCOPE_CONFIG.RPC_SCOPE_CONFIG.ANY]: items };
items = [RPC_SCOPE_CONFIG.RPC_AUTHENTICATED_SCOPE];
obj = {
  scope: obj,
  handler() {
    return (arg0) => {
      let dispatch;
      let prevState;
      ({ prevState, dispatch } = arg0);
      const tmp = outer1_5();
      if (!obj.isEqual(tmp, prevState)) {
        dispatch(tmp);
      }
      return tmp;
    };
  }
};
const result = require("RPC_SCOPE_CONFIG").fileFinishedImporting("modules/rpc/helpers/activityInstanceConnectedParticipants.tsx");

export { activityInstanceConnectedParticipants };
export const activityInstanceConnectedParticipantsScope = obj;
export const activityInstanceConnectedParticipantsUpdateEvent = obj;
