// Module ID: 11829
// Function ID: 11830
// Name: QueryTokenizer
// Dependencies: [2]

// Module 11829 (QueryTokenizer)
import size from "module_2" /* 2 */;

let map;

function getMatch(str, arg1, index) {
  if (null == arg1) {
    return null;
  } else {
    let num10 = 0;
    if (0 < arg1.length) {
      while (true) {
        let obj = arg1[num10];
        let match = str.match(obj.regex);
        let tmp4 = null;
        if (null != match) {
          let items = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(items, match, 0);
          items.index = index;
          tmp4 = items;
        }
        if (null != tmp4) {
          let cache = obj.cache;
          let tmp9 = null != cache;
          let tmp10;
          if (tmp9) {
            let value = cache.get(tmp4[0]);
            tmp9 = null != value;
            tmp10 = value;
          }
          let tmp11 = tmp10;
          if (tmp9) {
            let self = this;
            if (typeof Token !== "function") {
              break;
            } else {
              let obj3 = Object.create(tmp12.prototype);
              if (tmp10 instanceof Token) {
                let items1 = [];
                let arraySpreadResult5 = HermesBuiltin.arraySpread(items1, tmp10.match, 0);
                obj3.match = items1;
                ({ start: tmp13.start, type: tmp13.type } = tmp10);
                if (null != tmp10._data) {
                  obj3._data = tmp10._data;
                }
              } else if (null != tmp10) {
                let items2 = [];
                let arraySpreadResult6 = HermesBuiltin.arraySpread(items2, tmp10, 0);
                obj3.match = items2;
                let num3 = 0;
                if (typeof tmp10 !== "string") {
                  let num4 = tmp10.index;
                  if (num4 == null) {
                    num4 = 0;
                  }
                  num3 = num4;
                }
                obj3.start = num3;
                obj3.type = undefined;
              } else {
                obj3.match = [];
                obj3.start = 0;
                obj3.type = undefined;
              }
              obj3.start = tmp4.index;
              tmp11 = obj3;
            }
          }
          if (null == tmp11) {
            let type = obj.type;
            let self2 = this;
            if (typeof Token === "function") {
              let obj4 = Object.create(Token.prototype);
              if (tmp4 instanceof Token) {
                let items3 = [];
                let arraySpreadResult7 = HermesBuiltin.arraySpread(items3, tmp4.match, 0);
                obj4.match = items3;
                ({ start: tmp20.start, type: tmp20.type } = tmp4);
                if (null != tmp4._data) {
                  obj4._data = tmp4._data;
                }
              } else if (null != tmp4) {
                let items4 = [];
                let arraySpreadResult8 = HermesBuiltin.arraySpread(items4, tmp4, 0);
                obj4.match = items4;
                let num7 = 0;
                if (typeof tmp4 !== "string") {
                  let num8 = tmp4.index;
                  if (num8 == null) {
                    num8 = 0;
                  }
                  num7 = num8;
                }
                obj4.start = num7;
                obj4.type = type;
              } else {
                obj4.match = [];
                obj4.start = 0;
                obj4.type = type;
              }
              let tmp27 = null == cache;
              if (!tmp27) {
                let hasItem;
                if (cache != null) {
                  hasItem = cache.has(tmp4[0]);
                }
                tmp27 = hasItem;
              }
              tmp11 = obj4;
              if (!tmp27) {
                let result = cache.set(tmp4[0], obj4);
                tmp11 = obj4;
              }
            } else {
              let str2 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          }
          return tmp11;
        }
        num10 = num10 + 1;
      }
      throw new TypeError("Trying to call a non-function");
    }
    return null;
  }
}
const re0 = /.+/g;
const NON_TOKEN = "NON_TOKEN";
class QueryTokenizer {
  constructor() {
    let items = arg0;
    if (arg0 === undefined) {
      items = [];
    }
    const obj = Object.create(new.target.prototype);
    obj._rules = [];
    obj._followers = {};
    obj._nonTokenType = NON_TOKEN;
    obj.reset();
    const item = items.forEach((item) => obj.addRule(item));
    return obj;
  }
  reset() {
    this._rules = [];
    this._followers = {};
    this._nonTokenType = NON_TOKEN;
  }
  addRule(type) {
    let follows;
    let tmp5;
    let validator;
    let self = this;
    type = type.type;
    ({ follows, validator } = type);
    let regex = type.regex;
    let tmp = regex;
    const str = regex.source;
    if ("^" !== str.charAt(0)) {
      const _RegExp = RegExp;
      const _HermesInternal = HermesInternal;
      self = this;
      const self2 = this;
      const regExp = new RegExp("^" + regex.source, regex.flags);
      regex = regExp;
      tmp = regExp;
    }
    if (null != validator) {
      const _Map = Map;
      const self3 = this;
      const self4 = this;
      map = new Map();
      tmp5 = map;
    }
    if (null != follows) {
      const item = follows.forEach((item) => {
        if (null == self._followers[item]) {
          self._followers[item] = [];
        }
        const arr = self._followers[item];
        const obj = { regex, type, validator, cache: map };
        arr.push(obj);
      });
    } else {
      const _rules = this._rules;
      let obj = { regex: tmp, type, validator, cache: tmp5 };
      let arr = _rules.push(obj);
    }
  }
  tokenize(errorcode) {
    let tmp2;
    const self = this;
    let str = errorcode;
    const items = [];
    let num = 0;
    let str2 = "";
    let num2 = 0;
    let str3 = "";
    if (errorcode.length > 0) {
      while (true) {
        let sum;
        let substr;
        let str4;
        let _getMatchResult = self._getMatch(str, tmp2, num + ``.length);
        let tmp6 = tmp2;
        if (null != _getMatchResult) {
          if ("" !== ``) {
            let tmp33 = Token;
            let push = items.push;
            let match = ``.match(re0);
            let tmp11 = null;
            if (null != match) {
              let items1 = [];
              let arraySpreadResult = HermesBuiltin.arraySpread(items1, match, 0);
              items1.index = num;
              tmp11 = items1;
            }
            let _nonTokenType = self._nonTokenType;
            let self2 = this;
            if (typeof tmp33 !== "function") {
              break;
            } else {
              let obj = Object.create(tmp33.prototype);
              if (tmp11 instanceof Token) {
                let items2 = [];
                let arraySpreadResult6 = HermesBuiltin.arraySpread(items2, tmp11.match, 0);
                obj.match = items2;
                ({ start: tmp12.start, type: tmp12.type } = tmp11);
                if (null != tmp11._data) {
                  obj._data = tmp11._data;
                }
              } else if (null != tmp11) {
                let items3 = [];
                let arraySpreadResult7 = HermesBuiltin.arraySpread(items3, tmp11, 0);
                obj.match = items3;
                let num5 = 0;
                if (typeof tmp11 !== "string") {
                  let num6 = tmp11.index;
                  if (num6 == null) {
                    num6 = 0;
                  }
                  num5 = num6;
                }
                obj.start = num5;
                obj.type = _nonTokenType;
              } else {
                obj.match = [];
                obj.start = 0;
                obj.type = _nonTokenType;
              }
              let arr = push(obj);
            }
          }
          let arr2 = items.push(_getMatchResult);
          sum = num + (_getMatchResult.length + str2.length);
          substr = str.substring(_getMatchResult.length);
          str4 = "";
          tmp6 = _getMatchResult;
        } else {
          str4 = str2 + str[0];
          substr = str.substring(1);
          sum = num;
        }
        num = sum;
        str2 = str4;
        str = substr;
        tmp2 = tmp6;
        num2 = sum;
        str3 = str4;
      }
      throw new TypeError("Trying to call a non-function");
    }
    if ("" !== str3) {
      const push2 = items.push;
      const match1 = str3.match(re0);
      let tmp24 = null;
      if (null != match1) {
        const items4 = [];
        HermesBuiltin.arraySpread(items4, match1, 0);
        items4.index = num2;
        tmp24 = items4;
      }
      const _nonTokenType2 = self._nonTokenType;
      const self3 = this;
      if (typeof Token === "function") {
        const obj2 = Object.create(Token.prototype);
        if (tmp24 instanceof Token) {
          const items5 = [];
          HermesBuiltin.arraySpread(items5, tmp24.match, 0);
          obj2.match = items5;
          ({ start: tmp25.start, type: tmp25.type } = tmp24);
          if (null != tmp24._data) {
            obj2._data = tmp24._data;
          }
        } else if (null != tmp24) {
          const items6 = [];
          HermesBuiltin.arraySpread(items6, tmp24, 0);
          obj2.match = items6;
          let num10 = 0;
          if (typeof tmp24 !== "string") {
            let num11 = tmp24.index;
            if (num11 == null) {
              num11 = 0;
            }
            num10 = num11;
          }
          obj2.start = num10;
          obj2.type = _nonTokenType2;
        } else {
          obj2.match = [];
          obj2.start = 0;
          obj2.type = _nonTokenType2;
        }
        push2(obj2);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return items;
  }
  clearCache() {
    const _rules = this._rules;
    const item = _rules.forEach((cache) => {
      cache = cache.cache;
      let clearResult;
      if (cache != null) {
        clearResult = cache.clear();
      }
      return clearResult;
    });
    for (const key10008 in this._followers) {
      let arr2 = this._followers[key10008];
      let item1 = arr2.forEach((cache) => {
        cache = cache.cache;
        let clearResult;
        if (cache != null) {
          clearResult = cache.clear();
        }
        return clearResult;
      });
      continue;
    }
  }
  _getMatch(errorcode, type, arg2) {
    type = null;
    if (null != type) {
      type = type.type;
    }
    let end;
    if (type != null) {
      end = type.end;
    }
    const self = this;
    let tmp3;
    if (end === arg2) {
      const _String = String;
      tmp3 = getMatch(errorcode, self._followers[String(undefined, type)], arg2);
    }
    if (null == tmp3) {
      tmp3 = getMatch(errorcode, self._rules, arg2);
    }
    return tmp3;
  }
}
const prototype = QueryTokenizer.prototype;
class Token {
  constructor(items, type) {
    const obj = Object.create(new.target.prototype);
    if (items instanceof Token) {
      items = [];
      HermesBuiltin.arraySpread(items, items.match, 0);
      obj.match = items;
      ({ start: tmp2.start, type: tmp2.type } = items);
      if (null != items._data) {
        obj._data = items._data;
      }
    } else if (null != items) {
      const items1 = [];
      HermesBuiltin.arraySpread(items1, items, 0);
      obj.match = items1;
      let num3 = 0;
      if (typeof items !== "string") {
        let num4 = items.index;
        if (num4 == null) {
          num4 = 0;
        }
        num3 = num4;
      }
      obj.start = num3;
      obj.type = type;
    } else {
      obj.match = [];
      obj.start = 0;
      obj.type = type;
    }
    return obj;
  }
  valueOf() {
    return this.match[0];
  }
  getFullMatch() {
    return this.match[0];
  }
  getMatch() {
    let num = arg0;
    if (arg0 === undefined) {
      num = 0;
    }
    return this.match[num];
  }
  setData(pinned, combined) {
    const self = this;
    if (null == this._data) {
      const _Map = Map;
      const self2 = this;
      const self3 = this;
      self._data = new Map();
      map = new Map();
    }
    const _data = self._data;
    const result = _data.set(pinned, combined);
  }
  getData(arg0) {
    if (null != this._data) {
      const _data = tmp._data;
      return _data.get(arg0);
    }
  }
}
const prototype2 = Token.prototype;
Object.defineProperty(prototype2, "end", {
  get: function end() {
    return this.start + this.length;
  },
  set: undefined
});
Object.defineProperty(prototype2, "length", {
  get: function length() {
    return this.match[0].length;
  },
  set: undefined
});
QueryTokenizer.NON_TOKEN_TYPE = "NON_TOKEN";
QueryTokenizer.Token = Token;
let result = size.fileFinishedImporting("lib/QueryTokenizer.tsx");

export default QueryTokenizer;
export const NON_TOKEN_TYPE = "NON_TOKEN";
export { QueryTokenizer };
export { Token };
