// Module ID: 5507
// Function ID: 5508
// Name: Wrap
// Dependencies: [41, 42, 93, 95, 98, 19, 5498, 5494, 5454]

// Module 5507 (Wrap)
import tagMessage from "tagMessage" /* 5454 */;
import reanimatedWrapper from "reanimatedWrapper" /* 5494 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;

let tmp;
const assignRef = tmp(5498);
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
class Wrap {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, Wrap);
    const items1 = [...items];
    let tmp2 = _getPrototypeOf;
    const obj = _getPrototypeOf(Wrap);
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.childInstance = null;
    tmp3Result.hostInstance = null;
    tmp3Result.childRef = undefined;
    tmp3Result.attachedChildRef = undefined;
    tmp3Result.childRefCleanup = undefined;
    tmp3Result.handleChildRef = (childInstance) => {
      closure_0.childInstance = childInstance;
      const obj2 = Wrap(closure_2_1[6]);
      const preferHostInstanceResult = obj2.preferHostInstance(childInstance);
      let tmp2 = null;
      const obj3 = Wrap(closure_2_1[6]);
      if (obj3.isHostInstance(preferHostInstanceResult)) {
        tmp2 = preferHostInstanceResult;
      }
      closure_0.hostInstance = tmp2;
      closure_0.detachChildRef();
      if (null != childInstance) {
        closure_0.attachChildRef(childInstance);
      }
    };
    return tmp3Result;
  }
}
_inherits(Wrap, react.Component);
const entry = {
  key: "getHostInstance",
  value: function getHostInstance() {
    return this.hostInstance;
  }
};
let items = [
  entry,
  {
    key: "getAnimatableRef",
    value: function getAnimatableRef() {
      let self = this;
      const obj = reanimatedWrapper;
      if (obj.reanimatedRefreshesAnimatableRef()) {
        const tmpResult = assignRef;
        self = tmpResult.resolveHostInstance(this);
      }
      return self;
    }
  },
  {
    key: "detachChildRef",
    value: function detachChildRef() {
      const self = this;
      if (undefined !== this.childRefCleanup) {
        self.childRefCleanup();
      } else if (self.attachedChildRef) {
        const obj = assignRef;
        obj.assignRef(self.attachedChildRef, null);
      }
      self.childRefCleanup = undefined;
      self.attachedChildRef = undefined;
    }
  },
  {
    key: "attachChildRef",
    value: function attachChildRef(childInstance) {
      this.attachedChildRef = this.childRef;
      const obj = assignRef;
      this.childRefCleanup = obj.assignRef(this.attachedChildRef, childInstance);
    }
  },
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      const self = this;
      const tmp = this.childRef !== this.attachedChildRef && null !== self.childInstance;
      if (tmp) {
        self.detachChildRef();
        self.attachChildRef(self.childInstance);
      }
    }
  },
  {
    key: "render",
    value: function render() {
      try {
        const self = this;
        const Children = react.Children;
        const onlyResult = Children.only(this.props.children);
        self.childRef = onlyResult.props.ref;
        const obj2 = { collapsable: false, ref: self.handleChildRef };
        return react.cloneElement(onlyResult, obj2, onlyResult.props.children);
      } catch (err) {
        const _Error = Error;
        const self2 = this;
        const self3 = this;
        const obj3 = tagMessage;
        const error = new Error(obj3.tagMessage("GestureDetector got more than one view as a child. If you want the gesture to work on multiple views, wrap them with a common parent and attach the gesture to that view."));
        throw error;
      }
    }
  }
];
const importDefaultResultResult = _createClass(Wrap, items);
const Reanimated = reanimatedWrapper.Reanimated;
let animatedComponent;
if (Reanimated != null) {
  if (Reanimated.default != null) {
    animatedComponent = _default.createAnimatedComponent(importDefaultResultResult);
  }
}
if (animatedComponent == null) {
  animatedComponent = importDefaultResultResult;
}
const Wrap_export = importDefaultResultResult;

export { Wrap_export as Wrap };
export const AnimatedWrap = animatedComponent;
