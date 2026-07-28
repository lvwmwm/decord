// Module ID: 15505
// Function ID: 118155
// Name: ThreadListSection
// Dependencies: [31, 27, 33, 4165, 4161, 15506, 4026, 4511, 4577, 4581, 11839, 1357, 1359, 1212, 5198, 7614, 11373, 15508, 15509, 6655, 2]
// Exports: default

// Module 15505 (ThreadListSection)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
function ThreadListSection(title) {
  const obj = { style: callback().section, accessibilityRole: "header", variant: "text-xs/bold", color: "text-default", children: title.title.toUpperCase() };
  return jsx(require(4161) /* Text */.Text, { style: callback().section, accessibilityRole: "header", variant: "text-xs/bold", color: "text-default", children: title.title.toUpperCase() });
}
function renderItem(item) {
  item = item.item;
  const type = item.type;
  if ("section" === type) {
    let obj = { title: item.title };
    return <ThreadListSection title={item.title} />;
  } else if ("thread" === type) {
    obj = {};
    ({ threadId: obj.threadId, onPress: obj.onPress, start: obj.start, end: obj.end } = item);
    return jsx(importDefault(15506), {});
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
  ({ contentContainerStyle, children } = cleanUp);
  let obj = cleanUp(sharedValue[6]);
  let num = 0;
  if (state === cleanUp(sharedValue[7]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = obj.useSharedValue(num);
  let fn = function p() {
    let obj = {};
    const value = sharedValue.get();
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = outer1_1 === cleanUp(sharedValue[7]).TransitionStates.YEETED;
      }
      if (tmp) {
        cleanUp(sharedValue[6]).runOnJS(outer1_0)();
        const obj = cleanUp(sharedValue[6]);
      }
    };
    obj = { state, TransitionStates: cleanUp(sharedValue[7]).TransitionStates, runOnJS: cleanUp(sharedValue[6]).runOnJS, cleanUp };
    fn.__closure = obj;
    fn.__workletHash = 2519144051135;
    fn.__initData = outer1_10;
    obj.opacity = cleanUp(sharedValue[8]).withSpring(value, cleanUp(sharedValue[9]).springStandard, "respect-motion-settings", fn);
    return obj;
  };
  obj = { withSpring: cleanUp(sharedValue[8]).withSpring, opacity: sharedValue, springStandard: cleanUp(sharedValue[9]).springStandard, state, TransitionStates: cleanUp(sharedValue[7]).TransitionStates, runOnJS: cleanUp(sharedValue[6]).runOnJS, cleanUp };
  fn.__closure = obj;
  fn.__workletHash = 5037750127944;
  fn.__initData = closure_9;
  const items = [sharedValue, state];
  const animatedStyle = cleanUp(sharedValue[6]).useAnimatedStyle(fn);
  const effect = React.useEffect(() => {
    let num = 1;
    if (state === cleanUp(sharedValue[7]).TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  }, items);
  obj = { style: items1 };
  items1 = [absoluteFill.absoluteFill, animatedStyle];
  obj.children = <closure_5 style={contentContainerStyle}>{children}</closure_5>;
  return jsx(state(sharedValue[6]).View, { style: items1 });
}
function getThreadListStateKey(arg0) {
  return arg0;
}
({ StyleSheet: closure_4, View: closure_5 } = get_ActivityIndicator);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1, flexGrow: 1 }, center: { justifyContent: "center", alignItems: "center" }, header: { marginTop: 24, marginBottom: 10 }, footer: { marginVertical: 16, justifyContent: "center", alignItems: "center" }, section: { marginTop: 16, marginBottom: 8 } });
let set = new Set();
let closure_9 = { code: "function ThreadListTsx1(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}" };
let closure_10 = { code: "function ThreadListTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
let closure_11 = { LIST: "list", EMPTY: "empty", LOADING: "loading" };
let result = set.fileFinishedImporting("modules/threads/native/components/redesign/ThreadList.tsx");

export default function ThreadList(onCreateThreadPress) {
  let channel;
  let onThreadPress;
  ({ channel, onThreadPress } = onCreateThreadPress);
  onCreateThreadPress = onCreateThreadPress.onCreateThreadPress;
  const contentContainerStyle = onCreateThreadPress.contentContainerStyle;
  let tmp = canLoadMore();
  const React = tmp;
  let obj = onThreadPress(contentContainerStyle[10]);
  const activeThreads = obj.useActiveThreads(channel);
  const joinedThreadIds = activeThreads.joinedThreadIds;
  const unjoinedThreadIds = activeThreads.unjoinedThreadIds;
  const archivedThreads = onThreadPress(contentContainerStyle[10]).useArchivedThreads(channel, onThreadPress(contentContainerStyle[11]).ThreadSortOrder.LATEST_ACTIVITY, loadMore, onThreadPress(contentContainerStyle[12]).ThreadSearchTagSetting.MATCH_SOME);
  const threadIds = archivedThreads.threadIds;
  canLoadMore = archivedThreads.canLoadMore;
  loadMore = archivedThreads.loadMore;
  const loading = archivedThreads.loading;
  let items = [loading, canLoadMore, loadMore];
  const callback = React.useCallback(() => {
    if (tmp) {
      loadMore();
    }
  }, items);
  let items1 = [threadIds, joinedThreadIds, onThreadPress, unjoinedThreadIds];
  const memo = React.useMemo(() => {
    const items = [];
    if (joinedThreadIds.length > 0) {
      let obj = { type: "section" };
      const intl = onThreadPress(contentContainerStyle[13]).intl;
      obj = { count: joinedThreadIds.length };
      obj.title = intl.formatToPlainString(onThreadPress(contentContainerStyle[13]).t.fcXlhe, obj);
      items.push(obj);
      const item = joinedThreadIds.forEach((threadId) => items.push({ type: "thread", threadId, start: 0 === arg1, end: arg1 === outer1_4.length - 1, onPress: items }));
    }
    if (unjoinedThreadIds.length > 0) {
      obj = { type: "section" };
      const intl2 = onThreadPress(contentContainerStyle[13]).intl;
      const obj1 = { count: unjoinedThreadIds.length };
      obj.title = intl2.formatToPlainString(onThreadPress(contentContainerStyle[13]).t.GHY7yQ, obj1);
      items.push(obj);
      const item1 = unjoinedThreadIds.forEach((threadId) => items.push({ type: "thread", threadId, start: 0 === arg1, end: arg1 === outer1_5.length - 1, onPress: items }));
    }
    if (threadIds.length > 0) {
      const obj2 = { type: "section" };
      const intl3 = onThreadPress(contentContainerStyle[13]).intl;
      obj2.title = intl3.string(onThreadPress(contentContainerStyle[13]).t.XsgrjS);
      items.push(obj2);
      const item2 = threadIds.forEach((threadId) => items.push({ type: "thread", threadId, start: 0 === arg1, end: arg1 === outer1_6.length - 1, onPress: items }));
    }
    return items;
  }, items1);
  let items2 = [memo.length, loading];
  const items3 = [onCreateThreadPress];
  const memo1 = React.useMemo(() => {
    if (loading) {
      if (0 === memo.length) {
        const items = [memo.LOADING];
        let items2 = items;
      }
      return items2;
    }
    if (0 === memo.length) {
      const items1 = [memo.EMPTY];
      items2 = items1;
    } else {
      items2 = [memo.LIST];
    }
  }, items2);
  const memo2 = React.useMemo(() => {
    let tmp = null;
    if (null != onCreateThreadPress) {
      let obj = { icon: null, onPress: null, label: null, start: true, end: true, arrow: true };
      obj = { IconComponent: onThreadPress(contentContainerStyle[16]).ThreadPlusIcon };
      obj.icon = threadIds(onThreadPress(contentContainerStyle[15]).RowButton.Icon, obj);
      obj.onPress = onCreateThreadPress;
      const intl = onThreadPress(contentContainerStyle[13]).intl;
      obj.label = intl.string(onThreadPress(contentContainerStyle[13]).t.rBIGBL);
      tmp = threadIds(onThreadPress(contentContainerStyle[14]).TableRow, obj);
    }
    return tmp;
  }, items3);
  const items4 = [, , , , , , , , , ];
  ({ container: arr6[0], center: arr6[1], header: arr6[2], footer: arr6[3] } = tmp);
  items4[4] = onCreateThreadPress;
  items4[5] = memo;
  items4[6] = memo2;
  items4[7] = callback;
  items4[8] = loading;
  items4[9] = contentContainerStyle;
  const callback1 = React.useCallback((arg0, arg1, state, cleanUp) => {
    if (memo.EMPTY === arg1) {
      let obj = { contentContainerStyle: tmp.container, state, cleanUp };
      obj = { onCreateThreadPress };
      obj.children = threadIds(onCreateThreadPress(contentContainerStyle[17]), obj);
      return threadIds(outer1_15, obj, arg0);
    } else if (memo.LOADING === arg1) {
      const obj1 = {};
      const items = [, ];
      ({ container: arr[0], center: arr[1] } = tmp);
      obj1.contentContainerStyle = items;
      obj1.state = state;
      obj1.cleanUp = cleanUp;
      obj1.children = threadIds(onCreateThreadPress(contentContainerStyle[18]), {});
      return threadIds(outer1_15, obj1, arg0);
    } else if (memo.LIST === arg1) {
      obj = { contentContainerStyle: tmp.container, state, cleanUp };
      const obj2 = { data: memo, ListHeaderComponent: memo2, ListHeaderComponentStyle: threadIds.header, renderItem: outer1_13, keyExtractor: outer1_14, onEndReached: callback, onEndReachedThreshold: 0.4 };
      const intl = onThreadPress(contentContainerStyle[13]).intl;
      obj2.accessibilityLabel = intl.string(onThreadPress(contentContainerStyle[13]).t.B2panI);
      let tmp13;
      if (loading) {
        tmp13 = onCreateThreadPress(contentContainerStyle[18]);
      }
      obj2.ListFooterComponent = tmp13;
      let footer;
      if (loading) {
        footer = tmp.footer;
      }
      obj2.ListFooterComponentStyle = footer;
      obj2.contentContainerStyle = contentContainerStyle;
      obj.children = threadIds(onThreadPress(contentContainerStyle[19]).AnimatedFlashList, obj2);
      return threadIds(outer1_15, obj, arg0);
    }
  }, items4);
  obj = { items: memo1, renderItem: callback1, getItemKey: getThreadListStateKey };
  return threadIds(onThreadPress(contentContainerStyle[7]).TransitionGroup, obj);
};
