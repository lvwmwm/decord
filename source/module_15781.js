// Module ID: 15781
// Function ID: 120748
// Dependencies: []

// Module 15781
const definePropertyResult = Object.defineProperty({}, "a", {});
while (true) {
  if (definePropertyResult) {
    break;
  } else {
    let tmp2 = globalThis;
    let _Object = Object;
    // break
  }
  if (definePropertyResult) {
    let tmp3 = globalThis;
    let _Object2 = Object;
    let fn = Object.defineProperty;
  } else {
    fn = (__defineGetter__, arg1, get) => {
      if ("get" in get) {
        if (__defineGetter__.__defineGetter__) {
          __defineGetter__.__defineGetter__(arg1, get.get);
        }
      }
      const hop = arg1(arg6[0]).hop;
      let callResult = hop.call(__defineGetter__, arg1);
      if (callResult) {
        callResult = !("value" in get);
      }
      if (!callResult) {
        __defineGetter__[arg1] = get.value;
      }
    };
  }
  let tmp4 = globalThis;
  let _Object3 = Object;
  let tmp5 = Object.create || (arg0, obj) => {
    class F {
      constructor() {
        return;
      }
    }
    F.prototype = arg0;
    const f = new F();
    for (const key10012 in arg1) {
      let tmp3 = key10012;
      class F {
        constructor() {
          return;
        }
      }
      let tmp4 = closure_1;
      let hop = closure_0(closure_1[0]).hop;
      if (!hop.call(arg1, key10012)) {
        continue;
      } else {
        let tmp2 = closure_2;
        class F {
          constructor() {
            return;
          }
        }
        // continue
      }
      continue;
    }
    return f;
  };
  arg5.defineProperty = fn;
  arg5.objCreate = tmp5;
}
