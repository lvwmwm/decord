// Module ID: 9935
// Function ID: 9936
// Dependencies: [41, 42, 93, 95, 98, 9804]

// Module 9935
import AbstractTimeExpressionParser from "AbstractTimeExpressionParser" /* 9804 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import map from "_possibleConstructorReturn" /* 93 */;
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
class ESTimeExpressionParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ESTimeExpressionParser);
    const obj = _getPrototypeOf(ESTimeExpressionParser);
    const tmp2 = _getPrototypeOf;
    const tmp3 = map;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ESTimeExpressionParser, AbstractTimeExpressionParser.AbstractTimeExpressionParser);
const entry = {
  key: "primaryPrefix",
  value: function primaryPrefix() {
    return "(?:(?:aslas|deslas|las?|al?|de|del)\\s*)?";
  }
};
const items = [
  entry,
  {
    key: "followingPhase",
    value: function followingPhase() {
      return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|a(?:l)?|\\?)\\s*";
    }
  }
];

export default _createClass(ESTimeExpressionParser, items);
