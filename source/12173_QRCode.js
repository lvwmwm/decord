// Module ID: 12173
// Function ID: 95279
// Name: QRCode
// Dependencies: [12174, 12176, 12178, 12179, 12180]

// Module 12173 (QRCode)
class QRCode {
  constructor(arg0, arg1) {
    this.typeNumber = global;
    this.errorCorrectLevel = require;
    this.modules = null;
    this.moduleCount = 0;
    this.dataCache = null;
    this.dataList = [];
    return;
  }
}
let prototype = QRCode.prototype;
prototype.addData = function(arg0) {
  let tmp = require(12174) /* QR8bitByte */;
  tmp = new tmp(arg0);
  const dataList = this.dataList;
  dataList.push(tmp);
  this.dataCache = null;
};
prototype.isDark = function(arg0, arg1) {
  const self = this;
  if (arg0 >= 0) {
    if (self.moduleCount > arg0) {
      if (arg1 >= 0) {
        if (self.moduleCount > arg1) {
          return self.modules[arg0][arg1];
        }
      }
    }
  }
  const error = new Error(arg0 + "," + arg1);
  throw error;
};
prototype.getModuleCount = function() {
  return this.moduleCount;
};
prototype.make = function() {
  let tmp14;
  const self = this;
  let num = 1;
  if (this.typeNumber < 1) {
    while (true) {
      let tmp = require;
      let tmp2 = dependencyMap;
      let obj = require(12176) /* QRRSBlock */;
      let rSBlocks = obj.getRSBlocks(num, self.errorCorrectLevel);
      let tmp3 = require(12178) /* QRBitBuffer */;
      let prototype = tmp3.prototype;
      let tmp4 = new.target;
      let tmp5 = new.target;
      tmp3 = new tmp3();
      let tmp6 = tmp3;
      let tmp7 = num;
      let num2 = 0;
      let num3 = 0;
      let num4 = 0;
      if (0 < rSBlocks.length) {
        do {
          num2 = num2 + rSBlocks[num3].dataCount;
          num3 = num3 + 1;
          num4 = num2;
          length = rSBlocks.length;
        } while (num3 < length);
      }
      let num5 = 0;
      if (0 < self.dataList.length) {
        do {
          let obj3 = self.dataList[num5];
          let putResult = tmp3.put(obj3.mode, 4);
          let tmp10 = require;
          let tmp11 = dependencyMap;
          length = obj3.getLength();
          let obj4 = require(12179) /* items */;
          let putResult1 = tmp3.put(length, obj4.getLengthInBits(obj3.mode, num));
          let writeResult = obj3.write(tmp3);
          num5 = num5 + 1;
          length2 = self.dataList.length;
        } while (num5 < length2);
      }
      tmp14 = num;
      if (tmp3.getLengthInBits() <= 8 * num4) {
        break;
      } else {
        num = num + 1;
        tmp14 = num;
        if (num >= 40) {
          break;
        }
      }
    }
    self.typeNumber = tmp14;
  }
  const impl = self.makeImpl(false, self.getBestMaskPattern());
};
prototype.makeImpl = function(arg0, arg1) {
  const self = this;
  this.moduleCount = 4 * this.typeNumber + 17;
  let array = new Array(this.moduleCount);
  this.modules = array;
  let num = 0;
  if (0 < this.moduleCount) {
    do {
      let _Array = Array;
      let tmp2 = new.target;
      let tmp3 = new.target;
      array = new Array(self.moduleCount);
      let tmp5 = array;
      self.modules[num] = array;
      let num2 = 0;
      if (0 < self.moduleCount) {
        do {
          self.modules[num][num2] = null;
          num2 = num2 + 1;
          moduleCount = self.moduleCount;
        } while (num2 < moduleCount);
      }
      num = num + 1;
    } while (num < self.moduleCount);
  }
  const result = self.setupPositionProbePattern(0, 0);
  const result1 = self.setupPositionProbePattern(self.moduleCount - 7, 0);
  const result2 = self.setupPositionProbePattern(0, self.moduleCount - 7);
  const result3 = self.setupPositionAdjustPattern();
  self.setupTimingPattern();
  self.setupTypeInfo(arg0, arg1);
  if (self.typeNumber >= 7) {
    self.setupTypeNumber(arg0);
  }
  if (null == self.dataCache) {
    self.dataCache = QRCode.createData(self.typeNumber, self.errorCorrectLevel, self.dataList);
  }
  self.mapData(self.dataCache, arg1);
};
prototype.setupPositionProbePattern = function(arg0, arg1) {
  const self = this;
  let num = -1;
  do {
    let tmp2 = tmp;
    if (arg0 + num > -1) {
      let tmp11 = 2 <= num;
      let tmp13 = 0 == num;
      let tmp15 = 0 <= num;
      let num2 = -1;
      tmp2 = tmp;
      if (self.moduleCount > arg0 + num) {
        do {
          let tmp3 = arg1 + num2 <= -1 || self.moduleCount <= arg1 + num2;
          if (!tmp3) {
            let tmp5 = tmp15;
            let sum = arg1 + num2;
            if (tmp15) {
              tmp5 = tmp14;
            }
            if (tmp5) {
              let tmp6 = 0 == num2 || 6 == num2;
              tmp5 = tmp6;
            }
            if (!tmp5) {
              let tmp7 = 0 <= num2 && num2 <= 6;
              if (tmp7) {
                let tmp8 = tmp13;
                if (!tmp13) {
                  tmp8 = tmp12;
                }
                tmp7 = tmp8;
              }
              tmp5 = tmp7;
            }
            if (!tmp5) {
              let tmp9 = tmp11;
              if (tmp11) {
                tmp9 = tmp10;
              }
              if (tmp9) {
                tmp9 = 2 <= num2;
              }
              if (tmp9) {
                tmp9 = num2 <= 4;
              }
              tmp5 = tmp9;
            }
            self.modules[arg0 + num][sum] = tmp5;
          }
          num2 = num2 + 1;
          tmp2 = num2;
        } while (num2 <= 7);
      }
    }
    num = num + 1;
    tmp = tmp2;
  } while (num <= 7);
};
prototype.getBestMaskPattern = function() {
  let tmp7;
  const self = this;
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  do {
    let impl = self.makeImpl(true, num3);
    let tmp2 = require;
    let tmp3 = dependencyMap;
    let obj = require(12179) /* items */;
    let lostPoint = obj.getLostPoint(self);
    let tmp5 = 0 == num3;
    let tmp6 = num3;
    if (!tmp5) {
      tmp5 = num > lostPoint;
    }
    if (tmp5) {
      num = lostPoint;
      num2 = num3;
    }
    num3 = num3 + 1;
    tmp7 = num2;
  } while (num3 < 8);
  return tmp7;
};
prototype.createMovieClip = function(createEmptyMovieClip) {
  const self = this;
  const emptyMovieClip = createEmptyMovieClip.createEmptyMovieClip(arg1, arg2);
  this.make();
  let num = 0;
  if (0 < this.modules.length) {
    do {
      let tmp2 = num;
      let sum = tmp2 + 1;
      let num2 = 0;
      if (0 < self.modules[num].length) {
        do {
          let tmp4 = num2;
          if (self.modules[num][num2]) {
            let beginFillResult = emptyMovieClip.beginFill(0, 100);
            let moveToResult = emptyMovieClip.moveTo(tmp4, tmp2);
            let sum1 = tmp4 + 1;
            let lineToResult = emptyMovieClip.lineTo(sum1, tmp2);
            let lineToResult1 = emptyMovieClip.lineTo(sum1, sum);
            let lineToResult2 = emptyMovieClip.lineTo(tmp4, sum);
            let endFillResult = emptyMovieClip.endFill();
          }
          num2 = num2 + 1;
          let tmp12 = tmp4;
        } while (num2 < self.modules[num].length);
      }
      num = num + 1;
    } while (num < self.modules.length);
  }
  return emptyMovieClip;
};
prototype.setupTimingPattern = function() {
  const self = this;
  let num = 8;
  if (8 < this.moduleCount - 8) {
    do {
      if (null == self.modules[num][6]) {
        self.modules[num][6] = num % 2 === 0;
      }
      num = num + 1;
    } while (num < self.moduleCount - 8);
  }
  let num2 = 8;
  if (8 < self.moduleCount - 8) {
    do {
      if (null == self.modules[6][num2]) {
        self.modules[6][num2] = num2 % 2 === 0;
      }
      num2 = num2 + 1;
    } while (num2 < self.moduleCount - 8);
  }
};
prototype.setupPositionAdjustPattern = function() {
  const self = this;
  const patternPosition = require(12179) /* items */.getPatternPosition(this.typeNumber);
  for (let num = 0; num < patternPosition.length; num = num + 1) {
    let tmp3 = tmp;
    let tmp4 = tmp2;
    let num2 = 0;
    if (0 < patternPosition.length) {
      do {
        let tmp5 = patternPosition[num];
        let tmp6 = patternPosition[num2];
        let num3 = -2;
        if (null == self.modules[tmp5][tmp6]) {
          let tmp7 = 0 == num3;
          let tmp9 = -2 == num3;
          let num4 = -2;
          do {
            do {
              let tmp11 = tmp9;
              let sum = tmp6 + num4;
              if (!tmp9) {
                tmp11 = tmp8;
              }
              if (!tmp11) {
                tmp11 = -2 == num4;
              }
              if (!tmp11) {
                tmp11 = 2 == num4;
              }
              if (!tmp11) {
                let tmp12 = tmp7;
                if (tmp7) {
                  tmp12 = 0 == num4;
                }
                tmp11 = tmp12;
              }
              self.modules[tmp5 + num3][sum] = tmp11;
              sum1 = num4 + 1;
              num4 = sum1;
            } while (sum1 <= 2);
            num3 = num3 + 1;
            tmp4 = sum1;
            tmp3 = num3;
          } while (num3 <= 2);
        }
        num2 = num2 + 1;
        let tmp14 = tmp5;
        let tmp15 = tmp6;
        tmp = tmp3;
        tmp2 = tmp4;
      } while (num2 < patternPosition.length);
    }
  }
};
prototype.setupTypeNumber = function(arg0) {
  let num2;
  const self = this;
  const bCHTypeNumber = require(12179) /* items */.getBCHTypeNumber(this.typeNumber);
  let num = 0;
  do {
    let tmp2 = !arg0 && 1 === (bCHTypeNumber >> num & 1);
    let _Math = Math;
    self.modules[Math.floor(Math, num / 3)][num % 3 + self.moduleCount - 8 - 3] = tmp2;
    num = num + 1;
    num2 = 0;
  } while (num < 18);
  do {
    let tmp3 = !arg0 && 1 === (bCHTypeNumber >> num2 & 1);
    let _Math2 = Math;
    self.modules[num2 % 3 + self.moduleCount - 8 - 3][Math.floor(num2 / 3)] = tmp3;
    num2 = num2 + 1;
  } while (num2 < 18);
};
prototype.setupTypeInfo = function(arg0, arg1) {
  let num2;
  const self = this;
  const bCHTypeInfo = require(12179) /* items */.getBCHTypeInfo(this.errorCorrectLevel << 3 | arg1);
  let num = 0;
  do {
    let tmp3 = !arg0 && 1 === (bCHTypeInfo >> num & 1);
    if (num < 6) {
      self.modules[num][8] = tmp3;
    } else if (num < 8) {
      self.modules[num + 1][8] = tmp3;
    } else {
      self.modules[self.moduleCount - 15 + num][8] = tmp3;
    }
    num = num + 1;
    num2 = 0;
  } while (num < 15);
  do {
    let tmp4 = !arg0 && 1 === (bCHTypeInfo >> num2 & 1);
    if (num2 < 8) {
      self.modules[8][self.moduleCount - num2 - 1] = tmp4;
    } else if (num2 < 9) {
      self.modules[8][15 - num2 - 1 + 1] = tmp4;
    } else {
      self.modules[8][15 - num2 - 1] = tmp4;
    }
    num2 = num2 + 1;
  } while (num2 < 15);
  self.modules[self.moduleCount - 8][8] = !arg0;
};
prototype.mapData = function(arg0, arg1) {
  const self = this;
  const diff = this.moduleCount - 1;
  const diff1 = this.moduleCount - 1;
  let num = 7;
  let num2 = 0;
  if (diff1 > 0) {
    while (true) {
      let tmp5 = diff;
      let tmp6 = num;
      let tmp7 = num2;
      let tmp8 = tmp4;
      let diff2 = diff1;
      if (6 === diff1) {
        diff2 = diff1 - 1;
        tmp5 = diff;
        tmp6 = num;
        tmp7 = num2;
        tmp8 = tmp4;
      }
      let tmp10 = diff2;
      let num3 = 0;
      while (true) {
        do {
          num = tmp6;
          num2 = tmp7;
          if (null == self.modules[tmp5][diff2 - num3]) {
            let flag = false;
            if (tmp7 < arg0.length) {
              flag = 1 === (arg0[tmp7] >>> tmp6 & 1);
            }
            let tmp11 = require;
            let tmp12 = dependencyMap;
            let obj = require(12179) /* items */;
            let tmp13 = flag;
            if (obj.getMask(arg1, tmp5, diff2 - num3)) {
              tmp13 = !flag;
            }
            self.modules[tmp5][diff2 - num3] = tmp13;
            num = tmp6 - 1;
            num2 = tmp7;
            tmp8 = tmp13;
            if (-1 == num) {
              num2 = tmp7 + 1;
              num = 7;
              tmp8 = tmp13;
            }
          }
          num3 = num3 + 1;
          tmp4 = tmp8;
          tmp6 = num;
          tmp7 = num2;
        } while (num3 < 2);
        let sum = tmp5 + tmp3;
        if (sum < 0) {
          break;
        } else {
          tmp6 = num;
          tmp7 = num2;
          tmp8 = tmp4;
          tmp5 = sum;
          if (self.moduleCount <= sum) {
            break;
          }
        }
      }
    }
  }
};
QRCode.PAD0 = 236;
QRCode.PAD1 = 17;
QRCode.createData = (arg0, arg1, arg2) => {
  let length;
  let length2;
  let result;
  const rSBlocks = require(12176) /* QRRSBlock */.getRSBlocks(arg0, arg1);
  let tmp = require(12178) /* QRBitBuffer */;
  tmp = new tmp();
  let num = 0;
  if (0 < arg2.length) {
    do {
      let obj3 = arg2[num];
      let putResult = tmp.put(obj3.mode, 4);
      let tmp4 = require;
      let tmp5 = dependencyMap;
      length = obj3.getLength();
      let obj4 = require(12179) /* items */;
      let putResult1 = tmp.put(length, obj4.getLengthInBits(obj3.mode, arg0));
      let writeResult = obj3.write(tmp);
      num = num + 1;
      length = arg2.length;
    } while (num < length);
  }
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  if (0 < rSBlocks.length) {
    do {
      num3 = num3 + rSBlocks[num2].dataCount;
      num2 = num2 + 1;
      num4 = num3;
      length2 = rSBlocks.length;
    } while (num2 < length2);
  }
  if (tmp.getLengthInBits() > 8 * num4) {
    const _Error = Error;
    const error = new Error("code length overflow. (" + tmp.getLengthInBits() + ">" + 8 * num4 + ")");
    throw error;
  } else {
    if (tmp.getLengthInBits() + 4 <= 8 * num4) {
      tmp.put(0, 4);
    }
    if (tmp.getLengthInBits() % 8 !== 0) {
      do {
        let putBitResult = tmp.putBit(false);
        result = tmp.getLengthInBits() % 8;
      } while (result !== 0);
    }
    if (tmp.getLengthInBits() < 8 * num4) {
      tmp.put(QRCode.PAD0, 8);
      if (tmp.getLengthInBits() < 8 * num4) {
        tmp.put(QRCode.PAD1, 8);
        while (tmp.getLengthInBits() < 8 * num4) {
          let tmp15 = QRCode;
          let putResult5 = tmp.put(QRCode.PAD0, 8);
          if (tmp.getLengthInBits() >= 8 * num4) {
            break;
          }
        }
      }
    }
    return QRCode.createBytes(tmp, rSBlocks);
  }
  const obj = require(12176) /* QRRSBlock */;
};
QRCode.createBytes = (arg0, arg1) => {
  let length2;
  let array = new Array(arg1.length);
  array = new Array(arg1.length);
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  let num5 = 0;
  let num6 = 0;
  if (0 < arg1.length) {
    do {
      let dataCount = arg1[num4].dataCount;
      let diff = arg1[num4].totalCount - dataCount;
      let _Math = Math;
      let bound = Math.max(num2, dataCount);
      let _Math2 = Math;
      let bound1 = Math.max(num3, diff);
      let _Array = Array;
      let tmp6 = new.target;
      let tmp7 = new.target;
      let tmp8 = dataCount;
      let array1 = new Array(dataCount);
      let tmp10 = array1;
      array[num4] = array1;
      let num7 = 0;
      if (0 < array[num4].length) {
        do {
          array[num4][num7] = 255 & arg0.buffer[num7 + num];
          num7 = num7 + 1;
          length = array[num4].length;
        } while (num7 < length);
      }
      num = num + dataCount;
      let tmp11 = require;
      let tmp12 = dependencyMap;
      let obj = require(12179) /* items */;
      let errorCorrectPolynomial = obj.getErrorCorrectPolynomial(diff);
      let tmp13 = require(12180) /* QRPolynomial */;
      let prototype2 = tmp13.prototype;
      let tmp14 = new.target;
      let tmp15 = new.target;
      tmp13 = new tmp13(array[num4], errorCorrectPolynomial.getLength() - 1);
      let tmp16 = tmp13;
      let modResult = tmp13.mod(errorCorrectPolynomial);
      let _Array2 = Array;
      let tmp17 = new.target;
      let tmp18 = new.target;
      let array2 = new Array(errorCorrectPolynomial.getLength() - 1);
      let tmp20 = array2;
      array[num4] = array2;
      let num8 = 0;
      if (0 < array[num4].length) {
        do {
          let diff1 = num8 + modResult.getLength() - array[num4].length;
          let num9 = 0;
          if (diff1 >= 0) {
            num9 = modResult.get(diff1);
          }
          array[num4][num8] = num9;
          num8 = num8 + 1;
          let tmp22 = diff1;
        } while (num8 < array[num4].length);
      }
      num4 = num4 + 1;
      num2 = bound;
      num3 = bound1;
      num5 = bound;
      num6 = bound1;
    } while (num4 < arg1.length);
  }
  let num10 = 0;
  let num11 = 0;
  let num12 = 0;
  if (0 < arg1.length) {
    do {
      num11 = num11 + arg1[num10].totalCount;
      num10 = num10 + 1;
      num12 = num11;
      length2 = arg1.length;
    } while (num10 < length2);
  }
  const array3 = new Array(num12);
  let num13 = 0;
  let num14 = 0;
  let num15 = 0;
  if (0 < num5) {
    do {
      let tmp24 = num14;
      let num16 = 0;
      let tmp25 = num14;
      if (0 < arg1.length) {
        do {
          let sum = tmp24;
          if (num13 < array[num16].length) {
            let tmp27 = +tmp24;
            sum = tmp27 + 1;
            array3[tmp27] = array[num16][num13];
          }
          num16 = num16 + 1;
          tmp24 = sum;
          tmp25 = sum;
        } while (num16 < arg1.length);
      }
      num13 = num13 + 1;
      num14 = tmp25;
      num15 = tmp25;
    } while (num13 < num5);
  }
  for (let num17 = 0; num17 < num6; num17 = num17 + 1) {
    let tmp28 = num15;
    let num18 = 0;
    if (0 < arg1.length) {
      do {
        let sum1 = tmp28;
        if (num17 < array[num18].length) {
          let tmp30 = +tmp28;
          sum1 = tmp30 + 1;
          array3[tmp30] = array[num18][num17];
        }
        num18 = num18 + 1;
        tmp28 = sum1;
        num15 = sum1;
      } while (num18 < arg1.length);
    }
  }
  return array3;
};

export default QRCode;
