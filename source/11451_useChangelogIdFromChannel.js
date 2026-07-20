// Module ID: 11451
// Function ID: 89240
// Name: useChangelogIdFromChannel
// Dependencies: []
// Exports: default

// Module 11451 (useChangelogIdFromChannel)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/changelog/useChangelogIdFromChannel.tsx");

export default function useChangelogIdFromChannel(arg0) {
  const arg1 = arg0;
  let changelogId;
  const items = [closure_2];
  const stateFromStores = arg1(dependencyMap[1]).useStateFromStores(items, () => lastMessage.getLastMessage(arg0));
  if (null != stateFromStores) {
    changelogId = stateFromStores.changelogId;
  }
  return changelogId;
};
