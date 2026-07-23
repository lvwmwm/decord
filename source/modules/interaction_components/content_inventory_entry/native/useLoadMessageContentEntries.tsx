// Module ID: 10852
// Function ID: 84182
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 5, 31, 4167, 4155, 10853, 7889, 5465, 7812, 44, 7820, 1881, 7809, 5679, 2]
// Exports: default

// Module 10852 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ImageSizes } from "items3";

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
function fetchColors(arg0) {
  let closure_0 = arg0;
  return promiseDeduper1.one(arg0, () => callback(outer1_2[8]).maybeFetchColors(callback));
}
function _fetchApplicationParts() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchUserParts() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchWatchedContentParts() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchListenedContentParts() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchTopArtistContentParts() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _loadContentEntryParts() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function isMessageRenderable(components) {
  const tmp = _createForOfIteratorHelperLoose(components.components);
  let iter = tmp();
  if (!iter.done) {
    while (true) {
      let value = iter.value;
      let tmp2 = require;
      let tmp3 = dependencyMap;
      if (value.type === require(1881) /* PermissionOverwriteType */.ComponentType.CONTENT_INVENTORY_ENTRY) {
        let tmp4 = require;
        let tmp5 = dependencyMap;
        let obj = require(7809) /* getMissingIconURL */;
        obj = {};
        obj = { contentInventoryEntry: value.contentInventoryEntry };
        obj.component = obj;
        obj.message = components;
        if (null == obj.transformToRowGeneratedContentInventoryEntryComponent(obj)) {
          break;
        }
      }
      let iter2 = tmp();
      iter = iter2;
    }
    return false;
  }
  return true;
}
let promiseDeduper = new require("_createForOfIteratorHelperLoose").PromiseDeduper();
promiseDeduper = new require("_createForOfIteratorHelperLoose").PromiseDeduper();
const promiseDeduper1 = new require("_createForOfIteratorHelperLoose").PromiseDeduper();
let result = require("result").fileFinishedImporting("modules/interaction_components/content_inventory_entry/native/useLoadMessageContentEntries.tsx");

export default function useLoadMessageContentEntries(arg0) {
  const _require = arg0;
  let closure_1 = first1.useRef(new Map());
  const map = new Map();
  const dependencyMap = first1.useRef(new Map());
  const map1 = new Map();
  const tmp4 = first(first1.useState(new Set()), 2);
  first = tmp4[0];
  let _createForOfIteratorHelperLoose = tmp4[1];
  let set = new Set();
  const tmp7 = first(first1.useState(new Set()), 2);
  first1 = tmp7[0];
  let _isNativeReflectConstruct = tmp7[1];
  let obj = _require(7812);
  const colorStore = obj.useColorStore((palette) => palette.palette);
  const callback = first1.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function(arg0, arg1) {
      return callback(...arguments);
    };
  })(), []);
  let items = [colorStore];
  const effect = first1.useEffect(() => {
    if (0 !== ref.current.size) {
      const items = [];
      let current = ref.current;
      let item = current.forEach((arg0, arg1) => {
        if (outer2_20(arg0)) {
          items.push(arg1);
        }
      });
      if (items.length > 0) {
        const item1 = items.forEach((arg0) => {
          const current = outer1_1.current;
          const result = current.set(arg0, "loaded");
          const current2 = outer1_2.current;
          current2.delete(arg0);
        });
        callback((items) => {
          const set = new Set(items);
          const item = set.forEach((arg0) => set.delete(arg0));
          return set;
        });
      }
    }
  }, items);
  const items1 = [callback, arg0];
  const effect1 = first1.useEffect(() => {
    const item = closure_0.forEach((id) => {
      if (callback(table[13])(id)) {
        if (null != id.messageSnapshots[0]) {
          outer1_7(id.id, id.messageSnapshots[0].message);
        }
      }
      outer1_7(id.id, id);
    });
  }, items1);
  const items2 = [first, first1];
  obj = {
    unloadedContentEntryMessageIds: first,
    unloadableContentEntryMessageIds: first1.useMemo(() => {
      const set = new Set();
      const item = first.forEach((arg0) => set.add(arg0));
      const item1 = first1.forEach((arg0) => set.add(arg0));
      return set;
    }, items2)
  };
  return obj;
};
