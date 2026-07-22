// Module ID: 15352
// Function ID: 116908
// Name: IgnoredUserRequestsScreen
// Dependencies: []
// Exports: default

// Module 15352 (IgnoredUserRequestsScreen)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const UserRowModes = arg1(dependencyMap[3]).UserRowModes;
const RelationshipTypes = arg1(dependencyMap[4]).RelationshipTypes;
const jsx = arg1(dependencyMap[5]).jsx;
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/IgnoredUserRequestsScreen.tsx");

export default function IgnoredUserRequestsScreen(navigation) {
  navigation = navigation.navigation;
  const analyticsLocations = importDefault(dependencyMap[6])(importDefault(dependencyMap[7]).FRIEND_REQUESTS).analyticsLocations;
  const arg1 = analyticsLocations;
  let obj = arg1(dependencyMap[8]);
  const items = [closure_4];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => analyticsLocations(stateFromStores[9]).getPendingRelationshipIds(mutableRelationships.getMutableRelationships()).ignoredUserIds);
  const importDefault = stateFromStoresArray;
  const tmp = importDefault(dependencyMap[6]);
  const items1 = [closure_5];
  const items2 = [stateFromStoresArray];
  const stateFromStores = arg1(dependencyMap[8]).useStateFromStores(items1, () => {
    const mapped = stateFromStoresArray.map((arg0) => user.getUser(arg0));
    return mapped.filter((arg0) => null != arg0);
  }, items2);
  const dependencyMap = stateFromStores;
  const items3 = [analyticsLocations];
  const callback = React.useCallback((id) => {
    stateFromStoresArray(stateFromStores[10])({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations });
  }, items3);
  const React = callback;
  const items4 = [callback, stateFromStores];
  const callback1 = React.useCallback(() => {

  }, []);
  if (0 !== stateFromStores.length) {
    obj = { getItemProps: tmp5, getSectionProps: callback1 };
    const items5 = [stateFromStores.length];
    obj.sections = items5;
    return jsx(arg1(dependencyMap[11]).UsersFastList, obj);
  } else {
    navigation.goBack();
  }
  const obj2 = arg1(dependencyMap[8]);
};
