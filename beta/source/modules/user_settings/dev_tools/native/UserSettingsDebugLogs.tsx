// Module ID: 15117
// Function ID: 15118
// Name: UserSettingsDebugLogs
// Dependencies: [32, 19, 17, 1074, 21, 4836, 576, 6040, 1613, 4528, 510, 7, 4832, 6471, 14536, 1115, 15118, 4800, 15119, 8179, 2]
// Exports: default

// Module 15117 (UserSettingsDebugLogs)
import LogAggregator from "LogAggregator" /* 7 */;
import Storage2 from "Storage" /* 510 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import Text_Text from "Text/Text" /* 4832 */;
import InputTypes from "InputTypes" /* 6040 */;
import UserSettingsDebugLogsActionSheet from "UserSettingsDebugLogsActionSheet" /* 15118 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, item;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let react = react_mod;
({ RefreshControl: hasOwnProperty, View: metroRequire } = react_native);
const Fonts = Constants.Fonts;
({ jsxs: metroImportDefault, jsx: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrap: obj2, searchWrap: obj3, searchField: { flex: 1 }, shareButton: size, list: obj4, log: obj5, code: { fontFamily: Fonts.CODE_BOLD } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center" };
size = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, marginLeft: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, height: InputTypes.InputHeights.MD, width: InputTypes.InputHeights.MD, justifyContent: "center", alignItems: "center" };
obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj5 = { paddingBottom: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsDebugLogs.tsx");

export default function UserSettingsDebugLogs() {
  let SearchField;
  let closure_0;
  let closure_4;
  let intl;
  let items3;
  let items4;
  let obj5;
  let obj6;
  let obj9;
  let onRefresh;
  let sortOrder;
  let tmp6;
  let tmp = closure_9();
  _require = tmp;
  let tmp2 = importDefault;
  const tmp3 = onRefresh;
  let obj = react;
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp4 = sortOrder;
  const tmp5 = sortOrder(react.useState(0), 2);
  [tmp6, importDefault] = tmp5;
  onRefresh = react.useCallback(() => {
    importDefault((arg0) => arg0 + 1);
    const obj = ToastActionCreatorsDefault;
    obj.open({ content: "Debug logs refreshed", key: "debug-logs-refreshed" });
  }, []);
  const tmp8 = _require;
  const useState = react.useState;
  let Storage = require("Storage").Storage;
  let str = Storage.get("debug-log-sort-order", "oldest");
  if (str == null) {
    str = "oldest";
  }
  const tmp4Result = tmp4(useState(str), 2);
  sortOrder = tmp4Result[0];
  react = tmp4Result[1];
  let closure_5 = obj.useCallback((arg0) => {
    closure_4(arg0);
    const Storage = Storage2.Storage;
    const result = Storage.set("debug-log-sort-order", arg0);
  }, []);
  let items = [sortOrder, tmp6];
  const memo = obj.useMemo(() => {
    const obj = LogAggregator;
    return obj.getAllForDebugPanel("newest" === first);
  }, items);
  const tmp4Result3 = tmp4(obj.useState(() => {
    const Storage = closure_0(callback[10]).Storage;
    let str = Storage.get("debug-log-query", "");
    if (str == null) {
      str = "";
    }
    return str;
  }), 2);
  const first1 = tmp4Result3[0];
  const tmp14 = tmp4Result3[1];
  const tmp4Result4 = tmp4(obj.useState(memo), 2);
  let closure_8 = tmp4Result4[1];
  let items1 = [memo, first1];
  const first2 = tmp4Result4[0];
  const effect = obj.useEffect(() => {
    let timeout;
    let tmp;
    if ("" !== first1) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(function() {
        try {
          let tmp = globalThis;
          const _RegExp = RegExp;
          let tmp2 = first1;
          const self = this;
          let str = "i";
          const self2 = this;
          const regExp = new RegExp(first1, "i");
          closure_1_8(memo.filter((category) => {
            const str = category.category;
            let tmp2 = null != str.match(regExp);
            const tmp = regExp;
            if (!tmp2) {
              const str2 = category.message;
              tmp2 = null != str2.match(tmp);
            }
            return tmp2;
          }));
          const Storage = closure_0(callback[10]).Storage;
          let str2 = "debug-log-query";
          const result = Storage.set("debug-log-query", first1);
        } catch (err) {
        }
      }, 300);
      return () => clearTimeout(closure_0);
    } else {
      let tmp2 = closure_8;
      closure_8(memo);
      let Storage = timeout(callback[10]).Storage;
      let str = "debug-log-query";
      let result = Storage.set("debug-log-query", tmp);
    }
  }, items1);
  let items2 = [tmp];
  let obj2 = { style: tmp.wrap, children: items4 };
  let obj3 = { style: tmp.searchWrap, children: items3 };
  let obj4 = { style: tmp.searchField, children: closure_8(SearchField, obj5) };
  const callback1 = obj.useCallback((item) => {
    let items;
    let items1;
    let items2;
    item = item.item;
    const index = item.index;
    const obj = { style: closure_0.log, children: items1 };
    const obj2 = { style: closure_0.code, variant: "text-xs/normal", color: "text-muted", children: items };
    const Text = Text_Text.Text;
    items = [, , ];
    const date = new Date(item.time);
    items[0] = date.toISOString();
    items[1] = " ";
    let str = item.timing;
    const tmp2 = metroRequire;
    if (str == null) {
      str = "";
    }
    items[2] = str;
    items1 = [metroImportDefault(Text, obj2), ];
    const obj3 = { style: closure_0.code, variant: "text-sm/normal", children: items2 };
    const Text2 = tmp4(4832).Text;
    const obj4 = { style: closure_0.code, variant: "text-sm/normal", color: "text-brand", children: "[" + item.category + "]: " };
    const Text3 = tmp4(4832).Text;
    items2 = [metroImportAll(Text3, obj4), item.message];
    items1[1] = metroImportDefault(Text2, obj3);
    return metroImportDefault(tmp2, obj, index);
  }, items2);
  obj5 = { size: "md", placeholder: "Filter (regex)", onChange: tmp14, defaultValue: first1, trailingIcon: tmp8(tmp3[14]).FiltersHorizontalIcon, trailingPressableProps: obj6 };
  SearchField = tmp8(tmp3[13]).SearchField;
  obj6 = {
    accessibilityLabel: intl.string(tmp8(tmp3[15]).t["+1H47t"]),
    onPress() {
      let obj = UserSettingsDebugLogsActionSheet;
      const obj2 = {
        sortOrder,
        onRefresh() {
          onRefresh();
          const obj = require("ActionSheetActionCreators");
          obj.hideActionSheet();
        },
        onSortOrderChanged(arg0) {
          closure_1_5(arg0);
          const obj = require("ActionSheetActionCreators");
          obj.hideActionSheet();
        }
      };
      const result = obj.openUserSettingsDebugLogsFiltersActionSheet(obj2);
    }
  };
  intl = tmp8(tmp3[15]).intl;
  items3 = [closure_8(memo, obj4), ];
  const obj7 = { style: tmp.shareButton, children: closure_8(tmp2(tmp3[18]), {}) };
  items3[1] = closure_8(memo, obj7);
  items4 = [first1(memo, obj3), ];
  const obj8 = { contentContainerStyle: obj9, data: first2, renderItem: callback1, refreshControl: closure_8(closure_5, { refreshing: false, onRefresh }) };
  obj9 = { paddingBottom: bottom + tmp2(tmp3[6]).space.PX_16 };
  const FlashList = tmp8(tmp3[19]).FlashList;
  const merged = Object.assign(tmp.list);
  items4[1] = closure_8(FlashList, obj8);
  return first1(memo, obj2);
};
