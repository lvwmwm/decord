// Module ID: 7353
// Function ID: 59272
// Name: _optionalChain
// Dependencies: []

// Module 7353 (_optionalChain)
arg5._optionalChain = function _optionalChain(arg0) {
  const first = arg0[0];
  let tmp5Result = first;
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
            tmp5Result = tmp5(() => {
              const length = arguments.length;
              const array = new Array(length);
              for (let num = 0; num < length; num = num + 1) {
                array[num] = arguments[num];
              }
              const call = tmp5Result.call;
              const items = [tmp2];
              return call.apply(tmp5Result, items.concat(array));
            });
            tmp2 = undefined;
            tmp8 = tmp5Result;
          }
        }
        tmp2 = tmp8;
        tmp3 = tmp8;
      }
      tmp5Result = tmp5(tmp2);
      tmp8 = tmp5Result;
    }
  }
  return tmp3;
};
