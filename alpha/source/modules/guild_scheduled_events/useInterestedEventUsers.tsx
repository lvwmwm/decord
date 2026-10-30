// Module ID: 8969
// Function ID: 8970
// Name: useInterestedEventUsers
// Dependencies: [19, 6849, 4864, 504, 2]
// Exports: default

// Module 8969 (useInterestedEventUsers)
import react from "react" /* 19 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 4864 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6849 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, dependencyMap, set;

const useMemo = react.useMemo;
let closure_4 = GuildScheduledEventsConstants.GuildScheduledEventUserResponses;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useInterestedEventUsers.tsx");

export default function useInterestedEventUsers(arg0, arg1) {
  let closure_1;
  let stateFromStoresArray1;
  _require = arg0;
  dependencyMap = arg1;
  let obj = require("get initialized");
  let items = [stateFromStoresArray1];
  const items1 = [arg0];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => Object.values(GuildScheduledEventStore.getUsersForGuildEvent(closure_0, null)), items1);
  const items2 = [stateFromStoresArray1];
  const items3 = [arg0, arg1];
  const obj2 = require("get initialized");
  stateFromStoresArray1 = obj2.useStateFromStoresArray(items2, () => Object.values(GuildScheduledEventStore.getUsersForGuildEvent(closure_0, closure_1)), items3);
  const items4 = [stateFromStoresArray, stateFromStoresArray1];
  return stateFromStoresArray(() => {
    function addUserToAllInterested(user_id) {
      const obj = set;
      if (!set.has(user_id.user_id)) {
        items.push(user_id);
        obj.add(user_id.user_id);
      }
    }
    closure_0 = stateFromStoresArray1.reduce((acc, user_id) => {
      acc[user_id.user_id] = user_id;
      return acc;
    }, {});
    const found = stateFromStoresArray.filter((item) => null == tmp || tmp.response === constants.INTERESTED);
    const found1 = stateFromStoresArray1.filter((response) => response.response === constants.INTERESTED);
    set = new Set();
    const items = [];
    const item = found.forEach(addUserToAllInterested);
    const item1 = found1.forEach(addUserToAllInterested);
    return items;
  }, items4);
};
