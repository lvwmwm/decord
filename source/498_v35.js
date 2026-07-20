// Module ID: 498
// Function ID: 6431
// Name: v35
// Dependencies: []

// Module 498 (v35)
arg5.default = function v35(name) {
  function generateUUID(arg0, arg1, arg2, arg3) {
    let num = arg3;
    let arr = arg0;
    if ("string" === typeof arg0) {
      const _unescape = unescape;
      const _encodeURIComponent = encodeURIComponent;
      const unescapeResult = unescape(encodeURIComponent(arg0));
      const items = [];
      let num2 = 0;
      arr = items;
      if (0 < unescapeResult.length) {
        do {
          arr = items.push(unescapeResult.charCodeAt(num2));
          num2 = num2 + 1;
          arr = items;
          let length = unescapeResult.length;
        } while (num2 < length);
      }
    }
    let arr4 = arg1;
    if ("string" === typeof arg1) {
      arr4 = arg2(closure_2[0])(arg1);
    }
    length = undefined;
    if (null !== arr4) {
      if (undefined !== arr4) {
        length = arr4.length;
      }
    }
    if (16 !== length) {
      const _TypeError = TypeError;
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    } else {
      const _Uint8Array = Uint8Array;
      const uint8Array = new Uint8Array(16 + arr.length);
      const result = uint8Array.set(arr4);
      const result1 = uint8Array.set(arr, arr4.length);
      const tmp16 = arg2(uint8Array);
      tmp16[6] = 15 & tmp16[6] | arg1;
      tmp16[8] = 63 & tmp16[8] | 128;
      if (arg2) {
        if (!num) {
          num = 0;
        }
        let num5 = 0;
        do {
          arg2[num + num5] = tmp16[num5];
          num5 = num5 + 1;
        } while (num5 < 16);
        return arg2;
      } else {
        return arg1(closure_2[1]).unsafeStringify(tmp16);
      }
    }
  }
  generateUUID.name = name;
  generateUUID.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  generateUUID.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
};
arg5.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
arg5.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
