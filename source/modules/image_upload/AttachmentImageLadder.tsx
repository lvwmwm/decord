// Module ID: 1824
// Function ID: 20008
// Name: _createForOfIteratorHelperLoose
// Dependencies: [2]
// Exports: snapAttachmentDimensions

// Module 1824 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
const items = [128, 192, 256, 320, 384, 512, 640, 768, 1024, 1280, 1536, 2048, 3072, 4096];
let result = require("set").fileFinishedImporting("modules/image_upload/AttachmentImageLadder.tsx");

export const ATTACHMENT_LADDER = items;
export const snapAttachmentDimensions = function snapAttachmentDimensions(arg0) {
  let maxUpscale;
  let sourceHeight;
  let sourceWidth;
  let targetHeight;
  let targetWidth;
  let tmp8;
  ({ targetWidth, targetHeight, sourceWidth, sourceHeight, maxUpscale } = arg0);
  const bound = Math.max(targetWidth, targetHeight);
  if (bound <= 0) {
    let obj = { width: targetWidth, height: targetHeight };
    return obj;
  } else {
    let found = bound.find((arg0) => bound <= arg0);
    if (null == found) {
      found = bound[bound.length - 1];
    }
    let tmp4 = found;
    if (null != maxUpscale) {
      tmp4 = found;
      if (maxUpscale > 1) {
        const tmp7 = _createForOfIteratorHelperLoose(bound);
        const iter = tmp7();
        let iter2 = iter;
        let tmp9;
        if (!iter.done) {
          const value = iter2.value;
          tmp9 = tmp8;
          while (value <= bound) {
            let iter3 = tmp7();
            tmp8 = value;
            iter2 = iter3;
            tmp9 = value;
            if (iter3.done) {
              break;
            }
          }
        }
        tmp4 = found;
        if (tmp10) {
          tmp4 = tmp9;
        }
        tmp10 = null != tmp9 && bound <= tmp9 * maxUpscale;
      }
    }
    if (null != sourceWidth) {
      if (null != sourceHeight) {
        const _Math = Math;
        if (Math.max(sourceWidth, sourceHeight) <= tmp4) {
          obj = { width: sourceWidth, height: sourceHeight };
          return obj;
        }
      }
    }
    const result = tmp4 / bound;
    const _Math2 = Math;
    const _Math3 = Math;
    const bound1 = Math.max(1, Math.round(targetWidth * result));
    const _Math4 = Math;
    const _Math5 = Math;
    const bound2 = Math.max(1, Math.round(targetHeight * result));
    obj = {};
    let bound3 = bound1;
    if (null != sourceWidth) {
      const _Math6 = Math;
      bound3 = Math.min(bound1, sourceWidth);
    }
    obj.width = bound3;
    let bound4 = bound2;
    if (null != sourceHeight) {
      const _Math7 = Math;
      bound4 = Math.min(bound2, sourceHeight);
    }
    obj.height = bound4;
    return obj;
  }
};
