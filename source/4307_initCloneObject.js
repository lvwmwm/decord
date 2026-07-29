// Module ID: 4307
// Function ID: 4308
// Name: initCloneObject
// Dependencies: [630, 4308, 4309]

// Module 4307 (initCloneObject)

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor !== "_") {
    if (!require(630) /* isPrototype */(arg0)) {
      tmp3(4308)(tmp3(4309)(arg0));
      const tmp = tmp3(4308);
    }
    return {};
  }
};
