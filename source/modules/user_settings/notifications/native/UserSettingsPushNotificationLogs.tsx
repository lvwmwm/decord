// Module ID: 14448
// Function ID: 110402
// Name: UserSettingsPushNotificationLogs
// Dependencies: [5, 57, 31, 27, 653, 33, 4130, 689, 5781, 587, 10355, 1557, 5772, 4660, 1212, 8376, 10357, 12254, 7527, 4126, 2]
// Exports: default

// Module 14448 (UserSettingsPushNotificationLogs)
import closure_3 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
_createForOfIteratorHelperLoose.wrap = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.list = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj2 = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.searchWrap = obj2;
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.shareButton = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INPUT_BACKGROUND_DEFAULT, marginLeft: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, height: require("InputHeights").InputHeights.MD, width: require("InputHeights").InputHeights.MD, justifyContent: "center", alignItems: "center" };
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INPUT_BACKGROUND_DEFAULT, marginLeft: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, height: require("InputHeights").InputHeights.MD, width: require("InputHeights").InputHeights.MD, justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.log = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.code = { fontFamily: require("ME").Fonts.CODE_BOLD };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj4 = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let result = require("result").fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsPushNotificationLogs.tsx");

export default function UserSettingsPushNotificationLogs() {
  let closure_3;
  let tmp7;
  const tmp2 = callback2(React.useState(() => {
    const Storage = first(587).Storage;
    let str = "";
    const value = Storage.get("push-notification-logs-query", "");
    if (null != value) {
      str = value;
    }
    return str;
  }), 2);
  const first = tmp2[0];
  const tmp4 = callback2(React.useState([]), 2);
  const first1 = tmp4[0];
  const dependencyMap = tmp4[1];
  [tmp7, closure_3] = callback2(React.useState([]), 2);
  const effect = React.useEffect(() => {
    function _load() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = outer2_3(tmp);
      return obj(...arguments);
    }
    !(function load() {
      return _load(...arguments);
    })();
  }, []);
  let items = [first1, first];
  const effect1 = React.useEffect(() => {
    if ("" !== timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        const regExp = new RegExp(closure_0, "i");
        outer1_3(outer1_1.filter((type) => {
          let tmp = null != type.type.match(regExp);
          if (!tmp) {
            tmp = null != type.title.match(regExp);
            const str2 = type.title;
          }
          if (!tmp) {
            let match;
            if (null != type.content) {
              match = str3.match(regExp);
            }
            tmp = null != match;
          }
          return tmp;
        }));
        const Storage = first(table[9]).Storage;
        const result = Storage.set("push-notification-logs-query", closure_0);
      }, 300);
      return () => clearTimeout(closure_0);
    } else {
      callback(first1);
      let Storage = first(587).Storage;
      let result = Storage.set("push-notification-logs-query", timeout);
    }
  }, items);
  const tmp10 = _createForOfIteratorHelperLoose();
  callback2 = tmp10;
  let obj = { style: tmp10.wrap };
  obj = { style: tmp10.searchWrap };
  obj = { size: "md", placeholder: "Filter (regex)", onChange: tmp2[1], defaultValue: first };
  let items1 = [callback3(first(5772).SearchField, obj), ];
  let obj1 = { style: tmp10.shareButton };
  const intl = first(1212).intl;
  obj1.accessibilityLabel = intl.string(first(1212).t.leICvh);
  // CreateGeneratorClosureLongIndex (0x67)
  obj1.onPress = callback(tmp);
  obj1.children = callback3(first(12254).ShareIcon, {});
  items1[1] = callback3(first(4660).PressableOpacity, obj1);
  obj.children = items1;
  let items2 = [callback4(View, obj), ];
  const obj2 = {};
  const obj3 = {};
  const merged = Object.assign(tmp10.list);
  obj3["paddingBottom"] = first1(1557)().bottom + first1(689).space.PX_16;
  obj2.contentContainerStyle = obj3;
  obj2.data = tmp7;
  obj2.renderItem = function renderItem(item) {
    item = item.item;
    let str = "";
    if (item.silent) {
      str = "~silent~ ";
    }
    let obj = { style: tmp10.log };
    obj = { style: tmp10.code, variant: "text-xs/normal", children: new Date(item.receivedTimestamp).toISOString() };
    const items = [outer1_7(first(4126).Text, obj), ];
    obj = { style: tmp10.code, variant: "text-sm/normal" };
    const obj1 = { style: tmp10.code, variant: "text-sm/normal", color: "text-brand" };
    const items1 = [str, "[", item.type, "]", " "];
    obj1.children = items1;
    const items2 = [outer1_8(first(4126).Text, obj1), item.title, " - ", item.content];
    obj.children = items2;
    items[1] = outer1_8(first(4126).Text, obj);
    obj.children = items;
    return outer1_8(outer1_6, obj, item.index);
  };
  items2[1] = callback3(first(7527).FlashList, obj2);
  obj.children = items2;
  return callback4(View, obj);
};
