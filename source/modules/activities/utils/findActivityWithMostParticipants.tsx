// Module ID: 14926
// Function ID: 113808
// Name: findActivityWithMostParticipants
// Dependencies: [3767, 2]
// Exports: default, findActivityWithMostNonBlockedOrIgnoredParticipants

// Module 14926 (findActivityWithMostParticipants)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/activities/utils/findActivityWithMostParticipants.tsx");

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
  let _isNativeReflectConstruct;
  let closure_1;
  if (0 === embeddedActivitiesForChannel.length) {
    return null;
  } else if (1 === length) {
    return embeddedActivitiesForChannel[0];
  } else {
    let items = [embeddedActivitiesForChannel[0], ];
    const items1 = [];
    HermesBuiltin.arraySpread(embeddedActivitiesForChannel[0].userIds, 0);
    items[1] = items1.map((arg0) => !outer1_0.isBlockedOrIgnored(arg0)).length;
    [_isNativeReflectConstruct, closure_1] = items;
    const item = embeddedActivitiesForChannel.forEach((userIds) => {
      const items = [...userIds.userIds];
      const length = items.filter((arg0) => !outer2_0.isBlockedOrIgnored(arg0)).length;
      if (length > length) {
        let _isNativeReflectConstruct = userIds;
      }
    });
    return _isNativeReflectConstruct;
  }
};
