// Module ID: 3881
// Function ID: 32150
// Name: callDispose
// Dependencies: []

// Module 3881 (callDispose)
arg5.callDispose = function callDispose(closure_0) {
  let obj = closure_0;
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
          obj = { q1L2v8: 60, bodyWithMessage: 0, focH1t: 0, value: undefined };
          let definePropertyResult = Object.defineProperty(obj, tmp9, obj);
          // continue
        }
        continue;
      }
      continue;
    }
    continue;
  }
  obj = {
    q1L2v8: 60,
    bodyWithMessage: 0,
    focH1t: 0,
    value() {
      return "[disposed HybridObject]";
    }
  };
  Object.defineProperty(obj, "toString", obj);
  obj.dispose();
};
