// Module ID: 15441
// Function ID: 117808
// Name: useSortedSpamMessageRequests
// Dependencies: []
// Exports: default

// Module 15441 (useSortedSpamMessageRequests)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/message_request/hooks/useSortedSpamMessageRequests.tsx");

export default function useSortedSpamMessageRequests() {
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => store.getPrivateChannelsVersion());
  const obj = arg1(dependencyMap[4]);
  const items1 = [closure_3, closure_5];
  const items2 = [stateFromStores];
  const stateFromStoresArray = arg1(dependencyMap[4]).useStateFromStoresArray(items1, () => {
    const stateFromStoresArray = store.getMutablePrivateChannels();
    const mapped = Array.from(spamChannelIds.getSpamChannelIds()).map((arg0) => closure_0[arg0]);
    const found = mapped.filter((arg0) => null != arg0);
    const arr = Array.from(spamChannelIds.getSpamChannelIds());
    return stateFromStoresArray(stateFromStoresObject[5]).sortChannelIds(found);
  }, items2);
  const arg1 = stateFromStoresArray;
  const obj2 = arg1(dependencyMap[4]);
  const items3 = [closure_4];
  const items4 = [stateFromStoresArray];
  const stateFromStoresObject = arg1(dependencyMap[4]).useStateFromStoresObject(items3, () => {
    const obj = {};
    const stateFromStoresArray = obj;
    const item = stateFromStoresArray.forEach((id) => {
      const user = user.getUser(id.recipients[0]);
      if (null != user) {
        obj[id.id] = user;
      }
    });
    return obj;
  }, items4);
  const dependencyMap = stateFromStoresObject;
  const items5 = [stateFromStoresArray, stateFromStoresObject];
  return React.useMemo(() => stateFromStoresArray.map((channel) => ({ channel, user: closure_1[channel.id] })), items5);
};
