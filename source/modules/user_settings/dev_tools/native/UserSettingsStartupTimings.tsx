// Module ID: 14265
// Function ID: 107812
// Name: Code
// Dependencies: []
// Exports: default

// Module 14265 (Code)
function Code(arg0) {
  let children;
  let color;
  ({ children, color } = arg0);
  const obj = { 9223372036854775807: "isArray", 9223372036854775807: "x", 9223372036854775807: "flex", color, style: callback4().code, children };
  return callback3(arg1(dependencyMap[9]).Text, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.wrap = obj;
obj.code = { fontFamily: arg1(dependencyMap[5]).Fonts.CODE_BOLD };
const tmp2 = arg1(dependencyMap[6]);
obj.border = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWEST };
let closure_11 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWEST };
const appStartedTimestamp = importDefault(dependencyMap[10]).getAppStartedTimestamp();
const importDefaultResult = importDefault(dependencyMap[10]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsStartupTimings.tsx");

export default function UserSettingsStartupTimings() {
  function renderTime(closure_10) {
    const result = closure_10 / 1000;
    return callback(num, { color: "text-brand", children: "" + result + "s (" + Math.round(closure_10 / num * 100) + "%)" });
  }
  function renderTTi(arg0) {
    const obj = { color: "text-brand" };
    let str = "";
    if (null != arg0) {
      str = "";
      if (arg0 > 0) {
        str = `${arg0 / 1000}s`;
      }
    }
    obj.children = str;
    return closure_8(num, obj);
  }
  const tmp = callback4();
  const arg1 = tmp;
  const tmp2 = callback2(React.useState(true), 2);
  const first = tmp2[0];
  const importDefault = first;
  let closure_2 = tmp2[1];
  const tmp4 = callback2(React.useState(true), 2);
  const first1 = tmp4[0];
  const callback = first1;
  const callback2 = tmp4[1];
  const useResult = React.use(closure_12);
  const React = useResult;
  const items = [useResult, first, first1];
  const memo = React.useMemo(() => first(closure_2[12])(useResult, !first, first1).split("\n"), items);
  let obj = arg1(closure_2[13]);
  const items1 = [closure_7];
  let closure_6 = obj.useStateFromStores(items1, () => alertStartupMetrics.alertStartupMetrics);
  closure_7 = importDefault(closure_2[14]).loadIndex.start - useResult;
  const diff = importDefault(closure_2[14]).loadMiniCache.end - importDefault(closure_2[14]).loadMiniCache.start;
  const callback3 = diff + (importDefault(closure_2[14]).parseStorage.end - importDefault(closure_2[14]).parseStorage.start);
  let closure_9 = importDefault(closure_2[14]).loadLazyCache.end - importDefault(closure_2[14]).loadLazyCache.start;
  let closure_10 = importDefault(closure_2[14]).ready.end - importDefault(closure_2[14]).ready.start;
  const callback4 = Math.ceil(importDefault(closure_2[14]).renderLatestMessages.importTime);
  let obj1 = arg1(closure_2[15]);
  const lastTrackedAppUiViewed2Properties = obj1.getLastTrackedAppUiViewed2Properties();
  closure_12 = lastTrackedAppUiViewed2Properties;
  let prop;
  if (null != lastTrackedAppUiViewed2Properties) {
    prop = lastTrackedAppUiViewed2Properties.time_first_contentful_paint;
  }
  let num = 0;
  if (null != prop) {
    num = prop;
  }
  const Code = num;
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_14 = React.useCallback(callback(num), []);
  obj = { style: tmp.wrap };
  obj = {};
  obj1 = { paddingBottom: importDefault(closure_2[11])().bottom + importDefault(closure_2[8]).space.PX_16 };
  obj.contentContainerStyle = obj1;
  obj.ListHeaderComponent = function ListHeaderComponent() {
    let obj = {};
    obj = { spacing: 16, style: { padding: 16 } };
    obj = {
      width: false,
      height: false,
      children: callback(callback2(closure_2[20]).TableCheckboxRow, {
        label: "Show start times at launch",
        onPress() {
          let obj = callback(closure_2[21]);
          obj = { alertStartupMetrics: !closure_6 };
          return obj.setDeveloperOptionSettings(obj);
        },
        checked: closure_6
      })
    };
    const items = [callback(callback2(closure_2[19]).TableRowGroup, obj), , , , ];
    const obj2 = { width: true, height: true };
    const obj3 = {};
    const obj4 = {};
    const obj5 = {};
    const items1 = ["rgba(39, 30, 173, 0.3)", renderTime(closure_7)];
    obj5.children = items1;
    const items2 = [callback2(num, obj5), , , , , , , ];
    const obj6 = {};
    const items3 = ["transparent", renderTime(closure_11)];
    obj6.children = items3;
    items2[1] = callback2(num, obj6);
    const obj7 = {};
    const items4 = [null, renderTime(callback)];
    obj7.children = items4;
    items2[2] = callback2(num, obj7);
    const obj8 = {};
    const items5 = [131120.77502632147, renderTime(callback2)];
    obj8.children = items5;
    items2[3] = callback2(num, obj8);
    const obj9 = {};
    const items6 = [null, renderTime(closure_10)];
    obj9.children = items6;
    items2[4] = callback2(num, obj9);
    const obj10 = {};
    const items7 = [null, renderTTi(num)];
    obj10.children = items7;
    items2[5] = callback2(num, obj10);
    const obj11 = {};
    let prop;
    if (null != lastTrackedAppUiViewed2Properties) {
      prop = lastTrackedAppUiViewed2Properties.time_display_messages_with_cache_end;
    }
    const items8 = [-598157585899199700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, renderTTi(prop)];
    obj11.children = items8;
    items2[6] = callback2(num, obj11);
    const obj12 = {};
    let prop1;
    if (null != lastTrackedAppUiViewed2Properties) {
      prop1 = lastTrackedAppUiViewed2Properties.time_display_latest_messages_end;
    }
    const items9 = [null, renderTTi(prop1)];
    obj12.children = items9;
    items2[7] = callback2(num, obj12);
    obj4.children = items2;
    obj3.label = callback2(closure_10, obj4);
    obj2.children = callback(callback2(closure_2[22]).TableRow, obj3);
    items[1] = callback(callback2(closure_2[19]).TableRowGroup, obj2);
    const obj13 = {};
    const obj14 = {};
    const obj15 = {};
    const items10 = [callback2(num, { children: [] }), callback2(num, { children: [] }), callback2(num, { children: [] }), callback2(num, { children: ["Selected values: ", "Found: "] }), callback2(num, { children: [] }), callback2(num, { children: [0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001453685965478812, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000890029543920946] })];
    obj15.children = items10;
    obj14.label = callback2(closure_10, obj15);
    obj13.children = callback(callback2(closure_2[22]).TableRow, obj14);
    items[2] = callback(callback2(closure_2[19]).TableRowGroup, obj13);
    const obj16 = { width: "Atomics", height: "NOTIFICATION_SETTINGS_MODAL_OPEN" };
    const items11 = [
      callback(callback2(closure_2[20]).TableCheckboxRow, {
        label: "Hide the Noise",
        onPress() {
          return callback2((arg0) => !arg0);
        },
        checked: first
      }),
      callback(callback2(closure_2[20]).TableCheckboxRow, {
        label: "Hide paints",
        onPress() {
          return callback3((arg0) => !arg0);
        },
        checked: !first1
      })
    ];
    obj16.children = items11;
    items[3] = callback2(callback2(closure_2[19]).TableRowGroup, obj16);
    const obj19 = {};
    const obj20 = { contentContainerStyle: "Table Row Section", decelerationRate: true, horizontal: "/assets/.cache/intl/bW9kdWxlcy9nb19saXZl", icon: callback(callback2(closure_2[23]).ShareIcon, {}), onPress: closure_14 };
    obj19.children = callback(callback2(closure_2[22]).TableRow, obj20);
    items[4] = callback(callback2(closure_2[19]).TableRowGroup, obj19);
    obj.children = items;
    const items12 = [callback2(callback2(closure_2[18]).Stack, obj), callback(closure_6, { style: callback2.border })];
    obj.children = items12;
    return callback2(closure_10, obj);
  };
  obj.data = memo;
  obj.renderItem = function renderItem(children) {
    return callback(num, { children: children.item });
  };
  obj.children = callback3(arg1(closure_2[17]).FlashList, obj);
  return callback3(closure_6, obj);
};
