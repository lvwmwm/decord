// Module ID: 594
// Function ID: 7016
// Name: createBaseEach
// Dependencies: [595]

// Module 594 (createBaseEach)

export default function createBaseEach(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0, arg1) => {
    if (null == arg0) {
      return arg0;
    } else if (callback(table[0])(arg0)) {
      let num = -1;
      if (table) {
        num = length;
      }
      const _Object = Object;
      const ObjectResult = Object(arg0);
      if (table) {
        let diff = tmp8 - 1;
        let tmp7 = tmp8;
      } else {
        diff = num + 1;
        tmp7 = diff < length;
      }
      if (tmp7) {
        if (false !== arg1(ObjectResult[diff], diff, ObjectResult)) {
          while (true) {
            let tmp9 = table;
            if (table) {
              let tmp12 = +diff;
              let diff1 = tmp12 - 1;
              let tmp11 = tmp12;
            } else {
              diff1 = diff + 1;
              tmp11 = diff1 < length;
            }
            if (!tmp11) {
              break;
            } else {
              diff = diff1;
              if (false === arg1(ObjectResult[diff1], diff1, ObjectResult)) {
                break;
              }
            }
          }
        }
      }
      return arg0;
    } else {
      return callback(arg0, arg1);
    }
  };
};
