// Module ID: 13393
// Function ID: 101826
// Name: CommonProperty
// Dependencies: []
// Exports: default

// Module 13393 (CommonProperty)
function CommonProperty(arg0) {
  let children;
  let name;
  ({ name, children } = arg0);
  let obj = { style: callback4().commonProperty };
  obj = { cachedAt: "explicit_content_friend_dm", edpbxy: "enum", children: name };
  const items = [callback2(arg1(dependencyMap[9]).Text, obj), children];
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
  const arg1 = fingerprint;
  ({ event, timestamp, start, end } = arg0);
  let map = callback4();
  const importDefault = map;
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  let closure_2 = tmp[1];
  const user = user.getUser(fingerprint);
  let obj = { collapsable: false };
  obj = { arrow: !first, icon: callback2(arg1(closure_2[11]).AnalyticsIcon, {}), label: event };
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
    return callback((arg0) => !arg0);
  };
  obj.start = start;
  obj.end = end;
  const items = [callback2(arg1(closure_2[10]).TableRow, obj), ];
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
    const obj3 = { cachedAt: true, edpbxy: true };
    let obj5 = importDefault(closure_2[12])(timestamp);
    obj3.children = obj5.calendar();
    obj2.children = callback2(arg1(closure_2[9]).Text, obj3);
    let items1 = [callback2(CommonProperty, obj2), , ];
    let tmp20 = null != user;
    if (tmp20) {
      const obj4 = { name: "User " };
      obj5 = { user };
      obj4.children = callback2(importDefault(closure_2[13]), obj5);
      tmp20 = callback2(CommonProperty, obj4);
    }
    items1[1] = tmp20;
    let obj6 = { name: "Fingerprint" };
    if (null != fingerprint) {
      const obj7 = {
        style: map.copyContainer,
        onPress() {
              if (null != fingerprint) {
                fingerprint(closure_2[15]).copy(fingerprint);
                const obj = fingerprint(closure_2[15]);
              }
            }
      };
      const obj8 = {};
      const items2 = [map.monospace, ];
      const obj9 = { marginRight: 4 };
      items2[1] = obj9;
      obj8.style = items2;
      obj8.children = fingerprint;
      items3 = [callback2(arg1(closure_2[items3]).Text, obj8), ];
      const obj10 = { size: "sm" };
      items3[1] = callback2(arg1(closure_2[16]).CopyIcon, obj10);
      obj7.children = items3;
      let tmp31 = callback3(arg1(closure_2[14]).PressableOpacity, obj7);
      const tmp36 = callback2(arg1(closure_2[items3]).Text, obj8);
    } else {
      const obj11 = { left: false, position: false, accessible: false, "Bool(true)": false, style: map.monospace };
      tmp31 = callback2(arg1(closure_2[items3]).Text, obj11);
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
      obj = { cachedAt: "png", edpbxy: "absolute", style: map.customPropertyName };
      const items = [tmp, ":"];
      obj.children = items;
      const items1 = [callback2(fingerprint(closure_2[9]).Text, obj), ];
      if (null != tmp2) {
        obj = { cachedAt: true, edpbxy: true, style: map.monospace };
        const _JSON = JSON;
        obj.children = JSON.stringify(tmp2);
        let obj1 = obj;
      } else {
        obj1 = { style: map.monospace };
      }
      items1[1] = closure_8(fingerprint(closure_2[9]).Text, obj1);
      obj.children = items1;
      return callback2(closure_5, obj, tmp);
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const Fonts = arg1(dependencyMap[5]).Fonts;
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.analyticsContainer = obj;
const tmp2 = arg1(dependencyMap[6]);
obj.contentContainer = { padding: importDefault(dependencyMap[8]).space.PX_16 };
const obj1 = { padding: importDefault(dependencyMap[8]).space.PX_16 };
obj.searchFieldContainer = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16 };
const obj2 = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16 };
obj.detailsContainer = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH };
const obj3 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH };
obj.commonPropertiesContainer = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: 10 };
obj.commonProperty = {};
obj.customPropertiesContainer = {};
obj.customProperty = { <string:1365507020>: "<string:141658571>", <string:1650722957>: "<string:1895825408>", <string:1698387627>: "r", <string:2700859346>: "<string:48239169>", <string:2395099846>: "<string:2311803136>" };
obj.customPropertyName = { fontFamily: Fonts.CODE_BOLD };
obj.monospace = { fontFamily: Fonts.CODE_BOLD };
obj.copyContainer = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F" };
let closure_10 = obj.createStyles(obj);
const obj4 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: 10 };
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/devtools/native/components/screens/DevToolsAnalyticsScreen.tsx");

