// Module ID: 16270
// Function ID: 16271
// Name: VibegrationsStaffAccess
// Dependencies: [4470, 2073, 4482, 1378, 1086, 558, 576, 4990, 504, 2]

// Module 16270 (VibegrationsStaffAccess)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1086 */;
import GuildChannelStore from "GuildChannelStore" /* 4470 */;
import GuildStore from "GuildStore" /* 2073 */;
import RelationshipStore from "RelationshipStore" /* 4482 */;
import UserStore from "UserStore" /* 1378 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel, currentUser, guildsArray, obj1, obj6, obj7, selectableChannels, tmp10, tmp3;

let tmp;
const get_initialized = tmp(504);
const GuildFeatures = Constants.GuildFeatures;
let c7 = "conjuring-help";
let c8 = "https://i.dis.gd/conjuring-access";
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let channelId;
  let guildId;
  let tmp4;
  let tmp5;
  let obj = react;
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp6 = UserStore;
    const items = [UserStore, , , ];
    let tmp7 = GuildStore;
    items[1] = GuildStore;
    let tmp8 = GuildChannelStore;
    items[2] = GuildChannelStore;
    items[3] = RelationshipStore;
    class S {
      constructor() {
        currentUser = closure_1_5.getCurrentUser();
        flag = undefined;
        if (currentUser != null) {
          flag = currentUser.isStaff();
        }
        if (flag == null) {
          flag = false;
        }
        if (flag) {
          tmp = closure_1_3;
          guildsArray = closure_1_3.getGuildsArray();
          tmp3 = guildsArray;
          tmp4 = guildsArray;
          for (const item10017 of guildsArray) {
            features = item10017.features;
            tmp6 = closure_1_6;
            tmp5 = item10017;
            if (!features.has(closure_1_6.INTERNAL_EMPLOYEE_ONLY)) {
            } else {
              tmp7 = closure_1_2;
              tmp8 = item10017;
              selectableChannels = closure_1_2.getSelectableChannels(tmp5.id);
              found = selectableChannels.find(() => { /* body not rendered: F144544 */ });
              tmp10 = found;
              if (null != found) {
                obj1 = { isStaff: null, guildId: null, channelId: null };
                obj1.isStaff = flag;
                obj1.guildId = item10017.id;
                obj1.channelId = found.channel.id;
                tmp11 = obj3;
                obj3.return();
                return obj1;
              }
            }
            continue;
          }
          obj6 = { isStaff: null, guildId: null, channelId: null };
          obj6.isStaff = flag;
          return obj6;
        } else {
          obj7 = { isStaff: null, guildId: null, channelId: null };
          obj7.isStaff = flag;
          return obj7;
        }
      }
    }
    cResult[0] = items;
    cResult[1] = S;
    tmp5 = S;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
  ({ guildId, channelId } = stateFromStoresObject);
  let tmp11 = null;
  if (stateFromStoresObject.isStaff) {
    let tmp12;
    if (null != guildId) {
      if (null != channelId) {
        if (cResult[2] === channelId) {
          let tmp14;
          if (cResult[3] === guildId) {
            tmp14 = cResult[4];
          }
          tmp12 = tmp14;
        }
        const obj2 = { kind: "channel", guildId, channelId };
        cResult[2] = channelId;
        cResult[3] = guildId;
        class S {
          constructor() {
            currentUser = closure_1_5.getCurrentUser();
            flag = undefined;
            if (currentUser != null) {
              flag = currentUser.isStaff();
            }
            if (flag == null) {
              flag = false;
            }
            if (flag) {
              tmp = closure_1_3;
              guildsArray = closure_1_3.getGuildsArray();
              tmp3 = guildsArray;
              tmp4 = guildsArray;
              for (const item10017 of guildsArray) {
                features = item10017.features;
                tmp6 = closure_1_6;
                tmp5 = item10017;
                if (!features.has(closure_1_6.INTERNAL_EMPLOYEE_ONLY)) {
                } else {
                  tmp7 = closure_1_2;
                  tmp8 = item10017;
                  selectableChannels = closure_1_2.getSelectableChannels(tmp5.id);
                  found = selectableChannels.find(() => { /* body not rendered: F144544 */ });
                  tmp10 = found;
                  if (null != found) {
                    obj1 = { isStaff: null, guildId: null, channelId: null };
                    obj1.isStaff = flag;
                    obj1.guildId = item10017.id;
                    obj1.channelId = found.channel.id;
                    tmp11 = obj3;
                    obj3.return();
                    return obj1;
                  }
                }
                continue;
              }
              obj6 = { isStaff: null, guildId: null, channelId: null };
              obj6.isStaff = flag;
              return obj6;
            } else {
              obj7 = { isStaff: null, guildId: null, channelId: null };
              obj7.isStaff = flag;
              return obj7;
            }
          }
        }
        tmp14 = obj2;
      }
      tmp11 = tmp12;
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { kind: "url", url };
      cResult[5] = obj3;
      tmp12 = obj3;
    } else {
      tmp12 = cResult[5];
    }
  }
  return tmp11;
}) : (() => {
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
            const obj = closure_1_0(closure_1_1[7]);
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
});
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsStaffAccess.tsx");

export const VIBEGRATIONS_STAFF_ACCESS_CHANNEL_NAME = "conjuring-help";
export const VIBEGRATIONS_STAFF_ACCESS_URL = "https://i.dis.gd/conjuring-access";
export const useVibegrationsStaffAccessTarget = tmp2;
