// Module ID: 1822
// Function ID: 1823
// Dependencies: [42, 41, 93, 95, 98, 21, 1823]
// Exports: createAnimatedComponent

// Module 1822
import Fragment from "Fragment" /* 21 */;
import _modDef1823 from "module_1823" /* 1823 */;
import _createClass_mod from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let dependencyMap, importDefault;

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
let _createClass = _createClass_mod;
const jsx = Fragment.jsx;

export function createAnimatedComponent(displayName, arg1) {
  let closure_1;
  let closure_2;
  importDefault = displayName;
  dependencyMap = arg1;
  class AnimatedComponent {
    constructor(arg0) {
      let constructResult;
      let tmp7;
      const self = this;
      _classCallCheck(this, AnimatedComponent);
      let jsProps;
      if (closure_1 != null) {
        jsProps = tmp3.jsProps;
      }
      if (jsProps == null) {
        jsProps = AnimatedComponent.jsProps;
      }
      let length;
      if (jsProps != null) {
        length = jsProps.length;
      }
      if (length) {
        const obj = { jsProps };
        const merged = Object.assign(tmp3);
        tmp7 = obj;
      } else {
        tmp7 = tmp3;
      }
      const items = [AnimatedComponent, arg0, AnimatedComponent.displayName, tmp7];
      const obj2 = _getPrototypeOf(AnimatedComponent);
      const tmp11 = _getPrototypeOf;
      const tmp12 = _possibleConstructorReturn;
      if (_isNativeReflectConstruct()) {
        const _Reflect = Reflect;
        constructResult = Reflect.construct(obj2, items, tmp11(self).constructor);
      } else {
        constructResult = obj2.apply(self, items);
      }
      return tmp12(self, constructResult);
    }
  }
  let tmp = _inherits(AnimatedComponent, _modDef1823);
  let tmp2 = _createClass(AnimatedComponent);
  _createClass = tmp2;
  const tmp3 = displayName.displayName || displayName.name || "Component";
  tmp2.displayName = "AnimatedComponent(" + tmp3 + ")";
  let tmp4 = displayName.displayName || displayName.name || "Component";
  function animatedComponent(ref) {
    const obj = { ref: null };
    const merged = Object.assign(ref);
    let tmp4 = null;
    const tmp = jsx;
    const tmp2 = closure_2;
    if (null !== ref.ref) {
      tmp4 = { forwardedRef: ref.ref };
      const obj2 = { forwardedRef: ref.ref };
    }
    const merged1 = Object.assign(tmp4);
    return tmp(tmp2, obj);
  }
  animatedComponent.displayName = tmp4;
  return animatedComponent;
}
