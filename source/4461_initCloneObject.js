// Module ID: 4461
// Function ID: 4462
// Name: initCloneObject
// Dependencies: [630, 4462, 4463]

// Module 4461 (initCloneObject)

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!require(630) /* isPrototype */(arg0)) {
      tmp3(4462)(tmp3(4463)(arg0));
      const tmp = tmp3(4462);
    }
    return {};
  }
};
