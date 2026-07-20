// Module ID: 10835
// Function ID: 84086
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 10835 (_createForOfIteratorHelperLoose)
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
function fetchColors(arg0) {
  const arg1 = arg0;
  return promiseDeduper1.one(arg0, () => arg0(closure_2[8]).maybeFetchColors(arg0));
}
function _fetchApplicationParts() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _fetchApplicationParts = obj;
  return obj(...arguments);
}
function _fetchUserParts() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _fetchUserParts = obj;
  return obj(...arguments);
}
function _fetchWatchedContentParts() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _fetchWatchedContentParts = obj;
  return obj(...arguments);
}
function _fetchListenedContentParts() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _fetchListenedContentParts = obj;
  return obj(...arguments);
}
function _fetchTopArtistContentParts() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _fetchTopArtistContentParts = obj;
  return obj(...arguments);
}
function _loadContentEntryParts() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _loadContentEntryParts = obj;
  return obj(...arguments);
}
function isMessageRenderable(components) {
  const tmp = _createForOfIteratorHelperLoose(components.components);
  let iter = tmp();
  if (!iter.done) {
    while (true) {
      let value = iter.value;
      let tmp2 = arg1;
      let tmp3 = dependencyMap;
      if (value.type === arg1(dependencyMap[11]).ComponentType.CONTENT_INVENTORY_ENTRY) {
        let tmp4 = arg1;
        let tmp5 = dependencyMap;
        let obj = arg1(dependencyMap[12]);
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const ImageSizes = arg1(dependencyMap[4]).ImageSizes;
let promiseDeduper = new arg1(dependencyMap[5]).PromiseDeduper();
promiseDeduper = new arg1(dependencyMap[5]).PromiseDeduper();
const promiseDeduper1 = new arg1(dependencyMap[5]).PromiseDeduper();
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/interaction_components/content_inventory_entry/native/useLoadMessageContentEntries.tsx");

export default function useLoadMessageContentEntries(arg0) {
  const arg1 = arg0;
  let closure_1 = React.useRef(new Map());
  const map = new Map();
  let closure_2 = React.useRef(new Map());
  const map1 = new Map();
  const tmp4 = callback(React.useState(new Set()), 2);
  const first = tmp4[0];
  let callback = first;
  let closure_4 = tmp4[1];
  const set = new Set();
  const tmp7 = callback(React.useState(new Set()), 2);
  const first1 = tmp7[0];
  const React = first1;
  let closure_6 = tmp7[1];
  let obj = arg1(closure_2[8]);
  const colorStore = obj.useColorStore((palette) => palette.palette);
  callback = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function(arg0, arg1) {
      return callback(...arguments);
    };
  }(), []);
  const ImageSizes = callback;
  const items = [colorStore];
  const effect = React.useEffect(() => {
    if (0 !== ref.current.size) {
      const items = [];
      const arg0 = items;
      const current = ref.current;
      const item = current.forEach((arg0, arg1) => {
        if (callback(arg0)) {
          items.push(arg1);
        }
      });
      if (items.length > 0) {
        const item1 = items.forEach((arg0) => {
          const current = ref.current;
          const result = current.set(arg0, "loaded");
          const current2 = ref2.current;
          current2.delete(arg0);
        });
        callback((items) => {
          const set = new Set(items);
          items = set;
          const item = items.forEach((arg0) => set.delete(arg0));
          return set;
        });
      }
    }
  }, items);
  const items1 = [callback, arg0];
  const effect1 = React.useEffect(() => {
    const item = arg0.forEach((id) => {
      if (callback(closure_2[13])(id)) {
        if (null != id.messageSnapshots[0]) {
          callback2(id.id, id.messageSnapshots[0].message);
        }
      }
      callback2(id.id, id);
    });
  }, items1);
  const items2 = [first, first1];
  obj = {
    unloadedContentEntryMessageIds: first,
    unloadableContentEntryMessageIds: React.useMemo(() => {
      const set = new Set();
      const arg0 = set;
      const item = first.forEach((arg0) => set.add(arg0));
      const item1 = first1.forEach((arg0) => set.add(arg0));
      return set;
    }, items2)
  };
  return obj;
};
