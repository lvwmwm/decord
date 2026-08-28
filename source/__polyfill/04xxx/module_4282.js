// Module ID: 4282
// Function ID: 4283
// Dependencies: []

// Module 4282
let fn = Array.isArray;
if (!fn) {
  fn = (arg0) => {
    const call = toString.call;
    return "[object Array]" == (typeof call === "unknown" ? toString() : call(arg0));
  };
}

export default fn;
