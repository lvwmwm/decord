// Module ID: 7973
// Function ID: 7974
// Name: FeSpotLight
// Dependencies: [41, 42, 93, 95, 98, 19, 7925]

// Module 7973 (FeSpotLight)
import react from "react" /* 19 */;
import warnOnce from "warnOnce" /* 7925 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class FeSpotLight {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, FeSpotLight);
    const obj = _getPrototypeOf(FeSpotLight);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(FeSpotLight, react.Component);
const entry = {
  key: "render",
  value: function render() {
    const obj = warnOnce;
    const result = obj.warnUnimplementedFilter();
    return null;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(FeSpotLight, items);
importDefaultResultResult.displayName = "FeSpotLight";
importDefaultResultResult.defaultProps = {};

export default importDefaultResultResult;
