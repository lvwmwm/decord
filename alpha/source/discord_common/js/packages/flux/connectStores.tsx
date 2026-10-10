// Module ID: 575
// Function ID: 576
// Name: connectStores
// Dependencies: [109, 19, 21, 574, 568, 558, 576, 2]
// Exports: default

// Module 575 (connectStores)
import Fragment from "Fragment" /* 21 */;
import BatchedStoreListener from "BatchedStoreListener" /* 574 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let Component, applyArgumentsResult, attachResult, batchedStoreListener, c1, c2, clearResult, detachResult;

let closure_3 = ["ref"];
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("../discord_common/js/packages/flux/connectStores.tsx");

export default function connectStores(items, arg1, arg2) {
  const clear = () => {
    c1 = null;
    c2 = null;
  };
  if (null != arg2) {
    let fn;
    if (arg2.forwardRef) {
      let closure_1 = arg1;
      fn = (displayName) => {
        let str = displayName.displayName;
        if (str == null) {
          str = displayName.name;
        }
        if (str == null) {
          str = "<Unknown>";
        }
        const combined = "FluxContainer(" + str + ")";
        Component = Component.Component;
        class FluxContainer extends Component {
          constructor() {
            applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
            closure_0 = applyArgumentsResult;
            closure_0 = closure_1;
            memoizedFunction = function memoizedFunction(arg0) {
              let tmp5;
              if (null != c1) {
                if (null != c2) {
                  if (combined(FluxContainer[4])(c1, arg0)) {
                    tmp5 = c2;
                  }
                  if (null == tmp5) {
                    c1 = arg0;
                    const tmp11 = closure_0(arg0);
                    c2 = tmp11;
                    tmp5 = tmp11;
                  }
                  return tmp5;
                }
              }
              tmp5 = null;
              if (null != c1) {
                tmp5 = null;
                if (null != c2) {
                  tmp5 = null;
                  if (combined(FluxContainer[4])(c1, arg0)) {
                    c1 = arg0;
                    tmp5 = c2;
                  }
                }
              }
            };
            c1 = null;
            c2 = null;
            memoizedFunction.getCachedResult = function getCachedResult(childProps) {
              let tmp5;
              if (null != c1) {
                if (null != c2) {
                  if (combined(FluxContainer[4])(c1, childProps)) {
                    tmp5 = c2;
                  }
                  return tmp5;
                }
              }
              tmp5 = null;
              if (null != c1) {
                tmp5 = null;
                if (null != c2) {
                  tmp5 = null;
                  if (combined(FluxContainer[4])(c1, childProps)) {
                    c1 = childProps;
                    tmp5 = c2;
                  }
                }
              }
            };
            memoizedFunction.clear = () => {
              c1 = null;
              c2 = null;
            };
            applyArgumentsResult.memoizedGetStateFromStores = memoizedFunction;
            batchedStoreListener = new closure_0(closure_3_2[3]).BatchedStoreListener(closure_0, () => {
              const memoizedGetStateFromStores = applyArgumentsResult.memoizedGetStateFromStores;
              const cachedResult = memoizedGetStateFromStores.getCachedResult(applyArgumentsResult.props.childProps);
              let tmp6Result = null != cachedResult;
              if (tmp6Result) {
                const memoizedGetStateFromStores2 = obj.memoizedGetStateFromStores;
                memoizedGetStateFromStores2.clear();
                const tmp6 = combined(FluxContainer[4]);
                tmp6Result = tmp6(obj.memoizedGetStateFromStores(obj.props.childProps), cachedResult);
              }
              if (!tmp6Result) {
                applyArgumentsResult.forceUpdate();
              }
            });
            applyArgumentsResult.listener = batchedStoreListener;
            return applyArgumentsResult;
          }
          componentDidMount() {
            const listener = this.listener;
            listener.attach(combined);
          }
          componentWillUnmount() {
            const listener = this.listener;
            listener.detach();
            const memoizedGetStateFromStores = this.memoizedGetStateFromStores;
            memoizedGetStateFromStores.clear();
          }
          render() {
            let childProps;
            let forwardedConnectStoresRef;
            ({ childProps, forwardedConnectStoresRef } = this.props);
            const result = this.memoizedGetStateFromStores(childProps);
            const merged = Object.assign(childProps);
            const merged1 = Object.assign(result);
            return <displayName ref={forwardedConnectStoresRef} />;
          }
        }
        const prototype = FluxContainer.prototype;
        FluxContainer.displayName = combined;
        let obj = displayName(closure_1_2[5]);
        let tmp2 = obj.isReactCompilerEnabled() ? (function ForwardRef(ref) {
          let tmp2;
          let tmp3;
          const obj = displayName(dependencyMap[6]);
          const cResult = obj.c(6);
          if (cResult[0] !== ref) {
            const tmp6 = _objectWithoutProperties(ref, closure_3_3);
            cResult[0] = ref;
            cResult[1] = tmp6;
            cResult[2] = ref.ref;
            tmp3 = ref;
            tmp2 = tmp6;
          } else {
            tmp2 = cResult[1];
            tmp3 = cResult[2];
          }
          if (cResult[3] === tmp2) {
            let tmp7;
            if (cResult[4] === tmp3) {
              tmp7 = cResult[5];
            }
            return tmp7;
          }
          const tmp8 = <FluxContainer childProps={tmp2} forwardedConnectStoresRef={tmp3} />;
          cResult[3] = tmp2;
          cResult[4] = tmp3;
          cResult[5] = tmp8;
          tmp7 = tmp8;
        }) : (function ForwardRef(forwardedConnectStoresRef) {
          return <FluxContainer childProps={Object.assign(arg0, Object.assign({ ref: 0 }))} forwardedConnectStoresRef={arg0.ref} />;
        });
        tmp2.displayName = "ForwardRef(" + combined + ")";
        return tmp2;
      };
    }
    return fn;
  }
  closure_1 = arg1;
  fn = (displayName) => {
    items = displayName;
    let str = displayName.displayName;
    if (str == null) {
      str = displayName.name;
    }
    if (str == null) {
      str = "<Unknown>";
    }
    const combined = "FluxContainer(" + str + ")";
    Component = Component.Component;
    class FluxContainer extends Component {
      constructor() {
        applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
        closure_0 = applyArgumentsResult;
        closure_0 = closure_1;
        memoizedFunction = function memoizedFunction() { /* body not rendered: F82924 */ };
        c1 = null;
        c2 = null;
        memoizedFunction.getCachedResult = function getCachedResult() { /* body not rendered: F82923 */ };
        memoizedFunction.clear = function clear() { /* body not rendered: F82925 */ };
        applyArgumentsResult.memoizedGetStateFromStores = memoizedFunction;
        batchedStoreListener = new closure_0(closure_2[3]).BatchedStoreListener(closure_0, () => { /* body not rendered: F156616 */ });
        applyArgumentsResult.listener = batchedStoreListener;
        return applyArgumentsResult;
      }
      componentDidMount() {
        listener = this.listener;
        attachResult = listener.attach(closure_1);
        return;
      }
      componentWillUnmount() {
        listener = this.listener;
        detachResult = listener.detach();
        memoizedGetStateFromStores = this.memoizedGetStateFromStores;
        clearResult = memoizedGetStateFromStores.clear();
        return;
      }
      render() {
        result = this.memoizedGetStateFromStores(this.props);
        obj = {};
        merged = Object.assign(this.props);
        merged1 = Object.assign(result);
        return jsx(closure_0, obj);
      }
    }
    const prototype = FluxContainer.prototype;
    FluxContainer.displayName = combined;
    return FluxContainer;
  };
};
