// Module ID: 12206
// Function ID: 95552
// Name: items
// Dependencies: [12207, 12208, 12202]

// Module 12206 (items)
const obj = { PATTERN_POSITION_TABLE: null, G15: 1335, G18: 7973, G15_MASK: 21522 };
let items = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]];
obj.PATTERN_POSITION_TABLE = items;
obj.getBCHTypeInfo = function getBCHTypeInfo(arg0) {
  let diff;
  const bCHDigit = obj.getBCHDigit(tmp);
  let tmp3 = tmp;
  let tmp4 = tmp;
  if (bCHDigit - obj.getBCHDigit(obj.G15) >= 0) {
    do {
      let tmp5 = obj;
      let tmp6 = obj;
      let tmp8 = obj;
      let tmp9 = obj;
      let bCHDigit1 = obj.getBCHDigit(tmp3);
      let tmp10 = tmp3 ^ obj.G15 << bCHDigit1 - obj.getBCHDigit(obj.G15);
      let tmp11 = obj;
      let tmp13 = obj;
      let tmp14 = obj;
      let bCHDigit2 = obj.getBCHDigit(tmp10);
      tmp3 = tmp10;
      tmp4 = tmp10;
      diff = bCHDigit2 - obj.getBCHDigit(obj.G15);
    } while (diff >= 0);
  }
  return (arg0 << 10 | tmp4) ^ obj.G15_MASK;
};
obj.getBCHTypeNumber = function getBCHTypeNumber(typeNumber) {
  let diff;
  const bCHDigit = obj.getBCHDigit(tmp);
  let tmp3 = tmp;
  let tmp4 = tmp;
  if (bCHDigit - obj.getBCHDigit(obj.G18) >= 0) {
    do {
      let tmp5 = obj;
      let tmp6 = obj;
      let tmp8 = obj;
      let tmp9 = obj;
      let bCHDigit1 = obj.getBCHDigit(tmp3);
      let tmp10 = tmp3 ^ obj.G18 << bCHDigit1 - obj.getBCHDigit(obj.G18);
      let tmp11 = obj;
      let tmp13 = obj;
      let tmp14 = obj;
      let bCHDigit2 = obj.getBCHDigit(tmp10);
      tmp3 = tmp10;
      tmp4 = tmp10;
      diff = bCHDigit2 - obj.getBCHDigit(obj.G18);
    } while (diff >= 0);
  }
  return typeNumber << 12 | tmp4;
};
obj.getBCHDigit = function getBCHDigit(G15) {
  let tmp = G15;
  let num = 0;
  let num2 = 0;
  if (0 != G15) {
    do {
      num = num + 1;
      tmp = tmp >>> 1;
      num2 = num;
    } while (0 !== tmp);
  }
  return num2;
};
obj.getPatternPosition = function getPatternPosition(typeNumber) {
  return obj.PATTERN_POSITION_TABLE[typeNumber - 1];
};
obj.getMask = function getMask(arg0, arg1, arg2) {
  if (0 === arg0) {
    return (arg1 + arg2) % 2 === 0;
  } else if (1 === arg0) {
    return arg1 % 2 === 0;
  } else if (2 === arg0) {
    return arg2 % 3 === 0;
  } else if (3 === arg0) {
    return (arg1 + arg2) % 3 === 0;
  } else if (4 === arg0) {
    const _Math = Math;
    const _Math2 = Math;
    const rounded = Math.floor(arg1 / 2);
    return (rounded + Math.floor(arg2 / 3)) % 2 === 0;
  } else if (5 === arg0) {
    return arg1 * arg2 % 2 + arg1 * arg2 % 3 === 0;
  } else if (6 === arg0) {
    return (arg1 * arg2 % 2 + arg1 * arg2 % 3) % 2 === 0;
  } else if (7 === arg0) {
    return (arg1 * arg2 % 3 + (arg1 + arg2) % 2) % 2 === 0;
  } else {
    const _Error = Error;
    const error = new Error("bad maskPattern:" + arg0);
    throw error;
  }
};
obj.getErrorCorrectPolynomial = function getErrorCorrectPolynomial(diff) {
  let tmp = require(12207) /* QRPolynomial */;
  tmp = new tmp([1], 0);
  let multiplyResult = tmp;
  let num = 0;
  let tmp3 = tmp;
  if (0 < diff) {
    do {
      let tmp4 = require;
      let tmp5 = dependencyMap;
      let tmp6 = require(12207) /* QRPolynomial */;
      let obj2 = require(12208);
      let items = [1, obj2.gexp(num)];
      let prototype = tmp6.prototype;
      let tmp7 = new.target;
      let tmp8 = new.target;
      let tmp9 = items;
      let num2 = 0;
      tmp6 = new tmp6(items, 0);
      let tmp11 = tmp6;
      multiplyResult = multiplyResult.multiply(tmp6);
      num = num + 1;
      tmp3 = multiplyResult;
    } while (num < diff);
  }
  return tmp3;
};
obj.getLengthInBits = function getLengthInBits(arg0, arg1) {
  if (1 <= arg1) {
    if (arg1 < 10) {
      if (require(12202).MODE_NUMBER === arg0) {
        return 10;
      } else if (require(12202).MODE_ALPHA_NUM === arg0) {
        return 9;
      } else {
        if (require(12202).MODE_8BIT_BYTE !== arg0) {
          if (require(12202).MODE_KANJI !== arg0) {
            const _Error4 = Error;
            const error = new Error("mode:" + arg0);
            throw error;
          }
        }
        return 8;
      }
    }
  }
  if (arg1 < 27) {
    if (require(12202).MODE_NUMBER === arg0) {
      return 12;
    } else if (require(12202).MODE_ALPHA_NUM === arg0) {
      return 11;
    } else if (require(12202).MODE_8BIT_BYTE === arg0) {
      return 16;
    } else if (require(12202).MODE_KANJI === arg0) {
      return 10;
    } else {
      const _Error3 = Error;
      const error1 = new Error("mode:" + arg0);
      throw error1;
    }
  } else if (arg1 < 41) {
    if (require(12202).MODE_NUMBER === arg0) {
      return 14;
    } else if (require(12202).MODE_ALPHA_NUM === arg0) {
      return 13;
    } else if (require(12202).MODE_8BIT_BYTE === arg0) {
      return 16;
    } else if (require(12202).MODE_KANJI === arg0) {
      return 12;
    } else {
      const _Error2 = Error;
      const error2 = new Error("mode:" + arg0);
      throw error2;
    }
  } else {
    const _Error = Error;
    const error3 = new Error("type:" + arg1);
    throw error3;
  }
};
obj.getLostPoint = function getLostPoint(self) {
  const moduleCount = self.getModuleCount();
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < moduleCount) {
    do {
      let tmp3 = num;
      let tmp4 = tmp2;
      let num4 = 0;
      let tmp5 = num;
      if (0 < moduleCount) {
        let isDarkResult = self.isDark(num2, num4);
        let tmp7 = num4;
        let num5 = 0;
        let num6 = -1;
        do {
          do {
            let tmp8 = num5;
            let tmp9 = tmp4;
            if (num2 + num6 >= 0) {
              let tmp10 = 0 == num6;
              let tmp11 = num5;
              let num7 = -1;
              tmp8 = num5;
              tmp9 = tmp4;
              if (moduleCount > num2 + num6) {
                do {
                  let tmp12 = num4 + num7 < 0 || moduleCount <= num4 + num7;
                  if (!tmp12) {
                    let tmp13 = tmp10;
                    if (tmp10) {
                      tmp13 = 0 == num7;
                    }
                    tmp12 = tmp13;
                  }
                  let tmp14 = tmp11;
                  if (!tmp12) {
                    let sum = tmp11;
                    if (isDarkResult == self.isDark(num2 + num6, num4 + num7)) {
                      sum = tmp11 + 1;
                    }
                    tmp14 = sum;
                  }
                  num7 = num7 + 1;
                  tmp11 = tmp14;
                  tmp8 = tmp14;
                  tmp9 = num7;
                } while (num7 <= 1);
              }
            }
            sum1 = num6 + 1;
            num5 = tmp8;
            num6 = sum1;
            tmp4 = tmp9;
          } while (sum1 <= 1);
          let sum2 = tmp3;
          if (tmp8 > 5) {
            sum2 = tmp3 + (3 + tmp8 - 5);
          }
          num4 = num4 + 1;
          tmp3 = sum2;
          tmp4 = tmp9;
          tmp5 = sum2;
          let tmp18 = tmp8;
          let tmp19 = isDarkResult;
          let tmp20 = sum1;
          tmp2 = tmp9;
        } while (num4 < moduleCount);
      }
      num2 = num2 + 1;
      num = tmp5;
      num3 = tmp5;
    } while (num2 < moduleCount);
  }
  let tmp21 = num3;
  let num8 = 0;
  let tmp22 = num3;
  if (0 < moduleCount - 1) {
    do {
      let tmp23 = tmp21;
      let num9 = 0;
      let tmp24 = tmp21;
      if (0 < moduleCount - 1) {
        do {
          let tmp25 = num9;
          let num10 = 0;
          if (self.isDark(num8, num9)) {
            num10 = 1;
          }
          let sum3 = num10;
          if (self.isDark(num8 + 1, num9)) {
            sum3 = num10 + 1;
          }
          let sum4 = sum3;
          if (self.isDark(num8, num9 + 1)) {
            sum4 = sum3 + 1;
          }
          let sum5 = sum4;
          if (self.isDark(num8 + 1, num9 + 1)) {
            sum5 = sum4 + 1;
          }
          let tmp29 = 0 !== sum5 && 4 !== sum5;
          let sum6 = tmp23;
          if (!tmp29) {
            sum6 = tmp23 + 3;
          }
          num9 = num9 + 1;
          tmp23 = sum6;
          tmp24 = sum6;
          let tmp31 = sum5;
        } while (num9 < moduleCount - 1);
      }
      num8 = num8 + 1;
      tmp21 = tmp24;
      tmp22 = tmp24;
    } while (num8 < moduleCount - 1);
  }
  let tmp32 = tmp22;
  let num11 = 0;
  let tmp33 = tmp22;
  if (0 < moduleCount) {
    do {
      let tmp34 = tmp32;
      let num12 = 0;
      let tmp35 = tmp32;
      if (0 < moduleCount - 6) {
        do {
          let isDarkResult1 = self.isDark(num11, num12);
          let tmp37 = num12;
          if (isDarkResult1) {
            isDarkResult1 = !self.isDark(num11, num12 + 1);
          }
          if (isDarkResult1) {
            isDarkResult1 = self.isDark(num11, num12 + 2);
          }
          if (isDarkResult1) {
            isDarkResult1 = self.isDark(num11, num12 + 3);
          }
          if (isDarkResult1) {
            isDarkResult1 = self.isDark(num11, num12 + 4);
          }
          if (isDarkResult1) {
            isDarkResult1 = !self.isDark(num11, num12 + 5);
          }
          if (isDarkResult1) {
            isDarkResult1 = self.isDark(num11, num12 + 6);
          }
          let sum7 = tmp34;
          if (isDarkResult1) {
            sum7 = tmp34 + 40;
          }
          num12 = num12 + 1;
          tmp34 = sum7;
          tmp35 = sum7;
        } while (num12 < moduleCount - 6);
      }
      num11 = num11 + 1;
      tmp32 = tmp35;
      tmp33 = tmp35;
    } while (num11 < moduleCount);
  }
  let tmp39 = tmp33;
  let num13 = 0;
  let tmp40 = tmp33;
  if (0 < moduleCount) {
    do {
      let tmp41 = tmp39;
      let num14 = 0;
      let tmp42 = tmp39;
      if (0 < moduleCount - 6) {
        do {
          let isDarkResult2 = self.isDark(num14, num13);
          let tmp44 = num14;
          if (isDarkResult2) {
            isDarkResult2 = !self.isDark(num14 + 1, num13);
          }
          if (isDarkResult2) {
            isDarkResult2 = self.isDark(num14 + 2, num13);
          }
          if (isDarkResult2) {
            isDarkResult2 = self.isDark(num14 + 3, num13);
          }
          if (isDarkResult2) {
            isDarkResult2 = self.isDark(num14 + 4, num13);
          }
          if (isDarkResult2) {
            isDarkResult2 = !self.isDark(num14 + 5, num13);
          }
          if (isDarkResult2) {
            isDarkResult2 = self.isDark(num14 + 6, num13);
          }
          let sum8 = tmp41;
          if (isDarkResult2) {
            sum8 = tmp41 + 40;
          }
          num14 = num14 + 1;
          tmp41 = sum8;
          tmp42 = sum8;
        } while (num14 < moduleCount - 6);
      }
      num13 = num13 + 1;
      tmp39 = tmp42;
      tmp40 = tmp42;
    } while (num13 < moduleCount);
  }
  let num15 = 0;
  let num16 = 0;
  let num17 = 0;
  if (0 < moduleCount) {
    do {
      let tmp46 = num16;
      let num18 = 0;
      let tmp47 = num16;
      if (0 < moduleCount) {
        do {
          let tmp48 = num18;
          let sum9 = tmp46;
          if (self.isDark(num18, num15)) {
            sum9 = tmp46 + 1;
          }
          num18 = num18 + 1;
          tmp46 = sum9;
          tmp47 = sum9;
        } while (num18 < moduleCount);
      }
      num15 = num15 + 1;
      num16 = tmp47;
      num17 = tmp47;
    } while (num15 < moduleCount);
  }
  return tmp40 + 10 * (Math.abs(100 * num17 / moduleCount / moduleCount - 50) / 5);
};

export default obj;
