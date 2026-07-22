// Module ID: 7466
// Function ID: 59961
// Name: baseOrderBy
// Dependencies: []

// Module 7466 (baseOrderBy)

export default function baseOrderBy(arg0, arg1, arg2) {
  let callback = arg1;
  const dependencyMap = arg2;
  if (arg1.length) {
    let items = tmp(tmp2[0])(arg1, (arg0) => {
      let fn = arg0;
      const callback = arg0;
      if (callback(arg2[1])(arg0)) {
        fn = (arg0) => {
          if (1 === arg0.length) {
            let first = arg0[0];
          } else {
            first = arg0;
          }
          return arg0(closure_1[2])(arg0, first);
        };
      }
      return fn;
    });
  } else {
    items = [tmp(tmp2[3])];
  }
  callback = items;
  let closure_2 = -1;
  const tmp3 = callback(dependencyMap[0]);
  callback = tmp3(items, callback(dependencyMap[4])(callback(dependencyMap[5])));
  const tmp4 = callback(dependencyMap[4]);
  return callback(dependencyMap[7])(callback(dependencyMap[6])(arg0, (value) => {
    const callback = value;
    const sum = closure_2 + 1;
    closure_2 = sum;
    return { criteria: callback(arg2[0])(callback, (arg0) => arg0(arg0)), index: sum, value };
  }), (arg0, arg1) => callback(arg2[8])(arg0, arg1, arg2));
};
