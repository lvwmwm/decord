// Module ID: 14425
// Function ID: 110261
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 27, 33, 1273, 4126, 4543, 4130, 689, 4541, 7495, 2]
// Exports: default

// Module 14425 (_createForOfIteratorHelperLoose)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "jsxProd";

let closure_2;
let closure_3;
let closure_4;
let closure_5;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function ComparisonRow(entry) {
  entry = entry.entry;
  const tmp = callback3();
  const hasItem = set.has(entry.color);
  const combined = "" + entry.color;
  let redesignVariant = null;
  if (entry.look !== require(1273) /* Button */.ButtonLooks.LINK) {
    let obj = require(1273) /* Button */;
    redesignVariant = obj.getRedesignVariant(entry.color);
  }
  obj = {};
  const items = [tmp.comparisonRow, ];
  let darkBg = hasItem;
  if (hasItem) {
    darkBg = tmp.darkBg;
  }
  items[1] = darkBg;
  obj.style = items;
  obj = { variant: "text-xs/medium" };
  let str = "text-muted";
  if (hasItem) {
    str = "text-default";
  }
  obj.color = str;
  const items1 = [combined, " \u2192 ", ];
  let str2 = "unmapped";
  if (null != redesignVariant) {
    str2 = redesignVariant;
  }
  items1[2] = str2;
  obj.children = items1;
  const items2 = [callback(require(4126) /* Text */.Text, obj), ];
  const obj1 = { style: tmp.comparisonButtons };
  const obj2 = { style: tmp.comparisonSide };
  const items3 = [callback2(require(4126) /* Text */.Text, { variant: "text-xxs/medium", color: "text-muted", children: "legacy" }), ];
  const obj3 = { look: entry.look, color: entry.color, size: require(1273) /* Button */.ButtonSizes.MEDIUM, shrink: true, text: combined };
  let darkText = null;
  if (hasItem) {
    darkText = null;
    if (entry.look === require(1273) /* Button */.ButtonLooks.FILLED) {
      darkText = tmp.darkText;
    }
  }
  obj3.textStyle = darkText;
  obj3.onPress = function onPress() {

  };
  items3[1] = callback2(require(1273) /* Button */.Button, obj3);
  obj2.children = items3;
  const items4 = [callback(closure_3, obj2), ];
  if (null != redesignVariant) {
    const obj4 = { style: tmp.comparisonSide };
    const items5 = [callback2(require(4126) /* Text */.Text, { variant: "text-xxs/medium", color: "text-muted", children: "mana" }), ];
    const obj5 = {
      variant: redesignVariant,
      size: "md",
      text: redesignVariant,
      onPress() {

        }
    };
    items5[1] = callback2(require(4543) /* Button */.Button, obj5);
    obj4.children = items5;
    let tmp23 = callback(closure_3, obj4);
  } else {
    const obj6 = { style: tmp.comparisonSide, children: callback2(require(4126) /* Text */.Text, { variant: "text-xs/medium", color: "text-muted", children: "no mapping" }) };
    tmp23 = callback2(closure_3, obj6);
  }
  items4[1] = tmp23;
  obj1.children = items4;
  items2[1] = callback(closure_3, obj1);
  obj.children = items2;
  return callback(closure_3, obj);
}
function ComboRow(combo) {
  let color;
  let size;
  combo = combo.combo;
  const tmp = callback3();
  ({ color, size } = combo);
  let str = "";
  if (combo.shrink) {
    str = " / shrink";
  }
  const combined = "" + color + " / " + size + str;
  const hasItem = set.has(combo.color);
  let obj = {};
  const items = [tmp.comboRow, ];
  let darkBg = hasItem;
  if (hasItem) {
    darkBg = tmp.darkBg;
  }
  items[1] = darkBg;
  obj.style = items;
  obj = { variant: "text-xs/medium" };
  let str2 = "text-muted";
  if (hasItem) {
    str2 = "text-default";
  }
  obj.color = str2;
  const items1 = [combined, " (", combo.count, ")"];
  obj.children = items1;
  const items2 = [closure_4(require(4126) /* Text */.Text, obj), ];
  obj = { look: combo.look, color: combo.color, size: combo.size, shrink: combo.shrink, text: combined };
  let darkText = null;
  if (hasItem) {
    darkText = null;
    if (combo.look === require(1273) /* Button */.ButtonLooks.FILLED) {
      darkText = tmp.darkText;
    }
  }
  obj.textStyle = darkText;
  obj.onPress = function onPress() {

  };
  items2[1] = closure_5(require(1273) /* Button */.Button, obj);
  obj.children = items2;
  return closure_4(closure_3, obj);
}
({ ScrollView: closure_2, View: closure_3 } = get_ActivityIndicator);
({ jsxs: closure_4, jsx: closure_5 } = jsxProd);
let obj = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.LARGE, shrink: false, count: 1 };
let items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
obj = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 116 };
items[1] = obj;
obj = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.MEDIUM, shrink: true, count: 12 };
items[2] = obj;
items[3] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.SMALL, shrink: false, count: 5 };
let obj1 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.SMALL, shrink: false, count: 5 };
items[4] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.SMALL, shrink: true, count: 2 };
let obj2 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.SMALL, shrink: true, count: 2 };
items[5] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 4 };
let obj3 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 4 };
items[6] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.XSMALL, shrink: true, count: 1 };
let obj4 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.XSMALL, shrink: true, count: 1 };
items[7] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREEN, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 1 };
let obj5 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREEN, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 1 };
items[8] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREEN, size: require("Button").ButtonSizes.MEDIUM, shrink: true, count: 1 };
let obj6 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREEN, size: require("Button").ButtonSizes.MEDIUM, shrink: true, count: 1 };
items[9] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREEN, size: require("Button").ButtonSizes.SMALL, shrink: false, count: 1 };
const obj7 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREEN, size: require("Button").ButtonSizes.SMALL, shrink: false, count: 1 };
items[10] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREEN, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj8 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREEN, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
items[11] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREY, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 10 };
const obj9 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREY, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 10 };
items[12] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREY, size: require("Button").ButtonSizes.MEDIUM, shrink: true, count: 1 };
const obj10 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREY, size: require("Button").ButtonSizes.MEDIUM, shrink: true, count: 1 };
items[13] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREY, size: require("Button").ButtonSizes.SMALL, shrink: false, count: 2 };
const obj11 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREY, size: require("Button").ButtonSizes.SMALL, shrink: false, count: 2 };
items[14] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREY, size: require("Button").ButtonSizes.SMALL, shrink: true, count: 1 };
const obj12 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREY, size: require("Button").ButtonSizes.SMALL, shrink: true, count: 1 };
items[15] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREY, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj13 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREY, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
items[16] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.LIGHTGREY, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 2 };
const obj14 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.LIGHTGREY, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 2 };
items[17] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.LIGHTGREY, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj15 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.LIGHTGREY, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
items[18] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.PRIMARY, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 2 };
const obj16 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.PRIMARY, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 2 };
items[19] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.PRIMARY, size: require("Button").ButtonSizes.SMALL, shrink: true, count: 2 };
const obj17 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.PRIMARY, size: require("Button").ButtonSizes.SMALL, shrink: true, count: 2 };
items[20] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.PRIMARY, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 2 };
const obj18 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.PRIMARY, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 2 };
items[21] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.RED, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 8 };
const obj19 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.RED, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 8 };
items[22] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.RED, size: require("Button").ButtonSizes.MEDIUM, shrink: true, count: 1 };
const obj20 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.RED, size: require("Button").ButtonSizes.MEDIUM, shrink: true, count: 1 };
items[23] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.RED, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj21 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.RED, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
items[24] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.TRANSPARENT, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 8 };
const obj22 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.TRANSPARENT, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 8 };
items[25] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.TRANSPARENT, size: require("Button").ButtonSizes.MEDIUM, shrink: true, count: 3 };
const obj23 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.TRANSPARENT, size: require("Button").ButtonSizes.MEDIUM, shrink: true, count: 3 };
items[26] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.TRANSPARENT, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj24 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.TRANSPARENT, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
items[27] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.TRANSPARENT, size: require("Button").ButtonSizes.XSMALL, shrink: true, count: 1 };
const obj25 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.TRANSPARENT, size: require("Button").ButtonSizes.XSMALL, shrink: true, count: 1 };
items[28] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.WHITE, size: require("Button").ButtonSizes.SMALL, shrink: false, count: 1 };
const obj26 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.WHITE, size: require("Button").ButtonSizes.SMALL, shrink: false, count: 1 };
items[29] = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.XSMALL, shrink: true, count: 1 };
const obj27 = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.XSMALL, shrink: true, count: 1 };
items[30] = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.LINK, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 3 };
const obj28 = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.LINK, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 3 };
items[31] = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.LINK, size: require("Button").ButtonSizes.MEDIUM, shrink: true, count: 1 };
const obj29 = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.LINK, size: require("Button").ButtonSizes.MEDIUM, shrink: true, count: 1 };
items[32] = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.LINK, size: require("Button").ButtonSizes.SMALL, shrink: false, count: 2 };
const obj30 = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.LINK, size: require("Button").ButtonSizes.SMALL, shrink: false, count: 2 };
items[33] = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.LINK, size: require("Button").ButtonSizes.SMALL, shrink: true, count: 1 };
const obj31 = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.LINK, size: require("Button").ButtonSizes.SMALL, shrink: true, count: 1 };
items[34] = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.LINK, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj32 = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.LINK, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
items[35] = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.TRANSPARENT, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj33 = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.TRANSPARENT, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
items[36] = { look: require("Button").ButtonLooks.OUTLINED, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 2 };
const obj34 = { look: require("Button").ButtonLooks.OUTLINED, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 2 };
items[37] = { look: require("Button").ButtonLooks.OUTLINED, color: require("Button").ButtonColors.GREY, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 1 };
const obj35 = { look: require("Button").ButtonLooks.OUTLINED, color: require("Button").ButtonColors.GREY, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 1 };
items[38] = { look: require("Button").ButtonLooks.OUTLINED, color: require("Button").ButtonColors.PRIMARY, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 1 };
const obj36 = { look: require("Button").ButtonLooks.OUTLINED, color: require("Button").ButtonColors.PRIMARY, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 1 };
items[39] = { look: require("Button").ButtonLooks.OUTLINED, color: require("Button").ButtonColors.TRANSPARENT, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 1 };
const obj37 = { look: require("Button").ButtonLooks.OUTLINED, color: require("Button").ButtonColors.TRANSPARENT, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 1 };
items[40] = { look: require("Button").ButtonLooks.OUTLINED, color: require("Button").ButtonColors.WHITE, size: require("Button").ButtonSizes.SMALL, shrink: false, count: 1 };
let items1 = [require("Button").ButtonColors.WHITE];
let set = new Set(items1);
const obj39 = {};
const obj38 = { look: require("Button").ButtonLooks.OUTLINED, color: require("Button").ButtonColors.WHITE, size: require("Button").ButtonSizes.SMALL, shrink: false, count: 1 };
obj39.comboRow = { gap: 4, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360 };
obj39.darkText = _createForOfIteratorHelperLoose;
const obj40 = { gap: 4, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj39.darkBg = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_600, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8 };
const obj42 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_600, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj39.comparisonRow = { gap: 4, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8 };
const obj44 = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12, alignItems: "flex-end" };
obj39.comparisonButtons = obj44;
obj39.comparisonSide = { flex: 1, gap: 2 };
const obj43 = { gap: 4, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj39.container = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_48 };
const obj45 = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_48 };
obj39.header = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj39);
const result = set.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemLegacyButton.tsx");

