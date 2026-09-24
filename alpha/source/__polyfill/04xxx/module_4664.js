// Module ID: 4664
// Function ID: 4665
// Dependencies: []

// Module 4664
let fn = Array.isArray;
if (!fn) {
  fn = (arg0) => {
    const call = toString.call;
    return "[object Array]" == (typeof call === "unknown" ? toString() : call(arg0));
  };
}

export default fn;
