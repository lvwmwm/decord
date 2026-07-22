// Module ID: 10357
// Function ID: 79950
// Name: useCanCurrentUserSpeakInChannel
// Dependencies: []
// Exports: default

// Module 10357 (useCanCurrentUserSpeakInChannel)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/stage_channels/useCanSpeakInChannel.tsx");

export default function useCanCurrentUserSpeakInChannel(arg0) {
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[1]).useStateFromStores(items, () => id.getId());
  const obj = arg1(dependencyMap[1]);
  return importDefault(dependencyMap[2])(stateFromStores, arg0) === arg1(dependencyMap[2]).RequestToSpeakStates.ON_STAGE;
};
