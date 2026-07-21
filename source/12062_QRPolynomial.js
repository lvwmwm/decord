// Module ID: 12062
// Function ID: 93132
// Name: QRPolynomial
// Dependencies: []

// Module 12062 (QRPolynomial)
class QRPolynomial {
  constructor(arg0, arg1) {
    self = this;
    if (null == global.length) {
      tmp8 = globalThis;
      _Error = Error;
      str = "/";
      prototype2 = Error.prototype;
      tmp9 = new.target;
      tmp10 = new.target;
      error = new Error(global.length + "/" + require);
      tmp12 = error;
      throw error;
    } else {
      num4 = 0;
      num2 = 0;
      if (0 < global.length) {
        num = 0;
        num2 = 0;
        if (0 == global[0]) {
          sum = num + 1;
          num2 = sum;
          while (sum < global.length) {
            num = sum;
            num2 = sum;
            if (0 != global[sum]) {
              break;
            }
          }
        }
      }
      tmp2 = globalThis;
      _Array = Array;
      prototype = Array.prototype;
      tmp3 = new.target;
      tmp4 = new.target;
      array = new Array(global.length - num2 + require);
      tmp6 = array;
      self.num = array;
      num3 = 0;
      if (0 < global.length - num2) {
        do {
          self.num[num3] = global[num3 + num2];
          num3 = num3 + 1;
          diff = global.length - num2;
        } while (num3 < diff);
      }
      return;
    }
  }
}
QRPolynomial.prototype = {
  get(arg0) {
    return this.num[arg0];
  },
  getLength() {
    return this.num.length;
  },
  multiply(getLength) {
    const self = this;
    const array = new Array(this.getLength() + getLength.getLength() - 1);
    let num = 0;
    if (0 < this.getLength()) {
      do {
        let num2 = 0;
        if (0 < getLength.getLength()) {
          do {
            let sum = num + num2;
            let tmp4 = closure_0;
            let tmp5 = closure_1;
            let obj = closure_0(closure_1[0]);
            let obj2 = closure_0(closure_1[0]);
            let glogResult = obj2.glog(self.get(num));
            let obj3 = closure_0(closure_1[0]);
            array[sum] = array[sum] ^ obj.gexp(glogResult + obj3.glog(getLength.get(num2)));
            num2 = num2 + 1;
            let length1 = getLength.getLength();
          } while (num2 < length1);
        }
        num = num + 1;
      } while (num < self.getLength());
    }
    const length = this.getLength();
    return new QRPolynomial(array, 0);
  },
  mod(getLength) {
    let length1;
    let length2;
    const self = this;
    if (length - getLength.getLength() < 0) {
      return self;
    } else {
      const obj4 = require(dependencyMap[0]);
      const glogResult = require(dependencyMap[0]).glog(self.get(0));
      const _Array = Array;
      const diff = glogResult - require(dependencyMap[0]).glog(getLength.get(0));
      const array = new Array(self.getLength());
      let num = 0;
      if (0 < self.getLength()) {
        do {
          array[num] = self.get(num);
          num = num + 1;
          length1 = self.getLength();
        } while (num < length1);
      }
      let num2 = 0;
      if (0 < getLength.getLength()) {
        do {
          let tmp3 = closure_0;
          let tmp4 = closure_1;
          let obj = closure_0(closure_1[0]);
          let obj2 = closure_0(closure_1[0]);
          array[num2] = array[num2] ^ obj.gexp(obj2.glog(getLength.get(num2)) + diff);
          num2 = num2 + 1;
          length2 = getLength.getLength();
        } while (num2 < length2);
      }
      const prototype = QRPolynomial.prototype;
      const obj3 = new QRPolynomial(array, 0);
      return obj3.mod(getLength);
    }
    const length = this.getLength();
  }
};

export default QRPolynomial;
