// Module ID: 8932
// Function ID: 70348
// Name: _callSuper
// Dependencies: [6, 7, 15, 17, 18, 8927, 8933]

// Module 8932 (_callSuper)
import _classCallCheck from "_isNativeReflectConstruct";
import _defineProperties from "_defineProperties";
import "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = _getPrototypeOf(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, _getPrototypeOf(arg0).constructor);
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
const uint32Array = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
const uint32Array1 = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]);
const uint32Array2 = new Uint32Array(64);
let tmp5 = ((HashMD) => {
  class SHA256 {
    constructor() {
      tmp = outer1_2(this, SHA256);
      items = [64, 32, 8];
      items[3] = false;
      tmp2 = outer1_12(this, SHA256, items);
      tmp2.A = outer1_8[0] | 0;
      tmp2.B = outer1_8[1] | 0;
      tmp2.C = outer1_8[2] | 0;
      tmp2.D = outer1_8[3] | 0;
      tmp2.E = outer1_8[4] | 0;
      tmp2.F = outer1_8[5] | 0;
      tmp2.G = outer1_8[6] | 0;
      tmp2.H = outer1_8[7] | 0;
      return tmp2;
    }
  }
  _inherits(SHA256, HashMD);
  let obj = {
    key: "get",
    value: function get() {
      const items = [, , , , , , , ];
      ({ A: arr[0], B: arr[1], C: arr[2], D: arr[3], E: arr[4], F: arr[5], G: arr[6], H: arr[7] } = this);
      return items;
    }
  };
  let items = [obj, , , , ];
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
        let tmp2 = outer1_9;
        outer1_9[num] = getUint32.getUint32(sum, false);
        num = num + 1;
        sum = sum + 4;
        num2 = 16;
      } while (num < 16);
      do {
        let tmp3 = outer1_9;
        let tmp4 = outer1_9[num2 - 15];
        let tmp5 = outer1_9[num2 - 2];
        let tmp6 = SHA256;
        let tmp7 = outer1_1;
        let rotrResult = SHA256(outer1_1[5]).rotr(tmp4, 7);
        let tmp9 = rotrResult ^ SHA256(outer1_1[5]).rotr(tmp4, 18) ^ tmp4 >>> 3;
        let rotrResult1 = SHA256(outer1_1[5]).rotr(tmp5, 17);
        outer1_9[num2] = (rotrResult1 ^ SHA256(outer1_1[5]).rotr(tmp5, 19) ^ tmp5 >>> 10) + outer1_9[num2 - 7] + tmp9 + outer1_9[num2 - 16] | 0;
        num2 = num2 + 1;
      } while (num2 < 64);
      ({ A, B, C, D, E, F, G, H } = self);
      let num3 = 0;
      do {
        let tmp11 = SHA256;
        let tmp12 = outer1_1;
        let rotrResult2 = SHA256(outer1_1[5]).rotr(E, 6);
        let tmp14 = rotrResult2 ^ SHA256(outer1_1[5]).rotr(E, 11);
        let sum1 = H + (tmp14 ^ SHA256(outer1_1[5]).rotr(E, 25));
        let tmp16 = outer1_7;
        let tmp17 = outer1_9;
        let tmp18 = sum1 + SHA256(outer1_1[6]).Chi(E, F, G) + outer1_7[num3] + outer1_9[num3] | 0;
        let rotrResult3 = SHA256(outer1_1[5]).rotr(A, 2);
        let tmp20 = rotrResult3 ^ SHA256(outer1_1[5]).rotr(A, 13);
        let tmp21 = tmp20 ^ SHA256(outer1_1[5]).rotr(A, 22);
        tmp22 = D + tmp18 | 0;
        tmp23 = tmp18 + (tmp21 + SHA256(outer1_1[6]).Maj(A, B, C) | 0) | 0;
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
      outer1_9.fill(0);
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
  return _defineProperties(SHA256, items);
})(require("_isNativeReflectConstruct").HashMD);
let closure_10 = tmp5;
let closure_11 = ((arg0) => {
  class SHA224 {
    constructor() {
      tmp = outer1_2(this, SHA224);
      tmp2 = outer1_12(this, SHA224);
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
  _inherits(SHA224, arg0);
  return _defineProperties(SHA224);
})(tmp5);

export const SHA256 = tmp5;
export const sha256 = require("asciiToBase16").wrapConstructor(() => new closure_10());
export const sha224 = require("asciiToBase16").wrapConstructor(() => new closure_11());
