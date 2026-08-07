// Module ID: 4419
// Function ID: 4420
// Name: initCloneObject
// Dependencies: [630, 4420, 4421]

// Module 4419 (initCloneObject)

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!require(630) /* isPrototype */(arg0)) {
      tmp3(4420)(tmp3(4421)(arg0));
      const tmp = tmp3(4420);
    }
    return {};
  }
};
