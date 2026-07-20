// Module ID: 9420
// Function ID: 73331
// Name: useCanRemoveAllReactions
// Dependencies: []
// Exports: default

// Module 9420 (useCanRemoveAllReactions)
let closure_2 = importDefault(dependencyMap[0]);
const Permissions = arg1(dependencyMap[1]).Permissions;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/reactions/useCanRemoveAllReactions.tsx");

export default function useCanRemoveAllReactions(stateFromStores) {
  const arg1 = stateFromStores;
  const isActiveChannelOrUnarchivableThread = arg1(dependencyMap[2]).useIsActiveChannelOrUnarchivableThread(stateFromStores);
  const dependencyMap = isActiveChannelOrUnarchivableThread;
  const obj = arg1(dependencyMap[2]);
  const items = [closure_2];
  const items1 = [stateFromStores, isActiveChannelOrUnarchivableThread];
  const obj2 = arg1(dependencyMap[3]);
  return null != stateFromStores && arg1(dependencyMap[3]).useStateFromStores(items, () => closure_2.can(constants.MANAGE_MESSAGES, arg0) && isActiveChannelOrUnarchivableThread, items1);
};
