// Module ID: 8347
// Function ID: 66505
// Name: useInterestedEventUsers
// Dependencies: []
// Exports: default

// Module 8347 (useInterestedEventUsers)
const useMemo = require(dependencyMap[0]).useMemo;
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = require(dependencyMap[2]).GuildScheduledEventUserResponses;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/guild_scheduled_events/useInterestedEventUsers.tsx");

export default function useInterestedEventUsers(arg0, arg1) {
  const require = arg0;
  const dependencyMap = arg1;
  const items = [closure_3];
  const items1 = [arg0];
  const stateFromStoresArray = require(dependencyMap[3]).useStateFromStoresArray(items, () => Object.values(stateFromStoresArray1.getUsersForGuildEvent(arg0, null)), items1);
  const useMemo = stateFromStoresArray;
  const obj = require(dependencyMap[3]);
  const items2 = [closure_3];
  const items3 = [arg0, arg1];
  const stateFromStoresArray1 = require(dependencyMap[3]).useStateFromStoresArray(items2, () => Object.values(stateFromStoresArray1.getUsersForGuildEvent(arg0, arg1)), items3);
  closure_3 = stateFromStoresArray1;
  const items4 = [stateFromStoresArray, stateFromStoresArray1];
  return useMemo(() => {
    function addUserToAllInterested(user_id) {
      if (!set.has(user_id.user_id)) {
        items.push(user_id);
        set.add(user_id.user_id);
      }
    }
    let closure_0 = stateFromStoresArray1.reduce((arg0, user_id) => {
      arg0[user_id.user_id] = user_id;
      return arg0;
    }, {});
    const found = stateFromStoresArray.filter((arg0) => {
      let tmp2 = null == tmp;
      if (!tmp2) {
        tmp2 = tmp.response === constants.INTERESTED;
      }
      return tmp2;
    });
    const found1 = stateFromStoresArray1.filter((response) => response.response === constants.INTERESTED);
    const arg1 = new Set();
    const items = [];
    const stateFromStoresArray = items;
    const item = found.forEach(addUserToAllInterested);
    const item1 = found1.forEach(addUserToAllInterested);
    return items;
  }, items4);
};
