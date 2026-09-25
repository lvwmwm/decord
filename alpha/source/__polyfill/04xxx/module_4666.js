// Module ID: 4666
// Function ID: 4667
// Dependencies: []

// Module 4666
let fn = Array.isArray;
if (!fn) {
  fn = (arg0) => {
    const call = toString.call;
    return "[object Array]" == (typeof call === "unknown" ? toString() : call(arg0));
  };
}

export default fn;
