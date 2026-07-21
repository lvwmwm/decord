// Module ID: 1611
// Function ID: 17883
// Name: findHostInstance
// Dependencies: []

// Module 1611 (findHostInstance)
arg5.findHostInstance = function findHostInstance(_componentRef) {
  _componentRef = _componentRef._componentRef;
  let tmp;
  if (_componentRef) {
    if (_componentRef.__internalInstanceHandle) {
      if (_componentRef.__nativeTag) {
        tmp = tmp2;
      }
      const tmp2 = _componentRef;
    }
  }
  if (undefined === tmp) {
    if (undefined === prop1) {
      if (obj2.isFabric()) {
        const tmp11 = arg1(arg6[1]);
        let prop;
        if (null != tmp11) {
          if (null != tmp12.default) {
            prop = _default2.findHostInstance_DEPRECATED;
          }
        }
        if (null != prop) {
          let findHostInstance_DEPRECATED = prop;
        } else if (null != tmp12) {
          findHostInstance_DEPRECATED = tmp11.findHostInstance_DEPRECATED;
        }
        let prop1 = findHostInstance_DEPRECATED;
      } else {
        const tmp5 = arg1(arg6[3]);
        prop1 = undefined;
        if (null != tmp5) {
          if (null != tmp5.default) {
            prop1 = _default.findHostInstance_DEPRECATED;
          }
        }
        if (null == prop1) {
          let prop2;
          if (null != tmp5) {
            prop2 = tmp5.findHostInstance_DEPRECATED;
          }
          prop1 = prop2;
        }
      }
      const obj2 = arg1(arg6[0]);
    }
    if (!obj.isFabric()) {
      let _componentRef2 = _componentRef._componentRef;
    } else {
      _componentRef2 = _componentRef;
    }
    tmp = prop1(_componentRef2);
    const obj = arg1(arg6[0]);
    const tmp19 = prop1;
  }
  return tmp;
};
