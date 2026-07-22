// Module ID: 9427
// Function ID: 73386
// Name: Tab
// Dependencies: []
// Exports: default

// Module 9427 (Tab)
function Tab(index) {
  let children;
  let isSelected;
  let onSelect;
  let tabStyle;
  let tabStyleActive;
  let tabStyleSelected;
  index = index.index;
  const arg1 = index;
  ({ isSelected, onSelect } = index);
  const dependencyMap = onSelect;
  ({ children, tabStyle, tabStyleActive, tabStyleSelected } = index);
  const tmp = callback2();
  const tmp2 = callback(React.useState(() => false), 2);
  const first = tmp2[0];
  let callback = tmp4;
  const items = [tmp2[1]];
  const items1 = [tmp2[1]];
  callback = React.useCallback(() => tmp4(true), items);
  const items2 = [onSelect, index];
  const callback1 = React.useCallback(() => tmp4(false), items1);
  let obj = { accessibilityRole: "tab", onPressIn: callback, onPressOut: callback1, onPress: React.useCallback(() => onSelect(index), items2) };
  obj = {};
  const items3 = [tmp.tab, tabStyle, , , , ];
  let tabSelected = null;
  if (isSelected) {
    tabSelected = tmp.tabSelected;
  }
  items3[2] = tabSelected;
  let tabActive = null;
  if (first) {
    tabActive = tmp.tabActive;
  }
  items3[3] = tabActive;
  let tmp13 = null;
  if (isSelected) {
    tmp13 = tabStyleSelected;
  }
  items3[4] = tmp13;
  let tmp14 = null;
  if (first) {
    tmp14 = tabStyleActive;
  }
  items3[5] = tmp14;
  obj.style = items3;
  obj.children = children;
  obj.children = <closure_4 {...obj} />;
  return <closure_5 {...obj} />;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
({ View: closure_4, TouchableWithoutFeedback: closure_5, FlatList: closure_6 } = arg1(dependencyMap[2]));
const NOOP = arg1(dependencyMap[3]).NOOP;
const jsx = arg1(dependencyMap[4]).jsx;
let obj = arg1(dependencyMap[5]);
obj = { innerContainer: {}, tab: { <string:3142647812>: "r", <string:2700829668>: 45, <string:2717012322>: 34.5, <string:3562099553>: null, <string:3936379564>: "5048f3c6d8b18fc7809b7e99f1c62a70", <string:1627791185>: "stamp-wave", <string:4138160778>: "png", <string:1396401693>: 16, <string:2874563768>: -16, <string:1650000465>: "absolute" }, tabActive: { backgroundColor: "rgba(0,0,0,0.1)" } };
obj = { borderBottomColor: importDefault(dependencyMap[6]).unsafe_rawColors.BRAND_600 };
obj.tabSelected = obj;
obj.container = { flex: 0 };
let closure_9 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("components_native/common/TabBar.tsx");

export default function TabBar(tabIndexSelected) {
  let containerStyle;
  let initialNumTabsToRender;
  let tabs;
  tabIndexSelected = tabIndexSelected.tabIndexSelected;
  const arg1 = tabIndexSelected;
  const tabStyle = tabIndexSelected.tabStyle;
  const dependencyMap = tabStyle;
  const tabStyleActive = tabIndexSelected.tabStyleActive;
  let closure_2 = tabStyleActive;
  const tabStyleSelected = tabIndexSelected.tabStyleSelected;
  const React = tabStyleSelected;
  const onSelect = tabIndexSelected.onSelect;
  let flag = tabIndexSelected.hideHorizontalScrollbar;
  ({ initialNumTabsToRender, tabs, containerStyle } = tabIndexSelected);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = tabIndexSelected.scrollToSelectedIndex;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let ref;
  let closure_7;
  let jsx;
  const tmp = callback2();
  ref = React.useRef(null);
  closure_7 = React.useRef(tabIndexSelected);
  const items = [tabIndexSelected];
  const effect = React.useEffect(() => {
    closure_7.current = tabIndexSelected;
  }, items);
  const items1 = [ref, onSelect];
  const callback = React.useCallback((index) => {
    onSelect(index);
    const current = ref.current;
    if (null != current) {
      const obj = { index };
      current.scrollToIndex(obj);
    }
  }, items1);
  jsx = callback;
  const items2 = [tabIndexSelected, tabStyle, tabStyleActive, tabStyleSelected, flag2, onSelect, callback];
  const callback1 = React.useCallback((arg0, arg1) => "tab-" + arg1, []);
  const callback2 = React.useCallback((children) => {
    const index = children.index;
    return callback(closure_10, { index, isSelected: index === tabIndexSelected, tabStyle, tabStyleActive, tabStyleSelected, onSelect: flag2 ? callback : onSelect, children: children.item });
  }, items2);
  let obj = { style: tmp.container, accessibilityRole: "tablist" };
  const memo = React.useMemo(() => {
    const Gesture = tabIndexSelected(tabStyle[7]).Gesture;
    return Gesture.Native().disallowInterruption(true);
  }, []);
  const intl = arg1(dependencyMap[8]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[8]).t.t1qXlK);
  obj = { gesture: memo };
  obj = {
    ref: (tabIndexSelected) => {
      const first = tabStyleActive(tabStyleSelected.useState(() => arg0), 1)[0];
      const tabStyle = first;
      const items = [first];
      const effect = tabStyleSelected.useEffect(() => {
        const timeout = setTimeout(() => {
          if (ref2.current === closure_1) {
            const current = ref.current;
            if (null != current) {
              const obj = { index: closure_1, viewPosition: 1 };
              current.scrollToIndex(obj);
            }
          }
        }, 500);
        return () => {
          clearTimeout(closure_0);
        };
      }, items);
      return ref;
    }(tabIndexSelected),
    contentContainerStyle: items3,
    horizontal: true,
    data: tabs,
    renderItem: callback2,
    keyExtractor: callback1,
    initialNumToRender: initialNumTabsToRender,
    onScrollToIndexFailed: closure_7
  };
  const items3 = [containerStyle, tmp.innerContainer];
  obj.showsHorizontalScrollIndicator = !flag;
  obj.children = <ref {...obj} />;
  obj.children = jsx(arg1(dependencyMap[7]).GestureDetector, obj);
  return <onSelect {...obj} />;
};
