// Module ID: 1881
// Function ID: 1882
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 1877, 1878, 1866, 1827]

// Module 1881
import Fragment from "Fragment" /* 21 */;
import startMapper from "startMapper" /* 1827 */;
import react_native from "react-native" /* 1866 */;
import react2 from "react" /* 1877 */;
import _mod1878 from "module_1878" /* 1878 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;

let Component;
let c10;
let c9;
let createContext;
let hasOwnProperty;
let metroImportAll;
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
function SkipEntering(children) {
  const tmp = authStore(children.shouldSkip);
  let closure_0 = tmp;
  const items = [tmp];
  React4(() => {
    closure_0.current = false;
  }, items);
  return <context value={tmp}>{arg0.children}</context>;
}
({ Children: hasOwnProperty, cloneElement: metroRequire, Fragment: metroImportDefault, isValidElement: metroImportAll, useEffect: c9, useRef: c10, Component, createContext } = react);
const jsx = Fragment.jsx;
const context = createContext(null);
class LayoutAnimationConfig {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, LayoutAnimationConfig);
    const items1 = [...items];
    const obj = _getPrototypeOf(LayoutAnimationConfig);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result._childInstance = null;
    tmp3Result._setChildInstance = (_childInstance) => {
      closure_0._childInstance = _childInstance;
    };
    return tmp3Result;
  }
}
_inherits(LayoutAnimationConfig, Component);
const entry = {
  key: "_getMergedRef",
  value: function _getMergedRef(ref) {
    const self = this;
    const tmp = this._mergedRef && self._mergedRefSource === ref;
    if (!tmp) {
      self._mergedRefSource = ref;
      const obj = react2;
      self._mergedRef = obj.mergeRefs(ref, self._setChildInstance);
    }
    return self._mergedRef;
  }
};
let items = [
  entry,
  {
    key: "getComponentViewTag",
    value: function getComponentViewTag() {
      const obj = _mod1878;
      let num = obj.getViewTagFromInstance(this._childInstance);
      if (num == null) {
        num = -1;
      }
      return num;
    }
  },
  {
    key: "getMaybeWrappedChildren",
    value: function getMaybeWrappedChildren() {
      const self = this;
      const arr = hasOwnProperty;
      if (hasOwnProperty.count(this.props.children) > 1) {
        let mapped;
        if (self.props.skipExiting) {
          mapped = arr.map(self.props.children, (children) => <LayoutAnimationConfig skipExiting>{arg0}</LayoutAnimationConfig>);
        }
        return mapped;
      }
      mapped = self.getMaybeRefTrackedChild();
    }
  },
  {
    key: "getMaybeRefTrackedChild",
    value: function getMaybeRefTrackedChild() {
      const self = this;
      const children = this.props.children;
      let tmp = children;
      if (undefined !== this.props.skipExiting) {
        tmp = children;
        if (metroImportAll(children)) {
          tmp = children;
          if (children.type !== metroImportDefault) {
            const obj = { ref: self._getMergedRef(children.props.ref) };
            tmp = metroRequire(children, obj);
          }
        }
      }
      return tmp;
    }
  },
  {
    key: "setShouldAnimateExiting",
    value: function setShouldAnimateExiting() {
      const self = this;
      if (1 === hasOwnProperty.count(this.props.children)) {
        const obj = _mod1878;
        let viewTagFromInstance = obj.getViewTagFromInstance(self._childInstance);
        if (viewTagFromInstance == null) {
          const tmpResult = react_native;
          viewTagFromInstance = tmpResult.findNodeHandle(self);
        }
        if (viewTagFromInstance) {
          const tmpResult2 = startMapper;
          const result = tmpResult2.setShouldAnimateExitingForTag(viewTagFromInstance, !self.props.skipExiting);
        }
      }
    }
  },
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const self = this;
      if (undefined !== this.props.skipExiting) {
        const result = self.setShouldAnimateExiting();
      }
    }
  },
  {
    key: "render",
    value: function render() {
      const maybeWrappedChildren = this.getMaybeWrappedChildren();
      let tmp2 = maybeWrappedChildren;
      if (undefined !== this.props.skipEntering) {
        tmp2 = <SkipEntering shouldSkip={this.props.skipEntering}>{maybeWrappedChildren}</SkipEntering>;
      }
      return tmp2;
    }
  }
];
const LayoutAnimationConfig_export = _createClass(LayoutAnimationConfig, items);

export const SkipEnteringContext = context;
export { LayoutAnimationConfig_export as LayoutAnimationConfig };
