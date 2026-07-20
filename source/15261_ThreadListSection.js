// Module ID: 15261
// Function ID: 115225
// Name: ThreadListSection
// Dependencies: []
// Exports: default

// Module 15261 (ThreadListSection)
function ThreadListSection(title) {
  const obj = { 0: "/assets/images/native/premium/logos", 9223372036854775807: 158, 0: 32, -9223372036854775808: null, style: callback().section, children: title.title.toUpperCase() };
  return jsx(arg1(dependencyMap[4]).Text, obj);
}
function renderItem(item) {
  item = item.item;
  const type = item.type;
  if ("section" === type) {
    let obj = { title: item.title };
    return <ThreadListSection {...obj} />;
  } else if ("thread" === type) {
    obj = {};
    ({ threadId: obj.threadId, onPress: obj.onPress, start: obj.start, end: obj.end } = item);
    return jsx(importDefault(dependencyMap[5]), obj);
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
  const arg1 = cleanUp;
  const state = cleanUp.state;
  const importDefault = state;
  let dependencyMap;
  ({ contentContainerStyle, children } = cleanUp);
  let obj = arg1(dependencyMap[6]);
  let num = 0;
  if (state === arg1(dependencyMap[7]).TransitionStates.MOUNTED) {
    num = 1;
  }
  const sharedValue = obj.useSharedValue(num);
  dependencyMap = sharedValue;
  const fn = function p() {
    let obj = {};
    const value = sharedValue.get();
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = closure_1 === callback(closure_2[7]).TransitionStates.YEETED;
      }
      if (tmp) {
        callback(closure_2[6]).runOnJS(callback)();
        const obj = callback(closure_2[6]);
      }
    };
    obj = { state, TransitionStates: cleanUp(sharedValue[7]).TransitionStates, runOnJS: cleanUp(sharedValue[6]).runOnJS, cleanUp };
    fn.__closure = obj;
    fn.__workletHash = 2519144051135;
    fn.__initData = closure_10;
    obj.opacity = cleanUp(sharedValue[8]).withSpring(value, cleanUp(sharedValue[9]).springStandard, "respect-motion-settings", fn);
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[8]).withSpring, opacity: sharedValue, springStandard: arg1(dependencyMap[9]).springStandard, state, TransitionStates: arg1(dependencyMap[7]).TransitionStates, runOnJS: arg1(dependencyMap[6]).runOnJS, cleanUp };
  fn.__closure = obj;
  fn.__workletHash = 5037750127944;
  fn.__initData = closure_9;
  const items = [sharedValue, state];
  const animatedStyle = arg1(dependencyMap[6]).useAnimatedStyle(fn);
  const effect = React.useEffect(() => {
    let num = 1;
    if (state === cleanUp(sharedValue[7]).TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  }, items);
  obj = { style: items1 };
  const items1 = [absoluteFill.absoluteFill, animatedStyle];
  obj.children = <closure_5 style={contentContainerStyle}>{children}</closure_5>;
  return jsx(importDefault(dependencyMap[6]).View, obj);
}
function getThreadListStateKey(arg0) {
  return arg0;
}
let closure_3 = importAll(dependencyMap[0]);
({ StyleSheet: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const tmp2 = arg1(dependencyMap[1]);
let closure_7 = arg1(dependencyMap[3]).createStyles({ container: { padding: "innocent", avatarMarginRight: "innocent" }, center: {}, header: {}, footer: {}, section: {} });
const set = new Set();
let closure_9 = { code: "function ThreadListTsx1(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}" };
let closure_10 = { code: "function ThreadListTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
let closure_11 = { LIST: "list", EMPTY: "empty", LOADING: "loading" };
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/threads/native/components/redesign/ThreadList.tsx");

export default function ThreadList(onCreateThreadPress) {
  let channel;
  let onThreadPress;
  ({ channel, onThreadPress } = onCreateThreadPress);
  const arg1 = onThreadPress;
  onCreateThreadPress = onCreateThreadPress.onCreateThreadPress;
  const importDefault = onCreateThreadPress;
  const contentContainerStyle = onCreateThreadPress.contentContainerStyle;
  const dependencyMap = contentContainerStyle;
  const tmp = callback();
  const React = tmp;
  let obj = arg1(dependencyMap[10]);
  const activeThreads = obj.useActiveThreads(channel);
  const joinedThreadIds = activeThreads.joinedThreadIds;
  const unjoinedThreadIds = activeThreads.unjoinedThreadIds;
  const archivedThreads = arg1(dependencyMap[10]).useArchivedThreads(channel, arg1(dependencyMap[11]).ThreadSortOrder.LATEST_ACTIVITY, loadMore, arg1(dependencyMap[12]).ThreadSearchTagSetting.MATCH_SOME);
  const threadIds = archivedThreads.threadIds;
  const jsx = threadIds;
  const canLoadMore = archivedThreads.canLoadMore;
  let callback = canLoadMore;
  const loadMore = archivedThreads.loadMore;
  const loading = archivedThreads.loading;
  let closure_9 = loading;
  const items = [loading, canLoadMore, loadMore];
  callback = React.useCallback(() => {
    if (tmp) {
      loadMore();
    }
  }, items);
  let closure_10 = callback;
  const items1 = [threadIds, joinedThreadIds, onThreadPress, unjoinedThreadIds];
  const memo = React.useMemo(() => {
    const items = [];
    const onThreadPress = items;
    if (joinedThreadIds.length > 0) {
      let obj = { type: "section" };
      const intl = onThreadPress(contentContainerStyle[13]).intl;
      obj = { count: joinedThreadIds.length };
      obj.title = intl.formatToPlainString(onThreadPress(contentContainerStyle[13]).t.fcXlhe, obj);
      items.push(obj);
      const item = joinedThreadIds.forEach((threadId) => items.push({ type: "thread", threadId, start: 0 === arg1, end: arg1 === length.length - 1, onPress: items }));
    }
    if (unjoinedThreadIds.length > 0) {
      obj = { type: "section" };
      const intl2 = onThreadPress(contentContainerStyle[13]).intl;
      const obj1 = { count: unjoinedThreadIds.length };
      obj.title = intl2.formatToPlainString(onThreadPress(contentContainerStyle[13]).t.GHY7yQ, obj1);
      items.push(obj);
      const item1 = unjoinedThreadIds.forEach((threadId) => items.push({ type: "thread", threadId, start: 0 === arg1, end: arg1 === length2.length - 1, onPress: items }));
    }
    if (threadIds.length > 0) {
      const obj2 = { type: "section" };
      const intl3 = onThreadPress(contentContainerStyle[13]).intl;
      obj2.title = intl3.string(onThreadPress(contentContainerStyle[13]).t.XsgrjS);
      items.push(obj2);
      const item2 = threadIds.forEach((threadId) => items.push({ type: "thread", threadId, start: 0 === arg1, end: arg1 === length3.length - 1, onPress: items }));
    }
    return items;
  }, items1);
  let closure_11 = memo;
  const items2 = [memo.length, loading];
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
      let obj = {};
      obj = { IconComponent: onThreadPress(contentContainerStyle[16]).ThreadPlusIcon };
      obj.icon = threadIds(onThreadPress(contentContainerStyle[15]).RowButton.Icon, obj);
      obj.onPress = onCreateThreadPress;
      const intl = onThreadPress(contentContainerStyle[13]).intl;
      obj.label = intl.string(onThreadPress(contentContainerStyle[13]).t.rBIGBL);
      tmp = threadIds(onThreadPress(contentContainerStyle[14]).TableRow, obj);
    }
    return tmp;
  }, items3);
  const ThreadListSection = memo2;
  const items4 = [contentContainerStyle, memo, loading, onCreateThreadPress, callback, , , , , ];
  ({ center: arr6[5], container: arr6[6], header: arr6[7], footer: arr6[8] } = tmp);
  items4[9] = memo2;
  const callback1 = React.useCallback((arg0, arg1, state, cleanUp) => {
    if (memo.EMPTY === arg1) {
      let obj = { contentContainerStyle: tmp.container, state, cleanUp };
      obj = { onCreateThreadPress };
      obj.children = threadIds(onCreateThreadPress(contentContainerStyle[17]), obj);
      return threadIds(closure_15, obj, arg0);
    } else if (memo.LOADING === arg1) {
      const obj1 = {};
      const items = [, ];
      ({ container: arr[0], center: arr[1] } = tmp);
      obj1.contentContainerStyle = items;
      obj1.state = state;
      obj1.cleanUp = cleanUp;
      obj1.children = threadIds(onCreateThreadPress(contentContainerStyle[18]), {});
      return threadIds(closure_15, obj1, arg0);
    } else if (memo.LIST === arg1) {
      obj = { contentContainerStyle: tmp.container, state, cleanUp };
      const obj2 = { data: memo, ListHeaderComponent: memo2, ListHeaderComponentStyle: threadIds.header, renderItem: closure_13, keyExtractor: closure_14, onEndReached: callback, onEndReachedThreshold: 0.4 };
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
      return threadIds(closure_15, obj, arg0);
    }
  }, items4);
  obj = { items: memo1, renderItem: callback1, getItemKey: getThreadListStateKey };
  return jsx(arg1(dependencyMap[7]).TransitionGroup, obj);
};
