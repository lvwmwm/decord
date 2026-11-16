// Module ID: 1754
// Function ID: 1755
// Dependencies: [41, 42, 93, 95, 98, 1755, 1784]

// Module 1754
import _mod1755 from "module_1755" /* 1755 */;
import CSSCallbackStore from "CSSCallbackStore" /* 1784 */;
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
class CSSKeyframesRuleImpl {
  constructor(animationName, json) {
    let constructResult;
    const self = this;
    _classCallCheck(this, CSSKeyframesRuleImpl);
    const items = [animationName, json];
    const obj = _getPrototypeOf(CSSKeyframesRuleImpl);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.normalizedKeyframesCache_ = {};
    return tmp3Result;
  }
}
_inherits(CSSKeyframesRuleImpl, CSSCallbackStore.CSSKeyframesRuleBase);
const entry = {
  key: "getNormalizedKeyframesConfig",
  value: function getNormalizedKeyframesConfig(compoundComponentName) {
    const self = this;
    const normalizedKeyframesCache_ = this.normalizedKeyframesCache_;
    if (normalizedKeyframesCache_[compoundComponentName] == null) {
      const obj = _mod1755;
      normalizedKeyframesCache_[compoundComponentName] = obj.normalizeAnimationKeyframes(self.cssRules, compoundComponentName);
    }
    return self.normalizedKeyframesCache_[compoundComponentName];
  }
};
let items = [entry];

export default _createClass(CSSKeyframesRuleImpl, items);
