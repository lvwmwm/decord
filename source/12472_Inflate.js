// Module ID: 12472
// Function ID: 95310
// Name: Inflate
// Dependencies: []

// Module 12472 (Inflate)
class Inflate {
  constructor(arg0) {
    self = this;
    if (this instanceof Inflate) {
      tmp7 = arg1;
      tmp8 = arg6;
      num = 0;
      obj = arg1(arg6[0]);
      str = "";
      obj = arg0;
      if (!arg0) {
        obj = {};
      }
      self.options = obj.assign({}, obj);
      options = self.options;
      tmp9 = options.raw && options.windowBits >= 0;
      if (tmp9) {
        num2 = 16;
        tmp9 = options.windowBits < 16;
      }
      if (tmp9) {
        options.windowBits = -options.windowBits;
        if (0 === options.windowBits) {
          num3 = -15;
          options.windowBits = -15;
        }
      }
      tmp10 = options.windowBits >= 0;
      if (tmp10) {
        num4 = 16;
        tmp10 = options.windowBits < 16;
      }
      tmp11 = !tmp10;
      if (tmp10) {
        windowBits = arg0;
        if (arg0) {
          windowBits = arg0.windowBits;
        }
        tmp11 = windowBits;
      }
      if (!tmp11) {
        num5 = 32;
        options.windowBits = options.windowBits + 32;
      }
      num6 = 15;
      tmp12 = options.windowBits > 15;
      if (tmp12) {
        num7 = 48;
        tmp12 = options.windowBits < 48;
      }
      if (tmp12) {
        if (!(15 & options.windowBits)) {
          options.windowBits = options.windowBits | 15;
        }
      }
      self.err = 0;
      self.msg = "";
      flag = false;
      self.ended = false;
      self.chunks = [];
      tmp13 = arg1;
      tmp14 = arg6;
      num8 = 1;
      tmp15 = arg1(arg6[1]);
      prototype2 = tmp15.prototype;
      tmp16 = new.target;
      tmp17 = new.target;
      tmp15 = new tmp15();
      tmp19 = tmp15;
      self.strm = tmp15;
      self.strm.avail_out = 0;
      num9 = 2;
      obj3 = arg1(arg6[2]);
      inflateInit2Result = obj3.inflateInit2(self.strm, options.windowBits);
      num10 = 3;
      if (inflateInit2Result !== arg1(arg6[3]).Z_OK) {
        tmp29 = globalThis;
        _Error = Error;
        tmp30 = arg1;
        tmp31 = arg6;
        num12 = 4;
        prototype4 = Error.prototype;
        tmp32 = new.target;
        tmp33 = new.target;
        error = new Error(arg1(arg6[4])[inflateInit2Result]);
        tmp35 = error;
        throw error;
      } else {
        tmp21 = arg1;
        tmp22 = arg6;
        num11 = 5;
        tmp23 = arg1(arg6[5]);
        prototype3 = tmp23.prototype;
        tmp24 = new.target;
        tmp25 = new.target;
        tmp23 = new tmp23();
        tmp27 = tmp23;
        self.header = tmp23;
        obj4 = arg1(arg6[2]);
        inflateGetHeaderResult = obj4.inflateGetHeader(self.strm, self.header);
        return;
      }
    } else {
      tmp = Inflate;
      prototype = Inflate.prototype;
      tmp2 = new.target;
      tmp3 = new.target;
      tmp4 = arg0;
      tmp5 = new Inflate(arg0);
      tmp6 = tmp5;
      return tmp5;
    }
  }
  push(arg0, arg1) {
    strm = this.strm;
    if (this.ended) {
      flag5 = false;
      return false;
    } else {
      tmp2 = arg1;
      if (arg1 === ~~arg1) {
        str = "string";
        if ("string" === typeof arg0) {
          tmp15 = arg1;
          tmp16 = arg6;
          num3 = 6;
          obj = arg1(arg6[6]);
          strm.input = obj.binstring2buf(arg0);
          num4 = 0;
          strm.next_in = 0;
          strm.avail_in = strm.input.length;
          flag2 = false;
          num5 = 3;
          flag3 = true;
          num6 = 6;
          num7 = 2;
          tmp17 = globalThis;
          str3 = "[object ArrayBuffer]";
          tmp18 = typeof tmp;
          flag4 = false;
        } else {
          tmp8 = toString;
          str2 = "[object ArrayBuffer]";
          if ("[object ArrayBuffer]" !== toString.call(arg0)) {
            strm.input = arg0;
          }
        }
        tmp9 = globalThis;
        _Uint8Array = Uint8Array;
        prototype = Uint8Array.prototype;
        tmp10 = new.target;
        tmp11 = new.target;
        tmp12 = arg0;
        uint8Array = new Uint8Array(arg0);
        tmp14 = uint8Array;
        strm.input = uint8Array;
      } else {
        flag = true;
        if (true === arg1) {
          tmp5 = arg1;
          tmp6 = arg6;
          num2 = 3;
          Z_NO_FLUSH = arg1(arg6[3]).Z_FINISH;
        } else {
          tmp3 = arg1;
          tmp4 = arg6;
          num = 3;
          Z_NO_FLUSH = arg1(arg6[3]).Z_NO_FLUSH;
        }
        tmp7 = Z_NO_FLUSH;
      }
    }
    return;
  }
  onData(arg0) {
    chunks = this.chunks;
    arr = chunks.push(arg0);
    return;
  }
  onEnd(arg0) {
    self = this;
    if (arg0 === arg1(arg6[3]).Z_OK) {
      str = "string";
      if ("string" === self.options.to) {
        chunks = self.chunks;
        str2 = "";
        self.result = chunks.join("");
      } else {
        tmp = arg1;
        tmp2 = arg6;
        num = 0;
        obj = arg1(arg6[0]);
        self.result = obj.flattenChunks(self.chunks);
      }
    }
    self.chunks = [];
    self.err = arg0;
    self.msg = self.strm.msg;
    return;
  }
}
function inflate(arg0, windowBits) {
  let arr = new Inflate(windowBits);
  arr = arr.push(arg0, true);
  if (arr.err) {
    let msg = arr.msg;
    if (!msg) {
      msg = windowBits(arg6[4])[arr.err];
    }
    throw msg;
  } else {
    return arr.result;
  }
}
arg5.Inflate = Inflate;
arg5.inflate = inflate;
arg5.inflateRaw = function inflateRaw(arg0, arg1) {
  let obj = arg1;
  if (!arg1) {
    obj = {};
  }
  obj.raw = true;
  return inflate(arg0, obj);
};
arg5.ungzip = inflate;
