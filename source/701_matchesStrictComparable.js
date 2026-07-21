// Module ID: 701
// Function ID: 8704
// Name: matchesStrictComparable
// Dependencies: []

// Module 701 (matchesStrictComparable)

export default function matchesStrictComparable(arg0, arg1) {
  return (arg0) => {
    let tmp = null != arg0;
    if (tmp) {
      let tmp4 = arg0[closure_0] === arg1;
      if (tmp4) {
        let tmp6 = undefined !== arg1;
        if (!tmp6) {
          const _Object = Object;
          tmp6 = arg0 in Object(arg0);
        }
        tmp4 = tmp6;
      }
      tmp = tmp4;
    }
    return tmp;
  };
};
