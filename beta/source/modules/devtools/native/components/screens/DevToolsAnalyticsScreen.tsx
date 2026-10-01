// Module ID: 15135
// Function ID: 15136
// Name: DevToolsAnalyticsScreen
// Dependencies: [32, 19, 17, 1372, 13890, 1074, 21, 4836, 576, 4832, 5917, 9845, 4421, 9094, 5435, 6610, 4779, 504, 8179, 5279, 5999, 6621, 11633, 4790, 15130, 6471, 2]
// Exports: default

// Module 15135 (DevToolsAnalyticsScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import _modDef4421 from "module_4421" /* 4421 */;
import Text_Text from "Text/Text" /* 4832 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import AnalyticsLogStore from "AnalyticsLogStore" /* 13890 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function CommonProperty(arg0) {
  let children;
  let items;
  let name;
  ({ name, children } = arg0);
  const obj = { style: closure_10().commonProperty, children: items };
  items = [metroImportAll(Text_Text.Text, { variant: "text-sm/semibold", color: "text-default", children: name }), children];
  return React4(View, obj);
}
function LoggedEvent(arg0) {
  let Text;
  let _undefined;
  let c2;
  let closure_1;
  let end;
  let entries;
  let event;
  let fingerprint;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj5;
  let obj6;
  let obj8;
  let properties;
  let start;
  let str2;
  let timestamp;
  let tmp3;
  let tmp5Result2;
  ({ properties, fingerprint } = arg0);
  dependencyMap = undefined;
  ({ event, timestamp, start, end } = arg0);
  const tmp = closure_10();
  importDefault = tmp;
  const tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, c2] = tmp2;
  const user = UserStore.getUser(fingerprint);
  let tmp6 = View;
  let obj = {
    arrow: !tmp5Result2,
    icon: closure_8(fingerprint(9845).AnalyticsIcon, {}),
    label: event,
    subLabel: str2,
    onPress() {
      return _undefined((arg0) => !arg0);
    },
    start,
    end
  };
  const TableRow = fingerprint(5917).TableRow;
  if ("name" in properties) {
    str2 = properties.name;
  } else {
    str2 = undefined;
    if (properties.location != null) {
      str2 = str.toString();
    }
    if (str2 == null) {
      str2 = "N/A";
    }
  }
  const children = [tmp7(TableRow, obj), ];
  if (tmp5Result2) {
    let tmp7Result1;
    let obj2 = { style: tmp.detailsContainer, children: items4 };
    let obj3 = { style: tmp.commonPropertiesContainer, children: items1 };
    let obj4 = { name: "Timestamp (local)", children: tmp7(Text, obj5) };
    obj5 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: obj6.calendar() };
    Text = tmp8(4832).Text;
    obj6 = _modDef4421(timestamp);
    items1 = [tmp7(CommonProperty, obj4), , ];
    let tmp7Result = null != user;
    const tmp12 = importDefault;
    if (tmp7Result) {
      const obj7 = { name: "User ", children: closure_8(tmp12(9094), obj8) };
      obj8 = { user };
      tmp7Result = tmp7(tmp11, obj7);
    }
    items1[1] = tmp7Result;
    if (null != fingerprint) {
      const obj9 = {
        style: tmp.copyContainer,
        onPress() {
              if (null != fingerprint) {
                const obj = ClipboardUtils;
                obj.copy(tmp);
              }
            },
        children: items3
      };
      const PressableOpacity = tmp8(5435).PressableOpacity;
      const obj10 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: items2, children: fingerprint };
      items2 = [tmp.monospace, { marginRight: 4 }];
      items3 = [tmp7(fingerprint(4832).Text, obj10), tmp7(fingerprint(4779).CopyIcon, { size: "sm" })];
      tmp7Result1 = tmp5(PressableOpacity, obj9);
    } else {
      const obj11 = { variant: "text-sm/medium", color: "text-muted", style: tmp.monospace, children: "null" };
      tmp7Result1 = tmp7(tmp8(4832).Text, obj11);
    }
    const obj12 = { name: "Fingerprint", children: tmp7Result1 };
    items1[2] = closure_8(CommonProperty, obj12);
    items4 = [tmp5(tmp6, obj3), ];
    const _Object = Object;
    const obj13 = {
      style: tmp.customPropertiesContainer,
      children: entries.map((item) => {
          let items;
          let items1;
          let obj4;
          let tmp;
          let tmp2;
          [tmp, tmp2] = item;
          const obj2 = { variant: "text-sm/semibold", color: "text-brand", style: closure_1.customPropertyName, children: items };
          items = [tmp, ":"];
          const obj = { style: closure_1.customProperty, children: items1 };
          items1 = [React4(Text_Text.Text, obj2), ];
          const Text = Text_Text.Text;
          const tmp3 = React4;
          const tmp4 = View;
          const tmp6 = metroImportAll;
          if (null != tmp2) {
            const _JSON = JSON;
            obj4 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", style: closure_1.monospace, children: JSON.stringify(tmp2) };
            const obj3 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", style: closure_1.monospace, children: JSON.stringify(tmp2) };
          } else {
            obj4 = { variant: "text-sm/semibold", color: "text-muted", style: closure_1.monospace, children: "null" };
          }
          items1[1] = tmp6(Text, obj4);
          return tmp3(tmp4, obj, tmp);
        })
    };
    entries = Object.entries(properties);
    items4[1] = closure_8(tmp6, obj13);
    tmp5Result2 = closure_9(tmp6, obj2);
  }
  children[1] = tmp5Result2;
  return closure_9(tmp6, { collapsable: false, children });
}
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { analyticsContainer: obj2, contentContainer: obj3, searchFieldContainer: obj4, detailsContainer: obj5, commonPropertiesContainer: obj6, commonProperty: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 8, height: 20 }, customPropertiesContainer: { paddingHorizontal: 10, paddingVertical: 4 }, customProperty: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", justifyContent: "flex-start", marginVertical: 4 }, customPropertyName: { fontWeight: "600", fontFamily: Fonts.CODE_BOLD, marginRight: 4 }, monospace: { fontFamily: Fonts.CODE_BOLD }, copyContainer: { flexDirection: "row", alignItems: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: 10 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsAnalyticsScreen.tsx");

export default function DevToolsAnalyticsScreen() {
  let FlashList;
  let first;
  let items2;
  let loggedEventsVersion;
  let obj8;
  let obj9;
  let reversed;
  let str;
  let tmp12Result;
  let tmp7;
  let tmp9;
  let trimmed;
  const tmp = closure_10();
  let obj = trimmed(504);
  const items = [AnalyticsLogStore];
  const loggedEvents = AnalyticsLogStore.loggedEvents;
  const stateFromStores = obj.useStateFromStores(items, () => loggedEventsVersion.loggedEventsVersion);
  [first, tmp7] = react.useState(false);
  [str, tmp9] = react.useState("");
  _slicedToArray(react.useState(""), 2);
  const str2 = str.toLowerCase();
  trimmed = str2.trim();
  let found = loggedEvents;
  if ("" !== trimmed) {
    found = loggedEvents.filter((event) => {
      const str = event.event;
      const formatted = str.toLowerCase();
      return formatted.includes(trimmed);
    });
  }
  const items1 = [...found];
  if (first) {
    reversed = items1.reverse();
  } else {
    reversed = items1;
  }
  const obj2 = { style: tmp.analyticsContainer, children: closure_8(FlashList, obj8) };
  FlashList = tmp2(8179).FlashList;
  const Stack = tmp2(5279).Stack;
  const obj3 = { title: "Actions", hasIcons: true, children: items2 };
  const TableRowGroup = tmp2(5999).TableRowGroup;
  const obj4 = { icon: closure_8(trimmed(11633).ArrowsUpDownIcon, {}), label: "Reverse Events", value: first, onValueChange: tmp7 };
  const TableSwitchRow = tmp2(6621).TableSwitchRow;
  items2 = [closure_8(TableSwitchRow, obj4), ];
  const obj5 = { arrow: true, variant: "danger", icon: closure_8(trimmed(4790).TrashIcon, { color: "text-feedback-critical" }), label: "Clear Analytics Log", onPress: trimmed(15130).clearAnalyticsLog };
  const TableRow = tmp2(5917).TableRow;
  items2[1] = closure_8(TableRow, obj5);
  const items3 = [closure_9(TableRowGroup, obj3), , ];
  const obj6 = { style: tmp.searchFieldContainer, children: closure_8(trimmed(6471).SearchField, { placeholder: "Search by event name", onChange: tmp9 }) };
  items3[1] = closure_8(View, obj6);
  const TableRowGroup2 = tmp2(5999).TableRowGroup;
  const tmp13 = View;
  const tmp14 = closure_9;
  if (0 === loggedEvents.length) {
    tmp12Result = tmp12(tmp2(5917).TableRow, { label: "No events logged." });
  } else {
    tmp12Result = null;
    if (0 === found.length) {
      const _HermesInternal = HermesInternal;
      const obj7 = { label: "No events match \"" + str + "\"" };
      const TableRow2 = tmp2(5917).TableRow;
      tmp12Result = tmp12(TableRow2, obj7);
    }
  }
  obj8 = {
    ListHeaderComponent: tmp14(Stack, obj9),
    contentContainerStyle: tmp.contentContainer,
    extraData: stateFromStores,
    data: reversed,
    renderItem(arg0) {
      let index;
      let item;
      ({ item, index } = arg0);
      const obj = { start: 0 === index, end: index === reversed.length - 1, event: item.event, properties: item.properties, timestamp: item.timestamp, fingerprint: item.fingerprint };
      return metroImportAll(LoggedEvent, obj);
    }
  };
  obj9 = { spacing: 16, children: items3 };
  items3[2] = closure_8(TableRowGroup2, { title: "Analytics Events", hasIcons: false, children: tmp12Result });
  return closure_8(tmp13, obj2);
};