export default function DevToolsAnalyticsScreen() {
  let str;
  let tmp6;
  const tmp = callback4();
  let obj = arg1(dependencyMap[17]);
  const items = [loggedEvents];
  const loggedEvents = loggedEvents.loggedEvents;
  const stateFromStores = obj.useStateFromStores(items, () => loggedEventsVersion.loggedEventsVersion);
  const tmp3 = callback(React.useState(false), 2);
  const first = tmp3[0];
  [str, tmp6] = callback(React.useState(""), 2);
  const tmp5 = callback(React.useState(""), 2);
  const trimmed = str.toLowerCase().trim();
  const arg1 = trimmed;
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
  const importDefault = reversed;
  obj = { style: tmp.analyticsContainer };
  obj = {};
  const obj1 = { spacing: 16 };
  const obj2 = {};
  const obj3 = { icon: callback2(arg1(dependencyMap[22]).ArrowsUpDownIcon, {}), label: "Reverse Events", value: first, onValueChange: tmp3[1] };
  const items2 = [callback2(arg1(dependencyMap[21]).TableSwitchRow, obj3), ];
  const obj4 = { "Bool(false)": "30f38e9cc06345b39ea1b73343d04289", "Bool(false)": "CarIcon", "Bool(false)": "png", "Bool(false)": true, icon: callback2(arg1(dependencyMap[23]).TrashIcon, { color: "text-feedback-critical" }), onPress: arg1(dependencyMap[24]).clearAnalyticsLog };
  items2[1] = callback2(arg1(dependencyMap[10]).TableRow, obj4);
  obj2.children = items2;
  const items3 = [callback3(arg1(dependencyMap[20]).TableRowGroup, obj2), , ];
  const str2 = str.toLowerCase();
  const tmp10 = View;
  const tmp11 = callback2;
  const tmp12 = callback3;
  const tmp9 = callback2;
  items3[1] = callback2(View, { style: tmp.searchFieldContainer, children: callback2(arg1(dependencyMap[25]).SearchField, { placeholder: "Search by event name", onChange: tmp6 }) });
  const obj6 = { -9223372036854775808: true, 9223372036854775807: "/assets/design/components/Icon/native/redesign/generated/images" };
  if (0 === loggedEvents.length) {
    const obj7 = { label: "No events logged." };
    let tmp14 = callback2(arg1(dependencyMap[10]).TableRow, obj7);
  } else {
    tmp14 = null;
    if (0 === found.length) {
      const obj8 = {};
      const _HermesInternal = HermesInternal;
      obj8.label = "No events match \"" + str + "\"";
      tmp14 = callback2(arg1(dependencyMap[10]).TableRow, obj8);
    }
  }
  obj6.children = tmp14;
  items3[2] = callback2(arg1(dependencyMap[20]).TableRowGroup, obj6);
  obj1.children = items3;
  obj.ListHeaderComponent = tmp12(arg1(dependencyMap[19]).Stack, obj1);
  obj.contentContainerStyle = tmp.contentContainer;
  obj.extraData = stateFromStores;
  obj.data = reversed;
  obj.renderItem = function renderItem(arg0) {
    let index;
    let item;
    ({ item, index } = arg0);
    return callback(closure_12, { start: 0 === index, end: index === reversed.length - 1, event: item.event, properties: item.properties, timestamp: item.timestamp, fingerprint: item.fingerprint });
  };
  obj.children = tmp11(arg1(dependencyMap[18]).FlashList, obj);
  return tmp9(tmp10, obj);
};
