// Module ID: 12985
// Function ID: 12986
// Name: FlateErrorCode
// Dependencies: []
// Exports: compress, decompress, decompressSync, gzip, unzip, unzipSync, zip, zipSync, zlib

// Module 12985 (FlateErrorCode)
const require = globalThis.__r;
let _process, _processResult, arr1, arr10, arr11, arr12, arr13, b3, b6, c2, c3, c5, cResult, callResult, callResult1, closure_1_2, closure_3, closure_6, eResult, flag, flag2, g, num24, num27, o2, obj1, ondataResult, ondataResult1, onfileResult, onmemberResult, pResult1, s1, subarrayResult2, tResult, textDecoder, tmp23Result, tmp3Result, tmp50Result, tmp57, tmp62, tmp70, tmp71, tmp8Result, tmpResult, u1, v;

let c10;
let c9;
let num3;
let num4;
let num5;
function p(arg0) {
  let length;
  let tmp = closure_0;
  let num = 0;
  let tmp2 = closure_0;
  if (0 < arg0.length) {
    do {
      tmp = closure_2_38[255 & tmp ^ arg0[num]] ^ tmp >>> 8;
      num = num + 1;
      tmp2 = tmp;
      length = arg0.length;
    } while (num < length);
  }
  closure_0 = tmp2;
}
const p2 = function p(arg0) {
  let tmp12;
  let sum4 = result1;
  let tmp4 = result1;
  let tmp5 = sum3;
  let num = 0;
  if (0 !== (arg0.length | 0)) {
    do {
      let _Math = Math;
      let bound = Math.min(num + 2655, tmp3);
      let sum2 = num;
      let sum1 = sum4;
      let tmp9 = sum3;
      let tmp10 = sum4;
      let tmp11 = sum3;
      tmp12 = num;
      if (num < bound) {
        do {
          let sum = tmp9 + arg0[sum2];
          sum1 = sum1 + sum;
          sum2 = sum2 + 1;
          tmp9 = sum;
          tmp10 = sum1;
          tmp11 = sum;
          tmp12 = sum2;
        } while (sum2 < bound);
      }
      sum3 = (65535 & tmp11) + 15 * (tmp11 >> 16);
      sum4 = (65535 & tmp10) + 15 * (tmp10 >> 16);
      num = tmp12;
      tmp4 = sum4;
      tmp5 = sum3;
    } while (tmp12 !== (arg0.length | 0));
  }
  sum3 = tmp5;
  result1 = tmp4;
};
function d() {
  const result = sum3 % 65521;
  sum3 = result;
  result1 = result1 % 65521;
  return (255 & result) << 24 | (65280 & result) << 8 | (255 & result1) << 8 | result1 >> 8;
}
const ondata = (buffer, arg1) => {
  items = [buffer, arg1];
  const items1 = [buffer.buffer];
  return globalThis.postMessage(items, items1);
};
function StrmOpt(fn, arg1) {
  let tmp = arg1;
  let obj = fn;
  if (typeof fn === "function") {
    obj = {};
    tmp = fn;
  }
  this.ondata = tmp;
  return obj;
}
function deflate(buffer, arg1, arg2) {
  let tmp = arg2;
  let obj = arg1;
  if (!arg2) {
    obj = {};
    tmp = arg1;
  }
  if (typeof tmp !== "function") {
    if (typeof err === "function") {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error(items[7]);
      error.code = 7;
      const _Error2 = Error;
      if (Error.captureStackTrace) {
        const _Error3 = Error;
        Error.captureStackTrace(error, tmp7);
      }
      throw error;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    items = [bDflt];
    if (typeof cbify === "function") {
      let items3;
      closure_0 = tmp;
      const tmp5 = wrkr(items, (arg0) => {
        const tmp = deflateSync(arg0.data[0], arg0.data[1]);
        if (typeof pbf === "function") {
          items = [tmp.buffer];
          return globalThis.postMessage(tmp, items);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }, 0, (arg0, arg1) => {
        closure_1.terminate();
        closure_0(arg0, arg1);
      });
      let closure_1 = tmp5;
      const items1 = [buffer, obj];
      let postMessage = tmp5.postMessage;
      if (obj.consume) {
        const items2 = [buffer.buffer];
        items3 = items2;
      } else {
        items3 = [];
      }
      postMessage(items1, items3);
      return () => {
        closure_1.terminate();
      };
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
function deflateSync(arr7, arg1) {
  let obj = arg1;
  const tmp = dopt;
  if (!arg1) {
    obj = {};
  }
  if (typeof tmp === "function") {
    let rounded;
    const obj2 = { l: 1 };
    let arr = arr7;
    if (obj.dictionary) {
      const dictionary = obj.dictionary;
      const subarrayResult = dictionary.subarray(-32768);
      const self = this;
      const self2 = this;
      const obj3 = new Uint8Array(subarrayResult.length + arr7.length);
      const result = obj3.set(subarrayResult);
      const result1 = obj3.set(arr7, subarrayResult.length);
      obj2.w = subarrayResult.length;
      arr = obj3;
    }
    let num2 = 6;
    const tmp7 = dflt;
    if (null != obj.level) {
      num2 = obj.level;
    }
    if (null == obj.mem) {
      const _Math = Math;
      const _Math2 = Math;
      const _Math3 = Math;
      const _Math4 = Math;
      rounded = Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(arr.length))));
    } else {
      rounded = 12 + obj.mem;
    }
    return tmp7(arr, num2, rounded, 0, 0, obj2);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function inflate(buffer, arg1, arg2) {
  let tmp = arg2;
  let obj = arg1;
  if (!arg2) {
    obj = {};
    tmp = arg1;
  }
  if (typeof tmp !== "function") {
    if (typeof err === "function") {
      const _Error = Error;
      let self = this;
      let self2 = this;
      const error = new Error(items[7]);
      error.code = 7;
      const _Error2 = Error;
      if (Error.captureStackTrace) {
        const _Error3 = Error;
        Error.captureStackTrace(error, tmp7);
      }
      throw error;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    items = [bInflt];
    if (typeof cbify === "function") {
      let items3;
      closure_0 = tmp;
      const tmp3 = wrkr;
      let tmp4 = items;
      const tmp5 = wrkr(items, function(arg0) {
        const first = arg0.data[0];
        if (typeof gopt === "function") {
          let tmp4 = tmp3;
          if (tmp4) {
            size = tmp3.size;
            if (size) {
              const self = this;
              const self2 = this;
              size = new _Uint8Array(tmp3.size);
            }
            tmp4 = { out: size, dictionary: arg0.data[1].dictionary };
            const obj = { out: size, dictionary: arg0.data[1].dictionary };
          }
          let out = tmp4;
          const tmp6 = inflt;
          if (tmp4) {
            out = tmp4.out;
          }
          const tmp6Result = tmp6(first, { i: 2 }, out, tmp4 && tmp4.dictionary);
          if (typeof tmp === "function") {
            items = [tmp6Result.buffer];
            return globalThis.postMessage(tmp6Result, items);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }, 1, (arg0, arg1) => {
        closure_1.terminate();
        closure_0(arg0, arg1);
      });
      let closure_1 = tmp5;
      const items1 = [buffer, obj];
      let postMessage = tmp5.postMessage;
      if (obj.consume) {
        const items2 = [buffer.buffer];
        items3 = items2;
      } else {
        items3 = [];
      }
      postMessage(items1, items3);
      return () => {
        closure_1.terminate();
      };
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
function inflateSync(arg0, out) {
  const tmp = inflt;
  if (out) {
    out = out.out;
  }
  const tmp2 = out && out.dictionary;
  return tmp(arg0, { i: 2 }, out, tmp2);
}
function gzipSync(arg0, arg1) {
  const tmp = arg1 || {};
  if (typeof crc === "function") {
    let c0 = -1;
    const obj = {
      p,
      d() {
          return ~closure_0;
        }
    };
    let length = arg0.length;
    obj.p(arg0);
    if (typeof gzhl === "function") {
      let num2 = 0;
      if (tmp.filename) {
        num2 = tmp.filename.length + 1;
      }
      if (typeof tmp4 === "function") {
        let rounded;
        const obj2 = { l: 1 };
        let arr = arg0;
        if (tmp.dictionary) {
          const dictionary = tmp.dictionary;
          const subarrayResult = dictionary.subarray(-32768);
          const self = this;
          const self2 = this;
          const obj3 = new Uint8Array(subarrayResult.length + arg0.length);
          const result = obj3.set(subarrayResult);
          const result1 = obj3.set(arg0, subarrayResult.length);
          obj2.w = subarrayResult.length;
          arr = obj3;
        }
        let num5 = 6;
        const tmp10 = dflt;
        if (null != tmp.level) {
          num5 = tmp.level;
        }
        if (null == tmp.mem) {
          const _Math = Math;
          const _Math2 = Math;
          const _Math3 = Math;
          const _Math4 = Math;
          rounded = Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(arr.length))));
        } else {
          rounded = 12 + tmp.mem;
        }
        const tmp10Result = tmp10(arr, num5, rounded, 10 + num2, 8, obj2);
        gzh(tmp10Result, tmp);
        let diff = length2 - 8;
        let dResult = obj.d();
        const tmp20 = wbytes;
        if (typeof wbytes === "function") {
          while (dResult) {
            tmp10Result[diff] = dResult;
            dResult = dResult >>> 8;
            diff = diff + 1;
          }
          let diff1 = length2 - 4;
          if (typeof tmp20 === "function") {
            while (length) {
              tmp10Result[diff1] = length;
              length = length >>> 8;
              diff1 = diff1 + 1;
            }
            return tmp10Result;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function gunzip(buffer, arg1, arg2) {
  let tmp = arg2;
  let obj = arg1;
  if (!arg2) {
    obj = {};
    tmp = arg1;
  }
  if (typeof tmp !== "function") {
    if (typeof err === "function") {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error(items[7]);
      error.code = 7;
      const _Error2 = Error;
      if (Error.captureStackTrace) {
        const _Error3 = Error;
        Error.captureStackTrace(error, tmp7);
      }
      throw error;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    items = [
      bInflt,
      guze,
      () => {
          items = [gunzipSync];
          return items;
        }
    ];
    if (typeof cbify === "function") {
      let items3;
      closure_0 = tmp;
      const tmp5 = wrkr(items, (arg0) => {
        const tmp = gunzipSync(arg0.data[0], arg0.data[1]);
        if (typeof pbf === "function") {
          items = [tmp.buffer];
          return globalThis.postMessage(tmp, items);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }, 3, (arg0, arg1) => {
        closure_1.terminate();
        closure_0(arg0, arg1);
      });
      let closure_1 = tmp5;
      const items1 = [buffer, obj];
      let postMessage = tmp5.postMessage;
      if (obj.consume) {
        const items2 = [buffer.buffer];
        items3 = items2;
      } else {
        items3 = [];
      }
      postMessage(items1, items3);
      return () => {
        closure_1.terminate();
      };
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
function gunzipSync(subarray, out) {
  const tmp = gzs(subarray);
  if (tmp + 8 > subarray.length) {
    if (typeof err === "function") {
      const _Error = Error;
      const self3 = this;
      const self4 = this;
      const error = new Error("invalid gzip data");
      error.code = 6;
      const _Error2 = Error;
      if (Error.captureStackTrace) {
        const _Error3 = Error;
        Error.captureStackTrace(error, tmp9);
      }
      throw error;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    let tmp32 = out && out.out;
    const subarrayResult = subarray.subarray(tmp, -8);
    const tmp15 = inflt;
    if (!tmp32) {
      if (typeof gzl === "function") {
        const self = this;
        const self2 = this;
        tmp32 = new tmp3((subarray[length - 4] | subarray[length - 3] << 8 | subarray[length - 2] << 16 | subarray[length - 1] << 24) >>> 0);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return tmp15(subarrayResult, { i: 2 }, tmp32, out && out.dictionary);
  }
}
function zlibSync(arg0, arg1) {
  const tmp = arg1 || {};
  if (typeof adler === "function") {
    let c0 = 1;
    let c1 = 0;
    const obj = { p: p2, d };
    obj.p(arg0);
    let num3 = 2;
    const tmp4 = dopt;
    if (tmp.dictionary) {
      num3 = 6;
    }
    if (typeof tmp4 === "function") {
      let rounded;
      const obj2 = { l: 1 };
      let arr = arg0;
      if (tmp.dictionary) {
        const dictionary = tmp.dictionary;
        const subarrayResult = dictionary.subarray(-32768);
        const self = this;
        const self2 = this;
        const obj3 = new Uint8Array(subarrayResult.length + arg0.length);
        const result = obj3.set(subarrayResult);
        const result1 = obj3.set(arg0, subarrayResult.length);
        obj2.w = subarrayResult.length;
        arr = obj3;
      }
      let num5 = 6;
      const tmp9 = dflt;
      if (null != tmp.level) {
        num5 = tmp.level;
      }
      if (null == tmp.mem) {
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        const _Math4 = Math;
        rounded = Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(arr.length))));
      } else {
        rounded = 12 + tmp.mem;
      }
      const tmp9Result = tmp9(arr, num5, rounded, num3, 4, obj2);
      zlh(tmp9Result, tmp);
      let diff = tmp9Result.length - 4;
      let dResult = obj.d();
      if (typeof wbytes === "function") {
        while (dResult) {
          tmp9Result[diff] = dResult;
          dResult = dResult >>> 8;
          diff = diff + 1;
        }
        return tmp9Result;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function unzlib(buffer, arg1, arg2) {
  let tmp7;
  let tmp = arg2;
  let obj = arg1;
  if (!arg2) {
    obj = {};
    tmp = arg1;
  }
  if (typeof tmp !== "function") {
    if (typeof err === "function") {
      const _Error = Error;
      let self = this;
      let self2 = this;
      const error = new Error(items[7]);
      error.code = 7;
      const _Error2 = Error;
      if (Error.captureStackTrace) {
        const _Error3 = Error;
        Error.captureStackTrace(error, tmp7);
      }
      throw error;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    items = [bInflt, , ];
    items[1] = zule;
    items[2] = () => {
      items = [unzlibSync];
      return items;
    };
    if (typeof cbify === "function") {
      let items3;
      closure_0 = tmp;
      const tmp3 = wrkr;
      let tmp4 = items;
      const tmp5 = wrkr(items, function(arg0) {
        const first = arg0.data[0];
        if (typeof gopt === "function") {
          let tmp4 = tmp3;
          if (tmp4) {
            size = tmp3.size;
            if (size) {
              const self = this;
              const self2 = this;
              size = new _Uint8Array(tmp3.size);
            }
            tmp4 = { out: size, dictionary: arg0.data[1].dictionary };
            const obj = { out: size, dictionary: arg0.data[1].dictionary };
          }
          let dictionary = tmp4;
          const subarray = first.subarray;
          const tmp6 = inflt;
          const tmp7 = zls;
          if (tmp4) {
            dictionary = tmp4.dictionary;
          }
          const subarrayResult = subarray(tmp7(first, dictionary), -4);
          const tmp6Result = tmp6(subarrayResult, { i: 2 }, tmp4 && tmp4.out, tmp4 && tmp4.dictionary);
          if (typeof tmp === "function") {
            items = [tmp6Result.buffer];
            return globalThis.postMessage(tmp6Result, items);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }, 5, (arg0, arg1) => {
        closure_1.terminate();
        closure_0(arg0, arg1);
      });
      let closure_1 = tmp5;
      const items1 = [buffer, obj];
      let postMessage = tmp5.postMessage;
      if (obj.consume) {
        const items2 = [buffer.buffer];
        items3 = items2;
      } else {
        items3 = [];
      }
      postMessage(items1, items3);
      return () => {
        closure_1.terminate();
      };
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
function unzlibSync(subarray, dictionary) {
  subarray = subarray.subarray;
  const tmp = inflt;
  const tmp2 = zls;
  if (dictionary) {
    dictionary = dictionary.dictionary;
  }
  const subarrayResult = subarray(tmp2(subarray, dictionary), -4);
  const tmp4 = dictionary && dictionary.out;
  const tmp5 = dictionary && dictionary.dictionary;
  return tmp(subarrayResult, { i: 2 }, tmp4, tmp5);
}
function strToU8(arr2, arg1) {
  let length2;
  const tmp = arg1;
  if (tmp) {
    const self7 = this;
    const self8 = this;
    const tmp30 = new Uint8Array(arr2.length);
    let num22 = 0;
    if (0 < arr2.length) {
      do {
        tmp30[num22] = arr2.charCodeAt(num22);
        num22 = num22 + 1;
        length2 = arr2.length;
      } while (num22 < length2);
    }
    return tmp30;
  } else {
    const encoder = textEncoder;
    if (encoder) {
      return encoder.encode(arr2);
    } else {
      const self = this;
      const self2 = this;
      const tmp3 = new Uint8Array(arr2.length + (arr2.length >> 1));
      let tmp4 = tmp3;
      let num19 = 0;
      let arr = tmp3;
      let num20 = 0;
      let num21 = 0;
      arr2 = tmp3;
      if (0 < arr2.length) {
        while (true) {
          let tmp6 = tmp4;
          let tmp9 = arr;
          if (num19 + 5 > arr.length) {
            let self3 = this;
            let self4 = this;
            let obj = new Uint8Array(num19 + 8 + (length - num20 << 1));
            let result = obj.set(arr);
            tmp6 = obj;
            tmp9 = obj;
          }
          let charCodeAtResult = arr2.charCodeAt(num20);
          if (charCodeAtResult >= 128) {
            let sum1;
            let tmp17;
            if (!arg1) {
              if (charCodeAtResult < 2048) {
                let sum = num19 + 1;
                tmp6[num19] = 192 | charCodeAtResult >> 6;
                sum1 = sum + 1;
                tmp6[sum] = 128 | 63 & charCodeAtResult;
                tmp17 = num20;
              } else {
                if (charCodeAtResult > 55295) {
                  if (charCodeAtResult < 57344) {
                    let sum2 = num20 + 1;
                    let tmp18 = 1047552 & charCodeAtResult;
                    let tmp20 = 65536 + tmp18 | 1023 & arr2.charCodeAt(sum2);
                    let sum3 = num19 + 1;
                    tmp6[num19] = 240 | tmp20 >> 18;
                    let sum4 = sum3 + 1;
                    tmp6[sum3] = 128 | tmp20 >> 12 & 63;
                    let sum5 = sum4 + 1;
                    tmp6[sum4] = 128 | tmp20 >> 6 & 63;
                    sum1 = sum5 + 1;
                    tmp6[sum5] = 128 | 63 & tmp20;
                    tmp17 = sum2;
                  }
                }
                let sum6 = num19 + 1;
                tmp6[num19] = 224 | charCodeAtResult >> 12;
                let sum7 = sum6 + 1;
                tmp6[sum6] = 128 | charCodeAtResult >> 6 & 63;
                sum1 = sum7 + 1;
                tmp6[sum7] = 128 | 63 & charCodeAtResult;
                tmp17 = num20;
              }
            }
            num20 = tmp17 + 1;
            num19 = sum1;
            tmp4 = tmp6;
            arr = tmp9;
            num21 = sum1;
            arr2 = tmp9;
            if (num20 >= length) {
              break;
            }
          }
          sum1 = num19 + 1;
          tmp6[num19] = charCodeAtResult;
          tmp17 = num20;
        }
      }
      if (typeof slc === "function") {
        if (num21 > arr2.length) {
          num21 = arr2.length;
        }
        const self5 = this;
        const self6 = this;
        const obj2 = new Uint8Array(num21);
        const result1 = obj2.set(arr2.subarray(0, num21));
        return obj2;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
}
function strFromU8(subarray, arg1) {
  let length;
  let sum;
  const tmp = arg1;
  if (tmp) {
    let num3 = 0;
    let str = "";
    let str2 = "";
    if (0 < subarray.length) {
      do {
        let _String = String;
        sum = num3 + 16384;
        let apply = fromCharCode.apply;
        str = `${apply(null, subarray.subarray(num3, tmp13))}`;
        str2 = str;
        num3 = sum;
        length = subarray.length;
      } while (sum < length);
    }
    return str2;
  } else if (decoder) {
    return decoder.decode(subarray);
  } else {
    const tmp3 = dutf8(subarray);
    if (tmp3.r.length) {
      if (typeof err === "function") {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error(items[8]);
        error.code = 8;
        const _Error2 = Error;
        if (Error.captureStackTrace) {
          const _Error3 = Error;
          Error.captureStackTrace(error, tmp5);
        }
        throw error;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      return tmp4;
    }
  }
}
let closure_0 = {};
let _Uint8Array = Uint8Array;
const _Int32Array = Int32Array;
const uint8Array = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]);
let uint8Array1 = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]);
let uint8Array2 = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
function freb(uint8Array, arg1) {
  let sum1;
  let tmp8;
  let tmp = arg1;
  const b = new Uint16Array(31);
  let num = 0;
  do {
    let sum = tmp + (1 << uint8Array[num - 1]);
    b[num] = sum;
    num = num + 1;
    tmp = sum;
  } while (num < 31);
  const r = new Int32Array(b[30]);
  let num2 = 1;
  do {
    let sum2 = b[num2];
    sum1 = num2 + 1;
    if (sum2 < b[sum1]) {
      do {
        r[sum2] = sum2 - b[num2] << 5 | num2;
        sum2 = sum2 + 1;
        tmp8 = b[sum1];
      } while (sum2 < tmp8);
    }
    num2 = sum1;
  } while (sum1 < 30);
  return { b, r };
}
const frebResult = freb(uint8Array, 2);
let b = frebResult.b;
let closure_7 = b;
let r = frebResult.r;
let closure_8 = r;
b[28] = 258;
r[258] = 28;
({ b: c9, r: c10 } = freb(uint8Array1, 0));
freb(uint8Array1, 0);
const uint16Array = new Uint16Array(32768);
let num = 0;
do {
  let tmp8 = (43690 & num) >> 1 | (21845 & num) << 1;
  let tmp9 = (52428 & tmp8) >> 2 | (13107 & tmp8) << 2;
  let tmp10 = (61680 & tmp9) >> 4 | (3855 & tmp9) << 4;
  uint16Array[num] = ((65280 & tmp10) >> 8 | (255 & tmp10) << 8) >> 1;
  num = num + 1;
} while (num < 32768);
function hMap(_Uint8Array1, l, arg2) {
  let num;
  let num2;
  let tmp10;
  const tmp = new Uint16Array(l);
  for (let num = 0; num < length; num = num + 1) {
    if (_Uint8Array1[num]) {
      let diff = _Uint8Array1[num] - 1;
      tmp[diff] = tmp[diff] + 1;
    }
  }
  const tmp4 = new Uint16Array(l);
  for (let num2 = 1; num2 < l; num2 = num2 + 1) {
    let diff1 = num2 - 1;
    tmp4[num2] = tmp4[diff1] + tmp[diff1] << 1;
  }
  if (arg2) {
    const self3 = this;
    const self4 = this;
    const tmp63 = new Uint16Array(1 << l);
    let num7 = 0;
    tmp10 = tmp63;
    if (0 < _Uint8Array1.length) {
      do {
        if (_Uint8Array1[num7]) {
          let diff2 = l - _Uint8Array1[num7];
          let diff3 = _Uint8Array1[num7] - 1;
          let tmp22 = +tmp4[diff3];
          tmp4[diff3] = tmp22 + 1;
          let sum = tmp22 << diff2;
          let tmp24 = sum | (1 << diff2) - 1;
          if (sum <= tmp24) {
            do {
              tmp63[uint16Array[sum] >> tmp17] = tmp19;
              sum = sum + 1;
            } while (sum <= tmp24);
          }
        }
        num7 = num7 + 1;
        tmp10 = tmp63;
      } while (num7 < _Uint8Array1.length);
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp64 = new Uint16Array(_Uint8Array1.length);
    let num4 = 0;
    tmp10 = tmp64;
    if (0 < _Uint8Array1.length) {
      do {
        if (_Uint8Array1[num4]) {
          let diff4 = _Uint8Array1[num4] - 1;
          let tmp14 = +tmp4[diff4];
          tmp4[diff4] = tmp14 + 1;
          tmp64[num4] = uint16Array[tmp14] >> 15 - _Uint8Array1[num4];
        }
        num4 = num4 + 1;
        tmp10 = tmp64;
      } while (num4 < _Uint8Array1.length);
    }
  }
  return tmp10;
}
const _Uint8Array1 = new _Uint8Array(288);
let num2 = 0;
do {
  _Uint8Array1[num2] = 8;
  num2 = num2 + 1;
  num3 = 144;
} while (num2 < 144);
do {
  _Uint8Array1[num3] = 9;
  num3 = num3 + 1;
  num4 = 256;
} while (num3 < 256);
do {
  _Uint8Array1[num4] = 7;
  num4 = num4 + 1;
  num5 = 280;
} while (num4 < 280);
do {
  _Uint8Array1[num5] = 8;
  num5 = num5 + 1;
} while (num5 < 288);
const _Uint8Array2 = new _Uint8Array(32);
let num6 = 0;
do {
  _Uint8Array2[num6] = 5;
  num6 = num6 + 1;
} while (num6 < 32);
let closure_15 = hMap(_Uint8Array1, 9, 0);
let closure_16 = hMap(_Uint8Array1, 9, 1);
let closure_17 = hMap(_Uint8Array2, 5, 0);
let closure_18 = hMap(_Uint8Array2, 5, 1);
function max(arg0) {
  let first = arg0[0];
  let num = 1;
  let tmp2 = first;
  if (1 < arg0.length) {
    do {
      let tmp4 = first;
      if (arg0[num] > first) {
        tmp4 = arg0[num];
      }
      num = num + 1;
      first = tmp4;
      tmp2 = tmp4;
    } while (num < arg0.length);
  }
  return tmp2;
}
function bits(arg0, arg1, arg2) {
  return (arg0[arg1 / 8 | 0] | arg0[(arg1 / 8 | 0) + 1] << 8) >> (7 & arg1) & arg2;
}
function bits16(arg0, arg1) {
  return (arg0[arg1 / 8 | 0] | arg0[(arg1 / 8 | 0) + 1] << 8 | arg0[(arg1 / 8 | 0) + 2] << 16) >> (7 & arg1);
}
function shft(arg0) {
  return (arg0 + 7) / 8 | 0;
}
function slc(subarray, arg1, arg2) {
  let num = arg1;
  const tmp = null == arg1 || num < 0;
  if (tmp) {
    num = 0;
  }
  let length = arg2;
  const tmp2 = null == arg2 || length > subarray.length;
  if (tmp2) {
    length = subarray.length;
  }
  const obj = new Uint8Array(length - num);
  const result = obj.set(subarray.subarray(num, length));
  return obj;
}
let items = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"];
function err(code, arg1, arg2) {
  let tmp = arg1;
  const _Error = Error;
  if (!arg1) {
    tmp = items[code];
  }
  const _Error1 = new _Error(tmp);
  _Error1.code = code;
  if (Error.captureStackTrace) {
    const _Error2 = Error;
    Error.captureStackTrace(_Error1, err);
  }
  const tmp6 = arg2;
  if (tmp6) {
    return _Error1;
  } else {
    throw _Error1;
  }
}
function inflt(subarrayResult, f, out, dictionary) {
  let d;
  let l;
  let m;
  let n;
  let tmp103;
  let num = 0;
  if (dictionary) {
    num = dictionary.length;
  }
  let arr = out;
  if (subarrayResult.length) {
    let tmp4 = !arr;
    if (arr) {
      tmp4 = 2 != f.i;
    }
    const i = f.i;
    if (!arr) {
      const self3 = this;
      const self4 = this;
      arr = new Uint8Array(3 * length);
    }
    let tmp6 = f.f || 0;
    let tmp7 = f.p || 0;
    let tmp8 = f.b || 0;
    ({ l, d, m, n } = f);
    const result = 8 * length;
    while (true) {
      let tmp44;
      let sum17;
      let result3;
      let num28;
      let tmp13 = n;
      let tmp14 = m;
      let tmp15 = d;
      let tmp16 = l;
      let tmp19 = tmp6;
      let tmp20 = n;
      let tmp21 = m;
      let tmp22 = d;
      let tmp23 = l;
      let tmp24 = tmp7;
      if (!l) {
        let tmp25 = bits;
        if (typeof bits !== "function") {
          break;
        } else {
          let tmp26 = tmp7 / 8 | 0;
          let sum = tmp7 + 1;
          if (typeof tmp25 === "function") {
            let arr2;
            let length3;
            let tmp28 = (subarrayResult[tmp26] | subarrayResult[tmp26 + 1] << 8) >> (7 & tmp7) & 1;
            let tmp29 = sum / 8 | 0;
            let tmp30 = (subarrayResult[tmp29] | subarrayResult[tmp29 + 1] << 8) >> (7 & sum) & 3;
            let sum1 = tmp7 + 3;
            if (tmp30) {
              let tmp112;
              let tmp113;
              let num38;
              let num36;
              let tmp86;
              if (1 === tmp30) {
                tmp112 = closure_16;
                tmp113 = closure_18;
                num38 = 5;
                num36 = 9;
                tmp86 = sum1;
              } else if (2 === tmp30) {
                if (typeof tmp25 === "function") {
                  let tmp55 = sum1 / 8 | 0;
                  if (typeof tmp25 === "function") {
                    let sum2 = sum1 + 10;
                    let tmp58 = sum2 / 8 | 0;
                    if (typeof tmp25 === "function") {
                      let sum3 = (tmp56 >> (7 & sum1) & 31) + 257;
                      let sum4 = (tmp59 >> (7 & sum2) & 15) + 4;
                      let sum5 = sum1 + 5;
                      let tmp63 = sum5 / 8 | 0;
                      let sum6 = sum3 + ((subarrayResult[tmp63] | subarrayResult[tmp63 + 1] << 8) >> (7 & sum5) & 31) + 1;
                      let sum7 = sum1 + 14;
                      let self11 = this;
                      let self12 = this;
                      let obj3 = new Uint8Array(sum6);
                      let self13 = this;
                      let self14 = this;
                      let arr3 = new Uint8Array(19);
                      let num30 = 0;
                      if (0 < sum4) {
                        while (typeof bits === "function") {
                          let sum8 = sum7 + 3 * num30;
                          let tmp74 = sum8 / 8 | 0;
                          arr3[tmp70] = (subarrayResult[tmp74] | subarrayResult[tmp74 + 1] << 8) >> (7 & sum8) & 7;
                          num30 = num30 + 1;
                          continue;
                        }
                        let str9 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                      if (typeof max === "function") {
                        let first = arr3[0];
                        let num31 = 1;
                        let tmp77 = first;
                        if (1 < arr3.length) {
                          do {
                            let tmp79 = first;
                            if (arr3[num31] > first) {
                              tmp79 = arr3[num31];
                            }
                            num31 = num31 + 1;
                            first = tmp79;
                            tmp77 = tmp79;
                          } while (num31 < arr3.length);
                        }
                        let sum9 = sum7 + 3 * sum4;
                        let diff = (1 << tmp77) - 1;
                        let num32 = 0;
                        let tmp85 = sum9;
                        tmp86 = sum9;
                        if (0 < sum6) {
                          let tmp87 = bits;
                          while (typeof bits === "function") {
                            let sum11;
                            let tmp101;
                            let tmp90 = tmp85 / 8 | 0;
                            let tmp91 = tmp84[(subarrayResult[tmp90] | subarrayResult[tmp90 + 1] << 8) >> (7 & tmp85) & diff];
                            let sum10 = tmp85 + (15 & tmp91);
                            let tmp93 = tmp91 >> 4;
                            if (tmp93 < 16) {
                              sum11 = num32 + 1;
                              obj3[num32] = tmp93;
                              tmp101 = sum10;
                            } else {
                              let num33;
                              let sum12;
                              let num34;
                              if (16 === tmp93) {
                                if (typeof tmp87 === "function") {
                                  let tmp97 = sum10 / 8 | 0;
                                  num33 = 3 + ((subarrayResult[tmp97] | subarrayResult[tmp97 + 1] << 8) >> (7 & sum10) & 3);
                                  sum12 = sum10 + 2;
                                  num34 = obj3[num32 - 1];
                                } else {
                                  let str14 = "Trying to call a non-function";
                                  throw new TypeError("Trying to call a non-function");
                                }
                              } else if (17 === tmp93) {
                                if (typeof tmp87 === "function") {
                                  let tmp96 = sum10 / 8 | 0;
                                  num33 = 3 + ((subarrayResult[tmp96] | subarrayResult[tmp96 + 1] << 8) >> (7 & sum10) & 7);
                                  sum12 = sum10 + 3;
                                  num34 = 0;
                                } else {
                                  let str13 = "Trying to call a non-function";
                                  throw new TypeError("Trying to call a non-function");
                                }
                              } else {
                                num33 = 0;
                                num34 = 0;
                                sum12 = sum10;
                                if (18 === tmp93) {
                                  if (typeof tmp87 === "function") {
                                    let tmp95 = sum10 / 8 | 0;
                                    num33 = 11 + ((subarrayResult[tmp95] | subarrayResult[tmp95 + 1] << 8) >> (7 & sum10) & 127);
                                    sum12 = sum10 + 7;
                                    num34 = 0;
                                  } else {
                                    let str12 = "Trying to call a non-function";
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                }
                              }
                              let diff1 = num33 - 1;
                              let tmp99 = num32;
                              sum11 = num32;
                              tmp101 = sum12;
                              if (num33) {
                                do {
                                  let sum13 = tmp99 + 1;
                                  obj3[tmp99] = num34;
                                  tmp103 = diff1;
                                  diff1 = diff1 - 1;
                                  tmp99 = sum13;
                                  sum11 = sum13;
                                  tmp101 = sum12;
                                } while (tmp103);
                              }
                            }
                            num32 = sum11;
                            tmp85 = tmp101;
                            tmp86 = tmp101;
                            continue;
                          }
                          let str11 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                        subarrayResult = obj3.subarray(0, sum3);
                        let subarrayResult1 = obj3.subarray(sum3);
                        if (typeof max === "function") {
                          let first1 = subarrayResult[0];
                          let num35 = 1;
                          num36 = first1;
                          if (1 < subarrayResult.length) {
                            do {
                              let tmp107 = first1;
                              if (subarrayResult[num35] > first1) {
                                tmp107 = subarrayResult[num35];
                              }
                              num35 = num35 + 1;
                              first1 = tmp107;
                              num36 = tmp107;
                            } while (num35 < subarrayResult.length);
                          }
                          if (typeof tmp104 === "function") {
                            let first2 = subarrayResult1[0];
                            let num37 = 1;
                            num38 = first2;
                            if (1 < subarrayResult1.length) {
                              do {
                                let tmp110 = first2;
                                if (subarrayResult1[num37] > first2) {
                                  tmp110 = subarrayResult1[num37];
                                }
                                num37 = num37 + 1;
                                first2 = tmp110;
                                num38 = tmp110;
                              } while (num37 < subarrayResult1.length);
                            }
                            tmp112 = hMap(subarrayResult, num36, 1);
                            tmp113 = hMap(subarrayResult1, num38, 1);
                          } else {
                            let str16 = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          let str15 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        let str10 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      let str8 = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    let str7 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  let str6 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              } else if (typeof err === "function") {
                let _Error4 = Error;
                let self9 = this;
                let self10 = this;
                let error = new Error(items[1]);
                error.code = 1;
                let _Error5 = Error;
                if (Error.captureStackTrace) {
                  let _Error6 = Error;
                  let captureStackTraceResult = Error.captureStackTrace(error, tmp50);
                }
                throw error;
              } else {
                let str5 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
              tmp20 = num38;
              tmp21 = num36;
              tmp22 = tmp113;
              tmp23 = tmp112;
              tmp24 = tmp86;
              tmp19 = tmp28;
              if (tmp86 > result) {
                arr2 = arr;
                length3 = tmp8;
                if (i) {
                  if (typeof err === "function") {
                    let _Error7 = Error;
                    let self15 = this;
                    let self16 = this;
                    let error1 = new Error(items[0]);
                    error1.code = 0;
                    let _Error8 = Error;
                    if (Error.captureStackTrace) {
                      let _Error9 = Error;
                      let captureStackTraceResult1 = Error.captureStackTrace(error1, tmp114);
                    }
                    throw error1;
                  } else {
                    let str17 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              }
            } else if (typeof shft === "function") {
              let sum14 = ((sum1 + 7) / 8 | 0) + 4;
              let tmp34 = subarrayResult[sum14 - 4] | subarrayResult[sum14 - 3] << 8;
              let sum15 = sum14 + tmp34;
              if (sum15 > length) {
                arr2 = arr;
                length3 = tmp8;
                if (i) {
                  if (typeof err === "function") {
                    let _Error = Error;
                    let self7 = this;
                    let self8 = this;
                    let error2 = new Error(items[0]);
                    error2.code = 0;
                    let _Error2 = Error;
                    if (Error.captureStackTrace) {
                      let _Error3 = Error;
                      let captureStackTraceResult2 = Error.captureStackTrace(error2, tmp45);
                    }
                    throw error2;
                  } else {
                    let str4 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              } else {
                let obj2 = arr;
                if (tmp4) {
                  let sum16 = tmp8 + tmp34;
                  let length2 = arr.length;
                  let tmp37 = arr;
                  if (sum16 > length2) {
                    let _Math = Math;
                    let self5 = this;
                    let self6 = this;
                    let obj = new Uint8Array(Math.max(2 * length2, sum16));
                    let result1 = obj.set(arr);
                    tmp37 = obj;
                  }
                  obj2 = tmp37;
                }
                let result2 = obj2.set(subarrayResult.subarray(sum14, sum15), tmp8);
                sum17 = tmp8 + tmp34;
                f.b = sum17;
                result3 = 8 * sum15;
                f.p = result3;
                f.f = tmp28;
                tmp44 = obj2;
                num28 = tmp28;
                arr = tmp44;
                n = tmp13;
                m = tmp14;
                d = tmp15;
                l = tmp16;
                tmp8 = sum17;
                tmp7 = result3;
                tmp6 = num28;
                arr2 = tmp44;
                length3 = sum17;
              }
            } else {
              let str3 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
            let tmp195 = arr2;
            if (length3 != arr2.length) {
              if (typeof slc === "function") {
                let tmp197 = null == length3 || length3 > arr2.length;
                if (tmp197) {
                  length3 = arr2.length;
                }
                let self29 = this;
                let self30 = this;
                let obj6 = new Uint8Array(length3);
                let result4 = obj6.set(arr2.subarray(0, length3));
                tmp195 = obj6;
              } else {
                let str26 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            }
            return tmp195;
          } else {
            let str2 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
      let arr6 = arr;
      if (tmp4) {
        let sum18 = tmp8 + 131072;
        let length4 = arr.length;
        let tmp120 = arr;
        if (sum18 > length4) {
          let _Math2 = Math;
          let self17 = this;
          let self18 = this;
          let obj4 = new Uint8Array(Math.max(2 * length4, sum18));
          let result5 = obj4.set(arr);
          tmp120 = obj4;
        }
        arr6 = tmp120;
      }
      let tmp126 = tmp24;
      let tmp127 = tmp8;
      let tmp128 = tmp24;
      let tmp129 = bits16;
      while (typeof bits16 === "function") {
        let tmp186;
        let tmp187;
        let tmp188;
        let tmp134 = tmp128 / 8 | 0;
        let tmp135 = tmp23[(subarrayResult[tmp134] | subarrayResult[tmp134 + 1] << 8 | subarrayResult[tmp134 + 2] << 16) >> (7 & tmp128) & tmp124];
        let tmp136 = tmp135 >> 4;
        let sum19 = tmp128 + (15 & tmp135);
        if (sum19 > result) {
          tmp186 = tmp126;
          tmp187 = tmp23;
          tmp188 = sum19;
          if (i) {
            if (typeof err === "function") {
              let _Error22 = Error;
              let self31 = this;
              let self32 = this;
              let error3 = new Error(items[0]);
              error3.code = 0;
              let _Error23 = Error;
              if (Error.captureStackTrace) {
                let _Error24 = Error;
                let captureStackTraceResult3 = Error.captureStackTrace(error3, tmp201);
              }
              throw error3;
            } else {
              let str27 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          }
        } else if (tmp135) {
          let tmp178;
          let sum20;
          let tmp180;
          if (tmp136 < 256) {
            let tmp194 = +tmp127;
            sum20 = tmp194 + 1;
            arr6[tmp194] = tmp136;
            tmp178 = arr6;
            tmp180 = sum19;
            arr6 = tmp178;
            tmp127 = sum20;
            tmp126 = tmp180;
            tmp128 = tmp180;
            continue;
          } else {
            tmp186 = sum19;
            tmp187 = null;
            tmp188 = sum19;
            if (256 !== tmp136) {
              let diff2 = tmp136 - 254;
              let sum21 = sum19;
              if (264 < tmp136) {
                let diff3 = tmp136 - 257;
                let tmp145 = uint8Array[diff3];
                if (typeof bits === "function") {
                  let tmp147 = sum19 / 8 | 0;
                  diff2 = ((subarrayResult[tmp147] | subarrayResult[tmp147 + 1] << 8) >> (7 & sum19) & (1 << tmp145) - 1) + closure_7[diff3];
                  sum21 = sum19 + tmp145;
                } else {
                  let str20 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              }
              if (typeof tmp129 === "function") {
                let tmp151 = sum21 / 8 | 0;
                let tmp152 = tmp22[(subarrayResult[tmp151] | subarrayResult[tmp151 + 1] << 8 | subarrayResult[tmp151 + 2] << 16) >> (7 & sum21) & tmp125];
                let tmp153 = tmp152 >> 4;
                if (tmp152) {
                  let sum22 = sum21 + (15 & tmp152);
                  let tmp161 = React4[tmp153];
                  let sum23 = tmp161;
                  let sum24 = sum22;
                  if (3 < tmp153) {
                    let tmp165 = uint8Array1[tmp153];
                    if (typeof tmp129 === "function") {
                      let tmp166 = sum22 / 8 | 0;
                      sum23 = tmp161 + ((subarrayResult[tmp166] | subarrayResult[tmp166 + 1] << 8 | subarrayResult[tmp166 + 2] << 16) >> (7 & sum22) & (1 << tmp165) - 1);
                      sum24 = sum22 + tmp165;
                    } else {
                      let str23 = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                  }
                  if (sum24 > result) {
                    tmp186 = tmp126;
                    tmp187 = tmp23;
                    tmp188 = sum24;
                    if (i) {
                      if (typeof err === "function") {
                        let _Error19 = Error;
                        let self27 = this;
                        let self28 = this;
                        let error4 = new Error(items[0]);
                        error4.code = 0;
                        let _Error20 = Error;
                        if (Error.captureStackTrace) {
                          let _Error21 = Error;
                          let captureStackTraceResult4 = Error.captureStackTrace(error4, tmp189);
                        }
                        throw error4;
                      } else {
                        let str25 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                  } else {
                    let tmp172 = arr6;
                    if (tmp4) {
                      let sum25 = tmp127 + 131072;
                      let length5 = arr6.length;
                      let tmp168 = arr6;
                      if (sum25 > length5) {
                        let _Math3 = Math;
                        let self23 = this;
                        let self24 = this;
                        let obj5 = new Uint8Array(Math.max(2 * length5, sum25));
                        let result6 = obj5.set(arr6);
                        tmp168 = obj5;
                      }
                      tmp172 = tmp168;
                    }
                    let sum26 = tmp127 + diff2;
                    let sum28 = tmp127;
                    if (tmp127 < sum23) {
                      let diff4 = num - sum23;
                      let _Math4 = Math;
                      let bound = Math.min(sum23, sum26);
                      if (diff4 + tmp127 < 0) {
                        if (typeof err === "function") {
                          let _Error16 = Error;
                          let self25 = this;
                          let self26 = this;
                          let error5 = new Error(items[3]);
                          error5.code = 3;
                          let _Error17 = Error;
                          if (Error.captureStackTrace) {
                            let _Error18 = Error;
                            let captureStackTraceResult5 = Error.captureStackTrace(error5, tmp181);
                          }
                          throw error5;
                        } else {
                          let str24 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        let sum27 = tmp127;
                        sum28 = tmp127;
                        if (tmp127 < bound) {
                          do {
                            tmp172[sum27] = dictionary[diff4 + sum27];
                            sum27 = sum27 + 1;
                            sum28 = sum27;
                          } while (sum27 < bound);
                        }
                      }
                    }
                    tmp178 = tmp172;
                    sum20 = sum26;
                    tmp180 = sum24;
                    if (sum28 < sum26) {
                      do {
                        tmp172[sum28] = tmp172[sum28 - sum23];
                        tmp172[sum28 + 1] = tmp172[sum28 + 1 - sum23];
                        tmp172[sum28 + 2] = tmp172[sum28 + 2 - sum23];
                        tmp172[sum28 + 3] = tmp172[sum28 + 3 - sum23];
                        sum28 = sum28 + 4;
                        tmp178 = tmp172;
                        tmp180 = sum24;
                        sum20 = sum26;
                      } while (sum28 < sum26);
                    }
                  }
                } else if (typeof err === "function") {
                  let _Error13 = Error;
                  let self21 = this;
                  let self22 = this;
                  let error6 = new Error(items[3]);
                  error6.code = 3;
                  let _Error14 = Error;
                  if (Error.captureStackTrace) {
                    let _Error15 = Error;
                    let captureStackTraceResult6 = Error.captureStackTrace(error6, tmp154);
                  }
                  throw error6;
                } else {
                  let str22 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                let str21 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            }
          }
        } else if (typeof err === "function") {
          let _Error10 = Error;
          let self19 = this;
          let self20 = this;
          let error7 = new Error(items[2]);
          error7.code = 2;
          let _Error11 = Error;
          if (Error.captureStackTrace) {
            let _Error12 = Error;
            let captureStackTraceResult7 = Error.captureStackTrace(error7, tmp138);
          }
          throw error7;
        } else {
          let str19 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
        f.l = tmp187;
        f.p = tmp186;
        f.b = tmp127;
        f.f = tmp19;
        tmp44 = arr6;
        tmp13 = tmp20;
        tmp14 = tmp21;
        tmp15 = tmp22;
        tmp16 = tmp187;
        sum17 = tmp127;
        result3 = tmp188;
        num28 = tmp19;
        if (tmp187) {
          f.m = tmp21;
          f.d = tmp22;
          f.n = tmp20;
          tmp44 = arr6;
          tmp13 = tmp20;
          tmp14 = tmp21;
          tmp15 = tmp22;
          tmp16 = tmp187;
          sum17 = tmp127;
          result3 = tmp188;
          num28 = 1;
        }
      }
      let str18 = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
    throw new TypeError("Trying to call a non-function");
  }
  let tmp2 = arr;
  if (!tmp2) {
    const self = this;
    const self2 = this;
    tmp2 = new Uint8Array(0);
  }
  return tmp2;
}
function wbits(arg0, arg1, arg2) {
  arg0[arg1 / 8 | 0] = arg0[arg1 / 8 | 0] | arg2 << (7 & arg1);
  const sum = tmp2 + 1;
  arg0[sum] = arg0[sum] | arg2 << (7 & arg1) >> 8;
}
function wbits16(arg0, arg1, arg2) {
  arg0[arg1 / 8 | 0] = arg0[arg1 / 8 | 0] | arg2 << (7 & arg1);
  const sum = tmp2 + 1;
  arg0[sum] = arg0[sum] | arg2 << (7 & arg1) >> 8;
  const sum1 = tmp2 + 2;
  arg0[sum1] = arg0[sum1] | arg2 << (7 & arg1) >> 16;
}
function hTree(arg0, arg1) {
  let diff1;
  let num;
  let tmp46;
  let tmp53;
  let tmp54;
  items = [];
  for (let num = 0; num < arg0.length; num = num + 1) {
    if (arg0[num]) {
      let obj = { s: num, f: arg0[num] };
      let arr = items.push(obj);
    }
  }
  const substr = items.slice();
  if (items.length) {
    if (1 == items.length) {
      const self5 = this;
      const self6 = this;
      const tmp49 = new Uint8Array(items[0].s + 1);
      tmp49[items[0].s] = 1;
      return { t: tmp49, l: 1 };
    } else {
      const sorted = items.sort((f, f2) => f.f - f2.f);
      items.push({ s: -1, f: 25001 });
      [tmp53, tmp54] = items;
      const obj3 = { s: -1, f: tmp53.f + tmp54.f, l: tmp53, r: tmp54 };
      items[0] = obj3;
      let num3 = 2;
      let num2 = 1;
      let num4 = 0;
      let num5 = 1;
      if (1 !== items.length - 1) {
        while (true) {
          let sum;
          let sum1;
          let tmp9;
          let tmp5 = num2;
          if (items[num4].f < items[num3].f) {
            sum = num4 + 1;
            sum1 = num3;
            tmp9 = num4;
          } else {
            sum1 = num3 + 1;
            sum = num4;
            tmp9 = num3;
          }
          let tmp10 = items[tmp9];
          if (sum !== num2) {
            if (items[sum].f < items[sum1].f) {
              let sum2 = sum + 1;
              let sum3 = sum1;
              let tmp13 = sum;
              let tmp14 = items[tmp13];
              num2 = num2 + 1;
              let obj4 = { s: -1, f: tmp10.f + tmp14.f, l: tmp10, r: tmp14 };
              items[tmp5] = obj4;
              num3 = sum3;
              num4 = sum2;
              num5 = num2;
              if (num2 === length - 1) {
                break;
              }
            }
          }
          sum3 = sum1 + 1;
          sum2 = sum;
          tmp13 = sum1;
        }
      }
      let s = substr[0].s;
      let num6 = 1;
      let tmp15 = s;
      if (1 < items.length) {
        do {
          let s2 = s;
          if (substr[num6].s > s) {
            s2 = substr[num6].s;
          }
          num6 = num6 + 1;
          s = s2;
          tmp15 = s2;
        } while (num6 < items.length);
      }
      const self = this;
      const self2 = this;
      const tmp18 = new Uint16Array(tmp15 + 1);
      closure_0 = tmp18;
      if (typeof ln === "function") {
        let num8;
        if (-1 == items[num5 - 1].s) {
          const l = tmp21.l;
          if (typeof ln === "function") {
            let num9;
            if (-1 == l.s) {
              const _Math = Math;
              max = Math.max;
              const tmp20Result = ln(l.l, tmp18, 2);
              num9 = max(tmp20Result, tmp20(l.r, tmp18, 2));
            } else {
              tmp18[l.s] = 1;
              num9 = 1;
            }
            const r = tmp21.r;
            if (typeof ln === "function") {
              let num10;
              if (-1 == r.s) {
                const _Math2 = Math;
                const max2 = Math.max;
                const tmp20Result2 = ln(r.l, tmp18, 2);
                num10 = max2(tmp20Result2, tmp20(r.r, tmp18, 2));
              } else {
                tmp18[r.s] = 1;
                num10 = 1;
              }
              num8 = tmp24(num9, num10);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          tmp18[items[num5 - 1].s] = 0;
          num8 = 0;
        }
        let tmp28 = num8;
        if (num8 > arg1) {
          const diff = num8 - arg1;
          const tmp56 = 1 << diff;
          const sorted1 = substr.sort((f, f2) => closure_0[f2.s] - closure_0[f.s] || f.f - f2.f);
          let num13 = 0;
          let num14 = 0;
          let num11 = 0;
          let num12 = 0;
          if (0 < items.length) {
            const s3 = substr[num14].s;
            num11 = num13;
            num12 = num14;
            while (tmp18[s3] > arg1) {
              num13 = num13 + (tmp56 - (1 << num8 - tmp18[s3]));
              tmp18[s3] = arg1;
              num14 = num14 + 1;
              num11 = num13;
              num12 = num14;
              if (num14 >= length) {
                break;
              }
            }
          }
          let tmp31 = num11 >> diff;
          let tmp32 = num12;
          let tmp33 = num12;
          let tmp34 = tmp31;
          if (0 < tmp31) {
            do {
              let sum4;
              let s4 = substr[tmp32].s;
              if (tmp18[s4] < arg1) {
                let tmp39 = +tmp18[s4];
                tmp18[s4] = tmp39 + 1;
                diff1 = tmp31 - (1 << arg1 - tmp39 - 1);
                sum4 = tmp32;
              } else {
                sum4 = tmp32 + 1;
                diff1 = tmp31;
              }
              tmp31 = diff1;
              tmp32 = sum4;
              tmp33 = sum4;
              tmp34 = diff1;
            } while (0 < diff1);
          }
          tmp28 = arg1;
          if (0 <= tmp33) {
            tmp28 = arg1;
            if (tmp34) {
              while (true) {
                let s5 = substr[tmp33].s;
                let sum5 = tmp34;
                if (tmp18[s5] == arg1) {
                  tmp18[s5] = tmp18[s5] - 1;
                  sum5 = tmp34 + 1;
                }
                let diff2 = tmp33 - 1;
                tmp28 = arg1;
                if (0 > diff2) {
                  break;
                } else {
                  tmp33 = diff2;
                  tmp28 = arg1;
                  tmp34 = sum5;
                  if (!tmp34) {
                    break;
                  }
                }
              }
            }
          }
        }
        const self3 = this;
        const self4 = this;
        const obj5 = { t: tmp46, l: tmp28 };
        tmp46 = new Uint8Array(tmp19);
        return obj5;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  } else {
    return { t: _Uint8Array3, l: 0 };
  }
}
function ln(s, arg1, arg2) {
  let maxResult;
  if (-1 == s.s) {
    const _Math = Math;
    max = Math.max;
    const tmp4 = ln(s.l, arg1, arg2 + 1);
    maxResult = max(tmp4, ln(s.r, arg1, arg2 + 1));
  } else {
    arg1[s.s] = arg2;
    maxResult = arg2;
  }
  return maxResult;
}
function lc(arg0) {
  let tmp28;
  let tmp = length;
  if (tmp) {
    const diff = length - 1;
    let tmp3 = diff;
    tmp = diff;
    if (!arg0[diff]) {
      tmp = tmp3;
      while (tmp3) {
        let diff1 = tmp3 - 1;
        tmp3 = diff1;
        tmp = diff1;
        if (arg0[diff1]) {
          break;
        }
      }
    }
  }
  const sum = tmp + 1;
  const obj = new Uint16Array(sum);
  let first = arg0[0];
  let num = 0;
  let num2 = 1;
  let num3 = 1;
  let num4 = 0;
  if (1 <= sum) {
    while (true) {
      let tmp26;
      let tmp29;
      let num6;
      let sum2;
      let num5;
      if (arg0[num2] == first) {
        if (num2 != sum) {
          num6 = num3 + 1;
          tmp26 = num;
          tmp29 = first;
          num2 = num2 + 1;
          num = tmp26;
          num3 = num6;
          first = tmp29;
          num4 = tmp26;
          if (num2 > sum) {
            break;
          }
        }
      }
      if (!first) {
        if (2 < num3) {
          let tmp12 = num;
          let diff2 = num3;
          let tmp14 = num;
          let tmp15 = num3;
          if (138 < num3) {
            do {
              let sum1 = tmp12 + 1;
              obj[tmp12] = 32754;
              diff2 = diff2 - 138;
              tmp12 = sum1;
              tmp14 = sum1;
              tmp15 = diff2;
            } while (138 < diff2);
          }
          sum2 = tmp14;
          num5 = tmp15;
          if (2 < tmp15) {
            let tmp18;
            if (10 < tmp15) {
              tmp18 = tmp15 - 11 << 5 | 28690;
            } else {
              tmp18 = tmp15 - 3 << 5 | 12305;
            }
            sum2 = tmp14 + 1;
            obj[tmp14] = tmp18;
            num5 = 0;
          }
        }
        let diff3 = num5 - 1;
        let tmp25 = sum2;
        tmp26 = sum2;
        if (num5) {
          do {
            let sum3 = tmp25 + 1;
            obj[tmp25] = first;
            tmp25 = sum3;
            tmp28 = diff3;
            diff3 = diff3 - 1;
            tmp26 = sum3;
          } while (tmp28);
        }
        tmp29 = arg0[num2];
        num6 = 1;
      }
      sum2 = num;
      num5 = num3;
      if (3 < num3) {
        let sum4 = num + 1;
        obj[num] = first;
        let diff4 = num3 - 1;
        let tmp21 = sum4;
        let tmp22 = diff4;
        if (6 < diff4) {
          do {
            let sum5 = sum4 + 1;
            obj[sum4] = 8304;
            diff4 = diff4 - 6;
            sum4 = sum5;
            tmp21 = sum5;
            tmp22 = diff4;
          } while (6 < diff4);
        }
        sum2 = tmp21;
        num5 = tmp22;
        if (2 < tmp22) {
          sum2 = tmp21 + 1;
          obj[tmp21] = tmp22 - 3 << 5 | 8208;
          num5 = 0;
        }
      }
    }
  }
  const obj2 = { c: obj.subarray(0, num4), n: sum };
  return obj2;
}
function clen(arg0, arg1) {
  let length;
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < arg1.length) {
    do {
      num3 = num3 + arg0[num2] * arg1[num2];
      num2 = num2 + 1;
      num = num3;
      length = arg1.length;
    } while (num2 < length);
  }
  return num;
}
function wfblk(arg0, arg1, arg2) {
  if (typeof shft === "function") {
    let num6;
    arg0[(tmp + 7) / 8 | 0] = 255 & arg2.length;
    const sum = tmp3 + 1;
    arg0[sum] = arg2.length >> 8;
    arg0[((tmp + 7) / 8 | 0) + 2] = 255 ^ arg0[(tmp + 7) / 8 | 0];
    arg0[((tmp + 7) / 8 | 0) + 3] = 255 ^ arg0[sum];
    for (let num6 = 0; num6 < arg2.length; num6 = num6 + 1) {
      arg0[tmp3 + num6 + 4] = arg2[num6];
    }
    return 8 * (((tmp + 7) / 8 | 0) + 4 + arg2.length);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function wblk(subarray, subarrayResult, l, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
  let c;
  let length;
  let length2;
  let length3;
  let length4;
  let length5;
  let length6;
  let length7;
  let n;
  let t;
  if (typeof wbits === "function") {
    subarrayResult[+arg10 / 8 | 0] = subarrayResult[+arg10 / 8 | 0] | l << (7 & +arg10);
    const sum = tmp7 + 1;
    subarrayResult[sum] = subarrayResult[sum] | l << (7 & +arg10) >> 8;
    arg4[256] = arg4[256] + 1;
    ({ t, l } = hTree(arg4, 15));
    hTree(arg4, 15);
    const tmp11 = hTree(arg5, 15);
    const t1 = tmp11.t;
    const l2 = tmp11.l;
    ({ c, n } = lc(t));
    lc(t);
    const tmp14 = lc(t1);
    _Uint8Array = tmp14.c;
    const self = this;
    const self2 = this;
    const n2 = tmp14.n;
    const tmp16 = new Uint16Array(19);
    let num10 = 0;
    if (0 < c.length) {
      do {
        let tmp18 = 31 & c[num10];
        tmp16[tmp18] = tmp16[tmp18] + 1;
        num10 = num10 + 1;
        length = c.length;
      } while (num10 < length);
    }
    let num11 = 0;
    if (0 < _Uint8Array.length) {
      do {
        let tmp19 = 31 & _Uint8Array[num11];
        tmp16[tmp19] = tmp16[tmp19] + 1;
        num11 = num11 + 1;
        length2 = _Uint8Array.length;
      } while (num11 < length2);
    }
    const tmp21 = hTree(tmp16, 7);
    const t2 = tmp21.t;
    let num13 = 19;
    let num14 = 19;
    const l3 = tmp21.l;
    if (!t2[uint8Array2[18]]) {
      const diff = num13 - 1;
      num14 = diff;
      while (4 < diff) {
        num13 = diff;
        num14 = diff;
        if (t2[uint8Array2[diff - 1]]) {
          break;
        }
      }
    }
    let arr4 = _Uint8Array1;
    if (typeof clen === "function") {
      let num16 = 0;
      let num17 = 0;
      let num18 = 0;
      if (0 < arr4.length) {
        do {
          num17 = num17 + arg4[num16] * arr4[num16];
          num16 = num16 + 1;
          num18 = num17;
          length3 = arr4.length;
        } while (num16 < length3);
      }
      let arr5 = _Uint8Array2;
      if (typeof clen === "function") {
        let num19 = 0;
        let num20 = 0;
        let num21 = 0;
        if (0 < arr5.length) {
          do {
            num20 = num20 + arg5[num19] * arr5[num19];
            num19 = num19 + 1;
            num21 = num20;
            length4 = arr5.length;
          } while (num19 < length4);
        }
        const sum1 = num18 + num21 + arg6;
        if (typeof clen === "function") {
          let num22 = 0;
          let num23 = 0;
          if (0 < t.length) {
            do {
              num23 = num23 + arg4[num22] * t[num22];
              num22 = num22 + 1;
              length5 = t.length;
            } while (num22 < length5);
          }
          if (typeof clen === "function") {
            let num25 = 0;
            let num26 = 0;
            if (0 < t1.length) {
              do {
                num26 = num26 + arg5[num25] * t1[num25];
                num25 = num25 + 1;
                length6 = t1.length;
              } while (num25 < length6);
            }
            if (typeof clen === "function") {
              let num28 = 0;
              let num29 = 0;
              let num30 = 0;
              if (0 < t2.length) {
                do {
                  num29 = num29 + tmp16[num28] * t2[num28];
                  num28 = num28 + 1;
                  num30 = num29;
                  length7 = t2.length;
                } while (num28 < length7);
              }
              const sum2 = tmp + 1;
              const result = 3 * num14;
              const sum3 = tmp30 + 14 + result + num30 + 2 * tmp16[16] + 3 * tmp16[17] + 7 * tmp16[18];
              if (arg8 >= 0) {
                if (tmp26 << 3 <= sum1) {
                  if (tmp26 << 3 <= sum3) {
                    subarrayResult = subarray.subarray(arg8, arg8 + arg9);
                    if (typeof wfblk === "function") {
                      if (typeof shft === "function") {
                        let num49;
                        subarrayResult[(sum2 + 2 + 7) / 8 | 0] = 255 & subarrayResult.length;
                        const sum4 = tmp136 + 1;
                        subarrayResult[sum4] = subarrayResult.length >> 8;
                        subarrayResult[((sum2 + 2 + 7) / 8 | 0) + 2] = 255 ^ subarrayResult[(sum2 + 2 + 7) / 8 | 0];
                        subarrayResult[((sum2 + 2 + 7) / 8 | 0) + 3] = 255 ^ subarrayResult[sum4];
                        for (let num49 = 0; num49 < length8; num49 = num49 + 1) {
                          subarrayResult[tmp136 + num49 + 4] = subarrayResult[num49];
                        }
                        return 8 * (((sum2 + 2 + 7) / 8 | 0) + 4 + subarrayResult.length);
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  }
                }
              }
              if (typeof wbits === "function") {
                let tmp44;
                subarrayResult[sum2 / 8 | 0] = subarrayResult[sum2 / 8 | 0] | 1 + (sum3 < sum1) << (7 & sum2);
                const sum5 = tmp39 + 1;
                subarrayResult[sum5] = subarrayResult[sum5] | 1 + (sum3 < sum1) << (7 & sum2) >> 8;
                const sum6 = sum2 + 2;
                if (sum3 < sum1) {
                  const tmp46 = hMap(t, l, 0);
                  const tmp47 = hMap(t1, l2, 0);
                  if (typeof wbits === "function") {
                    subarrayResult[sum6 / 8 | 0] = subarrayResult[sum6 / 8 | 0] | tmp48 << (7 & sum6);
                    const sum7 = tmp50 + 1;
                    subarrayResult[sum7] = subarrayResult[sum7] | tmp48 << (7 & sum6) >> 8;
                    if (typeof wbits === "function") {
                      const sum8 = sum6 + 5;
                      subarrayResult[sum8 / 8 | 0] = subarrayResult[sum8 / 8 | 0] | tmp52 << (7 & sum8);
                      const sum9 = tmp55 + 1;
                      subarrayResult[sum9] = subarrayResult[sum9] | tmp52 << (7 & sum8) >> 8;
                      if (typeof wbits === "function") {
                        const sum10 = sum6 + 10;
                        subarrayResult[sum10 / 8 | 0] = subarrayResult[sum10 / 8 | 0] | num14 - 4 << (7 & sum10);
                        const sum11 = tmp59 + 1;
                        subarrayResult[sum11] = subarrayResult[sum11] | num14 - 4 << (7 & sum10) >> 8;
                        const sum12 = sum6 + 14;
                        let num36 = 0;
                        if (0 < num14) {
                          while (typeof wbits === "function") {
                            let sum13 = sum12 + 3 * num36;
                            let tmp67 = tmp64 << (7 & sum13);
                            let tmp68 = sum13 / 8 | 0;
                            subarrayResult[tmp68] = subarrayResult[tmp68] | tmp67;
                            let sum14 = tmp68 + 1;
                            subarrayResult[sum14] = subarrayResult[sum14] | tmp67 >> 8;
                            num36 = num36 + 1;
                          }
                          throw new TypeError("Trying to call a non-function");
                        }
                        let sum15 = sum12 + result;
                        items = [c, _Uint8Array];
                        let num39 = 0;
                        while (true) {
                          let arr7 = items[num39];
                          let tmp72 = sum15;
                          let num40 = 0;
                          let tmp73 = sum15;
                          if (0 < arr7.length) {
                            let tmp74 = 31 & arr7[num40];
                            while (typeof wbits === "function") {
                              let tmp79 = tmp76 << (7 & tmp72);
                              let tmp80 = tmp72 / 8 | 0;
                              subarrayResult[tmp80] = subarrayResult[tmp80] | tmp79;
                              let sum16 = tmp80 + 1;
                              subarrayResult[sum16] = subarrayResult[sum16] | tmp79 >> 8;
                              let sum17 = tmp72 + t2[tmp74];
                              let sum19 = sum17;
                              if (15 < tmp74) {
                                if (typeof tmp75 === "function") {
                                  let tmp84 = (arr7[num40] >> 5 & 127) << (7 & sum17);
                                  let tmp85 = sum17 / 8 | 0;
                                  subarrayResult[tmp85] = subarrayResult[tmp85] | tmp84;
                                  let sum18 = tmp85 + 1;
                                  subarrayResult[sum18] = subarrayResult[sum18] | tmp84 >> 8;
                                  sum19 = sum17 + (arr7[num40] >> 12);
                                } else {
                                  let str13 = "Trying to call a non-function";
                                  throw new TypeError("Trying to call a non-function");
                                }
                              }
                              num40 = num40 + 1;
                              tmp72 = sum19;
                              tmp73 = sum19;
                              continue;
                            }
                            let str12 = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                          num39 = num39 + 1;
                          sum15 = tmp73;
                          arr5 = t1;
                          arr4 = t;
                          tmp44 = tmp73;
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  tmp44 = sum6;
                }
                let tmp88 = tmp44;
                let num47 = 0;
                let tmp89 = tmp44;
                if (0 < arg7) {
                  while (true) {
                    let sum31;
                    let tmp90 = arg3[num47];
                    if (tmp90 > 255) {
                      let tmp100 = wbits16;
                      let tmp101 = tmp90 >> 18 & 31;
                      let sum20 = tmp101 + 257;
                      if (typeof wbits16 === "function") {
                        let tmp104 = tmp103 << (7 & tmp88);
                        let tmp105 = tmp88 / 8 | 0;
                        subarrayResult[tmp105] = subarrayResult[tmp105] | tmp104;
                        let sum21 = tmp105 + 1;
                        subarrayResult[sum21] = subarrayResult[sum21] | tmp104 >> 8;
                        let sum22 = tmp105 + 2;
                        subarrayResult[sum22] = subarrayResult[sum22] | tmp104 >> 16;
                        let sum23 = tmp88 + arr4[sum20];
                        let sum25 = sum23;
                        if (7 < tmp101) {
                          if (typeof wbits === "function") {
                            let tmp111 = (tmp90 >> 23 & 31) << (7 & sum23);
                            let tmp112 = sum23 / 8 | 0;
                            subarrayResult[tmp112] = subarrayResult[tmp112] | tmp111;
                            let sum24 = tmp112 + 1;
                            subarrayResult[sum24] = subarrayResult[sum24] | tmp111 >> 8;
                            sum25 = sum23 + uint8Array[tmp101];
                          } else {
                            let str16 = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                        }
                        let tmp115 = 31 & tmp90;
                        if (typeof tmp100 === "function") {
                          let tmp117 = tmp116 << (7 & sum25);
                          let tmp118 = sum25 / 8 | 0;
                          subarrayResult[tmp118] = subarrayResult[tmp118] | tmp117;
                          let sum26 = tmp118 + 1;
                          subarrayResult[sum26] = subarrayResult[sum26] | tmp117 >> 8;
                          let sum27 = tmp118 + 2;
                          subarrayResult[sum27] = subarrayResult[sum27] | tmp117 >> 16;
                          let sum28 = sum25 + arr5[tmp115];
                          sum31 = sum28;
                          if (3 < tmp115) {
                            if (typeof tmp100 === "function") {
                              let tmp122 = (tmp90 >> 5 & 8191) << (7 & sum28);
                              let tmp123 = sum28 / 8 | 0;
                              subarrayResult[tmp123] = subarrayResult[tmp123] | tmp122;
                              let sum29 = tmp123 + 1;
                              subarrayResult[sum29] = subarrayResult[sum29] | tmp122 >> 8;
                              let sum30 = tmp123 + 2;
                              subarrayResult[sum30] = subarrayResult[sum30] | tmp122 >> 16;
                              sum31 = sum28 + uint8Array1[tmp115];
                            } else {
                              let str18 = "Trying to call a non-function";
                              throw new TypeError("Trying to call a non-function");
                            }
                          }
                        } else {
                          let str17 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        let str15 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else if (typeof wbits16 !== "function") {
                      break;
                    } else {
                      let tmp95 = tmp94 << (7 & tmp88);
                      let tmp96 = tmp88 / 8 | 0;
                      subarrayResult[tmp96] = subarrayResult[tmp96] | tmp95;
                      let sum32 = tmp96 + 1;
                      subarrayResult[sum32] = subarrayResult[sum32] | tmp95 >> 8;
                      let sum33 = tmp96 + 2;
                      subarrayResult[sum33] = subarrayResult[sum33] | tmp95 >> 16;
                      sum31 = tmp88 + arr4[tmp90];
                    }
                    num47 = num47 + 1;
                    tmp88 = sum31;
                    tmp89 = sum31;
                  }
                  throw new TypeError("Trying to call a non-function");
                }
                if (typeof wbits16 === "function") {
                  subarrayResult[tmp89 / 8 | 0] = subarrayResult[tmp89 / 8 | 0] | tmp128 << (7 & tmp89);
                  const sum34 = tmp130 + 1;
                  subarrayResult[sum34] = subarrayResult[sum34] | tmp128 << (7 & tmp89) >> 8;
                  const sum35 = tmp130 + 2;
                  subarrayResult[sum35] = subarrayResult[sum35] | tmp128 << (7 & tmp89) >> 16;
                  return tmp89 + arr4[256];
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
const _Int32Array1 = new _Int32Array([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
const _Uint8Array3 = new _Uint8Array(0);
function dflt(subarray, arg1, arg2, arg3, arg4, l) {
  let diff6;
  let sum8;
  const sum = arg3 + tmp;
  const arr = new Uint8Array(sum + 5 * (1 + Math.ceil((l.z || subarray.length) / 7000)) + arg4);
  const subarrayResult = arr.subarray(arg3, arr.length - arg4);
  l = l.l;
  if (arg1) {
    if (7 & (l.r || 0)) {
      subarrayResult[0] = l.r >> 3;
    }
    let p = l.p;
    const tmp19 = _Int32Array1[arg1 - 1] >> 13;
    const tmp20 = 8191 & _Int32Array1[arg1 - 1];
    const tmp21 = 1 << arg2;
    if (!p) {
      const self = this;
      const self2 = this;
      p = new Uint16Array(32768);
    }
    const diff = tmp21 - 1;
    let h = l.h;
    if (!h) {
      const self3 = this;
      const self4 = this;
      h = new Uint16Array(diff + 1);
    }
    const _Math = Math;
    const rounded = Math.ceil(arg2 / 3);
    const result = 2 * rounded;
    const self5 = this;
    const self6 = this;
    const tmp28 = new Int32Array(25000);
    const self7 = this;
    const self8 = this;
    const tmp30 = new Uint16Array(288);
    const self9 = this;
    const self10 = this;
    const tmp31 = new Uint16Array(32);
    const diff1 = tmp20 - 1;
    let tmp38 = tmp33;
    let num30 = 0;
    let num31 = 0;
    let tmp39 = tmp32;
    let num32 = 0;
    let num33 = 0;
    let tmp40 = tmp5;
    let num34 = 0;
    let tmp41 = tmp33;
    let num35 = 0;
    let tmp42 = tmp32;
    let num36 = 0;
    let tmp43 = tmp5;
    if ((l.i || 0) + 2 < (l.z || subarray.length)) {
      do {
        let tmp44 = (subarray[tmp39] ^ subarray[tmp39 + 1] << rounded ^ subarray[tmp39 + 2] << result) & diff;
        let tmp45 = 32767 & tmp39;
        let tmp46 = h[tmp44];
        p[tmp45] = tmp46;
        h[tmp44] = tmp45;
        let tmp54 = num30;
        let tmp55 = num31;
        let sum4 = num32;
        let sum7 = num33;
        let tmp58 = tmp40;
        let sum6 = tmp38;
        if (tmp38 <= tmp39) {
          let tmp60;
          let num37;
          let num38;
          let num39;
          let tmp61;
          let diff2 = tmp - tmp39;
          if (7000 < num33) {
            if (diff2 > 423) {
              let num42;
              let num41 = 0;
              let tmp72 = wblk(subarray, subarrayResult, 0, tmp34, tmp35, tmp36, tmp51, tmp49, tmp47, tmp39 - num30, tmp53);
              do {
                tmp30[num41] = 0;
                num41 = num41 + 1;
                num42 = 0;
              } while (num41 < 286);
              do {
                tmp31[num42] = 0;
                num42 = num42 + 1;
                tmp60 = tmp39;
                num37 = 0;
                num38 = 0;
                num39 = 0;
                tmp61 = tmp72;
              } while (num42 < 30);
            } else {
              tmp60 = num30;
              num37 = num31;
              num38 = num32;
              num39 = num33;
              tmp61 = tmp40;
            }
          } else {
            tmp60 = num30;
            num37 = num31;
            num38 = num32;
            num39 = num33;
            tmp61 = tmp40;
          }
          let num43 = 0;
          let num44 = 2;
          if (diff2 > 2) {
            let tmp92 = tmp45 - tmp46 & 32767;
            let diff3 = tmp39 - tmp92;
            num43 = 0;
            num44 = 2;
            if (tmp44 === ((subarray[diff3] ^ subarray[diff3 + 1] << rounded ^ subarray[diff3 + 2] << result) & diff)) {
              let _Math3 = Math;
              let _Math4 = Math;
              let diff4 = Math.min(tmp19, diff2) - 1;
              let bound = Math.min(32767, tmp39);
              let _Math5 = Math;
              let bound1 = Math.min(258, diff2);
              num43 = 0;
              num44 = 2;
              if (tmp92 <= bound) {
                num43 = 0;
                num44 = 2;
                if (diff1) {
                  let tmp73 = diff1;
                  let num45 = 0;
                  let num46 = 2;
                  num43 = 0;
                  num44 = 2;
                  if (tmp45 != tmp46) {
                    while (true) {
                      let tmp79 = num45;
                      let tmp80 = num46;
                      let tmp81 = tmp46;
                      if (subarray[tmp39 + num46] == subarray[tmp39 + num46 - tmp92]) {
                        let num48 = 0;
                        if (0 < bound1) {
                          let num47 = 0;
                          num48 = 0;
                          if (subarray[tmp39] == subarray[tmp39 - tmp92]) {
                            let sum1 = num47 + 1;
                            num48 = sum1;
                            while (sum1 < bound1) {
                              num47 = sum1;
                              num48 = sum1;
                              if (subarray[tmp39 + sum1] != subarray[tmp39 + sum1 - tmp92]) {
                                break;
                              }
                            }
                          }
                        }
                        tmp79 = num45;
                        tmp81 = tmp46;
                        tmp80 = num46;
                        if (num46 < num48) {
                          num43 = tmp92;
                          num44 = num48;
                          if (diff4 < num48) {
                            break;
                          } else {
                            let _Math6 = Math;
                            let bound2 = Math.min(tmp92, num48 - 2);
                            let num50 = 0;
                            let num49 = 0;
                            let tmp88 = tmp46;
                            tmp79 = tmp92;
                            tmp80 = num48;
                            tmp81 = tmp46;
                            if (0 < bound2) {
                              do {
                                let tmp83 = tmp39 - tmp92 + num49 & 32767;
                                let tmp84 = tmp83 - p[tmp83] & 32767;
                                let tmp85 = num50;
                                let tmp87 = tmp88;
                                if (num50 < tmp84) {
                                  tmp85 = tmp84;
                                  tmp87 = tmp83;
                                }
                                num49 = num49 + 1;
                                num50 = tmp85;
                                tmp88 = tmp87;
                                tmp79 = tmp92;
                                tmp80 = num48;
                                tmp81 = tmp87;
                              } while (num49 < bound2);
                            }
                          }
                        }
                        break;
                      }
                      let tmp89 = p[tmp81];
                      let sum2 = tmp92 + (tmp81 - tmp89 & 32767);
                      num43 = tmp79;
                      num44 = tmp80;
                      if (sum2 > bound) {
                        break;
                      } else {
                        let diff5 = tmp73 - 1;
                        num43 = tmp79;
                        num44 = tmp80;
                        if (!diff5) {
                          break;
                        } else {
                          tmp92 = sum2;
                          tmp73 = diff5;
                          num45 = tmp79;
                          num46 = tmp80;
                          num43 = tmp79;
                          num44 = tmp80;
                          tmp46 = tmp89;
                          if (tmp81 == tmp89) {
                            break;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          let sum3 = num37 + 1;
          if (num43) {
            tmp28[num37] = 268435456 | closure_8[num44] << 18 | authStore[num43];
            let tmp97 = 31 & closure_8[num44];
            let tmp98 = 31 & authStore[num43];
            sum4 = num38 + (uint8Array[tmp97] + uint8Array1[tmp98]);
            let sum5 = 257 + tmp97;
            tmp30[sum5] = tmp30[sum5] + 1;
            tmp31[tmp98] = tmp31[tmp98] + 1;
            sum6 = tmp39 + num44;
            sum7 = num39 + 1;
            tmp54 = tmp60;
            tmp55 = sum3;
            tmp58 = tmp61;
          } else {
            tmp28[num37] = subarray[tmp39];
            let tmp94 = subarray[tmp39];
            tmp30[tmp94] = tmp30[tmp94] + 1;
            tmp54 = tmp60;
            sum6 = tmp38;
            tmp55 = sum3;
            sum4 = num38;
            sum7 = num39;
            tmp58 = tmp61;
          }
        }
        sum8 = tmp39 + 1;
        num30 = tmp54;
        tmp38 = sum6;
        num31 = tmp55;
        num32 = sum4;
        num33 = sum7;
        tmp40 = tmp58;
        tmp39 = sum8;
        num34 = tmp54;
        tmp41 = sum6;
        num35 = tmp55;
        tmp42 = sum8;
        num36 = sum4;
        tmp43 = tmp58;
      } while (sum8 + 2 < (l.z || subarray.length));
    }
    const _Math2 = Math;
    let bound3 = Math.max(tmp42, tmp41);
    let tmp104 = num35;
    let tmp105 = num35;
    let tmp106 = bound3;
    if (bound3 < (l.z || subarray.length)) {
      do {
        let sum9 = tmp104 + 1;
        tmp28[tmp104] = subarray[bound3];
        let tmp108 = subarray[bound3];
        tmp30[tmp108] = tmp30[tmp108] + 1;
        bound3 = bound3 + 1;
        tmp104 = sum9;
        tmp105 = sum9;
        tmp106 = bound3;
      } while (bound3 < (l.z || subarray.length));
    }
    const tmp120 = wblk(subarray, subarrayResult, l, tmp28, tmp30, tmp31, num36, tmp105, num34, tmp106 - num34, tmp43);
    diff6 = tmp120;
    if (!l) {
      l.r = 7 & tmp120 | subarrayResult[tmp120 / 8 | 0] << 3;
      diff6 = tmp120 - 7;
      l.h = h;
      l.p = p;
      l.i = tmp106;
      l.w = tmp41;
    }
  } else {
    let sum12 = l.w || 0;
    let result1 = tmp5;
    diff6 = tmp5;
    if (sum12 < (l.z || subarray.length) + l) {
      while (true) {
        let sum10 = sum12 + 65535;
        if (sum10 >= tmp) {
          subarrayResult[result1 / 8 | 0] = l;
          sum10 = tmp;
        }
        let subarrayResult1 = subarray.subarray(sum12, sum10);
        if (typeof wfblk !== "function") {
          break;
        } else {
          let length = subarrayResult1.length;
          if (typeof shft === "function") {
            let num8;
            let tmp14 = (result1 + 1 + 2 + 7) / 8 | 0;
            subarrayResult[tmp14] = 255 & length;
            let sum11 = tmp14 + 1;
            subarrayResult[sum11] = length >> 8;
            subarrayResult[tmp14 + 2] = 255 ^ subarrayResult[tmp14];
            subarrayResult[tmp14 + 3] = 255 ^ subarrayResult[sum11];
            for (let num8 = 0; num8 < length; num8 = num8 + 1) {
              subarrayResult[tmp14 + num8 + 4] = subarrayResult1[num8];
            }
            result1 = 8 * (tmp14 + 4 + length);
            sum12 = sum12 + 65535;
            diff6 = result1;
          } else {
            let str2 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
      throw new TypeError("Trying to call a non-function");
    }
    l.i = l.z || subarray.length;
  }
  if (typeof shft === "function") {
    let length2 = arg3 + ((diff6 + 7) / 8 | 0) + arg4;
    if (typeof tmp121 === "function") {
      if (length2 > arr.length) {
        length2 = arr.length;
      }
      const self11 = this;
      const self12 = this;
      const obj = new Uint8Array(length2);
      const result2 = obj.set(arr.subarray(0, length2));
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
let closure_38 = (() => {
  const int32Array = new Int32Array(256);
  let num = 0;
  let num2 = 8;
  let tmp2 = num;
  do {
    let tmp5;
    do {
      let num3 = 1 & tmp2;
      if (num3) {
        num3 = -306674912;
      }
      tmp5 = num3 ^ tmp2 >>> 1;
      num2 = num2 - 1;
      tmp2 = tmp5;
    } while (num2);
    int32Array[num] = tmp5;
    num = num + 1;
  } while (num < 256);
})();
function crc() {
  let c0 = -1;
  return {
    p,
    d() {
      return ~closure_0;
    }
  };
}
function adler() {
  let c0 = 1;
  let c1 = 0;
  return { p: p2, d };
}
function dopt(arg0, dictionary, arg2, arg3, arg4) {
  let rounded;
  let tmp = arg4;
  let arr = arg0;
  if (!arg4) {
    const obj = { l: 1 };
    tmp = obj;
    arr = arg0;
    if (dictionary.dictionary) {
      dictionary = dictionary.dictionary;
      const subarrayResult = dictionary.subarray(-32768);
      const self = this;
      const self2 = this;
      const obj2 = new Uint8Array(subarrayResult.length + arg0.length);
      const result = obj2.set(subarrayResult);
      const result1 = obj2.set(arg0, subarrayResult.length);
      obj.w = subarrayResult.length;
      tmp = obj;
      arr = obj2;
    }
  }
  let num2 = 6;
  const tmp6 = dflt;
  if (null != dictionary.level) {
    num2 = dictionary.level;
  }
  if (null == dictionary.mem) {
    const _Math = Math;
    const _Math2 = Math;
    const _Math3 = Math;
    const _Math4 = Math;
    rounded = Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(arr.length))));
  } else {
    rounded = 12 + dictionary.mem;
  }
  return tmp6(arr, num2, rounded, arg2, arg3, tmp);
}
function mrg(arg0, arg1) {

}
function wcln(fn, arg1, arg2) {
  const arr = fn();
  const str1 = fn.toString();
  const slice = str1.slice;
  const sum = str1.indexOf("[") + 1;
  const str = slice(sum, str1.lastIndexOf("]"));
  const replaced = str.replace(/\s+/g, "");
  let num = 0;
  let tmp5 = arg1;
  let tmp6 = arg1;
  if (0 < arr.length) {
    do {
      let sum2;
      let str2 = arr[num];
      let tmp7 = tmp4[num];
      if (typeof str2 === "function") {
        let _HermesInternal = HermesInternal;
        let combined = tmp5 + `;${tmp7}` + "=";
        let str4 = str2.toString();
        if (str2.prototype) {
          if (-1 != str4.indexOf("[native code]")) {
            let sum1 = str4.indexOf(" ", 8) + 1;
            sum2 = combined + str4.slice(sum1, str4.indexOf("(", sum1));
          } else {
            let sum3 = combined + str4;
            let text1 = sum3;
            sum2 = sum3;
            let keys = Object.keys();
            if (keys !== undefined) {
              sum2 = text1;
              let tmp16 = keys[tmp];
              while (tmp16 !== undefined) {
                let str3 = str2.prototype[tmp16];
                let text = `;${tmp7}.prototype.${tmp16}`;
                text1 = `${tmp13}${tmp19}=${str3.toString()}`;
                continue;
              }
            }
          }
        } else {
          sum2 = combined + str4;
        }
      } else {
        arg2[tmp7] = str2;
        sum2 = tmp5;
      }
      num = num + 1;
      tmp5 = sum2;
      tmp6 = sum2;
    } while (num < arr.length);
  }
  return tmp6;
}
let closure_44 = [];
function wrkr(items, arg1, arg2, arg3) {
  let tmp = closure_44;
  if (!closure_44[arg2]) {
    const obj = {};
    const diff = items.length - 1;
    let str = "";
    let str2 = "";
    let num3 = 0;
    if (0 < diff) {
      do {
        str = wcln(items[num3], ``, obj);
        num3 = num3 + 1;
        str2 = str;
      } while (num3 < diff);
    }
    closure_44[arg2] = { c: wcln(items[diff], str2, obj), e: obj };
    tmp = closure_44;
    const obj2 = { c: wcln(items[diff], str2, obj), e: obj };
  }
  const e = tmp[arg2].e;
  if (typeof mrg === "function") {
    const obj3 = {};
    const obj4 = {};
    for (const key10026 in obj3) {
      obj4[key10026] = obj3[key10026];
      continue;
    }
    for (const key10029 in e) {
      obj4[key10029] = e[key10029];
      continue;
    }
    const text = `${tmp[arg2].c};onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=`;
    items = [];
    const text1 = `${tmp[arg2].c};onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=${arg1.toString()}`;
    for (const key10041 in obj4) {
      if (!obj4[key10041].buffer) {
        continue;
      } else {
        let self = this;
        let self2 = this;
        let push = items.push;
        let constructor = new obj4[key10041].constructor(obj4[key10041]);
        obj4[key10041] = constructor;
        let arr = push(constructor.buffer);
        continue;
      }
      continue;
    }
    closure_0 = arg3;
    let tmp19 = closure_0[arg2];
    if (!tmp19) {
      const _URL = URL;
      const _Blob = Blob;
      const items1 = [`${tmp11}};addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})`];
      const self3 = this;
      const self4 = this;
      const blob = new Blob(items1, { type: "text/javascript" });
      const objectURL = createObjectURL(blob);
      tmp18[arg2] = objectURL;
      tmp19 = objectURL;
    }
    const self5 = this;
    const self6 = this;
    const worker = new Worker(tmp19);
    worker.onmessage = function(data) {
      data = data.data;
      const $e$ = data.$e$;
      if ($e$) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error($e$[0]);
        error.code = $e$[1];
        error.stack = $e$[2];
        closure_0(error, null);
      } else {
        closure_0(null, data);
      }
    };
    worker.postMessage(obj4, items);
    return worker;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function bInflt() {
  items = [Uint8Array, Uint16Array, Int32Array, uint8Array, uint8Array1, uint8Array2, closure_7, React4, closure_16, closure_18, uint16Array, , , , , , , , , , , , ];
  items[11] = items;
  items[12] = hMap;
  items[13] = max;
  items[14] = bits;
  items[15] = bits16;
  items[16] = shft;
  items[17] = slc;
  items[18] = err;
  items[19] = inflt;
  items[20] = inflateSync;
  items[21] = pbf;
  items[22] = gopt;
  return items;
}
function bDflt() {
  items = [Uint8Array, Uint16Array, Int32Array, uint8Array, uint8Array1, uint8Array2, closure_8, authStore, closure_15, _Uint8Array1, closure_17, _Uint8Array2, uint16Array, _Int32Array1, _Uint8Array3, hMap, wbits, wbits16, hTree, ln, lc, clen, wfblk, wblk, shft, slc, dflt, dopt, deflateSync, pbf];
  return items;
}
function gze() {
  items = [gzh, gzhl, wbytes, crc, closure_38];
  return items;
}
function guze() {
  items = [gzs, gzl];
  return items;
}
function zle() {
  items = [zlh, wbytes, adler];
  return items;
}
function zule() {
  items = [zls];
  return items;
}
function pbf(buffer) {
  items = [buffer.buffer];
  return globalThis.postMessage(buffer, items);
}
function gopt(size) {
  let tmp = size;
  if (tmp) {
    size = size.size;
    if (size) {
      const self = this;
      const self2 = this;
      size = new Uint8Array(size.size);
    }
    tmp = { out: size, dictionary: size.dictionary };
    const obj = { out: size, dictionary: size.dictionary };
  }
  return tmp;
}
function cbify(arg0, arg1, arg2, arg3, arg4, arg5) {

}
function astrm(arg0) {
  closure_0 = arg0;
  arg0.ondata = ondata;
  return (arg0) => closure_0.push(arg0.data[0], arg0.data[1]);
}
function astrmify(arg0, arg1, arg2, arg3, arg4, arg5) {

}
function b2(arg0, arg1) {

}
function b4(arg0, arg1) {
  return (arg0[arg1] | arg0[arg1 + 1] << 8 | arg0[arg1 + 2] << 16 | arg0[arg1 + 3] << 24) >>> 0;
}
function b8(arg0, arg1) {

}
function wbytes(arg0, arg1, arg2) {
  let sum = arg1;
  let tmp2 = arg2;
  if (tmp2) {
    do {
      arg0[sum] = tmp2;
      tmp2 = tmp2 >>> 8;
      sum = sum + 1;
    } while (tmp2);
  }
}
function gzh(tmp10Result, filename) {
  let length;
  filename = filename.filename;
  tmp10Result[0] = 31;
  tmp10Result[1] = 139;
  tmp10Result[2] = 8;
  let num = 4;
  let num2 = 4;
  if (filename.level >= 2) {
    let num4 = 0;
    if (9 == filename.level) {
      num4 = 2;
    }
    num2 = num4;
  }
  tmp10Result[8] = num2;
  tmp10Result[9] = 3;
  if (0 != filename.mtime) {
    let mtime = filename.mtime;
    const _Math = Math;
    const _Date = Date;
    const tmp = wbytes;
    if (!mtime) {
      const _Date2 = Date;
      mtime = Date.now();
    }
    const self = this;
    const self2 = this;
    const _Date1 = new _Date(mtime);
    let floorResult = floor(_Date1 / 1000);
    if (typeof tmp === "function") {
      while (floorResult) {
        tmp10Result[num] = floorResult;
        floorResult = floorResult >>> 8;
        num = num + 1;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  if (filename) {
    tmp10Result[3] = 8;
    let num7 = 0;
    if (0 <= filename.length) {
      do {
        tmp10Result[num7 + 10] = filename.charCodeAt(num7);
        num7 = num7 + 1;
        length = filename.length;
      } while (num7 <= length);
    }
  }
}
function gzs(subarray) {
  const tmp = 31 == subarray[0] && 139 == subarray[1] && 8 == subarray[2];
  if (tmp) {
    let num6 = 10;
    if (4 & subarray[3]) {
      num6 = 10 + (2 + (subarray[10] | subarray[11] << 8));
    }
    let sum = (tmp7 >> 3 & 1) + (tmp7 >> 4 & 1);
    let tmp9 = num6;
    let tmp10 = num6;
    if (0 < sum) {
      do {
        let sum1 = tmp9 + 1;
        sum = sum - !subarray[tmp9];
        tmp9 = sum1;
        tmp10 = sum1;
      } while (0 < sum);
    }
    return tmp10 + (2 & subarray[3]);
  } else if (typeof err === "function") {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("invalid gzip data");
    error.code = 6;
    const _Error2 = Error;
    if (Error.captureStackTrace) {
      const _Error3 = Error;
      Error.captureStackTrace(error, tmp2);
    }
    throw error;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function gzl(arg0) {
  return (arg0[arg0.length - 4] | arg0[arg0.length - 3] << 8 | arg0[arg0.length - 2] << 16 | arg0[arg0.length - 1] << 24) >>> 0;
}
function gzhl(filename) {
  let num = 0;
  if (filename.filename) {
    num = filename.filename.length + 1;
  }
  return 10 + num;
}
function zlh(tmp9Result, level) {
  level = level.level;
  let num = 0;
  if (0 != level) {
    let num3 = 1;
    if (level >= 6) {
      let num5 = 2;
      if (9 == level) {
        num5 = 3;
      }
      num3 = num5;
    }
    num = num3;
  }
  tmp9Result[0] = 120;
  const tmp = level.dictionary && 32;
  tmp9Result[1] = num << 6 | tmp;
  tmp9Result[1] = tmp9Result[1] | 31 - (tmp9Result[0] << 8 | tmp9Result[1]) % 31;
  if (level.dictionary) {
    if (typeof adler === "function") {
      let c0 = 1;
      let c1 = 0;
      const obj = { p: p2, d };
      obj.p(level.dictionary);
      let dResult = obj.d();
      if (typeof wbytes === "function") {
        let num6 = 2;
        while (dResult) {
          tmp9Result[num6] = dResult;
          dResult = dResult >>> 8;
          num6 = num6 + 1;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
function zls(arg0, arg1) {
  let result = 8 !== (15 & arg0[0]);
  if (!result) {
    result = arg0[0] >> 4 > 7;
  }
  if (!result) {
    result = (arg0[0] << 8 | arg0[1]) % 31;
  }
  if (result) {
    if (typeof err === "function") {
      const _Error4 = Error;
      const self3 = this;
      const self4 = this;
      const error = new Error("invalid zlib data");
      error.code = 6;
      const _Error5 = Error;
      if (Error.captureStackTrace) {
        const _Error6 = Error;
        Error.captureStackTrace(error, tmp12);
      }
      throw error;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else if ((arg0[1] >> 5 & 1) === +(!arg1)) {
    let str = "unexpected";
    if (32 & arg0[1]) {
      str = "need";
    }
    const _HermesInternal = HermesInternal;
    let combined = "invalid zlib data: " + str + " dictionary";
    if (typeof err === "function") {
      const _Error = Error;
      if (!combined) {
        combined = items[6];
      }
      const self = this;
      const self2 = this;
      const _Error1 = new _Error(combined);
      _Error1.code = 6;
      const _Error2 = Error;
      if (Error.captureStackTrace) {
        const _Error3 = Error;
        Error.captureStackTrace(_Error1, err);
      }
      throw _Error1;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    return 2 + (arg0[1] >> 3 & 4);
  }
}
let tmp15 = (() => {
  class Deflate {
    constructor(arg0, arg1) {
      obj = {};
      tmp = arg1;
      obj1 = arg0;
      if (typeof arg0 === "function") {
        obj1 = {};
        tmp = arg0;
      }
      obj.ondata = tmp;
      if (!obj1) {
        obj1 = {};
      }
      obj.o = obj1;
      obj.s = { l: 0, i: 32768, w: 32768, z: 32768 };
      tmp2 = new closure_1_1(98304);
      obj.b = tmp2;
      if (obj.o.dictionary) {
        dictionary = obj.o.dictionary;
        num = -32768;
        subarrayResult = dictionary.subarray(-32768);
        b = obj.b;
        num2 = 32768;
        result = b.set(subarrayResult, 32768 - subarrayResult.length);
        obj.s.i = 32768 - subarrayResult.length;
      }
      return;
    }
    p(arg0, arg1) {
      ({ o, s } = this);
      if (typeof closure_1_41 === "function") {
        tmp3 = arg0;
        arr = arg0;
        if (!s) {
          obj = { l: 1 };
          s = obj;
          arr = arg0;
          if (o.dictionary) {
            dictionary = o.dictionary;
            num = -32768;
            subarrayResult = dictionary.subarray(-32768);
            tmp4 = closure_1_1;
            self = this;
            self2 = this;
            obj2 = new closure_1_1(subarrayResult.length + arg0.length);
            tmp5 = obj2;
            result = obj2.set(subarrayResult);
            result1 = obj2.set(arg0, subarrayResult.length);
            obj.w = subarrayResult.length;
            s = obj;
            arr = obj2;
          }
        }
        tmp9 = null;
        num2 = 6;
        tmp8 = closure_1_37;
        if (null != o.level) {
          num2 = o.level;
        }
        if (null == o.mem) {
          tmp11 = globalThis;
          _Math = Math;
          _Math2 = Math;
          _Math3 = Math;
          _Math4 = Math;
          num4 = 13;
          num5 = 8;
          num6 = 1.5;
          rounded = Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(arr.length))));
        } else {
          num3 = 12;
          rounded = 12 + o.mem;
        }
        tmp12 = arg1;
        tmp13 = arr;
        tmp14 = num2;
        tmp15 = rounded;
        num7 = 0;
        num8 = 0;
        tmp16 = s;
        tmp2Result = tmp2(tmp8(arr, num2, rounded, 0, 0, s), arg1);
        return;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    push(arg0, arg1) {
      self = this;
      if (this.ondata) {
        if (self.s.l) {
          if (typeof closure_1_25 === "function") {
            tmp21 = globalThis;
            _Error4 = Error;
            tmp22 = closure_1_24;
            self6 = this;
            self7 = this;
            error = new Error(closure_1_24[4]);
            tmp24 = error;
            num12 = 4;
            error.code = 4;
            _Error5 = Error;
            if (Error.captureStackTrace) {
              _Error6 = Error;
              captureStackTraceResult = Error.captureStackTrace(error, tmp20);
            }
            throw error;
          } else {
            str2 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          tmp7 = arg0;
          sum = arg0.length + self.s.z;
          if (sum > self.b.length) {
            num2 = 2;
            num3 = 32768;
            if (sum > 2 * self.b.length - 32768) {
              tmp10 = closure_1_1;
              num4 = -32768;
              self4 = this;
              self5 = this;
              obj = new closure_1_1(-32768 & sum);
              tmp11 = obj;
              b2 = self.b;
              num5 = 0;
              result = obj.set(b2.subarray(0, self.s.z));
              self.b = obj;
            }
            diff = self.b.length - self.s.z;
            if (diff) {
              b3 = self.b;
              num6 = 0;
              result1 = b3.set(arg0.subarray(0, diff), self.s.z);
              self.s.z = self.b.length;
              flag = false;
              pResult = self.p(self.b, false);
            }
            ({ b: b4, b: b5 } = self);
            num7 = -32768;
            result2 = b4.set(b5.subarray(-32768));
            b6 = self.b;
            result3 = b6.set(arg0.subarray(diff), 32768);
            self.s.z = arg0.length - diff + 32768;
            num8 = 32766;
            self.s.i = 32766;
            self.s.w = 32768;
          } else {
            b = self.b;
            result4 = b.set(arg0, self.s.z);
            s = self.s;
            s.z = s.z + arg0.length;
          }
          flag2 = arg1;
          num9 = 1;
          self.s.l = 1 & arg1;
          num10 = 8191;
          tmp18 = self.s.z > self.s.w + 8191 || flag2;
          if (tmp18) {
            ({ p, b: b7 } = self);
            if (!flag2) {
              flag2 = false;
            }
            pResult1 = p(b7, flag2);
            self.s.w = self.s.i;
            s2 = self.s;
            num11 = 2;
            s2.i = s2.i - 2;
          }
          return;
        }
      } else if (typeof closure_1_25 === "function") {
        tmp2 = globalThis;
        _Error = Error;
        tmp3 = closure_1_24;
        self2 = this;
        self3 = this;
        error1 = new Error(closure_1_24[5]);
        tmp5 = error1;
        num = 5;
        error1.code = 5;
        _Error2 = Error;
        if (Error.captureStackTrace) {
          _Error3 = Error;
          captureStackTraceResult1 = Error.captureStackTrace(error1, tmp);
        }
        throw error1;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  return Deflate;
})();
let closure_68 = tmp15;
let tmp16 = (() => (function AsyncDeflate(arg0, arg1) {
  const self = this;
  items = [
    closure_47,
    () => {
      items = [closure_1_55, closure_1_68];
      return items;
    }
  ];
  let tmp = closure_56;
  if (typeof tmp === "function") {
    const obj = closure_45(items, (data) => {
      const tmp = new closure_1_68(data.data);
      if (typeof closure_1_55 === "function") {
        closure_0 = tmp;
        tmp.ondata = ondata;
        globalThis.onmessage = (arg0) => closure_0.push(arg0.data[0], arg0.data[1]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }, 6, (arg0, arg1) => {
      let tmp10;
      let tmp9;
      const tmp = arg0;
      if (tmp) {
        obj.terminate();
        const ondata2 = self.ondata;
        ondata2.call(self, arg0);
      } else {
        const _Array = Array;
        if (Array.isArray(arg1)) {
          if (arg1[1]) {
            obj.terminate();
          }
          const ondata = self.ondata;
          [tmp9, tmp10] = arg1;
          ondata.call(self, arg0, tmp9, tmp10);
        } else {
          closure_1_1(arg1);
        }
      }
    });
    obj.postMessage(tmp2);
    self.push = function(buffer, arg1) {
      if (self.ondata) {
        const tmp10 = closure_1_2;
        if (tmp10) {
          if (typeof err === "function") {
            const _Error4 = Error;
            const self3 = this;
            const self4 = this;
            const error = new Error(closure_2_24[4]);
            error.code = 4;
            const _Error5 = Error;
            if (Error.captureStackTrace) {
              const _Error6 = Error;
              Error.captureStackTrace(error, err);
            }
            tmp11(error, null, arg1);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        items = [buffer, ];
        closure_1_2 = arg1;
        items[1] = arg1;
        const items1 = [buffer.buffer];
        obj.postMessage(items, items1);
      } else if (typeof err === "function") {
        const _Error = Error;
        self = this;
        const self2 = this;
        const error1 = new Error(closure_2_24[5]);
        error1.code = 5;
        const _Error2 = Error;
        if (Error.captureStackTrace) {
          const _Error3 = Error;
          Error.captureStackTrace(error1, err);
        }
        throw error1;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    self.terminate = () => {
      obj.terminate();
    };
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}))();
let closure_69 = tmp16;
let tmp17 = (() => {
  class Inflate {
    constructor(arg0, arg1) {
      obj = {};
      tmp = arg1;
      obj1 = arg0;
      if (typeof arg0 === "function") {
        obj1 = {};
        tmp = arg0;
      }
      obj.ondata = tmp;
      subarrayResult = obj1 && obj1.dictionary;
      if (subarrayResult) {
        dictionary = obj1.dictionary;
        num = -32768;
        subarrayResult = dictionary.subarray(-32768);
      }
      num2 = 0;
      if (subarrayResult) {
        num2 = subarrayResult.length;
      }
      obj.s = { i: 0, b: num2 };
      tmp2 = new closure_1_1(32768);
      obj.o = tmp2;
      tmp3 = new closure_1_1(0);
      obj.p = tmp3;
      if (subarrayResult) {
        o = obj.o;
        result = o.set(subarrayResult);
      }
      return;
    }
    e(arg0) {
      self = this;
      if (this.ondata) {
        if (self.d) {
          if (typeof closure_1_25 === "function") {
            tmp13 = globalThis;
            _Error4 = Error;
            tmp14 = closure_1_24;
            self6 = this;
            self7 = this;
            error = new Error(closure_1_24[4]);
            tmp16 = error;
            num2 = 4;
            error.code = 4;
            _Error5 = Error;
            if (Error.captureStackTrace) {
              _Error6 = Error;
              captureStackTraceResult = Error.captureStackTrace(error, tmp12);
            }
            throw error;
          } else {
            str2 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          tmp7 = arg0;
          if (self.p.length) {
            if (arg0.length) {
              tmp8 = closure_1_1;
              self4 = this;
              self5 = this;
              obj = new closure_1_1(self.p.length + arg0.length);
              tmp9 = obj;
              result = obj.set(self.p);
              result1 = obj.set(arg0, self.p.length);
              self.p = obj;
            }
          } else {
            self.p = arg0;
          }
          return;
        }
      } else if (typeof closure_1_25 === "function") {
        tmp2 = globalThis;
        _Error = Error;
        tmp3 = closure_1_24;
        self2 = this;
        self3 = this;
        error1 = new Error(closure_1_24[5]);
        tmp5 = error1;
        num = 5;
        error1.code = 5;
        _Error2 = Error;
        if (Error.captureStackTrace) {
          _Error3 = Error;
          captureStackTraceResult1 = Error.captureStackTrace(error1, tmp);
        }
        throw error1;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    c(arg0) {
      self = this;
      flag = arg0;
      s = this.s;
      if (!arg0) {
        flag = false;
      }
      self.d = flag;
      s.i = +flag;
      num = self.s.b;
      arr = closure_1_26(self.p, self.s, self.o);
      tmp2 = closure_1_23;
      length = self.s.b;
      if (typeof closure_1_23 === "function") {
        tmp3 = null;
        tmp4 = null == num;
        if (!tmp4) {
          num2 = 0;
          tmp4 = num < 0;
        }
        if (tmp4) {
          num = 0;
        }
        tmp5 = null == length || length > arr.length;
        if (tmp5) {
          length = arr.length;
        }
        tmp6 = closure_1_1;
        self2 = this;
        self3 = this;
        obj = new closure_1_1(length - num);
        tmp7 = obj;
        result = obj.set(arr.subarray(num, length));
        tmpResult = tmp(obj, self.d);
        num3 = 32768;
        num4 = self.s.b - 32768;
        if (typeof tmp2 === "function") {
          num5 = 0;
          if (num4 < 0) {
            num4 = 0;
          }
          length2 = arr.length;
          self4 = this;
          self5 = this;
          tmp61 = new tmp6(length2 - num4);
          tmp10 = tmp61;
          result1 = tmp61.set(arr.subarray(num4, length2));
          self.o = tmp61;
          self.s.b = self.o.length;
          p = self.p;
          num6 = 8;
          num7 = self.s.p / 8 | 0;
          if (typeof tmp2 === "function") {
            if (num7 < 0) {
              num7 = 0;
            }
            length3 = p.length;
            self6 = this;
            self7 = this;
            tmp62 = new tmp6(length3 - num7);
            tmp12 = tmp62;
            result2 = tmp62.set(p.subarray(num7, length3));
            self.p = tmp62;
            s2 = self.s;
            num8 = 7;
            s2.p = s2.p & 7;
            return;
          } else {
            str3 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          str2 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    push(arg0, arg1) {
      eResult = this.e(arg0);
      cResult = this.c(arg1);
      return;
    }
  }
  return Inflate;
})();
const I = tmp17;
let tmp18 = (() => (function AsyncInflate(arg0, arg1) {
  const self = this;
  items = [
    closure_46,
    () => {
      items = [closure_1_55, closure_1_72];
      return items;
    }
  ];
  let tmp = closure_56;
  if (typeof tmp === "function") {
    const obj = closure_45(items, (data) => {
      const tmp = new closure_1_72(data.data);
      if (typeof closure_1_55 === "function") {
        closure_0 = tmp;
        tmp.ondata = ondata;
        globalThis.onmessage = (arg0) => closure_0.push(arg0.data[0], arg0.data[1]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }, 7, (arg0, arg1) => {
      let tmp10;
      let tmp9;
      const tmp = arg0;
      if (tmp) {
        obj.terminate();
        const ondata2 = self.ondata;
        ondata2.call(self, arg0);
      } else {
        const _Array = Array;
        if (Array.isArray(arg1)) {
          if (arg1[1]) {
            obj.terminate();
          }
          const ondata = self.ondata;
          [tmp9, tmp10] = arg1;
          ondata.call(self, arg0, tmp9, tmp10);
        } else {
          closure_1_1(arg1);
        }
      }
    });
    obj.postMessage(tmp2);
    self.push = function(buffer, arg1) {
      if (self.ondata) {
        const tmp10 = closure_1_2;
        if (tmp10) {
          if (typeof err === "function") {
            const _Error4 = Error;
            const self3 = this;
            const self4 = this;
            const error = new Error(closure_2_24[4]);
            error.code = 4;
            const _Error5 = Error;
            if (Error.captureStackTrace) {
              const _Error6 = Error;
              Error.captureStackTrace(error, err);
            }
            tmp11(error, null, arg1);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        items = [buffer, ];
        closure_1_2 = arg1;
        items[1] = arg1;
        const items1 = [buffer.buffer];
        obj.postMessage(items, items1);
      } else if (typeof err === "function") {
        const _Error = Error;
        self = this;
        const self2 = this;
        const error1 = new Error(closure_2_24[5]);
        error1.code = 5;
        const _Error2 = Error;
        if (Error.captureStackTrace) {
          const _Error3 = Error;
          Error.captureStackTrace(error1, err);
        }
        throw error1;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    self.terminate = () => {
      obj.terminate();
    };
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}))();
const I2 = tmp18;
let tmp19 = (() => {
  class Gzip {
    constructor(arg0, arg1) {
      obj = {};
      if (typeof closure_39 === "function") {
        tmp = arg0;
        tmp2 = arg1;
        num = -1;
        c0 = -1;
        obj1 = { p: null, d: null };
        obj1.p = function p() { /* body not rendered: F103366 */ };
        obj1.d = function d() { /* body not rendered: F103367 */ };
        obj.c = obj1;
        num2 = 0;
        obj.l = 0;
        num3 = 1;
        obj.v = 1;
        callResult = closure_68.call(obj, arg0, arg1);
        return;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    push(arg0, arg1) {
      c = this.c;
      pResult = c.p(arg0);
      this.l = this.l + arg0.length;
      push = closure_1_68.prototype.push;
      callResult = push.call(this, arg0, arg1);
      return;
    }
    p(arg0, arg1) {
      self = this;
      ({ o, v } = this);
      tmp = closure_1_41;
      if (v) {
        tmp2 = closure_1_64;
        o2 = self.o;
        if (typeof closure_1_64 === "function") {
          num = 0;
          if (o2.filename) {
            num2 = 1;
            num = o2.filename.length + 1;
          }
          num3 = 10;
          v = 10 + num;
        } else {
          str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      tmp3 = arg1 && 8;
      s = self.s;
      if (typeof tmp === "function") {
        tmp4 = arg0;
        arr = arg0;
        if (!s) {
          obj = { l: 1 };
          s = obj;
          arr = arg0;
          if (o.dictionary) {
            dictionary = o.dictionary;
            num4 = -32768;
            subarrayResult = dictionary.subarray(-32768);
            tmp5 = closure_1_1;
            self2 = this;
            self3 = this;
            obj2 = new closure_1_1(subarrayResult.length + arg0.length);
            tmp6 = obj2;
            result = obj2.set(subarrayResult);
            result1 = obj2.set(arg0, subarrayResult.length);
            obj.w = subarrayResult.length;
            s = obj;
            arr = obj2;
          }
        }
        tmp10 = null;
        num5 = 6;
        tmp9 = closure_1_37;
        if (null != o.level) {
          num5 = o.level;
        }
        if (null == o.mem) {
          tmp12 = globalThis;
          _Math = Math;
          _Math2 = Math;
          _Math3 = Math;
          _Math4 = Math;
          num7 = 13;
          num8 = 8;
          num9 = 1.5;
          rounded = Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(arr.length))));
        } else {
          num6 = 12;
          rounded = 12 + o.mem;
        }
        tmp13 = arr;
        tmp14 = num5;
        tmp15 = rounded;
        tmp16 = v;
        tmp17 = tmp3;
        tmp18 = s;
        tmp9Result = tmp9(arr, num5, rounded, v, tmp3, s);
        if (self.v) {
          tmp19 = closure_1_61;
          tmp20 = closure_1_61(tmp9Result, self.o);
          num10 = 0;
          self.v = 0;
        }
        if (arg1) {
          tmp21 = closure_1_60;
          num11 = 8;
          diff = tmp9Result.length - 8;
          c = self.c;
          dResult = c.d();
          if (typeof closure_1_60 === "function") {
            num12 = 1;
            while (dResult) {
              tmp9Result[diff] = dResult;
              dResult = dResult >>> 8;
              diff = diff + 1;
            }
            tmp24 = closure_1_60;
            num13 = 4;
            diff1 = tmp9Result.length - 4;
            l = self.l;
            if (typeof closure_1_60 === "function") {
              while (l) {
                tmp9Result[diff1] = l;
                l = l >>> 8;
                diff1 = diff1 + 1;
              }
            } else {
              str4 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            str3 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
        ondataResult = self.ondata(tmp9Result, arg1);
        return;
      } else {
        str2 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  return Gzip;
})();
let closure_76 = tmp19;
let tmp20 = (() => (function AsyncGzip(arg0, arg1) {
  const self = this;
  items = [
    closure_47,
    closure_48,
    () => {
      items = [closure_1_55, closure_1_68, closure_1_76];
      return items;
    }
  ];
  let tmp = closure_56;
  if (typeof tmp === "function") {
    const obj = closure_45(items, (data) => {
      const tmp = new closure_1_76(data.data);
      if (typeof closure_1_55 === "function") {
        closure_0 = tmp;
        tmp.ondata = ondata;
        globalThis.onmessage = (arg0) => closure_0.push(arg0.data[0], arg0.data[1]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }, 8, (arg0, arg1) => {
      let tmp10;
      let tmp9;
      const tmp = arg0;
      if (tmp) {
        obj.terminate();
        const ondata2 = self.ondata;
        ondata2.call(self, arg0);
      } else {
        const _Array = Array;
        if (Array.isArray(arg1)) {
          if (arg1[1]) {
            obj.terminate();
          }
          const ondata = self.ondata;
          [tmp9, tmp10] = arg1;
          ondata.call(self, arg0, tmp9, tmp10);
        } else {
          closure_1_1(arg1);
        }
      }
    });
    obj.postMessage(tmp2);
    self.push = function(buffer, arg1) {
      if (self.ondata) {
        const tmp10 = closure_1_2;
        if (tmp10) {
          if (typeof err === "function") {
            const _Error4 = Error;
            const self3 = this;
            const self4 = this;
            const error = new Error(closure_2_24[4]);
            error.code = 4;
            const _Error5 = Error;
            if (Error.captureStackTrace) {
              const _Error6 = Error;
              Error.captureStackTrace(error, err);
            }
            tmp11(error, null, arg1);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        items = [buffer, ];
        closure_1_2 = arg1;
        items[1] = arg1;
        const items1 = [buffer.buffer];
        obj.postMessage(items, items1);
      } else if (typeof err === "function") {
        const _Error = Error;
        self = this;
        const self2 = this;
        const error1 = new Error(closure_2_24[5]);
        error1.code = 5;
        const _Error2 = Error;
        if (Error.captureStackTrace) {
          const _Error3 = Error;
          Error.captureStackTrace(error1, err);
        }
        throw error1;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    self.terminate = () => {
      obj.terminate();
    };
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}))();
let tmp21 = (() => {
  class Gunzip {
    constructor(arg0, arg1) {
      callResult = closure_1_72.call({ v: 1, r: 0 }, arg0, arg1);
      return;
    }
    push(arg0, arg1) {
      self = this;
      e = closure_1_72.prototype.e;
      tmp = closure_1_72;
      callResult = e.call(self, arg0);
      self.r = self.r + arg0.length;
      if (self.v) {
        p = self.p;
        num = 1;
        subarrayResult = p.subarray(self.v - 1);
        num2 = 3;
        num3 = 4;
        if (subarrayResult.length > 3) {
          tmp2 = closure_1_62;
          num3 = closure_1_62(subarrayResult);
        }
        if (num3 > subarrayResult.length) {
          if (!arg1) {
            return;
          }
        } else {
          tmp3 = self.v > 1 && self.onmember;
          if (tmp3) {
            onmemberResult = self.onmember(self.r - subarrayResult.length);
          }
        }
        self.p = subarrayResult.subarray(num3);
        num4 = 0;
        self.v = 0;
      }
      c = tmp.prototype.c;
      callResult1 = c.call(self, arg1);
      tmp5 = self.s.f && !self.s.l;
      if (tmp5) {
        tmp6 = closure_1_22;
        if (typeof closure_1_22 === "function") {
          num5 = 7;
          num6 = 8;
          num7 = 9;
          self.v = ((tmp7 + 7) / 8 | 0) + 9;
          self.s = { i: 0 };
          self2 = this;
          self3 = this;
          num8 = 0;
          tmp8 = closure_1_1;
          tmp9 = new closure_1_1(0);
          tmp10 = tmp9;
          self.o = tmp9;
          if (self.p.length) {
            self4 = this;
            self5 = this;
            num9 = 0;
            push = self.push;
            tmp81 = new tmp8(0);
            tmp12 = tmp81;
            arr1 = push(tmp81, arg1);
          }
        } else {
          str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      return;
    }
  }
  return Gunzip;
})();
const G = tmp21;
let tmp22 = (() => (function AsyncGunzip(arg0, arg1) {
  const self = this;
  items = [
    closure_46,
    closure_49,
    () => {
      items = [closure_1_55, closure_1_72, closure_1_78];
      return items;
    }
  ];
  let tmp = closure_56;
  if (typeof tmp === "function") {
    const f127722 = (arg0) => {
      let onmember = self.onmember;
      obj = self;
      if (onmember) {
        onmember = obj.onmember(arg0);
      }
      return onmember;
    };
    let obj = closure_45(items, (data) => {
      const tmp = new closure_1_78(data.data);
      tmp.onmember = (arg0) => globalThis.postMessage(arg0);
      if (typeof closure_1_55 === "function") {
        closure_0 = tmp;
        tmp.ondata = ondata;
        globalThis.onmessage = (arg0) => closure_0.push(arg0.data[0], arg0.data[1]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }, 9, (arg0, arg1) => {
      let tmp10;
      let tmp9;
      const tmp = arg0;
      if (tmp) {
        obj.terminate();
        const ondata2 = self.ondata;
        ondata2.call(self, arg0);
      } else {
        const _Array = Array;
        if (Array.isArray(arg1)) {
          if (arg1[1]) {
            obj.terminate();
          }
          const ondata = self.ondata;
          [tmp9, tmp10] = arg1;
          ondata.call(self, arg0, tmp9, tmp10);
        } else {
          closure_1_1(arg1);
        }
      }
    });
    obj.postMessage(tmp2);
    self.push = function(buffer, arg1) {
      if (self.ondata) {
        const tmp10 = closure_1_2;
        if (tmp10) {
          if (typeof err === "function") {
            const _Error4 = Error;
            const self3 = this;
            const self4 = this;
            const error = new Error(closure_2_24[4]);
            error.code = 4;
            const _Error5 = Error;
            if (Error.captureStackTrace) {
              const _Error6 = Error;
              Error.captureStackTrace(error, err);
            }
            tmp11(error, null, arg1);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        items = [buffer, ];
        closure_1_2 = arg1;
        items[1] = arg1;
        const items1 = [buffer.buffer];
        obj.postMessage(items, items1);
      } else if (typeof err === "function") {
        const _Error = Error;
        self = this;
        const self2 = this;
        const error1 = new Error(closure_2_24[5]);
        error1.code = 5;
        const _Error2 = Error;
        if (Error.captureStackTrace) {
          const _Error3 = Error;
          Error.captureStackTrace(error1, err);
        }
        throw error1;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    self.terminate = () => {
      obj.terminate();
    };
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}))();
const G2 = tmp22;
let tmp23 = (() => {
  class Zlib {
    constructor(arg0, arg1) {
      obj = {};
      if (typeof closure_1_40 === "function") {
        tmp = arg0;
        tmp2 = arg1;
        num = 1;
        c0 = 1;
        num2 = 0;
        c1 = 0;
        obj1 = { p: null, d: null };
        obj1.p = function p() { /* body not rendered: F103368 */ };
        obj1.d = function d() { /* body not rendered: F103369 */ };
        obj.c = obj1;
        obj.v = 1;
        callResult = closure_1_68.call(obj, arg0, arg1);
        return;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    push(arg0, arg1) {
      c = this.c;
      pResult = c.p(arg0);
      push = closure_1_68.prototype.push;
      callResult = push.call(this, arg0, arg1);
      return;
    }
    p(arg0, arg1) {
      self = this;
      ({ o, v } = this);
      tmp = closure_1_41;
      if (v) {
        num = 2;
        if (self.o.dictionary) {
          num = 6;
        }
        v = num;
      }
      tmp2 = arg1 && 4;
      s = self.s;
      if (typeof tmp === "function") {
        tmp3 = arg0;
        arr = arg0;
        if (!s) {
          obj = { l: 1 };
          s = obj;
          arr = arg0;
          if (o.dictionary) {
            dictionary = o.dictionary;
            num2 = -32768;
            subarrayResult = dictionary.subarray(-32768);
            tmp4 = closure_1_1;
            self2 = this;
            self3 = this;
            obj2 = new closure_1_1(subarrayResult.length + arg0.length);
            tmp5 = obj2;
            result = obj2.set(subarrayResult);
            result1 = obj2.set(arg0, subarrayResult.length);
            obj.w = subarrayResult.length;
            s = obj;
            arr = obj2;
          }
        }
        tmp9 = null;
        num3 = 6;
        tmp8 = closure_1_37;
        if (null != o.level) {
          num3 = o.level;
        }
        if (null == o.mem) {
          tmp11 = globalThis;
          _Math = Math;
          _Math2 = Math;
          _Math3 = Math;
          _Math4 = Math;
          num5 = 13;
          num6 = 8;
          num7 = 1.5;
          rounded = Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(arr.length))));
        } else {
          num4 = 12;
          rounded = 12 + o.mem;
        }
        tmp12 = arr;
        tmp13 = num3;
        tmp14 = rounded;
        tmp15 = v;
        tmp16 = tmp2;
        tmp17 = s;
        tmp8Result = tmp8(arr, num3, rounded, v, tmp2, s);
        if (self.v) {
          tmp18 = closure_1_65;
          tmp19 = closure_1_65(tmp8Result, self.o);
          num8 = 0;
          self.v = 0;
        }
        if (arg1) {
          tmp20 = closure_1_60;
          num9 = 4;
          diff = tmp8Result.length - 4;
          c = self.c;
          dResult = c.d();
          if (typeof closure_1_60 === "function") {
            num10 = 8;
            num11 = 1;
            while (dResult) {
              tmp8Result[diff] = dResult;
              dResult = dResult >>> 8;
              diff = diff + 1;
            }
          } else {
            str2 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
        ondataResult = self.ondata(tmp8Result, arg1);
        return;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  return Zlib;
})();
let closure_82 = tmp23;
let tmp24 = (() => (function AsyncZlib(arg0, arg1) {
  const self = this;
  items = [
    closure_47,
    closure_50,
    () => {
      items = [closure_1_55, closure_1_68, closure_1_82];
      return items;
    }
  ];
  let tmp = closure_56;
  if (typeof tmp === "function") {
    const obj = closure_45(items, (data) => {
      const tmp = new closure_1_82(data.data);
      if (typeof closure_1_55 === "function") {
        closure_0 = tmp;
        tmp.ondata = ondata;
        globalThis.onmessage = (arg0) => closure_0.push(arg0.data[0], arg0.data[1]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }, 10, (arg0, arg1) => {
      let tmp10;
      let tmp9;
      const tmp = arg0;
      if (tmp) {
        obj.terminate();
        const ondata2 = self.ondata;
        ondata2.call(self, arg0);
      } else {
        const _Array = Array;
        if (Array.isArray(arg1)) {
          if (arg1[1]) {
            obj.terminate();
          }
          const ondata = self.ondata;
          [tmp9, tmp10] = arg1;
          ondata.call(self, arg0, tmp9, tmp10);
        } else {
          closure_1_1(arg1);
        }
      }
    });
    obj.postMessage(tmp2);
    self.push = function(buffer, arg1) {
      if (self.ondata) {
        const tmp10 = closure_1_2;
        if (tmp10) {
          if (typeof err === "function") {
            const _Error4 = Error;
            const self3 = this;
            const self4 = this;
            const error = new Error(closure_2_24[4]);
            error.code = 4;
            const _Error5 = Error;
            if (Error.captureStackTrace) {
              const _Error6 = Error;
              Error.captureStackTrace(error, err);
            }
            tmp11(error, null, arg1);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        items = [buffer, ];
        closure_1_2 = arg1;
        items[1] = arg1;
        const items1 = [buffer.buffer];
        obj.postMessage(items, items1);
      } else if (typeof err === "function") {
        const _Error = Error;
        self = this;
        const self2 = this;
        const error1 = new Error(closure_2_24[5]);
        error1.code = 5;
        const _Error2 = Error;
        if (Error.captureStackTrace) {
          const _Error3 = Error;
          Error.captureStackTrace(error1, err);
        }
        throw error1;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    self.terminate = () => {
      obj.terminate();
    };
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}))();
let tmp25 = (() => {
  class Unzlib {
    constructor(arg0, arg1) {
      self = this;
      callResult = closure_1_72.call(self, arg0, arg1);
      num = 1;
      if (arg0) {
        num = 1;
        if (arg0.dictionary) {
          num = 2;
        }
      }
      self.v = num;
      return;
    }
    push(arg0, arg1) {
      self = this;
      e = closure_1_72.prototype.e;
      tmp = closure_1_72;
      callResult = e.call(self, arg0);
      if (self.v) {
        num = 6;
        if (self.p.length < 6) {
          if (!arg1) {
            return;
          }
        }
        p = self.p;
        tmp2 = closure_1_66;
        num2 = 1;
        self.p = p.subarray(closure_1_66(self.p, self.v - 1));
        num3 = 0;
        self.v = 0;
      }
      if (arg1) {
        num4 = 4;
        if (self.p.length < 4) {
          if (typeof closure_1_25 === "function") {
            tmp4 = globalThis;
            _Error = Error;
            self2 = this;
            str = "invalid zlib data";
            self3 = this;
            error = new Error("invalid zlib data");
            tmp6 = error;
            num7 = 6;
            error.code = 6;
            _Error2 = Error;
            if (Error.captureStackTrace) {
              _Error3 = Error;
              captureStackTraceResult = Error.captureStackTrace(error, tmp3);
            }
            throw error;
          } else {
            str2 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          p2 = self.p;
          num5 = -4;
          num6 = 0;
          self.p = require("Discord");
        }
      }
      c = tmp.prototype.c;
      callResult1 = c.call(self, arg1);
      return;
    }
  }
  return Unzlib;
})();
const Z = tmp25;
let tmp26 = (() => (function AsyncUnzlib(arg0, arg1) {
  let self = this;
  items = [
    closure_46,
    closure_51,
    () => {
      items = [closure_1_55, closure_1_72, closure_1_84];
      return items;
    }
  ];
  let tmp = closure_56;
  if (typeof tmp === "function") {
    const obj = closure_45(items, (data) => {
      const tmp = new closure_1_84(data.data);
      if (typeof closure_1_55 === "function") {
        closure_0 = tmp;
        tmp.ondata = ondata;
        globalThis.onmessage = (arg0) => closure_0.push(arg0.data[0], arg0.data[1]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }, 11, (arg0, arg1) => {
      let tmp10;
      let tmp9;
      const tmp = arg0;
      if (tmp) {
        obj.terminate();
        const ondata2 = self.ondata;
        ondata2.call(self, arg0);
      } else {
        const _Array = Array;
        if (Array.isArray(arg1)) {
          if (arg1[1]) {
            obj.terminate();
          }
          const ondata = self.ondata;
          [tmp9, tmp10] = arg1;
          ondata.call(self, arg0, tmp9, tmp10);
        } else {
          closure_1_1(arg1);
        }
      }
    });
    obj.postMessage(tmp2);
    self.push = function(buffer, arg1) {
      if (self.ondata) {
        const tmp10 = closure_1_2;
        if (tmp10) {
          if (typeof err === "function") {
            const _Error4 = Error;
            const self3 = this;
            const self4 = this;
            const error = new Error(closure_2_24[4]);
            error.code = 4;
            const _Error5 = Error;
            if (Error.captureStackTrace) {
              const _Error6 = Error;
              Error.captureStackTrace(error, err);
            }
            tmp11(error, null, arg1);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        items = [buffer, ];
        closure_1_2 = arg1;
        items[1] = arg1;
        const items1 = [buffer.buffer];
        obj.postMessage(items, items1);
      } else if (typeof err === "function") {
        const _Error = Error;
        self = this;
        const self2 = this;
        const error1 = new Error(closure_2_24[5]);
        error1.code = 5;
        const _Error2 = Error;
        if (Error.captureStackTrace) {
          const _Error3 = Error;
          Error.captureStackTrace(error1, err);
        }
        throw error1;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    self.terminate = () => {
      obj.terminate();
    };
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}))();
const Z2 = tmp26;
let tmp27 = (() => {
  class Decompress {
    constructor(arg0, arg1) {
      obj = { G: closure_1_78, I: closure_1_72, Z: closure_1_84 };
      tmp = closure_1_67.call(obj, arg0, arg1) || {};
      obj.o = tmp;
      return;
    }
    push(arg0, arg1) {
      self = this;
      if (this.ondata) {
        tmp7 = arg0;
        tmp8 = arg1;
        if (self.s) {
          s = self.s;
          arr1 = s.push(arg0, arg1);
        } else {
          if (self.p) {
            if (self.p.length) {
              tmp9 = closure_1_1;
              self4 = this;
              self5 = this;
              obj = new closure_1_1(self.p.length + arg0.length);
              tmp10 = obj;
              result = obj.set(self.p);
              result1 = obj.set(arg0, self.p.length);
            }
            num2 = 2;
            if (self.p.length > 2) {
              closure_0 = self;
              cb = function cb() { /* body not rendered: F127727 */ };
              num9 = 31;
              if (31 == self.p[0]) {
                num3 = 139;
                if (139 == self.p[1]) {
                  num4 = 8;
                  if (8 == self.p[2]) {
                    self10 = this;
                    self11 = this;
                    tmp16 = cb;
                    g = new self.G(self.o, cb);
                  }
                  self.s = g;
                  s1 = self.s;
                  arr3 = s1.push(self.p, arg1);
                  tmp18 = null;
                  self.p = null;
                }
              }
              num5 = 15;
              num6 = 8;
              if (8 === (15 & self.p[0])) {
                num7 = 4;
                num8 = 7;
                if (7 >= self.p[0] >> 4) {
                  if (!((self.p[0] << 8 | self.p[1]) % 31)) {
                    self6 = this;
                    self7 = this;
                    tmp13 = cb;
                    g = new self.Z(self.o, cb);
                  }
                }
              }
              self8 = this;
              self9 = this;
              tmp15 = cb;
              g = new self.I(self.o, cb);
            }
          }
          self.p = arg0;
        }
        return;
      } else if (typeof closure_1_25 === "function") {
        tmp2 = globalThis;
        _Error = Error;
        tmp3 = closure_1_24;
        self2 = this;
        self3 = this;
        error = new Error(closure_1_24[5]);
        tmp5 = error;
        num = 5;
        error.code = 5;
        _Error2 = Error;
        if (Error.captureStackTrace) {
          _Error3 = Error;
          captureStackTraceResult = Error.captureStackTrace(error, tmp);
        }
        throw error;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  return Decompress;
})();
let closure_88 = tmp27;
function fltn(obj, arg1, arg2, obj2) {
  for (const key10008 in obj) {
    let tmp18 = obj[key10008];
    let sum = arg1 + key10008;
    let _Array = Array;
    let tmp6 = obj2;
    let first = tmp18;
    if (Array.isArray(tmp18)) {
      let tmp2 = tmp18[1];
      if (typeof mrg === "function") {
        obj = {};
        for (const key10014 in obj2) {
          obj[key10014] = obj2[key10014];
          continue;
        }
        for (const key10017 in tmp2) {
          obj[key10017] = tmp2[key10017];
          continue;
        }
        first = tmp18[0];
        tmp6 = obj;
      } else {
        let str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    if (first instanceof Uint8Array) {
      items = [first, tmp6];
      arg2[sum] = items;
      continue;
    } else {
      let text = `${tmp19}/`;
      let self = this;
      let self2 = this;
      let tmp72 = new tmp7(0);
      let items1 = [, ];
      items1[0] = tmp72;
      items1[1] = tmp6;
      arg2[`${tmp19}/`] = items1;
      let tmp16 = fltn(first, `${tmp19}/`, arg2, obj2);
      continue;
    }
    continue;
  }
}
let textEncoder = typeof TextEncoder !== "undefined";
let tmp28 = (() => {
  let closure_73;
  let closure_79;
  let closure_85;
  class AsyncDecompress {
    constructor(arg0, arg1) {
      obj = { G: closure_1_79, I: closure_1_73, Z: closure_1_85 };
      callResult = closure_1_88.call(obj, arg0, arg1);
      return;
    }
    push(arg0, arg1) {
      push = closure_1_88.prototype.push;
      callResult = push.call(this, arg0, arg1);
      return;
    }
  }
  return AsyncDecompress;
})();
if (typeof TextEncoder !== "undefined") {
  const _TextEncoder = TextEncoder;
  let self = this;
  let self2 = this;
  textEncoder = new TextEncoder();
}
let decoder = typeof TextDecoder !== "undefined";
if (typeof TextDecoder !== "undefined") {
  let _TextDecoder = TextDecoder;
  let self3 = this;
  let self4 = this;
  decoder = new TextDecoder();
}
let c92 = 0;
try {
  decoder.decode(_Uint8Array3, { stream: true });
  c92 = 1;
} catch (err) {
}
function dutf8(subarray) {
  let str = "";
  let num = 0;
  const sum = num + 1;
  const sum1 = (tmp2 > 127) + (tmp2 > 223) + (tmp2 > 239);
  while (sum + sum1 <= subarray.length) {
    if (sum1) {
      if (3 === sum1) {
        let sum2 = sum + 1;
        let sum3 = sum2 + 1;
        num = sum3 + 1;
        let diff = ((15 & tmp2) << 18 | (63 & subarray[sum]) << 12 | (63 & subarray[sum2]) << 6 | 63 & subarray[sum3]) - 65536;
        let _String3 = String;
        str = `${String.fromCharCode(55296 | tmp9 >> 10, 56320 | 1023 & tmp9)}`;
        continue;
      } else {
        let sum4;
        let fromCharCodeResult;
        let _String2 = String;
        if (1 & sum1) {
          sum4 = sum + 1;
          fromCharCodeResult = fromCharCode((31 & tmp2) << 6 | 63 & subarray[sum]);
        } else {
          let sum5 = sum + 1;
          sum4 = sum5 + 1;
          fromCharCodeResult = fromCharCode((15 & tmp2) << 12 | (63 & subarray[sum]) << 6 | 63 & subarray[sum5]);
        }
        str = str + fromCharCodeResult;
        num = sum4;
        continue;
      }
      continue;
    } else {
      let _String = String;
      str = str + String.fromCharCode(tmp2);
      num = sum;
      continue;
    }
    continue;
  }
  const obj = { s: str, r: null };
  if (typeof slc === "function") {
    let num2 = sum - 1;
    if (num2 < 0) {
      num2 = 0;
    }
    const self = this;
    const self2 = this;
    const obj2 = new Uint8Array(subarray.length - num2);
    const result = obj2.set(subarray.subarray(num2, length));
    obj.r = obj2;
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
let tmp31 = (() => {
  class DecodeUTF8 {
    constructor(arg0) {
      self = this;
      this.ondata = arg0;
      tmp = closure_1_92;
      if (tmp) {
        tmp3 = globalThis;
        _TextDecoder = TextDecoder;
        self2 = this;
        self3 = this;
        textDecoder = new TextDecoder();
        tmp5 = textDecoder;
        self.t = textDecoder;
      } else {
        tmp2 = closure_1_36;
        self.p = closure_1_36;
      }
      return;
    }
    push(arg0, arg1) {
      self = this;
      if (this.ondata) {
        tmp7 = arg0;
        tmp8 = arg1;
        tmp9 = arg1;
        if (self.t) {
          ({ t, ondata } = self);
          ondataResult = ondata(t.decode(arg0, { stream: true }), tmp9);
          if (tmp9) {
            t2 = self.t;
            if (t2.decode().length) {
              if (typeof closure_1_25 === "function") {
                tmp34 = globalThis;
                _Error10 = Error;
                tmp35 = closure_1_24;
                self10 = this;
                self11 = this;
                error = new Error(closure_1_24[8]);
                tmp37 = error;
                num5 = 8;
                error.code = 8;
                _Error11 = Error;
                if (Error.captureStackTrace) {
                  _Error12 = Error;
                  captureStackTraceResult = Error.captureStackTrace(error, tmp33);
                }
                throw error;
              } else {
                str4 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              tmp31 = null;
              self.t = null;
              tmp32 = null;
            }
          }
          return;
        } else if (self.p) {
          tmp16 = closure_1_1;
          self6 = this;
          self7 = this;
          obj = new closure_1_1(self.p.length + arg0.length);
          tmp17 = obj;
          result = obj.set(self.p);
          result1 = obj.set(arg0, self.p.length);
          tmp20 = closure_1_93;
          num3 = 0;
          tmp21 = closure_1_93(obj);
          ({ r, s } = tmp21);
          if (tmp9) {
            if (r.length) {
              if (typeof closure_1_25 === "function") {
                tmp25 = globalThis;
                _Error7 = Error;
                tmp26 = closure_1_24;
                self8 = this;
                self9 = this;
                error1 = new Error(closure_1_24[8]);
                tmp28 = error1;
                num4 = 8;
                error1.code = 8;
                _Error8 = Error;
                if (Error.captureStackTrace) {
                  _Error9 = Error;
                  captureStackTraceResult1 = Error.captureStackTrace(error1, tmp24);
                }
                throw error1;
              } else {
                str3 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              tmp22 = null;
              self.p = null;
            }
          } else {
            self.p = r;
          }
          ondataResult1 = self.ondata(s, tmp9);
          return;
        } else if (typeof closure_1_25 === "function") {
          tmp11 = globalThis;
          _Error4 = Error;
          tmp12 = closure_1_24;
          self4 = this;
          self5 = this;
          error2 = new Error(closure_1_24[4]);
          tmp14 = error2;
          num2 = 4;
          error2.code = 4;
          _Error5 = Error;
          if (Error.captureStackTrace) {
            _Error6 = Error;
            captureStackTraceResult2 = Error.captureStackTrace(error2, tmp10);
          }
          throw error2;
        } else {
          str2 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      } else if (typeof closure_1_25 === "function") {
        tmp2 = globalThis;
        _Error = Error;
        tmp3 = closure_1_24;
        self2 = this;
        self3 = this;
        error3 = new Error(closure_1_24[5]);
        tmp5 = error3;
        num = 5;
        error3.code = 5;
        _Error2 = Error;
        if (Error.captureStackTrace) {
          _Error3 = Error;
          captureStackTraceResult3 = Error.captureStackTrace(error3, tmp);
        }
        throw error3;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  return DecodeUTF8;
})();
function dbf(arg0) {

}
function slzh(arg0, arg1) {
  const sum = arg1 + 26;
  if (typeof b2 === "function") {
    const sum1 = arg1 + 28;
    if (typeof tmp2 === "function") {
      return tmp + (arg0[sum] | arg0[sum + 1] << 8) + (arg0[sum1] | arg0[sum1 + 1] << 8);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function zh(subarray, tmp2Result6, arg2) {
  const sum = tmp2Result6 + 28;
  if (typeof b2 === "function") {
    const sum1 = tmp2Result6 + 8;
    const tmp4 = subarray[sum] | subarray[sum + 1] << 8;
    if (typeof b2 === "function") {
      const sum2 = tmp2Result6 + 20;
      if (typeof b4 === "function") {
        let items1;
        const sum3 = tmp8 + tmp4;
        const tmp13 = (subarray[sum2] | subarray[sum2 + 1] << 8 | subarray[sum2 + 2] << 16 | subarray[sum2 + 3] << 24) >>> 0;
        if (arg2) {
          if (4294967295 === tmp13) {
            items1 = z64e(subarray, sum3);
          }
          const sum4 = tmp2Result6 + 10;
          if (typeof b2 === "function") {
            items = [subarray[sum4] | subarray[sum4 + 1] << 8, tmp17, tmp18, tmp7, , ];
            const sum5 = tmp2Result6 + 30;
            if (typeof b2 === "function") {
              const sum6 = tmp2Result6 + 32;
              if (typeof b2 === "function") {
                items[4] = sum3 + (subarray[sum5] | subarray[sum5 + 1] << 8) + (subarray[sum6] | subarray[sum6 + 1] << 8);
                items[5] = tmp19;
                return items;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        items1 = [tmp13, , ];
        const sum7 = tmp2Result6 + 24;
        if (typeof b4 === "function") {
          items1[1] = (subarray[sum7] | subarray[sum7 + 1] << 8 | subarray[sum7 + 2] << 16 | subarray[sum7 + 3] << 24) >>> 0;
          const sum8 = tmp2Result6 + 42;
          if (typeof b4 === "function") {
            items1[2] = (subarray[sum8] | subarray[sum8 + 1] << 8 | subarray[sum8 + 2] << 16 | subarray[sum8 + 3] << 24) >>> 0;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function z64e(subarray, sum3) {
  if (typeof b2 === "function") {
    let tmp3 = sum3;
    let tmp4 = sum3;
    if (1 !== (subarray[sum3] | subarray[sum3 + 1] << 8)) {
      while (typeof b2 === "function") {
        let sum = tmp3 + 2;
        if (typeof tmp5 === "function") {
          let sum1 = tmp3 + (4 + (subarray[sum] | subarray[sum + 1] << 8));
          tmp3 = sum1;
          tmp4 = sum1;
        } else {
          let str3 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      throw new TypeError("Trying to call a non-function");
    }
    if (typeof b8 === "function") {
      if (typeof b4 === "function") {
        const sum2 = tmp4 + 12;
        if (typeof b4 === "function") {
          sum3 = sum2 + 4;
          items = [((subarray[sum2] | subarray[sum2 + 1] << 8 | subarray[sum2 + 2] << 16 | tmp12) >>> 0) + 4294967296 * ((subarray[sum3] | subarray[sum3 + 1] << 8 | subarray[sum3 + 2] << 16 | subarray[sum3 + 3] << 24) >>> 0), , ];
          if (typeof b8 === "function") {
            if (typeof b4 === "function") {
              const sum4 = tmp4 + 4;
              if (typeof b4 === "function") {
                const sum5 = sum4 + 4;
                items[1] = ((subarray[sum4] | subarray[sum4 + 1] << 8 | subarray[sum4 + 2] << 16 | tmp15) >>> 0) + 4294967296 * ((subarray[sum5] | subarray[sum5 + 1] << 8 | subarray[sum5 + 2] << 16 | subarray[sum5 + 3] << 24) >>> 0);
                if (typeof b8 === "function") {
                  if (typeof b4 === "function") {
                    const sum6 = tmp4 + 20;
                    if (typeof b4 === "function") {
                      const sum7 = sum6 + 4;
                      items[2] = ((subarray[sum6] | subarray[sum6 + 1] << 8 | subarray[sum6 + 2] << 16 | tmp18) >>> 0) + 4294967296 * ((subarray[sum7] | subarray[sum7 + 1] << 8 | subarray[sum7 + 2] << 16 | subarray[sum7 + 3] << 24) >>> 0);
                      return items;
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function exfl(extra) {
  let num = 0;
  if (extra) {
    let num4 = 0;
    num = 0;
    const keys = Object.keys();
    if (keys !== undefined) {
      num = num4;
      while (keys[tmp] !== undefined) {
        let length = extra[tmp5].length;
        if (length > 65535) {
          if (typeof err === "function") {
            let tmp7 = globalThis;
            let _Error = Error;
            let self = this;
            let self2 = this;
            let error = new Error(items[9]);
            error.code = 9;
            let _Error2 = Error;
            if (Error.captureStackTrace) {
              let _Error3 = Error;
              let captureStackTraceResult = Error.captureStackTrace(error, tmp6);
            }
            throw error;
          } else {
            let str = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          num4 = num4 + (length + 4);
          continue;
        }
      }
    }
  }
  return num;
}
function wzh(set, o, array, f, u, length, arg6, m) {
  const extra = array.extra;
  if (typeof exfl === "function") {
    let num2 = 0;
    if (extra) {
      let num5 = 0;
      num2 = 0;
      const keys = Object.keys();
      if (keys !== undefined) {
        num2 = num5;
        while (keys[tmp] !== undefined) {
          let length2 = extra[tmp6].length;
          if (length2 > 65535) {
            if (typeof err === "function") {
              let tmp8 = globalThis;
              let _Error = Error;
              let self = this;
              let self2 = this;
              let error = new Error(items[9]);
              error.code = 9;
              let _Error2 = Error;
              if (Error.captureStackTrace) {
                let _Error3 = Error;
                let captureStackTraceResult = Error.captureStackTrace(error, tmp7);
              }
              throw error;
            } else {
              let str2 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            num5 = num5 + (length2 + 4);
            continue;
          }
        }
      }
    }
    let tmp13 = arg6;
    let num7 = 67324752;
    if (null != arg6) {
      num7 = 33639248;
    }
    if (typeof wbytes === "function") {
      let mtime;
      let sum = o;
      while (num7) {
        set[sum] = num7;
        num7 = num7 >>> 8;
        sum = sum + 1;
      }
      const sum1 = o + 4;
      let sum2 = sum1;
      if (null != tmp13) {
        set[+sum1] = 20;
        sum2 = tmp22 + 1;
        set[+(+sum1 + 1)] = array.os;
      }
      set[sum2] = 20;
      let num14 = length < 0;
      const tmp25 = array.flag << 1;
      if (num14) {
        num14 = 8;
      }
      let num15 = u;
      set[+sum2 + 2] = tmp25 | num14;
      if (u) {
        num15 = 8;
      }
      set[+(+sum2 + 2 + 1)] = num15;
      const tmp27 = +(+(+sum2 + 2 + 1) + 1);
      set[tmp27] = 255 & array.compression;
      set[+tmp27 + 1] = array.compression >> 8;
      const _Date = Date;
      if (null == array.mtime) {
        const _Date2 = Date;
        mtime = Date.now();
      } else {
        mtime = array.mtime;
      }
      const self3 = this;
      const self4 = this;
      const _Date1 = new _Date(mtime);
      const diff = _Date1.getFullYear() - 1980;
      const tmp33 = diff < 0 || diff > 119;
      if (tmp33) {
        if (typeof err === "function") {
          const _Error4 = Error;
          const self5 = this;
          const self6 = this;
          const error1 = new Error(items[10]);
          error1.code = 10;
          const _Error5 = Error;
          if (Error.captureStackTrace) {
            const _Error6 = Error;
            Error.captureStackTrace(error1, tmp72);
          }
          throw error1;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        const sum3 = _Date1.getMonth() + 1;
        const tmp35 = _Date1.getDate() << 16;
        const tmp36 = _Date1.getHours() << 11;
        const tmp37 = _Date1.getMinutes() << 5;
        if (typeof wbytes === "function") {
          const sum4 = tmp28 + 1;
          let tmp40 = diff << 25 | sum3 << 21 | tmp35 | tmp36 | tmp37 | tmp38;
          let sum5 = sum4;
          while (tmp40) {
            set[sum5] = tmp40;
            tmp40 = tmp40 >>> 8;
            sum5 = sum5 + 1;
          }
          const sum6 = sum4 + 4;
          if (-1 != length) {
            crc = array.crc;
            if (typeof wbytes === "function") {
              let sum7 = sum6;
              while (crc) {
                set[sum7] = crc;
                crc = crc >>> 8;
                sum7 = sum7 + 1;
              }
              let diff1 = length;
              if (length < 0) {
                diff1 = -length - 2;
              }
              if (typeof wbytes === "function") {
                let sum8 = sum6 + 4;
                while (diff1) {
                  set[sum8] = diff1;
                  diff1 = diff1 >>> 8;
                  sum8 = sum8 + 1;
                }
                size = array.size;
                if (typeof wbytes === "function") {
                  let sum9 = sum6 + 8;
                  while (size) {
                    set[sum9] = size;
                    size = size >>> 8;
                    sum9 = sum9 + 1;
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          if (typeof wbytes === "function") {
            let sum10 = sum6 + 12;
            let tmp48 = length;
            while (tmp48) {
              set[sum10] = tmp48;
              tmp48 = tmp48 >>> 8;
              sum10 = sum10 + 1;
            }
            if (typeof wbytes === "function") {
              let sum11 = sum6 + 14;
              let tmp50 = num2;
              while (tmp50) {
                set[sum11] = tmp50;
                tmp50 = tmp50 >>> 8;
                sum11 = sum11 + 1;
              }
              const sum12 = sum6 + 16;
              let sum16 = sum12;
              if (null != tmp13) {
                if (typeof wbytes === "function") {
                  let sum13 = sum12;
                  let tmp54 = tmp2;
                  while (tmp54) {
                    set[sum13] = tmp54;
                    tmp54 = tmp54 >>> 8;
                    sum13 = sum13 + 1;
                  }
                  let attrs = array.attrs;
                  if (typeof wbytes === "function") {
                    let sum14 = sum12 + 6;
                    while (attrs) {
                      set[sum14] = attrs;
                      attrs = attrs >>> 8;
                      sum14 = sum14 + 1;
                    }
                    if (typeof wbytes === "function") {
                      let sum15 = sum12 + 10;
                      while (tmp13) {
                        set[sum15] = tmp13;
                        tmp13 = tmp13 >>> 8;
                        sum15 = sum15 + 1;
                      }
                      sum16 = sum12 + 14;
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              const result = set.set(f, sum16);
              const sum17 = sum16 + length;
              let tmp59 = sum17;
              if (num2) {
                let sum20 = sum17;
                tmp59 = sum17;
                const keys1 = Object.keys();
                if (keys1 !== undefined) {
                  tmp59 = sum20;
                  while (keys1[sum12] !== undefined) {
                    let arr = extra[tmp64];
                    let length3 = arr.length;
                    let tmp66 = +tmp64;
                    if (typeof wbytes === "function") {
                      let sum18 = sum20;
                      while (tmp66) {
                        set[sum18] = tmp66;
                        tmp66 = tmp66 >>> 8;
                        sum18 = sum18 + 1;
                      }
                      if (typeof tmp79 === "function") {
                        let sum19 = sum20 + 2;
                        let tmp68 = length3;
                        while (tmp68) {
                          set[sum19] = tmp68;
                          tmp68 = tmp68 >>> 8;
                          sum19 = sum19 + 1;
                        }
                        let result1 = set.set(arr, sum20 + 4);
                        sum20 = sum20 + (4 + length3);
                        continue;
                      } else {
                        let str14 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      let str13 = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                  }
                }
              }
              let sum21 = tmp59;
              if (m && m.length) {
                const result2 = set.set(m, tmp59);
                sum21 = tmp59 + tmp2;
              }
              return sum21;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function wzf(arg0, arg1, length, arg3, arg4) {
  let num = 101010256;
  let sum = arg1;
  if (typeof wbytes === "function") {
    do {
      arg0[sum] = num;
      num = num >>> 8;
      sum = sum + 1;
    } while (num);
    if (typeof wbytes === "function") {
      let tmp3 = length;
      let sum1 = arg1 + 8;
      let tmp5 = length;
      while (tmp5) {
        arg0[sum1] = tmp5;
        tmp5 = tmp5 >>> 8;
        sum1 = sum1 + 1;
      }
      if (typeof wbytes === "function") {
        let sum2 = arg1 + 10;
        while (tmp3) {
          arg0[sum2] = tmp3;
          tmp3 = tmp3 >>> 8;
          sum2 = sum2 + 1;
        }
        if (typeof wbytes === "function") {
          let tmp7 = arg3;
          let sum3 = arg1 + 12;
          if (arg3) {
            do {
              arg0[sum3] = tmp7;
              tmp7 = tmp7 >>> 8;
              sum3 = sum3 + 1;
            } while (tmp7);
          }
          if (typeof wbytes === "function") {
            let tmp9 = arg4;
            let sum4 = arg1 + 16;
            if (arg4) {
              do {
                arg0[sum4] = tmp9;
                tmp9 = tmp9 >>> 8;
                sum4 = sum4 + 1;
              } while (tmp9);
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
let tmp32 = (() => {
  class EncodeUTF8 {
    constructor(arg0) {
      this.ondata = arg0;
      return;
    }
    push(arg0, arg1) {
      self = this;
      if (this.ondata) {
        if (self.d) {
          if (typeof closure_1_25 === "function") {
            tmp12 = globalThis;
            _Error4 = Error;
            tmp13 = closure_1_24;
            self4 = this;
            self5 = this;
            error = new Error(closure_1_24[4]);
            tmp15 = error;
            num2 = 4;
            error.code = 4;
            _Error5 = Error;
            if (Error.captureStackTrace) {
              _Error6 = Error;
              captureStackTraceResult = Error.captureStackTrace(error, tmp11);
            }
            throw error;
          } else {
            str2 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          tmp7 = arg0;
          flag = arg1;
          tmp8 = closure_1_94;
          ondata = self.ondata;
          tmp9 = closure_1_94(arg0);
          if (!arg1) {
            flag = false;
          }
          self.d = flag;
          ondataResult = ondata(tmp9, flag);
          return;
        }
      } else if (typeof closure_1_25 === "function") {
        tmp2 = globalThis;
        _Error = Error;
        tmp3 = closure_1_24;
        self2 = this;
        self3 = this;
        error1 = new Error(closure_1_24[5]);
        tmp5 = error1;
        num = 5;
        error1.code = 5;
        _Error2 = Error;
        if (Error.captureStackTrace) {
          _Error3 = Error;
          captureStackTraceResult1 = Error.captureStackTrace(error1, tmp);
        }
        throw error1;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  return EncodeUTF8;
})();
let tmp33 = (() => {
  class ZipPassThrough {
    constructor(arg0) {
      obj = { filename: arg0 };
      if (typeof closure_39 === "function") {
        num = -1;
        c0 = -1;
        obj1 = { p: null, d: null };
        obj1.p = function p() { /* body not rendered: F103366 */ };
        obj1.d = function d() { /* body not rendered: F103367 */ };
        obj.c = obj1;
        num2 = 0;
        obj.size = 0;
        obj.compression = 0;
        return;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    process(arg0, arg1) {
      ondataResult = this.ondata(null, arg0, arg1);
      return;
    }
    push(arg0, arg1) {
      self = this;
      if (this.ondata) {
        tmp7 = arg0;
        flag = arg1;
        c = self.c;
        pResult = c.p(arg0);
        self.size = self.size + arg0.length;
        if (arg1) {
          c2 = self.c;
          self.crc = c2.d();
        }
        _process = self.process;
        if (!flag) {
          flag = false;
        }
        _processResult = _process(arg0, flag);
        return;
      } else if (typeof closure_1_25 === "function") {
        tmp2 = globalThis;
        _Error = Error;
        tmp3 = closure_1_24;
        self2 = this;
        self3 = this;
        error = new Error(closure_1_24[5]);
        tmp5 = error;
        num = 5;
        error.code = 5;
        _Error2 = Error;
        if (Error.captureStackTrace) {
          _Error3 = Error;
          captureStackTraceResult = Error.captureStackTrace(error, tmp);
        }
        throw error;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  return ZipPassThrough;
})();
let closure_103 = tmp33;
let tmp34 = (() => {
  class ZipDeflate {
    constructor(arg0, arg1) {
      self = this;
      obj = arg1;
      self = this;
      if (!arg1) {
        obj = {};
      }
      callResult = closure_1_103.call(self, arg0);
      tmp = new closure_1_68(obj, function() { /* body not rendered: F127728 */ });
      self.d = tmp;
      self.compression = 8;
      level = obj.level;
      if (typeof closure_1_96 === "function") {
        num = 1;
        num2 = 3;
        if (1 != level) {
          num3 = 6;
          num4 = 2;
          if (level >= 6) {
            num5 = 9;
            num6 = 0;
            if (9 == level) {
              num6 = 1;
            }
            num4 = num6;
          }
          num2 = num4;
        }
        self.flag = num2;
        return;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    process(arg0, arg1) {
      self = this;
      try {
        tmp = arg0;
        d = self.d;
        arr1 = d.push(arg0, arg1);
      } catch (tmp3) {
        tmp4 = null;
        ondataResult = self.ondata(tmp3, null, arg1);
      }
      return;
    }
    push(arg0, arg1) {
      push = closure_1_103.prototype.push;
      callResult = push.call(this, arg0, arg1);
      return;
    }
  }
  return ZipDeflate;
})();
let tmp35 = (() => {
  class AsyncZipDeflate {
    constructor(arg0, arg1) {
      self = this;
      obj = arg1;
      self = this;
      if (!arg1) {
        obj = {};
      }
      callResult = closure_1_103.call(self, arg0);
      tmp = new closure_1_69(obj, function() { /* body not rendered: F127729 */ });
      self.d = tmp;
      self.compression = 8;
      level = obj.level;
      if (typeof closure_1_96 === "function") {
        num = 1;
        num2 = 3;
        if (1 != level) {
          num3 = 6;
          num4 = 2;
          if (level >= 6) {
            num5 = 9;
            num6 = 0;
            if (9 == level) {
              num6 = 1;
            }
            num4 = num6;
          }
          num2 = num4;
        }
        self.flag = num2;
        self.terminate = self.d.terminate;
        return;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    process(arg0, arg1) {
      d = this.d;
      arr1 = d.push(arg0, arg1);
      return;
    }
    push(arg0, arg1) {
      push = closure_1_103.prototype.push;
      callResult = push.call(this, arg0, arg1);
      return;
    }
  }
  return AsyncZipDeflate;
})();
let tmp36 = (() => {
  class Zip {
    constructor(arg0) {
      return;
    }
    add(arg0) {
      self = this;
      closure_0 = arg0;
      self = this;
      if (this.ondata) {
        num2 = 2;
        if (2 & self.d) {
          num15 = 1;
          if (typeof closure_25 === "function") {
            num16 = 8;
            num17 = 4;
            sum = 4 + 8 * tmp52;
            tmp54 = globalThis;
            _Error10 = Error;
            tmp55 = closure_24;
            self10 = this;
            self11 = this;
            error = new Error(closure_24[sum]);
            tmp57 = error;
            error.code = sum;
            _Error11 = Error;
            if (Error.captureStackTrace) {
              _Error12 = Error;
              captureStackTraceResult = Error.captureStackTrace(error, tmp51);
            }
            flag2 = false;
            tmp59 = null;
            tmp50Result = tmp50(error, null, false);
          } else {
            str6 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          tmp8 = closure_94;
          arr = closure_94(arg0.filename);
          length = arr.length;
          comment = arg0.comment;
          arr3 = comment && tmp8(comment);
          tmp9 = length != arg0.filename.length;
          if (!tmp9) {
            tmp10 = arr3 && comment.length != arr3.length;
            tmp9 = tmp10;
          }
          tmp11 = closure_100;
          extra = arg0.extra;
          if (typeof closure_100 === "function") {
            num3 = 0;
            num4 = 0;
            if (extra) {
              tmp12 = extra;
              num5 = 4;
              num6 = 65535;
              num7 = 0;
              num4 = 0;
              keys = Object.keys();
              if (keys !== undefined) {
                tmp14 = num7;
                num4 = num7;
                tmp15 = keys[tmp];
                while (tmp15 !== undefined) {
                  tmp61 = tmp15;
                  length2 = extra[tmp15].length;
                  if (length2 > 65535) {
                    if (typeof closure_25 === "function") {
                      tmp17 = globalThis;
                      _Error4 = Error;
                      tmp18 = closure_24;
                      self4 = this;
                      self5 = this;
                      error1 = new Error(closure_24[9]);
                      tmp20 = error1;
                      num8 = 9;
                      error1.code = 9;
                      _Error5 = Error;
                      if (Error.captureStackTrace) {
                        _Error6 = Error;
                        captureStackTraceResult1 = Error.captureStackTrace(error1, tmp16);
                      }
                      throw error1;
                    } else {
                      str3 = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    num7 = num7 + (length2 + 4);
                    continue;
                  }
                }
              }
            }
            num9 = 30;
            sum1 = length + num4 + 30;
            closure_2 = sum1;
            num10 = 65535;
            if (length > 65535) {
              if (typeof closure_25 === "function") {
                tmp25 = globalThis;
                _Error7 = Error;
                tmp26 = closure_24;
                self6 = this;
                self7 = this;
                error2 = new Error(closure_24[11]);
                tmp28 = error2;
                num11 = 11;
                error2.code = 11;
                _Error8 = Error;
                if (Error.captureStackTrace) {
                  _Error9 = Error;
                  captureStackTraceResult2 = Error.captureStackTrace(error2, tmp24);
                }
                flag = false;
                tmp30 = null;
                tmp23Result = tmp23(error2, null, false);
              } else {
                str4 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            }
            tmp32 = self;
            self8 = this;
            self9 = this;
            tmp33 = sum1;
            tmp34 = new self(sum1);
            tmp35 = tmp34;
            tmp36 = closure_101;
            num12 = -1;
            num13 = 0;
            tmp37 = tmp34;
            num14 = 0;
            tmp38 = arg0;
            tmp39 = arr;
            tmp40 = tmp9;
            tmp41 = closure_101(tmp34, 0, arg0, arr, tmp9, -1);
            items = [];
            items[0] = tmp34;
            closure_3 = items;
            pAll_1 = function pAll_1() { /* body not rendered: F127730 */ };
            c5 = self.d;
            self.d = 0;
            length = self.u.length;
            tmp42 = closure_42;
            obj = { f: null, u: null, o: null, t: null, r: null };
            obj.f = arr;
            obj.u = tmp9;
            obj.o = arr3;
            obj.t = function t() { /* body not rendered: F127731 */ };
            obj.r = function r() { /* body not rendered: F127732 */ };
            if (typeof closure_42 === "function") {
              obj1 = {};
              tmp43 = arg0;
              keys1 = Object.keys();
              if (keys1 !== undefined) {
                tmp45 = keys1[4];
                while (tmp45 !== undefined) {
                  tmp62 = tmp45;
                  obj1[tmp45] = arg0[tmp45];
                  continue;
                }
              }
              tmp46 = obj;
              keys2 = Object.keys();
              if (keys2 !== undefined) {
                tmp48 = keys2[4];
                while (tmp48 !== undefined) {
                  tmp63 = tmp48;
                  obj1[tmp48] = obj[tmp48];
                  continue;
                }
              }
              closure_7 = obj1;
              closure_8 = 0;
              arg0.ondata = function ondata() { /* body not rendered: F127733 */ };
              u = self.u;
              arr1 = u.push(obj1);
            } else {
              str5 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            str2 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
        return;
      } else if (typeof closure_25 === "function") {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = closure_24;
        self2 = this;
        self3 = this;
        error3 = new Error(closure_24[5]);
        tmp6 = error3;
        num = 5;
        error3.code = 5;
        _Error2 = Error;
        if (Error.captureStackTrace) {
          _Error3 = Error;
          captureStackTraceResult3 = Error.captureStackTrace(error3, tmp2);
        }
        throw error3;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    end() {
      self = this;
      self = this;
      if (2 & this.d) {
        num2 = 1;
        if (typeof closure_1_25 === "function") {
          num3 = 8;
          num4 = 4;
          sum = 4 + 8 * tmp5;
          tmp7 = globalThis;
          _Error = Error;
          tmp8 = closure_1_24;
          self2 = this;
          self3 = this;
          error = new Error(closure_1_24[sum]);
          tmp10 = error;
          error.code = sum;
          _Error2 = Error;
          if (Error.captureStackTrace) {
            _Error3 = Error;
            captureStackTraceResult = Error.captureStackTrace(error, tmp4);
          }
          flag = true;
          tmp12 = null;
          tmp3Result = tmp3(error, null, true);
        } else {
          str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        if (self.d) {
          eResult = self.e();
        } else {
          u = self.u;
          obj = { r: null, t: null };
          obj.r = function r() { /* body not rendered: F127734 */ };
          obj.t = function t() { /* body not rendered: F127735 */ };
          arr1 = u.push(obj);
        }
        num = 3;
        self.d = 3;
      }
      return;
    }
    e() {
      self = this;
      u = this.u;
      num = 0;
      num2 = 0;
      num3 = 0;
      if (0 < u.length) {
        tmp3 = u[num];
        tmp5 = closure_1_100;
        extra = tmp3.extra;
        tmp6 = num;
        tmp7 = num2;
        while (typeof closure_1_100 === "function") {
          num4 = 0;
          if (extra) {
            tmp8 = extra;
            num5 = 0;
            num4 = 0;
            keys = Object.keys();
            if (keys !== undefined) {
              tmp10 = num5;
              num4 = num5;
              tmp11 = keys[tmp];
              while (tmp11 !== undefined) {
                tmp44 = tmp11;
                length = extra[tmp11].length;
                if (length > 65535) {
                  if (typeof closure_1_25 === "function") {
                    tmp13 = globalThis;
                    _Error = Error;
                    tmp14 = closure_1_24;
                    self2 = this;
                    self3 = this;
                    error = new Error(closure_1_24[9]);
                    tmp16 = error;
                    num6 = 9;
                    error.code = 9;
                    _Error2 = Error;
                    if (Error.captureStackTrace) {
                      _Error3 = Error;
                      captureStackTraceResult = Error.captureStackTrace(error, tmp12);
                    }
                    throw error;
                  } else {
                    str2 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  num5 = num5 + (length + 4);
                  continue;
                }
              }
            }
          }
          num7 = 0;
          if (tmp3.o) {
            num7 = tmp3.o.length;
          }
          num2 = num2 + (tmp4 + num4 + num7);
          num = num + 1;
          num3 = num2;
        }
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
      tmp18 = new closure_1_1(num3 + 22);
      tmp19 = tmp18;
      u1 = self.u;
      num8 = 0;
      num9 = 0;
      num10 = 0;
      num11 = 0;
      num12 = 0;
      if (0 < u1.length) {
        tmp20 = u1[num8];
        tmp21 = closure_1_101;
        num13 = 0;
        tmp22 = tmp18;
        tmp23 = num10;
        tmp24 = tmp20;
        tmp25 = num9;
        tmp26 = closure_1_101(tmp19, num10, tmp20, tmp20.f, tmp20.u, -tmp20.c - 2, num9, tmp20.o);
        tmp28 = closure_1_100;
        extra2 = tmp20.extra;
        tmp29 = num8;
        tmp30 = num9;
        tmp31 = num10;
        while (typeof closure_1_100 === "function") {
          num14 = 0;
          if (extra2) {
            tmp32 = extra2;
            num15 = 0;
            num14 = 0;
            keys1 = Object.keys();
            if (keys1 !== undefined) {
              tmp34 = num15;
              num14 = num15;
              tmp35 = keys1[tmp2];
              while (tmp35 !== undefined) {
                tmp45 = tmp35;
                length2 = extra2[tmp35].length;
                if (length2 > 65535) {
                  if (typeof closure_1_25 === "function") {
                    tmp37 = globalThis;
                    _Error4 = Error;
                    tmp38 = closure_1_24;
                    self4 = this;
                    self5 = this;
                    error1 = new Error(closure_1_24[9]);
                    tmp40 = error1;
                    num16 = 9;
                    error1.code = 9;
                    _Error5 = Error;
                    if (Error.captureStackTrace) {
                      _Error6 = Error;
                      captureStackTraceResult1 = Error.captureStackTrace(error1, tmp36);
                    }
                    throw error1;
                  } else {
                    str4 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  num15 = num15 + (length2 + 4);
                  continue;
                }
              }
            }
          }
          num17 = 0;
          if (tmp20.o) {
            num17 = tmp20.o.length;
          }
          num10 = num10 + (tmp27 + num14 + num17);
          num9 = num9 + tmp20.b;
          num8 = num8 + 1;
          num11 = num9;
          num12 = num10;
        }
        str3 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
      tmp42 = closure_1_102(tmp19, num12, self.u.length, num3, num11);
      ondataResult = self.ondata(null, tmp18, true);
      self.d = 2;
      return;
    }
    terminate() {
      u = this.u;
      num = 0;
      if (0 < u.length) {
        do {
          obj = u[num];
          tResult = obj.t();
          num = num + 1;
          length = u.length;
        } while (num < length);
      }
      this.d = 2;
      return;
    }
  }
  return Zip;
})();
let tmp37 = (() => {
  class UnzipPassThrough {
    constructor() {
      return;
    }
    push(arg0, arg1) {
      ondataResult = this.ondata(null, arg0, arg1);
      return;
    }
  }
  UnzipPassThrough.compression = 0;
  return UnzipPassThrough;
})();
let closure_104 = tmp37;
let tmp38 = (() => {
  class UnzipInflate {
    constructor() {
      self = this;
      tmp = new closure_1_72(function() { /* body not rendered: F127736 */ });
      this.i = tmp;
      return;
    }
    push(arg0, arg1) {
      self = this;
      try {
        tmp = arg0;
        i = self.i;
        arr1 = i.push(arg0, arg1);
      } catch (tmp3) {
        tmp4 = null;
        ondataResult = self.ondata(tmp3, null, arg1);
      }
      return;
    }
  }
  UnzipInflate.compression = 8;
  return UnzipInflate;
})();
let tmp39 = (() => {
  class AsyncUnzipInflate {
    constructor(arg0, arg1) {
      self = this;
      self = this;
      if (arg1 < 320000) {
        tmp4 = closure_1_72;
        self4 = this;
        self5 = this;
        tmp5 = new closure_1_72(function() { /* body not rendered: F127737 */ });
        tmp6 = tmp5;
        self.i = tmp5;
      } else {
        tmp = closure_1_73;
        self2 = this;
        self3 = this;
        tmp2 = new closure_1_73(function() { /* body not rendered: F127738 */ });
        tmp3 = tmp2;
        self.i = tmp2;
        self.terminate = self.i.terminate;
      }
      return;
    }
    push(arg0, arg1) {
      tmp = arg0;
      if (this.i.terminate) {
        tmp2 = closure_1_23;
        if (typeof closure_1_23 === "function") {
          length = arg0.length;
          tmp3 = closure_1_1;
          num = 0;
          self = this;
          self2 = this;
          obj = new closure_1_1(length);
          tmp4 = obj;
          result = obj.set(arg0.subarray(0, length));
          tmp = obj;
        } else {
          str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      i = this.i;
      arr1 = i.push(tmp, arg1);
      return;
    }
  }
  AsyncUnzipInflate.compression = 8;
  return AsyncUnzipInflate;
})();
let tmp40 = (() => {
  class Unzip {
    constructor(arg0) {
      obj = { 0: closure_1_104 };
      return;
    }
    push(arg0, arg1) {
      self = this;
      self = this;
      if (this.onfile) {
        if (self.p) {
          tmp13 = arg0;
          tmp14 = arg1;
          num3 = 0;
          if (self.c > 0) {
            tmp63 = globalThis;
            _Math = Math;
            bound = Math.min(self.c, arg0.length);
            subarrayResult = arg0.subarray(0, bound);
            self.c = self.c - bound;
            if (self.d) {
              d = self.d;
              arr1 = d.push(subarrayResult, !self.c);
            } else {
              first = self.k[0];
              arr10 = first.push(subarrayResult);
            }
            subarrayResult1 = arg0.subarray(bound);
            if (subarrayResult1.length) {
              return self.push(subarrayResult1, arg1);
            }
          } else {
            obj = arg0;
            p = arg0;
            if (self.p.length) {
              if (arg0.length) {
                tmp15 = closure_1;
                self6 = this;
                self7 = this;
                obj2 = new closure_1(self.p.length + arg0.length);
                tmp16 = obj2;
                result = obj2.set(self.p);
                result1 = obj2.set(arg0, self.p.length);
                obj = obj2;
                p = obj2;
              } else {
                p = self.p;
              }
            }
            length = p.length;
            c = self.c;
            arr2 = c && self.d;
            num4 = 4;
            num5 = 1;
            str = "break";
            num6 = 2;
            num7 = -1;
            num8 = 2048;
            num9 = 8;
            num10 = 22;
            num11 = 16;
            num12 = 3;
            num13 = 24;
            num14 = 30;
            num15 = 4294967295;
            num16 = 18;
            num17 = 28;
            num18 = 26;
            num19 = 6;
            tmp19 = null;
            num20 = 12;
            num21 = -2;
            num22 = 33639248;
            num23 = 134695760;
            num24 = 67324752;
            num25 = 0;
            num26 = 0;
            num27 = 0;
            num28 = 0;
            if (0 < length - 4) {
              tmp22 = closure_58;
              tmp23 = tmp20;
              tmp24 = num25;
              tmp25 = num26;
              while (typeof closure_58 === "function") {
                tmp26 = (obj[num25] | obj[num25 + 1] << 8 | obj[num25 + 2] << 16 | obj[num25 + 3] << 24) >>> 0;
                if (67324752 === tmp26) {
                  self.d = null;
                  self.c = 0;
                  tmp30 = closure_57;
                  if (typeof closure_57 === "function") {
                    sum = num25 + 6;
                    tmp32 = obj[sum] | obj[sum + 1] << 8;
                    if (typeof tmp30 === "function") {
                      sum1 = num25 + 8;
                      tmp34 = obj[sum1] | obj[sum1 + 1] << 8;
                      closure_0 = tmp34;
                      if (typeof tmp30 === "function") {
                        sum2 = num25 + 26;
                        tmp36 = obj[sum2] | obj[sum2 + 1] << 8;
                        if (typeof tmp30 === "function") {
                          sum3 = num25 + 28;
                          tmp38 = obj[sum3] | obj[sum3 + 1] << 8;
                          sum4 = num25 + 30;
                          sum8 = num25;
                          num30 = 1;
                          if (length > sum4 + tmp36 + tmp38) {
                            items = [];
                            closure_1 = items;
                            k = self.k;
                            arr11 = k.unshift(items);
                            if (typeof tmp22 === "function") {
                              sum5 = num25 + 18;
                              num31 = (obj[sum5] | obj[sum5 + 1] << 8 | obj[sum5 + 2] << 16 | obj[sum5 + 3] << 24) >>> 0;
                              c3 = num31;
                              if (typeof tmp22 === "function") {
                                tmp44 = 8 & tmp32;
                                sum6 = num25 + 22;
                                tmp46 = (obj[sum6] | obj[sum6 + 1] << 8 | obj[sum6 + 2] << 16 | obj[sum6 + 3] << 24) >>> 0;
                                closure_4 = tmp46;
                                tmp47 = closure_95;
                                sum7 = num25 + (30 + tmp36);
                                tmp43 = 2048 & tmp32;
                                tmp49 = closure_95(obj.subarray(sum4, sum7), !tmp43);
                                closure_5 = tmp49;
                                if (4294967295 === num31) {
                                  if (tmp44) {
                                    items1 = [-2];
                                  } else {
                                    tmp51 = closure_99;
                                    items1 = closure_99(obj, sum7);
                                  }
                                  first1 = items1[0];
                                  c3 = first1;
                                  tmp53 = items1[1];
                                  closure_4 = tmp53;
                                  tmp50 = tmp53;
                                  num31 = first1;
                                } else {
                                  tmp50 = tmp46;
                                  if (tmp44) {
                                    c3 = -1;
                                    tmp50 = tmp46;
                                    num31 = -1;
                                  }
                                }
                                self.c = num31;
                                obj1 = { name: null, compression: null, start: null, terminate: null };
                                obj1.name = tmp49;
                                obj1.compression = tmp34;
                                obj1.start = function start() { /* body not rendered: F136951 */ };
                                obj1.terminate = function terminate() { /* body not rendered: F136952 */ };
                                closure_6 = obj1;
                                if (num31 >= 0) {
                                  obj1.size = num31;
                                  obj1.originalSize = tmp50;
                                }
                                sum8 = sum7 + tmp38;
                                onfileResult = self.onfile(obj1);
                                num30 = 2;
                              } else {
                                str11 = "Trying to call a non-function";
                                throw new TypeError("Trying to call a non-function");
                              }
                            } else {
                              str10 = "Trying to call a non-function";
                              throw new TypeError("Trying to call a non-function");
                            }
                          }
                          tmp28 = sum8;
                          num29 = num30;
                          sum9 = num25;
                          str2 = "break";
                        } else {
                          str9 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        str8 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      str7 = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    str6 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  sum9 = tmp20;
                  tmp28 = num25;
                  num29 = num26;
                  if (c) {
                    if (134695760 === tmp26) {
                      tmp29 = -2 == c && 8;
                      sum9 = num25 + (12 + tmp29);
                      self.c = 0;
                      tmp28 = sum9;
                      num29 = 3;
                      str2 = "break";
                    } else {
                      sum9 = tmp20;
                      tmp28 = num25;
                      num29 = num26;
                      if (33639248 === tmp26) {
                        sum9 = num25 - 4;
                        self.c = 0;
                        tmp28 = sum9;
                        num29 = 3;
                        str2 = "break";
                      }
                    }
                  }
                }
                tmp21 = sum9;
                num27 = tmp28;
                num28 = num29;
                if ("break" !== str2) {
                  num25 = tmp28 + 1;
                  tmp20 = sum9;
                  num26 = num29;
                  tmp21 = sum9;
                  num28 = num29;
                  num27 = num25;
                }
              }
              str5 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
            tmp55 = closure_36;
            self.p = closure_36;
            if (c < 0) {
              subarray = p.subarray;
              if (num28) {
                tmp57 = -2 == c && 8;
                tmp58 = closure_58;
                if (typeof closure_58 === "function") {
                  diff = tmp21 - 16;
                  tmp60 = (p[diff] | p[diff + 1] << 8 | p[diff + 2] << 16 | p[diff + 3] << 24) >>> 0;
                  num32 = 134695760 === tmp60;
                  if (134695760 === tmp60) {
                    num32 = 4;
                  }
                  subarrayResult2 = subarray(0, tmp21 - 12 - tmp57 - num32);
                } else {
                  str12 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                subarrayResult2 = subarray(0, num27);
              }
              if (arr2) {
                arr12 = arr2.push(subarrayResult2, num28);
              } else {
                arr6 = self.k[+2 === num28];
                arr13 = arr6.push(subarrayResult2);
              }
            }
            if (2 & num28) {
              return self.push(p.subarray(num27), arg1);
            } else {
              self.p = p.subarray(num27);
            }
          }
          if (arg1) {
            if (self.c) {
              if (typeof closure_25 === "function") {
                tmp70 = globalThis;
                _Error7 = Error;
                tmp71 = closure_24;
                self8 = this;
                self9 = this;
                error = new Error(closure_24[13]);
                tmp73 = error;
                num33 = 13;
                error.code = 13;
                _Error8 = Error;
                if (Error.captureStackTrace) {
                  _Error9 = Error;
                  captureStackTraceResult = Error.captureStackTrace(error, tmp69);
                }
                throw error;
              } else {
                str13 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              tmp68 = null;
              self.p = null;
            }
          }
          return;
        } else if (typeof closure_25 === "function") {
          tmp8 = globalThis;
          _Error4 = Error;
          tmp9 = closure_24;
          self4 = this;
          self5 = this;
          error1 = new Error(closure_24[4]);
          tmp11 = error1;
          num2 = 4;
          error1.code = 4;
          _Error5 = Error;
          if (Error.captureStackTrace) {
            _Error6 = Error;
            captureStackTraceResult1 = Error.captureStackTrace(error1, tmp7);
          }
          throw error1;
        } else {
          str4 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      } else if (typeof closure_25 === "function") {
        tmp2 = globalThis;
        _Error = Error;
        tmp3 = closure_24;
        self2 = this;
        self3 = this;
        error2 = new Error(closure_24[5]);
        tmp5 = error2;
        num = 5;
        error2.code = 5;
        _Error2 = Error;
        if (Error.captureStackTrace) {
          _Error3 = Error;
          captureStackTraceResult2 = Error.captureStackTrace(error2, tmp);
        }
        throw error2;
      } else {
        str3 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    register(arg0) {
      this.o[arg0.compression] = arg0;
      return;
    }
  }
  return Unzip;
})();
if (typeof queueMicrotask === "function") {
  let _queueMicrotask = queueMicrotask;
} else {
  const _setTimeout = setTimeout;
  _queueMicrotask = typeof setTimeout === "function" ? setTimeout : ((fn) => {
    fn();
  });
}
function gzip(buffer, arg1, arg2) {
  let tmp = arg2;
  let obj = arg1;
  if (!arg2) {
    obj = {};
    tmp = arg1;
  }
  if (typeof tmp !== "function") {
    if (typeof err === "function") {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error(items[7]);
      error.code = 7;
      const _Error2 = Error;
      if (Error.captureStackTrace) {
        const _Error3 = Error;
        Error.captureStackTrace(error, tmp7);
      }
      throw error;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    items = [
      bDflt,
      gze,
      () => {
          items = [gzipSync];
          return items;
        }
    ];
    if (typeof cbify === "function") {
      let items3;
      closure_0 = tmp;
      const tmp5 = wrkr(items, (arg0) => {
        const tmp = gzipSync(arg0.data[0], arg0.data[1]);
        if (typeof pbf === "function") {
          items = [tmp.buffer];
          return globalThis.postMessage(tmp, items);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }, 2, (arg0, arg1) => {
        closure_1.terminate();
        closure_0(arg0, arg1);
      });
      let closure_1 = tmp5;
      const items1 = [buffer, obj];
      let postMessage = tmp5.postMessage;
      if (obj.consume) {
        const items2 = [buffer.buffer];
        items3 = items2;
      } else {
        items3 = [];
      }
      postMessage(items1, items3);
      return () => {
        closure_1.terminate();
      };
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const Deflate_export = tmp15;
const Inflate_export = tmp17;
const Gzip_export = tmp19;
const Gunzip_export = tmp21;
const Zlib_export = tmp23;
const Unzlib_export = tmp25;
const Decompress_export = tmp27;
const AsyncDecompress_export = tmp28;
const DecodeUTF8_export = tmp31;
const EncodeUTF8_export = tmp32;
const ZipPassThrough_export = tmp33;
const ZipDeflate_export = tmp34;
const AsyncZipDeflate_export = tmp35;
const Zip_export = tmp36;
const UnzipPassThrough_export = tmp37;
const UnzipInflate_export = tmp38;
const AsyncUnzipInflate_export = tmp39;
const Unzip_export = tmp40;

export const FlateErrorCode = { UnexpectedEOF: 0, InvalidBlockType: 1, InvalidLengthLiteral: 2, InvalidDistance: 3, StreamFinished: 4, NoStreamHandler: 5, InvalidHeader: 6, NoCallback: 7, InvalidUTF8: 8, ExtraFieldTooLong: 9, InvalidDate: 10, FilenameTooLong: 11, StreamFinishing: 12, InvalidZipData: 13, UnknownCompressionMethod: 14 };
export { Deflate_export as Deflate };
export const AsyncDeflate = tmp16;
export { deflate };
export { deflateSync };
export { Inflate_export as Inflate };
export const AsyncInflate = tmp18;
export { inflate };
export { inflateSync };
export { Gzip_export as Gzip };
export const AsyncGzip = tmp20;
export { gzip };
export { gzipSync };
export { Gunzip_export as Gunzip };
export const AsyncGunzip = tmp22;
export { gunzip };
export { gunzipSync };
export { Zlib_export as Zlib };
export const AsyncZlib = tmp24;
export function zlib(buffer, arg1, arg2) {
  let tmp = arg2;
  let obj = arg1;
  if (!arg2) {
    obj = {};
    tmp = arg1;
  }
  if (typeof tmp !== "function") {
    if (typeof err === "function") {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error(items[7]);
      error.code = 7;
      const _Error2 = Error;
      if (Error.captureStackTrace) {
        const _Error3 = Error;
        Error.captureStackTrace(error, tmp7);
      }
      throw error;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    items = [
      bDflt,
      zle,
      () => {
          items = [zlibSync];
          return items;
        }
    ];
    if (typeof cbify === "function") {
      let items3;
      closure_0 = tmp;
      const tmp5 = wrkr(items, (arg0) => {
        const tmp = zlibSync(arg0.data[0], arg0.data[1]);
        if (typeof pbf === "function") {
          items = [tmp.buffer];
          return globalThis.postMessage(tmp, items);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }, 4, (arg0, arg1) => {
        closure_1.terminate();
        closure_0(arg0, arg1);
      });
      let closure_1 = tmp5;
      const items1 = [buffer, obj];
      let postMessage = tmp5.postMessage;
      if (obj.consume) {
        const items2 = [buffer.buffer];
        items3 = items2;
      } else {
        items3 = [];
      }
      postMessage(items1, items3);
      return () => {
        closure_1.terminate();
      };
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
export { zlibSync };
export { Unzlib_export as Unzlib };
export const AsyncUnzlib = tmp26;
export { unzlib };
export { unzlibSync };
export const compress = gzip;
export const AsyncCompress = tmp20;
export const compressSync = gzipSync;
export const Compress = tmp19;
export { Decompress_export as Decompress };
export { AsyncDecompress_export as AsyncDecompress };
export function decompress(buffer, arg1, arg2) {
  let tmp = arg2;
  let obj = arg1;
  if (!arg2) {
    obj = {};
    tmp = arg1;
  }
  if (typeof tmp !== "function") {
    if (typeof err === "function") {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error(items[7]);
      error.code = 7;
      const _Error2 = Error;
      if (Error.captureStackTrace) {
        const _Error3 = Error;
        Error.captureStackTrace(error, tmp6);
      }
      throw error;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    let tmp3;
    if (31 == buffer[0]) {
      if (139 == buffer[1]) {
        if (8 == buffer[2]) {
          tmp3 = gunzip(buffer, obj, tmp);
        }
        return tmp3;
      }
    }
    if (8 === (15 & buffer[0])) {
      if (7 >= buffer[0] >> 4) {
        if (!((buffer[0] << 8 | buffer[1]) % 31)) {
          tmp3 = unzlib(buffer, obj, tmp);
        }
      }
    }
    tmp3 = inflate(buffer, obj, tmp);
  }
}
export function decompressSync(subarray, dictionary) {
  let tmp10Result;
  if (31 == subarray[0]) {
    if (139 == subarray[1]) {
      if (8 == subarray[2]) {
        tmp10Result = gunzipSync(subarray, dictionary);
      }
      return tmp10Result;
    }
  }
  if (8 === (15 & subarray[0])) {
    if (7 >= subarray[0] >> 4) {
      if (!((subarray[0] << 8 | subarray[1]) % 31)) {
        subarray = subarray.subarray;
        const tmp = inflt;
        const tmp2 = zls;
        if (dictionary) {
          dictionary = dictionary.dictionary;
        }
        const subarrayResult = subarray(tmp2(subarray, dictionary), -4);
        tmp10Result = tmp(subarrayResult, { i: 2 }, tmp4, tmp5);
      }
    }
  }
  let out = dictionary;
  const tmp10 = inflt;
  if (dictionary) {
    out = dictionary.out;
  }
  const tmp11 = dictionary && dictionary.dictionary;
  tmp10Result = tmp10(subarray, { i: 2 }, out, tmp11);
}
export { DecodeUTF8_export as DecodeUTF8 };
export { EncodeUTF8_export as EncodeUTF8 };
export { strToU8 };
export { strFromU8 };
export { ZipPassThrough_export as ZipPassThrough };
export { ZipDeflate_export as ZipDeflate };
export { AsyncZipDeflate_export as AsyncZipDeflate };
export { Zip_export as Zip };
export function zip(arg0, arg1, arg2) {
  let tmp4;
  function _loop_1(arg0) {
    let arr;
    let closure_2;
    let tmp2;
    closure_0 = arg0;
    let tmp = keys[arg0];
    length = tmp;
    [arr, tmp2] = length[tmp];
    keys = tmp2;
    let obj = crc();
    length = arr.length;
    obj.p(arr);
    let tmp4 = strToU8;
    const arr2 = strToU8(tmp);
    let length2 = arr2.length;
    const comment = tmp2.comment;
    const arr3 = comment && tmp4(comment);
    let closure_9 = arr3 && arr3.length;
    closure_10 = exfl(tmp2.extra);
    let num = 8;
    if (0 == tmp2.level) {
      num = 0;
    }
    function cbl(arg0, arr) {
      let tmp13;
      const tmp = arg0;
      if (tmp) {
        if (typeof tAll === "function") {
          let num6 = 0;
          if (0 < arr3.length) {
            do {
              let tmp30 = arr3[num6]();
              num6 = num6 + 1;
              length2 = arr3.length;
            } while (num6 < length2);
          }
          closure_10(arg0, null);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        length = arr.length;
        obj = { size: length, crc: obj.d(), c: arr, f: arr2, m: arr3, u: tmp13, compression: num };
        let tmp10 = arr3;
        tmp13 = length2 != length.length;
        const tmp3 = array;
        const tmp4 = closure_0;
        const tmp5 = mrg;
        if (!tmp13) {
          if (tmp10) {
            tmp10 = comment.length != closure_9;
          }
          tmp13 = tmp10;
        }
        if (typeof tmp5 === "function") {
          obj2 = {};
          for (const key10025 in tmp6) {
            obj2[key10025] = tmp6[key10025];
            continue;
          }
          for (const key10028 in obj) {
            obj2[key10028] = obj[key10028];
            continue;
          }
          tmp3[tmp4] = obj2;
          closure_4 = closure_4 + (30 + tmp11 + closure_10 + length);
          let num2 = closure_9;
          const sum = tmp11 + closure_10;
          const tmp21 = closure_5;
          if (!closure_9) {
            num2 = 0;
          }
          closure_5 = tmp21 + (76 + 2 * sum + num2 + length);
          const diff = length - 1;
          length = diff;
          if (!length) {
            cbf();
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
    if (length2 > 65535) {
      let tmp5 = err;
      let num2 = 1;
      const tmp6 = null;
      cbl(err(11, 0, 1), null);
    }
    if (num) {
      if (length < 160000) {
        try {
          let tmp13 = deflateSync;
          cbl(null, deflateSync(arr, tmp2));
        } catch (tmp16) {
          cbl(tmp16, null);
        }
      } else {
        let tmp10 = arr3;
        const tmp11 = deflate;
        arr3.push(deflate(arr, tmp2, cbl));
      }
    } else {
      cbl(null, arr);
    }
  }
  let tmp = arg2;
  closure_0 = arg2;
  let obj = arg1;
  if (!arg2) {
    closure_0 = arg1;
    obj = {};
    tmp = arg1;
  }
  if (typeof tmp !== "function") {
    if (typeof err === "function") {
      let tmp5 = globalThis;
      const _Error = Error;
      let tmp6 = items;
      const self = this;
      const self2 = this;
      const error = new Error(items[7]);
      let tmp8 = error;
      let num3 = 7;
      error.code = 7;
      const _Error2 = Error;
      if (Error.captureStackTrace) {
        const _Error3 = Error;
        Error.captureStackTrace(error, tmp4);
      }
      throw error;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    let num2;
    let tmp10 = arg0;
    let obj2 = {};
    let tmp11 = fltn;
    let num4 = 0;
    let tmp12 = obj2;
    let tmp13 = obj;
    const tmp14 = fltn(arg0, "", obj2, obj);
    let tmp15 = globalThis;
    const _Object = Object;
    let keys = Object.keys(obj2);
    let length = keys.length;
    let closure_4 = 0;
    let closure_5 = 0;
    const _Array = Array;
    const tmp16 = length;
    const self3 = this;
    const self4 = this;
    const array = new Array(length);
    closure_8 = [];
    function tAll() {
      let num = 0;
      if (0 < closure_8.length) {
        do {
          let tmp2 = closure_8[num]();
          num = num + 1;
          length = closure_8.length;
        } while (num < length);
      }
    }
    let closure_10 = function cbd(arg0, arg1) {
      closure_0 = arg0;
      let closure_1 = arg1;
      _queueMicrotask(() => {
        closure_0(closure_0, closure_1);
      });
    };
    let tmp19 = _queueMicrotask;
    _queueMicrotask(() => {
      closure_10 = closure_0;
    });
    function cbf() {
      const obj = new Uint8Array(closure_5 + 22);
      closure_5 = 0;
      let num = 0;
      const tmp3 = closure_5;
      if (0 < length) {
        while (true) {
          try {
            length = tmp5.c.length;
            let tmp7 = length;
            let tmp13 = wzh(tmp, closure_5, tmp5, tmp5.f, tmp5.u, length);
            let sum = 30 + tmp5.f.length;
            let sum1 = sum + exfl(tmp5.extra);
            let sum2 = closure_5 + sum1;
            let tmp19 = sum2;
            let result = obj.set(tmp5.c, sum2);
            let tmp26 = wzh(tmp, closure_4, tmp5, tmp5.f, tmp5.u, length, closure_5, tmp5.m);
            let num4 = 0;
            let tmp27 = closure_4;
            if (tmp5.m) {
              num4 = tmp5.m.length;
            }
            closure_4 = tmp27 + (16 + sum1 + num4);
            closure_5 = tmp19 + tmp7;
            num = num + 1;
            if (num >= length) {
              break;
            }
          } catch (tmp33) {
            return closure_10(tmp33, null);
          }
        }
      }
      wzf(obj, closure_4, array.length, tmp3 - closure_4, closure_4);
      closure_10(null, obj);
    }
    let tmp21 = length;
    if (!tmp21) {
      cbf();
    }
    let num = 1;
    for (let num2 = 0; num2 < length; num2 = num2 + 1) {
      let tmp3 = _loop_1(num2);
    }
    return tAll;
  }
}
export function zipSync(arg0, arg1) {
  let arr7;
  let tmp24;
  let tmp66;
  const obj = {};
  items = [];
  const tmp3 = arg1 || {};
  fltn(arg0, "", obj, tmp3);
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  const keys = Object.keys();
  if (keys !== undefined) {
    num3 = num;
    num4 = num2;
    while (keys[tmp] !== undefined) {
      [arr7, tmp66] = obj[arr2];
      let num5 = 8;
      if (0 == tmp66.level) {
        num5 = 0;
      }
      let tmp8 = strToU8;
      let arr3 = strToU8(arr2);
      let length = arr3.length;
      let comment = tmp66.comment;
      let arr5 = comment && tmp8(comment);
      let num6 = arr5 && arr5.length;
      let extra = tmp66.extra;
      if (typeof exfl === "function") {
        let num7 = 0;
        if (extra) {
          let num8 = 0;
          num7 = 0;
          let keys1 = Object.keys();
          if (keys1 !== undefined) {
            num7 = num8;
            let tmp13 = keys1[tmp2];
            while (tmp13 !== undefined) {
              let length3 = extra[tmp13].length;
              if (length3 > 65535) {
                if (typeof err === "function") {
                  let tmp15 = globalThis;
                  let _Error = Error;
                  let self = this;
                  let self2 = this;
                  let error = new Error(items[9]);
                  error.code = 9;
                  let _Error2 = Error;
                  if (Error.captureStackTrace) {
                    let _Error3 = Error;
                    let captureStackTraceResult = Error.captureStackTrace(error, tmp14);
                  }
                  throw error;
                } else {
                  let str2 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                num8 = num8 + (length3 + 4);
                continue;
              }
            }
          }
        }
        if (length > 65535) {
          if (typeof err === "function") {
            let tmp31 = globalThis;
            let _Error4 = Error;
            let self3 = this;
            let self4 = this;
            let error1 = new Error(items[11]);
            error1.code = 11;
            let _Error5 = Error;
            if (Error.captureStackTrace) {
              let _Error6 = Error;
              let captureStackTraceResult1 = Error.captureStackTrace(error1, tmp30);
            }
            throw error1;
          } else {
            let str5 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          let arr6 = arr7;
          if (num5) {
            arr6 = deflateSync(arr7, tmp66);
          }
          let length2 = arr6.length;
          if (typeof crc === "function") {
            let c0 = -1;
            let obj2 = {
              p,
              d() {
                          return ~closure_0;
                        }
            };
            let pResult = obj2.p(arr7);
            let obj3 = { size: arr7.length, crc: obj2.d(), c: arr6, f: arr3, m: arr5, u: tmp24, o: num2, compression: num5 };
            let push = items.push;
            let tmp23 = mrg;
            tmp24 = length != arr2.length;
            if (!tmp24) {
              if (arr5) {
                arr5 = comment.length != num6;
              }
              tmp24 = arr5;
            }
            if (typeof tmp23 === "function") {
              let obj4 = {};
              for (const key10080 in tmp66) {
                obj4[key10080] = tmp66[key10080];
                continue;
              }
              for (const key10083 in obj3) {
                obj4[key10083] = obj3[key10083];
                continue;
              }
              let arr = push(obj4);
              let sum = 30 + length + num7 + length2;
              let sum1 = length + num7;
              if (!num6) {
                num6 = 0;
              }
              num2 = num2 + sum;
              num = num + (76 + 2 * sum1 + num6 + length2);
              continue;
            } else {
              let str4 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            let str3 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
      } else {
        let str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  const obj5 = new Uint8Array(num3 + 22);
  let num11 = 0;
  let sum3 = num4;
  let tmp38 = num4;
  if (0 < items.length) {
    wzh(obj5, items[num11].o, items[num11], items[num11].f, items[num11].u, items[num11].c.length);
    const extra2 = tmp39.extra;
    const tmp40 = wzh;
    while (typeof exfl === "function") {
      let num13 = 0;
      if (extra2) {
        let num14 = 0;
        num13 = 0;
        let keys2 = Object.keys();
        if (keys2 !== undefined) {
          num13 = num14;
          let tmp51 = keys2[tmp];
          while (tmp51 !== undefined) {
            let length4 = extra2[tmp51].length;
            if (length4 > 65535) {
              if (typeof err === "function") {
                let tmp53 = globalThis;
                let _Error7 = Error;
                let self5 = this;
                let self6 = this;
                let error2 = new Error(items[9]);
                error2.code = 9;
                let _Error8 = Error;
                if (Error.captureStackTrace) {
                  let _Error9 = Error;
                  let captureStackTraceResult2 = Error.captureStackTrace(error2, tmp52);
                }
                throw error2;
              } else {
                let str7 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              num14 = num14 + (length4 + 4);
              continue;
            }
          }
        }
      }
      let sum2 = tmp44 + num13;
      let result = obj5.set(tmp39.c, tmp39.o + sum2);
      let tmp40Result = tmp40(tmp36, tmp47, tmp39, tmp39.f, tmp39.u, tmp39.c.length, tmp39.o, tmp39.m);
      let num17 = 0;
      if (tmp39.m) {
        num17 = tmp39.m.length;
      }
      sum3 = sum3 + (16 + sum2 + num17);
      num11 = num11 + 1;
      tmp38 = sum3;
    }
    throw new TypeError("Trying to call a non-function");
  }
  wzf(obj5, tmp38, items.length, num3 - num4, num4);
  return obj5;
}
export { UnzipPassThrough_export as UnzipPassThrough };
export { UnzipInflate_export as UnzipInflate };
export { AsyncUnzipInflate_export as AsyncUnzipInflate };
export { Unzip_export as Unzip };
export function unzip(arg0, arg1, arg2) {
  function _loop_3(arg0) {
    let tmp2;
    let tmp24;
    let tmp3;
    let tmp4;
    let tmp5;
    let tmp = zh(closure_0, closure_7, closure_8);
    [tmp2, tmp3, tmp4, tmp5] = tmp;
    closure_0 = tmp5;
    const tmp6 = tmp[4];
    const tmp7 = slzh(closure_0, tmp[5]);
    closure_7 = tmp6;
    function cbl(arg0, arg1) {
      let length;
      const tmp = arg0;
      if (tmp) {
        if (typeof tAll === "function") {
          let num = 0;
          if (0 < closure_2.length) {
            do {
              let tmp14 = closure_2[num]();
              num = num + 1;
              length = closure_2.length;
            } while (num < length);
          }
          closure_5(arg0, null);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        const tmp2 = arg1;
        if (tmp2) {
          closure_4[closure_0] = arg1;
        }
        uint8Array2 = uint8Array2 - 1;
        if (!uint8Array2) {
          closure_5(null, closure_4);
        }
      }
    }
    if (closure_9) {
      const obj2 = { name: tmp5, size: tmp3, originalSize: tmp4, compression: tmp2 };
      if (!tmp8(obj2)) {
        cbl(null, null);
      }
    }
    if (tmp2) {
      let num = 8;
      if (8 == tmp2) {
        const subarrayResult = closure_0.subarray(tmp7, tmp7 + tmp3);
        if (tmp3 < 320000) {
          try {
            const self = this;
            const self2 = this;
            const obj3 = { out: tmp24 };
            tmp24 = new closure_1(tmp4);
            cbl(null, inflateSync(subarrayResult, obj3));
          } catch (tmp28) {
            cbl(tmp28, null);
          }
        } else {
          const obj4 = { size: tmp4 };
          closure_2.push(inflate(subarrayResult, obj4, cbl));
        }
      } else {
        let tmp14 = err;
        cbl(err(14, `unknown compression type ${tmp2}`, 1), null);
      }
    } else {
      cbl(null, slc(closure_0, tmp7, tmp7 + tmp3));
    }
  }
  closure_0 = arg0;
  let tmp = arg2;
  let closure_1 = arg2;
  let obj = arg1;
  if (!arg2) {
    closure_1 = arg1;
    obj = {};
    tmp = arg1;
  }
  if (typeof tmp !== "function") {
    if (typeof err === "function") {
      const _Error4 = Error;
      const self3 = this;
      const self4 = this;
      const error = new Error(items[7]);
      error.code = 7;
      const _Error5 = Error;
      if (Error.captureStackTrace) {
        const _Error6 = Error;
        Error.captureStackTrace(error, tmp29);
      }
      throw error;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    let closure_2 = [];
    function tAll() {
      let length;
      let num = 0;
      if (0 < closure_2.length) {
        do {
          let tmp2 = closure_2[num]();
          num = num + 1;
          length = closure_2.length;
        } while (num < length);
      }
    }
    let closure_4 = {};
    uint8Array1 = function cbd(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      _queueMicrotask(() => {
        closure_1(closure_0, closure_1);
      });
    };
    _queueMicrotask(() => {
      closure_5 = closure_1;
    });
    const diff = arg0.length - 22;
    let tmp6 = b4;
    if (typeof b4 === "function") {
      let num = 1;
      let tmp2 = diff;
      let tmp3 = diff;
      if (101010256 !== (arg0[diff] | arg0[diff + 1] << 8 | arg0[diff + 2] << 16 | arg0[diff + 3] << 24) >>> 0) {
        const tmp4 = tmp2;
        while (tmp2) {
          if (65558 < arg0.length - tmp2) {
            break;
          } else if (typeof b4 === "function") {
            let diff1 = tmp2 - 1;
            tmp2 = diff1;
            tmp3 = diff1;
            tmp6 = tmp38;
          } else {
            let str2 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
        if (typeof err === "function") {
          const _Error = Error;
          let self = this;
          let self2 = this;
          const error1 = new Error(items[13]);
          error1.code = 13;
          const _Error2 = Error;
          if (Error.captureStackTrace) {
            const _Error3 = Error;
            Error.captureStackTrace(error1, tmp21);
          }
          tmp20(error1, null);
          return tAll;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      let tmp7 = b2;
      if (typeof b2 === "function") {
        const sum = tmp3 + 8;
        const tmp9 = arg0[sum] | arg0[sum + 1] << 8;
        uint8Array2 = tmp9;
        if (uint8Array2) {
          const tmp6Result = tmp6(arg0, tmp3 + 16);
          closure_7 = tmp6Result;
          let tmp14 = 4294967295 == tmp6Result || 65535 === tmp9;
          closure_8 = tmp14;
          let tmp15 = tmp9;
          if (tmp14) {
            const tmp6Result3 = tmp6(arg0, tmp3 - 12);
            const tmp17 = 101075792 == tmp6(arg0, tmp6Result3);
            closure_8 = tmp17;
            tmp15 = tmp9;
            if (tmp17) {
              const tmp6Result4 = tmp6(arg0, tmp6Result3 + 32);
              uint8Array2 = tmp6Result4;
              closure_7 = tmp6(arg0, tmp6Result3 + 48);
              tmp15 = tmp6Result4;
            }
          }
          let closure_9 = obj && obj.filter;
          for (let num16 = 0; num16 < tmp15; num16 = num16 + 1) {
            let tmp19 = _loop_3();
          }
        } else {
          const tmp12 = uint8Array1(null, {});
        }
        return tAll;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      const str = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
  }
}
export function unzipSync(subarray, arg1) {
  let tmp53;
  const diff = subarray.length - 22;
  let tmp2 = b4;
  if (typeof b4 === "function") {
    let tmp3 = diff;
    let tmp4 = diff;
    if (101010256 !== (subarray[diff] | subarray[diff + 1] << 8 | subarray[diff + 2] << 16 | subarray[diff + 3] << 24) >>> 0) {
      while (true) {
        let tmp5 = !tmp3;
        let tmp6 = tmp3;
        if (tmp6) {
          tmp5 = subarray.length - tmp3 > 65558;
        }
        if (tmp5) {
          break;
        } else if (typeof b4 === "function") {
          let diff1 = tmp3 - 1;
          tmp3 = diff1;
          tmp4 = diff1;
          tmp2 = tmp7;
        } else {
          let str3 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      if (typeof err === "function") {
        const _Error4 = Error;
        const self7 = this;
        const self8 = this;
        const error = new Error(items[13]);
        error.code = 13;
        const _Error5 = Error;
        if (Error.captureStackTrace) {
          const _Error6 = Error;
          Error.captureStackTrace(error, tmp57);
        }
        throw error;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    if (typeof b2 === "function") {
      const sum = tmp4 + 8;
      if (subarray[sum] | subarray[sum + 1] << 8) {
        const tmp2Result = tmp2(subarray, tmp4 + 16);
        let tmp13 = 4294967295 == tmp2Result || 65535 === tmp11;
        let tmp2Result6 = tmp2Result;
        let tmp2Result5 = tmp11;
        if (tmp13) {
          const tmp2Result4 = tmp2(subarray, tmp4 - 12);
          const tmp17 = 101075792 == tmp2(subarray, tmp2Result4);
          tmp2Result6 = tmp2Result;
          tmp2Result5 = tmp11;
          tmp13 = tmp17;
          if (tmp13) {
            tmp2Result5 = tmp2(subarray, tmp2Result4 + 32);
            tmp2Result6 = tmp2(subarray, tmp2Result4 + 48);
            tmp13 = tmp17;
          }
        }
        const obj = {};
        let num19 = 0;
        if (0 < tmp2Result5) {
          const first = zh(subarray, tmp2Result6, tmp13)[0];
          const tmp21 = zh(subarray, tmp2Result6, tmp13);
          while (typeof slzh === "function") {
            let sum1 = tmp27 + 26;
            if (typeof b2 === "function") {
              let sum2 = tmp27 + 28;
              if (typeof tmp31 === "function") {
                let tmp36 = tmp19;
                let tmp35 = subarray[sum2] | subarray[sum2 + 1] << 8;
                if (tmp19) {
                  let obj2 = { name: tmp25, size: tmp23, originalSize: tmp24, compression: first };
                  tmp36 = !tmp19(obj2);
                }
                if (!tmp36) {
                  let sum3 = tmp30 + tmp33 + tmp35;
                  if (first) {
                    if (8 == first) {
                      let subarrayResult = subarray.subarray(sum3, sum3 + tmp23);
                      let obj4 = { out: tmp53 };
                      let self5 = this;
                      let self6 = this;
                      tmp53 = new Uint8Array(tmp24);
                      obj[tmp25] = inflt(subarrayResult, { i: 2 }, obj4.out, obj4.dictionary);
                    } else {
                      let str = "unknown compression type ";
                      let text = `unknown compression type ${tmp22}`;
                      if (typeof err === "function") {
                        let tmp44 = globalThis;
                        let _Error = Error;
                        if (!`unknown compression type ${tmp22}`) {
                          text = items[14];
                        }
                        let self3 = this;
                        let self4 = this;
                        let _Error1 = new _Error(text);
                        _Error1.code = 14;
                        let _Error2 = Error;
                        if (Error.captureStackTrace) {
                          let _Error3 = Error;
                          let captureStackTraceResult1 = Error.captureStackTrace(_Error1, tmp42);
                        }
                        throw _Error1;
                      } else {
                        let str9 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                  } else {
                    let length = sum3 + tmp23;
                    if (typeof slc === "function") {
                      let num20 = sum3;
                      if (sum3 < 0) {
                        num20 = 0;
                      }
                      if (length > subarray.length) {
                        length = subarray.length;
                      }
                      let self = this;
                      let self2 = this;
                      let obj3 = new Uint8Array(length - num20);
                      let result = obj3.set(subarray.subarray(num20, length));
                      obj[tmp25] = obj3;
                    } else {
                      let str8 = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                  }
                }
                num19 = num19 + 1;
                tmp2Result6 = tmp26;
              } else {
                let str7 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              let str6 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          }
          throw new TypeError("Trying to call a non-function");
        }
        return obj;
      } else {
        return {};
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
