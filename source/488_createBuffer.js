// Module ID: 488
// Function ID: 6312
// Name: createBuffer
// Dependencies: []

// Module 488 (createBuffer)
function createBuffer(arg0) {
  if (arg0 > closure_3) {
    const _RangeError = RangeError;
    const rangeError = new RangeError("The value \"" + arg0 + "\" is invalid for option \"size\"");
    throw rangeError;
  } else {
    const _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array(arg0);
    const _Object = Object;
    Object.setPrototypeOf(uint8Array, Buffer.prototype);
    return uint8Array;
  }
}
class Buffer {
  constructor(arg0, arg1, arg2) {
    if ("number" === typeof arg0) {
      str = "string";
      if ("string" === typeof arg1) {
        tmp4 = globalThis;
        _TypeError = TypeError;
        prototype = TypeError.prototype;
        tmp5 = new.target;
        str2 = "The \"string\" argument must be of type string. Received type number";
        tmp6 = new.target;
        typeError = new TypeError("The \"string\" argument must be of type string. Received type number");
        tmp8 = typeError;
        throw typeError;
      } else {
        tmp3 = allocUnsafe;
        return allocUnsafe(arg0);
      }
    } else {
      tmp = from;
      tmp2 = arg2;
      return from(arg0, arg1, arg2);
    }
  }
  static from(arg0, arg1, arg2) {
    return from(arg0, arg1, arg2);
  }
  static alloc(arg0, arg1, arg2) {
    tmp = assertSize(arg0);
    if (arg0 <= 0) {
      tmp8 = createBuffer;
      tmp3 = createBuffer(arg0);
    } else if (undefined !== arg1) {
      str = "string";
      if ("string" === typeof arg2) {
        tmp6 = createBuffer;
        obj2 = createBuffer(arg0);
        fillResult = obj2.fill(arg1, arg2);
      } else {
        tmp4 = createBuffer;
        obj = createBuffer(arg0);
        fillResult = obj.fill(arg1);
      }
      tmp7 = fillResult;
    } else {
      tmp2 = createBuffer;
      tmp3 = createBuffer(arg0);
    }
    return tmp3;
  }
  static allocUnsafe(arg0) {
    return allocUnsafe(arg0);
  }
  static allocUnsafeSlow(arg0) {
    return allocUnsafe(arg0);
  }
  static isBuffer(arg0) {
    tmp = null != arg0;
    if (tmp) {
      flag = true;
      tmp = true === arg0._isBuffer;
    }
    if (tmp) {
      tmp2 = Buffer;
      tmp = arg0 !== Buffer.prototype;
    }
    return tmp;
  }
  static compare(arg0, arg1) {
    fromResult = arg0;
    if (isInstance(arg0, Uint8Array)) {
      tmp = Buffer;
      fromResult = Buffer.from(arg0, arg0.offset, arg0.byteLength);
    }
    fromResult1 = arg1;
    if (isInstance(arg1, Uint8Array)) {
      tmp2 = Buffer;
      fromResult1 = Buffer.from(arg1, arg1.offset, arg1.byteLength);
    }
    if (Buffer.isBuffer(fromResult)) {
      tmp3 = Buffer;
      if (Buffer.isBuffer(fromResult1)) {
        if (fromResult === fromResult1) {
          num5 = 0;
          return 0;
        } else {
          length = fromResult.length;
          length2 = fromResult1.length;
          _Math = Math;
          bound = Math.min(length, length2);
          num = 0;
          num2 = 0;
          tmp6 = length;
          tmp7 = length2;
          if (0 < bound) {
            tmp8 = num2;
            while (fromResult[num2] === fromResult1[num2]) {
              num2 = num2 + 1;
              tmp6 = length;
              tmp7 = length2;
            }
            tmp6 = fromResult[num2];
            tmp7 = fromResult1[num2];
          }
          num3 = -1;
          if (tmp6 >= tmp7) {
            num4 = 0;
            if (tmp7 < tmp6) {
              num4 = 1;
            }
            num3 = num4;
          }
          return num3;
        }
      }
    }
    typeError = new TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
    throw typeError;
  }
  static isEncoding(arg0) {
    str = String(arg0);
    formatted = str.toLowerCase();
    if ("hex" !== formatted) {
      str2 = "utf8";
      if ("utf8" !== formatted) {
        str3 = "utf-8";
        if ("utf-8" !== formatted) {
          str4 = "ascii";
          if ("ascii" !== formatted) {
            str5 = "latin1";
            if ("latin1" !== formatted) {
              str6 = "binary";
              if ("binary" !== formatted) {
                str7 = "base64";
                if ("base64" !== formatted) {
                  str8 = "ucs2";
                  if ("ucs2" !== formatted) {
                    str9 = "ucs-2";
                    if ("ucs-2" !== formatted) {
                      str10 = "utf16le";
                      if ("utf16le" !== formatted) {
                        str11 = "utf-16le";
                        if ("utf-16le" !== formatted) {
                          flag = false;
                          return false;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return true;
  }
  static concat(arg0, arg1) {
    num = arg1;
    if (Array.isArray(arg0)) {
      num2 = 0;
      if (0 === arg0.length) {
        tmp16 = Buffer;
        return require("module_0");
      } else {
        if (undefined === num) {
          num3 = 0;
          num4 = 0;
          num = 0;
          if (0 < arg0.length) {
            do {
              num3 = num3 + arg0[num4].length;
              num4 = num4 + 1;
              num = num3;
              length = arg0.length;
            } while (num4 < length);
          }
        }
        tmp5 = Buffer;
        allocUnsafeResult = Buffer.allocUnsafe(num);
        num5 = 0;
        num6 = 0;
        if (0 < arg0.length) {
          while (true) {
            tmp7 = arg0[num5];
            tmp8 = isInstance;
            _Uint8Array = Uint8Array;
            fromResult = tmp7;
            if (isInstance(tmp7, Uint8Array)) {
              tmp9 = Buffer;
              fromResult = Buffer.from(tmp7);
            }
            tmp10 = Buffer;
            if (!Buffer.isBuffer(fromResult)) {
              break;
            } else {
              copyResult = fromResult.copy(allocUnsafeResult, num6);
              num6 = num6 + fromResult.length;
              num5 = num5 + 1;
            }
          }
          _TypeError2 = TypeError;
          prototype2 = TypeError.prototype;
          tmp11 = new.target;
          str2 = "\"list\" argument must be an Array of Buffers";
          tmp12 = new.target;
          typeError = new TypeError("\"list\" argument must be an Array of Buffers");
          tmp14 = typeError;
          throw typeError;
        }
        return allocUnsafeResult;
      }
    } else {
      _TypeError = TypeError;
      prototype = TypeError.prototype;
      tmp = new.target;
      str = "\"list\" argument must be an Array of Buffers";
      tmp2 = new.target;
      typeError1 = new TypeError("\"list\" argument must be an Array of Buffers");
      tmp4 = typeError1;
      throw typeError1;
    }
  }
  swap16() {
    self = this;
    length = this.length;
    if (length % 2 !== 0) {
      tmp3 = globalThis;
      _RangeError = RangeError;
      prototype = RangeError.prototype;
      tmp4 = new.target;
      str = "Buffer size must be a multiple of 16-bits";
      tmp5 = new.target;
      rangeError = new RangeError("Buffer size must be a multiple of 16-bits");
      tmp7 = rangeError;
      throw rangeError;
    } else {
      num = 1;
      for (let num2 = 0; num2 < length; num2 = num2 + 2) {
        tmp = swap;
        tmp2 = swap(self, num2, num2 + 1);
      }
      return self;
    }
  }
  swap32() {
    self = this;
    length = this.length;
    if (length % 4 !== 0) {
      tmp4 = globalThis;
      _RangeError = RangeError;
      prototype = RangeError.prototype;
      tmp5 = new.target;
      str = "Buffer size must be a multiple of 32-bits";
      tmp6 = new.target;
      rangeError = new RangeError("Buffer size must be a multiple of 32-bits");
      tmp8 = rangeError;
      throw rangeError;
    } else {
      num = 3;
      num2 = 1;
      num3 = 2;
      for (let num4 = 0; num4 < length; num4 = num4 + 4) {
        tmp = swap;
        tmp2 = swap(self, num4, num4 + 3);
        tmp3 = swap(self, num4 + 1, num4 + 2);
      }
      return self;
    }
  }
  swap64() {
    self = this;
    length = this.length;
    if (length % 8 !== 0) {
      tmp6 = globalThis;
      _RangeError = RangeError;
      prototype = RangeError.prototype;
      tmp7 = new.target;
      str = "Buffer size must be a multiple of 64-bits";
      tmp8 = new.target;
      rangeError = new RangeError("Buffer size must be a multiple of 64-bits");
      tmp10 = rangeError;
      throw rangeError;
    } else {
      num = 7;
      num2 = 1;
      num3 = 6;
      num4 = 2;
      num5 = 5;
      num6 = 3;
      num7 = 4;
      for (let num8 = 0; num8 < length; num8 = num8 + 8) {
        tmp = swap;
        tmp2 = swap(self, num8, num8 + 7);
        tmp3 = swap(self, num8 + 1, num8 + 6);
        tmp4 = swap(self, num8 + 2, num8 + 5);
        tmp5 = swap(self, num8 + 3, num8 + 4);
      }
      return self;
    }
  }
  toString() {
    self = this;
    length = this.length;
    if (0 === length) {
      return "";
    } else {
      if (0 === arguments.length) {
        tmp4 = utf8Slice;
        applyResult = utf8Slice(self, 0, length);
      } else {
        tmp = slowToString;
        tmp2 = arguments;
        applyResult = slowToString(...arguments);
      }
      tmp5 = applyResult;
    }
    return;
  }
  equals(arg0) {
    self = this;
    if (Buffer.isBuffer(arg0)) {
      tmp6 = self === arg0;
      if (!tmp6) {
        tmp7 = Buffer;
        num = 0;
        tmp6 = 0 === Buffer.compare(self, arg0);
      }
      return tmp6;
    } else {
      tmp = globalThis;
      _TypeError = TypeError;
      prototype = TypeError.prototype;
      tmp2 = new.target;
      str = "Argument must be a Buffer";
      tmp3 = new.target;
      typeError = new TypeError("Argument must be a Buffer");
      tmp5 = typeError;
      throw typeError;
    }
  }
  inspect() {
    INSPECT_MAX_BYTES = arg5.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, INSPECT_MAX_BYTES);
    str2 = str.replace(/(.{2})/g, "$1 ");
    trimmed = str2.trim();
    text = trimmed;
    if (this.length > INSPECT_MAX_BYTES) {
      str3 = " ... ";
      text = `${tmp} ... `;
    }
    return "<Buffer " + text + ">";
  }
  compare(arg0, arg1, arg2, arg3, arg4) {
    num = arg1;
    tmp = arg2;
    num2 = arg3;
    length = arg4;
    self = this;
    fromResult = arg0;
    if (isInstance(arg0, Uint8Array)) {
      tmp2 = Buffer;
      fromResult = Buffer.from(arg0, arg0.offset, arg0.byteLength);
    }
    if (Buffer.isBuffer(fromResult)) {
      if (undefined === num) {
        num = 0;
      }
      if (undefined === tmp) {
        num3 = 0;
        if (fromResult) {
          num3 = fromResult.length;
        }
        tmp = num3;
      }
      if (undefined === num2) {
        num2 = 0;
      }
      if (undefined === length) {
        length = self.length;
      }
      num4 = 0;
      if (num >= 0) {
        if (tmp <= fromResult.length) {
          if (num2 >= 0) {
            if (length <= self.length) {
              if (num2 >= length) {
                if (num >= tmp) {
                  return 0;
                }
              }
              if (num2 >= length) {
                num9 = -1;
                return -1;
              } else if (num >= tmp) {
                num8 = 1;
                return 1;
              } else if (self === fromResult) {
                return 0;
              } else {
                tmp14 = length >>> 0;
                tmp15 = num2 >>> 0;
                diff = tmp14 - tmp15;
                tmp17 = tmp >>> 0;
                tmp18 = num >>> 0;
                diff1 = tmp17 - tmp18;
                _Math = Math;
                bound = Math.min(diff, diff1);
                substr = self.slice(tmp15, tmp14);
                substr1 = fromResult.slice(tmp18, tmp17);
                num5 = 0;
                tmp8 = diff;
                tmp9 = diff1;
                if (0 < bound) {
                  tmp7 = num5;
                  while (substr[num5] === substr1[num5]) {
                    num5 = num5 + 1;
                    tmp8 = diff;
                    tmp9 = diff1;
                  }
                  tmp8 = substr[num5];
                  tmp9 = substr1[num5];
                }
                num6 = -1;
                if (tmp8 >= tmp9) {
                  num7 = 0;
                  if (tmp9 < tmp8) {
                    num7 = 1;
                  }
                  num6 = num7;
                }
                return num6;
              }
            }
          }
        }
      }
      _RangeError = RangeError;
      prototype2 = RangeError.prototype;
      tmp10 = new.target;
      str2 = "out of range index";
      tmp11 = new.target;
      rangeError = new RangeError("out of range index");
      tmp13 = rangeError;
      throw rangeError;
    } else {
      _TypeError = TypeError;
      prototype = TypeError.prototype;
      tmp3 = new.target;
      str = "The \"target\" argument must be one of type Buffer or Uint8Array. Received type ";
      tmp4 = new.target;
      typeError = new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof fromResult);
      tmp6 = typeError;
      throw typeError;
    }
  }
  includes(arg0, arg1, arg2) {
    return -1 !== this.indexOf(arg0, arg1, arg2);
  }
  indexOf(arg0, arg1, arg2) {
    return bidirectionalIndexOf(this, arg0, arg1, arg2, true);
  }
  lastIndexOf(arg0, arg1, arg2) {
    return bidirectionalIndexOf(this, arg0, arg1, arg2, false);
  }
  write(arg0, arg1, arg2, arg3) {
    self = this;
    if (undefined === arg1) {
      length = self.length;
      num2 = 0;
      str3 = "utf8";
    } else {
      if (undefined === arg2) {
        str = "string";
        if ("string" === typeof arg1) {
          length = self.length;
          num2 = 0;
          str3 = arg1;
        }
      }
      tmp = globalThis;
      _isFinite = isFinite;
      if (isFinite(arg1)) {
        num = 0;
        tmp6 = arg1 >>> 0;
        _isFinite2 = isFinite;
        num2 = tmp6;
        str3 = arg2;
        if (isFinite(arg2)) {
          tmp7 = arg2 >>> 0;
          num2 = tmp6;
          length = tmp7;
          str3 = arg3;
          if (undefined === arg3) {
            str3 = "utf8";
            num2 = tmp6;
            length = tmp7;
          }
        }
      } else {
        _Error = Error;
        prototype = Error.prototype;
        tmp2 = new.target;
        str2 = "Buffer.write(string, encoding, offset[, length]) is no longer supported";
        tmp3 = new.target;
        error = new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        tmp5 = error;
        throw error;
      }
    }
    diff = self.length - num2;
    tmp9 = undefined === length || length > diff;
    if (tmp9) {
      length = diff;
    }
    if (arg0.length <= 0) {
      if (num2 <= self.length) {
        if (!str3) {
          str3 = "utf8";
        }
        str4 = "utf-16le";
        str5 = "utf16le";
        str6 = "ucs-2";
        str7 = "ucs2";
        str8 = "base64";
        str9 = "binary";
        str10 = "latin1";
        str11 = "ascii";
        str12 = "utf-8";
        str13 = "utf8";
        str14 = "hex";
        flag = false;
        tmp10 = str3;
        while ("hex" !== str3) {
          if ("utf8" !== str3) {
            if ("utf-8" !== str3) {
              if ("ascii" === str3) {
                tmp32 = asciiWrite;
                tmp33 = self;
                tmp34 = arg0;
                tmp35 = num2;
                tmp36 = length;
                return asciiWrite(self, arg0, num2, length);
              } else {
                if ("latin1" !== str3) {
                  if ("binary" !== str3) {
                    if ("base64" === str3) {
                      tmp22 = base64Write;
                      tmp23 = self;
                      tmp24 = arg0;
                      tmp25 = num2;
                      tmp26 = length;
                      return base64Write(self, arg0, num2, length);
                    } else {
                      if ("ucs2" !== str3) {
                        if ("ucs-2" !== str3) {
                          if ("utf16le" !== str3) {
                            if ("utf-16le" !== str3) {
                              if (flag) {
                                tmp12 = globalThis;
                                _TypeError = TypeError;
                                str15 = "Unknown encoding: ";
                                prototype2 = TypeError.prototype;
                                tmp13 = new.target;
                                tmp14 = new.target;
                                typeError = new TypeError("Unknown encoding: " + str3);
                                tmp16 = typeError;
                                throw typeError;
                              } else {
                                text = `${str3}`;
                                str3 = `${str3}`.toLowerCase();
                                flag = true;
                                // continue
                              }
                            }
                          }
                        }
                      }
                      tmp17 = ucs2Write;
                      tmp18 = self;
                      tmp19 = arg0;
                      tmp20 = num2;
                      tmp21 = length;
                      return ucs2Write(self, arg0, num2, length);
                    }
                  }
                }
                tmp27 = latin1Write;
                tmp28 = self;
                tmp29 = arg0;
                tmp30 = num2;
                tmp31 = length;
                return latin1Write(self, arg0, num2, length);
              }
            }
          }
          tmp37 = utf8Write;
          tmp38 = self;
          tmp39 = arg0;
          tmp40 = num2;
          tmp41 = length;
          return utf8Write(self, arg0, num2, length);
        }
        tmp42 = hexWrite;
        tmp43 = self;
        tmp44 = arg0;
        tmp45 = num2;
        tmp46 = length;
        return hexWrite(self, arg0, num2, length);
      }
    } else if (length >= 0) {
    }
    rangeError = new RangeError("Attempt to write outside buffer bounds");
    throw rangeError;
  }
  toJSON() {
    obj = { type: "Buffer" };
    slice = Array.prototype.slice;
    self = this._arr;
    if (!self) {
      self = this;
    }
    obj.data = slice.call(self, 0);
    return obj;
  }
  slice(arg0, arg1) {
    self = this;
    length = this.length;
    tmp = ~~arg0;
    if (tmp < 0) {
      num = tmp + length;
      if (num < 0) {
        num = 0;
      }
    } else {
      num = tmp;
      if (tmp > length) {
        num = length;
      }
    }
    tmp2 = length;
    if (undefined !== arg1) {
      tmp2 = ~~arg1;
    }
    if (tmp2 < 0) {
      num2 = tmp2 + length;
      if (num2 < 0) {
        num2 = 0;
      }
    } else {
      num2 = tmp2;
      if (tmp2 > length) {
        num2 = length;
      }
    }
    if (num2 < num) {
      num2 = num;
    }
    subarrayResult = self.subarray(num, num2);
    setPrototypeOfResult = Object.setPrototypeOf(subarrayResult, Buffer.prototype);
    return subarrayResult;
  }
  readUIntLE(arg0, arg1, arg2) {
    self = this;
    tmp = arg0 >>> 0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      tmp3 = checkOffset;
      tmp4 = checkOffset(tmp, tmp2, self.length);
    }
    tmp5 = self[tmp];
    num = 1;
    num2 = 256;
    tmp6 = tmp5;
    if (1 < tmp2) {
      sum = tmp5 + self[tmp + num] * num2;
      num = num + 1;
      tmp6 = sum;
      while (num < tmp2) {
        num2 = num2 * 256;
        tmp5 = sum;
        tmp6 = sum;
        if (!num2) {
          break;
        }
      }
    }
    return tmp6;
  }
  readUIntBE(arg0, arg1, arg2) {
    self = this;
    tmp = arg0 >>> 0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      tmp3 = checkOffset;
      tmp4 = checkOffset(tmp, tmp2, self.length);
    }
    diff = tmp2 - 1;
    tmp6 = self[tmp + diff];
    num = 256;
    tmp7 = tmp6;
    if (diff > 0) {
      diff = diff - 1;
      sum = tmp6 + self[tmp + diff] * num;
      tmp7 = sum;
      while (diff > 0) {
        num = num * 256;
        tmp6 = sum;
        tmp7 = sum;
        if (!num) {
          break;
        }
      }
    }
    return tmp7;
  }
  readUInt8(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      tmp2 = checkOffset;
      num = 1;
      tmp3 = checkOffset(tmp, 1, self.length);
    }
    return self[tmp];
  }
  readUInt16LE(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      tmp2 = checkOffset;
      num = 2;
      tmp3 = checkOffset(tmp, 2, self.length);
    }
    return self[tmp] | self[tmp + 1] << 8;
  }
  readUInt16BE(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      tmp2 = checkOffset;
      num = 2;
      tmp3 = checkOffset(tmp, 2, self.length);
    }
    return self[tmp] << 8 | self[tmp + 1];
  }
  readUInt32LE(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      tmp2 = checkOffset;
      num = 4;
      tmp3 = checkOffset(tmp, 4, self.length);
    }
    return (self[tmp] | self[tmp + 1] << 8 | self[tmp + 2] << 16) + 16777216 * self[tmp + 3];
  }
  readUInt32BE(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      tmp2 = checkOffset;
      num = 4;
      tmp3 = checkOffset(tmp, 4, self.length);
    }
    return 16777216 * self[tmp] + (self[tmp + 1] << 16 | self[tmp + 2] << 8 | self[tmp + 3]);
  }
  readIntLE(arg0, arg1, arg2) {
    self = this;
    tmp = arg0 >>> 0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      tmp3 = checkOffset;
      tmp4 = checkOffset(tmp, tmp2, self.length);
    }
    tmp5 = self[tmp];
    num = 1;
    num2 = 256;
    tmp6 = tmp5;
    num3 = 1;
    if (1 < tmp2) {
      sum = tmp5 + self[tmp + num] * num2;
      num = num + 1;
      tmp6 = sum;
      num3 = num2;
      while (num < tmp2) {
        num2 = num2 * 256;
        tmp5 = sum;
        tmp6 = sum;
        num3 = num2;
        if (!num2) {
          break;
        }
      }
    }
    diff = tmp6;
    if (tmp6 >= num3 * 128) {
      tmp9 = globalThis;
      _Math = Math;
      num4 = 2;
      num5 = 8;
      diff = tmp6 - require("module_2");
    }
    return diff;
  }
  readIntBE(arg0, arg1, arg2) {
    self = this;
    tmp = arg0 >>> 0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      tmp3 = checkOffset;
      tmp4 = checkOffset(tmp, tmp2, self.length);
    }
    diff = tmp2 - 1;
    tmp6 = self[tmp + diff];
    num = 1;
    num2 = 256;
    tmp7 = tmp6;
    if (diff > 0) {
      diff = diff - 1;
      sum = tmp6 + self[tmp + diff] * num2;
      num = num2;
      tmp7 = sum;
      while (diff > 0) {
        num2 = num2 * 256;
        tmp6 = sum;
        tmp7 = sum;
        num = num2;
        if (!num2) {
          break;
        }
      }
    }
    diff1 = tmp7;
    if (tmp7 >= num * 128) {
      tmp10 = globalThis;
      _Math = Math;
      num3 = 2;
      num4 = 8;
      diff1 = tmp7 - require("module_2");
    }
    return diff1;
  }
  readInt8(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      tmp2 = checkOffset;
      num = 1;
      tmp3 = checkOffset(tmp, 1, self.length);
    }
    tmp4 = self[tmp];
    if (128 & self[tmp]) {
      num2 = 255;
      num3 = -1;
      num4 = 1;
      result = -1 * (255 - tmp4 + 1);
    } else {
      result = tmp4;
    }
    return result;
  }
  readInt16LE(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      tmp2 = checkOffset;
      num = 2;
      tmp3 = checkOffset(tmp, 2, self.length);
    }
    tmp4 = self[tmp] | self[tmp + 1] << 8;
    tmp5 = tmp4;
    if (32768 & tmp4) {
      num2 = 4294901760;
      tmp5 = 4294901760 | tmp4;
    }
    return tmp5;
  }
  readInt16BE(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      tmp2 = checkOffset;
      num = 2;
      tmp3 = checkOffset(tmp, 2, self.length);
    }
    tmp4 = self[tmp + 1] | self[tmp] << 8;
    tmp5 = tmp4;
    if (32768 & tmp4) {
      num2 = 4294901760;
      tmp5 = 4294901760 | tmp4;
    }
    return tmp5;
  }
  readInt32LE(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      tmp2 = checkOffset;
      num = 4;
      tmp3 = checkOffset(tmp, 4, self.length);
    }
    return self[tmp] | self[tmp + 1] << 8 | self[tmp + 2] << 16 | self[tmp + 3] << 24;
  }
  readInt32BE(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      tmp2 = checkOffset;
      num = 4;
      tmp3 = checkOffset(tmp, 4, self.length);
    }
    return self[tmp] << 24 | self[tmp + 1] << 16 | self[tmp + 2] << 8 | self[tmp + 3];
  }
  readFloatLE(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      tmp2 = checkOffset;
      num = 4;
      tmp3 = checkOffset(tmp, 4, self.length);
    }
    obj = arg1(arg6[1]);
    return obj.read(self, tmp, true, 23, 4);
  }
  readFloatBE(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      tmp2 = checkOffset;
      num = 4;
      tmp3 = checkOffset(tmp, 4, self.length);
    }
    obj = arg1(arg6[1]);
    return obj.read(self, tmp, false, 23, 4);
  }
  readDoubleLE(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      tmp2 = checkOffset;
      num = 8;
      tmp3 = checkOffset(tmp, 8, self.length);
    }
    obj = arg1(arg6[1]);
    return obj.read(self, tmp, true, 52, 8);
  }
  readDoubleBE(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      tmp2 = checkOffset;
      num = 8;
      tmp3 = checkOffset(tmp, 8, self.length);
    }
    obj = arg1(arg6[1]);
    return obj.read(self, tmp, false, 52, 8);
  }
  writeUIntLE(arg0, arg1, arg2, arg3) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    tmp3 = arg2 >>> 0;
    if (!arg3) {
      tmp4 = checkInt;
      tmp5 = globalThis;
      _Math = Math;
      num = 2;
      num2 = 8;
      num3 = 1;
      tmp6 = self;
      tmp7 = tmp;
      tmp8 = tmp2;
      tmp9 = tmp3;
      num4 = 0;
      tmp10 = checkInt(self, tmp, tmp2, tmp3, require("module_2") - 1, 0);
    }
    self[tmp2] = 255 & tmp;
    num5 = 1;
    num6 = 256;
    if (1 < tmp3) {
      self[tmp2 + num5] = tmp / num6 & 255;
      num5 = num5 + 1;
      while (num5 < tmp3) {
        num6 = num6 * 256;
        if (!num6) {
          break;
        }
      }
    }
    return tmp2 + tmp3;
  }
  writeUIntBE(arg0, arg1, arg2, arg3) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    tmp3 = arg2 >>> 0;
    if (!arg3) {
      tmp4 = checkInt;
      tmp5 = globalThis;
      _Math = Math;
      num = 2;
      num2 = 8;
      num3 = 1;
      tmp6 = self;
      tmp7 = tmp;
      tmp8 = tmp2;
      tmp9 = tmp3;
      num4 = 0;
      tmp10 = checkInt(self, tmp, tmp2, tmp3, require("module_2") - 1, 0);
    }
    diff = tmp3 - 1;
    self[tmp2 + diff] = 255 & tmp;
    diff1 = diff - 1;
    num5 = 256;
    if (diff1 >= 0) {
      self[tmp2 + diff1] = tmp / num5 & 255;
      diff1 = diff1 - 1;
      while (diff1 >= 0) {
        num5 = num5 * 256;
        if (!num5) {
          break;
        }
      }
    }
    return tmp2 + tmp3;
  }
  writeUInt8(arg0, arg1, arg2) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      tmp3 = checkInt;
      num = 1;
      num2 = 255;
      tmp4 = self;
      tmp5 = tmp;
      tmp6 = tmp2;
      num3 = 0;
      tmp7 = checkInt(self, tmp, tmp2, 1, 255, 0);
    }
    self[tmp2] = 255 & tmp;
    return tmp2 + 1;
  }
  writeUInt16LE(arg0, arg1, arg2) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      tmp3 = checkInt;
      num = 2;
      num2 = 65535;
      tmp4 = self;
      tmp5 = tmp;
      tmp6 = tmp2;
      num3 = 0;
      tmp7 = checkInt(self, tmp, tmp2, 2, 65535, 0);
    }
    self[tmp2] = 255 & tmp;
    self[tmp2 + 1] = tmp >>> 8;
    return tmp2 + 2;
  }
  writeUInt16BE(arg0, arg1, arg2) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      tmp3 = checkInt;
      num = 2;
      num2 = 65535;
      tmp4 = self;
      tmp5 = tmp;
      tmp6 = tmp2;
      num3 = 0;
      tmp7 = checkInt(self, tmp, tmp2, 2, 65535, 0);
    }
    self[tmp2] = tmp >>> 8;
    self[tmp2 + 1] = 255 & tmp;
    return tmp2 + 2;
  }
  writeUInt32LE(arg0, arg1, arg2) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      tmp3 = checkInt;
      num = 4;
      num2 = 4294967295;
      tmp4 = self;
      tmp5 = tmp;
      tmp6 = tmp2;
      num3 = 0;
      tmp7 = checkInt(self, tmp, tmp2, 4, 4294967295, 0);
    }
    self[tmp2 + 3] = tmp >>> 24;
    self[tmp2 + 2] = tmp >>> 16;
    self[tmp2 + 1] = tmp >>> 8;
    self[tmp2] = 255 & tmp;
    return tmp2 + 4;
  }
  writeUInt32BE(arg0, arg1, arg2) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      tmp3 = checkInt;
      num = 4;
      num2 = 4294967295;
      tmp4 = self;
      tmp5 = tmp;
      tmp6 = tmp2;
      num3 = 0;
      tmp7 = checkInt(self, tmp, tmp2, 4, 4294967295, 0);
    }
    self[tmp2] = tmp >>> 24;
    self[tmp2 + 1] = tmp >>> 16;
    self[tmp2 + 2] = tmp >>> 8;
    self[tmp2 + 3] = 255 & tmp;
    return tmp2 + 4;
  }
  writeIntLE(arg0, arg1, arg2, arg3) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg3) {
      tmp3 = globalThis;
      _Math = Math;
      num = 8;
      num2 = 2;
      num3 = 1;
      powResult = require("module_2");
      tmp5 = checkInt;
      tmp6 = self;
      tmp7 = tmp;
      tmp8 = tmp2;
      tmp9 = arg2;
      tmp10 = checkInt(self, tmp, tmp2, arg2, powResult - 1, -powResult);
    }
    self[tmp2] = 255 & tmp;
    tmp11 = tmp < 0;
    num4 = 1;
    num5 = 256;
    num6 = 0;
    if (1 < arg2) {
      while (true) {
        tmp12 = tmp11;
        if (tmp11) {
          tmp12 = 0 === num6;
        }
        if (tmp12) {
          tmp12 = 0 !== self[tmp2 + num4 - 1];
        }
        if (tmp12) {
          num6 = 1;
        }
        self[tmp2 + num4] = (tmp / num5 | 0) - num6 & 255;
        num4 = num4 + 1;
        if (num4 >= arg2) {
          break;
        } else {
          num5 = num5 * 256;
          if (!num5) {
            break;
          }
        }
      }
    }
    return tmp2 + arg2;
  }
  writeIntBE(arg0, arg1, arg2, arg3) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg3) {
      tmp3 = globalThis;
      _Math = Math;
      num = 8;
      num2 = 2;
      num3 = 1;
      powResult = require("module_2");
      tmp5 = checkInt;
      tmp6 = self;
      tmp7 = tmp;
      tmp8 = tmp2;
      tmp9 = arg2;
      tmp10 = checkInt(self, tmp, tmp2, arg2, powResult - 1, -powResult);
    }
    diff = arg2 - 1;
    self[tmp2 + diff] = 255 & tmp;
    diff1 = diff - 1;
    tmp13 = tmp < 0;
    num4 = 256;
    num5 = 0;
    if (diff1 >= 0) {
      while (true) {
        tmp14 = tmp13;
        if (tmp13) {
          tmp14 = 0 === num5;
        }
        if (tmp14) {
          tmp14 = 0 !== self[tmp2 + diff1 + 1];
        }
        if (tmp14) {
          num5 = 1;
        }
        self[tmp2 + diff1] = (tmp / num4 | 0) - num5 & 255;
        diff1 = diff1 - 1;
        if (diff1 < 0) {
          break;
        } else {
          num4 = num4 * 256;
          if (!num4) {
            break;
          }
        }
      }
    }
    return tmp2 + arg2;
  }
  writeInt8(arg0, arg1, arg2) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      tmp3 = checkInt;
      num = 1;
      num2 = 127;
      num3 = -128;
      tmp4 = self;
      tmp5 = tmp;
      tmp6 = tmp2;
      tmp7 = checkInt(self, tmp, tmp2, 1, 127, -128);
    }
    sum = tmp;
    if (tmp < 0) {
      num4 = 255;
      num5 = 1;
      sum = 255 + tmp + 1;
    }
    self[tmp2] = 255 & sum;
    return tmp2 + 1;
  }
  writeInt16LE(arg0, arg1, arg2) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      tmp3 = checkInt;
      num = 2;
      num2 = 32767;
      num3 = -32768;
      tmp4 = self;
      tmp5 = tmp;
      tmp6 = tmp2;
      tmp7 = checkInt(self, tmp, tmp2, 2, 32767, -32768);
    }
    self[tmp2] = 255 & tmp;
    self[tmp2 + 1] = tmp >>> 8;
    return tmp2 + 2;
  }
  writeInt16BE(arg0, arg1, arg2) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      tmp3 = checkInt;
      num = 2;
      num2 = 32767;
      num3 = -32768;
      tmp4 = self;
      tmp5 = tmp;
      tmp6 = tmp2;
      tmp7 = checkInt(self, tmp, tmp2, 2, 32767, -32768);
    }
    self[tmp2] = tmp >>> 8;
    self[tmp2 + 1] = 255 & tmp;
    return tmp2 + 2;
  }
  writeInt32LE(arg0, arg1, arg2) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      tmp3 = checkInt;
      num = 4;
      num2 = 2147483647;
      num3 = -2147483648;
      tmp4 = self;
      tmp5 = tmp;
      tmp6 = tmp2;
      tmp7 = checkInt(self, tmp, tmp2, 4, 2147483647, -2147483648);
    }
    self[tmp2] = 255 & tmp;
    self[tmp2 + 1] = tmp >>> 8;
    self[tmp2 + 2] = tmp >>> 16;
    self[tmp2 + 3] = tmp >>> 24;
    return tmp2 + 4;
  }
  writeInt32BE(arg0, arg1, arg2) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      tmp3 = checkInt;
      num = 4;
      num2 = 2147483647;
      num3 = -2147483648;
      tmp4 = self;
      tmp5 = tmp;
      tmp6 = tmp2;
      tmp7 = checkInt(self, tmp, tmp2, 4, 2147483647, -2147483648);
    }
    sum = tmp;
    if (tmp < 0) {
      num4 = 4294967295;
      num5 = 1;
      sum = 4294967295 + tmp + 1;
    }
    self[tmp2] = sum >>> 24;
    self[tmp2 + 1] = sum >>> 16;
    self[tmp2 + 2] = sum >>> 8;
    self[tmp2 + 3] = 255 & sum;
    return tmp2 + 4;
  }
  writeFloatLE(arg0, arg1, arg2) {
    return writeFloat(this, arg0, arg1, true, arg2);
  }
  writeFloatBE(arg0, arg1, arg2) {
    return writeFloat(this, arg0, arg1, false, arg2);
  }
  writeDoubleLE(arg0, arg1, arg2) {
    return writeDouble(this, arg0, arg1, true, arg2);
  }
  writeDoubleBE(arg0, arg1, arg2) {
    return writeDouble(this, arg0, arg1, false, arg2);
  }
  copy(arg0, arg1, arg2, arg3) {
    num = arg1;
    num2 = arg2;
    length = arg3;
    self = this;
    if (Buffer.isBuffer(arg0)) {
      if (!num2) {
        num2 = 0;
      }
      tmp6 = length;
      if (!length) {
        num3 = 0;
        tmp6 = 0 === length;
      }
      if (!tmp6) {
        length = self.length;
      }
      if (num >= arg0.length) {
        num = arg0.length;
      }
      if (!num) {
        num = 0;
      }
      num4 = 0;
      tmp7 = length > 0 && length < num2;
      if (tmp7) {
        length = num2;
      }
      if (length === num2) {
        return 0;
      } else {
        if (0 !== arg0.length) {
          if (0 !== self.length) {
            if (num < 0) {
              tmp25 = globalThis;
              _RangeError3 = RangeError;
              prototype4 = RangeError.prototype;
              tmp26 = new.target;
              str5 = "targetStart out of bounds";
              tmp27 = new.target;
              rangeError = new RangeError("targetStart out of bounds");
              tmp29 = rangeError;
              throw rangeError;
            } else {
              if (num2 >= 0) {
                if (num2 < self.length) {
                  if (length < 0) {
                    tmp15 = globalThis;
                    _RangeError = RangeError;
                    prototype2 = RangeError.prototype;
                    tmp16 = new.target;
                    str3 = "sourceEnd out of bounds";
                    tmp17 = new.target;
                    rangeError1 = new RangeError("sourceEnd out of bounds");
                    tmp19 = rangeError1;
                    throw rangeError1;
                  } else {
                    if (length > self.length) {
                      length = self.length;
                    }
                    if (arg0.length - num < length - num2) {
                      length = arg0.length - num + num2;
                    }
                    diff = length - num2;
                    tmp9 = self === arg0;
                    if (tmp9) {
                      tmp10 = globalThis;
                      _Uint8Array = Uint8Array;
                      str2 = "function";
                      if ("function" === typeof Uint8Array.prototype.copyWithin) {
                        copyWithinResult = self.copyWithin(num, num2, length);
                      }
                      return diff;
                    }
                    if (tmp9) {
                      if (num2 < num) {
                        if (num < length) {
                          num5 = 1;
                          diff1 = diff - 1;
                          if (diff1 >= 0) {
                            do {
                              arg0[diff1 + num] = self[diff1 + num2];
                              diff1 = diff1 - 1;
                            } while (diff1 >= 0);
                          }
                        }
                      }
                    }
                    tmp11 = globalThis;
                    _Uint8Array2 = Uint8Array;
                    set = Uint8Array.prototype.set;
                    callResult = set.call(arg0, self.subarray(num2, length), num);
                  }
                }
              }
              tmp20 = globalThis;
              _RangeError2 = RangeError;
              prototype3 = RangeError.prototype;
              tmp21 = new.target;
              str4 = "Index out of range";
              tmp22 = new.target;
              rangeError2 = new RangeError("Index out of range");
              tmp24 = rangeError2;
              throw rangeError2;
            }
          }
        }
        return 0;
      }
    } else {
      tmp = globalThis;
      _TypeError = TypeError;
      prototype = TypeError.prototype;
      tmp2 = new.target;
      str = "argument should be a Buffer";
      tmp3 = new.target;
      typeError = new TypeError("argument should be a Buffer");
      tmp5 = typeError;
      throw typeError;
    }
  }
  fill(arg0, arg1, arg2, arg3) {
    tmp = arg3;
    self = this;
    tmp2 = typeof arg0;
    if ("string" === tmp2) {
      if ("string" === typeof arg1) {
        length = self.length;
        num3 = 0;
        tmp = arg1;
      } else {
        num3 = arg1;
        length = arg2;
        if ("string" === typeof arg2) {
          length = self.length;
          num3 = arg1;
          tmp = arg2;
        }
      }
      if (undefined !== tmp) {
        if ("string" !== typeof tmp) {
          tmp24 = globalThis;
          _TypeError3 = TypeError;
          prototype3 = TypeError.prototype;
          tmp25 = new.target;
          str9 = "encoding must be a string";
          tmp26 = new.target;
          typeError = new TypeError("encoding must be a string");
          tmp28 = typeError;
          throw typeError;
        }
      }
      if ("string" === typeof tmp) {
        tmp6 = Buffer;
        if (!Buffer.isEncoding(tmp)) {
          tmp7 = globalThis;
          _TypeError = TypeError;
          str3 = "Unknown encoding: ";
          prototype = TypeError.prototype;
          tmp8 = new.target;
          tmp9 = new.target;
          typeError1 = new TypeError("Unknown encoding: " + tmp);
          tmp11 = typeError1;
          throw typeError1;
        }
      }
      num4 = 1;
      num = arg0;
      tmp3 = num3;
      tmp4 = length;
      tmp5 = tmp;
      if (1 === arg0.length) {
        num5 = 0;
        charCodeAtResult = require("module_0");
        str4 = "utf8";
        tmp13 = "utf8" === tmp;
        if (tmp13) {
          num6 = 128;
          tmp13 = charCodeAtResult < 128;
        }
        if (!tmp13) {
          str5 = "latin1";
          tmp13 = "latin1" === tmp;
        }
        num = arg0;
        tmp3 = num3;
        tmp4 = length;
        tmp5 = tmp;
        if (tmp13) {
          num = charCodeAtResult;
          tmp3 = num3;
          tmp4 = length;
          tmp5 = tmp;
        }
      }
    } else {
      str = "number";
      if ("number" === tmp2) {
        num2 = 255;
        num = arg0 & 255;
        tmp3 = arg1;
        tmp4 = arg2;
        tmp5 = tmp;
      } else {
        str2 = "boolean";
        num = arg0;
        tmp3 = arg1;
        tmp4 = arg2;
        tmp5 = tmp;
        if ("boolean" === tmp2) {
          tmp29 = globalThis;
          _Number = Number;
          num = Number(arg0);
          tmp3 = arg1;
          tmp4 = arg2;
          tmp5 = tmp;
        }
      }
    }
    if (tmp3 >= 0) {
      if (self.length >= tmp3) {
        if (self.length >= tmp4) {
          if (tmp4 <= tmp3) {
            return self;
          } else {
            sum = tmp3 >>> 0;
            tmp14 = undefined === tmp4 ? self.length : tmp4 >>> 0;
            if (!num) {
              num = 0;
            }
            str6 = "number";
            if ("number" === typeof num) {
              if (sum < tmp14) {
                do {
                  self[sum] = num;
                  sum = sum + 1;
                } while (sum < tmp14);
              }
            } else {
              tmp30 = Buffer;
              fromResult = num;
              if (!Buffer.isBuffer(num)) {
                tmp15 = Buffer;
                fromResult = Buffer.from(num, tmp5);
              }
              length2 = fromResult.length;
              if (0 === length2) {
                tmp17 = globalThis;
                _TypeError2 = TypeError;
                str7 = "The value \"";
                prototype2 = TypeError.prototype;
                tmp18 = new.target;
                str8 = "\" is invalid for argument \"value\"";
                tmp19 = new.target;
                typeError2 = new TypeError("The value \"" + num + "\" is invalid for argument \"value\"");
                tmp21 = typeError2;
                throw typeError2;
              } else {
                num7 = 0;
                if (0 < tmp14 - sum) {
                  do {
                    self[num7 + sum] = fromResult[num7 % length2];
                    num7 = num7 + 1;
                    diff = tmp14 - sum;
                  } while (num7 < diff);
                }
              }
            }
            return self;
          }
        }
      }
    }
    rangeError = new RangeError("Out of range index");
    throw rangeError;
  }
}
function from(buffer) {
  if ("string" === typeof buffer) {
    let tmp38 = "string" === typeof arg1;
    if (tmp38) {
      tmp38 = "" !== arg1;
    }
    let str9 = arg1;
    if (!tmp38) {
      str9 = "utf8";
    }
    if (Buffer.isEncoding(str9)) {
      const tmp46 = byteLength(buffer, str9) | 0;
      const arr2 = createBuffer(tmp46);
      const writeResult = arr2.write(buffer, str9);
      let substr = arr2;
      if (writeResult !== tmp46) {
        substr = arr2.slice(0, writeResult);
      }
      return substr;
    } else {
      const _TypeError4 = TypeError;
      const typeError = new TypeError("Unknown encoding: " + str9);
      throw typeError;
    }
  } else {
    const _ArrayBuffer2 = ArrayBuffer;
    if (ArrayBuffer.isView(buffer)) {
      return fromArrayLike(buffer);
    } else if (null == buffer) {
      const _TypeError3 = TypeError;
      const typeError1 = new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + tmp);
      throw typeError1;
    } else {
      const _ArrayBuffer3 = ArrayBuffer;
      if (!isInstance(buffer, ArrayBuffer)) {
        if (buffer) {
          const _ArrayBuffer = ArrayBuffer;
        }
        const _SharedArrayBuffer = SharedArrayBuffer;
        if ("undefined" !== typeof SharedArrayBuffer) {
          const _SharedArrayBuffer2 = SharedArrayBuffer;
          if (!isInstance(buffer, SharedArrayBuffer)) {
            if (buffer) {
              const _SharedArrayBuffer3 = SharedArrayBuffer;
            }
          }
          return fromArrayBuffer(buffer, arg1, arg2);
        }
        if ("number" === tmp) {
          const _TypeError2 = TypeError;
          const typeError2 = new TypeError("The \"value\" argument must not be of type number. Received type number");
          throw typeError2;
        } else {
          const tmp6 = buffer.valueOf && buffer.valueOf();
          if (null != tmp6) {
            if (tmp6 !== buffer) {
              return Buffer.from(tmp6, arg1, arg2);
            }
          }
          if (Buffer.isBuffer(buffer)) {
            const tmp15 = checked(buffer.length) | 0;
            const arr = createBuffer(tmp15);
            let tmp8 = arr;
            if (0 !== arr.length) {
              buffer.copy(arr, 0, 0, tmp15);
              tmp8 = arr;
            }
          } else if (undefined !== buffer.length) {
            if ("number" === typeof buffer.length) {
              if (!numberIsNaN(buffer.length)) {
                let tmp12 = fromArrayLike(buffer);
              }
              tmp8 = tmp12;
            }
            tmp12 = createBuffer(0);
          } else if ("Buffer" === buffer.type) {
            const _Array = Array;
            if (Array.isArray(buffer.data)) {
              tmp8 = fromArrayLike(buffer.data);
            }
          }
          if (tmp8) {
            return tmp8;
          } else {
            const _Symbol = Symbol;
            if ("undefined" !== typeof Symbol) {
              const _Symbol2 = Symbol;
              if (null != Symbol.toPrimitive) {
                const _Symbol3 = Symbol;
                if ("function" === typeof buffer[Symbol.toPrimitive]) {
                  const _Symbol4 = Symbol;
                  return Buffer.from(buffer[Symbol.toPrimitive]("string"), arg1, arg2);
                }
              }
            }
            const _TypeError = TypeError;
            const typeError3 = new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + tmp);
            throw typeError3;
          }
        }
      }
      return fromArrayBuffer(buffer, arg1, arg2);
    }
  }
}
function assertSize(arg0) {
  if ("number" !== typeof arg0) {
    const _TypeError = TypeError;
    const typeError = new TypeError("\"size\" argument must be of type number");
    throw typeError;
  } else if (arg0 < 0) {
    const _RangeError = RangeError;
    const rangeError = new RangeError("The value \"" + arg0 + "\" is invalid for option \"size\"");
    throw rangeError;
  }
}
function allocUnsafe(arg0) {
  assertSize(arg0);
  let num = 0;
  if (arg0 >= 0) {
    num = checked(arg0) | 0;
  }
  return createBuffer(num);
}
function fromArrayLike(arg0) {
  let num = 0;
  if (arg0.length >= 0) {
    num = checked(arg0.length) | 0;
  }
  const tmp2 = createBuffer(num);
  let num2 = 0;
  if (0 < num) {
    do {
      tmp2[num2] = 255 & arg0[num2];
      num2 = num2 + 1;
    } while (num2 < num);
  }
  return tmp2;
}
function fromArrayBuffer(byteLength, arg1, arg2) {
  if (arg1 >= 0) {
    if (byteLength.byteLength >= arg1) {
      let num = arg2;
      if (!arg2) {
        num = 0;
      }
      if (byteLength.byteLength < arg1 + num) {
        const _RangeError = RangeError;
        const rangeError = new RangeError("\"length\" is outside of buffer bounds");
        throw rangeError;
      } else {
        if (undefined === arg1) {
          if (undefined === arg2) {
            const _Uint8Array3 = Uint8Array;
            let uint8Array = new Uint8Array(byteLength);
          }
          const _Object = Object;
          Object.setPrototypeOf(uint8Array, Buffer.prototype);
          return uint8Array;
        }
        if (undefined === arg2) {
          const _Uint8Array2 = Uint8Array;
          uint8Array = new Uint8Array(byteLength, arg1);
        } else {
          const _Uint8Array = Uint8Array;
          uint8Array = new Uint8Array(byteLength, arg1, arg2);
        }
      }
    }
  }
  const rangeError1 = new RangeError("\"offset\" is outside of buffer bounds");
  throw rangeError1;
}
function checked(arg0) {
  if (arg0 >= v2147483647) {
    const _RangeError = RangeError;
    const rangeError = new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + v2147483647.toString(16) + " bytes");
    throw rangeError;
  } else {
    return arg0 | 0;
  }
}
function byteLength(byteLength) {
  if (Buffer.isBuffer(byteLength)) {
    return byteLength.length;
  } else {
    const _ArrayBuffer = ArrayBuffer;
    if (!ArrayBuffer.isView(byteLength)) {
      const _ArrayBuffer2 = ArrayBuffer;
      if (!isInstance(byteLength, ArrayBuffer)) {
        if ("string" !== typeof byteLength) {
          const _TypeError = TypeError;
          const typeError = new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + tmp3);
          throw typeError;
        } else {
          let tmp4 = arguments.length > 2;
          if (tmp4) {
            tmp4 = true === arguments[2];
          }
          let formatted = arg1;
          let flag2 = false;
          if (!tmp4) {
            formatted = arg1;
            flag2 = false;
            if (0 === length) {
              return 0;
            }
          }
          while ("ascii" !== formatted) {
            let str9 = "latin1";
            if ("latin1" === formatted) {
              break;
            } else {
              let str10 = "binary";
              if ("binary" === formatted) {
                break;
              } else {
                let str11 = "utf8";
                if ("utf8" !== formatted) {
                  let str12 = "utf-8";
                  if ("utf-8" !== formatted) {
                    let str13 = "ucs2";
                    if ("ucs2" !== formatted) {
                      let str3 = "ucs-2";
                      if ("ucs-2" !== formatted) {
                        let str4 = "utf16le";
                        if ("utf16le" !== formatted) {
                          let str5 = "utf-16le";
                          if ("utf-16le" !== formatted) {
                            let str6 = "hex";
                            if ("hex" === formatted) {
                              let num3 = 1;
                              return length >>> 1;
                            } else {
                              let str7 = "base64";
                              if ("base64" === formatted) {
                                let tmp8 = base64ToBytes;
                                return base64ToBytes(byteLength).length;
                              } else if (flag2) {
                                let num2 = -1;
                                if (!tmp4) {
                                  let tmp7 = utf8ToBytes;
                                  num2 = utf8ToBytes(byteLength).length;
                                }
                                return num2;
                              } else {
                                let text = `${tmp5}`;
                                formatted = `${tmp5}`.toLowerCase();
                                flag2 = true;
                                // continue
                              }
                            }
                          }
                        }
                      }
                    }
                    return 2 * length;
                  }
                }
                let tmp9 = utf8ToBytes;
                return utf8ToBytes(byteLength).length;
              }
            }
          }
          return byteLength.length;
        }
      }
    }
    return byteLength.byteLength;
  }
}
function slowToString(arg0, arg1, arg2) {
  let str = arg0;
  let num = arg1;
  let length = arg2;
  const self = this;
  let tmp = undefined === arg1;
  if (!tmp) {
    tmp = num < 0;
  }
  if (tmp) {
    num = 0;
  }
  if (num > self.length) {
    return "";
  } else {
    if (tmp2) {
      length = self.length;
    }
    if (length <= 0) {
      return "";
    } else if (length >>> 0 <= num >>> 0) {
      return "";
    } else {
      let flag = false;
      if (!str) {
        str = "utf8";
        flag = false;
      }
      while ("hex" !== str) {
        let str11 = "utf8";
        if ("utf8" !== str) {
          let str12 = "utf-8";
          if ("utf-8" !== str) {
            let str13 = "ascii";
            if ("ascii" === str) {
              let tmp13 = asciiSlice;
              return asciiSlice(self, tmp17, tmp16);
            } else {
              let str14 = "latin1";
              if ("latin1" !== str) {
                let str15 = "binary";
                if ("binary" !== str) {
                  let str16 = "base64";
                  if ("base64" === str) {
                    let tmp11 = base64Slice;
                    return base64Slice(self, tmp17, tmp16);
                  } else {
                    let str3 = "ucs2";
                    if ("ucs2" !== str) {
                      let str4 = "ucs-2";
                      if ("ucs-2" !== str) {
                        let str5 = "utf16le";
                        if ("utf16le" !== str) {
                          let str6 = "utf-16le";
                          if ("utf-16le" !== str) {
                            if (flag) {
                              let tmp5 = globalThis;
                              let _TypeError = TypeError;
                              let str7 = "Unknown encoding: ";
                              let tmp6 = new.target;
                              let tmp7 = new.target;
                              let typeError = new TypeError("Unknown encoding: " + str);
                              let tmp9 = typeError;
                              throw typeError;
                            } else {
                              let text = `${str}`;
                              str = `${str}`.toLowerCase();
                              flag = true;
                              // continue
                            }
                          }
                        }
                      }
                    }
                    let tmp10 = utf16leSlice;
                    return utf16leSlice(self, tmp17, tmp16);
                  }
                }
              }
              let tmp12 = latin1Slice;
              return latin1Slice(self, tmp17, tmp16);
            }
          }
        }
        let tmp14 = utf8Slice;
        return utf8Slice(self, tmp17, tmp16);
      }
      return hexSlice(self, tmp17, tmp16);
    }
    const tmp2 = undefined === length || length > self.length;
  }
}
function swap(arg0, arg1, arg2) {
  arg0[arg1] = arg0[arg2];
  arg0[arg2] = arg0[arg1];
}
function bidirectionalIndexOf(arg0, arg1, arg2, arg3, arg4) {
  if (0 === arg0.length) {
    return -1;
  } else {
    let num2 = 0;
    let tmp = arg2;
    if ("string" !== typeof arg2) {
      num2 = 2147483647;
      tmp = arg3;
      if (arg2 <= 2147483647) {
        num2 = arg2;
        tmp = arg3;
        if (arg2 < -2147483648) {
          num2 = -2147483648;
          tmp = arg3;
        }
      }
    }
    let tmp3 = +num2;
    if (numberIsNaN(tmp3)) {
      let num4 = 0;
      if (!arg4) {
        num4 = arg0.length - 1;
      }
      tmp3 = num4;
    }
    let num6 = tmp3;
    if (tmp3 < 0) {
      num6 = arg0.length + tmp3;
    }
    if (num6 >= arg0.length) {
      if (arg4) {
        return -1;
      } else {
        num6 = arg0.length - 1;
      }
    } else if (num6 < 0) {
      num6 = 0;
      if (!arg4) {
        return -1;
      }
    }
    let fromResult = arg1;
    if ("string" === typeof arg1) {
      fromResult = Buffer.from(arg1, tmp);
    }
    if (Buffer.isBuffer(fromResult)) {
      let num10 = -1;
      if (0 !== fromResult.length) {
        num10 = arrayIndexOf(arg0, fromResult, num6, tmp, arg4);
      }
      return num10;
    } else if ("number" === typeof fromResult) {
      const _Uint8Array = Uint8Array;
      if ("function" === typeof Uint8Array.prototype.indexOf) {
        const _Uint8Array2 = Uint8Array;
        if (arg4) {
          const indexOf = prototype.indexOf;
          prototype = indexOf.call;
          let prototypeResult = prototype(arg0, tmp11, num6);
        } else {
          const lastIndexOf = prototype.lastIndexOf;
          prototypeResult = lastIndexOf.call(arg0, tmp11, num6);
        }
      } else {
        const items = [tmp11];
        return arrayIndexOf(arg0, items, num6, tmp, arg4);
      }
    } else {
      const _TypeError = TypeError;
      prototype = TypeError.prototype;
      const typeError = new TypeError("val must be string, number or Buffer");
      throw typeError;
    }
  }
}
function arrayIndexOf(readUInt16BE, readUInt16BE, result2) {
  function read(readUInt16BE, result2) {
    if (1 === closure_0) {
      let uInt16BE = readUInt16BE[result2];
    } else {
      uInt16BE = readUInt16BE.readUInt16BE(result2 * closure_0);
    }
    return uInt16BE;
  }
  let closure_0 = 1;
  let num = 1;
  let result = length;
  let result1 = length2;
  if (undefined !== arg3) {
    const _String = String;
    const formatted = String(arg3).toLowerCase();
    if ("ucs2" !== formatted) {
      if ("ucs-2" !== formatted) {
        if ("utf16le" !== formatted) {
          num = 1;
          result = length;
          result1 = length2;
        }
      }
    }
    if (readUInt16BE.length >= 2) {
      if (readUInt16BE.length >= 2) {
        closure_0 = 2;
        result = length / 2;
        result1 = length2 / 2;
        result2 = result2 / 2;
        num = 2;
      }
    }
    return -1;
  }
  if (arg4) {
    let num6 = -1;
    if (result2 < result) {
      while (true) {
        let tmp11 = -1 === num6;
        let tmp12 = result2;
        let num7 = 0;
        let readResult = read(readUInt16BE, result2);
        if (!tmp11) {
          num7 = result2 - num6;
        }
        if (readResult === read(readUInt16BE, num7)) {
          if (tmp11) {
            num6 = result2;
          }
          let tmp14 = num6;
          let diff = result2;
          let num8 = num6;
          if (result2 - num6 + 1 === result1) {
            break;
          }
        } else {
          diff = result2;
          if (-1 !== num6) {
            diff = result2 - (result2 - num6);
          }
          num8 = -1;
        }
        result2 = diff + 1;
        num6 = num8;
      }
      return num6 * num;
    }
  } else {
    let diff1 = result2;
    if (result2 + result1 > result) {
      diff1 = result - result1;
    }
    if (diff1 >= 0) {
      while (true) {
        let tmp7 = diff1;
        let num4 = 0;
        let flag = true;
        if (0 < result1) {
          let readResult1 = read(readUInt16BE, diff1 + num4);
          let tmp9 = num4;
          flag = false;
          while (readResult1 === read(readUInt16BE, num4)) {
            num4 = num4 + 1;
            flag = true;
            if (num4 >= result1) {
              break;
            }
          }
        }
        if (flag) {
          break;
        } else {
          diff1 = diff1 - 1;
        }
      }
      return diff1;
    }
  }
  return -1;
}
function hexWrite(arg0, str) {
  const tmp = Number(arg2) || 0;
  const diff = arg0.length - tmp;
  let NumberResult = diff;
  if (arg3) {
    const _Number = Number;
    NumberResult = Number(arg3);
    if (NumberResult > diff) {
      NumberResult = diff;
    }
  }
  if (NumberResult > str.length / 2) {
    NumberResult = length / 2;
  }
  let num = 0;
  let num2 = 0;
  if (0 < NumberResult) {
    const _parseInt = parseInt;
    const parsed = parseInt(str.substr(2 * num2, 2), 16);
    while (!numberIsNaN(parsed)) {
      arg0[tmp + num2] = parsed;
      num2 = num2 + 1;
      num = num2;
    }
    return num2;
  }
  return num;
}
function utf8Write(arg0, arg1, arg2, arg3) {
  return blitBuffer(utf8ToBytes(arg1, arg0.length - arg2), arg0, arg2, arg3);
}
function asciiWrite(arg0, str) {
  let length;
  const items = [];
  let num = 0;
  if (0 < str.length) {
    do {
      let arr = items.push(255 & str.charCodeAt(num));
      num = num + 1;
      length = str.length;
    } while (num < length);
  }
  return blitBuffer(items, arg0, arg2, arg3);
}
function latin1Write(arg0, arg1, arg2, arg3) {
  return asciiWrite(arg0, arg1, arg2, arg3);
}
function base64Write(arg0, arg1, arg2, arg3) {
  return blitBuffer(base64ToBytes(arg1), arg0, arg2, arg3);
}
function ucs2Write(arg0, str) {
  const items = [];
  if (0 < str.length) {
    let diff = tmp2 - 2;
    let num4 = 0;
    if (diff >= 0) {
      const charCodeAtResult = str.charCodeAt(num4);
      items.push(charCodeAtResult % 256);
      items.push(charCodeAtResult >> 8);
      num4 = num4 + 1;
      while (num4 < str.length) {
        diff = diff - 2;
        if (diff < 0) {
          break;
        }
      }
      const tmp5 = charCodeAtResult >> 8;
    }
  }
  return blitBuffer(items, arg0, arg2, arg3);
}
function base64Slice(arr) {
  if (0 === arg1) {
    if (arg2 === arr.length) {
      let fromByteArrayResult = arg1(arg6[0]).fromByteArray(arr);
      const obj2 = arg1(arg6[0]);
    }
    return fromByteArrayResult;
  }
  fromByteArrayResult = arg1(arg6[0]).fromByteArray(arr.slice(arg1, arg2));
}
function utf8Slice(arg0, arg1, arg2) {
  let sum1;
  let sum = arg1;
  const bound = Math.min(arg0.length, arg2);
  const items = [];
  if (arg1 < bound) {
    do {
      let tmp7 = arg0[sum];
      let num = 4;
      if (tmp7 <= 239) {
        let num2 = 3;
        if (tmp7 <= 223) {
          let num3 = 1;
          if (tmp7 > 191) {
            num3 = 2;
          }
          num2 = num3;
        }
        num = num2;
      }
      let tmp8 = tmp3;
      let tmp9 = tmp4;
      let tmp10 = tmp5;
      let tmp11 = tmp6;
      let tmp12 = null;
      if (sum + num <= bound) {
        if (1 === num) {
          tmp8 = tmp3;
          tmp9 = tmp4;
          tmp10 = tmp5;
          tmp11 = tmp6;
          tmp12 = null;
          if (tmp7 < 128) {
            tmp8 = tmp3;
            tmp9 = tmp4;
            tmp10 = tmp5;
            tmp11 = tmp6;
            tmp12 = tmp7;
          }
        } else if (2 === num) {
          let tmp22 = arg0[sum + 1];
          let tmp23 = 128 === (192 & tmp22);
          let tmp24 = tmp6;
          if (tmp23) {
            let tmp25 = (31 & tmp7) << 6 | 63 & tmp22;
            tmp23 = tmp25 > 127;
            tmp24 = tmp25;
          }
          tmp8 = tmp22;
          tmp9 = tmp4;
          tmp10 = tmp5;
          tmp11 = tmp24;
          tmp12 = null;
          if (tmp23) {
            tmp8 = tmp22;
            tmp9 = tmp4;
            tmp10 = tmp5;
            tmp11 = tmp24;
            tmp12 = tmp24;
          }
        } else if (3 === num) {
          let tmp16 = arg0[sum + 1];
          let tmp17 = arg0[sum + 2];
          let tmp18 = 128 === (192 & tmp16) && 128 === (192 & tmp17);
          let tmp19 = tmp6;
          if (tmp18) {
            let tmp20 = (15 & tmp7) << 12 | (63 & tmp16) << 6 | 63 & tmp17;
            tmp18 = tmp20 > 2047;
            tmp19 = tmp20;
          }
          if (tmp18) {
            let tmp21 = tmp19 < 55296 || tmp19 > 57343;
            tmp18 = tmp21;
          }
          tmp8 = tmp16;
          tmp9 = tmp17;
          tmp10 = tmp5;
          tmp11 = tmp19;
          tmp12 = null;
          if (tmp18) {
            tmp8 = tmp16;
            tmp9 = tmp17;
            tmp10 = tmp5;
            tmp11 = tmp19;
            tmp12 = tmp19;
          }
        } else {
          tmp8 = tmp3;
          tmp9 = tmp4;
          tmp10 = tmp5;
          tmp11 = tmp6;
          tmp12 = null;
          if (4 === num) {
            let tmp32 = arg0[sum + 1];
            let tmp33 = arg0[sum + 2];
            let tmp34 = arg0[sum + 3];
            let tmp13 = 128 === (192 & tmp32) && 128 === (192 & tmp33) && 128 === (192 & tmp34);
            let tmp14 = tmp6;
            if (tmp13) {
              let tmp15 = (15 & tmp7) << 18 | (63 & tmp32) << 12 | (63 & tmp33) << 6 | 63 & tmp34;
              tmp13 = tmp15 > 65535;
              tmp14 = tmp15;
            }
            if (tmp13) {
              tmp13 = tmp14 < 1114112;
            }
            tmp8 = tmp32;
            tmp9 = tmp33;
            tmp10 = tmp34;
            tmp11 = tmp14;
            tmp12 = null;
            if (tmp13) {
              tmp8 = tmp32;
              tmp9 = tmp33;
              tmp10 = tmp34;
              tmp11 = tmp14;
              tmp12 = tmp14;
            }
          }
        }
      }
      let num4 = 65533;
      let num5 = 1;
      if (null !== tmp12) {
        num5 = num;
        num4 = tmp12;
        if (tmp12 > 65535) {
          let diff = tmp12 - 65536;
          let arr = items.push(diff >>> 10 & 1023 | 55296);
          num4 = 56320 | 1023 & diff;
          num5 = num;
        }
      }
      arr = items.push(num4);
      sum = sum + num5;
      let tmp3 = tmp8;
      let tmp4 = tmp9;
      let tmp5 = tmp10;
      let tmp6 = tmp11;
    } while (sum < bound);
  }
  if (items.length <= closure_4) {
    const _String3 = String;
    const _String4 = String;
    let str2 = fromCharCode2.apply(String, items);
  } else {
    let num6 = 0;
    let str = "";
    str2 = "";
    if (0 < length) {
      do {
        let _String = String;
        let _String2 = String;
        let tmp30 = closure_4;
        sum1 = num6 + closure_4;
        str = `${tmp29(String, arr.slice(num6, tmp31))}`;
        str2 = str;
        num6 = sum1;
      } while (sum1 < length);
    }
  }
  return str2;
}
function asciiSlice(arg0, arg1, arg2) {
  let sum = arg1;
  const bound = Math.min(arg0.length, arg2);
  let str = "";
  let str2 = "";
  if (arg1 < bound) {
    do {
      let _String = String;
      str = `${String.fromCharCode(127 & arg0[tmp])}`;
      sum = sum + 1;
      str2 = str;
    } while (sum < bound);
  }
  return str2;
}
function latin1Slice(arg0, arg1, arg2) {
  let sum = arg1;
  const bound = Math.min(arg0.length, arg2);
  let str = "";
  let str2 = "";
  if (arg1 < bound) {
    do {
      let _String = String;
      str = `${String.fromCharCode(arg0[tmp])}`;
      sum = sum + 1;
      str2 = str;
    } while (sum < bound);
  }
  return str2;
}
function hexSlice(arg0, arg1, arg2) {
  let num = arg1;
  let tmp = arg2;
  let tmp2 = !arg1;
  if (!tmp2) {
    tmp2 = num < 0;
  }
  if (tmp2) {
    num = 0;
  }
  let tmp3 = !tmp;
  if (!tmp3) {
    tmp3 = tmp < 0;
  }
  if (!tmp3) {
    tmp3 = tmp > length;
  }
  if (tmp3) {
    tmp = length;
  }
  let str = "";
  let str2 = "";
  while (num < tmp) {
    let tmp4 = closure_6;
    str = `${closure_6[arg0[num]]}`;
    num = num + 1;
    str2 = str;
  }
  return str2;
}
function utf16leSlice(arr) {
  let length;
  const substr = arr.slice(arg1, arg2);
  let num = 0;
  let str = "";
  let str2 = "";
  if (0 < substr.length) {
    do {
      let _String = String;
      str = `${String.fromCharCode(arr[num] + 256 * arr[num + 1])}`;
      num = num + 2;
      str2 = str;
      length = substr.length;
    } while (num < length);
  }
  return str2;
}
function checkOffset(arg0, arg1, arg2) {
  if (arg0 % 1 === 0) {
    if (arg0 >= 0) {
      if (arg0 + arg1 > arg2) {
        const _RangeError = RangeError;
        const rangeError = new RangeError("Trying to access beyond buffer length");
        throw rangeError;
      }
    }
  }
  const rangeError1 = new RangeError("offset is not uint");
  throw rangeError1;
}
function checkInt(arg0, arg1, arg2, arg3, arg4, arg5) {
  if (Buffer.isBuffer(arg0)) {
    if (arg1 <= arg4) {
      if (arg1 >= arg5) {
        if (arg2 + arg3 > arg0.length) {
          const _RangeError = RangeError;
          const rangeError = new RangeError("Index out of range");
          throw rangeError;
        }
      }
    }
    const _RangeError2 = RangeError;
    const rangeError1 = new RangeError("\"value\" argument is out of bounds");
    throw rangeError1;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
    throw typeError;
  }
}
function checkIEEE754(arg0, arg1, arg2, arg3, arg4, arg5) {
  if (arg2 + arg3 > arg0.length) {
    const _RangeError2 = RangeError;
    const rangeError = new RangeError("Index out of range");
    throw rangeError;
  } else if (arg2 < 0) {
    const _RangeError = RangeError;
    const rangeError1 = new RangeError("Index out of range");
    throw rangeError1;
  }
}
function writeFloat(arg0, arg1, arg2, arg3, arg4) {
  if (!arg4) {
    checkIEEE754(arg0, undefined, tmp2, 4);
  }
  arg1(arg6[1]).write(arg0, +arg1, arg2 >>> 0, arg3, 23, 4);
  return (arg2 >>> 0) + 4;
}
function writeDouble(arg0, arg1, arg2, arg3, arg4) {
  if (!arg4) {
    checkIEEE754(arg0, undefined, tmp2, 8);
  }
  arg1(arg6[1]).write(arg0, +arg1, arg2 >>> 0, arg3, 52, 8);
  return (arg2 >>> 0) + 8;
}
function utf8ToBytes(str) {
  let num = arg1;
  if (!arg1) {
    num = Infinity;
  }
  const items = [];
  let tmp = null;
  let num2 = 0;
  if (0 < str.length) {
    while (true) {
      let charCodeAtResult = str.charCodeAt(num2);
      let tmp3 = num2;
      if (charCodeAtResult > 55295) {
        if (charCodeAtResult < 57344) {
          if (tmp) {
            if (charCodeAtResult < 56320) {
              let diff = num - 3;
              let tmp10 = diff;
              let tmp11 = charCodeAtResult;
              if (diff > -1) {
                let arr = items.push(239, 191, 189);
                tmp10 = diff;
                tmp11 = charCodeAtResult;
              }
            } else {
              let sum = 65536 + (tmp - 55296 << 10 | charCodeAtResult - 56320);
              let tmp7 = num;
            }
            if (sum < 128) {
              let diff1 = tmp7 - 1;
              if (diff1 >= 0) {
                arr = items.push(sum);
                tmp10 = diff1;
                tmp11 = null;
              }
            } else if (sum < 2048) {
              let diff2 = tmp7 - 2;
              if (diff2 >= 0) {
                let arr1 = items.push(sum >> 6 | 192, 63 & sum | 128);
                tmp10 = diff2;
                tmp11 = null;
              }
            } else if (sum < 65536) {
              let diff3 = tmp7 - 3;
              if (diff3 >= 0) {
                let arr2 = items.push(sum >> 12 | 224, sum >> 6 & 63 | 128, 63 & sum | 128);
                tmp10 = diff3;
                tmp11 = null;
              }
            } else if (sum >= 1114112) {
              break;
            } else {
              let diff4 = tmp7 - 4;
              if (diff4 >= 0) {
                let tmp29 = items;
                let arr3 = items.push(sum >> 18 | 240, sum >> 12 & 63 | 128, sum >> 6 & 63 | 128, 63 & sum | 128);
                tmp10 = diff4;
                tmp11 = null;
              }
            }
          } else if (charCodeAtResult > 56319) {
            let diff5 = num - 3;
            tmp11 = tmp;
            tmp10 = diff5;
            if (diff5 > -1) {
              let arr4 = items.push(239, 191, 189);
              tmp10 = diff5;
              tmp11 = tmp;
            }
          } else {
            tmp10 = num;
            tmp11 = charCodeAtResult;
            if (num2 + 1 === length) {
              let diff6 = num - 3;
              tmp11 = tmp;
              tmp10 = diff6;
              if (diff6 > -1) {
                let arr5 = items.push(239, 191, 189);
                tmp10 = diff6;
                tmp11 = tmp;
              }
            }
          }
          num2 = num2 + 1;
          num = tmp10;
          tmp = tmp11;
        }
      }
      let tmp4 = tmp;
      let tmp5 = num;
      if (tmp) {
        let diff7 = num - 3;
        tmp4 = diff7 > -1;
        tmp5 = diff7;
      }
      tmp7 = tmp5;
      sum = charCodeAtResult;
      if (tmp4) {
        let arr6 = items.push(239, 191, 189);
        tmp7 = tmp5;
        sum = charCodeAtResult;
      }
    }
    const _Error = Error;
    const error = new Error("Invalid code point");
    throw error;
  }
  return items;
}
function base64ToBytes(arg0) {
  let result;
  const obj = arg1(arg6[0]);
  const str = arg0.split("=")[0];
  let str3 = "";
  const replaced = arg0.split("=")[0].trim().replace(closure_5, "");
  if (replaced.length >= 2) {
    let tmp = replaced;
    let tmp2 = replaced;
    if (replaced.length % 4 !== 0) {
      do {
        let text = `${tmp}=`;
        tmp = text;
        tmp2 = text;
        result = `${tmp}=`.length % 4;
      } while (result !== 0);
    }
    str3 = tmp2;
  }
  return obj.toByteArray(str3);
}
function blitBuffer(arg0, arg1, arg2, arg3) {
  let num = 0;
  if (0 < arg3) {
    num = 0;
    if (arg2 < arg1.length) {
      let num2 = 0;
      num = 0;
      if (0 < arg0.length) {
        arg1[num2 + arg2] = arg0[num2];
        const sum = num2 + 1;
        num = sum;
        while (sum < arg3) {
          num = sum;
          if (sum + arg2 >= arg1.length) {
            break;
          } else {
            num2 = sum;
            num = sum;
            if (sum >= arg0.length) {
              break;
            }
          }
        }
      }
    }
  }
  return num;
}
function isInstance(buffer, Uint8Array) {
  let tmp = buffer instanceof Uint8Array;
  if (!tmp) {
    tmp = null != buffer && null != buffer.constructor && null != buffer.constructor.name && buffer.constructor.name === Uint8Array.name;
    const tmp3 = null != buffer && null != buffer.constructor && null != buffer.constructor.name && buffer.constructor.name === Uint8Array.name;
  }
  return tmp;
}
function numberIsNaN(length) {
  return length != length;
}
let forResult = null;
if ("function" === typeof Symbol) {
  const _Symbol = Symbol;
  forResult = null;
  if ("function" === typeof Symbol.for) {
    const _Symbol2 = Symbol;
    forResult = Symbol.for("nodejs.util.inspect.custom");
  }
}
arg5.Buffer = Buffer;
arg5.SlowBuffer = function SlowBuffer(arg0) {
  let num = arg0;
  if (+arg0 != arg0) {
    num = 0;
  }
  return Buffer.alloc(+num);
};
arg5.INSPECT_MAX_BYTES = 50;
let closure_3 = 2147483647;
arg5.kMaxLength = 2147483647;
Buffer.TYPED_ARRAY_SUPPORT = function typedArraySupport() {
  const uint8Array = new Uint8Array(1);
  const obj = {
    foo() {
      return 42;
    }
  };
  Object.setPrototypeOf(obj, Uint8Array.prototype);
  Object.setPrototypeOf(uint8Array, obj);
  return 42 === uint8Array.foo();
}();
let TYPED_ARRAY_SUPPORT = Buffer.TYPED_ARRAY_SUPPORT;
if (!TYPED_ARRAY_SUPPORT) {
  const _console = console;
  TYPED_ARRAY_SUPPORT = "undefined" === typeof console;
}
if (!TYPED_ARRAY_SUPPORT) {
  const _console2 = console;
  TYPED_ARRAY_SUPPORT = "function" !== typeof console.error;
}
if (!TYPED_ARRAY_SUPPORT) {
  const _console3 = console;
  console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
}
let obj = {
  enumerable: true,
  get() {
    if (Buffer.isBuffer(this)) {
      return this.buffer;
    }
  }
};
Object.defineProperty(Buffer.prototype, "parent", obj);
obj = {
  enumerable: true,
  get() {
    if (Buffer.isBuffer(this)) {
      return this.byteOffset;
    }
  }
};
Object.defineProperty(Buffer.prototype, "offset", obj);
Buffer.poolSize = 8192;
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
Buffer.byteLength = byteLength;
Buffer.prototype._isBuffer = true;
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
if (forResult) {
  Buffer.prototype[forResult] = Buffer.prototype.inspect;
}
let closure_4 = 4096;
let closure_5 = /[^+/0-9A-Za-z-_]/g;
const array = new Array(256);
let num = 0;
let num2 = 0;
do {
  do {
    array[16 * num + num2] = "0123456789abcdef"[num] + "0123456789abcdef"[num2];
    num2 = num2 + 1;
  } while (num2 < 16);
  num = num + 1;
} while (num < 16);
