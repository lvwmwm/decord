// Module ID: 12599
// Function ID: 12600
// Name: usePersonalizedVoiceChannelUsers
// Dependencies: [7072, 6012, 1372, 4860, 1074, 504, 2]
// Exports: default

// Module 12599 (usePersonalizedVoiceChannelUsers)
import Constants from "Constants" /* 1074 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7072 */;
import ConsentStore from "ConsentStore" /* 6012 */;
import UserStore from "UserStore" /* 1372 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4860 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Consents = Constants.Consents;
const result = size.fileFinishedImporting("modules/user_profile/hooks/usePersonalizedVoiceChannelUsers.tsx");

export default function usePersonalizedVoiceChannelUsers(arg0) {
  let closure_0;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStoresArray;
  _require = arg0;
  let obj = require("get initialized");
  const items = [SortedVoiceStateStore];
  const items1 = [, ];
  ({ id: arr2[0], guild_id: arr2[1] } = arg0);
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const voiceStatesForChannelAlt = SortedVoiceStateStore.getVoiceStatesForChannelAlt(closure_0.id, closure_0.guild_id);
    return voiceStatesForChannelAlt.map((user) => user.user.id);
  }, items1);
  const items2 = [stateFromStores];
  const obj2 = require("get initialized");
  stateFromStores = obj2.useStateFromStores(items2, () => stateFromStores.getUserAffinitiesMap());
  const items3 = [stateFromStores1];
  const obj3 = require("get initialized");
  stateFromStores1 = obj3.useStateFromStores(items3, () => stateFromStores1.hasConsented(constants.PERSONALIZATION));
  const items4 = [UserStore];
  const items5 = [stateFromStores1, stateFromStores, stateFromStoresArray];
  const obj4 = require("get initialized");
  return obj4.useStateFromStoresArray(items4, () => {
    let sorted;
    let user;
    let obj = stateFromStoresArray;
    if (stateFromStores1) {
      sorted = obj.sort((arg0, arg1) => {
        const value = stateFromStores.get(arg1);
        let num;
        const obj = stateFromStores;
        if (value != null) {
          num = value.vcProbability;
        }
        if (num == null) {
          num = 0;
        }
        const value2 = obj.get(arg0);
        let num2;
        if (value2 != null) {
          num2 = value2.vcProbability;
        }
        if (num2 == null) {
          num2 = 0;
        }
        return num - num2;
      });
    } else {
      sorted = obj;
    }
    const mapped = sorted.map((item) => user.getUser(item));
    return mapped.filter((item) => null != item);
  }, items5);
};
