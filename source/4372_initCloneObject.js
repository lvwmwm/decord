// Module ID: 4372
// Function ID: 4373
// Name: initCloneObject
// Dependencies: [630, 4373, 4374]

// Module 4372 (initCloneObject)

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!require(630) /* isPrototype */(arg0)) {
      tmp3(4373)(tmp3(4374)(arg0));
      const tmp = tmp3(4373);
    }
    return {};
  }
};
