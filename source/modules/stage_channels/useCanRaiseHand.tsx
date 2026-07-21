// Module ID: 10663
// Function ID: 83167
// Name: useCanRaiseHand
// Dependencies: [0]
// Exports: useCanRaiseHand

// Module 10663 (useCanRaiseHand)
import result from "result";

const Permissions = arg1(dependencyMap[1]).Permissions;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/stage_channels/useCanRaiseHand.tsx");

export const useCanRaiseHand = function useCanRaiseHand(channel) {
  const arg1 = channel;
  const items = [result];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => result.can(constants.REQUEST_TO_SPEAK, arg0));
};
