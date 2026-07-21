// Module ID: 4378
// Function ID: 38773
// Name: properlyBoxed
// Dependencies: []

// Module 4378 (properlyBoxed)

export default function properlyBoxed(arg0) {
  let closure_0 = true;
  let closure_1 = true;
  if ("function" === typeof arg0) {
    obj.call("f", (arg0, arg1, arg2) => {
      if ("object" !== typeof arg2) {
        let closure_0 = false;
      }
    });
    obj.call([true], function() {
      let closure_1 = "string" === typeof this;
    }, "x");
    while (true) {
      let tmp4 = !flag;
      if (flag) {
        break;
      } else {
        tmp4 = closure_0;
        // break
      }
      let tmp5 = tmp4;
      if (tmp4) {
        tmp5 = closure_1;
      }
      return tmp5;
    }
  } else {
    return false;
  }
};
