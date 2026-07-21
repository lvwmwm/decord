// Module ID: 14272
// Function ID: 107846
// Name: UserSettingsDebugLogs
// Dependencies: []
// Exports: default

// Module 14272 (UserSettingsDebugLogs)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ RefreshControl: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsxs: closure_7, jsx: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.wrap = obj;
const tmp3 = arg1(dependencyMap[4]);
obj.searchWrap = { padding: importDefault(dependencyMap[6]).space.PX_16 };
const obj1 = { padding: importDefault(dependencyMap[6]).space.PX_16 };
obj.shareButton = { backgroundColor: importDefault(dependencyMap[6]).colors.INPUT_BACKGROUND_DEFAULT, marginLeft: importDefault(dependencyMap[6]).space.PX_8, borderRadius: importDefault(dependencyMap[6]).radii.md, height: arg1(dependencyMap[7]).InputHeights.MD, width: arg1(dependencyMap[7]).InputHeights.MD, justifyContent: "center", alignItems: "center" };
const obj2 = { backgroundColor: importDefault(dependencyMap[6]).colors.INPUT_BACKGROUND_DEFAULT, marginLeft: importDefault(dependencyMap[6]).space.PX_8, borderRadius: importDefault(dependencyMap[6]).radii.md, height: arg1(dependencyMap[7]).InputHeights.MD, width: arg1(dependencyMap[7]).InputHeights.MD, justifyContent: "center", alignItems: "center" };
obj.list = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
const obj3 = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
obj.log = { paddingBottom: importDefault(dependencyMap[6]).space.PX_16 };
obj.code = { fontFamily: arg1(dependencyMap[3]).Fonts.CODE_BOLD };
let closure_9 = obj.createStyles(obj);
const obj4 = { paddingBottom: importDefault(dependencyMap[6]).space.PX_16 };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsDebugLogs.tsx");

export default function UserSettingsDebugLogs() {
  let tmp4;
  const tmp = callback3();
  const arg1 = tmp;
  [tmp4, closure_1] = callback(React.useState(0), 2);
  let callback = React.useCallback(() => {
    callback((arg0) => arg0 + 1);
    callback(callback[9]).open({});
  }, []);
  const dependencyMap = callback;
  const Storage = arg1(dependencyMap[10]).Storage;
  let str = "oldest";
  const value = Storage.get("debug-log-sort-order", "oldest");
  if (null != value) {
    str = value;
  }
  const tmp7 = callback(React.useState(str), 2);
  const first = tmp7[0];
  callback = first;
  const React = tmp7[1];
  let closure_5 = React.useCallback((arg0) => {
    const Storage = callback2(arg0)(callback[10]).Storage;
    const result = Storage.set("debug-log-sort-order", arg0);
  }, []);
  const items = [first, tmp4];
  const memo = React.useMemo(() => tmp(callback[11]).getAllForDebugPanel("newest" === first), items);
  const tmp10 = callback(React.useState(() => {
    const Storage = tmp(callback[10]).Storage;
    let str = "";
    const value = Storage.get("debug-log-query", "");
    if (null != value) {
      str = value;
    }
    return str;
  }), 2);
  const first1 = tmp10[0];
  const tmp12 = callback(React.useState(memo), 2);
  const callback2 = tmp12[1];
  const items1 = [memo, first1];
  const effect = React.useEffect(() => {
    if ("" !== first1) {
      const _setTimeout = setTimeout;
      let tmp = setTimeout(() => {
        const regExp = new RegExp(closure_7, "i");
        const callback = regExp;
        callback2(closure_6.filter((category) => {
          let tmp = null != category.category.match(regExp);
          if (!tmp) {
            tmp = null != category.message.match(regExp);
            const str2 = category.message;
          }
          return tmp;
        }));
        const Storage = callback(closure_2[10]).Storage;
        const result = Storage.set("debug-log-query", closure_7);
      }, 300);
      return () => clearTimeout(closure_0);
    } else {
      tmp = callback3;
      callback3(memo);
      const Storage = tmp(callback[10]).Storage;
      const result = Storage.set("debug-log-query", first1);
    }
  }, items1);
  const items2 = [tmp];
  let obj = { style: tmp.wrap };
  obj = { style: tmp.searchWrap };
  const callback1 = React.useCallback((item) => {
    item = item.item;
    let obj = { style: tmp.log };
    obj = { delete: null, dispatch: null, raw: null, style: first1.code };
    const items = [new Date(item.time).toISOString(), " ", ];
    const timing = item.timing;
    let str = "";
    if (null != timing) {
      str = timing;
    }
    items[2] = str;
    obj.children = items;
    const items1 = [first1(first1(callback[12]).Text, obj), ];
    obj = { style: tmp.code, variant: "text-sm/normal" };
    const obj1 = { style: first1.code, children: "[" + item.category + "]: " };
    const items2 = [callback3(first1(callback[12]).Text, obj1), item.message];
    obj.children = items2;
    items1[1] = first1(first1(callback[12]).Text, obj);
    obj.children = items1;
    return first1(memo, obj, item.index);
  }, items2);
  obj = { "Null": "useStateFromStores", "Null": "Array", onChange: tmp10[1], defaultValue: first1, trailingIcon: arg1(dependencyMap[14]).FiltersHorizontalIcon };
  const obj1 = {};
  const intl = arg1(dependencyMap[15]).intl;
  obj1.accessibilityLabel = intl.string(arg1(dependencyMap[15]).t.+1H47t);
  obj1.onPress = function onPress() {
    let obj = tmp(callback[16]);
    obj = {
      sortOrder: first,
      onRefresh() {
        callback2();
        callback(callback2[17]).hideActionSheet();
      },
      onSortOrderChanged(arg0) {
        callback3(arg0);
        callback(closure_2[17]).hideActionSheet();
      }
    };
    const result = obj.openUserSettingsDebugLogsFiltersActionSheet(obj);
  };
  obj.trailingPressableProps = obj1;
  const items3 = [callback2(arg1(dependencyMap[13]).SearchField, obj), ];
  const tmp3 = callback(React.useState(0), 2);
  items3[1] = callback2(memo, { style: tmp.shareButton, children: callback2(importDefault(dependencyMap[18]), {}) });
  obj.children = items3;
  const items4 = [first1(memo, obj), ];
  const obj3 = {};
  const obj4 = {};
  const merged = Object.assign(tmp.list);
  obj4["paddingBottom"] = importDefault(dependencyMap[8])().bottom + importDefault(dependencyMap[6]).space.PX_16;
  obj3.contentContainerStyle = obj4;
  obj3.data = tmp12[0];
  obj3.renderItem = callback1;
  obj3.refreshControl = callback2(closure_5, { refreshing: false, onRefresh: callback });
  items4[1] = callback2(arg1(dependencyMap[19]).FlashList, obj3);
  obj.children = items4;
  return first1(memo, obj);
};
