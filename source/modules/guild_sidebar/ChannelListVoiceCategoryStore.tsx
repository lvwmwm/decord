// Module ID: 6765
// Function ID: 53009
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 6765 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
function handleChange(expand) {
  if (expand.expand) {
    tmp4[tmp3] = true;
  } else {
    delete tmp[tmp2];
  }
}
let closure_5 = {};
let tmp2 = ((PersistedStore) => {
  class ChannelListVoiceCategoryStore {
    constructor() {
      self = this;
      tmp = ChannelListVoiceCategoryStore(this, ChannelListVoiceCategoryStore);
      obj = outer1_3(ChannelListVoiceCategoryStore);
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
  callback2(ChannelListVoiceCategoryStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let obj = arg0;
      if (null == arg0) {
        obj = {};
      }
      const outer1_5 = obj;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "isVoiceCategoryExpanded",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        tmp = outer1_5[arg0];
      }
      return null != tmp && tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "isVoiceCategoryCollapsed",
    value(arg0) {
      return !this.isVoiceCategoryExpanded(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getState",
    value() {
      return outer1_5;
    }
  };
  return callback(ChannelListVoiceCategoryStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "ChannelListVoiceCategoryStore";
tmp2.persistKey = "ChannelListVoiceCategoryStore";
tmp2 = new tmp2(require("dispatcher"), { VOICE_CATEGORY_COLLAPSE: handleChange, VOICE_CATEGORY_EXPAND: handleChange });
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_sidebar/ChannelListVoiceCategoryStore.tsx");

export default tmp2;
