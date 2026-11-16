// Module ID: 1921
// Function ID: 1922
// Dependencies: [42, 41, 93, 95, 98, 21, 1879]
// Exports: createAnimatedComponent

// Module 1921
import Fragment from "Fragment" /* 21 */;
import _modDef1879 from "module_1879" /* 1879 */;
import _createClass from "_createClass" /* 42 */;
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
const jsx = Fragment.jsx;

export function createAnimatedComponent(displayName) {
  let closure_1;
  importDefault = displayName;
  class AnimatedComponent {
    constructor(arg0) {
      let constructResult;
      const self = this;
      _classCallCheck(this, AnimatedComponent);
      const items = [displayName, arg0];
      const obj = _getPrototypeOf(AnimatedComponent);
      const tmp2 = _getPrototypeOf;
      const tmp3 = _possibleConstructorReturn;
      if (_isNativeReflectConstruct()) {
        const _Reflect = Reflect;
        constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      return tmp3(self, constructResult);
    }
  }
  let tmp = _inherits(AnimatedComponent, _modDef1879);
  let tmp2 = _createClass(AnimatedComponent);
  dependencyMap = tmp2;
  let tmp3 = displayName.displayName || displayName.name || "Component";
  tmp2.displayName = "AnimatedComponent(" + tmp3 + ")";
  let tmp4 = displayName.displayName || displayName.name || "Component";
  function animatedComponent(ref) {
    const obj = { ref: null };
    const merged = Object.assign(ref);
    let tmp4 = null;
    const tmp = jsx;
    const tmp2 = closure_1;
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
