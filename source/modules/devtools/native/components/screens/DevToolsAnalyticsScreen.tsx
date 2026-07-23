// Module ID: 13507
// Function ID: 103982
// Name: CommonProperty
// Dependencies: [57, 31, 27, 1849, 13331, 653, 33, 4130, 689, 4126, 5165, 9597, 3712, 9429, 4660, 5492, 4078, 566, 7879, 4541, 5503, 5504, 11274, 4089, 13508, 5772, 2]
// Exports: default

// Module 13507 (CommonProperty)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { Fonts } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
function CommonProperty(arg0) {
  let children;
  let name;
  ({ name, children } = arg0);
  let obj = { style: _createForOfIteratorHelperLoose().commonProperty };
  obj = { variant: "text-sm/semibold", color: "text-default", children: name };
  const items = [callback2(require(4126) /* Text */.Text, obj), children];
  obj.children = items;
  return callback3(View, obj);
}
function LoggedEvent(arg0) {
  let end;
  let event;
  let fingerprint;
  let properties;
  let start;
  let timestamp;
  ({ properties, fingerprint } = arg0);
  ({ event, timestamp, start, end } = arg0);
  let map = _createForOfIteratorHelperLoose();
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  const dependencyMap = tmp[1];
  user = user.getUser(fingerprint);
  let obj = { collapsable: false };
  obj = { arrow: !first, icon: callback2(fingerprint(9597).AnalyticsIcon, {}), label: event };
  if ("name" in properties) {
    let str2 = properties.name;
  } else {
    let str = properties.location;
    str = undefined;
    if (null != str) {
      str = str.toString();
    }
    str2 = "N/A";
    if (null != str) {
      str2 = str;
    }
  }
  obj.subLabel = str2;
  obj.onPress = function onPress() {
    return dependencyMap((arg0) => !arg0);
  };
  obj.start = start;
  obj.end = end;
  let items = [callback2(fingerprint(5165).TableRow, obj), ];
  if (!first) {
    items[1] = first;
    obj.children = items;
    return callback3(View, obj);
  } else {
    obj = { style: map.detailsContainer };
    let tmp11 = callback3;
    let tmp12 = View;
    let obj1 = { style: map.commonPropertiesContainer };
    const obj2 = { name: "Timestamp (local)" };
    let items3 = 9;
    const obj3 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary" };
    let obj5 = map(3712)(timestamp);
    obj3.children = obj5.calendar();
    obj2.children = callback2(fingerprint(4126).Text, obj3);
    let items1 = [callback2(CommonProperty, obj2), , ];
    let tmp20 = null != user;
    if (tmp20) {
      const obj4 = { name: "User " };
      obj5 = { user };
      obj4.children = callback2(map(9429), obj5);
      tmp20 = callback2(CommonProperty, obj4);
    }
    items1[1] = tmp20;
    let obj6 = { name: "Fingerprint" };
    if (null != fingerprint) {
      const obj7 = {
        style: map.copyContainer,
        onPress() {
              if (null != fingerprint) {
                fingerprint(5492).copy(fingerprint);
                const obj = fingerprint(5492);
              }
            }
      };
      const obj8 = { variant: "text-sm/medium", color: "mobile-text-heading-primary" };
      const items2 = [map.monospace, ];
      const obj9 = { marginRight: 4 };
      items2[1] = obj9;
      obj8.style = items2;
      obj8.children = fingerprint;
      items3 = [callback2(fingerprint(dependencyMap[items3]).Text, obj8), ];
      const obj10 = { size: "sm" };
      items3[1] = callback2(fingerprint(4078).CopyIcon, obj10);
      obj7.children = items3;
      let tmp31 = callback3(fingerprint(4660).PressableOpacity, obj7);
      const tmp36 = callback2(fingerprint(dependencyMap[items3]).Text, obj8);
    } else {
      const obj11 = { variant: "text-sm/medium", color: "text-muted", style: map.monospace, children: "null" };
      tmp31 = callback2(fingerprint(dependencyMap[items3]).Text, obj11);
    }
    obj6.children = tmp31;
    obj6 = callback2(CommonProperty, obj6);
    items1[2] = obj6;
    obj1.children = items1;
    obj1 = [, ];
    obj1[0] = tmp11(tmp12, obj1);
    tmp11 = callback2;
    tmp12 = View;
    const obj12 = { style: map.customPropertiesContainer };
    const _Object = Object;
    items1 = Object.entries(properties);
    map = items1.map;
    obj12.children = map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      let obj = { style: map.customProperty };
      obj = { variant: "text-sm/semibold", color: "text-brand", style: map.customPropertyName };
      const items = [tmp, ":"];
      obj.children = items;
      const items1 = [outer1_9(fingerprint(4126).Text, obj), ];
      if (null != tmp2) {
        obj = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", style: map.monospace };
        const _JSON = JSON;
        obj.children = JSON.stringify(tmp2);
        let obj1 = obj;
      } else {
        obj1 = { variant: "text-sm/semibold", color: "text-muted", style: map.monospace, children: "null" };
      }
      items1[1] = outer1_8(fingerprint(4126).Text, obj1);
      obj.children = items1;
      return outer1_9(outer1_5, obj, tmp);
    });
    obj1[1] = callback2(View, obj12);
    obj.children = obj1;
    callback3(View, obj);
    const tmp10 = View;
    const tmp11Result = tmp11(tmp12, obj1);
    const tmp26 = callback2;
    const tmp27 = CommonProperty;
    const tmp9 = callback3;
  }
}
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
_createForOfIteratorHelperLoose.analyticsContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.contentContainer = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj1 = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.searchFieldContainer = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj2 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.detailsContainer = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.commonPropertiesContainer = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: 10 };
_createForOfIteratorHelperLoose.commonProperty = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 8, height: 20 };
_createForOfIteratorHelperLoose.customPropertiesContainer = { paddingHorizontal: 10, paddingVertical: 4 };
_createForOfIteratorHelperLoose.customProperty = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", justifyContent: "flex-start", marginVertical: 4 };
let obj5 = { fontWeight: "600", fontFamily: Fonts.CODE_BOLD, marginRight: 4 };
_createForOfIteratorHelperLoose.customPropertyName = obj5;
_createForOfIteratorHelperLoose.monospace = { fontFamily: Fonts.CODE_BOLD };
_createForOfIteratorHelperLoose.copyContainer = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: 10 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsAnalyticsScreen.tsx");

