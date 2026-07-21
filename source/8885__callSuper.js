// Module ID: 8885
// Function ID: 70068
// Name: _callSuper
// Dependencies: []

// Module 8885 (_callSuper)
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_4(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
let closure_4 = require(dependencyMap[2]);
let closure_5 = require(dependencyMap[3]);
let closure_6 = require(dependencyMap[4]);
const uint32Array = new Uint32Array(["isArray", "isArray", "bm", "i", "duration", "track", "surrogates", "Text", "isArray", "isArray", "resolve", "a", "round", "LengthDelimited", "textAlign", "Text", "isArray", "isArray", "delete", "np", "resolve", "registerAsset", "textAlign", "Text", "isArray", "isArray", "height", "left", "opacity", "description", "transform", "Text", "current", "concat", "height", "cix", "values", "h", "nm", "index", "value", "type", "unicodeVersion", "Object", "s", "_desired", "count", "__packager_asset", "t", "map", "mn", "left", "i", "loadJsonAsset", "Boolean", "op", "PX_16", "set", "justifyContent", "right", "st", "_oneway", "paths", "hasDiversityParent"]);
const uint32Array1 = new Uint32Array([]);
const uint32Array2 = new Uint32Array(64);
const tmp5 = (HashMD) => {
  class SHA256 {
    constructor() {
      tmp = closure_2(this, SHA256);
      items = ["<string:1900029260>", "isArray", "<string:3332894770>"];
      items[3] = false;
      tmp2 = closure_12(this, SHA256, items);
      tmp2.A = closure_8[0] | 0;
      tmp2.B = closure_8[1] | 0;
      tmp2.C = closure_8[2] | 0;
      tmp2.D = closure_8[3] | 0;
      tmp2.E = closure_8[4] | 0;
      tmp2.F = closure_8[5] | 0;
      tmp2.G = closure_8[6] | 0;
      tmp2.H = closure_8[7] | 0;
      return tmp2;
    }
  }
  const require = SHA256;
  callback3(SHA256, HashMD);
  let obj = {
    key: "get",
    value: function get() {
      const items = [, , , , , , , ];
      ({ A: arr[0], B: arr[1], C: arr[2], D: arr[3], E: arr[4], F: arr[5], G: arr[6], H: arr[7] } = this);
      return items;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "set",
    value: function set(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
      this.A = arg0 | 0;
      this.B = arg1 | 0;
      this.C = arg2 | 0;
      this.D = arg3 | 0;
      this.E = arg4 | 0;
      this.F = arg5 | 0;
      this.G = arg6 | 0;
      this.H = arg7 | 0;
    }
  };
  items[1] = obj;
  obj = {
    key: "process",
    value: function process(getUint32, sum) {
      let A;
      let B;
      let C;
      let D;
      let E;
      let F;
      let G;
      let H;
      let num2;
      let tmp22;
      let tmp23;
      let tmp24;
      let tmp25;
      let tmp26;
      let tmp27;
      let tmp28;
      let tmp29;
      const self = this;
      let num = 0;
      do {
        let tmp2 = closure_9;
        closure_9[num] = getUint32.getUint32(sum, false);
        num = num + 1;
        sum = sum + 4;
        num2 = 16;
      } while (num < 16);
      do {
        let tmp3 = closure_9;
        let tmp4 = closure_9[num2 - 15];
        let tmp5 = closure_9[num2 - 2];
        let tmp6 = closure_0;
        let tmp7 = closure_1;
        let rotrResult = closure_0(closure_1[5]).rotr(tmp4, 7);
        let tmp9 = rotrResult ^ closure_0(closure_1[5]).rotr(tmp4, 18) ^ tmp4 >>> 3;
        let rotrResult1 = closure_0(closure_1[5]).rotr(tmp5, 17);
        closure_9[num2] = (rotrResult1 ^ closure_0(closure_1[5]).rotr(tmp5, 19) ^ tmp5 >>> 10) + closure_9[num2 - 7] + tmp9 + closure_9[num2 - 16] | 0;
        num2 = num2 + 1;
      } while (num2 < 64);
      ({ A, B, C, D, E, F, G, H } = self);
      let num3 = 0;
      do {
        let tmp11 = closure_0;
        let tmp12 = closure_1;
        let rotrResult2 = closure_0(closure_1[5]).rotr(E, 6);
        let tmp14 = rotrResult2 ^ closure_0(closure_1[5]).rotr(E, 11);
        let sum1 = H + (tmp14 ^ closure_0(closure_1[5]).rotr(E, 25));
        let tmp16 = closure_7;
        let tmp17 = closure_9;
        let tmp18 = sum1 + closure_0(closure_1[6]).Chi(E, F, G) + closure_7[num3] + closure_9[num3] | 0;
        let rotrResult3 = closure_0(closure_1[5]).rotr(A, 2);
        let tmp20 = rotrResult3 ^ closure_0(closure_1[5]).rotr(A, 13);
        let tmp21 = tmp20 ^ closure_0(closure_1[5]).rotr(A, 22);
        tmp22 = D + tmp18 | 0;
        tmp23 = tmp18 + (tmp21 + closure_0(closure_1[6]).Maj(A, B, C) | 0) | 0;
        num3 = num3 + 1;
        tmp24 = A;
        tmp25 = B;
        tmp26 = C;
        tmp27 = E;
        tmp28 = F;
        tmp29 = G;
        A = tmp23;
        B = tmp24;
        C = tmp25;
        D = tmp26;
        E = tmp22;
        F = tmp27;
        G = tmp28;
        H = tmp29;
      } while (num3 < 64);
      const result = self.set(tmp23 + self.A | 0, tmp24 + self.B | 0, tmp25 + self.C | 0, tmp26 + self.D | 0, tmp22 + self.E | 0, tmp27 + self.F | 0, tmp28 + self.G | 0, tmp29 + self.H | 0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "roundClean",
    value: function roundClean() {
      closure_9.fill(0);
    }
  };
  items[4] = {
    key: "destroy",
    value: function destroy() {
      const result = this.set(0, 0, 0, 0, 0, 0, 0, 0);
      const buffer = this.buffer;
      buffer.fill(0);
    }
  };
  return callback(SHA256, items);
}(require(dependencyMap[6]).HashMD);
let closure_11 = (arg0) => {
  class SHA224 {
    constructor() {
      tmp = closure_2(this, SHA224);
      tmp2 = closure_12(this, SHA224);
      tmp2.A = -1056596264;
      tmp2.B = 914150663;
      tmp2.C = 812702999;
      tmp2.D = -150054599;
      tmp2.E = -4191439;
      tmp2.F = 1750603025;
      tmp2.G = 1694076839;
      tmp2.H = -1090891868;
      tmp2.outputLen = 28;
      return tmp2;
    }
  }
  const require = SHA224;
  callback3(SHA224, arg0);
  return callback(SHA224);
}(tmp5);

export const SHA256 = tmp5;
export const sha256 = require(dependencyMap[5]).wrapConstructor(() => new tmp5());
export const sha224 = require(dependencyMap[5]).wrapConstructor(() => new closure_11());
