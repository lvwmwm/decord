// Module ID: 11881
// Function ID: 91979
// Name: useCustomStatusActivityForUser
// Dependencies: []
// Exports: default

// Module 11881 (useCustomStatusActivityForUser)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const ActivityTypes = arg1(dependencyMap[2]).ActivityTypes;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/custom_status/utils/useCustomStatusActivityForUser.tsx");

export default function useCustomStatusActivityForUser(arg0) {
  const arg1 = arg0;
  const items = [closure_2];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => id.getId() === arg0);
  const obj = arg1(dependencyMap[3]);
  const customStatusActivity = arg1(dependencyMap[4]).useCustomStatusActivity();
  const obj2 = arg1(dependencyMap[4]);
  const items1 = [closure_3];
  let stateFromStores1 = arg1(dependencyMap[3]).useStateFromStores(items1, () => closure_3.findActivity(arg0, (type) => type.type === constants.CUSTOM_STATUS));
  if (stateFromStores) {
    stateFromStores1 = customStatusActivity;
  }
  return stateFromStores1;
};
