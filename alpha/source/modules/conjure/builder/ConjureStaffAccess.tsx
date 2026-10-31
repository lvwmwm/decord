// Module ID: 12997
// Function ID: 12998
// Name: ConjureStaffAccess
// Dependencies: [4944, 4885, 4956, 1383, 1072, 504, 5652, 2]
// Exports: useConjureStaffAccessTarget

// Module 12997 (ConjureStaffAccess)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import GuildChannelStore from "GuildChannelStore" /* 4944 */;
import GuildStore from "GuildStore" /* 4885 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

let channel, currentUser, guildsArray, selectableChannels;

const GuildFeatures = Constants.GuildFeatures;
let c7 = "conjuring-help";
let c8 = "https://i.dis.gd/conjuring-access";
const result = size.fileFinishedImporting("modules/conjure/builder/ConjureStaffAccess.tsx");

export const CONJURE_STAFF_ACCESS_CHANNEL_NAME = "conjuring-help";
export const CONJURE_STAFF_ACCESS_URL = "https://i.dis.gd/conjuring-access";
export function useConjureStaffAccessTarget() {
  let channelId;
  let guildId;
  let obj = get_initialized;
  const items = [UserStore, GuildStore, GuildChannelStore, RelationshipStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    currentUser = currentUser.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.isStaff();
    }
    if (flag == null) {
      flag = false;
    }
    if (flag) {
      guildsArray = guildsArray.getGuildsArray();
      for (const item10017 of guildsArray) {
        let features = item10017.features;
        let tmp5 = item10017;
        if (features.has(constants.INTERNAL_EMPLOYEE_ONLY)) {
          selectableChannels = selectableChannels.getSelectableChannels(tmp5.id);
          let found = selectableChannels.find((channel) => {
            channel = channel.channel;
            const obj = closure_1_0(closure_1_1[6]);
            return obj.computeChannelName(channel, currentUser, closure_1_4) === closure_1_7;
          });
          if (null != found) {
            let obj = { isStaff: flag, guildId: item10017.id, channelId: found.channel.id };
            obj3.return();
            return obj;
          }
        }
        continue;
      }
      return { isStaff: flag, guildId: null, channelId: null };
    } else {
      return { isStaff: flag, guildId: null, channelId: null };
    }
  });
  ({ guildId, channelId } = stateFromStoresObject);
  let tmp2 = null;
  if (stateFromStoresObject.isStaff) {
    if (null != guildId) {
      let obj3;
      if (null != channelId) {
        const obj2 = { kind: "channel", guildId, channelId };
        obj3 = obj2;
      }
      tmp2 = obj3;
    }
    obj3 = { kind: "url", url };
  }
  return tmp2;
}