export default function UserSettingsDesignSystemLegacyButton() {
  let iter2;
  let iter4;
  let iter6;
  const tmp = callback3();
  let obj = {};
  const tmp2 = _createForOfIteratorHelperLoose(items);
  let iter = tmp2();
  if (!iter.done) {
    do {
      let value = iter.value;
      let look = value.look;
      if (null == obj[look]) {
        obj[look] = [];
      }
      let arr = obj[look];
      arr = arr.push(value);
      iter2 = tmp2();
      iter = iter2;
    } while (!iter2.done);
  }
  const set = new Set();
  items = [];
  const tmp4 = _createForOfIteratorHelperLoose(items);
  let iter3 = tmp4();
  if (!iter3.done) {
    do {
      value = iter3.value;
      let _HermesInternal = HermesInternal;
      let combined = "" + value.look + "/" + value.color;
      if (!set.has(combined)) {
        let addResult = set.add(combined);
        obj = {};
        ({ look: obj3.look, color: obj3.color } = value);
        arr = items.push(obj);
      }
      iter4 = tmp4();
      iter3 = iter4;
    } while (!iter4.done);
  }
  obj = {};
  const tmp8 = _createForOfIteratorHelperLoose(items);
  let iter5 = tmp8();
  if (!iter5.done) {
    do {
      value = iter5.value;
      if (null == obj[value.look]) {
        obj[value.look] = [];
      }
      let arr3 = obj[value.look];
      let arr1 = arr3.push(value);
      iter6 = tmp8();
      iter5 = iter6;
    } while (!iter6.done);
  }
  const obj1 = { style: tmp.container };
  const obj2 = { spacing: 4, style: tmp.header };
  const items1 = [callback2(require(4126) /* Text */.Text, { variant: "heading-xl/bold", children: "Migration Mapping" }), callback2(require(4126) /* Text */.Text, { variant: "text-sm/normal", color: "text-muted", children: "Legacy (uikit-native) \u2192 Mana side-by-side" })];
  obj2.children = items1;
  const items2 = [callback(require(4541) /* Stack */.Stack, obj2), , , ];
  const entries = Object.entries(obj);
  items2[1] = entries.map((arg0) => {
    let arr;
    let tmp;
    [tmp, arr] = arg0;
    const obj = { title: tmp, children: arr.map((entry) => outer2_5(outer2_11, { entry }, arg1)) };
    return outer1_5(outer1_0(outer1_1[9]).FormSection, obj, "cmp-" + tmp);
  });
  const obj3 = { spacing: 4, style: tmp.header };
  const items3 = [callback2(require(4126) /* Text */.Text, { variant: "heading-xl/bold", children: "Legacy Button Audit" }), callback2(require(4126) /* Text */.Text, { variant: "text-sm/normal", color: "text-muted", children: "41 combinations across 185 importers" })];
  obj3.children = items3;
  items2[2] = callback(require(4541) /* Stack */.Stack, obj3);
  const entries1 = Object.entries(obj);
  items2[3] = entries1.map((arg0) => {
    let arr;
    let tmp;
    [tmp, arr] = arg0;
    const obj = { title: "" + tmp + " (" + arr.reduce((arg0, count) => arg0 + count.count, 0) + " usages)", children: arr.map((combo) => outer2_5(outer2_12, { combo }, arg1)) };
    return outer1_5(outer1_0(outer1_1[9]).FormSection, obj, tmp);
  });
  obj1.children = items2;
  return callback(closure_2, obj1);
};
