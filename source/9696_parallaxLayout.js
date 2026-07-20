// Module ID: 9696
// Function ID: 75399
// Name: parallaxLayout
// Dependencies: []

// Module 9696 (parallaxLayout)
let closure_2 = { code: "function pnpm_parallaxTs1(value){const{interpolate,size,parallaxScrollingOffset,Extrapolation,parallaxAdjacentItemScale,parallaxScrollingScale,vertical}=this.__closure;const translate=interpolate(value,[-1,0,1],[-size+parallaxScrollingOffset,0,size-parallaxScrollingOffset]);const zIndex=Math.round(interpolate(value,[-1,0,1],[0,size,0],Extrapolation.CLAMP));const scale=interpolate(value,[-1,0,1],[parallaxAdjacentItemScale,parallaxScrollingScale,parallaxAdjacentItemScale],Extrapolation.CLAMP);return{transform:[vertical?{translateY:translate}:{translateX:translate},{scale:scale}],zIndex:zIndex};}" };
arg5.parallaxLayout = function parallaxLayout(size) {
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let obj = arguments[1];
    }
    size = size.size;
    const arg1 = size;
    const vertical = size.vertical;
    const arg6 = vertical;
    const parallaxScrollingOffset = obj.parallaxScrollingOffset;
    let num = 100;
    if (undefined !== parallaxScrollingOffset) {
      num = parallaxScrollingOffset;
    }
    let closure_2 = num;
    const parallaxScrollingScale = obj.parallaxScrollingScale;
    let num2 = 0.8;
    if (undefined !== parallaxScrollingScale) {
      num2 = parallaxScrollingScale;
    }
    let parallaxAdjacentItemScale = obj.parallaxAdjacentItemScale;
    if (undefined === parallaxAdjacentItemScale) {
      parallaxAdjacentItemScale = num2 ** 2;
    }
    /* worklet (recovered source) */ function pnpm_parallaxTs1(value){const{interpolate,size,parallaxScrollingOffset,Extrapolation,parallaxAdjacentItemScale,parallaxScrollingScale,vertical}=this.__closure;const translate=interpolate(value,[-1,0,1],[-size+parallaxScrollingOffset,0,size-parallaxScrollingOffset]);const zIndex=Math.round(interpolate(value,[-1,0,1],[0,size,0],Extrapolation.CLAMP));const scale=interpolate(value,[-1,0,1],[parallaxAdjacentItemScale,parallaxScrollingScale,parallaxAdjacentItemScale],Extrapolation.CLAMP);return{transform:[vertical?{translateY:translate}:{translateX:translate},{scale:scale}],zIndex:zIndex};}
    obj = { interpolate: arg1(arg6[0]).interpolate, size, parallaxScrollingOffset: num, Extrapolation: arg1(arg6[0]).Extrapolation, parallaxAdjacentItemScale, parallaxScrollingScale: num2, vertical };
    pnpm_parallaxTs1.__closure = obj;
    pnpm_parallaxTs1.__workletHash = 8790326555138;
    pnpm_parallaxTs1.__initData = closure_2;
    return pnpm_parallaxTs1;
  }
  obj = {};
};
