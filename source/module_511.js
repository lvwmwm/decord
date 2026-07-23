// Module ID: 511
// Function ID: 6563
// Dependencies: []

// Module 511
const re1 = /%20/g;
const obj = {
  default: "RFC3986",
  formatters: {
    RFC1738(arg0) {
      return replace.call(arg0, closure_1, "+");
    },
    RFC3986(arg0) {
      return String(arg0);
    }
  },
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
};

export default obj;
