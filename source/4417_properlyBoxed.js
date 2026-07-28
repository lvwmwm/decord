// Module ID: 4417
// Function ID: 38940
// Name: properlyBoxed
// Dependencies: []

// Module 4417 (properlyBoxed)

export default function properlyBoxed(arg0) {
  let c0 = true;
  let c1 = true;
  if ("function" === typeof arg0) {
    obj.call("f", (arg0, arg1, arg2) => {
      if ("object" !== typeof arg2) {
        let c0 = false;
      }
    });
    obj.call([null], function() {
      let closure_1 = "string" === typeof this;
    }, "x");
    while (true) {
      let tmp4 = !flag;
      if (flag) {
        break;
      } else {
        tmp4 = c0;
        break;
      }
      let tmp5 = tmp4;
      if (tmp4) {
        tmp5 = c1;
      }
      return tmp5;
    }
  } else {
    return false;
  }
};
