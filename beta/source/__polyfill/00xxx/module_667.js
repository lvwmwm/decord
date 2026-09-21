// Module ID: 667
// Function ID: 668
// Dependencies: [531, 591]

// Module 667
import _mod531 from "module_531" /* 531 */;
import _mod591 from "module_591" /* 591 */;


export default function getMatchData(arg0) {
  let tmp7;
  const arr = _mod531(arg0);
  let diff = tmp - 1;
  if (+arr.length) {
    do {
      let tmp3 = arr[diff];
      let tmp4 = arg0[tmp3];
      let items = [tmp3, tmp4, ];
      items[2] = _mod591(tmp4);
      arr[diff] = items;
      tmp7 = +diff;
      diff = tmp7 - 1;
    } while (tmp7);
  }
  return arr;
};
