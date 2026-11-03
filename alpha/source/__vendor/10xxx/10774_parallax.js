// Module ID: 10774
// Function ID: 10775
// Name: parallax
// Dependencies: [1652]
// Exports: parallaxLayout

// Module 10774 (parallax)
import _mod1652 from "module_1652" /* 1652 */;

let closure_2 = { code: "(function pnpm_parallaxTs1(value){let[interpolate,size,parallaxScrollingOffset,Extrapolation,parallaxAdjacentItemScale,parallaxScrollingScale,vertical]=this.__closure;const translate=interpolate(value,[-1,0,1],[-size+parallaxScrollingOffset,0,size-parallaxScrollingOffset]);const zIndex=Math.round(interpolate(value,[-1,0,1],[0,size,0],Extrapolation.CLAMP));const scale=interpolate(value,[-1,0,1],[parallaxAdjacentItemScale,parallaxScrollingScale,parallaxAdjacentItemScale],Extrapolation.CLAMP);return{transform:[vertical?{translateY:translate}:{translateX:translate},{scale:scale}],zIndex:zIndex};})" };

export function parallaxLayout(arg0) {
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let vertical;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const parallaxScrollingOffset = obj.parallaxScrollingOffset;
  let num = 100;
  ({ size, vertical } = arg0);
  if (undefined !== parallaxScrollingOffset) {
    num = parallaxScrollingOffset;
  }
  const parallaxScrollingScale = obj.parallaxScrollingScale;
  let num2 = 0.8;
  if (undefined !== parallaxScrollingScale) {
    num2 = parallaxScrollingScale;
  }
  let parallaxAdjacentItemScale = obj.parallaxAdjacentItemScale;
  if (undefined === parallaxAdjacentItemScale) {
    let tmp = num2;
    parallaxAdjacentItemScale = num2 ** 2;
  }
  let items = [closure_2, _mod1652.interpolate, size, num, _mod1652.Extrapolation, parallaxAdjacentItemScale, num2, vertical];
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
  function pnpm_parallaxTs1(arg0) {
    let items3;
    let obj;
    const items = [-c1 + c2, 0, c1 - c2];
    const tmp = _undefined(arg0, [-1, 0, 1], items);
    const items1 = [0, c1, 0];
    const items2 = [c4, c5, c4];
    const rounded = Math.round(_undefined(arg0, [-1, 0, 1], items1, _undefined2.CLAMP));
    const tmp3 = _undefined(arg0, [-1, 0, 1], items2, _undefined2.CLAMP);
    if (c6) {
      obj = { translateY: tmp };
      const obj2 = { translateY: tmp };
    } else {
      obj = { translateX: tmp };
    }
    const obj3 = { transform: items3, zIndex: rounded };
    items3 = [obj, { scale: tmp3 }];
    return obj3;
  }
  let items1 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9];
  pnpm_parallaxTs1.__closure = items1;
  pnpm_parallaxTs1.__workletHash = 1463912377211;
  pnpm_parallaxTs1.__initData = tmp2;
  return pnpm_parallaxTs1;
}
