// Module ID: 1290
// Function ID: 15079
// Name: varint64read
// Dependencies: []

// Module 1290 (varint64read)
arg5.varint64read = undefined;
arg5.varint64write = undefined;
arg5.int64fromString = undefined;
arg5.int64toString = undefined;
arg5.varint32write = undefined;
arg5.varint32read = undefined;
arg5.varint64read = function varint64read() {
  const self = this;
  let num = 0;
  let num2 = 0;
  self.pos = +self.pos + 1;
  while (128 & self.buf[+self.pos]) {
    num2 = num2 + 7;
    num = tmp3;
    if (num2 < 28) {
      continue;
    } else {
      let tmp5 = +self.pos;
      self.pos = tmp5 + 1;
      let tmp6 = self.buf[tmp5];
      let num3 = 15;
      let tmp7 = tmp3 | (15 & tmp6) << 28;
      let num4 = 112;
      let num5 = 4;
      let tmp8 = (112 & tmp6) >> 4;
      let num6 = 3;
      let num7 = 31;
      let tmp9 = tmp8;
      if (128 & tmp6) {
        let tmp11 = +self.pos;
        self.pos = tmp11 + 1;
        let tmp12 = self.buf[tmp11];
        tmp9 = tmp9 | (127 & tmp12) << num6;
        while (128 & tmp12) {
          num6 = num6 + 7;
          if (num6 <= 31) {
            continue;
          } else {
            let tmp14 = globalThis;
            let _Error = Error;
            let tmp15 = new.target;
            let str = "invalid varint";
            let tmp16 = new.target;
            let error = new Error("invalid varint");
            let tmp18 = error;
            throw error;
          }
        }
        let assertBoundsResult = self.assertBounds();
        let items = [tmp7, tmp9];
        return items;
      } else {
        let assertBoundsResult1 = self.assertBounds();
        let items1 = [tmp7, tmp8];
        return items1;
      }
    }
  }
  self.assertBounds();
  const items2 = [num | (127 & self.buf[+self.pos]) << num2, 0];
  return items2;
};
arg5.varint64write = function varint64write(lo, hi, buf) {
  let num = 0;
  while (true) {
    let tmp = lo >>> num;
    let tmp2 = tmp >>> 7 === 0 && 0 == hi;
    let tmp3 = tmp;
    if (!tmp2) {
      tmp3 = 128 | tmp;
    }
    let arr = buf.push(255 & tmp3);
    if (tmp2) {
      break;
    } else {
      num = num + 7;
      if (num < 28) {
        continue;
      } else {
        let num2 = 15;
        let num3 = 4;
        let tmp5 = lo >>> 28 & 15 | (7 & hi) << 4;
        let num4 = 3;
        let tmp6 = hi >> 3;
        let tmp7 = tmp5;
        if (tmp6) {
          tmp7 = 128 | tmp5;
        }
        arr = buf.push(255 & tmp7);
        let num5 = 31;
        if (tmp6) {
          while (true) {
            let tmp9 = hi >>> num4;
            let tmp10 = tmp9 >>> 7 === 0;
            let tmp11 = tmp9;
            if (!tmp10) {
              tmp11 = 128 | tmp9;
            }
            let arr1 = buf.push(255 & tmp11);
            if (tmp10) {
              break;
            } else {
              num4 = num4 + 7;
              if (num4 < 31) {
                continue;
              } else {
                let num6 = 1;
                let arr2 = buf.push(hi >>> 31 & 1);
              }
            }
          }
        }
      }
    }
  }
};
arg5.int64fromString = function int64fromString(trimmed) {
  let closure_0 = trimmed;
  function add1e6digit(arg0, arg1) {
    closure_3 = closure_3 * closure_1;
    const sum = closure_2 * closure_1 + Number(arr.slice(arg0, arg1));
    closure_2 = sum;
    if (sum >= 4294967296) {
      closure_3 = closure_3 + (closure_2 / 4294967296 | 0);
      closure_2 = closure_2 % 4294967296;
    }
  }
  if ("-" == trimmed[0]) {
    closure_0 = trimmed.slice(1);
  }
  let closure_1 = 1000000;
  let closure_2 = 0;
  let closure_3 = 0;
  add1e6digit(-24, -18);
  add1e6digit(-18, -12);
  add1e6digit(-12, -6);
  add1e6digit(-6);
  const items = ["-" == trimmed[0], closure_2, closure_3];
  return items;
};
arg5.int64toString = function int64toString(lo, hi) {
  function decimalFrom1e7(result1, sum3) {
    let str = "";
    if (result1) {
      const _String = String;
      str = String(result1);
    }
    let sum = str;
    if (sum3) {
      const slice = "0000000".slice;
      sum = "0000000".slice(str.length) + str;
    }
    return sum;
  }
  if (hi <= 2097151) {
    return "" + (4294967296 * hi + (lo >>> 0));
  } else {
    const sum = (16777215 & lo) + 6777216 * tmp9 + 6710656 * tmp10;
    const sum1 = tmp9 + 8147497 * tmp10;
    const result = 2 * tmp10;
    let sum2 = sum1;
    let result1 = sum;
    if (sum >= 10000000) {
      const _Math = Math;
      sum2 = sum1 + Math.floor(sum / 10000000);
      result1 = sum % 10000000;
    }
    let sum3 = result;
    let result2 = sum2;
    if (sum2 >= 10000000) {
      const _Math2 = Math;
      sum3 = result + Math.floor(sum2 / 10000000);
      result2 = sum2 % 10000000;
    }
    const sum4 = decimalFrom1e7(sum3, 0) + decimalFrom1e7(result2, sum3);
    return sum4 + decimalFrom1e7(result1, 1);
  }
};
arg5.varint32write = function varint32write(NumberResult, buf) {
  let num = 0;
  let tmp = NumberResult;
  if (NumberResult >= 0) {
    let tmp4 = NumberResult;
    let tmp5 = NumberResult;
    if (NumberResult > 127) {
      do {
        let arr = buf.push(127 & tmp4 | 128);
        tmp4 = tmp4 >>> 7;
        tmp5 = tmp4;
      } while (tmp4 > 127);
    }
    buf.push(tmp5);
  } else {
    do {
      let arr1 = buf.push(127 & tmp | 128);
      tmp = tmp >> 7;
      num = num + 1;
    } while (num < 9);
    buf.push(1);
  }
};
arg5.varint32read = function varint32read() {
  const self = this;
  const tmp = +this.pos;
  this.pos = tmp + 1;
  const tmp2 = this.buf[tmp];
  if (128 & tmp2) {
    self.pos = +self.pos + 1;
    if (128 & self.buf[+self.pos]) {
      self.pos = +self.pos + 1;
      if (128 & self.buf[+self.pos]) {
        self.pos = +self.pos + 1;
        if (128 & self.buf[+self.pos]) {
          self.pos = +self.pos + 1;
          let tmp18 = self.buf[tmp17];
          let num5 = 5;
          if (128 & tmp18) {
            self.pos = +self.pos + 1;
            num5 = num5 + 1;
            tmp18 = tmp21;
            while (128 & self.buf[+self.pos]) {
              tmp18 = tmp21;
              if (num5 >= 10) {
                break;
              }
            }
          }
          if (128 & tmp18) {
            const _Error = Error;
            const error = new Error("invalid varint");
            throw error;
          } else {
            self.assertBounds();
            return (tmp15 | tmp19 << 28) >>> 0;
          }
          const tmp19 = 15 & tmp18;
        } else {
          self.assertBounds();
          return tmp15;
        }
      } else {
        self.assertBounds();
        return tmp11;
      }
    } else {
      self.assertBounds();
      return tmp7;
    }
  } else {
    self.assertBounds();
    return tmp3;
  }
};
