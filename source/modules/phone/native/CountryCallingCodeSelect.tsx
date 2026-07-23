// Module ID: 9242
// Function ID: 72280
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 27, 3811, 33, 4130, 689, 9197, 3812, 8832, 5045, 5165, 4126, 5772, 9243, 8433, 1212, 9244, 2]
// Exports: default

// Module 9242 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { getI18NCountryName } from "getCountryCodeByCountryName";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
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
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW };
  const space = importDefault(689).space;
  obj.paddingHorizontal = arg0 ? space.PX_24 : space.PX_12;
  obj.paddingTop = importDefault(689).space.PX_16;
  const space2 = importDefault(689).space;
  obj.paddingBottom = arg0 ? space2.PX_24 : space2.PX_16;
  obj.flex = 1;
  obj.container = obj;
  obj = { paddingBottom: importDefault(689).space.PX_16 };
  obj.searchFieldContainer = obj;
  return obj;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/phone/native/CountryCallingCodeSelect.tsx");

export default function CountryCallingCodeSelect(onCountrySelected) {
  onCountrySelected = onCountrySelected.onCountrySelected;
  const onClose = onCountrySelected.onClose;
  let tmp = callback2(onClose(first[7])());
  let tmp2 = memo(rows.useState(""), 2);
  first = tmp2[0];
  memo = rows.useMemo(() => onClose(first[8]).flatMap((alpha2) => {
    let closure_1;
    let phoneCountryCodes;
    alpha2 = alpha2.alpha2;
    ({ phoneCountryCodes, name: closure_1 } = alpha2);
    let closure_2 = arg1;
    let _slicedToArray = outer2_6(alpha2);
    return phoneCountryCodes.map((code) => {
      obj = { translatedName: _slicedToArray, key: "" + closure_2 + "-" + code, country: obj };
      obj = { code, alpha2, name: closure_1 };
      return obj;
    });
  }), []);
  const items = [memo, first];
  const memo1 = rows.useMemo(() => {
    let iter2;
    const rows = [];
    const tmp = outer1_10(memo);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp2 = first;
        let startsWithResult = 0 === first.length;
        if (!startsWithResult) {
          let str = value.country.code;
          let replaced = str.replace(/\+|\s/g, "");
          let tmp4 = first;
          startsWithResult = replaced.startsWith(first.replace(/\+|\s/g, ""));
        }
        if (!startsWithResult) {
          let tmp5 = onClose;
          let tmp6 = first;
          let tmp8 = first;
          let tmp7 = onClose(first[10]);
          let str2 = value.country.name;
          let formatted = first.toLowerCase();
          startsWithResult = tmp7(formatted, str2.toLowerCase());
        }
        if (!startsWithResult) {
          let tmp10 = onClose;
          let tmp11 = first;
          let tmp13 = first;
          let tmp12 = onClose(first[10]);
          let str3 = value.translatedName;
          let formatted1 = first.toLowerCase();
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
  rows = memo1.rows;
  const items1 = [onClose, onCountrySelected, rows];
  let obj = { style: tmp.container };
  obj = { style: tmp.searchFieldContainer };
  const callback = rows.useCallback((arg0, arg1) => {
    const country = tmp.country;
    let obj = { start: 0 === arg1, end: arg1 === rows.length - 1, label: tmp.translatedName };
    obj = { variant: "text-md/semibold", children: country.code };
    obj.trailing = outer1_7(onCountrySelected(first[12]).Text, obj);
    obj.onPress = function onPress() {
      country(country);
      if (null != outer1_1) {
        outer1_1();
      }
    };
    return outer1_7(onCountrySelected(first[11]).TableRow, obj);
  }, items1);
  obj.children = callback(onCountrySelected(first[13]).SearchField, { size: "md", onChange: tmp2[1] });
  const items2 = [callback(View, obj), ];
  if ("" !== first) {
    if (0 === rows.length) {
      obj = { source: onClose(first[15]) };
      const intl = onCountrySelected(first[16]).intl;
      obj.text = intl.string(onCountrySelected(first[16]).t.wEHnxW);
      let tmp10 = callback(onClose(first[14]), obj);
      const tmp14 = onClose(first[14]);
    }
    items2[1] = tmp10;
    obj.children = items2;
    return closure_8(View, obj);
  }
  tmp10 = callback(onClose(first[17]), { sections: memo1.sections, renderItem: callback, itemSize: onClose(first[9])(), estimatedListSize: "windowSize", keyboardShouldPersistTaps: "always" });
};
