// Module ID: 15120
// Function ID: 15121
// Name: UserSettingsStartupTimings
// Dependencies: [5, 32, 19, 17, 1346, 1074, 21, 4836, 576, 4832, 4699, 1613, 9653, 504, 9, 6895, 7809, 8179, 5279, 5999, 5916, 1347, 5917, 12470, 2]
// Exports: default

// Module 15120 (UserSettingsStartupTimings)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import TableCheckboxRow from "TableCheckboxRow" /* 5916 */;
import TableRow4 from "TableRow" /* 5917 */;
import TableRowGroup6 from "TableRowGroup" /* 5999 */;
import serializeAppStartLogsDefault from "serializeAppStartLogs" /* 9653 */;
import ShareIcon from "ShareIcon" /* 12470 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1346 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import react_native2 from "react-native" /* 4699 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c3;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
function Code(arg0) {
  let children;
  let color;
  ({ children, color } = arg0);
  const obj = { variant: "text-sm/normal", color, lineClamp: 1, style: closure_11().code, children };
  return metroImportAll(Text_Text.Text, obj);
}
let react = react_mod;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrap: obj2, code: { fontFamily: Fonts.CODE_BOLD }, border: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { height: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginBottom: 8 };
let closure_11 = createStyles(obj);
const appStartedTimestamp = react_native2.getAppStartedTimestamp();
let result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsStartupTimings.tsx");

export default function UserSettingsStartupTimings() {
  let FlashList;
  let alertStartupMetrics;
  let border;
  let checked;
  let closure_2;
  let closure_4;
  let first1;
  let num;
  let obj5;
  let obj6;
  let tmp = closure_11();
  _require = tmp;
  const tmp3 = dependencyMap;
  let obj = react;
  const bottom = checked(1613)().bottom;
  const tmp2 = checked;
  [checked, dependencyMap] = react.useState(true);
  [first1, _slicedToArray] = react.useState(true);
  const useResult = react.use(num);
  react = useResult;
  let items = [useResult, checked, first1];
  const memo = react.useMemo(() => {
    const str = serializeAppStartLogsDefault(react, !first, first1);
    return str.split("\n");
  }, items);
  let obj2 = require("get initialized");
  let items1 = [alertStartupMetrics];
  checked = obj2.useStateFromStores(items1, () => alertStartupMetrics.alertStartupMetrics);
  alertStartupMetrics = checked(9).loadIndex.start - useResult;
  const diff = checked(9).loadMiniCache.end - checked(9).loadMiniCache.start;
  let closure_8 = diff + (checked(9).parseStorage.end - checked(9).parseStorage.start);
  let closure_9 = checked(9).loadLazyCache.end - checked(9).loadLazyCache.start;
  let closure_10 = checked(9).ready.end - checked(9).ready.start;
  closure_11 = Math.ceil(checked(9).renderLatestMessages.importTime);
  let obj3 = require("TTIAnalyticsUtils");
  const lastTrackedAppUiViewed2Properties = obj3.getLastTrackedAppUiViewed2Properties();
  num = undefined;
  const tmp10 = _require;
  if (lastTrackedAppUiViewed2Properties != null) {
    num = lastTrackedAppUiViewed2Properties.time_first_contentful_paint;
  }
  if (num == null) {
    num = 0;
  }
  const onPress = obj.useCallback(first1(function*(arg0, value) {
    let closure_0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let tmp;
        let message;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            tmp = undefined;
            message = undefined;
            const obj4 = message(c2[10]);
            c2 = 1;
            c3 = 1;
            const obj5 = { value: obj4.getAppFirstVisibleTimestamp(), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          tmp = value;
          message = message(c2[12])(tmp);
          const obj7 = { message };
          const obj = tmp(c2[16]);
          obj.showShareActionSheet(obj7, "Startup Timing");
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp16) {
        c3 = 3;
        throw tmp16;
      }
    }
  }), []);
  let obj4 = { style: tmp.wrap, children: closure_8(FlashList, obj5) };
  obj5 = {
    contentContainerStyle: obj6,
    ListHeaderComponent() {
      let TableRow2;
      let TableRow3;
      let items;
      let items1;
      let items10;
      let items11;
      let items12;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let items8;
      let items9;
      let obj18;
      let obj19;
      let obj22;
      let obj23;
      let obj28;
      let obj3;
      let result;
      let result1;
      let result2;
      let result3;
      let result4;
      let obj = { spacing: 16, style: { padding: 16 }, children: items };
      const Stack = Stack_Stack.Stack;
      let obj2 = { title: "Performance testing", hasIcons: false, children: metroImportAll(TableCheckboxRow.TableCheckboxRow, obj3) };
      const TableRowGroup = TableRowGroup6.TableRowGroup;
      obj3 = {
        label: "Show start times at launch",
        onPress() {
          const obj = border(closure_2[21]);
          const obj2 = { alertStartupMetrics: !checked };
          return obj.setDeveloperOptionSettings(obj2);
        },
        checked
      };
      items = [metroImportAll(TableRowGroup, obj2), , , , ];
      const TableRowGroup2 = TableRowGroup6.TableRowGroup;
      const obj4 = { children: items1 };
      const obj5 = { color: "text-brand", children: "" + result + "s (" + Math.round(alertStartupMetrics / num * 100) + "%)" };
      result = alertStartupMetrics / 1000;
      const TableRow = TableRow4.TableRow;
      items1 = ["Native: ", metroImportAll(Code, obj5)];
      const items2 = [React4(Code, obj4), , , , , , , ];
      const obj6 = { children: items3 };
      const obj7 = { color: "text-brand", children: "" + result1 + "s (" + Math.round(closure_11 / num * 100) + "%)" };
      result1 = closure_11 / 1000;
      items3 = ["JS Imports: ", metroImportAll(Code, obj7)];
      items2[1] = React4(Code, obj6);
      const obj8 = { children: items4 };
      const obj9 = { color: "text-brand", children: "" + result2 + "s (" + Math.round(metroImportAll / num * 100) + "%)" };
      result2 = metroImportAll / 1000;
      items4 = ["Mini Cache: ", metroImportAll(Code, obj9)];
      items2[2] = React4(Code, obj8);
      const obj10 = { children: items5 };
      const obj11 = { color: "text-brand", children: "" + result3 + "s (" + Math.round(c9 / num * 100) + "%)" };
      result3 = c9 / 1000;
      items5 = ["Lazy Cache: ", metroImportAll(Code, obj11)];
      items2[3] = React4(Code, obj10);
      const obj12 = { children: items6 };
      const obj13 = { color: "text-brand", children: "" + result4 + "s (" + Math.round(c10 / num * 100) + "%)" };
      result4 = c10 / 1000;
      items6 = ["Ready: ", metroImportAll(Code, obj13)];
      items2[4] = React4(Code, obj12);
      let str = "";
      if (null != num) {
        str = "";
        if (num > 0) {
          str = `${tmp8 / 1000}s`;
        }
      }
      const obj14 = { children: items7 };
      items7 = ["TTI (first contentful paint): ", metroImportAll(Code, { color: "text-brand", children: str })];
      items2[5] = React4(Code, obj14);
      let prop;
      if (lastTrackedAppUiViewed2Properties != null) {
        prop = tmp13.time_display_messages_with_cache_end;
      }
      let str3 = "";
      if (null != prop) {
        str3 = "";
        if (prop > 0) {
          str3 = `${tmp14 / 1000}s`;
        }
      }
      const obj15 = { children: items8 };
      items8 = ["Cached Messages Render: ", metroImportAll(Code, { color: "text-brand", children: str3 })];
      items2[6] = React4(Code, obj15);
      let prop1;
      if (lastTrackedAppUiViewed2Properties != null) {
        prop1 = tmp13.time_display_latest_messages_end;
      }
      let str5 = "";
      if (null != prop1) {
        str5 = "";
        if (prop1 > 0) {
          str5 = `${tmp15 / 1000}s`;
        }
      }
      const obj16 = { children: items12 };
      const obj17 = { title: "Key Cold Start Times", hasIcons: false, children: metroImportAll(TableRow, obj18) };
      obj18 = { label: React4(authStore, obj19) };
      obj19 = { children: items2 };
      const obj20 = { children: items9 };
      items9 = ["Latest Messages Render: ", metroImportAll(Code, { color: "text-brand", children: str5 })];
      items2[7] = React4(Code, obj20);
      items[1] = metroImportAll(TableRowGroup2, obj17);
      const obj21 = { title: "Legend", hasIcons: false, children: metroImportAll(TableRow2, obj22) };
      const TableRowGroup3 = tmp3(5999).TableRowGroup;
      obj22 = { label: React4(authStore, obj23) };
      obj23 = { children: items10 };
      TableRow2 = tmp3(5917).TableRow;
      items10 = [metroImportAll(Code, { children: "\u2615 - Java / Kotlin" }), metroImportAll(Code, { children: "\u{1F3A8} - React render" }), metroImportAll(Code, { children: "\u{1F4BE} - CacheStore" }), metroImportAll(Code, { children: "\u{1F9A5} - Slow Store Update / Handler" }), metroImportAll(Code, { children: "\u{1F3C3} - Startup Event" }), metroImportAll(Code, { children: "\u{1F310} - Socket Event" })];
      items[2] = metroImportAll(TableRowGroup3, obj21);
      const obj24 = { title: "Detailed Times", hasIcons: false, children: items11 };
      const TableRowGroup4 = tmp3(5999).TableRowGroup;
      items11 = [, ];
      const obj25 = {
        label: "Hide the Noise",
        onPress() {
          return closure_1_2((arg0) => !arg0);
        },
        checked
      };
      items11[0] = metroImportAll(TableCheckboxRow.TableCheckboxRow, obj25);
      const obj26 = {
        label: "Hide paints",
        onPress() {
          return closure_1_4((arg0) => !arg0);
        },
        checked: !first1
      };
      items11[1] = metroImportAll(TableCheckboxRow.TableCheckboxRow, obj26);
      items[3] = React4(TableRowGroup4, obj24);
      const obj27 = { title: "Share Timings", hasIcons: true, children: metroImportAll(TableRow3, obj28) };
      const TableRowGroup5 = tmp3(5999).TableRowGroup;
      obj28 = { icon: metroImportAll(ShareIcon.ShareIcon, {}), label: "Copy timings to clipboard.", arrow: true, onPress };
      TableRow3 = tmp3(5917).TableRow;
      items[4] = metroImportAll(TableRowGroup5, obj27);
      items12 = [React4(Stack, obj), ];
      const obj29 = { style: border.border };
      items12[1] = metroImportAll(View, obj29);
      return React4(authStore, obj16);
    },
    data: memo,
    renderItem(children) {
      const obj = { children: children.item };
      return closure_8(lastTrackedAppUiViewed2Properties, obj);
    }
  };
  obj6 = { paddingBottom: bottom + tmp2(576).space.PX_16 };
  FlashList = tmp10(8179).FlashList;
  return closure_8(checked, obj4);
};
