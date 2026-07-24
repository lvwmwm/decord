// Module ID: 6651
// Function ID: 51100
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 27, 653, 566, 675, 1934, 686, 2]

// Module 6651 (_isNativeReflectConstruct)
import ME from "ME";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { AppStates } from "ME";
import promise from "expandLocation";

function _isNativeReflectConstruct() {
  let ME = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return ME;
  }
  const result = _isNativeReflectConstruct();
}
const currentState = require("get ActivityIndicator").AppState.currentState;
let c7 = null;
let tmp2 = ((Store) => {
  class AppStateStore {
    constructor() {
      self = this;
      tmp = AppStateStore(this, AppStateStore);
      obj = outer1_3(AppStateStore);
      tmp2 = outer1_2;
      if (outer1_8()) {
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
  callback2(AppStateStore, Store);
  let obj = {
    key: "getState",
    value() {
      return outer1_6;
    }
  };
  const items = [obj, ];
  obj = {
    key: "getLastActiveTime",
    value() {
      return outer1_7;
    }
  };
  items[1] = obj;
  return callback(AppStateStore, items);
})(require("initialize").Store);
tmp2.displayName = "AppStateStore";
require("expandLocation").then((addExtraAnalyticsDecorator) => {
  const result = addExtraAnalyticsDecorator.addExtraAnalyticsDecorator((arg0) => {
    arg0.client_app_state = outer1_6;
  });
});
tmp2 = new tmp2(require("dispatcher"), {
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    if (state === state.state) {
      return false;
    } else {
      state = state.state;
      if (state === AppStates.ACTIVE) {
        const _Date = Date;
        let closure_7 = Date.now();
      }
    }
  }
});
let obj = {
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    if (state === state.state) {
      return false;
    } else {
      state = state.state;
      if (state === AppStates.ACTIVE) {
        const _Date = Date;
        let closure_7 = Date.now();
      }
    }
  }
};
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/native/AppStateStore.tsx");

export default tmp2;
