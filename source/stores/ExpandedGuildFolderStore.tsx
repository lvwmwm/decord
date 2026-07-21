// Module ID: 5241
// Function ID: 44324
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5241 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let closure_0 = Symbol_iterator;
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
      closure_0 = tmp;
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
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
const set = new Set();
let tmp3 = (PersistedStore) => {
  class ExpandedGuildFolderStore {
    constructor() {
      self = this;
      tmp = ExpandedGuildFolderStore(this, ExpandedGuildFolderStore);
      obj = closure_3(ExpandedGuildFolderStore);
      tmp2 = closure_2;
      if (closure_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = ExpandedGuildFolderStore;
  callback2(ExpandedGuildFolderStore, PersistedStore);
  let obj = {
    key: "initialize",
    value: function initialize(expandedFolders) {
      const self = this;
      if (null != expandedFolders) {
        const _Set = Set;
        const set = new Set(expandedFolders.expandedFolders);
      }
      self.waitFor(closure_5);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getState",
    value: function getState() {
      return { expandedFolders: Array.from(closure_6) };
    }
  };
  items[1] = obj;
  obj = {
    key: "getExpandedFolders",
    value: function getExpandedFolders() {
      return closure_6;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isFolderExpanded",
    value: function isFolderExpanded(folderId) {
      return set.has(folderId);
    }
  };
  return callback(ExpandedGuildFolderStore, items);
}(importDefault(dependencyMap[6]).PersistedStore);
tmp3.displayName = "ExpandedGuildFolderStore";
tmp3.persistKey = "ExpandedGuildFolderStore";
tmp3 = new tmp3(importDefault(dependencyMap[7]), {
  TOGGLE_GUILD_FOLDER_EXPAND: function toggleFolderExpand(folderId) {
    folderId = folderId.folderId;
    const set = new Set(set);
    if (set.has(folderId)) {
      obj2.delete(folderId);
    } else {
      obj2.add(folderId);
    }
  },
  SET_GUILD_FOLDER_EXPANDED: function setFolderExpanded(folderId) {
    folderId = folderId.folderId;
    const set = new Set(set);
    if (folderId.expanded) {
      obj.add(folderId);
    } else if (obj.has(folderId)) {
      set.delete(folderId);
    }
  },
  USER_SETTINGS_PROTO_UPDATE: function handleSettingsUpdate() {
    let done;
    const guildFolders = guildFolders.getGuildFolders();
    let closure_0 = guildFolders;
    if (null == guildFolders) {
      return false;
    } else {
      let closure_1 = false;
      function _loop(value) {
        const guildFolders = value;
        if (!guildFolders.some((folderId) => folderId.folderId === folderId)) {
          const _Set = Set;
          const set = new Set(set);
          set.delete(value);
          let closure_1 = true;
        }
      }
      const tmp4 = _createForOfIteratorHelperLoose(set);
      let iter = tmp4();
      if (!iter.done) {
        do {
          let _loopResult = _loop(iter.value);
          let iter2 = tmp4();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      return closure_1;
    }
  },
  GUILD_FOLDER_COLLAPSE: function handleCollapseAll() {
    if (0 === set.size) {
      return false;
    } else {
      const _Set = Set;
      const set = new Set();
    }
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("stores/ExpandedGuildFolderStore.tsx");

export default tmp3;
