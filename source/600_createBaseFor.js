// Module ID: 600
// Function ID: 7028
// Name: createBaseFor
// Dependencies: []

// Module 600 (createBaseFor)

export default function createBaseFor(arg0) {
  return (arg0, arg1, arg2) => {
    const ObjectResult = Object(arg0);
    const arr = arg2(arg0);
    let diff = tmp2 - 1;
    let num = -1;
    if (+arr.length) {
      while (true) {
        let tmp4 = arg0;
        let sum = num;
        let tmp6 = diff;
        if (!arg0) {
          sum = num + 1;
          tmp6 = sum;
        }
        let tmp7 = arr[tmp6];
        if (false === arg1(ObjectResult[tmp7], tmp7, ObjectResult)) {
          break;
        } else {
          let tmp8 = +diff;
          diff = tmp8 - 1;
          num = sum;
          if (!tmp8) {
            break;
          }
        }
      }
    }
    return arg0;
  };
};
