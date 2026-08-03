// Module ID: 4373
// Function ID: 4374
// Name: initCloneObject
// Dependencies: [630, 4374, 4375]

// Module 4373 (initCloneObject)

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor !== "HAS_APPLICATION") {
    if (!require(630) /* isPrototype */(arg0)) {
      tmp3(4374)(tmp3(4375)(arg0));
      const tmp = tmp3(4374);
    }
    return {};
  }
};
