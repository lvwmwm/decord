// Module ID: 11203
// Function ID: 87147
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 11203 (_isNativeReflectConstruct)
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
let obj = { APPS: "apps", COMMANDS: "commands" };
let closure_6 = { selection: null };
let tmp2 = ((PersistedStore) => {
  class FrecencySectionStore {
    constructor() {
      self = this;
      tmp = FrecencySectionStore(this, FrecencySectionStore);
      obj = outer1_3(FrecencySectionStore);
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
  callback2(FrecencySectionStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      if (null != arg0) {
        const outer1_6 = arg0;
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getState",
    value() {
      return outer1_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "getSelection",
    value() {
      if (null != outer1_6.selection) {
        let COMMANDS = outer1_6.selection;
      } else {
        COMMANDS = outer1_5.COMMANDS;
      }
      return COMMANDS;
    }
  };
  items[2] = obj;
  return callback(FrecencySectionStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "FrecencySectionStore";
tmp2.persistKey = "FrecencySectionStore";
obj = {
  FRECENCY_SECTION_SET_SELECTION: function handleSetSelection(selection) {
    const obj = {};
    const merged = Object.assign(obj);
    obj["selection"] = selection.selection;
  }
};
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySectionStore.tsx");

export default tmp2;
export const FrecencySectionSelection = obj;
