// Module ID: 4286
// Function ID: 37517
// Name: shortOut
// Dependencies: []

// Module 4286 (shortOut)

export default function shortOut(arg0) {
  let closure_0 = arg0;
  let c1 = 0;
  let c2 = 0;
  return () => {
    const tmp = callback();
    let c2 = tmp;
    if (16 - (tmp - c2) > 0) {
      const sum = c1 + 1;
      c1 = sum;
      if (sum >= 800) {
        return arguments[0];
      }
    } else {
      c1 = 0;
    }
    return callback(...arguments);
  };
};
