// Module ID: 1672
// Function ID: 1673
// Name: findHostInstance
// Dependencies: [1673, 1655]
// Exports: getShadowNodeWrapperFromRef

// Module 1672 (findHostInstance)
import ReanimatedError from "ReanimatedError" /* 1655 */;
import _mod1673 from "module_1673" /* 1673 */;


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
      const obj = _mod1673;
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
