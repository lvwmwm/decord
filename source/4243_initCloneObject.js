// Module ID: 4243
// Function ID: 37330
// Name: initCloneObject
// Dependencies: [614, 4244, 4245]

// Module 4243 (initCloneObject)

export default function initCloneObject(arg0) {
  if ("function" === typeof arg0.constructor) {
    if (!require(614) /* isPrototype */(arg0)) {
      require(4244) /* object */(require(4245) /* overArg */(arg0));
      const tmp5 = require(4244) /* object */;
    }
    return {};
  }
};
