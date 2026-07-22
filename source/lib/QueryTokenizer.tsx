// Module ID: 10076
// Function ID: 77989
// Name: getMatch
// Dependencies: [513, 511, 513]

// Module 10076 (getMatch)
import closure_0 from "items";
import module_511 from "module_511";
import items from "items";

function getMatch(str, arg1, index) {
  if (null == arg1) {
    return null;
  } else {
    let num = 0;
    if (0 < arg1.length) {
      while (true) {
        let obj = arg1[num];
        let tmp = fixMatchIndex;
        let tmp2 = fixMatchIndex(str.match(obj.regex), index);
        if (null != tmp2) {
          let cache = obj.cache;
          let tmp4 = null != cache;
          let tmp5;
          if (tmp4) {
            let value = cache.get(tmp2[0]);
            tmp4 = null != value;
            tmp5 = value;
          }
          let tmp6 = tmp5;
          if (tmp4) {
            let tmp7 = tmp3;
            let prototype = tmp3.prototype;
            let tmp8 = new.target;
            let tmp9 = new.target;
            let tmp10 = tmp5;
            let tmp11 = new tmp3(tmp5);
            let tmp12 = tmp11;
            tmp11.start = tmp2.index;
            tmp6 = tmp11;
          }
          if (null != tmp6) {
            break;
          } else {
            let tmp17 = tmp3;
            let prototype2 = tmp3.prototype;
            let tmp18 = new.target;
            let tmp19 = new.target;
            let tmp20 = tmp2;
            let tmp21 = new tmp3(tmp2, obj.type);
            let tmp22 = tmp21;
            if (null != obj.validator) {
              let tmp13 = cache;
              return tmp6;
            }
            let tmp14 = null == cache;
            if (!tmp14) {
              let tmp15 = null != cache && cache.has(tmp2[0]);
              tmp14 = tmp15;
            }
            tmp6 = tmp21;
            if (tmp14) {
              break;
            } else {
              let result = cache.set(tmp2[0], tmp21);
              tmp6 = tmp21;
              // break
            }
          }
        }
        num = num + 1;
      }
    }
    return null;
  }
}
function fixMatchIndex(arg0, index) {
  if (null == arg0) {
    return null;
  } else {
    const items = [];
    HermesBuiltin.arraySpread(arg0, 0);
    items.index = index;
    return items;
  }
}
let closure_2 = /.+/g;
const tmp2 = () => {
  class QueryTokenizer {
    constructor() {
      items = arg0;
      self = this;
      QueryTokenizer = this;
      if (arg0 === undefined) {
        items = [];
      }
      tmp = QueryTokenizer(self, QueryTokenizer);
      self._rules = [];
      self._followers = {};
      self._nonTokenType = "NON_TOKEN";
      resetResult = self.reset();
      item = items.forEach((arg0) => self.addRule(arg0));
      return;
    }
  }
  let closure_0 = QueryTokenizer;
  let obj = {
    key: "reset",
    value() {
      this._rules = [];
      this._followers = {};
      this._nonTokenType = "NON_TOKEN";
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "addRule",
    value(type) {
      let follows;
      let validator;
      const QueryTokenizer = this;
      type = type.type;
      ({ follows, validator } = type);
      const regex = type.regex;
      let regExp = regex;
      let tmp = regex;
      if ("^" !== str.charAt(0)) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        regExp = new RegExp("^" + regex.source, regex.flags);
        tmp = regExp;
      }
      if (null != validator) {
        const _Map = Map;
        const map = new Map();
        const tmp7 = map;
      }
      if (null != follows) {
        const item = follows.forEach((arg0) => {
          if (null == self._followers[arg0]) {
            self._followers[arg0] = [];
          }
          let arr = self._followers[arg0];
          arr = arr.push({ regex: regExp, type, validator, cache: map });
        });
      } else {
        const _rules = this._rules;
        const obj = { regex: tmp, type, validator, cache: tmp7 };
        _rules.push(obj);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "tokenize",
    value(arg0) {
      let str = arg0;
      const self = this;
      const items = [];
      let str2 = "";
      let num = 0;
      let str3 = "";
      let num2 = 0;
      if (arg0.length > 0) {
        do {
          let _getMatchResult = self._getMatch(str, tmp, num + ``.length);
          let tmp2 = str;
          if (null != _getMatchResult) {
            let tmp4 = null != `` && "" !== ``;
            if (tmp4) {
              let tmp5 = closure_3;
              let tmp6 = closure_5;
              let tmp7 = closure_2;
              let prototype = closure_3.prototype;
              let tmp8 = new.target;
              let tmp9 = new.target;
              let tmp10 = new closure_3(closure_5(str2.match(closure_2), num), self._nonTokenType);
              let tmp11 = tmp10;
              let arr = items.push(tmp10);
            }
            arr = items.push(_getMatchResult);
            let sum = num + (_getMatchResult.length + str2.length);
            str = str.substring(_getMatchResult.length);
            let tmp = _getMatchResult;
            let str4 = "";
          } else {
            str4 = str2 + str[0];
            str = str.substring(1);
            sum = num;
          }
          str2 = str4;
          num = sum;
          str3 = str4;
          num2 = sum;
        } while (str.length > 0);
      }
      if (tmp14) {
        const prototype2 = ctor.prototype;
        const tmp20 = new ctor(callback2(str3.match(closure_2), num2), self._nonTokenType);
        items.push(tmp20);
      }
      return items;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "clearCache",
    value() {
      const _rules = this._rules;
      const item = _rules.forEach((cache) => {
        cache = cache.cache;
        let clearResult;
        if (null != cache) {
          clearResult = cache.clear();
        }
        return clearResult;
      });
      for (const key10007 in this._followers) {
        let tmp2 = key10007;
        let arr2 = this._followers[key10007];
        let item1 = arr2.forEach((cache) => {
          cache = cache.cache;
          let clearResult;
          if (null != cache) {
            clearResult = cache.clear();
          }
          return clearResult;
        });
      }
    }
  };
  items[4] = {
    key: "_getMatch",
    value(arg0, type) {
      const self = this;
      type = null;
      if (null != type) {
        type = type.type;
      }
      let end;
      if (null != type) {
        end = type.end;
      }
      let tmp3;
      if (end === arg2) {
        const _String = String;
        tmp3 = callback(arg0, self._followers[String(undefined, type)], arg2);
      }
      if (null == tmp3) {
        tmp3 = callback(arg0, self._rules, arg2);
      }
      return tmp3;
    }
  };
  return callback(QueryTokenizer, items);
}();
const tmp3 = () => {
  class Token {
    constructor(arg0, arg1) {
      self = this;
      tmp = Token(this, Token);
      if (arg0 instanceof Token) {
        items = [];
        num5 = 0;
        tmp6 = items;
        arraySpreadResult = HermesBuiltin.arraySpread(arg0.match, 0);
        self.match = items;
        ({ start: self.start, type: self.type } = arg0);
        tmp8 = null;
        if (null != arg0._data) {
          self._data = arg0._data;
        }
      } else {
        tmp2 = null;
        if (null != arg0) {
          items1 = [];
          tmp3 = items1;
          tmp4 = arg0;
          num2 = 0;
          arraySpreadResult1 = HermesBuiltin.arraySpread(arg0, 0);
          self.match = items1;
          str = "string";
          num3 = 0;
          if ("string" !== typeof arg0) {
            index = arg0.index;
            num4 = 0;
            if (null != index) {
              num4 = index;
            }
            num3 = num4;
          }
          self.start = num3;
          self.type = arg1;
        } else {
          self.match = [];
          num = 0;
          self.start = 0;
          self.type = arg1;
        }
      }
      return;
    }
  }
  let closure_0 = Token;
  let obj = {
    key: "end",
    get() {
      return this.start + this.length;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "length",
    get() {
      return this.match[0].length;
    }
  };
  items[1] = obj;
  obj = {
    key: "valueOf",
    value() {
      return this.match[0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getFullMatch",
    value() {
      return this.match[0];
    }
  };
  items[4] = {
    key: "getMatch",
    value() {
      let num = arg0;
      if (arg0 === undefined) {
        num = 0;
      }
      return this.match[num];
    }
  };
  items[5] = {
    key: "setData",
    value(arg0, arg1) {
      const self = this;
      if (null == this._data) {
        const _Map = Map;
        const map = new Map();
        self._data = map;
      }
      const _data = self._data;
      const result = _data.set(arg0, arg1);
    }
  };
  items[6] = {
    key: "getData",
    value(arg0) {
      if (null != this._data) {
        const _data = this._data;
        return _data.get(arg0);
      }
    }
  };
  return callback(Token, items);
}();
tmp2.NON_TOKEN_TYPE = "NON_TOKEN";
tmp2.Token = tmp3;
const result = items.fileFinishedImporting("lib/QueryTokenizer.tsx");

export default tmp2;
export const NON_TOKEN_TYPE = "NON_TOKEN";
export const QueryTokenizer = tmp2;
export const Token = tmp3;
