// Module ID: 5452
// Function ID: 5453
// Name: HIT_SLOP_LEFT_IDX
// Dependencies: [32]
// Exports: normalizeHitSlop

// Module 5452 (HIT_SLOP_LEFT_IDX)
import _slicedToArray from "_slicedToArray" /* 32 */;

let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let items = [{ code: "(function validateHitSlop_Pnpm_hitSlopTs1(hitSlop){const[left,top,right,bottom,width,height]=hitSlop;if(width!==null&&width<0){throw new Error(\"HitSlop error: 'width' cannot be negative\");}if(height!==null&&height<0){throw new Error(\"HitSlop error: 'height' cannot be negative\");}if(width!==null&&left!==null&&right!==null){throw new Error(\"HitSlop error: cannot have all of 'left', 'right' and 'width' defined\");}if(width!==null&&left===null&&right===null){throw new Error(\"HitSlop error: when 'width' is defined, either 'left' or 'right' has to be defined\");}if(height!==null&&top!==null&&bottom!==null){throw new Error(\"HitSlop error: cannot have all of 'top', 'bottom' and 'height' defined\");}if(height!==null&&top===null&&bottom===null){throw new Error(\"HitSlop error: when 'height' is defined, either 'top' or 'bottom' has to be defined\");}})" }];
[tmp2] = items;
function validateHitSlop(arg0) {
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = arg0;
  _slicedToArray(arg0, 6);
  if (null !== tmp6) {
    if (tmp6 < 0) {
      const _Error6 = Error;
      const self11 = this;
      const self12 = this;
      const error = new Error("HitSlop error: 'width' cannot be negative");
      throw error;
    }
  }
  if (null !== tmp7) {
    if (tmp7 < 0) {
      const _Error5 = Error;
      const self9 = this;
      const self10 = this;
      const error1 = new Error("HitSlop error: 'height' cannot be negative");
      throw error1;
    }
  }
  if (null !== tmp6) {
    if (null !== tmp2) {
      if (null !== tmp4) {
        const _Error4 = Error;
        const self7 = this;
        const self8 = this;
        const error2 = new Error("HitSlop error: cannot have all of 'left', 'right' and 'width' defined");
        throw error2;
      }
    }
  }
  if (null !== tmp6) {
    if (null === tmp2) {
      if (null === tmp4) {
        const _Error3 = Error;
        const self5 = this;
        const self6 = this;
        const error3 = new Error("HitSlop error: when 'width' is defined, either 'left' or 'right' has to be defined");
        throw error3;
      }
    }
  }
  if (null !== tmp7) {
    if (null !== tmp3) {
      if (null !== tmp5) {
        const _Error2 = Error;
        const self3 = this;
        const self4 = this;
        const error4 = new Error("HitSlop error: cannot have all of 'top', 'bottom' and 'height' defined");
        throw error4;
      }
    }
  }
  if (null !== tmp7) {
    if (null === tmp3) {
      if (null === tmp5) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error5 = new Error("HitSlop error: when 'height' is defined, either 'top' or 'bottom' has to be defined");
        throw error5;
      }
    }
  }
}
validateHitSlop.__workletHash = 2207097745734;
validateHitSlop.__initData = tmp2;
const items1 = [{ code: "(function normalizeHitSlop_Pnpm_hitSlopTs2(hitSlop){let[CLEARED_HIT_SLOP,__DEV__,validateHitSlop]=this.__closure;var _ref,_slop$left,_ref2,_slop$top,_ref3,_slop$right,_ref4,_slop$bottom,_slop$width,_slop$height;if(hitSlop===undefined){return undefined;}if(hitSlop===null){return CLEARED_HIT_SLOP;}if(typeof hitSlop==='number'||Array.isArray(hitSlop)){return hitSlop;}const slop=hitSlop;const{horizontal:horizontal,vertical:vertical}=slop;const normalized=[(_ref=(_slop$left=slop.left)!==null&&_slop$left!==void 0?_slop$left:horizontal)!==null&&_ref!==void 0?_ref:null,(_ref2=(_slop$top=slop.top)!==null&&_slop$top!==void 0?_slop$top:vertical)!==null&&_ref2!==void 0?_ref2:null,(_ref3=(_slop$right=slop.right)!==null&&_slop$right!==void 0?_slop$right:horizontal)!==null&&_ref3!==void 0?_ref3:null,(_ref4=(_slop$bottom=slop.bottom)!==null&&_slop$bottom!==void 0?_slop$bottom:vertical)!==null&&_ref4!==void 0?_ref4:null,(_slop$width=slop.width)!==null&&_slop$width!==void 0?_slop$width:null,(_slop$height=slop.height)!==null&&_slop$height!==void 0?_slop$height:null];if(__DEV__){validateHitSlop(normalized);}return normalized;})" }, [null, null, null, null, null, null], false, validateHitSlop];
let c0;
let c1;
let c2;
[tmp3, tmp4, tmp5, tmp6] = items1;
function normalizeHitSlop(maybeUnpackValueResult) {
  let horizontal;
  let left;
  let vertical;
  if (undefined !== maybeUnpackValueResult) {
    if (null === maybeUnpackValueResult) {
      return c0;
    } else {
      if (typeof maybeUnpackValueResult !== "number") {
        const _Array = Array;
        if (!Array.isArray(maybeUnpackValueResult)) {
          ({ horizontal, vertical, left } = maybeUnpackValueResult);
          if (left == null) {
            left = horizontal;
          }
          if (left == null) {
            left = null;
          }
          const items = [left, , , , , ];
          let top = maybeUnpackValueResult.top;
          if (top == null) {
            top = vertical;
          }
          if (top == null) {
            top = null;
          }
          items[1] = top;
          let right = maybeUnpackValueResult.right;
          if (right == null) {
            right = horizontal;
          }
          if (right == null) {
            right = null;
          }
          items[2] = right;
          let bottom = maybeUnpackValueResult.bottom;
          if (bottom == null) {
            bottom = vertical;
          }
          if (bottom == null) {
            bottom = null;
          }
          items[3] = bottom;
          let width = maybeUnpackValueResult.width;
          if (width == null) {
            width = null;
          }
          items[4] = width;
          let height = maybeUnpackValueResult.height;
          if (height == null) {
            height = null;
          }
          items[5] = height;
          const tmp7 = c1;
          if (tmp7) {
            _undefined(items);
          }
          return items;
        }
      }
      return maybeUnpackValueResult;
    }
  }
}
const items2 = [tmp4, tmp5, tmp6];
normalizeHitSlop.__closure = items2;
normalizeHitSlop.__workletHash = 776935566732;
normalizeHitSlop.__initData = tmp3;

export const HIT_SLOP_LEFT_IDX = 0;
export const HIT_SLOP_TOP_IDX = 1;
export const HIT_SLOP_RIGHT_IDX = 2;
export const HIT_SLOP_BOTTOM_IDX = 3;
export const HIT_SLOP_WIDTH_IDX = 4;
export const HIT_SLOP_HEIGHT_IDX = 5;
export { normalizeHitSlop };
