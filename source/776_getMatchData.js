// Module ID: 776
// Function ID: 8855
// Name: getMatchData
// Dependencies: []

// Module 776 (getMatchData)

export default function getMatchData(arg0) {
  let tmp7;
  const arr = require(dependencyMap[0])(arg0);
  let diff = tmp - 1;
  if (+arr.length) {
    do {
      let tmp3 = arr[diff];
      let tmp4 = arg0[tmp3];
      let items = [tmp3, tmp4, ];
      let tmp5 = closure_0;
      let tmp6 = closure_1;
      items[2] = closure_0(closure_1[1])(tmp4);
      arr[diff] = items;
      tmp7 = +diff;
      diff = tmp7 - 1;
    } while (tmp7);
  }
  return arr;
};
