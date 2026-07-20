// Module ID: 356
// Function ID: 5279
// Name: A
// Dependencies: []

// Module 356 (A)
function A(arg0, arg1) {
  return 1 - 3 * arg1 + 3 * arg0;
}
function B(arg0, arg1) {
  return 3 * arg1 - 6 * arg0;
}
function C(arg0) {
  return 3 * arg0;
}
function calcBezier(arg0, arg1, arg2) {
  const result = A(arg1, arg2) * arg0;
  const result1 = (result + B(arg1, arg2)) * arg0;
  return (result1 + C(arg1)) * arg0;
}
function getSlope(arg0, arg1, arg2) {
  const result = 3 * A(arg1, arg2) * arg0 * arg0;
  const result1 = 2 * B(arg1, arg2) * arg0;
  return result + result1 + C(arg1);
}
let closure_0 = "function" === typeof Float32Array;
arg5.default = function bezier(arg0, arg1, arg2, arg3) {
  let closure_0 = arg0;
  const A = arg1;
  const B = arg2;
  const C = arg3;
  function getTForX(arg0) {
    let num = 0;
    let num2 = 1;
    let num3 = 0;
    let num4 = 1;
    if (float32Array[1] <= arg0) {
      const sum = num + 0.1;
      const sum1 = num2 + 1;
      num3 = sum;
      num4 = sum1;
      while (10 !== sum1) {
        let tmp3 = float32Array;
        num = sum;
        num2 = sum1;
        num3 = sum;
        num4 = sum1;
        if (float32Array[sum1] > arg0) {
          break;
        }
      }
    }
    const diff = num4 - 1;
    const sum2 = num3 + (arg0 - float32Array[diff]) / (float32Array[diff + 1] - float32Array[diff]) * 0.1;
    const tmp6 = getTForX(sum2, arg0, arg2);
    if (tmp6 >= 0.001) {
      let diff1 = sum2;
      let num9 = 0;
      const tmp20 = getTForX(diff1, arg0, arg2);
      let tmp22 = diff1;
      while (0 !== tmp20) {
        let tmp23 = float32Array;
        diff1 = diff1 - (float32Array(diff1, tmp16, tmp17) - arg0) / tmp20;
        num9 = num9 + 1;
        tmp22 = diff1;
        if (num9 >= 4) {
          break;
        }
      }
      let tmp7 = tmp22;
    } else {
      tmp7 = sum2;
      if (0 !== tmp6) {
        let sum3 = num3 + 0.1;
        let num7 = 0;
        while (true) {
          let tmp12 = float32Array;
          let sum4 = num3 + (sum3 - num3) / 2;
          let diff2 = float32Array(sum4, tmp9, tmp10) - arg0;
          let tmp15 = sum4;
          if (diff2 > 0) {
            tmp15 = num3;
            sum3 = sum4;
          }
          let _Math = Math;
          tmp7 = sum4;
          if (Math.abs(diff2) <= 0.0000001) {
            break;
          } else {
            num7 = num7 + 1;
            num3 = tmp15;
            tmp7 = sum4;
            if (num7 >= 10) {
              break;
            }
          }
        }
      }
    }
    return tmp7;
  }
  if (arg0 >= 0) {
    if (arg0 <= 1) {
      if (arg2 >= 0) {
        if (arg2 <= 1) {
          if (closure_0) {
            const _Float32Array = Float32Array;
            let float32Array = new Float32Array(11);
          } else {
            const _Array = Array;
            float32Array = new Array(11);
          }
          const calcBezier = float32Array;
          let num4 = 0;
          if (arg0 !== arg1) {
            do {
              let tmp9 = closure_4;
              let num5 = 0.1;
              float32Array[num4] = closure_4(num4 * 0.1, arg0, arg2);
              num4 = num4 + 1;
              let num6 = 11;
            } while (num4 < 11);
          } else {
            num4 = 0;
          }
          return function BezierEasing(arg0) {
            if (arg0 !== arg1) {
              let num = 0;
              if (0 !== arg0) {
                let num2 = 1;
                if (1 !== arg0) {
                  num2 = float32Array(getTForX(arg0), arg1, arg3);
                }
                num = num2;
              }
              let tmp3 = num;
            } else {
              tmp3 = arg0;
            }
            return tmp3;
          };
        }
      }
    }
  }
  const error = new Error("bezier x values must be in [0, 1] range");
  throw error;
};
