// Module ID: 1611
// Function ID: 17884
// Name: findHostInstance
// Dependencies: [1585, 119, 1593, 276]

// Module 1611 (findHostInstance)
const require = arg1;
const dependencyMap = arg6;
arg5.findHostInstance = function findHostInstance(_componentRef) {
  _componentRef = _componentRef._componentRef;
  let tmp;
  if (_componentRef) {
    if (_componentRef.__internalInstanceHandle) {
      if (_componentRef.__nativeTag) {
        tmp = tmp2;
      }
      tmp2 = _componentRef;
    }
  }
  if (undefined === tmp) {
    if (undefined === prop1) {
      if (obj2.isFabric()) {
        const tmp11 = require(119) /* ReactFabric */;
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
        prop1 = findHostInstance_DEPRECATED;
      } else {
        const tmp5 = require(276);
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
      obj2 = require(1585) /* isJest */;
    }
    if (!obj.isFabric()) {
      let _componentRef2 = _componentRef._componentRef;
    } else {
      _componentRef2 = _componentRef;
    }
    tmp = prop1(_componentRef2);
    obj = require(1585) /* isJest */;
    const tmp19 = prop1;
  }
  return tmp;
};
