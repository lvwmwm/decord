// Module ID: 8027
// Function ID: 63741
// Name: extractStroke
// Dependencies: []

// Module 8027 (extractStroke)
let closure_2 = {};
let closure_3 = {};
let closure_4 = {};
arg5.default = function extractStroke(arg0, arg1, arr) {
  let stroke;
  let strokeDasharray;
  let strokeDashoffset;
  let strokeLinecap;
  let strokeLinejoin;
  let strokeMiterlimit;
  let strokeOpacity;
  let strokeWidth;
  let vectorEffect;
  ({ stroke, strokeOpacity, strokeLinecap, strokeLinejoin, strokeDasharray, strokeWidth, strokeDashoffset, strokeMiterlimit, vectorEffect } = arg1);
  if (null != stroke) {
    arr.push("stroke");
    arg0.stroke = arr(arg6[0])(stroke);
  }
  if (null != strokeWidth) {
    arr.push("strokeWidth");
    arg0.strokeWidth = strokeWidth;
  }
  if (null != strokeOpacity) {
    arr.push("strokeOpacity");
    arg0.strokeOpacity = arr(arg6[1])(strokeOpacity);
  }
  if (null != strokeDasharray) {
    arr.push("strokeDasharray");
    let tmp9 = null;
    if (strokeDasharray) {
      tmp9 = null;
      if ("none" !== strokeDasharray) {
        tmp9 = arr(arg6[2])(strokeDasharray);
      }
    }
    let combined = tmp9;
    if (tmp9) {
      combined = tmp9;
      if (tmp9.length % 2 === 1) {
        combined = tmp9.concat(tmp9);
      }
    }
    arg0.strokeDasharray = combined;
  }
  if (null != strokeDashoffset) {
    arr.push("strokeDashoffset");
    let tmp14 = null;
    if (strokeDasharray) {
      tmp14 = null;
      if (strokeDashoffset) {
        tmp14 = +strokeDashoffset || 0;
        const tmp15 = +strokeDashoffset || 0;
      }
    }
    arg0.strokeDashoffset = tmp14;
  }
  if (null != strokeLinecap) {
    arr.push("strokeLinecap");
    let num6 = strokeLinecap;
    if (strokeLinecap) {
      num6 = closure_2[strokeLinecap];
    }
    if (!num6) {
      num6 = 0;
    }
    arg0.strokeLinecap = num6;
  }
  if (null != strokeLinejoin) {
    arr.push("strokeLinejoin");
    let num7 = strokeLinejoin;
    if (strokeLinejoin) {
      num7 = closure_3[strokeLinejoin];
    }
    if (!num7) {
      num7 = 0;
    }
    arg0.strokeLinejoin = num7;
  }
  if (null != strokeMiterlimit) {
    arr.push("strokeMiterlimit");
    let num8 = strokeMiterlimit;
    if (strokeMiterlimit) {
      num8 = strokeMiterlimit;
      if ("number" !== typeof strokeMiterlimit) {
        const _parseFloat = parseFloat;
        num8 = parseFloat(strokeMiterlimit);
      }
    }
    if (!num8) {
      num8 = 4;
    }
    arg0.strokeMiterlimit = num8;
  }
  if (null != vectorEffect) {
    let num9 = vectorEffect;
    if (vectorEffect) {
      num9 = closure_4[vectorEffect];
    }
    if (!num9) {
      num9 = 0;
    }
    arg0.vectorEffect = num9;
  }
};
