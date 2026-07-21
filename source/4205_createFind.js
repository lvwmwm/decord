// Module ID: 4205
// Function ID: 36563
// Name: createFind
// Dependencies: []

// Module 4205 (createFind)

export default function createFind(arg0) {
  const require = arg0;
  return (arg0, arg1, arg2) => {
    const ObjectResult = Object(arg0);
    arg0 = ObjectResult;
    let tmp2 = arg0;
    let predicate = arg1;
    if (!arg0(tmp6[0])(arg0)) {
      const tmp6 = arg0(tmp6[1])(arg1, 3);
      tmp2 = arg0(tmp6[2])(arg0);
      predicate = function predicate(arg0) {
        return tmp6(ObjectResult[arg0], arg0, ObjectResult);
      };
      const tmp3 = tmp6;
    }
    const tmp7 = arg0(tmp2, predicate, arg2);
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
