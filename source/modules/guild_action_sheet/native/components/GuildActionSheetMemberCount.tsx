// Module ID: 10121
// Function ID: 78330
// Name: num2
// Dependencies: [31, 27, 33, 4130, 689, 478, 1324, 1212, 4126, 2]

// Module 10121 (num2)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";
import isWindows from "isWindows";
import isWindows from "isWindows";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let obj = { wrapper: { flexDirection: "row", alignItems: "center" } };
obj = { width: 8, height: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.dot = obj;
obj.dotContainer = { alignItems: "center", justifyContent: "center", marginRight: 4 };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.TEXT_STATUS_ONLINE };
obj.onlineDot = _createForOfIteratorHelperLoose;
obj.offlineDot = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.TEXT_STATUS_OFFLINE };
let obj3 = { textAlignVertical: "center" };
let num;
if (isWindows.isAndroid()) {
  num = 12;
}
obj3.lineHeight = num;
obj.text = obj3;
const obj4 = { textAlignVertical: "center" };
let num2;
if (isWindows.isAndroid()) {
  num2 = 14;
}
obj4.lineHeight = num2;
obj.refreshText = obj4;
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.TEXT_STATUS_OFFLINE };
const memoResult = importAllResult.memo(function MemberCount(arg0) {
  let color;
  let count;
  let dotContainerWidth;
  let type;
  ({ type, count, color, dotContainerWidth } = arg0);
  const tmp = importDefault(1324)("GuildActionSheetMemberCount");
  if (null == count) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    if ("online" === type) {
    } else {
    }
    intl2.string(_5SWsJX);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    if ("online" === type) {
      let etqpUG = require(1212) /* getSystemLocale */.t.PIikks;
    } else {
      etqpUG = require(1212) /* getSystemLocale */.t.etqpUG;
    }
    let obj = { count };
    const tmp17 = callback2();
    obj = { style: tmp17.wrapper };
    obj = {};
    const items = [tmp17.dotContainer, ];
    let tmp21 = null != dotContainerWidth;
    if (tmp21) {
      const obj1 = { width: dotContainerWidth };
      tmp21 = obj1;
    }
    items[1] = tmp21;
    obj.style = items;
    const obj2 = {};
    const items1 = [tmp17.dot, "online" === type ? tmp17.onlineDot : tmp17.offlineDot];
    obj2.style = items1;
    obj.children = callback(View, obj2);
    const items2 = [callback(View, obj), ];
    const obj3 = {};
    let str4 = "text-xs/medium";
    if (tmp) {
      str4 = "text-sm/normal";
    }
    obj3.variant = str4;
    let str5 = "text-default";
    if (null != color) {
      str5 = color;
    }
    obj3.color = str5;
    obj3.lineClamp = 1;
    obj3.style = tmp ? tmp17.refreshText : tmp17.text;
    obj3.children = intl.format(etqpUG, obj);
    items2[1] = callback(require(4126) /* Text */.Text, obj3);
    obj.children = items2;
    return closure_5(View, obj);
  }
});
const result = require("jsxProd").fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetMemberCount.tsx");

export default memoResult;
