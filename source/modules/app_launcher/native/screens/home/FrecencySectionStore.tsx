// Module ID: 11162
// Function ID: 86815
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11162 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let obj = { APPS: "apps", COMMANDS: "commands" };
let closure_6 = { selection: null };
let tmp2 = (PersistedStore) => {
  class FrecencySectionStore {
    constructor() {
      self = this;
      tmp = FrecencySectionStore(this, FrecencySectionStore);
      obj = closure_3(FrecencySectionStore);
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
  let closure_0 = FrecencySectionStore;
  callback2(FrecencySectionStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {

    }
  };
  const items = [obj, , ];
  obj = {
    key: "getState",
    value() {
      return closure_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "getSelection",
    value() {
      if (null != closure_6.selection) {
        let COMMANDS = closure_6.selection;
      } else {
        COMMANDS = constants.COMMANDS;
      }
      return COMMANDS;
    }
  };
  items[2] = obj;
  return callback(FrecencySectionStore, items);
}(importDefault(dependencyMap[5]).PersistedStore);
tmp2.displayName = "FrecencySectionStore";
tmp2.persistKey = "FrecencySectionStore";
obj = {
  FRECENCY_SECTION_SET_SELECTION: function handleSetSelection(selection) {
    const obj = {};
    const merged = Object.assign(closure_6);
    obj["selection"] = selection.selection;
    closure_6 = obj;
  }
};
tmp2 = new tmp2(importDefault(dependencyMap[6]), obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySectionStore.tsx");

export default tmp2;
export const FrecencySectionSelection = obj;
