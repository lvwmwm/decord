// Module ID: 5061
// Function ID: 43864
// Name: getDefaultPermissionsForChannel
// Dependencies: [1909, 1348, 653, 483, 566, 3764, 2]
// Exports: canChannelBeDefault, useCanChannelBeDefault

// Module 5061 (getDefaultPermissionsForChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_5;
let closure_6;
const require = arg1;
function getDefaultPermissionsForChannel(channel) {
  if (null != channel) {
    const GUILD_VOCAL = constants.GUILD_VOCAL;
    if (GUILD_VOCAL.has(channel.type)) {
      let VIEW_CHANNEL = importAll(483).combine(constants2.VIEW_CHANNEL, constants2.CONNECT);
      const obj = importAll(483);
    }
    return VIEW_CHANNEL;
  }
  VIEW_CHANNEL = constants2.VIEW_CHANNEL;
}
({ ChannelTypesSets: closure_5, Permissions: closure_6 } = ME);
const result = require("ME").fileFinishedImporting("modules/guild_onboarding/DefaultChannelUtils.tsx");

export const useCanChannelBeDefault = function useCanChannelBeDefault(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  const items = [_isNativeReflectConstruct, closure_4];
  return _require(566).useStateFromStores(items, () => {
    const channel = outer1_4.getChannel(callback);
    let isChannelGatedResult = outer1_3.isChannelGated(closure_0, callback);
    if (!isChannelGatedResult) {
      isChannelGatedResult = callback(outer1_2[5]).canEveryoneRole(tmp2, channel);
      const obj = callback(outer1_2[5]);
    }
    return isChannelGatedResult;
  });
};
export const canChannelBeDefault = function canChannelBeDefault(guild_id, id) {
  let isChannelGatedResult = channelGated.isChannelGated(guild_id, id);
  if (!isChannelGatedResult) {
    isChannelGatedResult = importAll(3764).canEveryoneRole(tmp, store.getChannel(id));
    const obj = importAll(3764);
  }
  return isChannelGatedResult;
};
