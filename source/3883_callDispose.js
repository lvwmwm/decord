// Module ID: 3883
// Function ID: 32163
// Name: callDispose
// Dependencies: []

// Module 3883 (callDispose)
arg5.callDispose = function callDispose(c0) {
  let obj = c0;
  for (const key10009 in arg0) {
    let tmp8 = key10009;
    let tmp9 = key10009;
    let _Object2 = Object;
    let tmp10 = arg0;
    if (hasOwnProperty.call(obj, key10009)) {
      continue;
    } else {
      let tmp = tmp8;
      if ("__type" === tmp9) {
        continue;
      } else {
        let tmp2 = tmp8;
        if ("dispose" === tmp9) {
          continue;
        } else {
          let _Object = Object;
          let tmp3 = arg0;
          let tmp4 = tmp8;
          obj = { value: undefined, enumerable: false, configurable: true };
          let definePropertyResult = Object.defineProperty(obj, tmp9, obj);
          continue;
        }
        continue;
      }
      continue;
    }
    continue;
  }
  obj = {
    value() {
      return "[disposed HybridObject]";
    },
    enumerable: false,
    configurable: true
  };
  Object.defineProperty(obj, "toString", obj);
  obj.dispose();
};
