// Module ID: 4286
// Function ID: 37496
// Name: apply
// Dependencies: []

// Module 4286 (apply)

export default function apply(call) {
  if (0 === arg2.length) {
    return call.call(arg1);
  } else if (1 === length) {
    return call.call(arg1, arg2[0]);
  } else if (2 === length) {
    return call.call(arg1, arg2[0], arg2[1]);
  } else if (3 === length) {
    return call.call(arg1, arg2[0], arg2[1], arg2[2]);
  } else {
    return call.apply(arg1, arg2);
  }
};
