// Module ID: 15311
// Function ID: 116449
// Name: useSendMessageChannelCount
// Dependencies: [1005846528, 1006043136, 1006108672, 260505600, 102039552, 251658240]
// Exports: default

// Module 15311 (useSendMessageChannelCount)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[0]).GUILD_SELECTABLE_CHANNELS_KEY;
let closure_5 = importDefault(dependencyMap[1]);
const Permissions = arg1(dependencyMap[2]).Permissions;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild/usePostableChannelCount.tsx");

export default function useSendMessageChannelCount(arg0) {
  const arg1 = arg0;
  const items = [closure_3];
  const items1 = [arg0];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => {
    let items = channels.getChannels(arg0)[closure_4];
    if (null == items) {
      items = [];
    }
    return items;
  }, items1);
  let num = 0;
  if (0 !== stateFromStores.length) {
    num = stateFromStores.filter((channel) => closure_5.can(callback(closure_2[4]).combine(constants.SEND_MESSAGES, constants.VIEW_CHANNEL), channel.channel)).length;
  }
  return num;
};
