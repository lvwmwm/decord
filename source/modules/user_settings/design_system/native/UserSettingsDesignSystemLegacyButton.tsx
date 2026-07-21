// Module ID: 14303
// Function ID: 108065
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 14303 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  if (entry.look !== arg1(dependencyMap[3]).ButtonLooks.LINK) {
    let obj = arg1(dependencyMap[3]);
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
  const items2 = [callback(arg1(dependencyMap[4]).Text, obj), ];
  const obj1 = { style: tmp.comparisonButtons };
  const obj2 = { style: tmp.comparisonSide };
  const items3 = [callback2(arg1(dependencyMap[4]).Text, { deer: "Header Button", Ufm9XX: "A specialized version of the 'secondary-overlay' Button which functions as both a Header and a button.", playstationVersion: false }), ];
  const obj3 = { look: entry.look, color: entry.color, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: true, text: combined };
  let darkText = null;
  if (hasItem) {
    darkText = null;
    if (entry.look === arg1(dependencyMap[3]).ButtonLooks.FILLED) {
      darkText = tmp.darkText;
    }
  }
  obj3.textStyle = darkText;
  obj3.onPress = function onPress() {

  };
  items3[1] = callback2(arg1(dependencyMap[3]).Button, obj3);
  obj2.children = items3;
  const items4 = [callback(closure_3, obj2), ];
  if (null != redesignVariant) {
    const obj4 = { style: tmp.comparisonSide };
    const items5 = [callback2(arg1(dependencyMap[4]).Text, { deer: -1903738113, Ufm9XX: 664600577, playstationVersion: 18939905 }), ];
    const obj5 = {
      variant: redesignVariant,
      size: "md",
      text: redesignVariant,
      onPress() {

        }
    };
    items5[1] = callback2(arg1(dependencyMap[5]).Button, obj5);
    obj4.children = items5;
    let tmp23 = callback(closure_3, obj4);
  } else {
    const obj6 = { style: tmp.comparisonSide, children: callback2(arg1(dependencyMap[4]).Text, { deer: "<string:2355167488>", Ufm9XX: "<string:38770753>", playstationVersion: "<string:4294603008>" }) };
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
  const items2 = [closure_4(arg1(dependencyMap[4]).Text, obj), ];
  obj = { look: combo.look, color: combo.color, size: combo.size, shrink: combo.shrink, text: combined };
  let darkText = null;
  if (hasItem) {
    darkText = null;
    if (combo.look === arg1(dependencyMap[3]).ButtonLooks.FILLED) {
      darkText = tmp.darkText;
    }
  }
  obj.textStyle = darkText;
  obj.onPress = function onPress() {

  };
  items2[1] = closure_5(arg1(dependencyMap[3]).Button, obj);
  obj.children = items2;
  return closure_4(closure_3, obj);
}
importAll(dependencyMap[0]);
({ ScrollView: closure_2, View: closure_3 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsxs: closure_4, jsx: closure_5 } = arg1(dependencyMap[2]));
let obj = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.BRAND, size: arg1(dependencyMap[3]).ButtonSizes.LARGE, shrink: false, count: 1 };
const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
obj = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.BRAND, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: false, count: 116 };
items[1] = obj;
obj = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.BRAND, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: true, count: 12 };
items[2] = obj;
const tmp4 = arg1(dependencyMap[2]);
items[3] = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.BRAND, size: arg1(dependencyMap[3]).ButtonSizes.SMALL, shrink: false, count: 5 };
const obj1 = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.BRAND, size: arg1(dependencyMap[3]).ButtonSizes.SMALL, shrink: false, count: 5 };
items[4] = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.BRAND, size: arg1(dependencyMap[3]).ButtonSizes.SMALL, shrink: true, count: 2 };
const obj2 = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.BRAND, size: arg1(dependencyMap[3]).ButtonSizes.SMALL, shrink: true, count: 2 };
items[5] = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.BRAND, size: arg1(dependencyMap[3]).ButtonSizes.XSMALL, shrink: false, count: 4 };
const obj3 = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.BRAND, size: arg1(dependencyMap[3]).ButtonSizes.XSMALL, shrink: false, count: 4 };
items[6] = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.BRAND, size: arg1(dependencyMap[3]).ButtonSizes.XSMALL, shrink: true, count: 1 };
const obj4 = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.BRAND, size: arg1(dependencyMap[3]).ButtonSizes.XSMALL, shrink: true, count: 1 };
items[7] = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.GREEN, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: false, count: 1 };
const obj5 = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.GREEN, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: false, count: 1 };
items[8] = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.GREEN, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: true, count: 1 };
const obj6 = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.GREEN, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: true, count: 1 };
items[9] = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.GREEN, size: arg1(dependencyMap[3]).ButtonSizes.SMALL, shrink: false, count: 1 };
const obj7 = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.GREEN, size: arg1(dependencyMap[3]).ButtonSizes.SMALL, shrink: false, count: 1 };
items[10] = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.GREEN, size: arg1(dependencyMap[3]).ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj8 = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.GREEN, size: arg1(dependencyMap[3]).ButtonSizes.XSMALL, shrink: false, count: 1 };
items[11] = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.GREY, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: false, count: 10 };
const obj9 = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.GREY, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: false, count: 10 };
items[12] = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.GREY, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: true, count: 1 };
const obj10 = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.GREY, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: true, count: 1 };
items[13] = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.GREY, size: arg1(dependencyMap[3]).ButtonSizes.SMALL, shrink: false, count: 2 };
const obj11 = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.GREY, size: arg1(dependencyMap[3]).ButtonSizes.SMALL, shrink: false, count: 2 };
items[14] = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.GREY, size: arg1(dependencyMap[3]).ButtonSizes.SMALL, shrink: true, count: 1 };
const obj12 = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.GREY, size: arg1(dependencyMap[3]).ButtonSizes.SMALL, shrink: true, count: 1 };
items[15] = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.GREY, size: arg1(dependencyMap[3]).ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj13 = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.GREY, size: arg1(dependencyMap[3]).ButtonSizes.XSMALL, shrink: false, count: 1 };
items[16] = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.LIGHTGREY, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: false, count: 2 };
const obj14 = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.LIGHTGREY, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: false, count: 2 };
items[17] = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.LIGHTGREY, size: arg1(dependencyMap[3]).ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj15 = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.LIGHTGREY, size: arg1(dependencyMap[3]).ButtonSizes.XSMALL, shrink: false, count: 1 };
items[18] = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.PRIMARY, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: false, count: 2 };
const obj16 = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.PRIMARY, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: false, count: 2 };
items[19] = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.PRIMARY, size: arg1(dependencyMap[3]).ButtonSizes.SMALL, shrink: true, count: 2 };
const obj17 = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.PRIMARY, size: arg1(dependencyMap[3]).ButtonSizes.SMALL, shrink: true, count: 2 };
items[20] = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.PRIMARY, size: arg1(dependencyMap[3]).ButtonSizes.XSMALL, shrink: false, count: 2 };
const obj18 = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.PRIMARY, size: arg1(dependencyMap[3]).ButtonSizes.XSMALL, shrink: false, count: 2 };
items[21] = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.RED, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: false, count: 8 };
const obj19 = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.RED, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: false, count: 8 };
items[22] = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.RED, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: true, count: 1 };
const obj20 = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.RED, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: true, count: 1 };
items[23] = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.RED, size: arg1(dependencyMap[3]).ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj21 = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.RED, size: arg1(dependencyMap[3]).ButtonSizes.XSMALL, shrink: false, count: 1 };
items[24] = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.TRANSPARENT, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: false, count: 8 };
const obj22 = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.TRANSPARENT, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: false, count: 8 };
items[25] = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.TRANSPARENT, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: true, count: 3 };
const obj23 = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.TRANSPARENT, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: true, count: 3 };
items[26] = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.TRANSPARENT, size: arg1(dependencyMap[3]).ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj24 = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.TRANSPARENT, size: arg1(dependencyMap[3]).ButtonSizes.XSMALL, shrink: false, count: 1 };
items[27] = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.TRANSPARENT, size: arg1(dependencyMap[3]).ButtonSizes.XSMALL, shrink: true, count: 1 };
const obj25 = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.TRANSPARENT, size: arg1(dependencyMap[3]).ButtonSizes.XSMALL, shrink: true, count: 1 };
items[28] = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.WHITE, size: arg1(dependencyMap[3]).ButtonSizes.SMALL, shrink: false, count: 1 };
const obj26 = { look: arg1(dependencyMap[3]).ButtonLooks.FILLED, color: arg1(dependencyMap[3]).ButtonColors.WHITE, size: arg1(dependencyMap[3]).ButtonSizes.SMALL, shrink: false, count: 1 };
items[29] = { look: arg1(dependencyMap[3]).ButtonLooks.LINK, color: arg1(dependencyMap[3]).ButtonColors.BRAND, size: arg1(dependencyMap[3]).ButtonSizes.XSMALL, shrink: true, count: 1 };
const obj27 = { look: arg1(dependencyMap[3]).ButtonLooks.LINK, color: arg1(dependencyMap[3]).ButtonColors.BRAND, size: arg1(dependencyMap[3]).ButtonSizes.XSMALL, shrink: true, count: 1 };
items[30] = { look: arg1(dependencyMap[3]).ButtonLooks.LINK, color: arg1(dependencyMap[3]).ButtonColors.LINK, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: false, count: 3 };
const obj28 = { look: arg1(dependencyMap[3]).ButtonLooks.LINK, color: arg1(dependencyMap[3]).ButtonColors.LINK, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: false, count: 3 };
items[31] = { look: arg1(dependencyMap[3]).ButtonLooks.LINK, color: arg1(dependencyMap[3]).ButtonColors.LINK, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: true, count: 1 };
const obj29 = { look: arg1(dependencyMap[3]).ButtonLooks.LINK, color: arg1(dependencyMap[3]).ButtonColors.LINK, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: true, count: 1 };
items[32] = { look: arg1(dependencyMap[3]).ButtonLooks.LINK, color: arg1(dependencyMap[3]).ButtonColors.LINK, size: arg1(dependencyMap[3]).ButtonSizes.SMALL, shrink: false, count: 2 };
const obj30 = { look: arg1(dependencyMap[3]).ButtonLooks.LINK, color: arg1(dependencyMap[3]).ButtonColors.LINK, size: arg1(dependencyMap[3]).ButtonSizes.SMALL, shrink: false, count: 2 };
items[33] = { look: arg1(dependencyMap[3]).ButtonLooks.LINK, color: arg1(dependencyMap[3]).ButtonColors.LINK, size: arg1(dependencyMap[3]).ButtonSizes.SMALL, shrink: true, count: 1 };
const obj31 = { look: arg1(dependencyMap[3]).ButtonLooks.LINK, color: arg1(dependencyMap[3]).ButtonColors.LINK, size: arg1(dependencyMap[3]).ButtonSizes.SMALL, shrink: true, count: 1 };
items[34] = { look: arg1(dependencyMap[3]).ButtonLooks.LINK, color: arg1(dependencyMap[3]).ButtonColors.LINK, size: arg1(dependencyMap[3]).ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj32 = { look: arg1(dependencyMap[3]).ButtonLooks.LINK, color: arg1(dependencyMap[3]).ButtonColors.LINK, size: arg1(dependencyMap[3]).ButtonSizes.XSMALL, shrink: false, count: 1 };
items[35] = { look: arg1(dependencyMap[3]).ButtonLooks.LINK, color: arg1(dependencyMap[3]).ButtonColors.TRANSPARENT, size: arg1(dependencyMap[3]).ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj33 = { look: arg1(dependencyMap[3]).ButtonLooks.LINK, color: arg1(dependencyMap[3]).ButtonColors.TRANSPARENT, size: arg1(dependencyMap[3]).ButtonSizes.XSMALL, shrink: false, count: 1 };
items[36] = { look: arg1(dependencyMap[3]).ButtonLooks.OUTLINED, color: arg1(dependencyMap[3]).ButtonColors.BRAND, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: false, count: 2 };
const obj34 = { look: arg1(dependencyMap[3]).ButtonLooks.OUTLINED, color: arg1(dependencyMap[3]).ButtonColors.BRAND, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: false, count: 2 };
items[37] = { look: arg1(dependencyMap[3]).ButtonLooks.OUTLINED, color: arg1(dependencyMap[3]).ButtonColors.GREY, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: false, count: 1 };
const obj35 = { look: arg1(dependencyMap[3]).ButtonLooks.OUTLINED, color: arg1(dependencyMap[3]).ButtonColors.GREY, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: false, count: 1 };
items[38] = { look: arg1(dependencyMap[3]).ButtonLooks.OUTLINED, color: arg1(dependencyMap[3]).ButtonColors.PRIMARY, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: false, count: 1 };
const obj36 = { look: arg1(dependencyMap[3]).ButtonLooks.OUTLINED, color: arg1(dependencyMap[3]).ButtonColors.PRIMARY, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: false, count: 1 };
items[39] = { look: arg1(dependencyMap[3]).ButtonLooks.OUTLINED, color: arg1(dependencyMap[3]).ButtonColors.TRANSPARENT, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: false, count: 1 };
const obj37 = { look: arg1(dependencyMap[3]).ButtonLooks.OUTLINED, color: arg1(dependencyMap[3]).ButtonColors.TRANSPARENT, size: arg1(dependencyMap[3]).ButtonSizes.MEDIUM, shrink: false, count: 1 };
items[40] = { look: arg1(dependencyMap[3]).ButtonLooks.OUTLINED, color: arg1(dependencyMap[3]).ButtonColors.WHITE, size: arg1(dependencyMap[3]).ButtonSizes.SMALL, shrink: false, count: 1 };
const items1 = [arg1(dependencyMap[3]).ButtonColors.WHITE];
const set = new Set(items1);
let obj41 = arg1(dependencyMap[6]);
const obj39 = {};
const obj38 = { look: arg1(dependencyMap[3]).ButtonLooks.OUTLINED, color: arg1(dependencyMap[3]).ButtonColors.WHITE, size: arg1(dependencyMap[3]).ButtonSizes.SMALL, shrink: false, count: 1 };
obj39.comboRow = { gap: 4, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, paddingVertical: importDefault(dependencyMap[7]).space.PX_4 };
obj41 = { color: importDefault(dependencyMap[7]).unsafe_rawColors.GREEN_360 };
obj39.darkText = obj41;
const obj40 = { gap: 4, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, paddingVertical: importDefault(dependencyMap[7]).space.PX_4 };
obj39.darkBg = { backgroundColor: importDefault(dependencyMap[7]).unsafe_rawColors.PRIMARY_600, borderRadius: importDefault(dependencyMap[7]).radii.sm, marginHorizontal: importDefault(dependencyMap[7]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_8, paddingVertical: importDefault(dependencyMap[7]).space.PX_8 };
const obj42 = { backgroundColor: importDefault(dependencyMap[7]).unsafe_rawColors.PRIMARY_600, borderRadius: importDefault(dependencyMap[7]).radii.sm, marginHorizontal: importDefault(dependencyMap[7]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_8, paddingVertical: importDefault(dependencyMap[7]).space.PX_8 };
obj39.comparisonRow = { gap: 4, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, paddingVertical: importDefault(dependencyMap[7]).space.PX_8 };
const obj43 = { gap: 4, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, paddingVertical: importDefault(dependencyMap[7]).space.PX_8 };
obj39.comparisonButtons = { gap: importDefault(dependencyMap[7]).space.PX_12 };
obj39.comparisonSide = { "Bool(false)": null, "Bool(false)": null };
const obj44 = { gap: importDefault(dependencyMap[7]).space.PX_12 };
obj39.container = { paddingBottom: importDefault(dependencyMap[7]).space.PX_48 };
const obj45 = { paddingBottom: importDefault(dependencyMap[7]).space.PX_48 };
obj39.header = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, paddingTop: importDefault(dependencyMap[7]).space.PX_16, paddingBottom: importDefault(dependencyMap[7]).space.PX_8 };
let closure_8 = obj41.createStyles(obj39);
const obj46 = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, paddingTop: importDefault(dependencyMap[7]).space.PX_16, paddingBottom: importDefault(dependencyMap[7]).space.PX_8 };
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemLegacyButton.tsx");

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
  const items = [];
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
  const items1 = [callback2(arg1(dependencyMap[4]).Text, { <string:1749439162>: null, <string:140675621>: "lg" }), callback2(arg1(dependencyMap[4]).Text, { deer: null, Ufm9XX: "end", playstationVersion: "Copy, http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" })];
  obj2.children = items1;
  const items2 = [callback(arg1(dependencyMap[8]).Stack, obj2), , , ];
  const entries = Object.entries(obj);
  items2[1] = entries.map((arg0) => {
    let arr;
    let tmp;
    [tmp, arr] = arg0;
    const obj = { title: tmp, children: arr.map((entry) => callback(closure_11, { entry }, arg1)) };
    return callback2(callback(closure_1[9]).FormSection, obj, "cmp-" + tmp);
  });
  const obj3 = { spacing: 4, style: tmp.header };
  const items3 = [callback2(arg1(dependencyMap[4]).Text, { <string:1749439162>: "st", <string:140675621>: "r" }), callback2(arg1(dependencyMap[4]).Text, { deer: "<string:553648487>", Ufm9XX: "<string:1095962449>", playstationVersion: "This is a custom button" })];
  obj3.children = items3;
  items2[2] = callback(arg1(dependencyMap[8]).Stack, obj3);
  const entries1 = Object.entries(obj);
  items2[3] = entries1.map((arg0) => {
    let arr;
    let tmp;
    [tmp, arr] = arg0;
    const obj = { title: "" + tmp + " (" + arr.reduce((arg0, count) => arg0 + count.count, 0) + " usages)", children: arr.map((combo) => callback(closure_12, { combo }, arg1)) };
    return callback2(callback(closure_1[9]).FormSection, obj, tmp);
  });
  obj1.children = items2;
  return callback(closure_2, obj1);
};
