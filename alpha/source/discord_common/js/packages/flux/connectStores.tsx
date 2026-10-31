// Module ID: 565
// Function ID: 566
// Name: connectStores
// Dependencies: [109, 19, 21, 564, 558, 2]
// Exports: default

// Module 565 (connectStores)
import Fragment from "Fragment" /* 21 */;
import BatchedStoreListener from "BatchedStoreListener" /* 564 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let Component, applyArgumentsResult, attachResult, batchedStoreListener, c1, c2, clearResult, closure_0, detachResult, listener, memoizedGetStateFromStores, merged, merged1, obj;

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
        class ForwardRef {
          constructor(arg0) {
            obj = { childProps: Object.assign(displayName, Object.assign({ ref: 0 })), forwardedConnectStoresRef: displayName.ref };
            return closure_3_4(FluxContainer, obj);
          }
        }
        const combined = "FluxContainer(" + str + ")";
        Component = Component.Component;
        class FluxContainer extends Component {
          constructor() {
            applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
            closure_0 = applyArgumentsResult;
            closure_0 = closure_1;
            memoizedFunction = function memoizedFunction() { /* body not rendered: F78852 */ };
            c1 = null;
            c2 = null;
            memoizedFunction.getCachedResult = function getCachedResult() { /* body not rendered: F78851 */ };
            memoizedFunction.clear = function clear() { /* body not rendered: F78853 */ };
            applyArgumentsResult.memoizedGetStateFromStores = memoizedFunction;
            batchedStoreListener = new closure_0(closure_3_2[3]).BatchedStoreListener(closure_0, function() { /* body not rendered: F138615 */ });
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
            ({ childProps, forwardedConnectStoresRef } = this.props);
            result = this.memoizedGetStateFromStores(childProps);
            obj = { ref: forwardedConnectStoresRef };
            merged = Object.assign(childProps);
            merged1 = Object.assign(result);
            return closure_3_4(closure_0, obj);
          }
        }
        const prototype = FluxContainer.prototype;
        FluxContainer.displayName = combined;
        ForwardRef.displayName = "ForwardRef(" + combined + ")";
        return ForwardRef;
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
        memoizedFunction = function memoizedFunction() { /* body not rendered: F78852 */ };
        c1 = null;
        c2 = null;
        memoizedFunction.getCachedResult = function getCachedResult() { /* body not rendered: F78851 */ };
        memoizedFunction.clear = function clear() { /* body not rendered: F78853 */ };
        applyArgumentsResult.memoizedGetStateFromStores = memoizedFunction;
        batchedStoreListener = new closure_0(closure_2[3]).BatchedStoreListener(closure_0, function() { /* body not rendered: F138616 */ });
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
