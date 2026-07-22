// Module ID: 4282
// Function ID: 37485
// Name: shortOut
// Dependencies: []

// Module 4282 (shortOut)

export default function shortOut(arg0) {
  const now = arg0;
  let closure_1 = 0;
  let closure_2 = 0;
  return () => {
    const tmp = arg0();
    let closure_2 = tmp;
    if (16 - (tmp - closure_2) > 0) {
      const sum = closure_1 + 1;
      closure_1 = sum;
      if (sum >= 800) {
        return arguments[0];
      }
    } else {
      closure_1 = 0;
    }
    return arg0(...arguments);
  };
};
