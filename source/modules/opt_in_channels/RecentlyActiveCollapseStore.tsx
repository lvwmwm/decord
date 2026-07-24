// Module ID: 6763
// Function ID: 52987
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 6763 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import closure_1 from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import set from "_possibleConstructorReturn";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
let set = new Set();
let tmp3 = ((PersistedStore) => {
  class RecentlyActiveCollapseStore {
    constructor() {
      self = this;
      tmp = RecentlyActiveCollapseStore(this, RecentlyActiveCollapseStore);
      obj = outer1_3(RecentlyActiveCollapseStore);
      tmp2 = outer1_2;
      if (outer1_6()) {
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
  callback2(RecentlyActiveCollapseStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(guilds) {
      outer1_5.clear();
      if (null != guilds) {
        guilds = guilds.guilds;
        const item = guilds.forEach((arg0) => outer2_5.add(arg0));
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "isCollapsed",
    value(arg0) {
      return outer1_5.has(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      return { guilds: outer1_5 };
    }
  };
  items[2] = obj;
  return callback(RecentlyActiveCollapseStore, items);
})(require("initialize").PersistedStore);
tmp3.displayName = "RecentlyActiveCollapseStore";
tmp3.persistKey = "RecentlyActiveCollapseStore";
tmp3 = new tmp3(require("dispatcher"), {
  SET_RECENTLY_ACTIVE_COLLAPSED: function handleSetRecentlyActiveCollapsed(guildId) {
    guildId = guildId.guildId;
    if (guildId.collapsed) {
      obj.add(guildId);
    } else {
      obj.delete(guildId);
    }
  }
});
let result = set.fileFinishedImporting("modules/opt_in_channels/RecentlyActiveCollapseStore.tsx");

export default tmp3;
