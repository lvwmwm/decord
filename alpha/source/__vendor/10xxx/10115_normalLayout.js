// Module ID: 10115
// Function ID: 10116
// Name: normalLayout
// Dependencies: [1655]
// Exports: normalLayout

// Module 10115 (normalLayout)
import _mod1655 from "module_1655" /* 1655 */;

const __initData = { code: "function pnpm_normalTs1(value){const{interpolate,size,vertical}=this.__closure;const translate=interpolate(value,[-1,0,1],[-size,0,size]);return{transform:[vertical?{translateY:translate}:{translateX:translate}]};}" };

export const normalLayout = function normalLayout(size) {
  size = size.size;
  const vertical = size.vertical;
  const fn = function l(arg0) {
    let items1;
    let obj3;
    const items = [-size, 0, size];
    const obj = _mod1655;
    const interpolateResult = obj.interpolate(arg0, [-1, 0, 1], items);
    const tmp2 = vertical;
    if (tmp2) {
      obj3 = { translateY: interpolateResult };
      const obj2 = { translateY: interpolateResult };
    } else {
      obj3 = { translateX: interpolateResult };
    }
    const obj4 = { transform: items1 };
    items1 = [obj3];
    return obj4;
  };
  let obj = { interpolate: size(vertical[0]).interpolate, size, vertical };
  fn.__closure = obj;
  fn.__workletHash = 8970171423653;
  fn.__initData = __initData;
  return fn;
};
