// Module ID: 18782
// Function ID: 18783
// Name: ThreadsScreen
// Dependencies: [19, 17, 4863, 1072, 1112, 21, 5014, 575, 7443, 5607, 13997, 5756, 18783, 563, 1498, 2]

// Module 18782 (ThreadsScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import ThreadConstants from "ThreadConstants" /* 1112 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5607 */;
import navigateToThreadCreation from "navigateToThreadCreation" /* 13997 */;
import ThreadListDefault from "ThreadList" /* 18783 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let obj2;
function ThreadsScreen(channel) {
  let tmp10;
  channel = channel.channel;
  const style = channel.style;
  const tmp = closure_9();
  let obj = channel(7443);
  const canStartThread = obj.useCanStartThread(channel);
  const items = [channel];
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const callback = react.useCallback(() => {
    const obj = navigateToThreadCreation;
    const result = obj.navigateToThreadCreation(channel, "Thread Browser Empty State");
  }, items);
  const items1 = [tmp.container, style];
  const callback1 = react.useCallback((arg0) => {
    channel = channel.getChannel(arg0);
    if (null != channel) {
      const obj2 = { source: constants.BROWSER };
      const obj = channel(dependencyMap[11]);
      obj.transitionToThread(channel, obj2);
    }
  }, []);
  ({ channel, onCreateThreadPress: tmp10, onThreadPress: callback1, contentContainerStyle: { paddingBottom: insets.bottom + nativeDefault.space.PX_16, paddingHorizontal: 16 } });
  tmp10 = undefined;
  ThreadListDefault;
  if (canStartThread) {
    tmp10 = callback;
  }
  ({ paddingBottom: insets.bottom + nativeDefault.space.PX_16, paddingHorizontal: 16 });
  return <tmp8 style={items1}>{null}</tmp8>;
}
const View = react_native.View;
const SearchTypes = Constants.SearchTypes;
let closure_7 = ThreadConstants.OpenThreadAnalyticsLocations;
const jsx = Fragment.jsx;
let obj = { container: { flex: 1 }, screen: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_9 = createStyles.createStyles(obj);
const memoResult = react.memo(function SearchTabsThreadScreen(searchContext) {
  searchContext = searchContext.searchContext;
  let channelId;
  if (searchContext.type === SearchTypes.CHANNEL) {
    channelId = searchContext.channelId;
  } else {
    channelId = null;
  }
  const items = [ChannelStore];
  const obj = channelId(563);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = <ThreadsScreen channel={stateFromStores} />;
  }
  return tmp4;
});
const memoResult1 = react.memo(function ConnectedThreadsScreen() {
  let channelId;
  const obj = channelId(1498);
  channelId = obj.useRoute().params.channelId;
  const items = [ChannelStore];
  const obj2 = channelId(563);
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = <ThreadsScreen style={tmp2.screen} channel={stateFromStores} />;
  }
  return tmp3;
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/ThreadsScreen.tsx");

export default memoResult1;
export const SearchTabsThreadScreen = memoResult;
