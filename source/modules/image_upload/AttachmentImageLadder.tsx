// Module ID: 1824
// Function ID: 20007
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: snapAttachmentDimensions

// Module 1824 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let items = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      items = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
const items = [true, true, true, true, true, true, true, true, true, true, true, true, true, true];
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/image_upload/AttachmentImageLadder.tsx");

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
  const items = bound;
  if (bound <= 0) {
    let obj = { width: targetWidth, height: targetHeight };
    return obj;
  } else {
    let found = items.find((arg0) => bound <= arg0);
    if (null == found) {
      found = items[closure_0.length - 1];
    }
    let tmp4 = found;
    if (null != maxUpscale) {
      tmp4 = found;
      if (maxUpscale > 1) {
        const tmp7 = _createForOfIteratorHelperLoose(items);
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
        const tmp10 = null != tmp9 && bound <= tmp9 * maxUpscale;
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
