// Module ID: 7361
// Function ID: 59358
// Name: _asyncOptionalChain2
// Dependencies: [5]
// Exports: _asyncOptionalChain

// Module 7361 (_asyncOptionalChain2)
import asyncGeneratorStep from "asyncGeneratorStep";

async function _asyncOptionalChain2(arg0, arg1) {
  let first;
  let c0;
  first = arg0[0];
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
            let tmp9 = yield tmp5(() => {
              const length = arguments.length;
              const array = new Array(length);
              for (let num = 0; num < length; num = num + 1) {
                array[num] = arguments[num];
              }
              const call = first.call;
              const items = [c0];
              return call.apply(first, items.concat(array));
            });
            first = tmp9;
            c0 = undefined;
            tmp8 = tmp9;
          }
        }
        tmp2 = tmp8;
        tmp3 = tmp8;
      }
      c0 = tmp2;
      let tmp10 = yield tmp5(tmp2);
      first = tmp10;
      tmp8 = tmp10;
    }
  }
  return tmp3;
}

export const _asyncOptionalChain = function _asyncOptionalChain(arg0) {
  return _asyncOptionalChain2(...arguments);
};
