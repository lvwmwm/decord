// Module ID: 15429
// Function ID: 117729
// Dependencies: []

// Module 15429
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const SearchTabs = arg1(dependencyMap[3]).SearchTabs;
const jsx = arg1(dependencyMap[4]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWER };
obj.container = obj;
let closure_7 = arg1(dependencyMap[5]).createStyles(obj);
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(() => {
  let obj = arg1(dependencyMap[7]);
  const channelId = obj.useRoute().params.channelId;
  const arg1 = channelId;
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[8]).useStateFromStores(items, () => {
    const channel = channel.getChannel(channelId);
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  });
  const obj2 = arg1(dependencyMap[8]);
  const channelDetailsSearchContext = arg1(dependencyMap[9]).useChannelDetailsSearchContext(channelId, stateFromStores);
  obj = { style: callback().container, children: jsx(importDefault(dependencyMap[10]), obj) };
  obj = { searchContext: channelDetailsSearchContext, isFocused: true, tab: SearchTabs.PINS };
  return <View {...obj} />;
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx");

export default memoResult;
