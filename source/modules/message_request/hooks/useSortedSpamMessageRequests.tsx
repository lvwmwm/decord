// Module ID: 15576
// Function ID: 120088
// Name: useSortedSpamMessageRequests
// Dependencies: [31, 1348, 1849, 5605, 566, 15566, 2]
// Exports: default

// Module 15576 (useSortedSpamMessageRequests)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/message_request/hooks/useSortedSpamMessageRequests.tsx");

export default function useSortedSpamMessageRequests() {
  const items = [_isNativeReflectConstruct];
  const stateFromStores = stateFromStoresArray(stateFromStoresObject[4]).useStateFromStores(items, () => outer1_3.getPrivateChannelsVersion());
  let obj = stateFromStoresArray(stateFromStoresObject[4]);
  const items1 = [_isNativeReflectConstruct, closure_5];
  const items2 = [stateFromStores];
  stateFromStoresArray = stateFromStoresArray(stateFromStoresObject[4]).useStateFromStoresArray(items1, () => {
    const mutablePrivateChannels = outer1_3.getMutablePrivateChannels();
    const mapped = Array.from(outer1_5.getSpamChannelIds()).map((arg0) => table[arg0]);
    const found = mapped.filter((arg0) => null != arg0);
    const arr = Array.from(outer1_5.getSpamChannelIds());
    return stateFromStoresArray(stateFromStoresObject[5]).sortChannelIds(found);
  }, items2);
  const obj2 = stateFromStoresArray(stateFromStoresObject[4]);
  const items3 = [closure_4];
  const items4 = [stateFromStoresArray];
  stateFromStoresObject = stateFromStoresArray(stateFromStoresObject[4]).useStateFromStoresObject(items3, () => {
    const obj = {};
    const item = obj.forEach((id) => {
      const user = outer2_4.getUser(id.recipients[0]);
      if (null != user) {
        obj[id.id] = user;
      }
    });
    return obj;
  }, items4);
  const items5 = [stateFromStoresArray, stateFromStoresObject];
  return React.useMemo(() => stateFromStoresArray.map((channel) => ({ channel, user: outer1_1[channel.id] })), items5);
};
