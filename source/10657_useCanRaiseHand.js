// Module ID: 10657
// Function ID: 83133
// Name: useCanRaiseHand
// Dependencies: []
// Exports: useCanRaiseHand

// Module 10657 (useCanRaiseHand)
let closure_2 = importDefault(dependencyMap[0]);
const Permissions = arg1(dependencyMap[1]).Permissions;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/stage_channels/useCanRaiseHand.tsx");

export const useCanRaiseHand = function useCanRaiseHand(channel) {
  const arg1 = channel;
  const items = [closure_2];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => closure_2.can(constants.REQUEST_TO_SPEAK, arg0));
};
