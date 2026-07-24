// Module ID: 7530
// Function ID: 60017
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 27, 7531, 2]

// Module 7530 (_isNativeReflectConstruct)
import StatusBarManager from "StatusBarManager";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
const tmp2 = ((StatusBar) => {
  class StatusBarAndroid {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_2(this, StatusBarAndroid);
      items1 = [...items];
      obj = outer1_5(StatusBarAndroid);
      tmp2 = outer1_4;
      if (outer1_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, items1, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result._stackEntry = null;
      return tmp2Result;
    }
  }
  callback2(StatusBarAndroid, StatusBar);
  let obj = {
    key: "componentDidMount",
    value() {
      this._stackEntry = StatusBarAndroid(outer1_1[6]).pushStackEntry(this.props);
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "componentDidUpdate",
    value() {
      this._stackEntry = StatusBarAndroid(outer1_1[6]).replaceStackEntry(this._stackEntry, this.props);
    }
  };
  items[1] = obj;
  obj = {
    key: "componentWillUnmount",
    value() {
      StatusBarAndroid(outer1_1[6]).popStackEntry(this._stackEntry);
      this._stackEntry = null;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value() {
      return null;
    }
  };
  return callback(StatusBarAndroid, items);
})(require("get ActivityIndicator").StatusBar);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/status_bar/native/components/StatusBar.android.tsx");

export default tmp2;
