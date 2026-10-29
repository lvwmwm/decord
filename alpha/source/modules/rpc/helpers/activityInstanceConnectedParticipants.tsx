// Module ID: 16214
// Function ID: 16215
// Name: activityInstanceConnectedParticipants
// Dependencies: [4856, 1389, 6437, 1084, 4926, 6029, 9298, 1385, 16215, 12, 2]
// Exports: activityInstanceConnectedParticipants

// Module 16214 (activityInstanceConnectedParticipants)
import Constants2 from "Constants" /* 1084 */;
import transformUserDefault from "transformUser" /* 9298 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4856 */;
import UserStore from "UserStore" /* 1389 */;
import Constants from "Constants" /* 6437 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 16215 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, user;

let RPC_AUTHENTICATED_SCOPE;
let RPC_SCOPE_CONFIG;
let items;
({ RPC_AUTHENTICATED_SCOPE, RPC_SCOPE_CONFIG } = Constants);
let obj = { [RPC_SCOPE_CONFIG.ANY]: items };
items = [RPC_AUTHENTICATED_SCOPE];
const RPCEvents = Constants2.RPCEvents;
let obj2 = {
  scope: obj,
  handler() {
    return (arg0) => {
      let arr;
      let closure_0;
      let closure_1;
      let dispatch;
      let obj2;
      let prevState;
      let embeddedActivityLocationGuildId;
      let embeddedActivityLocationChannelId;
      ({ prevState, dispatch } = arg0);
      currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
      if (null == currentEmbeddedActivity) {
        let obj = { participants: [] };
        obj2 = obj;
      } else {
        const obj4 = embeddedActivityLocationGuildId(closure_2[4]);
        embeddedActivityLocationGuildId = obj4.getEmbeddedActivityLocationGuildId(currentEmbeddedActivity.location);
        const obj5 = embeddedActivityLocationGuildId(closure_2[4]);
        embeddedActivityLocationChannelId = obj5.getEmbeddedActivityLocationChannelId(currentEmbeddedActivity.location);
        obj2 = { participants: arr.filter(embeddedActivityLocationGuildId(closure_2[7]).isNotNullish) };
        const _Array = Array;
        arr = Array.from(currentEmbeddedActivity.userIds, (arg0) => {
          user = user.getUser(arg0);
          if (null != user) {
            const obj = require("NicknameUtils");
            const nickname = obj.getNickname(closure_0, closure_1, user);
            const obj2 = { nickname };
            const merged = Object.assign(transformUserDefault(user));
            return obj2;
          }
        });
      }
      const obj3 = embeddedActivityLocationChannelId(closure_2[9]);
      if (!obj3.isEqual(obj2, prevState)) {
        dispatch(obj2);
      }
      return obj2;
    };
  }
};
const rPCEvent = CONTEXT_MENU_ICON_NAMES.createRPCEvent(RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, obj2);
const result = size.fileFinishedImporting("modules/rpc/helpers/activityInstanceConnectedParticipants.tsx");

export function activityInstanceConnectedParticipants() {
  let arr;
  let closure_0;
  let closure_1;
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  if (null == currentEmbeddedActivity) {
    return { participants: [] };
  } else {
    const obj2 = require("embeddedActivityLocationUtils");
    _require = obj2.getEmbeddedActivityLocationGuildId(currentEmbeddedActivity.location);
    const obj3 = require("embeddedActivityLocationUtils");
    const embeddedActivityLocationChannelId = obj3.getEmbeddedActivityLocationChannelId(currentEmbeddedActivity.location);
    const _Array = Array;
    const obj4 = { participants: arr.filter(require("GlobalUtils").isNotNullish) };
    arr = Array.from(currentEmbeddedActivity.userIds, (arg0) => {
      user = user.getUser(arg0);
      if (null != user) {
        const obj = require("NicknameUtils");
        const nickname = obj.getNickname(closure_0, closure_1, user);
        const obj2 = { nickname };
        const merged = Object.assign(transformUserDefault(user));
        return obj2;
      }
    });
    return obj4;
  }
}
export const activityInstanceConnectedParticipantsScope = obj;
export const activityInstanceConnectedParticipantsUpdateEvent = rPCEvent;
