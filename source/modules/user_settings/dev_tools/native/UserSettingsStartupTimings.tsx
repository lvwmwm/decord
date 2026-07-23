// Module ID: 14397
// Function ID: 110063
// Name: Code
// Dependencies: [5, 57, 31, 27, 683, 653, 33, 4130, 689, 4126, 3988, 1557, 10329, 566, 14, 6707, 8332, 7879, 4541, 5503, 9094, 685, 5165, 12227, 2]
// Exports: default

// Module 14397 (Code)
import ME from "ME";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "enforcing";

let closure_10;
let closure_8;
let closure_9;
let require = arg1;
function Code(arg0) {
  let children;
  let color;
  ({ children, color } = arg0);
  const obj = { variant: "text-sm/normal", color, lineClamp: 1, style: _createForOfIteratorHelperLoose().code, children };
  return callback2(require(4126) /* Text */.Text, obj);
}
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
_createForOfIteratorHelperLoose.wrap = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.code = { fontFamily: require("ME").Fonts.CODE_BOLD };
let obj1 = { height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, marginBottom: 8 };
_createForOfIteratorHelperLoose.border = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const appStartedTimestamp = require("enforcing").getAppStartedTimestamp();
let result = require("result").fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsStartupTimings.tsx");

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
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  const tmp2 = callback(useResult.useState(true), 2);
  const first = tmp2[0];
  const dependencyMap = tmp2[1];
  const tmp4 = callback(useResult.useState(true), 2);
  const first1 = tmp4[0];
  callback = tmp4[1];
  useResult = useResult.use(lastTrackedAppUiViewed2Properties);
  let items = [useResult, first, first1];
  const memo = useResult.useMemo(() => first(10329)(result, !first, first1).split("\n"), items);
  let obj = require(566) /* initialize */;
  let items1 = [_isNativeReflectConstruct];
  let closure_6 = obj.useStateFromStores(items1, () => alertStartupMetrics.alertStartupMetrics);
  _isNativeReflectConstruct = first(14).loadIndex.start - useResult;
  const diff = first(14).loadMiniCache.end - first(14).loadMiniCache.start;
  const callback2 = diff + (first(14).parseStorage.end - first(14).parseStorage.start);
  let closure_9 = first(14).loadLazyCache.end - first(14).loadLazyCache.start;
  let closure_10 = first(14).ready.end - first(14).ready.start;
  _createForOfIteratorHelperLoose = Math.ceil(first(14).renderLatestMessages.importTime);
  let obj1 = require(6707) /* _createForOfIteratorHelperLoose */;
  lastTrackedAppUiViewed2Properties = obj1.getLastTrackedAppUiViewed2Properties();
  let prop;
  if (null != lastTrackedAppUiViewed2Properties) {
    prop = lastTrackedAppUiViewed2Properties.time_first_contentful_paint;
  }
  let num = 0;
  if (null != prop) {
    num = prop;
  }
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_14 = useResult.useCallback(first1(num), []);
  obj = { style: tmp.wrap };
  obj = {};
  obj1 = { paddingBottom: first(1557)().bottom + first(689).space.PX_16 };
  obj.contentContainerStyle = obj1;
  obj.ListHeaderComponent = function ListHeaderComponent() {
    let obj = {};
    obj = { spacing: 16, style: { padding: 16 } };
    obj = {
      title: "Performance testing",
      hasIcons: false,
      children: callback(callback2(9094).TableCheckboxRow, {
        label: "Show start times at launch",
        onPress() {
          let obj = callback(table[21]);
          obj = { alertStartupMetrics: !outer1_6 };
          return obj.setDeveloperOptionSettings(obj);
        },
        checked: closure_6
      })
    };
    const items = [callback(callback2(5503).TableRowGroup, obj), , , , ];
    const obj2 = { title: "Key Cold Start Times", hasIcons: false };
    const obj3 = {};
    const obj4 = {};
    const obj5 = {};
    const items1 = ["Native: ", renderTime(_isNativeReflectConstruct)];
    obj5.children = items1;
    const items2 = [callback2(num, obj5), , , , , , , ];
    const obj6 = {};
    const items3 = ["JS Imports: ", renderTime(closure_11)];
    obj6.children = items3;
    items2[1] = callback2(num, obj6);
    const obj7 = {};
    const items4 = ["Mini Cache: ", renderTime(callback)];
    obj7.children = items4;
    items2[2] = callback2(num, obj7);
    const obj8 = {};
    const items5 = ["Lazy Cache: ", renderTime(callback2)];
    obj8.children = items5;
    items2[3] = callback2(num, obj8);
    const obj9 = {};
    const items6 = ["Ready: ", renderTime(closure_10)];
    obj9.children = items6;
    items2[4] = callback2(num, obj9);
    const obj10 = {};
    const items7 = ["TTI (first contentful paint): ", renderTTi(num)];
    obj10.children = items7;
    items2[5] = callback2(num, obj10);
    const obj11 = {};
    let prop;
    if (null != lastTrackedAppUiViewed2Properties) {
      prop = lastTrackedAppUiViewed2Properties.time_display_messages_with_cache_end;
    }
    const items8 = ["Cached Messages Render: ", renderTTi(prop)];
    obj11.children = items8;
    items2[6] = callback2(num, obj11);
    const obj12 = {};
    let prop1;
    if (null != lastTrackedAppUiViewed2Properties) {
      prop1 = lastTrackedAppUiViewed2Properties.time_display_latest_messages_end;
    }
    const items9 = ["Latest Messages Render: ", renderTTi(prop1)];
    obj12.children = items9;
    items2[7] = callback2(num, obj12);
    obj4.children = items2;
    obj3.label = callback2(closure_10, obj4);
    obj2.children = callback(callback2(5165).TableRow, obj3);
    items[1] = callback(callback2(5503).TableRowGroup, obj2);
    const obj13 = { title: "Legend", hasIcons: false };
    const obj14 = {};
    const obj15 = {};
    const items10 = [callback2(num, { children: ["\u2615", " - Java / Kotlin"] }), callback2(num, { children: ["\u{1F3A8}", " - React render"] }), callback2(num, { children: ["\u{1F4BE}", " - CacheStore"] }), callback2(num, { children: ["\u{1F9A5}", " - Slow Store Update / Handler"] }), callback2(num, { children: ["\u{1F3C3}", " - Startup Event"] }), callback2(num, { children: ["\u{1F310}", " - Socket Event"] })];
    obj15.children = items10;
    obj14.label = callback2(closure_10, obj15);
    obj13.children = callback(callback2(5165).TableRow, obj14);
    items[2] = callback(callback2(5503).TableRowGroup, obj13);
    const obj16 = { title: "Detailed Times", hasIcons: false };
    const items11 = [
      callback(callback2(9094).TableCheckboxRow, {
        label: "Hide the Noise",
        onPress() {
          return outer1_2((arg0) => !arg0);
        },
        checked: first
      }),
      callback(callback2(9094).TableCheckboxRow, {
        label: "Hide paints",
        onPress() {
          return outer1_4((arg0) => !arg0);
        },
        checked: !first1
      })
    ];
    obj16.children = items11;
    items[3] = callback2(callback2(5503).TableRowGroup, obj16);
    const obj19 = { title: "Share Timings", hasIcons: true };
    const obj20 = { icon: callback(callback2(12227).ShareIcon, {}), label: "Copy timings to clipboard.", arrow: true, onPress: closure_14 };
    obj19.children = callback(callback2(5165).TableRow, obj20);
    items[4] = callback(callback2(5503).TableRowGroup, obj19);
    obj.children = items;
    const items12 = [callback2(callback2(4541).Stack, obj), callback(closure_6, { style: callback2.border })];
    obj.children = items12;
    return callback2(closure_10, obj);
  };
  obj.data = memo;
  obj.renderItem = function renderItem(children) {
    return callback(num, { children: children.item });
  };
  obj.children = callback2(require(7879) /* defaultMVCPConfig */.FlashList, obj);
  return callback2(closure_6, obj);
};
