// Module ID: 1666
// Function ID: 1667
// Name: findHostInstance
// Dependencies: [1667, 1649]
// Exports: getShadowNodeWrapperFromRef

// Module 1666 (findHostInstance)
import ReanimatedError from "ReanimatedError" /* 1649 */;
import _mod1667 from "module_1667" /* 1667 */;


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
      const obj = _mod1667;
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
