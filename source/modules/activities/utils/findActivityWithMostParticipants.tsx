// Module ID: 14802
// Function ID: 111597
// Name: findActivityWithMostParticipants
// Dependencies: []
// Exports: default, findActivityWithMostNonBlockedOrIgnoredParticipants

// Module 14802 (findActivityWithMostParticipants)
let closure_0 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/activities/utils/findActivityWithMostParticipants.tsx");

export default function findActivityWithMostParticipants(arr) {
  if (0 === arr.length) {
    return null;
  } else if (1 === length) {
    let first = arr[0];
  } else {
    first = arr.reduce((userIds, userIds2) => {
      let tmp = userIds;
      if (userIds.userIds.size < userIds2.userIds.size) {
        tmp = userIds2;
      }
      return tmp;
    }, arr[0]);
  }
};
export const findActivityWithMostNonBlockedOrIgnoredParticipants = function findActivityWithMostNonBlockedOrIgnoredParticipants(embeddedActivitiesForChannel) {
  if (0 === embeddedActivitiesForChannel.length) {
    return null;
  } else if (1 === length) {
    return embeddedActivitiesForChannel[0];
  } else {
    const items = [embeddedActivitiesForChannel[0], ];
    const items1 = [];
    HermesBuiltin.arraySpread(embeddedActivitiesForChannel[0].userIds, 0);
    items[1] = items1.map((arg0) => !blockedOrIgnored.isBlockedOrIgnored(arg0)).length;
    [closure_0, closure_1] = items;
    const item = embeddedActivitiesForChannel.forEach((userIds) => {
      const items = [...userIds.userIds];
      const length = items.filter((arg0) => !arg0.isBlockedOrIgnored(arg0)).length;
    });
    return closure_0;
  }
};
