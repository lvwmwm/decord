// Module ID: 1720
// Function ID: 19343
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1720 (_isNativeReflectConstruct)
let Component;
let createContext;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function SkipEntering(children) {
  const tmp = callback4(children.shouldSkip);
  const arg1 = tmp;
  const tmp2 = callback4(children.itemKey);
  if (children.itemKey !== tmp2.current) {
    ({ shouldSkip: tmp.current, itemKey: tmp2.current } = children);
  }
  const items = [tmp, children.itemKey];
  callback3(() => {
    tmp.current = false;
  }, items);
  return jsx(closure_11 ? context : context.Provider, { value: tmp, children: children.children });
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
({ Children: closure_7, useEffect: closure_8, useRef: closure_9, Component, createContext } = arg1(dependencyMap[5]));
importDefault(dependencyMap[5]);
const jsx = arg1(dependencyMap[6]).jsx;
const tmp2 = arg1(dependencyMap[5]);
let closure_11 = arg1(dependencyMap[7]).isReact19();
const context = createContext(null);

export const SkipEnteringContext = context;
export const LayoutAnimationConfig = (Component) => {
  class LayoutAnimationConfig {
    constructor() {
      self = this;
      tmp = closure_2(this, LayoutAnimationConfig);
      obj = closure_5(LayoutAnimationConfig);
      tmp2 = closure_4;
      if (closure_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = LayoutAnimationConfig;
  callback2(LayoutAnimationConfig, Component);
  let obj = {
    key: "getMaybeWrappedChildren",
    value: function getMaybeWrappedChildren() {
      const self = this;
      const LayoutAnimationConfig = this;
      if (closure_7.count(this.props.children) > 1) {
        if (self.props.skipExiting) {
          let children = closure_7.map(self.props.children, (children) => callback(self, { itemKey: self.props.itemKey, skipExiting: true, children }));
        }
        return children;
      }
      children = self.props.children;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "setShouldAnimateExiting",
    value: function setShouldAnimateExiting() {
      const self = this;
      if (1 === closure_7.count(this.props.children)) {
        const findNodeHandleResult = LayoutAnimationConfig(closure_1[8]).findNodeHandle(self);
        if (findNodeHandleResult) {
          const result = LayoutAnimationConfig(closure_1[9]).setShouldAnimateExitingForTag(findNodeHandleResult, !self.props.skipExiting);
          const obj2 = LayoutAnimationConfig(closure_1[9]);
        }
        const obj = LayoutAnimationConfig(closure_1[8]);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const self = this;
      if (undefined !== this.props.skipExiting) {
        const result = self.setShouldAnimateExiting();
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value: function render() {
      const self = this;
      const maybeWrappedChildren = this.getMaybeWrappedChildren();
      let tmp2 = maybeWrappedChildren;
      if (undefined !== this.props.skipEntering) {
        const obj = { itemKey: self.props.itemKey, shouldSkip: self.props.skipEntering, children: maybeWrappedChildren };
        tmp2 = callback3(closure_14, obj);
      }
      return tmp2;
    }
  };
  return callback(LayoutAnimationConfig, items);
}(Component);
