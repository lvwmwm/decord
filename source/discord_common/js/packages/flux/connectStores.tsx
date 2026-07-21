// Module ID: 626
// Function ID: 7150
// Name: _callSuper
// Dependencies: []
// Exports: default

// Module 626 (_callSuper)
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_5(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getDisplayName(displayName) {
  let name = displayName.displayName;
  if (null == name) {
    name = displayName.name;
  }
  let str = "<Unknown>";
  if (null != name) {
    str = name;
  }
  return str;
}
function memoizeGetStateFromStores(arg0) {
  const arg1 = arg0;
  function getCachedResult(childProps) {
    if (null != _null) {
      if (null != closure_2) {
        if (_null(closure_2[9])(_null, childProps)) {
          let tmp5 = closure_2;
        }
        return tmp5;
      }
    }
    tmp5 = null;
    if (null != _null) {
      tmp5 = null;
      if (null != closure_2) {
        tmp5 = null;
        if (_null(closure_2[9])(_null, childProps)) {
          const _null = childProps;
          tmp5 = closure_2;
        }
      }
    }
  }
  let closure_3 = getCachedResult;
  function memoizedFunction(childProps) {
    let tmp = getCachedResult(childProps);
    if (null == tmp) {
      let closure_1 = childProps;
      const tmp3 = childProps(childProps);
      let closure_2 = tmp3;
      tmp = tmp3;
    }
    return tmp;
  }
  let closure_1 = null;
  let closure_2 = null;
  memoizedFunction.getCachedResult = getCachedResult;
  memoizedFunction.clear = () => {
    let closure_1 = null;
    let closure_2 = null;
  };
  return memoizedFunction;
}
importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importAll(dependencyMap[6]);
const jsx = arg1(dependencyMap[7]).jsx;
const result = arg1(dependencyMap[10]).fileFinishedImporting("../discord_common/js/packages/flux/connectStores.tsx");

export default function connectStores(items, arg1) {
  if (null != arg2) {
    if (arg2.forwardRef) {
      let tmp = function connectStoresWithRef(items, arg1) {
        return (arg0) => {
          const combined = "FluxContainer(" + callback(arg0) + ")";
          const arg1 = combined;
          const tmp2 = (Component) => {
            class FluxContainer {
              constructor(arg0) {
                items = [...arguments];
                tmp = closure_3(this, FluxContainer);
                items1 = [...items];
                tmp2 = closure_10(this, FluxContainer, items1);
                FluxContainer = tmp2;
                tmp2.memoizedGetStateFromStores = closure_13(closure_1);
                batchedStoreListener = new FluxContainer(closure_2[8]).BatchedStoreListener(FluxContainer, () => {
                  const memoizedGetStateFromStores = tmp2.memoizedGetStateFromStores;
                  const cachedResult = memoizedGetStateFromStores.getCachedResult(tmp2.props.childProps);
                  let tmp7Result = null != cachedResult;
                  if (tmp7Result) {
                    const memoizedGetStateFromStores2 = tmp2.memoizedGetStateFromStores;
                    memoizedGetStateFromStores2.clear();
                    tmp7Result = callback(closure_2[9])(tmp2.memoizedGetStateFromStores(tmp2.props.childProps), cachedResult);
                    const tmp7 = callback(closure_2[9]);
                  }
                  if (!tmp7Result) {
                    tmp2.forceUpdate();
                  }
                });
                tmp2.listener = batchedStoreListener;
                return tmp2;
              }
            }
            Component = FluxContainer;
            callback2(FluxContainer, Component);
            let obj = {
              key: "componentDidMount",
              value() {
                const listener = this.listener;
                listener.attach(closure_1);
              }
            };
            const items = [obj, , ];
            obj = {
              key: "componentWillUnmount",
              value() {
                const listener = this.listener;
                listener.detach();
                const memoizedGetStateFromStores = this.memoizedGetStateFromStores;
                memoizedGetStateFromStores.clear();
              }
            };
            items[1] = obj;
            obj = {
              key: "render",
              value() {
                let childProps;
                let forwardedConnectStoresRef;
                ({ childProps, forwardedConnectStoresRef } = this.props);
                const result = this.memoizedGetStateFromStores(childProps);
                const merged = Object.assign(childProps);
                const merged1 = Object.assign(result);
                return callback2(FluxContainer, { ref: forwardedConnectStoresRef });
              }
            };
            items[2] = obj;
            return callback(FluxContainer, items);
          }(React.Component);
          tmp2.displayName = combined;
          const forwardRefResult = React.forwardRef((childProps, forwardedConnectStoresRef) => callback3(tmp2, { childProps, forwardedConnectStoresRef }));
          forwardRefResult.displayName = "ForwardRef(" + combined + ")";
          return forwardRefResult;
        };
      }(items, arg1);
    }
    return tmp;
  }
  tmp = function connectStoresWithoutRef(items, arg1) {
    return (arg0) => {
      const combined = "FluxContainer(" + callback(arg0) + ")";
      const arg1 = combined;
      const tmp2 = (Component) => {
        class FluxContainer {
          constructor(arg0) {
            items = [...arguments];
            tmp = closure_3(this, FluxContainer);
            items1 = [...items];
            tmp2 = closure_10(this, FluxContainer, items1);
            FluxContainer = tmp2;
            tmp2.memoizedGetStateFromStores = closure_13(closure_1);
            batchedStoreListener = new FluxContainer(closure_2[8]).BatchedStoreListener(FluxContainer, () => {
              const memoizedGetStateFromStores = tmp2.memoizedGetStateFromStores;
              const cachedResult = memoizedGetStateFromStores.getCachedResult(tmp2.props);
              let tmp7Result = null != cachedResult;
              if (tmp7Result) {
                const memoizedGetStateFromStores2 = tmp2.memoizedGetStateFromStores;
                memoizedGetStateFromStores2.clear();
                tmp7Result = callback(closure_2[9])(tmp2.memoizedGetStateFromStores(tmp2.props), cachedResult);
                const tmp7 = callback(closure_2[9]);
              }
              if (!tmp7Result) {
                tmp2.forceUpdate();
              }
            });
            tmp2.listener = batchedStoreListener;
            return tmp2;
          }
        }
        Component = FluxContainer;
        callback2(FluxContainer, Component);
        let obj = {
          key: "componentDidMount",
          value() {
            const listener = this.listener;
            listener.attach(closure_1);
          }
        };
        const items = [obj, , ];
        obj = {
          key: "componentWillUnmount",
          value() {
            const listener = this.listener;
            listener.detach();
            const memoizedGetStateFromStores = this.memoizedGetStateFromStores;
            memoizedGetStateFromStores.clear();
          }
        };
        items[1] = obj;
        obj = {
          key: "render",
          value() {
            const result = this.memoizedGetStateFromStores(this.props);
            const merged = Object.assign(this.props);
            const merged1 = Object.assign(result);
            return callback2(FluxContainer, {});
          }
        };
        items[2] = obj;
        return callback(FluxContainer, items);
      }(Component.Component);
      tmp2.displayName = combined;
      return tmp2;
    };
  }(items, arg1);
};
