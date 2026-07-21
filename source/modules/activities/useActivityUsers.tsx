// Module ID: 15706
// Function ID: 120043
// Name: useActivityUsers
// Dependencies: []
// Exports: default

// Module 15706 (useActivityUsers)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/activities/useActivityUsers.tsx");

export default function useActivityUsers(arg0, arg1) {
  arg1 = arg0;
  const dependencyMap = arg1;
  const items = [closure_3, closure_2];
  const items1 = [arg1, arg0];
  return arg1(dependencyMap[2]).useStateFromStoresArray(items, () => {
    if (null == arg1) {
      return [];
    } else {
      const embeddedActivitiesForChannel = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(arg1);
      const found = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === closure_0);
      if (null == found) {
        let items = [];
      } else {
        const _Array = Array;
        const mapped = Array.from(found.userIds).map((arg0) => user.getUser(arg0));
        items = mapped.filter((arg0) => null != arg0);
        const arr = Array.from(found.userIds);
      }
      return items;
    }
  }, items1);
};
