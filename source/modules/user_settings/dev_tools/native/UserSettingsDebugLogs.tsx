// Module ID: 14444
// Function ID: 110365
// Name: UserSettingsDebugLogs
// Dependencies: [57, 31, 27, 653, 33, 4130, 689, 5781, 1557, 3831, 587, 12, 4126, 5772, 13953, 1212, 14445, 4098, 14446, 7527, 2]
// Exports: default

// Module 14444 (UserSettingsDebugLogs)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
let require = arg1;
({ RefreshControl: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsxs: closure_7, jsx: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
_createForOfIteratorHelperLoose.wrap = _createForOfIteratorHelperLoose;
let obj1 = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.searchWrap = obj1;
_createForOfIteratorHelperLoose.searchField = { flex: 1 };
_createForOfIteratorHelperLoose.shareButton = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INPUT_BACKGROUND_DEFAULT, marginLeft: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, height: require("InputHeights").InputHeights.MD, width: require("InputHeights").InputHeights.MD, justifyContent: "center", alignItems: "center" };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INPUT_BACKGROUND_DEFAULT, marginLeft: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, height: require("InputHeights").InputHeights.MD, width: require("InputHeights").InputHeights.MD, justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.list = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
const obj3 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.log = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.code = { fontFamily: require("ME").Fonts.CODE_BOLD };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsDebugLogs.tsx");

export default function UserSettingsDebugLogs() {
  let importDefault;
  let tmp4;
  let tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  [tmp4, importDefault] = first(React.useState(0), 2);
  let callback = React.useCallback(() => {
    callback((arg0) => arg0 + 1);
    outer1_1(callback[9]).open({ content: "Debug logs refreshed", key: "debug-logs-refreshed" });
  }, []);
  let Storage = require(callback[10]).Storage;
  let str = "oldest";
  let value = Storage.get("debug-log-sort-order", "oldest");
  if (null != value) {
    str = value;
  }
  const tmp7 = first(React.useState(str), 2);
  first = tmp7[0];
  React = tmp7[1];
  let closure_5 = React.useCallback((arg0) => {
    const Storage = callback2(arg0)(callback[10]).Storage;
    const result = Storage.set("debug-log-sort-order", arg0);
  }, []);
  let items = [first, tmp4];
  const memo = React.useMemo(() => tmp(callback[11]).getAllForDebugPanel("newest" === first), items);
  const tmp10 = first(React.useState(() => {
    const Storage = tmp(callback[10]).Storage;
    let str = "";
    const value = Storage.get("debug-log-query", "");
    if (null != value) {
      str = value;
    }
    return str;
  }), 2);
  const first1 = tmp10[0];
  const tmp12 = first(React.useState(memo), 2);
  callback = tmp12[1];
  let items1 = [memo, first1];
  const effect = React.useEffect(() => {
    if ("" !== first1) {
      const _setTimeout = setTimeout;
      let tmp = setTimeout(() => {
        const regExp = new RegExp(outer1_7, "i");
        outer1_8(outer1_6.filter((category) => {
          let tmp = null != category.category.match(regExp);
          if (!tmp) {
            tmp = null != category.message.match(regExp);
            const str2 = category.message;
          }
          return tmp;
        }));
        const Storage = callback(callback[10]).Storage;
        const result = Storage.set("debug-log-query", outer1_7);
      }, 300);
      return () => clearTimeout(closure_0);
    } else {
      tmp = callback3;
      callback3(memo);
      let Storage = tmp(callback[10]).Storage;
      let result = Storage.set("debug-log-query", first1);
    }
  }, items1);
  let items2 = [tmp];
  let obj = { style: tmp.wrap };
  obj = { style: tmp.searchWrap };
  obj = { style: tmp.searchField };
  const callback1 = React.useCallback((item) => {
    item = item.item;
    let obj = { style: tmp.log };
    obj = { style: first1.code, variant: "text-xs/normal", color: "text-muted" };
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
    const obj1 = { style: first1.code, variant: "text-sm/normal", color: "text-brand", children: "[" + item.category + "]: " };
    const items2 = [callback3(first1(callback[12]).Text, obj1), item.message];
    obj.children = items2;
    items1[1] = first1(first1(callback[12]).Text, obj);
    obj.children = items1;
    return first1(memo, obj, item.index);
  }, items2);
  let obj1 = { size: "md", placeholder: "Filter (regex)", onChange: tmp10[1], defaultValue: first1, trailingIcon: require(callback[14]).FiltersHorizontalIcon };
  const obj2 = {};
  const intl = require(callback[15]).intl;
  obj2.accessibilityLabel = intl.string(require(callback[15]).t["+1H47t"]);
  obj2.onPress = function onPress() {
    let obj = tmp(callback[16]);
    obj = {
      sortOrder: first,
      onRefresh() {
        outer1_2();
        outer2_1(callback[17]).hideActionSheet();
      },
      onSortOrderChanged(arg0) {
        outer1_5(arg0);
        outer2_1(callback[17]).hideActionSheet();
      }
    };
    const result = obj.openUserSettingsDebugLogsFiltersActionSheet(obj);
  };
  obj1.trailingPressableProps = obj2;
  obj.children = callback(require(callback[13]).SearchField, obj1);
  const items3 = [callback(memo, obj), ];
  const tmp3 = first(React.useState(0), 2);
  items3[1] = callback(memo, { style: tmp.shareButton, children: callback(importDefault(callback[18]), {}) });
  obj.children = items3;
  const items4 = [first1(memo, obj), ];
  const obj4 = {};
  const obj5 = {};
  const merged = Object.assign(tmp.list);
  obj5["paddingBottom"] = importDefault(callback[8])().bottom + importDefault(callback[6]).space.PX_16;
  obj4.contentContainerStyle = obj5;
  obj4.data = tmp12[0];
  obj4.renderItem = callback1;
  obj4.refreshControl = callback(closure_5, { refreshing: false, onRefresh: callback });
  items4[1] = callback(require(callback[19]).FlashList, obj4);
  obj.children = items4;
  return first1(memo, obj);
};
