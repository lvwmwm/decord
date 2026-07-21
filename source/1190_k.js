// Module ID: 1190
// Function ID: 13640
// Name: k
// Dependencies: []

// Module 1190 (k)
self = this;
if ("undefined" !== typeof window) {
  self = window;
}
(self) => {
  class m {
    constructor() {
      return;
    }
    encode(arg0, arg1) {
      tmp = arg1;
      if (undefined === arg1) {
        obj = {};
        flag = false;
        obj.stream = false;
        tmp = obj;
      }
      if (tmp.stream) {
        _Error = Error;
        str = "Failed to encode: the 'stream' option is unsupported.";
        throw Error("Failed to encode: the 'stream' option is unsupported.");
      } else {
        length = self.length;
        _Math = Math;
        num = 1;
        num2 = 32;
        num3 = 7;
        bound = Math.max(32, length + (length >>> 1) + 7);
        _Uint8Array = Uint8Array;
        num4 = 3;
        prototype = Uint8Array.prototype;
        tmp3 = new.target;
        tmp4 = new.target;
        uint8Array = new Uint8Array(bound >>> 3 << 3);
        arr = uint8Array;
        num5 = 0;
        num6 = 63;
        num7 = 128;
        num8 = 18;
        num9 = 240;
        num10 = 12;
        num11 = 6;
        num12 = 4292870144;
        num13 = 15;
        num14 = 224;
        num15 = 4294901760;
        num16 = 31;
        num17 = 192;
        num18 = 4294965248;
        num19 = 4294967168;
        num20 = 8;
        num21 = 2;
        num22 = 4;
        num23 = 56319;
        num24 = 55296;
        num25 = 1023;
        num26 = 10;
        num27 = 65536;
        num28 = 64512;
        num29 = 56320;
        num30 = 0;
        num31 = 0;
        tmp6 = bound;
        num32 = 0;
        arr2 = uint8Array;
        if (0 < length) {
          while (true) {
            tmp8 = +num30;
            sum = tmp8 + 1;
            charCodeAtResult = self.charCodeAt(tmp8);
            tmp11 = sum;
            tmp12 = tmp7;
            tmp13 = charCodeAtResult;
            if (55296 <= charCodeAtResult) {
              tmp11 = sum;
              tmp13 = charCodeAtResult;
              tmp12 = tmp7;
              if (56319 >= charCodeAtResult) {
                sum1 = sum;
                sum2 = charCodeAtResult;
                if (sum < length) {
                  charCodeAtResult1 = self.charCodeAt(sum);
                  sum1 = sum;
                  sum2 = charCodeAtResult;
                  tmp7 = charCodeAtResult1;
                  if (56320 === (64512 & charCodeAtResult1)) {
                    sum1 = sum + 1;
                    sum2 = ((1023 & charCodeAtResult) << 10) + (1023 & charCodeAtResult1) + 65536;
                    tmp7 = charCodeAtResult1;
                  }
                }
                tmp11 = sum1;
                tmp12 = tmp7;
                tmp13 = sum2;
                if (55296 <= sum2) {
                  tmp11 = sum1;
                  tmp13 = sum2;
                  tmp12 = tmp7;
                  num30 = sum1;
                  sum5 = num31;
                  tmp18 = tmp6;
                  tmp19 = arr;
                }
                num31 = sum5;
                tmp6 = tmp18;
                arr = tmp19;
                num32 = sum5;
                arr2 = tmp19;
                if (num30 >= length) {
                  break;
                }
              }
            }
            tmp20 = tmp6;
            tmp21 = arr;
            if (num31 + 4 > arr.length) {
              tmp22 = (tmp6 + 8) * (1 + tmp11 / self.length * 2) >>> 3 << 3;
              _Uint8Array2 = Uint8Array;
              prototype2 = Uint8Array.prototype;
              tmp23 = new.target;
              tmp24 = new.target;
              tmp25 = tmp22;
              uint8Array1 = new Uint8Array(tmp22);
              tmp26 = uint8Array1;
              result = uint8Array1.set(arr);
              tmp20 = tmp22;
              tmp21 = uint8Array1;
              tmp12 = uint8Array1;
            }
            if (4294967168 & tmp13) {
              if (4294965248 & tmp13) {
                if (4294901760 & tmp13) {
                  num30 = tmp11;
                  sum5 = num31;
                  tmp18 = tmp20;
                  tmp19 = tmp21;
                  tmp7 = tmp12;
                  if (!(4292870144 & tmp13)) {
                    tmp33 = +num31;
                    tmp21[tmp33] = tmp13 >>> 18 & 7 | 240;
                    tmp34 = +tmp33 + 1;
                    tmp21[tmp34] = tmp13 >>> 12 & 63 | 128;
                    tmp35 = +tmp34 + 1;
                    sum3 = tmp35 + 1;
                    tmp21[tmp35] = tmp13 >>> 6 & 63 | 128;
                  }
                } else {
                  tmp31 = +num31;
                  tmp21[tmp31] = tmp13 >>> 12 & 15 | 224;
                  tmp32 = +tmp31 + 1;
                  sum3 = tmp32 + 1;
                  tmp21[tmp32] = tmp13 >>> 6 & 63 | 128;
                }
              } else {
                tmp29 = +num31;
                sum3 = tmp29 + 1;
                tmp21[tmp29] = tmp13 >>> 6 & 31 | 192;
              }
              tmp36 = +sum3;
              sum4 = tmp36 + 1;
              tmp13 = 63 & tmp13 | 128;
              tmp21[tmp36] = tmp13;
              tmp38 = tmp11;
              tmp39 = tmp20;
              tmp40 = tmp21;
              tmp41 = tmp12;
            } else {
              tmp28 = +num31;
              sum5 = tmp28 + 1;
              tmp21[tmp28] = tmp13;
              num30 = tmp11;
              tmp18 = tmp20;
              tmp19 = tmp21;
              tmp7 = tmp12;
            }
          }
        }
        if (arr2.slice) {
          substr = arr2.slice(0, num32);
        } else {
          substr = arr2.subarray(0, num32);
        }
        return substr;
      }
    }
  }
  const fn = function k(arg0, arg1) {
    let tmp = arg1;
    let str = "utf-8";
    if (undefined !== arg0) {
      str = arg0;
    }
    if (undefined === tmp) {
      const obj = { fatal: false };
      tmp = obj;
    }
    if (-1 === closure_0.indexOf(str.toLowerCase())) {
      const _RangeError = RangeError;
      const rangeError = new RangeError("Failed to construct 'TextDecoder': The encoding label provided ('" + str + "') is invalid.");
      throw rangeError;
    } else if (tmp.fatal) {
      const _Error = Error;
      throw Error("Failed to construct 'TextDecoder': the 'fatal' option is unsupported.");
    }
  };
  const fn2 = function q(arg0) {
    let arr = arg0;
    const bound = Math.min(65536, arg0.length + 1);
    const uint16Array = new Uint16Array(bound);
    const items = [];
    let num = 0;
    let num2 = 0;
    while (true) {
      let tmp2 = num < arr.length;
      if (!tmp2) {
        let _String = String;
        arr = items.push(fromCharCode.apply(null, uint16Array.subarray(0, num2)));
        if (!tmp2) {
          break;
        } else {
          let subarrayResult = arr.subarray(num);
          let num3 = 0;
          let num4 = 0;
        }
      } else {
        subarrayResult = arr;
        num3 = num;
        num4 = num2;
      }
      let tmp5 = +num3;
      let sum = tmp5 + 1;
      let tmp7 = subarrayResult[tmp5];
      if (128 & tmp7) {
        if (192 === (224 & tmp7)) {
          let tmp17 = +sum;
          num = tmp17 + 1;
          let tmp18 = +num4;
          num2 = tmp18 + 1;
          uint16Array[tmp18] = (31 & tmp7) << 6 | 63 & subarrayResult[tmp17];
          arr = subarrayResult;
          // continue
        } else {
          if (224 === (240 & tmp7)) {
            let tmp14 = +sum;
            let tmp15 = +tmp14 + 1;
            num = tmp15 + 1;
            let tmp16 = +num4;
            num2 = tmp16 + 1;
            uint16Array[tmp16] = (31 & tmp7) << 12 | (63 & subarrayResult[tmp14]) << 6 | 63 & subarrayResult[tmp15];
            arr = subarrayResult;
            // continue
          } else {
            arr = subarrayResult;
            num = sum;
            num2 = num4;
            if (240 !== (248 & tmp7)) {
              continue;
            } else {
              let tmp19 = +sum;
              let tmp20 = +tmp19 + 1;
              let tmp21 = +tmp20 + 1;
              num = tmp21 + 1;
              let tmp22 = (7 & tmp7) << 18 | (63 & subarrayResult[tmp19]) << 12 | (63 & subarrayResult[tmp20]) << 6 | 63 & subarrayResult[tmp21];
              let sum1 = num4;
              let tmp12 = tmp22;
              if (65535 < tmp22) {
                let diff = tmp22 - 65536;
                let tmp10 = +num4;
                sum1 = tmp10 + 1;
                uint16Array[tmp10] = diff >>> 10 & 1023 | 55296;
                tmp12 = 56320 | 1023 & diff;
              }
              let tmp13 = +sum1;
              num2 = tmp13 + 1;
              uint16Array[tmp13] = tmp12;
              arr = subarrayResult;
              // continue
            }
            continue;
          }
          continue;
        }
        continue;
      } else {
        let tmp8 = +num4;
        num2 = tmp8 + 1;
        uint16Array[tmp8] = tmp7;
        arr = subarrayResult;
        num = sum;
        // continue
      }
      continue;
    }
    return items.join("");
  };
  if (self.TextEncoder) {
    if (self.TextDecoder) {
      class m {
        constructor() {
          return;
        }
        encode(arg0, arg1) {
          tmp = arg1;
          if (undefined === arg1) {
            obj = {};
            flag = false;
            obj.stream = false;
            tmp = obj;
          }
          if (tmp.stream) {
            _Error = Error;
            str = "Failed to encode: the 'stream' option is unsupported.";
            throw Error("Failed to encode: the 'stream' option is unsupported.");
          } else {
            length = self.length;
            _Math = Math;
            num = 1;
            num2 = 32;
            num3 = 7;
            bound = Math.max(32, length + (length >>> 1) + 7);
            _Uint8Array = Uint8Array;
            num4 = 3;
            prototype = Uint8Array.prototype;
            tmp3 = new.target;
            tmp4 = new.target;
            uint8Array = new Uint8Array(bound >>> 3 << 3);
            arr = uint8Array;
            num5 = 0;
            num6 = 63;
            num7 = 128;
            num8 = 18;
            num9 = 240;
            num10 = 12;
            num11 = 6;
            num12 = 4292870144;
            num13 = 15;
            num14 = 224;
            num15 = 4294901760;
            num16 = 31;
            num17 = 192;
            num18 = 4294965248;
            num19 = 4294967168;
            num20 = 8;
            num21 = 2;
            num22 = 4;
            num23 = 56319;
            num24 = 55296;
            num25 = 1023;
            num26 = 10;
            num27 = 65536;
            num28 = 64512;
            num29 = 56320;
            num30 = 0;
            num31 = 0;
            tmp6 = bound;
            num32 = 0;
            arr2 = uint8Array;
            if (0 < length) {
              while (true) {
                tmp8 = +num30;
                sum = tmp8 + 1;
                charCodeAtResult = self.charCodeAt(tmp8);
                tmp11 = sum;
                tmp12 = tmp7;
                tmp13 = charCodeAtResult;
                if (55296 <= charCodeAtResult) {
                  tmp11 = sum;
                  tmp13 = charCodeAtResult;
                  tmp12 = tmp7;
                  if (56319 >= charCodeAtResult) {
                    sum1 = sum;
                    sum2 = charCodeAtResult;
                    if (sum < length) {
                      charCodeAtResult1 = self.charCodeAt(sum);
                      sum1 = sum;
                      sum2 = charCodeAtResult;
                      tmp7 = charCodeAtResult1;
                      if (56320 === (64512 & charCodeAtResult1)) {
                        sum1 = sum + 1;
                        sum2 = ((1023 & charCodeAtResult) << 10) + (1023 & charCodeAtResult1) + 65536;
                        tmp7 = charCodeAtResult1;
                      }
                    }
                    tmp11 = sum1;
                    tmp12 = tmp7;
                    tmp13 = sum2;
                    if (55296 <= sum2) {
                      tmp11 = sum1;
                      tmp13 = sum2;
                      tmp12 = tmp7;
                      num30 = sum1;
                      sum5 = num31;
                      tmp18 = tmp6;
                      tmp19 = arr;
                    }
                    num31 = sum5;
                    tmp6 = tmp18;
                    arr = tmp19;
                    num32 = sum5;
                    arr2 = tmp19;
                    if (num30 >= length) {
                      break;
                    }
                  }
                }
                tmp20 = tmp6;
                tmp21 = arr;
                if (num31 + 4 > arr.length) {
                  tmp22 = (tmp6 + 8) * (1 + tmp11 / self.length * 2) >>> 3 << 3;
                  _Uint8Array2 = Uint8Array;
                  prototype2 = Uint8Array.prototype;
                  tmp23 = new.target;
                  tmp24 = new.target;
                  tmp25 = tmp22;
                  uint8Array1 = new Uint8Array(tmp22);
                  tmp26 = uint8Array1;
                  result = uint8Array1.set(arr);
                  tmp20 = tmp22;
                  tmp21 = uint8Array1;
                  tmp12 = uint8Array1;
                }
                if (4294967168 & tmp13) {
                  if (4294965248 & tmp13) {
                    if (4294901760 & tmp13) {
                      num30 = tmp11;
                      sum5 = num31;
                      tmp18 = tmp20;
                      tmp19 = tmp21;
                      tmp7 = tmp12;
                      if (!(4292870144 & tmp13)) {
                        tmp33 = +num31;
                        tmp21[tmp33] = tmp13 >>> 18 & 7 | 240;
                        tmp34 = +tmp33 + 1;
                        tmp21[tmp34] = tmp13 >>> 12 & 63 | 128;
                        tmp35 = +tmp34 + 1;
                        sum3 = tmp35 + 1;
                        tmp21[tmp35] = tmp13 >>> 6 & 63 | 128;
                      }
                    } else {
                      tmp31 = +num31;
                      tmp21[tmp31] = tmp13 >>> 12 & 15 | 224;
                      tmp32 = +tmp31 + 1;
                      sum3 = tmp32 + 1;
                      tmp21[tmp32] = tmp13 >>> 6 & 63 | 128;
                    }
                  } else {
                    tmp29 = +num31;
                    sum3 = tmp29 + 1;
                    tmp21[tmp29] = tmp13 >>> 6 & 31 | 192;
                  }
                  tmp36 = +sum3;
                  sum4 = tmp36 + 1;
                  tmp13 = 63 & tmp13 | 128;
                  tmp21[tmp36] = tmp13;
                  tmp38 = tmp11;
                  tmp39 = tmp20;
                  tmp40 = tmp21;
                  tmp41 = tmp12;
                } else {
                  tmp28 = +num31;
                  sum5 = tmp28 + 1;
                  tmp21[tmp28] = tmp13;
                  num30 = tmp11;
                  tmp18 = tmp20;
                  tmp19 = tmp21;
                  tmp7 = tmp12;
                }
              }
            }
            if (arr2.slice) {
              substr = arr2.slice(0, num32);
            } else {
              substr = arr2.subarray(0, num32);
            }
            return substr;
          }
        }
      }
    }
  }
  let closure_0 = [];
  Object.defineProperty(m.prototype, "encoding", { value: "utf-8" });
  Object.defineProperty(fn.prototype, "encoding", { value: "utf-8" });
  Object.defineProperty(fn.prototype, "fatal", { value: false });
  Object.defineProperty(fn.prototype, "ignoreBOM", { value: false });
  let u = fn2;
  if ("function" === typeof Buffer) {
    const _Buffer = Buffer;
    class m {
      constructor() {
        return;
      }
      encode(arg0, arg1) {
        tmp = arg1;
        if (undefined === arg1) {
          obj = {};
          flag = false;
          obj.stream = false;
          tmp = obj;
        }
        if (tmp.stream) {
          _Error = Error;
          str = "Failed to encode: the 'stream' option is unsupported.";
          throw Error("Failed to encode: the 'stream' option is unsupported.");
        } else {
          length = self.length;
          _Math = Math;
          num = 1;
          num2 = 32;
          num3 = 7;
          bound = Math.max(32, length + (length >>> 1) + 7);
          _Uint8Array = Uint8Array;
          num4 = 3;
          prototype = Uint8Array.prototype;
          tmp3 = new.target;
          tmp4 = new.target;
          uint8Array = new Uint8Array(bound >>> 3 << 3);
          arr = uint8Array;
          num5 = 0;
          num6 = 63;
          num7 = 128;
          num8 = 18;
          num9 = 240;
          num10 = 12;
          num11 = 6;
          num12 = 4292870144;
          num13 = 15;
          num14 = 224;
          num15 = 4294901760;
          num16 = 31;
          num17 = 192;
          num18 = 4294965248;
          num19 = 4294967168;
          num20 = 8;
          num21 = 2;
          num22 = 4;
          num23 = 56319;
          num24 = 55296;
          num25 = 1023;
          num26 = 10;
          num27 = 65536;
          num28 = 64512;
          num29 = 56320;
          num30 = 0;
          num31 = 0;
          tmp6 = bound;
          num32 = 0;
          arr2 = uint8Array;
          if (0 < length) {
            while (true) {
              tmp8 = +num30;
              sum = tmp8 + 1;
              charCodeAtResult = self.charCodeAt(tmp8);
              tmp11 = sum;
              tmp12 = tmp7;
              tmp13 = charCodeAtResult;
              if (55296 <= charCodeAtResult) {
                tmp11 = sum;
                tmp13 = charCodeAtResult;
                tmp12 = tmp7;
                if (56319 >= charCodeAtResult) {
                  sum1 = sum;
                  sum2 = charCodeAtResult;
                  if (sum < length) {
                    charCodeAtResult1 = self.charCodeAt(sum);
                    sum1 = sum;
                    sum2 = charCodeAtResult;
                    tmp7 = charCodeAtResult1;
                    if (56320 === (64512 & charCodeAtResult1)) {
                      sum1 = sum + 1;
                      sum2 = ((1023 & charCodeAtResult) << 10) + (1023 & charCodeAtResult1) + 65536;
                      tmp7 = charCodeAtResult1;
                    }
                  }
                  tmp11 = sum1;
                  tmp12 = tmp7;
                  tmp13 = sum2;
                  if (55296 <= sum2) {
                    tmp11 = sum1;
                    tmp13 = sum2;
                    tmp12 = tmp7;
                    num30 = sum1;
                    sum5 = num31;
                    tmp18 = tmp6;
                    tmp19 = arr;
                  }
                  num31 = sum5;
                  tmp6 = tmp18;
                  arr = tmp19;
                  num32 = sum5;
                  arr2 = tmp19;
                  if (num30 >= length) {
                    break;
                  }
                }
              }
              tmp20 = tmp6;
              tmp21 = arr;
              if (num31 + 4 > arr.length) {
                tmp22 = (tmp6 + 8) * (1 + tmp11 / self.length * 2) >>> 3 << 3;
                _Uint8Array2 = Uint8Array;
                prototype2 = Uint8Array.prototype;
                tmp23 = new.target;
                tmp24 = new.target;
                tmp25 = tmp22;
                uint8Array1 = new Uint8Array(tmp22);
                tmp26 = uint8Array1;
                result = uint8Array1.set(arr);
                tmp20 = tmp22;
                tmp21 = uint8Array1;
                tmp12 = uint8Array1;
              }
              if (4294967168 & tmp13) {
                if (4294965248 & tmp13) {
                  if (4294901760 & tmp13) {
                    num30 = tmp11;
                    sum5 = num31;
                    tmp18 = tmp20;
                    tmp19 = tmp21;
                    tmp7 = tmp12;
                    if (!(4292870144 & tmp13)) {
                      tmp33 = +num31;
                      tmp21[tmp33] = tmp13 >>> 18 & 7 | 240;
                      tmp34 = +tmp33 + 1;
                      tmp21[tmp34] = tmp13 >>> 12 & 63 | 128;
                      tmp35 = +tmp34 + 1;
                      sum3 = tmp35 + 1;
                      tmp21[tmp35] = tmp13 >>> 6 & 63 | 128;
                    }
                  } else {
                    tmp31 = +num31;
                    tmp21[tmp31] = tmp13 >>> 12 & 15 | 224;
                    tmp32 = +tmp31 + 1;
                    sum3 = tmp32 + 1;
                    tmp21[tmp32] = tmp13 >>> 6 & 63 | 128;
                  }
                } else {
                  tmp29 = +num31;
                  sum3 = tmp29 + 1;
                  tmp21[tmp29] = tmp13 >>> 6 & 31 | 192;
                }
                tmp36 = +sum3;
                sum4 = tmp36 + 1;
                tmp13 = 63 & tmp13 | 128;
                tmp21[tmp36] = tmp13;
                tmp38 = tmp11;
                tmp39 = tmp20;
                tmp40 = tmp21;
                tmp41 = tmp12;
              } else {
                tmp28 = +num31;
                sum5 = tmp28 + 1;
                tmp21[tmp28] = tmp13;
                num30 = tmp11;
                tmp18 = tmp20;
                tmp19 = tmp21;
                tmp7 = tmp12;
              }
            }
          }
          if (arr2.slice) {
            substr = arr2.slice(0, num32);
          } else {
            substr = arr2.subarray(0, num32);
          }
          return substr;
        }
      }
    }
    class fn {
      decode(arg0, arg1) {
        _Uint8Array2 = self;
        tmp2 = arg1;
        if (undefined === arg1) {
          obj = {};
          flag = false;
          obj.stream = false;
          tmp2 = obj;
        }
        if (tmp2.stream) {
          _Error = Error;
          str = "Failed to decode: the 'stream' option is unsupported.";
          throw Error("Failed to decode: the 'stream' option is unsupported.");
        } else {
          _Uint8Array = Uint8Array;
          tmp3 = _Uint8Array2;
          if (_Uint8Array2 instanceof Uint8Array) {
            tmp11 = u;
            return u(_Uint8Array2);
          } else {
            _ArrayBuffer = ArrayBuffer;
            _Uint8Array2 = Uint8Array;
            if (_Uint8Array2.buffer instanceof ArrayBuffer) {
              prototype2 = _Uint8Array2.prototype;
              tmp8 = new.target;
              tmp9 = new.target;
              _Uint8Array2 = new _Uint8Array2(_Uint8Array2.buffer);
              _Uint8Array21 = _Uint8Array2;
            } else {
              prototype = _Uint8Array2.prototype;
              tmp4 = new.target;
              tmp5 = new.target;
              tmp6 = _Uint8Array2;
              _Uint8Array21 = new _Uint8Array2(_Uint8Array2);
            }
            tmp10 = _Uint8Array21;
          }
        }
        return;
      }
    }
    self.TextEncoder = m;
    self.TextDecoder = fn;
  }
  if ("function" === typeof Blob) {
    const _URL = URL;
    class m {
      constructor() {
        return;
      }
      encode(arg0, arg1) {
        tmp = arg1;
        if (undefined === arg1) {
          obj = {};
          flag = false;
          obj.stream = false;
          tmp = obj;
        }
        if (tmp.stream) {
          _Error = Error;
          str = "Failed to encode: the 'stream' option is unsupported.";
          throw Error("Failed to encode: the 'stream' option is unsupported.");
        } else {
          length = self.length;
          _Math = Math;
          num = 1;
          num2 = 32;
          num3 = 7;
          bound = Math.max(32, length + (length >>> 1) + 7);
          _Uint8Array = Uint8Array;
          num4 = 3;
          prototype = Uint8Array.prototype;
          tmp3 = new.target;
          tmp4 = new.target;
          uint8Array = new Uint8Array(bound >>> 3 << 3);
          arr = uint8Array;
          num5 = 0;
          num6 = 63;
          num7 = 128;
          num8 = 18;
          num9 = 240;
          num10 = 12;
          num11 = 6;
          num12 = 4292870144;
          num13 = 15;
          num14 = 224;
          num15 = 4294901760;
          num16 = 31;
          num17 = 192;
          num18 = 4294965248;
          num19 = 4294967168;
          num20 = 8;
          num21 = 2;
          num22 = 4;
          num23 = 56319;
          num24 = 55296;
          num25 = 1023;
          num26 = 10;
          num27 = 65536;
          num28 = 64512;
          num29 = 56320;
          num30 = 0;
          num31 = 0;
          tmp6 = bound;
          num32 = 0;
          arr2 = uint8Array;
          if (0 < length) {
            while (true) {
              tmp8 = +num30;
              sum = tmp8 + 1;
              charCodeAtResult = self.charCodeAt(tmp8);
              tmp11 = sum;
              tmp12 = tmp7;
              tmp13 = charCodeAtResult;
              if (55296 <= charCodeAtResult) {
                tmp11 = sum;
                tmp13 = charCodeAtResult;
                tmp12 = tmp7;
                if (56319 >= charCodeAtResult) {
                  sum1 = sum;
                  sum2 = charCodeAtResult;
                  if (sum < length) {
                    charCodeAtResult1 = self.charCodeAt(sum);
                    sum1 = sum;
                    sum2 = charCodeAtResult;
                    tmp7 = charCodeAtResult1;
                    if (56320 === (64512 & charCodeAtResult1)) {
                      sum1 = sum + 1;
                      sum2 = ((1023 & charCodeAtResult) << 10) + (1023 & charCodeAtResult1) + 65536;
                      tmp7 = charCodeAtResult1;
                    }
                  }
                  tmp11 = sum1;
                  tmp12 = tmp7;
                  tmp13 = sum2;
                  if (55296 <= sum2) {
                    tmp11 = sum1;
                    tmp13 = sum2;
                    tmp12 = tmp7;
                    num30 = sum1;
                    sum5 = num31;
                    tmp18 = tmp6;
                    tmp19 = arr;
                  }
                  num31 = sum5;
                  tmp6 = tmp18;
                  arr = tmp19;
                  num32 = sum5;
                  arr2 = tmp19;
                  if (num30 >= length) {
                    break;
                  }
                }
              }
              tmp20 = tmp6;
              tmp21 = arr;
              if (num31 + 4 > arr.length) {
                tmp22 = (tmp6 + 8) * (1 + tmp11 / self.length * 2) >>> 3 << 3;
                _Uint8Array2 = Uint8Array;
                prototype2 = Uint8Array.prototype;
                tmp23 = new.target;
                tmp24 = new.target;
                tmp25 = tmp22;
                uint8Array1 = new Uint8Array(tmp22);
                tmp26 = uint8Array1;
                result = uint8Array1.set(arr);
                tmp20 = tmp22;
                tmp21 = uint8Array1;
                tmp12 = uint8Array1;
              }
              if (4294967168 & tmp13) {
                if (4294965248 & tmp13) {
                  if (4294901760 & tmp13) {
                    num30 = tmp11;
                    sum5 = num31;
                    tmp18 = tmp20;
                    tmp19 = tmp21;
                    tmp7 = tmp12;
                    if (!(4292870144 & tmp13)) {
                      tmp33 = +num31;
                      tmp21[tmp33] = tmp13 >>> 18 & 7 | 240;
                      tmp34 = +tmp33 + 1;
                      tmp21[tmp34] = tmp13 >>> 12 & 63 | 128;
                      tmp35 = +tmp34 + 1;
                      sum3 = tmp35 + 1;
                      tmp21[tmp35] = tmp13 >>> 6 & 63 | 128;
                    }
                  } else {
                    tmp31 = +num31;
                    tmp21[tmp31] = tmp13 >>> 12 & 15 | 224;
                    tmp32 = +tmp31 + 1;
                    sum3 = tmp32 + 1;
                    tmp21[tmp32] = tmp13 >>> 6 & 63 | 128;
                  }
                } else {
                  tmp29 = +num31;
                  sum3 = tmp29 + 1;
                  tmp21[tmp29] = tmp13 >>> 6 & 31 | 192;
                }
                tmp36 = +sum3;
                sum4 = tmp36 + 1;
                tmp13 = 63 & tmp13 | 128;
                tmp21[tmp36] = tmp13;
                tmp38 = tmp11;
                tmp39 = tmp20;
                tmp40 = tmp21;
                tmp41 = tmp12;
              } else {
                tmp28 = +num31;
                sum5 = tmp28 + 1;
                tmp21[tmp28] = tmp13;
                num30 = tmp11;
                tmp18 = tmp20;
                tmp19 = tmp21;
                tmp7 = tmp12;
              }
            }
          }
          if (arr2.slice) {
            substr = arr2.slice(0, num32);
          } else {
            substr = arr2.subarray(0, num32);
          }
          return substr;
        }
      }
    }
  }
  if ("function" === typeof Blob) {
    const _URL2 = URL;
    class m {
      constructor() {
        return;
      }
      encode(arg0, arg1) {
        tmp = arg1;
        if (undefined === arg1) {
          obj = {};
          flag = false;
          obj.stream = false;
          tmp = obj;
        }
        if (tmp.stream) {
          _Error = Error;
          str = "Failed to encode: the 'stream' option is unsupported.";
          throw Error("Failed to encode: the 'stream' option is unsupported.");
        } else {
          length = self.length;
          _Math = Math;
          num = 1;
          num2 = 32;
          num3 = 7;
          bound = Math.max(32, length + (length >>> 1) + 7);
          _Uint8Array = Uint8Array;
          num4 = 3;
          prototype = Uint8Array.prototype;
          tmp3 = new.target;
          tmp4 = new.target;
          uint8Array = new Uint8Array(bound >>> 3 << 3);
          arr = uint8Array;
          num5 = 0;
          num6 = 63;
          num7 = 128;
          num8 = 18;
          num9 = 240;
          num10 = 12;
          num11 = 6;
          num12 = 4292870144;
          num13 = 15;
          num14 = 224;
          num15 = 4294901760;
          num16 = 31;
          num17 = 192;
          num18 = 4294965248;
          num19 = 4294967168;
          num20 = 8;
          num21 = 2;
          num22 = 4;
          num23 = 56319;
          num24 = 55296;
          num25 = 1023;
          num26 = 10;
          num27 = 65536;
          num28 = 64512;
          num29 = 56320;
          num30 = 0;
          num31 = 0;
          tmp6 = bound;
          num32 = 0;
          arr2 = uint8Array;
          if (0 < length) {
            while (true) {
              tmp8 = +num30;
              sum = tmp8 + 1;
              charCodeAtResult = self.charCodeAt(tmp8);
              tmp11 = sum;
              tmp12 = tmp7;
              tmp13 = charCodeAtResult;
              if (55296 <= charCodeAtResult) {
                tmp11 = sum;
                tmp13 = charCodeAtResult;
                tmp12 = tmp7;
                if (56319 >= charCodeAtResult) {
                  sum1 = sum;
                  sum2 = charCodeAtResult;
                  if (sum < length) {
                    charCodeAtResult1 = self.charCodeAt(sum);
                    sum1 = sum;
                    sum2 = charCodeAtResult;
                    tmp7 = charCodeAtResult1;
                    if (56320 === (64512 & charCodeAtResult1)) {
                      sum1 = sum + 1;
                      sum2 = ((1023 & charCodeAtResult) << 10) + (1023 & charCodeAtResult1) + 65536;
                      tmp7 = charCodeAtResult1;
                    }
                  }
                  tmp11 = sum1;
                  tmp12 = tmp7;
                  tmp13 = sum2;
                  if (55296 <= sum2) {
                    tmp11 = sum1;
                    tmp13 = sum2;
                    tmp12 = tmp7;
                    num30 = sum1;
                    sum5 = num31;
                    tmp18 = tmp6;
                    tmp19 = arr;
                  }
                  num31 = sum5;
                  tmp6 = tmp18;
                  arr = tmp19;
                  num32 = sum5;
                  arr2 = tmp19;
                  if (num30 >= length) {
                    break;
                  }
                }
              }
              tmp20 = tmp6;
              tmp21 = arr;
              if (num31 + 4 > arr.length) {
                tmp22 = (tmp6 + 8) * (1 + tmp11 / self.length * 2) >>> 3 << 3;
                _Uint8Array2 = Uint8Array;
                prototype2 = Uint8Array.prototype;
                tmp23 = new.target;
                tmp24 = new.target;
                tmp25 = tmp22;
                uint8Array1 = new Uint8Array(tmp22);
                tmp26 = uint8Array1;
                result = uint8Array1.set(arr);
                tmp20 = tmp22;
                tmp21 = uint8Array1;
                tmp12 = uint8Array1;
              }
              if (4294967168 & tmp13) {
                if (4294965248 & tmp13) {
                  if (4294901760 & tmp13) {
                    num30 = tmp11;
                    sum5 = num31;
                    tmp18 = tmp20;
                    tmp19 = tmp21;
                    tmp7 = tmp12;
                    if (!(4292870144 & tmp13)) {
                      tmp33 = +num31;
                      tmp21[tmp33] = tmp13 >>> 18 & 7 | 240;
                      tmp34 = +tmp33 + 1;
                      tmp21[tmp34] = tmp13 >>> 12 & 63 | 128;
                      tmp35 = +tmp34 + 1;
                      sum3 = tmp35 + 1;
                      tmp21[tmp35] = tmp13 >>> 6 & 63 | 128;
                    }
                  } else {
                    tmp31 = +num31;
                    tmp21[tmp31] = tmp13 >>> 12 & 15 | 224;
                    tmp32 = +tmp31 + 1;
                    sum3 = tmp32 + 1;
                    tmp21[tmp32] = tmp13 >>> 6 & 63 | 128;
                  }
                } else {
                  tmp29 = +num31;
                  sum3 = tmp29 + 1;
                  tmp21[tmp29] = tmp13 >>> 6 & 31 | 192;
                }
                tmp36 = +sum3;
                sum4 = tmp36 + 1;
                tmp13 = 63 & tmp13 | 128;
                tmp21[tmp36] = tmp13;
                tmp38 = tmp11;
                tmp39 = tmp20;
                tmp40 = tmp21;
                tmp41 = tmp12;
              } else {
                tmp28 = +num31;
                sum5 = tmp28 + 1;
                tmp21[tmp28] = tmp13;
                num30 = tmp11;
                tmp18 = tmp20;
                tmp19 = tmp21;
                tmp7 = tmp12;
              }
            }
          }
          if (arr2.slice) {
            substr = arr2.slice(0, num32);
          } else {
            substr = arr2.subarray(0, num32);
          }
          return substr;
        }
      }
    }
  }
  if ("function" === typeof Blob) {
    u = function u(arg0) {
      const items = [arg0];
      const blob = new Blob(items, { type: "text/plain;charset=UTF-8" });
      const objectURL = URL.createObjectURL(blob);
      const xMLHttpRequest = new XMLHttpRequest();
      xMLHttpRequest.open("GET", objectURL, false);
      xMLHttpRequest.send();
      URL.revokeObjectURL(objectURL);
      return xMLHttpRequest.responseText;
    };
  }
}(self);
