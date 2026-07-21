// Module ID: 15267
// Function ID: 115241
// Name: ThreadsScreen
// Dependencies: []

// Module 15267 (ThreadsScreen)
function ThreadsScreen(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let obj = arg1(dependencyMap[8]);
  const canStartThread = obj.useCanStartThread(channel);
  const items = [channel];
  const callback = importAllResult.useCallback(() => {
    const result = channel(closure_2[10]).navigateToThreadCreation(channel, "Thread Browser Empty State");
  }, items);
  obj = { style: items1 };
  const items1 = [callback().container, channel.style];
  const callback1 = importAllResult.useCallback((channelId) => {
    const channel = channel.getChannel(channelId);
    if (null != channel) {
      let obj = channel(closure_2[11]);
      obj = { source: constants.BROWSER };
      obj.transitionToThread(channel, obj);
    }
  }, []);
  obj = { channel };
  let tmp9;
  const tmp = callback();
  const tmp5 = jsx;
  const tmp6 = View;
  const tmp7 = jsx;
  if (canStartThread) {
    tmp9 = callback;
  }
  obj.onCreateThreadPress = tmp9;
  obj.onThreadPress = callback1;
  const tmp8 = importDefault(dependencyMap[12]);
  obj.contentContainerStyle = { paddingBottom: importDefault(dependencyMap[9])({ includeKeyboardHeight: true }).insets.bottom + importDefault(dependencyMap[7]).space.PX_16, paddingHorizontal: 16 };
  obj.children = tmp7(tmp8, obj);
  return tmp5(tmp6, obj);
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const SearchTypes = arg1(dependencyMap[3]).SearchTypes;
let closure_7 = arg1(dependencyMap[4]).OpenThreadAnalyticsLocations;
const jsx = arg1(dependencyMap[5]).jsx;
let obj = { container: { flex: 1 } };
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWER };
obj.screen = obj;
let closure_9 = arg1(dependencyMap[6]).createStyles(obj);
const obj2 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo((searchContext) => {
  searchContext = searchContext.searchContext;
  let arg1;
  if (searchContext.type === SearchTypes.CHANNEL) {
    let channelId = searchContext.channelId;
  } else {
    channelId = null;
  }
  arg1 = channelId;
  let obj = arg1(dependencyMap[13]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId));
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = { channel: stateFromStores };
    tmp4 = <ThreadsScreen {...obj} />;
  }
  return tmp4;
});
const memoResult1 = importAllResult.memo(() => {
  let obj = arg1(dependencyMap[14]);
  const arg1 = obj.useRoute().params.channelId;
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[13]).useStateFromStores(items, () => channel.getChannel(channelId));
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = { style: tmp2.screen, channel: stateFromStores };
    tmp3 = <ThreadsScreen {...obj} />;
  }
  return tmp3;
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/ThreadsScreen.tsx");

export default memoResult1;
export const SearchTabsThreadScreen = memoResult;
