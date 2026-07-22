// Module ID: 511
// Function ID: 6563
// Dependencies: []

// Module 511
let closure_1 = /%20/g;
const obj = {
  last_pin_timestamp: null,
  FeedbackRating: null,
  FriendRequestsOutgoing: null,
  crc: null,
  formatters: {
    RFC1738(arg0) {
      return replace.call(arg0, closure_1, "+");
    },
    RFC3986(arg0) {
      return String(arg0);
    }
  }
};

export default obj;
