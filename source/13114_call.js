// Module ID: 13114
// Function ID: 99458
// Name: call
// Dependencies: [0]

// Module 13114 (call)
import __exportStarResult1 from "__exportStarResult1";

const call = prototype.call;
if (__exportStarResult1) {
  const bind = prototype.bind;
  __exportStarResult1 = bind.bind(call, call);
}
if (!require("__exportStarResult1")) {
  __exportStarResult1 = (arg0) => {
    const call = arg0;
    return () => arg0(...arguments);
  };
}

export default __exportStarResult1;
