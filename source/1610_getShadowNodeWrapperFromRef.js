// Module ID: 1610
// Function ID: 17881
// Name: getShadowNodeWrapperFromRef
// Dependencies: []

// Module 1610 (getShadowNodeWrapperFromRef)
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
      __internalInstanceHandle = findHostInstanceResult(arg6[0]).findHostInstance(self).__internalInstanceHandle;
      const obj = findHostInstanceResult(arg6[0]);
    }
    prop = __internalInstanceHandle;
  }
  if (prop) {
    return prop.stateNode.node;
  } else {
    const ReanimatedError = findHostInstanceResult(arg6[1]).ReanimatedError;
    const prototype = ReanimatedError.prototype;
    const reanimatedError = new ReanimatedError("Failed to find host instance for a ref.");
    throw reanimatedError;
  }
};
