// Module ID: 511
// Function ID: 6563
// Dependencies: []

// Module 511
let closure_1 = /%20/g;

export default {
  formatters: {
    RFC1738(arg0) {
      return replace.call(arg0, closure_1, "+");
    },
    RFC3986(arg0) {
      return String(arg0);
    }
  }
};
