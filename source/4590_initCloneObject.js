// Module ID: 4590
// Function ID: 4591
// Name: initCloneObject
// Dependencies: [630, 4591, 4592]

// Module 4590 (initCloneObject)

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!require(630) /* isPrototype */(arg0)) {
      tmp3(4591)(tmp3(4592)(arg0));
      const tmp = tmp3(4591);
    }
    return {};
  }
};
