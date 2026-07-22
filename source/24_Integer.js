// Module ID: 24
// Function ID: 965
// Name: Integer
// Dependencies: []

// Module 24 (Integer)
const tmp = (arg0) => {
  class Integer {
    constructor(arg0, arg1, arg2, arg3) {
      if (undefined === arg0) {
        tmp8 = Integer;
        num2 = 0;
        first = Integer[0];
      } else if (undefined === arg1) {
        tmp = parseValue;
        first = parseValue(arg0);
      } else {
        num = 10;
        if (10 === +arg1) {
        }
        tmp3 = parseBase;
        tmp4 = arg3;
        tmp5 = arg0;
        tmp6 = arg1;
        tmp7 = arg2;
        first = parseBase(arg0, arg1, arg2, arg3);
      }
      return first;
    }
  }
  class BigInteger {
    constructor(arg0, arg1) {
      this.value = arg0;
      this.sign = arg1;
      this.isSmall = false;
      return;
    }
    add(arg0) {
      self = this;
      iter = parseValue(arg0);
      if (this.sign !== iter.sign) {
        return self.subtract(iter.negate());
      } else {
        value = self.value;
        value = iter.value;
        tmp = BigInteger;
        if (iter.isSmall) {
          tmp6 = addSmall;
          tmp7 = globalThis;
          _Math = Math;
          prototype2 = tmp.prototype;
          tmp8 = new.target;
          tmp9 = new.target;
          tmp = new tmp(addSmall(value, Math.abs(value)), self.sign);
        } else {
          tmp2 = addAny;
          prototype = tmp.prototype;
          tmp3 = new.target;
          tmp4 = new.target;
          tmp = new tmp(addAny(value, value), self.sign);
        }
        return tmp;
      }
    }
    subtract(arg0) {
      self = this;
      iter = parseValue(arg0);
      if (this.sign !== iter.sign) {
        return self.add(iter.negate());
      } else {
        value = self.value;
        value = iter.value;
        if (iter.isSmall) {
          tmp19 = subtractSmall;
          tmp20 = globalThis;
          _Math = Math;
          tmp13 = subtractSmall(value, Math.abs(value), self.sign);
        } else {
          sign = self.sign;
          tmp = compareAbs;
          num = 0;
          if (compareAbs(value, value) >= 0) {
            tmp5 = subtract;
            tmp3 = subtract(value, value);
            tmp4 = sign;
          } else {
            tmp2 = subtract;
            tmp3 = subtract(value, value);
            tmp4 = !sign;
          }
          tmp6 = arrayToSmall;
          tmp7 = arrayToSmall(tmp3);
          str = "number";
          if ("number" === typeof tmp7) {
            tmp14 = tmp7;
            if (tmp4) {
              tmp14 = -tmp7;
            }
            tmp15 = SmallInteger;
            prototype2 = SmallInteger.prototype;
            tmp16 = new.target;
            tmp17 = new.target;
            tmp18 = tmp14;
            tmp13 = new SmallInteger(tmp14);
          } else {
            tmp8 = BigInteger;
            prototype = BigInteger.prototype;
            tmp9 = new.target;
            tmp10 = new.target;
            tmp11 = tmp7;
            tmp12 = tmp4;
            tmp13 = new BigInteger(tmp7, tmp4);
          }
        }
        return tmp13;
      }
    }
    negate() {
      tmp = new BigInteger(this.value, !this.sign);
      return tmp;
    }
    abs() {
      tmp = new BigInteger(this.value, false);
      return tmp;
    }
    multiply(arg0) {
      self = this;
      iter = parseValue(arg0);
      value = this.value;
      value = iter.value;
      tmp = this.sign !== iter.sign;
      arr2 = value;
      if (iter.isSmall) {
        num = 0;
        if (0 === value) {
          tmp20 = Integer;
          return Integer[0];
        } else {
          num2 = 1;
          if (1 === value) {
            return self;
          } else {
            num3 = -1;
            if (-1 === value) {
              return self.negate();
            } else {
              tmp21 = globalThis;
              _Math = Math;
              absolute = Math.abs(value);
              num4 = 10000000;
              if (absolute < 10000000) {
                tmp13 = BigInteger;
                tmp14 = multiplySmall;
                prototype3 = BigInteger.prototype;
                tmp15 = new.target;
                tmp16 = new.target;
                tmp17 = tmp;
                tmp18 = new BigInteger(multiplySmall(value, absolute), tmp);
                tmp19 = tmp18;
                return tmp18;
              } else {
                tmp23 = smallToArray;
                arr2 = smallToArray(absolute);
              }
            }
          }
        }
      }
      length = value.length;
      length2 = arr2.length;
      if (-0.012 * length - 0.012 * length2 + 0.000015 * length * length2 > 0) {
        tmp8 = BigInteger;
        tmp9 = multiplyKaratsuba;
        prototype2 = BigInteger.prototype;
        tmp10 = new.target;
        tmp11 = new.target;
        tmp12 = tmp;
        tmp7 = new BigInteger(multiplyKaratsuba(value, arr2), tmp);
      } else {
        tmp2 = BigInteger;
        tmp3 = multiplyLong;
        prototype = BigInteger.prototype;
        tmp4 = new.target;
        tmp5 = new.target;
        tmp6 = tmp;
        tmp7 = new BigInteger(multiplyLong(value, arr2), tmp);
      }
      return tmp7;
    }
    _multiplyBySmall(arg0) {
      self = this;
      if (0 === arg0.value) {
        tmp6 = Integer;
        first = Integer[0];
      } else {
        num = 1;
        first = self;
        if (1 !== arg0.value) {
          num2 = -1;
          if (-1 === arg0.value) {
            negateResult = self.negate();
          } else {
            tmp2 = multiplySmallAndArray;
            tmp3 = globalThis;
            _Math = Math;
            negateResult = multiplySmallAndArray(Math.abs(arg0.value), self.value, self.sign !== arg0.sign);
          }
          tmp5 = negateResult;
        }
      }
      return first;
    }
    square() {
      tmp = new BigInteger(square(this.value), false);
      return tmp;
    }
    divmod(arg0) {
      tmp = divModAny(this, arg0);
      obj = { quotient: tmp[0], remainder: tmp[1] };
      return obj;
    }
    divide(arg0) {
      return divModAny(this, arg0)[0];
    }
    mod(arg0) {
      return divModAny(this, arg0)[1];
    }
    pow(arg0) {
      self = this;
      iter = parseValue(arg0);
      value = this.value;
      value = iter.value;
      if (0 === value) {
        tmp26 = Integer;
        num2 = 1;
        return Integer[1];
      } else if (0 === value) {
        tmp25 = Integer;
        return Integer[0];
      } else {
        num3 = 1;
        if (1 === value) {
          tmp24 = Integer;
          return Integer[1];
        } else {
          num4 = -1;
          if (-1 === value) {
            tmp23 = Integer;
            return iter.isEven() ? tmp23[1] : tmp23[-1];
          } else if (iter.sign) {
            tmp22 = Integer;
            return Integer[0];
          } else if (iter.isSmall) {
            if (self.isSmall) {
              tmp6 = isPrecise;
              tmp7 = globalThis;
              _Math = Math;
              powResult = Math.pow(value, value);
              if (isPrecise(powResult)) {
                tmp16 = SmallInteger;
                tmp17 = truncate;
                prototype2 = SmallInteger.prototype;
                tmp18 = new.target;
                tmp19 = new.target;
                tmp20 = new SmallInteger(truncate(powResult));
                tmp21 = tmp20;
                return tmp20;
              }
            }
            tmp9 = Integer;
            obj = Integer[1];
            flag = true;
            timesResult = obj;
            diff = value;
            if (true & value) {
              timesResult = obj.times(self);
              diff = value - 1;
            }
            num = 2;
            obj2 = self;
            obj3 = timesResult;
            tmp12 = timesResult;
            if (0 !== diff) {
              do {
                result = diff / 2;
                squareResult = obj2.square();
                timesResult1 = obj3;
                diff = result;
                if (true & result) {
                  timesResult1 = obj3.times(squareResult);
                  diff = result - 1;
                }
                obj3 = timesResult1;
                obj2 = squareResult;
                tmp12 = timesResult1;
              } while (0 !== diff);
            }
            return tmp12;
          } else {
            tmp = globalThis;
            _Error = Error;
            str = "The exponent ";
            prototype = Error.prototype;
            tmp2 = new.target;
            str2 = " is too large.";
            tmp3 = new.target;
            error = new Error("The exponent " + iter.toString() + " is too large.");
            tmp5 = error;
            throw error;
          }
        }
      }
    }
    modPow(arg0, arg1) {
      self = this;
      obj = parseValue(arg0);
      obj2 = parseValue(arg1);
      if (obj2.isZero()) {
        tmp8 = globalThis;
        _Error = Error;
        prototype = Error.prototype;
        tmp9 = new.target;
        str = "Cannot take modPow with modulus 0";
        tmp10 = new.target;
        error = new Error("Cannot take modPow with modulus 0");
        tmp12 = error;
        throw error;
      } else {
        tmp = Integer;
        num = 1;
        tmp2 = Integer[1];
        modResult = self.mod(obj2);
        multiplyResult = obj;
        modInvResult = modResult;
        if (obj.isNegative()) {
          tmp3 = Integer;
          num2 = -1;
          multiplyResult = obj.multiply(Integer[-1]);
          modInvResult = modResult.modInv(obj2);
        }
        num3 = 2;
        obj6 = multiplyResult;
        obj7 = tmp2;
        tmp4 = tmp2;
        if (multiplyResult.isPositive()) {
          tmp5 = modInvResult;
          while (!modInvResult.isZero()) {
            modResult1 = obj7;
            if (obj6.isOdd()) {
              multiplyResult1 = obj7.multiply(modInvResult);
              modResult1 = multiplyResult1.mod(obj2);
            }
            divideResult = obj6.divide(2);
            squareResult = modInvResult.square();
            modInvResult = squareResult.mod(obj2);
            obj7 = modResult1;
            obj6 = divideResult;
            tmp4 = modResult1;
          }
          tmp7 = Integer;
          num4 = 0;
          return Integer[0];
        }
        return tmp4;
      }
    }
    compareAbs(arg0) {
      tmp = parseValue(arg0);
      num = 1;
      if (!tmp.isSmall) {
        tmp4 = compareAbs;
        num = compareAbs(tmp2, tmp3);
      }
      return num;
    }
    compare(arg0) {
      self = this;
      if (arg0 === Infinity) {
        num5 = -1;
        return -1;
      } else {
        num6 = -Infinity;
        if (arg0 === -Infinity) {
          num4 = 1;
          return 1;
        } else {
          tmp4 = parseValue;
          tmp5 = parseValue(arg0);
          if (self.sign !== tmp5.sign) {
            num3 = -1;
            if (tmp5.sign) {
              num3 = 1;
            }
            result = num3;
          } else if (tmp5.isSmall) {
            num2 = 1;
            if (self.sign) {
              num2 = -1;
            }
            result = num2;
          } else {
            tmp = compareAbs;
            num = 1;
            tmp2 = compareAbs(tmp6, tmp7);
            if (self.sign) {
              num = -1;
            }
            result = tmp2 * num;
          }
          return result;
        }
      }
    }
    equals(arg0) {
      return 0 === this.compare(arg0);
    }
    notEquals(arg0) {
      return 0 !== this.compare(arg0);
    }
    greater(arg0) {
      return this.compare(arg0) > 0;
    }
    lesser(arg0) {
      return this.compare(arg0) < 0;
    }
    greaterOrEquals(arg0) {
      return this.compare(arg0) >= 0;
    }
    lesserOrEquals(arg0) {
      return this.compare(arg0) <= 0;
    }
    isEven() {
      return !(1 & this.value[0]);
    }
    isOdd() {
      return !(1 & ~this.value[0]);
    }
    isPositive() {
      return !this.sign;
    }
    isNegative() {
      return this.sign;
    }
    isUnit() {
      return false;
    }
    isZero() {
      return false;
    }
    isDivisibleBy(arg0) {
      self = this;
      obj = parseValue(arg0);
      tmp = !obj.isZero();
      if (tmp) {
        tmp2 = !obj.isUnit();
        if (!tmp2) {
          tmp = !tmp2;
        } else {
          num = 2;
          num2 = 0;
          if (0 === obj.compareAbs(2)) {
            isEvenResult = self.isEven();
          } else {
            modResult = self.mod(obj);
            isEvenResult = modResult.isZero();
          }
          tmp4 = isEvenResult;
        }
      }
      return tmp;
    }
    isPrime(arg0) {
      self = this;
      tmp = isBasicPrime(this);
      if (tmp !== closure_0) {
        return tmp;
      } else {
        absResult = self.abs();
        bitLengthResult = absResult.bitLength();
        num2 = 64;
        if (bitLengthResult <= 64) {
          tmp7 = millerRabinTest;
          return millerRabinTest(absResult, ["ch\u00E1pu", "dokonal\u00FD", "gesto OK", "jasn\u011B", "ok", "OK", "par\u00E1da", "peckovn\u00ED", "perfektn\u00ED", "prvot\u0159\u00EDdn\u00ED", "rozum\u00EDm", "ruka"]);
        } else {
          tmp8 = globalThis;
          _Math2 = Math;
          num3 = 2;
          logResult = Math.log(2);
          result = logResult * bitLengthResult.toJSNumber();
          flag = true;
          tmp11 = arg0;
          result1 = result;
          if (true === arg0) {
            _Math = Math;
            result1 = 2 * Math.pow(result, 2);
          }
          rounded = Math.ceil(result1);
          items = [];
          for (let num = 0; num < rounded; num = num + 1) {
            tmp4 = closure_0;
            arr = items.push(closure_0(num + 2));
          }
          tmp6 = millerRabinTest;
          return millerRabinTest(absResult, items);
        }
      }
    }
    isProbablePrime(arg0, arg1) {
      self = this;
      tmp = isBasicPrime(this);
      if (tmp !== closure_0) {
        return tmp;
      } else {
        absResult = self.abs();
        tmp2 = closure_0;
        num = 5;
        if (arg0 !== closure_0) {
          num = arg0;
        }
        items = [];
        num2 = 0;
        num3 = 2;
        if (0 < num) {
          do {
            tmp3 = closure_0;
            arr = items.push(closure_0.randBetween(2, absResult.minus(2), arg1));
            num2 = num2 + 1;
          } while (num2 < num);
        }
        tmp5 = millerRabinTest;
        return millerRabinTest(absResult, items);
      }
    }
    modInv(arg0) {
      self = this;
      zero = closure_0.zero;
      one = closure_0.one;
      obj = parseValue(arg0);
      absResult = this.abs();
      obj3 = zero;
      obj4 = obj;
      if (!absResult.isZero()) {
        do {
          divideResult = obj.divide(absResult);
          subtractResult = zero.subtract(divideResult.multiply(one));
          subtractResult1 = obj.subtract(divideResult.multiply(absResult));
          zero = one;
          obj = absResult;
          one = subtractResult;
          absResult = subtractResult1;
          obj3 = zero;
          obj4 = obj;
          isZeroResult = subtractResult1.isZero();
        } while (!isZeroResult);
      }
      if (obj4.isUnit()) {
        num = 0;
        num2 = -1;
        addResult = obj3;
        if (-1 === obj3.compare(0)) {
          addResult = obj3.add(arg0);
        }
        negateResult = addResult;
        if (self.isNegative()) {
          negateResult = addResult.negate();
        }
        return negateResult;
      } else {
        tmp3 = globalThis;
        _Error = Error;
        str = " and ";
        text = `${self.toString()} and `;
        prototype = Error.prototype;
        tmp5 = new.target;
        str2 = " are not co-prime";
        tmp6 = new.target;
        error = new Error(`${self.toString()} and ` + arg0.toString() + " are not co-prime");
        tmp8 = error;
        throw error;
      }
    }
    next() {
      self = this;
      value = this.value;
      if (this.sign) {
        tmp6 = subtractSmall;
        num2 = 1;
        tmp5 = subtractSmall(value, 1, self.sign);
      } else {
        tmp = BigInteger;
        tmp2 = addSmall;
        num = 1;
        prototype = BigInteger.prototype;
        tmp3 = new.target;
        tmp4 = new.target;
        tmp5 = new BigInteger(addSmall(value, 1), self.sign);
      }
      return tmp5;
    }
    prev() {
      value = this.value;
      if (this.sign) {
        tmp4 = BigInteger;
        tmp5 = addSmall;
        num2 = 1;
        prototype = BigInteger.prototype;
        tmp6 = new.target;
        flag = true;
        tmp7 = new.target;
        tmp3 = new BigInteger(addSmall(value, 1), true);
      } else {
        tmp2 = subtractSmall;
        num = 1;
        tmp3 = subtractSmall(value, 1, tmp.sign);
      }
      return tmp3;
    }
    shiftLeft(arg0) {
      self = this;
      obj = parseValue(arg0);
      toJSNumberResult = obj.toJSNumber();
      if (shift_isSmall(toJSNumberResult)) {
        num = 0;
        if (toJSNumberResult < 0) {
          return self.shiftRight(-toJSNumberResult);
        } else if (self.isZero()) {
          return self;
        } else {
          tmp7 = length;
          num2 = 1;
          diff = toJSNumberResult;
          multiplyResult = self;
          obj3 = self;
          tmp9 = toJSNumberResult;
          if (toJSNumberResult >= length) {
            do {
              tmp10 = closure_6;
              multiplyResult = multiplyResult.multiply(closure_6);
              tmp11 = closure_5;
              diff = diff - (closure_5 - 1);
              tmp12 = closure_5;
              obj3 = multiplyResult;
              tmp9 = diff;
            } while (diff >= closure_5);
          }
          tmp13 = Object;
          return obj3.multiply(Object[tmp9]);
        }
      } else {
        tmp2 = globalThis;
        _Error = Error;
        _String = String;
        str = " is too large for shifting.";
        prototype = Error.prototype;
        tmp3 = new.target;
        tmp4 = new.target;
        error = new Error(String(toJSNumberResult) + " is too large for shifting.");
        tmp6 = error;
        throw error;
      }
    }
    shiftRight(arg0) {
      self = this;
      obj = parseValue(arg0);
      toJSNumberResult = obj.toJSNumber();
      if (shift_isSmall(toJSNumberResult)) {
        num = 0;
        if (toJSNumberResult < 0) {
          return self.shiftLeft(-toJSNumberResult);
        } else {
          tmp21 = length;
          num2 = 1;
          diff = toJSNumberResult;
          obj4 = self;
          tmp15 = self;
          tmp16 = toJSNumberResult;
          if (toJSNumberResult >= length) {
            tmp7 = obj4;
            while (!obj4.isZero()) {
              if (!obj4.isNegative()) {
                tmp8 = divModAny;
                tmp9 = length;
                tmp10 = divModAny(obj4, length);
                [obj3, obj2] = tmp10;
                if (obj2.isNegative()) {
                  prevResult = obj3.prev();
                } else {
                  prevResult = obj3;
                }
                tmp12 = length;
                diff = diff - (length - 1);
                tmp14 = length;
                obj4 = prevResult;
                tmp15 = prevResult;
                tmp16 = diff;
              } else if (obj4.isUnit()) {
                break;
              }
              return obj4;
            }
          }
          tmp17 = divModAny;
          tmp18 = Object;
          tmp19 = divModAny(tmp15, Object[tmp16]);
          [obj6, obj5] = tmp19;
          if (obj5.isNegative()) {
            prevResult1 = obj6.prev();
          } else {
            prevResult1 = obj6;
          }
          return prevResult1;
        }
      } else {
        tmp2 = globalThis;
        _Error = Error;
        _String = String;
        str = " is too large for shifting.";
        prototype = Error.prototype;
        tmp3 = new.target;
        tmp4 = new.target;
        error = new Error(String(toJSNumberResult) + " is too large for shifting.");
        tmp6 = error;
        throw error;
      }
    }
    not() {
      negateResult = this.negate();
      return negateResult.prev();
    }
    and(arg0) {
      return bitwise(this, arg0, (arg0, arg1) => arg0 & arg1);
    }
    or(arg0) {
      return bitwise(this, arg0, (arg0, arg1) => arg0 | arg1);
    }
    xor(arg0) {
      return bitwise(this, arg0, (arg0, arg1) => arg0 ^ arg1);
    }
    bitLength() {
      self = this;
      self2 = this;
      if (this.compareTo(closure_0(0)) < 0) {
        negateResult = self.negate();
        tmp = closure_0;
        num = 1;
        self2 = negateResult.subtract(closure_0(1));
      }
      if (0 === self2.compareTo(closure_0(0))) {
        tmp6 = closure_0;
        addResult = closure_0(0);
      } else {
        tmp2 = closure_0;
        tmp3 = integerLogarithm;
        num2 = 2;
        obj2 = closure_0(integerLogarithm(self2, closure_0(2)).e);
        tmp4 = closure_0;
        num3 = 1;
        addResult = obj2.add(closure_0(1));
      }
      return addResult;
    }
    toArray(arg0) {
      return toBase(this, arg0);
    }
    toString(arg0, arg1) {
      num = arg0;
      self = this;
      if (arg0 === closure_0) {
        num = 10;
      }
      if (10 !== num) {
        tmp4 = toBaseString;
        tmp5 = arg1;
        return toBaseString(self, num, arg1);
      } else {
        value = self.value;
        tmp6 = globalThis;
        _String2 = String;
        diff = value.length - 1;
        StringResult = String(value[diff]);
        diff1 = diff - 1;
        str2 = "0000000";
        num2 = 0;
        sum = StringResult;
        tmp3 = StringResult;
        if (diff1 >= 0) {
          do {
            _String = String;
            StringResult1 = String(value[diff1]);
            slice = "0000000".slice;
            sum = sum + ("0000000".slice(StringResult1.length) + StringResult1);
            diff1 = diff1 - 1;
            tmp3 = sum;
          } while (diff1 >= 0);
        }
        str = "";
        if (self.sign) {
          str = "-";
        }
        return str + tmp3;
      }
    }
    valueOf() {
      return parseInt(this.toString(), 10);
    }
  }
  class SmallInteger {
    constructor(arg0) {
      this.value = arg0;
      this.sign = arg0 < 0;
      this.isSmall = true;
      return;
    }
    add(arg0) {
      self = this;
      iter = parseValue(arg0);
      value = this.value;
      if (value < 0 !== iter.sign) {
        return self.subtract(iter.negate());
      } else {
        value = iter.value;
        tmp4 = value;
        if (iter.isSmall) {
          tmp = isPrecise;
          if (isPrecise(value + value)) {
            tmp12 = SmallInteger;
            prototype2 = SmallInteger.prototype;
            tmp13 = new.target;
            tmp14 = new.target;
            tmp15 = new SmallInteger(value + value);
            tmp16 = tmp15;
            return tmp15;
          } else {
            tmp2 = smallToArray;
            tmp3 = globalThis;
            _Math = Math;
            tmp4 = smallToArray(Math.abs(value));
          }
        }
        tmp5 = BigInteger;
        tmp6 = addSmall;
        tmp7 = globalThis;
        _Math2 = Math;
        prototype = BigInteger.prototype;
        tmp8 = new.target;
        tmp9 = new.target;
        tmp10 = new BigInteger(addSmall(tmp4, Math.abs(value)), value < 0);
        tmp11 = tmp10;
        return tmp10;
      }
    }
    subtract(arg0) {
      self = this;
      iter = parseValue(arg0);
      value = this.value;
      if (value < 0 !== iter.sign) {
        return self.add(iter.negate());
      } else {
        value = iter.value;
        if (iter.isSmall) {
          tmp4 = SmallInteger;
          prototype = SmallInteger.prototype;
          tmp5 = new.target;
          tmp6 = new.target;
          tmp3 = new SmallInteger(value - value);
        } else {
          tmp = subtractSmall;
          tmp2 = globalThis;
          _Math = Math;
          tmp3 = subtractSmall(value, Math.abs(value), value >= 0);
        }
        return tmp3;
      }
    }
    negate() {
      tmp = new SmallInteger(-this.value);
      tmp.sign = !this.sign;
      return tmp;
    }
    abs() {
      tmp = new SmallInteger(Math.abs(this.value));
      return tmp;
    }
    _multiplyBySmall(arg0) {
      self = this;
      if (isPrecise(arg0.value * this.value)) {
        tmp6 = SmallInteger;
        prototype = SmallInteger.prototype;
        tmp7 = new.target;
        tmp8 = new.target;
        tmp5 = new SmallInteger(arg0.value * self.value);
      } else {
        tmp = multiplySmallAndArray;
        tmp2 = globalThis;
        _Math = Math;
        tmp4 = smallToArray;
        _Math2 = Math;
        absolute = Math.abs(arg0.value);
        tmp5 = multiplySmallAndArray(absolute, smallToArray(Math.abs(self.value)), self.sign !== arg0.sign);
      }
      return tmp5;
    }
    multiply(arg0) {
      obj = parseValue(arg0);
      return obj._multiplyBySmall(this);
    }
    square() {
      result = this.value * this.value;
      if (isPrecise(result)) {
        tmp9 = SmallInteger;
        prototype2 = SmallInteger.prototype;
        tmp10 = new.target;
        tmp11 = new.target;
        tmp12 = result;
        tmp8 = new SmallInteger(result);
      } else {
        tmp2 = BigInteger;
        tmp3 = square;
        tmp4 = smallToArray;
        tmp5 = globalThis;
        _Math = Math;
        prototype = BigInteger.prototype;
        tmp6 = new.target;
        flag = false;
        tmp7 = new.target;
        tmp8 = new BigInteger(square(smallToArray(Math.abs(this.value))), false);
      }
      return tmp8;
    }
    compareAbs(arg0) {
      tmp = parseValue(arg0);
      absolute = Math.abs(this.value);
      num = -1;
      num2 = -1;
      if (tmp.isSmall) {
        _Math = Math;
        absolute1 = Math.abs(tmp3);
        num3 = 0;
        if (absolute !== absolute1) {
          if (absolute > absolute1) {
            num = 1;
          }
          num3 = num;
        }
        num2 = num3;
      }
      return num2;
    }
    compare(arg0) {
      if (arg0 === Infinity) {
        num6 = -1;
        return -1;
      } else {
        num7 = -Infinity;
        if (arg0 === -Infinity) {
          num5 = 1;
          return 1;
        } else {
          tmp = parseValue;
          iter = parseValue(arg0);
          self = this;
          value = this.value;
          value = iter.value;
          num8 = 0;
          if (iter.isSmall) {
            num3 = 0;
            if (value != value) {
              num4 = -1;
              if (value > value) {
                num4 = 1;
              }
              num3 = num4;
            }
            num = num3;
          } else if (value < 0 !== iter.sign) {
            num2 = 1;
            if (value < 0) {
              num2 = -1;
            }
            num = num2;
          } else {
            num = -1;
            if (value < 0) {
              num = 1;
            }
          }
          return num;
        }
      }
    }
    isEven() {
      return !(1 & this.value);
    }
    isOdd() {
      return !(1 & ~this.value);
    }
    isPositive() {
      return this.value > 0;
    }
    isNegative() {
      return this.value < 0;
    }
    isUnit() {
      return 1 === Math.abs(this.value);
    }
    isZero() {
      return 0 === this.value;
    }
    next() {
      value = this.value;
      if (value + 1 < 9007199254740992) {
        tmp6 = SmallInteger;
        prototype2 = SmallInteger.prototype;
        tmp7 = new.target;
        tmp8 = new.target;
        tmp5 = new SmallInteger(value + 1);
      } else {
        tmp = BigInteger;
        tmp2 = closure_1;
        prototype = BigInteger.prototype;
        tmp3 = new.target;
        flag = false;
        tmp4 = new.target;
        tmp5 = new BigInteger(closure_1, false);
      }
      return tmp5;
    }
    prev() {
      value = this.value;
      if (value - 1 > -9007199254740992) {
        tmp6 = SmallInteger;
        prototype2 = SmallInteger.prototype;
        tmp7 = new.target;
        tmp8 = new.target;
        tmp5 = new SmallInteger(value - 1);
      } else {
        tmp = BigInteger;
        tmp2 = closure_1;
        prototype = BigInteger.prototype;
        tmp3 = new.target;
        flag = true;
        tmp4 = new.target;
        tmp5 = new BigInteger(closure_1, true);
      }
      return tmp5;
    }
    toArray(arg0) {
      return toBase(this, arg0);
    }
    toString(arg0, arg1) {
      num = arg0;
      self = this;
      if (arg0 === closure_0) {
        num = 10;
      }
      if (10 != num) {
        tmp3 = toBaseString;
        tmp4 = arg1;
        StringResult = toBaseString(self, num, arg1);
      } else {
        tmp = globalThis;
        _String = String;
        StringResult = String(self.value);
      }
      return StringResult;
    }
    valueOf() {
      return this.value;
    }
  }
  class NativeBigInt {
    constructor(arg0) {
      this.value = arg0;
      return;
    }
    add(arg0) {
      tmp = new NativeBigInt(this.value + parseValue(arg0).value);
      return tmp;
    }
    subtract(arg0) {
      tmp = new NativeBigInt(this.value - parseValue(arg0).value);
      return tmp;
    }
    negate() {
      tmp = new NativeBigInt(-this.value);
      return tmp;
    }
    abs() {
      self = this;
      tmp = NativeBigInt;
      if (this.value >= 0) {
        value = self.value;
      } else {
        value = -self.value;
      }
      tmp = new tmp(value);
      return tmp;
    }
    multiply(arg0) {
      tmp = new NativeBigInt(this.value * parseValue(arg0).value);
      return tmp;
    }
    square(arg0) {
      tmp = new NativeBigInt(this.value * this.value);
      return tmp;
    }
    pow(arg0) {
      self = this;
      iter = parseValue(arg0);
      value = this.value;
      value = iter.value;
      BigIntResult = BigInt(0);
      BigIntResult1 = BigInt(1);
      if (value === BigIntResult) {
        tmp20 = Integer;
        return Integer[1];
      } else if (value === BigIntResult) {
        tmp19 = Integer;
        return Integer[0];
      } else if (value === BigIntResult1) {
        tmp18 = Integer;
        return Integer[1];
      } else {
        _BigInt = BigInt;
        num = -1;
        if (value === BigInt(-1)) {
          tmp17 = Integer;
          return iter.isEven() ? tmp17[1] : tmp17[-1];
        } else if (iter.isNegative()) {
          tmp11 = NativeBigInt;
          prototype = NativeBigInt.prototype;
          tmp12 = new.target;
          tmp13 = new.target;
          tmp14 = BigIntResult;
          tmp15 = new NativeBigInt(BigIntResult);
          tmp16 = tmp15;
          return tmp15;
        } else {
          tmp4 = Integer;
          obj = Integer[1];
          diff = value;
          timesResult = obj;
          if ((value & BigIntResult1) === BigIntResult1) {
            timesResult = obj.times(self);
            diff = value - 1;
          }
          obj2 = self;
          obj3 = timesResult;
          tmp7 = timesResult;
          if (diff !== BigIntResult) {
            do {
              result = diff / tmp3;
              squareResult = obj2.square();
              diff = result;
              timesResult1 = obj3;
              if ((result & BigIntResult1) === BigIntResult1) {
                timesResult1 = obj3.times(squareResult);
                diff = result - 1;
              }
              obj3 = timesResult1;
              obj2 = squareResult;
              tmp7 = timesResult1;
            } while (diff !== BigIntResult);
          }
          return tmp7;
        }
      }
    }
    compareAbs(arg0) {
      value = this.value;
      value = parseValue(arg0).value;
      tmp = value;
      if (value < 0) {
        tmp = -value;
      }
      tmp2 = value;
      if (value < 0) {
        tmp2 = -value;
      }
      num = 0;
      if (tmp !== tmp2) {
        num2 = -1;
        if (tmp > tmp2) {
          num2 = 1;
        }
        num = num2;
      }
      return num;
    }
    compare(arg0) {
      if (arg0 === Infinity) {
        num5 = -1;
        return -1;
      } else {
        num = -Infinity;
        if (arg0 === -Infinity) {
          num4 = 1;
          return 1;
        } else {
          self = this;
          value = this.value;
          tmp = parseValue;
          value = parseValue(arg0).value;
          num2 = 0;
          if (value !== value) {
            num3 = -1;
            if (value > value) {
              num3 = 1;
            }
            num2 = num3;
          }
          return num2;
        }
      }
    }
    isEven() {
      tmp = this.value & BigInt(1);
      return tmp === BigInt(0);
    }
    isOdd() {
      tmp = this.value & BigInt(1);
      return tmp === BigInt(1);
    }
    isUnit() {
      return this.abs().value === BigInt(1);
    }
    isZero() {
      return this.value === BigInt(0);
    }
    next() {
      tmp = new NativeBigInt(this.value + BigInt(1));
      return tmp;
    }
    prev() {
      tmp = new NativeBigInt(this.value - BigInt(1));
      return tmp;
    }
    toArray(arg0) {
      return toBase(this, arg0);
    }
  }
  function isPrecise(powResult) {
    let tmp = -9007199254740992 < powResult;
    if (tmp) {
      tmp = powResult < 9007199254740992;
    }
    return tmp;
  }
  function smallToArray(absolute) {
    if (absolute < 10000000) {
      const items = [absolute];
      let items2 = items;
    } else if (absolute < 100000000000000) {
      const items1 = [absolute % 10000000, ];
      const _Math3 = Math;
      items1[1] = Math.floor(absolute / 10000000);
      items2 = items1;
    } else {
      items2 = [absolute % 10000000, , ];
      const _Math = Math;
      items2[1] = Math.floor(absolute / 10000000) % 10000000;
      const _Math2 = Math;
      items2[2] = Math.floor(absolute / 100000000000000);
    }
    return items2;
  }
  function arrayToSmall(array) {
    trim(array);
    if (array.length < 4) {
      if (compareAbs(array, closure_1) < 0) {
        if (0 === length) {
          return 0;
        } else if (1 === length) {
          return array[0];
        } else if (2 === length) {
          return array[0] + array[1] * 10000000;
        } else {
          return array[0] + (array[1] + array[2] * 10000000) * 10000000;
        }
      }
    }
    return array;
  }
  function trim(arg0) {
    let tmp5;
    const diff = arg0.length - 1;
    let tmp2 = diff;
    let tmp3 = diff;
    if (0 === arg0[diff]) {
      do {
        let diff1 = tmp2 - 1;
        tmp2 = diff1;
        tmp3 = diff1;
        tmp5 = arg0[diff1];
      } while (0 === tmp5);
    }
    arg0.length = tmp3 + 1;
  }
  function createArray(length) {
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = 0;
    }
    return array;
  }
  function truncate(endImportTime) {
    if (endImportTime > 0) {
      const _Math2 = Math;
      let rounded = Math.floor(endImportTime);
    } else {
      const _Math = Math;
      rounded = Math.ceil(endImportTime);
    }
    return rounded;
  }
  function add(arg0, arg1) {
    let arr = new Array(length);
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;
    if (0 < arg1.length) {
      do {
        let sum = arg0[num] + arg1[num] + num2;
        let num5 = 0;
        if (sum >= 10000000) {
          num5 = 1;
        }
        arr[num] = sum - num5 * 10000000;
        num = num + 1;
        num2 = num5;
        num4 = num5;
        num3 = num;
      } while (num < length2);
    }
    let tmp2 = num4;
    let tmp3 = num4;
    if (num3 < arg0.length) {
      do {
        let sum1 = arg0[num3] + tmp2;
        let num6 = 0;
        if (sum1 === 10000000) {
          num6 = 1;
        }
        let tmp5 = +num3;
        num3 = tmp5 + 1;
        arr[tmp5] = sum1 - num6 * 10000000;
        tmp2 = num6;
        tmp3 = num6;
      } while (num3 < length);
    }
    if (tmp3 > 0) {
      arr = arr.push(tmp3);
    }
    return arr;
  }
  function addAny(substr1, substr) {
    if (substr1.length >= substr.length) {
      let tmp2 = add(substr1, substr);
    } else {
      tmp2 = add(substr, substr1);
    }
    return tmp2;
  }
  function addSmall(value, arg1) {
    let sum1 = arg1;
    const array = new Array(length);
    let num = 0;
    let rounded1 = arg1;
    let num2 = 0;
    if (0 < value.length) {
      do {
        let sum = value[num] - 10000000 + sum1;
        let _Math = Math;
        let rounded = Math.floor(sum / 10000000);
        array[num] = sum - rounded * 10000000;
        sum1 = rounded + 1;
        num = num + 1;
        rounded1 = sum1;
        num2 = num;
      } while (num < length);
    }
    if (rounded1 > 0) {
      do {
        let tmp6 = +num2;
        num2 = tmp6 + 1;
        array[tmp6] = rounded1 % 10000000;
        let _Math2 = Math;
        rounded1 = Math.floor(rounded1 / 10000000);
      } while (rounded1 > 0);
    }
    return array;
  }
  function subtract(arg0, arg1) {
    const array = new Array(length);
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    if (0 < arg1.length) {
      do {
        let diff = arg0[num] - num2 - arg1[num];
        let num4 = 0;
        let sum = diff;
        if (diff < 0) {
          sum = diff + 10000000;
          num4 = 1;
        }
        array[num] = sum;
        num = num + 1;
        num2 = num4;
        num3 = num4;
      } while (num < length2);
    }
    let sum1 = length2;
    let sum2 = length2;
    if (arg1.length < arg0.length) {
      const diff1 = arg0[sum1] - num3;
      while (diff1 < 0) {
        array[sum1] = diff1 + 10000000;
        sum1 = sum1 + 1;
        sum2 = sum1;
      }
      sum2 = tmp7 + 1;
      array[+sum1] = diff1;
    }
    if (sum2 < arg0.length) {
      do {
        array[sum2] = arg0[sum2];
        sum2 = sum2 + 1;
      } while (sum2 < length);
    }
    trim(array);
    return array;
  }
  function subtractSmall(value, arg1, sign) {
    const array = new Array(length);
    let tmp2 = -arg1;
    let num = 0;
    if (0 < value.length) {
      do {
        let sum = value[num] + tmp2;
        let _Math = Math;
        let result = sum % 10000000;
        let sum1 = result;
        let rounded = Math.floor(sum / 10000000);
        if (result < 0) {
          sum1 = result + 10000000;
        }
        array[num] = sum1;
        num = num + 1;
        tmp2 = rounded;
      } while (num < length);
    }
    const tmp7 = arrayToSmall(array);
    if ("number" === typeof tmp7) {
      let tmp14 = tmp7;
      if (sign) {
        tmp14 = -tmp7;
      }
      const prototype2 = SmallInteger.prototype;
      let tmp13 = new SmallInteger(tmp14);
    } else {
      const prototype = BigInteger.prototype;
      tmp13 = new BigInteger(tmp7, sign);
    }
    return tmp13;
  }
  function multiplyLong(value, arr2) {
    const tmp = createArray(value.length + arr2.length);
    for (let num = 0; num < length; num = num + 1) {
      for (let num2 = 0; num2 < length2; num2 = num2 + 1) {
        let sum = tmp2 * arr2[num2] + tmp[num + num2];
        let _Math = Math;
        let rounded = Math.floor(sum / 10000000);
        tmp[num + num2] = sum - rounded * 10000000;
        let sum1 = num + num2 + 1;
        tmp[sum1] = tmp[sum1] + rounded;
      }
    }
    trim(tmp);
    return tmp;
  }
  function multiplySmall(arr1, rounded) {
    const array = new Array(length);
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;
    if (0 < arr1.length) {
      do {
        let sum = arr1[num] * rounded + num2;
        let _Math = Math;
        rounded = Math.floor(sum / 10000000);
        array[num] = sum - rounded * 10000000;
        num = num + 1;
        num2 = rounded;
        num4 = rounded;
        num3 = num;
      } while (num < length);
    }
    if (num4 > 0) {
      do {
        let tmp4 = +num3;
        num3 = tmp4 + 1;
        array[tmp4] = num4 % 10000000;
        let _Math2 = Math;
        num4 = Math.floor(num4 / 10000000);
      } while (num4 > 0);
    }
    return array;
  }
  function shiftLeft(arg0, rounded) {
    let tmp4;
    const items = [];
    let diff = tmp - 1;
    if (+rounded > 0) {
      do {
        let arr = items.push(0);
        tmp4 = +diff;
        diff = tmp4 - 1;
      } while (tmp4 > 0);
    }
    return items.concat(arg0);
  }
  function multiplyKaratsuba(substr, arr2) {
    const bound = Math.max(substr.length, arr2.length);
    if (bound <= 30) {
      return multiplyLong(substr, arr2);
    } else {
      const _Math = Math;
      const rounded = Math.ceil(bound / 2);
      substr = substr.slice(rounded);
      const substr1 = substr.slice(0, rounded);
      const substr2 = arr2.slice(rounded);
      const substr3 = arr2.slice(0, rounded);
      const tmp9 = multiplyKaratsuba(substr1, substr3);
      const tmp10 = multiplyKaratsuba(substr, substr2);
      const tmp12 = addAny(substr1, substr);
      const tmp16 = addAny(addAny(tmp9, shiftLeft(subtract(subtract(multiplyKaratsuba(addAny(substr1, substr), addAny(substr3, substr2)), tmp9), tmp10), rounded)), shiftLeft(tmp10, 2 * rounded));
      trim(tmp16);
      return tmp16;
    }
  }
  function multiplySmallAndArray(absolute, value, arg2) {
    let tmp = BigInteger;
    if (absolute < 10000000) {
      let tmp4 = multiplySmall(value, absolute);
    } else {
      tmp4 = multiplyLong(value, smallToArray(absolute));
    }
    tmp = new tmp(tmp4, arg2);
    return tmp;
  }
  function square(value) {
    const tmp = createArray(value.length + value.length);
    for (let num = 0; num < length; num = num + 1) {
      let tmp2 = value[num];
      let diff = 0 - tmp2 * tmp2;
      let tmp4 = diff;
      let sum1 = num;
      if (num < length) {
        do {
          let sum = tmp2 * value[sum1] * 2 + tmp[num + sum1] + diff;
          let _Math = Math;
          let rounded = Math.floor(sum / 10000000);
          tmp[num + sum1] = sum - rounded * 10000000;
          sum1 = sum1 + 1;
          diff = rounded;
          tmp4 = rounded;
        } while (sum1 < length);
      }
      tmp[num + length] = tmp4;
    }
    trim(tmp);
    return tmp;
  }
  function divModSmall(arr5, error) {
    const tmp = createArray(arr5.length);
    let diff = length - 1;
    let num = 0;
    let num2 = 0;
    if (diff >= 0) {
      do {
        let sum = num * 10000000 + arr5[diff];
        let tmp4 = closure_18;
        let tmp5 = closure_18(sum / error);
        num = sum - tmp5 * error;
        tmp[diff] = tmp5 | 0;
        diff = diff - 1;
        num2 = num;
      } while (diff >= 0);
    }
    const items = [tmp, num2 | 0];
    return items;
  }
  function divModAny(value, closure_6) {
    const iter = parseValue(closure_6);
    if (closure_3) {
      let error = NativeBigInt;
      const prototype12 = NativeBigInt.prototype;
      error = new.target;
      error = new.target;
      error = new NativeBigInt(value.value / iter.value);
      const items = [error, ];
      const prototype13 = NativeBigInt.prototype;
      error = new.target;
      error = new.target;
      error = new NativeBigInt(value.value % iter.value);
      items[1] = error;
      return items;
    } else {
      value = value.value;
      value = iter.value;
      if (0 === value) {
        error = globalThis;
        const _Error = Error;
        error = new.target;
        error = new.target;
        error = new Error("Cannot divide by zero");
        throw error;
      } else {
        const isSmall = iter.isSmall;
        if (value.isSmall) {
          if (isSmall) {
            error = SmallInteger;
            error = truncate;
            const prototype9 = SmallInteger.prototype;
            error = new.target;
            error = new.target;
            error = new SmallInteger(truncate(value / value));
            const items1 = [error, ];
            const prototype10 = SmallInteger.prototype;
            error = new.target;
            error = new.target;
            error = new SmallInteger(value % value);
            items1[1] = error;
            let items2 = items1;
          } else {
            error = Integer;
            items2 = [Integer[0], value];
          }
          return items2;
        } else {
          let arr1 = value;
          if (isSmall) {
            if (1 === value) {
              const items3 = [value, ];
              error = Integer;
              items3[1] = Integer[0];
              return items3;
            } else if (-1 == value) {
              const items4 = [value.negate(), ];
              error = Integer;
              items4[1] = Integer[0];
              return items4;
            } else {
              error = globalThis;
              const _Math5 = Math;
              error = Math.abs(value);
              if (error < 10000000) {
                const tmp76 = divModSmall(value, error);
                const tmp77 = arrayToSmall(tmp76[0]);
                let tmp79 = tmp78;
                if (value.sign) {
                  tmp79 = -tmp78;
                }
                if ("number" === typeof tmp77) {
                  let tmp92 = tmp77;
                  if (value.sign !== iter.sign) {
                    tmp92 = -tmp77;
                  }
                  const prototype7 = SmallInteger.prototype;
                  const tmp97 = new SmallInteger(tmp92);
                  const items5 = [tmp97, ];
                  const prototype8 = SmallInteger.prototype;
                  error = new.target;
                  error = tmp79;
                  error = new SmallInteger(tmp79);
                  items5[1] = error;
                  let items6 = items5;
                } else {
                  const prototype5 = BigInteger.prototype;
                  const tmp84 = new BigInteger(tmp77, value.sign !== iter.sign);
                  items6 = [tmp84, ];
                  const prototype6 = SmallInteger.prototype;
                  const tmp90 = new SmallInteger(tmp79);
                  items6[1] = tmp90;
                }
                return items6;
              } else {
                error = smallToArray;
                arr1 = smallToArray(error);
              }
            }
          }
          error = compareAbs;
          const tmp2 = compareAbs(value, arr1);
          let num3 = -1;
          if (-1 === tmp2) {
            const items7 = [Integer[0], value];
            return items7;
          } else if (0 === tmp2) {
            if (value.sign === iter.sign) {
              num3 = 1;
            }
            const items8 = [Integer[num3], Integer[0]];
            return items8;
          } else {
            if (value.length + arr1.length <= 200) {
              const tmp29 = createArray(arr1.length);
              const _Math2 = Math;
              const rounded = Math.ceil(10000000 / (2 * arr1[length3 - 1]));
              const arr5 = multiplySmall(value, rounded);
              const arr6 = multiplySmall(arr1, rounded);
              if (arr5.length <= value.length) {
                arr5.push(0);
              }
              arr6.push(0);
              let diff = length2 - length3;
              if (diff >= 0) {
                do {
                  let num8 = 9999999;
                  if (arr5[diff + length3] !== tmp35) {
                    let _Math3 = Math;
                    num8 = Math.floor((arr5[diff + length3] * 10000000 + arr5[diff + length3 - 1]) / tmp35);
                  }
                  let length4 = arr6.length;
                  let num9 = 0;
                  let num10 = 0;
                  let num11 = 0;
                  let num12 = 0;
                  if (0 < length4) {
                    do {
                      let sum = num9 + num8 * arr6[num11];
                      let _Math4 = Math;
                      let rounded1 = Math.floor(sum / 10000000);
                      let sum1 = num10 + (arr5[diff + num11] - (sum - rounded1 * 10000000));
                      if (sum1 < 0) {
                        arr5[diff + num11] = sum1 + 10000000;
                        let num13 = num3;
                      } else {
                        arr5[diff + num11] = sum1;
                        num13 = 0;
                      }
                      num11 = num11 + 1;
                      num10 = num13;
                      num9 = rounded1;
                      num12 = num13;
                    } while (num11 < length4);
                  }
                  let tmp40 = num8;
                  let tmp41 = num8;
                  if (0 !== num12) {
                    do {
                      let diff1 = tmp40 - 1;
                      let num14 = 0;
                      let num15 = 0;
                      let num16 = 0;
                      if (0 < length4) {
                        do {
                          let sum2 = num14 + (arr5[diff + num15] - 10000000 + arr6[num15]);
                          if (sum2 < 0) {
                            arr5[diff + num15] = sum2 + 10000000;
                            let num17 = 0;
                          } else {
                            arr5[diff + num15] = sum2;
                            num17 = 1;
                          }
                          num15 = num15 + 1;
                          num14 = num17;
                          num16 = num17;
                        } while (num15 < length4);
                      }
                      num12 = num12 + num16;
                      tmp40 = diff1;
                      tmp41 = diff1;
                    } while (0 !== num12);
                  }
                  tmp29[diff] = tmp41;
                  diff = diff - 1;
                } while (diff >= 0);
              }
              const items9 = [arrayToSmall(tmp29), arrayToSmall(divModSmall(arr5, rounded)[0])];
              let items12 = items9;
            } else {
              let length = value.length;
              const items10 = [];
              let items11 = [];
              error = globalThis;
              let tmp25 = items11;
              while (length) {
                length = length - 1;
                arr1 = items11.unshift(value[length]);
                let tmp5 = trim;
                let tmp6 = trim(items11);
                let tmp7 = compareAbs;
                let tmp8 = items11;
                if (compareAbs(items11, arr1) < 0) {
                  let arr2 = items10.push(0);
                  let tmp15 = tmp21;
                  let result = tmp22;
                  let sum3 = tmp23;
                  let tmp13 = tmp24;
                  let tmp18 = items11;
                } else {
                  let length6 = items11.length;
                  error = items11[length6 - 1] * 10000000 + items11[length6 - 2];
                  sum3 = arr1[length5 - 1] * 10000000 + arr1[length5 - 2];
                  result = error;
                  if (length6 > length5) {
                    result = (error + 1) * 10000000;
                  }
                  let _Math = Math;
                  let rounded2 = Math.ceil(result / sum3);
                  let tmp11 = compareAbs;
                  let tmp12 = multiplySmall;
                  tmp13 = multiplySmall(arr1, rounded2);
                  let tmp14 = rounded2;
                  tmp15 = rounded2;
                  while (compareAbs(tmp13, items11) > 0) {
                    rounded2 = rounded2 - 1;
                    tmp15 = rounded2;
                    if (!rounded2) {
                      break;
                    }
                  }
                  let arr3 = items10.push(tmp15);
                  let tmp17 = subtract;
                  tmp18 = subtract(items11, tmp13);
                }
                let tmp21 = tmp15;
                let tmp22 = result;
                let tmp23 = sum3;
                let tmp24 = tmp13;
                items11 = tmp18;
                tmp25 = tmp18;
              }
              const reversed = items10.reverse();
              items12 = [arrayToSmall(items10), arrayToSmall(tmp25)];
            }
            const first = items12[0];
            const sign = value.sign;
            if ("number" === typeof first) {
              let tmp55 = first;
              if (tmp47) {
                tmp55 = -first;
              }
              const prototype2 = SmallInteger.prototype;
              let tmp54 = new SmallInteger(tmp55);
            } else {
              const prototype = BigInteger.prototype;
              tmp54 = new BigInteger(first, tmp47);
            }
            if ("number" === typeof items12[1]) {
              let tmp66 = tmp48;
              if (sign) {
                tmp66 = -tmp48;
              }
              const prototype4 = SmallInteger.prototype;
              let tmp65 = new SmallInteger(tmp66);
            } else {
              const prototype3 = BigInteger.prototype;
              tmp65 = new BigInteger(tmp48, sign);
            }
            const items13 = [tmp54, tmp65];
            return items13;
          }
        }
      }
    }
  }
  function compareAbs(value, arr1) {
    if (value.length !== arr1.length) {
      let num4 = -1;
      if (value.length > arr1.length) {
        num4 = 1;
      }
      return num4;
    } else {
      let diff = value.length - 1;
      if (diff >= 0) {
        while (value[diff] === arr1[diff]) {
          diff = diff - 1;
        }
        let num3 = -1;
        if (value[diff] > arr1[diff]) {
          num3 = 1;
        }
        return num3;
      }
      return 0;
    }
  }
  function isBasicPrime(abs) {
    const absResult = abs.abs();
    let tmp = !absResult.isUnit();
    if (tmp) {
      let equalsResult = absResult.equals(2);
      if (!equalsResult) {
        equalsResult = absResult.equals(3);
      }
      if (!equalsResult) {
        equalsResult = absResult.equals(5);
      }
      let tmp4 = !tmp3;
      if (!equalsResult) {
        let isEvenResult = absResult.isEven();
        if (!isEvenResult) {
          isEvenResult = absResult.isDivisibleBy(3);
        }
        if (!isEvenResult) {
          isEvenResult = absResult.isDivisibleBy(5);
        }
        let tmp6 = !isEvenResult;
        if (tmp6) {
          const tmp7 = !absResult.lesser(49);
          tmp6 = !tmp7;
          const tmp8 = !tmp7;
        }
        tmp4 = tmp6;
      }
      tmp = tmp4;
    }
    return tmp;
  }
  function millerRabinTest(absResult, items) {
    let isEvenResult;
    const prevResult = absResult.prev();
    let obj2 = prevResult;
    let num = 0;
    let tmp = prevResult;
    let num2 = 0;
    if (prevResult.isEven()) {
      do {
        let divideResult = obj2.divide(2);
        num = num + 1;
        obj2 = divideResult;
        tmp = divideResult;
        num2 = num;
        isEvenResult = divideResult.isEven();
      } while (isEvenResult);
    }
    let num3 = 0;
    if (0 < items.length) {
      while (true) {
        let tmp4 = tmp3;
        if (!absResult.lesser(items[num3])) {
          let tmp5 = lib;
          let obj4 = lib(items[num3]);
          let modPowResult = obj4.modPow(tmp, absResult);
          tmp4 = tmp3;
          let tmp6 = modPowResult;
          if (!modPowResult.isUnit()) {
            tmp4 = tmp3;
            let tmp7 = modPowResult;
            if (!modPowResult.equals(prevResult)) {
              let diff = num2 - 1;
              if (0 === diff) {
                break;
              } else {
                let squareResult = modPowResult.square();
                let modResult = squareResult.mod(absResult);
                while (!modResult.isUnit()) {
                  tmp4 = diff;
                  let tmp9 = modResult;
                  if (!modResult.equals(prevResult)) {
                    diff = diff - 1;
                    modPowResult = modResult;
                    if (0 != diff) {
                      continue;
                    } else {
                      break label0;
                    }
                    let flag = false;
                    return false;
                  }
                  continue;
                }
                let flag2 = false;
                return false;
              }
            }
          }
        }
        num3 = num3 + 1;
        let tmp3 = tmp4;
      }
    }
    return true;
  }
  function shift_isSmall(toJSNumberResult) {
    return Math.abs(toJSNumberResult) <= 10000000;
  }
  function bitwise(isNegative, arg1, arg2) {
    const obj = parseValue(arg1);
    const isNegativeResult = isNegative.isNegative();
    const isNegativeResult1 = obj.isNegative();
    let notResult = isNegative;
    if (isNegativeResult) {
      notResult = isNegative.not();
    }
    let notResult1 = obj;
    if (isNegativeResult1) {
      notResult1 = obj.not();
    }
    const items = [];
    let tmp3 = notResult;
    let tmp4 = notResult1;
    if (!notResult.isZero()) {
      while (true) {
        let tmp5 = divModAny;
        let tmp6 = closure_6;
        let tmp7 = divModAny(tmp3, closure_6);
        let obj4 = tmp7[1];
        let toJSNumberResult = obj4.toJSNumber();
        let diff = toJSNumberResult;
        if (isNegativeResult) {
          let tmp10 = closure_6;
          diff = closure_6 - 1 - toJSNumberResult;
        }
        let tmp11 = divModAny;
        let tmp12 = closure_6;
        let tmp13 = divModAny(tmp4, closure_6);
        let obj5 = tmp13[1];
        let toJSNumberResult1 = obj5.toJSNumber();
        let diff1 = toJSNumberResult1;
        if (isNegativeResult1) {
          let tmp16 = closure_6;
          diff1 = closure_6 - 1 - toJSNumberResult1;
        }
        let first = tmp7[0];
        let first1 = tmp13[0];
        let arr = items.push(arg2(diff, diff1));
        tmp3 = first;
        tmp4 = first1;
        if (!first.isZero()) {
          continue;
        } else {
          tmp3 = first;
          tmp4 = first1;
          if (first1.isZero()) {
            break;
          }
        }
        continue;
      }
    } else {
      tmp3 = notResult;
      tmp4 = notResult1;
    }
    let num = 0;
    if (isNegativeResult) {
      num = 1;
    }
    let num2 = 0;
    if (isNegativeResult1) {
      num2 = 1;
    }
    if (0 !== arg2(num, num2)) {
      let tmp19 = lib(-1);
    } else {
      tmp19 = lib(0);
    }
    let diff2 = items.length - 1;
    let addResult = tmp19;
    let tmp22 = tmp19;
    if (diff2 >= 0) {
      do {
        let tmp23 = closure_6;
        let multiplyResult = addResult.multiply(closure_6);
        let tmp24 = closure_0;
        addResult = multiplyResult.add(closure_0(items[diff2]));
        diff2 = diff2 - 1;
        tmp22 = addResult;
      } while (diff2 >= 0);
    }
    return tmp22;
  }
  function roughLOB(value) {
    value = value.value;
    if ("number" === typeof value) {
      let tmp2 = value | closure_7;
    } else if ("bigint" === tmp) {
      const _BigInt = BigInt;
      tmp2 = value | BigInt(closure_7);
    } else {
      tmp2 = value[0] + value[1] * 10000000 | 1073758208;
    }
    return tmp2 & -tmp2;
  }
  function integerLogarithm(self2, compareTo) {
    let e;
    let p;
    if (compareTo.compareTo(self2) <= 0) {
      ({ p, e } = integerLogarithm(self2, compareTo.square(compareTo)));
      const multiplyResult = p.multiply(compareTo);
      if (multiplyResult.compareTo(self2) <= 0) {
        let obj = { p: multiplyResult, e: 2 * e + 1 };
      } else {
        obj = { p, e: 2 * e };
      }
      return obj;
    } else {
      obj = { p: lib(1), e: 0 };
      return obj;
    }
  }
  function max(arg0, arg1) {
    const obj = parseValue(arg0);
    let tmp = parseValue(arg1);
    if (obj.greater(tmp)) {
      tmp = obj;
    }
    return tmp;
  }
  function min(arg0, arg1) {
    const obj = parseValue(arg0);
    let tmp = parseValue(arg1);
    if (obj.lesser(tmp)) {
      tmp = obj;
    }
    return tmp;
  }
  function gcd(absResult, absResult1) {
    let isEvenResult;
    let obj18;
    let subtractResult;
    absResult = parseValue(absResult).abs();
    const obj = parseValue(absResult);
    absResult1 = parseValue(absResult1).abs();
    if (absResult.equals(absResult1)) {
      return absResult;
    } else if (absResult.isZero()) {
      return absResult1;
    } else if (absResult1.isZero()) {
      return absResult;
    } else {
      let obj5 = absResult;
      let tmp3 = absResult1;
      let obj6 = tmp2;
      if (absResult.isEven()) {
        let obj7 = absResult;
        let obj8 = absResult1;
        let obj9 = tmp2;
        obj5 = absResult;
        tmp3 = absResult1;
        obj6 = tmp2;
        if (absResult1.isEven()) {
          const tmp7 = min(roughLOB(obj7), roughLOB(obj8));
          const divideResult = obj7.divide(tmp7);
          const divideResult1 = obj8.divide(tmp7);
          const multiplyResult = obj9.multiply(tmp7);
          obj5 = divideResult;
          tmp3 = divideResult1;
          obj6 = multiplyResult;
          while (divideResult.isEven()) {
            obj7 = divideResult;
            obj8 = divideResult1;
            obj9 = multiplyResult;
            obj5 = divideResult;
            tmp3 = divideResult1;
            obj6 = multiplyResult;
            if (!divideResult1.isEven()) {
              break;
            }
          }
          const tmp6 = roughLOB(obj7);
        }
      }
      let obj12 = obj5;
      let obj13 = obj5;
      let obj14 = tmp3;
      if (obj5.isEven()) {
        do {
          let tmp9 = closure_37;
          let divideResult2 = obj12.divide(closure_37(obj12));
          obj12 = divideResult2;
          obj13 = divideResult2;
          obj14 = tmp3;
          isEvenResult = divideResult2.isEven();
        } while (isEvenResult);
      }
      do {
        let obj16 = obj14;
        let tmp11 = obj14;
        if (obj14.isEven()) {
          do {
            let tmp12 = closure_37;
            let divideResult3 = obj16.divide(closure_37(obj16));
            obj16 = divideResult3;
            tmp11 = divideResult3;
            let isEvenResult1 = divideResult3.isEven();
          } while (isEvenResult1);
        }
        obj18 = obj13;
        let obj19 = tmp11;
        if (obj13.greater(tmp11)) {
          obj18 = tmp11;
          obj19 = obj13;
        }
        subtractResult = obj19.subtract(obj18);
        obj13 = obj18;
        obj14 = subtractResult;
      } while (!subtractResult.isZero());
      let multiplyResult1 = obj18;
      if (!obj6.isUnit()) {
        multiplyResult1 = obj18.multiply(obj6);
      }
      return multiplyResult1;
    }
    const obj3 = parseValue(absResult1);
  }
  function parseBaseFromArray(items, constructor, arg2) {
    const first = Integer[0];
    let timesResult = Integer[1];
    let diff = items.length - 1;
    let addResult = first;
    let obj3 = first;
    if (diff >= 0) {
      do {
        let obj4 = items[diff];
        addResult = addResult.add(obj4.times(timesResult));
        timesResult = timesResult.times(constructor);
        diff = diff - 1;
        obj3 = addResult;
      } while (diff >= 0);
    }
    let negateResult = obj3;
    if (arg2) {
      negateResult = obj3.negate();
    }
    return negateResult;
  }
  function toBase(addResult, arg1) {
    let quotient;
    let remainder;
    let obj = lib(arg1);
    if (obj.isZero()) {
      if (addResult.isZero()) {
        obj = { value: [0.229], isNegative: false };
        return obj;
      } else {
        const _Error = Error;
        const error = new Error("Cannot convert nonzero numbers to base 0.");
        throw error;
      }
    } else if (obj.equals(-1)) {
      if (addResult.isZero()) {
        obj = { value: [0.229], isNegative: false };
        return obj;
      } else if (addResult.isNegative()) {
        const obj1 = {};
        const concat2 = [].concat;
        const _Array6 = Array;
        const _Array7 = Array;
        const _Array8 = Array;
        obj1.value = concat2.apply([], Array.apply(null, Array(-addResult.toJSNumber())).map(Array.prototype.valueOf, [true, true]));
        obj1.isNegative = false;
        return obj1;
      } else {
        const _Array3 = Array;
        const _Array4 = Array;
        const _Array5 = Array;
        const mapped = Array.apply(null, Array(addResult.toJSNumber() - 1)).map(Array.prototype.valueOf, [77601039, 1612144654]);
        mapped.unshift([false]);
        let obj2 = {};
        const concat = [].concat;
        obj2.value = concat.apply([], mapped);
        obj2.isNegative = false;
        return obj2;
      }
    } else {
      let absResult = addResult;
      let flag2 = false;
      if (tmp) {
        absResult = addResult.abs();
        flag2 = true;
      }
      if (obj.isUnit()) {
        let obj3 = {};
        if (absResult.isZero()) {
          obj3.value = [0.229];
          obj3.isNegative = false;
          let tmp8 = obj3;
        } else {
          const _Array = Array;
          const _Array2 = Array;
          const _Number = Number;
          obj3.value = Array.apply(null, Array(absResult.toJSNumber())).map(Number.prototype.valueOf, 1);
          obj3.isNegative = flag2;
          tmp8 = obj3;
          const applyResult2 = Array.apply(null, Array(absResult.toJSNumber()));
        }
        return tmp8;
      } else {
        const items = [];
        obj2 = absResult;
        if (absResult.isNegative()) {
          while (true) {
            let divmodResult = obj2.divmod(obj);
            ({ quotient, remainder } = divmodResult);
            let nextResult = quotient;
            let absResult1 = remainder;
            if (remainder.isNegative()) {
              let minusResult = obj.minus(remainder);
              absResult1 = minusResult.abs();
              nextResult = quotient.next();
            }
            let arr = items.push(absResult1.toJSNumber());
            let tmp4 = nextResult;
            obj2 = nextResult;
            if (nextResult.isNegative()) {
              continue;
            } else {
              let num3 = 0;
              obj2 = nextResult;
              obj3 = nextResult;
              if (nextResult.compareAbs(obj) < 0) {
                break;
              }
            }
            continue;
          }
        } else {
          obj2 = absResult;
          obj3 = absResult;
        }
        items.push(obj3.toJSNumber());
        const obj4 = { value: items.reverse(), isNegative: flag2 };
        return obj4;
      }
      const tmp = addResult.isNegative() && obj.isPositive();
    }
  }
  function toBaseString(self, arg1, arg2) {
    const iter = toBase(self, arg1);
    let str = "";
    if (iter.isNegative) {
      str = "-";
    }
    const value = iter.value;
    const mapped = value.map((arg0) => {
      let arr = arg2;
      if (!arg2) {
        arr = closure_2;
      }
      if (arg0 < arr.length) {
        let text = arr[arg0];
      } else {
        text = `${"<" + arg0}>`;
      }
      return text;
    });
    return str + mapped.join("");
  }
  function parseStringValue(arr) {
    if (isPrecise(+arr)) {
      if (+arr === truncate(+arr)) {
        if (closure_3) {
          const _BigInt = BigInt;
          const prototype9 = NativeBigInt.prototype;
          let tmp61 = new NativeBigInt(BigInt(tmp49));
        } else {
          const prototype8 = SmallInteger.prototype;
          tmp61 = new SmallInteger(tmp49);
        }
        return tmp61;
      } else {
        const _Error5 = Error;
        const error = new Error("Invalid integer: " + arr);
        throw error;
      }
    } else {
      let str2 = arr;
      if ("-" === arr[0]) {
        str2 = arr.slice(1);
      }
      const parts = str2.split(/e/i);
      if (parts.length > 2) {
        const _Error4 = Error;
        const error1 = new Error("Invalid integer: " + parts.join("e"));
        throw error1;
      } else {
        if (2 === parts.length) {
          let substr = arr4;
          if ("+" === parts[1][0]) {
            substr = arr4.slice(1);
          }
          if (+substr === truncate(+substr)) {
            if (isPrecise(tmp3)) {
              const first = parts[0];
              const index = first.indexOf(".");
              let diff = tmp3;
              let sum = first;
              if (index >= 0) {
                diff = tmp3 - (first.length - index - 1);
                const substr1 = first.slice(0, index);
                sum = substr1 + first.slice(index + 1);
              }
              if (diff < 0) {
                const _Error2 = Error;
                const error2 = new Error("Cannot include negative exponent part for integers");
                throw error2;
              } else {
                const _Array = Array;
                const array = new Array(diff + 1);
                str2 = sum + array.join("0");
              }
            }
          }
          const _Error3 = Error;
          const error3 = new Error("Invalid integer: " + tmp3 + " is not a valid exponent.");
          throw error3;
        }
        if (obj.test(str2)) {
          if (closure_3) {
            let tmp27 = NativeBigInt;
            let text = str2;
            if (tmp) {
              text = `-${str2}`;
            }
            const prototype3 = tmp27.prototype;
            tmp27 = new tmp27(BigInt(text));
            return tmp27;
          } else {
            const items = [];
            let length = str2.length;
            let num5 = length - 7;
            if (length > 0) {
              do {
                arr = items.push(+str2.slice(num5, length));
                num5 = num5 - 7;
                let tmp17 = length;
                if (num5 < 0) {
                  num5 = 0;
                }
                length = length - 7;
              } while (length > 0);
            }
            trim(items);
            const prototype2 = BigInteger.prototype;
            const tmp25 = new BigInteger(items, tmp);
            return tmp25;
          }
        } else {
          const _Error = Error;
          const error4 = new Error("Invalid integer: " + str2);
          throw error4;
        }
        const obj = /^([0-9][0-9]*)$/;
      }
    }
  }
  function parseValue(result) {
    if ("number" === typeof result) {
      if (closure_3) {
        const _BigInt = BigInt;
        const prototype4 = NativeBigInt.prototype;
        let tmp12 = new NativeBigInt(BigInt(result));
      } else if (!isPrecise(result)) {
        tmp12 = parseStringValue(result.toString());
      }
      if (result !== truncate(result)) {
        const _Error = Error;
        const error = new Error(result + " is not an integer.");
        throw error;
      } else {
        const prototype2 = SmallInteger.prototype;
        tmp12 = new SmallInteger(result);
      }
    } else {
      if ("string" === tmp) {
        let tmp2 = parseStringValue(result);
      } else {
        tmp2 = result;
        if ("bigint" === tmp) {
          const prototype = NativeBigInt.prototype;
          tmp2 = new NativeBigInt(result);
        }
      }
      return tmp2;
    }
  }
  let closure_1 = smallToArray(9007199254740992);
  let closure_2 = "0123456789abcdefghijklmnopqrstuvwxyz";
  let closure_3 = "function" === typeof BigInt;
  BigInteger.prototype = Object.create(Integer.prototype);
  SmallInteger.prototype = Object.create(Integer.prototype);
  NativeBigInt.prototype = Object.create(Integer.prototype);
  BigInteger.prototype.plus = BigInteger.prototype.add;
  SmallInteger.prototype.plus = SmallInteger.prototype.add;
  NativeBigInt.prototype.plus = NativeBigInt.prototype.add;
  BigInteger.prototype.minus = BigInteger.prototype.subtract;
  SmallInteger.prototype.minus = SmallInteger.prototype.subtract;
  NativeBigInt.prototype.minus = NativeBigInt.prototype.subtract;
  BigInteger.prototype.times = BigInteger.prototype.multiply;
  SmallInteger.prototype.times = SmallInteger.prototype.multiply;
  NativeBigInt.prototype.times = NativeBigInt.prototype.multiply;
  const divmod = BigInteger.prototype.divmod;
  SmallInteger.prototype.divmod = divmod;
  NativeBigInt.prototype.divmod = divmod;
  const fn = function(arg0) {
    return new NativeBigInt(this.value / parseValue(arg0).value);
  };
  NativeBigInt.prototype.divide = fn;
  NativeBigInt.prototype.over = fn;
  const divide = BigInteger.prototype.divide;
  BigInteger.prototype.over = divide;
  SmallInteger.prototype.divide = divide;
  SmallInteger.prototype.over = divide;
  const fn2 = function(arg0) {
    return new NativeBigInt(this.value % parseValue(arg0).value);
  };
  NativeBigInt.prototype.remainder = fn2;
  NativeBigInt.prototype.mod = fn2;
  const mod = BigInteger.prototype.mod;
  BigInteger.prototype.remainder = mod;
  SmallInteger.prototype.mod = mod;
  SmallInteger.prototype.remainder = mod;
  SmallInteger.prototype.pow = BigInteger.prototype.pow;
  const modPow = BigInteger.prototype.modPow;
  SmallInteger.prototype.modPow = modPow;
  NativeBigInt.prototype.modPow = modPow;
  BigInteger.prototype.compareTo = BigInteger.prototype.compare;
  SmallInteger.prototype.compareTo = SmallInteger.prototype.compare;
  NativeBigInt.prototype.compareTo = NativeBigInt.prototype.compare;
  const equals = BigInteger.prototype.equals;
  BigInteger.prototype.eq = equals;
  SmallInteger.prototype.equals = equals;
  SmallInteger.prototype.eq = equals;
  NativeBigInt.prototype.equals = equals;
  NativeBigInt.prototype.eq = equals;
  const notEquals = BigInteger.prototype.notEquals;
  BigInteger.prototype.neq = notEquals;
  SmallInteger.prototype.notEquals = notEquals;
  SmallInteger.prototype.neq = notEquals;
  NativeBigInt.prototype.notEquals = notEquals;
  NativeBigInt.prototype.neq = notEquals;
  const greater = BigInteger.prototype.greater;
  BigInteger.prototype.gt = greater;
  SmallInteger.prototype.greater = greater;
  SmallInteger.prototype.gt = greater;
  NativeBigInt.prototype.greater = greater;
  NativeBigInt.prototype.gt = greater;
  const lesser = BigInteger.prototype.lesser;
  BigInteger.prototype.lt = lesser;
  SmallInteger.prototype.lesser = lesser;
  SmallInteger.prototype.lt = lesser;
  NativeBigInt.prototype.lesser = lesser;
  NativeBigInt.prototype.lt = lesser;
  const greaterOrEquals = BigInteger.prototype.greaterOrEquals;
  BigInteger.prototype.geq = greaterOrEquals;
  SmallInteger.prototype.greaterOrEquals = greaterOrEquals;
  SmallInteger.prototype.geq = greaterOrEquals;
  NativeBigInt.prototype.greaterOrEquals = greaterOrEquals;
  NativeBigInt.prototype.geq = greaterOrEquals;
  const lesserOrEquals = BigInteger.prototype.lesserOrEquals;
  BigInteger.prototype.leq = lesserOrEquals;
  SmallInteger.prototype.lesserOrEquals = lesserOrEquals;
  SmallInteger.prototype.leq = lesserOrEquals;
  NativeBigInt.prototype.lesserOrEquals = lesserOrEquals;
  NativeBigInt.prototype.leq = lesserOrEquals;
  NativeBigInt.prototype.isPositive = SmallInteger.prototype.isPositive;
  NativeBigInt.prototype.isNegative = SmallInteger.prototype.isNegative;
  const isDivisibleBy = BigInteger.prototype.isDivisibleBy;
  SmallInteger.prototype.isDivisibleBy = isDivisibleBy;
  NativeBigInt.prototype.isDivisibleBy = isDivisibleBy;
  const isPrime = BigInteger.prototype.isPrime;
  SmallInteger.prototype.isPrime = isPrime;
  NativeBigInt.prototype.isPrime = isPrime;
  const isProbablePrime = BigInteger.prototype.isProbablePrime;
  SmallInteger.prototype.isProbablePrime = isProbablePrime;
  NativeBigInt.prototype.isProbablePrime = isProbablePrime;
  const modInv = BigInteger.prototype.modInv;
  SmallInteger.prototype.modInv = modInv;
  NativeBigInt.prototype.modInv = modInv;
  const items = [false];
  if (2 * items[items.length - 1] <= 10000000) {
    class Integer {
      constructor(arg0, arg1, arg2, arg3) {
        if (undefined === arg0) {
          tmp8 = Integer;
          num2 = 0;
          first = Integer[0];
        } else if (undefined === arg1) {
          tmp = parseValue;
          first = parseValue(arg0);
        } else {
          num = 10;
          if (10 === +arg1) {
          }
          tmp3 = parseBase;
          tmp4 = arg3;
          tmp5 = arg0;
          tmp6 = arg1;
          tmp7 = arg2;
          first = parseBase(arg0, arg1, arg2, arg3);
        }
        return first;
      }
    }
  }
  const length = items.length;
  let closure_6 = items[length - 1];
  shiftLeft = BigInteger.prototype.shiftLeft;
  SmallInteger.prototype.shiftLeft = shiftLeft;
  NativeBigInt.prototype.shiftLeft = shiftLeft;
  const shiftRight = BigInteger.prototype.shiftRight;
  SmallInteger.prototype.shiftRight = shiftRight;
  NativeBigInt.prototype.shiftRight = shiftRight;
  const not = BigInteger.prototype.not;
  SmallInteger.prototype.not = not;
  NativeBigInt.prototype.not = not;
  const and = BigInteger.prototype.and;
  SmallInteger.prototype.and = and;
  NativeBigInt.prototype.and = and;
  const or = BigInteger.prototype.or;
  SmallInteger.prototype.or = or;
  NativeBigInt.prototype.or = or;
  const xor = BigInteger.prototype.xor;
  SmallInteger.prototype.xor = xor;
  NativeBigInt.prototype.xor = xor;
  let closure_7 = 1073741824;
  const bitLength = BigInteger.prototype.bitLength;
  SmallInteger.prototype.bitLength = bitLength;
  NativeBigInt.prototype.bitLength = bitLength;
  function parseBase(arg0, arg1, arg2, arg3) {
    let length2;
    let tmp10;
    let tmp2;
    let str = arg2;
    if (!arg2) {
      str = closure_2;
    }
    const str2 = String(arg0);
    let formatted = str2;
    let formatted1 = str;
    if (!arg3) {
      formatted = str2.toLowerCase();
      formatted1 = str.toLowerCase();
    }
    const absolute = Math.abs(arg1);
    const obj = {};
    let num = 0;
    if (0 < formatted1.length) {
      do {
        obj[formatted1[num]] = num;
        num = num + 1;
        length2 = formatted1.length;
      } while (num < length2);
    }
    let num2 = 0;
    if (0 < formatted.length) {
      while (true) {
        tmp2 = formatted[num2];
        if ("-" !== tmp2) {
          if (tmp2 in obj) {
            if (obj[tmp2] >= absolute) {
              if ("1" !== tmp2) {
                break;
              } else if (1 !== absolute) {
                break;
              }
            }
          }
        }
        num2 = num2 + 1;
      }
      const _Error = Error;
      const error = new Error(tmp2 + " is not a valid digit in base " + arg1 + ".");
      throw error;
    }
    const items = [];
    let num3 = 0;
    if ("-" === formatted[0]) {
      num3 = 1;
    }
    if (num3 < formatted.length) {
      while (true) {
        tmp10 = formatted[num3];
        if (tmp10 in obj) {
          let tmp20 = parseValue;
          let arr = items.push(parseValue(obj[tmp10]));
          let sum = num3;
          let tmp15 = tmp9;
        } else {
          let tmp11 = num3;
          if ("<" !== tmp10) {
            break;
          } else {
            sum = tmp11 + 1;
            while (">" !== formatted[sum]) {
              tmp11 = sum;
              if (sum >= formatted.length) {
                break;
              }
            }
            let tmp13 = parseValue;
            arr = items.push(parseValue(formatted.slice(num3 + 1, sum)));
            tmp15 = num3;
          }
        }
        num3 = sum + 1;
        let tmp9 = tmp15;
      }
      const _Error2 = Error;
      const error1 = new Error(tmp10 + " is not a valid character");
      throw error1;
    }
    return parseBaseFromArray(items, parseValue(arg1), "-" === formatted[0]);
  }
  NativeBigInt.prototype.toString = SmallInteger.prototype.toString;
  const fn3 = function() {
    return this.toString();
  };
  SmallInteger.prototype.toJSON = fn3;
  BigInteger.prototype.toJSON = fn3;
  NativeBigInt.prototype.toJSON = fn3;
  BigInteger.prototype.toJSNumber = BigInteger.prototype.valueOf;
  SmallInteger.prototype.toJSNumber = SmallInteger.prototype.valueOf;
  const fn4 = function() {
    return parseInt(this.toString(), 10);
  };
  NativeBigInt.prototype.toJSNumber = fn4;
  NativeBigInt.prototype.valueOf = fn4;
  let num = 0;
  while (true) {
    class Integer {
      constructor(arg0, arg1, arg2, arg3) {
        if (undefined === arg0) {
          tmp8 = Integer;
          num2 = 0;
          first = Integer[0];
        } else if (undefined === arg1) {
          tmp = parseValue;
          first = parseValue(arg0);
        } else {
          num = 10;
          if (10 === +arg1) {
          }
          tmp3 = parseBase;
          tmp4 = arg3;
          tmp5 = arg0;
          tmp6 = arg1;
          tmp7 = arg2;
          first = parseBase(arg0, arg1, arg2, arg3);
        }
        return first;
      }
    }
    let tmp = num;
    class BigInteger {
      constructor(arg0, arg1) {
        this.value = arg0;
        this.sign = arg1;
        this.isSmall = false;
        return;
      }
      add(arg0) {
        self = this;
        iter = parseValue(arg0);
        if (this.sign !== iter.sign) {
          return self.subtract(iter.negate());
        } else {
          value = self.value;
          value = iter.value;
          tmp = BigInteger;
          if (iter.isSmall) {
            tmp6 = addSmall;
            tmp7 = globalThis;
            _Math = Math;
            prototype2 = tmp.prototype;
            tmp8 = new.target;
            tmp9 = new.target;
            tmp = new tmp(addSmall(value, Math.abs(value)), self.sign);
          } else {
            tmp2 = addAny;
            prototype = tmp.prototype;
            tmp3 = new.target;
            tmp4 = new.target;
            tmp = new tmp(addAny(value, value), self.sign);
          }
          return tmp;
        }
      }
      subtract(arg0) {
        self = this;
        iter = parseValue(arg0);
        if (this.sign !== iter.sign) {
          return self.add(iter.negate());
        } else {
          value = self.value;
          value = iter.value;
          if (iter.isSmall) {
            tmp19 = subtractSmall;
            tmp20 = globalThis;
            _Math = Math;
            tmp13 = subtractSmall(value, Math.abs(value), self.sign);
          } else {
            sign = self.sign;
            tmp = compareAbs;
            num = 0;
            if (compareAbs(value, value) >= 0) {
              tmp5 = subtract;
              tmp3 = subtract(value, value);
              tmp4 = sign;
            } else {
              tmp2 = subtract;
              tmp3 = subtract(value, value);
              tmp4 = !sign;
            }
            tmp6 = arrayToSmall;
            tmp7 = arrayToSmall(tmp3);
            str = "number";
            if ("number" === typeof tmp7) {
              tmp14 = tmp7;
              if (tmp4) {
                tmp14 = -tmp7;
              }
              tmp15 = SmallInteger;
              prototype2 = SmallInteger.prototype;
              tmp16 = new.target;
              tmp17 = new.target;
              tmp18 = tmp14;
              tmp13 = new SmallInteger(tmp14);
            } else {
              tmp8 = BigInteger;
              prototype = BigInteger.prototype;
              tmp9 = new.target;
              tmp10 = new.target;
              tmp11 = tmp7;
              tmp12 = tmp4;
              tmp13 = new BigInteger(tmp7, tmp4);
            }
          }
          return tmp13;
        }
      }
      negate() {
        tmp = new BigInteger(this.value, !this.sign);
        return tmp;
      }
      abs() {
        tmp = new BigInteger(this.value, false);
        return tmp;
      }
      multiply(arg0) {
        self = this;
        iter = parseValue(arg0);
        value = this.value;
        value = iter.value;
        tmp = this.sign !== iter.sign;
        arr2 = value;
        if (iter.isSmall) {
          num = 0;
          if (0 === value) {
            tmp20 = Integer;
            return Integer[0];
          } else {
            num2 = 1;
            if (1 === value) {
              return self;
            } else {
              num3 = -1;
              if (-1 === value) {
                return self.negate();
              } else {
                tmp21 = globalThis;
                _Math = Math;
                absolute = Math.abs(value);
                num4 = 10000000;
                if (absolute < 10000000) {
                  tmp13 = BigInteger;
                  tmp14 = multiplySmall;
                  prototype3 = BigInteger.prototype;
                  tmp15 = new.target;
                  tmp16 = new.target;
                  tmp17 = tmp;
                  tmp18 = new BigInteger(multiplySmall(value, absolute), tmp);
                  tmp19 = tmp18;
                  return tmp18;
                } else {
                  tmp23 = smallToArray;
                  arr2 = smallToArray(absolute);
                }
              }
            }
          }
        }
        length = value.length;
        length2 = arr2.length;
        if (-0.012 * length - 0.012 * length2 + 0.000015 * length * length2 > 0) {
          tmp8 = BigInteger;
          tmp9 = multiplyKaratsuba;
          prototype2 = BigInteger.prototype;
          tmp10 = new.target;
          tmp11 = new.target;
          tmp12 = tmp;
          tmp7 = new BigInteger(multiplyKaratsuba(value, arr2), tmp);
        } else {
          tmp2 = BigInteger;
          tmp3 = multiplyLong;
          prototype = BigInteger.prototype;
          tmp4 = new.target;
          tmp5 = new.target;
          tmp6 = tmp;
          tmp7 = new BigInteger(multiplyLong(value, arr2), tmp);
        }
        return tmp7;
      }
      _multiplyBySmall(arg0) {
        self = this;
        if (0 === arg0.value) {
          tmp6 = Integer;
          first = Integer[0];
        } else {
          num = 1;
          first = self;
          if (1 !== arg0.value) {
            num2 = -1;
            if (-1 === arg0.value) {
              negateResult = self.negate();
            } else {
              tmp2 = multiplySmallAndArray;
              tmp3 = globalThis;
              _Math = Math;
              negateResult = multiplySmallAndArray(Math.abs(arg0.value), self.value, self.sign !== arg0.sign);
            }
            tmp5 = negateResult;
          }
        }
        return first;
      }
      square() {
        tmp = new BigInteger(square(this.value), false);
        return tmp;
      }
      divmod(arg0) {
        tmp = divModAny(this, arg0);
        obj = { quotient: tmp[0], remainder: tmp[1] };
        return obj;
      }
      divide(arg0) {
        return divModAny(this, arg0)[0];
      }
      mod(arg0) {
        return divModAny(this, arg0)[1];
      }
      pow(arg0) {
        self = this;
        iter = parseValue(arg0);
        value = this.value;
        value = iter.value;
        if (0 === value) {
          tmp26 = Integer;
          num2 = 1;
          return Integer[1];
        } else if (0 === value) {
          tmp25 = Integer;
          return Integer[0];
        } else {
          num3 = 1;
          if (1 === value) {
            tmp24 = Integer;
            return Integer[1];
          } else {
            num4 = -1;
            if (-1 === value) {
              tmp23 = Integer;
              return iter.isEven() ? tmp23[1] : tmp23[-1];
            } else if (iter.sign) {
              tmp22 = Integer;
              return Integer[0];
            } else if (iter.isSmall) {
              if (self.isSmall) {
                tmp6 = isPrecise;
                tmp7 = globalThis;
                _Math = Math;
                powResult = Math.pow(value, value);
                if (isPrecise(powResult)) {
                  tmp16 = SmallInteger;
                  tmp17 = truncate;
                  prototype2 = SmallInteger.prototype;
                  tmp18 = new.target;
                  tmp19 = new.target;
                  tmp20 = new SmallInteger(truncate(powResult));
                  tmp21 = tmp20;
                  return tmp20;
                }
              }
              tmp9 = Integer;
              obj = Integer[1];
              flag = true;
              timesResult = obj;
              diff = value;
              if (true & value) {
                timesResult = obj.times(self);
                diff = value - 1;
              }
              num = 2;
              obj2 = self;
              obj3 = timesResult;
              tmp12 = timesResult;
              if (0 !== diff) {
                do {
                  result = diff / 2;
                  squareResult = obj2.square();
                  timesResult1 = obj3;
                  diff = result;
                  if (true & result) {
                    timesResult1 = obj3.times(squareResult);
                    diff = result - 1;
                  }
                  obj3 = timesResult1;
                  obj2 = squareResult;
                  tmp12 = timesResult1;
                } while (0 !== diff);
              }
              return tmp12;
            } else {
              tmp = globalThis;
              _Error = Error;
              str = "The exponent ";
              prototype = Error.prototype;
              tmp2 = new.target;
              str2 = " is too large.";
              tmp3 = new.target;
              error = new Error("The exponent " + iter.toString() + " is too large.");
              tmp5 = error;
              throw error;
            }
          }
        }
      }
      modPow(arg0, arg1) {
        self = this;
        obj = parseValue(arg0);
        obj2 = parseValue(arg1);
        if (obj2.isZero()) {
          tmp8 = globalThis;
          _Error = Error;
          prototype = Error.prototype;
          tmp9 = new.target;
          str = "Cannot take modPow with modulus 0";
          tmp10 = new.target;
          error = new Error("Cannot take modPow with modulus 0");
          tmp12 = error;
          throw error;
        } else {
          tmp = Integer;
          num = 1;
          tmp2 = Integer[1];
          modResult = self.mod(obj2);
          multiplyResult = obj;
          modInvResult = modResult;
          if (obj.isNegative()) {
            tmp3 = Integer;
            num2 = -1;
            multiplyResult = obj.multiply(Integer[-1]);
            modInvResult = modResult.modInv(obj2);
          }
          num3 = 2;
          obj6 = multiplyResult;
          obj7 = tmp2;
          tmp4 = tmp2;
          if (multiplyResult.isPositive()) {
            tmp5 = modInvResult;
            while (!modInvResult.isZero()) {
              modResult1 = obj7;
              if (obj6.isOdd()) {
                multiplyResult1 = obj7.multiply(modInvResult);
                modResult1 = multiplyResult1.mod(obj2);
              }
              divideResult = obj6.divide(2);
              squareResult = modInvResult.square();
              modInvResult = squareResult.mod(obj2);
              obj7 = modResult1;
              obj6 = divideResult;
              tmp4 = modResult1;
            }
            tmp7 = Integer;
            num4 = 0;
            return Integer[0];
          }
          return tmp4;
        }
      }
      compareAbs(arg0) {
        tmp = parseValue(arg0);
        num = 1;
        if (!tmp.isSmall) {
          tmp4 = compareAbs;
          num = compareAbs(tmp2, tmp3);
        }
        return num;
      }
      compare(arg0) {
        self = this;
        if (arg0 === Infinity) {
          num5 = -1;
          return -1;
        } else {
          num6 = -Infinity;
          if (arg0 === -Infinity) {
            num4 = 1;
            return 1;
          } else {
            tmp4 = parseValue;
            tmp5 = parseValue(arg0);
            if (self.sign !== tmp5.sign) {
              num3 = -1;
              if (tmp5.sign) {
                num3 = 1;
              }
              result = num3;
            } else if (tmp5.isSmall) {
              num2 = 1;
              if (self.sign) {
                num2 = -1;
              }
              result = num2;
            } else {
              tmp = compareAbs;
              num = 1;
              tmp2 = compareAbs(tmp6, tmp7);
              if (self.sign) {
                num = -1;
              }
              result = tmp2 * num;
            }
            return result;
          }
        }
      }
      equals(arg0) {
        return 0 === this.compare(arg0);
      }
      notEquals(arg0) {
        return 0 !== this.compare(arg0);
      }
      greater(arg0) {
        return this.compare(arg0) > 0;
      }
      lesser(arg0) {
        return this.compare(arg0) < 0;
      }
      greaterOrEquals(arg0) {
        return this.compare(arg0) >= 0;
      }
      lesserOrEquals(arg0) {
        return this.compare(arg0) <= 0;
      }
      isEven() {
        return !(1 & this.value[0]);
      }
      isOdd() {
        return !(1 & ~this.value[0]);
      }
      isPositive() {
        return !this.sign;
      }
      isNegative() {
        return this.sign;
      }
      isUnit() {
        return false;
      }
      isZero() {
        return false;
      }
      isDivisibleBy(arg0) {
        self = this;
        obj = parseValue(arg0);
        tmp = !obj.isZero();
        if (tmp) {
          tmp2 = !obj.isUnit();
          if (!tmp2) {
            tmp = !tmp2;
          } else {
            num = 2;
            num2 = 0;
            if (0 === obj.compareAbs(2)) {
              isEvenResult = self.isEven();
            } else {
              modResult = self.mod(obj);
              isEvenResult = modResult.isZero();
            }
            tmp4 = isEvenResult;
          }
        }
        return tmp;
      }
      isPrime(arg0) {
        self = this;
        tmp = isBasicPrime(this);
        if (tmp !== closure_0) {
          return tmp;
        } else {
          absResult = self.abs();
          bitLengthResult = absResult.bitLength();
          num2 = 64;
          if (bitLengthResult <= 64) {
            tmp7 = millerRabinTest;
            return millerRabinTest(absResult, ["ch\u00E1pu", "dokonal\u00FD", "gesto OK", "jasn\u011B", "ok", "OK", "par\u00E1da", "peckovn\u00ED", "perfektn\u00ED", "prvot\u0159\u00EDdn\u00ED", "rozum\u00EDm", "ruka"]);
          } else {
            tmp8 = globalThis;
            _Math2 = Math;
            num3 = 2;
            logResult = Math.log(2);
            result = logResult * bitLengthResult.toJSNumber();
            flag = true;
            tmp11 = arg0;
            result1 = result;
            if (true === arg0) {
              _Math = Math;
              result1 = 2 * Math.pow(result, 2);
            }
            rounded = Math.ceil(result1);
            items = [];
            for (let num = 0; num < rounded; num = num + 1) {
              tmp4 = closure_0;
              arr = items.push(closure_0(num + 2));
            }
            tmp6 = millerRabinTest;
            return millerRabinTest(absResult, items);
          }
        }
      }
      isProbablePrime(arg0, arg1) {
        self = this;
        tmp = isBasicPrime(this);
        if (tmp !== closure_0) {
          return tmp;
        } else {
          absResult = self.abs();
          tmp2 = closure_0;
          num = 5;
          if (arg0 !== closure_0) {
            num = arg0;
          }
          items = [];
          num2 = 0;
          num3 = 2;
          if (0 < num) {
            do {
              tmp3 = closure_0;
              arr = items.push(closure_0.randBetween(2, absResult.minus(2), arg1));
              num2 = num2 + 1;
            } while (num2 < num);
          }
          tmp5 = millerRabinTest;
          return millerRabinTest(absResult, items);
        }
      }
      modInv(arg0) {
        self = this;
        zero = closure_0.zero;
        one = closure_0.one;
        obj = parseValue(arg0);
        absResult = this.abs();
        obj3 = zero;
        obj4 = obj;
        if (!absResult.isZero()) {
          do {
            divideResult = obj.divide(absResult);
            subtractResult = zero.subtract(divideResult.multiply(one));
            subtractResult1 = obj.subtract(divideResult.multiply(absResult));
            zero = one;
            obj = absResult;
            one = subtractResult;
            absResult = subtractResult1;
            obj3 = zero;
            obj4 = obj;
            isZeroResult = subtractResult1.isZero();
          } while (!isZeroResult);
        }
        if (obj4.isUnit()) {
          num = 0;
          num2 = -1;
          addResult = obj3;
          if (-1 === obj3.compare(0)) {
            addResult = obj3.add(arg0);
          }
          negateResult = addResult;
          if (self.isNegative()) {
            negateResult = addResult.negate();
          }
          return negateResult;
        } else {
          tmp3 = globalThis;
          _Error = Error;
          str = " and ";
          text = `${self.toString()} and `;
          prototype = Error.prototype;
          tmp5 = new.target;
          str2 = " are not co-prime";
          tmp6 = new.target;
          error = new Error(`${self.toString()} and ` + arg0.toString() + " are not co-prime");
          tmp8 = error;
          throw error;
        }
      }
      next() {
        self = this;
        value = this.value;
        if (this.sign) {
          tmp6 = subtractSmall;
          num2 = 1;
          tmp5 = subtractSmall(value, 1, self.sign);
        } else {
          tmp = BigInteger;
          tmp2 = addSmall;
          num = 1;
          prototype = BigInteger.prototype;
          tmp3 = new.target;
          tmp4 = new.target;
          tmp5 = new BigInteger(addSmall(value, 1), self.sign);
        }
        return tmp5;
      }
      prev() {
        value = this.value;
        if (this.sign) {
          tmp4 = BigInteger;
          tmp5 = addSmall;
          num2 = 1;
          prototype = BigInteger.prototype;
          tmp6 = new.target;
          flag = true;
          tmp7 = new.target;
          tmp3 = new BigInteger(addSmall(value, 1), true);
        } else {
          tmp2 = subtractSmall;
          num = 1;
          tmp3 = subtractSmall(value, 1, tmp.sign);
        }
        return tmp3;
      }
      shiftLeft(arg0) {
        self = this;
        obj = parseValue(arg0);
        toJSNumberResult = obj.toJSNumber();
        if (shift_isSmall(toJSNumberResult)) {
          num = 0;
          if (toJSNumberResult < 0) {
            return self.shiftRight(-toJSNumberResult);
          } else if (self.isZero()) {
            return self;
          } else {
            tmp7 = length;
            num2 = 1;
            diff = toJSNumberResult;
            multiplyResult = self;
            obj3 = self;
            tmp9 = toJSNumberResult;
            if (toJSNumberResult >= length) {
              do {
                tmp10 = closure_6;
                multiplyResult = multiplyResult.multiply(closure_6);
                tmp11 = closure_5;
                diff = diff - (closure_5 - 1);
                tmp12 = closure_5;
                obj3 = multiplyResult;
                tmp9 = diff;
              } while (diff >= closure_5);
            }
            tmp13 = Object;
            return obj3.multiply(Object[tmp9]);
          }
        } else {
          tmp2 = globalThis;
          _Error = Error;
          _String = String;
          str = " is too large for shifting.";
          prototype = Error.prototype;
          tmp3 = new.target;
          tmp4 = new.target;
          error = new Error(String(toJSNumberResult) + " is too large for shifting.");
          tmp6 = error;
          throw error;
        }
      }
      shiftRight(arg0) {
        self = this;
        obj = parseValue(arg0);
        toJSNumberResult = obj.toJSNumber();
        if (shift_isSmall(toJSNumberResult)) {
          num = 0;
          if (toJSNumberResult < 0) {
            return self.shiftLeft(-toJSNumberResult);
          } else {
            tmp21 = length;
            num2 = 1;
            diff = toJSNumberResult;
            obj4 = self;
            tmp15 = self;
            tmp16 = toJSNumberResult;
            if (toJSNumberResult >= length) {
              tmp7 = obj4;
              while (!obj4.isZero()) {
                if (!obj4.isNegative()) {
                  tmp8 = divModAny;
                  tmp9 = length;
                  tmp10 = divModAny(obj4, length);
                  [obj3, obj2] = tmp10;
                  if (obj2.isNegative()) {
                    prevResult = obj3.prev();
                  } else {
                    prevResult = obj3;
                  }
                  tmp12 = length;
                  diff = diff - (length - 1);
                  tmp14 = length;
                  obj4 = prevResult;
                  tmp15 = prevResult;
                  tmp16 = diff;
                } else if (obj4.isUnit()) {
                  break;
                }
                return obj4;
              }
            }
            tmp17 = divModAny;
            tmp18 = Object;
            tmp19 = divModAny(tmp15, Object[tmp16]);
            [obj6, obj5] = tmp19;
            if (obj5.isNegative()) {
              prevResult1 = obj6.prev();
            } else {
              prevResult1 = obj6;
            }
            return prevResult1;
          }
        } else {
          tmp2 = globalThis;
          _Error = Error;
          _String = String;
          str = " is too large for shifting.";
          prototype = Error.prototype;
          tmp3 = new.target;
          tmp4 = new.target;
          error = new Error(String(toJSNumberResult) + " is too large for shifting.");
          tmp6 = error;
          throw error;
        }
      }
      not() {
        negateResult = this.negate();
        return negateResult.prev();
      }
      and(arg0) {
        return bitwise(this, arg0, (arg0, arg1) => arg0 & arg1);
      }
      or(arg0) {
        return bitwise(this, arg0, (arg0, arg1) => arg0 | arg1);
      }
      xor(arg0) {
        return bitwise(this, arg0, (arg0, arg1) => arg0 ^ arg1);
      }
      bitLength() {
        self = this;
        self2 = this;
        if (this.compareTo(closure_0(0)) < 0) {
          negateResult = self.negate();
          tmp = closure_0;
          num = 1;
          self2 = negateResult.subtract(closure_0(1));
        }
        if (0 === self2.compareTo(closure_0(0))) {
          tmp6 = closure_0;
          addResult = closure_0(0);
        } else {
          tmp2 = closure_0;
          tmp3 = integerLogarithm;
          num2 = 2;
          obj2 = closure_0(integerLogarithm(self2, closure_0(2)).e);
          tmp4 = closure_0;
          num3 = 1;
          addResult = obj2.add(closure_0(1));
        }
        return addResult;
      }
      toArray(arg0) {
        return toBase(this, arg0);
      }
      toString(arg0, arg1) {
        num = arg0;
        self = this;
        if (arg0 === closure_0) {
          num = 10;
        }
        if (10 !== num) {
          tmp4 = toBaseString;
          tmp5 = arg1;
          return toBaseString(self, num, arg1);
        } else {
          value = self.value;
          tmp6 = globalThis;
          _String2 = String;
          diff = value.length - 1;
          StringResult = String(value[diff]);
          diff1 = diff - 1;
          str2 = "0000000";
          num2 = 0;
          sum = StringResult;
          tmp3 = StringResult;
          if (diff1 >= 0) {
            do {
              _String = String;
              StringResult1 = String(value[diff1]);
              slice = "0000000".slice;
              sum = sum + ("0000000".slice(StringResult1.length) + StringResult1);
              diff1 = diff1 - 1;
              tmp3 = sum;
            } while (diff1 >= 0);
          }
          str = "";
          if (self.sign) {
            str = "-";
          }
          return str + tmp3;
        }
      }
      valueOf() {
        return parseInt(this.toString(), 10);
      }
    }
    num = num + 1;
    class SmallInteger {
      constructor(arg0) {
        this.value = arg0;
        this.sign = arg0 < 0;
        this.isSmall = true;
        return;
      }
      add(arg0) {
        self = this;
        iter = parseValue(arg0);
        value = this.value;
        if (value < 0 !== iter.sign) {
          return self.subtract(iter.negate());
        } else {
          value = iter.value;
          tmp4 = value;
          if (iter.isSmall) {
            tmp = isPrecise;
            if (isPrecise(value + value)) {
              tmp12 = SmallInteger;
              prototype2 = SmallInteger.prototype;
              tmp13 = new.target;
              tmp14 = new.target;
              tmp15 = new SmallInteger(value + value);
              tmp16 = tmp15;
              return tmp15;
            } else {
              tmp2 = smallToArray;
              tmp3 = globalThis;
              _Math = Math;
              tmp4 = smallToArray(Math.abs(value));
            }
          }
          tmp5 = BigInteger;
          tmp6 = addSmall;
          tmp7 = globalThis;
          _Math2 = Math;
          prototype = BigInteger.prototype;
          tmp8 = new.target;
          tmp9 = new.target;
          tmp10 = new BigInteger(addSmall(tmp4, Math.abs(value)), value < 0);
          tmp11 = tmp10;
          return tmp10;
        }
      }
      subtract(arg0) {
        self = this;
        iter = parseValue(arg0);
        value = this.value;
        if (value < 0 !== iter.sign) {
          return self.add(iter.negate());
        } else {
          value = iter.value;
          if (iter.isSmall) {
            tmp4 = SmallInteger;
            prototype = SmallInteger.prototype;
            tmp5 = new.target;
            tmp6 = new.target;
            tmp3 = new SmallInteger(value - value);
          } else {
            tmp = subtractSmall;
            tmp2 = globalThis;
            _Math = Math;
            tmp3 = subtractSmall(value, Math.abs(value), value >= 0);
          }
          return tmp3;
        }
      }
      negate() {
        tmp = new SmallInteger(-this.value);
        tmp.sign = !this.sign;
        return tmp;
      }
      abs() {
        tmp = new SmallInteger(Math.abs(this.value));
        return tmp;
      }
      _multiplyBySmall(arg0) {
        self = this;
        if (isPrecise(arg0.value * this.value)) {
          tmp6 = SmallInteger;
          prototype = SmallInteger.prototype;
          tmp7 = new.target;
          tmp8 = new.target;
          tmp5 = new SmallInteger(arg0.value * self.value);
        } else {
          tmp = multiplySmallAndArray;
          tmp2 = globalThis;
          _Math = Math;
          tmp4 = smallToArray;
          _Math2 = Math;
          absolute = Math.abs(arg0.value);
          tmp5 = multiplySmallAndArray(absolute, smallToArray(Math.abs(self.value)), self.sign !== arg0.sign);
        }
        return tmp5;
      }
      multiply(arg0) {
        obj = parseValue(arg0);
        return obj._multiplyBySmall(this);
      }
      square() {
        result = this.value * this.value;
        if (isPrecise(result)) {
          tmp9 = SmallInteger;
          prototype2 = SmallInteger.prototype;
          tmp10 = new.target;
          tmp11 = new.target;
          tmp12 = result;
          tmp8 = new SmallInteger(result);
        } else {
          tmp2 = BigInteger;
          tmp3 = square;
          tmp4 = smallToArray;
          tmp5 = globalThis;
          _Math = Math;
          prototype = BigInteger.prototype;
          tmp6 = new.target;
          flag = false;
          tmp7 = new.target;
          tmp8 = new BigInteger(square(smallToArray(Math.abs(this.value))), false);
        }
        return tmp8;
      }
      compareAbs(arg0) {
        tmp = parseValue(arg0);
        absolute = Math.abs(this.value);
        num = -1;
        num2 = -1;
        if (tmp.isSmall) {
          _Math = Math;
          absolute1 = Math.abs(tmp3);
          num3 = 0;
          if (absolute !== absolute1) {
            if (absolute > absolute1) {
              num = 1;
            }
            num3 = num;
          }
          num2 = num3;
        }
        return num2;
      }
      compare(arg0) {
        if (arg0 === Infinity) {
          num6 = -1;
          return -1;
        } else {
          num7 = -Infinity;
          if (arg0 === -Infinity) {
            num5 = 1;
            return 1;
          } else {
            tmp = parseValue;
            iter = parseValue(arg0);
            self = this;
            value = this.value;
            value = iter.value;
            num8 = 0;
            if (iter.isSmall) {
              num3 = 0;
              if (value != value) {
                num4 = -1;
                if (value > value) {
                  num4 = 1;
                }
                num3 = num4;
              }
              num = num3;
            } else if (value < 0 !== iter.sign) {
              num2 = 1;
              if (value < 0) {
                num2 = -1;
              }
              num = num2;
            } else {
              num = -1;
              if (value < 0) {
                num = 1;
              }
            }
            return num;
          }
        }
      }
      isEven() {
        return !(1 & this.value);
      }
      isOdd() {
        return !(1 & ~this.value);
      }
      isPositive() {
        return this.value > 0;
      }
      isNegative() {
        return this.value < 0;
      }
      isUnit() {
        return 1 === Math.abs(this.value);
      }
      isZero() {
        return 0 === this.value;
      }
      next() {
        value = this.value;
        if (value + 1 < 9007199254740992) {
          tmp6 = SmallInteger;
          prototype2 = SmallInteger.prototype;
          tmp7 = new.target;
          tmp8 = new.target;
          tmp5 = new SmallInteger(value + 1);
        } else {
          tmp = BigInteger;
          tmp2 = closure_1;
          prototype = BigInteger.prototype;
          tmp3 = new.target;
          flag = false;
          tmp4 = new.target;
          tmp5 = new BigInteger(closure_1, false);
        }
        return tmp5;
      }
      prev() {
        value = this.value;
        if (value - 1 > -9007199254740992) {
          tmp6 = SmallInteger;
          prototype2 = SmallInteger.prototype;
          tmp7 = new.target;
          tmp8 = new.target;
          tmp5 = new SmallInteger(value - 1);
        } else {
          tmp = BigInteger;
          tmp2 = closure_1;
          prototype = BigInteger.prototype;
          tmp3 = new.target;
          flag = true;
          tmp4 = new.target;
          tmp5 = new BigInteger(closure_1, true);
        }
        return tmp5;
      }
      toArray(arg0) {
        return toBase(this, arg0);
      }
      toString(arg0, arg1) {
        num = arg0;
        self = this;
        if (arg0 === closure_0) {
          num = 10;
        }
        if (10 != num) {
          tmp3 = toBaseString;
          tmp4 = arg1;
          StringResult = toBaseString(self, num, arg1);
        } else {
          tmp = globalThis;
          _String = String;
          StringResult = String(self.value);
        }
        return StringResult;
      }
      valueOf() {
        return this.value;
      }
    }
  }
  [Integer.zero, Integer.one] = Integer;
  Integer.minusOne = Integer[-1];
  Integer.max = max;
  Integer.min = min;
  Integer.gcd = gcd;
  Integer.lcm = function lcm(arg0, arg1) {
    const absResult = parseValue(arg0).abs();
    const obj = parseValue(arg0);
    const absResult1 = parseValue(arg1).abs();
    const obj3 = parseValue(arg1);
    return absResult.divide(gcd(absResult, absResult1)).multiply(absResult1);
  };
  Integer.isInstance = (arg0) => {
    let tmp = arg0 instanceof BigInteger;
    if (!tmp) {
      tmp = arg0 instanceof SmallInteger;
    }
    if (!tmp) {
      tmp = arg0 instanceof NativeBigInt;
    }
    return tmp;
  };
  Integer.randBetween = function randBetween(arg0, absResult, arg2) {
    let random = arg2;
    const tmp = parseValue(arg0);
    const tmp2 = parseValue(absResult);
    if (!arg2) {
      const _Math = Math;
      random = Math.random;
    }
    const obj = min(tmp, tmp2);
    const obj2 = max(tmp, tmp2);
    const addResult = max(tmp, tmp2).subtract(obj).add(1);
    if (addResult.isSmall) {
      const _Math2 = Math;
      return obj.add(Math.floor(random() * addResult));
    } else {
      const value = toBase(addResult, 10000000).value;
      const items = [];
      let num2 = 0;
      let flag2 = true;
      if (0 < value.length) {
        do {
          let num3 = 10000000;
          if (flag2) {
            num3 = value[num2];
          }
          let tmp6 = closure_18;
          let tmp7 = closure_18(random() * num3);
          let arr = items.push(tmp7);
          if (tmp7 < num3) {
            flag2 = false;
          }
          num2 = num2 + 1;
        } while (num2 < value.length);
      }
      return obj.add(Integer.fromArray(items, 10000000, false));
    }
    const subtractResult = max(tmp, tmp2).subtract(obj);
  };
  Integer.fromArray = (arr) => {
    let num = arg1;
    const mapped = arr.map(parseValue);
    if (!arg1) {
      num = 10;
    }
    return parseBaseFromArray(mapped, parseValue(num), arg2);
  };
  return Integer;
}();
let hasOwnPropertyResult = undefined !== module;
if (hasOwnPropertyResult) {
  hasOwnPropertyResult = module.hasOwnProperty("exports");
}
if (hasOwnPropertyResult) {
  module.exports = tmp;
}
let amd = "function" === typeof globalThis.define;
if (amd) {
  amd = globalThis.define.amd;
}
if (amd) {
  globalThis.define(() => tmp);
}
