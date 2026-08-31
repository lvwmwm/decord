// Module ID: 1681
// Function ID: 1682
// Name: getShadowNodeWrapperFromRef
// Dependencies: [1682, 1664]

// Module 1681 (getShadowNodeWrapperFromRef)
import t from "t" /* 1664 */;
import findHostInstance from "findHostInstance" /* 1682 */;

require = arg1;
const dependencyMap = arg6;
arg5.getShadowNodeWrapperFromRef = function getShadowNodeWrapperFromRef(self, findHostInstanceResult) {
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
      __internalInstanceHandle = findHostInstance.findHostInstance(self).__internalInstanceHandle;
      const obj = findHostInstance;
    }
    prop = __internalInstanceHandle;
  }
  if (prop) {
    return prop.stateNode.node;
  } else {
    const reanimatedError = new t.ReanimatedError("Failed to find host instance for a ref.");
    throw reanimatedError;
  }
};
