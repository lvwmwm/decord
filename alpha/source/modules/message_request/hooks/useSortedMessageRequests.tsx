// Module ID: 18914
// Function ID: 18915
// Name: useSortedMessageRequests
// Dependencies: [19, 4858, 1384, 6850, 504, 18915, 2]
// Exports: default

// Module 18914 (useSortedMessageRequests)
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import UserStore from "UserStore" /* 1384 */;
import MessageRequestStore from "MessageRequestStore" /* 6850 */;
import size from "module_2" /* 2 */;

let user;

const result = size.fileFinishedImporting("modules/message_request/hooks/useSortedMessageRequests.tsx");

export default function useSortedMessageRequests() {
  let messageRequestChannelIds;
  let stateFromStoresArray;
  let stateFromStoresObject;
  let obj = stateFromStoresArray(stateFromStoresObject[4]);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getPrivateChannelsVersion());
  const items1 = [ChannelStore, MessageRequestStore];
  const items2 = [stateFromStores];
  const obj2 = stateFromStoresArray(stateFromStoresObject[4]);
  stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => {
    const mutablePrivateChannels = ChannelStore.getMutablePrivateChannels();
    const arr = Array.from(messageRequestChannelIds.getMessageRequestChannelIds());
    const mapped = arr.map((item) => closure_0[item]);
    const found = mapped.filter((item) => null != item);
    const obj = stateFromStoresArray(stateFromStoresObject[5]);
    return obj.sortChannelIds(found);
  }, items2);
  const items3 = [UserStore];
  const items4 = [stateFromStoresArray];
  const obj3 = stateFromStoresArray(stateFromStoresObject[4]);
  stateFromStoresObject = obj3.useStateFromStoresObject(items3, () => {
    const obj = {};
    const item = stateFromStoresArray.forEach((id) => {
      user = user.getUser(id.recipients[0]);
      if (null != user) {
        obj[id.id] = user;
      }
    });
    return obj;
  }, items4);
  const items5 = [stateFromStoresArray, stateFromStoresObject];
  return react.useMemo(() => stateFromStoresArray.map((channel) => ({ channel, user: stateFromStoresObject[channel.id] })), items5);
};
