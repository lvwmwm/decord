// Module ID: 10762
// Function ID: 10763
// Name: normal
// Dependencies: [1652]
// Exports: normalLayout

// Module 10762 (normal)
import _mod1652 from "module_1652" /* 1652 */;

let closure_2 = { code: "(function pnpm_normalTs1(value){let[interpolate,size,vertical]=this.__closure;const translate=interpolate(value,[-1,0,1],[-size,0,size]);return{transform:[vertical?{translateY:translate}:{translateX:translate}]};})" };

export function normalLayout(arg0) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  let vertical;
  let items = [closure_2, , , ];
  ({ size, vertical } = arg0);
  items[1] = _mod1652.interpolate;
  items[2] = size;
  items[3] = vertical;
  let c0;
  let c1;
  let c2;
  [tmp, tmp2, tmp3, tmp4] = items;
  function pnpm_normalTs1(arg0) {
    let items1;
    let obj;
    const items = [-c1, 0, c1];
    const tmp = _undefined(arg0, [-1, 0, 1], items);
    const tmp2 = c2;
    if (tmp2) {
      obj = { translateY: tmp };
      const obj2 = { translateY: tmp };
    } else {
      obj = { translateX: tmp };
    }
    const obj3 = { transform: items1 };
    items1 = [obj];
    return obj3;
  }
  let items1 = [tmp2, tmp3, tmp4];
  pnpm_normalTs1.__closure = items1;
  pnpm_normalTs1.__workletHash = 2452399105020;
  pnpm_normalTs1.__initData = tmp;
  return pnpm_normalTs1;
}
