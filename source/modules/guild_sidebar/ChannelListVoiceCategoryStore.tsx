// Module ID: 6760
// Function ID: 52977
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6760 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleChange(expand) {
  if (expand.expand) {
    tmp2[tmp] = true;
  } else {
    delete r1[r2];
  }
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = {};
let tmp2 = (PersistedStore) => {
  class ChannelListVoiceCategoryStore {
    constructor() {
      self = this;
      tmp = ChannelListVoiceCategoryStore(this, ChannelListVoiceCategoryStore);
      obj = closure_3(ChannelListVoiceCategoryStore);
      tmp2 = closure_2;
      if (closure_6()) {
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
  let closure_0 = ChannelListVoiceCategoryStore;
  callback2(ChannelListVoiceCategoryStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let obj = arg0;
      if (null == arg0) {
        obj = {};
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "isVoiceCategoryExpanded",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        tmp = closure_5[arg0];
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
      return closure_5;
    }
  };
  return callback(ChannelListVoiceCategoryStore, items);
}(importDefault(dependencyMap[5]).PersistedStore);
tmp2.displayName = "ChannelListVoiceCategoryStore";
tmp2.persistKey = "ChannelListVoiceCategoryStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), { VOICE_CATEGORY_COLLAPSE: handleChange, VOICE_CATEGORY_EXPAND: handleChange });
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_sidebar/ChannelListVoiceCategoryStore.tsx");

export default tmp2;
