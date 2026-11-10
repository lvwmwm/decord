// Module ID: 1678
// Function ID: 1679
// Name: findHostInstance
// Dependencies: [1679, 1661]
// Exports: getShadowNodeWrapperFromRef

// Module 1678 (findHostInstance)
import ReanimatedError from "ReanimatedError" /* 1661 */;
import _mod1679 from "module_1679" /* 1679 */;


export function getShadowNodeWrapperFromRef(self, findHostInstanceResult) {
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
      const obj = _mod1679;
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
}
