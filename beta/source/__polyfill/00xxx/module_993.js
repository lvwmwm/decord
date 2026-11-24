// Module ID: 993
// Function ID: 994
// Dependencies: [869]
// Exports: getBodySize, parseContentLengthHeader

// Module 993
import encodeUTF8 from "encodeUTF8" /* 869 */;


export function parseContentLengthHeader(responseHeader) {
  if (responseHeader) {
    const _parseInt = parseInt;
    const parsed = parseInt(responseHeader, 10);
    const _isNaN = isNaN;
    let tmp3;
    if (!isNaN(parsed)) {
      tmp3 = parsed;
    }
    return tmp3;
  }
}
export function getBodySize(input) {
  function _serializeFormData(input) {
    const str = new URLSearchParams(input);
    return str.toString();
  }
  const tmp = input;
  if (tmp) {
    try {
      if (typeof input === "string") {
        const obj3 = encodeUTF8;
        return obj3.encodeUTF8(input).length;
      } else {
        const _URLSearchParams = URLSearchParams;
        if (input instanceof URLSearchParams) {
          const obj2 = encodeUTF8;
          return obj2.encodeUTF8(input.toString()).length;
        } else {
          const _FormData = FormData;
          if (input instanceof FormData) {
            const tmp2 = _serializeFormData(input);
            const obj = encodeUTF8;
            return obj.encodeUTF8(tmp2).length;
          } else {
            const _Blob = Blob;
            if (input instanceof Blob) {
              return input.size;
            } else {
              const _ArrayBuffer = ArrayBuffer;
              if (input instanceof ArrayBuffer) {
                return input.byteLength;
              }
            }
          }
        }
      }
    } catch (err) {
    }
  }
}
