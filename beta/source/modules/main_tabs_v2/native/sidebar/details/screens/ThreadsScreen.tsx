// Module ID: 16535
// Function ID: 16536
// Name: ThreadsScreen
// Dependencies: [19, 17, 2045, 1074, 1114, 21, 4836, 576, 6687, 6402, 10792, 4847, 16536, 563, 1486, 2]

// Module 16535 (ThreadsScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import ThreadConstants from "ThreadConstants" /* 1114 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6402 */;
import navigateToThreadCreation from "navigateToThreadCreation" /* 10792 */;
import ThreadListDefault from "ThreadList" /* 16536 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let searchContext;

let obj2;
function ThreadsScreen(channel) {
  let tmp10;
  channel = channel.channel;
  const style = channel.style;
  const tmp = closure_9();
  let obj = channel(6687);
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
const memoResult = react.memo((searchContext) => {
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
const memoResult1 = react.memo(() => {
  let channelId;
  const obj = channelId(1486);
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
