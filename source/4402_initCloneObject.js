// Module ID: 4402
// Function ID: 4403
// Name: initCloneObject
// Dependencies: [630, 4403, 4404]

// Module 4402 (initCloneObject)

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!require(630) /* isPrototype */(arg0)) {
      tmp3(4403)(tmp3(4404)(arg0));
      const tmp = tmp3(4403);
    }
    return {};
  }
};
