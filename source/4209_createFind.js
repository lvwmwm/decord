// Module ID: 4209
// Function ID: 36603
// Name: createFind
// Dependencies: [595, 697, 601]

// Module 4209 (createFind)

export default function createFind(arg0) {
  let closure_0 = arg0;
  return (arg0, arg1, arg2) => {
    const ObjectResult = Object(arg0);
    const callback = ObjectResult;
    let tmp2 = arg0;
    let predicate = arg1;
    if (!callback(outer1_1[0])(arg0)) {
      const tmp6 = callback(outer1_1[1])(arg1, 3);
      let closure_1 = tmp6;
      tmp2 = callback(outer1_1[2])(arg0);
      predicate = function predicate(arg0) {
        return tmp6(ObjectResult[arg0], arg0, ObjectResult);
      };
      const tmp3 = tmp6;
    }
    const tmp7 = callback(tmp2, predicate, arg2);
    let tmp8;
    if (tmp7 > -1) {
      let tmp9 = tmp7;
      if (tmp3) {
        tmp9 = tmp2[tmp7];
      }
      tmp8 = ObjectResult[tmp9];
    }
    return tmp8;
  };
};
