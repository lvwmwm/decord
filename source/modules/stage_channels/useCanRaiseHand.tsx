// Module ID: 10663
// Function ID: 83156
// Name: useCanRaiseHand
// Dependencies: [0]
// Exports: useCanRaiseHand

// Module 10663 (useCanRaiseHand)
import __exportStarResult1 from "__exportStarResult1";

const Permissions = arg1(dependencyMap[1]).Permissions;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/stage_channels/useCanRaiseHand.tsx");

export const useCanRaiseHand = function useCanRaiseHand(channel) {
  const arg1 = channel;
  const items = [__exportStarResult1];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => __exportStarResult1.can(constants.REQUEST_TO_SPEAK, arg0));
};
