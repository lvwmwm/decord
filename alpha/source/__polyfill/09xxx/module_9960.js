// Module ID: 9960
// Function ID: 9961
// Dependencies: [5, 9958]
// Exports: fetchLocalResource

// Module 9960
import NitroFetchHybrid from "NitroFetchHybrid" /* 9958 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

const require = globalThis.__r;
let _TextDecoder1;

function decodeUtf8(uint8Array1) {
  function resolveTextDecoder() {
    if (undefined !== _TextDecoder1) {
      return _TextDecoder1;
    } else {
      try {
        const tmp2 = require("react-native-nitro-text-decoder");
        if (tmp2) {
          if (typeof tmp3.TextDecoder === "function") {
            const self = this;
            const self2 = this;
            const textDecoder = new tmp2.TextDecoder("utf-8", { fatal: true });
            _TextDecoder1 = textDecoder;
            return textDecoder;
          }
        }
        const _globalThis = globalThis;
        const _TextDecoder = TextDecoder;
        _TextDecoder1 = null;
        if (typeof _TextDecoder === "function") {
          const self3 = this;
          const self4 = this;
          _TextDecoder1 = new _TextDecoder("utf-8", { fatal: true });
        }
        return _TextDecoder1;
      } catch (err) {
      }
    }
  }
  const decoder = resolveTextDecoder();
  if (decoder) {
    try {
      return decoder.decode(uint8Array1);
    } catch (err) {
      return null;
    }
  } else {
    const tmp = c4;
    if (!tmp) {
      c4 = true;
      let tmp2 = globalThis;
      const _console = console;
      console.warn("[nitro-fetch] Reading a data: URL as text needs a TextDecoder. Install react-native-nitro-text-decoder or expose a global TextDecoder. The body is still available via response.arrayBuffer()/bytes().");
    }
    return null;
  }
}
function decodeDataUrl(url) {
  let buffer;
  let byteLength;
  let items;
  let length2;
  const index = url.indexOf(",");
  if (index < 0) {
    const _TypeError = TypeError;
    const self5 = this;
    const self6 = this;
    const typeError = new TypeError("Failed to fetch: invalid data: URL");
    throw typeError;
  } else {
    let length;
    let tmp5;
    let tmp6;
    const str4 = url.slice(5, index);
    const str5 = url.slice(index + 1);
    const obj4 = /;base64\s*$/i;
    const isMatch = obj4.test(str4);
    let str2 = str4;
    if (isMatch) {
      str2 = str4.replace(/;base64\s*$/i, "");
    }
    const tmp2 = str2.trim() || "text/plain;charset=US-ASCII";
    if (isMatch) {
      let tmp14;
      const _globalThis = globalThis;
      const _atob = atob;
      if (typeof _atob === "function") {
        const _atobResult = _atob(str5);
        const _Uint8Array = Uint8Array;
        const self3 = this;
        const self4 = this;
        const uint8Array = new Uint8Array(_atobResult.length);
        let num5 = 0;
        tmp14 = uint8Array;
        if (0 < _atobResult.length) {
          do {
            uint8Array[num5] = _atobResult.charCodeAt(num5);
            num5 = num5 + 1;
            tmp14 = uint8Array;
            length2 = _atobResult.length;
          } while (num5 < length2);
        }
      } else {
        const replaced = str5.replace(/[^A-Za-z0-9+/]/g, "");
        const _Uint8Array2 = Uint8Array;
        const _Math = Math;
        const self7 = this;
        const self8 = this;
        const uint8Array1 = new Uint8Array(Math.floor(3 * replaced.length / 4));
        let num = 0;
        let num2 = 0;
        let num4 = 0;
        let num3 = 0;
        tmp14 = uint8Array1;
        if (0 < replaced.length) {
          do {
            let indexOf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf;
            let tmp7 = num4 << 6 | "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(replaced[num]);
            let sum = num2 + 6;
            let sum1 = num3;
            let tmp12 = sum;
            if (8 <= sum) {
              let diff = sum - 8;
              sum1 = num3 + 1;
              uint8Array1[num3] = tmp7 >> diff & 255;
              tmp12 = diff;
            }
            num = num + 1;
            num2 = tmp12;
            num3 = sum1;
            num4 = tmp7;
            tmp14 = uint8Array1;
          } while (num < replaced.length);
        }
      }
      ({ byteLength, buffer } = tmp14);
      const tmp18 = decodeUtf8(tmp14);
      length = byteLength;
      tmp5 = buffer;
      if (null != tmp18) {
        length = byteLength;
        tmp5 = buffer;
        tmp6 = tmp18;
      }
    } else {
      const _decodeURIComponent = decodeURIComponent;
      const decodeURIComponentResult = decodeURIComponent(str5);
      const _TextEncoder = TextEncoder;
      if (typeof TextEncoder !== "undefined") {
        const _TextEncoder2 = TextEncoder;
        const self = this;
        const self2 = this;
        const encoder = new TextEncoder();
        length = encoder.encode(decodeURIComponentResult).length;
      } else {
        length = decodeURIComponentResult.length;
      }
      tmp6 = decodeURIComponentResult;
    }
    const response = { url, status: 200, statusText: "OK", ok: true, redirected: false, headers: items, bodyString: tmp6, bodyBytes: tmp5 };
    const entry = { key: "Content-Type", value: tmp2 };
    items = [entry, ];
    const entry1 = { key: "Content-Length", value: String(length) };
    const _String = String;
    items[1] = entry1;
    return response;
  }
}
let obj = function _fetchLocalResource() {
  obj = _asyncToGenerator(async (arg0) => {
    let url = arg0;
    let c1 = 0;
    return (async function(arg0, value) {
      if (c1 === 2) {
        c1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            return { value, done: true };
          } else {
            url = url.url;
            const tmp13 = url;
            if (url.startsWith("data:")) {
              c1 = 3;
              const obj4 = { value: decodeDataUrl(url), done: true };
              return obj4;
            } else if (url.startsWith("blob:")) {
              const _TypeError = TypeError;
              const self = this;
              const self2 = this;
              const typeError = new TypeError("nitro-fetch cannot read blob: URLs (the React Native blob registry is not reachable from native). Read blobs with the platform fetch/FileReader instead.");
              throw typeError;
            } else {
              obj = NitroFetchHybrid;
              const ensureClientResult = obj.ensureClient();
              const tmp3 = require;
              const tmp4 = dependencyMap;
              if (ensureClientResult) {
                if (typeof ensureClientResult.request === "function") {
                  c1 = 3;
                  const obj5 = { value: ensureClientResult.request(tmp13), done: true };
                  return obj5;
                }
              }
              const tmp3Result = tmp3(tmp4[1]);
              throw tmp3Result.clientUnavailableError();
            }
          }
        } catch (tmp9) {
          c1 = 3;
          throw tmp9;
        }
      }
    })();
  });
  return obj(...arguments);
};
let c4 = false;

export function fetchLocalResource(arg0) {
  return obj(...arguments);
}
