// Module ID: 616
// Function ID: 7059
// Name: overArg
// Dependencies: []

// Module 616 (overArg)

export default function overArg(arg0, arg1) {
  return (arg0) => arg0(arg1(arg0));
};
