// Module ID: 11974
// Function ID: 92600
// Name: usePersonalizedVoiceChannelUsers
// Dependencies: [6901, 5590, 1849, 4203, 653, 566, 2]
// Exports: default

// Module 11974 (usePersonalizedVoiceChannelUsers)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { Consents } from "ME";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/hooks/usePersonalizedVoiceChannelUsers.tsx");

export default function usePersonalizedVoiceChannelUsers(arg0) {
  const _require = arg0;
  const items = [closure_5];
  const items1 = [, ];
  ({ id: arr2[0], guild_id: arr2[1] } = arg0);
  stateFromStoresArray = _require(stateFromStoresArray[5]).useStateFromStoresArray(items, () => {
    const voiceStatesForChannelAlt = outer1_5.getVoiceStatesForChannelAlt(closure_0.id, closure_0.guild_id);
    return voiceStatesForChannelAlt.map((user) => user.user.id);
  }, items1);
  const obj = _require(stateFromStoresArray[5]);
  const items2 = [stateFromStores];
  stateFromStores = _require(stateFromStoresArray[5]).useStateFromStores(items2, () => stateFromStores.getUserAffinitiesMap());
  const obj2 = _require(stateFromStoresArray[5]);
  const items3 = [stateFromStores1];
  stateFromStores1 = _require(stateFromStoresArray[5]).useStateFromStores(items3, () => stateFromStores1.hasConsented(outer1_6.PERSONALIZATION));
  const obj3 = _require(stateFromStoresArray[5]);
  const items4 = [closure_4];
  const items5 = [stateFromStores1, stateFromStores, stateFromStoresArray];
  return _require(stateFromStoresArray[5]).useStateFromStoresArray(items4, () => {
    if (stateFromStores1) {
      let sorted = obj.sort((arg0, arg1) => {
        let value = outer1_2.get(arg1);
        let vcProbability;
        if (null != value) {
          vcProbability = value.vcProbability;
        }
        let num = 0;
        if (null != vcProbability) {
          num = vcProbability;
        }
        value = outer1_2.get(arg0);
        let vcProbability1;
        if (null != value) {
          vcProbability1 = value.vcProbability;
        }
        let num2 = 0;
        if (null != vcProbability1) {
          num2 = vcProbability1;
        }
        return num - num2;
      });
    } else {
      sorted = obj;
    }
    const mapped = sorted.map((arg0) => outer2_4.getUser(arg0));
    return mapped.filter((arg0) => null != arg0);
  }, items5);
};
