// Module ID: 4694
// Function ID: 40864
// Name: md5cycle
// Dependencies: []

// Module 4694 (md5cycle)
const fn = (arg0) => {
  let closure_0 = arg0;
  function md5cycle(items, items1) {
    let sum47 = items[1];
    const sum = items[0] + ((sum47 & tmp2 | ~sum47 & tmp3) + items1[0] - 680876936 | 0);
    const sum1 = tmp3 + ((tmp5 & sum47 | ~tmp5 & tmp2) + items1[1] - 389564586 | 0);
    const tmp7 = (sum1 << 12 | sum1 >>> 20) + ((sum << 7 | sum >>> 25) + sum47 | 0) | 0;
    const sum2 = tmp2 + ((tmp7 & tmp5 | ~tmp7 & sum47) + items1[2] + 606105819 | 0);
    const sum3 = sum47 + ((tmp9 & tmp7 | ~tmp9 & tmp5) + items1[3] - 1044525330 | 0);
    const tmp11 = (sum3 << 22 | sum3 >>> 10) + ((sum2 << 17 | sum2 >>> 15) + tmp7 | 0) | 0;
    const sum4 = tmp5 + ((tmp11 & tmp9 | ~tmp11 & tmp7) + items1[4] - 176418897 | 0);
    const sum5 = tmp7 + ((tmp13 & tmp11 | ~tmp13 & tmp9) + items1[5] + 1200080426 | 0);
    const tmp15 = (sum5 << 12 | sum5 >>> 20) + ((sum4 << 7 | sum4 >>> 25) + tmp11 | 0) | 0;
    const sum6 = tmp9 + ((tmp15 & tmp13 | ~tmp15 & tmp11) + items1[6] - 1473231341 | 0);
    const sum7 = tmp11 + ((tmp17 & tmp15 | ~tmp17 & tmp13) + items1[7] - 45705983 | 0);
    const tmp19 = (sum7 << 22 | sum7 >>> 10) + ((sum6 << 17 | sum6 >>> 15) + tmp15 | 0) | 0;
    const sum8 = tmp13 + ((tmp19 & tmp17 | ~tmp19 & tmp15) + items1[8] + 1770035416 | 0);
    const sum9 = tmp15 + ((tmp21 & tmp19 | ~tmp21 & tmp17) + items1[9] - 1958414417 | 0);
    const tmp23 = (sum9 << 12 | sum9 >>> 20) + ((sum8 << 7 | sum8 >>> 25) + tmp19 | 0) | 0;
    const sum10 = tmp17 + ((tmp23 & tmp21 | ~tmp23 & tmp19) + items1[10] - 42063 | 0);
    const sum11 = tmp19 + ((tmp25 & tmp23 | ~tmp25 & tmp21) + items1[11] - 1990404162 | 0);
    const tmp27 = (sum11 << 22 | sum11 >>> 10) + ((sum10 << 17 | sum10 >>> 15) + tmp23 | 0) | 0;
    const sum12 = tmp21 + ((tmp27 & tmp25 | ~tmp27 & tmp23) + items1[12] + 1804603682 | 0);
    const sum13 = tmp23 + ((tmp29 & tmp27 | ~tmp29 & tmp25) + items1[13] - 40341101 | 0);
    const tmp31 = (sum13 << 12 | sum13 >>> 20) + ((sum12 << 7 | sum12 >>> 25) + tmp27 | 0) | 0;
    const sum14 = tmp25 + ((tmp31 & tmp29 | tmp32 & tmp27) + items1[14] - 1502002290 | 0);
    const tmp35 = ~(sum14 << 17 | sum14 >>> 15) + tmp31 | 0;
    const sum15 = tmp27 + ((tmp34 & tmp31 | tmp35 & tmp29) + items1[15] + 1236535329 | 0);
    const tmp37 = (sum15 << 22 | sum15 >>> 10) + ((sum14 << 17 | sum14 >>> 15) + tmp31 | 0) | 0;
    const sum16 = tmp29 + ((tmp37 & tmp31 | tmp34 & tmp32) + items1[1] - 165796510 | 0);
    const sum17 = tmp31 + ((tmp39 & tmp34 | tmp37 & tmp35) + items1[6] - 1069501632 | 0);
    const tmp41 = (sum17 << 9 | sum17 >>> 23) + ((sum16 << 5 | sum16 >>> 27) + tmp37 | 0) | 0;
    const sum18 = tmp34 + ((tmp41 & tmp37 | tmp39 & ~tmp37) + items1[11] + 643717713 | 0);
    const sum19 = tmp37 + ((tmp43 & tmp39 | tmp41 & ~tmp39) + items1[0] - 373897302 | 0);
    const tmp45 = (sum19 << 20 | sum19 >>> 12) + ((sum18 << 14 | sum18 >>> 18) + tmp41 | 0) | 0;
    const sum20 = tmp39 + ((tmp45 & tmp41 | tmp43 & ~tmp41) + items1[5] - 701558691 | 0);
    const sum21 = tmp41 + ((tmp47 & tmp43 | tmp45 & ~tmp43) + items1[10] + 38016083 | 0);
    const tmp49 = (sum21 << 9 | sum21 >>> 23) + ((sum20 << 5 | sum20 >>> 27) + tmp45 | 0) | 0;
    const sum22 = tmp43 + ((tmp49 & tmp45 | tmp47 & ~tmp45) + items1[15] - 660478335 | 0);
    const sum23 = tmp45 + ((tmp51 & tmp47 | tmp49 & ~tmp47) + items1[4] - 405537848 | 0);
    const tmp53 = (sum23 << 20 | sum23 >>> 12) + ((sum22 << 14 | sum22 >>> 18) + tmp49 | 0) | 0;
    const sum24 = tmp47 + ((tmp53 & tmp49 | tmp51 & ~tmp49) + items1[9] + 568446438 | 0);
    const sum25 = tmp49 + ((tmp55 & tmp51 | tmp53 & ~tmp51) + items1[14] - 1019803690 | 0);
    const tmp57 = (sum25 << 9 | sum25 >>> 23) + ((sum24 << 5 | sum24 >>> 27) + tmp53 | 0) | 0;
    const sum26 = tmp51 + ((tmp57 & tmp53 | tmp55 & ~tmp53) + items1[3] - 187363961 | 0);
    const sum27 = tmp53 + ((tmp59 & tmp55 | tmp57 & ~tmp55) + items1[8] + 1163531501 | 0);
    const tmp61 = (sum27 << 20 | sum27 >>> 12) + ((sum26 << 14 | sum26 >>> 18) + tmp57 | 0) | 0;
    const sum28 = tmp55 + ((tmp61 & tmp57 | tmp59 & ~tmp57) + items1[13] - 1444681467 | 0);
    const sum29 = tmp57 + ((tmp63 & tmp59 | tmp61 & ~tmp59) + items1[2] - 51403784 | 0);
    const tmp65 = (sum29 << 9 | sum29 >>> 23) + ((sum28 << 5 | sum28 >>> 27) + tmp61 | 0) | 0;
    const sum30 = tmp59 + ((tmp65 & tmp61 | tmp63 & ~tmp61) + items1[7] + 1735328473 | 0);
    const sum31 = tmp61 + ((tmp67 & tmp63 | tmp65 & ~tmp63) + items1[12] - 1926607734 | 0);
    const tmp69 = (sum31 << 20 | sum31 >>> 12) + ((sum30 << 14 | sum30 >>> 18) + tmp65 | 0) | 0;
    const sum32 = tmp63 + ((tmp69 ^ tmp67 ^ tmp65) + items1[5] - 378558 | 0);
    const sum33 = tmp65 + ((tmp71 ^ tmp69 ^ tmp67) + items1[8] - 2022574463 | 0);
    const tmp73 = (sum33 << 11 | sum33 >>> 21) + ((sum32 << 4 | sum32 >>> 28) + tmp69 | 0) | 0;
    const sum34 = tmp67 + ((tmp73 ^ tmp71 ^ tmp69) + items1[11] + 1839030562 | 0);
    const sum35 = tmp69 + ((tmp75 ^ tmp73 ^ tmp71) + items1[14] - 35309556 | 0);
    const tmp77 = (sum35 << 23 | sum35 >>> 9) + ((sum34 << 16 | sum34 >>> 16) + tmp73 | 0) | 0;
    const sum36 = tmp71 + ((tmp77 ^ tmp75 ^ tmp73) + items1[1] - 1530992060 | 0);
    const sum37 = tmp73 + ((tmp79 ^ tmp77 ^ tmp75) + items1[4] + 1272893353 | 0);
    const tmp81 = (sum37 << 11 | sum37 >>> 21) + ((sum36 << 4 | sum36 >>> 28) + tmp77 | 0) | 0;
    const sum38 = tmp75 + ((tmp81 ^ tmp79 ^ tmp77) + items1[7] - 155497632 | 0);
    const sum39 = tmp77 + ((tmp83 ^ tmp81 ^ tmp79) + items1[10] - 1094730640 | 0);
    const tmp85 = (sum39 << 23 | sum39 >>> 9) + ((sum38 << 16 | sum38 >>> 16) + tmp81 | 0) | 0;
    const sum40 = tmp79 + ((tmp85 ^ tmp83 ^ tmp81) + items1[13] + 681279174 | 0);
    const sum41 = tmp81 + ((tmp87 ^ tmp85 ^ tmp83) + items1[0] - 358537222 | 0);
    const tmp89 = (sum41 << 11 | sum41 >>> 21) + ((sum40 << 4 | sum40 >>> 28) + tmp85 | 0) | 0;
    const sum42 = tmp83 + ((tmp89 ^ tmp87 ^ tmp85) + items1[3] - 722521979 | 0);
    const sum43 = tmp85 + ((tmp91 ^ tmp89 ^ tmp87) + items1[6] + 76029189 | 0);
    const tmp93 = (sum43 << 23 | sum43 >>> 9) + ((sum42 << 16 | sum42 >>> 16) + tmp89 | 0) | 0;
    const sum44 = tmp87 + ((tmp93 ^ tmp91 ^ tmp89) + items1[9] - 640364487 | 0);
    const sum45 = tmp89 + ((tmp95 ^ tmp93 ^ tmp91) + items1[12] - 421815835 | 0);
    const tmp97 = (sum45 << 11 | sum45 >>> 21) + ((sum44 << 4 | sum44 >>> 28) + tmp93 | 0) | 0;
    const sum46 = tmp91 + ((tmp97 ^ tmp95 ^ tmp93) + items1[15] + 530742520 | 0);
    sum47 = tmp93 + ((tmp99 ^ tmp97 ^ tmp95) + items1[2] - 995338651 | 0);
    sum47 = (sum47 << 23 | sum47 >>> 9) + tmp99 | 0;
    sum47 = tmp95 + ((tmp99 ^ (sum47 | ~tmp97)) + items1[0] - 198630844 | 0);
    sum47 = (sum47 << 6 | sum47 >>> 26) + sum47 | 0;
    sum47 = tmp97 + ((sum47 ^ (sum47 | ~tmp99)) + items1[7] + 1126891415 | 0);
    sum47 = (sum47 << 10 | sum47 >>> 22) + sum47 | 0;
    sum47 = tmp99 + ((sum47 ^ (sum47 | ~sum47)) + items1[14] - 1416354905 | 0);
    sum47 = (sum47 << 15 | sum47 >>> 17) + sum47 | 0;
    sum47 = sum47 + ((sum47 ^ (sum47 | ~sum47)) + items1[5] - 57434055 | 0);
    sum47 = (sum47 << 21 | sum47 >>> 11) + sum47 | 0;
    sum47 = sum47 + ((sum47 ^ (sum47 | ~sum47)) + items1[12] + 1700485571 | 0);
    sum47 = (sum47 << 6 | sum47 >>> 26) + sum47 | 0;
    sum47 = sum47 + ((sum47 ^ (sum47 | ~sum47)) + items1[3] - 1894986606 | 0);
    sum47 = (sum47 << 10 | sum47 >>> 22) + sum47 | 0;
    sum47 = sum47 + ((sum47 ^ (sum47 | ~sum47)) + items1[10] - 1051523 | 0);
    sum47 = (sum47 << 15 | sum47 >>> 17) + sum47 | 0;
    sum47 = sum47 + ((sum47 ^ (sum47 | ~sum47)) + items1[1] - 2054922799 | 0);
    sum47 = (sum47 << 21 | sum47 >>> 11) + sum47 | 0;
    sum47 = sum47 + ((sum47 ^ (sum47 | ~sum47)) + items1[8] + 1873313359 | 0);
    sum47 = (sum47 << 6 | sum47 >>> 26) + sum47 | 0;
    sum47 = sum47 + ((sum47 ^ (sum47 | ~sum47)) + items1[15] - 30611744 | 0);
    sum47 = (sum47 << 10 | sum47 >>> 22) + sum47 | 0;
    sum47 = sum47 + ((sum47 ^ (sum47 | ~sum47)) + items1[6] - 1560198380 | 0);
    sum47 = (sum47 << 15 | sum47 >>> 17) + sum47 | 0;
    sum47 = sum47 + ((sum47 ^ (sum47 | ~sum47)) + items1[13] + 1309151649 | 0);
    sum47 = (sum47 << 21 | sum47 >>> 11) + sum47 | 0;
    sum47 = sum47 + ((sum47 ^ (sum47 | ~sum47)) + items1[4] - 145523070 | 0);
    sum47 = (sum47 << 6 | sum47 >>> 26) + sum47 | 0;
    sum47 = sum47 + ((sum47 ^ (sum47 | ~sum47)) + items1[11] - 1120210379 | 0);
    sum47 = (sum47 << 10 | sum47 >>> 22) + sum47 | 0;
    sum47 = sum47 + ((sum47 ^ (sum47 | ~sum47)) + items1[2] + 718787259 | 0);
    sum47 = (sum47 << 15 | sum47 >>> 17) + sum47 | 0;
    sum47 = sum47 + ((sum47 ^ (sum47 | ~sum47)) + items1[9] - 343485551 | 0);
    items[0] = sum47 + items[0] | 0;
    items[1] = ((sum47 << 21 | sum47 >>> 11) + sum47 | 0) + items[1] | 0;
    items[2] = sum47 + items[2] | 0;
    items[3] = sum47 + items[3] | 0;
  }
  function md5blk(str) {
    const items = [];
    let num = 0;
    do {
      let charCodeAtResult = str.charCodeAt(num);
      let sum = charCodeAtResult + (str.charCodeAt(num + 1) << 8);
      let tmp3 = str.charCodeAt(num + 2) << 16;
      items[num >> 2] = sum + tmp3 + (str.charCodeAt(num + 3) << 24);
      num = num + 4;
    } while (num < 64);
    return items;
  }
  function md5blk_array(uint8Array) {
    const items = [];
    let num = 0;
    do {
      items[num >> 2] = uint8Array[num] + (uint8Array[num + 1] << 8) + (uint8Array[num + 2] << 16) + (uint8Array[num + 3] << 24);
      num = num + 4;
    } while (num < 64);
    return items;
  }
  function md51(hello) {
    const items = [1732584193, -271733879, -1732584194, 271733878];
    let num = 64;
    let num2 = 64;
    if (64 <= hello.length) {
      do {
        let tmp = md5cycle;
        let tmp2 = md5blk;
        let tmp3 = md5cycle(items, md5blk(hello.substring(num - 64, num)));
        num = num + 64;
        num2 = num;
      } while (num <= length);
    }
    const substr = hello.substring(num2 - 64);
    const items1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let num3 = 0;
    let num4 = 0;
    if (0 < substr.length) {
      do {
        let tmp4 = num3 >> 2;
        items1[tmp4] = items1[tmp4] | substr.charCodeAt(num3) << (num3 % 4 << 3);
        num3 = num3 + 1;
        num4 = num3;
      } while (num3 < length2);
    }
    items1[num4 >> 2] = items1[num4 >> 2] | 128 << (num4 % 4 << 3);
    if (num4 > 55) {
      md5cycle(items, items1);
      let num6 = 0;
      do {
        items1[num6] = 0;
        num6 = num6 + 1;
      } while (num6 < 16);
    }
    const match = 8 * hello.length.toString(16).match(/(.*?)(.{0,8})$/);
    const parsed = parseInt(match[2], 16);
    const str = 8 * hello.length;
    const str2 = 8 * hello.length.toString(16);
    items1[14] = parsed;
    items1[15] = parseInt(match[1], 16) || 0;
    md5cycle(items, items1);
    return items;
  }
  function rhex(arg0) {
    let text;
    let num = 0;
    do {
      let tmp2 = dependencyMap;
      let result = 8 * num;
      text = `${closure_1[arg0 >> tmp3 + 4 & 15] + closure_1[arg0 >> tmp3 & 15]}`;
      num = num + 1;
      let tmp = text;
    } while (num < 4);
    return text;
  }
  function hex(join) {
    let length;
    let num = 0;
    if (0 < join.length) {
      do {
        let tmp = rhex;
        join[num] = rhex(join[num]);
        num = num + 1;
        length = join.length;
      } while (num < length);
    }
    return join.join("");
  }
  function toUtf8(arg0) {
    let unescapeResult = arg0;
    if (obj.test(arg0)) {
      const _unescape = unescape;
      const _encodeURIComponent = encodeURIComponent;
      unescapeResult = unescape(encodeURIComponent(arg0));
    }
    return unescapeResult;
  }
  function hexToBinaryString(tmpResult) {
    let diff;
    const items = [];
    let num = 0;
    if (0 < tmpResult.length - 1) {
      do {
        let _parseInt = parseInt;
        let arr = items.push(parseInt(tmpResult.substr(num, 2), 16));
        num = num + 2;
        diff = length - 1;
      } while (num < diff);
    }
    return fromCharCode.apply(String, items);
  }
  class SparkMD5 {
    constructor() {
      resetResult = this.reset();
      return;
    }
    append(arg0) {
      appendBinaryResult = this.appendBinary(toUtf8(arg0));
      return this;
    }
    appendBinary(arg0) {
      self = this;
      this._buff = this._buff + arg0;
      this._length = this._length + arg0.length;
      length = this._buff.length;
      num = 64;
      num2 = 64;
      if (64 <= length) {
        do {
          tmp = md5cycle;
          tmp2 = md5blk;
          str = self._buff;
          tmp3 = md5cycle(self._hash, md5blk(str.substring(num - 64, num)));
          num = num + 64;
          num2 = num;
        } while (num <= length);
      }
      str2 = self._buff;
      self._buff = str2.substring(num2 - 64);
      return self;
    }
    end(arg0) {
      self = this;
      _buff = this._buff;
      length = _buff.length;
      items = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (let num = 0; num < length; num = num + 1) {
        tmp = num >> 2;
        items[tmp] = items[tmp] | _buff.charCodeAt(num) << (num % 4 << 3);
      }
      _finishResult = self._finish(items, length);
      tmp3 = hex(self._hash);
      tmp4 = tmp3;
      if (arg0) {
        tmp5 = hexToBinaryString;
        tmp4 = hexToBinaryString(tmp3);
      }
      resetResult = self.reset();
      return tmp4;
    }
    reset() {
      this._buff = "";
      this._length = 0;
      items = [1732584193];
      items[1] = -271733879;
      items[2] = -1732584194;
      items[3] = 271733878;
      this._hash = items;
      return this;
    }
    getState() {
      obj = { buff: this._buff, length: this._length, hash: _hash.slice() };
      _hash = this._hash;
      return obj;
    }
    setState(arg0) {
      ({ buff: this._buff, length: this._length, hash: this._hash } = arg0);
      return this;
    }
    destroy() {
      delete tmp._hash;
      delete tmp._buff;
      delete tmp._length;
      return;
    }
    _finish(arg0, arg1) {
      self = this;
      tmp = arg1 >> 2;
      arg0[tmp] = arg0[tmp] | 128 << (arg1 % 4 << 3);
      if (arg1 > 55) {
        tmp2 = md5cycle;
        tmp3 = md5cycle(self._hash, arg0);
        num = 0;
        num2 = 1;
        num3 = 16;
        num4 = 0;
        do {
          arg0[num4] = 0;
          num4 = num4 + 1;
        } while (num4 < 16);
      }
      str = 8 * self._length;
      str2 = str.toString(16);
      match = str2.match(/(.*?)(.{0,8})$/);
      parsed = parseInt(match[2], 16);
      tmp6 = parseInt(match[1], 16) || 0;
      arg0[14] = parsed;
      arg0[15] = tmp6;
      tmp7 = md5cycle(self._hash, arg0);
      return;
    }
    static hash(arg0, arg1) {
      return SparkMD5.hashBinary(toUtf8(arg0), arg1);
    }
    static hashBinary(arg0, arg1) {
      tmp = hex(md51(arg0));
      tmp2 = tmp;
      if (arg1) {
        tmp3 = hexToBinaryString;
        tmp2 = hexToBinaryString(tmp);
      }
      return tmp2;
    }
    static ArrayBuffer() {
      resetResult = this.reset();
      return;
    }
  }
  let closure_1 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  if ("5d41402abc4b2a76b9719d911017c592" !== hex(md51("hello"))) {
    globalThis.add32 = function add32(arg0, arg1) {
      const sum = (65535 & arg0) + (65535 & arg1);
      return (arg0 >> 16) + (arg1 >> 16) + (sum >> 16) << 16 | 65535 & sum;
    };
  }
  let slice = "undefined" === typeof ArrayBuffer;
  if (!slice) {
    let _ArrayBuffer = ArrayBuffer;
    slice = ArrayBuffer.prototype.slice;
  }
  if (!slice) {
    (() => {
      function clamp(arg0, arg1) {
        if ((arg0 | 0 || 0) < 0) {
          const _Math2 = Math;
          let bound = Math.max(tmp + arg1, 0);
        } else {
          const _Math = Math;
          bound = Math.min(tmp, arg1);
        }
        return bound;
      }
      ArrayBuffer.prototype.slice = function(arg0, arg1) {
        const self = this;
        const byteLength = this.byteLength;
        const tmp = clamp(arg0, byteLength);
        let tmp2 = byteLength;
        if (arg1 !== clamp) {
          tmp2 = clamp(arg1, byteLength);
        }
        if (tmp > tmp2) {
          const _ArrayBuffer2 = ArrayBuffer;
          let arrayBuffer = new ArrayBuffer(0);
        } else {
          const diff = tmp2 - tmp;
          const _ArrayBuffer = ArrayBuffer;
          arrayBuffer = new ArrayBuffer(diff);
          const _Uint8Array = Uint8Array;
          const uint8Array = new Uint8Array(arrayBuffer);
          const _Uint8Array2 = Uint8Array;
          const uint8Array1 = new Uint8Array(self, tmp, diff);
          const result = uint8Array.set(uint8Array1);
        }
        return arrayBuffer;
      };
    })();
  }
  SparkMD5.ArrayBuffer.prototype.append = function(byteLength) {
    const self = this;
    let buffer = this._buff.buffer;
    const uint8Array = new Uint8Array(buffer.byteLength + byteLength.byteLength);
    const uint8Array1 = new Uint8Array(buffer);
    const result = uint8Array.set(uint8Array1);
    const uint8Array2 = new Uint8Array(byteLength);
    const result1 = uint8Array.set(uint8Array2, buffer.byteLength);
    this._length = this._length + byteLength.byteLength;
    let num = 64;
    let num2 = 64;
    if (64 <= uint8Array.length) {
      do {
        let tmp5 = md5cycle;
        let tmp6 = md5blk_array;
        let tmp7 = md5cycle(self._hash, md5blk_array(uint8Array.subarray(num - 64, num)));
        num = num + 64;
        num2 = num;
      } while (num <= length);
    }
    const diff = num2 - 64;
    if (diff < uint8Array.length) {
      const _Uint8Array2 = Uint8Array;
      buffer = uint8Array.buffer;
      let uint8Array3 = new Uint8Array(buffer.slice(diff));
    } else {
      const _Uint8Array = Uint8Array;
      uint8Array3 = new Uint8Array(0);
    }
    self._buff = uint8Array3;
    return self;
  };
  SparkMD5.ArrayBuffer.prototype.end = function(arg0) {
    const self = this;
    const _buff = this._buff;
    const items = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let num = 0; num < length; num = num + 1) {
      let tmp = num >> 2;
      items[tmp] = items[tmp] | _buff[num] << (num % 4 << 3);
    }
    self._finish(items, _buff.length);
    const tmp3 = hex(self._hash);
    let tmp4 = tmp3;
    if (arg0) {
      tmp4 = hexToBinaryString(tmp3);
    }
    self.reset();
    return tmp4;
  };
  SparkMD5.ArrayBuffer.prototype.reset = function() {
    const uint8Array = new Uint8Array(0);
    this._buff = uint8Array;
    this._length = 0;
    const items = [1732584193, -271733879, -1732584194, 271733878];
    this._hash = items;
    return this;
  };
  SparkMD5.ArrayBuffer.prototype.getState = function() {
    const getState = SparkMD5.prototype.getState;
    const callResult = getState.call(this);
    const uint8Array = new Uint8Array(callResult.buff);
    callResult.buff = fromCharCode.apply(null, uint8Array);
    return callResult;
  };
  SparkMD5.ArrayBuffer.prototype.setState = function(buff) {
    buff = buff.buff;
    const arrayBuffer = new ArrayBuffer(length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let num = 0; num < length; num = num + 1) {
      uint8Array[num] = buff.charCodeAt(num);
    }
    buff.buff = uint8Array;
    const setState = SparkMD5.prototype.setState;
    return setState.call(this, buff);
  };
  SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
  SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
  SparkMD5.ArrayBuffer.hash = (arg0, arg1) => {
    const uint8Array = new Uint8Array(arg0);
    const items = [1732584193, -271733879, -1732584194, 271733878];
    let num = 64;
    let num2 = 64;
    if (64 <= uint8Array.length) {
      do {
        let tmp2 = md5cycle;
        let tmp3 = md5blk_array;
        let tmp4 = md5cycle(items, md5blk_array(uint8Array.subarray(num - 64, num)));
        num = num + 64;
        num2 = num;
      } while (num <= length);
    }
    const diff = num2 - 64;
    if (diff < uint8Array.length) {
      let subarrayResult = uint8Array.subarray(diff);
    } else {
      const _Uint8Array = Uint8Array;
      subarrayResult = new Uint8Array(0);
    }
    const items1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let num4 = 0;
    let num5 = 0;
    if (0 < subarrayResult.length) {
      do {
        let tmp8 = num4 >> 2;
        items1[tmp8] = items1[tmp8] | subarrayResult[num4] << (num4 % 4 << 3);
        num4 = num4 + 1;
        num5 = num4;
      } while (num4 < length2);
    }
    items1[num5 >> 2] = items1[num5 >> 2] | 128 << (num5 % 4 << 3);
    if (num5 > 55) {
      md5cycle(items, items1);
      let num7 = 0;
      do {
        items1[num7] = 0;
        num7 = num7 + 1;
      } while (num7 < 16);
    }
    const match = 8 * uint8Array.length.toString(16).match(/(.*?)(.{0,8})$/);
    const parsed = parseInt(match[2], 16);
    const str = 8 * uint8Array.length;
    const str2 = 8 * uint8Array.length.toString(16);
    const tmp = hex;
    items1[14] = parsed;
    items1[15] = parseInt(match[1], 16) || 0;
    md5cycle(items, items1);
    const tmpResult = tmp(items);
    let tmp17 = tmpResult;
    if (arg1) {
      tmp17 = hexToBinaryString(tmpResult);
    }
    return tmp17;
  };
  return SparkMD5;
};
if ("object" === typeof exports) {
  module.exports = fn();
} else {
  if ("function" === typeof globalThis.define) {
    if (globalThis.define.amd) {
      globalThis.define(fn);
    }
  }
  const _window = window;
  _window.SparkMD5 = fn();
}
