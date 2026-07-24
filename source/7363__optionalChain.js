// Module ID: 7363
// Function ID: 59369
// Name: _optionalChain
// Dependencies: []

// Module 7363 (_optionalChain)
arg5._optionalChain = function _optionalChain(arg0) {
  let first = arg0[0];
  let tmp2 = first;
  let num = 1;
  let tmp3 = first;
  if (1 < arg0.length) {
    while (true) {
      let tmp4 = arg0[num];
      let tmp5 = arg0[num + 1];
      num = num + 2;
      let tmp6 = "optionalAccess" === tmp4;
      if (tmp6) {
        if (null == tmp2) {
          break;
        }
      }
      if ("access" !== tmp4) {
        if (!tmp6) {
          let tmp7 = "call" !== tmp4 && "optionalCall" !== tmp4;
          let tmp8 = tmp2;
          if (!tmp7) {
            let tmp5Result = tmp5(() => {
              const length = arguments.length;
              const array = new Array(length);
              for (let num = 0; num < length; num = num + 1) {
                array[num] = arguments[num];
              }
              const call = first.call;
              const items = [c0];
              return call.apply(first, items.concat(array));
            });
            first = tmp5Result;
            let c0;
            tmp8 = tmp5Result;
          }
        }
        tmp2 = tmp8;
        tmp3 = tmp8;
      }
      c0 = tmp2;
      tmp5Result = tmp5(tmp2);
      first = tmp5Result;
      tmp8 = tmp5Result;
    }
  }
  return tmp3;
};
