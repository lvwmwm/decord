// Module ID: 15340
// Function ID: 116817
// Name: SpamRequestsScreen
// Dependencies: []
// Exports: default

// Module 15340 (SpamRequestsScreen)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const UserRowModes = arg1(dependencyMap[3]).UserRowModes;
const RelationshipTypes = arg1(dependencyMap[4]).RelationshipTypes;
const jsx = arg1(dependencyMap[5]).jsx;
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/SpamRequestsScreen.tsx");

export default function SpamRequestsScreen(navigation) {
  navigation = navigation.navigation;
  const analyticsLocations = importDefault(dependencyMap[6])(importDefault(dependencyMap[7]).FRIEND_REQUESTS).analyticsLocations;
  const arg1 = analyticsLocations;
  let obj = arg1(dependencyMap[8]);
  const items = [closure_4];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => analyticsLocations(stateFromStoresArray1[9]).getPendingRelationshipIds(mutableRelationships.getMutableRelationships()).spamIds);
  const importDefault = stateFromStoresArray;
  obj = {};
  const tmp = importDefault(dependencyMap[6]);
  obj.name = arg1(dependencyMap[11]).ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX;
  importDefault(dependencyMap[10])(obj);
  const tmp3 = importDefault(dependencyMap[10]);
  const items1 = [closure_5];
  const items2 = [stateFromStoresArray];
  const stateFromStoresArray1 = arg1(dependencyMap[8]).useStateFromStoresArray(items1, () => {
    const mapped = stateFromStoresArray.map((arg0) => user.getUser(arg0));
    return mapped.filter((arg0) => null != arg0);
  }, items2);
  const dependencyMap = stateFromStoresArray1;
  const items3 = [analyticsLocations];
  const callback = React.useCallback((id) => {
    stateFromStoresArray(stateFromStoresArray1[12])({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations });
  }, items3);
  const React = callback;
  const items4 = [callback, stateFromStoresArray1];
  const callback1 = React.useCallback(() => {

  }, []);
  if (0 !== stateFromStoresArray1.length) {
    obj = { getItemProps: tmp7, getSectionProps: callback1 };
    const items5 = [stateFromStoresArray1.length];
    obj.sections = items5;
    return jsx(arg1(dependencyMap[13]).UsersFastList, obj);
  } else {
    navigation.goBack();
  }
  const obj3 = arg1(dependencyMap[8]);
};
