// Module ID: 19051
// Function ID: 19052
// Name: ThreadList
// Dependencies: [19, 17, 21, 5141, 5761, 19052, 1652, 5207, 5771, 5772, 1705, 14585, 4999, 5001, 1113, 7116, 8319, 14015, 19054, 19055, 7430, 2]
// Exports: default

// Module 19051 (ThreadList)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1113 */;
import native from "native" /* 5207 */;
import Text_Text from "Text/Text" /* 5761 */;
import TableRow2 from "TableRow" /* 7116 */;
import defaultMVCPConfig from "defaultMVCPConfig" /* 7430 */;
import RowButton from "RowButton" /* 8319 */;
import ThreadPlusIcon from "ThreadPlusIcon" /* 14015 */;
import ThreadListTableRowDefault from "ThreadListTableRow" /* 19052 */;
import ThreadListLoadingIndicatorDefault from "ThreadListLoadingIndicator" /* 19055 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
function ThreadListSection(title) {
  const str = title.title;
  const Text = Text_Text.Text;
  return <Text style={closure_7().section} accessibilityRole="header" variant="body-xs/semibold" color="text-default">{str.toUpperCase()}</Text>;
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
function EnterExitCrossFadeContainer(state) {
  let children;
  let cleanUp;
  let contentContainerStyle;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  state = state.state;
  let sharedValue;
  let tmp = state;
  ({ contentContainerStyle, cleanUp, children } = state);
  let tmp3 = state(1652);
  const useSharedValue = tmp3.useSharedValue;
  let num = 0;
  if (state === state(5207).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let items = [closure_13, , , , , , , , ];
  const useAnimatedStyle = tmp(1652).useAnimatedStyle;
  tmp(1652);
  items[1] = tmp(5771).withSpring;
  items[2] = sharedValue;
  items[3] = tmp(5772).springStandard;
  items[4] = closure_12;
  items[5] = state;
  items[6] = tmp(5207).TransitionStates;
  items[7] = tmp(1705).scheduleOnRN;
  items[8] = cleanUp;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
  class ThreadListTsx2 {
    constructor() {
      let _undefined;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp = c0;
      const value = _undefined.get();
      const items = [c3, c4, c5, c6, c7];
      c0 = undefined;
      _undefined = undefined;
      const tmp3 = c2;
      c2 = undefined;
      c3 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8] = items;
      const obj = { opacity: tmp(value, tmp3, "respect-motion-settings", ThreadListTsx1) };
      class ThreadListTsx1 {
        constructor(arg0) {
          tmp = arg0;
          if (tmp) {
            tmp2 = closure_0;
            tmp3 = closure_1;
            tmp = closure_0 === closure_1.YEETED;
          }
          if (tmp) {
            tmp4 = closure_2;
            tmp5 = closure_3;
            tmp6 = closure_2(closure_3);
          }
          return;
        }
      }
      const items1 = [tmp5, tmp6, tmp7, tmp8];
      ThreadListTsx1.__closure = items1;
      ThreadListTsx1.__workletHash = 18145764964;
      ThreadListTsx1.__initData = tmp4;
      return obj;
    }
  }
  let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
  ThreadListTsx2.__closure = items1;
  ThreadListTsx2.__workletHash = 5121386856921;
  ThreadListTsx2.__initData = tmp6;
  const items2 = [sharedValue, state];
  const animatedStyle = useAnimatedStyle(ThreadListTsx2);
  const effect = react.useEffect(() => {
    let num = 1;
    set = sharedValue.set;
    if (state === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = set(num);
  }, items2);
  const items3 = [absoluteFill.absoluteFill, animatedStyle];
  const View = sharedValue(1652).View;
  return <View style={items3}>{null}</View>;
}
function getThreadListStateKey(arg0) {
  return arg0;
}
let react = react_mod;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ container: { flex: 1, flexGrow: 1 }, center: { justifyContent: "center", alignItems: "center" }, header: { marginTop: 24, marginBottom: 10 }, footer: { marginVertical: 16, justifyContent: "center", alignItems: "center" }, section: { marginTop: 16, marginBottom: 8 } });
let set = new Set();
let closure_12 = { code: "(function ThreadListTsx1(finished){let[state,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;if(finished&&state===TransitionStates.YEETED){scheduleOnRN(cleanUp);}})" };
let closure_13 = { code: "(function ThreadListTsx2(){let[withSpring,opacity,springStandard,_worklet_18145764964_init_data,state,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function ThreadListTsx1Factory([_worklet_18145764964_init_data,state,TransitionStates,scheduleOnRN,cleanUp]){const ThreadListTsx1=function(finished){if(finished&&state===TransitionStates.YEETED){scheduleOnRN(cleanUp);}};ThreadListTsx1.__closure=[state,TransitionStates,scheduleOnRN,cleanUp];ThreadListTsx1.__workletHash=18145764964;ThreadListTsx1.__initData=_worklet_18145764964_init_data;return ThreadListTsx1;}([_worklet_18145764964_init_data,state,TransitionStates,scheduleOnRN,cleanUp]))};})" };
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
  let obj = onThreadPress(contentContainerStyle[11]);
  const activeThreads = obj.useActiveThreads(channel);
  const joinedThreadIds = activeThreads.joinedThreadIds;
  const unjoinedThreadIds = activeThreads.unjoinedThreadIds;
  const tmp3 = onThreadPress(contentContainerStyle[11]);
  const useArchivedThreads = tmp3.useArchivedThreads;
  const archivedThreads = useArchivedThreads(channel, onThreadPress(contentContainerStyle[12]).ThreadSortOrder.LATEST_ACTIVITY, loadMore, onThreadPress(contentContainerStyle[13]).ThreadSearchTagSetting.MATCH_SOME);
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
      const obj2 = { type: "section", title: intl2.formatToPlainString(onThreadPress(contentContainerStyle[14]).t.fcXlhe, obj3) };
      intl2 = onThreadPress(contentContainerStyle[14]).intl;
      obj3 = { count: joinedThreadIds.length };
      push2(obj2);
      const item = arr2.forEach((threadId, index) => {
        const obj = { type: "thread", threadId, start: 0 === index, end: index === joinedThreadIds.length - 1, onPress: onThreadPress };
        return items.push(obj);
      });
    }
    if (unjoinedThreadIds.length > 0) {
      const push3 = items.push;
      const obj4 = { type: "section", title: intl3.formatToPlainString(onThreadPress(contentContainerStyle[14]).t.GHY7yQ, obj5) };
      intl3 = onThreadPress(contentContainerStyle[14]).intl;
      obj5 = { count: unjoinedThreadIds.length };
      push3(obj4);
      const item1 = arr3.forEach((threadId, index) => {
        const obj = { type: "thread", threadId, start: 0 === index, end: index === unjoinedThreadIds.length - 1, onPress: onThreadPress };
        return items.push(obj);
      });
    }
    const arr4 = threadIds;
    if (threadIds.length > 0) {
      let obj = { type: "section", title: intl.string(onThreadPress(contentContainerStyle[14]).t.XsgrjS) };
      const push = items.push;
      intl = onThreadPress(contentContainerStyle[14]).intl;
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
