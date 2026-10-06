// Module ID: 8227
// Function ID: 8228
// Name: FeMergeNode
// Dependencies: [41, 42, 93, 95, 98, 8208]

// Module 8227 (FeMergeNode)
import _modDef8208 from "module_8208" /* 8208 */;
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
class FeMergeNode {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, FeMergeNode);
    const items1 = [...items];
    const obj = _getPrototypeOf(FeMergeNode);
    const tmp2 = _getPrototypeOf;
    const tmp3 = map;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.setNativeProps = () => {
      const parent = props.props.parent;
      if (parent) {
        parent.forceUpdate();
      }
    };
    return tmp3Result;
  }
}
_inherits(FeMergeNode, _modDef8208);
const entry = {
  key: "render",
  value: function render() {
    return null;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(FeMergeNode, items);
importDefaultResultResult.displayName = "FeMergeNode";

export default importDefaultResultResult;
