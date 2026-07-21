// Module ID: 1108
// Function ID: 12641
// Name: parseContentLengthHeader
// Dependencies: []

// Module 1108 (parseContentLengthHeader)
arg5.parseContentLengthHeader = function parseContentLengthHeader(replaced) {
  if (replaced) {
    const _parseInt = parseInt;
    const parsed = parseInt(replaced, 10);
    const _isNaN = isNaN;
    let tmp3;
    if (!isNaN(parsed)) {
      tmp3 = parsed;
    }
    return tmp3;
  }
};
arg5.getBodySize = function getBodySize(arg0) {
  let str = arg0;
  if (arg0) {
    if ("string" === typeof str) {
      return arg1(arg6[0]).encodeUTF8(arg0).length;
    } else {
      const _URLSearchParams2 = URLSearchParams;
      if (str instanceof URLSearchParams) {
        return arg1(arg6[0]).encodeUTF8(str.toString()).length;
      } else {
        const _FormData = FormData;
        if (str instanceof FormData) {
          const _URLSearchParams = URLSearchParams;
          const str3 = new URLSearchParams(tmp3);
          str = str3.toString();
          return arg1(arg6[0]).encodeUTF8(str).length;
        } else {
          const _Blob = Blob;
          if (str instanceof Blob) {
            return str.size;
          } else {
            const _ArrayBuffer = ArrayBuffer;
            if (str instanceof ArrayBuffer) {
              return str.byteLength;
            }
          }
        }
      }
    }
  }
};
