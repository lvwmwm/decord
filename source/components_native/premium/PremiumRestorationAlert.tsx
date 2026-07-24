// Module ID: 14183
// Function ID: 109094
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 5619, 33, 14184, 566, 2]

// Module 14183 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import importDefaultResult from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import importAllResult from "result";
import importDefaultResult1 from "initialize";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
const tmp4 = ((PureComponent) => {
  class PremiumRestorationAlert {
    constructor() {
      self = this;
      tmp = outer1_2(this, PremiumRestorationAlert);
      obj = outer1_5(PremiumRestorationAlert);
      tmp2 = outer1_4;
      if (outer1_9()) {
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
  callback2(PremiumRestorationAlert, PureComponent);
  const items = [
    {
      key: "render",
      value() {
        let isBusy;
        let onClose;
        ({ isBusy, onClose } = this.props);
        return outer1_8(PremiumRestorationAlert(outer1_1[8]), { loading, onClose });
      }
    }
  ];
  return callback(PremiumRestorationAlert, items);
})(require("result").PureComponent);
let items = [importDefaultResult];
const tmp5 = require("initialize").connectStores(items, () => ({ isBusy: importDefaultResult.isBusy() }))(tmp4);
let result = require("_possibleConstructorReturn").fileFinishedImporting("components_native/premium/PremiumRestorationAlert.tsx");

export default tmp5;
