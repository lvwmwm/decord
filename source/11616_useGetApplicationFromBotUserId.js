// Module ID: 11616
// Function ID: 90225
// Name: useGetApplicationFromBotUserId
// Dependencies: []
// Exports: default

// Module 11616 (useGetApplicationFromBotUserId)
let closure_2 = importDefault(dependencyMap[0]);
const EMPTY_STRING_SNOWFLAKE_ID = arg1(dependencyMap[1]).EMPTY_STRING_SNOWFLAKE_ID;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/applications/getApplicationFromBotUserId.tsx");

export default function useGetApplicationFromBotUserId(arg0) {
  const arg1 = arg0;
  let tmp;
  const items = [closure_2];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => {
    let tmp;
    if (null !== arg0) {
      const userProfile = userProfile.getUserProfile(null != arg0 ? arg0 : closure_3);
      let application;
      if (null != userProfile) {
        application = userProfile.application;
      }
      tmp = application;
    }
    return tmp;
  });
  if (null != stateFromStores) {
    tmp = stateFromStores;
  }
  return tmp;
};
