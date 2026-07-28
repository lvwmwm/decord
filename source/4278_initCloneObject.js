// Module ID: 4278
// Function ID: 37455
// Name: initCloneObject
// Dependencies: [614, 4279, 4280]

// Module 4278 (initCloneObject)

export default function initCloneObject(arg0) {
  if ("function" === typeof arg0.constructor) {
    if (!require(614) /* isPrototype */(arg0)) {
      require(4279) /* object */(require(4280) /* overArg */(arg0));
      const tmp5 = require(4279) /* object */;
    }
    return {};
  }
};
