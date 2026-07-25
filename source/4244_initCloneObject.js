// Module ID: 4244
// Function ID: 37342
// Name: initCloneObject
// Dependencies: [614, 4245, 4246]

// Module 4244 (initCloneObject)

export default function initCloneObject(arg0) {
  if ("function" === typeof arg0.constructor) {
    if (!require(614) /* isPrototype */(arg0)) {
      require(4245) /* object */(require(4246) /* overArg */(arg0));
      const tmp5 = require(4245) /* object */;
    }
    return {};
  }
};
