// Module ID: 4971
// Function ID: 42758
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1316, 566, 686, 2]

// Module 4971 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "_possibleConstructorReturn";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let initialize = iterable;
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
      initialize = tmp;
    }
    let c1 = 0;
    return () => {
      if (dispatcher >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        dispatcher = tmp3 + 1;
        obj.value = length[+dispatcher];
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
let set = new Set();
let tmp3 = ((PersistedStore) => {
  class ExpandedGuildFolderStore {
    constructor() {
      self = this;
      tmp = ExpandedGuildFolderStore(this, ExpandedGuildFolderStore);
      obj = outer1_3(ExpandedGuildFolderStore);
      tmp2 = outer1_2;
      if (outer1_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ExpandedGuildFolderStore, PersistedStore);
  let obj = {
    key: "initialize",
    value: function initialize(expandedFolders) {
      const self = this;
      if (null != expandedFolders) {
        const _Set = Set;
        const set = new Set(expandedFolders.expandedFolders);
        const outer1_6 = set;
      }
      self.waitFor(outer1_5);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getState",
    value: function getState() {
      return { expandedFolders: Array.from(outer1_6) };
    }
  };
  items[1] = obj;
  obj = {
    key: "getExpandedFolders",
    value: function getExpandedFolders() {
      return outer1_6;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isFolderExpanded",
    value: function isFolderExpanded(folderId) {
      return outer1_6.has(folderId);
    }
  };
  return callback(ExpandedGuildFolderStore, items);
})(require("initialize").PersistedStore);
tmp3.displayName = "ExpandedGuildFolderStore";
tmp3.persistKey = "ExpandedGuildFolderStore";
tmp3 = new tmp3(require("dispatcher"), {
  TOGGLE_GUILD_FOLDER_EXPAND: function toggleFolderExpand(folderId) {
    folderId = folderId.folderId;
    set = new Set(set);
    if (set.has(folderId)) {
      obj2.delete(folderId);
    } else {
      obj2.add(folderId);
    }
  },
  SET_GUILD_FOLDER_EXPANDED: function setFolderExpanded(folderId) {
    folderId = folderId.folderId;
    set = new Set(set);
    if (folderId.expanded) {
      obj.add(folderId);
    } else if (obj.has(folderId)) {
      set.delete(folderId);
    }
  },
  USER_SETTINGS_PROTO_UPDATE: function handleSettingsUpdate() {
    let done;
    guildFolders = guildFolders.getGuildFolders();
    if (null == guildFolders) {
      return false;
    } else {
      let c1 = false;
      function _loop(value) {
        const guildFolders = value;
        if (!guildFolders.some((folderId) => folderId.folderId === initialize)) {
          const _Set = Set;
          const set = new Set(outer1_6);
          outer1_6 = set;
          set.delete(value);
          let c1 = true;
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
      return c1;
    }
  },
  GUILD_FOLDER_COLLAPSE: function handleCollapseAll() {
    if (0 === set.size) {
      return false;
    } else {
      const _Set = Set;
      set = new Set();
    }
  }
});
let result = set.fileFinishedImporting("stores/ExpandedGuildFolderStore.tsx");

export default tmp3;
