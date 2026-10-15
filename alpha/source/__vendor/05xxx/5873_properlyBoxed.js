// Module ID: 5873
// Function ID: 5874
// Name: properlyBoxed
// Dependencies: []

// Module 5873 (properlyBoxed)

export default function properlyBoxed(call) {
  let c0 = true;
  let closure_1 = true;
  if (typeof call === "function") {
    let flag;
    try {
      call.call("f", (arg0, arg1, obj) => {
        if (typeof obj !== "object") {
          c0 = false;
        }
      });
      call.call([null], function() {
        closure_1 = typeof this === "string";
      }, "x");
      flag = false;
      return !flag && c0 && closure_1;
    } catch (err) {
      flag = true;
    }
  } else {
    return false;
  }
};
