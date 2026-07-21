// Module ID: 5330
// Function ID: 45419
// Name: getDefaultPermissionsForChannel
// Dependencies: []
// Exports: canChannelBeDefault, useCanChannelBeDefault

// Module 5330 (getDefaultPermissionsForChannel)
function getDefaultPermissionsForChannel(channel) {
  if (null != channel) {
    const GUILD_VOCAL = constants.GUILD_VOCAL;
    if (GUILD_VOCAL.has(channel.type)) {
      let VIEW_CHANNEL = importAll(dependencyMap[3]).combine(constants2.VIEW_CHANNEL, constants2.CONNECT);
      const obj = importAll(dependencyMap[3]);
    }
    return VIEW_CHANNEL;
  }
  VIEW_CHANNEL = constants2.VIEW_CHANNEL;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ ChannelTypesSets: closure_5, Permissions: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_onboarding/DefaultChannelUtils.tsx");

export const useCanChannelBeDefault = function useCanChannelBeDefault(arg0, arg1) {
  arg1 = arg0;
  const importAll = arg1;
  const items = [closure_3, closure_4];
  return arg1(dependencyMap[4]).useStateFromStores(items, () => {
    const channel = channel.getChannel(arg1);
    let isChannelGatedResult = channelGated.isChannelGated(arg0, arg1);
    if (!isChannelGatedResult) {
      isChannelGatedResult = arg1(closure_2[5]).canEveryoneRole(tmp2, channel);
      const obj = arg1(closure_2[5]);
    }
    return isChannelGatedResult;
  });
};
export const canChannelBeDefault = function canChannelBeDefault(guild_id, id) {
  let isChannelGatedResult = channelGated.isChannelGated(guild_id, id);
  if (!isChannelGatedResult) {
    isChannelGatedResult = importAll(dependencyMap[5]).canEveryoneRole(tmp, store.getChannel(id));
    const obj = importAll(dependencyMap[5]);
  }
  return isChannelGatedResult;
};