export default function DevToolsAnalyticsScreen() {
  let str;
  let tmp6;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = trimmed(566);
  const items = [loggedEvents];
  loggedEvents = loggedEvents.loggedEvents;
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.loggedEventsVersion);
  const tmp3 = callback(React.useState(false), 2);
  const first = tmp3[0];
  [str, tmp6] = callback(React.useState(""), 2);
  const tmp5 = callback(React.useState(""), 2);
  trimmed = str.toLowerCase().trim();
  let found = loggedEvents;
  if ("" !== trimmed) {
    found = loggedEvents.filter((event) => {
      const formatted = event.event.toLowerCase();
      return formatted.includes(trimmed);
    });
  }
  const items1 = [...found];
  if (first) {
    let reversed = items1.reverse();
  } else {
    reversed = items1;
  }
  obj = { style: tmp.analyticsContainer };
  obj = {};
  const obj1 = { spacing: 16 };
  const obj2 = { title: "Actions", hasIcons: true };
  const obj3 = { icon: callback2(trimmed(11274).ArrowsUpDownIcon, {}), label: "Reverse Events", value: first, onValueChange: tmp3[1] };
  const items2 = [callback2(trimmed(5504).TableSwitchRow, obj3), ];
  const obj4 = { arrow: true, variant: "danger", icon: callback2(trimmed(4089).TrashIcon, { color: "text-feedback-critical" }), label: "Clear Analytics Log", onPress: trimmed(13508).clearAnalyticsLog };
  items2[1] = callback2(trimmed(5165).TableRow, obj4);
  obj2.children = items2;
  const items3 = [callback3(trimmed(5503).TableRowGroup, obj2), , ];
  const str2 = str.toLowerCase();
  const tmp10 = View;
  const tmp11 = callback2;
  const tmp12 = callback3;
  const tmp9 = callback2;
  items3[1] = callback2(View, { style: tmp.searchFieldContainer, children: callback2(trimmed(5772).SearchField, { placeholder: "Search by event name", onChange: tmp6 }) });
  const obj6 = { title: "Analytics Events", hasIcons: false };
  if (0 === loggedEvents.length) {
    const obj7 = { label: "No events logged." };
    let tmp14 = callback2(trimmed(5165).TableRow, obj7);
  } else {
    tmp14 = null;
    if (0 === found.length) {
      const obj8 = {};
      const _HermesInternal = HermesInternal;
      obj8.label = "No events match \"" + str + "\"";
      tmp14 = callback2(trimmed(5165).TableRow, obj8);
    }
  }
  obj6.children = tmp14;
  items3[2] = callback2(trimmed(5503).TableRowGroup, obj6);
  obj1.children = items3;
  obj.ListHeaderComponent = tmp12(trimmed(4541).Stack, obj1);
  obj.contentContainerStyle = tmp.contentContainer;
  obj.extraData = stateFromStores;
  obj.data = reversed;
  obj.renderItem = function renderItem(arg0) {
    let index;
    let item;
    ({ item, index } = arg0);
    return outer1_8(outer1_12, { start: 0 === index, end: index === reversed.length - 1, event: item.event, properties: item.properties, timestamp: item.timestamp, fingerprint: item.fingerprint });
  };
  obj.children = tmp11(trimmed(7879).FlashList, obj);
  return tmp9(tmp10, obj);
};
