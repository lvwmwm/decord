// Module ID: 12502
// Function ID: 96851
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 1849, 33, 4130, 689, 1273, 1212, 3842, 566, 2]

// Module 12502 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import importDefaultResult from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";
import importDefaultResult1 from "initialize";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400, fontSize: 12, marginTop: 10 };
_createForOfIteratorHelperLoose.warning = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
const tmp4 = ((PureComponent) => {
  class PremiumUnverifiedWarning {
    constructor() {
      self = this;
      tmp = outer1_2(this, PremiumUnverifiedWarning);
      obj = outer1_5(PremiumUnverifiedWarning);
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
  callback2(PremiumUnverifiedWarning, PureComponent);
  let items = [
    {
      key: "render",
      value() {
        let tmp3 = null;
        if (!this.props.verified) {
          const obj = {};
          const items = [tmp.warning, tmp2];
          obj.style = items;
          const intl = PremiumUnverifiedWarning(outer1_1[11]).intl;
          obj.children = intl.string(PremiumUnverifiedWarning(outer1_1[11]).t["0LgOKH"]);
          tmp3 = outer1_8(PremiumUnverifiedWarning(outer1_1[10]).LegacyText, obj);
        }
        return tmp3;
      }
    }
  ];
  return callback(PremiumUnverifiedWarning, items);
})(require("result").PureComponent);
tmp4.contextType = require("ManaContext").ThemeContext;
let items = [importDefaultResult];
const tmp5 = require("initialize").connectStores(items, () => {
  const obj = {};
  const currentUser = importDefaultResult.getCurrentUser();
  let verified;
  if (null != currentUser) {
    verified = currentUser.verified;
  }
  obj.verified = null != verified && verified;
  return obj;
})(tmp4);
let result = require("_possibleConstructorReturn").fileFinishedImporting("components_native/premium/PremiumUnverifiedWarning.tsx");

export default tmp5;
