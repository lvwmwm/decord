// Module ID: 1610
// Function ID: 17883
// Name: getShadowNodeWrapperFromRef
// Dependencies: [1611, 1593]

// Module 1610 (getShadowNodeWrapperFromRef)
const require = arg1;
const dependencyMap = arg6;
arg5.getShadowNodeWrapperFromRef = function getShadowNodeWrapperFromRef(self, findHostInstanceResult) {
  let prop;
  if (null != findHostInstanceResult) {
    prop = findHostInstanceResult.__internalInstanceHandle;
  }
  if (null == prop) {
    let prop1;
    if (null != self) {
      prop1 = self.__internalInstanceHandle;
    }
    prop = prop1;
  }
  if (null == prop) {
    let prop2;
    if (null != self) {
      if (null != self.getNativeScrollRef) {
        const nativeScrollRef = self.getNativeScrollRef();
        if (null != nativeScrollRef) {
          prop2 = nativeScrollRef.__internalInstanceHandle;
        }
      }
    }
    prop = prop2;
  }
  if (null == prop) {
    let __internalInstanceHandle = self._reactInternals;
    if (__internalInstanceHandle) {
      __internalInstanceHandle = require(1611) /* findHostInstance */.findHostInstance(self).__internalInstanceHandle;
      const obj = require(1611) /* findHostInstance */;
    }
    prop = __internalInstanceHandle;
  }
  if (prop) {
    return prop.stateNode.node;
  } else {
    const ReanimatedError = require(1593) /* processStack */.ReanimatedError;
    const prototype = ReanimatedError.prototype;
    const reanimatedError = new ReanimatedError("Failed to find host instance for a ref.");
    throw reanimatedError;
  }
};
