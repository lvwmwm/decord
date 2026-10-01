// Module ID: 16973
// Function ID: 16974
// Name: useActivityUsers
// Dependencies: [1372, 2044, 563, 2]
// Exports: default

// Module 16973 (useActivityUsers)
import UserStore from "UserStore" /* 1372 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/activities/useActivityUsers.tsx");

export default function useActivityUsers(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  let items = [EmbeddedActivitiesStore, UserStore];
  const items1 = [arg1, arg0];
  const obj = require("useStateFromStores");
  return obj.useStateFromStoresArray(items, () => {
    let user;
    if (null == closure_1) {
      return [];
    } else {
      let items;
      const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(tmp);
      const found = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === closure_1_0);
      if (null == found) {
        items = [];
      } else {
        const _Array = Array;
        const arr = Array.from(found.userIds);
        const mapped = arr.map((item) => user.getUser(item));
        items = mapped.filter((item) => null != item);
      }
      return items;
    }
  }, items1);
};
