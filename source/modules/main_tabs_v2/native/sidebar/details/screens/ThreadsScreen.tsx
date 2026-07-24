// Module ID: 15442
// Function ID: 117814
// Name: ThreadsScreen
// Dependencies: [31, 27, 1348, 653, 1211, 33, 4130, 689, 5650, 5160, 9843, 4138, 15443, 15423, 624, 1457, 2]

// Module 15442 (ThreadsScreen)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SearchTypes } from "ME";
import { OpenThreadAnalyticsLocations as closure_7 } from "AbortCodes";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function ThreadsScreen(channel) {
  let renderScrollComponent;
  let style;
  channel = channel.channel;
  ({ style, renderScrollComponent } = channel);
  let obj = channel(5650);
  const canStartThread = obj.useCanStartThread(channel);
  const items = [channel];
  const callback = importAllResult.useCallback(() => {
    const result = channel(outer1_2[10]).navigateToThreadCreation(channel, "Thread Browser Empty State");
  }, items);
  obj = { style: items1 };
  items1 = [callback().container, style];
  const callback1 = importAllResult.useCallback((channelId) => {
    const channel = outer1_5.getChannel(channelId);
    if (null != channel) {
      let obj = channel(outer1_2[11]);
      obj = { source: outer1_7.BROWSER };
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
  const tmp8 = importDefault(15443);
  obj.contentContainerStyle = { paddingBottom: importDefault(5160)({ includeKeyboardHeight: true }).insets.bottom + importDefault(689).space.PX_16, paddingHorizontal: 16 };
  obj.renderScrollComponent = renderScrollComponent;
  obj.children = tmp7(tmp8, obj);
  return tmp5(tmp6, obj);
}
let obj = { container: { flex: 1 } };
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
obj.screen = obj;
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((searchContext) => {
  searchContext = searchContext.searchContext;
  let channelId;
  let obj = channelId(15423);
  const renderScrollComponent = obj.useRenderScrollComponent();
  if (searchContext.type === SearchTypes.CHANNEL) {
    channelId = searchContext.channelId;
  } else {
    channelId = null;
  }
  const items = [_isNativeReflectConstruct];
  const stateFromStores = channelId(624).useStateFromStores(items, () => outer1_5.getChannel(channelId));
  let tmp5 = null;
  if (null != stateFromStores) {
    obj = { channel: stateFromStores, renderScrollComponent };
    tmp5 = <ThreadsScreen channel={stateFromStores} renderScrollComponent={renderScrollComponent} />;
  }
  return tmp5;
});
const memoResult1 = importAllResult.memo(() => {
  let obj = channelId(1457);
  channelId = obj.useRoute().params.channelId;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = channelId(624).useStateFromStores(items, () => outer1_5.getChannel(channelId));
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = { style: tmp2.screen, channel: stateFromStores };
    tmp3 = <ThreadsScreen style={tmp2.screen} channel={stateFromStores} />;
  }
  return tmp3;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/ThreadsScreen.tsx");

export default memoResult1;
export const SearchTabsThreadScreen = memoResult;
