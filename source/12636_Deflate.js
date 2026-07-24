// Module ID: 12636
// Function ID: 97769
// Name: Deflate
// Dependencies: [12635, 12637, 12638, 12639, 12643]

// Module 12636 (Deflate)
const require = arg1;
const dependencyMap = arg6;
class Deflate {
  constructor(arg0) {
    self = this;
    if (this instanceof Deflate) {
      tmp7 = closure_0;
      tmp8 = closure_1;
      num = 0;
      obj = require("_has");
      str = "";
      obj = arg0;
      if (!arg0) {
        obj = {};
      }
      self.options = obj.assign({ level: -1, method: 8, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: 0, to: "" }, obj);
      options = self.options;
      if (options.raw) {
        if (options.windowBits > 0) {
          options.windowBits = -options.windowBits;
        }
        self.err = 0;
        self.msg = "";
        flag = false;
        self.ended = false;
        self.chunks = [];
        tmp10 = closure_0;
        tmp11 = closure_1;
        num4 = 1;
        tmp12 = require("ZStream");
        prototype2 = tmp12.prototype;
        tmp13 = new.target;
        tmp14 = new.target;
        tmp12 = new tmp12();
        tmp16 = tmp12;
        self.strm = tmp12;
        self.strm.avail_out = 0;
        num5 = 2;
        obj3 = require("err");
        tmp17 = obj3;
        deflateInit2Result = obj3.deflateInit2(self.strm, options.level, options.method, options.windowBits, options.memLevel, options.strategy);
        if (0 !== deflateInit2Result) {
          tmp38 = globalThis;
          _Error2 = Error;
          tmp39 = closure_0;
          tmp40 = closure_1;
          num8 = 3;
          prototype5 = Error.prototype;
          tmp41 = new.target;
          tmp42 = new.target;
          error = new Error(require("module_12639")[deflateInit2Result]);
          tmp44 = error;
          throw error;
        } else {
          if (options.header) {
            tmp19 = closure_0;
            tmp20 = closure_1;
            obj4 = require("err");
            deflateSetHeaderResult = obj4.deflateSetHeader(self.strm, options.header);
          }
          if (options.dictionary) {
            str2 = "string";
            if ("string" === typeof options.dictionary) {
              tmp26 = closure_0;
              tmp27 = closure_1;
              num6 = 4;
              obj5 = require("buf2binstring");
              dictionary = obj5.string2buf(options.dictionary);
            } else {
              tmp22 = toString;
              str3 = "[object ArrayBuffer]";
              if ("[object ArrayBuffer]" === toString.call(options.dictionary)) {
                tmp23 = globalThis;
                _Uint8Array = Uint8Array;
                prototype3 = Uint8Array.prototype;
                tmp24 = new.target;
                tmp25 = new.target;
                dictionary = new Uint8Array(options.dictionary);
              } else {
                dictionary = options.dictionary;
              }
            }
            tmp28 = closure_0;
            tmp29 = closure_1;
            obj6 = require("err");
            deflateSetDictionaryResult = obj6.deflateSetDictionary(self.strm, dictionary);
            if (0 !== deflateSetDictionaryResult) {
              tmp31 = globalThis;
              _Error = Error;
              tmp32 = closure_0;
              tmp33 = closure_1;
              num7 = 3;
              prototype4 = Error.prototype;
              tmp34 = new.target;
              tmp35 = new.target;
              error1 = new Error(require("module_12639")[deflateSetDictionaryResult]);
              tmp37 = error1;
              throw error1;
            } else {
              flag2 = true;
              self._dict_set = true;
            }
          }
          return;
        }
      }
      tmp9 = options.gzip && options.windowBits > 0;
      if (tmp9) {
        num2 = 16;
        tmp9 = options.windowBits < 16;
      }
      if (tmp9) {
        num3 = 16;
        options.windowBits = options.windowBits + 16;
      }
    } else {
      tmp = Deflate;
      prototype = Deflate.prototype;
      tmp2 = new.target;
      tmp3 = new.target;
      tmp4 = arg0;
      tmp5 = new Deflate(arg0);
      tmp6 = tmp5;
      return tmp5;
    }
    return;
  }
  push(arg0, arg1) {
    strm = this.strm;
    if (this.ended) {
      flag2 = false;
      return false;
    } else {
      tmp = arg1;
      if (arg1 !== ~~arg1) {
        flag = true;
        num = 0;
        if (true === arg1) {
          num = 4;
        }
        tmp = num;
      }
      str = "string";
      if ("string" === typeof arg0) {
        tmp9 = closure_0;
        tmp10 = closure_1;
        num2 = 4;
        obj = require("buf2binstring");
        strm.input = obj.string2buf(arg0);
        num3 = 0;
        strm.next_in = 0;
        strm.avail_in = strm.input.length;
        num4 = 4;
        num5 = 2;
        tmp11 = 2 !== tmp;
        tmp12 = 4 !== tmp;
        num6 = 1;
      } else {
        tmp2 = toString;
        str2 = "[object ArrayBuffer]";
        if ("[object ArrayBuffer]" !== toString.call(arg0)) {
          strm.input = arg0;
        }
      }
      tmp3 = globalThis;
      _Uint8Array = Uint8Array;
      prototype = Uint8Array.prototype;
      tmp4 = new.target;
      tmp5 = new.target;
      tmp6 = arg0;
      uint8Array = new Uint8Array(arg0);
      tmp8 = uint8Array;
      strm.input = uint8Array;
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
    if (0 === arg0) {
      str = "string";
      if ("string" === self.options.to) {
        chunks = self.chunks;
        str2 = "";
        self.result = chunks.join("");
      } else {
        tmp = closure_0;
        tmp2 = closure_1;
        obj = require("_has");
        self.result = obj.flattenChunks(self.chunks);
      }
    }
    self.chunks = [];
    self.err = arg0;
    self.msg = self.strm.msg;
    return;
  }
}
function deflate(arg0, arg1) {
  let arr = new Deflate(arg1);
  arr = arr.push(arg0, true);
  if (arr.err) {
    let msg = arr.msg;
    if (!msg) {
      msg = require(12639)[arr.err];
    }
    throw msg;
  } else {
    return arr.result;
  }
}
arg5.Deflate = Deflate;
arg5.deflate = deflate;
arg5.deflateRaw = function deflateRaw(arg0, arg1) {
  let obj = arg1;
  if (!arg1) {
    obj = {};
  }
  obj.raw = true;
  return deflate(arg0, obj);
};
arg5.gzip = function gzip(arg0, arg1) {
  let obj = arg1;
  if (!arg1) {
    obj = {};
  }
  obj.gzip = true;
  return deflate(arg0, obj);
};
