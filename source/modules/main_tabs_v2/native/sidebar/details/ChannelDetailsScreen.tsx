// Module ID: 15418
// Function ID: 117678
// Dependencies: []

// Module 15418
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const memoResult = importAllResult.memo((navigation) => {
  navigation = navigation.navigation;
  const arg1 = navigation;
  let obj = arg1(dependencyMap[2]);
  const route = obj.useRoute();
  const items = [navigation];
  const callback = importAllResult.useCallback(() => {
    navigation.goBack();
  }, items);
  obj = { channelId: route.params.channelId, isSearchLocked: true === route.params.search, onBackPress: callback, componentWidth: importDefault(dependencyMap[3])().width, onChannelDeleted: callback, expandTopic: true === route.params.expandTopic };
  return jsx(importDefault(dependencyMap[4]), obj);
});
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsScreen.tsx");

export default memoResult;
