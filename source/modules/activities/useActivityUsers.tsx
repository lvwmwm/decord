// Module ID: 15878
// Function ID: 122581
// Name: useActivityUsers
// Dependencies: [1849, 1347, 624, 2]
// Exports: default

// Module 15878 (useActivityUsers)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const result = require("defaultAreStatesEqual").fileFinishedImporting("modules/activities/useActivityUsers.tsx");

export default function useActivityUsers(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  let items = [_createForOfIteratorHelperLoose, _isNativeReflectConstruct];
  const items1 = [arg1, arg0];
  return _require(624).useStateFromStoresArray(items, () => {
    if (null == closure_1) {
      return [];
    } else {
      const embeddedActivitiesForChannel = outer1_3.getEmbeddedActivitiesForChannel(closure_1);
      const found = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === outer1_0);
      if (null == found) {
        let items = [];
      } else {
        const _Array = Array;
        const mapped = Array.from(found.userIds).map((arg0) => outer2_2.getUser(arg0));
        items = mapped.filter((arg0) => null != arg0);
        const arr = Array.from(found.userIds);
      }
      return items;
    }
  }, items1);
};
