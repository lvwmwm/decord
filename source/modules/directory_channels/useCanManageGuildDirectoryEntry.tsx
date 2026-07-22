// Module ID: 10029
// Function ID: 77489
// Name: useCanManageGuildDirectoryEntry
// Dependencies: []
// Exports: default, useCanCreateOrAddGuildInDirectory

// Module 10029 (useCanManageGuildDirectoryEntry)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const Permissions = arg1(dependencyMap[3]).Permissions;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/directory_channels/useCanManageGuildDirectoryEntry.tsx");

export default function useCanManageGuildDirectoryEntry(arg0) {
  const arg1 = arg0;
  let obj = arg1(closure_1[4]);
  const items = [closure_3];
  closure_1 = obj.useStateFromStores(items, () => guild.getGuild(arg0.guildId));
  const items1 = [closure_2];
  closure_2 = arg1(closure_1[4]).useStateFromStores(items1, () => channel.getChannel(arg0.channelId));
  const obj2 = arg1(closure_1[4]);
  const items2 = [closure_4];
  let stateFromStores = arg1(closure_1[4]).useStateFromStores(items2, () => closure_4.can(constants.ADMINISTRATOR, closure_1));
  const obj3 = arg1(closure_1[4]);
  const items3 = [closure_4];
  const stateFromStores1 = arg1(closure_1[4]).useStateFromStores(items3, () => closure_4.can(constants.MANAGE_MESSAGES, closure_2));
  obj = { isEntryAdmin: stateFromStores };
  let tmp3 = stateFromStores;
  if (!stateFromStores) {
    tmp3 = stateFromStores1;
  }
  obj.canEdit = tmp3;
  if (!stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  obj.canRemove = stateFromStores;
  return obj;
};
export const useCanCreateOrAddGuildInDirectory = function useCanCreateOrAddGuildInDirectory(channel) {
  const arg1 = channel;
  const items = [closure_4];
  return arg1(dependencyMap[4]).useStateFromStores(items, () => closure_4.can(constants.SEND_MESSAGES, arg0));
};
