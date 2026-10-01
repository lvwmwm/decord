// Module ID: 16536
// Function ID: 16537
// Name: ThreadList
// Dependencies: [19, 17, 21, 4836, 4832, 16537, 4566, 4540, 5280, 5284, 12277, 2054, 2056, 1115, 5917, 8055, 11719, 16539, 16540, 8179, 2]
// Exports: default

// Module 16536 (ThreadList)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1115 */;
import native from "native" /* 4540 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import Text_Text from "Text/Text" /* 4832 */;
import spring from "spring" /* 5280 */;
import springPresets from "springPresets" /* 5284 */;
import TableRow2 from "TableRow" /* 5917 */;
import RowButton from "RowButton" /* 8055 */;
import defaultMVCPConfig from "defaultMVCPConfig" /* 8179 */;
import ThreadPlusIcon from "ThreadPlusIcon" /* 11719 */;
import ThreadListTableRowDefault from "ThreadListTableRow" /* 16537 */;
import ThreadListLoadingIndicatorDefault from "ThreadListLoadingIndicator" /* 16540 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
function ThreadListSection(title) {
  const str = title.title;
  const Text = Text_Text.Text;
  return <Text style={closure_7().section} accessibilityRole="header" variant="text-xs/bold" color="text-default">{str.toUpperCase()}</Text>;
}
function renderItem(item) {
  item = item.item;
  const type = item.type;
  if ("section" === type) {
    return <ThreadListSection title={item.title} />;
  } else if ("thread" === type) {
    const obj = { threadId: null, onPress: null, start: null, end: null };
    ({ threadId: obj.threadId, onPress: obj.onPress, start: obj.start, end: obj.end } = item);
    return jsx(ThreadListTableRowDefault, { threadId: null, onPress: null, start: null, end: null });
  }
}
function keyExtractor(type) {
  type = type.type;
  if ("section" === type) {
    return type.title;
  } else {
    return "thread" === type ? type.threadId : undefined;
  }
}
function EnterExitCrossFadeContainer(cleanUp) {
  let children;
  let contentContainerStyle;
  cleanUp = cleanUp.cleanUp;
  const state = cleanUp.state;
  let sharedValue;
  let tmp = cleanUp;
  ({ contentContainerStyle, children } = cleanUp);
  const useSharedValue = cleanUp(sharedValue[6]).useSharedValue;
  let num = 0;
  const tmp3 = cleanUp(sharedValue[6]);
  if (state === cleanUp(sharedValue[7]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let fn = function p() {
    let fn;
    let springStandard;
    let value;
    let withSpring;
    let obj = { opacity: withSpring(value, springStandard, "respect-motion-settings", fn) };
    let tmp = spring;
    withSpring = tmp.withSpring;
    value = sharedValue.get();
    fn = function t(arg0) {
      const tmp = arg0 && state === cleanUp(sharedValue[7]).TransitionStates.YEETED;
      if (tmp) {
        const obj = cleanUp(sharedValue[6]);
        obj.runOnJS(closure_1_0)();
      }
    };
    const obj2 = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    springStandard = springPresets.springStandard;
    fn.__closure = obj2;
    fn.__workletHash = 2519144051135;
    fn.__initData = __initData;
    return obj;
  };
  const tmpResult = tmp(sharedValue[6]);
  let obj = { withSpring: tmp(tmp2[8]).withSpring, opacity: sharedValue, springStandard: tmp(tmp2[9]).springStandard, state, TransitionStates: tmp(tmp2[7]).TransitionStates, runOnJS: tmp(tmp2[6]).runOnJS, cleanUp };
  fn.__closure = obj;
  fn.__workletHash = 5037750127944;
  fn.__initData = __initData;
  const items = [sharedValue, state];
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const effect = react.useEffect(() => {
    let num = 1;
    set = sharedValue.set;
    if (state === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = set(num);
  }, items);
  const items1 = [absoluteFill.absoluteFill, animatedStyle];
  const View = state(tmp2[6]).View;
  return <View style={items1}>{null}</View>;
}
function getThreadListStateKey(arg0) {
  return arg0;
}
let react = react_mod;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ container: { flex: 1, flexGrow: 1 }, center: { justifyContent: "center", alignItems: "center" }, header: { marginTop: 24, marginBottom: 10 }, footer: { marginVertical: 16, justifyContent: "center", alignItems: "center" }, section: { marginTop: 16, marginBottom: 8 } });
let set = new Set();
const __initData = { code: "function ThreadListTsx1(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}" };
let closure_13 = { code: "function ThreadListTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
let closure_15 = { LIST: "list", EMPTY: "empty", LOADING: "loading" };
let result = size.fileFinishedImporting("modules/threads/native/components/redesign/ThreadList.tsx");

export default function ThreadList(onCreateThreadPress) {
  let channel;
  let header;
  let onThreadPress;
  ({ channel, onThreadPress } = onCreateThreadPress);
  onCreateThreadPress = onCreateThreadPress.onCreateThreadPress;
  const contentContainerStyle = onCreateThreadPress.contentContainerStyle;
  let canLoadMore;
  let loadMore;
  let tmp = canLoadMore();
  react = tmp;
  let obj = onThreadPress(contentContainerStyle[10]);
  const activeThreads = obj.useActiveThreads(channel);
  const joinedThreadIds = activeThreads.joinedThreadIds;
  const unjoinedThreadIds = activeThreads.unjoinedThreadIds;
  const tmp3 = onThreadPress(contentContainerStyle[10]);
  const useArchivedThreads = tmp3.useArchivedThreads;
  const archivedThreads = useArchivedThreads(channel, onThreadPress(contentContainerStyle[11]).ThreadSortOrder.LATEST_ACTIVITY, loadMore, onThreadPress(contentContainerStyle[12]).ThreadSearchTagSetting.MATCH_SOME);
  const threadIds = archivedThreads.threadIds;
  canLoadMore = archivedThreads.canLoadMore;
  loadMore = archivedThreads.loadMore;
  const loading = archivedThreads.loading;
  let items = [loading, canLoadMore, loadMore];
  const onEndReached = react.useCallback(() => {
    const tmp = !loading && canLoadMore;
    if (tmp) {
      loadMore();
    }
  }, items);
  let items1 = [threadIds, joinedThreadIds, onThreadPress, unjoinedThreadIds];
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let obj3;
    let obj5;
    const items = [];
    if (joinedThreadIds.length > 0) {
      const push2 = items.push;
      const obj2 = { type: "section", title: intl2.formatToPlainString(onThreadPress(contentContainerStyle[13]).t.fcXlhe, obj3) };
      intl2 = onThreadPress(contentContainerStyle[13]).intl;
      obj3 = { count: joinedThreadIds.length };
      push2(obj2);
      const item = arr2.forEach((threadId, index) => {
        const obj = { type: "thread", threadId, start: 0 === index, end: index === joinedThreadIds.length - 1, onPress: onThreadPress };
        return items.push(obj);
      });
    }
    if (unjoinedThreadIds.length > 0) {
      const push3 = items.push;
      const obj4 = { type: "section", title: intl3.formatToPlainString(onThreadPress(contentContainerStyle[13]).t.GHY7yQ, obj5) };
      intl3 = onThreadPress(contentContainerStyle[13]).intl;
      obj5 = { count: unjoinedThreadIds.length };
      push3(obj4);
      const item1 = arr3.forEach((threadId, index) => {
        const obj = { type: "thread", threadId, start: 0 === index, end: index === unjoinedThreadIds.length - 1, onPress: onThreadPress };
        return items.push(obj);
      });
    }
    const arr4 = threadIds;
    if (threadIds.length > 0) {
      let obj = { type: "section", title: intl.string(onThreadPress(contentContainerStyle[13]).t.XsgrjS) };
      const push = items.push;
      intl = onThreadPress(contentContainerStyle[13]).intl;
      push(obj);
      const item2 = arr4.forEach((threadId, index) => {
        const obj = { type: "thread", threadId, start: 0 === index, end: index === threadIds.length - 1, onPress: onThreadPress };
        return items.push(obj);
      });
    }
    return items;
  }, items1);
  let items2 = [memo.length, loading];
  const items3 = [onCreateThreadPress];
  const memo1 = react.useMemo(() => {
    let items2;
    const tmp = loading;
    if (tmp) {
      if (0 === memo.length) {
        const items = [constants.LOADING];
        items2 = items;
      }
      return items2;
    }
    if (0 === memo.length) {
      const items1 = [constants.EMPTY];
      items2 = items1;
    } else {
      items2 = [constants.LIST];
    }
  }, items2);
  const memo2 = react.useMemo(() => {
    let tmp2 = null;
    if (null != onCreateThreadPress) {
      const TableRow = TableRow2.TableRow;
      ({ IconComponent: ThreadPlusIcon.ThreadPlusIcon });
      const Icon = RowButton.RowButton.Icon;
      const intl = intl4.intl;
      tmp2 = <TableRow icon={null} onPress={tmp} label={intl.string(intl4.t.rBIGBL)} start end arrow />;
    }
    return tmp2;
  }, items3);
  const items4 = [, , , , , , , , , ];
  ({ container: arr6[0], center: arr6[1], header: arr6[2], footer: arr6[3] } = tmp);
  items4[4] = onCreateThreadPress;
  items4[5] = memo;
  items4[6] = memo2;
  items4[7] = onEndReached;
  items4[8] = loading;
  items4[9] = contentContainerStyle;
  const callback1 = react.useCallback((arg0, arg1, state, cleanUp) => {
    let footer;
    let intl;
    let tmp13;
    if (constants.EMPTY === arg1) {
      return <EnterExitCrossFadeContainer key={arg0} contentContainerStyle={closure_3.container} state={arg2} cleanUp={arg3}>{null}</EnterExitCrossFadeContainer>;
    } else if (constants.LOADING === arg1) {
      const items = [, ];
      ({ container: arr[0], center: arr[1] } = header);
      return <EnterExitCrossFadeContainer key={arg0} contentContainerStyle={items} state={arg2} cleanUp={arg3}>{null}</EnterExitCrossFadeContainer>;
    } else if (constants.LIST === arg1) {
      ({ data: memo, ListHeaderComponent: memo2, ListHeaderComponentStyle: header.header, renderItem, keyExtractor, onEndReached, onEndReachedThreshold: 0.4, accessibilityLabel: intl.string(intl4.t.B2panI), ListFooterComponent: tmp13, ListFooterComponentStyle: footer, contentContainerStyle });
      const AnimatedFlashList = defaultMVCPConfig.AnimatedFlashList;
      intl = intl4.intl;
      tmp13 = undefined;
      const tmp4 = header;
      if (loading) {
        tmp13 = ThreadListLoadingIndicatorDefault;
      }
      footer = undefined;
      if (loading) {
        footer = tmp4.footer;
      }
      return <tmp3 key={arg0} contentContainerStyle={closure_3.container} state={arg2} cleanUp={arg3}>{null}</tmp3>;
    }
  }, items4);
  let obj2 = { items: memo1, renderItem: callback1, getItemKey: getThreadListStateKey };
  return threadIds(onThreadPress(contentContainerStyle[7]).TransitionGroup, obj2);
};
