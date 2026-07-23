// Module ID: 626
// Function ID: 7150
// Name: _callSuper
// Dependencies: [29, 6, 7, 15, 17, 18, 31, 33, 625, 620, 2]
// Exports: default

// Module 626 (_callSuper)
import "_objectWithoutProperties";
import result from "result";
import jsxProd from "jsxProd";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "result";
import { jsx } from "jsxProd";

const require = arg1;
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
  return _possibleConstructorReturn(arg0, constructResult);
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
  let closure_0 = arg0;
  function getCachedResult(childProps) {
    if (null != closure_1) {
      if (null != _null2) {
        if (_null(_null2[9])(closure_1, childProps)) {
          let tmp5 = _null2;
        }
        return tmp5;
      }
    }
    tmp5 = null;
    if (null != closure_1) {
      tmp5 = null;
      if (null != _null2) {
        tmp5 = null;
        if (_null(_null2[9])(closure_1, childProps)) {
          closure_1 = childProps;
          tmp5 = _null2;
        }
      }
    }
  }
  function memoizedFunction(arg0) {
    let tmp = getCachedResult(arg0);
    if (null == tmp) {
      let closure_1 = arg0;
      const tmp3 = callback(arg0);
      let c2 = tmp3;
      tmp = tmp3;
    }
    return tmp;
  }
  let c1 = null;
  let c2 = null;
  memoizedFunction.getCachedResult = getCachedResult;
  memoizedFunction.clear = () => {
    let c1 = null;
    let c2 = null;
  };
  return memoizedFunction;
}
let result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/flux/connectStores.tsx");

export default function connectStores(items, arg1) {
  if (null != arg2) {
    if (arg2.forwardRef) {
      let tmp = (function connectStoresWithRef(items, arg1) {
        let closure_0 = items;
        let closure_1 = arg1;
        return (arg0) => {
          let closure_0 = arg0;
          const combined = "FluxContainer(" + outer2_12(arg0) + ")";
          let tmp2 = ((Component) => {
            class FluxContainer {
              constructor(arg0) {
                items = [...arguments];
                tmp = outer4_3(this, FluxContainer);
                items1 = [...items];
                tmp2 = outer4_10(this, FluxContainer, items1);
                FluxContainer = tmp2;
                tmp2.memoizedGetStateFromStores = outer4_13(c1);
                batchedStoreListener = new outer4_0(outer4_2[8]).BatchedStoreListener(closure_0, () => {
                  const memoizedGetStateFromStores = tmp2.memoizedGetStateFromStores;
                  const cachedResult = memoizedGetStateFromStores.getCachedResult(tmp2.props.childProps);
                  let tmp7Result = null != cachedResult;
                  if (tmp7Result) {
                    const memoizedGetStateFromStores2 = tmp2.memoizedGetStateFromStores;
                    memoizedGetStateFromStores2.clear();
                    tmp7Result = outer5_1(outer5_2[9])(tmp2.memoizedGetStateFromStores(tmp2.props.childProps), cachedResult);
                    const tmp7 = outer5_1(outer5_2[9]);
                  }
                  if (!tmp7Result) {
                    tmp2.forceUpdate();
                  }
                });
                tmp2.listener = batchedStoreListener;
                return tmp2;
              }
            }
            outer3_7(FluxContainer, Component);
            let obj = {
              key: "componentDidMount",
              value() {
                const listener = this.listener;
                listener.attach(outer1_1);
              }
            };
            let items = [obj, , ];
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
                return outer4_9(FluxContainer, { ref: forwardedConnectStoresRef });
              }
            };
            items[2] = obj;
            return outer3_4(FluxContainer, items);
          })(outer2_8.Component);
          let closure_2 = tmp2;
          tmp2.displayName = combined;
          const forwardRefResult = outer2_8.forwardRef((childProps, forwardedConnectStoresRef) => outer3_9(closure_2, { childProps, forwardedConnectStoresRef }));
          forwardRefResult.displayName = "ForwardRef(" + combined + ")";
          return forwardRefResult;
        };
      })(items, arg1);
    }
    return tmp;
  }
  tmp = (function connectStoresWithoutRef(items, arg1) {
    let closure_0 = items;
    let closure_1 = arg1;
    return (arg0) => {
      let closure_0 = arg0;
      const combined = "FluxContainer(" + outer2_12(arg0) + ")";
      let tmp2 = ((Component) => {
        class FluxContainer {
          constructor(arg0) {
            items = [...arguments];
            tmp = outer4_3(this, FluxContainer);
            items1 = [...items];
            tmp2 = outer4_10(this, FluxContainer, items1);
            FluxContainer = tmp2;
            tmp2.memoizedGetStateFromStores = outer4_13(c1);
            batchedStoreListener = new outer4_0(outer4_2[8]).BatchedStoreListener(closure_0, () => {
              const memoizedGetStateFromStores = tmp2.memoizedGetStateFromStores;
              const cachedResult = memoizedGetStateFromStores.getCachedResult(tmp2.props);
              let tmp7Result = null != cachedResult;
              if (tmp7Result) {
                const memoizedGetStateFromStores2 = tmp2.memoizedGetStateFromStores;
                memoizedGetStateFromStores2.clear();
                tmp7Result = outer5_1(outer5_2[9])(tmp2.memoizedGetStateFromStores(tmp2.props), cachedResult);
                const tmp7 = outer5_1(outer5_2[9]);
              }
              if (!tmp7Result) {
                tmp2.forceUpdate();
              }
            });
            tmp2.listener = batchedStoreListener;
            return tmp2;
          }
        }
        outer3_7(FluxContainer, Component);
        let obj = {
          key: "componentDidMount",
          value() {
            const listener = this.listener;
            listener.attach(outer1_1);
          }
        };
        let items = [obj, , ];
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
            return outer4_9(FluxContainer, {});
          }
        };
        items[2] = obj;
        return outer3_4(FluxContainer, items);
      })(outer2_8.Component);
      tmp2.displayName = combined;
      return tmp2;
    };
  })(items, arg1);
};
