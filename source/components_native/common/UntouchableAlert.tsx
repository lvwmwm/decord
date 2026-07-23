// Module ID: 14134
// Function ID: 108779
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 33, 4130, 5586, 3842, 2]

// Module 14134 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_9 = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" } });
const tmp3 = ((PureComponent) => {
  class UntouchableAlert {
    constructor() {
      self = this;
      tmp = outer1_2(this, UntouchableAlert);
      obj = outer1_5(UntouchableAlert);
      tmp2 = outer1_4;
      if (outer1_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(UntouchableAlert, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      const self = this;
      if (!this.props.loading) {
        self.closeAlert();
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "componentDidUpdate",
    value(loading) {
      const self = this;
      loading = this.props.loading;
      if (!tmp) {
        self.closeAlert();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "closeAlert",
    value() {
      const self = this;
      setImmediate(() => {
        const props = self.props;
        return props.onClose();
      });
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value() {
      let tmp2 = null;
      if (this.props.loading) {
        const obj = { style: tmp.container, children: outer1_8(UntouchableAlert(outer1_1[9]).ActivityIndicator, {}) };
        tmp2 = outer1_8(outer1_7, obj);
      }
      return tmp2;
    }
  };
  return callback(UntouchableAlert, items);
})(require("result").PureComponent);
tmp3.contextType = require("ManaContext").ThemeContext;
let result = require("_possibleConstructorReturn").fileFinishedImporting("components_native/common/UntouchableAlert.tsx");

export default tmp3;
