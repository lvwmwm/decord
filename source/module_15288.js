// Module ID: 15288
// Function ID: 115409
// Dependencies: []

// Module 15288
if ("function" === typeof Symbol) {
  const _Symbol = Symbol;
  if ("symbol" === typeof Symbol.iterator) {
    let fn = (arg0) => typeof arg0;
  }
  const fn2 = (exports) => {
    function _possibleConstructorReturn(arg0, arg1) {
      if (arg0) {
        if (!arg1) {
          let tmp7 = arg0;
        } else {
          let str2 = "undefined";
          if (undefined !== arg1) {
            str2 = callback(arg1);
          }
          tmp7 = arg1;
          if ("object" !== str2) {
            tmp7 = arg1;
          }
        }
        return tmp7;
      } else {
        const _ReferenceError = ReferenceError;
        const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
        throw referenceError;
      }
    }
    function _inherits(value) {
      if ("function" !== typeof arg1) {
        if (null !== arg1) {
          let _TypeError = TypeError;
          let str = "undefined";
          if (undefined !== arg1) {
            str = callback(arg1);
          }
          const prototype2 = _TypeError.prototype;
          _TypeError = new _TypeError("Super expression must either be null or a function, not " + str);
          throw _TypeError;
        }
      }
      let prototype = arg1;
      if (arg1) {
        prototype = arg1.prototype;
      }
      const obj = { 1837105156: 1, 894631940: "column", 65904547: 200, 1233076609: "", value };
      value.prototype = Object.create(prototype, { constructor: obj });
      if (arg1) {
        const _Object = Object;
        if (Object.setPrototypeOf) {
          const _Object2 = Object;
          Object.setPrototypeOf(value, arg1);
        } else {
          value.__proto__ = arg1;
        }
      }
    }
    function _classCallCheck(arg0, arg1) {
      if (!(arg0 instanceof arg1)) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Cannot call a class as a function");
        throw typeError;
      }
    }
    exports.newStemmer = function newStemmer(english) {
      let obj = { arabic: closure_5, armenian: closure_6, basque: closure_7, catalan: closure_8, czech: closure_9, danish: closure_10, dutch: closure_11, english: closure_12, finnish: closure_13, french: closure_14, german: closure_15, hungarian: closure_16, italian: closure_18, irish: closure_17, norwegian: closure_19, porter: closure_20, portuguese: closure_21, romanian: closure_22, russian: closure_23, spanish: closure_25, slovene: closure_24, swedish: closure_26, tamil: closure_27, turkish: closure_28 };
      let closure_0 = new obj[english.toLowerCase(english)]();
      obj = {
        stem(arg0) {
          tmp.setCurrent(arg0);
          tmp.stem();
          return tmp.getCurrent();
        }
      };
      return obj;
    };
    exports.algorithms = function algorithms() {
      return [];
    };
    let closure_0 = () => {
      function defineProperties(arg0, arg1) {
        for (let num = 0; num < arg1.length; num = num + 1) {
          let tmp = arg1[num];
          tmp.enumerable = tmp.enumerable || false;
          tmp.configurable = true;
          if ("value" in tmp) {
            tmp.writable = true;
          }
          let _Object = Object;
          let definePropertyResult = Object.defineProperty(arg0, tmp.key, tmp);
        }
      }
      return (arg0, arg1, arg2) => {
        if (arg1) {
          defineProperties(arg0.prototype, arg1);
        }
        if (arg2) {
          defineProperties(arg0, arg2);
        }
        return arg0;
      };
    }();
    function get(arg0, arg1, arg2) {
      let prototype = arg0;
      if (null === arg0) {
        const _Function = Function;
        prototype = Function.prototype;
      }
      const iter = Object.getOwnPropertyDescriptor(prototype, arg1);
      if (undefined === iter) {
        const _Object = Object;
        const prototypeOf = Object.getPrototypeOf(prototype);
        let tmp4;
        if (null !== prototypeOf) {
          tmp4 = get(prototypeOf, arg1, arg2);
        }
        return tmp4;
      } else if ("value" in iter) {
        return iter.value;
      } else {
        const get = iter.get;
        let callResult;
        if (undefined !== get) {
          callResult = get.call(arg2);
        }
        return callResult;
      }
    }
    const tmp2 = () => {
      class StringBuffer {
        constructor() {
          tmp = closure_31(this, StringBuffer);
          return;
        }
      }
      const callback = StringBuffer;
      let obj = {
        key: "length$esjava$0",
        value: function length$esjava$0() {
          return this.b.length;
        }
      };
      const items = [obj, , , , , , , , , , , , ];
      obj = {
        key: "replace$esjava$3",
        value: function replace$esjava$3(length2, length, arg2) {
          let b;
          let b2;
          const self = this;
          if (0 === length2) {
            if (length === self.b.length) {
              self.b = arg2;
            }
          }
          ({ b, b: b2 } = self);
          const substr = b.substring(0, length2);
          self.b = substr + arg2 + b2.substring(length);
        }
      };
      items[1] = obj;
      obj = {
        key: "substring$esjava$2",
        value: function substring$esjava$2(length, length2) {
          return this.b.substring(length, length2);
        }
      };
      items[2] = obj;
      items[3] = {
        key: "charAt$esjava$1",
        value: function charAt$esjava$1(arg0) {
          const b = this.b;
          return b.charCodeAt(arg0);
        }
      };
      items[4] = {
        key: "subSequence$esjava$2",
        value: function subSequence$esjava$2(arg0, arg1) {
          const error = new Error("NotImpl: CharSequence::subSequence");
          throw error;
        }
      };
      items[5] = {
        key: "toString$esjava$0",
        value: function toString$esjava$0() {
          return this.b;
        }
      };
      items[6] = {
        key: "length",
        value: function length() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const length$esjava$0 = self.length$esjava$0;
            let applyResult = length$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(StringBuffer.prototype), "length", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[7] = {
        key: "replace",
        value: function replace() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (3 === ArrayResult.length) {
            const replace$esjava$3 = self.replace$esjava$3;
            let applyResult = replace$esjava$3.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(StringBuffer.prototype), "replace", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[8] = {
        key: "substring",
        value: function substring(length, length2) {
          const self = this;
          length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (2 === ArrayResult.length) {
            const substring$esjava$2 = self.substring$esjava$2;
            let applyResult = substring$esjava$2.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(StringBuffer.prototype), "substring", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[9] = {
        key: "charAt",
        value: function charAt(closure_70) {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (1 === ArrayResult.length) {
            const charAt$esjava$1 = self.charAt$esjava$1;
            let applyResult = charAt$esjava$1.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(StringBuffer.prototype), "charAt", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[10] = {
        key: "subSequence",
        value: function subSequence() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (2 === ArrayResult.length) {
            const subSequence$esjava$2 = self.subSequence$esjava$2;
            let applyResult = subSequence$esjava$2.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(StringBuffer.prototype), "subSequence", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[11] = {
        key: "toString",
        value: function toString() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const toString$esjava$0 = self.toString$esjava$0;
            let applyResult = toString$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(StringBuffer.prototype), "toString", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[12] = {
        key: "b",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$b")) {
            let str = self._$esjava$b;
          } else {
            str = "";
            self._$esjava$b = "";
          }
          return str;
        },
        set(_$esjava$b) {
          this._$esjava$b = _$esjava$b;
        }
      };
      callback(StringBuffer, items);
      return StringBuffer;
    }();
    let closure_3 = (arg0) => {
      class StringBuilder {
        constructor() {
          tmp = closure_31(this, StringBuilder);
          prototypeOf = Object.getPrototypeOf(StringBuilder);
          return closure_29(this, prototypeOf(...arguments));
        }
      }
      let closure_0 = StringBuilder;
      _inherits(StringBuilder, arg0);
      return StringBuilder;
    }(tmp2);
    let closure_4 = () => {
      class Among {
        constructor(arg0, arg1, arg2, arg3, arg4) {
          self = this;
          tmp = closure_31(this, Among);
          this.s = Among.toCharArray$esjava$1(arg0);
          this.substring_i = arg1;
          this.result = arg2;
          tmp2 = null;
          if (arg3) {
            tmp2 = arg4[arg3];
          }
          self.method = tmp2;
          self.methodobject = arg4;
          return;
        }
      }
      const callback = Among;
      let obj = {
        key: "toCharArray$esjava$1",
        value: function toCharArray$esjava$1(str) {
          const array = new Array(length);
          for (let num = 0; num < length; num = num + 1) {
            array[num] = str.charCodeAt(num);
          }
          return array;
        }
      };
      const items = [obj];
      callback(Among, null, items);
      obj = {
        key: "s",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$s")) {
            let prop = self._$esjava$s;
          } else {
            prop = null;
            self._$esjava$s = null;
          }
          return prop;
        },
        set(_$esjava$s) {
          this._$esjava$s = _$esjava$s;
        }
      };
      const items1 = [obj, , , , ];
      obj = {
        key: "substring_i",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$substring_i")) {
            let num = self._$esjava$substring_i;
          } else {
            num = 0;
            self._$esjava$substring_i = 0;
          }
          return num;
        },
        set(_$esjava$substring_i) {
          this._$esjava$substring_i = _$esjava$substring_i;
        }
      };
      items1[1] = obj;
      items1[2] = {
        key: "result",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$result")) {
            let num = self._$esjava$result;
          } else {
            num = 0;
            self._$esjava$result = 0;
          }
          return num;
        },
        set(_$esjava$result) {
          this._$esjava$result = _$esjava$result;
        }
      };
      items1[3] = {
        key: "method",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$method")) {
            let prop = self._$esjava$method;
          } else {
            prop = null;
            self._$esjava$method = null;
          }
          return prop;
        },
        set(_$esjava$method) {
          this._$esjava$method = _$esjava$method;
        }
      };
      items1[4] = {
        key: "methodobject",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$methodobject")) {
            let prop = self._$esjava$methodobject;
          } else {
            prop = null;
            self._$esjava$methodobject = null;
          }
          return prop;
        },
        set(_$esjava$methodobject) {
          this._$esjava$methodobject = _$esjava$methodobject;
        }
      };
      callback(Among, items1);
      return Among;
    }();
    const tmp3 = (arg0) => {
      class SnowballStemmer {
        constructor() {
          tmp = closure_31(this, SnowballStemmer);
          prototypeOf = Object.getPrototypeOf(SnowballStemmer);
          return closure_29(this, prototypeOf(...arguments));
        }
      }
      const callback = SnowballStemmer;
      _inherits(SnowballStemmer, arg0);
      let obj = {
        key: "stem$esjava$0",
        value: function stem$esjava$0() {
          throw "NotImpl < stem$esjava$0 >";
        }
      };
      const items = [obj, ];
      obj = {
        key: "stem",
        value: function stem() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const stem$esjava$0 = self.stem$esjava$0;
            let applyResult = stem$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(SnowballStemmer.prototype), "stem", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[1] = obj;
      callback(SnowballStemmer, items);
      return SnowballStemmer;
    }(() => {
      class SnowballProgram {
        constructor() {
          tmp = closure_31(this, SnowballProgram);
          tmp2 = new closure_2();
          this.current = tmp2;
          result = this.setCurrent$esjava$1("");
          return;
        }
      }
      const callback = SnowballProgram;
      let obj = {
        key: "setCurrent$esjava$1",
        value: function setCurrent$esjava$1(arg0) {
          let current;
          let current2;
          ({ current, current: current2 } = this);
          const replaced = current.replace(0, current2.length(), arg0);
          this.cursor = 0;
          current = this.current;
          this.limit = current.length();
          this.limit_backward = 0;
          ({ cursor: this.bra, limit: this.ket } = this);
        }
      };
      const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
      obj = {
        key: "getCurrent$esjava$0",
        value: function getCurrent$esjava$0() {
          let str = this.current;
          str = str.toString();
          this.current = new closure_2();
          return str;
        }
      };
      items[1] = obj;
      obj = {
        key: "in_grouping$esjava$3",
        value: function in_grouping$esjava$3(g_v, arg1, arg2) {
          const self = this;
          if (this.cursor >= this.limit) {
            return false;
          } else {
            const charAtResult = self.current.charAt(self.cursor);
            let tmp4 = !tmp3;
            if (!(charAtResult > arg2 || charAtResult < arg1)) {
              const diff = charAtResult - arg1;
              let flag = tmp7;
              if (g_v[diff >> 3] & 1 << (7 & diff)) {
                self.cursor = self.cursor + 1;
                flag = true;
              }
              tmp4 = flag;
            }
            return tmp4;
          }
        }
      };
      items[2] = obj;
      items[3] = {
        key: "in_grouping_b$esjava$3",
        value: function in_grouping_b$esjava$3(g_vowel, arg1, arg2) {
          const self = this;
          if (this.cursor <= this.limit_backward) {
            return false;
          } else {
            const charAtResult = self.current.charAt(self.cursor - 1);
            let tmp4 = !tmp3;
            if (!(charAtResult > arg2 || charAtResult < arg1)) {
              const diff = charAtResult - arg1;
              let flag = tmp7;
              if (g_vowel[diff >> 3] & 1 << (7 & diff)) {
                self.cursor = self.cursor - 1;
                flag = true;
              }
              tmp4 = flag;
            }
            return tmp4;
          }
        }
      };
      items[4] = {
        key: "out_grouping$esjava$3",
        value: function out_grouping$esjava$3(g_v, arg1, arg2) {
          const self = this;
          if (this.cursor >= this.limit) {
            return false;
          } else {
            const charAtResult = self.current.charAt(self.cursor);
            let flag = charAtResult > arg2 || charAtResult < arg1;
            if (!flag) {
              const diff = charAtResult - arg1;
              flag = !(g_v[diff >> 3] & 1 << (7 & diff));
            }
            if (flag) {
              self.cursor = self.cursor + 1;
              flag = true;
            }
            return flag;
          }
        }
      };
      items[5] = {
        key: "out_grouping_b$esjava$3",
        value: function out_grouping_b$esjava$3(g_v, arg1, arg2) {
          const self = this;
          if (this.cursor <= this.limit_backward) {
            return false;
          } else {
            const charAtResult = self.current.charAt(self.cursor - 1);
            let flag = charAtResult > arg2 || charAtResult < arg1;
            if (!flag) {
              const diff = charAtResult - arg1;
              flag = !(g_v[diff >> 3] & 1 << (7 & diff));
            }
            if (flag) {
              self.cursor = self.cursor - 1;
              flag = true;
            }
            return flag;
          }
        }
      };
      items[6] = {
        key: "eq_s$esjava$1",
        value: function eq_s$esjava$1(u) {
          const self = this;
          if (this.limit - this.cursor < u.length) {
            return false;
          } else {
            let num = 0;
            if (0 !== u.length) {
              while (charAtResult === u.charCodeAt(num)) {
                num = num + 1;
              }
              return false;
            }
            self.cursor = self.cursor + u.length;
            return true;
          }
        }
      };
      items[7] = {
        key: "eq_s_b$esjava$1",
        value: function eq_s_b$esjava$1(u) {
          const self = this;
          if (this.cursor - this.limit_backward < u.length) {
            return false;
          } else {
            let num = 0;
            if (0 !== u.length) {
              while (charAtResult === u.charCodeAt(num)) {
                num = num + 1;
              }
              return false;
            }
            self.cursor = self.cursor - u.length;
            return true;
          }
        }
      };
      items[8] = {
        key: "find_among$esjava$1",
        value: function find_among$esjava$1(a_0) {
          let tmp15;
          const self = this;
          let length = a_0.length;
          const cursor = this.cursor;
          let num = 0;
          let num2 = 0;
          let num3 = 0;
          let flag = false;
          while (true) {
            let sum = num + (length - num >> 1);
            let tmp4 = num3;
            let tmp3 = flag;
            if (num2 < num3) {
              tmp4 = num2;
            }
            let tmp5 = a_0[sum];
            let sum1 = tmp4;
            let sum2 = tmp4;
            let num4 = 0;
            let tmp8 = tmp4;
            if (tmp4 < tmp5.s.length) {
              num4 = -1;
              tmp8 = sum1;
              while (cursor + sum1 !== tmp) {
                let str = self.current;
                let diff = str.charAt(cursor + sum1) - tmp5.s[sum2];
                tmp8 = sum1;
                num4 = diff;
                if (0 !== diff) {
                  break;
                } else {
                  sum1 = sum1 + 1;
                  sum2 = sum2 + 1;
                  num4 = diff;
                  tmp8 = sum1;
                  if (sum2 >= tmp5.s.length) {
                    break;
                  }
                }
              }
            }
            let tmp10 = sum;
            let tmp11 = tmp8;
            if (num4 < 0) {
              tmp10 = num;
              length = sum;
              tmp11 = num2;
              num3 = tmp8;
            }
            let tmp13 = length;
            num = tmp10;
            let diff1 = length - tmp10;
            num2 = tmp11;
            let tmp14 = num3;
            if (diff1 > 1) {
              continue;
            } else {
              let substring_i = tmp10;
              if (tmp10 > 0) {
                break;
              } else {
                substring_i = tmp10;
                if (tmp13 === tmp10) {
                  break;
                } else {
                  num = tmp10;
                  length = tmp13;
                  num2 = tmp11;
                  num3 = tmp14;
                  flag = true;
                  substring_i = tmp10;
                  if (tmp3) {
                    break;
                  }
                }
              }
            }
            continue;
          }
          while (true) {
            tmp15 = a_0[substring_i];
            if (tmp11 >= tmp15.s.length) {
              self.cursor = cursor + tmp15.s.length;
              let tmp16 = null;
              if (null === tmp15.method) {
                break;
              } else {
                let method = tmp15.method;
                self.cursor = cursor + tmp15.s.length;
                if (method.call(tmp15.methodobject)) {
                  return tmp15.result;
                }
              }
            }
            substring_i = tmp15.substring_i;
            if (substring_i >= 0) {
              continue;
            } else {
              return 0;
            }
          }
          return tmp15.result;
        }
      };
      items[9] = {
        key: "find_among_b$esjava$1",
        value: function find_among_b$esjava$1(a_2) {
          let tmp15;
          const self = this;
          let length = a_2.length;
          const cursor = this.cursor;
          let num = 0;
          let num2 = 0;
          let num3 = 0;
          let flag = false;
          while (true) {
            let sum = num + (length - num >> 1);
            let tmp4 = num3;
            let tmp3 = flag;
            if (num2 < num3) {
              tmp4 = num2;
            }
            let tmp5 = a_2[sum];
            let diff = tmp5.s.length - 1 - tmp4;
            let sum1 = tmp4;
            let tmp8 = tmp4;
            let num4 = 0;
            if (diff >= 0) {
              num4 = -1;
              tmp8 = sum1;
              while (cursor - sum1 !== tmp) {
                let str = self.current;
                let diff1 = str.charAt(cursor - 1 - sum1) - tmp5.s[diff];
                tmp8 = sum1;
                num4 = diff1;
                if (0 !== diff1) {
                  break;
                } else {
                  sum1 = sum1 + 1;
                  diff = diff - 1;
                  num4 = diff1;
                  tmp8 = sum1;
                  if (diff < 0) {
                    break;
                  }
                }
              }
            }
            let tmp10 = sum;
            let tmp11 = tmp8;
            if (num4 < 0) {
              tmp10 = num;
              length = sum;
              tmp11 = num2;
              num3 = tmp8;
            }
            let tmp13 = length;
            num = tmp10;
            let diff2 = length - tmp10;
            num2 = tmp11;
            let tmp14 = num3;
            if (diff2 > 1) {
              continue;
            } else {
              let substring_i = tmp10;
              if (tmp10 > 0) {
                break;
              } else {
                substring_i = tmp10;
                if (tmp13 === tmp10) {
                  break;
                } else {
                  num = tmp10;
                  length = tmp13;
                  num2 = tmp11;
                  num3 = tmp14;
                  flag = true;
                  substring_i = tmp10;
                  if (tmp3) {
                    break;
                  }
                }
              }
            }
            continue;
          }
          while (true) {
            tmp15 = a_2[substring_i];
            if (tmp11 >= tmp15.s.length) {
              self.cursor = cursor - tmp15.s.length;
              let tmp16 = null;
              if (null === tmp15.method) {
                break;
              } else {
                let method = tmp15.method;
                self.cursor = cursor - tmp15.s.length;
                if (method.call(tmp15.methodobject)) {
                  return tmp15.result;
                }
              }
            }
            substring_i = tmp15.substring_i;
            if (substring_i >= 0) {
              continue;
            } else {
              return 0;
            }
          }
          return tmp15.result;
        }
      };
      items[10] = {
        key: "replace_s$esjava$3",
        value: function replace_s$esjava$3(bra, ket, u) {
          const self = this;
          const diff = u.length - (ket - bra);
          const replaced = this.current.replace(bra, ket, u);
          this.limit = this.limit + diff;
          if (this.cursor >= ket) {
            self.cursor = self.cursor + diff;
          } else if (self.cursor > bra) {
            self.cursor = bra;
          }
          return diff;
        }
      };
      items[11] = {
        key: "slice_check$esjava$0",
        value: function slice_check$esjava$0() {
          let current;
          let limit;
          const self = this;
          if (this.bra >= 0) {
            if (self.bra <= self.ket) {
              if (self.ket <= self.limit) {
                ({ current, limit } = self);
              }
            }
          }
          const error = new Error("Snowball: faulty slice operation");
          throw error;
        }
      };
      items[12] = {
        key: "slice_from$esjava$1",
        value: function slice_from$esjava$1(Y) {
          const result = this.slice_check$esjava$0();
          const result1 = this.replace_s$esjava$3(this.bra, this.ket, Y);
        }
      };
      items[13] = {
        key: "slice_del$esjava$0",
        value: function slice_del$esjava$0() {
          const result = this.slice_from$esjava$1("");
        }
      };
      items[14] = {
        key: "insert$esjava$3",
        value: function insert$esjava$3(cursor, cursor2, u) {
          const self = this;
          const result = this.replace_s$esjava$3(cursor, cursor2, u);
          if (cursor <= this.bra) {
            self.bra = self.bra + result;
          }
          if (cursor <= self.ket) {
            self.ket = self.ket + result;
          }
        }
      };
      items[15] = {
        key: "slice_to$esjava$1",
        value: function slice_to$esjava$1(S_ch) {
          const result = this.slice_check$esjava$0();
          const replaced = S_ch.replace(0, S_ch.length(), this.current.substring(this.bra, this.ket));
          return S_ch;
        }
      };
      items[16] = {
        key: "setCurrent",
        value: function setCurrent(arg0) {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (1 === ArrayResult.length) {
            const setCurrent$esjava$1 = self.setCurrent$esjava$1;
            let applyResult = setCurrent$esjava$1.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(SnowballProgram.prototype), "setCurrent", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[17] = {
        key: "getCurrent",
        value: function getCurrent() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const getCurrent$esjava$0 = self.getCurrent$esjava$0;
            let applyResult = getCurrent$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(SnowballProgram.prototype), "getCurrent", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[18] = {
        key: "in_grouping",
        value: function in_grouping() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (3 === ArrayResult.length) {
            const in_grouping$esjava$3 = self.in_grouping$esjava$3;
            let applyResult = in_grouping$esjava$3.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(SnowballProgram.prototype), "in_grouping", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[19] = {
        key: "in_grouping_b",
        value: function in_grouping_b() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (3 === ArrayResult.length) {
            const in_grouping_b$esjava$3 = self.in_grouping_b$esjava$3;
            let applyResult = in_grouping_b$esjava$3.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(SnowballProgram.prototype), "in_grouping_b", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[20] = {
        key: "out_grouping",
        value: function out_grouping() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (3 === ArrayResult.length) {
            const out_grouping$esjava$3 = self.out_grouping$esjava$3;
            let applyResult = out_grouping$esjava$3.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(SnowballProgram.prototype), "out_grouping", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[21] = {
        key: "out_grouping_b",
        value: function out_grouping_b() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (3 === ArrayResult.length) {
            const out_grouping_b$esjava$3 = self.out_grouping_b$esjava$3;
            let applyResult = out_grouping_b$esjava$3.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(SnowballProgram.prototype), "out_grouping_b", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[22] = {
        key: "eq_s",
        value: function eq_s() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (1 === ArrayResult.length) {
            const eq_s$esjava$1 = self.eq_s$esjava$1;
            let applyResult = eq_s$esjava$1.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(SnowballProgram.prototype), "eq_s", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[23] = {
        key: "eq_s_b",
        value: function eq_s_b() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (1 === ArrayResult.length) {
            const eq_s_b$esjava$1 = self.eq_s_b$esjava$1;
            let applyResult = eq_s_b$esjava$1.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(SnowballProgram.prototype), "eq_s_b", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[24] = {
        key: "find_among",
        value: function find_among() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (1 === ArrayResult.length) {
            const find_among$esjava$1 = self.find_among$esjava$1;
            let applyResult = find_among$esjava$1.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(SnowballProgram.prototype), "find_among", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[25] = {
        key: "find_among_b",
        value: function find_among_b() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (1 === ArrayResult.length) {
            const find_among_b$esjava$1 = self.find_among_b$esjava$1;
            let applyResult = find_among_b$esjava$1.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(SnowballProgram.prototype), "find_among_b", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[26] = {
        key: "replace_s",
        value: function replace_s() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (3 === ArrayResult.length) {
            const replace_s$esjava$3 = self.replace_s$esjava$3;
            let applyResult = replace_s$esjava$3.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(SnowballProgram.prototype), "replace_s", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[27] = {
        key: "slice_check",
        value: function slice_check() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const slice_check$esjava$0 = self.slice_check$esjava$0;
            let applyResult = slice_check$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(SnowballProgram.prototype), "slice_check", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[28] = {
        key: "slice_from",
        value: function slice_from() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (1 === ArrayResult.length) {
            const slice_from$esjava$1 = self.slice_from$esjava$1;
            let applyResult = slice_from$esjava$1.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(SnowballProgram.prototype), "slice_from", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[29] = {
        key: "slice_del",
        value: function slice_del() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const slice_del$esjava$0 = self.slice_del$esjava$0;
            let applyResult = slice_del$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(SnowballProgram.prototype), "slice_del", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[30] = {
        key: "insert",
        value: function insert() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (3 === ArrayResult.length) {
            const insert$esjava$3 = self.insert$esjava$3;
            let applyResult = insert$esjava$3.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(SnowballProgram.prototype), "insert", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[31] = {
        key: "slice_to",
        value: function slice_to() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (1 === ArrayResult.length) {
            const slice_to$esjava$1 = self.slice_to$esjava$1;
            let applyResult = slice_to$esjava$1.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(SnowballProgram.prototype), "slice_to", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[32] = {
        key: "current",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$current")) {
            let prop = self._$esjava$current;
          } else {
            prop = null;
            self._$esjava$current = null;
          }
          return prop;
        },
        set(_$esjava$current) {
          this._$esjava$current = _$esjava$current;
        }
      };
      items[33] = {
        key: "cursor",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$cursor")) {
            let num = self._$esjava$cursor;
          } else {
            num = 0;
            self._$esjava$cursor = 0;
          }
          return num;
        },
        set(_$esjava$cursor) {
          this._$esjava$cursor = _$esjava$cursor;
        }
      };
      items[34] = {
        key: "limit",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$limit")) {
            let num = self._$esjava$limit;
          } else {
            num = 0;
            self._$esjava$limit = 0;
          }
          return num;
        },
        set(_$esjava$limit) {
          this._$esjava$limit = _$esjava$limit;
        }
      };
      items[35] = {
        key: "limit_backward",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$limit_backward")) {
            let num = self._$esjava$limit_backward;
          } else {
            num = 0;
            self._$esjava$limit_backward = 0;
          }
          return num;
        },
        set(_$esjava$limit_backward) {
          this._$esjava$limit_backward = _$esjava$limit_backward;
        }
      };
      items[36] = {
        key: "bra",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$bra")) {
            let num = self._$esjava$bra;
          } else {
            num = 0;
            self._$esjava$bra = 0;
          }
          return num;
        },
        set(_$esjava$bra) {
          this._$esjava$bra = _$esjava$bra;
        }
      };
      items[37] = {
        key: "ket",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$ket")) {
            let num = self._$esjava$ket;
          } else {
            num = 0;
            self._$esjava$ket = 0;
          }
          return num;
        },
        set(_$esjava$ket) {
          this._$esjava$ket = _$esjava$ket;
        }
      };
      callback(SnowballProgram, items);
      return SnowballProgram;
    }());
    let closure_5 = (arg0) => {
      function arabicStemmer() {
        callback3(this, arabicStemmer);
        const prototypeOf = Object.getPrototypeOf(arabicStemmer);
        return callback2(this, prototypeOf(...arguments));
      }
      const callback = arabicStemmer;
      _inherits(arabicStemmer, arg0);
      let obj = {
        key: "r_Normalize_pre$esjava$0",
        value: function r_Normalize_pre$esjava$0() {
          const self = this;
          const current = this.current;
          let lengthResult = current.length();
          if (lengthResult > 0) {
            while (true) {
              self.bra = self.cursor;
              let tmp2 = arabicStemmer;
              if (0 === self.find_among$esjava$1(arabicStemmer.a_0)) {
                self.cursor = self.cursor;
                if (self.cursor >= self.limit) {
                  break;
                } else {
                  self.cursor = self.cursor + 1;
                }
              } else {
                let result = self.slice_from$esjava$1("\u0644\u0622");
              }
              do {
                lengthResult = lengthResult - 1;
              } while (lengthResult <= 0);
            }
            return false;
          }
          return true;
        }
      };
      const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , ];
      obj = {
        key: "r_Normalize_post$esjava$0",
        value: function r_Normalize_post$esjava$0() {
          const self = this;
          ({ cursor: this.limit_backward, limit: this.cursor, cursor: this.ket } = this);
          const result = this.find_among_b$esjava$1(arabicStemmer.a_1);
          if (0 !== result) {
            self.bra = self.cursor;
            if (0 !== result) {
              if (1 !== result) {
                self.cursor = self.limit_backward;
              }
              const result1 = self.slice_from$esjava$1("\u0621");
            }
          }
          self.cursor = this.cursor;
          let I_word_len = self.I_word_len;
          if (I_word_len > 0) {
            while (true) {
              self.bra = self.cursor;
              let tmp3 = arabicStemmer;
              let result2 = self.find_among$esjava$1(arabicStemmer.a_2);
              if (0 !== result2) {
                self.ket = self.cursor;
                if (0 !== result2) {
                  if (1 === result2) {
                    let result3 = self.slice_from$esjava$1("\u0627");
                  } else if (2 === result2) {
                    let result4 = self.slice_from$esjava$1("\u0648");
                  } else if (3 === result2) {
                    let result5 = self.slice_from$esjava$1("\u064A");
                  }
                }
                I_word_len = I_word_len - 1;
                if (I_word_len <= 0) {
                  break;
                }
              }
              self.cursor = self.cursor;
              if (self.cursor >= self.limit) {
                break;
              } else {
                self.cursor = self.cursor + 1;
              }
            }
          }
          self.cursor = self.cursor;
          return true;
        }
      };
      items[1] = obj;
      obj = {
        key: "r_Checks1$esjava$0",
        value: function r_Checks1$esjava$0() {
          const self = this;
          const current = this.current;
          this.I_word_len = current.length();
          this.bra = this.cursor;
          const result = this.find_among$esjava$1(arabicStemmer.a_3);
          if (0 === result) {
            return false;
          } else {
            self.ket = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.I_word_len > 4) {
                  self.B_is_noun = true;
                  self.B_is_verb = false;
                  self.B_is_defined = true;
                } else {
                  return false;
                }
              } else if (2 === result) {
                if (self.I_word_len > 3) {
                  self.B_is_noun = true;
                  self.B_is_verb = false;
                  self.B_is_defined = true;
                } else {
                  return false;
                }
              }
              return true;
            }
          }
        }
      };
      items[2] = obj;
      items[3] = {
        key: "r_Prefix_Step1$esjava$0",
        value: function r_Prefix_Step1$esjava$0() {
          const self = this;
          const current = this.current;
          this.I_word_len = current.length();
          this.bra = this.cursor;
          const result = this.find_among$esjava$1(arabicStemmer.a_4);
          if (0 === result) {
            return false;
          } else {
            self.ket = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 !== result) {
                if (3 !== result) {
                  if (2 === result) {
                    if (self.I_word_len > 3) {
                      const result1 = self.slice_from$esjava$1("\u0622");
                    } else {
                      return false;
                    }
                  } else if (4 === result) {
                    if (self.I_word_len > 3) {
                      const result2 = self.slice_from$esjava$1("\u0627");
                    } else {
                      return false;
                    }
                  } else if (5 === result) {
                    if (self.I_word_len > 3) {
                      const result3 = self.slice_from$esjava$1("\u0625");
                    } else {
                      return false;
                    }
                  }
                }
                return true;
              }
              if (self.I_word_len > 3) {
                const result4 = self.slice_from$esjava$1("\u0623");
              } else {
                return false;
              }
            }
          }
        }
      };
      items[4] = {
        key: "r_Prefix_Step2$esjava$0",
        value: function r_Prefix_Step2$esjava$0() {
          const self = this;
          const current = this.current;
          this.I_word_len = current.length();
          if (this.eq_s$esjava$1("\u0641\u0627")) {
            return false;
          } else {
            self.cursor = this.cursor;
            if (self.eq_s$esjava$1("\u0648\u0627")) {
              return false;
            } else {
              self.cursor = self.cursor;
              self.bra = self.cursor;
              const result = self.find_among$esjava$1(arabicStemmer.a_5);
              if (0 === result) {
                return false;
              } else {
                self.ket = self.cursor;
                if (0 === result) {
                  return false;
                } else {
                  if (1 === result) {
                    if (self.I_word_len > 3) {
                      const result1 = self.slice_del$esjava$0();
                    } else {
                      return false;
                    }
                  }
                  return true;
                }
              }
            }
          }
        }
      };
      items[5] = {
        key: "r_Prefix_Step3a_Noun$esjava$0",
        value: function r_Prefix_Step3a_Noun$esjava$0() {
          const self = this;
          const current = this.current;
          this.I_word_len = current.length();
          this.bra = this.cursor;
          const result = this.find_among$esjava$1(arabicStemmer.a_6);
          if (0 === result) {
            return false;
          } else {
            self.ket = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.I_word_len > 5) {
                  const result1 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              } else if (2 === result) {
                if (self.I_word_len > 4) {
                  const result2 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              }
              return true;
            }
          }
        }
      };
      items[6] = {
        key: "r_Prefix_Step3b_Noun$esjava$0",
        value: function r_Prefix_Step3b_Noun$esjava$0() {
          const self = this;
          const current = this.current;
          this.I_word_len = current.length();
          if (this.eq_s$esjava$1("\u0628\u0627")) {
            return false;
          } else {
            self.cursor = this.cursor;
            self.bra = self.cursor;
            const result = self.find_among$esjava$1(arabicStemmer.a_7);
            if (0 === result) {
              return false;
            } else {
              self.ket = self.cursor;
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  if (self.I_word_len > 3) {
                    const result1 = self.slice_del$esjava$0();
                  } else {
                    return false;
                  }
                } else if (2 === result) {
                  if (self.I_word_len > 3) {
                    const result2 = self.slice_from$esjava$1("\u0628");
                  } else {
                    return false;
                  }
                } else if (3 === result) {
                  if (self.I_word_len > 3) {
                    const result3 = self.slice_from$esjava$1("\u0643");
                  } else {
                    return false;
                  }
                }
                return true;
              }
            }
          }
        }
      };
      items[7] = {
        key: "r_Prefix_Step3_Verb$esjava$0",
        value: function r_Prefix_Step3_Verb$esjava$0() {
          const self = this;
          const current = this.current;
          this.I_word_len = current.length();
          this.bra = this.cursor;
          const result = this.find_among$esjava$1(arabicStemmer.a_8);
          if (0 === result) {
            return false;
          } else {
            self.ket = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.I_word_len > 4) {
                  const result1 = self.slice_from$esjava$1("\u064A");
                } else {
                  return false;
                }
              } else if (2 === result) {
                if (self.I_word_len > 4) {
                  const result2 = self.slice_from$esjava$1("\u062A");
                } else {
                  return false;
                }
              } else if (3 === result) {
                if (self.I_word_len > 4) {
                  const result3 = self.slice_from$esjava$1("\u0646");
                } else {
                  return false;
                }
              } else if (4 === result) {
                if (self.I_word_len > 4) {
                  const result4 = self.slice_from$esjava$1("\u0623");
                } else {
                  return false;
                }
              }
              return true;
            }
          }
        }
      };
      items[8] = {
        key: "r_Prefix_Step4_Verb$esjava$0",
        value: function r_Prefix_Step4_Verb$esjava$0() {
          const self = this;
          const current = this.current;
          this.I_word_len = current.length();
          this.bra = this.cursor;
          const result = this.find_among$esjava$1(arabicStemmer.a_9);
          if (0 === result) {
            return false;
          } else {
            self.ket = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.I_word_len > 4) {
                  self.B_is_verb = true;
                  self.B_is_noun = false;
                  const result1 = self.slice_from$esjava$1("\u0627\u0633\u062A");
                } else {
                  return false;
                }
              }
              return true;
            }
          }
        }
      };
      items[9] = {
        key: "r_Suffix_Noun_Step1a$esjava$0",
        value: function r_Suffix_Noun_Step1a$esjava$0() {
          const self = this;
          const current = this.current;
          this.I_word_len = current.length();
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(arabicStemmer.a_10);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.I_word_len >= 4) {
                  const result1 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              } else if (2 === result) {
                if (self.I_word_len >= 5) {
                  const result2 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              } else if (3 === result) {
                if (self.I_word_len >= 6) {
                  const result3 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              }
              return true;
            }
          }
        }
      };
      items[10] = {
        key: "r_Suffix_Noun_Step1b$esjava$0",
        value: function r_Suffix_Noun_Step1b$esjava$0() {
          const self = this;
          const current = this.current;
          this.I_word_len = current.length();
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(arabicStemmer.a_11);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.I_word_len > 5) {
                  const result1 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              }
              return true;
            }
          }
        }
      };
      items[11] = {
        key: "r_Suffix_Noun_Step2a$esjava$0",
        value: function r_Suffix_Noun_Step2a$esjava$0() {
          const self = this;
          const current = this.current;
          this.I_word_len = current.length();
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(arabicStemmer.a_12);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.I_word_len > 4) {
                  const result1 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              }
              return true;
            }
          }
        }
      };
      items[12] = {
        key: "r_Suffix_Noun_Step2b$esjava$0",
        value: function r_Suffix_Noun_Step2b$esjava$0() {
          const self = this;
          const current = this.current;
          this.I_word_len = current.length();
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(arabicStemmer.a_13);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.I_word_len >= 5) {
                  const result1 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              }
              return true;
            }
          }
        }
      };
      items[13] = {
        key: "r_Suffix_Noun_Step2c1$esjava$0",
        value: function r_Suffix_Noun_Step2c1$esjava$0() {
          const self = this;
          const current = this.current;
          this.I_word_len = current.length();
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(arabicStemmer.a_14);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.I_word_len >= 4) {
                  const result1 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              }
              return true;
            }
          }
        }
      };
      items[14] = {
        key: "r_Suffix_Noun_Step2c2$esjava$0",
        value: function r_Suffix_Noun_Step2c2$esjava$0() {
          const self = this;
          const current = this.current;
          this.I_word_len = current.length();
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(arabicStemmer.a_15);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.I_word_len >= 4) {
                  const result1 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              }
              return true;
            }
          }
        }
      };
      items[15] = {
        key: "r_Suffix_Noun_Step3$esjava$0",
        value: function r_Suffix_Noun_Step3$esjava$0() {
          const self = this;
          const current = this.current;
          this.I_word_len = current.length();
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(arabicStemmer.a_16);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.I_word_len >= 3) {
                  const result1 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              }
              return true;
            }
          }
        }
      };
      items[16] = {
        key: "r_Suffix_Verb_Step1$esjava$0",
        value: function r_Suffix_Verb_Step1$esjava$0() {
          const self = this;
          const current = this.current;
          this.I_word_len = current.length();
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(arabicStemmer.a_17);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.I_word_len >= 4) {
                  const result1 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              } else if (2 === result) {
                if (self.I_word_len >= 5) {
                  const result2 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              } else if (3 === result) {
                if (self.I_word_len >= 6) {
                  const result3 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              }
              return true;
            }
          }
        }
      };
      items[17] = {
        key: "r_Suffix_Verb_Step2a$esjava$0",
        value: function r_Suffix_Verb_Step2a$esjava$0() {
          const self = this;
          const current = this.current;
          this.I_word_len = current.length();
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(arabicStemmer.a_18);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 !== result) {
                if (2 !== result) {
                  if (3 === result) {
                    if (self.I_word_len >= 5) {
                      const result1 = self.slice_del$esjava$0();
                    } else {
                      return false;
                    }
                  } else if (4 === result) {
                    if (self.I_word_len > 5) {
                      const result2 = self.slice_del$esjava$0();
                    } else {
                      return false;
                    }
                  } else if (5 === result) {
                    if (self.I_word_len >= 6) {
                      const result3 = self.slice_del$esjava$0();
                    } else {
                      return false;
                    }
                  }
                }
                return true;
              }
              if (self.I_word_len >= 4) {
                const result4 = self.slice_del$esjava$0();
              } else {
                return false;
              }
            }
          }
        }
      };
      items[18] = {
        key: "r_Suffix_Verb_Step2b$esjava$0",
        value: function r_Suffix_Verb_Step2b$esjava$0() {
          const self = this;
          const current = this.current;
          this.I_word_len = current.length();
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(arabicStemmer.a_19);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.I_word_len >= 5) {
                  const result1 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              }
              return true;
            }
          }
        }
      };
      items[19] = {
        key: "r_Suffix_Verb_Step2c$esjava$0",
        value: function r_Suffix_Verb_Step2c$esjava$0() {
          const self = this;
          const current = this.current;
          this.I_word_len = current.length();
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(arabicStemmer.a_20);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.I_word_len >= 4) {
                  const result1 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              } else if (2 === result) {
                if (self.I_word_len >= 6) {
                  const result2 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              }
              return true;
            }
          }
        }
      };
      items[20] = {
        key: "r_Suffix_All_alef_maqsura$esjava$0",
        value: function r_Suffix_All_alef_maqsura$esjava$0() {
          const self = this;
          const current = this.current;
          this.I_word_len = current.length();
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(arabicStemmer.a_21);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                const result1 = self.slice_from$esjava$1("\u064A");
              }
              return true;
            }
          }
        }
      };
      items[21] = {
        key: "stem$esjava$0",
        value: function stem$esjava$0() {
          let cursor;
          let cursor2;
          const self = this;
          this.B_is_noun = true;
          this.B_is_verb = true;
          this.B_is_defined = false;
          const result = this.r_Checks1$esjava$0();
          this.cursor = this.cursor;
          const result1 = this.r_Normalize_pre$esjava$0();
          this.cursor = this.cursor;
          ({ cursor: this.limit_backward, limit: this.cursor } = this);
          const diff = this.limit - this.cursor;
          const diff1 = this.limit - this.cursor;
          if (!this.B_is_verb) {
            self.cursor = self.limit - diff;
            if (!self.B_is_noun) {
              self.cursor = self.limit - diff;
              const result2 = self.r_Suffix_All_alef_maqsura$esjava$0();
            } else {
              const diff2 = self.limit - self.cursor;
              const diff3 = self.limit - self.cursor;
              if (!self.r_Suffix_Noun_Step2c2$esjava$0()) {
                self.cursor = self.limit - diff2;
                if (!self.B_is_defined) {
                  if (self.r_Suffix_Noun_Step1a$esjava$0()) {
                    const diff4 = self.limit - self.cursor;
                    if (!self.r_Suffix_Noun_Step2a$esjava$0()) {
                      self.cursor = self.limit - diff4;
                      if (!self.r_Suffix_Noun_Step2b$esjava$0()) {
                        self.cursor = self.limit - diff4;
                        if (!self.r_Suffix_Noun_Step2c1$esjava$0()) {
                          self.cursor = self.limit - diff4;
                          if (self.cursor > self.limit_backward) {
                            self.cursor = self.cursor - 1;
                          }
                        }
                      }
                    }
                  }
                }
                self.cursor = self.limit - diff2;
                if (!self.r_Suffix_Noun_Step1b$esjava$0()) {
                  self.cursor = self.limit - diff2;
                  if (self.B_is_defined) {
                    self.cursor = self.limit - diff2;
                    if (!self.r_Suffix_Noun_Step2b$esjava$0()) {
                      self.cursor = self.limit - diff3;
                    }
                  }
                } else {
                  const diff5 = self.limit - self.cursor;
                  if (!self.r_Suffix_Noun_Step2a$esjava$0()) {
                    self.cursor = self.limit - diff5;
                    if (!self.r_Suffix_Noun_Step2b$esjava$0()) {
                      self.cursor = self.limit - diff5;
                    }
                  }
                }
              }
            }
          } else {
            const diff6 = self.limit - self.cursor;
            let num = 1;
            const diff7 = self.limit - self.cursor;
            while (self.r_Suffix_Verb_Step1$esjava$0()) {
              num = num - 1;
              // continue
            }
            self.cursor = self.limit - diff7;
            if (num > 0) {
              self.cursor = self.limit - diff6;
              if (!self.r_Suffix_Verb_Step2b$esjava$0()) {
                self.cursor = self.limit - diff6;
              }
            } else {
              const diff8 = self.limit - self.cursor;
              if (!self.r_Suffix_Verb_Step2a$esjava$0()) {
                self.cursor = self.limit - diff8;
                if (!self.r_Suffix_Verb_Step2c$esjava$0()) {
                  self.cursor = self.limit - diff8;
                  if (self.cursor > self.limit_backward) {
                    self.cursor = self.cursor - 1;
                  }
                }
              }
            }
          }
          self.cursor = self.limit - diff1;
          ({ limit_backward: self.cursor, cursor, cursor: cursor2 } = self);
          if (!self.r_Prefix_Step1$esjava$0()) {
            self.cursor = cursor2;
          }
          if (!self.r_Prefix_Step2$esjava$0()) {
            self.cursor = self.cursor;
          }
          const cursor3 = self.cursor;
          if (!self.r_Prefix_Step3a_Noun$esjava$0()) {
            self.cursor = cursor3;
            if (!self.B_is_noun) {
              self.cursor = cursor3;
              if (self.B_is_verb) {
                if (!self.r_Prefix_Step3_Verb$esjava$0()) {
                  self.cursor = self.cursor;
                }
                const result3 = self.r_Prefix_Step4_Verb$esjava$0();
              }
            }
          }
          self.cursor = cursor;
          const result4 = self.r_Normalize_post$esjava$0();
          self.cursor = self.cursor;
          return true;
        }
      };
      items[22] = {
        key: "stem",
        value: function stem() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const stem$esjava$0 = self.stem$esjava$0;
            let applyResult = stem$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(arabicStemmer.prototype), "stem", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[23] = {
        key: "B_is_defined",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$B_is_defined")) {
            let flag = self._$esjava$B_is_defined;
          } else {
            flag = false;
            self._$esjava$B_is_defined = false;
          }
          return flag;
        },
        set(_$esjava$B_is_defined) {
          this._$esjava$B_is_defined = _$esjava$B_is_defined;
        }
      };
      items[24] = {
        key: "B_is_verb",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$B_is_verb")) {
            let flag = self._$esjava$B_is_verb;
          } else {
            flag = false;
            self._$esjava$B_is_verb = false;
          }
          return flag;
        },
        set(_$esjava$B_is_verb) {
          this._$esjava$B_is_verb = _$esjava$B_is_verb;
        }
      };
      items[25] = {
        key: "B_is_noun",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$B_is_noun")) {
            let flag = self._$esjava$B_is_noun;
          } else {
            flag = false;
            self._$esjava$B_is_noun = false;
          }
          return flag;
        },
        set(_$esjava$B_is_noun) {
          this._$esjava$B_is_noun = _$esjava$B_is_noun;
        }
      };
      items[26] = {
        key: "I_word_len",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_word_len")) {
            let num = self._$esjava$I_word_len;
          } else {
            num = 0;
            self._$esjava$I_word_len = 0;
          }
          return num;
        },
        set(_$esjava$I_word_len) {
          this._$esjava$I_word_len = _$esjava$I_word_len;
        }
      };
      const items1 = [
        {
          key: "a_0",
          get() {
            delete r1.a_0;
            let tmp = new closure_4("!", -1, 3);
            const items = [tmp, new closure_4("\"", -1, 3), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp2 = new closure_4("\"", -1, 3);
            items[2] = new closure_4("%", -1, 3);
            const tmp3 = new closure_4("%", -1, 3);
            items[3] = new closure_4("*", -1, 3);
            const tmp4 = new closure_4("*", -1, 3);
            items[4] = new closure_4(",", -1, 3);
            const tmp5 = new closure_4(",", -1, 3);
            items[5] = new closure_4(".", -1, 3);
            const tmp6 = new closure_4(".", -1, 3);
            items[6] = new closure_4("/", -1, 3);
            const tmp7 = new closure_4("/", -1, 3);
            items[7] = new closure_4(":", -1, 3);
            const tmp8 = new closure_4(":", -1, 3);
            items[8] = new closure_4(";", -1, 3);
            const tmp9 = new closure_4(";", -1, 3);
            items[9] = new closure_4("?", -1, 3);
            const tmp10 = new closure_4("?", -1, 3);
            items[10] = new closure_4("\\", -1, 3);
            const tmp11 = new closure_4("\\", -1, 3);
            items[11] = new closure_4("\u060C", -1, 4);
            const tmp12 = new closure_4("\u060C", -1, 4);
            items[12] = new closure_4("\u061B", -1, 4);
            const tmp13 = new closure_4("\u061B", -1, 4);
            items[13] = new closure_4("\u061F", -1, 4);
            const tmp14 = new closure_4("\u061F", -1, 4);
            items[14] = new closure_4("\u0640", -1, 2);
            const tmp15 = new closure_4("\u0640", -1, 2);
            items[15] = new closure_4("\u064B", -1, 1);
            const tmp16 = new closure_4("\u064B", -1, 1);
            items[16] = new closure_4("\u064C", -1, 1);
            const tmp17 = new closure_4("\u064C", -1, 1);
            items[17] = new closure_4("\u064D", -1, 1);
            const tmp18 = new closure_4("\u064D", -1, 1);
            items[18] = new closure_4("\u064E", -1, 1);
            const tmp19 = new closure_4("\u064E", -1, 1);
            items[19] = new closure_4("\u064F", -1, 1);
            const tmp20 = new closure_4("\u064F", -1, 1);
            items[20] = new closure_4("\u0650", -1, 1);
            const tmp21 = new closure_4("\u0650", -1, 1);
            items[21] = new closure_4("\u0651", -1, 1);
            const tmp22 = new closure_4("\u0651", -1, 1);
            items[22] = new closure_4("\u0652", -1, 1);
            const tmp23 = new closure_4("\u0652", -1, 1);
            items[23] = new closure_4("\u0660", -1, 5);
            const tmp24 = new closure_4("\u0660", -1, 5);
            items[24] = new closure_4("\u0661", -1, 6);
            const tmp25 = new closure_4("\u0661", -1, 6);
            items[25] = new closure_4("\u0662", -1, 7);
            const tmp26 = new closure_4("\u0662", -1, 7);
            items[26] = new closure_4("\u0663", -1, 8);
            const tmp27 = new closure_4("\u0663", -1, 8);
            items[27] = new closure_4("\u0664", -1, 9);
            const tmp28 = new closure_4("\u0664", -1, 9);
            items[28] = new closure_4("\u0665", -1, 10);
            const tmp29 = new closure_4("\u0665", -1, 10);
            items[29] = new closure_4("\u0666", -1, 11);
            const tmp30 = new closure_4("\u0666", -1, 11);
            items[30] = new closure_4("\u0667", -1, 12);
            const tmp31 = new closure_4("\u0667", -1, 12);
            items[31] = new closure_4("\u0668", -1, 13);
            const tmp32 = new closure_4("\u0668", -1, 13);
            items[32] = new closure_4("\u0669", -1, 14);
            const tmp33 = new closure_4("\u0669", -1, 14);
            items[33] = new closure_4("\u066A", -1, 15);
            const tmp34 = new closure_4("\u066A", -1, 15);
            items[34] = new closure_4("\u066B", -1, 15);
            const tmp35 = new closure_4("\u066B", -1, 15);
            items[35] = new closure_4("\u066C", -1, 15);
            const tmp36 = new closure_4("\u066C", -1, 15);
            items[36] = new closure_4("\uFE80", -1, 16);
            const tmp37 = new closure_4("\uFE80", -1, 16);
            items[37] = new closure_4("\uFE81", -1, 20);
            const tmp38 = new closure_4("\uFE81", -1, 20);
            items[38] = new closure_4("\uFE82", -1, 20);
            const tmp39 = new closure_4("\uFE82", -1, 20);
            items[39] = new closure_4("\uFE83", -1, 17);
            const tmp40 = new closure_4("\uFE83", -1, 17);
            items[40] = new closure_4("\uFE84", -1, 17);
            const tmp41 = new closure_4("\uFE84", -1, 17);
            items[41] = new closure_4("\uFE85", -1, 21);
            const tmp42 = new closure_4("\uFE85", -1, 21);
            items[42] = new closure_4("\uFE86", -1, 21);
            const tmp43 = new closure_4("\uFE86", -1, 21);
            items[43] = new closure_4("\uFE87", -1, 18);
            const tmp44 = new closure_4("\uFE87", -1, 18);
            items[44] = new closure_4("\uFE88", -1, 18);
            const tmp45 = new closure_4("\uFE88", -1, 18);
            items[45] = new closure_4("\uFE89", -1, 19);
            const tmp46 = new closure_4("\uFE89", -1, 19);
            items[46] = new closure_4("\uFE8A", -1, 19);
            const tmp47 = new closure_4("\uFE8A", -1, 19);
            items[47] = new closure_4("\uFE8B", -1, 19);
            const tmp48 = new closure_4("\uFE8B", -1, 19);
            items[48] = new closure_4("\uFE8C", -1, 19);
            const tmp49 = new closure_4("\uFE8C", -1, 19);
            items[49] = new closure_4("\uFE8D", -1, 22);
            const tmp50 = new closure_4("\uFE8D", -1, 22);
            items[50] = new closure_4("\uFE8E", -1, 22);
            const tmp51 = new closure_4("\uFE8E", -1, 22);
            items[51] = new closure_4("\uFE8F", -1, 23);
            const tmp52 = new closure_4("\uFE8F", -1, 23);
            items[52] = new closure_4("\uFE90", -1, 23);
            const tmp53 = new closure_4("\uFE90", -1, 23);
            items[53] = new closure_4("\uFE91", -1, 23);
            const tmp54 = new closure_4("\uFE91", -1, 23);
            items[54] = new closure_4("\uFE92", -1, 23);
            const tmp55 = new closure_4("\uFE92", -1, 23);
            items[55] = new closure_4("\uFE93", -1, 24);
            const tmp56 = new closure_4("\uFE93", -1, 24);
            items[56] = new closure_4("\uFE94", -1, 24);
            const tmp57 = new closure_4("\uFE94", -1, 24);
            items[57] = new closure_4("\uFE95", -1, 25);
            const tmp58 = new closure_4("\uFE95", -1, 25);
            items[58] = new closure_4("\uFE96", -1, 25);
            const tmp59 = new closure_4("\uFE96", -1, 25);
            items[59] = new closure_4("\uFE97", -1, 25);
            const tmp60 = new closure_4("\uFE97", -1, 25);
            items[60] = new closure_4("\uFE98", -1, 25);
            const tmp61 = new closure_4("\uFE98", -1, 25);
            items[61] = new closure_4("\uFE99", -1, 26);
            const tmp62 = new closure_4("\uFE99", -1, 26);
            items[62] = new closure_4("\uFE9A", -1, 26);
            const tmp63 = new closure_4("\uFE9A", -1, 26);
            items[63] = new closure_4("\uFE9B", -1, 26);
            const tmp64 = new closure_4("\uFE9B", -1, 26);
            items[64] = new closure_4("\uFE9C", -1, 26);
            const tmp65 = new closure_4("\uFE9C", -1, 26);
            items[65] = new closure_4("\uFE9D", -1, 27);
            const tmp66 = new closure_4("\uFE9D", -1, 27);
            items[66] = new closure_4("\uFE9E", -1, 27);
            const tmp67 = new closure_4("\uFE9E", -1, 27);
            items[67] = new closure_4("\uFE9F", -1, 27);
            const tmp68 = new closure_4("\uFE9F", -1, 27);
            items[68] = new closure_4("\uFEA0", -1, 27);
            const tmp69 = new closure_4("\uFEA0", -1, 27);
            items[69] = new closure_4("\uFEA1", -1, 28);
            const tmp70 = new closure_4("\uFEA1", -1, 28);
            items[70] = new closure_4("\uFEA2", -1, 28);
            const tmp71 = new closure_4("\uFEA2", -1, 28);
            items[71] = new closure_4("\uFEA3", -1, 28);
            const tmp72 = new closure_4("\uFEA3", -1, 28);
            items[72] = new closure_4("\uFEA4", -1, 28);
            const tmp73 = new closure_4("\uFEA4", -1, 28);
            items[73] = new closure_4("\uFEA5", -1, 29);
            const tmp74 = new closure_4("\uFEA5", -1, 29);
            items[74] = new closure_4("\uFEA6", -1, 29);
            const tmp75 = new closure_4("\uFEA6", -1, 29);
            items[75] = new closure_4("\uFEA7", -1, 29);
            const tmp76 = new closure_4("\uFEA7", -1, 29);
            items[76] = new closure_4("\uFEA8", -1, 29);
            const tmp77 = new closure_4("\uFEA8", -1, 29);
            items[77] = new closure_4("\uFEA9", -1, 30);
            const tmp78 = new closure_4("\uFEA9", -1, 30);
            items[78] = new closure_4("\uFEAA", -1, 30);
            const tmp79 = new closure_4("\uFEAA", -1, 30);
            items[79] = new closure_4("\uFEAB", -1, 31);
            const tmp80 = new closure_4("\uFEAB", -1, 31);
            items[80] = new closure_4("\uFEAC", -1, 31);
            const tmp81 = new closure_4("\uFEAC", -1, 31);
            items[81] = new closure_4("\uFEAD", -1, 32);
            const tmp82 = new closure_4("\uFEAD", -1, 32);
            items[82] = new closure_4("\uFEAE", -1, 32);
            const tmp83 = new closure_4("\uFEAE", -1, 32);
            items[83] = new closure_4("\uFEAF", -1, 33);
            const tmp84 = new closure_4("\uFEAF", -1, 33);
            items[84] = new closure_4("\uFEB0", -1, 33);
            const tmp85 = new closure_4("\uFEB0", -1, 33);
            items[85] = new closure_4("\uFEB1", -1, 34);
            const tmp86 = new closure_4("\uFEB1", -1, 34);
            items[86] = new closure_4("\uFEB2", -1, 34);
            const tmp87 = new closure_4("\uFEB2", -1, 34);
            items[87] = new closure_4("\uFEB3", -1, 34);
            const tmp88 = new closure_4("\uFEB3", -1, 34);
            items[88] = new closure_4("\uFEB4", -1, 34);
            const tmp89 = new closure_4("\uFEB4", -1, 34);
            items[89] = new closure_4("\uFEB5", -1, 35);
            const tmp90 = new closure_4("\uFEB5", -1, 35);
            items[90] = new closure_4("\uFEB6", -1, 35);
            const tmp91 = new closure_4("\uFEB6", -1, 35);
            items[91] = new closure_4("\uFEB7", -1, 35);
            const tmp92 = new closure_4("\uFEB7", -1, 35);
            items[92] = new closure_4("\uFEB8", -1, 35);
            const tmp93 = new closure_4("\uFEB8", -1, 35);
            items[93] = new closure_4("\uFEB9", -1, 36);
            const tmp94 = new closure_4("\uFEB9", -1, 36);
            items[94] = new closure_4("\uFEBA", -1, 36);
            const tmp95 = new closure_4("\uFEBA", -1, 36);
            items[95] = new closure_4("\uFEBB", -1, 36);
            const tmp96 = new closure_4("\uFEBB", -1, 36);
            items[96] = new closure_4("\uFEBC", -1, 36);
            const tmp97 = new closure_4("\uFEBC", -1, 36);
            items[97] = new closure_4("\uFEBD", -1, 37);
            const tmp98 = new closure_4("\uFEBD", -1, 37);
            items[98] = new closure_4("\uFEBE", -1, 37);
            tmp = new closure_4("\uFEBF", -1, 37);
            items[99] = tmp;
            tmp = new closure_4("\uFEC0", -1, 37);
            items[100] = tmp;
            tmp = new closure_4("\uFEC1", -1, 38);
            items[101] = tmp;
            tmp = new closure_4("\uFEC2", -1, 38);
            items[102] = tmp;
            tmp = new closure_4("\uFEC3", -1, 38);
            items[103] = tmp;
            tmp = new closure_4("\uFEC4", -1, 38);
            items[104] = tmp;
            tmp = new closure_4("\uFEC5", -1, 39);
            items[105] = tmp;
            tmp = new closure_4("\uFEC6", -1, 39);
            items[106] = tmp;
            tmp = new closure_4("\uFEC7", -1, 39);
            items[107] = tmp;
            tmp = new closure_4("\uFEC8", -1, 39);
            items[108] = tmp;
            tmp = new closure_4("\uFEC9", -1, 40);
            items[109] = tmp;
            tmp = new closure_4("\uFECA", -1, 40);
            items[110] = tmp;
            tmp = new closure_4("\uFECB", -1, 40);
            items[111] = tmp;
            tmp = new closure_4("\uFECC", -1, 40);
            items[112] = tmp;
            tmp = new closure_4("\uFECD", -1, 41);
            items[113] = tmp;
            tmp = new closure_4("\uFECE", -1, 41);
            items[114] = tmp;
            tmp = new closure_4("\uFECF", -1, 41);
            items[115] = tmp;
            tmp = new closure_4("\uFED0", -1, 41);
            items[116] = tmp;
            tmp = new closure_4("\uFED1", -1, 42);
            items[117] = tmp;
            tmp = new closure_4("\uFED2", -1, 42);
            items[118] = tmp;
            tmp = new closure_4("\uFED3", -1, 42);
            items[119] = tmp;
            tmp = new closure_4("\uFED4", -1, 42);
            items[120] = tmp;
            tmp = new closure_4("\uFED5", -1, 43);
            items[121] = tmp;
            tmp = new closure_4("\uFED6", -1, 43);
            items[122] = tmp;
            tmp = new closure_4("\uFED7", -1, 43);
            items[123] = tmp;
            tmp = new closure_4("\uFED8", -1, 43);
            items[124] = tmp;
            tmp = new closure_4("\uFED9", -1, 44);
            items[125] = tmp;
            tmp = new closure_4("\uFEDA", -1, 44);
            items[126] = tmp;
            tmp = new closure_4("\uFEDB", -1, 44);
            items[127] = tmp;
            tmp = new closure_4("\uFEDC", -1, 44);
            items[128] = tmp;
            tmp = new closure_4("\uFEDD", -1, 45);
            items[129] = tmp;
            tmp = new closure_4("\uFEDE", -1, 45);
            items[130] = tmp;
            tmp = new closure_4("\uFEDF", -1, 45);
            items[131] = tmp;
            tmp = new closure_4("\uFEE0", -1, 45);
            items[132] = tmp;
            tmp = new closure_4("\uFEE1", -1, 46);
            items[133] = tmp;
            tmp = new closure_4("\uFEE2", -1, 46);
            items[134] = tmp;
            tmp = new closure_4("\uFEE3", -1, 46);
            items[135] = tmp;
            tmp = new closure_4("\uFEE4", -1, 46);
            items[136] = tmp;
            tmp = new closure_4("\uFEE5", -1, 47);
            items[137] = tmp;
            tmp = new closure_4("\uFEE6", -1, 47);
            items[138] = tmp;
            tmp = new closure_4("\uFEE7", -1, 47);
            items[139] = tmp;
            tmp = new closure_4("\uFEE8", -1, 47);
            items[140] = tmp;
            tmp = new closure_4("\uFEE9", -1, 48);
            items[141] = tmp;
            tmp = new closure_4("\uFEEA", -1, 48);
            items[142] = tmp;
            tmp = new closure_4("\uFEEB", -1, 48);
            items[143] = tmp;
            tmp = new closure_4("\uFEEC", -1, 48);
            items[144] = tmp;
            tmp = new closure_4("\uFEED", -1, 49);
            items[145] = tmp;
            tmp = new closure_4("\uFEEE", -1, 49);
            items[146] = tmp;
            tmp = new closure_4("\uFEEF", -1, 50);
            items[147] = tmp;
            tmp = new closure_4("\uFEF0", -1, 50);
            items[148] = tmp;
            tmp = new closure_4("\uFEF1", -1, 51);
            items[149] = tmp;
            tmp = new closure_4("\uFEF2", -1, 51);
            items[150] = tmp;
            tmp = new closure_4("\uFEF3", -1, 51);
            items[151] = tmp;
            tmp = new closure_4("\uFEF4", -1, 51);
            items[152] = tmp;
            tmp = new closure_4("\uFEF5", -1, 55);
            items[153] = tmp;
            tmp = new closure_4("\uFEF6", -1, 55);
            items[154] = tmp;
            tmp = new closure_4("\uFEF7", -1, 53);
            items[155] = tmp;
            tmp = new closure_4("\uFEF8", -1, 53);
            items[156] = tmp;
            tmp = new closure_4("\uFEF9", -1, 54);
            items[157] = tmp;
            tmp = new closure_4("\uFEFA", -1, 54);
            items[158] = tmp;
            tmp = new closure_4("\uFEFB", -1, 52);
            items[159] = tmp;
            tmp = new closure_4("\uFEFC", -1, 52);
            items[160] = tmp;
            arabicStemmer.a_0 = items;
            return items;
          }
        },
        {
          key: "a_1",
          get() {
            delete r1.a_1;
            const items = [new closure_4("\u0622", -1, 1), , , , ];
            const tmp = new closure_4("\u0622", -1, 1);
            items[1] = new closure_4("\u0623", -1, 1);
            const tmp2 = new closure_4("\u0623", -1, 1);
            items[2] = new closure_4("\u0624", -1, 2);
            const tmp3 = new closure_4("\u0624", -1, 2);
            items[3] = new closure_4("\u0625", -1, 1);
            const tmp4 = new closure_4("\u0625", -1, 1);
            items[4] = new closure_4("\u0626", -1, 3);
            arabicStemmer.a_1 = items;
            return items;
          }
        },
        {
          key: "a_2",
          get() {
            delete r1.a_2;
            const items = [new closure_4("\u0622", -1, 1), , , , ];
            const tmp = new closure_4("\u0622", -1, 1);
            items[1] = new closure_4("\u0623", -1, 1);
            const tmp2 = new closure_4("\u0623", -1, 1);
            items[2] = new closure_4("\u0624", -1, 2);
            const tmp3 = new closure_4("\u0624", -1, 2);
            items[3] = new closure_4("\u0625", -1, 1);
            const tmp4 = new closure_4("\u0625", -1, 1);
            items[4] = new closure_4("\u0626", -1, 3);
            arabicStemmer.a_2 = items;
            return items;
          }
        },
        {
          key: "a_3",
          get() {
            delete r1.a_3;
            const items = [new closure_4("\u0627\u0644", -1, 2), , , ];
            const tmp = new closure_4("\u0627\u0644", -1, 2);
            items[1] = new closure_4("\u0628\u0627\u0644", -1, 1);
            const tmp2 = new closure_4("\u0628\u0627\u0644", -1, 1);
            items[2] = new closure_4("\u0643\u0627\u0644", -1, 1);
            const tmp3 = new closure_4("\u0643\u0627\u0644", -1, 1);
            items[3] = new closure_4("\u0644\u0644", -1, 2);
            arabicStemmer.a_3 = items;
            return items;
          }
        },
        {
          key: "a_4",
          get() {
            delete r1.a_4;
            const items = [new closure_4("\u0623\u0622", -1, 2), , , , ];
            const tmp = new closure_4("\u0623\u0622", -1, 2);
            items[1] = new closure_4("\u0623\u0623", -1, 1);
            const tmp2 = new closure_4("\u0623\u0623", -1, 1);
            items[2] = new closure_4("\u0623\u0624", -1, 3);
            const tmp3 = new closure_4("\u0623\u0624", -1, 3);
            items[3] = new closure_4("\u0623\u0625", -1, 5);
            const tmp4 = new closure_4("\u0623\u0625", -1, 5);
            items[4] = new closure_4("\u0623\u0627", -1, 4);
            arabicStemmer.a_4 = items;
            return items;
          }
        },
        {
          key: "a_5",
          get() {
            delete r1.a_5;
            const items = [new closure_4("\u0641", -1, 1), ];
            const tmp = new closure_4("\u0641", -1, 1);
            items[1] = new closure_4("\u0648", -1, 2);
            arabicStemmer.a_5 = items;
            return items;
          }
        },
        {
          key: "a_6",
          get() {
            delete r1.a_6;
            const items = [new closure_4("\u0627\u0644", -1, 2), , , ];
            const tmp = new closure_4("\u0627\u0644", -1, 2);
            items[1] = new closure_4("\u0628\u0627\u0644", -1, 1);
            const tmp2 = new closure_4("\u0628\u0627\u0644", -1, 1);
            items[2] = new closure_4("\u0643\u0627\u0644", -1, 1);
            const tmp3 = new closure_4("\u0643\u0627\u0644", -1, 1);
            items[3] = new closure_4("\u0644\u0644", -1, 2);
            arabicStemmer.a_6 = items;
            return items;
          }
        },
        {
          key: "a_7",
          get() {
            delete r1.a_7;
            const items = [new closure_4("\u0628", -1, 1), , ];
            const tmp = new closure_4("\u0628", -1, 1);
            items[1] = new closure_4("\u0628\u0628", 0, 2);
            const tmp2 = new closure_4("\u0628\u0628", 0, 2);
            items[2] = new closure_4("\u0643\u0643", -1, 3);
            arabicStemmer.a_7 = items;
            return items;
          }
        },
        {
          key: "a_8",
          get() {
            delete r1.a_8;
            const items = [new closure_4("\u0633\u0623", -1, 4), , , ];
            const tmp = new closure_4("\u0633\u0623", -1, 4);
            items[1] = new closure_4("\u0633\u062A", -1, 2);
            const tmp2 = new closure_4("\u0633\u062A", -1, 2);
            items[2] = new closure_4("\u0633\u0646", -1, 3);
            const tmp3 = new closure_4("\u0633\u0646", -1, 3);
            items[3] = new closure_4("\u0633\u064A", -1, 1);
            arabicStemmer.a_8 = items;
            return items;
          }
        },
        {
          key: "a_9",
          get() {
            delete r1.a_9;
            const items = [new closure_4("\u062A\u0633\u062A", -1, 1), , ];
            const tmp = new closure_4("\u062A\u0633\u062A", -1, 1);
            items[1] = new closure_4("\u0646\u0633\u062A", -1, 1);
            const tmp2 = new closure_4("\u0646\u0633\u062A", -1, 1);
            items[2] = new closure_4("\u064A\u0633\u062A", -1, 1);
            arabicStemmer.a_9 = items;
            return items;
          }
        },
        {
          key: "a_10",
          get() {
            delete r1.a_10;
            const items = [new closure_4("\u0643\u0645\u0627", -1, 3), , , , , , , , , ];
            const tmp = new closure_4("\u0643\u0645\u0627", -1, 3);
            items[1] = new closure_4("\u0647\u0645\u0627", -1, 3);
            const tmp2 = new closure_4("\u0647\u0645\u0627", -1, 3);
            items[2] = new closure_4("\u0646\u0627", -1, 2);
            const tmp3 = new closure_4("\u0646\u0627", -1, 2);
            items[3] = new closure_4("\u0647\u0627", -1, 2);
            const tmp4 = new closure_4("\u0647\u0627", -1, 2);
            items[4] = new closure_4("\u0643", -1, 1);
            const tmp5 = new closure_4("\u0643", -1, 1);
            items[5] = new closure_4("\u0643\u0645", -1, 2);
            const tmp6 = new closure_4("\u0643\u0645", -1, 2);
            items[6] = new closure_4("\u0647\u0645", -1, 2);
            const tmp7 = new closure_4("\u0647\u0645", -1, 2);
            items[7] = new closure_4("\u0647\u0646", -1, 2);
            const tmp8 = new closure_4("\u0647\u0646", -1, 2);
            items[8] = new closure_4("\u0647", -1, 1);
            const tmp9 = new closure_4("\u0647", -1, 1);
            items[9] = new closure_4("\u064A", -1, 1);
            arabicStemmer.a_10 = items;
            return items;
          }
        },
        {
          key: "a_11",
          get() {
            delete r1.a_11;
            const items = [new closure_4("\u0646", -1, 1)];
            arabicStemmer.a_11 = items;
            return items;
          }
        },
        {
          key: "a_12",
          get() {
            delete r1.a_12;
            const items = [new closure_4("\u0627", -1, 1), , ];
            const tmp = new closure_4("\u0627", -1, 1);
            items[1] = new closure_4("\u0648", -1, 1);
            const tmp2 = new closure_4("\u0648", -1, 1);
            items[2] = new closure_4("\u064A", -1, 1);
            arabicStemmer.a_12 = items;
            return items;
          }
        },
        {
          key: "a_13",
          get() {
            delete r1.a_13;
            const items = [new closure_4("\u0627\u062A", -1, 1)];
            arabicStemmer.a_13 = items;
            return items;
          }
        },
        {
          key: "a_14",
          get() {
            delete r1.a_14;
            const items = [new closure_4("\u062A", -1, 1)];
            arabicStemmer.a_14 = items;
            return items;
          }
        },
        {
          key: "a_15",
          get() {
            delete r1.a_15;
            const items = [new closure_4("\u0629", -1, 1)];
            arabicStemmer.a_15 = items;
            return items;
          }
        },
        {
          key: "a_16",
          get() {
            delete r1.a_16;
            const items = [new closure_4("\u064A", -1, 1)];
            arabicStemmer.a_16 = items;
            return items;
          }
        },
        {
          key: "a_17",
          get() {
            delete r1.a_17;
            const items = [new closure_4("\u0643\u0645\u0627", -1, 3), , , , , , , , , , , ];
            const tmp = new closure_4("\u0643\u0645\u0627", -1, 3);
            items[1] = new closure_4("\u0647\u0645\u0627", -1, 3);
            const tmp2 = new closure_4("\u0647\u0645\u0627", -1, 3);
            items[2] = new closure_4("\u0646\u0627", -1, 2);
            const tmp3 = new closure_4("\u0646\u0627", -1, 2);
            items[3] = new closure_4("\u0647\u0627", -1, 2);
            const tmp4 = new closure_4("\u0647\u0627", -1, 2);
            items[4] = new closure_4("\u0643", -1, 1);
            const tmp5 = new closure_4("\u0643", -1, 1);
            items[5] = new closure_4("\u0643\u0645", -1, 2);
            const tmp6 = new closure_4("\u0643\u0645", -1, 2);
            items[6] = new closure_4("\u0647\u0645", -1, 2);
            const tmp7 = new closure_4("\u0647\u0645", -1, 2);
            items[7] = new closure_4("\u0643\u0646", -1, 2);
            const tmp8 = new closure_4("\u0643\u0646", -1, 2);
            items[8] = new closure_4("\u0647\u0646", -1, 2);
            const tmp9 = new closure_4("\u0647\u0646", -1, 2);
            items[9] = new closure_4("\u0647", -1, 1);
            const tmp10 = new closure_4("\u0647", -1, 1);
            items[10] = new closure_4("\u0643\u0645\u0648", -1, 3);
            const tmp11 = new closure_4("\u0643\u0645\u0648", -1, 3);
            items[11] = new closure_4("\u0646\u064A", -1, 2);
            arabicStemmer.a_17 = items;
            return items;
          }
        },
        {
          key: "a_18",
          get() {
            delete r1.a_18;
            const items = [new closure_4("\u0627", -1, 2), , , , , , , , , , ];
            const tmp = new closure_4("\u0627", -1, 2);
            items[1] = new closure_4("\u062A\u0627", 0, 3);
            const tmp2 = new closure_4("\u062A\u0627", 0, 3);
            items[2] = new closure_4("\u062A\u0645\u0627", 0, 5);
            const tmp3 = new closure_4("\u062A\u0645\u0627", 0, 5);
            items[3] = new closure_4("\u0646\u0627", 0, 3);
            const tmp4 = new closure_4("\u0646\u0627", 0, 3);
            items[4] = new closure_4("\u062A", -1, 1);
            const tmp5 = new closure_4("\u062A", -1, 1);
            items[5] = new closure_4("\u0646", -1, 2);
            const tmp6 = new closure_4("\u0646", -1, 2);
            items[6] = new closure_4("\u0627\u0646", 5, 4);
            const tmp7 = new closure_4("\u0627\u0646", 5, 4);
            items[7] = new closure_4("\u062A\u0646", 5, 3);
            const tmp8 = new closure_4("\u062A\u0646", 5, 3);
            items[8] = new closure_4("\u0648\u0646", 5, 4);
            const tmp9 = new closure_4("\u0648\u0646", 5, 4);
            items[9] = new closure_4("\u064A\u0646", 5, 4);
            const tmp10 = new closure_4("\u064A\u0646", 5, 4);
            items[10] = new closure_4("\u064A", -1, 2);
            arabicStemmer.a_18 = items;
            return items;
          }
        },
        {
          key: "a_19",
          get() {
            delete r1.a_19;
            const items = [new closure_4("\u0648\u0627", -1, 1), ];
            const tmp = new closure_4("\u0648\u0627", -1, 1);
            items[1] = new closure_4("\u062A\u0645", -1, 1);
            arabicStemmer.a_19 = items;
            return items;
          }
        },
        {
          key: "a_20",
          get() {
            delete r1.a_20;
            const items = [new closure_4("\u0648", -1, 1), ];
            const tmp = new closure_4("\u0648", -1, 1);
            items[1] = new closure_4("\u062A\u0645\u0648", 0, 2);
            arabicStemmer.a_20 = items;
            return items;
          }
        },
        {
          key: "a_21",
          get() {
            delete r1.a_21;
            const items = [new closure_4("\u0649", -1, 1)];
            arabicStemmer.a_21 = items;
            return items;
          }
        }
      ];
      callback(arabicStemmer, items, items1);
      return arabicStemmer;
    }(tmp3);
    let closure_6 = (arg0) => {
      function armenianStemmer() {
        callback3(this, armenianStemmer);
        const prototypeOf = Object.getPrototypeOf(armenianStemmer);
        return callback2(this, prototypeOf(...arguments));
      }
      const callback = armenianStemmer;
      _inherits(armenianStemmer, arg0);
      let obj = {
        key: "r_mark_regions$esjava$0",
        value: function r_mark_regions$esjava$0() {
          const self = this;
          ({ limit: this.I_pV, limit: this.I_p2 } = this);
          const cursor = self.cursor;
          while (!self.in_grouping$esjava$3(armenianStemmer.g_v, 1377, 1413)) {
            if (cursor < self.limit) {
              self.cursor = self.cursor + 1;
              // continue
            }
            self.cursor = tmp;
            let flag = true;
            return true;
          }
          self.I_pV = cursor;
          while (!self.out_grouping$esjava$3(armenianStemmer.g_v, 1377, 1413)) {
            if (self.cursor < self.limit) {
              self.cursor = self.cursor + 1;
              // continue
            }
          }
          while (!self.in_grouping$esjava$3(armenianStemmer.g_v, 1377, 1413)) {
            if (self.cursor < self.limit) {
              self.cursor = self.cursor + 1;
              // continue
            }
          }
          const cursor2 = self.cursor;
          while (!self.out_grouping$esjava$3(armenianStemmer.g_v, 1377, 1413)) {
            if (cursor2 < self.limit) {
              self.cursor = self.cursor + 1;
              // continue
            }
          }
          self.I_p2 = cursor2;
        }
      };
      const items = [obj, , , , , , , , , ];
      obj = {
        key: "r_R2$esjava$0",
        value: function r_R2$esjava$0() {
          return this.I_p2 <= this.cursor;
        }
      };
      items[1] = obj;
      obj = {
        key: "r_adjective$esjava$0",
        value: function r_adjective$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(armenianStemmer.a_0);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                const result1 = self.slice_del$esjava$0();
              }
              return true;
            }
          }
        }
      };
      items[2] = obj;
      items[3] = {
        key: "r_verb$esjava$0",
        value: function r_verb$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(armenianStemmer.a_1);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                const result1 = self.slice_del$esjava$0();
              }
              return true;
            }
          }
        }
      };
      items[4] = {
        key: "r_noun$esjava$0",
        value: function r_noun$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(armenianStemmer.a_2);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                const result1 = self.slice_del$esjava$0();
              }
              return true;
            }
          }
        }
      };
      items[5] = {
        key: "r_ending$esjava$0",
        value: function r_ending$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(armenianStemmer.a_3);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (self.r_R2$esjava$0()) {
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  const result1 = self.slice_del$esjava$0();
                }
                return true;
              }
            } else {
              return false;
            }
          }
        }
      };
      items[6] = {
        key: "stem$esjava$0",
        value: function stem$esjava$0() {
          const self = this;
          const result = this.r_mark_regions$esjava$0();
          this.cursor = this.cursor;
          ({ cursor: this.limit_backward, limit: this.cursor } = this);
          if (this.cursor < this.I_pV) {
            return false;
          } else {
            ({ I_pV: self.cursor, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp2;
            const diff = self.limit - self.cursor;
            const result1 = self.r_ending$esjava$0();
            self.cursor = self.limit - diff;
            const diff1 = self.limit - self.cursor;
            const result2 = self.r_verb$esjava$0();
            self.cursor = self.limit - diff1;
            const diff2 = self.limit - self.cursor;
            const result3 = self.r_adjective$esjava$0();
            self.cursor = self.limit - diff2;
            const diff3 = self.limit - self.cursor;
            const result4 = self.r_noun$esjava$0();
            self.cursor = self.limit - diff3;
            self.limit_backward = self.limit_backward;
            self.cursor = self.limit_backward;
            return true;
          }
        }
      };
      items[7] = {
        key: "stem",
        value: function stem() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const stem$esjava$0 = self.stem$esjava$0;
            let applyResult = stem$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(armenianStemmer.prototype), "stem", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[8] = {
        key: "I_p2",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p2")) {
            let num = self._$esjava$I_p2;
          } else {
            num = 0;
            self._$esjava$I_p2 = 0;
          }
          return num;
        },
        set(_$esjava$I_p2) {
          this._$esjava$I_p2 = _$esjava$I_p2;
        }
      };
      items[9] = {
        key: "I_pV",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_pV")) {
            let num = self._$esjava$I_pV;
          } else {
            num = 0;
            self._$esjava$I_pV = 0;
          }
          return num;
        },
        set(_$esjava$I_pV) {
          this._$esjava$I_pV = _$esjava$I_pV;
        }
      };
      const items1 = [
        {
          key: "a_0",
          get() {
            delete r1.a_0;
            const items = [new closure_4("\u0580\u0578\u0580\u0564", -1, 1), , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("\u0580\u0578\u0580\u0564", -1, 1);
            items[1] = new closure_4("\u0565\u0580\u0578\u0580\u0564", 0, 1);
            const tmp2 = new closure_4("\u0565\u0580\u0578\u0580\u0564", 0, 1);
            items[2] = new closure_4("\u0561\u056C\u056B", -1, 1);
            const tmp3 = new closure_4("\u0561\u056C\u056B", -1, 1);
            items[3] = new closure_4("\u0561\u056F\u056B", -1, 1);
            const tmp4 = new closure_4("\u0561\u056F\u056B", -1, 1);
            items[4] = new closure_4("\u0578\u0580\u0561\u056F", -1, 1);
            const tmp5 = new closure_4("\u0578\u0580\u0561\u056F", -1, 1);
            items[5] = new closure_4("\u0565\u0572", -1, 1);
            const tmp6 = new closure_4("\u0565\u0572", -1, 1);
            items[6] = new closure_4("\u0561\u056F\u0561\u0576", -1, 1);
            const tmp7 = new closure_4("\u0561\u056F\u0561\u0576", -1, 1);
            items[7] = new closure_4("\u0561\u0580\u0561\u0576", -1, 1);
            const tmp8 = new closure_4("\u0561\u0580\u0561\u0576", -1, 1);
            items[8] = new closure_4("\u0565\u0576", -1, 1);
            const tmp9 = new closure_4("\u0565\u0576", -1, 1);
            items[9] = new closure_4("\u0565\u056F\u0565\u0576", 8, 1);
            const tmp10 = new closure_4("\u0565\u056F\u0565\u0576", 8, 1);
            items[10] = new closure_4("\u0565\u0580\u0565\u0576", 8, 1);
            const tmp11 = new closure_4("\u0565\u0580\u0565\u0576", 8, 1);
            items[11] = new closure_4("\u0578\u0580\u0567\u0576", -1, 1);
            const tmp12 = new closure_4("\u0578\u0580\u0567\u0576", -1, 1);
            items[12] = new closure_4("\u056B\u0576", -1, 1);
            const tmp13 = new closure_4("\u056B\u0576", -1, 1);
            items[13] = new closure_4("\u0563\u056B\u0576", 12, 1);
            const tmp14 = new closure_4("\u0563\u056B\u0576", 12, 1);
            items[14] = new closure_4("\u0578\u057E\u056B\u0576", 12, 1);
            const tmp15 = new closure_4("\u0578\u057E\u056B\u0576", 12, 1);
            items[15] = new closure_4("\u056C\u0561\u0575\u0576", -1, 1);
            const tmp16 = new closure_4("\u056C\u0561\u0575\u0576", -1, 1);
            items[16] = new closure_4("\u057E\u0578\u0582\u0576", -1, 1);
            const tmp17 = new closure_4("\u057E\u0578\u0582\u0576", -1, 1);
            items[17] = new closure_4("\u057A\u0565\u057D", -1, 1);
            const tmp18 = new closure_4("\u057A\u0565\u057D", -1, 1);
            items[18] = new closure_4("\u056B\u057E", -1, 1);
            const tmp19 = new closure_4("\u056B\u057E", -1, 1);
            items[19] = new closure_4("\u0561\u057F", -1, 1);
            const tmp20 = new closure_4("\u0561\u057F", -1, 1);
            items[20] = new closure_4("\u0561\u057E\u0565\u057F", -1, 1);
            const tmp21 = new closure_4("\u0561\u057E\u0565\u057F", -1, 1);
            items[21] = new closure_4("\u056F\u0578\u057F", -1, 1);
            const tmp22 = new closure_4("\u056F\u0578\u057F", -1, 1);
            items[22] = new closure_4("\u0562\u0561\u0580", -1, 1);
            armenianStemmer.a_0 = items;
            return items;
          }
        },
        {
          key: "a_1",
          get() {
            delete r1.a_1;
            const items = [new closure_4("\u0561", -1, 1), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("\u0561", -1, 1);
            items[1] = new closure_4("\u0561\u0581\u0561", 0, 1);
            const tmp2 = new closure_4("\u0561\u0581\u0561", 0, 1);
            items[2] = new closure_4("\u0565\u0581\u0561", 0, 1);
            const tmp3 = new closure_4("\u0565\u0581\u0561", 0, 1);
            items[3] = new closure_4("\u057E\u0565", -1, 1);
            const tmp4 = new closure_4("\u057E\u0565", -1, 1);
            items[4] = new closure_4("\u0561\u0581\u0580\u056B", -1, 1);
            const tmp5 = new closure_4("\u0561\u0581\u0580\u056B", -1, 1);
            items[5] = new closure_4("\u0561\u0581\u056B", -1, 1);
            const tmp6 = new closure_4("\u0561\u0581\u056B", -1, 1);
            items[6] = new closure_4("\u0565\u0581\u056B", -1, 1);
            const tmp7 = new closure_4("\u0565\u0581\u056B", -1, 1);
            items[7] = new closure_4("\u057E\u0565\u0581\u056B", 6, 1);
            const tmp8 = new closure_4("\u057E\u0565\u0581\u056B", 6, 1);
            items[8] = new closure_4("\u0561\u056C", -1, 1);
            const tmp9 = new closure_4("\u0561\u056C", -1, 1);
            items[9] = new closure_4("\u0568\u0561\u056C", 8, 1);
            const tmp10 = new closure_4("\u0568\u0561\u056C", 8, 1);
            items[10] = new closure_4("\u0561\u0576\u0561\u056C", 8, 1);
            const tmp11 = new closure_4("\u0561\u0576\u0561\u056C", 8, 1);
            items[11] = new closure_4("\u0565\u0576\u0561\u056C", 8, 1);
            const tmp12 = new closure_4("\u0565\u0576\u0561\u056C", 8, 1);
            items[12] = new closure_4("\u0561\u0581\u0576\u0561\u056C", 8, 1);
            const tmp13 = new closure_4("\u0561\u0581\u0576\u0561\u056C", 8, 1);
            items[13] = new closure_4("\u0565\u056C", -1, 1);
            const tmp14 = new closure_4("\u0565\u056C", -1, 1);
            items[14] = new closure_4("\u0568\u0565\u056C", 13, 1);
            const tmp15 = new closure_4("\u0568\u0565\u056C", 13, 1);
            items[15] = new closure_4("\u0576\u0565\u056C", 13, 1);
            const tmp16 = new closure_4("\u0576\u0565\u056C", 13, 1);
            items[16] = new closure_4("\u0581\u0576\u0565\u056C", 15, 1);
            const tmp17 = new closure_4("\u0581\u0576\u0565\u056C", 15, 1);
            items[17] = new closure_4("\u0565\u0581\u0576\u0565\u056C", 16, 1);
            const tmp18 = new closure_4("\u0565\u0581\u0576\u0565\u056C", 16, 1);
            items[18] = new closure_4("\u0579\u0565\u056C", 13, 1);
            const tmp19 = new closure_4("\u0579\u0565\u056C", 13, 1);
            items[19] = new closure_4("\u057E\u0565\u056C", 13, 1);
            const tmp20 = new closure_4("\u057E\u0565\u056C", 13, 1);
            items[20] = new closure_4("\u0561\u0581\u057E\u0565\u056C", 19, 1);
            const tmp21 = new closure_4("\u0561\u0581\u057E\u0565\u056C", 19, 1);
            items[21] = new closure_4("\u0565\u0581\u057E\u0565\u056C", 19, 1);
            const tmp22 = new closure_4("\u0565\u0581\u057E\u0565\u056C", 19, 1);
            items[22] = new closure_4("\u057F\u0565\u056C", 13, 1);
            const tmp23 = new closure_4("\u057F\u0565\u056C", 13, 1);
            items[23] = new closure_4("\u0561\u057F\u0565\u056C", 22, 1);
            const tmp24 = new closure_4("\u0561\u057F\u0565\u056C", 22, 1);
            items[24] = new closure_4("\u0578\u057F\u0565\u056C", 22, 1);
            const tmp25 = new closure_4("\u0578\u057F\u0565\u056C", 22, 1);
            items[25] = new closure_4("\u056F\u0578\u057F\u0565\u056C", 24, 1);
            const tmp26 = new closure_4("\u056F\u0578\u057F\u0565\u056C", 24, 1);
            items[26] = new closure_4("\u057E\u0561\u056E", -1, 1);
            const tmp27 = new closure_4("\u057E\u0561\u056E", -1, 1);
            items[27] = new closure_4("\u0578\u0582\u0574", -1, 1);
            const tmp28 = new closure_4("\u0578\u0582\u0574", -1, 1);
            items[28] = new closure_4("\u057E\u0578\u0582\u0574", 27, 1);
            const tmp29 = new closure_4("\u057E\u0578\u0582\u0574", 27, 1);
            items[29] = new closure_4("\u0561\u0576", -1, 1);
            const tmp30 = new closure_4("\u0561\u0576", -1, 1);
            items[30] = new closure_4("\u0581\u0561\u0576", 29, 1);
            const tmp31 = new closure_4("\u0581\u0561\u0576", 29, 1);
            items[31] = new closure_4("\u0561\u0581\u0561\u0576", 30, 1);
            const tmp32 = new closure_4("\u0561\u0581\u0561\u0576", 30, 1);
            items[32] = new closure_4("\u0561\u0581\u0580\u056B\u0576", -1, 1);
            const tmp33 = new closure_4("\u0561\u0581\u0580\u056B\u0576", -1, 1);
            items[33] = new closure_4("\u0561\u0581\u056B\u0576", -1, 1);
            const tmp34 = new closure_4("\u0561\u0581\u056B\u0576", -1, 1);
            items[34] = new closure_4("\u0565\u0581\u056B\u0576", -1, 1);
            const tmp35 = new closure_4("\u0565\u0581\u056B\u0576", -1, 1);
            items[35] = new closure_4("\u057E\u0565\u0581\u056B\u0576", 34, 1);
            const tmp36 = new closure_4("\u057E\u0565\u0581\u056B\u0576", 34, 1);
            items[36] = new closure_4("\u0561\u056C\u056B\u057D", -1, 1);
            const tmp37 = new closure_4("\u0561\u056C\u056B\u057D", -1, 1);
            items[37] = new closure_4("\u0565\u056C\u056B\u057D", -1, 1);
            const tmp38 = new closure_4("\u0565\u056C\u056B\u057D", -1, 1);
            items[38] = new closure_4("\u0561\u057E", -1, 1);
            const tmp39 = new closure_4("\u0561\u057E", -1, 1);
            items[39] = new closure_4("\u0561\u0581\u0561\u057E", 38, 1);
            const tmp40 = new closure_4("\u0561\u0581\u0561\u057E", 38, 1);
            items[40] = new closure_4("\u0565\u0581\u0561\u057E", 38, 1);
            const tmp41 = new closure_4("\u0565\u0581\u0561\u057E", 38, 1);
            items[41] = new closure_4("\u0561\u056C\u0578\u057E", -1, 1);
            const tmp42 = new closure_4("\u0561\u056C\u0578\u057E", -1, 1);
            items[42] = new closure_4("\u0565\u056C\u0578\u057E", -1, 1);
            const tmp43 = new closure_4("\u0565\u056C\u0578\u057E", -1, 1);
            items[43] = new closure_4("\u0561\u0580", -1, 1);
            const tmp44 = new closure_4("\u0561\u0580", -1, 1);
            items[44] = new closure_4("\u0561\u0581\u0561\u0580", 43, 1);
            const tmp45 = new closure_4("\u0561\u0581\u0561\u0580", 43, 1);
            items[45] = new closure_4("\u0565\u0581\u0561\u0580", 43, 1);
            const tmp46 = new closure_4("\u0565\u0581\u0561\u0580", 43, 1);
            items[46] = new closure_4("\u0561\u0581\u0580\u056B\u0580", -1, 1);
            const tmp47 = new closure_4("\u0561\u0581\u0580\u056B\u0580", -1, 1);
            items[47] = new closure_4("\u0561\u0581\u056B\u0580", -1, 1);
            const tmp48 = new closure_4("\u0561\u0581\u056B\u0580", -1, 1);
            items[48] = new closure_4("\u0565\u0581\u056B\u0580", -1, 1);
            const tmp49 = new closure_4("\u0565\u0581\u056B\u0580", -1, 1);
            items[49] = new closure_4("\u057E\u0565\u0581\u056B\u0580", 48, 1);
            const tmp50 = new closure_4("\u057E\u0565\u0581\u056B\u0580", 48, 1);
            items[50] = new closure_4("\u0561\u0581", -1, 1);
            const tmp51 = new closure_4("\u0561\u0581", -1, 1);
            items[51] = new closure_4("\u0565\u0581", -1, 1);
            const tmp52 = new closure_4("\u0565\u0581", -1, 1);
            items[52] = new closure_4("\u0561\u0581\u0580\u0565\u0581", 51, 1);
            const tmp53 = new closure_4("\u0561\u0581\u0580\u0565\u0581", 51, 1);
            items[53] = new closure_4("\u0561\u056C\u0578\u0582\u0581", -1, 1);
            const tmp54 = new closure_4("\u0561\u056C\u0578\u0582\u0581", -1, 1);
            items[54] = new closure_4("\u0565\u056C\u0578\u0582\u0581", -1, 1);
            const tmp55 = new closure_4("\u0565\u056C\u0578\u0582\u0581", -1, 1);
            items[55] = new closure_4("\u0561\u056C\u0578\u0582", -1, 1);
            const tmp56 = new closure_4("\u0561\u056C\u0578\u0582", -1, 1);
            items[56] = new closure_4("\u0565\u056C\u0578\u0582", -1, 1);
            const tmp57 = new closure_4("\u0565\u056C\u0578\u0582", -1, 1);
            items[57] = new closure_4("\u0561\u0584", -1, 1);
            const tmp58 = new closure_4("\u0561\u0584", -1, 1);
            items[58] = new closure_4("\u0581\u0561\u0584", 57, 1);
            const tmp59 = new closure_4("\u0581\u0561\u0584", 57, 1);
            items[59] = new closure_4("\u0561\u0581\u0561\u0584", 58, 1);
            const tmp60 = new closure_4("\u0561\u0581\u0561\u0584", 58, 1);
            items[60] = new closure_4("\u0561\u0581\u0580\u056B\u0584", -1, 1);
            const tmp61 = new closure_4("\u0561\u0581\u0580\u056B\u0584", -1, 1);
            items[61] = new closure_4("\u0561\u0581\u056B\u0584", -1, 1);
            const tmp62 = new closure_4("\u0561\u0581\u056B\u0584", -1, 1);
            items[62] = new closure_4("\u0565\u0581\u056B\u0584", -1, 1);
            const tmp63 = new closure_4("\u0565\u0581\u056B\u0584", -1, 1);
            items[63] = new closure_4("\u057E\u0565\u0581\u056B\u0584", 62, 1);
            const tmp64 = new closure_4("\u057E\u0565\u0581\u056B\u0584", 62, 1);
            items[64] = new closure_4("\u0561\u0576\u0584", -1, 1);
            const tmp65 = new closure_4("\u0561\u0576\u0584", -1, 1);
            items[65] = new closure_4("\u0581\u0561\u0576\u0584", 64, 1);
            const tmp66 = new closure_4("\u0581\u0561\u0576\u0584", 64, 1);
            items[66] = new closure_4("\u0561\u0581\u0561\u0576\u0584", 65, 1);
            const tmp67 = new closure_4("\u0561\u0581\u0561\u0576\u0584", 65, 1);
            items[67] = new closure_4("\u0561\u0581\u0580\u056B\u0576\u0584", -1, 1);
            const tmp68 = new closure_4("\u0561\u0581\u0580\u056B\u0576\u0584", -1, 1);
            items[68] = new closure_4("\u0561\u0581\u056B\u0576\u0584", -1, 1);
            const tmp69 = new closure_4("\u0561\u0581\u056B\u0576\u0584", -1, 1);
            items[69] = new closure_4("\u0565\u0581\u056B\u0576\u0584", -1, 1);
            const tmp70 = new closure_4("\u0565\u0581\u056B\u0576\u0584", -1, 1);
            items[70] = new closure_4("\u057E\u0565\u0581\u056B\u0576\u0584", 69, 1);
            armenianStemmer.a_1 = items;
            return items;
          }
        },
        {
          key: "a_2",
          get() {
            delete r1.a_2;
            const items = [new closure_4("\u0578\u0580\u0564", -1, 1), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("\u0578\u0580\u0564", -1, 1);
            items[1] = new closure_4("\u0578\u0582\u0575\u0569", -1, 1);
            const tmp2 = new closure_4("\u0578\u0582\u0575\u0569", -1, 1);
            items[2] = new closure_4("\u0578\u0582\u0570\u056B", -1, 1);
            const tmp3 = new closure_4("\u0578\u0582\u0570\u056B", -1, 1);
            items[3] = new closure_4("\u0581\u056B", -1, 1);
            const tmp4 = new closure_4("\u0581\u056B", -1, 1);
            items[4] = new closure_4("\u056B\u056C", -1, 1);
            const tmp5 = new closure_4("\u056B\u056C", -1, 1);
            items[5] = new closure_4("\u0561\u056F", -1, 1);
            const tmp6 = new closure_4("\u0561\u056F", -1, 1);
            items[6] = new closure_4("\u0575\u0561\u056F", 5, 1);
            const tmp7 = new closure_4("\u0575\u0561\u056F", 5, 1);
            items[7] = new closure_4("\u0561\u0576\u0561\u056F", 5, 1);
            const tmp8 = new closure_4("\u0561\u0576\u0561\u056F", 5, 1);
            items[8] = new closure_4("\u056B\u056F", -1, 1);
            const tmp9 = new closure_4("\u056B\u056F", -1, 1);
            items[9] = new closure_4("\u0578\u0582\u056F", -1, 1);
            const tmp10 = new closure_4("\u0578\u0582\u056F", -1, 1);
            items[10] = new closure_4("\u0561\u0576", -1, 1);
            const tmp11 = new closure_4("\u0561\u0576", -1, 1);
            items[11] = new closure_4("\u057A\u0561\u0576", 10, 1);
            const tmp12 = new closure_4("\u057A\u0561\u0576", 10, 1);
            items[12] = new closure_4("\u057D\u057F\u0561\u0576", 10, 1);
            const tmp13 = new closure_4("\u057D\u057F\u0561\u0576", 10, 1);
            items[13] = new closure_4("\u0561\u0580\u0561\u0576", 10, 1);
            const tmp14 = new closure_4("\u0561\u0580\u0561\u0576", 10, 1);
            items[14] = new closure_4("\u0565\u0572\u0567\u0576", -1, 1);
            const tmp15 = new closure_4("\u0565\u0572\u0567\u0576", -1, 1);
            items[15] = new closure_4("\u0575\u0578\u0582\u0576", -1, 1);
            const tmp16 = new closure_4("\u0575\u0578\u0582\u0576", -1, 1);
            items[16] = new closure_4("\u0578\u0582\u0569\u0575\u0578\u0582\u0576", 15, 1);
            const tmp17 = new closure_4("\u0578\u0582\u0569\u0575\u0578\u0582\u0576", 15, 1);
            items[17] = new closure_4("\u0561\u056E\u0578", -1, 1);
            const tmp18 = new closure_4("\u0561\u056E\u0578", -1, 1);
            items[18] = new closure_4("\u056B\u0579", -1, 1);
            const tmp19 = new closure_4("\u056B\u0579", -1, 1);
            items[19] = new closure_4("\u0578\u0582\u057D", -1, 1);
            const tmp20 = new closure_4("\u0578\u0582\u057D", -1, 1);
            items[20] = new closure_4("\u0578\u0582\u057D\u057F", -1, 1);
            const tmp21 = new closure_4("\u0578\u0582\u057D\u057F", -1, 1);
            items[21] = new closure_4("\u0563\u0561\u0580", -1, 1);
            const tmp22 = new closure_4("\u0563\u0561\u0580", -1, 1);
            items[22] = new closure_4("\u057E\u0578\u0580", -1, 1);
            const tmp23 = new closure_4("\u057E\u0578\u0580", -1, 1);
            items[23] = new closure_4("\u0561\u057E\u0578\u0580", 22, 1);
            const tmp24 = new closure_4("\u0561\u057E\u0578\u0580", 22, 1);
            items[24] = new closure_4("\u0578\u0581", -1, 1);
            const tmp25 = new closure_4("\u0578\u0581", -1, 1);
            items[25] = new closure_4("\u0561\u0576\u0585\u0581", -1, 1);
            const tmp26 = new closure_4("\u0561\u0576\u0585\u0581", -1, 1);
            items[26] = new closure_4("\u0578\u0582", -1, 1);
            const tmp27 = new closure_4("\u0578\u0582", -1, 1);
            items[27] = new closure_4("\u0584", -1, 1);
            const tmp28 = new closure_4("\u0584", -1, 1);
            items[28] = new closure_4("\u0579\u0565\u0584", 27, 1);
            const tmp29 = new closure_4("\u0579\u0565\u0584", 27, 1);
            items[29] = new closure_4("\u056B\u0584", 27, 1);
            const tmp30 = new closure_4("\u056B\u0584", 27, 1);
            items[30] = new closure_4("\u0561\u056C\u056B\u0584", 29, 1);
            const tmp31 = new closure_4("\u0561\u056C\u056B\u0584", 29, 1);
            items[31] = new closure_4("\u0561\u0576\u056B\u0584", 29, 1);
            const tmp32 = new closure_4("\u0561\u0576\u056B\u0584", 29, 1);
            items[32] = new closure_4("\u057E\u0561\u056E\u0584", 27, 1);
            const tmp33 = new closure_4("\u057E\u0561\u056E\u0584", 27, 1);
            items[33] = new closure_4("\u0578\u0582\u0575\u0584", 27, 1);
            const tmp34 = new closure_4("\u0578\u0582\u0575\u0584", 27, 1);
            items[34] = new closure_4("\u0565\u0576\u0584", 27, 1);
            const tmp35 = new closure_4("\u0565\u0576\u0584", 27, 1);
            items[35] = new closure_4("\u0578\u0576\u0584", 27, 1);
            const tmp36 = new closure_4("\u0578\u0576\u0584", 27, 1);
            items[36] = new closure_4("\u0578\u0582\u0576\u0584", 27, 1);
            const tmp37 = new closure_4("\u0578\u0582\u0576\u0584", 27, 1);
            items[37] = new closure_4("\u0574\u0578\u0582\u0576\u0584", 36, 1);
            const tmp38 = new closure_4("\u0574\u0578\u0582\u0576\u0584", 36, 1);
            items[38] = new closure_4("\u056B\u0579\u0584", 27, 1);
            const tmp39 = new closure_4("\u056B\u0579\u0584", 27, 1);
            items[39] = new closure_4("\u0561\u0580\u0584", 27, 1);
            armenianStemmer.a_2 = items;
            return items;
          }
        },
        {
          key: "a_3",
          get() {
            delete r1.a_3;
            const items = [new closure_4("\u057D\u0561", -1, 1), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("\u057D\u0561", -1, 1);
            items[1] = new closure_4("\u057E\u0561", -1, 1);
            const tmp2 = new closure_4("\u057E\u0561", -1, 1);
            items[2] = new closure_4("\u0561\u0574\u0562", -1, 1);
            const tmp3 = new closure_4("\u0561\u0574\u0562", -1, 1);
            items[3] = new closure_4("\u0564", -1, 1);
            const tmp4 = new closure_4("\u0564", -1, 1);
            items[4] = new closure_4("\u0561\u0576\u0564", 3, 1);
            const tmp5 = new closure_4("\u0561\u0576\u0564", 3, 1);
            items[5] = new closure_4("\u0578\u0582\u0569\u0575\u0561\u0576\u0564", 4, 1);
            const tmp6 = new closure_4("\u0578\u0582\u0569\u0575\u0561\u0576\u0564", 4, 1);
            items[6] = new closure_4("\u057E\u0561\u0576\u0564", 4, 1);
            const tmp7 = new closure_4("\u057E\u0561\u0576\u0564", 4, 1);
            items[7] = new closure_4("\u0578\u057B\u0564", 3, 1);
            const tmp8 = new closure_4("\u0578\u057B\u0564", 3, 1);
            items[8] = new closure_4("\u0565\u0580\u0564", 3, 1);
            const tmp9 = new closure_4("\u0565\u0580\u0564", 3, 1);
            items[9] = new closure_4("\u0576\u0565\u0580\u0564", 8, 1);
            const tmp10 = new closure_4("\u0576\u0565\u0580\u0564", 8, 1);
            items[10] = new closure_4("\u0578\u0582\u0564", 3, 1);
            const tmp11 = new closure_4("\u0578\u0582\u0564", 3, 1);
            items[11] = new closure_4("\u0568", -1, 1);
            const tmp12 = new closure_4("\u0568", -1, 1);
            items[12] = new closure_4("\u0561\u0576\u0568", 11, 1);
            const tmp13 = new closure_4("\u0561\u0576\u0568", 11, 1);
            items[13] = new closure_4("\u0578\u0582\u0569\u0575\u0561\u0576\u0568", 12, 1);
            const tmp14 = new closure_4("\u0578\u0582\u0569\u0575\u0561\u0576\u0568", 12, 1);
            items[14] = new closure_4("\u057E\u0561\u0576\u0568", 12, 1);
            const tmp15 = new closure_4("\u057E\u0561\u0576\u0568", 12, 1);
            items[15] = new closure_4("\u0578\u057B\u0568", 11, 1);
            const tmp16 = new closure_4("\u0578\u057B\u0568", 11, 1);
            items[16] = new closure_4("\u0565\u0580\u0568", 11, 1);
            const tmp17 = new closure_4("\u0565\u0580\u0568", 11, 1);
            items[17] = new closure_4("\u0576\u0565\u0580\u0568", 16, 1);
            const tmp18 = new closure_4("\u0576\u0565\u0580\u0568", 16, 1);
            items[18] = new closure_4("\u056B", -1, 1);
            const tmp19 = new closure_4("\u056B", -1, 1);
            items[19] = new closure_4("\u057E\u056B", 18, 1);
            const tmp20 = new closure_4("\u057E\u056B", 18, 1);
            items[20] = new closure_4("\u0565\u0580\u056B", 18, 1);
            const tmp21 = new closure_4("\u0565\u0580\u056B", 18, 1);
            items[21] = new closure_4("\u0576\u0565\u0580\u056B", 20, 1);
            const tmp22 = new closure_4("\u0576\u0565\u0580\u056B", 20, 1);
            items[22] = new closure_4("\u0561\u0576\u0578\u0582\u0574", -1, 1);
            const tmp23 = new closure_4("\u0561\u0576\u0578\u0582\u0574", -1, 1);
            items[23] = new closure_4("\u0565\u0580\u0578\u0582\u0574", -1, 1);
            const tmp24 = new closure_4("\u0565\u0580\u0578\u0582\u0574", -1, 1);
            items[24] = new closure_4("\u0576\u0565\u0580\u0578\u0582\u0574", 23, 1);
            const tmp25 = new closure_4("\u0576\u0565\u0580\u0578\u0582\u0574", 23, 1);
            items[25] = new closure_4("\u0576", -1, 1);
            const tmp26 = new closure_4("\u0576", -1, 1);
            items[26] = new closure_4("\u0561\u0576", 25, 1);
            const tmp27 = new closure_4("\u0561\u0576", 25, 1);
            items[27] = new closure_4("\u0578\u0582\u0569\u0575\u0561\u0576", 26, 1);
            const tmp28 = new closure_4("\u0578\u0582\u0569\u0575\u0561\u0576", 26, 1);
            items[28] = new closure_4("\u057E\u0561\u0576", 26, 1);
            const tmp29 = new closure_4("\u057E\u0561\u0576", 26, 1);
            items[29] = new closure_4("\u056B\u0576", 25, 1);
            const tmp30 = new closure_4("\u056B\u0576", 25, 1);
            items[30] = new closure_4("\u0565\u0580\u056B\u0576", 29, 1);
            const tmp31 = new closure_4("\u0565\u0580\u056B\u0576", 29, 1);
            items[31] = new closure_4("\u0576\u0565\u0580\u056B\u0576", 30, 1);
            const tmp32 = new closure_4("\u0576\u0565\u0580\u056B\u0576", 30, 1);
            items[32] = new closure_4("\u0578\u0582\u0569\u0575\u0561\u0576\u0576", 25, 1);
            const tmp33 = new closure_4("\u0578\u0582\u0569\u0575\u0561\u0576\u0576", 25, 1);
            items[33] = new closure_4("\u0565\u0580\u0576", 25, 1);
            const tmp34 = new closure_4("\u0565\u0580\u0576", 25, 1);
            items[34] = new closure_4("\u0576\u0565\u0580\u0576", 33, 1);
            const tmp35 = new closure_4("\u0576\u0565\u0580\u0576", 33, 1);
            items[35] = new closure_4("\u0578\u0582\u0576", 25, 1);
            const tmp36 = new closure_4("\u0578\u0582\u0576", 25, 1);
            items[36] = new closure_4("\u0578\u057B", -1, 1);
            const tmp37 = new closure_4("\u0578\u057B", -1, 1);
            items[37] = new closure_4("\u0578\u0582\u0569\u0575\u0561\u0576\u057D", -1, 1);
            const tmp38 = new closure_4("\u0578\u0582\u0569\u0575\u0561\u0576\u057D", -1, 1);
            items[38] = new closure_4("\u057E\u0561\u0576\u057D", -1, 1);
            const tmp39 = new closure_4("\u057E\u0561\u0576\u057D", -1, 1);
            items[39] = new closure_4("\u0578\u057B\u057D", -1, 1);
            const tmp40 = new closure_4("\u0578\u057B\u057D", -1, 1);
            items[40] = new closure_4("\u0578\u057E", -1, 1);
            const tmp41 = new closure_4("\u0578\u057E", -1, 1);
            items[41] = new closure_4("\u0561\u0576\u0578\u057E", 40, 1);
            const tmp42 = new closure_4("\u0561\u0576\u0578\u057E", 40, 1);
            items[42] = new closure_4("\u057E\u0578\u057E", 40, 1);
            const tmp43 = new closure_4("\u057E\u0578\u057E", 40, 1);
            items[43] = new closure_4("\u0565\u0580\u0578\u057E", 40, 1);
            const tmp44 = new closure_4("\u0565\u0580\u0578\u057E", 40, 1);
            items[44] = new closure_4("\u0576\u0565\u0580\u0578\u057E", 43, 1);
            const tmp45 = new closure_4("\u0576\u0565\u0580\u0578\u057E", 43, 1);
            items[45] = new closure_4("\u0565\u0580", -1, 1);
            const tmp46 = new closure_4("\u0565\u0580", -1, 1);
            items[46] = new closure_4("\u0576\u0565\u0580", 45, 1);
            const tmp47 = new closure_4("\u0576\u0565\u0580", 45, 1);
            items[47] = new closure_4("\u0581", -1, 1);
            const tmp48 = new closure_4("\u0581", -1, 1);
            items[48] = new closure_4("\u056B\u0581", 47, 1);
            const tmp49 = new closure_4("\u056B\u0581", 47, 1);
            items[49] = new closure_4("\u057E\u0561\u0576\u056B\u0581", 48, 1);
            const tmp50 = new closure_4("\u057E\u0561\u0576\u056B\u0581", 48, 1);
            items[50] = new closure_4("\u0578\u057B\u056B\u0581", 48, 1);
            const tmp51 = new closure_4("\u0578\u057B\u056B\u0581", 48, 1);
            items[51] = new closure_4("\u057E\u056B\u0581", 48, 1);
            const tmp52 = new closure_4("\u057E\u056B\u0581", 48, 1);
            items[52] = new closure_4("\u0565\u0580\u056B\u0581", 48, 1);
            const tmp53 = new closure_4("\u0565\u0580\u056B\u0581", 48, 1);
            items[53] = new closure_4("\u0576\u0565\u0580\u056B\u0581", 52, 1);
            const tmp54 = new closure_4("\u0576\u0565\u0580\u056B\u0581", 52, 1);
            items[54] = new closure_4("\u0581\u056B\u0581", 48, 1);
            const tmp55 = new closure_4("\u0581\u056B\u0581", 48, 1);
            items[55] = new closure_4("\u0578\u0581", 47, 1);
            const tmp56 = new closure_4("\u0578\u0581", 47, 1);
            items[56] = new closure_4("\u0578\u0582\u0581", 47, 1);
            armenianStemmer.a_3 = items;
            return items;
          }
        },
        {
          key: "g_v",
          get() {
            delete r1.g_v;
            const items = [];
            armenianStemmer.g_v = items;
            return items;
          }
        }
      ];
      callback(armenianStemmer, items, items1);
      return armenianStemmer;
    }(tmp3);
    let closure_7 = (arg0) => {
      function basqueStemmer() {
        callback3(this, basqueStemmer);
        const prototypeOf = Object.getPrototypeOf(basqueStemmer);
        return callback2(this, prototypeOf(...arguments));
      }
      const callback = basqueStemmer;
      _inherits(basqueStemmer, arg0);
      let obj = {
        key: "r_mark_regions$esjava$0",
        value: function r_mark_regions$esjava$0() {
          let cursor;
          let cursor2;
          const self = this;
          ({ limit: this.I_pV, limit: this.I_p1, limit: this.I_p2 } = this);
          ({ cursor, cursor: cursor2 } = this);
          if (this.in_grouping$esjava$3(basqueStemmer.g_v, 97, 117)) {
            if (!self.out_grouping$esjava$3(basqueStemmer.g_v, 97, 117)) {
              self.cursor = self.cursor;
              if (self.in_grouping$esjava$3(basqueStemmer.g_v, 97, 117)) {
                while (!self.out_grouping$esjava$3(basqueStemmer.g_v, 97, 117)) {
                  if (self.cursor < self.limit) {
                    self.cursor = self.cursor + 1;
                    // continue
                  }
                  break;
                }
              }
            } else {
              while (!self.in_grouping$esjava$3(basqueStemmer.g_v, 97, 117)) {
                if (self.cursor < self.limit) {
                  self.cursor = self.cursor + 1;
                  // continue
                }
                break;
              }
            }
            self.I_pV = self.cursor;
            self.cursor = cursor;
            while (!self.in_grouping$esjava$3(basqueStemmer.g_v, 97, 117)) {
              if (self.cursor < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
              self.cursor = tmp8;
              let flag = true;
              return true;
            }
            const cursor3 = self.cursor;
            while (!self.out_grouping$esjava$3(basqueStemmer.g_v, 97, 117)) {
              if (cursor3 < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            self.I_p1 = cursor3;
            while (!self.in_grouping$esjava$3(basqueStemmer.g_v, 97, 117)) {
              if (self.cursor < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            const cursor4 = self.cursor;
            while (!self.out_grouping$esjava$3(basqueStemmer.g_v, 97, 117)) {
              if (cursor4 < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            self.I_p2 = cursor4;
          }
          self.cursor = cursor2;
          if (self.out_grouping$esjava$3(basqueStemmer.g_v, 97, 117)) {
            if (!self.out_grouping$esjava$3(basqueStemmer.g_v, 97, 117)) {
              self.cursor = self.cursor;
              if (self.in_grouping$esjava$3(basqueStemmer.g_v, 97, 117)) {
                if (self.cursor < self.limit) {
                  self.cursor = self.cursor + 1;
                }
              }
            } else {
              while (!self.in_grouping$esjava$3(basqueStemmer.g_v, 97, 117)) {
                if (self.cursor < self.limit) {
                  self.cursor = self.cursor + 1;
                  // continue
                }
                break;
              }
            }
          }
        }
      };
      const items = [obj, , , , , , , , , , , ];
      obj = {
        key: "r_RV$esjava$0",
        value: function r_RV$esjava$0() {
          return this.I_pV <= this.cursor;
        }
      };
      items[1] = obj;
      obj = {
        key: "r_R2$esjava$0",
        value: function r_R2$esjava$0() {
          return this.I_p2 <= this.cursor;
        }
      };
      items[2] = obj;
      items[3] = {
        key: "r_R1$esjava$0",
        value: function r_R1$esjava$0() {
          return this.I_p1 <= this.cursor;
        }
      };
      items[4] = {
        key: "r_aditzak$esjava$0",
        value: function r_aditzak$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(basqueStemmer.a_0);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.r_RV$esjava$0()) {
                  const result1 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              } else if (2 === result) {
                if (self.r_R2$esjava$0()) {
                  const result2 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              } else if (3 === result) {
                const result3 = self.slice_from$esjava$1("atseden");
              } else if (4 === result) {
                const result4 = self.slice_from$esjava$1("arabera");
              } else if (5 === result) {
                const result5 = self.slice_from$esjava$1("baditu");
              }
              return true;
            }
          }
        }
      };
      items[5] = {
        key: "r_izenak$esjava$0",
        value: function r_izenak$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          if (0 === this.find_among_b$esjava$1(basqueStemmer.a_1)) {
            return false;
          } else {
            const result = self.slice_from$esjava$1("aurka");
          }
        }
      };
      items[6] = {
        key: "r_adjetiboak$esjava$0",
        value: function r_adjetiboak$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(basqueStemmer.a_2);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.r_RV$esjava$0()) {
                  const result1 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              } else if (2 === result) {
                const result2 = self.slice_from$esjava$1("z");
              }
              return true;
            }
          }
        }
      };
      items[7] = {
        key: "stem$esjava$0",
        value: function stem$esjava$0() {
          let diff;
          let diff1;
          let result1;
          let result2;
          const self = this;
          const result = this.r_mark_regions$esjava$0();
          this.cursor = this.cursor;
          ({ cursor: this.limit_backward, limit: this.cursor } = this);
          do {
            diff = self.limit - self.cursor;
            result1 = self.r_aditzak$esjava$0();
          } while (result1);
          self.cursor = self.limit - diff;
          do {
            diff1 = self.limit - self.cursor;
            result2 = self.r_izenak$esjava$0();
          } while (result2);
          self.cursor = self.limit - diff1;
          const result3 = self.r_adjetiboak$esjava$0();
          self.cursor = self.limit_backward;
          return true;
        }
      };
      items[8] = {
        key: "stem",
        value: function stem() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const stem$esjava$0 = self.stem$esjava$0;
            let applyResult = stem$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(basqueStemmer.prototype), "stem", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[9] = {
        key: "I_p2",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p2")) {
            let num = self._$esjava$I_p2;
          } else {
            num = 0;
            self._$esjava$I_p2 = 0;
          }
          return num;
        },
        set(_$esjava$I_p2) {
          this._$esjava$I_p2 = _$esjava$I_p2;
        }
      };
      items[10] = {
        key: "I_p1",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p1")) {
            let num = self._$esjava$I_p1;
          } else {
            num = 0;
            self._$esjava$I_p1 = 0;
          }
          return num;
        },
        set(_$esjava$I_p1) {
          this._$esjava$I_p1 = _$esjava$I_p1;
        }
      };
      items[11] = {
        key: "I_pV",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_pV")) {
            let num = self._$esjava$I_pV;
          } else {
            num = 0;
            self._$esjava$I_pV = 0;
          }
          return num;
        },
        set(_$esjava$I_pV) {
          this._$esjava$I_pV = _$esjava$I_pV;
        }
      };
      const items1 = [
        {
          key: "a_0",
          get() {
            delete r1.a_0;
            let tmp = new closure_4("idea", -1, 1);
            const items = [tmp, new closure_4("bidea", 0, 1), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp2 = new closure_4("bidea", 0, 1);
            items[2] = new closure_4("kidea", 0, 1);
            const tmp3 = new closure_4("kidea", 0, 1);
            items[3] = new closure_4("pidea", 0, 1);
            const tmp4 = new closure_4("pidea", 0, 1);
            items[4] = new closure_4("kundea", -1, 1);
            const tmp5 = new closure_4("kundea", -1, 1);
            items[5] = new closure_4("galea", -1, 1);
            const tmp6 = new closure_4("galea", -1, 1);
            items[6] = new closure_4("tailea", -1, 1);
            const tmp7 = new closure_4("tailea", -1, 1);
            items[7] = new closure_4("tzailea", -1, 1);
            const tmp8 = new closure_4("tzailea", -1, 1);
            items[8] = new closure_4("gunea", -1, 1);
            const tmp9 = new closure_4("gunea", -1, 1);
            items[9] = new closure_4("kunea", -1, 1);
            const tmp10 = new closure_4("kunea", -1, 1);
            items[10] = new closure_4("tzaga", -1, 1);
            const tmp11 = new closure_4("tzaga", -1, 1);
            items[11] = new closure_4("gaia", -1, 1);
            const tmp12 = new closure_4("gaia", -1, 1);
            items[12] = new closure_4("aldia", -1, 1);
            const tmp13 = new closure_4("aldia", -1, 1);
            items[13] = new closure_4("taldia", 12, 1);
            const tmp14 = new closure_4("taldia", 12, 1);
            items[14] = new closure_4("karia", -1, 1);
            const tmp15 = new closure_4("karia", -1, 1);
            items[15] = new closure_4("garria", -1, 2);
            const tmp16 = new closure_4("garria", -1, 2);
            items[16] = new closure_4("karria", -1, 1);
            const tmp17 = new closure_4("karria", -1, 1);
            items[17] = new closure_4("ka", -1, 1);
            const tmp18 = new closure_4("ka", -1, 1);
            items[18] = new closure_4("tzaka", 17, 1);
            const tmp19 = new closure_4("tzaka", 17, 1);
            items[19] = new closure_4("la", -1, 1);
            const tmp20 = new closure_4("la", -1, 1);
            items[20] = new closure_4("mena", -1, 1);
            const tmp21 = new closure_4("mena", -1, 1);
            items[21] = new closure_4("pena", -1, 1);
            const tmp22 = new closure_4("pena", -1, 1);
            items[22] = new closure_4("kina", -1, 1);
            const tmp23 = new closure_4("kina", -1, 1);
            items[23] = new closure_4("ezina", -1, 1);
            const tmp24 = new closure_4("ezina", -1, 1);
            items[24] = new closure_4("tezina", 23, 1);
            const tmp25 = new closure_4("tezina", 23, 1);
            items[25] = new closure_4("kuna", -1, 1);
            const tmp26 = new closure_4("kuna", -1, 1);
            items[26] = new closure_4("tuna", -1, 1);
            const tmp27 = new closure_4("tuna", -1, 1);
            items[27] = new closure_4("kizuna", -1, 1);
            const tmp28 = new closure_4("kizuna", -1, 1);
            items[28] = new closure_4("era", -1, 1);
            const tmp29 = new closure_4("era", -1, 1);
            items[29] = new closure_4("bera", 28, 1);
            const tmp30 = new closure_4("bera", 28, 1);
            items[30] = new closure_4("arabera", 29, 4);
            const tmp31 = new closure_4("arabera", 29, 4);
            items[31] = new closure_4("kera", 28, 1);
            const tmp32 = new closure_4("kera", 28, 1);
            items[32] = new closure_4("pera", 28, 1);
            const tmp33 = new closure_4("pera", 28, 1);
            items[33] = new closure_4("orra", -1, 1);
            const tmp34 = new closure_4("orra", -1, 1);
            items[34] = new closure_4("korra", 33, 1);
            const tmp35 = new closure_4("korra", 33, 1);
            items[35] = new closure_4("dura", -1, 1);
            const tmp36 = new closure_4("dura", -1, 1);
            items[36] = new closure_4("gura", -1, 1);
            const tmp37 = new closure_4("gura", -1, 1);
            items[37] = new closure_4("kura", -1, 1);
            const tmp38 = new closure_4("kura", -1, 1);
            items[38] = new closure_4("tura", -1, 1);
            const tmp39 = new closure_4("tura", -1, 1);
            items[39] = new closure_4("eta", -1, 1);
            const tmp40 = new closure_4("eta", -1, 1);
            items[40] = new closure_4("keta", 39, 1);
            const tmp41 = new closure_4("keta", 39, 1);
            items[41] = new closure_4("gailua", -1, 1);
            const tmp42 = new closure_4("gailua", -1, 1);
            items[42] = new closure_4("eza", -1, 1);
            const tmp43 = new closure_4("eza", -1, 1);
            items[43] = new closure_4("erreza", 42, 1);
            const tmp44 = new closure_4("erreza", 42, 1);
            items[44] = new closure_4("tza", -1, 2);
            const tmp45 = new closure_4("tza", -1, 2);
            items[45] = new closure_4("gaitza", 44, 1);
            const tmp46 = new closure_4("gaitza", 44, 1);
            items[46] = new closure_4("kaitza", 44, 1);
            const tmp47 = new closure_4("kaitza", 44, 1);
            items[47] = new closure_4("kuntza", 44, 1);
            const tmp48 = new closure_4("kuntza", 44, 1);
            items[48] = new closure_4("ide", -1, 1);
            const tmp49 = new closure_4("ide", -1, 1);
            items[49] = new closure_4("bide", 48, 1);
            const tmp50 = new closure_4("bide", 48, 1);
            items[50] = new closure_4("kide", 48, 1);
            const tmp51 = new closure_4("kide", 48, 1);
            items[51] = new closure_4("pide", 48, 1);
            const tmp52 = new closure_4("pide", 48, 1);
            items[52] = new closure_4("kunde", -1, 1);
            const tmp53 = new closure_4("kunde", -1, 1);
            items[53] = new closure_4("tzake", -1, 1);
            const tmp54 = new closure_4("tzake", -1, 1);
            items[54] = new closure_4("tzeke", -1, 1);
            const tmp55 = new closure_4("tzeke", -1, 1);
            items[55] = new closure_4("le", -1, 1);
            const tmp56 = new closure_4("le", -1, 1);
            items[56] = new closure_4("gale", 55, 1);
            const tmp57 = new closure_4("gale", 55, 1);
            items[57] = new closure_4("taile", 55, 1);
            const tmp58 = new closure_4("taile", 55, 1);
            items[58] = new closure_4("tzaile", 55, 1);
            const tmp59 = new closure_4("tzaile", 55, 1);
            items[59] = new closure_4("gune", -1, 1);
            const tmp60 = new closure_4("gune", -1, 1);
            items[60] = new closure_4("kune", -1, 1);
            const tmp61 = new closure_4("kune", -1, 1);
            items[61] = new closure_4("tze", -1, 1);
            const tmp62 = new closure_4("tze", -1, 1);
            items[62] = new closure_4("atze", 61, 1);
            const tmp63 = new closure_4("atze", 61, 1);
            items[63] = new closure_4("gai", -1, 1);
            const tmp64 = new closure_4("gai", -1, 1);
            items[64] = new closure_4("aldi", -1, 1);
            const tmp65 = new closure_4("aldi", -1, 1);
            items[65] = new closure_4("taldi", 64, 1);
            const tmp66 = new closure_4("taldi", 64, 1);
            items[66] = new closure_4("ki", -1, 1);
            const tmp67 = new closure_4("ki", -1, 1);
            items[67] = new closure_4("ari", -1, 1);
            const tmp68 = new closure_4("ari", -1, 1);
            items[68] = new closure_4("kari", 67, 1);
            const tmp69 = new closure_4("kari", 67, 1);
            items[69] = new closure_4("lari", 67, 1);
            const tmp70 = new closure_4("lari", 67, 1);
            items[70] = new closure_4("tari", 67, 1);
            const tmp71 = new closure_4("tari", 67, 1);
            items[71] = new closure_4("etari", 70, 1);
            const tmp72 = new closure_4("etari", 70, 1);
            items[72] = new closure_4("garri", -1, 2);
            const tmp73 = new closure_4("garri", -1, 2);
            items[73] = new closure_4("karri", -1, 1);
            const tmp74 = new closure_4("karri", -1, 1);
            items[74] = new closure_4("arazi", -1, 1);
            const tmp75 = new closure_4("arazi", -1, 1);
            items[75] = new closure_4("tarazi", 74, 1);
            const tmp76 = new closure_4("tarazi", 74, 1);
            items[76] = new closure_4("an", -1, 1);
            const tmp77 = new closure_4("an", -1, 1);
            items[77] = new closure_4("ean", 76, 1);
            const tmp78 = new closure_4("ean", 76, 1);
            items[78] = new closure_4("rean", 77, 1);
            const tmp79 = new closure_4("rean", 77, 1);
            items[79] = new closure_4("kan", 76, 1);
            const tmp80 = new closure_4("kan", 76, 1);
            items[80] = new closure_4("etan", 76, 1);
            const tmp81 = new closure_4("etan", 76, 1);
            items[81] = new closure_4("atseden", -1, 3);
            const tmp82 = new closure_4("atseden", -1, 3);
            items[82] = new closure_4("men", -1, 1);
            const tmp83 = new closure_4("men", -1, 1);
            items[83] = new closure_4("pen", -1, 1);
            const tmp84 = new closure_4("pen", -1, 1);
            items[84] = new closure_4("kin", -1, 1);
            const tmp85 = new closure_4("kin", -1, 1);
            items[85] = new closure_4("rekin", 84, 1);
            const tmp86 = new closure_4("rekin", 84, 1);
            items[86] = new closure_4("ezin", -1, 1);
            const tmp87 = new closure_4("ezin", -1, 1);
            items[87] = new closure_4("tezin", 86, 1);
            const tmp88 = new closure_4("tezin", 86, 1);
            items[88] = new closure_4("tun", -1, 1);
            const tmp89 = new closure_4("tun", -1, 1);
            items[89] = new closure_4("kizun", -1, 1);
            const tmp90 = new closure_4("kizun", -1, 1);
            items[90] = new closure_4("go", -1, 1);
            const tmp91 = new closure_4("go", -1, 1);
            items[91] = new closure_4("ago", 90, 1);
            const tmp92 = new closure_4("ago", 90, 1);
            items[92] = new closure_4("tio", -1, 1);
            const tmp93 = new closure_4("tio", -1, 1);
            items[93] = new closure_4("dako", -1, 1);
            const tmp94 = new closure_4("dako", -1, 1);
            items[94] = new closure_4("or", -1, 1);
            const tmp95 = new closure_4("or", -1, 1);
            items[95] = new closure_4("kor", 94, 1);
            const tmp96 = new closure_4("kor", 94, 1);
            items[96] = new closure_4("tzat", -1, 1);
            const tmp97 = new closure_4("tzat", -1, 1);
            items[97] = new closure_4("du", -1, 1);
            const tmp98 = new closure_4("du", -1, 1);
            items[98] = new closure_4("gailu", -1, 1);
            tmp = new closure_4("tu", -1, 1);
            items[99] = tmp;
            tmp = new closure_4("atu", 99, 1);
            items[100] = tmp;
            tmp = new closure_4("aldatu", 100, 1);
            items[101] = tmp;
            tmp = new closure_4("tatu", 100, 1);
            items[102] = tmp;
            tmp = new closure_4("baditu", 99, 5);
            items[103] = tmp;
            tmp = new closure_4("ez", -1, 1);
            items[104] = tmp;
            tmp = new closure_4("errez", 104, 1);
            items[105] = tmp;
            tmp = new closure_4("tzez", 104, 1);
            items[106] = tmp;
            tmp = new closure_4("gaitz", -1, 1);
            items[107] = tmp;
            tmp = new closure_4("kaitz", -1, 1);
            items[108] = tmp;
            basqueStemmer.a_0 = items;
            return items;
          }
        },
        {
          key: "a_1",
          get() {
            delete r1.a_1;
            let tmp = new closure_4("ada", -1, 1);
            const items = [tmp, new closure_4("kada", 0, 1), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp2 = new closure_4("kada", 0, 1);
            items[2] = new closure_4("anda", -1, 1);
            const tmp3 = new closure_4("anda", -1, 1);
            items[3] = new closure_4("denda", -1, 1);
            const tmp4 = new closure_4("denda", -1, 1);
            items[4] = new closure_4("gabea", -1, 1);
            const tmp5 = new closure_4("gabea", -1, 1);
            items[5] = new closure_4("kabea", -1, 1);
            const tmp6 = new closure_4("kabea", -1, 1);
            items[6] = new closure_4("aldea", -1, 1);
            const tmp7 = new closure_4("aldea", -1, 1);
            items[7] = new closure_4("kaldea", 6, 1);
            const tmp8 = new closure_4("kaldea", 6, 1);
            items[8] = new closure_4("taldea", 6, 1);
            const tmp9 = new closure_4("taldea", 6, 1);
            items[9] = new closure_4("ordea", -1, 1);
            const tmp10 = new closure_4("ordea", -1, 1);
            items[10] = new closure_4("zalea", -1, 1);
            const tmp11 = new closure_4("zalea", -1, 1);
            items[11] = new closure_4("tzalea", 10, 1);
            const tmp12 = new closure_4("tzalea", 10, 1);
            items[12] = new closure_4("gilea", -1, 1);
            const tmp13 = new closure_4("gilea", -1, 1);
            items[13] = new closure_4("emea", -1, 1);
            const tmp14 = new closure_4("emea", -1, 1);
            items[14] = new closure_4("kumea", -1, 1);
            const tmp15 = new closure_4("kumea", -1, 1);
            items[15] = new closure_4("nea", -1, 1);
            const tmp16 = new closure_4("nea", -1, 1);
            items[16] = new closure_4("enea", 15, 1);
            const tmp17 = new closure_4("enea", 15, 1);
            items[17] = new closure_4("zionea", 15, 1);
            const tmp18 = new closure_4("zionea", 15, 1);
            items[18] = new closure_4("unea", 15, 1);
            const tmp19 = new closure_4("unea", 15, 1);
            items[19] = new closure_4("gunea", 18, 1);
            const tmp20 = new closure_4("gunea", 18, 1);
            items[20] = new closure_4("pea", -1, 1);
            const tmp21 = new closure_4("pea", -1, 1);
            items[21] = new closure_4("aurrea", -1, 1);
            const tmp22 = new closure_4("aurrea", -1, 1);
            items[22] = new closure_4("tea", -1, 1);
            const tmp23 = new closure_4("tea", -1, 1);
            items[23] = new closure_4("kotea", 22, 1);
            const tmp24 = new closure_4("kotea", 22, 1);
            items[24] = new closure_4("artea", 22, 1);
            const tmp25 = new closure_4("artea", 22, 1);
            items[25] = new closure_4("ostea", 22, 1);
            const tmp26 = new closure_4("ostea", 22, 1);
            items[26] = new closure_4("etxea", -1, 1);
            const tmp27 = new closure_4("etxea", -1, 1);
            items[27] = new closure_4("ga", -1, 1);
            const tmp28 = new closure_4("ga", -1, 1);
            items[28] = new closure_4("anga", 27, 1);
            const tmp29 = new closure_4("anga", 27, 1);
            items[29] = new closure_4("gaia", -1, 1);
            const tmp30 = new closure_4("gaia", -1, 1);
            items[30] = new closure_4("aldia", -1, 1);
            const tmp31 = new closure_4("aldia", -1, 1);
            items[31] = new closure_4("taldia", 30, 1);
            const tmp32 = new closure_4("taldia", 30, 1);
            items[32] = new closure_4("handia", -1, 1);
            const tmp33 = new closure_4("handia", -1, 1);
            items[33] = new closure_4("mendia", -1, 1);
            const tmp34 = new closure_4("mendia", -1, 1);
            items[34] = new closure_4("geia", -1, 1);
            const tmp35 = new closure_4("geia", -1, 1);
            items[35] = new closure_4("egia", -1, 1);
            const tmp36 = new closure_4("egia", -1, 1);
            items[36] = new closure_4("degia", 35, 1);
            const tmp37 = new closure_4("degia", 35, 1);
            items[37] = new closure_4("tegia", 35, 1);
            const tmp38 = new closure_4("tegia", 35, 1);
            items[38] = new closure_4("nahia", -1, 1);
            const tmp39 = new closure_4("nahia", -1, 1);
            items[39] = new closure_4("ohia", -1, 1);
            const tmp40 = new closure_4("ohia", -1, 1);
            items[40] = new closure_4("kia", -1, 1);
            const tmp41 = new closure_4("kia", -1, 1);
            items[41] = new closure_4("tokia", 40, 1);
            const tmp42 = new closure_4("tokia", 40, 1);
            items[42] = new closure_4("oia", -1, 1);
            const tmp43 = new closure_4("oia", -1, 1);
            items[43] = new closure_4("koia", 42, 1);
            const tmp44 = new closure_4("koia", 42, 1);
            items[44] = new closure_4("aria", -1, 1);
            const tmp45 = new closure_4("aria", -1, 1);
            items[45] = new closure_4("karia", 44, 1);
            const tmp46 = new closure_4("karia", 44, 1);
            items[46] = new closure_4("laria", 44, 1);
            const tmp47 = new closure_4("laria", 44, 1);
            items[47] = new closure_4("taria", 44, 1);
            const tmp48 = new closure_4("taria", 44, 1);
            items[48] = new closure_4("eria", -1, 1);
            const tmp49 = new closure_4("eria", -1, 1);
            items[49] = new closure_4("keria", 48, 1);
            const tmp50 = new closure_4("keria", 48, 1);
            items[50] = new closure_4("teria", 48, 1);
            const tmp51 = new closure_4("teria", 48, 1);
            items[51] = new closure_4("garria", -1, 2);
            const tmp52 = new closure_4("garria", -1, 2);
            items[52] = new closure_4("larria", -1, 1);
            const tmp53 = new closure_4("larria", -1, 1);
            items[53] = new closure_4("kirria", -1, 1);
            const tmp54 = new closure_4("kirria", -1, 1);
            items[54] = new closure_4("duria", -1, 1);
            const tmp55 = new closure_4("duria", -1, 1);
            items[55] = new closure_4("asia", -1, 1);
            const tmp56 = new closure_4("asia", -1, 1);
            items[56] = new closure_4("tia", -1, 1);
            const tmp57 = new closure_4("tia", -1, 1);
            items[57] = new closure_4("ezia", -1, 1);
            const tmp58 = new closure_4("ezia", -1, 1);
            items[58] = new closure_4("bizia", -1, 1);
            const tmp59 = new closure_4("bizia", -1, 1);
            items[59] = new closure_4("ontzia", -1, 1);
            const tmp60 = new closure_4("ontzia", -1, 1);
            items[60] = new closure_4("ka", -1, 1);
            const tmp61 = new closure_4("ka", -1, 1);
            items[61] = new closure_4("joka", 60, 3);
            const tmp62 = new closure_4("joka", 60, 3);
            items[62] = new closure_4("aurka", 60, 10);
            const tmp63 = new closure_4("aurka", 60, 10);
            items[63] = new closure_4("ska", 60, 1);
            const tmp64 = new closure_4("ska", 60, 1);
            items[64] = new closure_4("xka", 60, 1);
            const tmp65 = new closure_4("xka", 60, 1);
            items[65] = new closure_4("zka", 60, 1);
            const tmp66 = new closure_4("zka", 60, 1);
            items[66] = new closure_4("gibela", -1, 1);
            const tmp67 = new closure_4("gibela", -1, 1);
            items[67] = new closure_4("gela", -1, 1);
            const tmp68 = new closure_4("gela", -1, 1);
            items[68] = new closure_4("kaila", -1, 1);
            const tmp69 = new closure_4("kaila", -1, 1);
            items[69] = new closure_4("skila", -1, 1);
            const tmp70 = new closure_4("skila", -1, 1);
            items[70] = new closure_4("tila", -1, 1);
            const tmp71 = new closure_4("tila", -1, 1);
            items[71] = new closure_4("ola", -1, 1);
            const tmp72 = new closure_4("ola", -1, 1);
            items[72] = new closure_4("na", -1, 1);
            const tmp73 = new closure_4("na", -1, 1);
            items[73] = new closure_4("kana", 72, 1);
            const tmp74 = new closure_4("kana", 72, 1);
            items[74] = new closure_4("ena", 72, 1);
            const tmp75 = new closure_4("ena", 72, 1);
            items[75] = new closure_4("garrena", 74, 1);
            const tmp76 = new closure_4("garrena", 74, 1);
            items[76] = new closure_4("gerrena", 74, 1);
            const tmp77 = new closure_4("gerrena", 74, 1);
            items[77] = new closure_4("urrena", 74, 1);
            const tmp78 = new closure_4("urrena", 74, 1);
            items[78] = new closure_4("zaina", 72, 1);
            const tmp79 = new closure_4("zaina", 72, 1);
            items[79] = new closure_4("tzaina", 78, 1);
            const tmp80 = new closure_4("tzaina", 78, 1);
            items[80] = new closure_4("kina", 72, 1);
            const tmp81 = new closure_4("kina", 72, 1);
            items[81] = new closure_4("mina", 72, 1);
            const tmp82 = new closure_4("mina", 72, 1);
            items[82] = new closure_4("garna", 72, 1);
            const tmp83 = new closure_4("garna", 72, 1);
            items[83] = new closure_4("una", 72, 1);
            const tmp84 = new closure_4("una", 72, 1);
            items[84] = new closure_4("duna", 83, 1);
            const tmp85 = new closure_4("duna", 83, 1);
            items[85] = new closure_4("asuna", 83, 1);
            const tmp86 = new closure_4("asuna", 83, 1);
            items[86] = new closure_4("tasuna", 85, 1);
            const tmp87 = new closure_4("tasuna", 85, 1);
            items[87] = new closure_4("ondoa", -1, 1);
            const tmp88 = new closure_4("ondoa", -1, 1);
            items[88] = new closure_4("kondoa", 87, 1);
            const tmp89 = new closure_4("kondoa", 87, 1);
            items[89] = new closure_4("ngoa", -1, 1);
            const tmp90 = new closure_4("ngoa", -1, 1);
            items[90] = new closure_4("zioa", -1, 1);
            const tmp91 = new closure_4("zioa", -1, 1);
            items[91] = new closure_4("koa", -1, 1);
            const tmp92 = new closure_4("koa", -1, 1);
            items[92] = new closure_4("takoa", 91, 1);
            const tmp93 = new closure_4("takoa", 91, 1);
            items[93] = new closure_4("zkoa", 91, 1);
            const tmp94 = new closure_4("zkoa", 91, 1);
            items[94] = new closure_4("noa", -1, 1);
            const tmp95 = new closure_4("noa", -1, 1);
            items[95] = new closure_4("zinoa", 94, 1);
            const tmp96 = new closure_4("zinoa", 94, 1);
            items[96] = new closure_4("aroa", -1, 1);
            const tmp97 = new closure_4("aroa", -1, 1);
            items[97] = new closure_4("taroa", 96, 1);
            const tmp98 = new closure_4("taroa", 96, 1);
            items[98] = new closure_4("zaroa", 96, 1);
            tmp = new closure_4("eroa", -1, 1);
            items[99] = tmp;
            tmp = new closure_4("oroa", -1, 1);
            items[100] = tmp;
            tmp = new closure_4("osoa", -1, 1);
            items[101] = tmp;
            tmp = new closure_4("toa", -1, 1);
            items[102] = tmp;
            tmp = new closure_4("ttoa", 102, 1);
            items[103] = tmp;
            tmp = new closure_4("ztoa", 102, 1);
            items[104] = tmp;
            tmp = new closure_4("txoa", -1, 1);
            items[105] = tmp;
            tmp = new closure_4("tzoa", -1, 1);
            items[106] = tmp;
            tmp = new closure_4("\u00F1oa", -1, 1);
            items[107] = tmp;
            tmp = new closure_4("ra", -1, 1);
            items[108] = tmp;
            tmp = new closure_4("ara", 108, 1);
            items[109] = tmp;
            tmp = new closure_4("dara", 109, 1);
            items[110] = tmp;
            tmp = new closure_4("liara", 109, 1);
            items[111] = tmp;
            tmp = new closure_4("tiara", 109, 1);
            items[112] = tmp;
            tmp = new closure_4("tara", 109, 1);
            items[113] = tmp;
            tmp = new closure_4("etara", 113, 1);
            items[114] = tmp;
            tmp = new closure_4("tzara", 109, 1);
            items[115] = tmp;
            tmp = new closure_4("bera", 108, 1);
            items[116] = tmp;
            tmp = new closure_4("kera", 108, 1);
            items[117] = tmp;
            tmp = new closure_4("pera", 108, 1);
            items[118] = tmp;
            tmp = new closure_4("ora", 108, 2);
            items[119] = tmp;
            tmp = new closure_4("tzarra", 108, 1);
            items[120] = tmp;
            tmp = new closure_4("korra", 108, 1);
            items[121] = tmp;
            tmp = new closure_4("tra", 108, 1);
            items[122] = tmp;
            tmp = new closure_4("sa", -1, 1);
            items[123] = tmp;
            tmp = new closure_4("osa", 123, 1);
            items[124] = tmp;
            tmp = new closure_4("ta", -1, 1);
            items[125] = tmp;
            tmp = new closure_4("eta", 125, 1);
            items[126] = tmp;
            tmp = new closure_4("keta", 126, 1);
            items[127] = tmp;
            tmp = new closure_4("sta", 125, 1);
            items[128] = tmp;
            tmp = new closure_4("dua", -1, 1);
            items[129] = tmp;
            tmp = new closure_4("mendua", 129, 1);
            items[130] = tmp;
            tmp = new closure_4("ordua", 129, 1);
            items[131] = tmp;
            tmp = new closure_4("lekua", -1, 1);
            items[132] = tmp;
            tmp = new closure_4("burua", -1, 1);
            items[133] = tmp;
            tmp = new closure_4("durua", -1, 1);
            items[134] = tmp;
            tmp = new closure_4("tsua", -1, 1);
            items[135] = tmp;
            tmp = new closure_4("tua", -1, 1);
            items[136] = tmp;
            tmp = new closure_4("mentua", 136, 1);
            items[137] = tmp;
            tmp = new closure_4("estua", 136, 1);
            items[138] = tmp;
            tmp = new closure_4("txua", -1, 1);
            items[139] = tmp;
            tmp = new closure_4("zua", -1, 1);
            items[140] = tmp;
            tmp = new closure_4("tzua", 140, 1);
            items[141] = tmp;
            tmp = new closure_4("za", -1, 1);
            items[142] = tmp;
            tmp = new closure_4("eza", 142, 1);
            items[143] = tmp;
            tmp = new closure_4("eroza", 142, 1);
            items[144] = tmp;
            tmp = new closure_4("tza", 142, 2);
            items[145] = tmp;
            tmp = new closure_4("koitza", 145, 1);
            items[146] = tmp;
            tmp = new closure_4("antza", 145, 1);
            items[147] = tmp;
            tmp = new closure_4("gintza", 145, 1);
            items[148] = tmp;
            tmp = new closure_4("kintza", 145, 1);
            items[149] = tmp;
            tmp = new closure_4("kuntza", 145, 1);
            items[150] = tmp;
            tmp = new closure_4("gabe", -1, 1);
            items[151] = tmp;
            tmp = new closure_4("kabe", -1, 1);
            items[152] = tmp;
            tmp = new closure_4("kide", -1, 1);
            items[153] = tmp;
            tmp = new closure_4("alde", -1, 1);
            items[154] = tmp;
            tmp = new closure_4("kalde", 154, 1);
            items[155] = tmp;
            tmp = new closure_4("talde", 154, 1);
            items[156] = tmp;
            tmp = new closure_4("orde", -1, 1);
            items[157] = tmp;
            tmp = new closure_4("ge", -1, 1);
            items[158] = tmp;
            tmp = new closure_4("zale", -1, 1);
            items[159] = tmp;
            tmp = new closure_4("tzale", 159, 1);
            items[160] = tmp;
            tmp = new closure_4("gile", -1, 1);
            items[161] = tmp;
            tmp = new closure_4("eme", -1, 1);
            items[162] = tmp;
            tmp = new closure_4("kume", -1, 1);
            items[163] = tmp;
            tmp = new closure_4("ne", -1, 1);
            items[164] = tmp;
            tmp = new closure_4("zione", 164, 1);
            items[165] = tmp;
            tmp = new closure_4("une", 164, 1);
            items[166] = tmp;
            tmp = new closure_4("gune", 166, 1);
            items[167] = tmp;
            tmp = new closure_4("pe", -1, 1);
            items[168] = tmp;
            tmp = new closure_4("aurre", -1, 1);
            items[169] = tmp;
            tmp = new closure_4("te", -1, 1);
            items[170] = tmp;
            tmp = new closure_4("kote", 170, 1);
            items[171] = tmp;
            tmp = new closure_4("arte", 170, 1);
            items[172] = tmp;
            tmp = new closure_4("oste", 170, 1);
            items[173] = tmp;
            tmp = new closure_4("etxe", -1, 1);
            items[174] = tmp;
            tmp = new closure_4("gai", -1, 1);
            items[175] = tmp;
            tmp = new closure_4("di", -1, 1);
            items[176] = tmp;
            tmp = new closure_4("aldi", 176, 1);
            items[177] = tmp;
            tmp = new closure_4("taldi", 177, 1);
            items[178] = tmp;
            tmp = new closure_4("geldi", 176, 8);
            items[179] = tmp;
            tmp = new closure_4("handi", 176, 1);
            items[180] = tmp;
            tmp = new closure_4("mendi", 176, 1);
            items[181] = tmp;
            tmp = new closure_4("gei", -1, 1);
            items[182] = tmp;
            tmp = new closure_4("egi", -1, 1);
            items[183] = tmp;
            tmp = new closure_4("degi", 183, 1);
            items[184] = tmp;
            tmp = new closure_4("tegi", 183, 1);
            items[185] = tmp;
            tmp = new closure_4("nahi", -1, 1);
            items[186] = tmp;
            tmp = new closure_4("ohi", -1, 1);
            items[187] = tmp;
            tmp = new closure_4("ki", -1, 1);
            items[188] = tmp;
            tmp = new closure_4("toki", 188, 1);
            items[189] = tmp;
            tmp = new closure_4("oi", -1, 1);
            items[190] = tmp;
            tmp = new closure_4("goi", 190, 1);
            items[191] = tmp;
            tmp = new closure_4("koi", 190, 1);
            items[192] = tmp;
            tmp = new closure_4("ari", -1, 1);
            items[193] = tmp;
            tmp = new closure_4("kari", 193, 1);
            items[194] = tmp;
            tmp = new closure_4("lari", 193, 1);
            items[195] = tmp;
            tmp = new closure_4("tari", 193, 1);
            items[196] = tmp;
            tmp = new closure_4("garri", -1, 2);
            items[197] = tmp;
            tmp = new closure_4("larri", -1, 1);
            items[198] = tmp;
            tmp = new closure_4("kirri", -1, 1);
            items[199] = tmp;
            tmp = new closure_4("duri", -1, 1);
            items[200] = tmp;
            tmp = new closure_4("asi", -1, 1);
            items[201] = tmp;
            tmp = new closure_4("ti", -1, 1);
            items[202] = tmp;
            tmp = new closure_4("ontzi", -1, 1);
            items[203] = tmp;
            tmp = new closure_4("\u00F1i", -1, 1);
            items[204] = tmp;
            tmp = new closure_4("ak", -1, 1);
            items[205] = tmp;
            tmp = new closure_4("ek", -1, 1);
            items[206] = tmp;
            tmp = new closure_4("tarik", -1, 1);
            items[207] = tmp;
            tmp = new closure_4("gibel", -1, 1);
            items[208] = tmp;
            tmp = new closure_4("ail", -1, 1);
            items[209] = tmp;
            tmp = new closure_4("kail", 209, 1);
            items[210] = tmp;
            tmp = new closure_4("kan", -1, 1);
            items[211] = tmp;
            tmp = new closure_4("tan", -1, 1);
            items[212] = tmp;
            tmp = new closure_4("etan", 212, 1);
            items[213] = tmp;
            tmp = new closure_4("en", -1, 4);
            items[214] = tmp;
            tmp = new closure_4("ren", 214, 2);
            items[215] = tmp;
            tmp = new closure_4("garren", 215, 1);
            items[216] = tmp;
            tmp = new closure_4("gerren", 215, 1);
            items[217] = tmp;
            tmp = new closure_4("urren", 215, 1);
            items[218] = tmp;
            tmp = new closure_4("ten", 214, 4);
            items[219] = tmp;
            tmp = new closure_4("tzen", 214, 4);
            items[220] = tmp;
            tmp = new closure_4("zain", -1, 1);
            items[221] = tmp;
            tmp = new closure_4("tzain", 221, 1);
            items[222] = tmp;
            tmp = new closure_4("kin", -1, 1);
            items[223] = tmp;
            tmp = new closure_4("min", -1, 1);
            items[224] = tmp;
            tmp = new closure_4("dun", -1, 1);
            items[225] = tmp;
            tmp = new closure_4("asun", -1, 1);
            items[226] = tmp;
            tmp = new closure_4("tasun", 226, 1);
            items[227] = tmp;
            tmp = new closure_4("aizun", -1, 1);
            items[228] = tmp;
            tmp = new closure_4("ondo", -1, 1);
            items[229] = tmp;
            tmp = new closure_4("kondo", 229, 1);
            items[230] = tmp;
            tmp = new closure_4("go", -1, 1);
            items[231] = tmp;
            tmp = new closure_4("ngo", 231, 1);
            items[232] = tmp;
            tmp = new closure_4("zio", -1, 1);
            items[233] = tmp;
            tmp = new closure_4("ko", -1, 1);
            items[234] = tmp;
            tmp = new closure_4("trako", 234, 5);
            items[235] = tmp;
            tmp = new closure_4("tako", 234, 1);
            items[236] = tmp;
            tmp = new closure_4("etako", 236, 1);
            items[237] = tmp;
            tmp = new closure_4("eko", 234, 1);
            items[238] = tmp;
            tmp = new closure_4("tariko", 234, 1);
            items[239] = tmp;
            tmp = new closure_4("sko", 234, 1);
            items[240] = tmp;
            tmp = new closure_4("tuko", 234, 1);
            items[241] = tmp;
            tmp = new closure_4("minutuko", 241, 6);
            items[242] = tmp;
            tmp = new closure_4("zko", 234, 1);
            items[243] = tmp;
            tmp = new closure_4("no", -1, 1);
            items[244] = tmp;
            tmp = new closure_4("zino", 244, 1);
            items[245] = tmp;
            tmp = new closure_4("ro", -1, 1);
            items[246] = tmp;
            tmp = new closure_4("aro", 246, 1);
            items[247] = tmp;
            tmp = new closure_4("igaro", 247, 9);
            items[248] = tmp;
            tmp = new closure_4("taro", 247, 1);
            items[249] = tmp;
            tmp = new closure_4("zaro", 247, 1);
            items[250] = tmp;
            tmp = new closure_4("ero", 246, 1);
            items[251] = tmp;
            tmp = new closure_4("giro", 246, 1);
            items[252] = tmp;
            tmp = new closure_4("oro", 246, 1);
            items[253] = tmp;
            tmp = new closure_4("oso", -1, 1);
            items[254] = tmp;
            tmp = new closure_4("to", -1, 1);
            items[255] = tmp;
            tmp = new closure_4("tto", 255, 1);
            items[256] = tmp;
            tmp = new closure_4("zto", 255, 1);
            items[257] = tmp;
            tmp = new closure_4("txo", -1, 1);
            items[258] = tmp;
            tmp = new closure_4("tzo", -1, 1);
            items[259] = tmp;
            tmp = new closure_4("gintzo", 259, 1);
            items[260] = tmp;
            tmp = new closure_4("\u00F1o", -1, 1);
            items[261] = tmp;
            tmp = new closure_4("zp", -1, 1);
            items[262] = tmp;
            tmp = new closure_4("ar", -1, 1);
            items[263] = tmp;
            tmp = new closure_4("dar", 263, 1);
            items[264] = tmp;
            tmp = new closure_4("behar", 263, 1);
            items[265] = tmp;
            tmp = new closure_4("zehar", 263, 7);
            items[266] = tmp;
            tmp = new closure_4("liar", 263, 1);
            items[267] = tmp;
            tmp = new closure_4("tiar", 263, 1);
            items[268] = tmp;
            tmp = new closure_4("tar", 263, 1);
            items[269] = tmp;
            tmp = new closure_4("tzar", 263, 1);
            items[270] = tmp;
            tmp = new closure_4("or", -1, 2);
            items[271] = tmp;
            tmp = new closure_4("kor", 271, 1);
            items[272] = tmp;
            tmp = new closure_4("os", -1, 1);
            items[273] = tmp;
            tmp = new closure_4("ket", -1, 1);
            items[274] = tmp;
            tmp = new closure_4("du", -1, 1);
            items[275] = tmp;
            tmp = new closure_4("mendu", 275, 1);
            items[276] = tmp;
            tmp = new closure_4("ordu", 275, 1);
            items[277] = tmp;
            tmp = new closure_4("leku", -1, 1);
            items[278] = tmp;
            tmp = new closure_4("buru", -1, 2);
            items[279] = tmp;
            tmp = new closure_4("duru", -1, 1);
            items[280] = tmp;
            tmp = new closure_4("tsu", -1, 1);
            items[281] = tmp;
            tmp = new closure_4("tu", -1, 1);
            items[282] = tmp;
            tmp = new closure_4("tatu", 282, 4);
            items[283] = tmp;
            tmp = new closure_4("mentu", 282, 1);
            items[284] = tmp;
            tmp = new closure_4("estu", 282, 1);
            items[285] = tmp;
            tmp = new closure_4("txu", -1, 1);
            items[286] = tmp;
            tmp = new closure_4("zu", -1, 1);
            items[287] = tmp;
            tmp = new closure_4("tzu", 287, 1);
            items[288] = tmp;
            tmp = new closure_4("gintzu", 288, 1);
            items[289] = tmp;
            tmp = new closure_4("z", -1, 1);
            items[290] = tmp;
            tmp = new closure_4("ez", 290, 1);
            items[291] = tmp;
            tmp = new closure_4("eroz", 290, 1);
            items[292] = tmp;
            tmp = new closure_4("tz", 290, 1);
            items[293] = tmp;
            tmp = new closure_4("koitz", 293, 1);
            items[294] = tmp;
            basqueStemmer.a_1 = items;
            return items;
          }
        },
        {
          key: "a_2",
          get() {
            delete r1.a_2;
            const items = [new closure_4("zlea", -1, 2), , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("zlea", -1, 2);
            items[1] = new closure_4("keria", -1, 1);
            const tmp2 = new closure_4("keria", -1, 1);
            items[2] = new closure_4("la", -1, 1);
            const tmp3 = new closure_4("la", -1, 1);
            items[3] = new closure_4("era", -1, 1);
            const tmp4 = new closure_4("era", -1, 1);
            items[4] = new closure_4("dade", -1, 1);
            const tmp5 = new closure_4("dade", -1, 1);
            items[5] = new closure_4("tade", -1, 1);
            const tmp6 = new closure_4("tade", -1, 1);
            items[6] = new closure_4("date", -1, 1);
            const tmp7 = new closure_4("date", -1, 1);
            items[7] = new closure_4("tate", -1, 1);
            const tmp8 = new closure_4("tate", -1, 1);
            items[8] = new closure_4("gi", -1, 1);
            const tmp9 = new closure_4("gi", -1, 1);
            items[9] = new closure_4("ki", -1, 1);
            const tmp10 = new closure_4("ki", -1, 1);
            items[10] = new closure_4("ik", -1, 1);
            const tmp11 = new closure_4("ik", -1, 1);
            items[11] = new closure_4("lanik", 10, 1);
            const tmp12 = new closure_4("lanik", 10, 1);
            items[12] = new closure_4("rik", 10, 1);
            const tmp13 = new closure_4("rik", 10, 1);
            items[13] = new closure_4("larik", 12, 1);
            const tmp14 = new closure_4("larik", 12, 1);
            items[14] = new closure_4("ztik", 10, 1);
            const tmp15 = new closure_4("ztik", 10, 1);
            items[15] = new closure_4("go", -1, 1);
            const tmp16 = new closure_4("go", -1, 1);
            items[16] = new closure_4("ro", -1, 1);
            const tmp17 = new closure_4("ro", -1, 1);
            items[17] = new closure_4("ero", 16, 1);
            const tmp18 = new closure_4("ero", 16, 1);
            items[18] = new closure_4("to", -1, 1);
            basqueStemmer.a_2 = items;
            return items;
          }
        },
        {
          key: "g_v",
          get() {
            delete r1.g_v;
            const items = [];
            basqueStemmer.g_v = items;
            return items;
          }
        }
      ];
      callback(basqueStemmer, items, items1);
      return basqueStemmer;
    }(tmp3);
    let closure_8 = (arg0) => {
      function catalanStemmer() {
        callback3(this, catalanStemmer);
        const prototypeOf = Object.getPrototypeOf(catalanStemmer);
        return callback2(this, prototypeOf(...arguments));
      }
      const callback = catalanStemmer;
      _inherits(catalanStemmer, arg0);
      let obj = {
        key: "r_mark_regions$esjava$0",
        value: function r_mark_regions$esjava$0() {
          const self = this;
          ({ limit: this.I_p1, limit: this.I_p2 } = this);
          while (!self.in_grouping$esjava$3(catalanStemmer.g_v, 97, 252)) {
            if (self.cursor < self.limit) {
              self.cursor = self.cursor + 1;
              // continue
            }
            self.cursor = tmp;
            let flag = true;
            return true;
          }
          const cursor = self.cursor;
          while (!self.out_grouping$esjava$3(catalanStemmer.g_v, 97, 252)) {
            if (cursor < self.limit) {
              self.cursor = self.cursor + 1;
              // continue
            }
          }
          self.I_p1 = cursor;
          while (!self.in_grouping$esjava$3(catalanStemmer.g_v, 97, 252)) {
            if (self.cursor < self.limit) {
              self.cursor = self.cursor + 1;
              // continue
            }
          }
          const cursor2 = self.cursor;
          while (!self.out_grouping$esjava$3(catalanStemmer.g_v, 97, 252)) {
            if (cursor2 < self.limit) {
              self.cursor = self.cursor + 1;
              // continue
            }
          }
          self.I_p2 = cursor2;
        }
      };
      const items = [obj, , , , , , , , , , , ];
      obj = {
        key: "r_cleaning$esjava$0",
        value: function r_cleaning$esjava$0() {
          const self = this;
          self.bra = self.cursor;
          while (0 !== self.find_among$esjava$1(catalanStemmer.a_0)) {
            if (self.cursor >= self.limit) {
              break;
            } else {
              self.cursor = self.cursor + 1;
              // continue
            }
          }
          self.cursor = self.cursor;
          return true;
        }
      };
      items[1] = obj;
      obj = {
        key: "r_R1$esjava$0",
        value: function r_R1$esjava$0() {
          return this.I_p1 <= this.cursor;
        }
      };
      items[2] = obj;
      items[3] = {
        key: "r_R2$esjava$0",
        value: function r_R2$esjava$0() {
          return this.I_p2 <= this.cursor;
        }
      };
      items[4] = {
        key: "r_attached_pronoun$esjava$0",
        value: function r_attached_pronoun$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(catalanStemmer.a_1);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.r_R1$esjava$0()) {
                  const result1 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              }
              return true;
            }
          }
        }
      };
      items[5] = {
        key: "r_standard_suffix$esjava$0",
        value: function r_standard_suffix$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(catalanStemmer.a_2);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.r_R1$esjava$0()) {
                  const result1 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              } else if (2 === result) {
                if (self.r_R2$esjava$0()) {
                  const result2 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              } else if (3 === result) {
                if (self.r_R2$esjava$0()) {
                  const result3 = self.slice_from$esjava$1("log");
                } else {
                  return false;
                }
              } else if (4 === result) {
                if (self.r_R2$esjava$0()) {
                  const result4 = self.slice_from$esjava$1("ic");
                } else {
                  return false;
                }
              } else if (5 === result) {
                if (self.r_R1$esjava$0()) {
                  const result5 = self.slice_from$esjava$1("c");
                } else {
                  return false;
                }
              }
              return true;
            }
          }
        }
      };
      items[6] = {
        key: "r_verb_suffix$esjava$0",
        value: function r_verb_suffix$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(catalanStemmer.a_3);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.r_R1$esjava$0()) {
                  const result1 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              } else if (2 === result) {
                if (self.r_R2$esjava$0()) {
                  const result2 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              }
              return true;
            }
          }
        }
      };
      items[7] = {
        key: "r_residual_suffix$esjava$0",
        value: function r_residual_suffix$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(catalanStemmer.a_4);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.r_R1$esjava$0()) {
                  const result1 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              } else if (2 === result) {
                if (self.r_R1$esjava$0()) {
                  const result2 = self.slice_from$esjava$1("ic");
                } else {
                  return false;
                }
              }
              return true;
            }
          }
        }
      };
      items[8] = {
        key: "stem$esjava$0",
        value: function stem$esjava$0() {
          let cursor;
          const self = this;
          const result = this.r_mark_regions$esjava$0();
          this.cursor = this.cursor;
          ({ cursor: this.limit_backward, limit: this.cursor } = this);
          const diff = this.limit - this.cursor;
          const result1 = this.r_attached_pronoun$esjava$0();
          this.cursor = this.limit - diff;
          const diff1 = this.limit - this.cursor;
          const diff2 = this.limit - this.cursor;
          if (!this.r_standard_suffix$esjava$0()) {
            self.cursor = self.limit - diff2;
            const result2 = self.r_verb_suffix$esjava$0();
          }
          self.cursor = self.limit - diff1;
          const diff3 = self.limit - self.cursor;
          const result3 = self.r_residual_suffix$esjava$0();
          self.cursor = self.limit - diff3;
          ({ limit_backward: self.cursor, cursor } = self);
          const result4 = self.r_cleaning$esjava$0();
          self.cursor = cursor;
          return true;
        }
      };
      items[9] = {
        key: "stem",
        value: function stem() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const stem$esjava$0 = self.stem$esjava$0;
            let applyResult = stem$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(catalanStemmer.prototype), "stem", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[10] = {
        key: "I_p2",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p2")) {
            let num = self._$esjava$I_p2;
          } else {
            num = 0;
            self._$esjava$I_p2 = 0;
          }
          return num;
        },
        set(_$esjava$I_p2) {
          this._$esjava$I_p2 = _$esjava$I_p2;
        }
      };
      items[11] = {
        key: "I_p1",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p1")) {
            let num = self._$esjava$I_p1;
          } else {
            num = 0;
            self._$esjava$I_p1 = 0;
          }
          return num;
        },
        set(_$esjava$I_p1) {
          this._$esjava$I_p1 = _$esjava$I_p1;
        }
      };
      const items1 = [
        {
          key: "a_0",
          get() {
            delete r1.a_0;
            const items = [new closure_4("", -1, 13), , , , , , , , , , , , ];
            const tmp = new closure_4("", -1, 13);
            items[1] = new closure_4("\u00B7", 0, 12);
            const tmp2 = new closure_4("\u00B7", 0, 12);
            items[2] = new closure_4("\u00E0", 0, 2);
            const tmp3 = new closure_4("\u00E0", 0, 2);
            items[3] = new closure_4("\u00E1", 0, 1);
            const tmp4 = new closure_4("\u00E1", 0, 1);
            items[4] = new closure_4("\u00E8", 0, 4);
            const tmp5 = new closure_4("\u00E8", 0, 4);
            items[5] = new closure_4("\u00E9", 0, 3);
            const tmp6 = new closure_4("\u00E9", 0, 3);
            items[6] = new closure_4("\u00EC", 0, 6);
            const tmp7 = new closure_4("\u00EC", 0, 6);
            items[7] = new closure_4("\u00ED", 0, 5);
            const tmp8 = new closure_4("\u00ED", 0, 5);
            items[8] = new closure_4("\u00EF", 0, 11);
            const tmp9 = new closure_4("\u00EF", 0, 11);
            items[9] = new closure_4("\u00F2", 0, 8);
            const tmp10 = new closure_4("\u00F2", 0, 8);
            items[10] = new closure_4("\u00F3", 0, 7);
            const tmp11 = new closure_4("\u00F3", 0, 7);
            items[11] = new closure_4("\u00FA", 0, 9);
            const tmp12 = new closure_4("\u00FA", 0, 9);
            items[12] = new closure_4("\u00FC", 0, 10);
            catalanStemmer.a_0 = items;
            return items;
          }
        },
        {
          key: "a_1",
          get() {
            delete r1.a_1;
            const items = [new closure_4("la", -1, 1), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("la", -1, 1);
            items[1] = new closure_4("-la", 0, 1);
            const tmp2 = new closure_4("-la", 0, 1);
            items[2] = new closure_4("sela", 0, 1);
            const tmp3 = new closure_4("sela", 0, 1);
            items[3] = new closure_4("le", -1, 1);
            const tmp4 = new closure_4("le", -1, 1);
            items[4] = new closure_4("me", -1, 1);
            const tmp5 = new closure_4("me", -1, 1);
            items[5] = new closure_4("-me", 4, 1);
            const tmp6 = new closure_4("-me", 4, 1);
            items[6] = new closure_4("se", -1, 1);
            const tmp7 = new closure_4("se", -1, 1);
            items[7] = new closure_4("-te", -1, 1);
            const tmp8 = new closure_4("-te", -1, 1);
            items[8] = new closure_4("hi", -1, 1);
            const tmp9 = new closure_4("hi", -1, 1);
            items[9] = new closure_4("'hi", 8, 1);
            const tmp10 = new closure_4("'hi", 8, 1);
            items[10] = new closure_4("li", -1, 1);
            const tmp11 = new closure_4("li", -1, 1);
            items[11] = new closure_4("-li", 10, 1);
            const tmp12 = new closure_4("-li", 10, 1);
            items[12] = new closure_4("'l", -1, 1);
            const tmp13 = new closure_4("'l", -1, 1);
            items[13] = new closure_4("'m", -1, 1);
            const tmp14 = new closure_4("'m", -1, 1);
            items[14] = new closure_4("-m", -1, 1);
            const tmp15 = new closure_4("-m", -1, 1);
            items[15] = new closure_4("'n", -1, 1);
            const tmp16 = new closure_4("'n", -1, 1);
            items[16] = new closure_4("-n", -1, 1);
            const tmp17 = new closure_4("-n", -1, 1);
            items[17] = new closure_4("ho", -1, 1);
            const tmp18 = new closure_4("ho", -1, 1);
            items[18] = new closure_4("'ho", 17, 1);
            const tmp19 = new closure_4("'ho", 17, 1);
            items[19] = new closure_4("lo", -1, 1);
            const tmp20 = new closure_4("lo", -1, 1);
            items[20] = new closure_4("selo", 19, 1);
            const tmp21 = new closure_4("selo", 19, 1);
            items[21] = new closure_4("'s", -1, 1);
            const tmp22 = new closure_4("'s", -1, 1);
            items[22] = new closure_4("las", -1, 1);
            const tmp23 = new closure_4("las", -1, 1);
            items[23] = new closure_4("selas", 22, 1);
            const tmp24 = new closure_4("selas", 22, 1);
            items[24] = new closure_4("les", -1, 1);
            const tmp25 = new closure_4("les", -1, 1);
            items[25] = new closure_4("-les", 24, 1);
            const tmp26 = new closure_4("-les", 24, 1);
            items[26] = new closure_4("'ls", -1, 1);
            const tmp27 = new closure_4("'ls", -1, 1);
            items[27] = new closure_4("-ls", -1, 1);
            const tmp28 = new closure_4("-ls", -1, 1);
            items[28] = new closure_4("'ns", -1, 1);
            const tmp29 = new closure_4("'ns", -1, 1);
            items[29] = new closure_4("-ns", -1, 1);
            const tmp30 = new closure_4("-ns", -1, 1);
            items[30] = new closure_4("ens", -1, 1);
            const tmp31 = new closure_4("ens", -1, 1);
            items[31] = new closure_4("los", -1, 1);
            const tmp32 = new closure_4("los", -1, 1);
            items[32] = new closure_4("selos", 31, 1);
            const tmp33 = new closure_4("selos", 31, 1);
            items[33] = new closure_4("nos", -1, 1);
            const tmp34 = new closure_4("nos", -1, 1);
            items[34] = new closure_4("-nos", 33, 1);
            const tmp35 = new closure_4("-nos", 33, 1);
            items[35] = new closure_4("vos", -1, 1);
            const tmp36 = new closure_4("vos", -1, 1);
            items[36] = new closure_4("us", -1, 1);
            const tmp37 = new closure_4("us", -1, 1);
            items[37] = new closure_4("-us", 36, 1);
            const tmp38 = new closure_4("-us", 36, 1);
            items[38] = new closure_4("'t", -1, 1);
            catalanStemmer.a_1 = items;
            return items;
          }
        },
        {
          key: "a_2",
          get() {
            delete r1.a_2;
            let tmp = new closure_4("ica", -1, 4);
            const items = [tmp, new closure_4("l\u00F3gica", 0, 3), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp2 = new closure_4("l\u00F3gica", 0, 3);
            items[2] = new closure_4("enca", -1, 1);
            const tmp3 = new closure_4("enca", -1, 1);
            items[3] = new closure_4("ada", -1, 2);
            const tmp4 = new closure_4("ada", -1, 2);
            items[4] = new closure_4("ancia", -1, 1);
            const tmp5 = new closure_4("ancia", -1, 1);
            items[5] = new closure_4("encia", -1, 1);
            const tmp6 = new closure_4("encia", -1, 1);
            items[6] = new closure_4("\u00E8ncia", -1, 1);
            const tmp7 = new closure_4("\u00E8ncia", -1, 1);
            items[7] = new closure_4("\u00EDcia", -1, 1);
            const tmp8 = new closure_4("\u00EDcia", -1, 1);
            items[8] = new closure_4("logia", -1, 3);
            const tmp9 = new closure_4("logia", -1, 3);
            items[9] = new closure_4("inia", -1, 1);
            const tmp10 = new closure_4("inia", -1, 1);
            items[10] = new closure_4("\u00EDinia", 9, 1);
            const tmp11 = new closure_4("\u00EDinia", 9, 1);
            items[11] = new closure_4("eria", -1, 1);
            const tmp12 = new closure_4("eria", -1, 1);
            items[12] = new closure_4("\u00E0ria", -1, 1);
            const tmp13 = new closure_4("\u00E0ria", -1, 1);
            items[13] = new closure_4("at\u00F2ria", -1, 1);
            const tmp14 = new closure_4("at\u00F2ria", -1, 1);
            items[14] = new closure_4("alla", -1, 1);
            const tmp15 = new closure_4("alla", -1, 1);
            items[15] = new closure_4("ella", -1, 1);
            const tmp16 = new closure_4("ella", -1, 1);
            items[16] = new closure_4("\u00EDvola", -1, 1);
            const tmp17 = new closure_4("\u00EDvola", -1, 1);
            items[17] = new closure_4("ima", -1, 1);
            const tmp18 = new closure_4("ima", -1, 1);
            items[18] = new closure_4("\u00EDssima", 17, 1);
            const tmp19 = new closure_4("\u00EDssima", 17, 1);
            items[19] = new closure_4("qu\u00EDssima", 18, 5);
            const tmp20 = new closure_4("qu\u00EDssima", 18, 5);
            items[20] = new closure_4("ana", -1, 1);
            const tmp21 = new closure_4("ana", -1, 1);
            items[21] = new closure_4("ina", -1, 1);
            const tmp22 = new closure_4("ina", -1, 1);
            items[22] = new closure_4("era", -1, 1);
            const tmp23 = new closure_4("era", -1, 1);
            items[23] = new closure_4("sfera", 22, 1);
            const tmp24 = new closure_4("sfera", 22, 1);
            items[24] = new closure_4("ora", -1, 1);
            const tmp25 = new closure_4("ora", -1, 1);
            items[25] = new closure_4("dora", 24, 1);
            const tmp26 = new closure_4("dora", 24, 1);
            items[26] = new closure_4("adora", 25, 1);
            const tmp27 = new closure_4("adora", 25, 1);
            items[27] = new closure_4("adura", -1, 1);
            const tmp28 = new closure_4("adura", -1, 1);
            items[28] = new closure_4("esa", -1, 1);
            const tmp29 = new closure_4("esa", -1, 1);
            items[29] = new closure_4("osa", -1, 1);
            const tmp30 = new closure_4("osa", -1, 1);
            items[30] = new closure_4("assa", -1, 1);
            const tmp31 = new closure_4("assa", -1, 1);
            items[31] = new closure_4("essa", -1, 1);
            const tmp32 = new closure_4("essa", -1, 1);
            items[32] = new closure_4("issa", -1, 1);
            const tmp33 = new closure_4("issa", -1, 1);
            items[33] = new closure_4("eta", -1, 1);
            const tmp34 = new closure_4("eta", -1, 1);
            items[34] = new closure_4("ita", -1, 1);
            const tmp35 = new closure_4("ita", -1, 1);
            items[35] = new closure_4("ota", -1, 1);
            const tmp36 = new closure_4("ota", -1, 1);
            items[36] = new closure_4("ista", -1, 1);
            const tmp37 = new closure_4("ista", -1, 1);
            items[37] = new closure_4("ialista", 36, 1);
            const tmp38 = new closure_4("ialista", 36, 1);
            items[38] = new closure_4("ionista", 36, 1);
            const tmp39 = new closure_4("ionista", 36, 1);
            items[39] = new closure_4("iva", -1, 1);
            const tmp40 = new closure_4("iva", -1, 1);
            items[40] = new closure_4("ativa", 39, 1);
            const tmp41 = new closure_4("ativa", 39, 1);
            items[41] = new closure_4("n\u00E7a", -1, 1);
            const tmp42 = new closure_4("n\u00E7a", -1, 1);
            items[42] = new closure_4("log\u00EDa", -1, 3);
            const tmp43 = new closure_4("log\u00EDa", -1, 3);
            items[43] = new closure_4("ic", -1, 4);
            const tmp44 = new closure_4("ic", -1, 4);
            items[44] = new closure_4("\u00EDstic", 43, 1);
            const tmp45 = new closure_4("\u00EDstic", 43, 1);
            items[45] = new closure_4("enc", -1, 1);
            const tmp46 = new closure_4("enc", -1, 1);
            items[46] = new closure_4("esc", -1, 1);
            const tmp47 = new closure_4("esc", -1, 1);
            items[47] = new closure_4("ud", -1, 1);
            const tmp48 = new closure_4("ud", -1, 1);
            items[48] = new closure_4("atge", -1, 1);
            const tmp49 = new closure_4("atge", -1, 1);
            items[49] = new closure_4("ble", -1, 1);
            const tmp50 = new closure_4("ble", -1, 1);
            items[50] = new closure_4("able", 49, 1);
            const tmp51 = new closure_4("able", 49, 1);
            items[51] = new closure_4("ible", 49, 1);
            const tmp52 = new closure_4("ible", 49, 1);
            items[52] = new closure_4("isme", -1, 1);
            const tmp53 = new closure_4("isme", -1, 1);
            items[53] = new closure_4("ialisme", 52, 1);
            const tmp54 = new closure_4("ialisme", 52, 1);
            items[54] = new closure_4("ionisme", 52, 1);
            const tmp55 = new closure_4("ionisme", 52, 1);
            items[55] = new closure_4("ivisme", 52, 1);
            const tmp56 = new closure_4("ivisme", 52, 1);
            items[56] = new closure_4("aire", -1, 1);
            const tmp57 = new closure_4("aire", -1, 1);
            items[57] = new closure_4("icte", -1, 1);
            const tmp58 = new closure_4("icte", -1, 1);
            items[58] = new closure_4("iste", -1, 1);
            const tmp59 = new closure_4("iste", -1, 1);
            items[59] = new closure_4("ici", -1, 1);
            const tmp60 = new closure_4("ici", -1, 1);
            items[60] = new closure_4("\u00EDci", -1, 1);
            const tmp61 = new closure_4("\u00EDci", -1, 1);
            items[61] = new closure_4("logi", -1, 3);
            const tmp62 = new closure_4("logi", -1, 3);
            items[62] = new closure_4("ari", -1, 1);
            const tmp63 = new closure_4("ari", -1, 1);
            items[63] = new closure_4("tori", -1, 1);
            const tmp64 = new closure_4("tori", -1, 1);
            items[64] = new closure_4("al", -1, 1);
            const tmp65 = new closure_4("al", -1, 1);
            items[65] = new closure_4("il", -1, 1);
            const tmp66 = new closure_4("il", -1, 1);
            items[66] = new closure_4("all", -1, 1);
            const tmp67 = new closure_4("all", -1, 1);
            items[67] = new closure_4("ell", -1, 1);
            const tmp68 = new closure_4("ell", -1, 1);
            items[68] = new closure_4("\u00EDvol", -1, 1);
            const tmp69 = new closure_4("\u00EDvol", -1, 1);
            items[69] = new closure_4("isam", -1, 1);
            const tmp70 = new closure_4("isam", -1, 1);
            items[70] = new closure_4("issem", -1, 1);
            const tmp71 = new closure_4("issem", -1, 1);
            items[71] = new closure_4("\u00ECssem", -1, 1);
            const tmp72 = new closure_4("\u00ECssem", -1, 1);
            items[72] = new closure_4("\u00EDssem", -1, 1);
            const tmp73 = new closure_4("\u00EDssem", -1, 1);
            items[73] = new closure_4("\u00EDssim", -1, 1);
            const tmp74 = new closure_4("\u00EDssim", -1, 1);
            items[74] = new closure_4("qu\u00EDssim", 73, 5);
            const tmp75 = new closure_4("qu\u00EDssim", 73, 5);
            items[75] = new closure_4("amen", -1, 1);
            const tmp76 = new closure_4("amen", -1, 1);
            items[76] = new closure_4("\u00ECssin", -1, 1);
            const tmp77 = new closure_4("\u00ECssin", -1, 1);
            items[77] = new closure_4("ar", -1, 1);
            const tmp78 = new closure_4("ar", -1, 1);
            items[78] = new closure_4("ificar", 77, 1);
            const tmp79 = new closure_4("ificar", 77, 1);
            items[79] = new closure_4("egar", 77, 1);
            const tmp80 = new closure_4("egar", 77, 1);
            items[80] = new closure_4("ejar", 77, 1);
            const tmp81 = new closure_4("ejar", 77, 1);
            items[81] = new closure_4("itar", 77, 1);
            const tmp82 = new closure_4("itar", 77, 1);
            items[82] = new closure_4("itzar", 77, 1);
            const tmp83 = new closure_4("itzar", 77, 1);
            items[83] = new closure_4("fer", -1, 1);
            const tmp84 = new closure_4("fer", -1, 1);
            items[84] = new closure_4("or", -1, 1);
            const tmp85 = new closure_4("or", -1, 1);
            items[85] = new closure_4("dor", 84, 1);
            const tmp86 = new closure_4("dor", 84, 1);
            items[86] = new closure_4("dur", -1, 1);
            const tmp87 = new closure_4("dur", -1, 1);
            items[87] = new closure_4("doras", -1, 1);
            const tmp88 = new closure_4("doras", -1, 1);
            items[88] = new closure_4("ics", -1, 4);
            const tmp89 = new closure_4("ics", -1, 4);
            items[89] = new closure_4("l\u00F3gics", 88, 3);
            const tmp90 = new closure_4("l\u00F3gics", 88, 3);
            items[90] = new closure_4("uds", -1, 1);
            const tmp91 = new closure_4("uds", -1, 1);
            items[91] = new closure_4("nces", -1, 1);
            const tmp92 = new closure_4("nces", -1, 1);
            items[92] = new closure_4("ades", -1, 2);
            const tmp93 = new closure_4("ades", -1, 2);
            items[93] = new closure_4("ancies", -1, 1);
            const tmp94 = new closure_4("ancies", -1, 1);
            items[94] = new closure_4("encies", -1, 1);
            const tmp95 = new closure_4("encies", -1, 1);
            items[95] = new closure_4("\u00E8ncies", -1, 1);
            const tmp96 = new closure_4("\u00E8ncies", -1, 1);
            items[96] = new closure_4("\u00EDcies", -1, 1);
            const tmp97 = new closure_4("\u00EDcies", -1, 1);
            items[97] = new closure_4("logies", -1, 3);
            const tmp98 = new closure_4("logies", -1, 3);
            items[98] = new closure_4("inies", -1, 1);
            tmp = new closure_4("\u00EDnies", -1, 1);
            items[99] = tmp;
            tmp = new closure_4("eries", -1, 1);
            items[100] = tmp;
            tmp = new closure_4("\u00E0ries", -1, 1);
            items[101] = tmp;
            tmp = new closure_4("at\u00F2ries", -1, 1);
            items[102] = tmp;
            tmp = new closure_4("bles", -1, 1);
            items[103] = tmp;
            tmp = new closure_4("ables", 103, 1);
            items[104] = tmp;
            tmp = new closure_4("ibles", 103, 1);
            items[105] = tmp;
            tmp = new closure_4("imes", -1, 1);
            items[106] = tmp;
            tmp = new closure_4("\u00EDssimes", 106, 1);
            items[107] = tmp;
            tmp = new closure_4("qu\u00EDssimes", 107, 5);
            items[108] = tmp;
            tmp = new closure_4("formes", -1, 1);
            items[109] = tmp;
            tmp = new closure_4("ismes", -1, 1);
            items[110] = tmp;
            tmp = new closure_4("ialismes", 110, 1);
            items[111] = tmp;
            tmp = new closure_4("ines", -1, 1);
            items[112] = tmp;
            tmp = new closure_4("eres", -1, 1);
            items[113] = tmp;
            tmp = new closure_4("ores", -1, 1);
            items[114] = tmp;
            tmp = new closure_4("dores", 114, 1);
            items[115] = tmp;
            tmp = new closure_4("idores", 115, 1);
            items[116] = tmp;
            tmp = new closure_4("dures", -1, 1);
            items[117] = tmp;
            tmp = new closure_4("eses", -1, 1);
            items[118] = tmp;
            tmp = new closure_4("oses", -1, 1);
            items[119] = tmp;
            tmp = new closure_4("asses", -1, 1);
            items[120] = tmp;
            tmp = new closure_4("ictes", -1, 1);
            items[121] = tmp;
            tmp = new closure_4("ites", -1, 1);
            items[122] = tmp;
            tmp = new closure_4("otes", -1, 1);
            items[123] = tmp;
            tmp = new closure_4("istes", -1, 1);
            items[124] = tmp;
            tmp = new closure_4("ialistes", 124, 1);
            items[125] = tmp;
            tmp = new closure_4("ionistes", 124, 1);
            items[126] = tmp;
            tmp = new closure_4("iques", -1, 4);
            items[127] = tmp;
            tmp = new closure_4("l\u00F3giques", 127, 3);
            items[128] = tmp;
            tmp = new closure_4("ives", -1, 1);
            items[129] = tmp;
            tmp = new closure_4("atives", 129, 1);
            items[130] = tmp;
            tmp = new closure_4("log\u00EDes", -1, 3);
            items[131] = tmp;
            tmp = new closure_4("alleng\u00FCes", -1, 1);
            items[132] = tmp;
            tmp = new closure_4("icis", -1, 1);
            items[133] = tmp;
            tmp = new closure_4("\u00EDcis", -1, 1);
            items[134] = tmp;
            tmp = new closure_4("logis", -1, 3);
            items[135] = tmp;
            tmp = new closure_4("aris", -1, 1);
            items[136] = tmp;
            tmp = new closure_4("toris", -1, 1);
            items[137] = tmp;
            tmp = new closure_4("ls", -1, 1);
            items[138] = tmp;
            tmp = new closure_4("als", 138, 1);
            items[139] = tmp;
            tmp = new closure_4("ells", 138, 1);
            items[140] = tmp;
            tmp = new closure_4("ims", -1, 1);
            items[141] = tmp;
            tmp = new closure_4("\u00EDssims", 141, 1);
            items[142] = tmp;
            tmp = new closure_4("qu\u00EDssims", 142, 5);
            items[143] = tmp;
            tmp = new closure_4("ions", -1, 1);
            items[144] = tmp;
            tmp = new closure_4("cions", 144, 1);
            items[145] = tmp;
            tmp = new closure_4("acions", 145, 2);
            items[146] = tmp;
            tmp = new closure_4("esos", -1, 1);
            items[147] = tmp;
            tmp = new closure_4("osos", -1, 1);
            items[148] = tmp;
            tmp = new closure_4("assos", -1, 1);
            items[149] = tmp;
            tmp = new closure_4("issos", -1, 1);
            items[150] = tmp;
            tmp = new closure_4("ers", -1, 1);
            items[151] = tmp;
            tmp = new closure_4("ors", -1, 1);
            items[152] = tmp;
            tmp = new closure_4("dors", 152, 1);
            items[153] = tmp;
            tmp = new closure_4("adors", 153, 1);
            items[154] = tmp;
            tmp = new closure_4("idors", 153, 1);
            items[155] = tmp;
            tmp = new closure_4("ats", -1, 1);
            items[156] = tmp;
            tmp = new closure_4("itats", 156, 1);
            items[157] = tmp;
            tmp = new closure_4("bilitats", 157, 1);
            items[158] = tmp;
            tmp = new closure_4("ivitats", 157, 1);
            items[159] = tmp;
            tmp = new closure_4("ativitats", 159, 1);
            items[160] = tmp;
            tmp = new closure_4("\u00EFtats", 156, 1);
            items[161] = tmp;
            tmp = new closure_4("ets", -1, 1);
            items[162] = tmp;
            tmp = new closure_4("ants", -1, 1);
            items[163] = tmp;
            tmp = new closure_4("ents", -1, 1);
            items[164] = tmp;
            tmp = new closure_4("ments", 164, 1);
            items[165] = tmp;
            tmp = new closure_4("aments", 165, 1);
            items[166] = tmp;
            tmp = new closure_4("ots", -1, 1);
            items[167] = tmp;
            tmp = new closure_4("uts", -1, 1);
            items[168] = tmp;
            tmp = new closure_4("ius", -1, 1);
            items[169] = tmp;
            tmp = new closure_4("trius", 169, 1);
            items[170] = tmp;
            tmp = new closure_4("atius", 169, 1);
            items[171] = tmp;
            tmp = new closure_4("\u00E8s", -1, 1);
            items[172] = tmp;
            tmp = new closure_4("\u00E9s", -1, 1);
            items[173] = tmp;
            tmp = new closure_4("\u00EDs", -1, 1);
            items[174] = tmp;
            tmp = new closure_4("d\u00EDs", 174, 1);
            items[175] = tmp;
            tmp = new closure_4("\u00F3s", -1, 1);
            items[176] = tmp;
            tmp = new closure_4("itat", -1, 1);
            items[177] = tmp;
            tmp = new closure_4("bilitat", 177, 1);
            items[178] = tmp;
            tmp = new closure_4("ivitat", 177, 1);
            items[179] = tmp;
            tmp = new closure_4("ativitat", 179, 1);
            items[180] = tmp;
            tmp = new closure_4("\u00EFtat", -1, 1);
            items[181] = tmp;
            tmp = new closure_4("et", -1, 1);
            items[182] = tmp;
            tmp = new closure_4("ant", -1, 1);
            items[183] = tmp;
            tmp = new closure_4("ent", -1, 1);
            items[184] = tmp;
            tmp = new closure_4("ient", 184, 1);
            items[185] = tmp;
            tmp = new closure_4("ment", 184, 1);
            items[186] = tmp;
            tmp = new closure_4("ament", 186, 1);
            items[187] = tmp;
            tmp = new closure_4("isament", 187, 1);
            items[188] = tmp;
            tmp = new closure_4("ot", -1, 1);
            items[189] = tmp;
            tmp = new closure_4("isseu", -1, 1);
            items[190] = tmp;
            tmp = new closure_4("\u00ECsseu", -1, 1);
            items[191] = tmp;
            tmp = new closure_4("\u00EDsseu", -1, 1);
            items[192] = tmp;
            tmp = new closure_4("triu", -1, 1);
            items[193] = tmp;
            tmp = new closure_4("\u00EDssiu", -1, 1);
            items[194] = tmp;
            tmp = new closure_4("atiu", -1, 1);
            items[195] = tmp;
            tmp = new closure_4("\u00F3", -1, 1);
            items[196] = tmp;
            tmp = new closure_4("i\u00F3", 196, 1);
            items[197] = tmp;
            tmp = new closure_4("ci\u00F3", 197, 1);
            items[198] = tmp;
            tmp = new closure_4("aci\u00F3", 198, 1);
            items[199] = tmp;
            catalanStemmer.a_2 = items;
            return items;
          }
        },
        {
          key: "a_3",
          get() {
            delete r1.a_3;
            let tmp = new closure_4("aba", -1, 1);
            const items = [tmp, new closure_4("esca", -1, 1), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp2 = new closure_4("esca", -1, 1);
            items[2] = new closure_4("isca", -1, 1);
            const tmp3 = new closure_4("isca", -1, 1);
            items[3] = new closure_4("\u00EFsca", -1, 1);
            const tmp4 = new closure_4("\u00EFsca", -1, 1);
            items[4] = new closure_4("ada", -1, 1);
            const tmp5 = new closure_4("ada", -1, 1);
            items[5] = new closure_4("ida", -1, 1);
            const tmp6 = new closure_4("ida", -1, 1);
            items[6] = new closure_4("uda", -1, 1);
            const tmp7 = new closure_4("uda", -1, 1);
            items[7] = new closure_4("\u00EFda", -1, 1);
            const tmp8 = new closure_4("\u00EFda", -1, 1);
            items[8] = new closure_4("ia", -1, 1);
            const tmp9 = new closure_4("ia", -1, 1);
            items[9] = new closure_4("aria", 8, 1);
            const tmp10 = new closure_4("aria", 8, 1);
            items[10] = new closure_4("iria", 8, 1);
            const tmp11 = new closure_4("iria", 8, 1);
            items[11] = new closure_4("ara", -1, 1);
            const tmp12 = new closure_4("ara", -1, 1);
            items[12] = new closure_4("iera", -1, 1);
            const tmp13 = new closure_4("iera", -1, 1);
            items[13] = new closure_4("ira", -1, 1);
            const tmp14 = new closure_4("ira", -1, 1);
            items[14] = new closure_4("adora", -1, 1);
            const tmp15 = new closure_4("adora", -1, 1);
            items[15] = new closure_4("\u00EFra", -1, 1);
            const tmp16 = new closure_4("\u00EFra", -1, 1);
            items[16] = new closure_4("ava", -1, 1);
            const tmp17 = new closure_4("ava", -1, 1);
            items[17] = new closure_4("ixa", -1, 1);
            const tmp18 = new closure_4("ixa", -1, 1);
            items[18] = new closure_4("itza", -1, 1);
            const tmp19 = new closure_4("itza", -1, 1);
            items[19] = new closure_4("\u00EDa", -1, 1);
            const tmp20 = new closure_4("\u00EDa", -1, 1);
            items[20] = new closure_4("ar\u00EDa", 19, 1);
            const tmp21 = new closure_4("ar\u00EDa", 19, 1);
            items[21] = new closure_4("er\u00EDa", 19, 1);
            const tmp22 = new closure_4("er\u00EDa", 19, 1);
            items[22] = new closure_4("ir\u00EDa", 19, 1);
            const tmp23 = new closure_4("ir\u00EDa", 19, 1);
            items[23] = new closure_4("\u00EFa", -1, 1);
            const tmp24 = new closure_4("\u00EFa", -1, 1);
            items[24] = new closure_4("isc", -1, 1);
            const tmp25 = new closure_4("isc", -1, 1);
            items[25] = new closure_4("\u00EFsc", -1, 1);
            const tmp26 = new closure_4("\u00EFsc", -1, 1);
            items[26] = new closure_4("ad", -1, 1);
            const tmp27 = new closure_4("ad", -1, 1);
            items[27] = new closure_4("ed", -1, 1);
            const tmp28 = new closure_4("ed", -1, 1);
            items[28] = new closure_4("id", -1, 1);
            const tmp29 = new closure_4("id", -1, 1);
            items[29] = new closure_4("ie", -1, 1);
            const tmp30 = new closure_4("ie", -1, 1);
            items[30] = new closure_4("re", -1, 1);
            const tmp31 = new closure_4("re", -1, 1);
            items[31] = new closure_4("dre", 30, 1);
            const tmp32 = new closure_4("dre", 30, 1);
            items[32] = new closure_4("ase", -1, 1);
            const tmp33 = new closure_4("ase", -1, 1);
            items[33] = new closure_4("iese", -1, 1);
            const tmp34 = new closure_4("iese", -1, 1);
            items[34] = new closure_4("aste", -1, 1);
            const tmp35 = new closure_4("aste", -1, 1);
            items[35] = new closure_4("iste", -1, 1);
            const tmp36 = new closure_4("iste", -1, 1);
            items[36] = new closure_4("ii", -1, 1);
            const tmp37 = new closure_4("ii", -1, 1);
            items[37] = new closure_4("ini", -1, 1);
            const tmp38 = new closure_4("ini", -1, 1);
            items[38] = new closure_4("esqui", -1, 1);
            const tmp39 = new closure_4("esqui", -1, 1);
            items[39] = new closure_4("eixi", -1, 1);
            const tmp40 = new closure_4("eixi", -1, 1);
            items[40] = new closure_4("itzi", -1, 1);
            const tmp41 = new closure_4("itzi", -1, 1);
            items[41] = new closure_4("am", -1, 1);
            const tmp42 = new closure_4("am", -1, 1);
            items[42] = new closure_4("em", -1, 1);
            const tmp43 = new closure_4("em", -1, 1);
            items[43] = new closure_4("arem", 42, 1);
            const tmp44 = new closure_4("arem", 42, 1);
            items[44] = new closure_4("irem", 42, 1);
            const tmp45 = new closure_4("irem", 42, 1);
            items[45] = new closure_4("\u00E0rem", 42, 1);
            const tmp46 = new closure_4("\u00E0rem", 42, 1);
            items[46] = new closure_4("\u00EDrem", 42, 1);
            const tmp47 = new closure_4("\u00EDrem", 42, 1);
            items[47] = new closure_4("\u00E0ssem", 42, 1);
            const tmp48 = new closure_4("\u00E0ssem", 42, 1);
            items[48] = new closure_4("\u00E9ssem", 42, 1);
            const tmp49 = new closure_4("\u00E9ssem", 42, 1);
            items[49] = new closure_4("iguem", 42, 1);
            const tmp50 = new closure_4("iguem", 42, 1);
            items[50] = new closure_4("\u00EFguem", 42, 1);
            const tmp51 = new closure_4("\u00EFguem", 42, 1);
            items[51] = new closure_4("avem", 42, 1);
            const tmp52 = new closure_4("avem", 42, 1);
            items[52] = new closure_4("\u00E0vem", 42, 1);
            const tmp53 = new closure_4("\u00E0vem", 42, 1);
            items[53] = new closure_4("\u00E1vem", 42, 1);
            const tmp54 = new closure_4("\u00E1vem", 42, 1);
            items[54] = new closure_4("ir\u00ECem", 42, 1);
            const tmp55 = new closure_4("ir\u00ECem", 42, 1);
            items[55] = new closure_4("\u00EDem", 42, 1);
            const tmp56 = new closure_4("\u00EDem", 42, 1);
            items[56] = new closure_4("ar\u00EDem", 55, 1);
            const tmp57 = new closure_4("ar\u00EDem", 55, 1);
            items[57] = new closure_4("ir\u00EDem", 55, 1);
            const tmp58 = new closure_4("ir\u00EDem", 55, 1);
            items[58] = new closure_4("assim", -1, 1);
            const tmp59 = new closure_4("assim", -1, 1);
            items[59] = new closure_4("essim", -1, 1);
            const tmp60 = new closure_4("essim", -1, 1);
            items[60] = new closure_4("issim", -1, 1);
            const tmp61 = new closure_4("issim", -1, 1);
            items[61] = new closure_4("\u00E0ssim", -1, 1);
            const tmp62 = new closure_4("\u00E0ssim", -1, 1);
            items[62] = new closure_4("\u00E8ssim", -1, 1);
            const tmp63 = new closure_4("\u00E8ssim", -1, 1);
            items[63] = new closure_4("\u00E9ssim", -1, 1);
            const tmp64 = new closure_4("\u00E9ssim", -1, 1);
            items[64] = new closure_4("\u00EDssim", -1, 1);
            const tmp65 = new closure_4("\u00EDssim", -1, 1);
            items[65] = new closure_4("\u00EFm", -1, 1);
            const tmp66 = new closure_4("\u00EFm", -1, 1);
            items[66] = new closure_4("an", -1, 1);
            const tmp67 = new closure_4("an", -1, 1);
            items[67] = new closure_4("aban", 66, 1);
            const tmp68 = new closure_4("aban", 66, 1);
            items[68] = new closure_4("arian", 66, 1);
            const tmp69 = new closure_4("arian", 66, 1);
            items[69] = new closure_4("aran", 66, 1);
            const tmp70 = new closure_4("aran", 66, 1);
            items[70] = new closure_4("ieran", 66, 1);
            const tmp71 = new closure_4("ieran", 66, 1);
            items[71] = new closure_4("iran", 66, 1);
            const tmp72 = new closure_4("iran", 66, 1);
            items[72] = new closure_4("\u00EDan", 66, 1);
            const tmp73 = new closure_4("\u00EDan", 66, 1);
            items[73] = new closure_4("ar\u00EDan", 72, 1);
            const tmp74 = new closure_4("ar\u00EDan", 72, 1);
            items[74] = new closure_4("er\u00EDan", 72, 1);
            const tmp75 = new closure_4("er\u00EDan", 72, 1);
            items[75] = new closure_4("ir\u00EDan", 72, 1);
            const tmp76 = new closure_4("ir\u00EDan", 72, 1);
            items[76] = new closure_4("en", -1, 1);
            const tmp77 = new closure_4("en", -1, 1);
            items[77] = new closure_4("ien", 76, 1);
            const tmp78 = new closure_4("ien", 76, 1);
            items[78] = new closure_4("arien", 77, 1);
            const tmp79 = new closure_4("arien", 77, 1);
            items[79] = new closure_4("irien", 77, 1);
            const tmp80 = new closure_4("irien", 77, 1);
            items[80] = new closure_4("aren", 76, 1);
            const tmp81 = new closure_4("aren", 76, 1);
            items[81] = new closure_4("eren", 76, 1);
            const tmp82 = new closure_4("eren", 76, 1);
            items[82] = new closure_4("iren", 76, 1);
            const tmp83 = new closure_4("iren", 76, 1);
            items[83] = new closure_4("\u00E0ren", 76, 1);
            const tmp84 = new closure_4("\u00E0ren", 76, 1);
            items[84] = new closure_4("\u00EFren", 76, 1);
            const tmp85 = new closure_4("\u00EFren", 76, 1);
            items[85] = new closure_4("asen", 76, 1);
            const tmp86 = new closure_4("asen", 76, 1);
            items[86] = new closure_4("iesen", 76, 1);
            const tmp87 = new closure_4("iesen", 76, 1);
            items[87] = new closure_4("assen", 76, 1);
            const tmp88 = new closure_4("assen", 76, 1);
            items[88] = new closure_4("essen", 76, 1);
            const tmp89 = new closure_4("essen", 76, 1);
            items[89] = new closure_4("issen", 76, 1);
            const tmp90 = new closure_4("issen", 76, 1);
            items[90] = new closure_4("\u00E9ssen", 76, 1);
            const tmp91 = new closure_4("\u00E9ssen", 76, 1);
            items[91] = new closure_4("\u00EFssen", 76, 1);
            const tmp92 = new closure_4("\u00EFssen", 76, 1);
            items[92] = new closure_4("esquen", 76, 1);
            const tmp93 = new closure_4("esquen", 76, 1);
            items[93] = new closure_4("isquen", 76, 1);
            const tmp94 = new closure_4("isquen", 76, 1);
            items[94] = new closure_4("\u00EFsquen", 76, 1);
            const tmp95 = new closure_4("\u00EFsquen", 76, 1);
            items[95] = new closure_4("aven", 76, 1);
            const tmp96 = new closure_4("aven", 76, 1);
            items[96] = new closure_4("ixen", 76, 1);
            const tmp97 = new closure_4("ixen", 76, 1);
            items[97] = new closure_4("eixen", 96, 1);
            const tmp98 = new closure_4("eixen", 96, 1);
            items[98] = new closure_4("\u00EFxen", 76, 1);
            tmp = new closure_4("\u00EFen", 76, 1);
            items[99] = tmp;
            tmp = new closure_4("in", -1, 1);
            items[100] = tmp;
            tmp = new closure_4("inin", 100, 1);
            items[101] = tmp;
            tmp = new closure_4("sin", 100, 1);
            items[102] = tmp;
            tmp = new closure_4("isin", 102, 1);
            items[103] = tmp;
            tmp = new closure_4("assin", 102, 1);
            items[104] = tmp;
            tmp = new closure_4("essin", 102, 1);
            items[105] = tmp;
            tmp = new closure_4("issin", 102, 1);
            items[106] = tmp;
            tmp = new closure_4("\u00EFssin", 102, 1);
            items[107] = tmp;
            tmp = new closure_4("esquin", 100, 1);
            items[108] = tmp;
            tmp = new closure_4("eixin", 100, 1);
            items[109] = tmp;
            tmp = new closure_4("aron", -1, 1);
            items[110] = tmp;
            tmp = new closure_4("ieron", -1, 1);
            items[111] = tmp;
            tmp = new closure_4("ar\u00E1n", -1, 1);
            items[112] = tmp;
            tmp = new closure_4("er\u00E1n", -1, 1);
            items[113] = tmp;
            tmp = new closure_4("ir\u00E1n", -1, 1);
            items[114] = tmp;
            tmp = new closure_4("i\u00EFn", -1, 1);
            items[115] = tmp;
            tmp = new closure_4("ado", -1, 1);
            items[116] = tmp;
            tmp = new closure_4("ido", -1, 1);
            items[117] = tmp;
            tmp = new closure_4("ando", -1, 2);
            items[118] = tmp;
            tmp = new closure_4("iendo", -1, 1);
            items[119] = tmp;
            tmp = new closure_4("io", -1, 1);
            items[120] = tmp;
            tmp = new closure_4("ixo", -1, 1);
            items[121] = tmp;
            tmp = new closure_4("eixo", 121, 1);
            items[122] = tmp;
            tmp = new closure_4("\u00EFxo", -1, 1);
            items[123] = tmp;
            tmp = new closure_4("itzo", -1, 1);
            items[124] = tmp;
            tmp = new closure_4("ar", -1, 1);
            items[125] = tmp;
            tmp = new closure_4("tzar", 125, 1);
            items[126] = tmp;
            tmp = new closure_4("er", -1, 1);
            items[127] = tmp;
            tmp = new closure_4("eixer", 127, 1);
            items[128] = tmp;
            tmp = new closure_4("ir", -1, 1);
            items[129] = tmp;
            tmp = new closure_4("ador", -1, 1);
            items[130] = tmp;
            tmp = new closure_4("as", -1, 1);
            items[131] = tmp;
            tmp = new closure_4("abas", 131, 1);
            items[132] = tmp;
            tmp = new closure_4("adas", 131, 1);
            items[133] = tmp;
            tmp = new closure_4("idas", 131, 1);
            items[134] = tmp;
            tmp = new closure_4("aras", 131, 1);
            items[135] = tmp;
            tmp = new closure_4("ieras", 131, 1);
            items[136] = tmp;
            tmp = new closure_4("\u00EDas", 131, 1);
            items[137] = tmp;
            tmp = new closure_4("ar\u00EDas", 137, 1);
            items[138] = tmp;
            tmp = new closure_4("er\u00EDas", 137, 1);
            items[139] = tmp;
            tmp = new closure_4("ir\u00EDas", 137, 1);
            items[140] = tmp;
            tmp = new closure_4("ids", -1, 1);
            items[141] = tmp;
            tmp = new closure_4("es", -1, 1);
            items[142] = tmp;
            tmp = new closure_4("ades", 142, 1);
            items[143] = tmp;
            tmp = new closure_4("ides", 142, 1);
            items[144] = tmp;
            tmp = new closure_4("udes", 142, 1);
            items[145] = tmp;
            tmp = new closure_4("\u00EFdes", 142, 1);
            items[146] = tmp;
            tmp = new closure_4("atges", 142, 1);
            items[147] = tmp;
            tmp = new closure_4("ies", 142, 1);
            items[148] = tmp;
            tmp = new closure_4("aries", 148, 1);
            items[149] = tmp;
            tmp = new closure_4("iries", 148, 1);
            items[150] = tmp;
            tmp = new closure_4("ares", 142, 1);
            items[151] = tmp;
            tmp = new closure_4("ires", 142, 1);
            items[152] = tmp;
            tmp = new closure_4("adores", 142, 1);
            items[153] = tmp;
            tmp = new closure_4("\u00EFres", 142, 1);
            items[154] = tmp;
            tmp = new closure_4("ases", 142, 1);
            items[155] = tmp;
            tmp = new closure_4("ieses", 142, 1);
            items[156] = tmp;
            tmp = new closure_4("asses", 142, 1);
            items[157] = tmp;
            tmp = new closure_4("esses", 142, 1);
            items[158] = tmp;
            tmp = new closure_4("isses", 142, 1);
            items[159] = tmp;
            tmp = new closure_4("\u00EFsses", 142, 1);
            items[160] = tmp;
            tmp = new closure_4("ques", 142, 1);
            items[161] = tmp;
            tmp = new closure_4("esques", 161, 1);
            items[162] = tmp;
            tmp = new closure_4("\u00EFsques", 161, 1);
            items[163] = tmp;
            tmp = new closure_4("aves", 142, 1);
            items[164] = tmp;
            tmp = new closure_4("ixes", 142, 1);
            items[165] = tmp;
            tmp = new closure_4("eixes", 165, 1);
            items[166] = tmp;
            tmp = new closure_4("\u00EFxes", 142, 1);
            items[167] = tmp;
            tmp = new closure_4("\u00EFes", 142, 1);
            items[168] = tmp;
            tmp = new closure_4("abais", -1, 1);
            items[169] = tmp;
            tmp = new closure_4("arais", -1, 1);
            items[170] = tmp;
            tmp = new closure_4("ierais", -1, 1);
            items[171] = tmp;
            tmp = new closure_4("\u00EDais", -1, 1);
            items[172] = tmp;
            tmp = new closure_4("ar\u00EDais", 172, 1);
            items[173] = tmp;
            tmp = new closure_4("er\u00EDais", 172, 1);
            items[174] = tmp;
            tmp = new closure_4("ir\u00EDais", 172, 1);
            items[175] = tmp;
            tmp = new closure_4("aseis", -1, 1);
            items[176] = tmp;
            tmp = new closure_4("ieseis", -1, 1);
            items[177] = tmp;
            tmp = new closure_4("asteis", -1, 1);
            items[178] = tmp;
            tmp = new closure_4("isteis", -1, 1);
            items[179] = tmp;
            tmp = new closure_4("inis", -1, 1);
            items[180] = tmp;
            tmp = new closure_4("sis", -1, 1);
            items[181] = tmp;
            tmp = new closure_4("isis", 181, 1);
            items[182] = tmp;
            tmp = new closure_4("assis", 181, 1);
            items[183] = tmp;
            tmp = new closure_4("essis", 181, 1);
            items[184] = tmp;
            tmp = new closure_4("issis", 181, 1);
            items[185] = tmp;
            tmp = new closure_4("\u00EFssis", 181, 1);
            items[186] = tmp;
            tmp = new closure_4("esquis", -1, 1);
            items[187] = tmp;
            tmp = new closure_4("eixis", -1, 1);
            items[188] = tmp;
            tmp = new closure_4("itzis", -1, 1);
            items[189] = tmp;
            tmp = new closure_4("\u00E1is", -1, 1);
            items[190] = tmp;
            tmp = new closure_4("ar\u00E9is", -1, 1);
            items[191] = tmp;
            tmp = new closure_4("er\u00E9is", -1, 1);
            items[192] = tmp;
            tmp = new closure_4("ir\u00E9is", -1, 1);
            items[193] = tmp;
            tmp = new closure_4("ams", -1, 1);
            items[194] = tmp;
            tmp = new closure_4("ados", -1, 1);
            items[195] = tmp;
            tmp = new closure_4("idos", -1, 1);
            items[196] = tmp;
            tmp = new closure_4("amos", -1, 1);
            items[197] = tmp;
            tmp = new closure_4("\u00E1bamos", 197, 1);
            items[198] = tmp;
            tmp = new closure_4("\u00E1ramos", 197, 1);
            items[199] = tmp;
            tmp = new closure_4("i\u00E9ramos", 197, 1);
            items[200] = tmp;
            tmp = new closure_4("\u00EDamos", 197, 1);
            items[201] = tmp;
            tmp = new closure_4("ar\u00EDamos", 201, 1);
            items[202] = tmp;
            tmp = new closure_4("er\u00EDamos", 201, 1);
            items[203] = tmp;
            tmp = new closure_4("ir\u00EDamos", 201, 1);
            items[204] = tmp;
            tmp = new closure_4("aremos", -1, 1);
            items[205] = tmp;
            tmp = new closure_4("eremos", -1, 1);
            items[206] = tmp;
            tmp = new closure_4("iremos", -1, 1);
            items[207] = tmp;
            tmp = new closure_4("\u00E1semos", -1, 1);
            items[208] = tmp;
            tmp = new closure_4("i\u00E9semos", -1, 1);
            items[209] = tmp;
            tmp = new closure_4("imos", -1, 1);
            items[210] = tmp;
            tmp = new closure_4("adors", -1, 1);
            items[211] = tmp;
            tmp = new closure_4("ass", -1, 1);
            items[212] = tmp;
            tmp = new closure_4("erass", 212, 1);
            items[213] = tmp;
            tmp = new closure_4("ess", -1, 1);
            items[214] = tmp;
            tmp = new closure_4("ats", -1, 1);
            items[215] = tmp;
            tmp = new closure_4("its", -1, 1);
            items[216] = tmp;
            tmp = new closure_4("ents", -1, 1);
            items[217] = tmp;
            tmp = new closure_4("\u00E0s", -1, 1);
            items[218] = tmp;
            tmp = new closure_4("ar\u00E0s", 218, 1);
            items[219] = tmp;
            tmp = new closure_4("ir\u00E0s", 218, 1);
            items[220] = tmp;
            tmp = new closure_4("ar\u00E1s", -1, 1);
            items[221] = tmp;
            tmp = new closure_4("er\u00E1s", -1, 1);
            items[222] = tmp;
            tmp = new closure_4("ir\u00E1s", -1, 1);
            items[223] = tmp;
            tmp = new closure_4("\u00E9s", -1, 1);
            items[224] = tmp;
            tmp = new closure_4("ar\u00E9s", 224, 1);
            items[225] = tmp;
            tmp = new closure_4("\u00EDs", -1, 1);
            items[226] = tmp;
            tmp = new closure_4("i\u00EFs", -1, 1);
            items[227] = tmp;
            tmp = new closure_4("at", -1, 1);
            items[228] = tmp;
            tmp = new closure_4("it", -1, 1);
            items[229] = tmp;
            tmp = new closure_4("ant", -1, 1);
            items[230] = tmp;
            tmp = new closure_4("ent", -1, 1);
            items[231] = tmp;
            tmp = new closure_4("int", -1, 1);
            items[232] = tmp;
            tmp = new closure_4("ut", -1, 1);
            items[233] = tmp;
            tmp = new closure_4("\u00EFt", -1, 1);
            items[234] = tmp;
            tmp = new closure_4("au", -1, 1);
            items[235] = tmp;
            tmp = new closure_4("erau", 235, 1);
            items[236] = tmp;
            tmp = new closure_4("ieu", -1, 1);
            items[237] = tmp;
            tmp = new closure_4("ineu", -1, 1);
            items[238] = tmp;
            tmp = new closure_4("areu", -1, 1);
            items[239] = tmp;
            tmp = new closure_4("ireu", -1, 1);
            items[240] = tmp;
            tmp = new closure_4("\u00E0reu", -1, 1);
            items[241] = tmp;
            tmp = new closure_4("\u00EDreu", -1, 1);
            items[242] = tmp;
            tmp = new closure_4("asseu", -1, 1);
            items[243] = tmp;
            tmp = new closure_4("esseu", -1, 1);
            items[244] = tmp;
            tmp = new closure_4("eresseu", 244, 1);
            items[245] = tmp;
            tmp = new closure_4("\u00E0sseu", -1, 1);
            items[246] = tmp;
            tmp = new closure_4("\u00E9sseu", -1, 1);
            items[247] = tmp;
            tmp = new closure_4("igueu", -1, 1);
            items[248] = tmp;
            tmp = new closure_4("\u00EFgueu", -1, 1);
            items[249] = tmp;
            tmp = new closure_4("\u00E0veu", -1, 1);
            items[250] = tmp;
            tmp = new closure_4("\u00E1veu", -1, 1);
            items[251] = tmp;
            tmp = new closure_4("itzeu", -1, 1);
            items[252] = tmp;
            tmp = new closure_4("\u00ECeu", -1, 1);
            items[253] = tmp;
            tmp = new closure_4("ir\u00ECeu", 253, 1);
            items[254] = tmp;
            tmp = new closure_4("\u00EDeu", -1, 1);
            items[255] = tmp;
            tmp = new closure_4("ar\u00EDeu", 255, 1);
            items[256] = tmp;
            tmp = new closure_4("ir\u00EDeu", 255, 1);
            items[257] = tmp;
            tmp = new closure_4("assiu", -1, 1);
            items[258] = tmp;
            tmp = new closure_4("issiu", -1, 1);
            items[259] = tmp;
            tmp = new closure_4("\u00E0ssiu", -1, 1);
            items[260] = tmp;
            tmp = new closure_4("\u00E8ssiu", -1, 1);
            items[261] = tmp;
            tmp = new closure_4("\u00E9ssiu", -1, 1);
            items[262] = tmp;
            tmp = new closure_4("\u00EDssiu", -1, 1);
            items[263] = tmp;
            tmp = new closure_4("\u00EFu", -1, 1);
            items[264] = tmp;
            tmp = new closure_4("ix", -1, 1);
            items[265] = tmp;
            tmp = new closure_4("eix", 265, 1);
            items[266] = tmp;
            tmp = new closure_4("\u00EFx", -1, 1);
            items[267] = tmp;
            tmp = new closure_4("itz", -1, 1);
            items[268] = tmp;
            tmp = new closure_4("i\u00E0", -1, 1);
            items[269] = tmp;
            tmp = new closure_4("ar\u00E0", -1, 1);
            items[270] = tmp;
            tmp = new closure_4("ir\u00E0", -1, 1);
            items[271] = tmp;
            tmp = new closure_4("itz\u00E0", -1, 1);
            items[272] = tmp;
            tmp = new closure_4("ar\u00E1", -1, 1);
            items[273] = tmp;
            tmp = new closure_4("er\u00E1", -1, 1);
            items[274] = tmp;
            tmp = new closure_4("ir\u00E1", -1, 1);
            items[275] = tmp;
            tmp = new closure_4("ir\u00E8", -1, 1);
            items[276] = tmp;
            tmp = new closure_4("ar\u00E9", -1, 1);
            items[277] = tmp;
            tmp = new closure_4("er\u00E9", -1, 1);
            items[278] = tmp;
            tmp = new closure_4("ir\u00E9", -1, 1);
            items[279] = tmp;
            tmp = new closure_4("\u00ED", -1, 1);
            items[280] = tmp;
            tmp = new closure_4("i\u00EF", -1, 1);
            items[281] = tmp;
            tmp = new closure_4("i\u00F3", -1, 1);
            items[282] = tmp;
            catalanStemmer.a_3 = items;
            return items;
          }
        },
        {
          key: "a_4",
          get() {
            delete r1.a_4;
            const items = [new closure_4("a", -1, 1), , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("a", -1, 1);
            items[1] = new closure_4("e", -1, 1);
            const tmp2 = new closure_4("e", -1, 1);
            items[2] = new closure_4("i", -1, 1);
            const tmp3 = new closure_4("i", -1, 1);
            items[3] = new closure_4("\u00EFn", -1, 1);
            const tmp4 = new closure_4("\u00EFn", -1, 1);
            items[4] = new closure_4("o", -1, 1);
            const tmp5 = new closure_4("o", -1, 1);
            items[5] = new closure_4("ir", -1, 1);
            const tmp6 = new closure_4("ir", -1, 1);
            items[6] = new closure_4("s", -1, 1);
            const tmp7 = new closure_4("s", -1, 1);
            items[7] = new closure_4("is", 6, 1);
            const tmp8 = new closure_4("is", 6, 1);
            items[8] = new closure_4("os", 6, 1);
            const tmp9 = new closure_4("os", 6, 1);
            items[9] = new closure_4("\u00EFs", 6, 1);
            const tmp10 = new closure_4("\u00EFs", 6, 1);
            items[10] = new closure_4("it", -1, 1);
            const tmp11 = new closure_4("it", -1, 1);
            items[11] = new closure_4("eu", -1, 1);
            const tmp12 = new closure_4("eu", -1, 1);
            items[12] = new closure_4("iu", -1, 1);
            const tmp13 = new closure_4("iu", -1, 1);
            items[13] = new closure_4("iqu", -1, 2);
            const tmp14 = new closure_4("iqu", -1, 2);
            items[14] = new closure_4("itz", -1, 1);
            const tmp15 = new closure_4("itz", -1, 1);
            items[15] = new closure_4("\u00E0", -1, 1);
            const tmp16 = new closure_4("\u00E0", -1, 1);
            items[16] = new closure_4("\u00E1", -1, 1);
            const tmp17 = new closure_4("\u00E1", -1, 1);
            items[17] = new closure_4("\u00E9", -1, 1);
            const tmp18 = new closure_4("\u00E9", -1, 1);
            items[18] = new closure_4("\u00EC", -1, 1);
            const tmp19 = new closure_4("\u00EC", -1, 1);
            items[19] = new closure_4("\u00ED", -1, 1);
            const tmp20 = new closure_4("\u00ED", -1, 1);
            items[20] = new closure_4("\u00EF", -1, 1);
            const tmp21 = new closure_4("\u00EF", -1, 1);
            items[21] = new closure_4("\u00F3", -1, 1);
            catalanStemmer.a_4 = items;
            return items;
          }
        },
        {
          key: "g_v",
          get() {
            delete r1.g_v;
            const items = [];
            catalanStemmer.g_v = items;
            return items;
          }
        }
      ];
      callback(catalanStemmer, items, items1);
      return catalanStemmer;
    }(tmp3);
    let closure_9 = (arg0) => {
      function czechStemmer() {
        callback3(this, czechStemmer);
        const prototypeOf = Object.getPrototypeOf(czechStemmer);
        return callback2(this, prototypeOf(...arguments));
      }
      const callback = czechStemmer;
      _inherits(czechStemmer, arg0);
      let obj = {
        key: "r_mark_regions$esjava$0",
        value: function r_mark_regions$esjava$0() {
          const self = this;
          ({ limit: this.I_pV, limit: this.I_p1 } = this);
          const cursor = self.cursor;
          while (!self.out_grouping$esjava$3(czechStemmer.g_v, 97, 367)) {
            if (cursor < self.limit) {
              self.cursor = self.cursor + 1;
              // continue
            }
            self.cursor = tmp;
            let flag = true;
            return true;
          }
          self.I_pV = cursor;
          while (!self.out_grouping$esjava$3(czechStemmer.g_v, 97, 367)) {
            if (self.cursor < self.limit) {
              self.cursor = self.cursor + 1;
              // continue
            }
          }
          const cursor2 = self.cursor;
          while (!self.in_grouping$esjava$3(czechStemmer.g_v, 97, 367)) {
            if (cursor2 < self.limit) {
              self.cursor = self.cursor + 1;
              // continue
            }
          }
          self.I_p1 = cursor2;
        }
      };
      const items = [obj, , , , , , , , , , , , , , , ];
      obj = {
        key: "r_RV$esjava$0",
        value: function r_RV$esjava$0() {
          return this.I_pV <= this.cursor;
        }
      };
      items[1] = obj;
      obj = {
        key: "r_R1$esjava$0",
        value: function r_R1$esjava$0() {
          return this.I_p1 <= this.cursor;
        }
      };
      items[2] = obj;
      items[3] = {
        key: "r_palatalise$esjava$0",
        value: function r_palatalise$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(czechStemmer.a_0);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (self.r_RV$esjava$0()) {
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  const result1 = self.slice_from$esjava$1("k");
                } else if (2 === result) {
                  const result2 = self.slice_from$esjava$1("h");
                } else if (3 === result) {
                  const result3 = self.slice_from$esjava$1("ck");
                } else if (4 === result) {
                  const result4 = self.slice_from$esjava$1("sk");
                }
                return true;
              }
            } else {
              return false;
            }
          }
        }
      };
      items[4] = {
        key: "r_do_possessive$esjava$0",
        value: function r_do_possessive$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(czechStemmer.a_1);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (self.r_RV$esjava$0()) {
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  const result1 = self.slice_del$esjava$0();
                } else if (2 === result) {
                  const result2 = self.slice_del$esjava$0();
                  const diff = self.limit - self.cursor;
                  if (!self.r_palatalise$esjava$0()) {
                    self.cursor = self.limit - diff;
                  }
                }
                return true;
              }
            } else {
              return false;
            }
          }
        }
      };
      items[5] = {
        key: "r_do_case$esjava$0",
        value: function r_do_case$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(czechStemmer.a_2);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                const result1 = self.slice_del$esjava$0();
              } else if (2 === result) {
                const result2 = self.slice_del$esjava$0();
                const diff = self.limit - self.cursor;
                if (!self.r_palatalise$esjava$0()) {
                  self.cursor = self.limit - diff;
                }
              } else if (3 === result) {
                const result3 = self.slice_from$esjava$1("e");
                const diff1 = self.limit - self.cursor;
                if (!self.r_palatalise$esjava$0()) {
                  self.cursor = self.limit - diff1;
                }
              }
              return true;
            }
          }
        }
      };
      items[6] = {
        key: "r_do_derivational$esjava$0",
        value: function r_do_derivational$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(czechStemmer.a_3);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (self.r_R1$esjava$0()) {
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  const result1 = self.slice_del$esjava$0();
                } else if (2 === result) {
                  const result2 = self.slice_from$esjava$1("i");
                  if (!self.r_palatalise$esjava$0()) {
                    return false;
                  }
                } else if (3 === result) {
                  const result3 = self.slice_from$esjava$1("e");
                  if (!self.r_palatalise$esjava$0()) {
                    return false;
                  }
                } else if (4 === result) {
                  const result4 = self.slice_from$esjava$1("\u00E9");
                  if (!self.r_palatalise$esjava$0()) {
                    return false;
                  }
                } else if (5 === result) {
                  const result5 = self.slice_from$esjava$1("\u011B");
                  if (!self.r_palatalise$esjava$0()) {
                    return false;
                  }
                } else if (6 === result) {
                  const result6 = self.slice_from$esjava$1("\u00ED");
                  if (!self.r_palatalise$esjava$0()) {
                    return false;
                  }
                }
                return true;
              }
            } else {
              return false;
            }
          }
        }
      };
      items[7] = {
        key: "r_do_deriv_single$esjava$0",
        value: function r_do_deriv_single$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(czechStemmer.a_4);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                const result1 = self.slice_del$esjava$0();
              }
              return true;
            }
          }
        }
      };
      items[8] = {
        key: "r_do_augmentative$esjava$0",
        value: function r_do_augmentative$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(czechStemmer.a_5);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                const result1 = self.slice_del$esjava$0();
              } else if (2 === result) {
                const result2 = self.slice_from$esjava$1("i");
                if (!self.r_palatalise$esjava$0()) {
                  return false;
                }
              }
              return true;
            }
          }
        }
      };
      items[9] = {
        key: "r_do_diminutive$esjava$0",
        value: function r_do_diminutive$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          if (0 === this.find_among_b$esjava$1(czechStemmer.a_6)) {
            return false;
          } else {
            const result = self.slice_from$esjava$1("u");
          }
        }
      };
      items[10] = {
        key: "r_do_comparative$esjava$0",
        value: function r_do_comparative$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(czechStemmer.a_7);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                const result1 = self.slice_from$esjava$1("\u011B");
                if (!self.r_palatalise$esjava$0()) {
                  return false;
                }
              } else if (2 === result) {
                const result2 = self.slice_from$esjava$1("e");
                if (!self.r_palatalise$esjava$0()) {
                  return false;
                }
              }
              return true;
            }
          }
        }
      };
      items[11] = {
        key: "r_do_aggressive$esjava$0",
        value: function r_do_aggressive$esjava$0() {
          const self = this;
          const diff = this.limit - this.cursor;
          const result = this.r_do_comparative$esjava$0();
          this.cursor = this.limit - diff;
          const diff1 = this.limit - this.cursor;
          const result1 = this.r_do_diminutive$esjava$0();
          this.cursor = this.limit - diff1;
          const diff2 = this.limit - this.cursor;
          const result2 = this.r_do_augmentative$esjava$0();
          this.cursor = this.limit - diff2;
          const diff3 = this.limit - this.cursor;
          if (!this.r_do_derivational$esjava$0()) {
            self.cursor = self.limit - diff3;
            if (!self.r_do_deriv_single$esjava$0()) {
              return false;
            }
          }
          return true;
        }
      };
      items[12] = {
        key: "stem$esjava$0",
        value: function stem$esjava$0() {
          const self = this;
          const result = this.r_mark_regions$esjava$0();
          this.cursor = this.cursor;
          ({ cursor: this.limit_backward, limit: this.cursor } = this);
          const tmp2 = !this.r_do_case$esjava$0();
          let tmp3 = !tmp2;
          if (!tmp2) {
            const tmp4 = !self.r_do_possessive$esjava$0();
            let tmp5 = !tmp4;
            if (!tmp4) {
              const tmp6 = !self.r_do_aggressive$esjava$0();
              let flag = !tmp6;
              if (!tmp6) {
                self.cursor = self.limit_backward;
                flag = true;
              }
              tmp5 = flag;
            }
            tmp3 = tmp5;
          }
          return tmp3;
        }
      };
      items[13] = {
        key: "stem",
        value: function stem() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const stem$esjava$0 = self.stem$esjava$0;
            let applyResult = stem$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(czechStemmer.prototype), "stem", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[14] = {
        key: "I_p1",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p1")) {
            let num = self._$esjava$I_p1;
          } else {
            num = 0;
            self._$esjava$I_p1 = 0;
          }
          return num;
        },
        set(_$esjava$I_p1) {
          this._$esjava$I_p1 = _$esjava$I_p1;
        }
      };
      items[15] = {
        key: "I_pV",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_pV")) {
            let num = self._$esjava$I_pV;
          } else {
            num = 0;
            self._$esjava$I_pV = 0;
          }
          return num;
        },
        set(_$esjava$I_pV) {
          this._$esjava$I_pV = _$esjava$I_pV;
        }
      };
      const items1 = [
        {
          key: "a_0",
          get() {
            delete r1.a_0;
            const items = [new closure_4("ce", -1, 1), , , , , , , , , , , , , ];
            const tmp = new closure_4("ce", -1, 1);
            items[1] = new closure_4("ze", -1, 2);
            const tmp2 = new closure_4("ze", -1, 2);
            items[2] = new closure_4("\u017Ee", -1, 2);
            const tmp3 = new closure_4("\u017Ee", -1, 2);
            items[3] = new closure_4("ci", -1, 1);
            const tmp4 = new closure_4("ci", -1, 1);
            items[4] = new closure_4("\u010Dti", -1, 3);
            const tmp5 = new closure_4("\u010Dti", -1, 3);
            items[5] = new closure_4("\u0161ti", -1, 4);
            const tmp6 = new closure_4("\u0161ti", -1, 4);
            items[6] = new closure_4("zi", -1, 2);
            const tmp7 = new closure_4("zi", -1, 2);
            items[7] = new closure_4("\u010Di", -1, 1);
            const tmp8 = new closure_4("\u010Di", -1, 1);
            items[8] = new closure_4("\u017Ei", -1, 2);
            const tmp9 = new closure_4("\u017Ei", -1, 2);
            items[9] = new closure_4("\u010Dt\u00E9", -1, 3);
            const tmp10 = new closure_4("\u010Dt\u00E9", -1, 3);
            items[10] = new closure_4("\u0161t\u00E9", -1, 4);
            const tmp11 = new closure_4("\u0161t\u00E9", -1, 4);
            items[11] = new closure_4("\u010D", -1, 1);
            const tmp12 = new closure_4("\u010D", -1, 1);
            items[12] = new closure_4("\u010Dt\u011B", -1, 3);
            const tmp13 = new closure_4("\u010Dt\u011B", -1, 3);
            items[13] = new closure_4("\u0161t\u011B", -1, 4);
            czechStemmer.a_0 = items;
            return items;
          }
        },
        {
          key: "a_1",
          get() {
            delete r1.a_1;
            const items = [new closure_4("in", -1, 2), , ];
            const tmp = new closure_4("in", -1, 2);
            items[1] = new closure_4("ov", -1, 1);
            const tmp2 = new closure_4("ov", -1, 1);
            items[2] = new closure_4("\u016Fv", -1, 1);
            czechStemmer.a_1 = items;
            return items;
          }
        },
        {
          key: "a_2",
          get() {
            delete r1.a_2;
            const items = [new closure_4("a", -1, 1), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("a", -1, 1);
            items[1] = new closure_4("ama", 0, 1);
            const tmp2 = new closure_4("ama", 0, 1);
            items[2] = new closure_4("ata", 0, 1);
            const tmp3 = new closure_4("ata", 0, 1);
            items[3] = new closure_4("e", -1, 2);
            const tmp4 = new closure_4("e", -1, 2);
            items[4] = new closure_4("\u011Bte", 3, 2);
            const tmp5 = new closure_4("\u011Bte", 3, 2);
            items[5] = new closure_4("ech", -1, 2);
            const tmp6 = new closure_4("ech", -1, 2);
            items[6] = new closure_4("atech", 5, 1);
            const tmp7 = new closure_4("atech", 5, 1);
            items[7] = new closure_4("ich", -1, 2);
            const tmp8 = new closure_4("ich", -1, 2);
            items[8] = new closure_4("\u00E1ch", -1, 1);
            const tmp9 = new closure_4("\u00E1ch", -1, 1);
            items[9] = new closure_4("\u00EDch", -1, 2);
            const tmp10 = new closure_4("\u00EDch", -1, 2);
            items[10] = new closure_4("\u00FDch", -1, 1);
            const tmp11 = new closure_4("\u00FDch", -1, 1);
            items[11] = new closure_4("i", -1, 2);
            const tmp12 = new closure_4("i", -1, 2);
            items[12] = new closure_4("mi", 11, 1);
            const tmp13 = new closure_4("mi", 11, 1);
            items[13] = new closure_4("ami", 12, 1);
            const tmp14 = new closure_4("ami", 12, 1);
            items[14] = new closure_4("emi", 12, 2);
            const tmp15 = new closure_4("emi", 12, 2);
            items[15] = new closure_4("\u00EDmi", 12, 2);
            const tmp16 = new closure_4("\u00EDmi", 12, 2);
            items[16] = new closure_4("\u00FDmi", 12, 1);
            const tmp17 = new closure_4("\u00FDmi", 12, 1);
            items[17] = new closure_4("\u011Bmi", 12, 2);
            const tmp18 = new closure_4("\u011Bmi", 12, 2);
            items[18] = new closure_4("\u011Bti", 11, 2);
            const tmp19 = new closure_4("\u011Bti", 11, 2);
            items[19] = new closure_4("ovi", 11, 1);
            const tmp20 = new closure_4("ovi", 11, 1);
            items[20] = new closure_4("em", -1, 3);
            const tmp21 = new closure_4("em", -1, 3);
            items[21] = new closure_4("\u011Btem", 20, 1);
            const tmp22 = new closure_4("\u011Btem", 20, 1);
            items[22] = new closure_4("\u00E1m", -1, 1);
            const tmp23 = new closure_4("\u00E1m", -1, 1);
            items[23] = new closure_4("\u00E9m", -1, 2);
            const tmp24 = new closure_4("\u00E9m", -1, 2);
            items[24] = new closure_4("\u00EDm", -1, 2);
            const tmp25 = new closure_4("\u00EDm", -1, 2);
            items[25] = new closure_4("\u00FDm", -1, 1);
            const tmp26 = new closure_4("\u00FDm", -1, 1);
            items[26] = new closure_4("at\u016Fm", -1, 1);
            const tmp27 = new closure_4("at\u016Fm", -1, 1);
            items[27] = new closure_4("o", -1, 1);
            const tmp28 = new closure_4("o", -1, 1);
            items[28] = new closure_4("iho", 27, 2);
            const tmp29 = new closure_4("iho", 27, 2);
            items[29] = new closure_4("\u00E9ho", 27, 2);
            const tmp30 = new closure_4("\u00E9ho", 27, 2);
            items[30] = new closure_4("\u00EDho", 27, 2);
            const tmp31 = new closure_4("\u00EDho", 27, 2);
            items[31] = new closure_4("es", -1, 2);
            const tmp32 = new closure_4("es", -1, 2);
            items[32] = new closure_4("os", -1, 1);
            const tmp33 = new closure_4("os", -1, 1);
            items[33] = new closure_4("us", -1, 1);
            const tmp34 = new closure_4("us", -1, 1);
            items[34] = new closure_4("at", -1, 1);
            const tmp35 = new closure_4("at", -1, 1);
            items[35] = new closure_4("u", -1, 1);
            const tmp36 = new closure_4("u", -1, 1);
            items[36] = new closure_4("imu", 35, 2);
            const tmp37 = new closure_4("imu", 35, 2);
            items[37] = new closure_4("\u00E9mu", 35, 2);
            const tmp38 = new closure_4("\u00E9mu", 35, 2);
            items[38] = new closure_4("ou", 35, 1);
            const tmp39 = new closure_4("ou", 35, 1);
            items[39] = new closure_4("y", -1, 1);
            const tmp40 = new closure_4("y", -1, 1);
            items[40] = new closure_4("aty", 39, 1);
            const tmp41 = new closure_4("aty", 39, 1);
            items[41] = new closure_4("\u00E1", -1, 1);
            const tmp42 = new closure_4("\u00E1", -1, 1);
            items[42] = new closure_4("\u00E9", -1, 1);
            const tmp43 = new closure_4("\u00E9", -1, 1);
            items[43] = new closure_4("ov\u00E9", 42, 1);
            const tmp44 = new closure_4("ov\u00E9", 42, 1);
            items[44] = new closure_4("\u00ED", -1, 2);
            const tmp45 = new closure_4("\u00ED", -1, 2);
            items[45] = new closure_4("\u00FD", -1, 1);
            const tmp46 = new closure_4("\u00FD", -1, 1);
            items[46] = new closure_4("\u011B", -1, 2);
            const tmp47 = new closure_4("\u011B", -1, 2);
            items[47] = new closure_4("\u016F", -1, 1);
            czechStemmer.a_2 = items;
            return items;
          }
        },
        {
          key: "a_3",
          get() {
            delete r1.a_3;
            const items = [new closure_4("ob", -1, 1), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("ob", -1, 1);
            items[1] = new closure_4("itb", -1, 2);
            const tmp2 = new closure_4("itb", -1, 2);
            items[2] = new closure_4("ec", -1, 3);
            const tmp3 = new closure_4("ec", -1, 3);
            items[3] = new closure_4("inec", 2, 2);
            const tmp4 = new closure_4("inec", 2, 2);
            items[4] = new closure_4("obinec", 3, 1);
            const tmp5 = new closure_4("obinec", 3, 1);
            items[5] = new closure_4("ovec", 2, 1);
            const tmp6 = new closure_4("ovec", 2, 1);
            items[6] = new closure_4("ic", -1, 2);
            const tmp7 = new closure_4("ic", -1, 2);
            items[7] = new closure_4("enic", 6, 3);
            const tmp8 = new closure_4("enic", 6, 3);
            items[8] = new closure_4("och", -1, 1);
            const tmp9 = new closure_4("och", -1, 1);
            items[9] = new closure_4("\u00E1sek", -1, 1);
            const tmp10 = new closure_4("\u00E1sek", -1, 1);
            items[10] = new closure_4("nk", -1, 1);
            const tmp11 = new closure_4("nk", -1, 1);
            items[11] = new closure_4("isk", -1, 2);
            const tmp12 = new closure_4("isk", -1, 2);
            items[12] = new closure_4("ovisk", 11, 1);
            const tmp13 = new closure_4("ovisk", 11, 1);
            items[13] = new closure_4("tk", -1, 1);
            const tmp14 = new closure_4("tk", -1, 1);
            items[14] = new closure_4("vk", -1, 1);
            const tmp15 = new closure_4("vk", -1, 1);
            items[15] = new closure_4("n\u00EDk", -1, 1);
            const tmp16 = new closure_4("n\u00EDk", -1, 1);
            items[16] = new closure_4("ovn\u00EDk", 15, 1);
            const tmp17 = new closure_4("ovn\u00EDk", 15, 1);
            items[17] = new closure_4("ov\u00EDk", -1, 1);
            const tmp18 = new closure_4("ov\u00EDk", -1, 1);
            items[18] = new closure_4("\u010Dk", -1, 1);
            const tmp19 = new closure_4("\u010Dk", -1, 1);
            items[19] = new closure_4("i\u0161k", -1, 2);
            const tmp20 = new closure_4("i\u0161k", -1, 2);
            items[20] = new closure_4("u\u0161k", -1, 1);
            const tmp21 = new closure_4("u\u0161k", -1, 1);
            items[21] = new closure_4("dl", -1, 1);
            const tmp22 = new closure_4("dl", -1, 1);
            items[22] = new closure_4("itel", -1, 2);
            const tmp23 = new closure_4("itel", -1, 2);
            items[23] = new closure_4("ul", -1, 1);
            const tmp24 = new closure_4("ul", -1, 1);
            items[24] = new closure_4("an", -1, 1);
            const tmp25 = new closure_4("an", -1, 1);
            items[25] = new closure_4("\u010Dan", 24, 1);
            const tmp26 = new closure_4("\u010Dan", 24, 1);
            items[26] = new closure_4("en", -1, 3);
            const tmp27 = new closure_4("en", -1, 3);
            items[27] = new closure_4("in", -1, 2);
            const tmp28 = new closure_4("in", -1, 2);
            items[28] = new closure_4("\u0161tin", 27, 1);
            const tmp29 = new closure_4("\u0161tin", 27, 1);
            items[29] = new closure_4("ovin", 27, 1);
            const tmp30 = new closure_4("ovin", 27, 1);
            items[30] = new closure_4("teln", -1, 1);
            const tmp31 = new closure_4("teln", -1, 1);
            items[31] = new closure_4("\u00E1rn", -1, 1);
            const tmp32 = new closure_4("\u00E1rn", -1, 1);
            items[32] = new closure_4("\u00EDrn", -1, 6);
            const tmp33 = new closure_4("\u00EDrn", -1, 6);
            items[33] = new closure_4("oun", -1, 1);
            const tmp34 = new closure_4("oun", -1, 1);
            items[34] = new closure_4("loun", 33, 1);
            const tmp35 = new closure_4("loun", 33, 1);
            items[35] = new closure_4("ovn", -1, 1);
            const tmp36 = new closure_4("ovn", -1, 1);
            items[36] = new closure_4("yn", -1, 1);
            const tmp37 = new closure_4("yn", -1, 1);
            items[37] = new closure_4("kyn", 36, 1);
            const tmp38 = new closure_4("kyn", 36, 1);
            items[38] = new closure_4("\u00E1n", -1, 1);
            const tmp39 = new closure_4("\u00E1n", -1, 1);
            items[39] = new closure_4("i\u00E1n", 38, 2);
            const tmp40 = new closure_4("i\u00E1n", 38, 2);
            items[40] = new closure_4("\u00EDn", -1, 6);
            const tmp41 = new closure_4("\u00EDn", -1, 6);
            items[41] = new closure_4("\u010Dn", -1, 1);
            const tmp42 = new closure_4("\u010Dn", -1, 1);
            items[42] = new closure_4("\u011Bn", -1, 5);
            const tmp43 = new closure_4("\u011Bn", -1, 5);
            items[43] = new closure_4("as", -1, 1);
            const tmp44 = new closure_4("as", -1, 1);
            items[44] = new closure_4("it", -1, 2);
            const tmp45 = new closure_4("it", -1, 2);
            items[45] = new closure_4("ot", -1, 1);
            const tmp46 = new closure_4("ot", -1, 1);
            items[46] = new closure_4("ist", -1, 2);
            const tmp47 = new closure_4("ist", -1, 2);
            items[47] = new closure_4("ost", -1, 1);
            const tmp48 = new closure_4("ost", -1, 1);
            items[48] = new closure_4("nost", 47, 1);
            const tmp49 = new closure_4("nost", 47, 1);
            items[49] = new closure_4("out", -1, 1);
            const tmp50 = new closure_4("out", -1, 1);
            items[50] = new closure_4("ovi\u0161t", -1, 1);
            const tmp51 = new closure_4("ovi\u0161t", -1, 1);
            items[51] = new closure_4("iv", -1, 2);
            const tmp52 = new closure_4("iv", -1, 2);
            items[52] = new closure_4("ov", -1, 1);
            const tmp53 = new closure_4("ov", -1, 1);
            items[53] = new closure_4("tv", -1, 1);
            const tmp54 = new closure_4("tv", -1, 1);
            items[54] = new closure_4("ctv", 53, 1);
            const tmp55 = new closure_4("ctv", 53, 1);
            items[55] = new closure_4("stv", 53, 1);
            const tmp56 = new closure_4("stv", 53, 1);
            items[56] = new closure_4("ovstv", 55, 1);
            const tmp57 = new closure_4("ovstv", 55, 1);
            items[57] = new closure_4("ovtv", 53, 1);
            const tmp58 = new closure_4("ovtv", 53, 1);
            items[58] = new closure_4("a\u010D", -1, 1);
            const tmp59 = new closure_4("a\u010D", -1, 1);
            items[59] = new closure_4("\u00E1\u010D", -1, 1);
            const tmp60 = new closure_4("\u00E1\u010D", -1, 1);
            items[60] = new closure_4("o\u0148", -1, 1);
            const tmp61 = new closure_4("o\u0148", -1, 1);
            items[61] = new closure_4("\u00E1\u0159", -1, 1);
            const tmp62 = new closure_4("\u00E1\u0159", -1, 1);
            items[62] = new closure_4("k\u00E1\u0159", 61, 1);
            const tmp63 = new closure_4("k\u00E1\u0159", 61, 1);
            items[63] = new closure_4("ion\u00E1\u0159", 61, 2);
            const tmp64 = new closure_4("ion\u00E1\u0159", 61, 2);
            items[64] = new closure_4("\u00E9\u0159", -1, 4);
            const tmp65 = new closure_4("\u00E9\u0159", -1, 4);
            items[65] = new closure_4("n\u00E9\u0159", 64, 1);
            const tmp66 = new closure_4("n\u00E9\u0159", 64, 1);
            items[66] = new closure_4("\u00ED\u0159", -1, 6);
            const tmp67 = new closure_4("\u00ED\u0159", -1, 6);
            items[67] = new closure_4("ou\u0161", -1, 1);
            czechStemmer.a_3 = items;
            return items;
          }
        },
        {
          key: "a_4",
          get() {
            delete r1.a_4;
            const items = [new closure_4("c", -1, 1), , , , , ];
            const tmp = new closure_4("c", -1, 1);
            items[1] = new closure_4("k", -1, 1);
            const tmp2 = new closure_4("k", -1, 1);
            items[2] = new closure_4("l", -1, 1);
            const tmp3 = new closure_4("l", -1, 1);
            items[3] = new closure_4("n", -1, 1);
            const tmp4 = new closure_4("n", -1, 1);
            items[4] = new closure_4("t", -1, 1);
            const tmp5 = new closure_4("t", -1, 1);
            items[5] = new closure_4("\u010D", -1, 1);
            czechStemmer.a_4 = items;
            return items;
          }
        },
        {
          key: "a_5",
          get() {
            delete r1.a_5;
            const items = [new closure_4("isk", -1, 2), , , ];
            const tmp = new closure_4("isk", -1, 2);
            items[1] = new closure_4("\u00E1k", -1, 1);
            const tmp2 = new closure_4("\u00E1k", -1, 1);
            items[2] = new closure_4("izn", -1, 2);
            const tmp3 = new closure_4("izn", -1, 2);
            items[3] = new closure_4("ajzn", -1, 1);
            czechStemmer.a_5 = items;
            return items;
          }
        },
        {
          key: "a_6",
          get() {
            delete r1.a_6;
            const items = [new closure_4("k", -1, 1), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("k", -1, 1);
            items[1] = new closure_4("ak", 0, 7);
            const tmp2 = new closure_4("ak", 0, 7);
            items[2] = new closure_4("ek", 0, 2);
            const tmp3 = new closure_4("ek", 0, 2);
            items[3] = new closure_4("anek", 2, 1);
            const tmp4 = new closure_4("anek", 2, 1);
            items[4] = new closure_4("enek", 2, 2);
            const tmp5 = new closure_4("enek", 2, 2);
            items[5] = new closure_4("inek", 2, 4);
            const tmp6 = new closure_4("inek", 2, 4);
            items[6] = new closure_4("onek", 2, 1);
            const tmp7 = new closure_4("onek", 2, 1);
            items[7] = new closure_4("unek", 2, 1);
            const tmp8 = new closure_4("unek", 2, 1);
            items[8] = new closure_4("\u00E1nek", 2, 1);
            const tmp9 = new closure_4("\u00E1nek", 2, 1);
            items[9] = new closure_4("a\u010Dek", 2, 1);
            const tmp10 = new closure_4("a\u010Dek", 2, 1);
            items[10] = new closure_4("e\u010Dek", 2, 2);
            const tmp11 = new closure_4("e\u010Dek", 2, 2);
            items[11] = new closure_4("i\u010Dek", 2, 4);
            const tmp12 = new closure_4("i\u010Dek", 2, 4);
            items[12] = new closure_4("o\u010Dek", 2, 1);
            const tmp13 = new closure_4("o\u010Dek", 2, 1);
            items[13] = new closure_4("u\u010Dek", 2, 1);
            const tmp14 = new closure_4("u\u010Dek", 2, 1);
            items[14] = new closure_4("\u00E1\u010Dek", 2, 1);
            const tmp15 = new closure_4("\u00E1\u010Dek", 2, 1);
            items[15] = new closure_4("\u00E9\u010Dek", 2, 3);
            const tmp16 = new closure_4("\u00E9\u010Dek", 2, 3);
            items[16] = new closure_4("\u00ED\u010Dek", 2, 5);
            const tmp17 = new closure_4("\u00ED\u010Dek", 2, 5);
            items[17] = new closure_4("ou\u0161ek", 2, 1);
            const tmp18 = new closure_4("ou\u0161ek", 2, 1);
            items[18] = new closure_4("ik", 0, 4);
            const tmp19 = new closure_4("ik", 0, 4);
            items[19] = new closure_4("ank", 0, 1);
            const tmp20 = new closure_4("ank", 0, 1);
            items[20] = new closure_4("enk", 0, 1);
            const tmp21 = new closure_4("enk", 0, 1);
            items[21] = new closure_4("ink", 0, 1);
            const tmp22 = new closure_4("ink", 0, 1);
            items[22] = new closure_4("onk", 0, 1);
            const tmp23 = new closure_4("onk", 0, 1);
            items[23] = new closure_4("unk", 0, 1);
            const tmp24 = new closure_4("unk", 0, 1);
            items[24] = new closure_4("\u00E1nk", 0, 1);
            const tmp25 = new closure_4("\u00E1nk", 0, 1);
            items[25] = new closure_4("\u00E9nk", 0, 1);
            const tmp26 = new closure_4("\u00E9nk", 0, 1);
            items[26] = new closure_4("\u00EDnk", 0, 1);
            const tmp27 = new closure_4("\u00EDnk", 0, 1);
            items[27] = new closure_4("ok", 0, 8);
            const tmp28 = new closure_4("ok", 0, 8);
            items[28] = new closure_4("\u00E1tk", 0, 1);
            const tmp29 = new closure_4("\u00E1tk", 0, 1);
            items[29] = new closure_4("uk", 0, 9);
            const tmp30 = new closure_4("uk", 0, 9);
            items[30] = new closure_4("\u00E1k", 0, 6);
            const tmp31 = new closure_4("\u00E1k", 0, 6);
            items[31] = new closure_4("\u00E9k", 0, 3);
            const tmp32 = new closure_4("\u00E9k", 0, 3);
            items[32] = new closure_4("\u00EDk", 0, 5);
            const tmp33 = new closure_4("\u00EDk", 0, 5);
            items[33] = new closure_4("a\u010Dk", 0, 1);
            const tmp34 = new closure_4("a\u010Dk", 0, 1);
            items[34] = new closure_4("e\u010Dk", 0, 1);
            const tmp35 = new closure_4("e\u010Dk", 0, 1);
            items[35] = new closure_4("i\u010Dk", 0, 1);
            const tmp36 = new closure_4("i\u010Dk", 0, 1);
            items[36] = new closure_4("o\u010Dk", 0, 1);
            const tmp37 = new closure_4("o\u010Dk", 0, 1);
            items[37] = new closure_4("u\u010Dk", 0, 1);
            const tmp38 = new closure_4("u\u010Dk", 0, 1);
            items[38] = new closure_4("\u00E1\u010Dk", 0, 1);
            const tmp39 = new closure_4("\u00E1\u010Dk", 0, 1);
            items[39] = new closure_4("\u00E9\u010Dk", 0, 1);
            const tmp40 = new closure_4("\u00E9\u010Dk", 0, 1);
            items[40] = new closure_4("\u00ED\u010Dk", 0, 1);
            const tmp41 = new closure_4("\u00ED\u010Dk", 0, 1);
            items[41] = new closure_4("u\u0161k", 0, 1);
            czechStemmer.a_6 = items;
            return items;
          }
        },
        {
          key: "a_7",
          get() {
            delete r1.a_7;
            const items = [new closure_4("ej\u0161", -1, 2), ];
            const tmp = new closure_4("ej\u0161", -1, 2);
            items[1] = new closure_4("\u011Bj\u0161", -1, 1);
            czechStemmer.a_7 = items;
            return items;
          }
        },
        {
          key: "g_v",
          get() {
            delete r1.g_v;
            const items = [];
            czechStemmer.g_v = items;
            return items;
          }
        }
      ];
      callback(czechStemmer, items, items1);
      return czechStemmer;
    }(tmp3);
    let closure_10 = (arg0) => {
      function danishStemmer() {
        callback3(this, danishStemmer);
        const prototypeOf = Object.getPrototypeOf(danishStemmer);
        return callback2(this, prototypeOf(...arguments));
      }
      const callback = danishStemmer;
      _inherits(danishStemmer, arg0);
      let obj = {
        key: "r_mark_regions$esjava$0",
        value: function r_mark_regions$esjava$0() {
          const self = this;
          this.I_p1 = this.limit;
          const sum = this.cursor + 3;
          if (0 <= sum) {
            if (sum <= self.limit) {
              self.cursor = sum;
              self.I_x = self.cursor;
              self.cursor = tmp;
              self.cursor = self.cursor;
              while (!self.in_grouping$esjava$3(danishStemmer.g_v, 97, 248)) {
                if (self.cursor >= self.limit) {
                  let flag = false;
                  return false;
                } else {
                  self.cursor = self.cursor + 1;
                  // continue
                }
              }
              const cursor = self.cursor;
              while (!self.out_grouping$esjava$3(danishStemmer.g_v, 97, 248)) {
                if (cursor >= self.limit) {
                  let flag2 = false;
                  return false;
                } else {
                  self.cursor = self.cursor + 1;
                  // continue
                }
              }
              self.I_p1 = cursor;
              if (self.I_p1 < self.I_x) {
                self.I_p1 = self.I_x;
              }
              return true;
            }
          }
          return false;
        }
      };
      const items = [obj, , , , , , , , , ];
      obj = {
        key: "r_main_suffix$esjava$0",
        value: function r_main_suffix$esjava$0() {
          let limit_backward;
          const self = this;
          if (this.cursor < this.I_p1) {
            return false;
          } else {
            ({ I_p1: self.cursor, limit_backward, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp;
            self.ket = self.cursor;
            const result = self.find_among_b$esjava$1(danishStemmer.a_0);
            if (0 === result) {
              self.limit_backward = limit_backward;
              return false;
            } else {
              self.bra = self.cursor;
              self.limit_backward = limit_backward;
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  const result1 = self.slice_del$esjava$0();
                } else if (2 === result) {
                  if (self.in_grouping_b$esjava$3(danishStemmer.g_s_ending, 97, 229)) {
                    const result2 = self.slice_del$esjava$0();
                  } else {
                    return false;
                  }
                }
                return true;
              }
            }
          }
        }
      };
      items[1] = obj;
      obj = {
        key: "r_consonant_pair$esjava$0",
        value: function r_consonant_pair$esjava$0() {
          let limit_backward;
          const self = this;
          const tmp3 = this.cursor < this.I_p1;
          if (tmp3) {
            return !tmp3;
          } else {
            ({ I_p1: self.cursor, limit_backward, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp2;
            self.ket = self.cursor;
            if (0 === self.find_among_b$esjava$1(danishStemmer.a_1)) {
              self.limit_backward = limit_backward;
              let flag = false;
            } else {
              self.bra = self.cursor;
              self.limit_backward = limit_backward;
              self.cursor = self.limit - tmp;
              flag = !tmp5;
              if (self.cursor > self.limit_backward) {
                self.cursor = self.cursor - 1;
                self.bra = self.cursor;
                const result = self.slice_del$esjava$0();
                flag = true;
              }
            }
          }
        }
      };
      items[2] = obj;
      items[3] = {
        key: "r_other_suffix$esjava$0",
        value: function r_other_suffix$esjava$0() {
          let limit_backward;
          const self = this;
          this.ket = this.cursor;
          const diff = this.limit - this.cursor;
          if (this.eq_s_b$esjava$1("st")) {
            self.bra = self.cursor;
            if (self.eq_s_b$esjava$1("ig")) {
              const result = self.slice_del$esjava$0();
            }
          }
          self.cursor = self.limit - diff;
          if (self.cursor < self.I_p1) {
            return false;
          } else {
            ({ I_p1: self.cursor, limit_backward, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp3;
            self.ket = self.cursor;
            const result1 = self.find_among_b$esjava$1(danishStemmer.a_2);
            if (0 === result1) {
              self.limit_backward = limit_backward;
              return false;
            } else {
              self.bra = self.cursor;
              self.limit_backward = limit_backward;
              if (0 === result1) {
                return false;
              } else {
                if (1 === result1) {
                  const result2 = self.slice_del$esjava$0();
                  const diff1 = self.limit - self.cursor;
                  const result3 = self.r_consonant_pair$esjava$0();
                  self.cursor = self.limit - diff1;
                } else if (2 === result1) {
                  const result4 = self.slice_from$esjava$1("l\u00F8s");
                }
                return true;
              }
            }
          }
        }
      };
      items[4] = {
        key: "r_undouble$esjava$0",
        value: function r_undouble$esjava$0() {
          let S_ch;
          let eq_s_b$esjava$1;
          let limit_backward;
          const self = this;
          const tmp2 = this.cursor < this.I_p1;
          if (tmp2) {
            return !tmp2;
          } else {
            ({ I_p1: self.cursor, limit_backward, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp;
            self.ket = self.cursor;
            if (self.out_grouping_b$esjava$3(danishStemmer.g_v, 97, 248)) {
              self.bra = self.cursor;
              self.S_ch = self.slice_to$esjava$1(self.S_ch);
              self.limit_backward = limit_backward;
              ({ S_ch, eq_s_b$esjava$1 } = self);
              const tmp4 = !eq_s_b$esjava$1(S_ch.toString());
              limit_backward = !tmp4;
              if (!tmp4) {
                const result = self.slice_del$esjava$0();
                limit_backward = true;
              }
              let flag = limit_backward;
            } else {
              self.limit_backward = limit_backward;
              flag = false;
            }
          }
        }
      };
      items[5] = {
        key: "stem$esjava$0",
        value: function stem$esjava$0() {
          const result = this.r_mark_regions$esjava$0();
          this.cursor = this.cursor;
          ({ cursor: this.limit_backward, limit: this.cursor } = this);
          const diff = this.limit - this.cursor;
          const result1 = this.r_main_suffix$esjava$0();
          this.cursor = this.limit - diff;
          const diff1 = this.limit - this.cursor;
          const result2 = this.r_consonant_pair$esjava$0();
          this.cursor = this.limit - diff1;
          const diff2 = this.limit - this.cursor;
          const result3 = this.r_other_suffix$esjava$0();
          this.cursor = this.limit - diff2;
          const result4 = this.r_undouble$esjava$0();
          this.cursor = this.limit_backward;
          return true;
        }
      };
      items[6] = {
        key: "stem",
        value: function stem() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const stem$esjava$0 = self.stem$esjava$0;
            let applyResult = stem$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(danishStemmer.prototype), "stem", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[7] = {
        key: "I_x",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_x")) {
            let num = self._$esjava$I_x;
          } else {
            num = 0;
            self._$esjava$I_x = 0;
          }
          return num;
        },
        set(_$esjava$I_x) {
          this._$esjava$I_x = _$esjava$I_x;
        }
      };
      items[8] = {
        key: "I_p1",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p1")) {
            let num = self._$esjava$I_p1;
          } else {
            num = 0;
            self._$esjava$I_p1 = 0;
          }
          return num;
        },
        set(_$esjava$I_p1) {
          this._$esjava$I_p1 = _$esjava$I_p1;
        }
      };
      items[9] = {
        key: "S_ch",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$S_ch")) {
            let _$esjava$S_ch = self._$esjava$S_ch;
          } else {
            const prototype = ctor.prototype;
            const tmp4 = new ctor();
            _$esjava$S_ch = tmp4;
            self._$esjava$S_ch = tmp4;
          }
          return _$esjava$S_ch;
        },
        set(_$esjava$S_ch) {
          this._$esjava$S_ch = _$esjava$S_ch;
        }
      };
      const items1 = [
        {
          key: "a_0",
          get() {
            delete r1.a_0;
            const items = [new closure_4("hed", -1, 1), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("hed", -1, 1);
            items[1] = new closure_4("ethed", 0, 1);
            const tmp2 = new closure_4("ethed", 0, 1);
            items[2] = new closure_4("ered", -1, 1);
            const tmp3 = new closure_4("ered", -1, 1);
            items[3] = new closure_4("e", -1, 1);
            const tmp4 = new closure_4("e", -1, 1);
            items[4] = new closure_4("erede", 3, 1);
            const tmp5 = new closure_4("erede", 3, 1);
            items[5] = new closure_4("ende", 3, 1);
            const tmp6 = new closure_4("ende", 3, 1);
            items[6] = new closure_4("erende", 5, 1);
            const tmp7 = new closure_4("erende", 5, 1);
            items[7] = new closure_4("ene", 3, 1);
            const tmp8 = new closure_4("ene", 3, 1);
            items[8] = new closure_4("erne", 3, 1);
            const tmp9 = new closure_4("erne", 3, 1);
            items[9] = new closure_4("ere", 3, 1);
            const tmp10 = new closure_4("ere", 3, 1);
            items[10] = new closure_4("en", -1, 1);
            const tmp11 = new closure_4("en", -1, 1);
            items[11] = new closure_4("heden", 10, 1);
            const tmp12 = new closure_4("heden", 10, 1);
            items[12] = new closure_4("eren", 10, 1);
            const tmp13 = new closure_4("eren", 10, 1);
            items[13] = new closure_4("er", -1, 1);
            const tmp14 = new closure_4("er", -1, 1);
            items[14] = new closure_4("heder", 13, 1);
            const tmp15 = new closure_4("heder", 13, 1);
            items[15] = new closure_4("erer", 13, 1);
            const tmp16 = new closure_4("erer", 13, 1);
            items[16] = new closure_4("s", -1, 2);
            const tmp17 = new closure_4("s", -1, 2);
            items[17] = new closure_4("heds", 16, 1);
            const tmp18 = new closure_4("heds", 16, 1);
            items[18] = new closure_4("es", 16, 1);
            const tmp19 = new closure_4("es", 16, 1);
            items[19] = new closure_4("endes", 18, 1);
            const tmp20 = new closure_4("endes", 18, 1);
            items[20] = new closure_4("erendes", 19, 1);
            const tmp21 = new closure_4("erendes", 19, 1);
            items[21] = new closure_4("enes", 18, 1);
            const tmp22 = new closure_4("enes", 18, 1);
            items[22] = new closure_4("ernes", 18, 1);
            const tmp23 = new closure_4("ernes", 18, 1);
            items[23] = new closure_4("eres", 18, 1);
            const tmp24 = new closure_4("eres", 18, 1);
            items[24] = new closure_4("ens", 16, 1);
            const tmp25 = new closure_4("ens", 16, 1);
            items[25] = new closure_4("hedens", 24, 1);
            const tmp26 = new closure_4("hedens", 24, 1);
            items[26] = new closure_4("erens", 24, 1);
            const tmp27 = new closure_4("erens", 24, 1);
            items[27] = new closure_4("ers", 16, 1);
            const tmp28 = new closure_4("ers", 16, 1);
            items[28] = new closure_4("ets", 16, 1);
            const tmp29 = new closure_4("ets", 16, 1);
            items[29] = new closure_4("erets", 28, 1);
            const tmp30 = new closure_4("erets", 28, 1);
            items[30] = new closure_4("et", -1, 1);
            const tmp31 = new closure_4("et", -1, 1);
            items[31] = new closure_4("eret", 30, 1);
            danishStemmer.a_0 = items;
            return items;
          }
        },
        {
          key: "a_1",
          get() {
            delete r1.a_1;
            const items = [new closure_4("gd", -1, -1), , , ];
            const tmp = new closure_4("gd", -1, -1);
            items[1] = new closure_4("dt", -1, -1);
            const tmp2 = new closure_4("dt", -1, -1);
            items[2] = new closure_4("gt", -1, -1);
            const tmp3 = new closure_4("gt", -1, -1);
            items[3] = new closure_4("kt", -1, -1);
            danishStemmer.a_1 = items;
            return items;
          }
        },
        {
          key: "a_2",
          get() {
            delete r1.a_2;
            const items = [new closure_4("ig", -1, 1), , , , ];
            const tmp = new closure_4("ig", -1, 1);
            items[1] = new closure_4("lig", 0, 1);
            const tmp2 = new closure_4("lig", 0, 1);
            items[2] = new closure_4("elig", 1, 1);
            const tmp3 = new closure_4("elig", 1, 1);
            items[3] = new closure_4("els", -1, 1);
            const tmp4 = new closure_4("els", -1, 1);
            items[4] = new closure_4("l\u00F8st", -1, 2);
            danishStemmer.a_2 = items;
            return items;
          }
        },
        {
          key: "g_v",
          get() {
            delete r1.g_v;
            const items = [];
            danishStemmer.g_v = items;
            return items;
          }
        },
        {
          key: "g_s_ending",
          get() {
            delete r1.g_s_ending;
            const items = [];
            danishStemmer.g_s_ending = items;
            return items;
          }
        }
      ];
      callback(danishStemmer, items, items1);
      return danishStemmer;
    }(tmp3);
    let closure_11 = (arg0) => {
      function dutchStemmer() {
        callback3(this, dutchStemmer);
        const prototypeOf = Object.getPrototypeOf(dutchStemmer);
        return callback2(this, prototypeOf(...arguments));
      }
      const callback = dutchStemmer;
      _inherits(dutchStemmer, arg0);
      let obj = {
        key: "r_prelude$esjava$0",
        value: function r_prelude$esjava$0() {
          const self = this;
          self.bra = self.cursor;
          const result = self.find_among$esjava$1(dutchStemmer.a_0);
          while (0 !== result) {
            self.ket = self.cursor;
            if (0 === result) {
              break;
            } else {
              if (1 === result) {
                let result1 = self.slice_from$esjava$1("a");
                // continue
              } else {
                if (2 === result) {
                  let result2 = self.slice_from$esjava$1("e");
                  // continue
                } else {
                  if (3 === result) {
                    let result3 = self.slice_from$esjava$1("i");
                    // continue
                  } else {
                    if (4 === result) {
                      let result4 = self.slice_from$esjava$1("o");
                      // continue
                    } else {
                      if (5 === result) {
                        let result5 = self.slice_from$esjava$1("u");
                        // continue
                      } else {
                        if (6 !== result) {
                          continue;
                        } else if (self.cursor >= self.limit) {
                          break;
                        } else {
                          self.cursor = self.cursor + 1;
                          // continue
                        }
                        self.cursor = tmp2;
                        self.cursor = tmp;
                        self.bra = self.cursor;
                        let str = "y";
                        if (self.eq_s$esjava$1("y")) {
                          self.ket = self.cursor;
                          let str2 = "Y";
                          let result6 = self.slice_from$esjava$1("Y");
                        } else {
                          self.cursor = self.cursor;
                        }
                        let cursor = self.cursor;
                        let num = 97;
                        let num2 = 232;
                      }
                      continue;
                    }
                    continue;
                  }
                  continue;
                }
                continue;
              }
              continue;
            }
          }
        }
      };
      const items = [obj, , , , , , , , , , , , , ];
      obj = {
        key: "r_mark_regions$esjava$0",
        value: function r_mark_regions$esjava$0() {
          const self = this;
          ({ limit: this.I_p1, limit: this.I_p2 } = this);
          while (!self.in_grouping$esjava$3(dutchStemmer.g_v, 97, 232)) {
            if (self.cursor >= self.limit) {
              let flag = false;
              return false;
            } else {
              self.cursor = self.cursor + 1;
              // continue
            }
          }
          const cursor = self.cursor;
          while (!self.out_grouping$esjava$3(dutchStemmer.g_v, 97, 232)) {
            if (cursor >= self.limit) {
              let flag2 = false;
              return false;
            } else {
              self.cursor = self.cursor + 1;
              // continue
            }
          }
          self.I_p1 = cursor;
          if (self.I_p1 < 3) {
            self.I_p1 = 3;
          }
          while (!self.in_grouping$esjava$3(dutchStemmer.g_v, 97, 232)) {
            if (self.cursor >= self.limit) {
              let flag3 = false;
              return false;
            } else {
              self.cursor = self.cursor + 1;
              // continue
            }
          }
          const cursor2 = self.cursor;
          while (!self.out_grouping$esjava$3(dutchStemmer.g_v, 97, 232)) {
            if (cursor2 >= self.limit) {
              let flag4 = false;
              return false;
            } else {
              self.cursor = self.cursor + 1;
              // continue
            }
          }
          self.I_p2 = cursor2;
          return true;
        }
      };
      items[1] = obj;
      obj = {
        key: "r_postlude$esjava$0",
        value: function r_postlude$esjava$0() {
          const self = this;
          self.bra = self.cursor;
          const result = self.find_among$esjava$1(dutchStemmer.a_1);
          while (0 !== result) {
            self.ket = self.cursor;
            if (0 === result) {
              break;
            } else {
              if (1 === result) {
                let result1 = self.slice_from$esjava$1("y");
                // continue
              } else {
                if (2 === result) {
                  let result2 = self.slice_from$esjava$1("i");
                  // continue
                } else {
                  if (3 !== result) {
                    continue;
                  } else if (self.cursor >= self.limit) {
                    break;
                  } else {
                    self.cursor = self.cursor + 1;
                    // continue
                  }
                  self.cursor = tmp;
                  let flag = true;
                  return true;
                }
                continue;
              }
              continue;
            }
          }
        }
      };
      items[2] = obj;
      items[3] = {
        key: "r_R1$esjava$0",
        value: function r_R1$esjava$0() {
          return this.I_p1 <= this.cursor;
        }
      };
      items[4] = {
        key: "r_R2$esjava$0",
        value: function r_R2$esjava$0() {
          return this.I_p2 <= this.cursor;
        }
      };
      items[5] = {
        key: "r_undouble$esjava$0",
        value: function r_undouble$esjava$0() {
          const self = this;
          const diff = this.limit - this.cursor;
          let tmp2 = 0 !== this.find_among_b$esjava$1(dutchStemmer.a_2);
          if (tmp2) {
            self.cursor = self.limit - diff;
            self.ket = self.cursor;
            let flag = !tmp3;
            if (self.cursor > self.limit_backward) {
              self.cursor = self.cursor - 1;
              self.bra = self.cursor;
              const result = self.slice_del$esjava$0();
              flag = true;
            }
            tmp2 = flag;
          }
          return tmp2;
        }
      };
      items[6] = {
        key: "r_e_ending$esjava$0",
        value: function r_e_ending$esjava$0() {
          const self = this;
          this.B_e_found = false;
          this.ket = this.cursor;
          const tmp = !this.eq_s_b$esjava$1("e");
          let tmp2 = !tmp;
          if (!tmp) {
            self.bra = self.cursor;
            const tmp3 = !self.r_R1$esjava$0();
            let tmp4 = !tmp3;
            if (!tmp3) {
              const diff = self.limit - self.cursor;
              const tmp7 = !self.out_grouping_b$esjava$3(dutchStemmer.g_v, 97, 232);
              let result = !tmp7;
              if (!tmp7) {
                self.cursor = self.limit - diff;
                result = self.slice_del$esjava$0();
                self.B_e_found = true;
                result = self.r_undouble$esjava$0();
              }
              tmp4 = result;
            }
            tmp2 = tmp4;
          }
          return tmp2;
        }
      };
      items[7] = {
        key: "r_en_ending$esjava$0",
        value: function r_en_ending$esjava$0() {
          const self = this;
          if (this.r_R1$esjava$0()) {
            const diff = self.limit - self.cursor;
            if (self.out_grouping_b$esjava$3(dutchStemmer.g_v, 97, 232)) {
              self.cursor = self.limit - diff;
              const diff1 = self.limit - self.cursor;
              if (self.eq_s_b$esjava$1("gem")) {
                return false;
              } else {
                self.cursor = self.limit - diff1;
                const result = self.slice_del$esjava$0();
                return self.r_undouble$esjava$0();
              }
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
      };
      items[8] = {
        key: "r_standard_suffix$esjava$0",
        value: function r_standard_suffix$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const diff = this.limit - this.cursor;
          const result = this.find_among_b$esjava$1(dutchStemmer.a_3);
          if (0 !== result) {
            self.bra = self.cursor;
            if (0 !== result) {
              if (1 === result) {
                if (self.r_R1$esjava$0()) {
                  const result1 = self.slice_from$esjava$1("heid");
                }
              } else if (2 === result) {
                const result2 = self.r_en_ending$esjava$0();
              } else if (3 === result) {
                if (self.r_R1$esjava$0()) {
                  if (self.out_grouping_b$esjava$3(dutchStemmer.g_v_j, 97, 232)) {
                    const result3 = self.slice_del$esjava$0();
                  }
                }
              }
            }
          }
          self.cursor = self.limit - diff;
          const diff1 = self.limit - self.cursor;
          const result4 = self.r_e_ending$esjava$0();
          self.cursor = self.limit - diff1;
          self.ket = self.cursor;
          const diff2 = self.limit - self.cursor;
          if (self.eq_s_b$esjava$1("heid")) {
            self.bra = self.cursor;
            if (self.r_R2$esjava$0()) {
              const diff3 = self.limit - self.cursor;
              if (!self.eq_s_b$esjava$1("c")) {
                self.cursor = self.limit - diff3;
                const result5 = self.slice_del$esjava$0();
                self.ket = self.cursor;
                if (self.eq_s_b$esjava$1("en")) {
                  self.bra = self.cursor;
                  const result6 = self.r_en_ending$esjava$0();
                }
              }
            }
          }
          self.cursor = self.limit - diff2;
          self.ket = self.cursor;
          const diff4 = self.limit - self.cursor;
          const result7 = self.find_among_b$esjava$1(dutchStemmer.a_4);
          if (0 !== result7) {
            self.bra = self.cursor;
            if (0 !== result7) {
              if (1 === result7) {
                if (self.r_R2$esjava$0()) {
                  const result8 = self.slice_del$esjava$0();
                  self.ket = self.cursor;
                  const diff5 = self.limit - self.cursor;
                  if (self.eq_s_b$esjava$1("ig")) {
                    self.bra = self.cursor;
                    if (self.r_R2$esjava$0()) {
                      const diff6 = self.limit - self.cursor;
                      if (!self.eq_s_b$esjava$1("e")) {
                        self.cursor = self.limit - diff6;
                        const result9 = self.slice_del$esjava$0();
                      }
                    }
                  }
                  self.cursor = self.limit - diff5;
                  const result10 = self.r_undouble$esjava$0();
                }
              } else if (2 === result7) {
                if (self.r_R2$esjava$0()) {
                  const diff7 = self.limit - self.cursor;
                  if (!self.eq_s_b$esjava$1("e")) {
                    self.cursor = self.limit - diff7;
                    const result11 = self.slice_del$esjava$0();
                  }
                }
              } else if (3 === result7) {
                if (self.r_R2$esjava$0()) {
                  const result12 = self.slice_del$esjava$0();
                  const result13 = self.r_e_ending$esjava$0();
                }
              } else if (4 === result7) {
                if (self.r_R2$esjava$0()) {
                  const result14 = self.slice_del$esjava$0();
                }
              } else if (5 === result7) {
                if (self.r_R2$esjava$0()) {
                  if (self.B_e_found) {
                    const result15 = self.slice_del$esjava$0();
                  }
                }
              }
            }
          }
          self.cursor = self.limit - diff4;
          const diff8 = self.limit - self.cursor;
          if (self.out_grouping_b$esjava$3(dutchStemmer.g_v_I, 73, 232)) {
            const diff9 = self.limit - self.cursor;
            if (0 !== self.find_among_b$esjava$1(dutchStemmer.a_5)) {
              if (self.out_grouping_b$esjava$3(dutchStemmer.g_v, 97, 232)) {
                self.cursor = self.limit - diff9;
                self.ket = self.cursor;
                if (self.cursor > self.limit_backward) {
                  self.cursor = self.cursor - 1;
                  self.bra = self.cursor;
                  const result16 = self.slice_del$esjava$0();
                }
              }
            }
          }
          self.cursor = self.limit - diff8;
          return true;
        }
      };
      items[9] = {
        key: "stem$esjava$0",
        value: function stem$esjava$0() {
          let cursor;
          const result = this.r_prelude$esjava$0();
          this.cursor = this.cursor;
          const result1 = this.r_mark_regions$esjava$0();
          this.cursor = this.cursor;
          ({ cursor: this.limit_backward, limit: this.cursor } = this);
          const diff = this.limit - this.cursor;
          const result2 = this.r_standard_suffix$esjava$0();
          this.cursor = this.limit - diff;
          ({ limit_backward: this.cursor, cursor } = this);
          const result3 = this.r_postlude$esjava$0();
          this.cursor = cursor;
          return true;
        }
      };
      items[10] = {
        key: "stem",
        value: function stem() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const stem$esjava$0 = self.stem$esjava$0;
            let applyResult = stem$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(dutchStemmer.prototype), "stem", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[11] = {
        key: "I_p2",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p2")) {
            let num = self._$esjava$I_p2;
          } else {
            num = 0;
            self._$esjava$I_p2 = 0;
          }
          return num;
        },
        set(_$esjava$I_p2) {
          this._$esjava$I_p2 = _$esjava$I_p2;
        }
      };
      items[12] = {
        key: "I_p1",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p1")) {
            let num = self._$esjava$I_p1;
          } else {
            num = 0;
            self._$esjava$I_p1 = 0;
          }
          return num;
        },
        set(_$esjava$I_p1) {
          this._$esjava$I_p1 = _$esjava$I_p1;
        }
      };
      items[13] = {
        key: "B_e_found",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$B_e_found")) {
            let flag = self._$esjava$B_e_found;
          } else {
            flag = false;
            self._$esjava$B_e_found = false;
          }
          return flag;
        },
        set(_$esjava$B_e_found) {
          this._$esjava$B_e_found = _$esjava$B_e_found;
        }
      };
      const items1 = [
        {
          key: "a_0",
          get() {
            delete r1.a_0;
            const items = [new closure_4("", -1, 6), , , , , , , , , , ];
            const tmp = new closure_4("", -1, 6);
            items[1] = new closure_4("\u00E1", 0, 1);
            const tmp2 = new closure_4("\u00E1", 0, 1);
            items[2] = new closure_4("\u00E4", 0, 1);
            const tmp3 = new closure_4("\u00E4", 0, 1);
            items[3] = new closure_4("\u00E9", 0, 2);
            const tmp4 = new closure_4("\u00E9", 0, 2);
            items[4] = new closure_4("\u00EB", 0, 2);
            const tmp5 = new closure_4("\u00EB", 0, 2);
            items[5] = new closure_4("\u00ED", 0, 3);
            const tmp6 = new closure_4("\u00ED", 0, 3);
            items[6] = new closure_4("\u00EF", 0, 3);
            const tmp7 = new closure_4("\u00EF", 0, 3);
            items[7] = new closure_4("\u00F3", 0, 4);
            const tmp8 = new closure_4("\u00F3", 0, 4);
            items[8] = new closure_4("\u00F6", 0, 4);
            const tmp9 = new closure_4("\u00F6", 0, 4);
            items[9] = new closure_4("\u00FA", 0, 5);
            const tmp10 = new closure_4("\u00FA", 0, 5);
            items[10] = new closure_4("\u00FC", 0, 5);
            dutchStemmer.a_0 = items;
            return items;
          }
        },
        {
          key: "a_1",
          get() {
            delete r1.a_1;
            const items = [new closure_4("", -1, 3), , ];
            const tmp = new closure_4("", -1, 3);
            items[1] = new closure_4("I", 0, 2);
            const tmp2 = new closure_4("I", 0, 2);
            items[2] = new closure_4("Y", 0, 1);
            dutchStemmer.a_1 = items;
            return items;
          }
        },
        {
          key: "a_2",
          get() {
            delete r1.a_2;
            const items = [new closure_4("dd", -1, -1), , ];
            const tmp = new closure_4("dd", -1, -1);
            items[1] = new closure_4("kk", -1, -1);
            const tmp2 = new closure_4("kk", -1, -1);
            items[2] = new closure_4("tt", -1, -1);
            dutchStemmer.a_2 = items;
            return items;
          }
        },
        {
          key: "a_3",
          get() {
            delete r1.a_3;
            const items = [new closure_4("ene", -1, 2), , , , ];
            const tmp = new closure_4("ene", -1, 2);
            items[1] = new closure_4("se", -1, 3);
            const tmp2 = new closure_4("se", -1, 3);
            items[2] = new closure_4("en", -1, 2);
            const tmp3 = new closure_4("en", -1, 2);
            items[3] = new closure_4("heden", 2, 1);
            const tmp4 = new closure_4("heden", 2, 1);
            items[4] = new closure_4("s", -1, 3);
            dutchStemmer.a_3 = items;
            return items;
          }
        },
        {
          key: "a_4",
          get() {
            delete r1.a_4;
            const items = [new closure_4("end", -1, 1), , , , , ];
            const tmp = new closure_4("end", -1, 1);
            items[1] = new closure_4("ig", -1, 2);
            const tmp2 = new closure_4("ig", -1, 2);
            items[2] = new closure_4("ing", -1, 1);
            const tmp3 = new closure_4("ing", -1, 1);
            items[3] = new closure_4("lijk", -1, 3);
            const tmp4 = new closure_4("lijk", -1, 3);
            items[4] = new closure_4("baar", -1, 4);
            const tmp5 = new closure_4("baar", -1, 4);
            items[5] = new closure_4("bar", -1, 5);
            dutchStemmer.a_4 = items;
            return items;
          }
        },
        {
          key: "a_5",
          get() {
            delete r1.a_5;
            const items = [new closure_4("aa", -1, -1), , , ];
            const tmp = new closure_4("aa", -1, -1);
            items[1] = new closure_4("ee", -1, -1);
            const tmp2 = new closure_4("ee", -1, -1);
            items[2] = new closure_4("oo", -1, -1);
            const tmp3 = new closure_4("oo", -1, -1);
            items[3] = new closure_4("uu", -1, -1);
            dutchStemmer.a_5 = items;
            return items;
          }
        },
        {
          key: "g_v",
          get() {
            delete r1.g_v;
            const items = [];
            dutchStemmer.g_v = items;
            return items;
          }
        },
        {
          key: "g_v_I",
          get() {
            delete r1.g_v_I;
            const items = [];
            dutchStemmer.g_v_I = items;
            return items;
          }
        },
        {
          key: "g_v_j",
          get() {
            delete r1.g_v_j;
            const items = [];
            dutchStemmer.g_v_j = items;
            return items;
          }
        }
      ];
      callback(dutchStemmer, items, items1);
      return dutchStemmer;
    }(tmp3);
    let closure_12 = (arg0) => {
      function englishStemmer() {
        callback3(this, englishStemmer);
        const prototypeOf = Object.getPrototypeOf(englishStemmer);
        return callback2(this, prototypeOf(...arguments));
      }
      const callback = englishStemmer;
      _inherits(englishStemmer, arg0);
      let obj = {
        key: "r_prelude$esjava$0",
        value: function r_prelude$esjava$0() {
          const self = this;
          this.B_Y_found = false;
          this.bra = this.cursor;
          if (this.eq_s$esjava$1("'")) {
            self.ket = self.cursor;
            const result = self.slice_del$esjava$0();
          }
          self.cursor = this.cursor;
          self.bra = self.cursor;
          if (self.eq_s$esjava$1("y")) {
            self.ket = self.cursor;
            const result1 = self.slice_from$esjava$1("Y");
            self.B_Y_found = true;
          }
          self.cursor = self.cursor;
          while (true) {
            while (true) {
              let tmp6 = englishStemmer;
              if (self.in_grouping$esjava$3(englishStemmer.g_v, 97, 121)) {
                self.bra = self.cursor;
                if (self.eq_s$esjava$1("y")) {
                  break;
                }
              }
              self.cursor = self.cursor;
              if (self.cursor >= self.limit) {
                self.cursor = tmp4;
                self.cursor = tmp3;
                return true;
              } else {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            self.ket = self.cursor;
            self.cursor = tmp5;
            let result2 = self.slice_from$esjava$1("Y");
            self.B_Y_found = true;
            // continue
          }
        }
      };
      const items = [obj, , , , , , , , , , , , , , , , , , , ];
      obj = {
        key: "r_mark_regions$esjava$0",
        value: function r_mark_regions$esjava$0() {
          let cursor;
          let cursor2;
          const self = this;
          ({ limit: this.I_p1, limit: this.I_p2 } = this);
          ({ cursor, cursor: cursor2 } = this);
          if (0 === this.find_among$esjava$1(englishStemmer.a_0)) {
            self.cursor = cursor2;
            while (!self.in_grouping$esjava$3(englishStemmer.g_v, 97, 121)) {
              if (self.cursor < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
              self.cursor = cursor;
              let flag = true;
              return true;
            }
            while (!self.out_grouping$esjava$3(englishStemmer.g_v, 97, 121)) {
              if (self.cursor < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
          }
          self.I_p1 = self.cursor;
          while (!self.in_grouping$esjava$3(englishStemmer.g_v, 97, 121)) {
            if (self.cursor < self.limit) {
              self.cursor = self.cursor + 1;
              // continue
            }
          }
          const cursor3 = self.cursor;
          while (!self.out_grouping$esjava$3(englishStemmer.g_v, 97, 121)) {
            if (cursor3 < self.limit) {
              self.cursor = self.cursor + 1;
              // continue
            }
          }
          self.I_p2 = cursor3;
        }
      };
      items[1] = obj;
      obj = {
        key: "r_shortv$esjava$0",
        value: function r_shortv$esjava$0() {
          const self = this;
          const diff = this.limit - this.cursor;
          if (this.out_grouping_b$esjava$3(englishStemmer.g_v_WXY, 89, 121)) {
            return true;
          }
          self.cursor = self.limit - diff;
          if (self.out_grouping_b$esjava$3(englishStemmer.g_v, 97, 121)) {
            if (self.in_grouping_b$esjava$3(englishStemmer.g_v, 97, 121)) {
              if (self.cursor > self.limit_backward) {
                return false;
              }
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
      };
      items[2] = obj;
      items[3] = {
        key: "r_R1$esjava$0",
        value: function r_R1$esjava$0() {
          return this.I_p1 <= this.cursor;
        }
      };
      items[4] = {
        key: "r_R2$esjava$0",
        value: function r_R2$esjava$0() {
          return this.I_p2 <= this.cursor;
        }
      };
      items[5] = {
        key: "r_Step_1a$esjava$0",
        value: function r_Step_1a$esjava$0() {
          const self = this;
          const diff = this.limit - this.cursor;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(englishStemmer.a_1);
          if (0 === result) {
            self.cursor = self.limit - diff;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              self.cursor = self.limit - diff;
            } else if (1 === result) {
              const result1 = self.slice_del$esjava$0();
            }
          }
          self.ket = self.cursor;
          const result2 = self.find_among_b$esjava$1(englishStemmer.a_2);
          if (0 === result2) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result2) {
              return false;
            } else {
              if (1 === result2) {
                const result3 = self.slice_from$esjava$1("ss");
              } else if (2 === result2) {
                const diff1 = self.cursor - 2;
                const diff2 = self.limit - self.cursor;
                if (self.limit_backward <= diff1) {
                  if (diff1 <= self.limit) {
                    self.cursor = diff1;
                    const result4 = self.slice_from$esjava$1("i");
                  }
                }
                self.cursor = self.limit - diff2;
                const result5 = self.slice_from$esjava$1("ie");
              } else if (3 === result2) {
                if (self.cursor <= self.limit_backward) {
                  return false;
                } else {
                  self.cursor = self.cursor - 1;
                  while (!self.in_grouping_b$esjava$3(englishStemmer.g_v, 97, 121)) {
                    if (self.cursor <= self.limit_backward) {
                      let flag = false;
                      return false;
                    } else {
                      self.cursor = self.cursor - 1;
                      // continue
                    }
                  }
                  const result6 = self.slice_del$esjava$0();
                }
              }
              return true;
            }
          }
        }
      };
      items[6] = {
        key: "r_Step_1b$esjava$0",
        value: function r_Step_1b$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(englishStemmer.a_4);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.r_R1$esjava$0()) {
                  const result1 = self.slice_from$esjava$1("ee");
                } else {
                  return false;
                }
              } else if (2 === result) {
                const diff = self.limit - self.cursor;
                while (!self.in_grouping_b$esjava$3(englishStemmer.g_v, 97, 121)) {
                  if (self.cursor <= self.limit_backward) {
                    let flag = false;
                    return false;
                  } else {
                    self.cursor = self.cursor - 1;
                    // continue
                  }
                }
                self.cursor = self.limit - diff;
                const result2 = self.slice_del$esjava$0();
                const diff1 = self.limit - self.cursor;
                const result3 = self.find_among_b$esjava$1(englishStemmer.a_3);
                if (0 === result3) {
                  return false;
                } else {
                  self.cursor = self.limit - diff1;
                  if (0 === result3) {
                    return false;
                  } else if (1 === result3) {
                    const result4 = self.insert$esjava$3(self.cursor, self.cursor, "e");
                    self.cursor = self.cursor;
                  } else if (2 === result3) {
                    self.ket = self.cursor;
                    if (self.cursor <= self.limit_backward) {
                      return false;
                    } else {
                      self.cursor = self.cursor - 1;
                      self.bra = self.cursor;
                      const result5 = self.slice_del$esjava$0();
                    }
                  } else if (3 === result3) {
                    if (self.cursor !== self.I_p1) {
                      return false;
                    } else {
                      const diff2 = self.limit - self.cursor;
                      if (self.r_shortv$esjava$0()) {
                        self.cursor = self.limit - diff2;
                        const result6 = self.insert$esjava$3(self.cursor, self.cursor, "e");
                        self.cursor = self.cursor;
                      } else {
                        return false;
                      }
                    }
                  }
                }
              }
              return true;
            }
          }
        }
      };
      items[7] = {
        key: "r_Step_1c$esjava$0",
        value: function r_Step_1c$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const diff = this.limit - this.cursor;
          if (!this.eq_s_b$esjava$1("y")) {
            self.cursor = self.limit - diff;
            if (!self.eq_s_b$esjava$1("Y")) {
              return false;
            }
          }
          self.bra = self.cursor;
          if (self.out_grouping_b$esjava$3(englishStemmer.g_v, 97, 121)) {
            if (self.cursor > self.limit_backward) {
              self.cursor = self.limit - tmp2;
              const result = self.slice_from$esjava$1("i");
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
      };
      items[8] = {
        key: "r_Step_2$esjava$0",
        value: function r_Step_2$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(englishStemmer.a_5);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (self.r_R1$esjava$0()) {
              switch (result) {
                case 0:
                  return false;
                case 1:
                  const result1 = self.slice_from$esjava$1("tion");
                  return true;
                case 2:
                  const result2 = self.slice_from$esjava$1("ence");
                break;
                case 3:
                  const result3 = self.slice_from$esjava$1("ance");
                break;
                case 4:
                  const result4 = self.slice_from$esjava$1("able");
                break;
                case 5:
                  const result5 = self.slice_from$esjava$1("ent");
                break;
                case 6:
                  const result6 = self.slice_from$esjava$1("ize");
                break;
                case 7:
                  const result7 = self.slice_from$esjava$1("ate");
                break;
                case 8:
                  const result8 = self.slice_from$esjava$1("al");
                break;
                case 9:
                  let result9 = self.slice_from$esjava$1("ful");
                break;
                case 10:
                  const result10 = self.slice_from$esjava$1("ous");
                break;
                case 11:
                  const result11 = self.slice_from$esjava$1("ive");
                break;
                case 12:
                  const result12 = self.slice_from$esjava$1("ble");
                break;
                case 13:
                  if (self.eq_s_b$esjava$1("l")) {
                    const result13 = self.slice_from$esjava$1("og");
                  } else {
                    return false;
                  }
                break;
                case 14:
                  result9 = self.slice_from$esjava$1("ful");
                break;
                case 15:
                  const result14 = self.slice_from$esjava$1("less");
                break;
                case 16:
                  if (self.in_grouping_b$esjava$3(closure_0.g_valid_LI, 99, 116)) {
                    const result15 = self.slice_del$esjava$0();
                  } else {
                    return false;
                  }
                break;
              }
            } else {
              return false;
            }
          }
        }
      };
      items[9] = {
        key: "r_Step_3$esjava$0",
        value: function r_Step_3$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(englishStemmer.a_6);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (self.r_R1$esjava$0()) {
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  const result1 = self.slice_from$esjava$1("tion");
                } else if (2 === result) {
                  const result2 = self.slice_from$esjava$1("ate");
                } else if (3 === result) {
                  const result3 = self.slice_from$esjava$1("al");
                } else if (4 === result) {
                  const result4 = self.slice_from$esjava$1("ic");
                } else if (5 === result) {
                  const result5 = self.slice_del$esjava$0();
                } else if (6 === result) {
                  if (self.r_R2$esjava$0()) {
                    const result6 = self.slice_del$esjava$0();
                  } else {
                    return false;
                  }
                }
                return true;
              }
            } else {
              return false;
            }
          }
        }
      };
      items[10] = {
        key: "r_Step_4$esjava$0",
        value: function r_Step_4$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(englishStemmer.a_7);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (self.r_R2$esjava$0()) {
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  const result1 = self.slice_del$esjava$0();
                } else if (2 === result) {
                  const diff = self.limit - self.cursor;
                  if (!self.eq_s_b$esjava$1("s")) {
                    self.cursor = self.limit - diff;
                    if (!self.eq_s_b$esjava$1("t")) {
                      return false;
                    }
                  }
                  const result2 = self.slice_del$esjava$0();
                }
                return true;
              }
            } else {
              return false;
            }
          }
        }
      };
      items[11] = {
        key: "r_Step_5$esjava$0",
        value: function r_Step_5$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(englishStemmer.a_8);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else if (1 === result) {
              const diff = self.limit - self.cursor;
              if (self.r_R2$esjava$0()) {
                const result1 = self.slice_del$esjava$0();
              } else {
                self.cursor = self.limit - diff;
                if (self.r_R1$esjava$0()) {
                  const diff1 = self.limit - self.cursor;
                  if (!self.r_shortv$esjava$0()) {
                    self.cursor = self.limit - diff1;
                  }
                } else {
                  return false;
                }
              }
              return false;
            } else {
              if (2 === result) {
                if (self.r_R2$esjava$0()) {
                  if (self.eq_s_b$esjava$1("l")) {
                    const result2 = self.slice_del$esjava$0();
                  } else {
                    return false;
                  }
                } else {
                  return false;
                }
              }
              return true;
            }
          }
        }
      };
      items[12] = {
        key: "r_exception2$esjava$0",
        value: function r_exception2$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          let tmp = 0 !== this.find_among_b$esjava$1(englishStemmer.a_9);
          if (tmp) {
            self.bra = self.cursor;
            tmp = self.cursor <= self.limit_backward;
          }
          return tmp;
        }
      };
      items[13] = {
        key: "r_exception1$esjava$0",
        value: function r_exception1$esjava$0() {
          const self = this;
          this.bra = this.cursor;
          if (0 === this.find_among$esjava$1(englishStemmer.a_10)) {
            return false;
          } else {
            self.ket = self.cursor;
            if (self.cursor < self.limit) {
              return false;
            } else {
              const result = self.slice_from$esjava$1("singl");
            }
          }
        }
      };
      items[14] = {
        key: "r_postlude$esjava$0",
        value: function r_postlude$esjava$0() {
          let cursor;
          const self = this;
          if (this.B_Y_found) {
            while (true) {
              ({ cursor, cursor: self.bra } = self);
              while (!self.eq_s$esjava$1("Y")) {
                self.cursor = cursor;
                if (self.cursor >= self.limit) {
                  self.cursor = tmp;
                  let flag2 = true;
                  return true;
                } else {
                  self.cursor = self.cursor + 1;
                  // continue
                }
              }
              self.ket = self.cursor;
              self.cursor = cursor;
              let result = self.slice_from$esjava$1("y");
              // continue
            }
          } else {
            return false;
          }
        }
      };
      items[15] = {
        key: "stem$esjava$0",
        value: function stem$esjava$0() {
          let cursor2;
          const self = this;
          const cursor = this.cursor;
          if (!this.r_exception1$esjava$0()) {
            self.cursor = cursor;
            const sum = self.cursor + 3;
            if (0 <= sum) {
              if (sum <= self.limit) {
                self.cursor = sum;
                self.cursor = cursor;
                const result = self.r_prelude$esjava$0();
                self.cursor = self.cursor;
                const result1 = self.r_mark_regions$esjava$0();
                self.cursor = self.cursor;
                ({ cursor: self.limit_backward, limit: self.cursor } = self);
                const diff = self.limit - self.cursor;
                const result2 = self.r_Step_1a$esjava$0();
                self.cursor = self.limit - diff;
                const diff1 = self.limit - self.cursor;
                if (!self.r_exception2$esjava$0()) {
                  self.cursor = self.limit - diff1;
                  const diff2 = self.limit - self.cursor;
                  const result3 = self.r_Step_1b$esjava$0();
                  self.cursor = self.limit - diff2;
                  const diff3 = self.limit - self.cursor;
                  const result4 = self.r_Step_1c$esjava$0();
                  self.cursor = self.limit - diff3;
                  const diff4 = self.limit - self.cursor;
                  const result5 = self.r_Step_2$esjava$0();
                  self.cursor = self.limit - diff4;
                  const diff5 = self.limit - self.cursor;
                  const result6 = self.r_Step_3$esjava$0();
                  self.cursor = self.limit - diff5;
                  const diff6 = self.limit - self.cursor;
                  const result7 = self.r_Step_4$esjava$0();
                  self.cursor = self.limit - diff6;
                  const diff7 = self.limit - self.cursor;
                  const result8 = self.r_Step_5$esjava$0();
                  self.cursor = self.limit - diff7;
                }
                ({ limit_backward: self.cursor, cursor: cursor2 } = self);
                const result9 = self.r_postlude$esjava$0();
                self.cursor = cursor2;
              }
            }
            self.cursor = self.cursor;
          }
          return true;
        }
      };
      items[16] = {
        key: "stem",
        value: function stem() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const stem$esjava$0 = self.stem$esjava$0;
            let applyResult = stem$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(englishStemmer.prototype), "stem", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[17] = {
        key: "B_Y_found",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$B_Y_found")) {
            let flag = self._$esjava$B_Y_found;
          } else {
            flag = false;
            self._$esjava$B_Y_found = false;
          }
          return flag;
        },
        set(_$esjava$B_Y_found) {
          this._$esjava$B_Y_found = _$esjava$B_Y_found;
        }
      };
      items[18] = {
        key: "I_p2",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p2")) {
            let num = self._$esjava$I_p2;
          } else {
            num = 0;
            self._$esjava$I_p2 = 0;
          }
          return num;
        },
        set(_$esjava$I_p2) {
          this._$esjava$I_p2 = _$esjava$I_p2;
        }
      };
      items[19] = {
        key: "I_p1",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p1")) {
            let num = self._$esjava$I_p1;
          } else {
            num = 0;
            self._$esjava$I_p1 = 0;
          }
          return num;
        },
        set(_$esjava$I_p1) {
          this._$esjava$I_p1 = _$esjava$I_p1;
        }
      };
      const items1 = [
        {
          key: "a_0",
          get() {
            delete r1.a_0;
            const items = [new closure_4("arsen", -1, -1), , ];
            const tmp = new closure_4("arsen", -1, -1);
            items[1] = new closure_4("commun", -1, -1);
            const tmp2 = new closure_4("commun", -1, -1);
            items[2] = new closure_4("gener", -1, -1);
            englishStemmer.a_0 = items;
            return items;
          }
        },
        {
          key: "a_1",
          get() {
            delete r1.a_1;
            const items = [new closure_4("'", -1, 1), , ];
            const tmp = new closure_4("'", -1, 1);
            items[1] = new closure_4("'s'", 0, 1);
            const tmp2 = new closure_4("'s'", 0, 1);
            items[2] = new closure_4("'s", -1, 1);
            englishStemmer.a_1 = items;
            return items;
          }
        },
        {
          key: "a_2",
          get() {
            delete r1.a_2;
            const items = [new closure_4("ied", -1, 2), , , , , ];
            const tmp = new closure_4("ied", -1, 2);
            items[1] = new closure_4("s", -1, 3);
            const tmp2 = new closure_4("s", -1, 3);
            items[2] = new closure_4("ies", 1, 2);
            const tmp3 = new closure_4("ies", 1, 2);
            items[3] = new closure_4("sses", 1, 1);
            const tmp4 = new closure_4("sses", 1, 1);
            items[4] = new closure_4("ss", 1, -1);
            const tmp5 = new closure_4("ss", 1, -1);
            items[5] = new closure_4("us", 1, -1);
            englishStemmer.a_2 = items;
            return items;
          }
        },
        {
          key: "a_3",
          get() {
            delete r1.a_3;
            const items = [new closure_4("", -1, 3), , , , , , , , , , , , ];
            const tmp = new closure_4("", -1, 3);
            items[1] = new closure_4("bb", 0, 2);
            const tmp2 = new closure_4("bb", 0, 2);
            items[2] = new closure_4("dd", 0, 2);
            const tmp3 = new closure_4("dd", 0, 2);
            items[3] = new closure_4("ff", 0, 2);
            const tmp4 = new closure_4("ff", 0, 2);
            items[4] = new closure_4("gg", 0, 2);
            const tmp5 = new closure_4("gg", 0, 2);
            items[5] = new closure_4("bl", 0, 1);
            const tmp6 = new closure_4("bl", 0, 1);
            items[6] = new closure_4("mm", 0, 2);
            const tmp7 = new closure_4("mm", 0, 2);
            items[7] = new closure_4("nn", 0, 2);
            const tmp8 = new closure_4("nn", 0, 2);
            items[8] = new closure_4("pp", 0, 2);
            const tmp9 = new closure_4("pp", 0, 2);
            items[9] = new closure_4("rr", 0, 2);
            const tmp10 = new closure_4("rr", 0, 2);
            items[10] = new closure_4("at", 0, 1);
            const tmp11 = new closure_4("at", 0, 1);
            items[11] = new closure_4("tt", 0, 2);
            const tmp12 = new closure_4("tt", 0, 2);
            items[12] = new closure_4("iz", 0, 1);
            englishStemmer.a_3 = items;
            return items;
          }
        },
        {
          key: "a_4",
          get() {
            delete r1.a_4;
            const items = [new closure_4("ed", -1, 2), , , , , ];
            const tmp = new closure_4("ed", -1, 2);
            items[1] = new closure_4("eed", 0, 1);
            const tmp2 = new closure_4("eed", 0, 1);
            items[2] = new closure_4("ing", -1, 2);
            const tmp3 = new closure_4("ing", -1, 2);
            items[3] = new closure_4("edly", -1, 2);
            const tmp4 = new closure_4("edly", -1, 2);
            items[4] = new closure_4("eedly", 3, 1);
            const tmp5 = new closure_4("eedly", 3, 1);
            items[5] = new closure_4("ingly", -1, 2);
            englishStemmer.a_4 = items;
            return items;
          }
        },
        {
          key: "a_5",
          get() {
            delete r1.a_5;
            const items = [new closure_4("anci", -1, 3), , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("anci", -1, 3);
            items[1] = new closure_4("enci", -1, 2);
            const tmp2 = new closure_4("enci", -1, 2);
            items[2] = new closure_4("ogi", -1, 13);
            const tmp3 = new closure_4("ogi", -1, 13);
            items[3] = new closure_4("li", -1, 16);
            const tmp4 = new closure_4("li", -1, 16);
            items[4] = new closure_4("bli", 3, 12);
            const tmp5 = new closure_4("bli", 3, 12);
            items[5] = new closure_4("abli", 4, 4);
            const tmp6 = new closure_4("abli", 4, 4);
            items[6] = new closure_4("alli", 3, 8);
            const tmp7 = new closure_4("alli", 3, 8);
            items[7] = new closure_4("fulli", 3, 14);
            const tmp8 = new closure_4("fulli", 3, 14);
            items[8] = new closure_4("lessli", 3, 15);
            const tmp9 = new closure_4("lessli", 3, 15);
            items[9] = new closure_4("ousli", 3, 10);
            const tmp10 = new closure_4("ousli", 3, 10);
            items[10] = new closure_4("entli", 3, 5);
            const tmp11 = new closure_4("entli", 3, 5);
            items[11] = new closure_4("aliti", -1, 8);
            const tmp12 = new closure_4("aliti", -1, 8);
            items[12] = new closure_4("biliti", -1, 12);
            const tmp13 = new closure_4("biliti", -1, 12);
            items[13] = new closure_4("iviti", -1, 11);
            const tmp14 = new closure_4("iviti", -1, 11);
            items[14] = new closure_4("tional", -1, 1);
            const tmp15 = new closure_4("tional", -1, 1);
            items[15] = new closure_4("ational", 14, 7);
            const tmp16 = new closure_4("ational", 14, 7);
            items[16] = new closure_4("alism", -1, 8);
            const tmp17 = new closure_4("alism", -1, 8);
            items[17] = new closure_4("ation", -1, 7);
            const tmp18 = new closure_4("ation", -1, 7);
            items[18] = new closure_4("ization", 17, 6);
            const tmp19 = new closure_4("ization", 17, 6);
            items[19] = new closure_4("izer", -1, 6);
            const tmp20 = new closure_4("izer", -1, 6);
            items[20] = new closure_4("ator", -1, 7);
            const tmp21 = new closure_4("ator", -1, 7);
            items[21] = new closure_4("iveness", -1, 11);
            const tmp22 = new closure_4("iveness", -1, 11);
            items[22] = new closure_4("fulness", -1, 9);
            const tmp23 = new closure_4("fulness", -1, 9);
            items[23] = new closure_4("ousness", -1, 10);
            englishStemmer.a_5 = items;
            return items;
          }
        },
        {
          key: "a_6",
          get() {
            delete r1.a_6;
            const items = [new closure_4("icate", -1, 4), , , , , , , , ];
            const tmp = new closure_4("icate", -1, 4);
            items[1] = new closure_4("ative", -1, 6);
            const tmp2 = new closure_4("ative", -1, 6);
            items[2] = new closure_4("alize", -1, 3);
            const tmp3 = new closure_4("alize", -1, 3);
            items[3] = new closure_4("iciti", -1, 4);
            const tmp4 = new closure_4("iciti", -1, 4);
            items[4] = new closure_4("ical", -1, 4);
            const tmp5 = new closure_4("ical", -1, 4);
            items[5] = new closure_4("tional", -1, 1);
            const tmp6 = new closure_4("tional", -1, 1);
            items[6] = new closure_4("ational", 5, 2);
            const tmp7 = new closure_4("ational", 5, 2);
            items[7] = new closure_4("ful", -1, 5);
            const tmp8 = new closure_4("ful", -1, 5);
            items[8] = new closure_4("ness", -1, 5);
            englishStemmer.a_6 = items;
            return items;
          }
        },
        {
          key: "a_7",
          get() {
            delete r1.a_7;
            const items = [new closure_4("ic", -1, 1), , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("ic", -1, 1);
            items[1] = new closure_4("ance", -1, 1);
            const tmp2 = new closure_4("ance", -1, 1);
            items[2] = new closure_4("ence", -1, 1);
            const tmp3 = new closure_4("ence", -1, 1);
            items[3] = new closure_4("able", -1, 1);
            const tmp4 = new closure_4("able", -1, 1);
            items[4] = new closure_4("ible", -1, 1);
            const tmp5 = new closure_4("ible", -1, 1);
            items[5] = new closure_4("ate", -1, 1);
            const tmp6 = new closure_4("ate", -1, 1);
            items[6] = new closure_4("ive", -1, 1);
            const tmp7 = new closure_4("ive", -1, 1);
            items[7] = new closure_4("ize", -1, 1);
            const tmp8 = new closure_4("ize", -1, 1);
            items[8] = new closure_4("iti", -1, 1);
            const tmp9 = new closure_4("iti", -1, 1);
            items[9] = new closure_4("al", -1, 1);
            const tmp10 = new closure_4("al", -1, 1);
            items[10] = new closure_4("ism", -1, 1);
            const tmp11 = new closure_4("ism", -1, 1);
            items[11] = new closure_4("ion", -1, 2);
            const tmp12 = new closure_4("ion", -1, 2);
            items[12] = new closure_4("er", -1, 1);
            const tmp13 = new closure_4("er", -1, 1);
            items[13] = new closure_4("ous", -1, 1);
            const tmp14 = new closure_4("ous", -1, 1);
            items[14] = new closure_4("ant", -1, 1);
            const tmp15 = new closure_4("ant", -1, 1);
            items[15] = new closure_4("ent", -1, 1);
            const tmp16 = new closure_4("ent", -1, 1);
            items[16] = new closure_4("ment", 15, 1);
            const tmp17 = new closure_4("ment", 15, 1);
            items[17] = new closure_4("ement", 16, 1);
            englishStemmer.a_7 = items;
            return items;
          }
        },
        {
          key: "a_8",
          get() {
            delete r1.a_8;
            const items = [new closure_4("e", -1, 1), ];
            const tmp = new closure_4("e", -1, 1);
            items[1] = new closure_4("l", -1, 2);
            englishStemmer.a_8 = items;
            return items;
          }
        },
        {
          key: "a_9",
          get() {
            delete r1.a_9;
            const items = [new closure_4("succeed", -1, -1), , , , , , , ];
            const tmp = new closure_4("succeed", -1, -1);
            items[1] = new closure_4("proceed", -1, -1);
            const tmp2 = new closure_4("proceed", -1, -1);
            items[2] = new closure_4("exceed", -1, -1);
            const tmp3 = new closure_4("exceed", -1, -1);
            items[3] = new closure_4("canning", -1, -1);
            const tmp4 = new closure_4("canning", -1, -1);
            items[4] = new closure_4("inning", -1, -1);
            const tmp5 = new closure_4("inning", -1, -1);
            items[5] = new closure_4("earring", -1, -1);
            const tmp6 = new closure_4("earring", -1, -1);
            items[6] = new closure_4("herring", -1, -1);
            const tmp7 = new closure_4("herring", -1, -1);
            items[7] = new closure_4("outing", -1, -1);
            englishStemmer.a_9 = items;
            return items;
          }
        },
        {
          key: "a_10",
          get() {
            delete r1.a_10;
            const items = [new closure_4("andes", -1, -1), , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("andes", -1, -1);
            items[1] = new closure_4("atlas", -1, -1);
            const tmp2 = new closure_4("atlas", -1, -1);
            items[2] = new closure_4("bias", -1, -1);
            const tmp3 = new closure_4("bias", -1, -1);
            items[3] = new closure_4("cosmos", -1, -1);
            const tmp4 = new closure_4("cosmos", -1, -1);
            items[4] = new closure_4("dying", -1, 3);
            const tmp5 = new closure_4("dying", -1, 3);
            items[5] = new closure_4("early", -1, 9);
            const tmp6 = new closure_4("early", -1, 9);
            items[6] = new closure_4("gently", -1, 7);
            const tmp7 = new closure_4("gently", -1, 7);
            items[7] = new closure_4("howe", -1, -1);
            const tmp8 = new closure_4("howe", -1, -1);
            items[8] = new closure_4("idly", -1, 6);
            const tmp9 = new closure_4("idly", -1, 6);
            items[9] = new closure_4("lying", -1, 4);
            const tmp10 = new closure_4("lying", -1, 4);
            items[10] = new closure_4("news", -1, -1);
            const tmp11 = new closure_4("news", -1, -1);
            items[11] = new closure_4("only", -1, 10);
            const tmp12 = new closure_4("only", -1, 10);
            items[12] = new closure_4("singly", -1, 11);
            const tmp13 = new closure_4("singly", -1, 11);
            items[13] = new closure_4("skies", -1, 2);
            const tmp14 = new closure_4("skies", -1, 2);
            items[14] = new closure_4("skis", -1, 1);
            const tmp15 = new closure_4("skis", -1, 1);
            items[15] = new closure_4("sky", -1, -1);
            const tmp16 = new closure_4("sky", -1, -1);
            items[16] = new closure_4("tying", -1, 5);
            const tmp17 = new closure_4("tying", -1, 5);
            items[17] = new closure_4("ugly", -1, 8);
            englishStemmer.a_10 = items;
            return items;
          }
        },
        {
          key: "g_v",
          get() {
            delete r1.g_v;
            const items = [];
            englishStemmer.g_v = items;
            return items;
          }
        },
        {
          key: "g_v_WXY",
          get() {
            delete r1.g_v_WXY;
            const items = [-246129420478706060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001734758249845244, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003344150582518812, -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000019624595712154794, -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000039241445694749585];
            englishStemmer.g_v_WXY = items;
            return items;
          }
        },
        {
          key: "g_valid_LI",
          get() {
            delete r1.g_valid_LI;
            const items = [];
            englishStemmer.g_valid_LI = items;
            return items;
          }
        }
      ];
      callback(englishStemmer, items, items1);
      return englishStemmer;
    }(tmp3);
    let closure_13 = (arg0) => {
      function finnishStemmer() {
        callback3(this, finnishStemmer);
        const prototypeOf = Object.getPrototypeOf(finnishStemmer);
        return callback2(this, prototypeOf(...arguments));
      }
      const callback = finnishStemmer;
      _inherits(finnishStemmer, arg0);
      let obj = {
        key: "r_mark_regions$esjava$0",
        value: function r_mark_regions$esjava$0() {
          const self = this;
          ({ limit: this.I_p1, limit: this.I_p2 } = this);
          self.cursor = self.cursor;
          while (!self.in_grouping$esjava$3(finnishStemmer.g_V1, 97, 246)) {
            if (self.cursor >= self.limit) {
              let flag = false;
              return false;
            } else {
              self.cursor = self.cursor + 1;
              // continue
            }
          }
          const cursor = self.cursor;
          while (!self.out_grouping$esjava$3(finnishStemmer.g_V1, 97, 246)) {
            if (cursor >= self.limit) {
              let flag2 = false;
              return false;
            } else {
              self.cursor = self.cursor + 1;
              // continue
            }
          }
          self.I_p1 = cursor;
          self.cursor = self.cursor;
          while (!self.in_grouping$esjava$3(finnishStemmer.g_V1, 97, 246)) {
            if (self.cursor >= self.limit) {
              let flag3 = false;
              return false;
            } else {
              self.cursor = self.cursor + 1;
              // continue
            }
          }
          const cursor2 = self.cursor;
          while (!self.out_grouping$esjava$3(finnishStemmer.g_V1, 97, 246)) {
            if (cursor2 >= self.limit) {
              let flag4 = false;
              return false;
            } else {
              self.cursor = self.cursor + 1;
              // continue
            }
          }
          self.I_p2 = cursor2;
          return true;
        }
      };
      const items = [obj, , , , , , , , , , , , , , , , , , , , ];
      obj = {
        key: "r_R2$esjava$0",
        value: function r_R2$esjava$0() {
          return this.I_p2 <= this.cursor;
        }
      };
      items[1] = obj;
      obj = {
        key: "r_particle_etc$esjava$0",
        value: function r_particle_etc$esjava$0() {
          let limit_backward;
          const self = this;
          if (this.cursor < this.I_p1) {
            return false;
          } else {
            ({ I_p1: self.cursor, limit_backward, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp;
            self.ket = self.cursor;
            const result = self.find_among_b$esjava$1(finnishStemmer.a_0);
            if (0 === result) {
              self.limit_backward = limit_backward;
              return false;
            } else {
              self.bra = self.cursor;
              self.limit_backward = limit_backward;
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  if (!self.in_grouping_b$esjava$3(finnishStemmer.g_particle_end, 97, 246)) {
                    return false;
                  }
                } else if (2 === result) {
                  if (!self.r_R2$esjava$0()) {
                    return false;
                  }
                }
                const result1 = self.slice_del$esjava$0();
                return true;
              }
            }
          }
        }
      };
      items[2] = obj;
      items[3] = {
        key: "r_possessive$esjava$0",
        value: function r_possessive$esjava$0() {
          let limit_backward;
          const self = this;
          if (this.cursor < this.I_p1) {
            return false;
          } else {
            ({ I_p1: self.cursor, limit_backward, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp;
            self.ket = self.cursor;
            const result = self.find_among_b$esjava$1(finnishStemmer.a_4);
            if (0 === result) {
              self.limit_backward = limit_backward;
              return false;
            } else {
              self.bra = self.cursor;
              self.limit_backward = limit_backward;
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  const diff = self.limit - self.cursor;
                  if (self.eq_s_b$esjava$1("k")) {
                    return false;
                  } else {
                    self.cursor = self.limit - diff;
                    const result1 = self.slice_del$esjava$0();
                  }
                } else if (2 === result) {
                  const result2 = self.slice_del$esjava$0();
                  self.ket = self.cursor;
                  if (self.eq_s_b$esjava$1("kse")) {
                    self.bra = self.cursor;
                    const result3 = self.slice_from$esjava$1("ksi");
                  } else {
                    return false;
                  }
                } else if (3 === result) {
                  const result4 = self.slice_del$esjava$0();
                } else if (4 === result) {
                  if (0 === self.find_among_b$esjava$1(finnishStemmer.a_1)) {
                    return false;
                  } else {
                    const result5 = self.slice_del$esjava$0();
                  }
                } else if (5 === result) {
                  if (0 === self.find_among_b$esjava$1(finnishStemmer.a_2)) {
                    return false;
                  } else {
                    const result6 = self.slice_del$esjava$0();
                  }
                } else if (6 === result) {
                  if (0 === self.find_among_b$esjava$1(finnishStemmer.a_3)) {
                    return false;
                  } else {
                    const result7 = self.slice_del$esjava$0();
                  }
                }
                return true;
              }
            }
          }
        }
      };
      items[4] = {
        key: "r_LONG$esjava$0",
        value: function r_LONG$esjava$0() {
          return 0 !== this.find_among_b$esjava$1(finnishStemmer.a_5);
        }
      };
      items[5] = {
        key: "r_VI$esjava$0",
        value: function r_VI$esjava$0() {
          const self = this;
          const tmp = !this.eq_s_b$esjava$1("i");
          let result = !tmp;
          if (!tmp) {
            result = self.in_grouping_b$esjava$3(finnishStemmer.g_V2, 97, 246);
          }
          return result;
        }
      };
      items[6] = {
        key: "r_case_ending$esjava$0",
        value: function r_case_ending$esjava$0() {
          let limit_backward;
          const self = this;
          if (this.cursor < this.I_p1) {
            return false;
          } else {
            ({ I_p1: self.cursor, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp;
            ({ cursor: self.ket, limit_backward } = self);
            if (0 === self.find_among_b$esjava$1(self.a_6)) {
              self.limit_backward = limit_backward;
              return false;
            } else if (self.in_grouping_b$esjava$3(finnishStemmer.g_V1, 97, 246)) {
              if (self.out_grouping_b$esjava$3(finnishStemmer.g_V1, 97, 246)) {
                const result = self.slice_del$esjava$0();
                self.B_ending_removed = true;
              } else {
                return false;
              }
            } else {
              return false;
            }
          }
        }
      };
      items[7] = {
        key: "r_other_endings$esjava$0",
        value: function r_other_endings$esjava$0() {
          let limit_backward;
          const self = this;
          if (this.cursor < this.I_p2) {
            return false;
          } else {
            ({ I_p2: self.cursor, limit_backward, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp;
            self.ket = self.cursor;
            const result = self.find_among_b$esjava$1(finnishStemmer.a_7);
            if (0 === result) {
              self.limit_backward = limit_backward;
              return false;
            } else {
              self.bra = self.cursor;
              self.limit_backward = limit_backward;
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  const diff = self.limit - self.cursor;
                  if (self.eq_s_b$esjava$1("po")) {
                    return false;
                  } else {
                    self.cursor = self.limit - diff;
                  }
                }
                const result1 = self.slice_del$esjava$0();
                return true;
              }
            }
          }
        }
      };
      items[8] = {
        key: "r_i_plural$esjava$0",
        value: function r_i_plural$esjava$0() {
          let limit_backward;
          const self = this;
          const tmp2 = this.cursor < this.I_p1;
          if (tmp2) {
            return !tmp2;
          } else {
            ({ I_p1: self.cursor, limit_backward, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp;
            self.ket = self.cursor;
            if (0 === self.find_among_b$esjava$1(finnishStemmer.a_8)) {
              self.limit_backward = limit_backward;
              let flag = false;
            } else {
              self.bra = self.cursor;
              self.limit_backward = limit_backward;
              const result = self.slice_del$esjava$0();
              flag = true;
            }
          }
        }
      };
      items[9] = {
        key: "r_t_plural$esjava$0",
        value: function r_t_plural$esjava$0() {
          let limit_backward;
          let limit_backward2;
          const self = this;
          if (this.cursor < this.I_p1) {
            return false;
          } else {
            ({ I_p1: self.cursor, limit_backward, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp;
            self.ket = self.cursor;
            if (self.eq_s_b$esjava$1("t")) {
              self.bra = self.cursor;
              const diff = self.limit - self.cursor;
              if (self.in_grouping_b$esjava$3(finnishStemmer.g_V1, 97, 246)) {
                self.cursor = self.limit - diff;
                const result = self.slice_del$esjava$0();
                self.limit_backward = limit_backward;
                if (self.cursor < self.I_p2) {
                  return false;
                } else {
                  ({ I_p2: self.cursor, limit_backward: limit_backward2, cursor: self.limit_backward } = self);
                  self.cursor = self.limit - tmp5;
                  self.ket = self.cursor;
                  const result1 = self.find_among_b$esjava$1(finnishStemmer.a_9);
                  if (0 === result1) {
                    self.limit_backward = limit_backward2;
                    return false;
                  } else {
                    self.bra = self.cursor;
                    self.limit_backward = limit_backward2;
                    if (0 === result1) {
                      return false;
                    } else {
                      if (1 === result1) {
                        const diff1 = self.limit - self.cursor;
                        if (self.eq_s_b$esjava$1("po")) {
                          return false;
                        } else {
                          self.cursor = self.limit - diff1;
                        }
                      }
                      const result2 = self.slice_del$esjava$0();
                      return true;
                    }
                  }
                }
              } else {
                self.limit_backward = limit_backward;
                return false;
              }
            } else {
              self.limit_backward = limit_backward;
              return false;
            }
          }
        }
      };
      items[10] = {
        key: "r_tidy$esjava$0",
        value: function r_tidy$esjava$0() {
          let S_x;
          let eq_s_b$esjava$1;
          const self = this;
          if (this.cursor < this.I_p1) {
            return false;
          } else {
            ({ I_p1: self.cursor, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp;
            const diff = self.limit - self.cursor;
            const diff1 = self.limit - self.cursor;
            if (self.r_LONG$esjava$0()) {
              self.cursor = self.limit - diff1;
              self.ket = self.cursor;
              if (self.cursor > self.limit_backward) {
                self.cursor = self.cursor - 1;
                self.bra = self.cursor;
                const result = self.slice_del$esjava$0();
              }
            }
            self.cursor = self.limit - diff;
            self.ket = self.cursor;
            const diff2 = self.limit - self.cursor;
            if (self.in_grouping_b$esjava$3(finnishStemmer.g_AEI, 97, 228)) {
              self.bra = self.cursor;
              if (self.out_grouping_b$esjava$3(finnishStemmer.g_V1, 97, 246)) {
                const result1 = self.slice_del$esjava$0();
              }
            }
            self.cursor = self.limit - diff2;
            self.ket = self.cursor;
            const diff3 = self.limit - self.cursor;
            if (self.eq_s_b$esjava$1("j")) {
              self.bra = self.cursor;
              const diff4 = self.limit - self.cursor;
              if (self.eq_s_b$esjava$1("o")) {
                const result2 = self.slice_del$esjava$0();
              } else {
                self.cursor = self.limit - diff4;
              }
            }
            self.cursor = self.limit - diff3;
            self.ket = self.cursor;
            const diff5 = self.limit - self.cursor;
            if (self.eq_s_b$esjava$1("o")) {
              self.bra = self.cursor;
              if (self.eq_s_b$esjava$1("j")) {
                const result3 = self.slice_del$esjava$0();
              }
            }
            self.cursor = self.limit - diff5;
            self.limit_backward = self.limit_backward;
            const diff6 = self.limit - self.cursor;
            self.cursor = self.limit - diff6;
            const cursor = self.cursor;
            while (!self.out_grouping_b$esjava$3(finnishStemmer.g_V1, 97, 246)) {
              if (cursor <= self.limit_backward) {
                let flag = false;
                return false;
              } else {
                self.cursor = self.cursor - 1;
                // continue
              }
            }
            self.ket = cursor;
            let tmp15 = !tmp14;
            if (self.cursor > self.limit_backward) {
              self.cursor = self.cursor - 1;
              self.bra = self.cursor;
              self.S_x = self.slice_to$esjava$1(self.S_x);
              ({ S_x, eq_s_b$esjava$1 } = self);
              const tmp16 = !eq_s_b$esjava$1(S_x.toString());
              let flag2 = !tmp16;
              if (!tmp16) {
                const result4 = self.slice_del$esjava$0();
                flag2 = true;
              }
              tmp15 = flag2;
            }
            return tmp15;
          }
        }
      };
      items[11] = {
        key: "stem$esjava$0",
        value: function stem$esjava$0() {
          const self = this;
          const result = this.r_mark_regions$esjava$0();
          this.cursor = this.cursor;
          this.B_ending_removed = false;
          ({ cursor: this.limit_backward, limit: this.cursor } = this);
          const diff = this.limit - this.cursor;
          const result1 = this.r_particle_etc$esjava$0();
          this.cursor = this.limit - diff;
          const diff1 = this.limit - this.cursor;
          const result2 = this.r_possessive$esjava$0();
          this.cursor = this.limit - diff1;
          const diff2 = this.limit - this.cursor;
          const result3 = this.r_case_ending$esjava$0();
          this.cursor = this.limit - diff2;
          const diff3 = this.limit - this.cursor;
          const result4 = this.r_other_endings$esjava$0();
          this.cursor = this.limit - diff3;
          const limit = this.limit;
          if (this.B_ending_removed) {
            const diff4 = limit - self.cursor;
            const result5 = self.r_i_plural$esjava$0();
            self.cursor = self.limit - diff4;
          } else {
            self.cursor = limit - tmp10;
            const diff5 = self.limit - self.cursor;
            const result6 = self.r_t_plural$esjava$0();
            self.cursor = self.limit - diff5;
          }
          const result7 = self.r_tidy$esjava$0();
          self.cursor = self.limit_backward;
          return true;
        }
      };
      items[12] = {
        key: "stem",
        value: function stem() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const stem$esjava$0 = self.stem$esjava$0;
            let applyResult = stem$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(finnishStemmer.prototype), "stem", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[13] = {
        key: "r_LONG",
        value: function r_LONG() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const r_LONG$esjava$0 = self.r_LONG$esjava$0;
            let applyResult = r_LONG$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(finnishStemmer.prototype), "r_LONG", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[14] = {
        key: "r_VI",
        value: function r_VI() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const r_VI$esjava$0 = self.r_VI$esjava$0;
            let applyResult = r_VI$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(finnishStemmer.prototype), "r_VI", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[15] = {
        key: "es6bridge",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$es6bridge")) {
            let _$esjava$es6bridge = self._$esjava$es6bridge;
          } else {
            self._$esjava$es6bridge = self;
            _$esjava$es6bridge = self;
          }
          return _$esjava$es6bridge;
        },
        set(_$esjava$es6bridge) {
          this._$esjava$es6bridge = _$esjava$es6bridge;
        }
      };
      items[16] = {
        key: "a_6",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$a_6")) {
            let prop = self._$esjava$a_6;
          } else {
            let tmp = ctor2;
            const prototype = ctor2.prototype;
            const tmp4 = new ctor2("a", -1, 8);
            prop = [tmp4, , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const prototype2 = ctor2.prototype;
            const tmp8 = new ctor2("lla", 0, -1);
            prop[1] = tmp8;
            const prototype3 = ctor2.prototype;
            const tmp12 = new ctor2("na", 0, -1);
            prop[2] = tmp12;
            const prototype4 = ctor2.prototype;
            const tmp16 = new ctor2("ssa", 0, -1);
            prop[3] = tmp16;
            const prototype5 = ctor2.prototype;
            const tmp20 = new ctor2("ta", 0, -1);
            prop[4] = tmp20;
            const prototype6 = ctor2.prototype;
            const tmp24 = new ctor2("lta", 4, -1);
            prop[5] = tmp24;
            const prototype7 = ctor2.prototype;
            const tmp28 = new ctor2("sta", 4, -1);
            prop[6] = tmp28;
            const prototype8 = ctor2.prototype;
            const tmp32 = new ctor2("tta", 4, 9);
            prop[7] = tmp32;
            const prototype9 = ctor2.prototype;
            const tmp36 = new ctor2("lle", -1, -1);
            prop[8] = tmp36;
            const prototype10 = ctor2.prototype;
            const tmp40 = new ctor2("ine", -1, -1);
            prop[9] = tmp40;
            const prototype11 = ctor2.prototype;
            const tmp44 = new ctor2("ksi", -1, -1);
            prop[10] = tmp44;
            const prototype12 = ctor2.prototype;
            const tmp48 = new ctor2("n", -1, 7);
            prop[11] = tmp48;
            const prototype13 = ctor2.prototype;
            const tmp52 = new ctor2("han", 11, 1);
            prop[12] = tmp52;
            const prototype14 = ctor2.prototype;
            const tmp56 = new ctor2("den", 11, -1, "r_VI", self.es6bridge);
            prop[13] = tmp56;
            const prototype15 = ctor2.prototype;
            const tmp60 = new ctor2("seen", 11, -1, "r_LONG", self.es6bridge);
            prop[14] = tmp60;
            const prototype16 = ctor2.prototype;
            const tmp64 = new ctor2("hen", 11, 2);
            prop[15] = tmp64;
            const prototype17 = ctor2.prototype;
            const tmp68 = new ctor2("tten", 11, -1, "r_VI", self.es6bridge);
            prop[16] = tmp68;
            const prototype18 = ctor2.prototype;
            const tmp72 = new ctor2("hin", 11, 3);
            prop[17] = tmp72;
            const prototype19 = ctor2.prototype;
            const tmp76 = new ctor2("siin", 11, -1, "r_VI", self.es6bridge);
            prop[18] = tmp76;
            const prototype20 = ctor2.prototype;
            const tmp80 = new ctor2("hon", 11, 4);
            prop[19] = tmp80;
            const prototype21 = ctor2.prototype;
            const tmp84 = new ctor2("h\u00E4n", 11, 5);
            prop[20] = tmp84;
            const prototype22 = ctor2.prototype;
            const tmp88 = new ctor2("h\u00F6n", 11, 6);
            prop[21] = tmp88;
            const prototype23 = ctor2.prototype;
            const tmp92 = new ctor2("\u00E4", -1, 8);
            prop[22] = tmp92;
            const prototype24 = ctor2.prototype;
            const tmp96 = new ctor2("ll\u00E4", 22, -1);
            prop[23] = tmp96;
            const prototype25 = ctor2.prototype;
            tmp = new ctor2("n\u00E4", 22, -1);
            prop[24] = tmp;
            const prototype26 = ctor2.prototype;
            tmp = new.target;
            tmp = new.target;
            tmp = new ctor2("ss\u00E4", 22, -1);
            prop[25] = tmp;
            const prototype27 = ctor2.prototype;
            tmp = new.target;
            tmp = new.target;
            tmp = new ctor2("t\u00E4", 22, -1);
            prop[26] = tmp;
            const prototype28 = ctor2.prototype;
            tmp = new.target;
            tmp = new.target;
            tmp = new ctor2("lt\u00E4", 26, -1);
            prop[27] = tmp;
            const prototype29 = ctor2.prototype;
            tmp = new.target;
            tmp = new.target;
            tmp = new ctor2("st\u00E4", 26, -1);
            prop[28] = tmp;
            const prototype30 = ctor2.prototype;
            tmp = new.target;
            tmp = new.target;
            tmp = new ctor2("tt\u00E4", 26, 9);
            prop[29] = tmp;
            self._$esjava$a_6 = prop;
          }
          return prop;
        },
        set(_$esjava$a_6) {
          this._$esjava$a_6 = _$esjava$a_6;
        }
      };
      items[17] = {
        key: "B_ending_removed",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$B_ending_removed")) {
            let flag = self._$esjava$B_ending_removed;
          } else {
            flag = false;
            self._$esjava$B_ending_removed = false;
          }
          return flag;
        },
        set(_$esjava$B_ending_removed) {
          this._$esjava$B_ending_removed = _$esjava$B_ending_removed;
        }
      };
      items[18] = {
        key: "S_x",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$S_x")) {
            let _$esjava$S_x = self._$esjava$S_x;
          } else {
            const prototype = ctor.prototype;
            const tmp4 = new ctor();
            _$esjava$S_x = tmp4;
            self._$esjava$S_x = tmp4;
          }
          return _$esjava$S_x;
        },
        set(_$esjava$S_x) {
          this._$esjava$S_x = _$esjava$S_x;
        }
      };
      items[19] = {
        key: "I_p2",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p2")) {
            let num = self._$esjava$I_p2;
          } else {
            num = 0;
            self._$esjava$I_p2 = 0;
          }
          return num;
        },
        set(_$esjava$I_p2) {
          this._$esjava$I_p2 = _$esjava$I_p2;
        }
      };
      items[20] = {
        key: "I_p1",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p1")) {
            let num = self._$esjava$I_p1;
          } else {
            num = 0;
            self._$esjava$I_p1 = 0;
          }
          return num;
        },
        set(_$esjava$I_p1) {
          this._$esjava$I_p1 = _$esjava$I_p1;
        }
      };
      const items1 = [
        {
          key: "a_0",
          get() {
            delete r1.a_0;
            const items = [new closure_4("pa", -1, 1), , , , , , , , , ];
            const tmp = new closure_4("pa", -1, 1);
            items[1] = new closure_4("sti", -1, 2);
            const tmp2 = new closure_4("sti", -1, 2);
            items[2] = new closure_4("kaan", -1, 1);
            const tmp3 = new closure_4("kaan", -1, 1);
            items[3] = new closure_4("han", -1, 1);
            const tmp4 = new closure_4("han", -1, 1);
            items[4] = new closure_4("kin", -1, 1);
            const tmp5 = new closure_4("kin", -1, 1);
            items[5] = new closure_4("h\u00E4n", -1, 1);
            const tmp6 = new closure_4("h\u00E4n", -1, 1);
            items[6] = new closure_4("k\u00E4\u00E4n", -1, 1);
            const tmp7 = new closure_4("k\u00E4\u00E4n", -1, 1);
            items[7] = new closure_4("ko", -1, 1);
            const tmp8 = new closure_4("ko", -1, 1);
            items[8] = new closure_4("p\u00E4", -1, 1);
            const tmp9 = new closure_4("p\u00E4", -1, 1);
            items[9] = new closure_4("k\u00F6", -1, 1);
            finnishStemmer.a_0 = items;
            return items;
          }
        },
        {
          key: "a_1",
          get() {
            delete r1.a_1;
            const items = [new closure_4("lla", -1, -1), , , , , ];
            const tmp = new closure_4("lla", -1, -1);
            items[1] = new closure_4("na", -1, -1);
            const tmp2 = new closure_4("na", -1, -1);
            items[2] = new closure_4("ssa", -1, -1);
            const tmp3 = new closure_4("ssa", -1, -1);
            items[3] = new closure_4("ta", -1, -1);
            const tmp4 = new closure_4("ta", -1, -1);
            items[4] = new closure_4("lta", 3, -1);
            const tmp5 = new closure_4("lta", 3, -1);
            items[5] = new closure_4("sta", 3, -1);
            finnishStemmer.a_1 = items;
            return items;
          }
        },
        {
          key: "a_2",
          get() {
            delete r1.a_2;
            const items = [new closure_4("ll\u00E4", -1, -1), , , , , ];
            const tmp = new closure_4("ll\u00E4", -1, -1);
            items[1] = new closure_4("n\u00E4", -1, -1);
            const tmp2 = new closure_4("n\u00E4", -1, -1);
            items[2] = new closure_4("ss\u00E4", -1, -1);
            const tmp3 = new closure_4("ss\u00E4", -1, -1);
            items[3] = new closure_4("t\u00E4", -1, -1);
            const tmp4 = new closure_4("t\u00E4", -1, -1);
            items[4] = new closure_4("lt\u00E4", 3, -1);
            const tmp5 = new closure_4("lt\u00E4", 3, -1);
            items[5] = new closure_4("st\u00E4", 3, -1);
            finnishStemmer.a_2 = items;
            return items;
          }
        },
        {
          key: "a_3",
          get() {
            delete r1.a_3;
            const items = [new closure_4("lle", -1, -1), ];
            const tmp = new closure_4("lle", -1, -1);
            items[1] = new closure_4("ine", -1, -1);
            finnishStemmer.a_3 = items;
            return items;
          }
        },
        {
          key: "a_4",
          get() {
            delete r1.a_4;
            const items = [new closure_4("nsa", -1, 3), , , , , , , , ];
            const tmp = new closure_4("nsa", -1, 3);
            items[1] = new closure_4("mme", -1, 3);
            const tmp2 = new closure_4("mme", -1, 3);
            items[2] = new closure_4("nne", -1, 3);
            const tmp3 = new closure_4("nne", -1, 3);
            items[3] = new closure_4("ni", -1, 2);
            const tmp4 = new closure_4("ni", -1, 2);
            items[4] = new closure_4("si", -1, 1);
            const tmp5 = new closure_4("si", -1, 1);
            items[5] = new closure_4("an", -1, 4);
            const tmp6 = new closure_4("an", -1, 4);
            items[6] = new closure_4("en", -1, 6);
            const tmp7 = new closure_4("en", -1, 6);
            items[7] = new closure_4("\u00E4n", -1, 5);
            const tmp8 = new closure_4("\u00E4n", -1, 5);
            items[8] = new closure_4("ns\u00E4", -1, 3);
            finnishStemmer.a_4 = items;
            return items;
          }
        },
        {
          key: "a_5",
          get() {
            delete r1.a_5;
            const items = [new closure_4("aa", -1, -1), , , , , , ];
            const tmp = new closure_4("aa", -1, -1);
            items[1] = new closure_4("ee", -1, -1);
            const tmp2 = new closure_4("ee", -1, -1);
            items[2] = new closure_4("ii", -1, -1);
            const tmp3 = new closure_4("ii", -1, -1);
            items[3] = new closure_4("oo", -1, -1);
            const tmp4 = new closure_4("oo", -1, -1);
            items[4] = new closure_4("uu", -1, -1);
            const tmp5 = new closure_4("uu", -1, -1);
            items[5] = new closure_4("\u00E4\u00E4", -1, -1);
            const tmp6 = new closure_4("\u00E4\u00E4", -1, -1);
            items[6] = new closure_4("\u00F6\u00F6", -1, -1);
            finnishStemmer.a_5 = items;
            return items;
          }
        },
        {
          key: "a_7",
          get() {
            delete r1.a_7;
            const items = [new closure_4("eja", -1, -1), , , , , , , , , , , , , ];
            const tmp = new closure_4("eja", -1, -1);
            items[1] = new closure_4("mma", -1, 1);
            const tmp2 = new closure_4("mma", -1, 1);
            items[2] = new closure_4("imma", 1, -1);
            const tmp3 = new closure_4("imma", 1, -1);
            items[3] = new closure_4("mpa", -1, 1);
            const tmp4 = new closure_4("mpa", -1, 1);
            items[4] = new closure_4("impa", 3, -1);
            const tmp5 = new closure_4("impa", 3, -1);
            items[5] = new closure_4("mmi", -1, 1);
            const tmp6 = new closure_4("mmi", -1, 1);
            items[6] = new closure_4("immi", 5, -1);
            const tmp7 = new closure_4("immi", 5, -1);
            items[7] = new closure_4("mpi", -1, 1);
            const tmp8 = new closure_4("mpi", -1, 1);
            items[8] = new closure_4("impi", 7, -1);
            const tmp9 = new closure_4("impi", 7, -1);
            items[9] = new closure_4("ej\u00E4", -1, -1);
            const tmp10 = new closure_4("ej\u00E4", -1, -1);
            items[10] = new closure_4("mm\u00E4", -1, 1);
            const tmp11 = new closure_4("mm\u00E4", -1, 1);
            items[11] = new closure_4("imm\u00E4", 10, -1);
            const tmp12 = new closure_4("imm\u00E4", 10, -1);
            items[12] = new closure_4("mp\u00E4", -1, 1);
            const tmp13 = new closure_4("mp\u00E4", -1, 1);
            items[13] = new closure_4("imp\u00E4", 12, -1);
            finnishStemmer.a_7 = items;
            return items;
          }
        },
        {
          key: "a_8",
          get() {
            delete r1.a_8;
            const items = [new closure_4("i", -1, -1), ];
            const tmp = new closure_4("i", -1, -1);
            items[1] = new closure_4("j", -1, -1);
            finnishStemmer.a_8 = items;
            return items;
          }
        },
        {
          key: "a_9",
          get() {
            delete r1.a_9;
            const items = [new closure_4("mma", -1, 1), ];
            const tmp = new closure_4("mma", -1, 1);
            items[1] = new closure_4("imma", 0, -1);
            finnishStemmer.a_9 = items;
            return items;
          }
        },
        {
          key: "g_AEI",
          get() {
            delete r1.g_AEI;
            const items = [];
            finnishStemmer.g_AEI = items;
            return items;
          }
        },
        {
          key: "g_V1",
          get() {
            delete r1.g_V1;
            const items = [];
            finnishStemmer.g_V1 = items;
            return items;
          }
        },
        {
          key: "g_V2",
          get() {
            delete r1.g_V2;
            const items = [];
            finnishStemmer.g_V2 = items;
            return items;
          }
        },
        {
          key: "g_particle_end",
          get() {
            delete r1.g_particle_end;
            const items = [];
            finnishStemmer.g_particle_end = items;
            return items;
          }
        }
      ];
      callback(finnishStemmer, items, items1);
      return finnishStemmer;
    }(tmp3);
    let closure_14 = (arg0) => {
      function frenchStemmer() {
        callback3(this, frenchStemmer);
        const prototypeOf = Object.getPrototypeOf(frenchStemmer);
        return callback2(this, prototypeOf(...arguments));
      }
      const callback = frenchStemmer;
      _inherits(frenchStemmer, arg0);
      let obj = {
        key: "r_prelude$esjava$0",
        value: function r_prelude$esjava$0() {
          let cursor;
          let cursor2;
          let cursor3;
          const self = this;
          while (true) {
            while (true) {
              ({ cursor, cursor: cursor2 } = self);
              let tmp3 = frenchStemmer;
              if (self.in_grouping$esjava$3(frenchStemmer.g_v, 97, 251)) {
                ({ cursor: self.bra, cursor: cursor3 } = self);
                if (self.eq_s$esjava$1("u")) {
                  self.ket = self.cursor;
                  let tmp4 = frenchStemmer;
                  if (self.in_grouping$esjava$3(frenchStemmer.g_v, 97, 251)) {
                    break;
                  }
                }
                self.cursor = cursor3;
                if (self.eq_s$esjava$1("i")) {
                  self.ket = self.cursor;
                  let tmp5 = frenchStemmer;
                  if (self.in_grouping$esjava$3(frenchStemmer.g_v, 97, 251)) {
                    let result = self.slice_from$esjava$1("I");
                    let tmp = cursor3;
                    self.cursor = cursor;
                    // continue label0
                  }
                }
                self.cursor = cursor3;
                tmp = cursor3;
                if (self.eq_s$esjava$1("y")) {
                  self.ket = self.cursor;
                  let result1 = self.slice_from$esjava$1("Y");
                  tmp = cursor3;
                }
              }
              self.cursor = cursor2;
              self.bra = self.cursor;
              let tmp6 = tmp;
              if (self.eq_s$esjava$1("y")) {
                self.ket = self.cursor;
                let tmp7 = frenchStemmer;
                if (self.in_grouping$esjava$3(frenchStemmer.g_v, 97, 251)) {
                  let result2 = self.slice_from$esjava$1("Y");
                }
              }
              self.cursor = cursor2;
              if (self.eq_s$esjava$1("q")) {
                self.bra = self.cursor;
                if (self.eq_s$esjava$1("u")) {
                  self.ket = self.cursor;
                  let result3 = self.slice_from$esjava$1("U");
                }
              }
              self.cursor = cursor;
              if (self.cursor >= self.limit) {
                self.cursor = tmp2;
                let flag = true;
                return true;
              } else {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            let result4 = self.slice_from$esjava$1("U");
            tmp = cursor3;
          }
        }
      };
      const items = [obj, , , , , , , , , , , , , , , , ];
      obj = {
        key: "r_mark_regions$esjava$0",
        value: function r_mark_regions$esjava$0() {
          let cursor;
          const self = this;
          ({ limit: this.I_pV, limit: this.I_p1, limit: this.I_p2, cursor } = this);
          if (this.in_grouping$esjava$3(frenchStemmer.g_v, 97, 251)) {
            if (self.in_grouping$esjava$3(frenchStemmer.g_v, 97, 251)) {
              if (self.cursor < self.limit) {
                self.cursor = self.cursor + 1;
              }
              self.I_pV = self.cursor;
            }
          }
          self.cursor = cursor;
          if (0 === self.find_among$esjava$1(frenchStemmer.a_0)) {
            self.cursor = cursor;
            if (self.cursor < self.limit) {
              self.cursor = self.cursor + 1;
              while (!self.in_grouping$esjava$3(frenchStemmer.g_v, 97, 251)) {
                if (self.cursor < self.limit) {
                  self.cursor = self.cursor + 1;
                  // continue
                }
              }
            }
            self.cursor = this.cursor;
            while (!self.in_grouping$esjava$3(frenchStemmer.g_v, 97, 251)) {
              if (self.cursor < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
              self.cursor = tmp3;
              let flag = true;
              return true;
            }
            const cursor2 = self.cursor;
            while (!self.out_grouping$esjava$3(frenchStemmer.g_v, 97, 251)) {
              if (cursor2 < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            self.I_p1 = cursor2;
            while (!self.in_grouping$esjava$3(frenchStemmer.g_v, 97, 251)) {
              if (self.cursor < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            const cursor3 = self.cursor;
            while (!self.out_grouping$esjava$3(frenchStemmer.g_v, 97, 251)) {
              if (cursor3 < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            self.I_p2 = cursor3;
          }
        }
      };
      items[1] = obj;
      obj = {
        key: "r_postlude$esjava$0",
        value: function r_postlude$esjava$0() {
          const self = this;
          self.bra = self.cursor;
          const result = self.find_among$esjava$1(frenchStemmer.a_1);
          while (0 !== result) {
            self.ket = self.cursor;
            if (0 === result) {
              break;
            } else {
              if (1 === result) {
                let result1 = self.slice_from$esjava$1("i");
                // continue
              } else {
                if (2 === result) {
                  let result2 = self.slice_from$esjava$1("u");
                  // continue
                } else {
                  if (3 === result) {
                    let result3 = self.slice_from$esjava$1("y");
                    // continue
                  } else {
                    if (4 !== result) {
                      continue;
                    } else if (self.cursor >= self.limit) {
                      break;
                    } else {
                      self.cursor = self.cursor + 1;
                      // continue
                    }
                    self.cursor = tmp;
                    let flag = true;
                    return true;
                  }
                  continue;
                }
                continue;
              }
              continue;
            }
          }
        }
      };
      items[2] = obj;
      items[3] = {
        key: "r_RV$esjava$0",
        value: function r_RV$esjava$0() {
          return this.I_pV <= this.cursor;
        }
      };
      items[4] = {
        key: "r_R1$esjava$0",
        value: function r_R1$esjava$0() {
          return this.I_p1 <= this.cursor;
        }
      };
      items[5] = {
        key: "r_R2$esjava$0",
        value: function r_R2$esjava$0() {
          return this.I_p2 <= this.cursor;
        }
      };
      items[6] = {
        key: "r_standard_suffix$esjava$0",
        value: function r_standard_suffix$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          if (0 === this.find_among_b$esjava$1(frenchStemmer.a_4)) {
            return false;
          } else {
            const diff = self.limit - self.cursor;
            let flag2 = false;
            if (self.in_grouping_b$esjava$3(frenchStemmer.g_v, 97, 251)) {
              const tmp = !self.r_RV$esjava$0();
              let flag = !tmp;
              if (!tmp) {
                self.cursor = self.limit - diff;
                const result = self.slice_del$esjava$0();
                flag = false;
              }
              flag2 = flag;
            }
            return flag2;
          }
        }
      };
      items[7] = {
        key: "r_i_verb_suffix$esjava$0",
        value: function r_i_verb_suffix$esjava$0() {
          let limit_backward;
          const self = this;
          if (this.cursor < this.I_pV) {
            return false;
          } else {
            ({ I_pV: self.cursor, limit_backward, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp;
            self.ket = self.cursor;
            const result = self.find_among_b$esjava$1(frenchStemmer.a_5);
            if (0 === result) {
              self.limit_backward = limit_backward;
              return false;
            } else {
              self.bra = self.cursor;
              if (0 === result) {
                self.limit_backward = limit_backward;
                return false;
              } else {
                if (1 === result) {
                  if (self.out_grouping_b$esjava$3(frenchStemmer.g_v, 97, 251)) {
                    const result1 = self.slice_del$esjava$0();
                  } else {
                    self.limit_backward = limit_backward;
                    return false;
                  }
                }
                self.limit_backward = limit_backward;
                return true;
              }
            }
          }
        }
      };
      items[8] = {
        key: "r_verb_suffix$esjava$0",
        value: function r_verb_suffix$esjava$0() {
          let limit_backward;
          const self = this;
          if (this.cursor < this.I_pV) {
            return false;
          } else {
            ({ I_pV: self.cursor, limit_backward, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp;
            self.ket = self.cursor;
            const result = self.find_among_b$esjava$1(frenchStemmer.a_6);
            if (0 === result) {
              self.limit_backward = limit_backward;
              return false;
            } else {
              self.bra = self.cursor;
              if (0 === result) {
                self.limit_backward = limit_backward;
                return false;
              } else {
                if (1 === result) {
                  if (self.r_R2$esjava$0()) {
                    const result1 = self.slice_del$esjava$0();
                  } else {
                    self.limit_backward = limit_backward;
                    return false;
                  }
                } else if (2 === result) {
                  const result2 = self.slice_del$esjava$0();
                } else if (3 === result) {
                  const result3 = self.slice_del$esjava$0();
                  self.ket = self.cursor;
                  const diff = self.limit - self.cursor;
                  if (self.eq_s_b$esjava$1("e")) {
                    self.bra = self.cursor;
                    const result4 = self.slice_del$esjava$0();
                  } else {
                    self.cursor = self.limit - diff;
                  }
                }
                self.limit_backward = limit_backward;
                return true;
              }
            }
          }
        }
      };
      items[9] = {
        key: "r_residual_suffix$esjava$0",
        value: function r_residual_suffix$esjava$0() {
          let limit_backward;
          const self = this;
          const diff = this.limit - this.cursor;
          this.ket = this.cursor;
          if (this.eq_s_b$esjava$1("s")) {
            self.bra = self.cursor;
            const diff1 = self.limit - self.cursor;
            const limit = self.limit;
            if (self.out_grouping_b$esjava$3(frenchStemmer.g_keep_with_s, 97, 232)) {
              self.cursor = limit - diff1;
              const result = self.slice_del$esjava$0();
            } else {
              self.cursor = limit - diff;
            }
          } else {
            self.cursor = self.limit - diff;
          }
          if (self.cursor < self.I_pV) {
            return false;
          } else {
            ({ I_pV: self.cursor, limit_backward, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp5;
            self.ket = self.cursor;
            const result1 = self.find_among_b$esjava$1(frenchStemmer.a_7);
            if (0 === result1) {
              self.limit_backward = limit_backward;
              return false;
            } else {
              self.bra = self.cursor;
              if (0 === result1) {
                self.limit_backward = limit_backward;
                return false;
              } else {
                if (1 === result1) {
                  if (self.r_R2$esjava$0()) {
                    const diff2 = self.limit - self.cursor;
                    if (!self.eq_s_b$esjava$1("s")) {
                      self.cursor = self.limit - diff2;
                      if (!self.eq_s_b$esjava$1("t")) {
                        self.limit_backward = limit_backward;
                        return false;
                      }
                    }
                    const result2 = self.slice_del$esjava$0();
                  } else {
                    self.limit_backward = limit_backward;
                    return false;
                  }
                } else if (2 === result1) {
                  const result3 = self.slice_from$esjava$1("i");
                } else if (3 === result1) {
                  const result4 = self.slice_del$esjava$0();
                } else if (4 === result1) {
                  if (self.eq_s_b$esjava$1("gu")) {
                    const result5 = self.slice_del$esjava$0();
                  } else {
                    self.limit_backward = limit_backward;
                    return false;
                  }
                }
                self.limit_backward = limit_backward;
                return true;
              }
            }
          }
        }
      };
      items[10] = {
        key: "r_un_double$esjava$0",
        value: function r_un_double$esjava$0() {
          const self = this;
          const diff = this.limit - this.cursor;
          let tmp2 = 0 !== this.find_among_b$esjava$1(frenchStemmer.a_8);
          if (tmp2) {
            self.cursor = self.limit - diff;
            self.ket = self.cursor;
            let flag = !tmp3;
            if (self.cursor > self.limit_backward) {
              self.cursor = self.cursor - 1;
              self.bra = self.cursor;
              const result = self.slice_del$esjava$0();
              flag = true;
            }
            tmp2 = flag;
          }
          return tmp2;
        }
      };
      items[11] = {
        key: "r_un_accent$esjava$0",
        value: function r_un_accent$esjava$0() {
          const self = this;
          let num = 1;
          while (self.out_grouping_b$esjava$3(frenchStemmer.g_v, 97, 251)) {
            num = num - 1;
            // continue
          }
          if (num > 0) {
            return false;
          } else {
            self.ket = self.cursor;
            const diff = self.limit - self.cursor;
            if (!self.eq_s_b$esjava$1("\u00E9")) {
              self.cursor = self.limit - diff;
              if (!self.eq_s_b$esjava$1("\u00E8")) {
                return false;
              }
            }
            self.bra = self.cursor;
            const result = self.slice_from$esjava$1("e");
            return true;
          }
        }
      };
      items[12] = {
        key: "stem$esjava$0",
        value: function stem$esjava$0() {
          let cursor;
          const self = this;
          const result = this.r_prelude$esjava$0();
          this.cursor = this.cursor;
          const result1 = this.r_mark_regions$esjava$0();
          this.cursor = this.cursor;
          ({ cursor: this.limit_backward, limit: this.cursor } = this);
          const diff = this.limit - this.cursor;
          const diff1 = this.limit - this.cursor;
          const diff2 = this.limit - this.cursor;
          const diff3 = this.limit - this.cursor;
          if (!this.r_standard_suffix$esjava$0()) {
            self.cursor = self.limit - diff;
            if (!self.r_i_verb_suffix$esjava$0()) {
              self.cursor = self.limit - diff;
              if (!self.r_verb_suffix$esjava$0()) {
                self.cursor = self.limit - diff2;
                const result2 = self.r_residual_suffix$esjava$0();
              }
              self.cursor = self.limit - diff1;
              const diff4 = self.limit - self.cursor;
              const result3 = self.r_un_double$esjava$0();
              self.cursor = self.limit - diff4;
              const diff5 = self.limit - self.cursor;
              const result4 = self.r_un_accent$esjava$0();
              self.cursor = self.limit - diff5;
              ({ limit_backward: self.cursor, cursor } = self);
              const result5 = self.r_postlude$esjava$0();
              self.cursor = cursor;
              return true;
            }
          }
          self.cursor = self.limit - diff3;
          self.ket = self.cursor;
          const diff6 = self.limit - self.cursor;
          const diff7 = self.limit - self.cursor;
          if (self.eq_s_b$esjava$1("Y")) {
            self.bra = self.cursor;
            const result6 = self.slice_from$esjava$1("i");
          } else {
            self.cursor = self.limit - diff7;
            if (self.eq_s_b$esjava$1("\u00E7")) {
              self.bra = self.cursor;
              const result7 = self.slice_from$esjava$1("c");
            } else {
              self.cursor = self.limit - diff6;
            }
          }
        }
      };
      items[13] = {
        key: "stem",
        value: function stem() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const stem$esjava$0 = self.stem$esjava$0;
            let applyResult = stem$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(frenchStemmer.prototype), "stem", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[14] = {
        key: "I_p2",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p2")) {
            let num = self._$esjava$I_p2;
          } else {
            num = 0;
            self._$esjava$I_p2 = 0;
          }
          return num;
        },
        set(_$esjava$I_p2) {
          this._$esjava$I_p2 = _$esjava$I_p2;
        }
      };
      items[15] = {
        key: "I_p1",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p1")) {
            let num = self._$esjava$I_p1;
          } else {
            num = 0;
            self._$esjava$I_p1 = 0;
          }
          return num;
        },
        set(_$esjava$I_p1) {
          this._$esjava$I_p1 = _$esjava$I_p1;
        }
      };
      items[16] = {
        key: "I_pV",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_pV")) {
            let num = self._$esjava$I_pV;
          } else {
            num = 0;
            self._$esjava$I_pV = 0;
          }
          return num;
        },
        set(_$esjava$I_pV) {
          this._$esjava$I_pV = _$esjava$I_pV;
        }
      };
      const items1 = [
        {
          key: "a_0",
          get() {
            delete r1.a_0;
            const items = [new closure_4("col", -1, -1), , ];
            const tmp = new closure_4("col", -1, -1);
            items[1] = new closure_4("par", -1, -1);
            const tmp2 = new closure_4("par", -1, -1);
            items[2] = new closure_4("tap", -1, -1);
            frenchStemmer.a_0 = items;
            return items;
          }
        },
        {
          key: "a_1",
          get() {
            delete r1.a_1;
            const items = [new closure_4("", -1, 4), , , ];
            const tmp = new closure_4("", -1, 4);
            items[1] = new closure_4("I", 0, 1);
            const tmp2 = new closure_4("I", 0, 1);
            items[2] = new closure_4("U", 0, 2);
            const tmp3 = new closure_4("U", 0, 2);
            items[3] = new closure_4("Y", 0, 3);
            frenchStemmer.a_1 = items;
            return items;
          }
        },
        {
          key: "a_2",
          get() {
            delete r1.a_2;
            const items = [new closure_4("iqU", -1, 3), , , , , ];
            const tmp = new closure_4("iqU", -1, 3);
            items[1] = new closure_4("abl", -1, 3);
            const tmp2 = new closure_4("abl", -1, 3);
            items[2] = new closure_4("I\u00E8r", -1, 4);
            const tmp3 = new closure_4("I\u00E8r", -1, 4);
            items[3] = new closure_4("i\u00E8r", -1, 4);
            const tmp4 = new closure_4("i\u00E8r", -1, 4);
            items[4] = new closure_4("eus", -1, 2);
            const tmp5 = new closure_4("eus", -1, 2);
            items[5] = new closure_4("iv", -1, 1);
            frenchStemmer.a_2 = items;
            return items;
          }
        },
        {
          key: "a_3",
          get() {
            delete r1.a_3;
            const items = [new closure_4("ic", -1, 2), , ];
            const tmp = new closure_4("ic", -1, 2);
            items[1] = new closure_4("abil", -1, 1);
            const tmp2 = new closure_4("abil", -1, 1);
            items[2] = new closure_4("iv", -1, 3);
            frenchStemmer.a_3 = items;
            return items;
          }
        },
        {
          key: "a_4",
          get() {
            delete r1.a_4;
            const items = [new closure_4("iqUe", -1, 1), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("iqUe", -1, 1);
            items[1] = new closure_4("atrice", -1, 2);
            const tmp2 = new closure_4("atrice", -1, 2);
            items[2] = new closure_4("ance", -1, 1);
            const tmp3 = new closure_4("ance", -1, 1);
            items[3] = new closure_4("ence", -1, 5);
            const tmp4 = new closure_4("ence", -1, 5);
            items[4] = new closure_4("logie", -1, 3);
            const tmp5 = new closure_4("logie", -1, 3);
            items[5] = new closure_4("able", -1, 1);
            const tmp6 = new closure_4("able", -1, 1);
            items[6] = new closure_4("isme", -1, 1);
            const tmp7 = new closure_4("isme", -1, 1);
            items[7] = new closure_4("euse", -1, 11);
            const tmp8 = new closure_4("euse", -1, 11);
            items[8] = new closure_4("iste", -1, 1);
            const tmp9 = new closure_4("iste", -1, 1);
            items[9] = new closure_4("ive", -1, 8);
            const tmp10 = new closure_4("ive", -1, 8);
            items[10] = new closure_4("if", -1, 8);
            const tmp11 = new closure_4("if", -1, 8);
            items[11] = new closure_4("usion", -1, 4);
            const tmp12 = new closure_4("usion", -1, 4);
            items[12] = new closure_4("ation", -1, 2);
            const tmp13 = new closure_4("ation", -1, 2);
            items[13] = new closure_4("ution", -1, 4);
            const tmp14 = new closure_4("ution", -1, 4);
            items[14] = new closure_4("ateur", -1, 2);
            const tmp15 = new closure_4("ateur", -1, 2);
            items[15] = new closure_4("iqUes", -1, 1);
            const tmp16 = new closure_4("iqUes", -1, 1);
            items[16] = new closure_4("atrices", -1, 2);
            const tmp17 = new closure_4("atrices", -1, 2);
            items[17] = new closure_4("ances", -1, 1);
            const tmp18 = new closure_4("ances", -1, 1);
            items[18] = new closure_4("ences", -1, 5);
            const tmp19 = new closure_4("ences", -1, 5);
            items[19] = new closure_4("logies", -1, 3);
            const tmp20 = new closure_4("logies", -1, 3);
            items[20] = new closure_4("ables", -1, 1);
            const tmp21 = new closure_4("ables", -1, 1);
            items[21] = new closure_4("ismes", -1, 1);
            const tmp22 = new closure_4("ismes", -1, 1);
            items[22] = new closure_4("euses", -1, 11);
            const tmp23 = new closure_4("euses", -1, 11);
            items[23] = new closure_4("istes", -1, 1);
            const tmp24 = new closure_4("istes", -1, 1);
            items[24] = new closure_4("ives", -1, 8);
            const tmp25 = new closure_4("ives", -1, 8);
            items[25] = new closure_4("ifs", -1, 8);
            const tmp26 = new closure_4("ifs", -1, 8);
            items[26] = new closure_4("usions", -1, 4);
            const tmp27 = new closure_4("usions", -1, 4);
            items[27] = new closure_4("ations", -1, 2);
            const tmp28 = new closure_4("ations", -1, 2);
            items[28] = new closure_4("utions", -1, 4);
            const tmp29 = new closure_4("utions", -1, 4);
            items[29] = new closure_4("ateurs", -1, 2);
            const tmp30 = new closure_4("ateurs", -1, 2);
            items[30] = new closure_4("ments", -1, 15);
            const tmp31 = new closure_4("ments", -1, 15);
            items[31] = new closure_4("ements", 30, 6);
            const tmp32 = new closure_4("ements", 30, 6);
            items[32] = new closure_4("issements", 31, 12);
            const tmp33 = new closure_4("issements", 31, 12);
            items[33] = new closure_4("it\u00E9s", -1, 7);
            const tmp34 = new closure_4("it\u00E9s", -1, 7);
            items[34] = new closure_4("ment", -1, 15);
            const tmp35 = new closure_4("ment", -1, 15);
            items[35] = new closure_4("ement", 34, 6);
            const tmp36 = new closure_4("ement", 34, 6);
            items[36] = new closure_4("issement", 35, 12);
            const tmp37 = new closure_4("issement", 35, 12);
            items[37] = new closure_4("amment", 34, 13);
            const tmp38 = new closure_4("amment", 34, 13);
            items[38] = new closure_4("emment", 34, 14);
            const tmp39 = new closure_4("emment", 34, 14);
            items[39] = new closure_4("aux", -1, 10);
            const tmp40 = new closure_4("aux", -1, 10);
            items[40] = new closure_4("eaux", 39, 9);
            const tmp41 = new closure_4("eaux", 39, 9);
            items[41] = new closure_4("eux", -1, 1);
            const tmp42 = new closure_4("eux", -1, 1);
            items[42] = new closure_4("it\u00E9", -1, 7);
            frenchStemmer.a_4 = items;
            return items;
          }
        },
        {
          key: "a_5",
          get() {
            delete r1.a_5;
            const items = [new closure_4("ira", -1, 1), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("ira", -1, 1);
            items[1] = new closure_4("ie", -1, 1);
            const tmp2 = new closure_4("ie", -1, 1);
            items[2] = new closure_4("isse", -1, 1);
            const tmp3 = new closure_4("isse", -1, 1);
            items[3] = new closure_4("issante", -1, 1);
            const tmp4 = new closure_4("issante", -1, 1);
            items[4] = new closure_4("i", -1, 1);
            const tmp5 = new closure_4("i", -1, 1);
            items[5] = new closure_4("irai", 4, 1);
            const tmp6 = new closure_4("irai", 4, 1);
            items[6] = new closure_4("ir", -1, 1);
            const tmp7 = new closure_4("ir", -1, 1);
            items[7] = new closure_4("iras", -1, 1);
            const tmp8 = new closure_4("iras", -1, 1);
            items[8] = new closure_4("ies", -1, 1);
            const tmp9 = new closure_4("ies", -1, 1);
            items[9] = new closure_4("\u00EEmes", -1, 1);
            const tmp10 = new closure_4("\u00EEmes", -1, 1);
            items[10] = new closure_4("isses", -1, 1);
            const tmp11 = new closure_4("isses", -1, 1);
            items[11] = new closure_4("issantes", -1, 1);
            const tmp12 = new closure_4("issantes", -1, 1);
            items[12] = new closure_4("\u00EEtes", -1, 1);
            const tmp13 = new closure_4("\u00EEtes", -1, 1);
            items[13] = new closure_4("is", -1, 1);
            const tmp14 = new closure_4("is", -1, 1);
            items[14] = new closure_4("irais", 13, 1);
            const tmp15 = new closure_4("irais", 13, 1);
            items[15] = new closure_4("issais", 13, 1);
            const tmp16 = new closure_4("issais", 13, 1);
            items[16] = new closure_4("irions", -1, 1);
            const tmp17 = new closure_4("irions", -1, 1);
            items[17] = new closure_4("issions", -1, 1);
            const tmp18 = new closure_4("issions", -1, 1);
            items[18] = new closure_4("irons", -1, 1);
            const tmp19 = new closure_4("irons", -1, 1);
            items[19] = new closure_4("issons", -1, 1);
            const tmp20 = new closure_4("issons", -1, 1);
            items[20] = new closure_4("issants", -1, 1);
            const tmp21 = new closure_4("issants", -1, 1);
            items[21] = new closure_4("it", -1, 1);
            const tmp22 = new closure_4("it", -1, 1);
            items[22] = new closure_4("irait", 21, 1);
            const tmp23 = new closure_4("irait", 21, 1);
            items[23] = new closure_4("issait", 21, 1);
            const tmp24 = new closure_4("issait", 21, 1);
            items[24] = new closure_4("issant", -1, 1);
            const tmp25 = new closure_4("issant", -1, 1);
            items[25] = new closure_4("iraIent", -1, 1);
            const tmp26 = new closure_4("iraIent", -1, 1);
            items[26] = new closure_4("issaIent", -1, 1);
            const tmp27 = new closure_4("issaIent", -1, 1);
            items[27] = new closure_4("irent", -1, 1);
            const tmp28 = new closure_4("irent", -1, 1);
            items[28] = new closure_4("issent", -1, 1);
            const tmp29 = new closure_4("issent", -1, 1);
            items[29] = new closure_4("iront", -1, 1);
            const tmp30 = new closure_4("iront", -1, 1);
            items[30] = new closure_4("\u00EEt", -1, 1);
            const tmp31 = new closure_4("\u00EEt", -1, 1);
            items[31] = new closure_4("iriez", -1, 1);
            const tmp32 = new closure_4("iriez", -1, 1);
            items[32] = new closure_4("issiez", -1, 1);
            const tmp33 = new closure_4("issiez", -1, 1);
            items[33] = new closure_4("irez", -1, 1);
            const tmp34 = new closure_4("irez", -1, 1);
            items[34] = new closure_4("issez", -1, 1);
            frenchStemmer.a_5 = items;
            return items;
          }
        },
        {
          key: "a_6",
          get() {
            delete r1.a_6;
            const items = [new closure_4("a", -1, 3), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("a", -1, 3);
            items[1] = new closure_4("era", 0, 2);
            const tmp2 = new closure_4("era", 0, 2);
            items[2] = new closure_4("asse", -1, 3);
            const tmp3 = new closure_4("asse", -1, 3);
            items[3] = new closure_4("ante", -1, 3);
            const tmp4 = new closure_4("ante", -1, 3);
            items[4] = new closure_4("\u00E9e", -1, 2);
            const tmp5 = new closure_4("\u00E9e", -1, 2);
            items[5] = new closure_4("ai", -1, 3);
            const tmp6 = new closure_4("ai", -1, 3);
            items[6] = new closure_4("erai", 5, 2);
            const tmp7 = new closure_4("erai", 5, 2);
            items[7] = new closure_4("er", -1, 2);
            const tmp8 = new closure_4("er", -1, 2);
            items[8] = new closure_4("as", -1, 3);
            const tmp9 = new closure_4("as", -1, 3);
            items[9] = new closure_4("eras", 8, 2);
            const tmp10 = new closure_4("eras", 8, 2);
            items[10] = new closure_4("\u00E2mes", -1, 3);
            const tmp11 = new closure_4("\u00E2mes", -1, 3);
            items[11] = new closure_4("asses", -1, 3);
            const tmp12 = new closure_4("asses", -1, 3);
            items[12] = new closure_4("antes", -1, 3);
            const tmp13 = new closure_4("antes", -1, 3);
            items[13] = new closure_4("\u00E2tes", -1, 3);
            const tmp14 = new closure_4("\u00E2tes", -1, 3);
            items[14] = new closure_4("\u00E9es", -1, 2);
            const tmp15 = new closure_4("\u00E9es", -1, 2);
            items[15] = new closure_4("ais", -1, 3);
            const tmp16 = new closure_4("ais", -1, 3);
            items[16] = new closure_4("erais", 15, 2);
            const tmp17 = new closure_4("erais", 15, 2);
            items[17] = new closure_4("ions", -1, 1);
            const tmp18 = new closure_4("ions", -1, 1);
            items[18] = new closure_4("erions", 17, 2);
            const tmp19 = new closure_4("erions", 17, 2);
            items[19] = new closure_4("assions", 17, 3);
            const tmp20 = new closure_4("assions", 17, 3);
            items[20] = new closure_4("erons", -1, 2);
            const tmp21 = new closure_4("erons", -1, 2);
            items[21] = new closure_4("ants", -1, 3);
            const tmp22 = new closure_4("ants", -1, 3);
            items[22] = new closure_4("\u00E9s", -1, 2);
            const tmp23 = new closure_4("\u00E9s", -1, 2);
            items[23] = new closure_4("ait", -1, 3);
            const tmp24 = new closure_4("ait", -1, 3);
            items[24] = new closure_4("erait", 23, 2);
            const tmp25 = new closure_4("erait", 23, 2);
            items[25] = new closure_4("ant", -1, 3);
            const tmp26 = new closure_4("ant", -1, 3);
            items[26] = new closure_4("aIent", -1, 3);
            const tmp27 = new closure_4("aIent", -1, 3);
            items[27] = new closure_4("eraIent", 26, 2);
            const tmp28 = new closure_4("eraIent", 26, 2);
            items[28] = new closure_4("\u00E8rent", -1, 2);
            const tmp29 = new closure_4("\u00E8rent", -1, 2);
            items[29] = new closure_4("assent", -1, 3);
            const tmp30 = new closure_4("assent", -1, 3);
            items[30] = new closure_4("eront", -1, 2);
            const tmp31 = new closure_4("eront", -1, 2);
            items[31] = new closure_4("\u00E2t", -1, 3);
            const tmp32 = new closure_4("\u00E2t", -1, 3);
            items[32] = new closure_4("ez", -1, 2);
            const tmp33 = new closure_4("ez", -1, 2);
            items[33] = new closure_4("iez", 32, 2);
            const tmp34 = new closure_4("iez", 32, 2);
            items[34] = new closure_4("eriez", 33, 2);
            const tmp35 = new closure_4("eriez", 33, 2);
            items[35] = new closure_4("assiez", 33, 3);
            const tmp36 = new closure_4("assiez", 33, 3);
            items[36] = new closure_4("erez", 32, 2);
            const tmp37 = new closure_4("erez", 32, 2);
            items[37] = new closure_4("\u00E9", -1, 2);
            frenchStemmer.a_6 = items;
            return items;
          }
        },
        {
          key: "a_7",
          get() {
            delete r1.a_7;
            const items = [new closure_4("e", -1, 3), , , , , , ];
            const tmp = new closure_4("e", -1, 3);
            items[1] = new closure_4("I\u00E8re", 0, 2);
            const tmp2 = new closure_4("I\u00E8re", 0, 2);
            items[2] = new closure_4("i\u00E8re", 0, 2);
            const tmp3 = new closure_4("i\u00E8re", 0, 2);
            items[3] = new closure_4("ion", -1, 1);
            const tmp4 = new closure_4("ion", -1, 1);
            items[4] = new closure_4("Ier", -1, 2);
            const tmp5 = new closure_4("Ier", -1, 2);
            items[5] = new closure_4("ier", -1, 2);
            const tmp6 = new closure_4("ier", -1, 2);
            items[6] = new closure_4("\u00EB", -1, 4);
            frenchStemmer.a_7 = items;
            return items;
          }
        },
        {
          key: "a_8",
          get() {
            delete r1.a_8;
            const items = [new closure_4("ell", -1, -1), , , , ];
            const tmp = new closure_4("ell", -1, -1);
            items[1] = new closure_4("eill", -1, -1);
            const tmp2 = new closure_4("eill", -1, -1);
            items[2] = new closure_4("enn", -1, -1);
            const tmp3 = new closure_4("enn", -1, -1);
            items[3] = new closure_4("onn", -1, -1);
            const tmp4 = new closure_4("onn", -1, -1);
            items[4] = new closure_4("ett", -1, -1);
            frenchStemmer.a_8 = items;
            return items;
          }
        },
        {
          key: "g_v",
          get() {
            delete r1.g_v;
            const items = [];
            frenchStemmer.g_v = items;
            return items;
          }
        },
        {
          key: "g_keep_with_s",
          get() {
            delete r1.g_keep_with_s;
            const items = [];
            frenchStemmer.g_keep_with_s = items;
            return items;
          }
        }
      ];
      callback(frenchStemmer, items, items1);
      return frenchStemmer;
    }(tmp3);
    let closure_15 = (arg0) => {
      function germanStemmer() {
        callback3(this, germanStemmer);
        const prototypeOf = Object.getPrototypeOf(germanStemmer);
        return callback2(this, prototypeOf(...arguments));
      }
      const callback = germanStemmer;
      _inherits(germanStemmer, arg0);
      let obj = {
        key: "r_prelude$esjava$0",
        value: function r_prelude$esjava$0() {
          let cursor;
          let cursor2;
          let cursor4;
          const self = this;
          while (true) {
            ({ cursor: self.bra, cursor, cursor: cursor2 } = self);
            if (self.eq_s$esjava$1("\u00DF")) {
              self.ket = self.cursor;
              let result = self.slice_from$esjava$1("ss");
              // continue
            } else {
              self.cursor = cursor2;
              if (self.cursor >= self.limit) {
                break;
              } else {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
          }
          self.cursor = this.cursor;
          while (true) {
            while (true) {
              let cursor3 = self.cursor;
              let tmp2 = germanStemmer;
              if (self.in_grouping$esjava$3(germanStemmer.g_v, 97, 252)) {
                ({ cursor: self.bra, cursor: cursor4 } = self);
                if (self.eq_s$esjava$1("u")) {
                  self.ket = self.cursor;
                  let tmp3 = germanStemmer;
                  if (self.in_grouping$esjava$3(germanStemmer.g_v, 97, 252)) {
                    break;
                  }
                }
                self.cursor = cursor4;
                let tmp4 = cursor4;
                if (self.eq_s$esjava$1("y")) {
                  self.ket = self.cursor;
                  let tmp5 = germanStemmer;
                  let tmp6 = cursor4;
                  if (self.in_grouping$esjava$3(germanStemmer.g_v, 97, 252)) {
                    let result1 = self.slice_from$esjava$1("Y");
                    self.cursor = cursor3;
                    let tmp9 = cursor4;
                    // continue label0
                  }
                }
              }
              self.cursor = cursor3;
              if (self.cursor >= self.limit) {
                self.cursor = tmp;
                let flag = true;
                return true;
              } else {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            let result2 = self.slice_from$esjava$1("U");
          }
        }
      };
      const items = [obj, , , , , , , , , , ];
      obj = {
        key: "r_mark_regions$esjava$0",
        value: function r_mark_regions$esjava$0() {
          const self = this;
          ({ limit: this.I_p1, limit: this.I_p2 } = this);
          const sum = this.cursor + 3;
          if (0 <= sum) {
            if (sum <= self.limit) {
              self.cursor = sum;
              self.I_x = self.cursor;
              self.cursor = tmp;
              while (!self.in_grouping$esjava$3(germanStemmer.g_v, 97, 252)) {
                if (self.cursor >= self.limit) {
                  let flag = false;
                  return false;
                } else {
                  self.cursor = self.cursor + 1;
                  // continue
                }
              }
              const cursor = self.cursor;
              while (!self.out_grouping$esjava$3(germanStemmer.g_v, 97, 252)) {
                if (cursor >= self.limit) {
                  let flag2 = false;
                  return false;
                } else {
                  self.cursor = self.cursor + 1;
                  // continue
                }
              }
              self.I_p1 = cursor;
              if (self.I_p1 < self.I_x) {
                self.I_p1 = self.I_x;
              }
              while (!self.in_grouping$esjava$3(germanStemmer.g_v, 97, 252)) {
                if (self.cursor >= self.limit) {
                  let flag3 = false;
                  return false;
                } else {
                  self.cursor = self.cursor + 1;
                  // continue
                }
              }
              const cursor2 = self.cursor;
              while (!self.out_grouping$esjava$3(germanStemmer.g_v, 97, 252)) {
                if (cursor2 >= self.limit) {
                  let flag4 = false;
                  return false;
                } else {
                  self.cursor = self.cursor + 1;
                  // continue
                }
              }
              self.I_p2 = cursor2;
              return true;
            }
          }
          return false;
        }
      };
      items[1] = obj;
      obj = {
        key: "r_postlude$esjava$0",
        value: function r_postlude$esjava$0() {
          const self = this;
          self.bra = self.cursor;
          const result = self.find_among$esjava$1(germanStemmer.a_0);
          while (0 !== result) {
            self.ket = self.cursor;
            if (0 === result) {
              break;
            } else {
              if (1 === result) {
                let result1 = self.slice_from$esjava$1("y");
                // continue
              } else {
                if (2 !== result) {
                  if (5 !== result) {
                    if (3 === result) {
                      let result2 = self.slice_from$esjava$1("a");
                      // continue
                    } else {
                      if (4 === result) {
                        let result3 = self.slice_from$esjava$1("o");
                        // continue
                      } else {
                        if (6 !== result) {
                          continue;
                        } else if (self.cursor >= self.limit) {
                          break;
                        } else {
                          self.cursor = self.cursor + 1;
                          // continue
                        }
                        self.cursor = tmp;
                        let flag = true;
                        return true;
                      }
                      continue;
                    }
                    continue;
                  }
                  continue;
                }
                let result4 = self.slice_from$esjava$1("u");
                // continue
              }
              continue;
            }
          }
        }
      };
      items[2] = obj;
      items[3] = {
        key: "r_R1$esjava$0",
        value: function r_R1$esjava$0() {
          return this.I_p1 <= this.cursor;
        }
      };
      items[4] = {
        key: "r_R2$esjava$0",
        value: function r_R2$esjava$0() {
          return this.I_p2 <= this.cursor;
        }
      };
      items[5] = {
        key: "r_standard_suffix$esjava$0",
        value: function r_standard_suffix$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const diff = this.limit - this.cursor;
          const result = this.find_among_b$esjava$1(germanStemmer.a_1);
          if (0 !== result) {
            self.bra = self.cursor;
            if (self.r_R1$esjava$0()) {
              if (0 !== result) {
                if (1 === result) {
                  const result1 = self.slice_del$esjava$0();
                } else if (2 === result) {
                  const result2 = self.slice_del$esjava$0();
                  const diff1 = self.limit - self.cursor;
                  self.ket = self.cursor;
                  if (self.eq_s_b$esjava$1("s")) {
                    self.bra = self.cursor;
                    if (self.eq_s_b$esjava$1("nis")) {
                      const result3 = self.slice_del$esjava$0();
                    } else {
                      self.cursor = self.limit - diff1;
                    }
                  } else {
                    self.cursor = self.limit - diff1;
                  }
                } else if (3 === result) {
                  if (self.in_grouping_b$esjava$3(germanStemmer.g_s_ending, 98, 116)) {
                    const result4 = self.slice_del$esjava$0();
                  }
                }
              }
            }
          }
          self.cursor = self.limit - diff;
          self.ket = self.cursor;
          const diff2 = self.limit - self.cursor;
          const result5 = self.find_among_b$esjava$1(germanStemmer.a_2);
          if (0 !== result5) {
            self.bra = self.cursor;
            if (self.r_R1$esjava$0()) {
              if (0 !== result5) {
                if (1 === result5) {
                  const result6 = self.slice_del$esjava$0();
                } else if (2 === result5) {
                  if (self.in_grouping_b$esjava$3(germanStemmer.g_st_ending, 98, 116)) {
                    const diff3 = self.cursor - 3;
                    if (self.limit_backward <= diff3) {
                      if (diff3 <= self.limit) {
                        self.cursor = diff3;
                        const result7 = self.slice_del$esjava$0();
                      }
                    }
                  }
                }
              }
            }
          }
          self.cursor = self.limit - diff2;
          self.ket = self.cursor;
          const diff4 = self.limit - self.cursor;
          const result8 = self.find_among_b$esjava$1(germanStemmer.a_4);
          if (0 !== result8) {
            self.bra = self.cursor;
            if (self.r_R2$esjava$0()) {
              if (0 !== result8) {
                if (1 === result8) {
                  const result9 = self.slice_del$esjava$0();
                  const diff5 = self.limit - self.cursor;
                  self.ket = self.cursor;
                  if (self.eq_s_b$esjava$1("ig")) {
                    self.bra = self.cursor;
                    const diff6 = self.limit - self.cursor;
                    const limit = self.limit;
                    if (self.eq_s_b$esjava$1("e")) {
                      self.cursor = limit - diff5;
                    } else {
                      self.cursor = limit - diff6;
                      if (self.r_R2$esjava$0()) {
                        const result10 = self.slice_del$esjava$0();
                      } else {
                        self.cursor = self.limit - diff5;
                      }
                    }
                  } else {
                    self.cursor = self.limit - diff5;
                  }
                } else if (2 === result8) {
                  const diff7 = self.limit - self.cursor;
                  if (!self.eq_s_b$esjava$1("e")) {
                    self.cursor = self.limit - diff7;
                    const result11 = self.slice_del$esjava$0();
                  }
                } else if (3 === result8) {
                  const result12 = self.slice_del$esjava$0();
                  const diff8 = self.limit - self.cursor;
                  self.ket = self.cursor;
                  const diff9 = self.limit - self.cursor;
                  if (!self.eq_s_b$esjava$1("er")) {
                    self.cursor = self.limit - diff9;
                    if (!self.eq_s_b$esjava$1("en")) {
                      self.cursor = self.limit - diff8;
                    }
                  }
                  self.bra = self.cursor;
                  if (self.r_R1$esjava$0()) {
                    const result13 = self.slice_del$esjava$0();
                  } else {
                    self.cursor = self.limit - diff8;
                  }
                } else if (4 === result8) {
                  const result14 = self.slice_del$esjava$0();
                  const diff10 = self.limit - self.cursor;
                  self.ket = self.cursor;
                  const result15 = self.find_among_b$esjava$1(germanStemmer.a_3);
                  if (0 === result15) {
                    self.cursor = self.limit - diff10;
                  } else {
                    self.bra = self.cursor;
                    if (self.r_R2$esjava$0()) {
                      if (0 === result15) {
                        self.cursor = self.limit - diff10;
                      } else if (1 === result15) {
                        const result16 = self.slice_del$esjava$0();
                      }
                    } else {
                      self.cursor = self.limit - diff10;
                    }
                  }
                }
              }
            }
          }
          self.cursor = self.limit - diff4;
          return true;
        }
      };
      items[6] = {
        key: "stem$esjava$0",
        value: function stem$esjava$0() {
          let cursor;
          const result = this.r_prelude$esjava$0();
          this.cursor = this.cursor;
          const result1 = this.r_mark_regions$esjava$0();
          this.cursor = this.cursor;
          ({ cursor: this.limit_backward, limit: this.cursor } = this);
          const diff = this.limit - this.cursor;
          const result2 = this.r_standard_suffix$esjava$0();
          this.cursor = this.limit - diff;
          ({ limit_backward: this.cursor, cursor } = this);
          const result3 = this.r_postlude$esjava$0();
          this.cursor = cursor;
          return true;
        }
      };
      items[7] = {
        key: "stem",
        value: function stem() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const stem$esjava$0 = self.stem$esjava$0;
            let applyResult = stem$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(germanStemmer.prototype), "stem", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[8] = {
        key: "I_x",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_x")) {
            let num = self._$esjava$I_x;
          } else {
            num = 0;
            self._$esjava$I_x = 0;
          }
          return num;
        },
        set(_$esjava$I_x) {
          this._$esjava$I_x = _$esjava$I_x;
        }
      };
      items[9] = {
        key: "I_p2",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p2")) {
            let num = self._$esjava$I_p2;
          } else {
            num = 0;
            self._$esjava$I_p2 = 0;
          }
          return num;
        },
        set(_$esjava$I_p2) {
          this._$esjava$I_p2 = _$esjava$I_p2;
        }
      };
      items[10] = {
        key: "I_p1",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p1")) {
            let num = self._$esjava$I_p1;
          } else {
            num = 0;
            self._$esjava$I_p1 = 0;
          }
          return num;
        },
        set(_$esjava$I_p1) {
          this._$esjava$I_p1 = _$esjava$I_p1;
        }
      };
      const items1 = [
        {
          key: "a_0",
          get() {
            delete r1.a_0;
            const items = [new closure_4("", -1, 6), , , , , ];
            const tmp = new closure_4("", -1, 6);
            items[1] = new closure_4("U", 0, 2);
            const tmp2 = new closure_4("U", 0, 2);
            items[2] = new closure_4("Y", 0, 1);
            const tmp3 = new closure_4("Y", 0, 1);
            items[3] = new closure_4("\u00E4", 0, 3);
            const tmp4 = new closure_4("\u00E4", 0, 3);
            items[4] = new closure_4("\u00F6", 0, 4);
            const tmp5 = new closure_4("\u00F6", 0, 4);
            items[5] = new closure_4("\u00FC", 0, 5);
            germanStemmer.a_0 = items;
            return items;
          }
        },
        {
          key: "a_1",
          get() {
            delete r1.a_1;
            const items = [new closure_4("e", -1, 2), , , , , , ];
            const tmp = new closure_4("e", -1, 2);
            items[1] = new closure_4("em", -1, 1);
            const tmp2 = new closure_4("em", -1, 1);
            items[2] = new closure_4("en", -1, 2);
            const tmp3 = new closure_4("en", -1, 2);
            items[3] = new closure_4("ern", -1, 1);
            const tmp4 = new closure_4("ern", -1, 1);
            items[4] = new closure_4("er", -1, 1);
            const tmp5 = new closure_4("er", -1, 1);
            items[5] = new closure_4("s", -1, 3);
            const tmp6 = new closure_4("s", -1, 3);
            items[6] = new closure_4("es", 5, 2);
            germanStemmer.a_1 = items;
            return items;
          }
        },
        {
          key: "a_2",
          get() {
            delete r1.a_2;
            const items = [new closure_4("en", -1, 1), , , ];
            const tmp = new closure_4("en", -1, 1);
            items[1] = new closure_4("er", -1, 1);
            const tmp2 = new closure_4("er", -1, 1);
            items[2] = new closure_4("st", -1, 2);
            const tmp3 = new closure_4("st", -1, 2);
            items[3] = new closure_4("est", 2, 1);
            germanStemmer.a_2 = items;
            return items;
          }
        },
        {
          key: "a_3",
          get() {
            delete r1.a_3;
            const items = [new closure_4("ig", -1, 1), ];
            const tmp = new closure_4("ig", -1, 1);
            items[1] = new closure_4("lich", -1, 1);
            germanStemmer.a_3 = items;
            return items;
          }
        },
        {
          key: "a_4",
          get() {
            delete r1.a_4;
            const items = [new closure_4("end", -1, 1), , , , , , , ];
            const tmp = new closure_4("end", -1, 1);
            items[1] = new closure_4("ig", -1, 2);
            const tmp2 = new closure_4("ig", -1, 2);
            items[2] = new closure_4("ung", -1, 1);
            const tmp3 = new closure_4("ung", -1, 1);
            items[3] = new closure_4("lich", -1, 3);
            const tmp4 = new closure_4("lich", -1, 3);
            items[4] = new closure_4("isch", -1, 2);
            const tmp5 = new closure_4("isch", -1, 2);
            items[5] = new closure_4("ik", -1, 2);
            const tmp6 = new closure_4("ik", -1, 2);
            items[6] = new closure_4("heit", -1, 3);
            const tmp7 = new closure_4("heit", -1, 3);
            items[7] = new closure_4("keit", -1, 4);
            germanStemmer.a_4 = items;
            return items;
          }
        },
        {
          key: "g_v",
          get() {
            delete r1.g_v;
            const items = [];
            germanStemmer.g_v = items;
            return items;
          }
        },
        {
          key: "g_s_ending",
          get() {
            delete r1.g_s_ending;
            const items = [];
            germanStemmer.g_s_ending = items;
            return items;
          }
        },
        {
          key: "g_st_ending",
          get() {
            delete r1.g_st_ending;
            const items = [];
            germanStemmer.g_st_ending = items;
            return items;
          }
        }
      ];
      callback(germanStemmer, items, items1);
      return germanStemmer;
    }(tmp3);
    let closure_16 = (arg0) => {
      function hungarianStemmer() {
        callback3(this, hungarianStemmer);
        const prototypeOf = Object.getPrototypeOf(hungarianStemmer);
        return callback2(this, prototypeOf(...arguments));
      }
      const callback = hungarianStemmer;
      _inherits(hungarianStemmer, arg0);
      let obj = {
        key: "r_mark_regions$esjava$0",
        value: function r_mark_regions$esjava$0() {
          const self = this;
          this.I_p1 = this.limit;
          if (this.in_grouping$esjava$3(hungarianStemmer.g_v, 97, 369)) {
            self.cursor = self.cursor;
            const cursor = self.cursor;
            while (!self.out_grouping$esjava$3(hungarianStemmer.g_v, 97, 369)) {
              if (cursor < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
              let flag3 = true;
              return true;
            }
            if (0 === self.find_among$esjava$1(hungarianStemmer.a_0)) {
              self.cursor = cursor;
              if (self.cursor < self.limit) {
                self.cursor = self.cursor + 1;
              }
            }
            self.I_p1 = self.cursor;
          }
          self.cursor = this.cursor;
          if (self.out_grouping$esjava$3(hungarianStemmer.g_v, 97, 369)) {
            const cursor2 = self.cursor;
            while (!self.in_grouping$esjava$3(hungarianStemmer.g_v, 97, 369)) {
              if (cursor2 >= self.limit) {
                let flag2 = false;
                return false;
              } else {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            self.I_p1 = cursor2;
          } else {
            return false;
          }
        }
      };
      const items = [obj, , , , , , , , , , , , , , , , ];
      obj = {
        key: "r_R1$esjava$0",
        value: function r_R1$esjava$0() {
          return this.I_p1 <= this.cursor;
        }
      };
      items[1] = obj;
      obj = {
        key: "r_v_ending$esjava$0",
        value: function r_v_ending$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(hungarianStemmer.a_1);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (self.r_R1$esjava$0()) {
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  const result1 = self.slice_from$esjava$1("a");
                } else if (2 === result) {
                  const result2 = self.slice_from$esjava$1("e");
                }
                return true;
              }
            } else {
              return false;
            }
          }
        }
      };
      items[2] = obj;
      items[3] = {
        key: "r_double$esjava$0",
        value: function r_double$esjava$0() {
          const self = this;
          const diff = this.limit - this.cursor;
          let flag = 0 !== this.find_among_b$esjava$1(hungarianStemmer.a_2);
          if (flag) {
            self.cursor = self.limit - diff;
            flag = true;
          }
          return flag;
        }
      };
      items[4] = {
        key: "r_undouble$esjava$0",
        value: function r_undouble$esjava$0() {
          const self = this;
          if (this.cursor <= this.limit_backward) {
            return false;
          } else {
            self.cursor = self.cursor - 1;
            self.ket = self.cursor;
            const diff = self.cursor - 1;
            let flag = !tmp2;
            if (!(self.limit_backward > diff || diff > self.limit)) {
              self.cursor = diff;
              self.bra = self.cursor;
              const result = self.slice_del$esjava$0();
              flag = true;
            }
            return flag;
          }
        }
      };
      items[5] = {
        key: "r_instrum$esjava$0",
        value: function r_instrum$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(hungarianStemmer.a_3);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (self.r_R1$esjava$0()) {
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  if (!self.r_double$esjava$0()) {
                    return false;
                  }
                }
                const result1 = self.slice_del$esjava$0();
                return self.r_undouble$esjava$0();
              }
            } else {
              return false;
            }
          }
        }
      };
      items[6] = {
        key: "r_case$esjava$0",
        value: function r_case$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          let tmp = 0 !== this.find_among_b$esjava$1(hungarianStemmer.a_4);
          if (tmp) {
            self.bra = self.cursor;
            const tmp2 = !self.r_R1$esjava$0();
            let result = !tmp2;
            if (!tmp2) {
              result = self.slice_del$esjava$0();
              result = self.r_v_ending$esjava$0();
            }
            tmp = result;
          }
          return tmp;
        }
      };
      items[7] = {
        key: "r_case_special$esjava$0",
        value: function r_case_special$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(hungarianStemmer.a_5);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (self.r_R1$esjava$0()) {
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  const result1 = self.slice_from$esjava$1("e");
                } else if (2 === result) {
                  const result2 = self.slice_from$esjava$1("a");
                }
                return true;
              }
            } else {
              return false;
            }
          }
        }
      };
      items[8] = {
        key: "r_case_other$esjava$0",
        value: function r_case_other$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(hungarianStemmer.a_6);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (self.r_R1$esjava$0()) {
              if (0 === result) {
                return false;
              } else {
                if (1 !== result) {
                  if (2 !== result) {
                    if (3 === result) {
                      const result1 = self.slice_from$esjava$1("a");
                    } else if (4 === result) {
                      const result2 = self.slice_from$esjava$1("e");
                    }
                  }
                  return true;
                }
                const result3 = self.slice_del$esjava$0();
              }
            } else {
              return false;
            }
          }
        }
      };
      items[9] = {
        key: "r_factive$esjava$0",
        value: function r_factive$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(hungarianStemmer.a_7);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (self.r_R1$esjava$0()) {
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  if (!self.r_double$esjava$0()) {
                    return false;
                  }
                }
                const result1 = self.slice_del$esjava$0();
                return self.r_undouble$esjava$0();
              }
            } else {
              return false;
            }
          }
        }
      };
      items[10] = {
        key: "r_plural$esjava$0",
        value: function r_plural$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(hungarianStemmer.a_8);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (self.r_R1$esjava$0()) {
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  const result1 = self.slice_from$esjava$1("a");
                } else if (2 === result) {
                  const result2 = self.slice_from$esjava$1("e");
                } else {
                  const result3 = self.slice_del$esjava$0();
                }
                return true;
              }
            } else {
              return false;
            }
          }
        }
      };
      items[11] = {
        key: "r_owned$esjava$0",
        value: function r_owned$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(hungarianStemmer.a_9);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (self.r_R1$esjava$0()) {
              switch (result) {
                case 0:
                  return false;
                case 1:
                  let result1 = self.slice_del$esjava$0();
                  return true;
                case 2:
                  let result2 = self.slice_from$esjava$1("e");
                break;
                case 3:
                  let result3 = self.slice_from$esjava$1("a");
                break;
                case 4:
                  result1 = self.slice_del$esjava$0();
                  return true;
                case 5:
                  result2 = self.slice_from$esjava$1("e");
                break;
                case 6:
                  result3 = self.slice_from$esjava$1("a");
                break;
                case 7:
                  result1 = self.slice_del$esjava$0();
                  return true;
                case 8:
                  result2 = self.slice_from$esjava$1("e");
                break;
                case 9:
                  result1 = self.slice_del$esjava$0();
                  return true;
              }
            } else {
              return false;
            }
          }
        }
      };
      items[12] = {
        key: "r_sing_owner$esjava$0",
        value: function r_sing_owner$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(hungarianStemmer.a_10);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (self.r_R1$esjava$0()) {
              switch (result) {
                case 0:
                  return false;
                case 1:
                  let result1 = self.slice_del$esjava$0();
                  return true;
                case 2:
                  let result2 = self.slice_from$esjava$1("a");
                break;
                case 3:
                  let result3 = self.slice_from$esjava$1("e");
                break;
                case 4:
                  result1 = self.slice_del$esjava$0();
                  return true;
                case 5:
                  result2 = self.slice_from$esjava$1("a");
                break;
                case 6:
                  result3 = self.slice_from$esjava$1("e");
                break;
                case 7:
                  result1 = self.slice_del$esjava$0();
                  return true;
                case 8:
                  result1 = self.slice_del$esjava$0();
                  return true;
                case 9:
                  result1 = self.slice_del$esjava$0();
                  return true;
                case 10:
                  result2 = self.slice_from$esjava$1("a");
                break;
                case 11:
                  result3 = self.slice_from$esjava$1("e");
                break;
                case 12:
                  result1 = self.slice_del$esjava$0();
                  return true;
                case 13:
                  result1 = self.slice_del$esjava$0();
                  return true;
                case 14:
                  result2 = self.slice_from$esjava$1("a");
                break;
                case 15:
                  result3 = self.slice_from$esjava$1("e");
                break;
                case 16:
                  result1 = self.slice_del$esjava$0();
                  return true;
                case 17:
                  result1 = self.slice_del$esjava$0();
                  return true;
                case 18:
                  result1 = self.slice_del$esjava$0();
                  return true;
                case 19:
                  result2 = self.slice_from$esjava$1("a");
                break;
                case 20:
                  result3 = self.slice_from$esjava$1("e");
                break;
              }
            } else {
              return false;
            }
          }
        }
      };
      items[13] = {
        key: "r_plur_owner$esjava$0",
        value: function r_plur_owner$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(hungarianStemmer.a_11);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (self.r_R1$esjava$0()) {
              switch (result) {
                case 0:
                  return false;
                case 1:
                  let result1 = self.slice_del$esjava$0();
                  return true;
                case 2:
                  let result2 = self.slice_from$esjava$1("a");
                break;
                case 3:
                  let result3 = self.slice_from$esjava$1("e");
                break;
                case 4:
                  result1 = self.slice_del$esjava$0();
                  return true;
                case 5:
                  result1 = self.slice_del$esjava$0();
                  return true;
                case 6:
                  result1 = self.slice_del$esjava$0();
                  return true;
                case 7:
                  result2 = self.slice_from$esjava$1("a");
                break;
                case 8:
                  result3 = self.slice_from$esjava$1("e");
                break;
                case 9:
                  result1 = self.slice_del$esjava$0();
                  return true;
                case 10:
                  result1 = self.slice_del$esjava$0();
                  return true;
                case 11:
                  result1 = self.slice_del$esjava$0();
                  return true;
                case 12:
                  result2 = self.slice_from$esjava$1("a");
                break;
                case 13:
                  result3 = self.slice_from$esjava$1("e");
                break;
                case 14:
                  result1 = self.slice_del$esjava$0();
                  return true;
                case 15:
                  result1 = self.slice_del$esjava$0();
                  return true;
                case 16:
                  result1 = self.slice_del$esjava$0();
                  return true;
                case 17:
                  result1 = self.slice_del$esjava$0();
                  return true;
                case 18:
                  result2 = self.slice_from$esjava$1("a");
                break;
                case 19:
                  result3 = self.slice_from$esjava$1("e");
                break;
                case 20:
                  result1 = self.slice_del$esjava$0();
                  return true;
                case 21:
                  result1 = self.slice_del$esjava$0();
                  return true;
                case 22:
                  result2 = self.slice_from$esjava$1("a");
                break;
                case 23:
                  result3 = self.slice_from$esjava$1("e");
                break;
                case 24:
                  result1 = self.slice_del$esjava$0();
                  return true;
                case 25:
                  result1 = self.slice_del$esjava$0();
                  return true;
                case 26:
                  result1 = self.slice_del$esjava$0();
                  return true;
                case 27:
                  result2 = self.slice_from$esjava$1("a");
                break;
                case 28:
                  result3 = self.slice_from$esjava$1("e");
                break;
                case 29:
                  result1 = self.slice_del$esjava$0();
                  return true;
              }
            } else {
              return false;
            }
          }
        }
      };
      items[14] = {
        key: "stem$esjava$0",
        value: function stem$esjava$0() {
          const result = this.r_mark_regions$esjava$0();
          this.cursor = this.cursor;
          ({ cursor: this.limit_backward, limit: this.cursor } = this);
          const diff = this.limit - this.cursor;
          const result1 = this.r_instrum$esjava$0();
          this.cursor = this.limit - diff;
          const diff1 = this.limit - this.cursor;
          const result2 = this.r_case$esjava$0();
          this.cursor = this.limit - diff1;
          const diff2 = this.limit - this.cursor;
          const result3 = this.r_case_special$esjava$0();
          this.cursor = this.limit - diff2;
          const diff3 = this.limit - this.cursor;
          const result4 = this.r_case_other$esjava$0();
          this.cursor = this.limit - diff3;
          const diff4 = this.limit - this.cursor;
          const result5 = this.r_factive$esjava$0();
          this.cursor = this.limit - diff4;
          const diff5 = this.limit - this.cursor;
          const result6 = this.r_owned$esjava$0();
          this.cursor = this.limit - diff5;
          const diff6 = this.limit - this.cursor;
          const result7 = this.r_sing_owner$esjava$0();
          this.cursor = this.limit - diff6;
          const diff7 = this.limit - this.cursor;
          const result8 = this.r_plur_owner$esjava$0();
          this.cursor = this.limit - diff7;
          const result9 = this.r_plural$esjava$0();
          this.cursor = this.limit_backward;
          return true;
        }
      };
      items[15] = {
        key: "stem",
        value: function stem() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const stem$esjava$0 = self.stem$esjava$0;
            let applyResult = stem$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(hungarianStemmer.prototype), "stem", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[16] = {
        key: "I_p1",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p1")) {
            let num = self._$esjava$I_p1;
          } else {
            num = 0;
            self._$esjava$I_p1 = 0;
          }
          return num;
        },
        set(_$esjava$I_p1) {
          this._$esjava$I_p1 = _$esjava$I_p1;
        }
      };
      const items1 = [
        {
          key: "a_0",
          get() {
            delete r1.a_0;
            const items = [new closure_4("cs", -1, -1), , , , , , , ];
            const tmp = new closure_4("cs", -1, -1);
            items[1] = new closure_4("dzs", -1, -1);
            const tmp2 = new closure_4("dzs", -1, -1);
            items[2] = new closure_4("gy", -1, -1);
            const tmp3 = new closure_4("gy", -1, -1);
            items[3] = new closure_4("ly", -1, -1);
            const tmp4 = new closure_4("ly", -1, -1);
            items[4] = new closure_4("ny", -1, -1);
            const tmp5 = new closure_4("ny", -1, -1);
            items[5] = new closure_4("sz", -1, -1);
            const tmp6 = new closure_4("sz", -1, -1);
            items[6] = new closure_4("ty", -1, -1);
            const tmp7 = new closure_4("ty", -1, -1);
            items[7] = new closure_4("zs", -1, -1);
            hungarianStemmer.a_0 = items;
            return items;
          }
        },
        {
          key: "a_1",
          get() {
            delete r1.a_1;
            const items = [new closure_4("\u00E1", -1, 1), ];
            const tmp = new closure_4("\u00E1", -1, 1);
            items[1] = new closure_4("\u00E9", -1, 2);
            hungarianStemmer.a_1 = items;
            return items;
          }
        },
        {
          key: "a_2",
          get() {
            delete r1.a_2;
            const items = [new closure_4("bb", -1, -1), , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("bb", -1, -1);
            items[1] = new closure_4("cc", -1, -1);
            const tmp2 = new closure_4("cc", -1, -1);
            items[2] = new closure_4("dd", -1, -1);
            const tmp3 = new closure_4("dd", -1, -1);
            items[3] = new closure_4("ff", -1, -1);
            const tmp4 = new closure_4("ff", -1, -1);
            items[4] = new closure_4("gg", -1, -1);
            const tmp5 = new closure_4("gg", -1, -1);
            items[5] = new closure_4("jj", -1, -1);
            const tmp6 = new closure_4("jj", -1, -1);
            items[6] = new closure_4("kk", -1, -1);
            const tmp7 = new closure_4("kk", -1, -1);
            items[7] = new closure_4("ll", -1, -1);
            const tmp8 = new closure_4("ll", -1, -1);
            items[8] = new closure_4("mm", -1, -1);
            const tmp9 = new closure_4("mm", -1, -1);
            items[9] = new closure_4("nn", -1, -1);
            const tmp10 = new closure_4("nn", -1, -1);
            items[10] = new closure_4("pp", -1, -1);
            const tmp11 = new closure_4("pp", -1, -1);
            items[11] = new closure_4("rr", -1, -1);
            const tmp12 = new closure_4("rr", -1, -1);
            items[12] = new closure_4("ccs", -1, -1);
            const tmp13 = new closure_4("ccs", -1, -1);
            items[13] = new closure_4("ss", -1, -1);
            const tmp14 = new closure_4("ss", -1, -1);
            items[14] = new closure_4("zzs", -1, -1);
            const tmp15 = new closure_4("zzs", -1, -1);
            items[15] = new closure_4("tt", -1, -1);
            const tmp16 = new closure_4("tt", -1, -1);
            items[16] = new closure_4("vv", -1, -1);
            const tmp17 = new closure_4("vv", -1, -1);
            items[17] = new closure_4("ggy", -1, -1);
            const tmp18 = new closure_4("ggy", -1, -1);
            items[18] = new closure_4("lly", -1, -1);
            const tmp19 = new closure_4("lly", -1, -1);
            items[19] = new closure_4("nny", -1, -1);
            const tmp20 = new closure_4("nny", -1, -1);
            items[20] = new closure_4("tty", -1, -1);
            const tmp21 = new closure_4("tty", -1, -1);
            items[21] = new closure_4("ssz", -1, -1);
            const tmp22 = new closure_4("ssz", -1, -1);
            items[22] = new closure_4("zz", -1, -1);
            hungarianStemmer.a_2 = items;
            return items;
          }
        },
        {
          key: "a_3",
          get() {
            delete r1.a_3;
            const items = [new closure_4("al", -1, 1), ];
            const tmp = new closure_4("al", -1, 1);
            items[1] = new closure_4("el", -1, 2);
            hungarianStemmer.a_3 = items;
            return items;
          }
        },
        {
          key: "a_4",
          get() {
            delete r1.a_4;
            const items = [new closure_4("ba", -1, -1), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("ba", -1, -1);
            items[1] = new closure_4("ra", -1, -1);
            const tmp2 = new closure_4("ra", -1, -1);
            items[2] = new closure_4("be", -1, -1);
            const tmp3 = new closure_4("be", -1, -1);
            items[3] = new closure_4("re", -1, -1);
            const tmp4 = new closure_4("re", -1, -1);
            items[4] = new closure_4("ig", -1, -1);
            const tmp5 = new closure_4("ig", -1, -1);
            items[5] = new closure_4("nak", -1, -1);
            const tmp6 = new closure_4("nak", -1, -1);
            items[6] = new closure_4("nek", -1, -1);
            const tmp7 = new closure_4("nek", -1, -1);
            items[7] = new closure_4("val", -1, -1);
            const tmp8 = new closure_4("val", -1, -1);
            items[8] = new closure_4("vel", -1, -1);
            const tmp9 = new closure_4("vel", -1, -1);
            items[9] = new closure_4("ul", -1, -1);
            const tmp10 = new closure_4("ul", -1, -1);
            items[10] = new closure_4("n\u00E1l", -1, -1);
            const tmp11 = new closure_4("n\u00E1l", -1, -1);
            items[11] = new closure_4("n\u00E9l", -1, -1);
            const tmp12 = new closure_4("n\u00E9l", -1, -1);
            items[12] = new closure_4("b\u00F3l", -1, -1);
            const tmp13 = new closure_4("b\u00F3l", -1, -1);
            items[13] = new closure_4("r\u00F3l", -1, -1);
            const tmp14 = new closure_4("r\u00F3l", -1, -1);
            items[14] = new closure_4("t\u00F3l", -1, -1);
            const tmp15 = new closure_4("t\u00F3l", -1, -1);
            items[15] = new closure_4("\u00FCl", -1, -1);
            const tmp16 = new closure_4("\u00FCl", -1, -1);
            items[16] = new closure_4("b\u0151l", -1, -1);
            const tmp17 = new closure_4("b\u0151l", -1, -1);
            items[17] = new closure_4("r\u0151l", -1, -1);
            const tmp18 = new closure_4("r\u0151l", -1, -1);
            items[18] = new closure_4("t\u0151l", -1, -1);
            const tmp19 = new closure_4("t\u0151l", -1, -1);
            items[19] = new closure_4("n", -1, -1);
            const tmp20 = new closure_4("n", -1, -1);
            items[20] = new closure_4("an", 19, -1);
            const tmp21 = new closure_4("an", 19, -1);
            items[21] = new closure_4("ban", 20, -1);
            const tmp22 = new closure_4("ban", 20, -1);
            items[22] = new closure_4("en", 19, -1);
            const tmp23 = new closure_4("en", 19, -1);
            items[23] = new closure_4("ben", 22, -1);
            const tmp24 = new closure_4("ben", 22, -1);
            items[24] = new closure_4("k\u00E9ppen", 22, -1);
            const tmp25 = new closure_4("k\u00E9ppen", 22, -1);
            items[25] = new closure_4("on", 19, -1);
            const tmp26 = new closure_4("on", 19, -1);
            items[26] = new closure_4("\u00F6n", 19, -1);
            const tmp27 = new closure_4("\u00F6n", 19, -1);
            items[27] = new closure_4("k\u00E9pp", -1, -1);
            const tmp28 = new closure_4("k\u00E9pp", -1, -1);
            items[28] = new closure_4("kor", -1, -1);
            const tmp29 = new closure_4("kor", -1, -1);
            items[29] = new closure_4("t", -1, -1);
            const tmp30 = new closure_4("t", -1, -1);
            items[30] = new closure_4("at", 29, -1);
            const tmp31 = new closure_4("at", 29, -1);
            items[31] = new closure_4("et", 29, -1);
            const tmp32 = new closure_4("et", 29, -1);
            items[32] = new closure_4("k\u00E9nt", 29, -1);
            const tmp33 = new closure_4("k\u00E9nt", 29, -1);
            items[33] = new closure_4("ank\u00E9nt", 32, -1);
            const tmp34 = new closure_4("ank\u00E9nt", 32, -1);
            items[34] = new closure_4("enk\u00E9nt", 32, -1);
            const tmp35 = new closure_4("enk\u00E9nt", 32, -1);
            items[35] = new closure_4("onk\u00E9nt", 32, -1);
            const tmp36 = new closure_4("onk\u00E9nt", 32, -1);
            items[36] = new closure_4("ot", 29, -1);
            const tmp37 = new closure_4("ot", 29, -1);
            items[37] = new closure_4("\u00E9rt", 29, -1);
            const tmp38 = new closure_4("\u00E9rt", 29, -1);
            items[38] = new closure_4("\u00F6t", 29, -1);
            const tmp39 = new closure_4("\u00F6t", 29, -1);
            items[39] = new closure_4("hez", -1, -1);
            const tmp40 = new closure_4("hez", -1, -1);
            items[40] = new closure_4("hoz", -1, -1);
            const tmp41 = new closure_4("hoz", -1, -1);
            items[41] = new closure_4("h\u00F6z", -1, -1);
            const tmp42 = new closure_4("h\u00F6z", -1, -1);
            items[42] = new closure_4("v\u00E1", -1, -1);
            const tmp43 = new closure_4("v\u00E1", -1, -1);
            items[43] = new closure_4("v\u00E9", -1, -1);
            hungarianStemmer.a_4 = items;
            return items;
          }
        },
        {
          key: "a_5",
          get() {
            delete r1.a_5;
            const items = [new closure_4("\u00E1n", -1, 2), , ];
            const tmp = new closure_4("\u00E1n", -1, 2);
            items[1] = new closure_4("\u00E9n", -1, 1);
            const tmp2 = new closure_4("\u00E9n", -1, 1);
            items[2] = new closure_4("\u00E1nk\u00E9nt", -1, 3);
            hungarianStemmer.a_5 = items;
            return items;
          }
        },
        {
          key: "a_6",
          get() {
            delete r1.a_6;
            const items = [new closure_4("stul", -1, 2), , , , , ];
            const tmp = new closure_4("stul", -1, 2);
            items[1] = new closure_4("astul", 0, 1);
            const tmp2 = new closure_4("astul", 0, 1);
            items[2] = new closure_4("\u00E1stul", 0, 3);
            const tmp3 = new closure_4("\u00E1stul", 0, 3);
            items[3] = new closure_4("st\u00FCl", -1, 2);
            const tmp4 = new closure_4("st\u00FCl", -1, 2);
            items[4] = new closure_4("est\u00FCl", 3, 1);
            const tmp5 = new closure_4("est\u00FCl", 3, 1);
            items[5] = new closure_4("\u00E9st\u00FCl", 3, 4);
            hungarianStemmer.a_6 = items;
            return items;
          }
        },
        {
          key: "a_7",
          get() {
            delete r1.a_7;
            const items = [new closure_4("\u00E1", -1, 1), ];
            const tmp = new closure_4("\u00E1", -1, 1);
            items[1] = new closure_4("\u00E9", -1, 2);
            hungarianStemmer.a_7 = items;
            return items;
          }
        },
        {
          key: "a_8",
          get() {
            delete r1.a_8;
            const items = [new closure_4("k", -1, 7), , , , , , ];
            const tmp = new closure_4("k", -1, 7);
            items[1] = new closure_4("ak", 0, 4);
            const tmp2 = new closure_4("ak", 0, 4);
            items[2] = new closure_4("ek", 0, 6);
            const tmp3 = new closure_4("ek", 0, 6);
            items[3] = new closure_4("ok", 0, 5);
            const tmp4 = new closure_4("ok", 0, 5);
            items[4] = new closure_4("\u00E1k", 0, 1);
            const tmp5 = new closure_4("\u00E1k", 0, 1);
            items[5] = new closure_4("\u00E9k", 0, 2);
            const tmp6 = new closure_4("\u00E9k", 0, 2);
            items[6] = new closure_4("\u00F6k", 0, 3);
            hungarianStemmer.a_8 = items;
            return items;
          }
        },
        {
          key: "a_9",
          get() {
            delete r1.a_9;
            const items = [new closure_4("\u00E9i", -1, 7), , , , , , , , , , , ];
            const tmp = new closure_4("\u00E9i", -1, 7);
            items[1] = new closure_4("\u00E1\u00E9i", 0, 6);
            const tmp2 = new closure_4("\u00E1\u00E9i", 0, 6);
            items[2] = new closure_4("\u00E9\u00E9i", 0, 5);
            const tmp3 = new closure_4("\u00E9\u00E9i", 0, 5);
            items[3] = new closure_4("\u00E9", -1, 9);
            const tmp4 = new closure_4("\u00E9", -1, 9);
            items[4] = new closure_4("k\u00E9", 3, 4);
            const tmp5 = new closure_4("k\u00E9", 3, 4);
            items[5] = new closure_4("ak\u00E9", 4, 1);
            const tmp6 = new closure_4("ak\u00E9", 4, 1);
            items[6] = new closure_4("ek\u00E9", 4, 1);
            const tmp7 = new closure_4("ek\u00E9", 4, 1);
            items[7] = new closure_4("ok\u00E9", 4, 1);
            const tmp8 = new closure_4("ok\u00E9", 4, 1);
            items[8] = new closure_4("\u00E1k\u00E9", 4, 3);
            const tmp9 = new closure_4("\u00E1k\u00E9", 4, 3);
            items[9] = new closure_4("\u00E9k\u00E9", 4, 2);
            const tmp10 = new closure_4("\u00E9k\u00E9", 4, 2);
            items[10] = new closure_4("\u00F6k\u00E9", 4, 1);
            const tmp11 = new closure_4("\u00F6k\u00E9", 4, 1);
            items[11] = new closure_4("\u00E9\u00E9", 3, 8);
            hungarianStemmer.a_9 = items;
            return items;
          }
        },
        {
          key: "a_10",
          get() {
            delete r1.a_10;
            const items = [new closure_4("a", -1, 18), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("a", -1, 18);
            items[1] = new closure_4("ja", 0, 17);
            const tmp2 = new closure_4("ja", 0, 17);
            items[2] = new closure_4("d", -1, 16);
            const tmp3 = new closure_4("d", -1, 16);
            items[3] = new closure_4("ad", 2, 13);
            const tmp4 = new closure_4("ad", 2, 13);
            items[4] = new closure_4("ed", 2, 13);
            const tmp5 = new closure_4("ed", 2, 13);
            items[5] = new closure_4("od", 2, 13);
            const tmp6 = new closure_4("od", 2, 13);
            items[6] = new closure_4("\u00E1d", 2, 14);
            const tmp7 = new closure_4("\u00E1d", 2, 14);
            items[7] = new closure_4("\u00E9d", 2, 15);
            const tmp8 = new closure_4("\u00E9d", 2, 15);
            items[8] = new closure_4("\u00F6d", 2, 13);
            const tmp9 = new closure_4("\u00F6d", 2, 13);
            items[9] = new closure_4("e", -1, 18);
            const tmp10 = new closure_4("e", -1, 18);
            items[10] = new closure_4("je", 9, 17);
            const tmp11 = new closure_4("je", 9, 17);
            items[11] = new closure_4("nk", -1, 4);
            const tmp12 = new closure_4("nk", -1, 4);
            items[12] = new closure_4("unk", 11, 1);
            const tmp13 = new closure_4("unk", 11, 1);
            items[13] = new closure_4("\u00E1nk", 11, 2);
            const tmp14 = new closure_4("\u00E1nk", 11, 2);
            items[14] = new closure_4("\u00E9nk", 11, 3);
            const tmp15 = new closure_4("\u00E9nk", 11, 3);
            items[15] = new closure_4("\u00FCnk", 11, 1);
            const tmp16 = new closure_4("\u00FCnk", 11, 1);
            items[16] = new closure_4("uk", -1, 8);
            const tmp17 = new closure_4("uk", -1, 8);
            items[17] = new closure_4("juk", 16, 7);
            const tmp18 = new closure_4("juk", 16, 7);
            items[18] = new closure_4("\u00E1juk", 17, 5);
            const tmp19 = new closure_4("\u00E1juk", 17, 5);
            items[19] = new closure_4("\u00FCk", -1, 8);
            const tmp20 = new closure_4("\u00FCk", -1, 8);
            items[20] = new closure_4("j\u00FCk", 19, 7);
            const tmp21 = new closure_4("j\u00FCk", 19, 7);
            items[21] = new closure_4("\u00E9j\u00FCk", 20, 6);
            const tmp22 = new closure_4("\u00E9j\u00FCk", 20, 6);
            items[22] = new closure_4("m", -1, 12);
            const tmp23 = new closure_4("m", -1, 12);
            items[23] = new closure_4("am", 22, 9);
            const tmp24 = new closure_4("am", 22, 9);
            items[24] = new closure_4("em", 22, 9);
            const tmp25 = new closure_4("em", 22, 9);
            items[25] = new closure_4("om", 22, 9);
            const tmp26 = new closure_4("om", 22, 9);
            items[26] = new closure_4("\u00E1m", 22, 10);
            const tmp27 = new closure_4("\u00E1m", 22, 10);
            items[27] = new closure_4("\u00E9m", 22, 11);
            const tmp28 = new closure_4("\u00E9m", 22, 11);
            items[28] = new closure_4("o", -1, 18);
            const tmp29 = new closure_4("o", -1, 18);
            items[29] = new closure_4("\u00E1", -1, 19);
            const tmp30 = new closure_4("\u00E1", -1, 19);
            items[30] = new closure_4("\u00E9", -1, 20);
            hungarianStemmer.a_10 = items;
            return items;
          }
        },
        {
          key: "a_11",
          get() {
            delete r1.a_11;
            const items = [new closure_4("id", -1, 10), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("id", -1, 10);
            items[1] = new closure_4("aid", 0, 9);
            const tmp2 = new closure_4("aid", 0, 9);
            items[2] = new closure_4("jaid", 1, 6);
            const tmp3 = new closure_4("jaid", 1, 6);
            items[3] = new closure_4("eid", 0, 9);
            const tmp4 = new closure_4("eid", 0, 9);
            items[4] = new closure_4("jeid", 3, 6);
            const tmp5 = new closure_4("jeid", 3, 6);
            items[5] = new closure_4("\u00E1id", 0, 7);
            const tmp6 = new closure_4("\u00E1id", 0, 7);
            items[6] = new closure_4("\u00E9id", 0, 8);
            const tmp7 = new closure_4("\u00E9id", 0, 8);
            items[7] = new closure_4("i", -1, 15);
            const tmp8 = new closure_4("i", -1, 15);
            items[8] = new closure_4("ai", 7, 14);
            const tmp9 = new closure_4("ai", 7, 14);
            items[9] = new closure_4("jai", 8, 11);
            const tmp10 = new closure_4("jai", 8, 11);
            items[10] = new closure_4("ei", 7, 14);
            const tmp11 = new closure_4("ei", 7, 14);
            items[11] = new closure_4("jei", 10, 11);
            const tmp12 = new closure_4("jei", 10, 11);
            items[12] = new closure_4("\u00E1i", 7, 12);
            const tmp13 = new closure_4("\u00E1i", 7, 12);
            items[13] = new closure_4("\u00E9i", 7, 13);
            const tmp14 = new closure_4("\u00E9i", 7, 13);
            items[14] = new closure_4("itek", -1, 24);
            const tmp15 = new closure_4("itek", -1, 24);
            items[15] = new closure_4("eitek", 14, 21);
            const tmp16 = new closure_4("eitek", 14, 21);
            items[16] = new closure_4("jeitek", 15, 20);
            const tmp17 = new closure_4("jeitek", 15, 20);
            items[17] = new closure_4("\u00E9itek", 14, 23);
            const tmp18 = new closure_4("\u00E9itek", 14, 23);
            items[18] = new closure_4("ik", -1, 29);
            const tmp19 = new closure_4("ik", -1, 29);
            items[19] = new closure_4("aik", 18, 26);
            const tmp20 = new closure_4("aik", 18, 26);
            items[20] = new closure_4("jaik", 19, 25);
            const tmp21 = new closure_4("jaik", 19, 25);
            items[21] = new closure_4("eik", 18, 26);
            const tmp22 = new closure_4("eik", 18, 26);
            items[22] = new closure_4("jeik", 21, 25);
            const tmp23 = new closure_4("jeik", 21, 25);
            items[23] = new closure_4("\u00E1ik", 18, 27);
            const tmp24 = new closure_4("\u00E1ik", 18, 27);
            items[24] = new closure_4("\u00E9ik", 18, 28);
            const tmp25 = new closure_4("\u00E9ik", 18, 28);
            items[25] = new closure_4("ink", -1, 20);
            const tmp26 = new closure_4("ink", -1, 20);
            items[26] = new closure_4("aink", 25, 17);
            const tmp27 = new closure_4("aink", 25, 17);
            items[27] = new closure_4("jaink", 26, 16);
            const tmp28 = new closure_4("jaink", 26, 16);
            items[28] = new closure_4("eink", 25, 17);
            const tmp29 = new closure_4("eink", 25, 17);
            items[29] = new closure_4("jeink", 28, 16);
            const tmp30 = new closure_4("jeink", 28, 16);
            items[30] = new closure_4("\u00E1ink", 25, 18);
            const tmp31 = new closure_4("\u00E1ink", 25, 18);
            items[31] = new closure_4("\u00E9ink", 25, 19);
            const tmp32 = new closure_4("\u00E9ink", 25, 19);
            items[32] = new closure_4("aitok", -1, 21);
            const tmp33 = new closure_4("aitok", -1, 21);
            items[33] = new closure_4("jaitok", 32, 20);
            const tmp34 = new closure_4("jaitok", 32, 20);
            items[34] = new closure_4("\u00E1itok", -1, 22);
            const tmp35 = new closure_4("\u00E1itok", -1, 22);
            items[35] = new closure_4("im", -1, 5);
            const tmp36 = new closure_4("im", -1, 5);
            items[36] = new closure_4("aim", 35, 4);
            const tmp37 = new closure_4("aim", 35, 4);
            items[37] = new closure_4("jaim", 36, 1);
            const tmp38 = new closure_4("jaim", 36, 1);
            items[38] = new closure_4("eim", 35, 4);
            const tmp39 = new closure_4("eim", 35, 4);
            items[39] = new closure_4("jeim", 38, 1);
            const tmp40 = new closure_4("jeim", 38, 1);
            items[40] = new closure_4("\u00E1im", 35, 2);
            const tmp41 = new closure_4("\u00E1im", 35, 2);
            items[41] = new closure_4("\u00E9im", 35, 3);
            hungarianStemmer.a_11 = items;
            return items;
          }
        },
        {
          key: "g_v",
          get() {
            delete r1.g_v;
            const items = [];
            hungarianStemmer.g_v = items;
            return items;
          }
        }
      ];
      callback(hungarianStemmer, items, items1);
      return hungarianStemmer;
    }(tmp3);
    let closure_17 = (arg0) => {
      function irishStemmer() {
        callback3(this, irishStemmer);
        const prototypeOf = Object.getPrototypeOf(irishStemmer);
        return callback2(this, prototypeOf(...arguments));
      }
      const callback = irishStemmer;
      _inherits(irishStemmer, arg0);
      let obj = {
        key: "r_mark_regions$esjava$0",
        value: function r_mark_regions$esjava$0() {
          const self = this;
          ({ limit: this.I_pV, limit: this.I_p1, limit: this.I_p2 } = this);
          const cursor = self.cursor;
          while (!self.in_grouping$esjava$3(irishStemmer.g_v, 97, 250)) {
            if (cursor < self.limit) {
              self.cursor = self.cursor + 1;
              // continue
            }
            self.cursor = tmp;
            let tmp3 = irishStemmer;
            while (!self.in_grouping$esjava$3(irishStemmer.g_v, 97, 250)) {
              if (self.cursor < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
              self.cursor = tmp2;
              let flag = true;
              return true;
            }
            let tmp4 = irishStemmer;
            let cursor2 = self.cursor;
            while (!self.out_grouping$esjava$3(irishStemmer.g_v, 97, 250)) {
              if (cursor2 < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            self.I_p1 = cursor2;
            let tmp5 = irishStemmer;
            while (!self.in_grouping$esjava$3(irishStemmer.g_v, 97, 250)) {
              if (self.cursor < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            let tmp6 = irishStemmer;
            let cursor3 = self.cursor;
            while (!self.out_grouping$esjava$3(irishStemmer.g_v, 97, 250)) {
              if (cursor3 < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            self.I_p2 = cursor3;
          }
          self.I_pV = cursor;
        }
      };
      const items = [obj, , , , , , , , , , , , ];
      obj = {
        key: "r_initial_morph$esjava$0",
        value: function r_initial_morph$esjava$0() {
          const self = this;
          this.bra = this.cursor;
          if (0 === this.find_among$esjava$1(irishStemmer.a_0)) {
            return false;
          } else {
            const result = self.slice_from$esjava$1("m");
          }
        }
      };
      items[1] = obj;
      obj = {
        key: "r_RV$esjava$0",
        value: function r_RV$esjava$0() {
          return this.I_pV <= this.cursor;
        }
      };
      items[2] = obj;
      items[3] = {
        key: "r_R1$esjava$0",
        value: function r_R1$esjava$0() {
          return this.I_p1 <= this.cursor;
        }
      };
      items[4] = {
        key: "r_R2$esjava$0",
        value: function r_R2$esjava$0() {
          return this.I_p2 <= this.cursor;
        }
      };
      items[5] = {
        key: "r_noun_sfx$esjava$0",
        value: function r_noun_sfx$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(irishStemmer.a_1);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.r_R1$esjava$0()) {
                  const result1 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              } else if (2 === result) {
                if (self.r_R2$esjava$0()) {
                  const result2 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              }
              return true;
            }
          }
        }
      };
      items[6] = {
        key: "r_deriv$esjava$0",
        value: function r_deriv$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(irishStemmer.a_2);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.r_R2$esjava$0()) {
                  const result1 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              } else if (2 === result) {
                const result2 = self.slice_from$esjava$1("arc");
              } else if (3 === result) {
                const result3 = self.slice_from$esjava$1("gin");
              } else if (4 === result) {
                const result4 = self.slice_from$esjava$1("graf");
              } else if (5 === result) {
                const result5 = self.slice_from$esjava$1("paite");
              } else if (6 === result) {
                const result6 = self.slice_from$esjava$1("\u00F3id");
              }
              return true;
            }
          }
        }
      };
      items[7] = {
        key: "r_verb_sfx$esjava$0",
        value: function r_verb_sfx$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(irishStemmer.a_3);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.r_RV$esjava$0()) {
                  const result1 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              } else if (2 === result) {
                if (self.r_R1$esjava$0()) {
                  const result2 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              }
              return true;
            }
          }
        }
      };
      items[8] = {
        key: "stem$esjava$0",
        value: function stem$esjava$0() {
          const result = this.r_initial_morph$esjava$0();
          this.cursor = this.cursor;
          const result1 = this.r_mark_regions$esjava$0();
          this.cursor = this.cursor;
          ({ cursor: this.limit_backward, limit: this.cursor } = this);
          const diff = this.limit - this.cursor;
          const result2 = this.r_noun_sfx$esjava$0();
          this.cursor = this.limit - diff;
          const diff1 = this.limit - this.cursor;
          const result3 = this.r_deriv$esjava$0();
          this.cursor = this.limit - diff1;
          const result4 = this.r_verb_sfx$esjava$0();
          this.cursor = this.limit_backward;
          return true;
        }
      };
      items[9] = {
        key: "stem",
        value: function stem() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const stem$esjava$0 = self.stem$esjava$0;
            let applyResult = stem$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(irishStemmer.prototype), "stem", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[10] = {
        key: "I_p2",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p2")) {
            let num = self._$esjava$I_p2;
          } else {
            num = 0;
            self._$esjava$I_p2 = 0;
          }
          return num;
        },
        set(_$esjava$I_p2) {
          this._$esjava$I_p2 = _$esjava$I_p2;
        }
      };
      items[11] = {
        key: "I_p1",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p1")) {
            let num = self._$esjava$I_p1;
          } else {
            num = 0;
            self._$esjava$I_p1 = 0;
          }
          return num;
        },
        set(_$esjava$I_p1) {
          this._$esjava$I_p1 = _$esjava$I_p1;
        }
      };
      items[12] = {
        key: "I_pV",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_pV")) {
            let num = self._$esjava$I_pV;
          } else {
            num = 0;
            self._$esjava$I_pV = 0;
          }
          return num;
        },
        set(_$esjava$I_pV) {
          this._$esjava$I_pV = _$esjava$I_pV;
        }
      };
      const items1 = [
        {
          key: "a_0",
          get() {
            delete r1.a_0;
            const items = [new closure_4("b'", -1, 4), , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("b'", -1, 4);
            items[1] = new closure_4("bh", -1, 14);
            const tmp2 = new closure_4("bh", -1, 14);
            items[2] = new closure_4("bhf", 1, 9);
            const tmp3 = new closure_4("bhf", 1, 9);
            items[3] = new closure_4("bp", -1, 11);
            const tmp4 = new closure_4("bp", -1, 11);
            items[4] = new closure_4("ch", -1, 15);
            const tmp5 = new closure_4("ch", -1, 15);
            items[5] = new closure_4("d'", -1, 2);
            const tmp6 = new closure_4("d'", -1, 2);
            items[6] = new closure_4("d'fh", 5, 3);
            const tmp7 = new closure_4("d'fh", 5, 3);
            items[7] = new closure_4("dh", -1, 16);
            const tmp8 = new closure_4("dh", -1, 16);
            items[8] = new closure_4("dt", -1, 13);
            const tmp9 = new closure_4("dt", -1, 13);
            items[9] = new closure_4("fh", -1, 17);
            const tmp10 = new closure_4("fh", -1, 17);
            items[10] = new closure_4("gc", -1, 7);
            const tmp11 = new closure_4("gc", -1, 7);
            items[11] = new closure_4("gh", -1, 18);
            const tmp12 = new closure_4("gh", -1, 18);
            items[12] = new closure_4("h-", -1, 1);
            const tmp13 = new closure_4("h-", -1, 1);
            items[13] = new closure_4("m'", -1, 4);
            const tmp14 = new closure_4("m'", -1, 4);
            items[14] = new closure_4("mb", -1, 6);
            const tmp15 = new closure_4("mb", -1, 6);
            items[15] = new closure_4("mh", -1, 19);
            const tmp16 = new closure_4("mh", -1, 19);
            items[16] = new closure_4("n-", -1, 1);
            const tmp17 = new closure_4("n-", -1, 1);
            items[17] = new closure_4("nd", -1, 8);
            const tmp18 = new closure_4("nd", -1, 8);
            items[18] = new closure_4("ng", -1, 10);
            const tmp19 = new closure_4("ng", -1, 10);
            items[19] = new closure_4("ph", -1, 20);
            const tmp20 = new closure_4("ph", -1, 20);
            items[20] = new closure_4("sh", -1, 5);
            const tmp21 = new closure_4("sh", -1, 5);
            items[21] = new closure_4("t-", -1, 1);
            const tmp22 = new closure_4("t-", -1, 1);
            items[22] = new closure_4("th", -1, 21);
            const tmp23 = new closure_4("th", -1, 21);
            items[23] = new closure_4("ts", -1, 12);
            irishStemmer.a_0 = items;
            return items;
          }
        },
        {
          key: "a_1",
          get() {
            delete r1.a_1;
            const items = [new closure_4("\u00EDochta", -1, 1), , , , , , , , , , , , , , , ];
            const tmp = new closure_4("\u00EDochta", -1, 1);
            items[1] = new closure_4("a\u00EDochta", 0, 1);
            const tmp2 = new closure_4("a\u00EDochta", 0, 1);
            items[2] = new closure_4("ire", -1, 2);
            const tmp3 = new closure_4("ire", -1, 2);
            items[3] = new closure_4("aire", 2, 2);
            const tmp4 = new closure_4("aire", 2, 2);
            items[4] = new closure_4("abh", -1, 1);
            const tmp5 = new closure_4("abh", -1, 1);
            items[5] = new closure_4("eabh", 4, 1);
            const tmp6 = new closure_4("eabh", 4, 1);
            items[6] = new closure_4("ibh", -1, 1);
            const tmp7 = new closure_4("ibh", -1, 1);
            items[7] = new closure_4("aibh", 6, 1);
            const tmp8 = new closure_4("aibh", 6, 1);
            items[8] = new closure_4("amh", -1, 1);
            const tmp9 = new closure_4("amh", -1, 1);
            items[9] = new closure_4("eamh", 8, 1);
            const tmp10 = new closure_4("eamh", 8, 1);
            items[10] = new closure_4("imh", -1, 1);
            const tmp11 = new closure_4("imh", -1, 1);
            items[11] = new closure_4("aimh", 10, 1);
            const tmp12 = new closure_4("aimh", 10, 1);
            items[12] = new closure_4("\u00EDocht", -1, 1);
            const tmp13 = new closure_4("\u00EDocht", -1, 1);
            items[13] = new closure_4("a\u00EDocht", 12, 1);
            const tmp14 = new closure_4("a\u00EDocht", 12, 1);
            items[14] = new closure_4("ir\u00ED", -1, 2);
            const tmp15 = new closure_4("ir\u00ED", -1, 2);
            items[15] = new closure_4("air\u00ED", 14, 2);
            irishStemmer.a_1 = items;
            return items;
          }
        },
        {
          key: "a_2",
          get() {
            delete r1.a_2;
            const items = [new closure_4("\u00F3ideacha", -1, 6), , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("\u00F3ideacha", -1, 6);
            items[1] = new closure_4("patacha", -1, 5);
            const tmp2 = new closure_4("patacha", -1, 5);
            items[2] = new closure_4("achta", -1, 1);
            const tmp3 = new closure_4("achta", -1, 1);
            items[3] = new closure_4("arcachta", 2, 2);
            const tmp4 = new closure_4("arcachta", 2, 2);
            items[4] = new closure_4("eachta", 2, 1);
            const tmp5 = new closure_4("eachta", 2, 1);
            items[5] = new closure_4("grafa\u00EDochta", -1, 4);
            const tmp6 = new closure_4("grafa\u00EDochta", -1, 4);
            items[6] = new closure_4("paite", -1, 5);
            const tmp7 = new closure_4("paite", -1, 5);
            items[7] = new closure_4("ach", -1, 1);
            const tmp8 = new closure_4("ach", -1, 1);
            items[8] = new closure_4("each", 7, 1);
            const tmp9 = new closure_4("each", 7, 1);
            items[9] = new closure_4("\u00F3ideach", 8, 6);
            const tmp10 = new closure_4("\u00F3ideach", 8, 6);
            items[10] = new closure_4("gineach", 8, 3);
            const tmp11 = new closure_4("gineach", 8, 3);
            items[11] = new closure_4("patach", 7, 5);
            const tmp12 = new closure_4("patach", 7, 5);
            items[12] = new closure_4("grafa\u00EDoch", -1, 4);
            const tmp13 = new closure_4("grafa\u00EDoch", -1, 4);
            items[13] = new closure_4("pataigh", -1, 5);
            const tmp14 = new closure_4("pataigh", -1, 5);
            items[14] = new closure_4("\u00F3idigh", -1, 6);
            const tmp15 = new closure_4("\u00F3idigh", -1, 6);
            items[15] = new closure_4("acht\u00FAil", -1, 1);
            const tmp16 = new closure_4("acht\u00FAil", -1, 1);
            items[16] = new closure_4("eacht\u00FAil", 15, 1);
            const tmp17 = new closure_4("eacht\u00FAil", 15, 1);
            items[17] = new closure_4("gineas", -1, 3);
            const tmp18 = new closure_4("gineas", -1, 3);
            items[18] = new closure_4("ginis", -1, 3);
            const tmp19 = new closure_4("ginis", -1, 3);
            items[19] = new closure_4("acht", -1, 1);
            const tmp20 = new closure_4("acht", -1, 1);
            items[20] = new closure_4("arcacht", 19, 2);
            const tmp21 = new closure_4("arcacht", 19, 2);
            items[21] = new closure_4("eacht", 19, 1);
            const tmp22 = new closure_4("eacht", 19, 1);
            items[22] = new closure_4("grafa\u00EDocht", -1, 4);
            const tmp23 = new closure_4("grafa\u00EDocht", -1, 4);
            items[23] = new closure_4("arcachta\u00ED", -1, 2);
            const tmp24 = new closure_4("arcachta\u00ED", -1, 2);
            items[24] = new closure_4("grafa\u00EDochta\u00ED", -1, 4);
            irishStemmer.a_2 = items;
            return items;
          }
        },
        {
          key: "a_3",
          get() {
            delete r1.a_3;
            const items = [new closure_4("imid", -1, 1), , , , , , , , , , , ];
            const tmp = new closure_4("imid", -1, 1);
            items[1] = new closure_4("aimid", 0, 1);
            const tmp2 = new closure_4("aimid", 0, 1);
            items[2] = new closure_4("\u00EDmid", -1, 1);
            const tmp3 = new closure_4("\u00EDmid", -1, 1);
            items[3] = new closure_4("a\u00EDmid", 2, 1);
            const tmp4 = new closure_4("a\u00EDmid", 2, 1);
            items[4] = new closure_4("adh", -1, 2);
            const tmp5 = new closure_4("adh", -1, 2);
            items[5] = new closure_4("eadh", 4, 2);
            const tmp6 = new closure_4("eadh", 4, 2);
            items[6] = new closure_4("faidh", -1, 1);
            const tmp7 = new closure_4("faidh", -1, 1);
            items[7] = new closure_4("fidh", -1, 1);
            const tmp8 = new closure_4("fidh", -1, 1);
            items[8] = new closure_4("\u00E1il", -1, 2);
            const tmp9 = new closure_4("\u00E1il", -1, 2);
            items[9] = new closure_4("ain", -1, 2);
            const tmp10 = new closure_4("ain", -1, 2);
            items[10] = new closure_4("tear", -1, 2);
            const tmp11 = new closure_4("tear", -1, 2);
            items[11] = new closure_4("tar", -1, 2);
            irishStemmer.a_3 = items;
            return items;
          }
        },
        {
          key: "g_v",
          get() {
            delete r1.g_v;
            const items = [];
            irishStemmer.g_v = items;
            return items;
          }
        }
      ];
      callback(irishStemmer, items, items1);
      return irishStemmer;
    }(tmp3);
    let closure_18 = (arg0) => {
      function italianStemmer() {
        callback3(this, italianStemmer);
        const prototypeOf = Object.getPrototypeOf(italianStemmer);
        return callback2(this, prototypeOf(...arguments));
      }
      const callback = italianStemmer;
      _inherits(italianStemmer, arg0);
      let obj = {
        key: "r_prelude$esjava$0",
        value: function r_prelude$esjava$0() {
          let cursor2;
          const self = this;
          self.bra = self.cursor;
          const result = self.find_among$esjava$1(italianStemmer.a_0);
          while (0 !== result) {
            self.ket = self.cursor;
            if (0 === result) {
              break;
            } else {
              if (1 === result) {
                let result1 = self.slice_from$esjava$1("\u00E0");
                // continue
              } else {
                if (2 === result) {
                  let result2 = self.slice_from$esjava$1("\u00E8");
                  // continue
                } else {
                  if (3 === result) {
                    let result3 = self.slice_from$esjava$1("\u00EC");
                    // continue
                  } else {
                    if (4 === result) {
                      let result4 = self.slice_from$esjava$1("\u00F2");
                      // continue
                    } else {
                      if (5 === result) {
                        let result5 = self.slice_from$esjava$1("\u00F9");
                        // continue
                      } else {
                        if (6 === result) {
                          let result6 = self.slice_from$esjava$1("qU");
                          // continue
                        } else {
                          if (7 !== result) {
                            continue;
                          } else if (self.cursor >= self.limit) {
                            break;
                          } else {
                            self.cursor = self.cursor + 1;
                            // continue
                          }
                          self.cursor = tmp2;
                          self.cursor = tmp;
                          let str = "U";
                          let str2 = "I";
                          let num = 97;
                          let num2 = 249;
                          let str3 = "i";
                          let str4 = "u";
                          while (true) {
                            while (true) {
                              let cursor = self.cursor;
                              let tmp11 = italianStemmer;
                              if (self.in_grouping$esjava$3(italianStemmer.g_v, 97, 249)) {
                                ({ cursor: self.bra, cursor: cursor2 } = self);
                                if (self.eq_s$esjava$1("u")) {
                                  self.ket = self.cursor;
                                  let tmp12 = italianStemmer;
                                  if (self.in_grouping$esjava$3(italianStemmer.g_v, 97, 249)) {
                                    break;
                                  }
                                }
                                self.cursor = cursor2;
                                let tmp13 = cursor2;
                                if (self.eq_s$esjava$1("i")) {
                                  self.ket = self.cursor;
                                  let tmp14 = italianStemmer;
                                  let tmp15 = cursor2;
                                  if (self.in_grouping$esjava$3(italianStemmer.g_v, 97, 249)) {
                                    let result7 = self.slice_from$esjava$1("I");
                                    self.cursor = cursor;
                                    let tmp18 = cursor2;
                                    // continue label1
                                  }
                                }
                              }
                              self.cursor = cursor;
                              if (self.cursor >= self.limit) {
                                self.cursor = tmp10;
                                let flag = true;
                                return true;
                              } else {
                                self.cursor = self.cursor + 1;
                                // continue
                              }
                            }
                            let result8 = self.slice_from$esjava$1("U");
                          }
                        }
                        continue;
                      }
                      continue;
                    }
                    continue;
                  }
                  continue;
                }
                continue;
              }
              continue;
            }
          }
        }
      };
      const items = [obj, , , , , , , , , , , , , , ];
      obj = {
        key: "r_mark_regions$esjava$0",
        value: function r_mark_regions$esjava$0() {
          let cursor;
          let cursor2;
          const self = this;
          ({ limit: this.I_pV, limit: this.I_p1, limit: this.I_p2 } = this);
          ({ cursor, cursor: cursor2 } = this);
          if (this.in_grouping$esjava$3(italianStemmer.g_v, 97, 249)) {
            if (!self.out_grouping$esjava$3(italianStemmer.g_v, 97, 249)) {
              self.cursor = self.cursor;
              if (self.in_grouping$esjava$3(italianStemmer.g_v, 97, 249)) {
                while (!self.out_grouping$esjava$3(italianStemmer.g_v, 97, 249)) {
                  if (self.cursor < self.limit) {
                    self.cursor = self.cursor + 1;
                    // continue
                  }
                  break;
                }
              }
            } else {
              while (!self.in_grouping$esjava$3(italianStemmer.g_v, 97, 249)) {
                if (self.cursor < self.limit) {
                  self.cursor = self.cursor + 1;
                  // continue
                }
                break;
              }
            }
            self.I_pV = self.cursor;
            self.cursor = cursor;
            while (!self.in_grouping$esjava$3(italianStemmer.g_v, 97, 249)) {
              if (self.cursor < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
              self.cursor = tmp8;
              let flag = true;
              return true;
            }
            const cursor3 = self.cursor;
            while (!self.out_grouping$esjava$3(italianStemmer.g_v, 97, 249)) {
              if (cursor3 < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            self.I_p1 = cursor3;
            while (!self.in_grouping$esjava$3(italianStemmer.g_v, 97, 249)) {
              if (self.cursor < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            const cursor4 = self.cursor;
            while (!self.out_grouping$esjava$3(italianStemmer.g_v, 97, 249)) {
              if (cursor4 < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            self.I_p2 = cursor4;
          }
          self.cursor = cursor2;
          if (self.out_grouping$esjava$3(italianStemmer.g_v, 97, 249)) {
            if (!self.out_grouping$esjava$3(italianStemmer.g_v, 97, 249)) {
              self.cursor = self.cursor;
              if (self.in_grouping$esjava$3(italianStemmer.g_v, 97, 249)) {
                if (self.cursor < self.limit) {
                  self.cursor = self.cursor + 1;
                }
              }
            } else {
              while (!self.in_grouping$esjava$3(italianStemmer.g_v, 97, 249)) {
                if (self.cursor < self.limit) {
                  self.cursor = self.cursor + 1;
                  // continue
                }
                break;
              }
            }
          }
        }
      };
      items[1] = obj;
      obj = {
        key: "r_postlude$esjava$0",
        value: function r_postlude$esjava$0() {
          const self = this;
          self.bra = self.cursor;
          const result = self.find_among$esjava$1(italianStemmer.a_1);
          while (0 !== result) {
            self.ket = self.cursor;
            if (0 === result) {
              break;
            } else {
              if (1 === result) {
                let result1 = self.slice_from$esjava$1("i");
                // continue
              } else {
                if (2 === result) {
                  let result2 = self.slice_from$esjava$1("u");
                  // continue
                } else {
                  if (3 !== result) {
                    continue;
                  } else if (self.cursor >= self.limit) {
                    break;
                  } else {
                    self.cursor = self.cursor + 1;
                    // continue
                  }
                  self.cursor = tmp;
                  let flag = true;
                  return true;
                }
                continue;
              }
              continue;
            }
          }
        }
      };
      items[2] = obj;
      items[3] = {
        key: "r_RV$esjava$0",
        value: function r_RV$esjava$0() {
          return this.I_pV <= this.cursor;
        }
      };
      items[4] = {
        key: "r_R1$esjava$0",
        value: function r_R1$esjava$0() {
          return this.I_p1 <= this.cursor;
        }
      };
      items[5] = {
        key: "r_R2$esjava$0",
        value: function r_R2$esjava$0() {
          return this.I_p2 <= this.cursor;
        }
      };
      items[6] = {
        key: "r_attached_pronoun$esjava$0",
        value: function r_attached_pronoun$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          if (0 === this.find_among_b$esjava$1(italianStemmer.a_2)) {
            return false;
          } else {
            self.bra = self.cursor;
            const result = self.find_among_b$esjava$1(italianStemmer.a_3);
            if (0 === result) {
              return false;
            } else if (self.r_RV$esjava$0()) {
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  const result1 = self.slice_del$esjava$0();
                } else if (2 === result) {
                  const result2 = self.slice_from$esjava$1("e");
                }
                return true;
              }
            } else {
              return false;
            }
          }
        }
      };
      items[7] = {
        key: "r_standard_suffix$esjava$0",
        value: function r_standard_suffix$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          if (0 === this.find_among_b$esjava$1(italianStemmer.a_6)) {
            return false;
          } else if (self.r_R2$esjava$0()) {
            const result = self.slice_del$esjava$0();
            const diff = self.limit - self.cursor;
            self.ket = self.cursor;
            if (self.eq_s_b$esjava$1("at")) {
              self.bra = self.cursor;
              if (self.r_R2$esjava$0()) {
                const result1 = self.slice_del$esjava$0();
                self.ket = self.cursor;
                if (self.eq_s_b$esjava$1("ic")) {
                  self.bra = self.cursor;
                  if (self.r_R2$esjava$0()) {
                    const result2 = self.slice_del$esjava$0();
                  } else {
                    self.cursor = self.limit - diff;
                  }
                } else {
                  self.cursor = self.limit - diff;
                }
              } else {
                self.cursor = self.limit - diff;
              }
            } else {
              self.cursor = self.limit - diff;
            }
          } else {
            return false;
          }
        }
      };
      items[8] = {
        key: "r_verb_suffix$esjava$0",
        value: function r_verb_suffix$esjava$0() {
          let limit_backward;
          const self = this;
          if (this.cursor < this.I_pV) {
            return false;
          } else {
            ({ I_pV: self.cursor, limit_backward, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp;
            self.ket = self.cursor;
            const result = self.find_among_b$esjava$1(italianStemmer.a_7);
            if (0 === result) {
              self.limit_backward = limit_backward;
              return false;
            } else {
              self.bra = self.cursor;
              if (0 === result) {
                self.limit_backward = limit_backward;
                return false;
              } else {
                if (1 === result) {
                  const result1 = self.slice_del$esjava$0();
                }
                self.limit_backward = limit_backward;
                return true;
              }
            }
          }
        }
      };
      items[9] = {
        key: "r_vowel_suffix$esjava$0",
        value: function r_vowel_suffix$esjava$0() {
          const self = this;
          const diff = this.limit - this.cursor;
          this.ket = this.cursor;
          if (this.in_grouping_b$esjava$3(italianStemmer.g_AEIO, 97, 242)) {
            self.bra = self.cursor;
            if (self.r_RV$esjava$0()) {
              const result = self.slice_del$esjava$0();
              self.ket = self.cursor;
              if (self.eq_s_b$esjava$1("i")) {
                self.bra = self.cursor;
                if (self.r_RV$esjava$0()) {
                  const result1 = self.slice_del$esjava$0();
                } else {
                  self.cursor = self.limit - diff;
                }
              } else {
                self.cursor = self.limit - diff;
              }
            } else {
              self.cursor = self.limit - diff;
            }
          } else {
            self.cursor = self.limit - diff;
          }
          const diff1 = self.limit - self.cursor;
          self.ket = self.cursor;
          if (self.eq_s_b$esjava$1("h")) {
            self.bra = self.cursor;
            if (self.in_grouping_b$esjava$3(italianStemmer.g_CG, 99, 103)) {
              if (self.r_RV$esjava$0()) {
                const result2 = self.slice_del$esjava$0();
              } else {
                self.cursor = self.limit - diff1;
              }
            } else {
              self.cursor = self.limit - diff1;
            }
          } else {
            self.cursor = self.limit - diff1;
          }
          return true;
        }
      };
      items[10] = {
        key: "stem$esjava$0",
        value: function stem$esjava$0() {
          let cursor;
          const self = this;
          const result = this.r_prelude$esjava$0();
          this.cursor = this.cursor;
          const result1 = this.r_mark_regions$esjava$0();
          this.cursor = this.cursor;
          ({ cursor: this.limit_backward, limit: this.cursor } = this);
          const diff = this.limit - this.cursor;
          const result2 = this.r_attached_pronoun$esjava$0();
          this.cursor = this.limit - diff;
          const diff1 = this.limit - this.cursor;
          const diff2 = this.limit - this.cursor;
          if (!this.r_standard_suffix$esjava$0()) {
            self.cursor = self.limit - diff2;
            const result3 = self.r_verb_suffix$esjava$0();
          }
          self.cursor = self.limit - diff1;
          const diff3 = self.limit - self.cursor;
          const result4 = self.r_vowel_suffix$esjava$0();
          self.cursor = self.limit - diff3;
          ({ limit_backward: self.cursor, cursor } = self);
          const result5 = self.r_postlude$esjava$0();
          self.cursor = cursor;
          return true;
        }
      };
      items[11] = {
        key: "stem",
        value: function stem() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const stem$esjava$0 = self.stem$esjava$0;
            let applyResult = stem$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(italianStemmer.prototype), "stem", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[12] = {
        key: "I_p2",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p2")) {
            let num = self._$esjava$I_p2;
          } else {
            num = 0;
            self._$esjava$I_p2 = 0;
          }
          return num;
        },
        set(_$esjava$I_p2) {
          this._$esjava$I_p2 = _$esjava$I_p2;
        }
      };
      items[13] = {
        key: "I_p1",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p1")) {
            let num = self._$esjava$I_p1;
          } else {
            num = 0;
            self._$esjava$I_p1 = 0;
          }
          return num;
        },
        set(_$esjava$I_p1) {
          this._$esjava$I_p1 = _$esjava$I_p1;
        }
      };
      items[14] = {
        key: "I_pV",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_pV")) {
            let num = self._$esjava$I_pV;
          } else {
            num = 0;
            self._$esjava$I_pV = 0;
          }
          return num;
        },
        set(_$esjava$I_pV) {
          this._$esjava$I_pV = _$esjava$I_pV;
        }
      };
      const items1 = [
        {
          key: "a_0",
          get() {
            delete r1.a_0;
            const items = [new closure_4("", -1, 7), , , , , , ];
            const tmp = new closure_4("", -1, 7);
            items[1] = new closure_4("qu", 0, 6);
            const tmp2 = new closure_4("qu", 0, 6);
            items[2] = new closure_4("\u00E1", 0, 1);
            const tmp3 = new closure_4("\u00E1", 0, 1);
            items[3] = new closure_4("\u00E9", 0, 2);
            const tmp4 = new closure_4("\u00E9", 0, 2);
            items[4] = new closure_4("\u00ED", 0, 3);
            const tmp5 = new closure_4("\u00ED", 0, 3);
            items[5] = new closure_4("\u00F3", 0, 4);
            const tmp6 = new closure_4("\u00F3", 0, 4);
            items[6] = new closure_4("\u00FA", 0, 5);
            italianStemmer.a_0 = items;
            return items;
          }
        },
        {
          key: "a_1",
          get() {
            delete r1.a_1;
            const items = [new closure_4("", -1, 3), , ];
            const tmp = new closure_4("", -1, 3);
            items[1] = new closure_4("I", 0, 1);
            const tmp2 = new closure_4("I", 0, 1);
            items[2] = new closure_4("U", 0, 2);
            italianStemmer.a_1 = items;
            return items;
          }
        },
        {
          key: "a_2",
          get() {
            delete r1.a_2;
            const items = [new closure_4("la", -1, -1), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("la", -1, -1);
            items[1] = new closure_4("cela", 0, -1);
            const tmp2 = new closure_4("cela", 0, -1);
            items[2] = new closure_4("gliela", 0, -1);
            const tmp3 = new closure_4("gliela", 0, -1);
            items[3] = new closure_4("mela", 0, -1);
            const tmp4 = new closure_4("mela", 0, -1);
            items[4] = new closure_4("tela", 0, -1);
            const tmp5 = new closure_4("tela", 0, -1);
            items[5] = new closure_4("vela", 0, -1);
            const tmp6 = new closure_4("vela", 0, -1);
            items[6] = new closure_4("le", -1, -1);
            const tmp7 = new closure_4("le", -1, -1);
            items[7] = new closure_4("cele", 6, -1);
            const tmp8 = new closure_4("cele", 6, -1);
            items[8] = new closure_4("gliele", 6, -1);
            const tmp9 = new closure_4("gliele", 6, -1);
            items[9] = new closure_4("mele", 6, -1);
            const tmp10 = new closure_4("mele", 6, -1);
            items[10] = new closure_4("tele", 6, -1);
            const tmp11 = new closure_4("tele", 6, -1);
            items[11] = new closure_4("vele", 6, -1);
            const tmp12 = new closure_4("vele", 6, -1);
            items[12] = new closure_4("ne", -1, -1);
            const tmp13 = new closure_4("ne", -1, -1);
            items[13] = new closure_4("cene", 12, -1);
            const tmp14 = new closure_4("cene", 12, -1);
            items[14] = new closure_4("gliene", 12, -1);
            const tmp15 = new closure_4("gliene", 12, -1);
            items[15] = new closure_4("mene", 12, -1);
            const tmp16 = new closure_4("mene", 12, -1);
            items[16] = new closure_4("sene", 12, -1);
            const tmp17 = new closure_4("sene", 12, -1);
            items[17] = new closure_4("tene", 12, -1);
            const tmp18 = new closure_4("tene", 12, -1);
            items[18] = new closure_4("vene", 12, -1);
            const tmp19 = new closure_4("vene", 12, -1);
            items[19] = new closure_4("ci", -1, -1);
            const tmp20 = new closure_4("ci", -1, -1);
            items[20] = new closure_4("li", -1, -1);
            const tmp21 = new closure_4("li", -1, -1);
            items[21] = new closure_4("celi", 20, -1);
            const tmp22 = new closure_4("celi", 20, -1);
            items[22] = new closure_4("glieli", 20, -1);
            const tmp23 = new closure_4("glieli", 20, -1);
            items[23] = new closure_4("meli", 20, -1);
            const tmp24 = new closure_4("meli", 20, -1);
            items[24] = new closure_4("teli", 20, -1);
            const tmp25 = new closure_4("teli", 20, -1);
            items[25] = new closure_4("veli", 20, -1);
            const tmp26 = new closure_4("veli", 20, -1);
            items[26] = new closure_4("gli", 20, -1);
            const tmp27 = new closure_4("gli", 20, -1);
            items[27] = new closure_4("mi", -1, -1);
            const tmp28 = new closure_4("mi", -1, -1);
            items[28] = new closure_4("si", -1, -1);
            const tmp29 = new closure_4("si", -1, -1);
            items[29] = new closure_4("ti", -1, -1);
            const tmp30 = new closure_4("ti", -1, -1);
            items[30] = new closure_4("vi", -1, -1);
            const tmp31 = new closure_4("vi", -1, -1);
            items[31] = new closure_4("lo", -1, -1);
            const tmp32 = new closure_4("lo", -1, -1);
            items[32] = new closure_4("celo", 31, -1);
            const tmp33 = new closure_4("celo", 31, -1);
            items[33] = new closure_4("glielo", 31, -1);
            const tmp34 = new closure_4("glielo", 31, -1);
            items[34] = new closure_4("melo", 31, -1);
            const tmp35 = new closure_4("melo", 31, -1);
            items[35] = new closure_4("telo", 31, -1);
            const tmp36 = new closure_4("telo", 31, -1);
            items[36] = new closure_4("velo", 31, -1);
            italianStemmer.a_2 = items;
            return items;
          }
        },
        {
          key: "a_3",
          get() {
            delete r1.a_3;
            const items = [new closure_4("ando", -1, 1), , , , ];
            const tmp = new closure_4("ando", -1, 1);
            items[1] = new closure_4("endo", -1, 1);
            const tmp2 = new closure_4("endo", -1, 1);
            items[2] = new closure_4("ar", -1, 2);
            const tmp3 = new closure_4("ar", -1, 2);
            items[3] = new closure_4("er", -1, 2);
            const tmp4 = new closure_4("er", -1, 2);
            items[4] = new closure_4("ir", -1, 2);
            italianStemmer.a_3 = items;
            return items;
          }
        },
        {
          key: "a_4",
          get() {
            delete r1.a_4;
            const items = [new closure_4("ic", -1, -1), , , ];
            const tmp = new closure_4("ic", -1, -1);
            items[1] = new closure_4("abil", -1, -1);
            const tmp2 = new closure_4("abil", -1, -1);
            items[2] = new closure_4("os", -1, -1);
            const tmp3 = new closure_4("os", -1, -1);
            items[3] = new closure_4("iv", -1, 1);
            italianStemmer.a_4 = items;
            return items;
          }
        },
        {
          key: "a_5",
          get() {
            delete r1.a_5;
            const items = [new closure_4("ic", -1, 1), , ];
            const tmp = new closure_4("ic", -1, 1);
            items[1] = new closure_4("abil", -1, 1);
            const tmp2 = new closure_4("abil", -1, 1);
            items[2] = new closure_4("iv", -1, 1);
            italianStemmer.a_5 = items;
            return items;
          }
        },
        {
          key: "a_6",
          get() {
            delete r1.a_6;
            const items = [new closure_4("ica", -1, 1), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("ica", -1, 1);
            items[1] = new closure_4("logia", -1, 3);
            const tmp2 = new closure_4("logia", -1, 3);
            items[2] = new closure_4("osa", -1, 1);
            const tmp3 = new closure_4("osa", -1, 1);
            items[3] = new closure_4("ista", -1, 1);
            const tmp4 = new closure_4("ista", -1, 1);
            items[4] = new closure_4("iva", -1, 9);
            const tmp5 = new closure_4("iva", -1, 9);
            items[5] = new closure_4("anza", -1, 1);
            const tmp6 = new closure_4("anza", -1, 1);
            items[6] = new closure_4("enza", -1, 5);
            const tmp7 = new closure_4("enza", -1, 5);
            items[7] = new closure_4("ice", -1, 1);
            const tmp8 = new closure_4("ice", -1, 1);
            items[8] = new closure_4("atrice", 7, 1);
            const tmp9 = new closure_4("atrice", 7, 1);
            items[9] = new closure_4("iche", -1, 1);
            const tmp10 = new closure_4("iche", -1, 1);
            items[10] = new closure_4("logie", -1, 3);
            const tmp11 = new closure_4("logie", -1, 3);
            items[11] = new closure_4("abile", -1, 1);
            const tmp12 = new closure_4("abile", -1, 1);
            items[12] = new closure_4("ibile", -1, 1);
            const tmp13 = new closure_4("ibile", -1, 1);
            items[13] = new closure_4("usione", -1, 4);
            const tmp14 = new closure_4("usione", -1, 4);
            items[14] = new closure_4("azione", -1, 2);
            const tmp15 = new closure_4("azione", -1, 2);
            items[15] = new closure_4("uzione", -1, 4);
            const tmp16 = new closure_4("uzione", -1, 4);
            items[16] = new closure_4("atore", -1, 2);
            const tmp17 = new closure_4("atore", -1, 2);
            items[17] = new closure_4("ose", -1, 1);
            const tmp18 = new closure_4("ose", -1, 1);
            items[18] = new closure_4("ante", -1, 1);
            const tmp19 = new closure_4("ante", -1, 1);
            items[19] = new closure_4("mente", -1, 1);
            const tmp20 = new closure_4("mente", -1, 1);
            items[20] = new closure_4("amente", 19, 7);
            const tmp21 = new closure_4("amente", 19, 7);
            items[21] = new closure_4("iste", -1, 1);
            const tmp22 = new closure_4("iste", -1, 1);
            items[22] = new closure_4("ive", -1, 9);
            const tmp23 = new closure_4("ive", -1, 9);
            items[23] = new closure_4("anze", -1, 1);
            const tmp24 = new closure_4("anze", -1, 1);
            items[24] = new closure_4("enze", -1, 5);
            const tmp25 = new closure_4("enze", -1, 5);
            items[25] = new closure_4("ici", -1, 1);
            const tmp26 = new closure_4("ici", -1, 1);
            items[26] = new closure_4("atrici", 25, 1);
            const tmp27 = new closure_4("atrici", 25, 1);
            items[27] = new closure_4("ichi", -1, 1);
            const tmp28 = new closure_4("ichi", -1, 1);
            items[28] = new closure_4("abili", -1, 1);
            const tmp29 = new closure_4("abili", -1, 1);
            items[29] = new closure_4("ibili", -1, 1);
            const tmp30 = new closure_4("ibili", -1, 1);
            items[30] = new closure_4("ismi", -1, 1);
            const tmp31 = new closure_4("ismi", -1, 1);
            items[31] = new closure_4("usioni", -1, 4);
            const tmp32 = new closure_4("usioni", -1, 4);
            items[32] = new closure_4("azioni", -1, 2);
            const tmp33 = new closure_4("azioni", -1, 2);
            items[33] = new closure_4("uzioni", -1, 4);
            const tmp34 = new closure_4("uzioni", -1, 4);
            items[34] = new closure_4("atori", -1, 2);
            const tmp35 = new closure_4("atori", -1, 2);
            items[35] = new closure_4("osi", -1, 1);
            const tmp36 = new closure_4("osi", -1, 1);
            items[36] = new closure_4("anti", -1, 1);
            const tmp37 = new closure_4("anti", -1, 1);
            items[37] = new closure_4("amenti", -1, 6);
            const tmp38 = new closure_4("amenti", -1, 6);
            items[38] = new closure_4("imenti", -1, 6);
            const tmp39 = new closure_4("imenti", -1, 6);
            items[39] = new closure_4("isti", -1, 1);
            const tmp40 = new closure_4("isti", -1, 1);
            items[40] = new closure_4("ivi", -1, 9);
            const tmp41 = new closure_4("ivi", -1, 9);
            items[41] = new closure_4("ico", -1, 1);
            const tmp42 = new closure_4("ico", -1, 1);
            items[42] = new closure_4("ismo", -1, 1);
            const tmp43 = new closure_4("ismo", -1, 1);
            items[43] = new closure_4("oso", -1, 1);
            const tmp44 = new closure_4("oso", -1, 1);
            items[44] = new closure_4("amento", -1, 6);
            const tmp45 = new closure_4("amento", -1, 6);
            items[45] = new closure_4("imento", -1, 6);
            const tmp46 = new closure_4("imento", -1, 6);
            items[46] = new closure_4("ivo", -1, 9);
            const tmp47 = new closure_4("ivo", -1, 9);
            items[47] = new closure_4("it\u00E0", -1, 8);
            const tmp48 = new closure_4("it\u00E0", -1, 8);
            items[48] = new closure_4("ist\u00E0", -1, 1);
            const tmp49 = new closure_4("ist\u00E0", -1, 1);
            items[49] = new closure_4("ist\u00E8", -1, 1);
            const tmp50 = new closure_4("ist\u00E8", -1, 1);
            items[50] = new closure_4("ist\u00EC", -1, 1);
            italianStemmer.a_6 = items;
            return items;
          }
        },
        {
          key: "a_7",
          get() {
            delete r1.a_7;
            const items = [new closure_4("isca", -1, 1), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("isca", -1, 1);
            items[1] = new closure_4("enda", -1, 1);
            const tmp2 = new closure_4("enda", -1, 1);
            items[2] = new closure_4("ata", -1, 1);
            const tmp3 = new closure_4("ata", -1, 1);
            items[3] = new closure_4("ita", -1, 1);
            const tmp4 = new closure_4("ita", -1, 1);
            items[4] = new closure_4("uta", -1, 1);
            const tmp5 = new closure_4("uta", -1, 1);
            items[5] = new closure_4("ava", -1, 1);
            const tmp6 = new closure_4("ava", -1, 1);
            items[6] = new closure_4("eva", -1, 1);
            const tmp7 = new closure_4("eva", -1, 1);
            items[7] = new closure_4("iva", -1, 1);
            const tmp8 = new closure_4("iva", -1, 1);
            items[8] = new closure_4("erebbe", -1, 1);
            const tmp9 = new closure_4("erebbe", -1, 1);
            items[9] = new closure_4("irebbe", -1, 1);
            const tmp10 = new closure_4("irebbe", -1, 1);
            items[10] = new closure_4("isce", -1, 1);
            const tmp11 = new closure_4("isce", -1, 1);
            items[11] = new closure_4("ende", -1, 1);
            const tmp12 = new closure_4("ende", -1, 1);
            items[12] = new closure_4("are", -1, 1);
            const tmp13 = new closure_4("are", -1, 1);
            items[13] = new closure_4("ere", -1, 1);
            const tmp14 = new closure_4("ere", -1, 1);
            items[14] = new closure_4("ire", -1, 1);
            const tmp15 = new closure_4("ire", -1, 1);
            items[15] = new closure_4("asse", -1, 1);
            const tmp16 = new closure_4("asse", -1, 1);
            items[16] = new closure_4("ate", -1, 1);
            const tmp17 = new closure_4("ate", -1, 1);
            items[17] = new closure_4("avate", 16, 1);
            const tmp18 = new closure_4("avate", 16, 1);
            items[18] = new closure_4("evate", 16, 1);
            const tmp19 = new closure_4("evate", 16, 1);
            items[19] = new closure_4("ivate", 16, 1);
            const tmp20 = new closure_4("ivate", 16, 1);
            items[20] = new closure_4("ete", -1, 1);
            const tmp21 = new closure_4("ete", -1, 1);
            items[21] = new closure_4("erete", 20, 1);
            const tmp22 = new closure_4("erete", 20, 1);
            items[22] = new closure_4("irete", 20, 1);
            const tmp23 = new closure_4("irete", 20, 1);
            items[23] = new closure_4("ite", -1, 1);
            const tmp24 = new closure_4("ite", -1, 1);
            items[24] = new closure_4("ereste", -1, 1);
            const tmp25 = new closure_4("ereste", -1, 1);
            items[25] = new closure_4("ireste", -1, 1);
            const tmp26 = new closure_4("ireste", -1, 1);
            items[26] = new closure_4("ute", -1, 1);
            const tmp27 = new closure_4("ute", -1, 1);
            items[27] = new closure_4("erai", -1, 1);
            const tmp28 = new closure_4("erai", -1, 1);
            items[28] = new closure_4("irai", -1, 1);
            const tmp29 = new closure_4("irai", -1, 1);
            items[29] = new closure_4("isci", -1, 1);
            const tmp30 = new closure_4("isci", -1, 1);
            items[30] = new closure_4("endi", -1, 1);
            const tmp31 = new closure_4("endi", -1, 1);
            items[31] = new closure_4("erei", -1, 1);
            const tmp32 = new closure_4("erei", -1, 1);
            items[32] = new closure_4("irei", -1, 1);
            const tmp33 = new closure_4("irei", -1, 1);
            items[33] = new closure_4("assi", -1, 1);
            const tmp34 = new closure_4("assi", -1, 1);
            items[34] = new closure_4("ati", -1, 1);
            const tmp35 = new closure_4("ati", -1, 1);
            items[35] = new closure_4("iti", -1, 1);
            const tmp36 = new closure_4("iti", -1, 1);
            items[36] = new closure_4("eresti", -1, 1);
            const tmp37 = new closure_4("eresti", -1, 1);
            items[37] = new closure_4("iresti", -1, 1);
            const tmp38 = new closure_4("iresti", -1, 1);
            items[38] = new closure_4("uti", -1, 1);
            const tmp39 = new closure_4("uti", -1, 1);
            items[39] = new closure_4("avi", -1, 1);
            const tmp40 = new closure_4("avi", -1, 1);
            items[40] = new closure_4("evi", -1, 1);
            const tmp41 = new closure_4("evi", -1, 1);
            items[41] = new closure_4("ivi", -1, 1);
            const tmp42 = new closure_4("ivi", -1, 1);
            items[42] = new closure_4("isco", -1, 1);
            const tmp43 = new closure_4("isco", -1, 1);
            items[43] = new closure_4("ando", -1, 1);
            const tmp44 = new closure_4("ando", -1, 1);
            items[44] = new closure_4("endo", -1, 1);
            const tmp45 = new closure_4("endo", -1, 1);
            items[45] = new closure_4("Yamo", -1, 1);
            const tmp46 = new closure_4("Yamo", -1, 1);
            items[46] = new closure_4("iamo", -1, 1);
            const tmp47 = new closure_4("iamo", -1, 1);
            items[47] = new closure_4("avamo", -1, 1);
            const tmp48 = new closure_4("avamo", -1, 1);
            items[48] = new closure_4("evamo", -1, 1);
            const tmp49 = new closure_4("evamo", -1, 1);
            items[49] = new closure_4("ivamo", -1, 1);
            const tmp50 = new closure_4("ivamo", -1, 1);
            items[50] = new closure_4("eremo", -1, 1);
            const tmp51 = new closure_4("eremo", -1, 1);
            items[51] = new closure_4("iremo", -1, 1);
            const tmp52 = new closure_4("iremo", -1, 1);
            items[52] = new closure_4("assimo", -1, 1);
            const tmp53 = new closure_4("assimo", -1, 1);
            items[53] = new closure_4("ammo", -1, 1);
            const tmp54 = new closure_4("ammo", -1, 1);
            items[54] = new closure_4("emmo", -1, 1);
            const tmp55 = new closure_4("emmo", -1, 1);
            items[55] = new closure_4("eremmo", 54, 1);
            const tmp56 = new closure_4("eremmo", 54, 1);
            items[56] = new closure_4("iremmo", 54, 1);
            const tmp57 = new closure_4("iremmo", 54, 1);
            items[57] = new closure_4("immo", -1, 1);
            const tmp58 = new closure_4("immo", -1, 1);
            items[58] = new closure_4("ano", -1, 1);
            const tmp59 = new closure_4("ano", -1, 1);
            items[59] = new closure_4("iscano", 58, 1);
            const tmp60 = new closure_4("iscano", 58, 1);
            items[60] = new closure_4("avano", 58, 1);
            const tmp61 = new closure_4("avano", 58, 1);
            items[61] = new closure_4("evano", 58, 1);
            const tmp62 = new closure_4("evano", 58, 1);
            items[62] = new closure_4("ivano", 58, 1);
            const tmp63 = new closure_4("ivano", 58, 1);
            items[63] = new closure_4("eranno", -1, 1);
            const tmp64 = new closure_4("eranno", -1, 1);
            items[64] = new closure_4("iranno", -1, 1);
            const tmp65 = new closure_4("iranno", -1, 1);
            items[65] = new closure_4("ono", -1, 1);
            const tmp66 = new closure_4("ono", -1, 1);
            items[66] = new closure_4("iscono", 65, 1);
            const tmp67 = new closure_4("iscono", 65, 1);
            items[67] = new closure_4("arono", 65, 1);
            const tmp68 = new closure_4("arono", 65, 1);
            items[68] = new closure_4("erono", 65, 1);
            const tmp69 = new closure_4("erono", 65, 1);
            items[69] = new closure_4("irono", 65, 1);
            const tmp70 = new closure_4("irono", 65, 1);
            items[70] = new closure_4("erebbero", -1, 1);
            const tmp71 = new closure_4("erebbero", -1, 1);
            items[71] = new closure_4("irebbero", -1, 1);
            const tmp72 = new closure_4("irebbero", -1, 1);
            items[72] = new closure_4("assero", -1, 1);
            const tmp73 = new closure_4("assero", -1, 1);
            items[73] = new closure_4("essero", -1, 1);
            const tmp74 = new closure_4("essero", -1, 1);
            items[74] = new closure_4("issero", -1, 1);
            const tmp75 = new closure_4("issero", -1, 1);
            items[75] = new closure_4("ato", -1, 1);
            const tmp76 = new closure_4("ato", -1, 1);
            items[76] = new closure_4("ito", -1, 1);
            const tmp77 = new closure_4("ito", -1, 1);
            items[77] = new closure_4("uto", -1, 1);
            const tmp78 = new closure_4("uto", -1, 1);
            items[78] = new closure_4("avo", -1, 1);
            const tmp79 = new closure_4("avo", -1, 1);
            items[79] = new closure_4("evo", -1, 1);
            const tmp80 = new closure_4("evo", -1, 1);
            items[80] = new closure_4("ivo", -1, 1);
            const tmp81 = new closure_4("ivo", -1, 1);
            items[81] = new closure_4("ar", -1, 1);
            const tmp82 = new closure_4("ar", -1, 1);
            items[82] = new closure_4("ir", -1, 1);
            const tmp83 = new closure_4("ir", -1, 1);
            items[83] = new closure_4("er\u00E0", -1, 1);
            const tmp84 = new closure_4("er\u00E0", -1, 1);
            items[84] = new closure_4("ir\u00E0", -1, 1);
            const tmp85 = new closure_4("ir\u00E0", -1, 1);
            items[85] = new closure_4("er\u00F2", -1, 1);
            const tmp86 = new closure_4("er\u00F2", -1, 1);
            items[86] = new closure_4("ir\u00F2", -1, 1);
            italianStemmer.a_7 = items;
            return items;
          }
        },
        {
          key: "g_v",
          get() {
            delete r1.g_v;
            const items = [];
            italianStemmer.g_v = items;
            return items;
          }
        },
        {
          key: "g_AEIO",
          get() {
            delete r1.g_AEIO;
            const items = [];
            italianStemmer.g_AEIO = items;
            return items;
          }
        },
        {
          key: "g_CG",
          get() {
            delete r1.g_CG;
            const items = [];
            italianStemmer.g_CG = items;
            return items;
          }
        }
      ];
      callback(italianStemmer, items, items1);
      return italianStemmer;
    }(tmp3);
    let closure_19 = (arg0) => {
      function norwegianStemmer() {
        callback3(this, norwegianStemmer);
        const prototypeOf = Object.getPrototypeOf(norwegianStemmer);
        return callback2(this, prototypeOf(...arguments));
      }
      const callback = norwegianStemmer;
      _inherits(norwegianStemmer, arg0);
      let obj = {
        key: "r_mark_regions$esjava$0",
        value: function r_mark_regions$esjava$0() {
          const self = this;
          this.I_p1 = this.limit;
          const sum = this.cursor + 3;
          if (0 <= sum) {
            if (sum <= self.limit) {
              self.cursor = sum;
              self.I_x = self.cursor;
              self.cursor = tmp;
              self.cursor = self.cursor;
              while (!self.in_grouping$esjava$3(norwegianStemmer.g_v, 97, 248)) {
                if (self.cursor >= self.limit) {
                  let flag = false;
                  return false;
                } else {
                  self.cursor = self.cursor + 1;
                  // continue
                }
              }
              const cursor = self.cursor;
              while (!self.out_grouping$esjava$3(norwegianStemmer.g_v, 97, 248)) {
                if (cursor >= self.limit) {
                  let flag2 = false;
                  return false;
                } else {
                  self.cursor = self.cursor + 1;
                  // continue
                }
              }
              self.I_p1 = cursor;
              if (self.I_p1 < self.I_x) {
                self.I_p1 = self.I_x;
              }
              return true;
            }
          }
          return false;
        }
      };
      const items = [obj, , , , , , , ];
      obj = {
        key: "r_main_suffix$esjava$0",
        value: function r_main_suffix$esjava$0() {
          let limit_backward;
          const self = this;
          if (this.cursor < this.I_p1) {
            return false;
          } else {
            ({ I_p1: self.cursor, limit_backward, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp;
            self.ket = self.cursor;
            const result = self.find_among_b$esjava$1(norwegianStemmer.a_0);
            if (0 === result) {
              self.limit_backward = limit_backward;
              return false;
            } else {
              self.bra = self.cursor;
              self.limit_backward = limit_backward;
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  const result1 = self.slice_del$esjava$0();
                } else if (2 === result) {
                  const diff = self.limit - self.cursor;
                  if (!self.in_grouping_b$esjava$3(norwegianStemmer.g_s_ending, 98, 122)) {
                    self.cursor = self.limit - diff;
                    if (self.eq_s_b$esjava$1("k")) {
                      if (!self.out_grouping_b$esjava$3(norwegianStemmer.g_v, 97, 248)) {
                        return false;
                      }
                    } else {
                      return false;
                    }
                  }
                  const result2 = self.slice_del$esjava$0();
                } else if (3 === result) {
                  const result3 = self.slice_from$esjava$1("er");
                }
                return true;
              }
            }
          }
        }
      };
      items[1] = obj;
      obj = {
        key: "r_consonant_pair$esjava$0",
        value: function r_consonant_pair$esjava$0() {
          let limit_backward;
          const self = this;
          const tmp3 = this.cursor < this.I_p1;
          if (tmp3) {
            return !tmp3;
          } else {
            ({ I_p1: self.cursor, limit_backward, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp2;
            self.ket = self.cursor;
            if (0 === self.find_among_b$esjava$1(norwegianStemmer.a_1)) {
              self.limit_backward = limit_backward;
              let flag = false;
            } else {
              self.bra = self.cursor;
              self.limit_backward = limit_backward;
              self.cursor = self.limit - tmp;
              flag = !tmp5;
              if (self.cursor > self.limit_backward) {
                self.cursor = self.cursor - 1;
                self.bra = self.cursor;
                const result = self.slice_del$esjava$0();
                flag = true;
              }
            }
          }
        }
      };
      items[2] = obj;
      items[3] = {
        key: "r_other_suffix$esjava$0",
        value: function r_other_suffix$esjava$0() {
          let limit_backward;
          const self = this;
          if (this.cursor < this.I_p1) {
            return false;
          } else {
            ({ I_p1: self.cursor, limit_backward, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp;
            self.ket = self.cursor;
            const result = self.find_among_b$esjava$1(norwegianStemmer.a_2);
            if (0 === result) {
              self.limit_backward = limit_backward;
              return false;
            } else {
              self.bra = self.cursor;
              self.limit_backward = limit_backward;
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  const result1 = self.slice_del$esjava$0();
                }
                return true;
              }
            }
          }
        }
      };
      items[4] = {
        key: "stem$esjava$0",
        value: function stem$esjava$0() {
          const result = this.r_mark_regions$esjava$0();
          this.cursor = this.cursor;
          ({ cursor: this.limit_backward, limit: this.cursor } = this);
          const diff = this.limit - this.cursor;
          const result1 = this.r_main_suffix$esjava$0();
          this.cursor = this.limit - diff;
          const diff1 = this.limit - this.cursor;
          const result2 = this.r_consonant_pair$esjava$0();
          this.cursor = this.limit - diff1;
          const result3 = this.r_other_suffix$esjava$0();
          this.cursor = this.limit_backward;
          return true;
        }
      };
      items[5] = {
        key: "stem",
        value: function stem() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const stem$esjava$0 = self.stem$esjava$0;
            let applyResult = stem$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(norwegianStemmer.prototype), "stem", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[6] = {
        key: "I_x",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_x")) {
            let num = self._$esjava$I_x;
          } else {
            num = 0;
            self._$esjava$I_x = 0;
          }
          return num;
        },
        set(_$esjava$I_x) {
          this._$esjava$I_x = _$esjava$I_x;
        }
      };
      items[7] = {
        key: "I_p1",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p1")) {
            let num = self._$esjava$I_p1;
          } else {
            num = 0;
            self._$esjava$I_p1 = 0;
          }
          return num;
        },
        set(_$esjava$I_p1) {
          this._$esjava$I_p1 = _$esjava$I_p1;
        }
      };
      const items1 = [
        {
          key: "a_0",
          get() {
            delete r1.a_0;
            const items = [new closure_4("a", -1, 1), , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("a", -1, 1);
            items[1] = new closure_4("e", -1, 1);
            const tmp2 = new closure_4("e", -1, 1);
            items[2] = new closure_4("ede", 1, 1);
            const tmp3 = new closure_4("ede", 1, 1);
            items[3] = new closure_4("ande", 1, 1);
            const tmp4 = new closure_4("ande", 1, 1);
            items[4] = new closure_4("ende", 1, 1);
            const tmp5 = new closure_4("ende", 1, 1);
            items[5] = new closure_4("ane", 1, 1);
            const tmp6 = new closure_4("ane", 1, 1);
            items[6] = new closure_4("ene", 1, 1);
            const tmp7 = new closure_4("ene", 1, 1);
            items[7] = new closure_4("hetene", 6, 1);
            const tmp8 = new closure_4("hetene", 6, 1);
            items[8] = new closure_4("erte", 1, 3);
            const tmp9 = new closure_4("erte", 1, 3);
            items[9] = new closure_4("en", -1, 1);
            const tmp10 = new closure_4("en", -1, 1);
            items[10] = new closure_4("heten", 9, 1);
            const tmp11 = new closure_4("heten", 9, 1);
            items[11] = new closure_4("ar", -1, 1);
            const tmp12 = new closure_4("ar", -1, 1);
            items[12] = new closure_4("er", -1, 1);
            const tmp13 = new closure_4("er", -1, 1);
            items[13] = new closure_4("heter", 12, 1);
            const tmp14 = new closure_4("heter", 12, 1);
            items[14] = new closure_4("s", -1, 2);
            const tmp15 = new closure_4("s", -1, 2);
            items[15] = new closure_4("as", 14, 1);
            const tmp16 = new closure_4("as", 14, 1);
            items[16] = new closure_4("es", 14, 1);
            const tmp17 = new closure_4("es", 14, 1);
            items[17] = new closure_4("edes", 16, 1);
            const tmp18 = new closure_4("edes", 16, 1);
            items[18] = new closure_4("endes", 16, 1);
            const tmp19 = new closure_4("endes", 16, 1);
            items[19] = new closure_4("enes", 16, 1);
            const tmp20 = new closure_4("enes", 16, 1);
            items[20] = new closure_4("hetenes", 19, 1);
            const tmp21 = new closure_4("hetenes", 19, 1);
            items[21] = new closure_4("ens", 14, 1);
            const tmp22 = new closure_4("ens", 14, 1);
            items[22] = new closure_4("hetens", 21, 1);
            const tmp23 = new closure_4("hetens", 21, 1);
            items[23] = new closure_4("ers", 14, 1);
            const tmp24 = new closure_4("ers", 14, 1);
            items[24] = new closure_4("ets", 14, 1);
            const tmp25 = new closure_4("ets", 14, 1);
            items[25] = new closure_4("et", -1, 1);
            const tmp26 = new closure_4("et", -1, 1);
            items[26] = new closure_4("het", 25, 1);
            const tmp27 = new closure_4("het", 25, 1);
            items[27] = new closure_4("ert", -1, 3);
            const tmp28 = new closure_4("ert", -1, 3);
            items[28] = new closure_4("ast", -1, 1);
            norwegianStemmer.a_0 = items;
            return items;
          }
        },
        {
          key: "a_1",
          get() {
            delete r1.a_1;
            const items = [new closure_4("dt", -1, -1), ];
            const tmp = new closure_4("dt", -1, -1);
            items[1] = new closure_4("vt", -1, -1);
            norwegianStemmer.a_1 = items;
            return items;
          }
        },
        {
          key: "a_2",
          get() {
            delete r1.a_2;
            const items = [new closure_4("leg", -1, 1), , , , , , , , , , ];
            const tmp = new closure_4("leg", -1, 1);
            items[1] = new closure_4("eleg", 0, 1);
            const tmp2 = new closure_4("eleg", 0, 1);
            items[2] = new closure_4("ig", -1, 1);
            const tmp3 = new closure_4("ig", -1, 1);
            items[3] = new closure_4("eig", 2, 1);
            const tmp4 = new closure_4("eig", 2, 1);
            items[4] = new closure_4("lig", 2, 1);
            const tmp5 = new closure_4("lig", 2, 1);
            items[5] = new closure_4("elig", 4, 1);
            const tmp6 = new closure_4("elig", 4, 1);
            items[6] = new closure_4("els", -1, 1);
            const tmp7 = new closure_4("els", -1, 1);
            items[7] = new closure_4("lov", -1, 1);
            const tmp8 = new closure_4("lov", -1, 1);
            items[8] = new closure_4("elov", 7, 1);
            const tmp9 = new closure_4("elov", 7, 1);
            items[9] = new closure_4("slov", 7, 1);
            const tmp10 = new closure_4("slov", 7, 1);
            items[10] = new closure_4("hetslov", 9, 1);
            norwegianStemmer.a_2 = items;
            return items;
          }
        },
        {
          key: "g_v",
          get() {
            delete r1.g_v;
            const items = [];
            norwegianStemmer.g_v = items;
            return items;
          }
        },
        {
          key: "g_s_ending",
          get() {
            delete r1.g_s_ending;
            const items = [];
            norwegianStemmer.g_s_ending = items;
            return items;
          }
        }
      ];
      callback(norwegianStemmer, items, items1);
      return norwegianStemmer;
    }(tmp3);
    let closure_20 = (arg0) => {
      function porterStemmer() {
        callback3(this, porterStemmer);
        const prototypeOf = Object.getPrototypeOf(porterStemmer);
        return callback2(this, prototypeOf(...arguments));
      }
      const callback = porterStemmer;
      _inherits(porterStemmer, arg0);
      let obj = {
        key: "r_shortv$esjava$0",
        value: function r_shortv$esjava$0() {
          const self = this;
          const tmp = !this.out_grouping_b$esjava$3(porterStemmer.g_v_WXY, 89, 121);
          let tmp2 = !tmp;
          if (!tmp) {
            const tmp4 = !self.in_grouping_b$esjava$3(porterStemmer.g_v, 97, 121);
            let result = !tmp4;
            if (!tmp4) {
              result = self.out_grouping_b$esjava$3(porterStemmer.g_v, 97, 121);
            }
            tmp2 = result;
          }
          return tmp2;
        }
      };
      const items = [obj, , , , , , , , , , , , , , , ];
      obj = {
        key: "r_R1$esjava$0",
        value: function r_R1$esjava$0() {
          return this.I_p1 <= this.cursor;
        }
      };
      items[1] = obj;
      obj = {
        key: "r_R2$esjava$0",
        value: function r_R2$esjava$0() {
          return this.I_p2 <= this.cursor;
        }
      };
      items[2] = obj;
      items[3] = {
        key: "r_Step_1a$esjava$0",
        value: function r_Step_1a$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(porterStemmer.a_0);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                const result1 = self.slice_from$esjava$1("ss");
              } else if (2 === result) {
                const result2 = self.slice_from$esjava$1("i");
              } else if (3 === result) {
                const result3 = self.slice_del$esjava$0();
              }
              return true;
            }
          }
        }
      };
      items[4] = {
        key: "r_Step_1b$esjava$0",
        value: function r_Step_1b$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(porterStemmer.a_2);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.r_R1$esjava$0()) {
                  const result1 = self.slice_from$esjava$1("ee");
                } else {
                  return false;
                }
              } else if (2 === result) {
                const diff = self.limit - self.cursor;
                while (!self.in_grouping_b$esjava$3(porterStemmer.g_v, 97, 121)) {
                  if (self.cursor <= self.limit_backward) {
                    let flag = false;
                    return false;
                  } else {
                    self.cursor = self.cursor - 1;
                    // continue
                  }
                }
                self.cursor = self.limit - diff;
                const result2 = self.slice_del$esjava$0();
                const diff1 = self.limit - self.cursor;
                const result3 = self.find_among_b$esjava$1(porterStemmer.a_1);
                if (0 === result3) {
                  return false;
                } else {
                  self.cursor = self.limit - diff1;
                  if (0 === result3) {
                    return false;
                  } else if (1 === result3) {
                    const result4 = self.insert$esjava$3(self.cursor, self.cursor, "e");
                    self.cursor = self.cursor;
                  } else if (2 === result3) {
                    self.ket = self.cursor;
                    if (self.cursor <= self.limit_backward) {
                      return false;
                    } else {
                      self.cursor = self.cursor - 1;
                      self.bra = self.cursor;
                      const result5 = self.slice_del$esjava$0();
                    }
                  } else if (3 === result3) {
                    if (self.cursor !== self.I_p1) {
                      return false;
                    } else {
                      const diff2 = self.limit - self.cursor;
                      if (self.r_shortv$esjava$0()) {
                        self.cursor = self.limit - diff2;
                        const result6 = self.insert$esjava$3(self.cursor, self.cursor, "e");
                        self.cursor = self.cursor;
                      } else {
                        return false;
                      }
                    }
                  }
                }
              }
              return true;
            }
          }
        }
      };
      items[5] = {
        key: "r_Step_1c$esjava$0",
        value: function r_Step_1c$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const diff = this.limit - this.cursor;
          if (!this.eq_s_b$esjava$1("y")) {
            self.cursor = self.limit - diff;
            if (!self.eq_s_b$esjava$1("Y")) {
              return false;
            }
          }
          self.bra = self.cursor;
          while (!self.in_grouping_b$esjava$3(porterStemmer.g_v, 97, 121)) {
            if (self.cursor <= self.limit_backward) {
              let flag2 = false;
              return false;
            } else {
              self.cursor = self.cursor - 1;
              // continue
            }
          }
          const result = self.slice_from$esjava$1("i");
          return true;
        }
      };
      items[6] = {
        key: "r_Step_2$esjava$0",
        value: function r_Step_2$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          if (0 === this.find_among_b$esjava$1(porterStemmer.a_3)) {
            return false;
          } else {
            self.bra = self.cursor;
            if (self.r_R1$esjava$0()) {
              const result = self.slice_from$esjava$1("ble");
            } else {
              return false;
            }
          }
        }
      };
      items[7] = {
        key: "r_Step_3$esjava$0",
        value: function r_Step_3$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(porterStemmer.a_4);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (self.r_R1$esjava$0()) {
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  const result1 = self.slice_from$esjava$1("al");
                } else if (2 === result) {
                  const result2 = self.slice_from$esjava$1("ic");
                } else if (3 === result) {
                  const result3 = self.slice_del$esjava$0();
                }
                return true;
              }
            } else {
              return false;
            }
          }
        }
      };
      items[8] = {
        key: "r_Step_4$esjava$0",
        value: function r_Step_4$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(porterStemmer.a_5);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (self.r_R2$esjava$0()) {
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  const result1 = self.slice_del$esjava$0();
                } else if (2 === result) {
                  const diff = self.limit - self.cursor;
                  if (!self.eq_s_b$esjava$1("s")) {
                    self.cursor = self.limit - diff;
                    if (!self.eq_s_b$esjava$1("t")) {
                      return false;
                    }
                  }
                  const result2 = self.slice_del$esjava$0();
                }
                return true;
              }
            } else {
              return false;
            }
          }
        }
      };
      items[9] = {
        key: "r_Step_5a$esjava$0",
        value: function r_Step_5a$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          if (this.eq_s_b$esjava$1("e")) {
            self.bra = self.cursor;
            const diff = self.limit - self.cursor;
            if (!self.r_R2$esjava$0()) {
              self.cursor = self.limit - diff;
              if (self.r_R1$esjava$0()) {
                const diff1 = self.limit - self.cursor;
                if (self.r_shortv$esjava$0()) {
                  return false;
                } else {
                  self.cursor = self.limit - diff1;
                }
              } else {
                return false;
              }
            }
            const result = self.slice_del$esjava$0();
            return true;
          } else {
            return false;
          }
        }
      };
      items[10] = {
        key: "r_Step_5b$esjava$0",
        value: function r_Step_5b$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const tmp = !this.eq_s_b$esjava$1("l");
          let tmp2 = !tmp;
          if (!tmp) {
            self.bra = self.cursor;
            const tmp3 = !self.r_R2$esjava$0();
            let tmp4 = !tmp3;
            if (!tmp3) {
              const tmp5 = !self.eq_s_b$esjava$1("l");
              let flag = !tmp5;
              if (!tmp5) {
                const result = self.slice_del$esjava$0();
                flag = true;
              }
              tmp4 = flag;
            }
            tmp2 = tmp4;
          }
          return tmp2;
        }
      };
      items[11] = {
        key: "stem$esjava$0",
        value: function stem$esjava$0() {
          let cursor3;
          let cursor4;
          const self = this;
          this.B_Y_found = false;
          this.bra = this.cursor;
          if (this.eq_s$esjava$1("y")) {
            self.ket = self.cursor;
            const result = self.slice_from$esjava$1("Y");
            self.B_Y_found = true;
          }
          self.cursor = this.cursor;
          while (true) {
            while (true) {
              let tmp5 = porterStemmer;
              if (self.in_grouping$esjava$3(porterStemmer.g_v, 97, 121)) {
                self.bra = self.cursor;
                if (self.eq_s$esjava$1("y")) {
                  break;
                }
              }
              self.cursor = self.cursor;
              if (self.cursor >= self.limit) {
                self.cursor = tmp3;
                self.cursor = tmp2;
                ({ limit: self.I_p1, limit: self.I_p2 } = self);
                let tmp7 = porterStemmer;
                while (!self.in_grouping$esjava$3(porterStemmer.g_v, 97, 121)) {
                  if (self.cursor < self.limit) {
                    self.cursor = self.cursor + 1;
                    // continue
                  }
                  self.cursor = tmp6;
                  ({ cursor: self.limit_backward, limit: self.cursor } = self);
                  let diff = self.limit - self.cursor;
                  let result1 = self.r_Step_1a$esjava$0();
                  self.cursor = self.limit - diff;
                  let diff1 = self.limit - self.cursor;
                  let result2 = self.r_Step_1b$esjava$0();
                  self.cursor = self.limit - diff1;
                  let diff2 = self.limit - self.cursor;
                  let result3 = self.r_Step_1c$esjava$0();
                  self.cursor = self.limit - diff2;
                  let diff3 = self.limit - self.cursor;
                  let result4 = self.r_Step_2$esjava$0();
                  self.cursor = self.limit - diff3;
                  let diff4 = self.limit - self.cursor;
                  let result5 = self.r_Step_3$esjava$0();
                  self.cursor = self.limit - diff4;
                  let diff5 = self.limit - self.cursor;
                  let result6 = self.r_Step_4$esjava$0();
                  self.cursor = self.limit - diff5;
                  let diff6 = self.limit - self.cursor;
                  let result7 = self.r_Step_5a$esjava$0();
                  self.cursor = self.limit - diff6;
                  let diff7 = self.limit - self.cursor;
                  let result8 = self.r_Step_5b$esjava$0();
                  self.cursor = self.limit - diff7;
                  ({ limit_backward: self.cursor, cursor: cursor3 } = self);
                  if (self.B_Y_found) {
                    while (true) {
                      ({ cursor: cursor4, cursor: self.bra } = self);
                      while (!self.eq_s$esjava$1("Y")) {
                        self.cursor = cursor4;
                        if (self.cursor >= self.limit) {
                          self.cursor = tmp27;
                        } else {
                          self.cursor = self.cursor + 1;
                          // continue
                        }
                      }
                      self.ket = self.cursor;
                      self.cursor = cursor4;
                      let result9 = self.slice_from$esjava$1("y");
                      // continue
                    }
                  }
                  self.cursor = cursor3;
                  return true;
                }
                let tmp8 = porterStemmer;
                let cursor = self.cursor;
                while (!self.out_grouping$esjava$3(porterStemmer.g_v, 97, 121)) {
                  if (cursor < self.limit) {
                    self.cursor = self.cursor + 1;
                    // continue
                  }
                }
                self.I_p1 = cursor;
                let tmp9 = porterStemmer;
                while (!self.in_grouping$esjava$3(porterStemmer.g_v, 97, 121)) {
                  if (self.cursor < self.limit) {
                    self.cursor = self.cursor + 1;
                    // continue
                  }
                }
                let tmp10 = porterStemmer;
                let cursor2 = self.cursor;
                while (!self.out_grouping$esjava$3(porterStemmer.g_v, 97, 121)) {
                  if (cursor2 < self.limit) {
                    self.cursor = self.cursor + 1;
                    // continue
                  }
                }
                self.I_p2 = cursor2;
              } else {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            self.ket = self.cursor;
            self.cursor = tmp4;
            let result10 = self.slice_from$esjava$1("Y");
            self.B_Y_found = true;
            // continue
          }
        }
      };
      items[12] = {
        key: "stem",
        value: function stem() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const stem$esjava$0 = self.stem$esjava$0;
            let applyResult = stem$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(porterStemmer.prototype), "stem", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[13] = {
        key: "B_Y_found",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$B_Y_found")) {
            let flag = self._$esjava$B_Y_found;
          } else {
            flag = false;
            self._$esjava$B_Y_found = false;
          }
          return flag;
        },
        set(_$esjava$B_Y_found) {
          this._$esjava$B_Y_found = _$esjava$B_Y_found;
        }
      };
      items[14] = {
        key: "I_p2",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p2")) {
            let num = self._$esjava$I_p2;
          } else {
            num = 0;
            self._$esjava$I_p2 = 0;
          }
          return num;
        },
        set(_$esjava$I_p2) {
          this._$esjava$I_p2 = _$esjava$I_p2;
        }
      };
      items[15] = {
        key: "I_p1",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p1")) {
            let num = self._$esjava$I_p1;
          } else {
            num = 0;
            self._$esjava$I_p1 = 0;
          }
          return num;
        },
        set(_$esjava$I_p1) {
          this._$esjava$I_p1 = _$esjava$I_p1;
        }
      };
      const items1 = [
        {
          key: "a_0",
          get() {
            delete r1.a_0;
            const items = [new closure_4("s", -1, 3), , , ];
            const tmp = new closure_4("s", -1, 3);
            items[1] = new closure_4("ies", 0, 2);
            const tmp2 = new closure_4("ies", 0, 2);
            items[2] = new closure_4("sses", 0, 1);
            const tmp3 = new closure_4("sses", 0, 1);
            items[3] = new closure_4("ss", 0, -1);
            porterStemmer.a_0 = items;
            return items;
          }
        },
        {
          key: "a_1",
          get() {
            delete r1.a_1;
            const items = [new closure_4("", -1, 3), , , , , , , , , , , , ];
            const tmp = new closure_4("", -1, 3);
            items[1] = new closure_4("bb", 0, 2);
            const tmp2 = new closure_4("bb", 0, 2);
            items[2] = new closure_4("dd", 0, 2);
            const tmp3 = new closure_4("dd", 0, 2);
            items[3] = new closure_4("ff", 0, 2);
            const tmp4 = new closure_4("ff", 0, 2);
            items[4] = new closure_4("gg", 0, 2);
            const tmp5 = new closure_4("gg", 0, 2);
            items[5] = new closure_4("bl", 0, 1);
            const tmp6 = new closure_4("bl", 0, 1);
            items[6] = new closure_4("mm", 0, 2);
            const tmp7 = new closure_4("mm", 0, 2);
            items[7] = new closure_4("nn", 0, 2);
            const tmp8 = new closure_4("nn", 0, 2);
            items[8] = new closure_4("pp", 0, 2);
            const tmp9 = new closure_4("pp", 0, 2);
            items[9] = new closure_4("rr", 0, 2);
            const tmp10 = new closure_4("rr", 0, 2);
            items[10] = new closure_4("at", 0, 1);
            const tmp11 = new closure_4("at", 0, 1);
            items[11] = new closure_4("tt", 0, 2);
            const tmp12 = new closure_4("tt", 0, 2);
            items[12] = new closure_4("iz", 0, 1);
            porterStemmer.a_1 = items;
            return items;
          }
        },
        {
          key: "a_2",
          get() {
            delete r1.a_2;
            const items = [new closure_4("ed", -1, 2), , ];
            const tmp = new closure_4("ed", -1, 2);
            items[1] = new closure_4("eed", 0, 1);
            const tmp2 = new closure_4("eed", 0, 1);
            items[2] = new closure_4("ing", -1, 2);
            porterStemmer.a_2 = items;
            return items;
          }
        },
        {
          key: "a_3",
          get() {
            delete r1.a_3;
            const items = [new closure_4("anci", -1, 3), , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("anci", -1, 3);
            items[1] = new closure_4("enci", -1, 2);
            const tmp2 = new closure_4("enci", -1, 2);
            items[2] = new closure_4("abli", -1, 4);
            const tmp3 = new closure_4("abli", -1, 4);
            items[3] = new closure_4("eli", -1, 6);
            const tmp4 = new closure_4("eli", -1, 6);
            items[4] = new closure_4("alli", -1, 9);
            const tmp5 = new closure_4("alli", -1, 9);
            items[5] = new closure_4("ousli", -1, 12);
            const tmp6 = new closure_4("ousli", -1, 12);
            items[6] = new closure_4("entli", -1, 5);
            const tmp7 = new closure_4("entli", -1, 5);
            items[7] = new closure_4("aliti", -1, 10);
            const tmp8 = new closure_4("aliti", -1, 10);
            items[8] = new closure_4("biliti", -1, 14);
            const tmp9 = new closure_4("biliti", -1, 14);
            items[9] = new closure_4("iviti", -1, 13);
            const tmp10 = new closure_4("iviti", -1, 13);
            items[10] = new closure_4("tional", -1, 1);
            const tmp11 = new closure_4("tional", -1, 1);
            items[11] = new closure_4("ational", 10, 8);
            const tmp12 = new closure_4("ational", 10, 8);
            items[12] = new closure_4("alism", -1, 10);
            const tmp13 = new closure_4("alism", -1, 10);
            items[13] = new closure_4("ation", -1, 8);
            const tmp14 = new closure_4("ation", -1, 8);
            items[14] = new closure_4("ization", 13, 7);
            const tmp15 = new closure_4("ization", 13, 7);
            items[15] = new closure_4("izer", -1, 7);
            const tmp16 = new closure_4("izer", -1, 7);
            items[16] = new closure_4("ator", -1, 8);
            const tmp17 = new closure_4("ator", -1, 8);
            items[17] = new closure_4("iveness", -1, 13);
            const tmp18 = new closure_4("iveness", -1, 13);
            items[18] = new closure_4("fulness", -1, 11);
            const tmp19 = new closure_4("fulness", -1, 11);
            items[19] = new closure_4("ousness", -1, 12);
            porterStemmer.a_3 = items;
            return items;
          }
        },
        {
          key: "a_4",
          get() {
            delete r1.a_4;
            const items = [new closure_4("icate", -1, 2), , , , , , ];
            const tmp = new closure_4("icate", -1, 2);
            items[1] = new closure_4("ative", -1, 3);
            const tmp2 = new closure_4("ative", -1, 3);
            items[2] = new closure_4("alize", -1, 1);
            const tmp3 = new closure_4("alize", -1, 1);
            items[3] = new closure_4("iciti", -1, 2);
            const tmp4 = new closure_4("iciti", -1, 2);
            items[4] = new closure_4("ical", -1, 2);
            const tmp5 = new closure_4("ical", -1, 2);
            items[5] = new closure_4("ful", -1, 3);
            const tmp6 = new closure_4("ful", -1, 3);
            items[6] = new closure_4("ness", -1, 3);
            porterStemmer.a_4 = items;
            return items;
          }
        },
        {
          key: "a_5",
          get() {
            delete r1.a_5;
            const items = [new closure_4("ic", -1, 1), , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("ic", -1, 1);
            items[1] = new closure_4("ance", -1, 1);
            const tmp2 = new closure_4("ance", -1, 1);
            items[2] = new closure_4("ence", -1, 1);
            const tmp3 = new closure_4("ence", -1, 1);
            items[3] = new closure_4("able", -1, 1);
            const tmp4 = new closure_4("able", -1, 1);
            items[4] = new closure_4("ible", -1, 1);
            const tmp5 = new closure_4("ible", -1, 1);
            items[5] = new closure_4("ate", -1, 1);
            const tmp6 = new closure_4("ate", -1, 1);
            items[6] = new closure_4("ive", -1, 1);
            const tmp7 = new closure_4("ive", -1, 1);
            items[7] = new closure_4("ize", -1, 1);
            const tmp8 = new closure_4("ize", -1, 1);
            items[8] = new closure_4("iti", -1, 1);
            const tmp9 = new closure_4("iti", -1, 1);
            items[9] = new closure_4("al", -1, 1);
            const tmp10 = new closure_4("al", -1, 1);
            items[10] = new closure_4("ism", -1, 1);
            const tmp11 = new closure_4("ism", -1, 1);
            items[11] = new closure_4("ion", -1, 2);
            const tmp12 = new closure_4("ion", -1, 2);
            items[12] = new closure_4("er", -1, 1);
            const tmp13 = new closure_4("er", -1, 1);
            items[13] = new closure_4("ous", -1, 1);
            const tmp14 = new closure_4("ous", -1, 1);
            items[14] = new closure_4("ant", -1, 1);
            const tmp15 = new closure_4("ant", -1, 1);
            items[15] = new closure_4("ent", -1, 1);
            const tmp16 = new closure_4("ent", -1, 1);
            items[16] = new closure_4("ment", 15, 1);
            const tmp17 = new closure_4("ment", 15, 1);
            items[17] = new closure_4("ement", 16, 1);
            const tmp18 = new closure_4("ement", 16, 1);
            items[18] = new closure_4("ou", -1, 1);
            porterStemmer.a_5 = items;
            return items;
          }
        },
        {
          key: "g_v",
          get() {
            delete r1.g_v;
            const items = [];
            porterStemmer.g_v = items;
            return items;
          }
        },
        {
          key: "g_v_WXY",
          get() {
            delete r1.g_v_WXY;
            const items = [-246129420478706060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001734758249845244, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003344150582518812, -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000019624595712154794, -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000039241445694749585];
            porterStemmer.g_v_WXY = items;
            return items;
          }
        }
      ];
      callback(porterStemmer, items, items1);
      return porterStemmer;
    }(tmp3);
    let closure_21 = (arg0) => {
      function portugueseStemmer() {
        callback3(this, portugueseStemmer);
        const prototypeOf = Object.getPrototypeOf(portugueseStemmer);
        return callback2(this, prototypeOf(...arguments));
      }
      const callback = portugueseStemmer;
      _inherits(portugueseStemmer, arg0);
      let obj = {
        key: "r_prelude$esjava$0",
        value: function r_prelude$esjava$0() {
          const self = this;
          self.bra = self.cursor;
          const result = self.find_among$esjava$1(portugueseStemmer.a_0);
          while (0 !== result) {
            self.ket = self.cursor;
            if (0 === result) {
              break;
            } else {
              if (1 === result) {
                let result1 = self.slice_from$esjava$1("a~");
                // continue
              } else {
                if (2 === result) {
                  let result2 = self.slice_from$esjava$1("o~");
                  // continue
                } else {
                  if (3 !== result) {
                    continue;
                  } else if (self.cursor >= self.limit) {
                    break;
                  } else {
                    self.cursor = self.cursor + 1;
                    // continue
                  }
                  self.cursor = tmp;
                  let flag = true;
                  return true;
                }
                continue;
              }
              continue;
            }
          }
        }
      };
      const items = [obj, , , , , , , , , , , , , , ];
      obj = {
        key: "r_mark_regions$esjava$0",
        value: function r_mark_regions$esjava$0() {
          let cursor;
          let cursor2;
          const self = this;
          ({ limit: this.I_pV, limit: this.I_p1, limit: this.I_p2 } = this);
          ({ cursor, cursor: cursor2 } = this);
          if (this.in_grouping$esjava$3(portugueseStemmer.g_v, 97, 250)) {
            if (!self.out_grouping$esjava$3(portugueseStemmer.g_v, 97, 250)) {
              self.cursor = self.cursor;
              if (self.in_grouping$esjava$3(portugueseStemmer.g_v, 97, 250)) {
                while (!self.out_grouping$esjava$3(portugueseStemmer.g_v, 97, 250)) {
                  if (self.cursor < self.limit) {
                    self.cursor = self.cursor + 1;
                    // continue
                  }
                  break;
                }
              }
            } else {
              while (!self.in_grouping$esjava$3(portugueseStemmer.g_v, 97, 250)) {
                if (self.cursor < self.limit) {
                  self.cursor = self.cursor + 1;
                  // continue
                }
                break;
              }
            }
            self.I_pV = self.cursor;
            self.cursor = cursor;
            while (!self.in_grouping$esjava$3(portugueseStemmer.g_v, 97, 250)) {
              if (self.cursor < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
              self.cursor = tmp8;
              let flag = true;
              return true;
            }
            const cursor3 = self.cursor;
            while (!self.out_grouping$esjava$3(portugueseStemmer.g_v, 97, 250)) {
              if (cursor3 < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            self.I_p1 = cursor3;
            while (!self.in_grouping$esjava$3(portugueseStemmer.g_v, 97, 250)) {
              if (self.cursor < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            const cursor4 = self.cursor;
            while (!self.out_grouping$esjava$3(portugueseStemmer.g_v, 97, 250)) {
              if (cursor4 < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            self.I_p2 = cursor4;
          }
          self.cursor = cursor2;
          if (self.out_grouping$esjava$3(portugueseStemmer.g_v, 97, 250)) {
            if (!self.out_grouping$esjava$3(portugueseStemmer.g_v, 97, 250)) {
              self.cursor = self.cursor;
              if (self.in_grouping$esjava$3(portugueseStemmer.g_v, 97, 250)) {
                if (self.cursor < self.limit) {
                  self.cursor = self.cursor + 1;
                }
              }
            } else {
              while (!self.in_grouping$esjava$3(portugueseStemmer.g_v, 97, 250)) {
                if (self.cursor < self.limit) {
                  self.cursor = self.cursor + 1;
                  // continue
                }
                break;
              }
            }
          }
        }
      };
      items[1] = obj;
      obj = {
        key: "r_postlude$esjava$0",
        value: function r_postlude$esjava$0() {
          const self = this;
          self.bra = self.cursor;
          const result = self.find_among$esjava$1(portugueseStemmer.a_1);
          while (0 !== result) {
            self.ket = self.cursor;
            if (0 === result) {
              break;
            } else {
              if (1 === result) {
                let result1 = self.slice_from$esjava$1("\u00E3");
                // continue
              } else {
                if (2 === result) {
                  let result2 = self.slice_from$esjava$1("\u00F5");
                  // continue
                } else {
                  if (3 !== result) {
                    continue;
                  } else if (self.cursor >= self.limit) {
                    break;
                  } else {
                    self.cursor = self.cursor + 1;
                    // continue
                  }
                  self.cursor = tmp;
                  let flag = true;
                  return true;
                }
                continue;
              }
              continue;
            }
          }
        }
      };
      items[2] = obj;
      items[3] = {
        key: "r_RV$esjava$0",
        value: function r_RV$esjava$0() {
          return this.I_pV <= this.cursor;
        }
      };
      items[4] = {
        key: "r_R1$esjava$0",
        value: function r_R1$esjava$0() {
          return this.I_p1 <= this.cursor;
        }
      };
      items[5] = {
        key: "r_R2$esjava$0",
        value: function r_R2$esjava$0() {
          return this.I_p2 <= this.cursor;
        }
      };
      items[6] = {
        key: "r_standard_suffix$esjava$0",
        value: function r_standard_suffix$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          if (0 === this.find_among_b$esjava$1(portugueseStemmer.a_5)) {
            return false;
          } else if (self.r_RV$esjava$0()) {
            if (self.eq_s_b$esjava$1("e")) {
              const result = self.slice_from$esjava$1("ir");
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
      };
      items[7] = {
        key: "r_verb_suffix$esjava$0",
        value: function r_verb_suffix$esjava$0() {
          let limit_backward;
          const self = this;
          if (this.cursor < this.I_pV) {
            return false;
          } else {
            ({ I_pV: self.cursor, limit_backward, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp;
            self.ket = self.cursor;
            const result = self.find_among_b$esjava$1(portugueseStemmer.a_6);
            if (0 === result) {
              self.limit_backward = limit_backward;
              return false;
            } else {
              self.bra = self.cursor;
              if (0 === result) {
                self.limit_backward = limit_backward;
                return false;
              } else {
                if (1 === result) {
                  const result1 = self.slice_del$esjava$0();
                }
                self.limit_backward = limit_backward;
                return true;
              }
            }
          }
        }
      };
      items[8] = {
        key: "r_residual_suffix$esjava$0",
        value: function r_residual_suffix$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(portugueseStemmer.a_7);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.r_RV$esjava$0()) {
                  const result1 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              }
              return true;
            }
          }
        }
      };
      items[9] = {
        key: "r_residual_form$esjava$0",
        value: function r_residual_form$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(portugueseStemmer.a_8);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.r_RV$esjava$0()) {
                  const result1 = self.slice_del$esjava$0();
                  self.ket = self.cursor;
                  const diff = self.limit - self.cursor;
                  if (self.eq_s_b$esjava$1("u")) {
                    self.bra = self.cursor;
                    const diff1 = self.limit - self.cursor;
                    if (self.eq_s_b$esjava$1("g")) {
                      self.cursor = self.limit - diff1;
                    }
                    if (self.r_RV$esjava$0()) {
                      const result2 = self.slice_del$esjava$0();
                    } else {
                      return false;
                    }
                  }
                  self.cursor = self.limit - diff;
                  if (self.eq_s_b$esjava$1("i")) {
                    self.bra = self.cursor;
                    const diff2 = self.limit - self.cursor;
                    if (self.eq_s_b$esjava$1("c")) {
                      self.cursor = self.limit - diff2;
                    } else {
                      return false;
                    }
                  } else {
                    return false;
                  }
                } else {
                  return false;
                }
              } else if (2 === result) {
                const result3 = self.slice_from$esjava$1("c");
              }
              return true;
            }
          }
        }
      };
      items[10] = {
        key: "stem$esjava$0",
        value: function stem$esjava$0() {
          let cursor;
          const self = this;
          const result = this.r_prelude$esjava$0();
          this.cursor = this.cursor;
          const result1 = this.r_mark_regions$esjava$0();
          this.cursor = this.cursor;
          ({ cursor: this.limit_backward, limit: this.cursor } = this);
          const diff = this.limit - this.cursor;
          const diff1 = this.limit - this.cursor;
          const diff2 = this.limit - this.cursor;
          const diff3 = this.limit - this.cursor;
          if (!this.r_standard_suffix$esjava$0()) {
            self.cursor = self.limit - diff3;
            if (!self.r_verb_suffix$esjava$0()) {
              self.cursor = self.limit - diff1;
              const result2 = self.r_residual_suffix$esjava$0();
            }
            self.cursor = self.limit - diff;
            const diff4 = self.limit - self.cursor;
            const result3 = self.r_residual_form$esjava$0();
            self.cursor = self.limit - diff4;
            ({ limit_backward: self.cursor, cursor } = self);
            const result4 = self.r_postlude$esjava$0();
            self.cursor = cursor;
            return true;
          }
          self.cursor = self.limit - diff2;
          self.ket = self.cursor;
          const diff5 = self.limit - self.cursor;
          if (self.eq_s_b$esjava$1("i")) {
            self.bra = self.cursor;
            const diff6 = self.limit - self.cursor;
            if (self.eq_s_b$esjava$1("c")) {
              self.cursor = self.limit - diff6;
              if (self.r_RV$esjava$0()) {
                const result5 = self.slice_del$esjava$0();
              }
            }
          }
          self.cursor = self.limit - diff5;
        }
      };
      items[11] = {
        key: "stem",
        value: function stem() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const stem$esjava$0 = self.stem$esjava$0;
            let applyResult = stem$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(portugueseStemmer.prototype), "stem", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[12] = {
        key: "I_p2",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p2")) {
            let num = self._$esjava$I_p2;
          } else {
            num = 0;
            self._$esjava$I_p2 = 0;
          }
          return num;
        },
        set(_$esjava$I_p2) {
          this._$esjava$I_p2 = _$esjava$I_p2;
        }
      };
      items[13] = {
        key: "I_p1",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p1")) {
            let num = self._$esjava$I_p1;
          } else {
            num = 0;
            self._$esjava$I_p1 = 0;
          }
          return num;
        },
        set(_$esjava$I_p1) {
          this._$esjava$I_p1 = _$esjava$I_p1;
        }
      };
      items[14] = {
        key: "I_pV",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_pV")) {
            let num = self._$esjava$I_pV;
          } else {
            num = 0;
            self._$esjava$I_pV = 0;
          }
          return num;
        },
        set(_$esjava$I_pV) {
          this._$esjava$I_pV = _$esjava$I_pV;
        }
      };
      const items1 = [
        {
          key: "a_0",
          get() {
            delete r1.a_0;
            const items = [new closure_4("", -1, 3), , ];
            const tmp = new closure_4("", -1, 3);
            items[1] = new closure_4("\u00E3", 0, 1);
            const tmp2 = new closure_4("\u00E3", 0, 1);
            items[2] = new closure_4("\u00F5", 0, 2);
            portugueseStemmer.a_0 = items;
            return items;
          }
        },
        {
          key: "a_1",
          get() {
            delete r1.a_1;
            const items = [new closure_4("", -1, 3), , ];
            const tmp = new closure_4("", -1, 3);
            items[1] = new closure_4("a~", 0, 1);
            const tmp2 = new closure_4("a~", 0, 1);
            items[2] = new closure_4("o~", 0, 2);
            portugueseStemmer.a_1 = items;
            return items;
          }
        },
        {
          key: "a_2",
          get() {
            delete r1.a_2;
            const items = [new closure_4("ic", -1, -1), , , ];
            const tmp = new closure_4("ic", -1, -1);
            items[1] = new closure_4("ad", -1, -1);
            const tmp2 = new closure_4("ad", -1, -1);
            items[2] = new closure_4("os", -1, -1);
            const tmp3 = new closure_4("os", -1, -1);
            items[3] = new closure_4("iv", -1, 1);
            portugueseStemmer.a_2 = items;
            return items;
          }
        },
        {
          key: "a_3",
          get() {
            delete r1.a_3;
            const items = [new closure_4("ante", -1, 1), , ];
            const tmp = new closure_4("ante", -1, 1);
            items[1] = new closure_4("avel", -1, 1);
            const tmp2 = new closure_4("avel", -1, 1);
            items[2] = new closure_4("\u00EDvel", -1, 1);
            portugueseStemmer.a_3 = items;
            return items;
          }
        },
        {
          key: "a_4",
          get() {
            delete r1.a_4;
            const items = [new closure_4("ic", -1, 1), , ];
            const tmp = new closure_4("ic", -1, 1);
            items[1] = new closure_4("abil", -1, 1);
            const tmp2 = new closure_4("abil", -1, 1);
            items[2] = new closure_4("iv", -1, 1);
            portugueseStemmer.a_4 = items;
            return items;
          }
        },
        {
          key: "a_5",
          get() {
            delete r1.a_5;
            const items = [new closure_4("ica", -1, 1), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("ica", -1, 1);
            items[1] = new closure_4("\u00E2ncia", -1, 1);
            const tmp2 = new closure_4("\u00E2ncia", -1, 1);
            items[2] = new closure_4("\u00EAncia", -1, 4);
            const tmp3 = new closure_4("\u00EAncia", -1, 4);
            items[3] = new closure_4("logia", -1, 2);
            const tmp4 = new closure_4("logia", -1, 2);
            items[4] = new closure_4("ira", -1, 9);
            const tmp5 = new closure_4("ira", -1, 9);
            items[5] = new closure_4("adora", -1, 1);
            const tmp6 = new closure_4("adora", -1, 1);
            items[6] = new closure_4("osa", -1, 1);
            const tmp7 = new closure_4("osa", -1, 1);
            items[7] = new closure_4("ista", -1, 1);
            const tmp8 = new closure_4("ista", -1, 1);
            items[8] = new closure_4("iva", -1, 8);
            const tmp9 = new closure_4("iva", -1, 8);
            items[9] = new closure_4("eza", -1, 1);
            const tmp10 = new closure_4("eza", -1, 1);
            items[10] = new closure_4("idade", -1, 7);
            const tmp11 = new closure_4("idade", -1, 7);
            items[11] = new closure_4("ante", -1, 1);
            const tmp12 = new closure_4("ante", -1, 1);
            items[12] = new closure_4("mente", -1, 6);
            const tmp13 = new closure_4("mente", -1, 6);
            items[13] = new closure_4("amente", 12, 5);
            const tmp14 = new closure_4("amente", 12, 5);
            items[14] = new closure_4("\u00E1vel", -1, 1);
            const tmp15 = new closure_4("\u00E1vel", -1, 1);
            items[15] = new closure_4("\u00EDvel", -1, 1);
            const tmp16 = new closure_4("\u00EDvel", -1, 1);
            items[16] = new closure_4("ico", -1, 1);
            const tmp17 = new closure_4("ico", -1, 1);
            items[17] = new closure_4("ismo", -1, 1);
            const tmp18 = new closure_4("ismo", -1, 1);
            items[18] = new closure_4("oso", -1, 1);
            const tmp19 = new closure_4("oso", -1, 1);
            items[19] = new closure_4("amento", -1, 1);
            const tmp20 = new closure_4("amento", -1, 1);
            items[20] = new closure_4("imento", -1, 1);
            const tmp21 = new closure_4("imento", -1, 1);
            items[21] = new closure_4("ivo", -1, 8);
            const tmp22 = new closure_4("ivo", -1, 8);
            items[22] = new closure_4("a\u00E7a~o", -1, 1);
            const tmp23 = new closure_4("a\u00E7a~o", -1, 1);
            items[23] = new closure_4("u\u00E7a~o", -1, 3);
            const tmp24 = new closure_4("u\u00E7a~o", -1, 3);
            items[24] = new closure_4("ador", -1, 1);
            const tmp25 = new closure_4("ador", -1, 1);
            items[25] = new closure_4("icas", -1, 1);
            const tmp26 = new closure_4("icas", -1, 1);
            items[26] = new closure_4("\u00EAncias", -1, 4);
            const tmp27 = new closure_4("\u00EAncias", -1, 4);
            items[27] = new closure_4("logias", -1, 2);
            const tmp28 = new closure_4("logias", -1, 2);
            items[28] = new closure_4("iras", -1, 9);
            const tmp29 = new closure_4("iras", -1, 9);
            items[29] = new closure_4("adoras", -1, 1);
            const tmp30 = new closure_4("adoras", -1, 1);
            items[30] = new closure_4("osas", -1, 1);
            const tmp31 = new closure_4("osas", -1, 1);
            items[31] = new closure_4("istas", -1, 1);
            const tmp32 = new closure_4("istas", -1, 1);
            items[32] = new closure_4("ivas", -1, 8);
            const tmp33 = new closure_4("ivas", -1, 8);
            items[33] = new closure_4("ezas", -1, 1);
            const tmp34 = new closure_4("ezas", -1, 1);
            items[34] = new closure_4("idades", -1, 7);
            const tmp35 = new closure_4("idades", -1, 7);
            items[35] = new closure_4("adores", -1, 1);
            const tmp36 = new closure_4("adores", -1, 1);
            items[36] = new closure_4("antes", -1, 1);
            const tmp37 = new closure_4("antes", -1, 1);
            items[37] = new closure_4("a\u00E7o~es", -1, 1);
            const tmp38 = new closure_4("a\u00E7o~es", -1, 1);
            items[38] = new closure_4("u\u00E7o~es", -1, 3);
            const tmp39 = new closure_4("u\u00E7o~es", -1, 3);
            items[39] = new closure_4("icos", -1, 1);
            const tmp40 = new closure_4("icos", -1, 1);
            items[40] = new closure_4("ismos", -1, 1);
            const tmp41 = new closure_4("ismos", -1, 1);
            items[41] = new closure_4("osos", -1, 1);
            const tmp42 = new closure_4("osos", -1, 1);
            items[42] = new closure_4("amentos", -1, 1);
            const tmp43 = new closure_4("amentos", -1, 1);
            items[43] = new closure_4("imentos", -1, 1);
            const tmp44 = new closure_4("imentos", -1, 1);
            items[44] = new closure_4("ivos", -1, 8);
            portugueseStemmer.a_5 = items;
            return items;
          }
        },
        {
          key: "a_6",
          get() {
            delete r1.a_6;
            let tmp = new closure_4("ada", -1, 1);
            const items = [tmp, new closure_4("ida", -1, 1), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp2 = new closure_4("ida", -1, 1);
            items[2] = new closure_4("ia", -1, 1);
            const tmp3 = new closure_4("ia", -1, 1);
            items[3] = new closure_4("aria", 2, 1);
            const tmp4 = new closure_4("aria", 2, 1);
            items[4] = new closure_4("eria", 2, 1);
            const tmp5 = new closure_4("eria", 2, 1);
            items[5] = new closure_4("iria", 2, 1);
            const tmp6 = new closure_4("iria", 2, 1);
            items[6] = new closure_4("ara", -1, 1);
            const tmp7 = new closure_4("ara", -1, 1);
            items[7] = new closure_4("era", -1, 1);
            const tmp8 = new closure_4("era", -1, 1);
            items[8] = new closure_4("ira", -1, 1);
            const tmp9 = new closure_4("ira", -1, 1);
            items[9] = new closure_4("ava", -1, 1);
            const tmp10 = new closure_4("ava", -1, 1);
            items[10] = new closure_4("asse", -1, 1);
            const tmp11 = new closure_4("asse", -1, 1);
            items[11] = new closure_4("esse", -1, 1);
            const tmp12 = new closure_4("esse", -1, 1);
            items[12] = new closure_4("isse", -1, 1);
            const tmp13 = new closure_4("isse", -1, 1);
            items[13] = new closure_4("aste", -1, 1);
            const tmp14 = new closure_4("aste", -1, 1);
            items[14] = new closure_4("este", -1, 1);
            const tmp15 = new closure_4("este", -1, 1);
            items[15] = new closure_4("iste", -1, 1);
            const tmp16 = new closure_4("iste", -1, 1);
            items[16] = new closure_4("ei", -1, 1);
            const tmp17 = new closure_4("ei", -1, 1);
            items[17] = new closure_4("arei", 16, 1);
            const tmp18 = new closure_4("arei", 16, 1);
            items[18] = new closure_4("erei", 16, 1);
            const tmp19 = new closure_4("erei", 16, 1);
            items[19] = new closure_4("irei", 16, 1);
            const tmp20 = new closure_4("irei", 16, 1);
            items[20] = new closure_4("am", -1, 1);
            const tmp21 = new closure_4("am", -1, 1);
            items[21] = new closure_4("iam", 20, 1);
            const tmp22 = new closure_4("iam", 20, 1);
            items[22] = new closure_4("ariam", 21, 1);
            const tmp23 = new closure_4("ariam", 21, 1);
            items[23] = new closure_4("eriam", 21, 1);
            const tmp24 = new closure_4("eriam", 21, 1);
            items[24] = new closure_4("iriam", 21, 1);
            const tmp25 = new closure_4("iriam", 21, 1);
            items[25] = new closure_4("aram", 20, 1);
            const tmp26 = new closure_4("aram", 20, 1);
            items[26] = new closure_4("eram", 20, 1);
            const tmp27 = new closure_4("eram", 20, 1);
            items[27] = new closure_4("iram", 20, 1);
            const tmp28 = new closure_4("iram", 20, 1);
            items[28] = new closure_4("avam", 20, 1);
            const tmp29 = new closure_4("avam", 20, 1);
            items[29] = new closure_4("em", -1, 1);
            const tmp30 = new closure_4("em", -1, 1);
            items[30] = new closure_4("arem", 29, 1);
            const tmp31 = new closure_4("arem", 29, 1);
            items[31] = new closure_4("erem", 29, 1);
            const tmp32 = new closure_4("erem", 29, 1);
            items[32] = new closure_4("irem", 29, 1);
            const tmp33 = new closure_4("irem", 29, 1);
            items[33] = new closure_4("assem", 29, 1);
            const tmp34 = new closure_4("assem", 29, 1);
            items[34] = new closure_4("essem", 29, 1);
            const tmp35 = new closure_4("essem", 29, 1);
            items[35] = new closure_4("issem", 29, 1);
            const tmp36 = new closure_4("issem", 29, 1);
            items[36] = new closure_4("ado", -1, 1);
            const tmp37 = new closure_4("ado", -1, 1);
            items[37] = new closure_4("ido", -1, 1);
            const tmp38 = new closure_4("ido", -1, 1);
            items[38] = new closure_4("ando", -1, 1);
            const tmp39 = new closure_4("ando", -1, 1);
            items[39] = new closure_4("endo", -1, 1);
            const tmp40 = new closure_4("endo", -1, 1);
            items[40] = new closure_4("indo", -1, 1);
            const tmp41 = new closure_4("indo", -1, 1);
            items[41] = new closure_4("ara~o", -1, 1);
            const tmp42 = new closure_4("ara~o", -1, 1);
            items[42] = new closure_4("era~o", -1, 1);
            const tmp43 = new closure_4("era~o", -1, 1);
            items[43] = new closure_4("ira~o", -1, 1);
            const tmp44 = new closure_4("ira~o", -1, 1);
            items[44] = new closure_4("ar", -1, 1);
            const tmp45 = new closure_4("ar", -1, 1);
            items[45] = new closure_4("er", -1, 1);
            const tmp46 = new closure_4("er", -1, 1);
            items[46] = new closure_4("ir", -1, 1);
            const tmp47 = new closure_4("ir", -1, 1);
            items[47] = new closure_4("as", -1, 1);
            const tmp48 = new closure_4("as", -1, 1);
            items[48] = new closure_4("adas", 47, 1);
            const tmp49 = new closure_4("adas", 47, 1);
            items[49] = new closure_4("idas", 47, 1);
            const tmp50 = new closure_4("idas", 47, 1);
            items[50] = new closure_4("ias", 47, 1);
            const tmp51 = new closure_4("ias", 47, 1);
            items[51] = new closure_4("arias", 50, 1);
            const tmp52 = new closure_4("arias", 50, 1);
            items[52] = new closure_4("erias", 50, 1);
            const tmp53 = new closure_4("erias", 50, 1);
            items[53] = new closure_4("irias", 50, 1);
            const tmp54 = new closure_4("irias", 50, 1);
            items[54] = new closure_4("aras", 47, 1);
            const tmp55 = new closure_4("aras", 47, 1);
            items[55] = new closure_4("eras", 47, 1);
            const tmp56 = new closure_4("eras", 47, 1);
            items[56] = new closure_4("iras", 47, 1);
            const tmp57 = new closure_4("iras", 47, 1);
            items[57] = new closure_4("avas", 47, 1);
            const tmp58 = new closure_4("avas", 47, 1);
            items[58] = new closure_4("es", -1, 1);
            const tmp59 = new closure_4("es", -1, 1);
            items[59] = new closure_4("ardes", 58, 1);
            const tmp60 = new closure_4("ardes", 58, 1);
            items[60] = new closure_4("erdes", 58, 1);
            const tmp61 = new closure_4("erdes", 58, 1);
            items[61] = new closure_4("irdes", 58, 1);
            const tmp62 = new closure_4("irdes", 58, 1);
            items[62] = new closure_4("ares", 58, 1);
            const tmp63 = new closure_4("ares", 58, 1);
            items[63] = new closure_4("eres", 58, 1);
            const tmp64 = new closure_4("eres", 58, 1);
            items[64] = new closure_4("ires", 58, 1);
            const tmp65 = new closure_4("ires", 58, 1);
            items[65] = new closure_4("asses", 58, 1);
            const tmp66 = new closure_4("asses", 58, 1);
            items[66] = new closure_4("esses", 58, 1);
            const tmp67 = new closure_4("esses", 58, 1);
            items[67] = new closure_4("isses", 58, 1);
            const tmp68 = new closure_4("isses", 58, 1);
            items[68] = new closure_4("astes", 58, 1);
            const tmp69 = new closure_4("astes", 58, 1);
            items[69] = new closure_4("estes", 58, 1);
            const tmp70 = new closure_4("estes", 58, 1);
            items[70] = new closure_4("istes", 58, 1);
            const tmp71 = new closure_4("istes", 58, 1);
            items[71] = new closure_4("is", -1, 1);
            const tmp72 = new closure_4("is", -1, 1);
            items[72] = new closure_4("ais", 71, 1);
            const tmp73 = new closure_4("ais", 71, 1);
            items[73] = new closure_4("eis", 71, 1);
            const tmp74 = new closure_4("eis", 71, 1);
            items[74] = new closure_4("areis", 73, 1);
            const tmp75 = new closure_4("areis", 73, 1);
            items[75] = new closure_4("ereis", 73, 1);
            const tmp76 = new closure_4("ereis", 73, 1);
            items[76] = new closure_4("ireis", 73, 1);
            const tmp77 = new closure_4("ireis", 73, 1);
            items[77] = new closure_4("\u00E1reis", 73, 1);
            const tmp78 = new closure_4("\u00E1reis", 73, 1);
            items[78] = new closure_4("\u00E9reis", 73, 1);
            const tmp79 = new closure_4("\u00E9reis", 73, 1);
            items[79] = new closure_4("\u00EDreis", 73, 1);
            const tmp80 = new closure_4("\u00EDreis", 73, 1);
            items[80] = new closure_4("\u00E1sseis", 73, 1);
            const tmp81 = new closure_4("\u00E1sseis", 73, 1);
            items[81] = new closure_4("\u00E9sseis", 73, 1);
            const tmp82 = new closure_4("\u00E9sseis", 73, 1);
            items[82] = new closure_4("\u00EDsseis", 73, 1);
            const tmp83 = new closure_4("\u00EDsseis", 73, 1);
            items[83] = new closure_4("\u00E1veis", 73, 1);
            const tmp84 = new closure_4("\u00E1veis", 73, 1);
            items[84] = new closure_4("\u00EDeis", 73, 1);
            const tmp85 = new closure_4("\u00EDeis", 73, 1);
            items[85] = new closure_4("ar\u00EDeis", 84, 1);
            const tmp86 = new closure_4("ar\u00EDeis", 84, 1);
            items[86] = new closure_4("er\u00EDeis", 84, 1);
            const tmp87 = new closure_4("er\u00EDeis", 84, 1);
            items[87] = new closure_4("ir\u00EDeis", 84, 1);
            const tmp88 = new closure_4("ir\u00EDeis", 84, 1);
            items[88] = new closure_4("ados", -1, 1);
            const tmp89 = new closure_4("ados", -1, 1);
            items[89] = new closure_4("idos", -1, 1);
            const tmp90 = new closure_4("idos", -1, 1);
            items[90] = new closure_4("amos", -1, 1);
            const tmp91 = new closure_4("amos", -1, 1);
            items[91] = new closure_4("\u00E1ramos", 90, 1);
            const tmp92 = new closure_4("\u00E1ramos", 90, 1);
            items[92] = new closure_4("\u00E9ramos", 90, 1);
            const tmp93 = new closure_4("\u00E9ramos", 90, 1);
            items[93] = new closure_4("\u00EDramos", 90, 1);
            const tmp94 = new closure_4("\u00EDramos", 90, 1);
            items[94] = new closure_4("\u00E1vamos", 90, 1);
            const tmp95 = new closure_4("\u00E1vamos", 90, 1);
            items[95] = new closure_4("\u00EDamos", 90, 1);
            const tmp96 = new closure_4("\u00EDamos", 90, 1);
            items[96] = new closure_4("ar\u00EDamos", 95, 1);
            const tmp97 = new closure_4("ar\u00EDamos", 95, 1);
            items[97] = new closure_4("er\u00EDamos", 95, 1);
            const tmp98 = new closure_4("er\u00EDamos", 95, 1);
            items[98] = new closure_4("ir\u00EDamos", 95, 1);
            tmp = new closure_4("emos", -1, 1);
            items[99] = tmp;
            tmp = new closure_4("aremos", 99, 1);
            items[100] = tmp;
            tmp = new closure_4("eremos", 99, 1);
            items[101] = tmp;
            tmp = new closure_4("iremos", 99, 1);
            items[102] = tmp;
            tmp = new closure_4("\u00E1ssemos", 99, 1);
            items[103] = tmp;
            tmp = new closure_4("\u00EAssemos", 99, 1);
            items[104] = tmp;
            tmp = new closure_4("\u00EDssemos", 99, 1);
            items[105] = tmp;
            tmp = new closure_4("imos", -1, 1);
            items[106] = tmp;
            tmp = new closure_4("armos", -1, 1);
            items[107] = tmp;
            tmp = new closure_4("ermos", -1, 1);
            items[108] = tmp;
            tmp = new closure_4("irmos", -1, 1);
            items[109] = tmp;
            tmp = new closure_4("\u00E1mos", -1, 1);
            items[110] = tmp;
            tmp = new closure_4("ar\u00E1s", -1, 1);
            items[111] = tmp;
            tmp = new closure_4("er\u00E1s", -1, 1);
            items[112] = tmp;
            tmp = new closure_4("ir\u00E1s", -1, 1);
            items[113] = tmp;
            tmp = new closure_4("eu", -1, 1);
            items[114] = tmp;
            tmp = new closure_4("iu", -1, 1);
            items[115] = tmp;
            tmp = new closure_4("ou", -1, 1);
            items[116] = tmp;
            tmp = new closure_4("ar\u00E1", -1, 1);
            items[117] = tmp;
            tmp = new closure_4("er\u00E1", -1, 1);
            items[118] = tmp;
            tmp = new closure_4("ir\u00E1", -1, 1);
            items[119] = tmp;
            portugueseStemmer.a_6 = items;
            return items;
          }
        },
        {
          key: "a_7",
          get() {
            delete r1.a_7;
            const items = [new closure_4("a", -1, 1), , , , , , ];
            const tmp = new closure_4("a", -1, 1);
            items[1] = new closure_4("i", -1, 1);
            const tmp2 = new closure_4("i", -1, 1);
            items[2] = new closure_4("o", -1, 1);
            const tmp3 = new closure_4("o", -1, 1);
            items[3] = new closure_4("os", -1, 1);
            const tmp4 = new closure_4("os", -1, 1);
            items[4] = new closure_4("\u00E1", -1, 1);
            const tmp5 = new closure_4("\u00E1", -1, 1);
            items[5] = new closure_4("\u00ED", -1, 1);
            const tmp6 = new closure_4("\u00ED", -1, 1);
            items[6] = new closure_4("\u00F3", -1, 1);
            portugueseStemmer.a_7 = items;
            return items;
          }
        },
        {
          key: "a_8",
          get() {
            delete r1.a_8;
            const items = [new closure_4("e", -1, 1), , , ];
            const tmp = new closure_4("e", -1, 1);
            items[1] = new closure_4("\u00E7", -1, 2);
            const tmp2 = new closure_4("\u00E7", -1, 2);
            items[2] = new closure_4("\u00E9", -1, 1);
            const tmp3 = new closure_4("\u00E9", -1, 1);
            items[3] = new closure_4("\u00EA", -1, 1);
            portugueseStemmer.a_8 = items;
            return items;
          }
        },
        {
          key: "g_v",
          get() {
            delete r1.g_v;
            const items = [];
            portugueseStemmer.g_v = items;
            return items;
          }
        }
      ];
      callback(portugueseStemmer, items, items1);
      return portugueseStemmer;
    }(tmp3);
    let closure_22 = (arg0) => {
      function romanianStemmer() {
        callback3(this, romanianStemmer);
        const prototypeOf = Object.getPrototypeOf(romanianStemmer);
        return callback2(this, prototypeOf(...arguments));
      }
      const callback = romanianStemmer;
      _inherits(romanianStemmer, arg0);
      let obj = {
        key: "r_prelude$esjava$0",
        value: function r_prelude$esjava$0() {
          let cursor2;
          const self = this;
          while (true) {
            while (true) {
              let cursor = self.cursor;
              let tmp2 = romanianStemmer;
              if (self.in_grouping$esjava$3(romanianStemmer.g_v, 97, 259)) {
                ({ cursor: self.bra, cursor: cursor2 } = self);
                if (self.eq_s$esjava$1("u")) {
                  self.ket = self.cursor;
                  let tmp3 = romanianStemmer;
                  if (self.in_grouping$esjava$3(romanianStemmer.g_v, 97, 259)) {
                    break;
                  }
                }
                self.cursor = cursor2;
                let tmp4 = cursor2;
                if (self.eq_s$esjava$1("i")) {
                  self.ket = self.cursor;
                  let tmp5 = romanianStemmer;
                  let tmp6 = cursor2;
                  if (self.in_grouping$esjava$3(romanianStemmer.g_v, 97, 259)) {
                    let result = self.slice_from$esjava$1("I");
                    self.cursor = cursor;
                    let tmp9 = cursor2;
                    // continue label0
                  }
                }
              }
              self.cursor = cursor;
              if (self.cursor >= self.limit) {
                self.cursor = tmp;
                let flag = true;
                return true;
              } else {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            let result1 = self.slice_from$esjava$1("U");
          }
        }
      };
      const items = [obj, , , , , , , , , , , , , , , , ];
      obj = {
        key: "r_mark_regions$esjava$0",
        value: function r_mark_regions$esjava$0() {
          let cursor;
          let cursor2;
          const self = this;
          ({ limit: this.I_pV, limit: this.I_p1, limit: this.I_p2 } = this);
          ({ cursor, cursor: cursor2 } = this);
          if (this.in_grouping$esjava$3(romanianStemmer.g_v, 97, 259)) {
            if (!self.out_grouping$esjava$3(romanianStemmer.g_v, 97, 259)) {
              self.cursor = self.cursor;
              if (self.in_grouping$esjava$3(romanianStemmer.g_v, 97, 259)) {
                while (!self.out_grouping$esjava$3(romanianStemmer.g_v, 97, 259)) {
                  if (self.cursor < self.limit) {
                    self.cursor = self.cursor + 1;
                    // continue
                  }
                  break;
                }
              }
            } else {
              while (!self.in_grouping$esjava$3(romanianStemmer.g_v, 97, 259)) {
                if (self.cursor < self.limit) {
                  self.cursor = self.cursor + 1;
                  // continue
                }
                break;
              }
            }
            self.I_pV = self.cursor;
            self.cursor = cursor;
            while (!self.in_grouping$esjava$3(romanianStemmer.g_v, 97, 259)) {
              if (self.cursor < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
              self.cursor = tmp8;
              let flag = true;
              return true;
            }
            const cursor3 = self.cursor;
            while (!self.out_grouping$esjava$3(romanianStemmer.g_v, 97, 259)) {
              if (cursor3 < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            self.I_p1 = cursor3;
            while (!self.in_grouping$esjava$3(romanianStemmer.g_v, 97, 259)) {
              if (self.cursor < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            const cursor4 = self.cursor;
            while (!self.out_grouping$esjava$3(romanianStemmer.g_v, 97, 259)) {
              if (cursor4 < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            self.I_p2 = cursor4;
          }
          self.cursor = cursor2;
          if (self.out_grouping$esjava$3(romanianStemmer.g_v, 97, 259)) {
            if (!self.out_grouping$esjava$3(romanianStemmer.g_v, 97, 259)) {
              self.cursor = self.cursor;
              if (self.in_grouping$esjava$3(romanianStemmer.g_v, 97, 259)) {
                if (self.cursor < self.limit) {
                  self.cursor = self.cursor + 1;
                }
              }
            } else {
              while (!self.in_grouping$esjava$3(romanianStemmer.g_v, 97, 259)) {
                if (self.cursor < self.limit) {
                  self.cursor = self.cursor + 1;
                  // continue
                }
                break;
              }
            }
          }
        }
      };
      items[1] = obj;
      obj = {
        key: "r_postlude$esjava$0",
        value: function r_postlude$esjava$0() {
          const self = this;
          self.bra = self.cursor;
          const result = self.find_among$esjava$1(romanianStemmer.a_0);
          while (0 !== result) {
            self.ket = self.cursor;
            if (0 === result) {
              break;
            } else {
              if (1 === result) {
                let result1 = self.slice_from$esjava$1("i");
                // continue
              } else {
                if (2 === result) {
                  let result2 = self.slice_from$esjava$1("u");
                  // continue
                } else {
                  if (3 !== result) {
                    continue;
                  } else if (self.cursor >= self.limit) {
                    break;
                  } else {
                    self.cursor = self.cursor + 1;
                    // continue
                  }
                  self.cursor = tmp;
                  let flag = true;
                  return true;
                }
                continue;
              }
              continue;
            }
          }
        }
      };
      items[2] = obj;
      items[3] = {
        key: "r_RV$esjava$0",
        value: function r_RV$esjava$0() {
          return this.I_pV <= this.cursor;
        }
      };
      items[4] = {
        key: "r_R1$esjava$0",
        value: function r_R1$esjava$0() {
          return this.I_p1 <= this.cursor;
        }
      };
      items[5] = {
        key: "r_R2$esjava$0",
        value: function r_R2$esjava$0() {
          return this.I_p2 <= this.cursor;
        }
      };
      items[6] = {
        key: "r_step_0$esjava$0",
        value: function r_step_0$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(romanianStemmer.a_1);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (self.r_R1$esjava$0()) {
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  const result1 = self.slice_del$esjava$0();
                } else if (2 === result) {
                  const result2 = self.slice_from$esjava$1("a");
                } else if (3 === result) {
                  const result3 = self.slice_from$esjava$1("e");
                } else if (4 === result) {
                  const result4 = self.slice_from$esjava$1("i");
                } else if (5 === result) {
                  const diff = self.limit - self.cursor;
                  if (self.eq_s_b$esjava$1("ab")) {
                    return false;
                  } else {
                    self.cursor = self.limit - diff;
                    const result5 = self.slice_from$esjava$1("i");
                  }
                } else if (6 === result) {
                  const result6 = self.slice_from$esjava$1("at");
                } else if (7 === result) {
                  const result7 = self.slice_from$esjava$1("a\u0163i");
                }
                return true;
              }
            } else {
              return false;
            }
          }
        }
      };
      items[7] = {
        key: "r_combo_suffix$esjava$0",
        value: function r_combo_suffix$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const diff = this.limit - this.cursor;
          const result = this.find_among_b$esjava$1(romanianStemmer.a_2);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (self.r_R1$esjava$0()) {
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  const result1 = self.slice_from$esjava$1("abil");
                } else if (2 === result) {
                  const result2 = self.slice_from$esjava$1("ibil");
                } else if (3 === result) {
                  const result3 = self.slice_from$esjava$1("iv");
                } else if (4 === result) {
                  const result4 = self.slice_from$esjava$1("ic");
                } else if (5 === result) {
                  const result5 = self.slice_from$esjava$1("at");
                } else if (6 === result) {
                  const result6 = self.slice_from$esjava$1("it");
                }
                self.B_standard_suffix_removed = true;
                self.cursor = self.limit - diff;
                return true;
              }
            } else {
              return false;
            }
          }
        }
      };
      items[8] = {
        key: "r_standard_suffix$esjava$0",
        value: function r_standard_suffix$esjava$0() {
          let diff;
          let result;
          const self = this;
          this.B_standard_suffix_removed = false;
          do {
            diff = self.limit - self.cursor;
            result = self.r_combo_suffix$esjava$0();
          } while (result);
          self.cursor = self.limit - diff;
          self.ket = self.cursor;
          const result1 = self.find_among_b$esjava$1(romanianStemmer.a_3);
          if (0 === result1) {
            return false;
          } else {
            self.bra = self.cursor;
            if (self.r_R2$esjava$0()) {
              if (0 === result1) {
                return false;
              } else {
                if (1 === result1) {
                  const result2 = self.slice_del$esjava$0();
                } else if (2 === result1) {
                  if (self.eq_s_b$esjava$1("\u0163")) {
                    self.bra = self.cursor;
                    const result3 = self.slice_from$esjava$1("t");
                  } else {
                    return false;
                  }
                } else if (3 === result1) {
                  const result4 = self.slice_from$esjava$1("ist");
                }
                self.B_standard_suffix_removed = true;
                return true;
              }
            } else {
              return false;
            }
          }
        }
      };
      items[9] = {
        key: "r_verb_suffix$esjava$0",
        value: function r_verb_suffix$esjava$0() {
          let limit_backward;
          const self = this;
          if (this.cursor < this.I_pV) {
            return false;
          } else {
            ({ I_pV: self.cursor, limit_backward, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp;
            self.ket = self.cursor;
            const result = self.find_among_b$esjava$1(romanianStemmer.a_4);
            if (0 === result) {
              self.limit_backward = limit_backward;
              return false;
            } else {
              self.bra = self.cursor;
              if (0 === result) {
                self.limit_backward = limit_backward;
                return false;
              } else {
                if (1 === result) {
                  const diff = self.limit - self.cursor;
                  if (!self.out_grouping_b$esjava$3(romanianStemmer.g_v, 97, 259)) {
                    self.cursor = self.limit - diff;
                    if (!self.eq_s_b$esjava$1("u")) {
                      self.limit_backward = limit_backward;
                      return false;
                    }
                  }
                  const result1 = self.slice_del$esjava$0();
                } else if (2 === result) {
                  const result2 = self.slice_del$esjava$0();
                }
                self.limit_backward = limit_backward;
                return true;
              }
            }
          }
        }
      };
      items[10] = {
        key: "r_vowel_suffix$esjava$0",
        value: function r_vowel_suffix$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(romanianStemmer.a_5);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (self.r_RV$esjava$0()) {
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  const result1 = self.slice_del$esjava$0();
                }
                return true;
              }
            } else {
              return false;
            }
          }
        }
      };
      items[11] = {
        key: "stem$esjava$0",
        value: function stem$esjava$0() {
          let cursor;
          const self = this;
          const result = this.r_prelude$esjava$0();
          this.cursor = this.cursor;
          const result1 = this.r_mark_regions$esjava$0();
          this.cursor = this.cursor;
          ({ cursor: this.limit_backward, limit: this.cursor } = this);
          const diff = this.limit - this.cursor;
          const result2 = this.r_step_0$esjava$0();
          this.cursor = this.limit - diff;
          const diff1 = this.limit - this.cursor;
          const result3 = this.r_standard_suffix$esjava$0();
          this.cursor = this.limit - diff1;
          const diff2 = this.limit - this.cursor;
          if (!this.B_standard_suffix_removed) {
            self.cursor = self.limit - tmp8;
            const result4 = self.r_verb_suffix$esjava$0();
          }
          self.cursor = self.limit - diff2;
          const diff3 = self.limit - self.cursor;
          const result5 = self.r_vowel_suffix$esjava$0();
          self.cursor = self.limit - diff3;
          ({ limit_backward: self.cursor, cursor } = self);
          const result6 = self.r_postlude$esjava$0();
          self.cursor = cursor;
          return true;
        }
      };
      items[12] = {
        key: "stem",
        value: function stem() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const stem$esjava$0 = self.stem$esjava$0;
            let applyResult = stem$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(romanianStemmer.prototype), "stem", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[13] = {
        key: "B_standard_suffix_removed",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$B_standard_suffix_removed")) {
            let flag = self._$esjava$B_standard_suffix_removed;
          } else {
            flag = false;
            self._$esjava$B_standard_suffix_removed = false;
          }
          return flag;
        },
        set(_$esjava$B_standard_suffix_removed) {
          this._$esjava$B_standard_suffix_removed = _$esjava$B_standard_suffix_removed;
        }
      };
      items[14] = {
        key: "I_p2",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p2")) {
            let num = self._$esjava$I_p2;
          } else {
            num = 0;
            self._$esjava$I_p2 = 0;
          }
          return num;
        },
        set(_$esjava$I_p2) {
          this._$esjava$I_p2 = _$esjava$I_p2;
        }
      };
      items[15] = {
        key: "I_p1",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p1")) {
            let num = self._$esjava$I_p1;
          } else {
            num = 0;
            self._$esjava$I_p1 = 0;
          }
          return num;
        },
        set(_$esjava$I_p1) {
          this._$esjava$I_p1 = _$esjava$I_p1;
        }
      };
      items[16] = {
        key: "I_pV",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_pV")) {
            let num = self._$esjava$I_pV;
          } else {
            num = 0;
            self._$esjava$I_pV = 0;
          }
          return num;
        },
        set(_$esjava$I_pV) {
          this._$esjava$I_pV = _$esjava$I_pV;
        }
      };
      const items1 = [
        {
          key: "a_0",
          get() {
            delete r1.a_0;
            const items = [new closure_4("", -1, 3), , ];
            const tmp = new closure_4("", -1, 3);
            items[1] = new closure_4("I", 0, 1);
            const tmp2 = new closure_4("I", 0, 1);
            items[2] = new closure_4("U", 0, 2);
            romanianStemmer.a_0 = items;
            return items;
          }
        },
        {
          key: "a_1",
          get() {
            delete r1.a_1;
            const items = [new closure_4("ea", -1, 3), , , , , , , , , , , , , , , ];
            const tmp = new closure_4("ea", -1, 3);
            items[1] = new closure_4("a\u0163ia", -1, 7);
            const tmp2 = new closure_4("a\u0163ia", -1, 7);
            items[2] = new closure_4("aua", -1, 2);
            const tmp3 = new closure_4("aua", -1, 2);
            items[3] = new closure_4("iua", -1, 4);
            const tmp4 = new closure_4("iua", -1, 4);
            items[4] = new closure_4("a\u0163ie", -1, 7);
            const tmp5 = new closure_4("a\u0163ie", -1, 7);
            items[5] = new closure_4("ele", -1, 3);
            const tmp6 = new closure_4("ele", -1, 3);
            items[6] = new closure_4("ile", -1, 5);
            const tmp7 = new closure_4("ile", -1, 5);
            items[7] = new closure_4("iile", 6, 4);
            const tmp8 = new closure_4("iile", 6, 4);
            items[8] = new closure_4("iei", -1, 4);
            const tmp9 = new closure_4("iei", -1, 4);
            items[9] = new closure_4("atei", -1, 6);
            const tmp10 = new closure_4("atei", -1, 6);
            items[10] = new closure_4("ii", -1, 4);
            const tmp11 = new closure_4("ii", -1, 4);
            items[11] = new closure_4("ului", -1, 1);
            const tmp12 = new closure_4("ului", -1, 1);
            items[12] = new closure_4("ul", -1, 1);
            const tmp13 = new closure_4("ul", -1, 1);
            items[13] = new closure_4("elor", -1, 3);
            const tmp14 = new closure_4("elor", -1, 3);
            items[14] = new closure_4("ilor", -1, 4);
            const tmp15 = new closure_4("ilor", -1, 4);
            items[15] = new closure_4("iilor", 14, 4);
            romanianStemmer.a_1 = items;
            return items;
          }
        },
        {
          key: "a_2",
          get() {
            delete r1.a_2;
            const items = [new closure_4("icala", -1, 4), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("icala", -1, 4);
            items[1] = new closure_4("iciva", -1, 4);
            const tmp2 = new closure_4("iciva", -1, 4);
            items[2] = new closure_4("ativa", -1, 5);
            const tmp3 = new closure_4("ativa", -1, 5);
            items[3] = new closure_4("itiva", -1, 6);
            const tmp4 = new closure_4("itiva", -1, 6);
            items[4] = new closure_4("icale", -1, 4);
            const tmp5 = new closure_4("icale", -1, 4);
            items[5] = new closure_4("a\u0163iune", -1, 5);
            const tmp6 = new closure_4("a\u0163iune", -1, 5);
            items[6] = new closure_4("i\u0163iune", -1, 6);
            const tmp7 = new closure_4("i\u0163iune", -1, 6);
            items[7] = new closure_4("atoare", -1, 5);
            const tmp8 = new closure_4("atoare", -1, 5);
            items[8] = new closure_4("itoare", -1, 6);
            const tmp9 = new closure_4("itoare", -1, 6);
            items[9] = new closure_4("\u0103toare", -1, 5);
            const tmp10 = new closure_4("\u0103toare", -1, 5);
            items[10] = new closure_4("icitate", -1, 4);
            const tmp11 = new closure_4("icitate", -1, 4);
            items[11] = new closure_4("abilitate", -1, 1);
            const tmp12 = new closure_4("abilitate", -1, 1);
            items[12] = new closure_4("ibilitate", -1, 2);
            const tmp13 = new closure_4("ibilitate", -1, 2);
            items[13] = new closure_4("ivitate", -1, 3);
            const tmp14 = new closure_4("ivitate", -1, 3);
            items[14] = new closure_4("icive", -1, 4);
            const tmp15 = new closure_4("icive", -1, 4);
            items[15] = new closure_4("ative", -1, 5);
            const tmp16 = new closure_4("ative", -1, 5);
            items[16] = new closure_4("itive", -1, 6);
            const tmp17 = new closure_4("itive", -1, 6);
            items[17] = new closure_4("icali", -1, 4);
            const tmp18 = new closure_4("icali", -1, 4);
            items[18] = new closure_4("atori", -1, 5);
            const tmp19 = new closure_4("atori", -1, 5);
            items[19] = new closure_4("icatori", 18, 4);
            const tmp20 = new closure_4("icatori", 18, 4);
            items[20] = new closure_4("itori", -1, 6);
            const tmp21 = new closure_4("itori", -1, 6);
            items[21] = new closure_4("\u0103tori", -1, 5);
            const tmp22 = new closure_4("\u0103tori", -1, 5);
            items[22] = new closure_4("icitati", -1, 4);
            const tmp23 = new closure_4("icitati", -1, 4);
            items[23] = new closure_4("abilitati", -1, 1);
            const tmp24 = new closure_4("abilitati", -1, 1);
            items[24] = new closure_4("ivitati", -1, 3);
            const tmp25 = new closure_4("ivitati", -1, 3);
            items[25] = new closure_4("icivi", -1, 4);
            const tmp26 = new closure_4("icivi", -1, 4);
            items[26] = new closure_4("ativi", -1, 5);
            const tmp27 = new closure_4("ativi", -1, 5);
            items[27] = new closure_4("itivi", -1, 6);
            const tmp28 = new closure_4("itivi", -1, 6);
            items[28] = new closure_4("icit\u0103i", -1, 4);
            const tmp29 = new closure_4("icit\u0103i", -1, 4);
            items[29] = new closure_4("abilit\u0103i", -1, 1);
            const tmp30 = new closure_4("abilit\u0103i", -1, 1);
            items[30] = new closure_4("ivit\u0103i", -1, 3);
            const tmp31 = new closure_4("ivit\u0103i", -1, 3);
            items[31] = new closure_4("icit\u0103\u0163i", -1, 4);
            const tmp32 = new closure_4("icit\u0103\u0163i", -1, 4);
            items[32] = new closure_4("abilit\u0103\u0163i", -1, 1);
            const tmp33 = new closure_4("abilit\u0103\u0163i", -1, 1);
            items[33] = new closure_4("ivit\u0103\u0163i", -1, 3);
            const tmp34 = new closure_4("ivit\u0103\u0163i", -1, 3);
            items[34] = new closure_4("ical", -1, 4);
            const tmp35 = new closure_4("ical", -1, 4);
            items[35] = new closure_4("ator", -1, 5);
            const tmp36 = new closure_4("ator", -1, 5);
            items[36] = new closure_4("icator", 35, 4);
            const tmp37 = new closure_4("icator", 35, 4);
            items[37] = new closure_4("itor", -1, 6);
            const tmp38 = new closure_4("itor", -1, 6);
            items[38] = new closure_4("\u0103tor", -1, 5);
            const tmp39 = new closure_4("\u0103tor", -1, 5);
            items[39] = new closure_4("iciv", -1, 4);
            const tmp40 = new closure_4("iciv", -1, 4);
            items[40] = new closure_4("ativ", -1, 5);
            const tmp41 = new closure_4("ativ", -1, 5);
            items[41] = new closure_4("itiv", -1, 6);
            const tmp42 = new closure_4("itiv", -1, 6);
            items[42] = new closure_4("ical\u0103", -1, 4);
            const tmp43 = new closure_4("ical\u0103", -1, 4);
            items[43] = new closure_4("iciv\u0103", -1, 4);
            const tmp44 = new closure_4("iciv\u0103", -1, 4);
            items[44] = new closure_4("ativ\u0103", -1, 5);
            const tmp45 = new closure_4("ativ\u0103", -1, 5);
            items[45] = new closure_4("itiv\u0103", -1, 6);
            romanianStemmer.a_2 = items;
            return items;
          }
        },
        {
          key: "a_3",
          get() {
            delete r1.a_3;
            const items = [new closure_4("ica", -1, 1), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("ica", -1, 1);
            items[1] = new closure_4("abila", -1, 1);
            const tmp2 = new closure_4("abila", -1, 1);
            items[2] = new closure_4("ibila", -1, 1);
            const tmp3 = new closure_4("ibila", -1, 1);
            items[3] = new closure_4("oasa", -1, 1);
            const tmp4 = new closure_4("oasa", -1, 1);
            items[4] = new closure_4("ata", -1, 1);
            const tmp5 = new closure_4("ata", -1, 1);
            items[5] = new closure_4("ita", -1, 1);
            const tmp6 = new closure_4("ita", -1, 1);
            items[6] = new closure_4("anta", -1, 1);
            const tmp7 = new closure_4("anta", -1, 1);
            items[7] = new closure_4("ista", -1, 3);
            const tmp8 = new closure_4("ista", -1, 3);
            items[8] = new closure_4("uta", -1, 1);
            const tmp9 = new closure_4("uta", -1, 1);
            items[9] = new closure_4("iva", -1, 1);
            const tmp10 = new closure_4("iva", -1, 1);
            items[10] = new closure_4("ic", -1, 1);
            const tmp11 = new closure_4("ic", -1, 1);
            items[11] = new closure_4("ice", -1, 1);
            const tmp12 = new closure_4("ice", -1, 1);
            items[12] = new closure_4("abile", -1, 1);
            const tmp13 = new closure_4("abile", -1, 1);
            items[13] = new closure_4("ibile", -1, 1);
            const tmp14 = new closure_4("ibile", -1, 1);
            items[14] = new closure_4("isme", -1, 3);
            const tmp15 = new closure_4("isme", -1, 3);
            items[15] = new closure_4("iune", -1, 2);
            const tmp16 = new closure_4("iune", -1, 2);
            items[16] = new closure_4("oase", -1, 1);
            const tmp17 = new closure_4("oase", -1, 1);
            items[17] = new closure_4("ate", -1, 1);
            const tmp18 = new closure_4("ate", -1, 1);
            items[18] = new closure_4("itate", 17, 1);
            const tmp19 = new closure_4("itate", 17, 1);
            items[19] = new closure_4("ite", -1, 1);
            const tmp20 = new closure_4("ite", -1, 1);
            items[20] = new closure_4("ante", -1, 1);
            const tmp21 = new closure_4("ante", -1, 1);
            items[21] = new closure_4("iste", -1, 3);
            const tmp22 = new closure_4("iste", -1, 3);
            items[22] = new closure_4("ute", -1, 1);
            const tmp23 = new closure_4("ute", -1, 1);
            items[23] = new closure_4("ive", -1, 1);
            const tmp24 = new closure_4("ive", -1, 1);
            items[24] = new closure_4("ici", -1, 1);
            const tmp25 = new closure_4("ici", -1, 1);
            items[25] = new closure_4("abili", -1, 1);
            const tmp26 = new closure_4("abili", -1, 1);
            items[26] = new closure_4("ibili", -1, 1);
            const tmp27 = new closure_4("ibili", -1, 1);
            items[27] = new closure_4("iuni", -1, 2);
            const tmp28 = new closure_4("iuni", -1, 2);
            items[28] = new closure_4("atori", -1, 1);
            const tmp29 = new closure_4("atori", -1, 1);
            items[29] = new closure_4("osi", -1, 1);
            const tmp30 = new closure_4("osi", -1, 1);
            items[30] = new closure_4("ati", -1, 1);
            const tmp31 = new closure_4("ati", -1, 1);
            items[31] = new closure_4("itati", 30, 1);
            const tmp32 = new closure_4("itati", 30, 1);
            items[32] = new closure_4("iti", -1, 1);
            const tmp33 = new closure_4("iti", -1, 1);
            items[33] = new closure_4("anti", -1, 1);
            const tmp34 = new closure_4("anti", -1, 1);
            items[34] = new closure_4("isti", -1, 3);
            const tmp35 = new closure_4("isti", -1, 3);
            items[35] = new closure_4("uti", -1, 1);
            const tmp36 = new closure_4("uti", -1, 1);
            items[36] = new closure_4("i\u015Fti", -1, 3);
            const tmp37 = new closure_4("i\u015Fti", -1, 3);
            items[37] = new closure_4("ivi", -1, 1);
            const tmp38 = new closure_4("ivi", -1, 1);
            items[38] = new closure_4("it\u0103i", -1, 1);
            const tmp39 = new closure_4("it\u0103i", -1, 1);
            items[39] = new closure_4("o\u015Fi", -1, 1);
            const tmp40 = new closure_4("o\u015Fi", -1, 1);
            items[40] = new closure_4("it\u0103\u0163i", -1, 1);
            const tmp41 = new closure_4("it\u0103\u0163i", -1, 1);
            items[41] = new closure_4("abil", -1, 1);
            const tmp42 = new closure_4("abil", -1, 1);
            items[42] = new closure_4("ibil", -1, 1);
            const tmp43 = new closure_4("ibil", -1, 1);
            items[43] = new closure_4("ism", -1, 3);
            const tmp44 = new closure_4("ism", -1, 3);
            items[44] = new closure_4("ator", -1, 1);
            const tmp45 = new closure_4("ator", -1, 1);
            items[45] = new closure_4("os", -1, 1);
            const tmp46 = new closure_4("os", -1, 1);
            items[46] = new closure_4("at", -1, 1);
            const tmp47 = new closure_4("at", -1, 1);
            items[47] = new closure_4("it", -1, 1);
            const tmp48 = new closure_4("it", -1, 1);
            items[48] = new closure_4("ant", -1, 1);
            const tmp49 = new closure_4("ant", -1, 1);
            items[49] = new closure_4("ist", -1, 3);
            const tmp50 = new closure_4("ist", -1, 3);
            items[50] = new closure_4("ut", -1, 1);
            const tmp51 = new closure_4("ut", -1, 1);
            items[51] = new closure_4("iv", -1, 1);
            const tmp52 = new closure_4("iv", -1, 1);
            items[52] = new closure_4("ic\u0103", -1, 1);
            const tmp53 = new closure_4("ic\u0103", -1, 1);
            items[53] = new closure_4("abil\u0103", -1, 1);
            const tmp54 = new closure_4("abil\u0103", -1, 1);
            items[54] = new closure_4("ibil\u0103", -1, 1);
            const tmp55 = new closure_4("ibil\u0103", -1, 1);
            items[55] = new closure_4("oas\u0103", -1, 1);
            const tmp56 = new closure_4("oas\u0103", -1, 1);
            items[56] = new closure_4("at\u0103", -1, 1);
            const tmp57 = new closure_4("at\u0103", -1, 1);
            items[57] = new closure_4("it\u0103", -1, 1);
            const tmp58 = new closure_4("it\u0103", -1, 1);
            items[58] = new closure_4("ant\u0103", -1, 1);
            const tmp59 = new closure_4("ant\u0103", -1, 1);
            items[59] = new closure_4("ist\u0103", -1, 3);
            const tmp60 = new closure_4("ist\u0103", -1, 3);
            items[60] = new closure_4("ut\u0103", -1, 1);
            const tmp61 = new closure_4("ut\u0103", -1, 1);
            items[61] = new closure_4("iv\u0103", -1, 1);
            romanianStemmer.a_3 = items;
            return items;
          }
        },
        {
          key: "a_4",
          get() {
            delete r1.a_4;
            const items = [new closure_4("ea", -1, 1), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("ea", -1, 1);
            items[1] = new closure_4("ia", -1, 1);
            const tmp2 = new closure_4("ia", -1, 1);
            items[2] = new closure_4("esc", -1, 1);
            const tmp3 = new closure_4("esc", -1, 1);
            items[3] = new closure_4("\u0103sc", -1, 1);
            const tmp4 = new closure_4("\u0103sc", -1, 1);
            items[4] = new closure_4("ind", -1, 1);
            const tmp5 = new closure_4("ind", -1, 1);
            items[5] = new closure_4("\u00E2nd", -1, 1);
            const tmp6 = new closure_4("\u00E2nd", -1, 1);
            items[6] = new closure_4("are", -1, 1);
            const tmp7 = new closure_4("are", -1, 1);
            items[7] = new closure_4("ere", -1, 1);
            const tmp8 = new closure_4("ere", -1, 1);
            items[8] = new closure_4("ire", -1, 1);
            const tmp9 = new closure_4("ire", -1, 1);
            items[9] = new closure_4("\u00E2re", -1, 1);
            const tmp10 = new closure_4("\u00E2re", -1, 1);
            items[10] = new closure_4("se", -1, 2);
            const tmp11 = new closure_4("se", -1, 2);
            items[11] = new closure_4("ase", 10, 1);
            const tmp12 = new closure_4("ase", 10, 1);
            items[12] = new closure_4("sese", 10, 2);
            const tmp13 = new closure_4("sese", 10, 2);
            items[13] = new closure_4("ise", 10, 1);
            const tmp14 = new closure_4("ise", 10, 1);
            items[14] = new closure_4("use", 10, 1);
            const tmp15 = new closure_4("use", 10, 1);
            items[15] = new closure_4("\u00E2se", 10, 1);
            const tmp16 = new closure_4("\u00E2se", 10, 1);
            items[16] = new closure_4("e\u015Fte", -1, 1);
            const tmp17 = new closure_4("e\u015Fte", -1, 1);
            items[17] = new closure_4("\u0103\u015Fte", -1, 1);
            const tmp18 = new closure_4("\u0103\u015Fte", -1, 1);
            items[18] = new closure_4("eze", -1, 1);
            const tmp19 = new closure_4("eze", -1, 1);
            items[19] = new closure_4("ai", -1, 1);
            const tmp20 = new closure_4("ai", -1, 1);
            items[20] = new closure_4("eai", 19, 1);
            const tmp21 = new closure_4("eai", 19, 1);
            items[21] = new closure_4("iai", 19, 1);
            const tmp22 = new closure_4("iai", 19, 1);
            items[22] = new closure_4("sei", -1, 2);
            const tmp23 = new closure_4("sei", -1, 2);
            items[23] = new closure_4("e\u015Fti", -1, 1);
            const tmp24 = new closure_4("e\u015Fti", -1, 1);
            items[24] = new closure_4("\u0103\u015Fti", -1, 1);
            const tmp25 = new closure_4("\u0103\u015Fti", -1, 1);
            items[25] = new closure_4("ui", -1, 1);
            const tmp26 = new closure_4("ui", -1, 1);
            items[26] = new closure_4("ezi", -1, 1);
            const tmp27 = new closure_4("ezi", -1, 1);
            items[27] = new closure_4("\u00E2i", -1, 1);
            const tmp28 = new closure_4("\u00E2i", -1, 1);
            items[28] = new closure_4("a\u015Fi", -1, 1);
            const tmp29 = new closure_4("a\u015Fi", -1, 1);
            items[29] = new closure_4("se\u015Fi", -1, 2);
            const tmp30 = new closure_4("se\u015Fi", -1, 2);
            items[30] = new closure_4("ase\u015Fi", 29, 1);
            const tmp31 = new closure_4("ase\u015Fi", 29, 1);
            items[31] = new closure_4("sese\u015Fi", 29, 2);
            const tmp32 = new closure_4("sese\u015Fi", 29, 2);
            items[32] = new closure_4("ise\u015Fi", 29, 1);
            const tmp33 = new closure_4("ise\u015Fi", 29, 1);
            items[33] = new closure_4("use\u015Fi", 29, 1);
            const tmp34 = new closure_4("use\u015Fi", 29, 1);
            items[34] = new closure_4("\u00E2se\u015Fi", 29, 1);
            const tmp35 = new closure_4("\u00E2se\u015Fi", 29, 1);
            items[35] = new closure_4("i\u015Fi", -1, 1);
            const tmp36 = new closure_4("i\u015Fi", -1, 1);
            items[36] = new closure_4("u\u015Fi", -1, 1);
            const tmp37 = new closure_4("u\u015Fi", -1, 1);
            items[37] = new closure_4("\u00E2\u015Fi", -1, 1);
            const tmp38 = new closure_4("\u00E2\u015Fi", -1, 1);
            items[38] = new closure_4("a\u0163i", -1, 2);
            const tmp39 = new closure_4("a\u0163i", -1, 2);
            items[39] = new closure_4("ea\u0163i", 38, 1);
            const tmp40 = new closure_4("ea\u0163i", 38, 1);
            items[40] = new closure_4("ia\u0163i", 38, 1);
            const tmp41 = new closure_4("ia\u0163i", 38, 1);
            items[41] = new closure_4("e\u0163i", -1, 2);
            const tmp42 = new closure_4("e\u0163i", -1, 2);
            items[42] = new closure_4("i\u0163i", -1, 2);
            const tmp43 = new closure_4("i\u0163i", -1, 2);
            items[43] = new closure_4("\u00E2\u0163i", -1, 2);
            const tmp44 = new closure_4("\u00E2\u0163i", -1, 2);
            items[44] = new closure_4("ar\u0103\u0163i", -1, 1);
            const tmp45 = new closure_4("ar\u0103\u0163i", -1, 1);
            items[45] = new closure_4("ser\u0103\u0163i", -1, 2);
            const tmp46 = new closure_4("ser\u0103\u0163i", -1, 2);
            items[46] = new closure_4("aser\u0103\u0163i", 45, 1);
            const tmp47 = new closure_4("aser\u0103\u0163i", 45, 1);
            items[47] = new closure_4("seser\u0103\u0163i", 45, 2);
            const tmp48 = new closure_4("seser\u0103\u0163i", 45, 2);
            items[48] = new closure_4("iser\u0103\u0163i", 45, 1);
            const tmp49 = new closure_4("iser\u0103\u0163i", 45, 1);
            items[49] = new closure_4("user\u0103\u0163i", 45, 1);
            const tmp50 = new closure_4("user\u0103\u0163i", 45, 1);
            items[50] = new closure_4("\u00E2ser\u0103\u0163i", 45, 1);
            const tmp51 = new closure_4("\u00E2ser\u0103\u0163i", 45, 1);
            items[51] = new closure_4("ir\u0103\u0163i", -1, 1);
            const tmp52 = new closure_4("ir\u0103\u0163i", -1, 1);
            items[52] = new closure_4("ur\u0103\u0163i", -1, 1);
            const tmp53 = new closure_4("ur\u0103\u0163i", -1, 1);
            items[53] = new closure_4("\u00E2r\u0103\u0163i", -1, 1);
            const tmp54 = new closure_4("\u00E2r\u0103\u0163i", -1, 1);
            items[54] = new closure_4("am", -1, 1);
            const tmp55 = new closure_4("am", -1, 1);
            items[55] = new closure_4("eam", 54, 1);
            const tmp56 = new closure_4("eam", 54, 1);
            items[56] = new closure_4("iam", 54, 1);
            const tmp57 = new closure_4("iam", 54, 1);
            items[57] = new closure_4("em", -1, 2);
            const tmp58 = new closure_4("em", -1, 2);
            items[58] = new closure_4("asem", 57, 1);
            const tmp59 = new closure_4("asem", 57, 1);
            items[59] = new closure_4("sesem", 57, 2);
            const tmp60 = new closure_4("sesem", 57, 2);
            items[60] = new closure_4("isem", 57, 1);
            const tmp61 = new closure_4("isem", 57, 1);
            items[61] = new closure_4("usem", 57, 1);
            const tmp62 = new closure_4("usem", 57, 1);
            items[62] = new closure_4("\u00E2sem", 57, 1);
            const tmp63 = new closure_4("\u00E2sem", 57, 1);
            items[63] = new closure_4("im", -1, 2);
            const tmp64 = new closure_4("im", -1, 2);
            items[64] = new closure_4("\u00E2m", -1, 2);
            const tmp65 = new closure_4("\u00E2m", -1, 2);
            items[65] = new closure_4("\u0103m", -1, 2);
            const tmp66 = new closure_4("\u0103m", -1, 2);
            items[66] = new closure_4("ar\u0103m", 65, 1);
            const tmp67 = new closure_4("ar\u0103m", 65, 1);
            items[67] = new closure_4("ser\u0103m", 65, 2);
            const tmp68 = new closure_4("ser\u0103m", 65, 2);
            items[68] = new closure_4("aser\u0103m", 67, 1);
            const tmp69 = new closure_4("aser\u0103m", 67, 1);
            items[69] = new closure_4("seser\u0103m", 67, 2);
            const tmp70 = new closure_4("seser\u0103m", 67, 2);
            items[70] = new closure_4("iser\u0103m", 67, 1);
            const tmp71 = new closure_4("iser\u0103m", 67, 1);
            items[71] = new closure_4("user\u0103m", 67, 1);
            const tmp72 = new closure_4("user\u0103m", 67, 1);
            items[72] = new closure_4("\u00E2ser\u0103m", 67, 1);
            const tmp73 = new closure_4("\u00E2ser\u0103m", 67, 1);
            items[73] = new closure_4("ir\u0103m", 65, 1);
            const tmp74 = new closure_4("ir\u0103m", 65, 1);
            items[74] = new closure_4("ur\u0103m", 65, 1);
            const tmp75 = new closure_4("ur\u0103m", 65, 1);
            items[75] = new closure_4("\u00E2r\u0103m", 65, 1);
            const tmp76 = new closure_4("\u00E2r\u0103m", 65, 1);
            items[76] = new closure_4("au", -1, 1);
            const tmp77 = new closure_4("au", -1, 1);
            items[77] = new closure_4("eau", 76, 1);
            const tmp78 = new closure_4("eau", 76, 1);
            items[78] = new closure_4("iau", 76, 1);
            const tmp79 = new closure_4("iau", 76, 1);
            items[79] = new closure_4("indu", -1, 1);
            const tmp80 = new closure_4("indu", -1, 1);
            items[80] = new closure_4("\u00E2ndu", -1, 1);
            const tmp81 = new closure_4("\u00E2ndu", -1, 1);
            items[81] = new closure_4("ez", -1, 1);
            const tmp82 = new closure_4("ez", -1, 1);
            items[82] = new closure_4("easc\u0103", -1, 1);
            const tmp83 = new closure_4("easc\u0103", -1, 1);
            items[83] = new closure_4("ar\u0103", -1, 1);
            const tmp84 = new closure_4("ar\u0103", -1, 1);
            items[84] = new closure_4("ser\u0103", -1, 2);
            const tmp85 = new closure_4("ser\u0103", -1, 2);
            items[85] = new closure_4("aser\u0103", 84, 1);
            const tmp86 = new closure_4("aser\u0103", 84, 1);
            items[86] = new closure_4("seser\u0103", 84, 2);
            const tmp87 = new closure_4("seser\u0103", 84, 2);
            items[87] = new closure_4("iser\u0103", 84, 1);
            const tmp88 = new closure_4("iser\u0103", 84, 1);
            items[88] = new closure_4("user\u0103", 84, 1);
            const tmp89 = new closure_4("user\u0103", 84, 1);
            items[89] = new closure_4("\u00E2ser\u0103", 84, 1);
            const tmp90 = new closure_4("\u00E2ser\u0103", 84, 1);
            items[90] = new closure_4("ir\u0103", -1, 1);
            const tmp91 = new closure_4("ir\u0103", -1, 1);
            items[91] = new closure_4("ur\u0103", -1, 1);
            const tmp92 = new closure_4("ur\u0103", -1, 1);
            items[92] = new closure_4("\u00E2r\u0103", -1, 1);
            const tmp93 = new closure_4("\u00E2r\u0103", -1, 1);
            items[93] = new closure_4("eaz\u0103", -1, 1);
            romanianStemmer.a_4 = items;
            return items;
          }
        },
        {
          key: "a_5",
          get() {
            delete r1.a_5;
            const items = [new closure_4("a", -1, 1), , , , ];
            const tmp = new closure_4("a", -1, 1);
            items[1] = new closure_4("e", -1, 1);
            const tmp2 = new closure_4("e", -1, 1);
            items[2] = new closure_4("ie", 1, 1);
            const tmp3 = new closure_4("ie", 1, 1);
            items[3] = new closure_4("i", -1, 1);
            const tmp4 = new closure_4("i", -1, 1);
            items[4] = new closure_4("\u0103", -1, 1);
            romanianStemmer.a_5 = items;
            return items;
          }
        },
        {
          key: "g_v",
          get() {
            delete r1.g_v;
            const items = [];
            romanianStemmer.g_v = items;
            return items;
          }
        }
      ];
      callback(romanianStemmer, items, items1);
      return romanianStemmer;
    }(tmp3);
    let closure_23 = (arg0) => {
      function russianStemmer() {
        callback3(this, russianStemmer);
        const prototypeOf = Object.getPrototypeOf(russianStemmer);
        return callback2(this, prototypeOf(...arguments));
      }
      const callback = russianStemmer;
      _inherits(russianStemmer, arg0);
      let obj = {
        key: "r_mark_regions$esjava$0",
        value: function r_mark_regions$esjava$0() {
          const self = this;
          ({ limit: this.I_pV, limit: this.I_p2 } = this);
          const cursor = self.cursor;
          while (!self.in_grouping$esjava$3(russianStemmer.g_v, 1072, 1103)) {
            if (cursor < self.limit) {
              self.cursor = self.cursor + 1;
              // continue
            }
            self.cursor = tmp;
            let flag = true;
            return true;
          }
          self.I_pV = cursor;
          while (!self.out_grouping$esjava$3(russianStemmer.g_v, 1072, 1103)) {
            if (self.cursor < self.limit) {
              self.cursor = self.cursor + 1;
              // continue
            }
          }
          while (!self.in_grouping$esjava$3(russianStemmer.g_v, 1072, 1103)) {
            if (self.cursor < self.limit) {
              self.cursor = self.cursor + 1;
              // continue
            }
          }
          const cursor2 = self.cursor;
          while (!self.out_grouping$esjava$3(russianStemmer.g_v, 1072, 1103)) {
            if (cursor2 < self.limit) {
              self.cursor = self.cursor + 1;
              // continue
            }
          }
          self.I_p2 = cursor2;
        }
      };
      const items = [obj, , , , , , , , , , , , , ];
      obj = {
        key: "r_R2$esjava$0",
        value: function r_R2$esjava$0() {
          return this.I_p2 <= this.cursor;
        }
      };
      items[1] = obj;
      obj = {
        key: "r_perfective_gerund$esjava$0",
        value: function r_perfective_gerund$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(russianStemmer.a_0);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                const diff = self.limit - self.cursor;
                if (!self.eq_s_b$esjava$1("\u0430")) {
                  self.cursor = self.limit - diff;
                  if (!self.eq_s_b$esjava$1("\u044F")) {
                    return false;
                  }
                }
                const result1 = self.slice_del$esjava$0();
              } else if (2 === result) {
                const result2 = self.slice_del$esjava$0();
              }
              return true;
            }
          }
        }
      };
      items[2] = obj;
      items[3] = {
        key: "r_adjective$esjava$0",
        value: function r_adjective$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(russianStemmer.a_1);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                const result1 = self.slice_del$esjava$0();
              }
              return true;
            }
          }
        }
      };
      items[4] = {
        key: "r_adjectival$esjava$0",
        value: function r_adjectival$esjava$0() {
          const self = this;
          if (this.r_adjective$esjava$0()) {
            const diff = self.limit - self.cursor;
            self.ket = self.cursor;
            const result = self.find_among_b$esjava$1(russianStemmer.a_2);
            if (0 === result) {
              self.cursor = self.limit - diff;
            } else {
              self.bra = self.cursor;
              if (0 === result) {
                self.cursor = self.limit - diff;
              } else if (1 === result) {
                const diff1 = self.limit - self.cursor;
                if (!self.eq_s_b$esjava$1("\u0430")) {
                  self.cursor = self.limit - diff1;
                  if (!self.eq_s_b$esjava$1("\u044F")) {
                    self.cursor = self.limit - diff;
                  }
                }
                const result1 = self.slice_del$esjava$0();
              } else if (2 === result) {
                const result2 = self.slice_del$esjava$0();
              }
            }
            return true;
          } else {
            return false;
          }
        }
      };
      items[5] = {
        key: "r_reflexive$esjava$0",
        value: function r_reflexive$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(russianStemmer.a_3);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                const result1 = self.slice_del$esjava$0();
              }
              return true;
            }
          }
        }
      };
      items[6] = {
        key: "r_verb$esjava$0",
        value: function r_verb$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(russianStemmer.a_4);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                const diff = self.limit - self.cursor;
                if (!self.eq_s_b$esjava$1("\u0430")) {
                  self.cursor = self.limit - diff;
                  if (!self.eq_s_b$esjava$1("\u044F")) {
                    return false;
                  }
                }
                const result1 = self.slice_del$esjava$0();
              } else if (2 === result) {
                const result2 = self.slice_del$esjava$0();
              }
              return true;
            }
          }
        }
      };
      items[7] = {
        key: "r_noun$esjava$0",
        value: function r_noun$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(russianStemmer.a_5);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                const result1 = self.slice_del$esjava$0();
              }
              return true;
            }
          }
        }
      };
      items[8] = {
        key: "r_derivational$esjava$0",
        value: function r_derivational$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(russianStemmer.a_6);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (self.r_R2$esjava$0()) {
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  const result1 = self.slice_del$esjava$0();
                }
                return true;
              }
            } else {
              return false;
            }
          }
        }
      };
      items[9] = {
        key: "r_tidy_up$esjava$0",
        value: function r_tidy_up$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(russianStemmer.a_7);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                const result1 = self.slice_del$esjava$0();
                self.ket = self.cursor;
                if (self.eq_s_b$esjava$1("\u043D")) {
                  self.bra = self.cursor;
                  if (self.eq_s_b$esjava$1("\u043D")) {
                    const result2 = self.slice_del$esjava$0();
                  } else {
                    return false;
                  }
                } else {
                  return false;
                }
              } else if (2 === result) {
                if (self.eq_s_b$esjava$1("\u043D")) {
                  const result3 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              } else if (3 === result) {
                const result4 = self.slice_del$esjava$0();
              }
              return true;
            }
          }
        }
      };
      items[10] = {
        key: "stem$esjava$0",
        value: function stem$esjava$0() {
          const self = this;
          const result = this.r_mark_regions$esjava$0();
          this.cursor = this.cursor;
          ({ cursor: this.limit_backward, limit: this.cursor } = this);
          if (this.cursor < this.I_pV) {
            return false;
          } else {
            ({ I_pV: self.cursor, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp2;
            const diff = self.limit - self.cursor;
            const diff1 = self.limit - self.cursor;
            if (!self.r_perfective_gerund$esjava$0()) {
              self.cursor = self.limit - diff1;
              const diff2 = self.limit - self.cursor;
              if (!self.r_reflexive$esjava$0()) {
                self.cursor = self.limit - diff2;
              }
              const diff3 = self.limit - self.cursor;
              if (!self.r_adjectival$esjava$0()) {
                self.cursor = self.limit - diff3;
                if (!self.r_verb$esjava$0()) {
                  self.cursor = self.limit - diff3;
                  const result1 = self.r_noun$esjava$0();
                }
              }
            }
            self.cursor = self.limit - diff;
            self.ket = self.cursor;
            const diff4 = self.limit - self.cursor;
            if (self.eq_s_b$esjava$1("\u0438")) {
              self.bra = self.cursor;
              const result2 = self.slice_del$esjava$0();
            } else {
              self.cursor = self.limit - diff4;
            }
            const diff5 = self.limit - self.cursor;
            const result3 = self.r_derivational$esjava$0();
            self.cursor = self.limit - diff5;
            const diff6 = self.limit - self.cursor;
            const result4 = self.r_tidy_up$esjava$0();
            self.cursor = self.limit - diff6;
            self.limit_backward = self.limit_backward;
            self.cursor = self.limit_backward;
            return true;
          }
        }
      };
      items[11] = {
        key: "stem",
        value: function stem() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const stem$esjava$0 = self.stem$esjava$0;
            let applyResult = stem$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(russianStemmer.prototype), "stem", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[12] = {
        key: "I_p2",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p2")) {
            let num = self._$esjava$I_p2;
          } else {
            num = 0;
            self._$esjava$I_p2 = 0;
          }
          return num;
        },
        set(_$esjava$I_p2) {
          this._$esjava$I_p2 = _$esjava$I_p2;
        }
      };
      items[13] = {
        key: "I_pV",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_pV")) {
            let num = self._$esjava$I_pV;
          } else {
            num = 0;
            self._$esjava$I_pV = 0;
          }
          return num;
        },
        set(_$esjava$I_pV) {
          this._$esjava$I_pV = _$esjava$I_pV;
        }
      };
      const items1 = [
        {
          key: "a_0",
          get() {
            delete r1.a_0;
            const items = [new closure_4("\u0432", -1, 1), , , , , , , , ];
            const tmp = new closure_4("\u0432", -1, 1);
            items[1] = new closure_4("\u0438\u0432", 0, 2);
            const tmp2 = new closure_4("\u0438\u0432", 0, 2);
            items[2] = new closure_4("\u044B\u0432", 0, 2);
            const tmp3 = new closure_4("\u044B\u0432", 0, 2);
            items[3] = new closure_4("\u0432\u0448\u0438", -1, 1);
            const tmp4 = new closure_4("\u0432\u0448\u0438", -1, 1);
            items[4] = new closure_4("\u0438\u0432\u0448\u0438", 3, 2);
            const tmp5 = new closure_4("\u0438\u0432\u0448\u0438", 3, 2);
            items[5] = new closure_4("\u044B\u0432\u0448\u0438", 3, 2);
            const tmp6 = new closure_4("\u044B\u0432\u0448\u0438", 3, 2);
            items[6] = new closure_4("\u0432\u0448\u0438\u0441\u044C", -1, 1);
            const tmp7 = new closure_4("\u0432\u0448\u0438\u0441\u044C", -1, 1);
            items[7] = new closure_4("\u0438\u0432\u0448\u0438\u0441\u044C", 6, 2);
            const tmp8 = new closure_4("\u0438\u0432\u0448\u0438\u0441\u044C", 6, 2);
            items[8] = new closure_4("\u044B\u0432\u0448\u0438\u0441\u044C", 6, 2);
            russianStemmer.a_0 = items;
            return items;
          }
        },
        {
          key: "a_1",
          get() {
            delete r1.a_1;
            const items = [new closure_4("\u0435\u0435", -1, 1), , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("\u0435\u0435", -1, 1);
            items[1] = new closure_4("\u0438\u0435", -1, 1);
            const tmp2 = new closure_4("\u0438\u0435", -1, 1);
            items[2] = new closure_4("\u043E\u0435", -1, 1);
            const tmp3 = new closure_4("\u043E\u0435", -1, 1);
            items[3] = new closure_4("\u044B\u0435", -1, 1);
            const tmp4 = new closure_4("\u044B\u0435", -1, 1);
            items[4] = new closure_4("\u0438\u043C\u0438", -1, 1);
            const tmp5 = new closure_4("\u0438\u043C\u0438", -1, 1);
            items[5] = new closure_4("\u044B\u043C\u0438", -1, 1);
            const tmp6 = new closure_4("\u044B\u043C\u0438", -1, 1);
            items[6] = new closure_4("\u0435\u0439", -1, 1);
            const tmp7 = new closure_4("\u0435\u0439", -1, 1);
            items[7] = new closure_4("\u0438\u0439", -1, 1);
            const tmp8 = new closure_4("\u0438\u0439", -1, 1);
            items[8] = new closure_4("\u043E\u0439", -1, 1);
            const tmp9 = new closure_4("\u043E\u0439", -1, 1);
            items[9] = new closure_4("\u044B\u0439", -1, 1);
            const tmp10 = new closure_4("\u044B\u0439", -1, 1);
            items[10] = new closure_4("\u0435\u043C", -1, 1);
            const tmp11 = new closure_4("\u0435\u043C", -1, 1);
            items[11] = new closure_4("\u0438\u043C", -1, 1);
            const tmp12 = new closure_4("\u0438\u043C", -1, 1);
            items[12] = new closure_4("\u043E\u043C", -1, 1);
            const tmp13 = new closure_4("\u043E\u043C", -1, 1);
            items[13] = new closure_4("\u044B\u043C", -1, 1);
            const tmp14 = new closure_4("\u044B\u043C", -1, 1);
            items[14] = new closure_4("\u0435\u0433\u043E", -1, 1);
            const tmp15 = new closure_4("\u0435\u0433\u043E", -1, 1);
            items[15] = new closure_4("\u043E\u0433\u043E", -1, 1);
            const tmp16 = new closure_4("\u043E\u0433\u043E", -1, 1);
            items[16] = new closure_4("\u0435\u043C\u0443", -1, 1);
            const tmp17 = new closure_4("\u0435\u043C\u0443", -1, 1);
            items[17] = new closure_4("\u043E\u043C\u0443", -1, 1);
            const tmp18 = new closure_4("\u043E\u043C\u0443", -1, 1);
            items[18] = new closure_4("\u0438\u0445", -1, 1);
            const tmp19 = new closure_4("\u0438\u0445", -1, 1);
            items[19] = new closure_4("\u044B\u0445", -1, 1);
            const tmp20 = new closure_4("\u044B\u0445", -1, 1);
            items[20] = new closure_4("\u0435\u044E", -1, 1);
            const tmp21 = new closure_4("\u0435\u044E", -1, 1);
            items[21] = new closure_4("\u043E\u044E", -1, 1);
            const tmp22 = new closure_4("\u043E\u044E", -1, 1);
            items[22] = new closure_4("\u0443\u044E", -1, 1);
            const tmp23 = new closure_4("\u0443\u044E", -1, 1);
            items[23] = new closure_4("\u044E\u044E", -1, 1);
            const tmp24 = new closure_4("\u044E\u044E", -1, 1);
            items[24] = new closure_4("\u0430\u044F", -1, 1);
            const tmp25 = new closure_4("\u0430\u044F", -1, 1);
            items[25] = new closure_4("\u044F\u044F", -1, 1);
            russianStemmer.a_1 = items;
            return items;
          }
        },
        {
          key: "a_2",
          get() {
            delete r1.a_2;
            const items = [new closure_4("\u0435\u043C", -1, 1), , , , , , , ];
            const tmp = new closure_4("\u0435\u043C", -1, 1);
            items[1] = new closure_4("\u043D\u043D", -1, 1);
            const tmp2 = new closure_4("\u043D\u043D", -1, 1);
            items[2] = new closure_4("\u0432\u0448", -1, 1);
            const tmp3 = new closure_4("\u0432\u0448", -1, 1);
            items[3] = new closure_4("\u0438\u0432\u0448", 2, 2);
            const tmp4 = new closure_4("\u0438\u0432\u0448", 2, 2);
            items[4] = new closure_4("\u044B\u0432\u0448", 2, 2);
            const tmp5 = new closure_4("\u044B\u0432\u0448", 2, 2);
            items[5] = new closure_4("\u0449", -1, 1);
            const tmp6 = new closure_4("\u0449", -1, 1);
            items[6] = new closure_4("\u044E\u0449", 5, 1);
            const tmp7 = new closure_4("\u044E\u0449", 5, 1);
            items[7] = new closure_4("\u0443\u044E\u0449", 6, 2);
            russianStemmer.a_2 = items;
            return items;
          }
        },
        {
          key: "a_3",
          get() {
            delete r1.a_3;
            const items = [new closure_4("\u0441\u044C", -1, 1), ];
            const tmp = new closure_4("\u0441\u044C", -1, 1);
            items[1] = new closure_4("\u0441\u044F", -1, 1);
            russianStemmer.a_3 = items;
            return items;
          }
        },
        {
          key: "a_4",
          get() {
            delete r1.a_4;
            const items = [new closure_4("\u043B\u0430", -1, 1), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("\u043B\u0430", -1, 1);
            items[1] = new closure_4("\u0438\u043B\u0430", 0, 2);
            const tmp2 = new closure_4("\u0438\u043B\u0430", 0, 2);
            items[2] = new closure_4("\u044B\u043B\u0430", 0, 2);
            const tmp3 = new closure_4("\u044B\u043B\u0430", 0, 2);
            items[3] = new closure_4("\u043D\u0430", -1, 1);
            const tmp4 = new closure_4("\u043D\u0430", -1, 1);
            items[4] = new closure_4("\u0435\u043D\u0430", 3, 2);
            const tmp5 = new closure_4("\u0435\u043D\u0430", 3, 2);
            items[5] = new closure_4("\u0435\u0442\u0435", -1, 1);
            const tmp6 = new closure_4("\u0435\u0442\u0435", -1, 1);
            items[6] = new closure_4("\u0438\u0442\u0435", -1, 2);
            const tmp7 = new closure_4("\u0438\u0442\u0435", -1, 2);
            items[7] = new closure_4("\u0439\u0442\u0435", -1, 1);
            const tmp8 = new closure_4("\u0439\u0442\u0435", -1, 1);
            items[8] = new closure_4("\u0435\u0439\u0442\u0435", 7, 2);
            const tmp9 = new closure_4("\u0435\u0439\u0442\u0435", 7, 2);
            items[9] = new closure_4("\u0443\u0439\u0442\u0435", 7, 2);
            const tmp10 = new closure_4("\u0443\u0439\u0442\u0435", 7, 2);
            items[10] = new closure_4("\u043B\u0438", -1, 1);
            const tmp11 = new closure_4("\u043B\u0438", -1, 1);
            items[11] = new closure_4("\u0438\u043B\u0438", 10, 2);
            const tmp12 = new closure_4("\u0438\u043B\u0438", 10, 2);
            items[12] = new closure_4("\u044B\u043B\u0438", 10, 2);
            const tmp13 = new closure_4("\u044B\u043B\u0438", 10, 2);
            items[13] = new closure_4("\u0439", -1, 1);
            const tmp14 = new closure_4("\u0439", -1, 1);
            items[14] = new closure_4("\u0435\u0439", 13, 2);
            const tmp15 = new closure_4("\u0435\u0439", 13, 2);
            items[15] = new closure_4("\u0443\u0439", 13, 2);
            const tmp16 = new closure_4("\u0443\u0439", 13, 2);
            items[16] = new closure_4("\u043B", -1, 1);
            const tmp17 = new closure_4("\u043B", -1, 1);
            items[17] = new closure_4("\u0438\u043B", 16, 2);
            const tmp18 = new closure_4("\u0438\u043B", 16, 2);
            items[18] = new closure_4("\u044B\u043B", 16, 2);
            const tmp19 = new closure_4("\u044B\u043B", 16, 2);
            items[19] = new closure_4("\u0435\u043C", -1, 1);
            const tmp20 = new closure_4("\u0435\u043C", -1, 1);
            items[20] = new closure_4("\u0438\u043C", -1, 2);
            const tmp21 = new closure_4("\u0438\u043C", -1, 2);
            items[21] = new closure_4("\u044B\u043C", -1, 2);
            const tmp22 = new closure_4("\u044B\u043C", -1, 2);
            items[22] = new closure_4("\u043D", -1, 1);
            const tmp23 = new closure_4("\u043D", -1, 1);
            items[23] = new closure_4("\u0435\u043D", 22, 2);
            const tmp24 = new closure_4("\u0435\u043D", 22, 2);
            items[24] = new closure_4("\u043B\u043E", -1, 1);
            const tmp25 = new closure_4("\u043B\u043E", -1, 1);
            items[25] = new closure_4("\u0438\u043B\u043E", 24, 2);
            const tmp26 = new closure_4("\u0438\u043B\u043E", 24, 2);
            items[26] = new closure_4("\u044B\u043B\u043E", 24, 2);
            const tmp27 = new closure_4("\u044B\u043B\u043E", 24, 2);
            items[27] = new closure_4("\u043D\u043E", -1, 1);
            const tmp28 = new closure_4("\u043D\u043E", -1, 1);
            items[28] = new closure_4("\u0435\u043D\u043E", 27, 2);
            const tmp29 = new closure_4("\u0435\u043D\u043E", 27, 2);
            items[29] = new closure_4("\u043D\u043D\u043E", 27, 1);
            const tmp30 = new closure_4("\u043D\u043D\u043E", 27, 1);
            items[30] = new closure_4("\u0435\u0442", -1, 1);
            const tmp31 = new closure_4("\u0435\u0442", -1, 1);
            items[31] = new closure_4("\u0443\u0435\u0442", 30, 2);
            const tmp32 = new closure_4("\u0443\u0435\u0442", 30, 2);
            items[32] = new closure_4("\u0438\u0442", -1, 2);
            const tmp33 = new closure_4("\u0438\u0442", -1, 2);
            items[33] = new closure_4("\u044B\u0442", -1, 2);
            const tmp34 = new closure_4("\u044B\u0442", -1, 2);
            items[34] = new closure_4("\u044E\u0442", -1, 1);
            const tmp35 = new closure_4("\u044E\u0442", -1, 1);
            items[35] = new closure_4("\u0443\u044E\u0442", 34, 2);
            const tmp36 = new closure_4("\u0443\u044E\u0442", 34, 2);
            items[36] = new closure_4("\u044F\u0442", -1, 2);
            const tmp37 = new closure_4("\u044F\u0442", -1, 2);
            items[37] = new closure_4("\u043D\u044B", -1, 1);
            const tmp38 = new closure_4("\u043D\u044B", -1, 1);
            items[38] = new closure_4("\u0435\u043D\u044B", 37, 2);
            const tmp39 = new closure_4("\u0435\u043D\u044B", 37, 2);
            items[39] = new closure_4("\u0442\u044C", -1, 1);
            const tmp40 = new closure_4("\u0442\u044C", -1, 1);
            items[40] = new closure_4("\u0438\u0442\u044C", 39, 2);
            const tmp41 = new closure_4("\u0438\u0442\u044C", 39, 2);
            items[41] = new closure_4("\u044B\u0442\u044C", 39, 2);
            const tmp42 = new closure_4("\u044B\u0442\u044C", 39, 2);
            items[42] = new closure_4("\u0435\u0448\u044C", -1, 1);
            const tmp43 = new closure_4("\u0435\u0448\u044C", -1, 1);
            items[43] = new closure_4("\u0438\u0448\u044C", -1, 2);
            const tmp44 = new closure_4("\u0438\u0448\u044C", -1, 2);
            items[44] = new closure_4("\u044E", -1, 2);
            const tmp45 = new closure_4("\u044E", -1, 2);
            items[45] = new closure_4("\u0443\u044E", 44, 2);
            russianStemmer.a_4 = items;
            return items;
          }
        },
        {
          key: "a_5",
          get() {
            delete r1.a_5;
            const items = [new closure_4("\u0430", -1, 1), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("\u0430", -1, 1);
            items[1] = new closure_4("\u0435\u0432", -1, 1);
            const tmp2 = new closure_4("\u0435\u0432", -1, 1);
            items[2] = new closure_4("\u043E\u0432", -1, 1);
            const tmp3 = new closure_4("\u043E\u0432", -1, 1);
            items[3] = new closure_4("\u0435", -1, 1);
            const tmp4 = new closure_4("\u0435", -1, 1);
            items[4] = new closure_4("\u0438\u0435", 3, 1);
            const tmp5 = new closure_4("\u0438\u0435", 3, 1);
            items[5] = new closure_4("\u044C\u0435", 3, 1);
            const tmp6 = new closure_4("\u044C\u0435", 3, 1);
            items[6] = new closure_4("\u0438", -1, 1);
            const tmp7 = new closure_4("\u0438", -1, 1);
            items[7] = new closure_4("\u0435\u0438", 6, 1);
            const tmp8 = new closure_4("\u0435\u0438", 6, 1);
            items[8] = new closure_4("\u0438\u0438", 6, 1);
            const tmp9 = new closure_4("\u0438\u0438", 6, 1);
            items[9] = new closure_4("\u0430\u043C\u0438", 6, 1);
            const tmp10 = new closure_4("\u0430\u043C\u0438", 6, 1);
            items[10] = new closure_4("\u044F\u043C\u0438", 6, 1);
            const tmp11 = new closure_4("\u044F\u043C\u0438", 6, 1);
            items[11] = new closure_4("\u0438\u044F\u043C\u0438", 10, 1);
            const tmp12 = new closure_4("\u0438\u044F\u043C\u0438", 10, 1);
            items[12] = new closure_4("\u0439", -1, 1);
            const tmp13 = new closure_4("\u0439", -1, 1);
            items[13] = new closure_4("\u0435\u0439", 12, 1);
            const tmp14 = new closure_4("\u0435\u0439", 12, 1);
            items[14] = new closure_4("\u0438\u0435\u0439", 13, 1);
            const tmp15 = new closure_4("\u0438\u0435\u0439", 13, 1);
            items[15] = new closure_4("\u0438\u0439", 12, 1);
            const tmp16 = new closure_4("\u0438\u0439", 12, 1);
            items[16] = new closure_4("\u043E\u0439", 12, 1);
            const tmp17 = new closure_4("\u043E\u0439", 12, 1);
            items[17] = new closure_4("\u0430\u043C", -1, 1);
            const tmp18 = new closure_4("\u0430\u043C", -1, 1);
            items[18] = new closure_4("\u0435\u043C", -1, 1);
            const tmp19 = new closure_4("\u0435\u043C", -1, 1);
            items[19] = new closure_4("\u0438\u0435\u043C", 18, 1);
            const tmp20 = new closure_4("\u0438\u0435\u043C", 18, 1);
            items[20] = new closure_4("\u043E\u043C", -1, 1);
            const tmp21 = new closure_4("\u043E\u043C", -1, 1);
            items[21] = new closure_4("\u044F\u043C", -1, 1);
            const tmp22 = new closure_4("\u044F\u043C", -1, 1);
            items[22] = new closure_4("\u0438\u044F\u043C", 21, 1);
            const tmp23 = new closure_4("\u0438\u044F\u043C", 21, 1);
            items[23] = new closure_4("\u043E", -1, 1);
            const tmp24 = new closure_4("\u043E", -1, 1);
            items[24] = new closure_4("\u0443", -1, 1);
            const tmp25 = new closure_4("\u0443", -1, 1);
            items[25] = new closure_4("\u0430\u0445", -1, 1);
            const tmp26 = new closure_4("\u0430\u0445", -1, 1);
            items[26] = new closure_4("\u044F\u0445", -1, 1);
            const tmp27 = new closure_4("\u044F\u0445", -1, 1);
            items[27] = new closure_4("\u0438\u044F\u0445", 26, 1);
            const tmp28 = new closure_4("\u0438\u044F\u0445", 26, 1);
            items[28] = new closure_4("\u044B", -1, 1);
            const tmp29 = new closure_4("\u044B", -1, 1);
            items[29] = new closure_4("\u044C", -1, 1);
            const tmp30 = new closure_4("\u044C", -1, 1);
            items[30] = new closure_4("\u044E", -1, 1);
            const tmp31 = new closure_4("\u044E", -1, 1);
            items[31] = new closure_4("\u0438\u044E", 30, 1);
            const tmp32 = new closure_4("\u0438\u044E", 30, 1);
            items[32] = new closure_4("\u044C\u044E", 30, 1);
            const tmp33 = new closure_4("\u044C\u044E", 30, 1);
            items[33] = new closure_4("\u044F", -1, 1);
            const tmp34 = new closure_4("\u044F", -1, 1);
            items[34] = new closure_4("\u0438\u044F", 33, 1);
            const tmp35 = new closure_4("\u0438\u044F", 33, 1);
            items[35] = new closure_4("\u044C\u044F", 33, 1);
            russianStemmer.a_5 = items;
            return items;
          }
        },
        {
          key: "a_6",
          get() {
            delete r1.a_6;
            const items = [new closure_4("\u043E\u0441\u0442", -1, 1), ];
            const tmp = new closure_4("\u043E\u0441\u0442", -1, 1);
            items[1] = new closure_4("\u043E\u0441\u0442\u044C", -1, 1);
            russianStemmer.a_6 = items;
            return items;
          }
        },
        {
          key: "a_7",
          get() {
            delete r1.a_7;
            const items = [new closure_4("\u0435\u0439\u0448\u0435", -1, 1), , , ];
            const tmp = new closure_4("\u0435\u0439\u0448\u0435", -1, 1);
            items[1] = new closure_4("\u043D", -1, 2);
            const tmp2 = new closure_4("\u043D", -1, 2);
            items[2] = new closure_4("\u0435\u0439\u0448", -1, 1);
            const tmp3 = new closure_4("\u0435\u0439\u0448", -1, 1);
            items[3] = new closure_4("\u044C", -1, 3);
            russianStemmer.a_7 = items;
            return items;
          }
        },
        {
          key: "g_v",
          get() {
            delete r1.g_v;
            const items = [];
            russianStemmer.g_v = items;
            return items;
          }
        }
      ];
      callback(russianStemmer, items, items1);
      return russianStemmer;
    }(tmp3);
    let closure_24 = (arg0) => {
      function sloveneStemmer() {
        callback3(this, sloveneStemmer);
        const prototypeOf = Object.getPrototypeOf(sloveneStemmer);
        return callback2(this, prototypeOf(...arguments));
      }
      const callback = sloveneStemmer;
      _inherits(sloveneStemmer, arg0);
      let obj = {
        key: "stem$esjava$0",
        value: function stem$esjava$0() {
          const self = this;
          const current = this.current;
          this.I_p1 = current.length();
          ({ cursor: this.limit_backward, limit: this.cursor } = this);
          let num = 4;
          do {
            let diff = self.limit - self.cursor;
            if (self.I_p1 > 8) {
              self.ket = self.cursor;
              let tmp3 = closure_0;
              let result = self.find_among_b$esjava$1(closure_0.a_0);
              if (0 === result) {
                self.cursor = self.limit - diff;
                let tmp9 = result;
              } else {
                self.bra = self.cursor;
                if (0 === result) {
                  self.cursor = self.limit - diff;
                  let tmp8 = result;
                } else {
                  let tmp5 = result;
                  if (1 === result) {
                    let result1 = self.slice_del$esjava$0();
                    let tmp7 = result;
                  }
                }
              }
            } else {
              self.cursor = self.limit - diff;
            }
            let diff1 = self.limit - self.cursor;
            if (self.I_p1 > 7) {
              self.ket = self.cursor;
              let tmp11 = closure_0;
              let result2 = self.find_among_b$esjava$1(closure_0.a_1);
              if (0 === result2) {
                self.cursor = self.limit - diff1;
                let tmp17 = result2;
              } else {
                self.bra = self.cursor;
                if (0 === result2) {
                  self.cursor = self.limit - diff1;
                  let tmp16 = result2;
                } else {
                  let tmp13 = result2;
                  if (1 === result2) {
                    let result3 = self.slice_del$esjava$0();
                    let tmp15 = result2;
                  }
                }
              }
            } else {
              self.cursor = self.limit - diff1;
            }
            let current1 = self.current;
            self.I_p1 = current1.length();
            let diff2 = self.limit - self.cursor;
            if (self.I_p1 > 6) {
              self.ket = self.cursor;
              let tmp19 = closure_0;
              let result4 = self.find_among_b$esjava$1(closure_0.a_2);
              if (0 === result4) {
                self.cursor = self.limit - diff2;
                let tmp25 = result4;
              } else {
                self.bra = self.cursor;
                if (0 === result4) {
                  self.cursor = self.limit - diff2;
                  let tmp24 = result4;
                } else {
                  let tmp21 = result4;
                  if (1 === result4) {
                    let result5 = self.slice_del$esjava$0();
                    let tmp23 = result4;
                  }
                }
              }
            } else {
              self.cursor = self.limit - diff2;
            }
            let current2 = self.current;
            self.I_p1 = current2.length();
            let diff3 = self.limit - self.cursor;
            if (self.I_p1 > 6) {
              self.ket = self.cursor;
              let tmp27 = closure_0;
              let result6 = self.find_among_b$esjava$1(closure_0.a_3);
              if (0 === result6) {
                self.cursor = self.limit - diff3;
                let tmp33 = result6;
              } else {
                self.bra = self.cursor;
                if (0 === result6) {
                  self.cursor = self.limit - diff3;
                  let tmp32 = result6;
                } else {
                  let tmp29 = result6;
                  if (1 === result6) {
                    let result7 = self.slice_del$esjava$0();
                    let tmp31 = result6;
                  }
                }
              }
            } else {
              self.cursor = self.limit - diff3;
            }
            let current3 = self.current;
            self.I_p1 = current3.length();
            let diff4 = self.limit - self.cursor;
            if (self.I_p1 > 5) {
              self.ket = self.cursor;
              let tmp35 = closure_0;
              let result8 = self.find_among_b$esjava$1(closure_0.a_4);
              if (0 === result8) {
                self.cursor = self.limit - diff4;
                let tmp41 = result8;
              } else {
                self.bra = self.cursor;
                if (0 === result8) {
                  self.cursor = self.limit - diff4;
                  let tmp40 = result8;
                } else {
                  let tmp37 = result8;
                  if (1 === result8) {
                    let result9 = self.slice_del$esjava$0();
                    let tmp39 = result8;
                  }
                }
              }
            } else {
              self.cursor = self.limit - diff4;
            }
            let current4 = self.current;
            self.I_p1 = current4.length();
            let diff5 = self.limit - self.cursor;
            if (self.I_p1 > 6) {
              self.ket = self.cursor;
              let tmp44 = closure_0;
              if (self.in_grouping_b$esjava$3(closure_0.g_soglasniki, 98, 382)) {
                self.bra = self.cursor;
                let diff6 = self.limit - self.cursor;
                let tmp46 = closure_0;
                let limit = self.limit;
                if (self.in_grouping_b$esjava$3(closure_0.g_soglasniki, 98, 382)) {
                  self.cursor = limit - diff6;
                  let result10 = self.slice_del$esjava$0();
                  let tmp43 = diff6;
                } else {
                  self.cursor = limit - diff5;
                  tmp43 = diff6;
                }
              } else {
                self.cursor = self.limit - diff5;
                tmp43 = tmp;
              }
            } else {
              self.cursor = self.limit - diff5;
              tmp43 = tmp;
            }
            let current5 = self.current;
            self.I_p1 = current5.length();
            let diff7 = self.limit - self.cursor;
            if (self.I_p1 > 5) {
              self.ket = self.cursor;
              let tmp49 = closure_0;
              let result11 = self.find_among_b$esjava$1(closure_0.a_5);
              if (0 === result11) {
                self.cursor = self.limit - diff7;
                let tmp55 = result11;
              } else {
                self.bra = self.cursor;
                if (0 === result11) {
                  self.cursor = self.limit - diff7;
                  let tmp54 = result11;
                } else {
                  let tmp51 = result11;
                  if (1 === result11) {
                    let result12 = self.slice_del$esjava$0();
                    let tmp53 = result11;
                  }
                }
              }
            } else {
              self.cursor = self.limit - diff7;
            }
            num = num - 1;
            let tmp = tmp43;
          } while (num > 0);
          self.cursor = self.limit_backward;
          return true;
        }
      };
      const items = [obj, , ];
      obj = {
        key: "stem",
        value: function stem() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const stem$esjava$0 = self.stem$esjava$0;
            let applyResult = stem$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(sloveneStemmer.prototype), "stem", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[1] = obj;
      obj = {
        key: "I_p1",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p1")) {
            let num = self._$esjava$I_p1;
          } else {
            num = 0;
            self._$esjava$I_p1 = 0;
          }
          return num;
        },
        set(_$esjava$I_p1) {
          this._$esjava$I_p1 = _$esjava$I_p1;
        }
      };
      items[2] = obj;
      const items1 = [
        {
          key: "a_0",
          get() {
            delete r1.a_0;
            const items = [new closure_4("anski", -1, 1), , ];
            const tmp = new closure_4("anski", -1, 1);
            items[1] = new closure_4("evski", -1, 1);
            const tmp2 = new closure_4("evski", -1, 1);
            items[2] = new closure_4("ovski", -1, 1);
            sloveneStemmer.a_0 = items;
            return items;
          }
        },
        {
          key: "a_1",
          get() {
            delete r1.a_1;
            const items = [new closure_4("stvo", -1, 1), ];
            const tmp = new closure_4("stvo", -1, 1);
            items[1] = new closure_4("\u0161tvo", -1, 1);
            sloveneStemmer.a_1 = items;
            return items;
          }
        },
        {
          key: "a_2",
          get() {
            delete r1.a_2;
            const items = [new closure_4("ega", -1, 1), , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("ega", -1, 1);
            items[1] = new closure_4("ija", -1, 1);
            const tmp2 = new closure_4("ija", -1, 1);
            items[2] = new closure_4("ila", -1, 1);
            const tmp3 = new closure_4("ila", -1, 1);
            items[3] = new closure_4("ema", -1, 1);
            const tmp4 = new closure_4("ema", -1, 1);
            items[4] = new closure_4("vna", -1, 1);
            const tmp5 = new closure_4("vna", -1, 1);
            items[5] = new closure_4("ite", -1, 1);
            const tmp6 = new closure_4("ite", -1, 1);
            items[6] = new closure_4("ste", -1, 1);
            const tmp7 = new closure_4("ste", -1, 1);
            items[7] = new closure_4("\u0161\u010De", -1, 1);
            const tmp8 = new closure_4("\u0161\u010De", -1, 1);
            items[8] = new closure_4("ski", -1, 1);
            const tmp9 = new closure_4("ski", -1, 1);
            items[9] = new closure_4("\u0161ki", -1, 1);
            const tmp10 = new closure_4("\u0161ki", -1, 1);
            items[10] = new closure_4("iti", -1, 1);
            const tmp11 = new closure_4("iti", -1, 1);
            items[11] = new closure_4("ovi", -1, 1);
            const tmp12 = new closure_4("ovi", -1, 1);
            items[12] = new closure_4("\u010Dek", -1, 1);
            const tmp13 = new closure_4("\u010Dek", -1, 1);
            items[13] = new closure_4("ovm", -1, 1);
            const tmp14 = new closure_4("ovm", -1, 1);
            items[14] = new closure_4("\u010Dan", -1, 1);
            const tmp15 = new closure_4("\u010Dan", -1, 1);
            items[15] = new closure_4("len", -1, 1);
            const tmp16 = new closure_4("len", -1, 1);
            items[16] = new closure_4("ven", -1, 1);
            const tmp17 = new closure_4("ven", -1, 1);
            items[17] = new closure_4("\u0161en", -1, 1);
            const tmp18 = new closure_4("\u0161en", -1, 1);
            items[18] = new closure_4("ejo", -1, 1);
            const tmp19 = new closure_4("ejo", -1, 1);
            items[19] = new closure_4("ijo", -1, 1);
            const tmp20 = new closure_4("ijo", -1, 1);
            items[20] = new closure_4("ast", -1, 1);
            const tmp21 = new closure_4("ast", -1, 1);
            items[21] = new closure_4("ost", -1, 1);
            sloveneStemmer.a_2 = items;
            return items;
          }
        },
        {
          key: "a_3",
          get() {
            delete r1.a_3;
            const items = [new closure_4("ja", -1, 1), , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("ja", -1, 1);
            items[1] = new closure_4("ka", -1, 1);
            const tmp2 = new closure_4("ka", -1, 1);
            items[2] = new closure_4("ma", -1, 1);
            const tmp3 = new closure_4("ma", -1, 1);
            items[3] = new closure_4("ec", -1, 1);
            const tmp4 = new closure_4("ec", -1, 1);
            items[4] = new closure_4("je", -1, 1);
            const tmp5 = new closure_4("je", -1, 1);
            items[5] = new closure_4("eg", -1, 1);
            const tmp6 = new closure_4("eg", -1, 1);
            items[6] = new closure_4("eh", -1, 1);
            const tmp7 = new closure_4("eh", -1, 1);
            items[7] = new closure_4("ih", -1, 1);
            const tmp8 = new closure_4("ih", -1, 1);
            items[8] = new closure_4("mi", -1, 1);
            const tmp9 = new closure_4("mi", -1, 1);
            items[9] = new closure_4("ti", -1, 1);
            const tmp10 = new closure_4("ti", -1, 1);
            items[10] = new closure_4("ij", -1, 1);
            const tmp11 = new closure_4("ij", -1, 1);
            items[11] = new closure_4("al", -1, 1);
            const tmp12 = new closure_4("al", -1, 1);
            items[12] = new closure_4("il", -1, 1);
            const tmp13 = new closure_4("il", -1, 1);
            items[13] = new closure_4("em", -1, 1);
            const tmp14 = new closure_4("em", -1, 1);
            items[14] = new closure_4("om", -1, 1);
            const tmp15 = new closure_4("om", -1, 1);
            items[15] = new closure_4("an", -1, 1);
            const tmp16 = new closure_4("an", -1, 1);
            items[16] = new closure_4("en", -1, 1);
            const tmp17 = new closure_4("en", -1, 1);
            items[17] = new closure_4("in", -1, 1);
            const tmp18 = new closure_4("in", -1, 1);
            items[18] = new closure_4("do", -1, 1);
            const tmp19 = new closure_4("do", -1, 1);
            items[19] = new closure_4("jo", -1, 1);
            const tmp20 = new closure_4("jo", -1, 1);
            items[20] = new closure_4("ir", -1, 1);
            const tmp21 = new closure_4("ir", -1, 1);
            items[21] = new closure_4("at", -1, 1);
            const tmp22 = new closure_4("at", -1, 1);
            items[22] = new closure_4("ev", -1, 1);
            const tmp23 = new closure_4("ev", -1, 1);
            items[23] = new closure_4("iv", -1, 1);
            const tmp24 = new closure_4("iv", -1, 1);
            items[24] = new closure_4("ov", -1, 1);
            const tmp25 = new closure_4("ov", -1, 1);
            items[25] = new closure_4("o\u010D", -1, 1);
            sloveneStemmer.a_3 = items;
            return items;
          }
        },
        {
          key: "a_4",
          get() {
            delete r1.a_4;
            const items = [new closure_4("a", -1, 1), , , , , , , ];
            const tmp = new closure_4("a", -1, 1);
            items[1] = new closure_4("c", -1, 1);
            const tmp2 = new closure_4("c", -1, 1);
            items[2] = new closure_4("e", -1, 1);
            const tmp3 = new closure_4("e", -1, 1);
            items[3] = new closure_4("i", -1, 1);
            const tmp4 = new closure_4("i", -1, 1);
            items[4] = new closure_4("m", -1, 1);
            const tmp5 = new closure_4("m", -1, 1);
            items[5] = new closure_4("o", -1, 1);
            const tmp6 = new closure_4("o", -1, 1);
            items[6] = new closure_4("u", -1, 1);
            const tmp7 = new closure_4("u", -1, 1);
            items[7] = new closure_4("\u0161", -1, 1);
            sloveneStemmer.a_4 = items;
            return items;
          }
        },
        {
          key: "a_5",
          get() {
            delete r1.a_5;
            const items = [new closure_4("a", -1, 1), , , , ];
            const tmp = new closure_4("a", -1, 1);
            items[1] = new closure_4("e", -1, 1);
            const tmp2 = new closure_4("e", -1, 1);
            items[2] = new closure_4("i", -1, 1);
            const tmp3 = new closure_4("i", -1, 1);
            items[3] = new closure_4("o", -1, 1);
            const tmp4 = new closure_4("o", -1, 1);
            items[4] = new closure_4("u", -1, 1);
            sloveneStemmer.a_5 = items;
            return items;
          }
        },
        {
          key: "g_soglasniki",
          get() {
            delete r1.g_soglasniki;
            const items = [];
            sloveneStemmer.g_soglasniki = items;
            return items;
          }
        }
      ];
      callback(sloveneStemmer, items, items1);
      return sloveneStemmer;
    }(tmp3);
    let closure_25 = (arg0) => {
      function spanishStemmer() {
        callback3(this, spanishStemmer);
        const prototypeOf = Object.getPrototypeOf(spanishStemmer);
        return callback2(this, prototypeOf(...arguments));
      }
      const callback = spanishStemmer;
      _inherits(spanishStemmer, arg0);
      let obj = {
        key: "r_mark_regions$esjava$0",
        value: function r_mark_regions$esjava$0() {
          let cursor;
          let cursor2;
          const self = this;
          ({ limit: this.I_pV, limit: this.I_p1, limit: this.I_p2 } = this);
          ({ cursor, cursor: cursor2 } = this);
          if (this.in_grouping$esjava$3(spanishStemmer.g_v, 97, 252)) {
            if (!self.out_grouping$esjava$3(spanishStemmer.g_v, 97, 252)) {
              self.cursor = self.cursor;
              if (self.in_grouping$esjava$3(spanishStemmer.g_v, 97, 252)) {
                while (!self.out_grouping$esjava$3(spanishStemmer.g_v, 97, 252)) {
                  if (self.cursor < self.limit) {
                    self.cursor = self.cursor + 1;
                    // continue
                  }
                  break;
                }
              }
            } else {
              while (!self.in_grouping$esjava$3(spanishStemmer.g_v, 97, 252)) {
                if (self.cursor < self.limit) {
                  self.cursor = self.cursor + 1;
                  // continue
                }
                break;
              }
            }
            self.I_pV = self.cursor;
            self.cursor = cursor;
            while (!self.in_grouping$esjava$3(spanishStemmer.g_v, 97, 252)) {
              if (self.cursor < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
              self.cursor = tmp8;
              let flag = true;
              return true;
            }
            const cursor3 = self.cursor;
            while (!self.out_grouping$esjava$3(spanishStemmer.g_v, 97, 252)) {
              if (cursor3 < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            self.I_p1 = cursor3;
            while (!self.in_grouping$esjava$3(spanishStemmer.g_v, 97, 252)) {
              if (self.cursor < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            const cursor4 = self.cursor;
            while (!self.out_grouping$esjava$3(spanishStemmer.g_v, 97, 252)) {
              if (cursor4 < self.limit) {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            self.I_p2 = cursor4;
          }
          self.cursor = cursor2;
          if (self.out_grouping$esjava$3(spanishStemmer.g_v, 97, 252)) {
            if (!self.out_grouping$esjava$3(spanishStemmer.g_v, 97, 252)) {
              self.cursor = self.cursor;
              if (self.in_grouping$esjava$3(spanishStemmer.g_v, 97, 252)) {
                if (self.cursor < self.limit) {
                  self.cursor = self.cursor + 1;
                }
              }
            } else {
              while (!self.in_grouping$esjava$3(spanishStemmer.g_v, 97, 252)) {
                if (self.cursor < self.limit) {
                  self.cursor = self.cursor + 1;
                  // continue
                }
                break;
              }
            }
          }
        }
      };
      const items = [obj, , , , , , , , , , , , , , ];
      obj = {
        key: "r_postlude$esjava$0",
        value: function r_postlude$esjava$0() {
          const self = this;
          self.bra = self.cursor;
          const result = self.find_among$esjava$1(spanishStemmer.a_0);
          while (0 !== result) {
            self.ket = self.cursor;
            if (0 === result) {
              break;
            } else {
              if (1 === result) {
                let result1 = self.slice_from$esjava$1("a");
                // continue
              } else {
                if (2 === result) {
                  let result2 = self.slice_from$esjava$1("e");
                  // continue
                } else {
                  if (3 === result) {
                    let result3 = self.slice_from$esjava$1("i");
                    // continue
                  } else {
                    if (4 === result) {
                      let result4 = self.slice_from$esjava$1("o");
                      // continue
                    } else {
                      if (5 === result) {
                        let result5 = self.slice_from$esjava$1("u");
                        // continue
                      } else {
                        if (6 !== result) {
                          continue;
                        } else if (self.cursor >= self.limit) {
                          break;
                        } else {
                          self.cursor = self.cursor + 1;
                          // continue
                        }
                        self.cursor = tmp;
                        let flag = true;
                        return true;
                      }
                      continue;
                    }
                    continue;
                  }
                  continue;
                }
                continue;
              }
              continue;
            }
          }
        }
      };
      items[1] = obj;
      obj = {
        key: "r_RV$esjava$0",
        value: function r_RV$esjava$0() {
          return this.I_pV <= this.cursor;
        }
      };
      items[2] = obj;
      items[3] = {
        key: "r_R1$esjava$0",
        value: function r_R1$esjava$0() {
          return this.I_p1 <= this.cursor;
        }
      };
      items[4] = {
        key: "r_R2$esjava$0",
        value: function r_R2$esjava$0() {
          return this.I_p2 <= this.cursor;
        }
      };
      items[5] = {
        key: "r_attached_pronoun$esjava$0",
        value: function r_attached_pronoun$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          if (0 === this.find_among_b$esjava$1(spanishStemmer.a_1)) {
            return false;
          } else {
            self.bra = self.cursor;
            const result = self.find_among_b$esjava$1(spanishStemmer.a_2);
            if (0 === result) {
              return false;
            } else if (self.r_RV$esjava$0()) {
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  self.bra = self.cursor;
                  const result1 = self.slice_from$esjava$1("iendo");
                } else if (2 === result) {
                  self.bra = self.cursor;
                  const result2 = self.slice_from$esjava$1("ando");
                } else if (3 === result) {
                  self.bra = self.cursor;
                  const result3 = self.slice_from$esjava$1("ar");
                } else if (4 === result) {
                  self.bra = self.cursor;
                  const result4 = self.slice_from$esjava$1("er");
                } else if (5 === result) {
                  self.bra = self.cursor;
                  const result5 = self.slice_from$esjava$1("ir");
                } else if (6 === result) {
                  const result6 = self.slice_del$esjava$0();
                } else if (7 === result) {
                  if (self.eq_s_b$esjava$1("u")) {
                    const result7 = self.slice_del$esjava$0();
                  } else {
                    return false;
                  }
                }
                return true;
              }
            } else {
              return false;
            }
          }
        }
      };
      items[6] = {
        key: "r_standard_suffix$esjava$0",
        value: function r_standard_suffix$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(spanishStemmer.a_6);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            switch (result) {
              case 0:
                return false;
              case 1:
                if (self.r_R2$esjava$0()) {
                  const result1 = self.slice_del$esjava$0();
                  return true;
                } else {
                  return false;
                }
              break;
              case 2:
                if (self.r_R2$esjava$0()) {
                  const result2 = self.slice_del$esjava$0();
                  const diff = self.limit - self.cursor;
                  self.ket = self.cursor;
                  if (self.eq_s_b$esjava$1("ic")) {
                    self.bra = self.cursor;
                    if (self.r_R2$esjava$0()) {
                      const result3 = self.slice_del$esjava$0();
                    } else {
                      self.cursor = self.limit - diff;
                    }
                  } else {
                    self.cursor = self.limit - diff;
                  }
                } else {
                  return false;
                }
              break;
              case 3:
                if (self.r_R2$esjava$0()) {
                  const result4 = self.slice_from$esjava$1("log");
                } else {
                  return false;
                }
              break;
              case 4:
                if (self.r_R2$esjava$0()) {
                  const result5 = self.slice_from$esjava$1("u");
                } else {
                  return false;
                }
              break;
              case 5:
                if (self.r_R2$esjava$0()) {
                  const result6 = self.slice_from$esjava$1("ente");
                } else {
                  return false;
                }
              break;
              case 6:
                if (self.r_R1$esjava$0()) {
                  const result7 = self.slice_del$esjava$0();
                  const diff1 = self.limit - self.cursor;
                  self.ket = self.cursor;
                  const result8 = self.find_among_b$esjava$1(closure_0.a_3);
                  if (0 === result8) {
                    self.cursor = self.limit - diff1;
                  } else {
                    self.bra = self.cursor;
                    if (self.r_R2$esjava$0()) {
                      const result9 = self.slice_del$esjava$0();
                      if (0 === result8) {
                        self.cursor = self.limit - diff1;
                      } else if (1 === result8) {
                        self.ket = self.cursor;
                        if (self.eq_s_b$esjava$1("at")) {
                          self.bra = self.cursor;
                          if (self.r_R2$esjava$0()) {
                            const result10 = self.slice_del$esjava$0();
                          } else {
                            self.cursor = self.limit - diff1;
                          }
                        } else {
                          self.cursor = self.limit - diff1;
                        }
                      }
                    } else {
                      self.cursor = self.limit - diff1;
                    }
                  }
                } else {
                  return false;
                }
              break;
              case 7:
                if (self.r_R2$esjava$0()) {
                  const result11 = self.slice_del$esjava$0();
                  const diff2 = self.limit - self.cursor;
                  self.ket = self.cursor;
                  const result12 = self.find_among_b$esjava$1(closure_0.a_4);
                  if (0 === result12) {
                    self.cursor = self.limit - diff2;
                  } else {
                    self.bra = self.cursor;
                    if (0 === result12) {
                      self.cursor = self.limit - diff2;
                    } else if (1 === result12) {
                      if (self.r_R2$esjava$0()) {
                        const result13 = self.slice_del$esjava$0();
                      } else {
                        self.cursor = self.limit - diff2;
                      }
                    }
                  }
                } else {
                  return false;
                }
              break;
              case 8:
                if (self.r_R2$esjava$0()) {
                  const result14 = self.slice_del$esjava$0();
                  const diff3 = self.limit - self.cursor;
                  self.ket = self.cursor;
                  const result15 = self.find_among_b$esjava$1(closure_0.a_5);
                  if (0 === result15) {
                    self.cursor = self.limit - diff3;
                  } else {
                    self.bra = self.cursor;
                    if (0 === result15) {
                      self.cursor = self.limit - diff3;
                    } else if (1 === result15) {
                      if (self.r_R2$esjava$0()) {
                        const result16 = self.slice_del$esjava$0();
                      } else {
                        self.cursor = self.limit - diff3;
                      }
                    }
                  }
                } else {
                  return false;
                }
              break;
              case 9:
                if (self.r_R2$esjava$0()) {
                  const result17 = self.slice_del$esjava$0();
                  const diff4 = self.limit - self.cursor;
                  self.ket = self.cursor;
                  if (self.eq_s_b$esjava$1("at")) {
                    self.bra = self.cursor;
                    if (self.r_R2$esjava$0()) {
                      const result18 = self.slice_del$esjava$0();
                    } else {
                      self.cursor = self.limit - diff4;
                    }
                  } else {
                    self.cursor = self.limit - diff4;
                  }
                } else {
                  return false;
                }
              break;
            }
          }
        }
      };
      items[7] = {
        key: "r_y_verb_suffix$esjava$0",
        value: function r_y_verb_suffix$esjava$0() {
          let limit_backward;
          const self = this;
          if (this.cursor < this.I_pV) {
            return false;
          } else {
            ({ I_pV: self.cursor, limit_backward, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp;
            self.ket = self.cursor;
            const result = self.find_among_b$esjava$1(spanishStemmer.a_7);
            if (0 === result) {
              self.limit_backward = limit_backward;
              return false;
            } else {
              self.bra = self.cursor;
              self.limit_backward = limit_backward;
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  if (self.eq_s_b$esjava$1("u")) {
                    const result1 = self.slice_del$esjava$0();
                  } else {
                    return false;
                  }
                }
                return true;
              }
            }
          }
        }
      };
      items[8] = {
        key: "r_verb_suffix$esjava$0",
        value: function r_verb_suffix$esjava$0() {
          let limit_backward;
          const self = this;
          if (this.cursor < this.I_pV) {
            return false;
          } else {
            ({ I_pV: self.cursor, limit_backward, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp;
            self.ket = self.cursor;
            const result = self.find_among_b$esjava$1(spanishStemmer.a_8);
            if (0 === result) {
              self.limit_backward = limit_backward;
              return false;
            } else {
              self.bra = self.cursor;
              self.limit_backward = limit_backward;
              if (0 === result) {
                return false;
              } else if (1 === result) {
                let diff = self.limit - self.cursor;
                let limit = self.limit;
                if (self.eq_s_b$esjava$1("u")) {
                  limit = limit - self.cursor;
                  const limit2 = self.limit;
                  if (self.eq_s_b$esjava$1("g")) {
                    self.cursor = limit2 - limit;
                  } else {
                    diff = limit2 - diff;
                    self.cursor = diff;
                  }
                } else {
                  self.cursor = limit - diff;
                }
                self.bra = self.cursor;
                const result1 = self.slice_del$esjava$0();
              } else {
                if (2 === result) {
                  const result2 = self.slice_del$esjava$0();
                }
                return true;
              }
            }
          }
        }
      };
      items[9] = {
        key: "r_residual_suffix$esjava$0",
        value: function r_residual_suffix$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(spanishStemmer.a_9);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                if (self.r_RV$esjava$0()) {
                  const result1 = self.slice_del$esjava$0();
                } else {
                  return false;
                }
              } else if (2 === result) {
                if (self.r_RV$esjava$0()) {
                  const result2 = self.slice_del$esjava$0();
                  const diff = self.limit - self.cursor;
                  self.ket = self.cursor;
                  if (self.eq_s_b$esjava$1("u")) {
                    self.bra = self.cursor;
                    const diff1 = self.limit - self.cursor;
                    const limit = self.limit;
                    if (self.eq_s_b$esjava$1("g")) {
                      self.cursor = limit - diff1;
                      if (self.r_RV$esjava$0()) {
                        const result3 = self.slice_del$esjava$0();
                      } else {
                        self.cursor = self.limit - diff;
                      }
                    } else {
                      self.cursor = limit - diff;
                    }
                  } else {
                    self.cursor = self.limit - diff;
                  }
                } else {
                  return false;
                }
              }
              return true;
            }
          }
        }
      };
      items[10] = {
        key: "stem$esjava$0",
        value: function stem$esjava$0() {
          let cursor;
          const self = this;
          const result = this.r_mark_regions$esjava$0();
          this.cursor = this.cursor;
          ({ cursor: this.limit_backward, limit: this.cursor } = this);
          const diff = this.limit - this.cursor;
          const result1 = this.r_attached_pronoun$esjava$0();
          this.cursor = this.limit - diff;
          const diff1 = this.limit - this.cursor;
          const diff2 = this.limit - this.cursor;
          if (!this.r_standard_suffix$esjava$0()) {
            self.cursor = self.limit - diff1;
            if (!self.r_y_verb_suffix$esjava$0()) {
              self.cursor = self.limit - diff1;
              const result2 = self.r_verb_suffix$esjava$0();
            }
          }
          self.cursor = self.limit - diff2;
          const diff3 = self.limit - self.cursor;
          const result3 = self.r_residual_suffix$esjava$0();
          self.cursor = self.limit - diff3;
          ({ limit_backward: self.cursor, cursor } = self);
          const result4 = self.r_postlude$esjava$0();
          self.cursor = cursor;
          return true;
        }
      };
      items[11] = {
        key: "stem",
        value: function stem() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const stem$esjava$0 = self.stem$esjava$0;
            let applyResult = stem$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(spanishStemmer.prototype), "stem", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[12] = {
        key: "I_p2",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p2")) {
            let num = self._$esjava$I_p2;
          } else {
            num = 0;
            self._$esjava$I_p2 = 0;
          }
          return num;
        },
        set(_$esjava$I_p2) {
          this._$esjava$I_p2 = _$esjava$I_p2;
        }
      };
      items[13] = {
        key: "I_p1",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p1")) {
            let num = self._$esjava$I_p1;
          } else {
            num = 0;
            self._$esjava$I_p1 = 0;
          }
          return num;
        },
        set(_$esjava$I_p1) {
          this._$esjava$I_p1 = _$esjava$I_p1;
        }
      };
      items[14] = {
        key: "I_pV",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_pV")) {
            let num = self._$esjava$I_pV;
          } else {
            num = 0;
            self._$esjava$I_pV = 0;
          }
          return num;
        },
        set(_$esjava$I_pV) {
          this._$esjava$I_pV = _$esjava$I_pV;
        }
      };
      const items1 = [
        {
          key: "a_0",
          get() {
            delete r1.a_0;
            const items = [new closure_4("", -1, 6), , , , , ];
            const tmp = new closure_4("", -1, 6);
            items[1] = new closure_4("\u00E1", 0, 1);
            const tmp2 = new closure_4("\u00E1", 0, 1);
            items[2] = new closure_4("\u00E9", 0, 2);
            const tmp3 = new closure_4("\u00E9", 0, 2);
            items[3] = new closure_4("\u00ED", 0, 3);
            const tmp4 = new closure_4("\u00ED", 0, 3);
            items[4] = new closure_4("\u00F3", 0, 4);
            const tmp5 = new closure_4("\u00F3", 0, 4);
            items[5] = new closure_4("\u00FA", 0, 5);
            spanishStemmer.a_0 = items;
            return items;
          }
        },
        {
          key: "a_1",
          get() {
            delete r1.a_1;
            const items = [new closure_4("la", -1, -1), , , , , , , , , , , , ];
            const tmp = new closure_4("la", -1, -1);
            items[1] = new closure_4("sela", 0, -1);
            const tmp2 = new closure_4("sela", 0, -1);
            items[2] = new closure_4("le", -1, -1);
            const tmp3 = new closure_4("le", -1, -1);
            items[3] = new closure_4("me", -1, -1);
            const tmp4 = new closure_4("me", -1, -1);
            items[4] = new closure_4("se", -1, -1);
            const tmp5 = new closure_4("se", -1, -1);
            items[5] = new closure_4("lo", -1, -1);
            const tmp6 = new closure_4("lo", -1, -1);
            items[6] = new closure_4("selo", 5, -1);
            const tmp7 = new closure_4("selo", 5, -1);
            items[7] = new closure_4("las", -1, -1);
            const tmp8 = new closure_4("las", -1, -1);
            items[8] = new closure_4("selas", 7, -1);
            const tmp9 = new closure_4("selas", 7, -1);
            items[9] = new closure_4("les", -1, -1);
            const tmp10 = new closure_4("les", -1, -1);
            items[10] = new closure_4("los", -1, -1);
            const tmp11 = new closure_4("los", -1, -1);
            items[11] = new closure_4("selos", 10, -1);
            const tmp12 = new closure_4("selos", 10, -1);
            items[12] = new closure_4("nos", -1, -1);
            spanishStemmer.a_1 = items;
            return items;
          }
        },
        {
          key: "a_2",
          get() {
            delete r1.a_2;
            const items = [new closure_4("ando", -1, 6), , , , , , , , , , ];
            const tmp = new closure_4("ando", -1, 6);
            items[1] = new closure_4("iendo", -1, 6);
            const tmp2 = new closure_4("iendo", -1, 6);
            items[2] = new closure_4("yendo", -1, 7);
            const tmp3 = new closure_4("yendo", -1, 7);
            items[3] = new closure_4("\u00E1ndo", -1, 2);
            const tmp4 = new closure_4("\u00E1ndo", -1, 2);
            items[4] = new closure_4("i\u00E9ndo", -1, 1);
            const tmp5 = new closure_4("i\u00E9ndo", -1, 1);
            items[5] = new closure_4("ar", -1, 6);
            const tmp6 = new closure_4("ar", -1, 6);
            items[6] = new closure_4("er", -1, 6);
            const tmp7 = new closure_4("er", -1, 6);
            items[7] = new closure_4("ir", -1, 6);
            const tmp8 = new closure_4("ir", -1, 6);
            items[8] = new closure_4("\u00E1r", -1, 3);
            const tmp9 = new closure_4("\u00E1r", -1, 3);
            items[9] = new closure_4("\u00E9r", -1, 4);
            const tmp10 = new closure_4("\u00E9r", -1, 4);
            items[10] = new closure_4("\u00EDr", -1, 5);
            spanishStemmer.a_2 = items;
            return items;
          }
        },
        {
          key: "a_3",
          get() {
            delete r1.a_3;
            const items = [new closure_4("ic", -1, -1), , , ];
            const tmp = new closure_4("ic", -1, -1);
            items[1] = new closure_4("ad", -1, -1);
            const tmp2 = new closure_4("ad", -1, -1);
            items[2] = new closure_4("os", -1, -1);
            const tmp3 = new closure_4("os", -1, -1);
            items[3] = new closure_4("iv", -1, 1);
            spanishStemmer.a_3 = items;
            return items;
          }
        },
        {
          key: "a_4",
          get() {
            delete r1.a_4;
            const items = [new closure_4("able", -1, 1), , ];
            const tmp = new closure_4("able", -1, 1);
            items[1] = new closure_4("ible", -1, 1);
            const tmp2 = new closure_4("ible", -1, 1);
            items[2] = new closure_4("ante", -1, 1);
            spanishStemmer.a_4 = items;
            return items;
          }
        },
        {
          key: "a_5",
          get() {
            delete r1.a_5;
            const items = [new closure_4("ic", -1, 1), , ];
            const tmp = new closure_4("ic", -1, 1);
            items[1] = new closure_4("abil", -1, 1);
            const tmp2 = new closure_4("abil", -1, 1);
            items[2] = new closure_4("iv", -1, 1);
            spanishStemmer.a_5 = items;
            return items;
          }
        },
        {
          key: "a_6",
          get() {
            delete r1.a_6;
            const items = [new closure_4("ica", -1, 1), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("ica", -1, 1);
            items[1] = new closure_4("ancia", -1, 2);
            const tmp2 = new closure_4("ancia", -1, 2);
            items[2] = new closure_4("encia", -1, 5);
            const tmp3 = new closure_4("encia", -1, 5);
            items[3] = new closure_4("adora", -1, 2);
            const tmp4 = new closure_4("adora", -1, 2);
            items[4] = new closure_4("osa", -1, 1);
            const tmp5 = new closure_4("osa", -1, 1);
            items[5] = new closure_4("ista", -1, 1);
            const tmp6 = new closure_4("ista", -1, 1);
            items[6] = new closure_4("iva", -1, 9);
            const tmp7 = new closure_4("iva", -1, 9);
            items[7] = new closure_4("anza", -1, 1);
            const tmp8 = new closure_4("anza", -1, 1);
            items[8] = new closure_4("log\u00EDa", -1, 3);
            const tmp9 = new closure_4("log\u00EDa", -1, 3);
            items[9] = new closure_4("idad", -1, 8);
            const tmp10 = new closure_4("idad", -1, 8);
            items[10] = new closure_4("able", -1, 1);
            const tmp11 = new closure_4("able", -1, 1);
            items[11] = new closure_4("ible", -1, 1);
            const tmp12 = new closure_4("ible", -1, 1);
            items[12] = new closure_4("ante", -1, 2);
            const tmp13 = new closure_4("ante", -1, 2);
            items[13] = new closure_4("mente", -1, 7);
            const tmp14 = new closure_4("mente", -1, 7);
            items[14] = new closure_4("amente", 13, 6);
            const tmp15 = new closure_4("amente", 13, 6);
            items[15] = new closure_4("aci\u00F3n", -1, 2);
            const tmp16 = new closure_4("aci\u00F3n", -1, 2);
            items[16] = new closure_4("uci\u00F3n", -1, 4);
            const tmp17 = new closure_4("uci\u00F3n", -1, 4);
            items[17] = new closure_4("ico", -1, 1);
            const tmp18 = new closure_4("ico", -1, 1);
            items[18] = new closure_4("ismo", -1, 1);
            const tmp19 = new closure_4("ismo", -1, 1);
            items[19] = new closure_4("oso", -1, 1);
            const tmp20 = new closure_4("oso", -1, 1);
            items[20] = new closure_4("amiento", -1, 1);
            const tmp21 = new closure_4("amiento", -1, 1);
            items[21] = new closure_4("imiento", -1, 1);
            const tmp22 = new closure_4("imiento", -1, 1);
            items[22] = new closure_4("ivo", -1, 9);
            const tmp23 = new closure_4("ivo", -1, 9);
            items[23] = new closure_4("ador", -1, 2);
            const tmp24 = new closure_4("ador", -1, 2);
            items[24] = new closure_4("icas", -1, 1);
            const tmp25 = new closure_4("icas", -1, 1);
            items[25] = new closure_4("ancias", -1, 2);
            const tmp26 = new closure_4("ancias", -1, 2);
            items[26] = new closure_4("encias", -1, 5);
            const tmp27 = new closure_4("encias", -1, 5);
            items[27] = new closure_4("adoras", -1, 2);
            const tmp28 = new closure_4("adoras", -1, 2);
            items[28] = new closure_4("osas", -1, 1);
            const tmp29 = new closure_4("osas", -1, 1);
            items[29] = new closure_4("istas", -1, 1);
            const tmp30 = new closure_4("istas", -1, 1);
            items[30] = new closure_4("ivas", -1, 9);
            const tmp31 = new closure_4("ivas", -1, 9);
            items[31] = new closure_4("anzas", -1, 1);
            const tmp32 = new closure_4("anzas", -1, 1);
            items[32] = new closure_4("log\u00EDas", -1, 3);
            const tmp33 = new closure_4("log\u00EDas", -1, 3);
            items[33] = new closure_4("idades", -1, 8);
            const tmp34 = new closure_4("idades", -1, 8);
            items[34] = new closure_4("ables", -1, 1);
            const tmp35 = new closure_4("ables", -1, 1);
            items[35] = new closure_4("ibles", -1, 1);
            const tmp36 = new closure_4("ibles", -1, 1);
            items[36] = new closure_4("aciones", -1, 2);
            const tmp37 = new closure_4("aciones", -1, 2);
            items[37] = new closure_4("uciones", -1, 4);
            const tmp38 = new closure_4("uciones", -1, 4);
            items[38] = new closure_4("adores", -1, 2);
            const tmp39 = new closure_4("adores", -1, 2);
            items[39] = new closure_4("antes", -1, 2);
            const tmp40 = new closure_4("antes", -1, 2);
            items[40] = new closure_4("icos", -1, 1);
            const tmp41 = new closure_4("icos", -1, 1);
            items[41] = new closure_4("ismos", -1, 1);
            const tmp42 = new closure_4("ismos", -1, 1);
            items[42] = new closure_4("osos", -1, 1);
            const tmp43 = new closure_4("osos", -1, 1);
            items[43] = new closure_4("amientos", -1, 1);
            const tmp44 = new closure_4("amientos", -1, 1);
            items[44] = new closure_4("imientos", -1, 1);
            const tmp45 = new closure_4("imientos", -1, 1);
            items[45] = new closure_4("ivos", -1, 9);
            spanishStemmer.a_6 = items;
            return items;
          }
        },
        {
          key: "a_7",
          get() {
            delete r1.a_7;
            const items = [new closure_4("ya", -1, 1), , , , , , , , , , , ];
            const tmp = new closure_4("ya", -1, 1);
            items[1] = new closure_4("ye", -1, 1);
            const tmp2 = new closure_4("ye", -1, 1);
            items[2] = new closure_4("yan", -1, 1);
            const tmp3 = new closure_4("yan", -1, 1);
            items[3] = new closure_4("yen", -1, 1);
            const tmp4 = new closure_4("yen", -1, 1);
            items[4] = new closure_4("yeron", -1, 1);
            const tmp5 = new closure_4("yeron", -1, 1);
            items[5] = new closure_4("yendo", -1, 1);
            const tmp6 = new closure_4("yendo", -1, 1);
            items[6] = new closure_4("yo", -1, 1);
            const tmp7 = new closure_4("yo", -1, 1);
            items[7] = new closure_4("yas", -1, 1);
            const tmp8 = new closure_4("yas", -1, 1);
            items[8] = new closure_4("yes", -1, 1);
            const tmp9 = new closure_4("yes", -1, 1);
            items[9] = new closure_4("yais", -1, 1);
            const tmp10 = new closure_4("yais", -1, 1);
            items[10] = new closure_4("yamos", -1, 1);
            const tmp11 = new closure_4("yamos", -1, 1);
            items[11] = new closure_4("y\u00F3", -1, 1);
            spanishStemmer.a_7 = items;
            return items;
          }
        },
        {
          key: "a_8",
          get() {
            delete r1.a_8;
            const items = [new closure_4("aba", -1, 2), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("aba", -1, 2);
            items[1] = new closure_4("ada", -1, 2);
            const tmp2 = new closure_4("ada", -1, 2);
            items[2] = new closure_4("ida", -1, 2);
            const tmp3 = new closure_4("ida", -1, 2);
            items[3] = new closure_4("ara", -1, 2);
            const tmp4 = new closure_4("ara", -1, 2);
            items[4] = new closure_4("iera", -1, 2);
            const tmp5 = new closure_4("iera", -1, 2);
            items[5] = new closure_4("\u00EDa", -1, 2);
            const tmp6 = new closure_4("\u00EDa", -1, 2);
            items[6] = new closure_4("ar\u00EDa", 5, 2);
            const tmp7 = new closure_4("ar\u00EDa", 5, 2);
            items[7] = new closure_4("er\u00EDa", 5, 2);
            const tmp8 = new closure_4("er\u00EDa", 5, 2);
            items[8] = new closure_4("ir\u00EDa", 5, 2);
            const tmp9 = new closure_4("ir\u00EDa", 5, 2);
            items[9] = new closure_4("ad", -1, 2);
            const tmp10 = new closure_4("ad", -1, 2);
            items[10] = new closure_4("ed", -1, 2);
            const tmp11 = new closure_4("ed", -1, 2);
            items[11] = new closure_4("id", -1, 2);
            const tmp12 = new closure_4("id", -1, 2);
            items[12] = new closure_4("ase", -1, 2);
            const tmp13 = new closure_4("ase", -1, 2);
            items[13] = new closure_4("iese", -1, 2);
            const tmp14 = new closure_4("iese", -1, 2);
            items[14] = new closure_4("aste", -1, 2);
            const tmp15 = new closure_4("aste", -1, 2);
            items[15] = new closure_4("iste", -1, 2);
            const tmp16 = new closure_4("iste", -1, 2);
            items[16] = new closure_4("an", -1, 2);
            const tmp17 = new closure_4("an", -1, 2);
            items[17] = new closure_4("aban", 16, 2);
            const tmp18 = new closure_4("aban", 16, 2);
            items[18] = new closure_4("aran", 16, 2);
            const tmp19 = new closure_4("aran", 16, 2);
            items[19] = new closure_4("ieran", 16, 2);
            const tmp20 = new closure_4("ieran", 16, 2);
            items[20] = new closure_4("\u00EDan", 16, 2);
            const tmp21 = new closure_4("\u00EDan", 16, 2);
            items[21] = new closure_4("ar\u00EDan", 20, 2);
            const tmp22 = new closure_4("ar\u00EDan", 20, 2);
            items[22] = new closure_4("er\u00EDan", 20, 2);
            const tmp23 = new closure_4("er\u00EDan", 20, 2);
            items[23] = new closure_4("ir\u00EDan", 20, 2);
            const tmp24 = new closure_4("ir\u00EDan", 20, 2);
            items[24] = new closure_4("en", -1, 1);
            const tmp25 = new closure_4("en", -1, 1);
            items[25] = new closure_4("asen", 24, 2);
            const tmp26 = new closure_4("asen", 24, 2);
            items[26] = new closure_4("iesen", 24, 2);
            const tmp27 = new closure_4("iesen", 24, 2);
            items[27] = new closure_4("aron", -1, 2);
            const tmp28 = new closure_4("aron", -1, 2);
            items[28] = new closure_4("ieron", -1, 2);
            const tmp29 = new closure_4("ieron", -1, 2);
            items[29] = new closure_4("ar\u00E1n", -1, 2);
            const tmp30 = new closure_4("ar\u00E1n", -1, 2);
            items[30] = new closure_4("er\u00E1n", -1, 2);
            const tmp31 = new closure_4("er\u00E1n", -1, 2);
            items[31] = new closure_4("ir\u00E1n", -1, 2);
            const tmp32 = new closure_4("ir\u00E1n", -1, 2);
            items[32] = new closure_4("ado", -1, 2);
            const tmp33 = new closure_4("ado", -1, 2);
            items[33] = new closure_4("ido", -1, 2);
            const tmp34 = new closure_4("ido", -1, 2);
            items[34] = new closure_4("ando", -1, 2);
            const tmp35 = new closure_4("ando", -1, 2);
            items[35] = new closure_4("iendo", -1, 2);
            const tmp36 = new closure_4("iendo", -1, 2);
            items[36] = new closure_4("ar", -1, 2);
            const tmp37 = new closure_4("ar", -1, 2);
            items[37] = new closure_4("er", -1, 2);
            const tmp38 = new closure_4("er", -1, 2);
            items[38] = new closure_4("ir", -1, 2);
            const tmp39 = new closure_4("ir", -1, 2);
            items[39] = new closure_4("as", -1, 2);
            const tmp40 = new closure_4("as", -1, 2);
            items[40] = new closure_4("abas", 39, 2);
            const tmp41 = new closure_4("abas", 39, 2);
            items[41] = new closure_4("adas", 39, 2);
            const tmp42 = new closure_4("adas", 39, 2);
            items[42] = new closure_4("idas", 39, 2);
            const tmp43 = new closure_4("idas", 39, 2);
            items[43] = new closure_4("aras", 39, 2);
            const tmp44 = new closure_4("aras", 39, 2);
            items[44] = new closure_4("ieras", 39, 2);
            const tmp45 = new closure_4("ieras", 39, 2);
            items[45] = new closure_4("\u00EDas", 39, 2);
            const tmp46 = new closure_4("\u00EDas", 39, 2);
            items[46] = new closure_4("ar\u00EDas", 45, 2);
            const tmp47 = new closure_4("ar\u00EDas", 45, 2);
            items[47] = new closure_4("er\u00EDas", 45, 2);
            const tmp48 = new closure_4("er\u00EDas", 45, 2);
            items[48] = new closure_4("ir\u00EDas", 45, 2);
            const tmp49 = new closure_4("ir\u00EDas", 45, 2);
            items[49] = new closure_4("es", -1, 1);
            const tmp50 = new closure_4("es", -1, 1);
            items[50] = new closure_4("ases", 49, 2);
            const tmp51 = new closure_4("ases", 49, 2);
            items[51] = new closure_4("ieses", 49, 2);
            const tmp52 = new closure_4("ieses", 49, 2);
            items[52] = new closure_4("abais", -1, 2);
            const tmp53 = new closure_4("abais", -1, 2);
            items[53] = new closure_4("arais", -1, 2);
            const tmp54 = new closure_4("arais", -1, 2);
            items[54] = new closure_4("ierais", -1, 2);
            const tmp55 = new closure_4("ierais", -1, 2);
            items[55] = new closure_4("\u00EDais", -1, 2);
            const tmp56 = new closure_4("\u00EDais", -1, 2);
            items[56] = new closure_4("ar\u00EDais", 55, 2);
            const tmp57 = new closure_4("ar\u00EDais", 55, 2);
            items[57] = new closure_4("er\u00EDais", 55, 2);
            const tmp58 = new closure_4("er\u00EDais", 55, 2);
            items[58] = new closure_4("ir\u00EDais", 55, 2);
            const tmp59 = new closure_4("ir\u00EDais", 55, 2);
            items[59] = new closure_4("aseis", -1, 2);
            const tmp60 = new closure_4("aseis", -1, 2);
            items[60] = new closure_4("ieseis", -1, 2);
            const tmp61 = new closure_4("ieseis", -1, 2);
            items[61] = new closure_4("asteis", -1, 2);
            const tmp62 = new closure_4("asteis", -1, 2);
            items[62] = new closure_4("isteis", -1, 2);
            const tmp63 = new closure_4("isteis", -1, 2);
            items[63] = new closure_4("\u00E1is", -1, 2);
            const tmp64 = new closure_4("\u00E1is", -1, 2);
            items[64] = new closure_4("\u00E9is", -1, 1);
            const tmp65 = new closure_4("\u00E9is", -1, 1);
            items[65] = new closure_4("ar\u00E9is", 64, 2);
            const tmp66 = new closure_4("ar\u00E9is", 64, 2);
            items[66] = new closure_4("er\u00E9is", 64, 2);
            const tmp67 = new closure_4("er\u00E9is", 64, 2);
            items[67] = new closure_4("ir\u00E9is", 64, 2);
            const tmp68 = new closure_4("ir\u00E9is", 64, 2);
            items[68] = new closure_4("ados", -1, 2);
            const tmp69 = new closure_4("ados", -1, 2);
            items[69] = new closure_4("idos", -1, 2);
            const tmp70 = new closure_4("idos", -1, 2);
            items[70] = new closure_4("amos", -1, 2);
            const tmp71 = new closure_4("amos", -1, 2);
            items[71] = new closure_4("\u00E1bamos", 70, 2);
            const tmp72 = new closure_4("\u00E1bamos", 70, 2);
            items[72] = new closure_4("\u00E1ramos", 70, 2);
            const tmp73 = new closure_4("\u00E1ramos", 70, 2);
            items[73] = new closure_4("i\u00E9ramos", 70, 2);
            const tmp74 = new closure_4("i\u00E9ramos", 70, 2);
            items[74] = new closure_4("\u00EDamos", 70, 2);
            const tmp75 = new closure_4("\u00EDamos", 70, 2);
            items[75] = new closure_4("ar\u00EDamos", 74, 2);
            const tmp76 = new closure_4("ar\u00EDamos", 74, 2);
            items[76] = new closure_4("er\u00EDamos", 74, 2);
            const tmp77 = new closure_4("er\u00EDamos", 74, 2);
            items[77] = new closure_4("ir\u00EDamos", 74, 2);
            const tmp78 = new closure_4("ir\u00EDamos", 74, 2);
            items[78] = new closure_4("emos", -1, 1);
            const tmp79 = new closure_4("emos", -1, 1);
            items[79] = new closure_4("aremos", 78, 2);
            const tmp80 = new closure_4("aremos", 78, 2);
            items[80] = new closure_4("eremos", 78, 2);
            const tmp81 = new closure_4("eremos", 78, 2);
            items[81] = new closure_4("iremos", 78, 2);
            const tmp82 = new closure_4("iremos", 78, 2);
            items[82] = new closure_4("\u00E1semos", 78, 2);
            const tmp83 = new closure_4("\u00E1semos", 78, 2);
            items[83] = new closure_4("i\u00E9semos", 78, 2);
            const tmp84 = new closure_4("i\u00E9semos", 78, 2);
            items[84] = new closure_4("imos", -1, 2);
            const tmp85 = new closure_4("imos", -1, 2);
            items[85] = new closure_4("ar\u00E1s", -1, 2);
            const tmp86 = new closure_4("ar\u00E1s", -1, 2);
            items[86] = new closure_4("er\u00E1s", -1, 2);
            const tmp87 = new closure_4("er\u00E1s", -1, 2);
            items[87] = new closure_4("ir\u00E1s", -1, 2);
            const tmp88 = new closure_4("ir\u00E1s", -1, 2);
            items[88] = new closure_4("\u00EDs", -1, 2);
            const tmp89 = new closure_4("\u00EDs", -1, 2);
            items[89] = new closure_4("ar\u00E1", -1, 2);
            const tmp90 = new closure_4("ar\u00E1", -1, 2);
            items[90] = new closure_4("er\u00E1", -1, 2);
            const tmp91 = new closure_4("er\u00E1", -1, 2);
            items[91] = new closure_4("ir\u00E1", -1, 2);
            const tmp92 = new closure_4("ir\u00E1", -1, 2);
            items[92] = new closure_4("ar\u00E9", -1, 2);
            const tmp93 = new closure_4("ar\u00E9", -1, 2);
            items[93] = new closure_4("er\u00E9", -1, 2);
            const tmp94 = new closure_4("er\u00E9", -1, 2);
            items[94] = new closure_4("ir\u00E9", -1, 2);
            const tmp95 = new closure_4("ir\u00E9", -1, 2);
            items[95] = new closure_4("i\u00F3", -1, 2);
            spanishStemmer.a_8 = items;
            return items;
          }
        },
        {
          key: "a_9",
          get() {
            delete r1.a_9;
            const items = [new closure_4("a", -1, 1), , , , , , , ];
            const tmp = new closure_4("a", -1, 1);
            items[1] = new closure_4("e", -1, 2);
            const tmp2 = new closure_4("e", -1, 2);
            items[2] = new closure_4("o", -1, 1);
            const tmp3 = new closure_4("o", -1, 1);
            items[3] = new closure_4("os", -1, 1);
            const tmp4 = new closure_4("os", -1, 1);
            items[4] = new closure_4("\u00E1", -1, 1);
            const tmp5 = new closure_4("\u00E1", -1, 1);
            items[5] = new closure_4("\u00E9", -1, 2);
            const tmp6 = new closure_4("\u00E9", -1, 2);
            items[6] = new closure_4("\u00ED", -1, 1);
            const tmp7 = new closure_4("\u00ED", -1, 1);
            items[7] = new closure_4("\u00F3", -1, 1);
            spanishStemmer.a_9 = items;
            return items;
          }
        },
        {
          key: "g_v",
          get() {
            delete r1.g_v;
            const items = [];
            spanishStemmer.g_v = items;
            return items;
          }
        }
      ];
      callback(spanishStemmer, items, items1);
      return spanishStemmer;
    }(tmp3);
    let closure_26 = (arg0) => {
      function swedishStemmer() {
        callback3(this, swedishStemmer);
        const prototypeOf = Object.getPrototypeOf(swedishStemmer);
        return callback2(this, prototypeOf(...arguments));
      }
      const callback = swedishStemmer;
      _inherits(swedishStemmer, arg0);
      let obj = {
        key: "r_mark_regions$esjava$0",
        value: function r_mark_regions$esjava$0() {
          const self = this;
          this.I_p1 = this.limit;
          const sum = this.cursor + 3;
          if (0 <= sum) {
            if (sum <= self.limit) {
              self.cursor = sum;
              self.I_x = self.cursor;
              self.cursor = tmp;
              self.cursor = self.cursor;
              while (!self.in_grouping$esjava$3(swedishStemmer.g_v, 97, 246)) {
                if (self.cursor >= self.limit) {
                  let flag = false;
                  return false;
                } else {
                  self.cursor = self.cursor + 1;
                  // continue
                }
              }
              const cursor = self.cursor;
              while (!self.out_grouping$esjava$3(swedishStemmer.g_v, 97, 246)) {
                if (cursor >= self.limit) {
                  let flag2 = false;
                  return false;
                } else {
                  self.cursor = self.cursor + 1;
                  // continue
                }
              }
              self.I_p1 = cursor;
              if (self.I_p1 < self.I_x) {
                self.I_p1 = self.I_x;
              }
              return true;
            }
          }
          return false;
        }
      };
      const items = [obj, , , , , , , ];
      obj = {
        key: "r_main_suffix$esjava$0",
        value: function r_main_suffix$esjava$0() {
          let limit_backward;
          const self = this;
          if (this.cursor < this.I_p1) {
            return false;
          } else {
            ({ I_p1: self.cursor, limit_backward, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp;
            self.ket = self.cursor;
            const result = self.find_among_b$esjava$1(swedishStemmer.a_0);
            if (0 === result) {
              self.limit_backward = limit_backward;
              return false;
            } else {
              self.bra = self.cursor;
              self.limit_backward = limit_backward;
              if (0 === result) {
                return false;
              } else {
                if (1 === result) {
                  const result1 = self.slice_del$esjava$0();
                } else if (2 === result) {
                  if (self.in_grouping_b$esjava$3(swedishStemmer.g_s_ending, 98, 121)) {
                    const result2 = self.slice_del$esjava$0();
                  } else {
                    return false;
                  }
                }
                return true;
              }
            }
          }
        }
      };
      items[1] = obj;
      obj = {
        key: "r_consonant_pair$esjava$0",
        value: function r_consonant_pair$esjava$0() {
          let limit_backward;
          const self = this;
          const tmp2 = this.cursor < this.I_p1;
          if (tmp2) {
            return !tmp2;
          } else {
            ({ I_p1: self.cursor, limit_backward, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp;
            const diff = self.limit - self.cursor;
            if (0 === self.find_among_b$esjava$1(swedishStemmer.a_1)) {
              self.limit_backward = limit_backward;
              let flag = false;
            } else {
              self.cursor = self.limit - diff;
              self.ket = self.cursor;
              if (self.cursor <= self.limit_backward) {
                self.limit_backward = limit_backward;
                flag = false;
              } else {
                self.cursor = self.cursor - 1;
                self.bra = self.cursor;
                const result = self.slice_del$esjava$0();
                self.limit_backward = limit_backward;
                flag = true;
              }
            }
          }
        }
      };
      items[2] = obj;
      items[3] = {
        key: "r_other_suffix$esjava$0",
        value: function r_other_suffix$esjava$0() {
          let limit_backward;
          const self = this;
          if (this.cursor < this.I_p1) {
            return false;
          } else {
            ({ I_p1: self.cursor, limit_backward, cursor: self.limit_backward } = self);
            self.cursor = self.limit - tmp;
            self.ket = self.cursor;
            const result = self.find_among_b$esjava$1(swedishStemmer.a_2);
            if (0 === result) {
              self.limit_backward = limit_backward;
              return false;
            } else {
              self.bra = self.cursor;
              if (0 === result) {
                self.limit_backward = limit_backward;
                return false;
              } else {
                if (1 === result) {
                  const result1 = self.slice_del$esjava$0();
                } else if (2 === result) {
                  const result2 = self.slice_from$esjava$1("l\u00F6s");
                } else if (3 === result) {
                  const result3 = self.slice_from$esjava$1("full");
                }
                self.limit_backward = limit_backward;
                return true;
              }
            }
          }
        }
      };
      items[4] = {
        key: "stem$esjava$0",
        value: function stem$esjava$0() {
          const result = this.r_mark_regions$esjava$0();
          this.cursor = this.cursor;
          ({ cursor: this.limit_backward, limit: this.cursor } = this);
          const diff = this.limit - this.cursor;
          const result1 = this.r_main_suffix$esjava$0();
          this.cursor = this.limit - diff;
          const diff1 = this.limit - this.cursor;
          const result2 = this.r_consonant_pair$esjava$0();
          this.cursor = this.limit - diff1;
          const result3 = this.r_other_suffix$esjava$0();
          this.cursor = this.limit_backward;
          return true;
        }
      };
      items[5] = {
        key: "stem",
        value: function stem() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const stem$esjava$0 = self.stem$esjava$0;
            let applyResult = stem$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(swedishStemmer.prototype), "stem", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[6] = {
        key: "I_x",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_x")) {
            let num = self._$esjava$I_x;
          } else {
            num = 0;
            self._$esjava$I_x = 0;
          }
          return num;
        },
        set(_$esjava$I_x) {
          this._$esjava$I_x = _$esjava$I_x;
        }
      };
      items[7] = {
        key: "I_p1",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_p1")) {
            let num = self._$esjava$I_p1;
          } else {
            num = 0;
            self._$esjava$I_p1 = 0;
          }
          return num;
        },
        set(_$esjava$I_p1) {
          this._$esjava$I_p1 = _$esjava$I_p1;
        }
      };
      const items1 = [
        {
          key: "a_0",
          get() {
            delete r1.a_0;
            const items = [new closure_4("a", -1, 1), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("a", -1, 1);
            items[1] = new closure_4("arna", 0, 1);
            const tmp2 = new closure_4("arna", 0, 1);
            items[2] = new closure_4("erna", 0, 1);
            const tmp3 = new closure_4("erna", 0, 1);
            items[3] = new closure_4("heterna", 2, 1);
            const tmp4 = new closure_4("heterna", 2, 1);
            items[4] = new closure_4("orna", 0, 1);
            const tmp5 = new closure_4("orna", 0, 1);
            items[5] = new closure_4("ad", -1, 1);
            const tmp6 = new closure_4("ad", -1, 1);
            items[6] = new closure_4("e", -1, 1);
            const tmp7 = new closure_4("e", -1, 1);
            items[7] = new closure_4("ade", 6, 1);
            const tmp8 = new closure_4("ade", 6, 1);
            items[8] = new closure_4("ande", 6, 1);
            const tmp9 = new closure_4("ande", 6, 1);
            items[9] = new closure_4("arne", 6, 1);
            const tmp10 = new closure_4("arne", 6, 1);
            items[10] = new closure_4("are", 6, 1);
            const tmp11 = new closure_4("are", 6, 1);
            items[11] = new closure_4("aste", 6, 1);
            const tmp12 = new closure_4("aste", 6, 1);
            items[12] = new closure_4("en", -1, 1);
            const tmp13 = new closure_4("en", -1, 1);
            items[13] = new closure_4("anden", 12, 1);
            const tmp14 = new closure_4("anden", 12, 1);
            items[14] = new closure_4("aren", 12, 1);
            const tmp15 = new closure_4("aren", 12, 1);
            items[15] = new closure_4("heten", 12, 1);
            const tmp16 = new closure_4("heten", 12, 1);
            items[16] = new closure_4("ern", -1, 1);
            const tmp17 = new closure_4("ern", -1, 1);
            items[17] = new closure_4("ar", -1, 1);
            const tmp18 = new closure_4("ar", -1, 1);
            items[18] = new closure_4("er", -1, 1);
            const tmp19 = new closure_4("er", -1, 1);
            items[19] = new closure_4("heter", 18, 1);
            const tmp20 = new closure_4("heter", 18, 1);
            items[20] = new closure_4("or", -1, 1);
            const tmp21 = new closure_4("or", -1, 1);
            items[21] = new closure_4("s", -1, 2);
            const tmp22 = new closure_4("s", -1, 2);
            items[22] = new closure_4("as", 21, 1);
            const tmp23 = new closure_4("as", 21, 1);
            items[23] = new closure_4("arnas", 22, 1);
            const tmp24 = new closure_4("arnas", 22, 1);
            items[24] = new closure_4("ernas", 22, 1);
            const tmp25 = new closure_4("ernas", 22, 1);
            items[25] = new closure_4("ornas", 22, 1);
            const tmp26 = new closure_4("ornas", 22, 1);
            items[26] = new closure_4("es", 21, 1);
            const tmp27 = new closure_4("es", 21, 1);
            items[27] = new closure_4("ades", 26, 1);
            const tmp28 = new closure_4("ades", 26, 1);
            items[28] = new closure_4("andes", 26, 1);
            const tmp29 = new closure_4("andes", 26, 1);
            items[29] = new closure_4("ens", 21, 1);
            const tmp30 = new closure_4("ens", 21, 1);
            items[30] = new closure_4("arens", 29, 1);
            const tmp31 = new closure_4("arens", 29, 1);
            items[31] = new closure_4("hetens", 29, 1);
            const tmp32 = new closure_4("hetens", 29, 1);
            items[32] = new closure_4("erns", 21, 1);
            const tmp33 = new closure_4("erns", 21, 1);
            items[33] = new closure_4("at", -1, 1);
            const tmp34 = new closure_4("at", -1, 1);
            items[34] = new closure_4("andet", -1, 1);
            const tmp35 = new closure_4("andet", -1, 1);
            items[35] = new closure_4("het", -1, 1);
            const tmp36 = new closure_4("het", -1, 1);
            items[36] = new closure_4("ast", -1, 1);
            swedishStemmer.a_0 = items;
            return items;
          }
        },
        {
          key: "a_1",
          get() {
            delete r1.a_1;
            const items = [new closure_4("dd", -1, -1), , , , , , ];
            const tmp = new closure_4("dd", -1, -1);
            items[1] = new closure_4("gd", -1, -1);
            const tmp2 = new closure_4("gd", -1, -1);
            items[2] = new closure_4("nn", -1, -1);
            const tmp3 = new closure_4("nn", -1, -1);
            items[3] = new closure_4("dt", -1, -1);
            const tmp4 = new closure_4("dt", -1, -1);
            items[4] = new closure_4("gt", -1, -1);
            const tmp5 = new closure_4("gt", -1, -1);
            items[5] = new closure_4("kt", -1, -1);
            const tmp6 = new closure_4("kt", -1, -1);
            items[6] = new closure_4("tt", -1, -1);
            swedishStemmer.a_1 = items;
            return items;
          }
        },
        {
          key: "a_2",
          get() {
            delete r1.a_2;
            const items = [new closure_4("ig", -1, 1), , , , ];
            const tmp = new closure_4("ig", -1, 1);
            items[1] = new closure_4("lig", 0, 1);
            const tmp2 = new closure_4("lig", 0, 1);
            items[2] = new closure_4("els", -1, 1);
            const tmp3 = new closure_4("els", -1, 1);
            items[3] = new closure_4("fullt", -1, 3);
            const tmp4 = new closure_4("fullt", -1, 3);
            items[4] = new closure_4("l\u00F6st", -1, 2);
            swedishStemmer.a_2 = items;
            return items;
          }
        },
        {
          key: "g_v",
          get() {
            delete r1.g_v;
            const items = [];
            swedishStemmer.g_v = items;
            return items;
          }
        },
        {
          key: "g_s_ending",
          get() {
            delete r1.g_s_ending;
            const items = [];
            swedishStemmer.g_s_ending = items;
            return items;
          }
        }
      ];
      callback(swedishStemmer, items, items1);
      return swedishStemmer;
    }(tmp3);
    let closure_27 = (arg0) => {
      function tamilStemmer() {
        callback3(this, tamilStemmer);
        const prototypeOf = Object.getPrototypeOf(tamilStemmer);
        return callback2(this, prototypeOf(...arguments));
      }
      const callback = tamilStemmer;
      _inherits(tamilStemmer, arg0);
      let obj = {
        key: "r_has_min_length$esjava$0",
        value: function r_has_min_length$esjava$0() {
          const current = this.current;
          this.I_length = current.length();
          return this.I_length > 4;
        }
      };
      const items = [obj, , , , , , , , , , , , , , , , , , , ];
      obj = {
        key: "r_fix_va_start$esjava$0",
        value: function r_fix_va_start$esjava$0() {
          let cursor2;
          let cursor3;
          let cursor4;
          let cursor5;
          let cursor6;
          let cursor7;
          let cursor8;
          let cursor9;
          const self = this;
          const cursor = this.cursor;
          ({ cursor: cursor2, cursor: cursor3 } = this);
          if (!this.eq_s$esjava$1("\u0BB5\u0BCB")) {
            self.cursor = cursor3;
          }
          self.cursor = cursor2;
          self.bra = self.cursor;
          if (self.eq_s$esjava$1("\u0BB5\u0BCB")) {
            self.ket = self.cursor;
            const result = self.slice_from$esjava$1("\u0B93");
          } else {
            self.cursor = cursor;
            ({ cursor: cursor4, cursor: cursor5 } = self);
            if (!self.eq_s$esjava$1("\u0BB5\u0BCA")) {
              self.cursor = cursor5;
            }
            self.cursor = cursor4;
            self.bra = self.cursor;
            if (self.eq_s$esjava$1("\u0BB5\u0BCA")) {
              self.ket = self.cursor;
              const result1 = self.slice_from$esjava$1("\u0B92");
            } else {
              self.cursor = cursor;
              ({ cursor: cursor6, cursor: cursor7 } = self);
              if (!self.eq_s$esjava$1("\u0BB5\u0BC1")) {
                self.cursor = cursor7;
              }
              self.cursor = cursor6;
              self.bra = self.cursor;
              if (self.eq_s$esjava$1("\u0BB5\u0BC1")) {
                self.ket = self.cursor;
                const result2 = self.slice_from$esjava$1("\u0B89");
              } else {
                self.cursor = cursor;
                ({ cursor: cursor8, cursor: cursor9 } = self);
                if (!self.eq_s$esjava$1("\u0BB5\u0BC2")) {
                  self.cursor = cursor9;
                }
                self.cursor = cursor8;
                self.bra = self.cursor;
                if (self.eq_s$esjava$1("\u0BB5\u0BC2")) {
                  self.ket = self.cursor;
                  const result3 = self.slice_from$esjava$1("\u0B8A");
                } else {
                  return false;
                }
              }
            }
          }
          return true;
        }
      };
      items[1] = obj;
      obj = {
        key: "r_fix_endings$esjava$0",
        value: function r_fix_endings$esjava$0() {
          const self = this;
          this.B_found_wrong_ending = true;
          while (self.B_found_wrong_ending) {
            let result = self.r_fix_ending$esjava$0();
            self.cursor = self.cursor;
            // continue
          }
          self.cursor = self.cursor;
          return true;
        }
      };
      items[2] = obj;
      items[3] = {
        key: "r_remove_question_prefixes$esjava$0",
        value: function r_remove_question_prefixes$esjava$0() {
          const self = this;
          this.bra = this.cursor;
          if (this.eq_s$esjava$1("\u0B8E")) {
            if (0 === self.find_among$esjava$1(tamilStemmer.a_0)) {
              return false;
            } else if (self.eq_s$esjava$1("\u0BCD")) {
              self.ket = self.cursor;
              const result = self.slice_del$esjava$0();
              const result1 = self.r_fix_va_start$esjava$0();
              self.cursor = self.cursor;
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
      };
      items[4] = {
        key: "r_fix_ending$esjava$0",
        value: function r_fix_ending$esjava$0() {
          const self = this;
          this.B_found_wrong_ending = false;
          const current = this.current;
          this.I_length = current.length();
          if (this.I_length > 3) {
            ({ cursor: self.limit_backward, limit: self.cursor } = self);
            const diff = self.limit - self.cursor;
            self.ket = self.cursor;
            if (0 === self.find_among_b$esjava$1(tamilStemmer.a_1)) {
              self.cursor = self.limit - diff;
              self.ket = self.cursor;
              if (self.eq_s_b$esjava$1("\u0BAF\u0BCD")) {
                const diff1 = self.limit - self.cursor;
                if (0 !== self.find_among_b$esjava$1(tamilStemmer.a_2)) {
                  self.cursor = self.limit - diff1;
                  self.bra = self.cursor;
                  const result = self.slice_del$esjava$0();
                }
              }
              self.cursor = self.limit - diff;
              self.ket = self.cursor;
              const diff2 = self.limit - self.cursor;
              if (!self.eq_s_b$esjava$1("\u0B9F\u0BCD\u0BAA\u0BCD")) {
                self.cursor = self.limit - diff2;
                if (!self.eq_s_b$esjava$1("\u0B9F\u0BCD\u0B95\u0BCD")) {
                  self.cursor = self.limit - diff;
                  self.ket = self.cursor;
                  if (self.eq_s_b$esjava$1("\u0BA9\u0BCD\u0BB1\u0BCD")) {
                    self.bra = self.cursor;
                    const result1 = self.slice_from$esjava$1("\u0BB2\u0BCD");
                  } else {
                    self.cursor = self.limit - diff;
                    self.ket = self.cursor;
                    if (self.eq_s_b$esjava$1("\u0BB1\u0BCD\u0B95\u0BCD")) {
                      self.bra = self.cursor;
                      const result2 = self.slice_from$esjava$1("\u0BB2\u0BCD");
                    } else {
                      self.cursor = self.limit - diff;
                      self.ket = self.cursor;
                      if (self.eq_s_b$esjava$1("\u0B9F\u0BCD\u0B9F\u0BCD")) {
                        self.bra = self.cursor;
                        const result3 = self.slice_from$esjava$1("\u0B9F\u0BC1");
                      } else {
                        self.cursor = self.limit - diff;
                        if (self.B_found_vetrumai_urupu) {
                          self.ket = self.cursor;
                          if (self.eq_s_b$esjava$1("\u0BA4\u0BCD\u0BA4\u0BCD")) {
                            const diff3 = self.limit - self.cursor;
                            const diff4 = self.limit - self.cursor;
                            if (!self.eq_s_b$esjava$1("\u0BC8")) {
                              self.cursor = self.limit - diff4;
                              self.cursor = self.limit - diff3;
                              self.bra = self.cursor;
                              const result4 = self.slice_from$esjava$1("\u0BAE\u0BCD");
                              self.bra = self.cursor;
                            }
                          }
                        }
                        self.cursor = self.limit - diff;
                        self.ket = self.cursor;
                        const diff5 = self.limit - self.cursor;
                        if (!self.eq_s_b$esjava$1("\u0BC1\u0B95\u0BCD")) {
                          self.cursor = self.limit - diff5;
                          if (!self.eq_s_b$esjava$1("\u0BC1\u0B95\u0BCD\u0B95\u0BCD")) {
                            self.cursor = self.limit - diff;
                            self.ket = self.cursor;
                            if (self.eq_s_b$esjava$1("\u0BCD")) {
                              if (0 !== self.find_among_b$esjava$1(tamilStemmer.a_3)) {
                                if (self.eq_s_b$esjava$1("\u0BCD")) {
                                  if (0 !== self.find_among_b$esjava$1(tamilStemmer.a_4)) {
                                    self.bra = self.cursor;
                                    const result5 = self.slice_del$esjava$0();
                                  }
                                }
                              }
                            }
                            self.cursor = self.limit - diff;
                            self.ket = self.cursor;
                            if (self.eq_s_b$esjava$1("\u0BC1\u0B95\u0BCD")) {
                              self.bra = self.cursor;
                              const result6 = self.slice_from$esjava$1("\u0BCD");
                            } else {
                              self.cursor = self.limit - diff;
                              self.ket = self.cursor;
                              if (self.eq_s_b$esjava$1("\u0BCD")) {
                                if (0 !== self.find_among_b$esjava$1(tamilStemmer.a_5)) {
                                  self.bra = self.cursor;
                                  const result7 = self.slice_del$esjava$0();
                                }
                              }
                              self.cursor = self.limit - diff;
                              self.ket = self.cursor;
                              if (self.eq_s_b$esjava$1("\u0BCD")) {
                                const diff6 = self.limit - self.cursor;
                                if (0 !== self.find_among_b$esjava$1(tamilStemmer.a_6)) {
                                  if (self.eq_s_b$esjava$1("\u0BCD")) {
                                    self.bra = self.cursor;
                                    const result8 = self.slice_from$esjava$1("\u0BCD");
                                  }
                                } else {
                                  self.cursor = self.limit - diff6;
                                }
                              }
                              self.cursor = self.limit - diff;
                              self.ket = self.cursor;
                              if (0 === self.find_among_b$esjava$1(tamilStemmer.a_8)) {
                                self.cursor = self.limit - diff;
                                self.ket = self.cursor;
                                if (self.eq_s_b$esjava$1("\u0BA9\u0BC1")) {
                                  const diff7 = self.limit - self.cursor;
                                  const diff8 = self.limit - self.cursor;
                                  if (0 === self.find_among_b$esjava$1(tamilStemmer.a_9)) {
                                    self.cursor = self.limit - diff8;
                                    self.cursor = self.limit - diff7;
                                    self.bra = self.cursor;
                                    const result9 = self.slice_del$esjava$0();
                                  }
                                }
                                self.cursor = self.limit - diff;
                                self.ket = self.cursor;
                                if (self.eq_s_b$esjava$1("\u0B99\u0BCD")) {
                                  const diff9 = self.limit - self.cursor;
                                  const diff10 = self.limit - self.cursor;
                                  if (!self.eq_s_b$esjava$1("\u0BC8")) {
                                    self.cursor = self.limit - diff10;
                                    self.cursor = self.limit - diff9;
                                    self.bra = self.cursor;
                                    const result10 = self.slice_from$esjava$1("\u0BAE\u0BCD");
                                  }
                                }
                                self.cursor = self.limit - diff;
                                self.ket = self.cursor;
                                if (self.eq_s_b$esjava$1("\u0B99\u0BCD")) {
                                  self.bra = self.cursor;
                                  const result11 = self.slice_del$esjava$0();
                                } else {
                                  self.cursor = self.limit - diff;
                                  self.ket = self.cursor;
                                  if (self.eq_s_b$esjava$1("\u0BCD")) {
                                    const diff11 = self.limit - self.cursor;
                                    const diff12 = self.limit - self.cursor;
                                    if (0 === self.find_among_b$esjava$1(tamilStemmer.a_10)) {
                                      self.cursor = self.limit - diff12;
                                      if (!self.eq_s_b$esjava$1("\u0BCD")) {
                                        return false;
                                      }
                                    }
                                    self.cursor = self.limit - diff11;
                                    self.bra = self.cursor;
                                    const result12 = self.slice_del$esjava$0();
                                  } else {
                                    return false;
                                  }
                                }
                              } else {
                                self.bra = self.cursor;
                                const result13 = self.slice_del$esjava$0();
                              }
                            }
                          }
                        }
                        self.bra = self.cursor;
                        const result14 = self.slice_from$esjava$1("\u0BCD");
                      }
                    }
                  }
                }
              }
              self.bra = self.cursor;
              const result15 = self.slice_from$esjava$1("\u0BB3\u0BCD");
            } else {
              self.bra = self.cursor;
              const result16 = self.slice_del$esjava$0();
            }
            self.cursor = self.limit_backward;
            self.B_found_wrong_ending = true;
            return true;
          } else {
            return false;
          }
        }
      };
      items[5] = {
        key: "r_remove_pronoun_prefixes$esjava$0",
        value: function r_remove_pronoun_prefixes$esjava$0() {
          const self = this;
          this.B_found_a_match = false;
          this.bra = this.cursor;
          if (0 === this.find_among$esjava$1(tamilStemmer.a_11)) {
            return false;
          } else if (0 === self.find_among$esjava$1(tamilStemmer.a_12)) {
            return false;
          } else if (self.eq_s$esjava$1("\u0BCD")) {
            self.ket = self.cursor;
            const result = self.slice_del$esjava$0();
            self.B_found_a_match = true;
            const result1 = self.r_fix_va_start$esjava$0();
            self.cursor = self.cursor;
            return true;
          } else {
            return false;
          }
        }
      };
      items[6] = {
        key: "r_remove_plural_suffix$esjava$0",
        value: function r_remove_plural_suffix$esjava$0() {
          const self = this;
          this.B_found_a_match = false;
          ({ cursor: this.limit_backward, limit: this.cursor } = this);
          const diff = this.limit - this.cursor;
          this.ket = this.cursor;
          if (this.eq_s_b$esjava$1("\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD")) {
            const diff1 = self.limit - self.cursor;
            const diff2 = self.limit - self.cursor;
            if (0 === self.find_among_b$esjava$1(tamilStemmer.a_13)) {
              self.cursor = self.limit - diff2;
              self.cursor = self.limit - diff1;
              self.bra = self.cursor;
              const result = self.slice_from$esjava$1("\u0BCD");
            }
            self.B_found_a_match = true;
            self.cursor = self.limit_backward;
            return true;
          }
          self.cursor = self.limit - diff;
          self.ket = self.cursor;
          if (self.eq_s_b$esjava$1("\u0BB1\u0BCD\u0B95\u0BB3\u0BCD")) {
            self.bra = self.cursor;
            const result1 = self.slice_from$esjava$1("\u0BB2\u0BCD");
          } else {
            self.cursor = self.limit - diff;
            self.ket = self.cursor;
            if (self.eq_s_b$esjava$1("\u0B9F\u0BCD\u0B95\u0BB3\u0BCD")) {
              self.bra = self.cursor;
              const result2 = self.slice_from$esjava$1("\u0BB3\u0BCD");
            } else {
              self.cursor = self.limit - diff;
              self.ket = self.cursor;
              if (self.eq_s_b$esjava$1("\u0B95\u0BB3\u0BCD")) {
                self.bra = self.cursor;
                const result3 = self.slice_del$esjava$0();
              } else {
                return false;
              }
            }
          }
        }
      };
      items[7] = {
        key: "r_remove_question_suffixes$esjava$0",
        value: function r_remove_question_suffixes$esjava$0() {
          let cursor;
          const self = this;
          if (this.r_has_min_length$esjava$0()) {
            self.B_found_a_match = false;
            ({ cursor: self.limit_backward, limit: self.cursor, cursor: self.ket } = self);
            const diff = self.limit - self.cursor;
            if (0 !== self.find_among_b$esjava$1(tamilStemmer.a_14)) {
              self.bra = self.cursor;
              const result = self.slice_from$esjava$1("\u0BCD");
              self.B_found_a_match = true;
            }
            self.cursor = self.limit - diff;
            ({ limit_backward: self.cursor, cursor } = self);
            const result1 = self.r_fix_endings$esjava$0();
            self.cursor = cursor;
            return true;
          } else {
            return false;
          }
        }
      };
      items[8] = {
        key: "r_remove_command_suffixes$esjava$0",
        value: function r_remove_command_suffixes$esjava$0() {
          const self = this;
          const tmp = !this.r_has_min_length$esjava$0();
          let tmp2 = !tmp;
          if (!tmp) {
            self.B_found_a_match = false;
            ({ cursor: self.limit_backward, limit: self.cursor, cursor: self.ket } = self);
            let flag2 = 0 !== self.find_among_b$esjava$1(tamilStemmer.a_15);
            if (flag2) {
              self.bra = self.cursor;
              const result = self.slice_del$esjava$0();
              self.B_found_a_match = true;
              self.cursor = self.limit_backward;
              flag2 = true;
            }
            tmp2 = flag2;
          }
          return tmp2;
        }
      };
      items[9] = {
        key: "r_remove_um$esjava$0",
        value: function r_remove_um$esjava$0() {
          let cursor;
          const self = this;
          this.B_found_a_match = false;
          if (this.r_has_min_length$esjava$0()) {
            ({ cursor: self.limit_backward, limit: self.cursor, cursor: self.ket } = self);
            if (self.eq_s_b$esjava$1("\u0BC1\u0BAE\u0BCD")) {
              self.bra = self.cursor;
              const result = self.slice_from$esjava$1("\u0BCD");
              self.B_found_a_match = true;
              ({ limit_backward: self.cursor, cursor } = self);
              const result1 = self.r_fix_ending$esjava$0();
              self.cursor = cursor;
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
      };
      items[10] = {
        key: "r_remove_common_word_endings$esjava$0",
        value: function r_remove_common_word_endings$esjava$0() {
          let cursor;
          const self = this;
          this.B_found_a_match = false;
          if (this.r_has_min_length$esjava$0()) {
            ({ cursor: self.limit_backward, limit: self.cursor, cursor: self.ket } = self);
            const diff = self.limit - self.cursor;
            const diff1 = self.limit - self.cursor;
            const diff2 = self.limit - self.cursor;
            if (!self.eq_s_b$esjava$1("\u0BC1\u0B9F\u0BA9\u0BCD")) {
              self.cursor = self.limit - diff;
              if (!self.eq_s_b$esjava$1("\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8")) {
                self.cursor = self.limit - diff;
                if (!self.eq_s_b$esjava$1("\u0BBF\u0B9F\u0BAE\u0BCD")) {
                  self.cursor = self.limit - diff;
                  if (!self.eq_s_b$esjava$1("\u0BBF\u0BA9\u0BCD\u0BB1\u0BBF")) {
                    self.cursor = self.limit - diff;
                    if (!self.eq_s_b$esjava$1("\u0BBE\u0B95\u0BBF")) {
                      self.cursor = self.limit - diff;
                      if (!self.eq_s_b$esjava$1("\u0BBE\u0B95\u0BBF\u0BAF")) {
                        self.cursor = self.limit - diff;
                        if (!self.eq_s_b$esjava$1("\u0BC6\u0BA9\u0BCD\u0BB1\u0BC1")) {
                          self.cursor = self.limit - diff;
                          if (!self.eq_s_b$esjava$1("\u0BC1\u0BB3\u0BCD\u0BB3")) {
                            self.cursor = self.limit - diff;
                            if (!self.eq_s_b$esjava$1("\u0BC1\u0B9F\u0BC8\u0BAF")) {
                              self.cursor = self.limit - diff;
                              if (!self.eq_s_b$esjava$1("\u0BC1\u0B9F\u0BC8")) {
                                self.cursor = self.limit - diff;
                                if (!self.eq_s_b$esjava$1("\u0BC6\u0BA9\u0BC1\u0BAE\u0BCD")) {
                                  self.cursor = self.limit - diff;
                                  if (self.eq_s_b$esjava$1("\u0BB2\u0BCD\u0BB2")) {
                                    const diff3 = self.limit - self.cursor;
                                    const diff4 = self.limit - self.cursor;
                                    if (0 === self.find_among_b$esjava$1(tamilStemmer.a_16)) {
                                      self.cursor = self.limit - diff4;
                                      self.cursor = self.limit - diff3;
                                    }
                                  }
                                  self.cursor = self.limit - diff;
                                  if (!self.eq_s_b$esjava$1("\u0BC6\u0BA9")) {
                                    self.cursor = self.limit - diff;
                                    if (!self.eq_s_b$esjava$1("\u0BBE\u0B95\u0BBF")) {
                                      self.cursor = self.limit - diff1;
                                      self.ket = self.cursor;
                                      const diff5 = self.limit - self.cursor;
                                      if (0 === self.find_among_b$esjava$1(tamilStemmer.a_17)) {
                                        return false;
                                      } else {
                                        self.bra = self.cursor;
                                        const result = self.slice_del$esjava$0();
                                        self.B_found_a_match = true;
                                        self.cursor = self.limit - diff5;
                                      }
                                    }
                                    ({ limit_backward: self.cursor, cursor } = self);
                                    const result1 = self.r_fix_endings$esjava$0();
                                    self.cursor = cursor;
                                    return true;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            self.bra = self.cursor;
            const result2 = self.slice_from$esjava$1("\u0BCD");
            self.B_found_a_match = true;
            self.cursor = self.limit - diff2;
          } else {
            return false;
          }
        }
      };
      items[11] = {
        key: "r_remove_vetrumai_urupukal$esjava$0",
        value: function r_remove_vetrumai_urupukal$esjava$0() {
          let cursor;
          const self = this;
          this.B_found_a_match = false;
          this.B_found_vetrumai_urupu = false;
          if (this.r_has_min_length$esjava$0()) {
            ({ cursor: self.limit_backward, limit: self.cursor } = self);
            const diff = self.limit - self.cursor;
            self.ket = self.cursor;
            const diff1 = self.limit - self.cursor;
            if (self.eq_s_b$esjava$1("\u0BA9\u0BC8")) {
              self.bra = self.cursor;
              const result = self.slice_del$esjava$0();
              self.cursor = self.limit - diff1;
            } else {
              self.cursor = self.limit - diff;
              self.ket = self.cursor;
              const diff2 = self.limit - self.cursor;
              const diff3 = self.limit - self.cursor;
              const diff4 = self.limit - self.cursor;
              if (self.eq_s_b$esjava$1("\u0BBF\u0BA9\u0BC8")) {
                const diff5 = self.limit - self.cursor;
                const diff6 = self.limit - self.cursor;
                if (0 === self.find_among_b$esjava$1(tamilStemmer.a_18)) {
                  self.cursor = self.limit - diff6;
                  self.cursor = self.limit - diff5;
                  self.bra = self.cursor;
                  const result1 = self.slice_from$esjava$1("\u0BCD");
                  self.cursor = self.limit - diff2;
                }
              } else {
                self.cursor = self.limit - diff4;
              }
              self.cursor = self.limit - diff3;
              if (self.eq_s_b$esjava$1("\u0BC8")) {
                const diff7 = self.limit - self.cursor;
                if (0 !== self.find_among_b$esjava$1(tamilStemmer.a_19)) {
                  if (self.eq_s_b$esjava$1("\u0BCD")) {
                    self.cursor = self.limit - diff7;
                  }
                }
              }
              self.cursor = self.limit - diff;
              self.ket = self.cursor;
              const diff8 = self.limit - self.cursor;
              const diff9 = self.limit - self.cursor;
              if (!self.eq_s_b$esjava$1("\u0BCA\u0B9F\u0BC1")) {
                self.cursor = self.limit - diff8;
                if (!self.eq_s_b$esjava$1("\u0BCB\u0B9F\u0BC1")) {
                  self.cursor = self.limit - diff8;
                  if (!self.eq_s_b$esjava$1("\u0BBF\u0BB2\u0BCD")) {
                    self.cursor = self.limit - diff8;
                    if (!self.eq_s_b$esjava$1("\u0BBF\u0BB1\u0BCD")) {
                      self.cursor = self.limit - diff8;
                      if (self.eq_s_b$esjava$1("\u0BBF\u0BA9\u0BCD")) {
                        const diff10 = self.limit - self.cursor;
                        const diff11 = self.limit - self.cursor;
                        if (!self.eq_s_b$esjava$1("\u0BAE")) {
                          self.cursor = self.limit - diff11;
                          self.cursor = self.limit - diff10;
                        }
                      }
                      self.cursor = self.limit - diff8;
                      if (!self.eq_s_b$esjava$1("\u0BBF\u0BA9\u0BCD\u0BB1\u0BC1")) {
                        self.cursor = self.limit - diff8;
                        if (!self.eq_s_b$esjava$1("\u0BBF\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4\u0BC1")) {
                          self.cursor = self.limit - diff8;
                          if (!self.eq_s_b$esjava$1("\u0BB5\u0BBF\u0B9F")) {
                            self.cursor = self.limit - diff8;
                            if (self.I_length < 7) {
                              self.cursor = self.limit - diff8;
                              if (!self.eq_s_b$esjava$1("\u0BBE\u0BB2\u0BCD")) {
                                self.cursor = self.limit - diff8;
                                if (!self.eq_s_b$esjava$1("\u0BC1\u0B9F\u0BC8")) {
                                  self.cursor = self.limit - diff8;
                                  if (!self.eq_s_b$esjava$1("\u0BBE\u0BAE\u0BB2\u0BCD")) {
                                    self.cursor = self.limit - diff8;
                                    if (self.eq_s_b$esjava$1("\u0BB2\u0BCD")) {
                                      const diff12 = self.limit - self.cursor;
                                      const diff13 = self.limit - self.cursor;
                                      if (0 === self.find_among_b$esjava$1(tamilStemmer.a_20)) {
                                        self.cursor = self.limit - diff13;
                                        self.cursor = self.limit - diff12;
                                      }
                                    }
                                    self.cursor = self.limit - diff8;
                                    if (!self.eq_s_b$esjava$1("\u0BC1\u0BB3\u0BCD")) {
                                      self.cursor = self.limit - diff;
                                      self.ket = self.cursor;
                                      const diff14 = self.limit - self.cursor;
                                      const diff15 = self.limit - self.cursor;
                                      if (!self.eq_s_b$esjava$1("\u0B95\u0BA3\u0BCD")) {
                                        self.cursor = self.limit - diff14;
                                        if (!self.eq_s_b$esjava$1("\u0BAE\u0BC1\u0BA9\u0BCD")) {
                                          self.cursor = self.limit - diff14;
                                          if (!self.eq_s_b$esjava$1("\u0BAE\u0BC7\u0BB2\u0BCD")) {
                                            self.cursor = self.limit - diff14;
                                            if (!self.eq_s_b$esjava$1("\u0BAE\u0BC7\u0BB1\u0BCD")) {
                                              self.cursor = self.limit - diff14;
                                              if (!self.eq_s_b$esjava$1("\u0B95\u0BC0\u0BB4\u0BCD")) {
                                                self.cursor = self.limit - diff14;
                                                if (!self.eq_s_b$esjava$1("\u0BAA\u0BBF\u0BA9\u0BCD")) {
                                                  self.cursor = self.limit - diff14;
                                                  if (self.eq_s_b$esjava$1("\u0BA4\u0BC1")) {
                                                    const diff16 = self.limit - self.cursor;
                                                    const diff17 = self.limit - self.cursor;
                                                    if (0 === self.find_among_b$esjava$1(tamilStemmer.a_21)) {
                                                      self.cursor = self.limit - diff17;
                                                      self.cursor = self.limit - diff16;
                                                    }
                                                  }
                                                  self.cursor = self.limit - diff;
                                                  self.ket = self.cursor;
                                                  const diff18 = self.limit - self.cursor;
                                                  if (self.eq_s_b$esjava$1("\u0BC0")) {
                                                    self.bra = self.cursor;
                                                    const result2 = self.slice_from$esjava$1("\u0BBF");
                                                    self.cursor = self.limit - diff18;
                                                  } else {
                                                    return false;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      self.bra = self.cursor;
                                      const result3 = self.slice_del$esjava$0();
                                      self.cursor = self.limit - diff15;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              self.bra = self.cursor;
              const result4 = self.slice_from$esjava$1("\u0BCD");
              self.cursor = self.limit - diff9;
            }
            self.B_found_a_match = true;
            self.B_found_vetrumai_urupu = true;
            self.ket = self.cursor;
            const diff19 = self.limit - self.cursor;
            if (self.eq_s_b$esjava$1("\u0BBF\u0BA9\u0BCD")) {
              self.bra = self.cursor;
              const result5 = self.slice_from$esjava$1("\u0BCD");
            }
            self.cursor = self.limit - diff19;
            ({ limit_backward: self.cursor, cursor } = self);
            const result6 = self.r_fix_endings$esjava$0();
            self.cursor = cursor;
            return true;
          } else {
            return false;
          }
        }
      };
      items[12] = {
        key: "r_remove_tense_suffixes$esjava$0",
        value: function r_remove_tense_suffixes$esjava$0() {
          const self = this;
          this.B_found_a_match = true;
          while (self.B_found_a_match) {
            let result = self.r_remove_tense_suffix$esjava$0();
            self.cursor = self.cursor;
            // continue
          }
          self.cursor = self.cursor;
          return true;
        }
      };
      items[13] = {
        key: "r_remove_tense_suffix$esjava$0",
        value: function r_remove_tense_suffix$esjava$0() {
          let cursor;
          const self = this;
          this.B_found_a_match = false;
          if (this.r_has_min_length$esjava$0()) {
            ({ cursor: self.limit_backward, limit: self.cursor } = self);
            const diff = self.limit - self.cursor;
            self.ket = self.cursor;
            const diff1 = self.limit - self.cursor;
            const diff2 = self.limit - self.cursor;
            if (0 === self.find_among_b$esjava$1(tamilStemmer.a_22)) {
              self.cursor = self.limit - diff;
              self.ket = self.cursor;
              const diff3 = self.limit - self.cursor;
              let eq_s_b$esjava$1 = self.eq_s_b$esjava$1;
              const diff4 = self.limit - self.cursor;
              if (!eq_s_b$esjava$1("\u0BAE\u0BBE\u0BB0\u0BCD")) {
                self.cursor = self.limit - diff3;
                eq_s_b$esjava$1 = self.eq_s_b$esjava$1;
                if (!eq_s_b$esjava$1("\u0BAE\u0BBF\u0BA9\u0BCD")) {
                  self.cursor = self.limit - diff3;
                  eq_s_b$esjava$1 = self.eq_s_b$esjava$1;
                  if (!eq_s_b$esjava$1("\u0BA9\u0BA9\u0BCD")) {
                    self.cursor = self.limit - diff3;
                    eq_s_b$esjava$1 = self.eq_s_b$esjava$1;
                    if (!eq_s_b$esjava$1("\u0BA9\u0BBE\u0BA9\u0BCD")) {
                      self.cursor = self.limit - diff3;
                      eq_s_b$esjava$1 = self.eq_s_b$esjava$1;
                      if (!eq_s_b$esjava$1("\u0BA9\u0BBE\u0BB3\u0BCD")) {
                        self.cursor = self.limit - diff3;
                        eq_s_b$esjava$1 = self.eq_s_b$esjava$1;
                        if (!eq_s_b$esjava$1("\u0BA9\u0BBE\u0BB0\u0BCD")) {
                          self.cursor = self.limit - diff3;
                          eq_s_b$esjava$1 = self.eq_s_b$esjava$1;
                          if (!eq_s_b$esjava$1("\u0BB5\u0BA9\u0BCD")) {
                            self.cursor = self.limit - diff3;
                            if (!self.eq_s_b$esjava$1("\u0BA9\u0BB3\u0BCD")) {
                              self.cursor = self.limit - diff3;
                              if (!self.eq_s_b$esjava$1("\u0BB5\u0BB3\u0BCD")) {
                                self.cursor = self.limit - diff3;
                                if (!self.eq_s_b$esjava$1("\u0BA9\u0BB0\u0BCD")) {
                                  self.cursor = self.limit - diff3;
                                  if (!self.eq_s_b$esjava$1("\u0BB5\u0BB0\u0BCD")) {
                                    self.cursor = self.limit - diff3;
                                    if (!self.eq_s_b$esjava$1("\u0BA9")) {
                                      self.cursor = self.limit - diff3;
                                      if (!self.eq_s_b$esjava$1("\u0BAA")) {
                                        self.cursor = self.limit - diff3;
                                        if (!self.eq_s_b$esjava$1("\u0B95")) {
                                          self.cursor = self.limit - diff3;
                                          if (!self.eq_s_b$esjava$1("\u0BA4")) {
                                            self.cursor = self.limit - diff3;
                                            if (!self.eq_s_b$esjava$1("\u0BAF")) {
                                              self.cursor = self.limit - diff3;
                                              if (!self.eq_s_b$esjava$1("\u0BAA\u0BA9\u0BCD")) {
                                                self.cursor = self.limit - diff3;
                                                if (!self.eq_s_b$esjava$1("\u0BAA\u0BB3\u0BCD")) {
                                                  self.cursor = self.limit - diff3;
                                                  if (!self.eq_s_b$esjava$1("\u0BAA\u0BB0\u0BCD")) {
                                                    self.cursor = self.limit - diff3;
                                                    if (self.eq_s_b$esjava$1("\u0BA4\u0BC1")) {
                                                      const diff5 = self.limit - self.cursor;
                                                      const diff6 = self.limit - self.cursor;
                                                      if (0 === self.find_among_b$esjava$1(tamilStemmer.a_24)) {
                                                        self.cursor = self.limit - diff6;
                                                        self.cursor = self.limit - diff5;
                                                      }
                                                    }
                                                    self.cursor = self.limit - diff3;
                                                    if (!self.eq_s_b$esjava$1("\u0BBF\u0BB1\u0BCD\u0BB1\u0BC1")) {
                                                      self.cursor = self.limit - diff3;
                                                      if (!self.eq_s_b$esjava$1("\u0BAA\u0BAE\u0BCD")) {
                                                        self.cursor = self.limit - diff3;
                                                        if (!self.eq_s_b$esjava$1("\u0BA9\u0BAE\u0BCD")) {
                                                          self.cursor = self.limit - diff3;
                                                          if (!self.eq_s_b$esjava$1("\u0BA4\u0BC1\u0BAE\u0BCD")) {
                                                            self.cursor = self.limit - diff3;
                                                            if (!self.eq_s_b$esjava$1("\u0BB1\u0BC1\u0BAE\u0BCD")) {
                                                              self.cursor = self.limit - diff3;
                                                              if (!self.eq_s_b$esjava$1("\u0B95\u0BC1\u0BAE\u0BCD")) {
                                                                self.cursor = self.limit - diff3;
                                                                if (!self.eq_s_b$esjava$1("\u0BA9\u0BC6\u0BA9\u0BCD")) {
                                                                  self.cursor = self.limit - diff3;
                                                                  if (!self.eq_s_b$esjava$1("\u0BA9\u0BC8")) {
                                                                    self.cursor = self.limit - diff3;
                                                                    if (!self.eq_s_b$esjava$1("\u0BB5\u0BC8")) {
                                                                      self.cursor = self.limit - diff;
                                                                      self.ket = self.cursor;
                                                                      const diff7 = self.limit - self.cursor;
                                                                      const diff8 = self.limit - self.cursor;
                                                                      if (self.eq_s_b$esjava$1("\u0BBE\u0BA9\u0BCD")) {
                                                                        const diff9 = self.limit - self.cursor;
                                                                        const diff10 = self.limit - self.cursor;
                                                                        if (!self.eq_s_b$esjava$1("\u0B9A")) {
                                                                          self.cursor = self.limit - diff10;
                                                                          self.cursor = self.limit - diff9;
                                                                        }
                                                                        self.bra = self.cursor;
                                                                        const result = self.slice_from$esjava$1("\u0BCD");
                                                                        self.B_found_a_match = true;
                                                                        self.cursor = self.limit - diff8;
                                                                      }
                                                                      self.cursor = self.limit - diff7;
                                                                      if (!self.eq_s_b$esjava$1("\u0BBE\u0BB3\u0BCD")) {
                                                                        self.cursor = self.limit - diff7;
                                                                        if (!self.eq_s_b$esjava$1("\u0BBE\u0BB0\u0BCD")) {
                                                                          self.cursor = self.limit - diff7;
                                                                          if (!self.eq_s_b$esjava$1("\u0BC7\u0BA9\u0BCD")) {
                                                                            self.cursor = self.limit - diff7;
                                                                            if (!self.eq_s_b$esjava$1("\u0BBE")) {
                                                                              self.cursor = self.limit - diff7;
                                                                              if (!self.eq_s_b$esjava$1("\u0BBE\u0BAE\u0BCD")) {
                                                                                self.cursor = self.limit - diff7;
                                                                                if (!self.eq_s_b$esjava$1("\u0BC6\u0BAE\u0BCD")) {
                                                                                  self.cursor = self.limit - diff7;
                                                                                  if (!self.eq_s_b$esjava$1("\u0BC7\u0BAE\u0BCD")) {
                                                                                    self.cursor = self.limit - diff7;
                                                                                    if (!self.eq_s_b$esjava$1("\u0BCB\u0BAE\u0BCD")) {
                                                                                      self.cursor = self.limit - diff7;
                                                                                      if (!self.eq_s_b$esjava$1("\u0B95\u0BC1\u0BAE\u0BCD")) {
                                                                                        self.cursor = self.limit - diff7;
                                                                                        if (!self.eq_s_b$esjava$1("\u0BA4\u0BC1\u0BAE\u0BCD")) {
                                                                                          self.cursor = self.limit - diff7;
                                                                                          if (!self.eq_s_b$esjava$1("\u0B9F\u0BC1\u0BAE\u0BCD")) {
                                                                                            self.cursor = self.limit - diff7;
                                                                                            if (!self.eq_s_b$esjava$1("\u0BB1\u0BC1\u0BAE\u0BCD")) {
                                                                                              self.cursor = self.limit - diff7;
                                                                                              if (!self.eq_s_b$esjava$1("\u0BBE\u0BAF\u0BCD")) {
                                                                                                self.cursor = self.limit - diff7;
                                                                                                if (!self.eq_s_b$esjava$1("\u0BA9\u0BC6\u0BA9\u0BCD")) {
                                                                                                  self.cursor = self.limit - diff7;
                                                                                                  if (!self.eq_s_b$esjava$1("\u0BA9\u0BBF\u0BB0\u0BCD")) {
                                                                                                    self.cursor = self.limit - diff7;
                                                                                                    if (!self.eq_s_b$esjava$1("\u0BC0\u0BB0\u0BCD")) {
                                                                                                      self.cursor = self.limit - diff7;
                                                                                                      if (!self.eq_s_b$esjava$1("\u0BC0\u0BAF\u0BB0\u0BCD")) {
                                                                                                        self.cursor = self.limit - diff;
                                                                                                        self.ket = self.cursor;
                                                                                                        const diff11 = self.limit - self.cursor;
                                                                                                        const diff12 = self.limit - self.cursor;
                                                                                                        if (self.eq_s_b$esjava$1("\u0B95\u0BC1")) {
                                                                                                          const diff13 = self.limit - self.cursor;
                                                                                                          if (self.eq_s_b$esjava$1("\u0BCD")) {
                                                                                                            self.cursor = self.limit - diff13;
                                                                                                            self.bra = self.cursor;
                                                                                                            const result1 = self.slice_del$esjava$0();
                                                                                                            self.B_found_a_match = true;
                                                                                                            self.cursor = self.limit - diff11;
                                                                                                          }
                                                                                                        } else {
                                                                                                          self.cursor = self.limit - diff12;
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          } else {
                            eq_s_b$esjava$1 = self.limit - self.cursor;
                            const diff14 = self.limit - self.cursor;
                          }
                          self.cursor = self.limit - diff14;
                          self.cursor = self.limit - eq_s_b$esjava$1;
                        }
                      }
                    }
                  }
                }
              }
              self.bra = self.cursor;
              const result2 = self.slice_del$esjava$0();
              self.B_found_a_match = true;
              self.cursor = self.limit - diff4;
            } else {
              self.bra = self.cursor;
              const result3 = self.slice_del$esjava$0();
              self.B_found_a_match = true;
              self.cursor = self.limit - diff2;
            }
            self.cursor = self.limit - diff1;
            self.ket = self.cursor;
            const diff15 = self.limit - self.cursor;
            if (0 !== self.find_among_b$esjava$1(tamilStemmer.a_25)) {
              self.bra = self.cursor;
              const result4 = self.slice_del$esjava$0();
              self.B_found_a_match = true;
            }
            self.cursor = self.limit - diff15;
            ({ limit_backward: self.cursor, cursor } = self);
            const result5 = self.r_fix_endings$esjava$0();
            self.cursor = cursor;
            return true;
          } else {
            return false;
          }
        }
      };
      items[14] = {
        key: "stem$esjava$0",
        value: function stem$esjava$0() {
          const self = this;
          this.B_found_vetrumai_urupu = false;
          const result = this.r_fix_ending$esjava$0();
          this.cursor = this.cursor;
          if (this.r_has_min_length$esjava$0()) {
            const result1 = self.r_remove_question_prefixes$esjava$0();
            self.cursor = self.cursor;
            const result2 = self.r_remove_pronoun_prefixes$esjava$0();
            self.cursor = self.cursor;
            const result3 = self.r_remove_question_suffixes$esjava$0();
            self.cursor = self.cursor;
            const result4 = self.r_remove_um$esjava$0();
            self.cursor = self.cursor;
            const result5 = self.r_remove_common_word_endings$esjava$0();
            self.cursor = self.cursor;
            const result6 = self.r_remove_vetrumai_urupukal$esjava$0();
            self.cursor = self.cursor;
            const result7 = self.r_remove_plural_suffix$esjava$0();
            self.cursor = self.cursor;
            const result8 = self.r_remove_command_suffixes$esjava$0();
            self.cursor = self.cursor;
            const result9 = self.r_remove_tense_suffixes$esjava$0();
            self.cursor = self.cursor;
            return true;
          } else {
            return false;
          }
        }
      };
      items[15] = {
        key: "stem",
        value: function stem() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const stem$esjava$0 = self.stem$esjava$0;
            let applyResult = stem$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(tamilStemmer.prototype), "stem", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[16] = {
        key: "I_length",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_length")) {
            let num = self._$esjava$I_length;
          } else {
            num = 0;
            self._$esjava$I_length = 0;
          }
          return num;
        },
        set(_$esjava$I_length) {
          this._$esjava$I_length = _$esjava$I_length;
        }
      };
      items[17] = {
        key: "B_found_wrong_ending",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$B_found_wrong_ending")) {
            let flag = self._$esjava$B_found_wrong_ending;
          } else {
            flag = false;
            self._$esjava$B_found_wrong_ending = false;
          }
          return flag;
        },
        set(_$esjava$B_found_wrong_ending) {
          this._$esjava$B_found_wrong_ending = _$esjava$B_found_wrong_ending;
        }
      };
      items[18] = {
        key: "B_found_vetrumai_urupu",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$B_found_vetrumai_urupu")) {
            let flag = self._$esjava$B_found_vetrumai_urupu;
          } else {
            flag = false;
            self._$esjava$B_found_vetrumai_urupu = false;
          }
          return flag;
        },
        set(_$esjava$B_found_vetrumai_urupu) {
          this._$esjava$B_found_vetrumai_urupu = _$esjava$B_found_vetrumai_urupu;
        }
      };
      items[19] = {
        key: "B_found_a_match",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$B_found_a_match")) {
            let flag = self._$esjava$B_found_a_match;
          } else {
            flag = false;
            self._$esjava$B_found_a_match = false;
          }
          return flag;
        },
        set(_$esjava$B_found_a_match) {
          this._$esjava$B_found_a_match = _$esjava$B_found_a_match;
        }
      };
      const items1 = [
        {
          key: "a_0",
          get() {
            delete r1.a_0;
            const items = [new closure_4("\u0B95", -1, -1), , , , , , , , , ];
            const tmp = new closure_4("\u0B95", -1, -1);
            items[1] = new closure_4("\u0B99", -1, -1);
            const tmp2 = new closure_4("\u0B99", -1, -1);
            items[2] = new closure_4("\u0B9A", -1, -1);
            const tmp3 = new closure_4("\u0B9A", -1, -1);
            items[3] = new closure_4("\u0B9E", -1, -1);
            const tmp4 = new closure_4("\u0B9E", -1, -1);
            items[4] = new closure_4("\u0BA4", -1, -1);
            const tmp5 = new closure_4("\u0BA4", -1, -1);
            items[5] = new closure_4("\u0BA8", -1, -1);
            const tmp6 = new closure_4("\u0BA8", -1, -1);
            items[6] = new closure_4("\u0BAA", -1, -1);
            const tmp7 = new closure_4("\u0BAA", -1, -1);
            items[7] = new closure_4("\u0BAE", -1, -1);
            const tmp8 = new closure_4("\u0BAE", -1, -1);
            items[8] = new closure_4("\u0BAF", -1, -1);
            const tmp9 = new closure_4("\u0BAF", -1, -1);
            items[9] = new closure_4("\u0BB5", -1, -1);
            tamilStemmer.a_0 = items;
            return items;
          }
        },
        {
          key: "a_1",
          get() {
            delete r1.a_1;
            const items = [new closure_4("\u0BA8\u0BCD\u0BA4", -1, -1), , ];
            const tmp = new closure_4("\u0BA8\u0BCD\u0BA4", -1, -1);
            items[1] = new closure_4("\u0BA8\u0BCD\u0BA4\u0BCD", -1, -1);
            const tmp2 = new closure_4("\u0BA8\u0BCD\u0BA4\u0BCD", -1, -1);
            items[2] = new closure_4("\u0BA8\u0BCD", -1, -1);
            tamilStemmer.a_1 = items;
            return items;
          }
        },
        {
          key: "a_2",
          get() {
            delete r1.a_2;
            const items = [new closure_4("\u0BBF", -1, -1), , ];
            const tmp = new closure_4("\u0BBF", -1, -1);
            items[1] = new closure_4("\u0BC0", -1, -1);
            const tmp2 = new closure_4("\u0BC0", -1, -1);
            items[2] = new closure_4("\u0BC8", -1, -1);
            tamilStemmer.a_2 = items;
            return items;
          }
        },
        {
          key: "a_3",
          get() {
            delete r1.a_3;
            const items = [new closure_4("\u0B95", -1, -1), , , , , ];
            const tmp = new closure_4("\u0B95", -1, -1);
            items[1] = new closure_4("\u0B9A", -1, -1);
            const tmp2 = new closure_4("\u0B9A", -1, -1);
            items[2] = new closure_4("\u0B9F", -1, -1);
            const tmp3 = new closure_4("\u0B9F", -1, -1);
            items[3] = new closure_4("\u0BA4", -1, -1);
            const tmp4 = new closure_4("\u0BA4", -1, -1);
            items[4] = new closure_4("\u0BAA", -1, -1);
            const tmp5 = new closure_4("\u0BAA", -1, -1);
            items[5] = new closure_4("\u0BB1", -1, -1);
            tamilStemmer.a_3 = items;
            return items;
          }
        },
        {
          key: "a_4",
          get() {
            delete r1.a_4;
            const items = [new closure_4("\u0B95", -1, -1), , , , , ];
            const tmp = new closure_4("\u0B95", -1, -1);
            items[1] = new closure_4("\u0B9A", -1, -1);
            const tmp2 = new closure_4("\u0B9A", -1, -1);
            items[2] = new closure_4("\u0B9F", -1, -1);
            const tmp3 = new closure_4("\u0B9F", -1, -1);
            items[3] = new closure_4("\u0BA4", -1, -1);
            const tmp4 = new closure_4("\u0BA4", -1, -1);
            items[4] = new closure_4("\u0BAA", -1, -1);
            const tmp5 = new closure_4("\u0BAA", -1, -1);
            items[5] = new closure_4("\u0BB1", -1, -1);
            tamilStemmer.a_4 = items;
            return items;
          }
        },
        {
          key: "a_5",
          get() {
            delete r1.a_5;
            const items = [new closure_4("\u0B95", -1, -1), , , , , ];
            const tmp = new closure_4("\u0B95", -1, -1);
            items[1] = new closure_4("\u0B9A", -1, -1);
            const tmp2 = new closure_4("\u0B9A", -1, -1);
            items[2] = new closure_4("\u0B9F", -1, -1);
            const tmp3 = new closure_4("\u0B9F", -1, -1);
            items[3] = new closure_4("\u0BA4", -1, -1);
            const tmp4 = new closure_4("\u0BA4", -1, -1);
            items[4] = new closure_4("\u0BAA", -1, -1);
            const tmp5 = new closure_4("\u0BAA", -1, -1);
            items[5] = new closure_4("\u0BB1", -1, -1);
            tamilStemmer.a_5 = items;
            return items;
          }
        },
        {
          key: "a_6",
          get() {
            delete r1.a_6;
            const items = [new closure_4("\u0BAF", -1, -1), , , , , ];
            const tmp = new closure_4("\u0BAF", -1, -1);
            items[1] = new closure_4("\u0BB0", -1, -1);
            const tmp2 = new closure_4("\u0BB0", -1, -1);
            items[2] = new closure_4("\u0BB2", -1, -1);
            const tmp3 = new closure_4("\u0BB2", -1, -1);
            items[3] = new closure_4("\u0BB3", -1, -1);
            const tmp4 = new closure_4("\u0BB3", -1, -1);
            items[4] = new closure_4("\u0BB4", -1, -1);
            const tmp5 = new closure_4("\u0BB4", -1, -1);
            items[5] = new closure_4("\u0BB5", -1, -1);
            tamilStemmer.a_6 = items;
            return items;
          }
        },
        {
          key: "a_7",
          get() {
            delete r1.a_7;
            const items = [new closure_4("\u0B99", -1, -1), , , , , ];
            const tmp = new closure_4("\u0B99", -1, -1);
            items[1] = new closure_4("\u0B9E", -1, -1);
            const tmp2 = new closure_4("\u0B9E", -1, -1);
            items[2] = new closure_4("\u0BA3", -1, -1);
            const tmp3 = new closure_4("\u0BA3", -1, -1);
            items[3] = new closure_4("\u0BA8", -1, -1);
            const tmp4 = new closure_4("\u0BA8", -1, -1);
            items[4] = new closure_4("\u0BA9", -1, -1);
            const tmp5 = new closure_4("\u0BA9", -1, -1);
            items[5] = new closure_4("\u0BAE", -1, -1);
            tamilStemmer.a_7 = items;
            return items;
          }
        },
        {
          key: "a_8",
          get() {
            delete r1.a_8;
            const items = [new closure_4("\u0BAF", -1, -1), , ];
            const tmp = new closure_4("\u0BAF", -1, -1);
            items[1] = new closure_4("\u0BB5", -1, -1);
            const tmp2 = new closure_4("\u0BB5", -1, -1);
            items[2] = new closure_4("\u0BB5\u0BCD", -1, -1);
            tamilStemmer.a_8 = items;
            return items;
          }
        },
        {
          key: "a_9",
          get() {
            delete r1.a_9;
            const items = [new closure_4("\u0BBE", -1, -1), , , , , , , ];
            const tmp = new closure_4("\u0BBE", -1, -1);
            items[1] = new closure_4("\u0BBF", -1, -1);
            const tmp2 = new closure_4("\u0BBF", -1, -1);
            items[2] = new closure_4("\u0BC0", -1, -1);
            const tmp3 = new closure_4("\u0BC0", -1, -1);
            items[3] = new closure_4("\u0BC1", -1, -1);
            const tmp4 = new closure_4("\u0BC1", -1, -1);
            items[4] = new closure_4("\u0BC2", -1, -1);
            const tmp5 = new closure_4("\u0BC2", -1, -1);
            items[5] = new closure_4("\u0BC6", -1, -1);
            const tmp6 = new closure_4("\u0BC6", -1, -1);
            items[6] = new closure_4("\u0BC7", -1, -1);
            const tmp7 = new closure_4("\u0BC7", -1, -1);
            items[7] = new closure_4("\u0BC8", -1, -1);
            tamilStemmer.a_9 = items;
            return items;
          }
        },
        {
          key: "a_10",
          get() {
            delete r1.a_10;
            const items = [new closure_4("\u0BBE", -1, -1), , , , , , , ];
            const tmp = new closure_4("\u0BBE", -1, -1);
            items[1] = new closure_4("\u0BBF", -1, -1);
            const tmp2 = new closure_4("\u0BBF", -1, -1);
            items[2] = new closure_4("\u0BC0", -1, -1);
            const tmp3 = new closure_4("\u0BC0", -1, -1);
            items[3] = new closure_4("\u0BC1", -1, -1);
            const tmp4 = new closure_4("\u0BC1", -1, -1);
            items[4] = new closure_4("\u0BC2", -1, -1);
            const tmp5 = new closure_4("\u0BC2", -1, -1);
            items[5] = new closure_4("\u0BC6", -1, -1);
            const tmp6 = new closure_4("\u0BC6", -1, -1);
            items[6] = new closure_4("\u0BC7", -1, -1);
            const tmp7 = new closure_4("\u0BC7", -1, -1);
            items[7] = new closure_4("\u0BC8", -1, -1);
            tamilStemmer.a_10 = items;
            return items;
          }
        },
        {
          key: "a_11",
          get() {
            delete r1.a_11;
            const items = [new closure_4("\u0B85", -1, -1), , ];
            const tmp = new closure_4("\u0B85", -1, -1);
            items[1] = new closure_4("\u0B87", -1, -1);
            const tmp2 = new closure_4("\u0B87", -1, -1);
            items[2] = new closure_4("\u0B89", -1, -1);
            tamilStemmer.a_11 = items;
            return items;
          }
        },
        {
          key: "a_12",
          get() {
            delete r1.a_12;
            const items = [new closure_4("\u0B95", -1, -1), , , , , , , , , ];
            const tmp = new closure_4("\u0B95", -1, -1);
            items[1] = new closure_4("\u0B99", -1, -1);
            const tmp2 = new closure_4("\u0B99", -1, -1);
            items[2] = new closure_4("\u0B9A", -1, -1);
            const tmp3 = new closure_4("\u0B9A", -1, -1);
            items[3] = new closure_4("\u0B9E", -1, -1);
            const tmp4 = new closure_4("\u0B9E", -1, -1);
            items[4] = new closure_4("\u0BA4", -1, -1);
            const tmp5 = new closure_4("\u0BA4", -1, -1);
            items[5] = new closure_4("\u0BA8", -1, -1);
            const tmp6 = new closure_4("\u0BA8", -1, -1);
            items[6] = new closure_4("\u0BAA", -1, -1);
            const tmp7 = new closure_4("\u0BAA", -1, -1);
            items[7] = new closure_4("\u0BAE", -1, -1);
            const tmp8 = new closure_4("\u0BAE", -1, -1);
            items[8] = new closure_4("\u0BAF", -1, -1);
            const tmp9 = new closure_4("\u0BAF", -1, -1);
            items[9] = new closure_4("\u0BB5", -1, -1);
            tamilStemmer.a_12 = items;
            return items;
          }
        },
        {
          key: "a_13",
          get() {
            delete r1.a_13;
            const items = [new closure_4("\u0B95", -1, -1), , , , , ];
            const tmp = new closure_4("\u0B95", -1, -1);
            items[1] = new closure_4("\u0B9A", -1, -1);
            const tmp2 = new closure_4("\u0B9A", -1, -1);
            items[2] = new closure_4("\u0B9F", -1, -1);
            const tmp3 = new closure_4("\u0B9F", -1, -1);
            items[3] = new closure_4("\u0BA4", -1, -1);
            const tmp4 = new closure_4("\u0BA4", -1, -1);
            items[4] = new closure_4("\u0BAA", -1, -1);
            const tmp5 = new closure_4("\u0BAA", -1, -1);
            items[5] = new closure_4("\u0BB1", -1, -1);
            tamilStemmer.a_13 = items;
            return items;
          }
        },
        {
          key: "a_14",
          get() {
            delete r1.a_14;
            const items = [new closure_4("\u0BBE", -1, -1), , ];
            const tmp = new closure_4("\u0BBE", -1, -1);
            items[1] = new closure_4("\u0BC7", -1, -1);
            const tmp2 = new closure_4("\u0BC7", -1, -1);
            items[2] = new closure_4("\u0BCB", -1, -1);
            tamilStemmer.a_14 = items;
            return items;
          }
        },
        {
          key: "a_15",
          get() {
            delete r1.a_15;
            const items = [new closure_4("\u0BAA\u0BBF", -1, -1), ];
            const tmp = new closure_4("\u0BAA\u0BBF", -1, -1);
            items[1] = new closure_4("\u0BB5\u0BBF", -1, -1);
            tamilStemmer.a_15 = items;
            return items;
          }
        },
        {
          key: "a_16",
          get() {
            delete r1.a_16;
            const items = [new closure_4("\u0BBE", -1, -1), , , , , , , ];
            const tmp = new closure_4("\u0BBE", -1, -1);
            items[1] = new closure_4("\u0BBF", -1, -1);
            const tmp2 = new closure_4("\u0BBF", -1, -1);
            items[2] = new closure_4("\u0BC0", -1, -1);
            const tmp3 = new closure_4("\u0BC0", -1, -1);
            items[3] = new closure_4("\u0BC1", -1, -1);
            const tmp4 = new closure_4("\u0BC1", -1, -1);
            items[4] = new closure_4("\u0BC2", -1, -1);
            const tmp5 = new closure_4("\u0BC2", -1, -1);
            items[5] = new closure_4("\u0BC6", -1, -1);
            const tmp6 = new closure_4("\u0BC6", -1, -1);
            items[6] = new closure_4("\u0BC7", -1, -1);
            const tmp7 = new closure_4("\u0BC7", -1, -1);
            items[7] = new closure_4("\u0BC8", -1, -1);
            tamilStemmer.a_16 = items;
            return items;
          }
        },
        {
          key: "a_17",
          get() {
            delete r1.a_17;
            const items = [new closure_4("\u0BAA\u0B9F\u0BCD\u0B9F", -1, -1), , , , , , , , , , , , ];
            const tmp = new closure_4("\u0BAA\u0B9F\u0BCD\u0B9F", -1, -1);
            items[1] = new closure_4("\u0BAA\u0B9F\u0BCD\u0B9F\u0BA3", -1, -1);
            const tmp2 = new closure_4("\u0BAA\u0B9F\u0BCD\u0B9F\u0BA3", -1, -1);
            items[2] = new closure_4("\u0BA4\u0BBE\u0BA9", -1, -1);
            const tmp3 = new closure_4("\u0BA4\u0BBE\u0BA9", -1, -1);
            items[3] = new closure_4("\u0BAA\u0B9F\u0BBF\u0BA4\u0BBE\u0BA9", 2, -1);
            const tmp4 = new closure_4("\u0BAA\u0B9F\u0BBF\u0BA4\u0BBE\u0BA9", 2, -1);
            items[4] = new closure_4("\u0B95\u0BC1\u0BB0\u0BBF\u0BAF", -1, -1);
            const tmp5 = new closure_4("\u0B95\u0BC1\u0BB0\u0BBF\u0BAF", -1, -1);
            items[5] = new closure_4("\u0BAA\u0B9F\u0BBF", -1, -1);
            const tmp6 = new closure_4("\u0BAA\u0B9F\u0BBF", -1, -1);
            items[6] = new closure_4("\u0BAA\u0BB1\u0BCD\u0BB1\u0BBF", -1, -1);
            const tmp7 = new closure_4("\u0BAA\u0BB1\u0BCD\u0BB1\u0BBF", -1, -1);
            items[7] = new closure_4("\u0BAA\u0B9F\u0BC1", -1, -1);
            const tmp8 = new closure_4("\u0BAA\u0B9F\u0BC1", -1, -1);
            items[8] = new closure_4("\u0BB5\u0BBF\u0B9F\u0BC1", -1, -1);
            const tmp9 = new closure_4("\u0BB5\u0BBF\u0B9F\u0BC1", -1, -1);
            items[9] = new closure_4("\u0BAA\u0B9F\u0BCD\u0B9F\u0BC1", -1, -1);
            const tmp10 = new closure_4("\u0BAA\u0B9F\u0BCD\u0B9F\u0BC1", -1, -1);
            items[10] = new closure_4("\u0BB5\u0BBF\u0B9F\u0BCD\u0B9F\u0BC1", -1, -1);
            const tmp11 = new closure_4("\u0BB5\u0BBF\u0B9F\u0BCD\u0B9F\u0BC1", -1, -1);
            items[11] = new closure_4("\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1", -1, -1);
            const tmp12 = new closure_4("\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1", -1, -1);
            items[12] = new closure_4("\u0BC6\u0BB2\u0BCD\u0BB2\u0BBE\u0BAE\u0BCD", -1, -1);
            tamilStemmer.a_17 = items;
            return items;
          }
        },
        {
          key: "a_18",
          get() {
            delete r1.a_18;
            const items = [new closure_4("\u0B95", -1, -1), , , , , ];
            const tmp = new closure_4("\u0B95", -1, -1);
            items[1] = new closure_4("\u0B9A", -1, -1);
            const tmp2 = new closure_4("\u0B9A", -1, -1);
            items[2] = new closure_4("\u0B9F", -1, -1);
            const tmp3 = new closure_4("\u0B9F", -1, -1);
            items[3] = new closure_4("\u0BA4", -1, -1);
            const tmp4 = new closure_4("\u0BA4", -1, -1);
            items[4] = new closure_4("\u0BAA", -1, -1);
            const tmp5 = new closure_4("\u0BAA", -1, -1);
            items[5] = new closure_4("\u0BB1", -1, -1);
            tamilStemmer.a_18 = items;
            return items;
          }
        },
        {
          key: "a_19",
          get() {
            delete r1.a_19;
            const items = [new closure_4("\u0B95", -1, -1), , , , , ];
            const tmp = new closure_4("\u0B95", -1, -1);
            items[1] = new closure_4("\u0B9A", -1, -1);
            const tmp2 = new closure_4("\u0B9A", -1, -1);
            items[2] = new closure_4("\u0B9F", -1, -1);
            const tmp3 = new closure_4("\u0B9F", -1, -1);
            items[3] = new closure_4("\u0BA4", -1, -1);
            const tmp4 = new closure_4("\u0BA4", -1, -1);
            items[4] = new closure_4("\u0BAA", -1, -1);
            const tmp5 = new closure_4("\u0BAA", -1, -1);
            items[5] = new closure_4("\u0BB1", -1, -1);
            tamilStemmer.a_19 = items;
            return items;
          }
        },
        {
          key: "a_20",
          get() {
            delete r1.a_20;
            const items = [new closure_4("\u0BBE", -1, -1), , , , , , , ];
            const tmp = new closure_4("\u0BBE", -1, -1);
            items[1] = new closure_4("\u0BBF", -1, -1);
            const tmp2 = new closure_4("\u0BBF", -1, -1);
            items[2] = new closure_4("\u0BC0", -1, -1);
            const tmp3 = new closure_4("\u0BC0", -1, -1);
            items[3] = new closure_4("\u0BC1", -1, -1);
            const tmp4 = new closure_4("\u0BC1", -1, -1);
            items[4] = new closure_4("\u0BC2", -1, -1);
            const tmp5 = new closure_4("\u0BC2", -1, -1);
            items[5] = new closure_4("\u0BC6", -1, -1);
            const tmp6 = new closure_4("\u0BC6", -1, -1);
            items[6] = new closure_4("\u0BC7", -1, -1);
            const tmp7 = new closure_4("\u0BC7", -1, -1);
            items[7] = new closure_4("\u0BC8", -1, -1);
            tamilStemmer.a_20 = items;
            return items;
          }
        },
        {
          key: "a_21",
          get() {
            delete r1.a_21;
            const items = [new closure_4("\u0BBE", -1, -1), , , , , , , ];
            const tmp = new closure_4("\u0BBE", -1, -1);
            items[1] = new closure_4("\u0BBF", -1, -1);
            const tmp2 = new closure_4("\u0BBF", -1, -1);
            items[2] = new closure_4("\u0BC0", -1, -1);
            const tmp3 = new closure_4("\u0BC0", -1, -1);
            items[3] = new closure_4("\u0BC1", -1, -1);
            const tmp4 = new closure_4("\u0BC1", -1, -1);
            items[4] = new closure_4("\u0BC2", -1, -1);
            const tmp5 = new closure_4("\u0BC2", -1, -1);
            items[5] = new closure_4("\u0BC6", -1, -1);
            const tmp6 = new closure_4("\u0BC6", -1, -1);
            items[6] = new closure_4("\u0BC7", -1, -1);
            const tmp7 = new closure_4("\u0BC7", -1, -1);
            items[7] = new closure_4("\u0BC8", -1, -1);
            tamilStemmer.a_21 = items;
            return items;
          }
        },
        {
          key: "a_22",
          get() {
            delete r1.a_22;
            const items = [new closure_4("\u0BAA\u0B9F\u0BC1", -1, -1), ];
            const tmp = new closure_4("\u0BAA\u0B9F\u0BC1", -1, -1);
            items[1] = new closure_4("\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BCD", -1, -1);
            tamilStemmer.a_22 = items;
            return items;
          }
        },
        {
          key: "a_23",
          get() {
            delete r1.a_23;
            const items = [new closure_4("\u0B85", -1, -1), , , , , , , , , , , ];
            const tmp = new closure_4("\u0B85", -1, -1);
            items[1] = new closure_4("\u0B86", -1, -1);
            const tmp2 = new closure_4("\u0B86", -1, -1);
            items[2] = new closure_4("\u0B87", -1, -1);
            const tmp3 = new closure_4("\u0B87", -1, -1);
            items[3] = new closure_4("\u0B88", -1, -1);
            const tmp4 = new closure_4("\u0B88", -1, -1);
            items[4] = new closure_4("\u0B89", -1, -1);
            const tmp5 = new closure_4("\u0B89", -1, -1);
            items[5] = new closure_4("\u0B8A", -1, -1);
            const tmp6 = new closure_4("\u0B8A", -1, -1);
            items[6] = new closure_4("\u0B8E", -1, -1);
            const tmp7 = new closure_4("\u0B8E", -1, -1);
            items[7] = new closure_4("\u0B8F", -1, -1);
            const tmp8 = new closure_4("\u0B8F", -1, -1);
            items[8] = new closure_4("\u0B90", -1, -1);
            const tmp9 = new closure_4("\u0B90", -1, -1);
            items[9] = new closure_4("\u0B92", -1, -1);
            const tmp10 = new closure_4("\u0B92", -1, -1);
            items[10] = new closure_4("\u0B93", -1, -1);
            const tmp11 = new closure_4("\u0B93", -1, -1);
            items[11] = new closure_4("\u0B94", -1, -1);
            tamilStemmer.a_23 = items;
            return items;
          }
        },
        {
          key: "a_24",
          get() {
            delete r1.a_24;
            const items = [new closure_4("\u0BBE", -1, -1), , , , , , , ];
            const tmp = new closure_4("\u0BBE", -1, -1);
            items[1] = new closure_4("\u0BBF", -1, -1);
            const tmp2 = new closure_4("\u0BBF", -1, -1);
            items[2] = new closure_4("\u0BC0", -1, -1);
            const tmp3 = new closure_4("\u0BC0", -1, -1);
            items[3] = new closure_4("\u0BC1", -1, -1);
            const tmp4 = new closure_4("\u0BC1", -1, -1);
            items[4] = new closure_4("\u0BC2", -1, -1);
            const tmp5 = new closure_4("\u0BC2", -1, -1);
            items[5] = new closure_4("\u0BC6", -1, -1);
            const tmp6 = new closure_4("\u0BC6", -1, -1);
            items[6] = new closure_4("\u0BC7", -1, -1);
            const tmp7 = new closure_4("\u0BC7", -1, -1);
            items[7] = new closure_4("\u0BC8", -1, -1);
            tamilStemmer.a_24 = items;
            return items;
          }
        },
        {
          key: "a_25",
          get() {
            delete r1.a_25;
            const items = [new closure_4("\u0B95\u0BBF\u0BB1", -1, -1), , , , , ];
            const tmp = new closure_4("\u0B95\u0BBF\u0BB1", -1, -1);
            items[1] = new closure_4("\u0B95\u0BBF\u0BA9\u0BCD\u0BB1", -1, -1);
            const tmp2 = new closure_4("\u0B95\u0BBF\u0BA9\u0BCD\u0BB1", -1, -1);
            items[2] = new closure_4("\u0BBE\u0BA8\u0BBF\u0BA9\u0BCD\u0BB1", -1, -1);
            const tmp3 = new closure_4("\u0BBE\u0BA8\u0BBF\u0BA9\u0BCD\u0BB1", -1, -1);
            items[3] = new closure_4("\u0B95\u0BBF\u0BB1\u0BCD", -1, -1);
            const tmp4 = new closure_4("\u0B95\u0BBF\u0BB1\u0BCD", -1, -1);
            items[4] = new closure_4("\u0B95\u0BBF\u0BA9\u0BCD\u0BB1\u0BCD", -1, -1);
            const tmp5 = new closure_4("\u0B95\u0BBF\u0BA9\u0BCD\u0BB1\u0BCD", -1, -1);
            items[5] = new closure_4("\u0BBE\u0BA8\u0BBF\u0BA9\u0BCD\u0BB1\u0BCD", -1, -1);
            tamilStemmer.a_25 = items;
            return items;
          }
        }
      ];
      callback(tamilStemmer, items, items1);
      return tamilStemmer;
    }(tmp3);
    let closure_28 = (arg0) => {
      function turkishStemmer() {
        callback3(this, turkishStemmer);
        const prototypeOf = Object.getPrototypeOf(turkishStemmer);
        return callback2(this, prototypeOf(...arguments));
      }
      const callback = turkishStemmer;
      _inherits(turkishStemmer, arg0);
      let obj = {
        key: "r_check_vowel_harmony$esjava$0",
        value: function r_check_vowel_harmony$esjava$0() {
          const self = this;
          const diff = this.limit - this.cursor;
          const diff1 = self.limit - self.cursor;
          self.cursor = self.limit - diff1;
          while (!self.in_grouping_b$esjava$3(turkishStemmer.g_vowel, 97, 305)) {
            if (self.cursor <= self.limit_backward) {
              let flag = false;
              return false;
            } else {
              self.cursor = self.cursor - 1;
              // continue
            }
          }
          const diff2 = self.limit - self.cursor;
          if (!self.eq_s_b$esjava$1("a")) {
            self.cursor = self.limit - diff2;
            if (!self.eq_s_b$esjava$1("e")) {
              self.cursor = self.limit - diff2;
              if (!self.eq_s_b$esjava$1("\u0131")) {
                self.cursor = self.limit - diff2;
                if (!self.eq_s_b$esjava$1("i")) {
                  self.cursor = self.limit - diff2;
                  if (!self.eq_s_b$esjava$1("o")) {
                    self.cursor = self.limit - diff2;
                    if (!self.eq_s_b$esjava$1("\u00F6")) {
                      self.cursor = self.limit - diff2;
                      if (!self.eq_s_b$esjava$1("u")) {
                        self.cursor = self.limit - diff2;
                        if (self.eq_s_b$esjava$1("\u00FC")) {
                          const diff3 = self.limit - self.cursor;
                          self.cursor = self.limit - diff3;
                          while (!self.in_grouping_b$esjava$3(turkishStemmer.g_vowel6, 246, 252)) {
                            if (self.cursor <= self.limit_backward) {
                              let flag3 = false;
                              return false;
                            } else {
                              self.cursor = self.cursor - 1;
                              // continue
                            }
                          }
                        } else {
                          return false;
                        }
                      } else {
                        const diff4 = self.limit - self.cursor;
                        self.cursor = self.limit - diff4;
                        while (!self.in_grouping_b$esjava$3(turkishStemmer.g_vowel5, 111, 117)) {
                          if (self.cursor > self.limit_backward) {
                            self.cursor = self.cursor - 1;
                            // continue
                          }
                        }
                      }
                    } else {
                      const diff5 = self.limit - self.cursor;
                      self.cursor = self.limit - diff5;
                      while (!self.in_grouping_b$esjava$3(turkishStemmer.g_vowel6, 246, 252)) {
                        if (self.cursor > self.limit_backward) {
                          self.cursor = self.cursor - 1;
                          // continue
                        }
                      }
                    }
                  } else {
                    const diff6 = self.limit - self.cursor;
                    self.cursor = self.limit - diff6;
                    while (!self.in_grouping_b$esjava$3(turkishStemmer.g_vowel5, 111, 117)) {
                      if (self.cursor > self.limit_backward) {
                        self.cursor = self.cursor - 1;
                        // continue
                      }
                    }
                  }
                } else {
                  const diff7 = self.limit - self.cursor;
                  self.cursor = self.limit - diff7;
                  while (!self.in_grouping_b$esjava$3(turkishStemmer.g_vowel4, 101, 105)) {
                    if (self.cursor > self.limit_backward) {
                      self.cursor = self.cursor - 1;
                      // continue
                    }
                  }
                }
              } else {
                const diff8 = self.limit - self.cursor;
                self.cursor = self.limit - diff8;
                while (!self.in_grouping_b$esjava$3(turkishStemmer.g_vowel3, 97, 305)) {
                  if (self.cursor > self.limit_backward) {
                    self.cursor = self.cursor - 1;
                    // continue
                  }
                }
              }
            } else {
              const diff9 = self.limit - self.cursor;
              self.cursor = self.limit - diff9;
              while (!self.in_grouping_b$esjava$3(turkishStemmer.g_vowel2, 101, 252)) {
                if (self.cursor > self.limit_backward) {
                  self.cursor = self.cursor - 1;
                  // continue
                }
              }
            }
          } else {
            const diff10 = self.limit - self.cursor;
            self.cursor = self.limit - diff10;
            while (!self.in_grouping_b$esjava$3(turkishStemmer.g_vowel1, 97, 305)) {
              if (self.cursor > self.limit_backward) {
                self.cursor = self.cursor - 1;
                // continue
              }
              break;
            }
          }
          self.cursor = self.limit - diff;
          return true;
        }
      };
      const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
      obj = {
        key: "r_mark_suffix_with_optional_n_consonant$esjava$0",
        value: function r_mark_suffix_with_optional_n_consonant$esjava$0() {
          const self = this;
          const diff = this.limit - this.cursor;
          if (this.eq_s_b$esjava$1("n")) {
            const diff1 = self.limit - self.cursor;
            if (self.in_grouping_b$esjava$3(turkishStemmer.g_vowel, 97, 305)) {
              self.cursor = self.limit - diff1;
            }
            return true;
          }
          self.cursor = self.limit - diff;
          const diff2 = self.limit - self.cursor;
          const diff3 = self.limit - self.cursor;
          const limit = self.limit;
          if (self.eq_s_b$esjava$1("n")) {
            self.cursor = limit - diff3;
            return false;
          } else {
            self.cursor = limit - diff2;
            if (self.cursor <= self.limit_backward) {
              return false;
            } else {
              self.cursor = self.cursor - 1;
              if (self.in_grouping_b$esjava$3(turkishStemmer.g_vowel, 97, 305)) {
                self.cursor = self.limit - tmp6;
              } else {
                return false;
              }
            }
          }
        }
      };
      items[1] = obj;
      obj = {
        key: "r_mark_suffix_with_optional_s_consonant$esjava$0",
        value: function r_mark_suffix_with_optional_s_consonant$esjava$0() {
          const self = this;
          const diff = this.limit - this.cursor;
          if (this.eq_s_b$esjava$1("s")) {
            const diff1 = self.limit - self.cursor;
            if (self.in_grouping_b$esjava$3(turkishStemmer.g_vowel, 97, 305)) {
              self.cursor = self.limit - diff1;
            }
            return true;
          }
          self.cursor = self.limit - diff;
          const diff2 = self.limit - self.cursor;
          const diff3 = self.limit - self.cursor;
          const limit = self.limit;
          if (self.eq_s_b$esjava$1("s")) {
            self.cursor = limit - diff3;
            return false;
          } else {
            self.cursor = limit - diff2;
            if (self.cursor <= self.limit_backward) {
              return false;
            } else {
              self.cursor = self.cursor - 1;
              if (self.in_grouping_b$esjava$3(turkishStemmer.g_vowel, 97, 305)) {
                self.cursor = self.limit - tmp6;
              } else {
                return false;
              }
            }
          }
        }
      };
      items[2] = obj;
      items[3] = {
        key: "r_mark_suffix_with_optional_y_consonant$esjava$0",
        value: function r_mark_suffix_with_optional_y_consonant$esjava$0() {
          const self = this;
          const diff = this.limit - this.cursor;
          if (this.eq_s_b$esjava$1("y")) {
            const diff1 = self.limit - self.cursor;
            if (self.in_grouping_b$esjava$3(turkishStemmer.g_vowel, 97, 305)) {
              self.cursor = self.limit - diff1;
            }
            return true;
          }
          self.cursor = self.limit - diff;
          const diff2 = self.limit - self.cursor;
          const diff3 = self.limit - self.cursor;
          const limit = self.limit;
          if (self.eq_s_b$esjava$1("y")) {
            self.cursor = limit - diff3;
            return false;
          } else {
            self.cursor = limit - diff2;
            if (self.cursor <= self.limit_backward) {
              return false;
            } else {
              self.cursor = self.cursor - 1;
              if (self.in_grouping_b$esjava$3(turkishStemmer.g_vowel, 97, 305)) {
                self.cursor = self.limit - tmp6;
              } else {
                return false;
              }
            }
          }
        }
      };
      items[4] = {
        key: "r_mark_suffix_with_optional_U_vowel$esjava$0",
        value: function r_mark_suffix_with_optional_U_vowel$esjava$0() {
          const self = this;
          const diff = this.limit - this.cursor;
          if (this.in_grouping_b$esjava$3(turkishStemmer.g_U, 105, 305)) {
            const diff1 = self.limit - self.cursor;
            if (self.out_grouping_b$esjava$3(turkishStemmer.g_vowel, 97, 305)) {
              self.cursor = self.limit - diff1;
            }
            return true;
          }
          self.cursor = self.limit - diff;
          const diff2 = self.limit - self.cursor;
          const diff3 = self.limit - self.cursor;
          const limit = self.limit;
          if (self.in_grouping_b$esjava$3(turkishStemmer.g_U, 105, 305)) {
            self.cursor = limit - diff3;
            return false;
          } else {
            self.cursor = limit - diff2;
            if (self.cursor <= self.limit_backward) {
              return false;
            } else {
              self.cursor = self.cursor - 1;
              if (self.out_grouping_b$esjava$3(turkishStemmer.g_vowel, 97, 305)) {
                self.cursor = self.limit - tmp6;
              } else {
                return false;
              }
            }
          }
        }
      };
      items[5] = {
        key: "r_mark_possessives$esjava$0",
        value: function r_mark_possessives$esjava$0() {
          const self = this;
          return 0 !== this.find_among_b$esjava$1(turkishStemmer.a_0) && self.r_mark_suffix_with_optional_U_vowel$esjava$0();
        }
      };
      items[6] = {
        key: "r_mark_sU$esjava$0",
        value: function r_mark_sU$esjava$0() {
          const self = this;
          const tmp = !this.r_check_vowel_harmony$esjava$0();
          let tmp2 = !tmp;
          if (!tmp) {
            const tmp4 = !self.in_grouping_b$esjava$3(turkishStemmer.g_U, 105, 305);
            let result = !tmp4;
            if (!tmp4) {
              result = self.r_mark_suffix_with_optional_s_consonant$esjava$0();
            }
            tmp2 = result;
          }
          return tmp2;
        }
      };
      items[7] = {
        key: "r_mark_lArI$esjava$0",
        value: function r_mark_lArI$esjava$0() {
          return 0 !== this.find_among_b$esjava$1(turkishStemmer.a_1);
        }
      };
      items[8] = {
        key: "r_mark_yU$esjava$0",
        value: function r_mark_yU$esjava$0() {
          const self = this;
          const tmp = !this.r_check_vowel_harmony$esjava$0();
          let tmp2 = !tmp;
          if (!tmp) {
            const tmp4 = !self.in_grouping_b$esjava$3(turkishStemmer.g_U, 105, 305);
            let result = !tmp4;
            if (!tmp4) {
              result = self.r_mark_suffix_with_optional_y_consonant$esjava$0();
            }
            tmp2 = result;
          }
          return tmp2;
        }
      };
      items[9] = {
        key: "r_mark_nU$esjava$0",
        value: function r_mark_nU$esjava$0() {
          const self = this;
          const tmp = !this.r_check_vowel_harmony$esjava$0();
          let tmp2 = !tmp;
          if (!tmp) {
            tmp2 = 0 !== self.find_among_b$esjava$1(turkishStemmer.a_2);
          }
          return tmp2;
        }
      };
      items[10] = {
        key: "r_mark_nUn$esjava$0",
        value: function r_mark_nUn$esjava$0() {
          const self = this;
          const tmp = !this.r_check_vowel_harmony$esjava$0();
          let tmp2 = !tmp;
          if (!tmp) {
            tmp2 = 0 !== self.find_among_b$esjava$1(turkishStemmer.a_3) && self.r_mark_suffix_with_optional_n_consonant$esjava$0();
            const tmp4 = 0 !== self.find_among_b$esjava$1(turkishStemmer.a_3) && self.r_mark_suffix_with_optional_n_consonant$esjava$0();
          }
          return tmp2;
        }
      };
      items[11] = {
        key: "r_mark_yA$esjava$0",
        value: function r_mark_yA$esjava$0() {
          const self = this;
          const tmp = !this.r_check_vowel_harmony$esjava$0();
          let tmp2 = !tmp;
          if (!tmp) {
            tmp2 = 0 !== self.find_among_b$esjava$1(turkishStemmer.a_4) && self.r_mark_suffix_with_optional_y_consonant$esjava$0();
            const tmp4 = 0 !== self.find_among_b$esjava$1(turkishStemmer.a_4) && self.r_mark_suffix_with_optional_y_consonant$esjava$0();
          }
          return tmp2;
        }
      };
      items[12] = {
        key: "r_mark_nA$esjava$0",
        value: function r_mark_nA$esjava$0() {
          const self = this;
          const tmp = !this.r_check_vowel_harmony$esjava$0();
          let tmp2 = !tmp;
          if (!tmp) {
            tmp2 = 0 !== self.find_among_b$esjava$1(turkishStemmer.a_5);
          }
          return tmp2;
        }
      };
      items[13] = {
        key: "r_mark_DA$esjava$0",
        value: function r_mark_DA$esjava$0() {
          const self = this;
          const tmp = !this.r_check_vowel_harmony$esjava$0();
          let tmp2 = !tmp;
          if (!tmp) {
            tmp2 = 0 !== self.find_among_b$esjava$1(turkishStemmer.a_6);
          }
          return tmp2;
        }
      };
      items[14] = {
        key: "r_mark_ndA$esjava$0",
        value: function r_mark_ndA$esjava$0() {
          const self = this;
          const tmp = !this.r_check_vowel_harmony$esjava$0();
          let tmp2 = !tmp;
          if (!tmp) {
            tmp2 = 0 !== self.find_among_b$esjava$1(turkishStemmer.a_7);
          }
          return tmp2;
        }
      };
      items[15] = {
        key: "r_mark_DAn$esjava$0",
        value: function r_mark_DAn$esjava$0() {
          const self = this;
          const tmp = !this.r_check_vowel_harmony$esjava$0();
          let tmp2 = !tmp;
          if (!tmp) {
            tmp2 = 0 !== self.find_among_b$esjava$1(turkishStemmer.a_8);
          }
          return tmp2;
        }
      };
      items[16] = {
        key: "r_mark_ndAn$esjava$0",
        value: function r_mark_ndAn$esjava$0() {
          const self = this;
          const tmp = !this.r_check_vowel_harmony$esjava$0();
          let tmp2 = !tmp;
          if (!tmp) {
            tmp2 = 0 !== self.find_among_b$esjava$1(turkishStemmer.a_9);
          }
          return tmp2;
        }
      };
      items[17] = {
        key: "r_mark_ylA$esjava$0",
        value: function r_mark_ylA$esjava$0() {
          const self = this;
          const tmp = !this.r_check_vowel_harmony$esjava$0();
          let tmp2 = !tmp;
          if (!tmp) {
            tmp2 = 0 !== self.find_among_b$esjava$1(turkishStemmer.a_10) && self.r_mark_suffix_with_optional_y_consonant$esjava$0();
            const tmp4 = 0 !== self.find_among_b$esjava$1(turkishStemmer.a_10) && self.r_mark_suffix_with_optional_y_consonant$esjava$0();
          }
          return tmp2;
        }
      };
      items[18] = {
        key: "r_mark_ki$esjava$0",
        value: function r_mark_ki$esjava$0() {
          return this.eq_s_b$esjava$1("ki");
        }
      };
      items[19] = {
        key: "r_mark_ncA$esjava$0",
        value: function r_mark_ncA$esjava$0() {
          const self = this;
          const tmp = !this.r_check_vowel_harmony$esjava$0();
          let tmp2 = !tmp;
          if (!tmp) {
            tmp2 = 0 !== self.find_among_b$esjava$1(turkishStemmer.a_11) && self.r_mark_suffix_with_optional_n_consonant$esjava$0();
            const tmp4 = 0 !== self.find_among_b$esjava$1(turkishStemmer.a_11) && self.r_mark_suffix_with_optional_n_consonant$esjava$0();
          }
          return tmp2;
        }
      };
      items[20] = {
        key: "r_mark_yUm$esjava$0",
        value: function r_mark_yUm$esjava$0() {
          const self = this;
          const tmp = !this.r_check_vowel_harmony$esjava$0();
          let tmp2 = !tmp;
          if (!tmp) {
            tmp2 = 0 !== self.find_among_b$esjava$1(turkishStemmer.a_12) && self.r_mark_suffix_with_optional_y_consonant$esjava$0();
            const tmp4 = 0 !== self.find_among_b$esjava$1(turkishStemmer.a_12) && self.r_mark_suffix_with_optional_y_consonant$esjava$0();
          }
          return tmp2;
        }
      };
      items[21] = {
        key: "r_mark_sUn$esjava$0",
        value: function r_mark_sUn$esjava$0() {
          const self = this;
          const tmp = !this.r_check_vowel_harmony$esjava$0();
          let tmp2 = !tmp;
          if (!tmp) {
            tmp2 = 0 !== self.find_among_b$esjava$1(turkishStemmer.a_13);
          }
          return tmp2;
        }
      };
      items[22] = {
        key: "r_mark_yUz$esjava$0",
        value: function r_mark_yUz$esjava$0() {
          const self = this;
          const tmp = !this.r_check_vowel_harmony$esjava$0();
          let tmp2 = !tmp;
          if (!tmp) {
            tmp2 = 0 !== self.find_among_b$esjava$1(turkishStemmer.a_14) && self.r_mark_suffix_with_optional_y_consonant$esjava$0();
            const tmp4 = 0 !== self.find_among_b$esjava$1(turkishStemmer.a_14) && self.r_mark_suffix_with_optional_y_consonant$esjava$0();
          }
          return tmp2;
        }
      };
      items[23] = {
        key: "r_mark_sUnUz$esjava$0",
        value: function r_mark_sUnUz$esjava$0() {
          return 0 !== this.find_among_b$esjava$1(turkishStemmer.a_15);
        }
      };
      items[24] = {
        key: "r_mark_lAr$esjava$0",
        value: function r_mark_lAr$esjava$0() {
          const self = this;
          const tmp = !this.r_check_vowel_harmony$esjava$0();
          let tmp2 = !tmp;
          if (!tmp) {
            tmp2 = 0 !== self.find_among_b$esjava$1(turkishStemmer.a_16);
          }
          return tmp2;
        }
      };
      items[25] = {
        key: "r_mark_nUz$esjava$0",
        value: function r_mark_nUz$esjava$0() {
          const self = this;
          const tmp = !this.r_check_vowel_harmony$esjava$0();
          let tmp2 = !tmp;
          if (!tmp) {
            tmp2 = 0 !== self.find_among_b$esjava$1(turkishStemmer.a_17);
          }
          return tmp2;
        }
      };
      items[26] = {
        key: "r_mark_DUr$esjava$0",
        value: function r_mark_DUr$esjava$0() {
          const self = this;
          const tmp = !this.r_check_vowel_harmony$esjava$0();
          let tmp2 = !tmp;
          if (!tmp) {
            tmp2 = 0 !== self.find_among_b$esjava$1(turkishStemmer.a_18);
          }
          return tmp2;
        }
      };
      items[27] = {
        key: "r_mark_cAsInA$esjava$0",
        value: function r_mark_cAsInA$esjava$0() {
          return 0 !== this.find_among_b$esjava$1(turkishStemmer.a_19);
        }
      };
      items[28] = {
        key: "r_mark_yDU$esjava$0",
        value: function r_mark_yDU$esjava$0() {
          const self = this;
          const tmp = !this.r_check_vowel_harmony$esjava$0();
          let tmp2 = !tmp;
          if (!tmp) {
            tmp2 = 0 !== self.find_among_b$esjava$1(turkishStemmer.a_20) && self.r_mark_suffix_with_optional_y_consonant$esjava$0();
            const tmp4 = 0 !== self.find_among_b$esjava$1(turkishStemmer.a_20) && self.r_mark_suffix_with_optional_y_consonant$esjava$0();
          }
          return tmp2;
        }
      };
      items[29] = {
        key: "r_mark_ysA$esjava$0",
        value: function r_mark_ysA$esjava$0() {
          const self = this;
          return 0 !== this.find_among_b$esjava$1(turkishStemmer.a_21) && self.r_mark_suffix_with_optional_y_consonant$esjava$0();
        }
      };
      items[30] = {
        key: "r_mark_ymUs_$esjava$0",
        value: function r_mark_ymUs_$esjava$0() {
          const self = this;
          const tmp = !this.r_check_vowel_harmony$esjava$0();
          let tmp2 = !tmp;
          if (!tmp) {
            tmp2 = 0 !== self.find_among_b$esjava$1(turkishStemmer.a_22) && self.r_mark_suffix_with_optional_y_consonant$esjava$0();
            const tmp4 = 0 !== self.find_among_b$esjava$1(turkishStemmer.a_22) && self.r_mark_suffix_with_optional_y_consonant$esjava$0();
          }
          return tmp2;
        }
      };
      items[31] = {
        key: "r_mark_yken$esjava$0",
        value: function r_mark_yken$esjava$0() {
          const self = this;
          const tmp = !this.eq_s_b$esjava$1("ken");
          let result = !tmp;
          if (!tmp) {
            result = self.r_mark_suffix_with_optional_y_consonant$esjava$0();
          }
          return result;
        }
      };
      items[32] = {
        key: "r_stem_nominal_verb_suffixes$esjava$0",
        value: function r_stem_nominal_verb_suffixes$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          this.B_continue_stemming_noun_suffixes = true;
          const diff = this.limit - this.cursor;
          const diff1 = this.limit - this.cursor;
          if (!this.r_mark_ymUs_$esjava$0()) {
            self.cursor = self.limit - diff1;
            if (!self.r_mark_yDU$esjava$0()) {
              self.cursor = self.limit - diff1;
              if (!self.r_mark_ysA$esjava$0()) {
                self.cursor = self.limit - diff1;
                if (!self.r_mark_yken$esjava$0()) {
                  self.cursor = self.limit - diff;
                  if (!self.r_mark_cAsInA$esjava$0()) {
                    self.cursor = self.limit - diff;
                    if (self.r_mark_lAr$esjava$0()) {
                      self.bra = self.cursor;
                      const result = self.slice_del$esjava$0();
                      self.ket = self.cursor;
                      const diff2 = self.limit - self.cursor;
                      const diff3 = self.limit - self.cursor;
                      if (!self.r_mark_DUr$esjava$0()) {
                        self.cursor = self.limit - diff2;
                        if (!self.r_mark_yDU$esjava$0()) {
                          self.cursor = self.limit - diff2;
                          if (!self.r_mark_ysA$esjava$0()) {
                            self.cursor = self.limit - diff2;
                            if (!self.r_mark_ymUs_$esjava$0()) {
                              self.cursor = self.limit - diff3;
                            }
                          }
                        }
                      }
                      self.B_continue_stemming_noun_suffixes = false;
                    } else {
                      self.cursor = self.limit - diff;
                      if (!self.r_mark_nUz$esjava$0()) {
                        self.cursor = self.limit - diff;
                        const diff4 = self.limit - self.cursor;
                        if (!self.r_mark_sUnUz$esjava$0()) {
                          self.cursor = self.limit - diff4;
                          if (!self.r_mark_yUz$esjava$0()) {
                            self.cursor = self.limit - diff4;
                            if (!self.r_mark_sUn$esjava$0()) {
                              self.cursor = self.limit - diff4;
                              if (!self.r_mark_yUm$esjava$0()) {
                                self.cursor = self.limit - diff;
                                if (self.r_mark_DUr$esjava$0()) {
                                  self.bra = self.cursor;
                                  const result1 = self.slice_del$esjava$0();
                                  self.ket = self.cursor;
                                  const diff5 = self.limit - self.cursor;
                                  const diff6 = self.limit - self.cursor;
                                  if (!self.r_mark_sUnUz$esjava$0()) {
                                    self.cursor = self.limit - diff5;
                                    if (!self.r_mark_lAr$esjava$0()) {
                                      self.cursor = self.limit - diff5;
                                      if (!self.r_mark_yUm$esjava$0()) {
                                        self.cursor = self.limit - diff5;
                                        if (!self.r_mark_sUn$esjava$0()) {
                                          self.cursor = self.limit - diff5;
                                          if (!self.r_mark_yUz$esjava$0()) {
                                            self.cursor = self.limit - diff5;
                                          }
                                        }
                                      }
                                    }
                                  }
                                  if (!self.r_mark_ymUs_$esjava$0()) {
                                    self.cursor = self.limit - diff6;
                                  }
                                } else {
                                  return false;
                                }
                              }
                            }
                          }
                        }
                        self.bra = self.cursor;
                        const result2 = self.slice_del$esjava$0();
                        self.ket = self.cursor;
                        const diff7 = self.limit - self.cursor;
                        if (!self.r_mark_ymUs_$esjava$0()) {
                          self.cursor = self.limit - diff7;
                        }
                      } else {
                        const diff8 = self.limit - self.cursor;
                        if (!self.r_mark_yDU$esjava$0()) {
                          self.cursor = self.limit - diff8;
                        }
                      }
                    }
                  } else {
                    const diff9 = self.limit - self.cursor;
                    if (!self.r_mark_sUnUz$esjava$0()) {
                      self.cursor = self.limit - diff9;
                      if (!self.r_mark_lAr$esjava$0()) {
                        self.cursor = self.limit - diff9;
                        if (!self.r_mark_yUm$esjava$0()) {
                          self.cursor = self.limit - diff9;
                          if (!self.r_mark_sUn$esjava$0()) {
                            self.cursor = self.limit - diff9;
                            if (!self.r_mark_yUz$esjava$0()) {
                              self.cursor = self.limit - diff9;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          self.bra = self.cursor;
          const result3 = self.slice_del$esjava$0();
          return true;
        }
      };
      items[33] = {
        key: "r_stem_suffix_chain_before_ki$esjava$0",
        value: function r_stem_suffix_chain_before_ki$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          if (this.r_mark_ki$esjava$0()) {
            const diff = self.limit - self.cursor;
            if (self.r_mark_DA$esjava$0()) {
              self.bra = self.cursor;
              const result = self.slice_del$esjava$0();
              self.ket = self.cursor;
              const diff1 = self.limit - self.cursor;
              const diff2 = self.limit - self.cursor;
              if (self.r_mark_lAr$esjava$0()) {
                self.bra = self.cursor;
                const result1 = self.slice_del$esjava$0();
                const diff3 = self.limit - self.cursor;
                if (!self.r_stem_suffix_chain_before_ki$esjava$0()) {
                  self.cursor = self.limit - diff3;
                }
              } else {
                self.cursor = self.limit - diff2;
                if (self.r_mark_possessives$esjava$0()) {
                  self.bra = self.cursor;
                  const result2 = self.slice_del$esjava$0();
                  const diff4 = self.limit - self.cursor;
                  self.ket = self.cursor;
                  if (self.r_mark_lAr$esjava$0()) {
                    self.bra = self.cursor;
                    const result3 = self.slice_del$esjava$0();
                    if (!self.r_stem_suffix_chain_before_ki$esjava$0()) {
                      self.cursor = self.limit - diff4;
                    }
                  } else {
                    self.cursor = self.limit - diff4;
                  }
                } else {
                  self.cursor = self.limit - diff1;
                }
              }
            } else {
              self.cursor = self.limit - diff;
              if (self.r_mark_nUn$esjava$0()) {
                self.bra = self.cursor;
                const result4 = self.slice_del$esjava$0();
                self.ket = self.cursor;
                const diff5 = self.limit - self.cursor;
                const diff6 = self.limit - self.cursor;
                if (self.r_mark_lArI$esjava$0()) {
                  self.bra = self.cursor;
                  const result5 = self.slice_del$esjava$0();
                } else {
                  self.cursor = self.limit - diff5;
                  self.ket = self.cursor;
                  const diff7 = self.limit - self.cursor;
                  if (!self.r_mark_possessives$esjava$0()) {
                    self.cursor = self.limit - diff7;
                    if (!self.r_mark_sU$esjava$0()) {
                      self.cursor = self.limit - diff5;
                      if (!self.r_stem_suffix_chain_before_ki$esjava$0()) {
                        self.cursor = self.limit - diff6;
                      }
                    }
                  }
                  self.bra = self.cursor;
                  const result6 = self.slice_del$esjava$0();
                  const diff8 = self.limit - self.cursor;
                  self.ket = self.cursor;
                  if (self.r_mark_lAr$esjava$0()) {
                    self.bra = self.cursor;
                    const result7 = self.slice_del$esjava$0();
                    if (!self.r_stem_suffix_chain_before_ki$esjava$0()) {
                      self.cursor = self.limit - diff8;
                    }
                  } else {
                    self.cursor = self.limit - diff8;
                  }
                }
              } else {
                self.cursor = self.limit - diff;
                if (self.r_mark_ndA$esjava$0()) {
                  const diff9 = self.limit - self.cursor;
                  if (self.r_mark_lArI$esjava$0()) {
                    self.bra = self.cursor;
                    const result8 = self.slice_del$esjava$0();
                  } else {
                    self.cursor = self.limit - diff9;
                    if (self.r_mark_sU$esjava$0()) {
                      self.bra = self.cursor;
                      const result9 = self.slice_del$esjava$0();
                      const diff10 = self.limit - self.cursor;
                      self.ket = self.cursor;
                      if (self.r_mark_lAr$esjava$0()) {
                        self.bra = self.cursor;
                        const result10 = self.slice_del$esjava$0();
                        if (!self.r_stem_suffix_chain_before_ki$esjava$0()) {
                          self.cursor = self.limit - diff10;
                        }
                      } else {
                        self.cursor = self.limit - diff10;
                      }
                    } else {
                      self.cursor = self.limit - diff9;
                      if (!self.r_stem_suffix_chain_before_ki$esjava$0()) {
                        return false;
                      }
                    }
                  }
                } else {
                  return false;
                }
              }
            }
            return true;
          } else {
            return false;
          }
        }
      };
      items[34] = {
        key: "r_stem_noun_suffixes$esjava$0",
        value: function r_stem_noun_suffixes$esjava$0() {
          const self = this;
          const diff = this.limit - this.cursor;
          this.ket = this.cursor;
          if (this.r_mark_lAr$esjava$0()) {
            self.bra = self.cursor;
            const result = self.slice_del$esjava$0();
            const diff1 = self.limit - self.cursor;
            if (!self.r_stem_suffix_chain_before_ki$esjava$0()) {
              self.cursor = self.limit - diff1;
            }
          } else {
            self.cursor = self.limit - diff;
            self.ket = self.cursor;
            if (self.r_mark_ncA$esjava$0()) {
              self.bra = self.cursor;
              const result1 = self.slice_del$esjava$0();
              const diff2 = self.limit - self.cursor;
              const diff3 = self.limit - self.cursor;
              self.ket = self.cursor;
              if (self.r_mark_lArI$esjava$0()) {
                self.bra = self.cursor;
                const result2 = self.slice_del$esjava$0();
              } else {
                self.cursor = self.limit - diff3;
                self.ket = self.cursor;
                const diff4 = self.limit - self.cursor;
                if (!self.r_mark_possessives$esjava$0()) {
                  self.cursor = self.limit - diff4;
                  if (!self.r_mark_sU$esjava$0()) {
                    self.cursor = self.limit - diff3;
                    self.ket = self.cursor;
                    if (self.r_mark_lAr$esjava$0()) {
                      self.bra = self.cursor;
                      const result3 = self.slice_del$esjava$0();
                      if (!self.r_stem_suffix_chain_before_ki$esjava$0()) {
                        self.cursor = self.limit - diff2;
                      }
                    } else {
                      self.cursor = self.limit - diff2;
                    }
                  }
                }
                self.bra = self.cursor;
                const result4 = self.slice_del$esjava$0();
                const diff5 = self.limit - self.cursor;
                self.ket = self.cursor;
                if (self.r_mark_lAr$esjava$0()) {
                  self.bra = self.cursor;
                  const result5 = self.slice_del$esjava$0();
                  if (!self.r_stem_suffix_chain_before_ki$esjava$0()) {
                    self.cursor = self.limit - diff5;
                  }
                } else {
                  self.cursor = self.limit - diff5;
                }
              }
            } else {
              self.cursor = self.limit - diff;
              self.ket = self.cursor;
              const diff6 = self.limit - self.cursor;
              if (self.r_mark_ndA$esjava$0()) {
                const diff7 = self.limit - self.cursor;
                if (self.r_mark_lArI$esjava$0()) {
                  self.bra = self.cursor;
                  const result6 = self.slice_del$esjava$0();
                } else {
                  self.cursor = self.limit - diff7;
                  if (self.r_mark_sU$esjava$0()) {
                    self.bra = self.cursor;
                    const result7 = self.slice_del$esjava$0();
                    const diff8 = self.limit - self.cursor;
                    self.ket = self.cursor;
                    if (self.r_mark_lAr$esjava$0()) {
                      self.bra = self.cursor;
                      const result8 = self.slice_del$esjava$0();
                      if (!self.r_stem_suffix_chain_before_ki$esjava$0()) {
                        self.cursor = self.limit - diff8;
                      }
                    } else {
                      self.cursor = self.limit - diff8;
                    }
                  } else {
                    self.cursor = self.limit - diff7;
                  }
                }
              } else {
                self.cursor = self.limit - diff6;
              }
              self.cursor = self.limit - diff;
              self.ket = self.cursor;
              const diff9 = self.limit - self.cursor;
              if (self.r_mark_ndAn$esjava$0()) {
                const diff10 = self.limit - self.cursor;
                if (self.r_mark_sU$esjava$0()) {
                  self.bra = self.cursor;
                  const result9 = self.slice_del$esjava$0();
                  const diff11 = self.limit - self.cursor;
                  self.ket = self.cursor;
                  if (self.r_mark_lAr$esjava$0()) {
                    self.bra = self.cursor;
                    const result10 = self.slice_del$esjava$0();
                    if (!self.r_stem_suffix_chain_before_ki$esjava$0()) {
                      self.cursor = self.limit - diff11;
                    }
                  } else {
                    self.cursor = self.limit - diff11;
                  }
                } else {
                  self.cursor = self.limit - diff10;
                }
              } else {
                self.cursor = self.limit - diff9;
              }
              self.cursor = self.limit - diff;
              self.ket = self.cursor;
              if (self.r_mark_DAn$esjava$0()) {
                self.bra = self.cursor;
                const result11 = self.slice_del$esjava$0();
                self.ket = self.cursor;
                const diff12 = self.limit - self.cursor;
                const diff13 = self.limit - self.cursor;
                if (self.r_mark_possessives$esjava$0()) {
                  self.bra = self.cursor;
                  const result12 = self.slice_del$esjava$0();
                  const diff14 = self.limit - self.cursor;
                  self.ket = self.cursor;
                  if (self.r_mark_lAr$esjava$0()) {
                    self.bra = self.cursor;
                    const result13 = self.slice_del$esjava$0();
                    if (!self.r_stem_suffix_chain_before_ki$esjava$0()) {
                      self.cursor = self.limit - diff14;
                    }
                  } else {
                    self.cursor = self.limit - diff14;
                  }
                } else {
                  self.cursor = self.limit - diff12;
                  if (self.r_mark_lAr$esjava$0()) {
                    self.bra = self.cursor;
                    const result14 = self.slice_del$esjava$0();
                    const diff15 = self.limit - self.cursor;
                    if (!self.r_stem_suffix_chain_before_ki$esjava$0()) {
                      self.cursor = self.limit - diff15;
                    }
                  } else {
                    self.cursor = self.limit - diff12;
                    if (!self.r_stem_suffix_chain_before_ki$esjava$0()) {
                      self.cursor = self.limit - diff13;
                    }
                  }
                }
              } else {
                self.cursor = self.limit - diff;
                self.ket = self.cursor;
                const diff16 = self.limit - self.cursor;
                if (!self.r_mark_nUn$esjava$0()) {
                  self.cursor = self.limit - diff16;
                  if (!self.r_mark_ylA$esjava$0()) {
                    self.cursor = self.limit - diff;
                    self.ket = self.cursor;
                    if (self.r_mark_lArI$esjava$0()) {
                      self.bra = self.cursor;
                      const result15 = self.slice_del$esjava$0();
                    } else {
                      self.cursor = self.limit - diff;
                      if (!self.r_stem_suffix_chain_before_ki$esjava$0()) {
                        self.cursor = self.limit - diff;
                        self.ket = self.cursor;
                        const diff17 = self.limit - self.cursor;
                        if (!self.r_mark_DA$esjava$0()) {
                          self.cursor = self.limit - diff17;
                          if (!self.r_mark_yU$esjava$0()) {
                            self.cursor = self.limit - diff17;
                            if (!self.r_mark_yA$esjava$0()) {
                              self.cursor = self.limit - diff;
                              self.ket = self.cursor;
                              const diff18 = self.limit - self.cursor;
                              if (!self.r_mark_possessives$esjava$0()) {
                                self.cursor = self.limit - diff18;
                                if (!self.r_mark_sU$esjava$0()) {
                                  return false;
                                }
                              }
                              self.bra = self.cursor;
                              const result16 = self.slice_del$esjava$0();
                              const diff19 = self.limit - self.cursor;
                              self.ket = self.cursor;
                              if (self.r_mark_lAr$esjava$0()) {
                                self.bra = self.cursor;
                                const result17 = self.slice_del$esjava$0();
                                if (!self.r_stem_suffix_chain_before_ki$esjava$0()) {
                                  self.cursor = self.limit - diff19;
                                }
                              } else {
                                self.cursor = self.limit - diff19;
                              }
                            }
                          }
                        }
                        self.bra = self.cursor;
                        const result18 = self.slice_del$esjava$0();
                        const diff20 = self.limit - self.cursor;
                        self.ket = self.cursor;
                        const diff21 = self.limit - self.cursor;
                        if (self.r_mark_possessives$esjava$0()) {
                          self.bra = self.cursor;
                          const result19 = self.slice_del$esjava$0();
                          self.ket = self.cursor;
                          const diff22 = self.limit - self.cursor;
                          if (!self.r_mark_lAr$esjava$0()) {
                            self.cursor = self.limit - diff22;
                          }
                        } else {
                          self.cursor = self.limit - diff21;
                          if (!self.r_mark_lAr$esjava$0()) {
                            self.cursor = self.limit - diff20;
                          }
                        }
                        self.bra = self.cursor;
                        const result20 = self.slice_del$esjava$0();
                        self.ket = self.cursor;
                        if (!self.r_stem_suffix_chain_before_ki$esjava$0()) {
                          self.cursor = self.limit - diff20;
                        }
                      }
                    }
                  }
                }
                self.bra = self.cursor;
                const result21 = self.slice_del$esjava$0();
                const diff23 = self.limit - self.cursor;
                self.ket = self.cursor;
                const diff24 = self.limit - self.cursor;
                if (!self.r_mark_lAr$esjava$0()) {
                  self.cursor = self.limit - diff23;
                  self.ket = self.cursor;
                  const diff25 = self.limit - self.cursor;
                  if (!self.r_mark_possessives$esjava$0()) {
                    self.cursor = self.limit - diff25;
                    if (!self.r_mark_sU$esjava$0()) {
                      self.cursor = self.limit - diff23;
                      if (!self.r_stem_suffix_chain_before_ki$esjava$0()) {
                        self.cursor = self.limit - diff24;
                      }
                    }
                  }
                  self.bra = self.cursor;
                  const result22 = self.slice_del$esjava$0();
                  const diff26 = self.limit - self.cursor;
                  self.ket = self.cursor;
                  if (self.r_mark_lAr$esjava$0()) {
                    self.bra = self.cursor;
                    const result23 = self.slice_del$esjava$0();
                    if (!self.r_stem_suffix_chain_before_ki$esjava$0()) {
                      self.cursor = self.limit - diff26;
                    }
                  } else {
                    self.cursor = self.limit - diff26;
                  }
                } else {
                  self.bra = self.cursor;
                  const result24 = self.slice_del$esjava$0();
                }
              }
            }
          }
          return true;
        }
      };
      items[35] = {
        key: "r_post_process_last_consonants$esjava$0",
        value: function r_post_process_last_consonants$esjava$0() {
          const self = this;
          this.ket = this.cursor;
          const result = this.find_among_b$esjava$1(turkishStemmer.a_23);
          if (0 === result) {
            return false;
          } else {
            self.bra = self.cursor;
            if (0 === result) {
              return false;
            } else {
              if (1 === result) {
                const result1 = self.slice_from$esjava$1("p");
              } else if (2 === result) {
                const result2 = self.slice_from$esjava$1("\u00E7");
              } else if (3 === result) {
                const result3 = self.slice_from$esjava$1("t");
              } else if (4 === result) {
                const result4 = self.slice_from$esjava$1("k");
              }
              return true;
            }
          }
        }
      };
      items[36] = {
        key: "r_append_U_to_stems_ending_with_d_or_g$esjava$0",
        value: function r_append_U_to_stems_ending_with_d_or_g$esjava$0() {
          const self = this;
          const diff = this.limit - this.cursor;
          const diff1 = this.limit - this.cursor;
          if (!this.eq_s_b$esjava$1("d")) {
            self.cursor = self.limit - diff1;
            if (!self.eq_s_b$esjava$1("g")) {
              return false;
            }
          }
          self.cursor = self.limit - diff;
          const diff2 = self.limit - self.cursor;
          const diff3 = self.limit - self.cursor;
          const diff4 = self.limit - self.cursor;
          self.cursor = self.limit - diff4;
          while (!self.in_grouping_b$esjava$3(turkishStemmer.g_vowel, 97, 305)) {
            if (self.cursor <= self.limit_backward) {
              self.cursor = self.limit - diff2;
              let tmp9 = turkishStemmer;
              let diff5 = self.limit - self.cursor;
              let diff6 = self.limit - self.cursor;
              self.cursor = self.limit - diff6;
              while (!self.in_grouping_b$esjava$3(turkishStemmer.g_vowel, 97, 305)) {
                if (self.cursor <= self.limit_backward) {
                  self.cursor = self.limit - diff2;
                  let tmp13 = turkishStemmer;
                  let diff7 = self.limit - self.cursor;
                  let diff8 = self.limit - self.cursor;
                  self.cursor = self.limit - diff8;
                  while (!self.in_grouping_b$esjava$3(turkishStemmer.g_vowel, 97, 305)) {
                    if (self.cursor <= self.limit_backward) {
                      self.cursor = self.limit - diff2;
                      let tmp17 = turkishStemmer;
                      let diff9 = self.limit - self.cursor;
                      let diff10 = self.limit - self.cursor;
                      self.cursor = self.limit - diff10;
                      while (!self.in_grouping_b$esjava$3(turkishStemmer.g_vowel, 97, 305)) {
                        if (self.cursor <= self.limit_backward) {
                          let flag2 = false;
                          return false;
                        } else {
                          self.cursor = self.cursor - 1;
                          // continue
                        }
                      }
                      let str7 = "\u00F6";
                      let diff11 = self.limit - self.cursor;
                      if (!self.eq_s_b$esjava$1("\u00F6")) {
                        self.cursor = self.limit - diff11;
                        let str8 = "\u00FC";
                        if (!self.eq_s_b$esjava$1("\u00FC")) {
                          let flag3 = false;
                          return false;
                        }
                      }
                      self.cursor = self.limit - diff9;
                      let str9 = "\u00FC";
                      let result = self.insert$esjava$3(self.cursor, self.cursor, "\u00FC");
                      self.cursor = self.cursor;
                    } else {
                      self.cursor = self.cursor - 1;
                      // continue
                    }
                  }
                  let str5 = "o";
                  let diff12 = self.limit - self.cursor;
                  if (!self.eq_s_b$esjava$1("o")) {
                    self.cursor = self.limit - diff12;
                    let str6 = "u";
                  }
                  self.cursor = self.limit - diff7;
                  let str10 = "u";
                  let result1 = self.insert$esjava$3(self.cursor, self.cursor, "u");
                  self.cursor = self.cursor;
                } else {
                  self.cursor = self.cursor - 1;
                  // continue
                }
              }
              let str3 = "e";
              let diff13 = self.limit - self.cursor;
              if (!self.eq_s_b$esjava$1("e")) {
                self.cursor = self.limit - diff13;
                let str4 = "i";
              }
              self.cursor = self.limit - diff5;
              let str11 = "i";
              let result2 = self.insert$esjava$3(self.cursor, self.cursor, "i");
              self.cursor = self.cursor;
            } else {
              self.cursor = self.cursor - 1;
              // continue
            }
            let flag4 = true;
            return true;
          }
          const diff14 = self.limit - self.cursor;
          if (!self.eq_s_b$esjava$1("a")) {
            self.cursor = self.limit - diff14;
          }
          self.cursor = self.limit - diff3;
          const result3 = self.insert$esjava$3(self.cursor, self.cursor, "\u0131");
          self.cursor = self.cursor;
        }
      };
      items[37] = {
        key: "r_more_than_one_syllable_word$esjava$0",
        value: function r_more_than_one_syllable_word$esjava$0() {
          const self = this;
          let num = 2;
          while (true) {
            let tmp3 = turkishStemmer;
            while (!self.in_grouping$esjava$3(turkishStemmer.g_vowel, 97, 305)) {
              if (self.cursor >= self.limit) {
                self.cursor = tmp2;
                let num2 = 0;
                let tmp4 = num > 0;
                let flag = !tmp4;
                if (!tmp4) {
                  self.cursor = tmp;
                  flag = true;
                }
                return flag;
              } else {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            num = num - 1;
            // continue
          }
        }
      };
      items[38] = {
        key: "r_is_reserved_word$esjava$0",
        value: function r_is_reserved_word$esjava$0() {
          let cursor;
          let cursor2;
          const self = this;
          ({ cursor, cursor: cursor2 } = this);
          while (!self.eq_s$esjava$1("ad")) {
            if (self.cursor < self.limit) {
              self.cursor = self.cursor + 1;
              // continue
            }
            self.cursor = cursor;
            let str = "soyad";
            while (!self.eq_s$esjava$1("soyad")) {
              if (self.cursor >= self.limit) {
                let flag = false;
                return false;
              } else {
                self.cursor = self.cursor + 1;
                // continue
              }
            }
            let num = 5;
            self.I_strlen = 5;
            if (self.I_strlen !== self.limit) {
              let flag3 = false;
              return false;
            } else {
              self.cursor = self.cursor;
              let flag2 = true;
              return true;
            }
          }
          self.I_strlen = 2;
          if (self.I_strlen === self.limit) {
            self.cursor = cursor2;
          }
        }
      };
      items[39] = {
        key: "r_postlude$esjava$0",
        value: function r_postlude$esjava$0() {
          const self = this;
          if (this.r_is_reserved_word$esjava$0()) {
            return false;
          } else {
            self.cursor = this.cursor;
            ({ cursor: self.limit_backward, limit: self.cursor } = self);
            const diff = self.limit - self.cursor;
            const result = self.r_append_U_to_stems_ending_with_d_or_g$esjava$0();
            self.cursor = self.limit - diff;
            const diff1 = self.limit - self.cursor;
            const result1 = self.r_post_process_last_consonants$esjava$0();
            self.cursor = self.limit - diff1;
            self.cursor = self.limit_backward;
            return true;
          }
        }
      };
      items[40] = {
        key: "stem$esjava$0",
        value: function stem$esjava$0() {
          const self = this;
          if (this.r_more_than_one_syllable_word$esjava$0()) {
            ({ cursor: self.limit_backward, limit: self.cursor } = self);
            const diff = self.limit - self.cursor;
            const result = self.r_stem_nominal_verb_suffixes$esjava$0();
            self.cursor = self.limit - diff;
            if (self.B_continue_stemming_noun_suffixes) {
              const diff1 = self.limit - self.cursor;
              const result1 = self.r_stem_noun_suffixes$esjava$0();
              self.cursor = self.limit - diff1;
              self.cursor = self.limit_backward;
              return self.r_postlude$esjava$0();
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
      };
      items[41] = {
        key: "stem",
        value: function stem() {
          const self = this;
          const length = arguments.length;
          const ArrayResult = Array(length);
          for (let num = 0; num < length; num = num + 1) {
            ArrayResult[num] = arguments[num];
          }
          if (0 === ArrayResult.length) {
            const stem$esjava$0 = self.stem$esjava$0;
            let applyResult = stem$esjava$0.apply(self, ArrayResult);
          } else {
            const _Object = Object;
            const tmp3 = callback(Object.getPrototypeOf(turkishStemmer.prototype), "stem", self);
            const call = tmp3.call;
            const items = [self];
            applyResult = call.apply(tmp3, items.concat(ArrayResult));
          }
          return applyResult;
        }
      };
      items[42] = {
        key: "B_continue_stemming_noun_suffixes",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$B_continue_stemming_noun_suffixes")) {
            let flag = self._$esjava$B_continue_stemming_noun_suffixes;
          } else {
            flag = false;
            self._$esjava$B_continue_stemming_noun_suffixes = false;
          }
          return flag;
        },
        set(_$esjava$B_continue_stemming_noun_suffixes) {
          this._$esjava$B_continue_stemming_noun_suffixes = _$esjava$B_continue_stemming_noun_suffixes;
        }
      };
      items[43] = {
        key: "I_strlen",
        get() {
          const self = this;
          if (hasOwnProperty.call(this, "_$esjava$I_strlen")) {
            let num = self._$esjava$I_strlen;
          } else {
            num = 0;
            self._$esjava$I_strlen = 0;
          }
          return num;
        },
        set(_$esjava$I_strlen) {
          this._$esjava$I_strlen = _$esjava$I_strlen;
        }
      };
      const items1 = [
        {
          key: "a_0",
          get() {
            delete r1.a_0;
            const items = [new closure_4("m", -1, -1), , , , , , , , , ];
            const tmp = new closure_4("m", -1, -1);
            items[1] = new closure_4("n", -1, -1);
            const tmp2 = new closure_4("n", -1, -1);
            items[2] = new closure_4("miz", -1, -1);
            const tmp3 = new closure_4("miz", -1, -1);
            items[3] = new closure_4("niz", -1, -1);
            const tmp4 = new closure_4("niz", -1, -1);
            items[4] = new closure_4("muz", -1, -1);
            const tmp5 = new closure_4("muz", -1, -1);
            items[5] = new closure_4("nuz", -1, -1);
            const tmp6 = new closure_4("nuz", -1, -1);
            items[6] = new closure_4("m\u00FCz", -1, -1);
            const tmp7 = new closure_4("m\u00FCz", -1, -1);
            items[7] = new closure_4("n\u00FCz", -1, -1);
            const tmp8 = new closure_4("n\u00FCz", -1, -1);
            items[8] = new closure_4("m\u0131z", -1, -1);
            const tmp9 = new closure_4("m\u0131z", -1, -1);
            items[9] = new closure_4("n\u0131z", -1, -1);
            turkishStemmer.a_0 = items;
            return items;
          }
        },
        {
          key: "a_1",
          get() {
            delete r1.a_1;
            const items = [new closure_4("leri", -1, -1), ];
            const tmp = new closure_4("leri", -1, -1);
            items[1] = new closure_4("lar\u0131", -1, -1);
            turkishStemmer.a_1 = items;
            return items;
          }
        },
        {
          key: "a_2",
          get() {
            delete r1.a_2;
            const items = [new closure_4("ni", -1, -1), , , ];
            const tmp = new closure_4("ni", -1, -1);
            items[1] = new closure_4("nu", -1, -1);
            const tmp2 = new closure_4("nu", -1, -1);
            items[2] = new closure_4("n\u00FC", -1, -1);
            const tmp3 = new closure_4("n\u00FC", -1, -1);
            items[3] = new closure_4("n\u0131", -1, -1);
            turkishStemmer.a_2 = items;
            return items;
          }
        },
        {
          key: "a_3",
          get() {
            delete r1.a_3;
            const items = [new closure_4("in", -1, -1), , , ];
            const tmp = new closure_4("in", -1, -1);
            items[1] = new closure_4("un", -1, -1);
            const tmp2 = new closure_4("un", -1, -1);
            items[2] = new closure_4("\u00FCn", -1, -1);
            const tmp3 = new closure_4("\u00FCn", -1, -1);
            items[3] = new closure_4("\u0131n", -1, -1);
            turkishStemmer.a_3 = items;
            return items;
          }
        },
        {
          key: "a_4",
          get() {
            delete r1.a_4;
            const items = [new closure_4("a", -1, -1), ];
            const tmp = new closure_4("a", -1, -1);
            items[1] = new closure_4("e", -1, -1);
            turkishStemmer.a_4 = items;
            return items;
          }
        },
        {
          key: "a_5",
          get() {
            delete r1.a_5;
            const items = [new closure_4("na", -1, -1), ];
            const tmp = new closure_4("na", -1, -1);
            items[1] = new closure_4("ne", -1, -1);
            turkishStemmer.a_5 = items;
            return items;
          }
        },
        {
          key: "a_6",
          get() {
            delete r1.a_6;
            const items = [new closure_4("da", -1, -1), , , ];
            const tmp = new closure_4("da", -1, -1);
            items[1] = new closure_4("ta", -1, -1);
            const tmp2 = new closure_4("ta", -1, -1);
            items[2] = new closure_4("de", -1, -1);
            const tmp3 = new closure_4("de", -1, -1);
            items[3] = new closure_4("te", -1, -1);
            turkishStemmer.a_6 = items;
            return items;
          }
        },
        {
          key: "a_7",
          get() {
            delete r1.a_7;
            const items = [new closure_4("nda", -1, -1), ];
            const tmp = new closure_4("nda", -1, -1);
            items[1] = new closure_4("nde", -1, -1);
            turkishStemmer.a_7 = items;
            return items;
          }
        },
        {
          key: "a_8",
          get() {
            delete r1.a_8;
            const items = [new closure_4("dan", -1, -1), , , ];
            const tmp = new closure_4("dan", -1, -1);
            items[1] = new closure_4("tan", -1, -1);
            const tmp2 = new closure_4("tan", -1, -1);
            items[2] = new closure_4("den", -1, -1);
            const tmp3 = new closure_4("den", -1, -1);
            items[3] = new closure_4("ten", -1, -1);
            turkishStemmer.a_8 = items;
            return items;
          }
        },
        {
          key: "a_9",
          get() {
            delete r1.a_9;
            const items = [new closure_4("ndan", -1, -1), ];
            const tmp = new closure_4("ndan", -1, -1);
            items[1] = new closure_4("nden", -1, -1);
            turkishStemmer.a_9 = items;
            return items;
          }
        },
        {
          key: "a_10",
          get() {
            delete r1.a_10;
            const items = [new closure_4("la", -1, -1), ];
            const tmp = new closure_4("la", -1, -1);
            items[1] = new closure_4("le", -1, -1);
            turkishStemmer.a_10 = items;
            return items;
          }
        },
        {
          key: "a_11",
          get() {
            delete r1.a_11;
            const items = [new closure_4("ca", -1, -1), ];
            const tmp = new closure_4("ca", -1, -1);
            items[1] = new closure_4("ce", -1, -1);
            turkishStemmer.a_11 = items;
            return items;
          }
        },
        {
          key: "a_12",
          get() {
            delete r1.a_12;
            const items = [new closure_4("im", -1, -1), , , ];
            const tmp = new closure_4("im", -1, -1);
            items[1] = new closure_4("um", -1, -1);
            const tmp2 = new closure_4("um", -1, -1);
            items[2] = new closure_4("\u00FCm", -1, -1);
            const tmp3 = new closure_4("\u00FCm", -1, -1);
            items[3] = new closure_4("\u0131m", -1, -1);
            turkishStemmer.a_12 = items;
            return items;
          }
        },
        {
          key: "a_13",
          get() {
            delete r1.a_13;
            const items = [new closure_4("sin", -1, -1), , , ];
            const tmp = new closure_4("sin", -1, -1);
            items[1] = new closure_4("sun", -1, -1);
            const tmp2 = new closure_4("sun", -1, -1);
            items[2] = new closure_4("s\u00FCn", -1, -1);
            const tmp3 = new closure_4("s\u00FCn", -1, -1);
            items[3] = new closure_4("s\u0131n", -1, -1);
            turkishStemmer.a_13 = items;
            return items;
          }
        },
        {
          key: "a_14",
          get() {
            delete r1.a_14;
            const items = [new closure_4("iz", -1, -1), , , ];
            const tmp = new closure_4("iz", -1, -1);
            items[1] = new closure_4("uz", -1, -1);
            const tmp2 = new closure_4("uz", -1, -1);
            items[2] = new closure_4("\u00FCz", -1, -1);
            const tmp3 = new closure_4("\u00FCz", -1, -1);
            items[3] = new closure_4("\u0131z", -1, -1);
            turkishStemmer.a_14 = items;
            return items;
          }
        },
        {
          key: "a_15",
          get() {
            delete r1.a_15;
            const items = [new closure_4("siniz", -1, -1), , , ];
            const tmp = new closure_4("siniz", -1, -1);
            items[1] = new closure_4("sunuz", -1, -1);
            const tmp2 = new closure_4("sunuz", -1, -1);
            items[2] = new closure_4("s\u00FCn\u00FCz", -1, -1);
            const tmp3 = new closure_4("s\u00FCn\u00FCz", -1, -1);
            items[3] = new closure_4("s\u0131n\u0131z", -1, -1);
            turkishStemmer.a_15 = items;
            return items;
          }
        },
        {
          key: "a_16",
          get() {
            delete r1.a_16;
            const items = [new closure_4("lar", -1, -1), ];
            const tmp = new closure_4("lar", -1, -1);
            items[1] = new closure_4("ler", -1, -1);
            turkishStemmer.a_16 = items;
            return items;
          }
        },
        {
          key: "a_17",
          get() {
            delete r1.a_17;
            const items = [new closure_4("niz", -1, -1), , , ];
            const tmp = new closure_4("niz", -1, -1);
            items[1] = new closure_4("nuz", -1, -1);
            const tmp2 = new closure_4("nuz", -1, -1);
            items[2] = new closure_4("n\u00FCz", -1, -1);
            const tmp3 = new closure_4("n\u00FCz", -1, -1);
            items[3] = new closure_4("n\u0131z", -1, -1);
            turkishStemmer.a_17 = items;
            return items;
          }
        },
        {
          key: "a_18",
          get() {
            delete r1.a_18;
            const items = [new closure_4("dir", -1, -1), , , , , , , ];
            const tmp = new closure_4("dir", -1, -1);
            items[1] = new closure_4("tir", -1, -1);
            const tmp2 = new closure_4("tir", -1, -1);
            items[2] = new closure_4("dur", -1, -1);
            const tmp3 = new closure_4("dur", -1, -1);
            items[3] = new closure_4("tur", -1, -1);
            const tmp4 = new closure_4("tur", -1, -1);
            items[4] = new closure_4("d\u00FCr", -1, -1);
            const tmp5 = new closure_4("d\u00FCr", -1, -1);
            items[5] = new closure_4("t\u00FCr", -1, -1);
            const tmp6 = new closure_4("t\u00FCr", -1, -1);
            items[6] = new closure_4("d\u0131r", -1, -1);
            const tmp7 = new closure_4("d\u0131r", -1, -1);
            items[7] = new closure_4("t\u0131r", -1, -1);
            turkishStemmer.a_18 = items;
            return items;
          }
        },
        {
          key: "a_19",
          get() {
            delete r1.a_19;
            const items = [new closure_4("cas\u0131na", -1, -1), ];
            const tmp = new closure_4("cas\u0131na", -1, -1);
            items[1] = new closure_4("cesine", -1, -1);
            turkishStemmer.a_19 = items;
            return items;
          }
        },
        {
          key: "a_20",
          get() {
            delete r1.a_20;
            const items = [new closure_4("di", -1, -1), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
            const tmp = new closure_4("di", -1, -1);
            items[1] = new closure_4("ti", -1, -1);
            const tmp2 = new closure_4("ti", -1, -1);
            items[2] = new closure_4("dik", -1, -1);
            const tmp3 = new closure_4("dik", -1, -1);
            items[3] = new closure_4("tik", -1, -1);
            const tmp4 = new closure_4("tik", -1, -1);
            items[4] = new closure_4("duk", -1, -1);
            const tmp5 = new closure_4("duk", -1, -1);
            items[5] = new closure_4("tuk", -1, -1);
            const tmp6 = new closure_4("tuk", -1, -1);
            items[6] = new closure_4("d\u00FCk", -1, -1);
            const tmp7 = new closure_4("d\u00FCk", -1, -1);
            items[7] = new closure_4("t\u00FCk", -1, -1);
            const tmp8 = new closure_4("t\u00FCk", -1, -1);
            items[8] = new closure_4("d\u0131k", -1, -1);
            const tmp9 = new closure_4("d\u0131k", -1, -1);
            items[9] = new closure_4("t\u0131k", -1, -1);
            const tmp10 = new closure_4("t\u0131k", -1, -1);
            items[10] = new closure_4("dim", -1, -1);
            const tmp11 = new closure_4("dim", -1, -1);
            items[11] = new closure_4("tim", -1, -1);
            const tmp12 = new closure_4("tim", -1, -1);
            items[12] = new closure_4("dum", -1, -1);
            const tmp13 = new closure_4("dum", -1, -1);
            items[13] = new closure_4("tum", -1, -1);
            const tmp14 = new closure_4("tum", -1, -1);
            items[14] = new closure_4("d\u00FCm", -1, -1);
            const tmp15 = new closure_4("d\u00FCm", -1, -1);
            items[15] = new closure_4("t\u00FCm", -1, -1);
            const tmp16 = new closure_4("t\u00FCm", -1, -1);
            items[16] = new closure_4("d\u0131m", -1, -1);
            const tmp17 = new closure_4("d\u0131m", -1, -1);
            items[17] = new closure_4("t\u0131m", -1, -1);
            const tmp18 = new closure_4("t\u0131m", -1, -1);
            items[18] = new closure_4("din", -1, -1);
            const tmp19 = new closure_4("din", -1, -1);
            items[19] = new closure_4("tin", -1, -1);
            const tmp20 = new closure_4("tin", -1, -1);
            items[20] = new closure_4("dun", -1, -1);
            const tmp21 = new closure_4("dun", -1, -1);
            items[21] = new closure_4("tun", -1, -1);
            const tmp22 = new closure_4("tun", -1, -1);
            items[22] = new closure_4("d\u00FCn", -1, -1);
            const tmp23 = new closure_4("d\u00FCn", -1, -1);
            items[23] = new closure_4("t\u00FCn", -1, -1);
            const tmp24 = new closure_4("t\u00FCn", -1, -1);
            items[24] = new closure_4("d\u0131n", -1, -1);
            const tmp25 = new closure_4("d\u0131n", -1, -1);
            items[25] = new closure_4("t\u0131n", -1, -1);
            const tmp26 = new closure_4("t\u0131n", -1, -1);
            items[26] = new closure_4("du", -1, -1);
            const tmp27 = new closure_4("du", -1, -1);
            items[27] = new closure_4("tu", -1, -1);
            const tmp28 = new closure_4("tu", -1, -1);
            items[28] = new closure_4("d\u00FC", -1, -1);
            const tmp29 = new closure_4("d\u00FC", -1, -1);
            items[29] = new closure_4("t\u00FC", -1, -1);
            const tmp30 = new closure_4("t\u00FC", -1, -1);
            items[30] = new closure_4("d\u0131", -1, -1);
            const tmp31 = new closure_4("d\u0131", -1, -1);
            items[31] = new closure_4("t\u0131", -1, -1);
            turkishStemmer.a_20 = items;
            return items;
          }
        },
        {
          key: "a_21",
          get() {
            delete r1.a_21;
            const items = [new closure_4("sa", -1, -1), , , , , , , ];
            const tmp = new closure_4("sa", -1, -1);
            items[1] = new closure_4("se", -1, -1);
            const tmp2 = new closure_4("se", -1, -1);
            items[2] = new closure_4("sak", -1, -1);
            const tmp3 = new closure_4("sak", -1, -1);
            items[3] = new closure_4("sek", -1, -1);
            const tmp4 = new closure_4("sek", -1, -1);
            items[4] = new closure_4("sam", -1, -1);
            const tmp5 = new closure_4("sam", -1, -1);
            items[5] = new closure_4("sem", -1, -1);
            const tmp6 = new closure_4("sem", -1, -1);
            items[6] = new closure_4("san", -1, -1);
            const tmp7 = new closure_4("san", -1, -1);
            items[7] = new closure_4("sen", -1, -1);
            turkishStemmer.a_21 = items;
            return items;
          }
        },
        {
          key: "a_22",
          get() {
            delete r1.a_22;
            const items = [new closure_4("mi\u015F", -1, -1), , , ];
            const tmp = new closure_4("mi\u015F", -1, -1);
            items[1] = new closure_4("mu\u015F", -1, -1);
            const tmp2 = new closure_4("mu\u015F", -1, -1);
            items[2] = new closure_4("m\u00FC\u015F", -1, -1);
            const tmp3 = new closure_4("m\u00FC\u015F", -1, -1);
            items[3] = new closure_4("m\u0131\u015F", -1, -1);
            turkishStemmer.a_22 = items;
            return items;
          }
        },
        {
          key: "a_23",
          get() {
            delete r1.a_23;
            const items = [new closure_4("b", -1, 1), , , ];
            const tmp = new closure_4("b", -1, 1);
            items[1] = new closure_4("c", -1, 2);
            const tmp2 = new closure_4("c", -1, 2);
            items[2] = new closure_4("d", -1, 3);
            const tmp3 = new closure_4("d", -1, 3);
            items[3] = new closure_4("\u011F", -1, 4);
            turkishStemmer.a_23 = items;
            return items;
          }
        },
        {
          key: "g_vowel",
          get() {
            delete r1.g_vowel;
            const items = [];
            turkishStemmer.g_vowel = items;
            return items;
          }
        },
        {
          key: "g_U",
          get() {
            delete r1.g_U;
            const items = ["<string:1071828172>", "ars", "<string:3705356544>", "<string:2890989569>", "<string:78795168>", "<string:21239362>", "<string:17138944>", "prefixTag", "<string:26214400>", "<string:1800470528>", "<string:774390970>", "<string:612171778>", "<string:918421505>", "<string:1240465409>", "<string:290586625>", "<string:1376038045>", "<string:78408717>", "<string:2890555218>", "<string:2653639172>", "<string:1884423340>", "<string:1376038015>", "<string:78389840>", "<string:2888393042>", "<string:2347323908>", "<string:2287010988>", "<string:4161028422>"];
            turkishStemmer.g_U = items;
            return items;
          }
        },
        {
          key: "g_vowel1",
          get() {
            delete r1.g_vowel1;
            const items = [];
            turkishStemmer.g_vowel1 = items;
            return items;
          }
        },
        {
          key: "g_vowel2",
          get() {
            delete r1.g_vowel2;
            const items = [];
            turkishStemmer.g_vowel2 = items;
            return items;
          }
        },
        {
          key: "g_vowel3",
          get() {
            delete r1.g_vowel3;
            const items = [];
            turkishStemmer.g_vowel3 = items;
            return items;
          }
        },
        {
          key: "g_vowel4",
          get() {
            delete r1.g_vowel4;
            const items = [];
            turkishStemmer.g_vowel4 = items;
            return items;
          }
        },
        {
          key: "g_vowel5",
          get() {
            delete r1.g_vowel5;
            const items = [];
            turkishStemmer.g_vowel5 = items;
            return items;
          }
        },
        {
          key: "g_vowel6",
          get() {
            delete r1.g_vowel6;
            const items = [];
            turkishStemmer.g_vowel6 = items;
            return items;
          }
        }
      ];
      callback(turkishStemmer, items, items1);
      return turkishStemmer;
    }(tmp3);
  };
  if ("function" === typeof globalThis.define) {
    if (globalThis.define.amd) {
      globalThis.define("snowballFactory", [null], fn2);
    }
  }
  if (undefined !== exports) {
    fn2(exports);
  } else {
    const obj = { exports: {} };
    fn2(obj.exports);
    const self = this;
    this.snowballFactory = obj.exports;
  }
}
fn = (arg0) => {
  if (arg0) {
    const _Symbol = Symbol;
    if ("function" === typeof Symbol) {
      const _Symbol2 = Symbol;
      let str2 = "symbol";
    }
    return str2;
  }
  str2 = typeof arg0;
};
