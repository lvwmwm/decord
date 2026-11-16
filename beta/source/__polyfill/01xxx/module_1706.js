// Module ID: 1706
// Function ID: 1707
// Dependencies: [281, 1707]
// Exports: getShadowNodeWrapperFromRef

// Module 1706
import _mod281 from "module_281" /* 281 */;
import findHostInstance from "findHostInstance" /* 1707 */;

function resolveGetNodeFromPublicInstance() {
  try {
    const tmp3 = _mod281;
    let prop;
    if (tmp3 != null) {
      prop = tmp3.getNodeFromPublicInstance;
    }
    if (prop == null) {
      let prop1;
      if (tmp3 != null) {
        if (tmp3.default != null) {
          prop1 = _default.getNodeFromPublicInstance;
        }
      }
      prop = prop1;
    }
    if (prop == null) {
      prop = getNodeFromPublicInstanceFallback;
    }
    return prop;
  } catch (err) {
    return getNodeFromPublicInstanceFallback;
  }
}
function getNodeFromPublicInstanceFallback(__internalInstanceHandle) {
  let node;
  if (__internalInstanceHandle != null) {
    __internalInstanceHandle = __internalInstanceHandle.__internalInstanceHandle;
    if (__internalInstanceHandle != null) {
      const stateNode = __internalInstanceHandle.stateNode;
      if (stateNode != null) {
        node = stateNode.node;
      }
    }
  }
  return node;
}
let closure_3 = resolveGetNodeFromPublicInstance();

export function getShadowNodeWrapperFromRef(__internalInstanceHandle, findHostInstanceResult) {
  let prop;
  if (findHostInstanceResult != null) {
    prop = findHostInstanceResult.__internalInstanceHandle;
  }
  if (!prop) {
    let prop1;
    if (__internalInstanceHandle != null) {
      prop1 = __internalInstanceHandle.__internalInstanceHandle;
    }
    findHostInstanceResult = __internalInstanceHandle;
    if (!prop1) {
      const getNativeScrollRef = __internalInstanceHandle.getNativeScrollRef;
      let nativeScrollRef;
      if (getNativeScrollRef != null) {
        nativeScrollRef = getNativeScrollRef();
      }
      findHostInstanceResult = nativeScrollRef;
      if (!findHostInstanceResult) {
        if (__internalInstanceHandle._reactInternals) {
          const obj = findHostInstance;
          findHostInstanceResult = obj.findHostInstance(__internalInstanceHandle);
        } else {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("[Reanimated] Failed to find host instance for a ref.");
          throw error;
        }
      }
    }
  }
  const tmp11 = closure_3(findHostInstanceResult);
  if (tmp11) {
    return tmp11;
  } else {
    const _Error2 = Error;
    const self3 = this;
    const self4 = this;
    const error1 = new Error("[Reanimated] Failed to find shadow node for a ref.");
    throw error1;
  }
}
