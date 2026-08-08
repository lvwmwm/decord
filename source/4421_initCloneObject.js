// Module ID: 4421
// Function ID: 4422
// Name: initCloneObject
// Dependencies: [630, 4422, 4423]

// Module 4421 (initCloneObject)

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!require(630) /* isPrototype */(arg0)) {
      tmp3(4422)(tmp3(4423)(arg0));
      const tmp = tmp3(4422);
    }
    return {};
  }
};
