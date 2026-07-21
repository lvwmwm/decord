// Module ID: 9234
// Function ID: 72226
// Name: _createForOfIteratorHelperLoose
// Dependencies: [3, 1184, 2, 57, 31, 1450, 2, 31, 8820, 3972, 2, 31, 5230, 9244, 9245, 2, 9240, 2, 57]
// Exports: default

// Module 9234 (_createForOfIteratorHelperLoose)
import timestamp from "timestamp";
import isNonEmptyString from "isNonEmptyString";
import { View } from "result2";
import { getI18NCountryName } from "_slicedToArray";
import module_31 from "module_31";
import useWindowDimensions from "useWindowDimensions";
import _slicedToArray from "_slicedToArray";

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
({ jsx: closure_7, jsxs: closure_8 } = module_31);
let closure_9 = useWindowDimensions.createStyles((arg0) => {
  let obj = {};
  obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
  const space = importDefault(dependencyMap[6]).space;
  obj.paddingHorizontal = arg0 ? space.PX_24 : space.PX_12;
  obj.paddingTop = importDefault(dependencyMap[6]).space.PX_16;
  const space2 = importDefault(dependencyMap[6]).space;
  obj.paddingBottom = arg0 ? space2.PX_24 : space2.PX_16;
  obj.flex = 1;
  obj.container = obj;
  obj = { paddingBottom: importDefault(dependencyMap[6]).space.PX_16 };
  obj.searchFieldContainer = obj;
  return obj;
});
const result = _slicedToArray.fileFinishedImporting("modules/phone/native/CountryCallingCodeSelect.tsx");

export default function CountryCallingCodeSelect(onCountrySelected) {
  onCountrySelected = onCountrySelected.onCountrySelected;
  const arg1 = onCountrySelected;
  const onClose = onCountrySelected.onClose;
  const importDefault = onClose;
  const tmp = callback3(importDefault(dependencyMap[7])());
  const tmp2 = callback(React.useState(""), 2);
  const first = tmp2[0];
  const dependencyMap = first;
  const memo = React.useMemo(() => onClose(first[8]).flatMap((alpha2) => {
    let phoneCountryCodes;
    alpha2 = alpha2.alpha2;
    ({ phoneCountryCodes, name: closure_1 } = alpha2);
    let timestamp = callback(alpha2);
    return phoneCountryCodes.map((code) => {
      let obj = { translatedName: timestamp, key: "" + arg1 + "-" + code, country: obj };
      obj = { code, alpha2, name: closure_1 };
      return obj;
    });
  }), []);
  let callback = memo;
  const items = [memo, first];
  const memo1 = React.useMemo(() => {
    let iter2;
    const rows = [];
    const tmp = callback2(memo);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp2 = closure_2;
        let startsWithResult = 0 === closure_2.length;
        if (!startsWithResult) {
          let str = value.country.code;
          let replaced = str.replace(/\+|\s/g, "");
          let tmp4 = closure_2;
          startsWithResult = replaced.startsWith(closure_2.replace(/\+|\s/g, ""));
        }
        if (!startsWithResult) {
          let tmp5 = closure_1;
          let tmp6 = closure_2;
          let tmp8 = closure_2;
          let tmp7 = closure_1(closure_2[10]);
          let str2 = value.country.name;
          let formatted = closure_2.toLowerCase();
          startsWithResult = tmp7(formatted, str2.toLowerCase());
        }
        if (!startsWithResult) {
          let tmp10 = closure_1;
          let tmp11 = closure_2;
          let tmp13 = closure_2;
          let tmp12 = closure_1(closure_2[10]);
          let str3 = value.translatedName;
          let formatted1 = closure_2.toLowerCase();
          startsWithResult = tmp12(formatted1, str3.toLowerCase());
        }
        if (startsWithResult) {
          let arr = rows.push(value);
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
    const sections = [rows.length];
    return { rows, sections };
  }, items);
  const rows = memo1.rows;
  const React = rows;
  const items1 = [onClose, onCountrySelected, rows];
  let obj = { style: tmp.container };
  obj = { style: tmp.searchFieldContainer };
  callback = React.useCallback((arg0, arg1) => {
    const country = tmp.country;
    const onCountrySelected = country;
    let obj = { start: 0 === arg1, end: arg1 === rows.length - 1, label: tmp.translatedName };
    obj = { variant: "text-md/semibold", children: country.code };
    obj.trailing = callback(onCountrySelected(first[12]).Text, obj);
    obj.onPress = function onPress() {
      country(country);
      if (null != callback) {
        callback();
      }
    };
    return callback(onCountrySelected(first[11]).TableRow, obj);
  }, items1);
  obj.children = callback2(arg1(dependencyMap[13]).SearchField, { size: "md", onChange: tmp2[1] });
  const items2 = [callback2(View, obj), ];
  if ("" !== first) {
    if (0 === rows.length) {
      obj = { source: importDefault(dependencyMap[15]) };
      const intl = arg1(dependencyMap[16]).intl;
      obj.text = intl.string(arg1(dependencyMap[16]).t.wEHnxW);
      let tmp10 = callback2(importDefault(dependencyMap[14]), obj);
      const tmp14 = importDefault(dependencyMap[14]);
    }
    items2[1] = tmp10;
    obj.children = items2;
    return closure_8(View, obj);
  }
  tmp10 = callback2(importDefault(dependencyMap[17]), { sections: memo1.sections, renderItem: callback, itemSize: importDefault(dependencyMap[9])(), estimatedListSize: "windowSize", keyboardShouldPersistTaps: "always" });
};
