// Module ID: 11664
// Function ID: 90434
// Dependencies: []

// Module 11664
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo(function ChannelSafeAreaNoop() {
  return <View />;
});
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottomNoop.tsx");

export default memoResult;
