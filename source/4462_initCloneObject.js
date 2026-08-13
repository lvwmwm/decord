// Module ID: 4462
// Function ID: 4463
// Name: initCloneObject
// Dependencies: [630, 4463, 4464]

// Module 4462 (initCloneObject)

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!require(630) /* isPrototype */(arg0)) {
      tmp3(4463)(tmp3(4464)(arg0));
      const tmp = tmp3(4463);
    }
    return {};
  }
};
