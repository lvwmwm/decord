// Module ID: 1686
// Function ID: 1687
// Name: findHostInstance
// Dependencies: [1687, 1669]
// Exports: getShadowNodeWrapperFromRef

// Module 1686 (findHostInstance)
import ReanimatedError from "ReanimatedError" /* 1669 */;
import _mod1687 from "module_1687" /* 1687 */;


export const getShadowNodeWrapperFromRef = function getShadowNodeWrapperFromRef(self, findHostInstanceResult) {
  let prop;
  if (findHostInstanceResult != null) {
    prop = findHostInstanceResult.__internalInstanceHandle;
  }
  if (prop == null) {
    let prop1;
    if (self != null) {
      prop1 = self.__internalInstanceHandle;
    }
    prop = prop1;
  }
  if (prop == null) {
    let prop2;
    if (self != null) {
      const getNativeScrollRef = self.getNativeScrollRef;
      if (getNativeScrollRef != null) {
        const nativeScrollRef = getNativeScrollRef();
        if (nativeScrollRef != null) {
          prop2 = nativeScrollRef.__internalInstanceHandle;
        }
      }
    }
    prop = prop2;
  }
  if (prop == null) {
    let __internalInstanceHandle = self._reactInternals;
    if (__internalInstanceHandle) {
      const obj = _mod1687;
      __internalInstanceHandle = obj.findHostInstance(self).__internalInstanceHandle;
    }
    prop = __internalInstanceHandle;
  }
  if (prop) {
    return prop.stateNode.node;
  } else {
    self = this;
    const self2 = this;
    const reanimatedError = new ReanimatedError.ReanimatedError("Failed to find host instance for a ref.");
    throw reanimatedError;
  }
};
