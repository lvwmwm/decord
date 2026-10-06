// Module ID: 8218
// Function ID: 8219
// Name: FeDropShadow
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 8219, 8221, 8223, 8212, 8225, 8227, 8208]

// Module 8218 (FeDropShadow)
import _modDef8208 from "module_8208" /* 8208 */;
import FeCompositeDefault from "FeComposite" /* 8212 */;
import FeGaussianBlurDefault from "FeGaussianBlur" /* 8219 */;
import FeOffsetDefault from "FeOffset" /* 8221 */;
import FeFloodDefault from "FeFlood" /* 8223 */;
import FeMergeDefault from "FeMerge" /* 8225 */;
import FeMergeNodeDefault from "FeMergeNode" /* 8227 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;

let metroImportDefault;
let metroRequire;
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
let Fragment = Fragment_mod;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
class FeDropShadow {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, FeDropShadow);
    const obj = _getPrototypeOf(FeDropShadow);
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
_inherits(FeDropShadow, _modDef8208);
const entry = {
  key: "render",
  value: function render() {
    let dx;
    let dy;
    let items;
    let items1;
    let result;
    const self = this;
    const props = this.props;
    const _in = props.in;
    let str = "SourceGraphic";
    const stdDeviation = props.stdDeviation;
    if (undefined !== _in) {
      str = _in;
    }
    const obj = { children: items };
    ({ dx, dy, result } = props);
    const Fragment = react.Fragment;
    items = [metroRequire(FeGaussianBlurDefault, { in: str, stdDeviation }), metroRequire(FeOffsetDefault, { dx, dy, result: "offsetblur" }), , , ];
    const obj2 = { floodColor: self.props.floodColor, floodOpacity: self.props.floodOpacity };
    items[2] = metroRequire(FeFloodDefault, obj2);
    items[3] = metroRequire(FeCompositeDefault, { in2: "offsetblur", operator: "in" });
    const obj3 = { result, children: items1 };
    items1 = [, ];
    const tmp = FeMergeDefault;
    items1[0] = metroRequire(FeMergeNodeDefault, {});
    items1[1] = metroRequire(FeMergeNodeDefault, { in: str });
    items[4] = metroImportDefault(tmp, obj3);
    return metroImportDefault(Fragment, obj);
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(FeDropShadow, items);
importDefaultResultResult.displayName = "FeDropShadow";
let obj = {};
const merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;
