// Module ID: 1634
// Function ID: 18260
// Name: linear
// Dependencies: [57, 1635]

// Module 1634 (linear)
import importDefaultResult from "_slicedToArray";

const require = arg1;
let closure_2 = { code: "function linear_Pnpm_EasingTs1(t){return t;}" };
let closure_3 = { code: "function ease_Pnpm_EasingTs2(t){const{Bezier}=this.__closure;return Bezier(0.42,0,1,1)(t);}" };
let closure_4 = { code: "function quad_Pnpm_EasingTs3(t){return t*t;}" };
const tmp3 = (() => {
  function linear(arg0) {
    return arg0;
  }
  linear.__closure = {};
  linear.__workletHash = 1364160462572;
  linear.__initData = closure_2;
  return linear;
})();
let closure_5 = { code: "function cubic_Pnpm_EasingTs4(t){return t*t*t;}" };
const tmp4 = (() => {
  function ease(arg0) {
    return outer1_0(outer1_1[1]).Bezier(0.42, 0, 1, 1)(arg0);
  }
  ease.__closure = { Bezier: require(1635) /* calcBezier */.Bezier };
  ease.__workletHash = 1401633715672;
  ease.__initData = closure_3;
  return ease;
})();
let closure_6 = { code: "function poly_Pnpm_EasingTs5(n){return function(t){'worklet';return Math.pow(t,n);};}" };
let closure_7 = { code: "function pnpm_EasingTs6(t){const{n}=this.__closure;return Math.pow(t,n);}" };
const tmp5 = (() => {
  function quad(arg0) {
    return arg0 * arg0;
  }
  quad.__closure = {};
  quad.__workletHash = 10142286247628;
  quad.__initData = closure_4;
  return quad;
})();
let closure_8 = { code: "function sin_Pnpm_EasingTs7(t){return 1-Math.cos(t*Math.PI/2);}" };
const tmp6 = (() => {
  function cubic(arg0) {
    return arg0 * arg0 * arg0;
  }
  cubic.__closure = {};
  cubic.__workletHash = 10979714220746;
  cubic.__initData = closure_5;
  return cubic;
})();
let closure_9 = { code: "function circle_Pnpm_EasingTs8(t){return 1-Math.sqrt(1-t*t);}" };
const tmp7 = (() => {
  function poly(arg0) {
    let closure_0 = arg0;
    /* worklet (recovered source) */ function pnpm_EasingTs6(t){const{n}=this.__closure;return Math.pow(t,n);}
    pnpm_EasingTs6.__closure = { n: arg0 };
    pnpm_EasingTs6.__workletHash = 14203338349806;
    pnpm_EasingTs6.__initData = outer1_7;
    return pnpm_EasingTs6;
  }
  poly.__closure = {};
  poly.__workletHash = 8340356940855;
  poly.__initData = closure_6;
  return poly;
})();
let closure_10 = { code: "function exp_Pnpm_EasingTs9(t){return Math.pow(2,10*(t-1));}" };
const tmp8 = (() => {
  function sin(arg0) {
    return 1 - Math.cos(arg0 * Math.PI / 2);
  }
  sin.__closure = {};
  sin.__workletHash = 2581928095407;
  sin.__initData = closure_8;
  return sin;
})();
let closure_11 = { code: "function elastic_Pnpm_EasingTs10(bounciness=1){const p=bounciness*Math.PI;return function(t){'worklet';return 1-Math.pow(Math.cos(t*Math.PI/2),3)*Math.cos(t*p);};}" };
let closure_12 = { code: "function pnpm_EasingTs11(t){const{p}=this.__closure;return 1-Math.pow(Math.cos(t*Math.PI/2),3)*Math.cos(t*p);}" };
const tmp9 = (() => {
  function circle(arg0) {
    return 1 - Math.sqrt(1 - arg0 * arg0);
  }
  circle.__closure = {};
  circle.__workletHash = 1916826022255;
  circle.__initData = closure_9;
  return circle;
})();
let closure_13 = { code: "function back_Pnpm_EasingTs12(s=1.70158){return function(t){'worklet';return t*t*((s+1)*t-s);};}" };
let closure_14 = { code: "function pnpm_EasingTs13(t){const{s}=this.__closure;return t*t*((s+1)*t-s);}" };
const tmp10 = (() => {
  function exp(arg0) {
    return Math.pow(2, 10 * (arg0 - 1));
  }
  exp.__closure = {};
  exp.__workletHash = 1613943935211;
  exp.__initData = closure_10;
  return exp;
})();
let closure_15 = { code: "function bounce_Pnpm_EasingTs14(t){if(t<1/2.75){return 7.5625*t*t;}if(t<2/2.75){const t2=t-1.5/2.75;return 7.5625*t2*t2+0.75;}if(t<2.5/2.75){const t2=t-2.25/2.75;return 7.5625*t2*t2+0.9375;}const t2=t-2.625/2.75;return 7.5625*t2*t2+0.984375;}" };
const tmp11 = (() => {
  function elastic() {
    let num = 1;
    if (arguments.length > 0) {
      num = 1;
      if (undefined !== arguments[0]) {
        num = arguments[0];
      }
    }
    const result = num * Math.PI;
    let closure_0 = result;
    /* worklet (recovered source) */ function pnpm_EasingTs11(t){const{p}=this.__closure;return 1-Math.pow(Math.cos(t*Math.PI/2),3)*Math.cos(t*p);}
    pnpm_EasingTs11.__closure = { p: result };
    pnpm_EasingTs11.__workletHash = 5150660709939;
    pnpm_EasingTs11.__initData = outer1_12;
    return pnpm_EasingTs11;
  }
  elastic.__closure = {};
  elastic.__workletHash = 10979580678533;
  elastic.__initData = closure_11;
  return elastic;
})();
let closure_16 = { code: "function bezier_Pnpm_EasingTs15(x1,y1,x2,y2){const{Bezier}=this.__closure;return{factory:function(){'worklet';return Bezier(x1,y1,x2,y2);}};}" };
let closure_17 = { code: "function pnpm_EasingTs16(){const{Bezier,x1,y1,x2,y2}=this.__closure;return Bezier(x1,y1,x2,y2);}" };
const tmp12 = (() => {
  function back() {
    let num = 1.70158;
    if (arguments.length > 0) {
      num = 1.70158;
      if (undefined !== arguments[0]) {
        num = arguments[0];
      }
    }
    /* worklet (recovered source) */ function pnpm_EasingTs13(t){const{s}=this.__closure;return t*t*((s+1)*t-s);}
    const obj = { s: num };
    pnpm_EasingTs13.__closure = obj;
    pnpm_EasingTs13.__workletHash = 16684305377199;
    pnpm_EasingTs13.__initData = outer1_14;
    return pnpm_EasingTs13;
  }
  back.__closure = {};
  back.__workletHash = 16940891371724;
  back.__initData = closure_13;
  return back;
})();
let closure_18 = { code: "function bezierFn_Pnpm_EasingTs17(x1,y1,x2,y2){const{Bezier}=this.__closure;return Bezier(x1,y1,x2,y2);}" };
const tmp13 = (() => {
  function bounce(arg0) {
    if (arg0 < 0.36363636363636365) {
      return 7.5625 * arg0 * arg0;
    } else if (arg0 < 0.7272727272727273) {
      const diff = arg0 - 0.5454545454545454;
      return 7.5625 * diff * diff + 0.75;
    } else if (arg0 < 0.9090909090909091) {
      const diff1 = arg0 - 0.8181818181818182;
      return 7.5625 * diff1 * diff1 + 0.9375;
    } else {
      const diff2 = arg0 - 0.9545454545454546;
      return 7.5625 * diff2 * diff2 + 0.984375;
    }
  }
  bounce.__closure = {};
  bounce.__workletHash = 2135448560481;
  bounce.__initData = closure_15;
  return bounce;
})();
let closure_19 = { code: "function in__Pnpm_EasingTs18(easing){return easing;}" };
const tmp14 = (() => {
  function bezier(x1, y1, x2, y2) {
    let closure_0 = x1;
    let closure_1 = y1;
    let closure_2 = x2;
    let closure_3 = y2;
    let obj = {};
    /* worklet (recovered source) */ function pnpm_EasingTs16(){const{Bezier,x1,y1,x2,y2}=this.__closure;return Bezier(x1,y1,x2,y2);}
    obj = { Bezier: outer1_0(outer1_1[1]).Bezier, x1, y1, x2, y2 };
    pnpm_EasingTs16.__closure = obj;
    pnpm_EasingTs16.__workletHash = 4393056133737;
    pnpm_EasingTs16.__initData = outer1_17;
    obj.factory = pnpm_EasingTs16;
    return obj;
  }
  bezier.__closure = { Bezier: require(1635) /* calcBezier */.Bezier };
  bezier.__workletHash = 9084654739329;
  bezier.__initData = closure_16;
  return bezier;
})();
let closure_20 = { code: "function out_Pnpm_EasingTs19(easing){return function(t){'worklet';return 1-easing(1-t);};}" };
let closure_21 = { code: "function pnpm_EasingTs20(t){const{easing}=this.__closure;return 1-easing(1-t);}" };
const tmp15 = (() => {
  function bezierFn(closure_0, closure_1, closure_2, closure_3) {
    return outer1_0(outer1_1[1]).Bezier(closure_0, closure_1, closure_2, closure_3);
  }
  bezierFn.__closure = { Bezier: require(1635) /* calcBezier */.Bezier };
  bezierFn.__workletHash = 13829274299696;
  bezierFn.__initData = closure_18;
  return bezierFn;
})();
let closure_22 = { code: "function inOut_Pnpm_EasingTs21(easing){return function(t){'worklet';if(t<0.5){return easing(t*2)/2;}return 1-easing((1-t)*2)/2;};}" };
let closure_23 = { code: "function pnpm_EasingTs22(t){const{easing}=this.__closure;if(t<0.5){return easing(t*2)/2;}return 1-easing((1-t)*2)/2;}" };
const tmp16 = (() => {
  function in_(arg0) {
    return arg0;
  }
  in_.__closure = {};
  in_.__workletHash = 694257484177;
  in_.__initData = closure_19;
  return in_;
})();
let closure_24 = { code: "function steps_Pnpm_EasingTs23(n=10,roundToNextStep=true){return function(t){'worklet';const value=Math.min(Math.max(t,0),1)*n;if(roundToNextStep){return Math.ceil(value)/n;}return Math.floor(value)/n;};}" };
let closure_25 = { code: "function pnpm_EasingTs24(t){const{n,roundToNextStep}=this.__closure;const value=Math.min(Math.max(t,0),1)*n;if(roundToNextStep){return Math.ceil(value)/n;}return Math.floor(value)/n;}" };
const tmp17 = (() => {
  function out(easing) {
    let closure_0 = easing;
    /* worklet (recovered source) */ function pnpm_EasingTs20(t){const{easing}=this.__closure;return 1-easing(1-t);}
    pnpm_EasingTs20.__closure = { easing };
    pnpm_EasingTs20.__workletHash = 13160996716928;
    pnpm_EasingTs20.__initData = outer1_21;
    return pnpm_EasingTs20;
  }
  out.__closure = {};
  out.__workletHash = 12515331118228;
  out.__initData = closure_20;
  return out;
})();
let obj = {
  linear: tmp3,
  ease: tmp4,
  quad: tmp5,
  cubic: tmp6,
  poly: tmp7,
  sin: tmp8,
  circle: tmp9,
  exp: tmp10,
  elastic: tmp11,
  back: tmp12,
  bounce: tmp13,
  bezier: tmp14,
  bezierFn: tmp15,
  steps: (() => {
    function steps(arg0) {
      let num = 10;
      if (arguments.length > 0) {
        num = 10;
        if (undefined !== arguments[0]) {
          num = arguments[0];
        }
      }
      const tmp = arguments.length > 1 && undefined !== arguments[1];
      let tmp2 = !tmp;
      if (tmp) {
        tmp2 = arguments[1];
      }
      let closure_1 = tmp2;
      /* worklet (recovered source) */ function pnpm_EasingTs24(t){const{n,roundToNextStep}=this.__closure;const value=Math.min(Math.max(t,0),1)*n;if(roundToNextStep){return Math.ceil(value)/n;}return Math.floor(value)/n;}
      const obj = { n: num, roundToNextStep: tmp2 };
      pnpm_EasingTs24.__closure = obj;
      pnpm_EasingTs24.__workletHash = 7402810856406;
      pnpm_EasingTs24.__initData = outer1_25;
      return pnpm_EasingTs24;
    }
    steps.__closure = {};
    steps.__workletHash = 14069361825623;
    steps.__initData = closure_24;
    return steps;
  })(),
  in: tmp16,
  out: tmp17,
  inOut: (() => {
    function inOut(easing) {
      let closure_0 = easing;
      /* worklet (recovered source) */ function pnpm_EasingTs22(t){const{easing}=this.__closure;if(t<0.5){return easing(t*2)/2;}return 1-easing((1-t)*2)/2;}
      pnpm_EasingTs22.__closure = { easing };
      pnpm_EasingTs22.__workletHash = 10095021666171;
      pnpm_EasingTs22.__initData = outer1_23;
      return pnpm_EasingTs22;
    }
    inOut.__closure = {};
    inOut.__workletHash = 7477395191617;
    inOut.__initData = closure_22;
    return inOut;
  })()
};
const SymbolResult = Symbol("easingName");
const entries = Object.entries(obj);
const tmp18 = (() => {
  function inOut(easing) {
    let closure_0 = easing;
    /* worklet (recovered source) */ function pnpm_EasingTs22(t){const{easing}=this.__closure;if(t<0.5){return easing(t*2)/2;}return 1-easing((1-t)*2)/2;}
    pnpm_EasingTs22.__closure = { easing };
    pnpm_EasingTs22.__workletHash = 10095021666171;
    pnpm_EasingTs22.__initData = outer1_23;
    return pnpm_EasingTs22;
  }
  inOut.__closure = {};
  inOut.__workletHash = 7477395191617;
  inOut.__initData = closure_22;
  return inOut;
})();
while (tmp21 !== undefined) {
  let tmp23 = importDefaultResult;
  let importDefaultResultResult = importDefaultResult(tmp22, 2);
  let _Object = Object;
  let tmp25 = SymbolResult;
  obj = { value: importDefaultResultResult[0], configurable: false, enumerable: false, writable: false };
  let definePropertyResult1 = require("calcBezier");
  continue;
}

export const EasingNameSymbol = SymbolResult;
export const Easing = obj;
