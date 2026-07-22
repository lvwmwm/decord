// Module ID: 9701
// Function ID: 75437
// Name: normalLayout
// Dependencies: []

// Module 9701 (normalLayout)
let closure_2 = { code: "function pnpm_normalTs1(value){const{interpolate,size,vertical}=this.__closure;const translate=interpolate(value,[-1,0,1],[-size,0,size]);return{transform:[vertical?{translateY:translate}:{translateX:translate}]};}" };
arg5.normalLayout = function normalLayout(size) {
  size = size.size;
  const arg1 = size;
  const vertical = size.vertical;
  const arg6 = vertical;
  /* worklet (recovered source) */ function pnpm_normalTs1(value){const{interpolate,size,vertical}=this.__closure;const translate=interpolate(value,[-1,0,1],[-size,0,size]);return{transform:[vertical?{translateY:translate}:{translateX:translate}]};}
  pnpm_normalTs1.__closure = { interpolate: arg1(arg6[0]).interpolate, size, vertical };
  pnpm_normalTs1.__workletHash = 8970171423653;
  pnpm_normalTs1.__initData = closure_2;
  return pnpm_normalTs1;
};
