// Module ID: 9988
// Function ID: 9989
// Name: stringToUTF8
// Dependencies: []
// Exports: stringToUTF8, utf8Length, utf8ToString

// Module 9988 (stringToUTF8)
const require = globalThis.__r;

function loadOptionalTextCodec() {
  try {
    const _Function = Function;
    const self = this;
    const self2 = this;
    const _function = new Function("mod", "return require(mod);");
    return _function("react-native-nitro-text-decoder");
  } catch (err) {
    return {};
  }
}
if (typeof TextEncoder !== "undefined") {
  let _TextEncoder = TextEncoder;
} else {
  let num = 0;
  _TextEncoder = loadOptionalTextCodec().TextEncoder;
}
if (typeof TextDecoder !== "undefined") {
  let _TextDecoder = TextDecoder;
} else {
  let num2 = 0;
  _TextDecoder = loadOptionalTextCodec().TextDecoder;
}

export function stringToUTF8(_body) {
  let encodeResult;
  if (_TextEncoder) {
    const self3 = this;
    const self4 = this;
    const encoder = new tmp();
    encodeResult = encoder.encode(_body);
  } else {
    const _console = console;
    console.warn("stringToUTF8: TextEncoder not available. Install react-native-nitro-text-decoder.");
    const _Uint8Array = Uint8Array;
    const self = this;
    const self2 = this;
    encodeResult = new Uint8Array(0);
  }
  return encodeResult;
}
export function utf8Length(substr) {
  let diff;
  let tmp2;
  if (_TextEncoder) {
    const self = this;
    const self2 = this;
    tmp2 = new tmp();
  }
  let encodeInto;
  if (tmp2 != null) {
    encodeInto = tmp2.encodeInto;
  }
  if (typeof encodeInto === "function") {
    const _Uint8Array = Uint8Array;
    const _Math = Math;
    const self3 = this;
    const self4 = this;
    const uint8Array = new Uint8Array(3 * Math.min(substr.length, 65536));
    let num10 = 0;
    let num11 = 0;
    let num12 = 0;
    if (0 < substr.length) {
      do {
        let _Math2 = Math;
        let bound = Math.min(num10 + 65536, substr.length);
        let charCodeAtResult = substr.charCodeAt(bound - 1);
        let tmp16 = bound < substr.length;
        if (tmp16) {
          tmp16 = charCodeAtResult >= 55296;
        }
        if (tmp16) {
          tmp16 = charCodeAtResult <= 56319;
        }
        diff = bound;
        if (tmp16) {
          diff = bound - 1;
        }
        num11 = num11 + tmp2.encodeInto(substr.slice(num10, diff), uint8Array).written;
        num10 = diff;
        num12 = num11;
      } while (diff < substr.length);
    }
    return num12;
  } else {
    let num3 = 0;
    let num = 0;
    let num2 = 0;
    if (0 < substr.length) {
      do {
        let sum;
        let tmp8;
        let charCodeAtResult1 = substr.charCodeAt(num);
        if (charCodeAtResult1 < 128) {
          sum = num2 + 1;
          tmp8 = num;
        } else if (charCodeAtResult1 < 2048) {
          sum = num2 + 2;
          tmp8 = num;
        } else {
          if (charCodeAtResult1 >= 55296) {
            if (charCodeAtResult1 <= 56319) {
              let sum1 = num + 1;
              let charCodeAtResult2 = substr.charCodeAt(sum1);
              if (charCodeAtResult2 >= 56320) {
                if (charCodeAtResult2 <= 57343) {
                  sum = num2 + 4;
                  tmp8 = sum1;
                }
              }
              sum = num2 + 3;
              tmp8 = num;
            }
          }
          sum = num2 + 3;
          tmp8 = num;
        }
        num = tmp8 + 1;
        num2 = sum;
        num3 = sum;
      } while (num < substr.length);
    }
    return num3;
  }
}
export function utf8ToString(uint8Array) {
  let str2;
  if (_TextDecoder) {
    const self = this;
    const self2 = this;
    const decoder = new tmp();
    str2 = decoder.decode(uint8Array);
  } else {
    const _console = console;
    console.warn("utf8ToString: TextDecoder not available. Install react-native-nitro-text-decoder.");
    str2 = "";
  }
  return str2;
}
