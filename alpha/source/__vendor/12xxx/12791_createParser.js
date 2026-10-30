// Module ID: 12791
// Function ID: 12792
// Name: createParser
// Dependencies: [12792, 12793, 12796, 12799, 12800, 12794, 12801, 12798]

// Module 12791 (createParser)
import _mod12792 from "module_12792" /* 12792 */;
import _mod12794 from "module_12794" /* 12794 */;

function noop() {

}
const WhiteSpace = _mod12792.TYPE.WhiteSpace;
const Comment = _mod12792.TYPE.Comment;
const Ident = _mod12792.TYPE.Ident;
const Function = _mod12792.TYPE.Function;
const Url = _mod12792.TYPE.Url;
const Hash = _mod12792.TYPE.Hash;
const Percentage = _mod12792.TYPE.Percentage;
const Number = _mod12792.TYPE.Number;

export default function createParser(arg0) {
  let obj2;
  let tmp;
  let tmp2;
  let obj = arg0;
  obj2 = {
    scanner: tmp,
    locationMap: tmp2,
    filename: "<unknown>",
    needPositions: false,
    onParseError: noop,
    onParseErrorThrow: false,
    parseAtrulePrelude: true,
    parseRulePrelude: true,
    parseValue: true,
    parseCustomProperty: false,
    readSequence: obj2(12799),
    createList() {
      const tmp = new obj2(dependencyMap[4])();
      return tmp;
    },
    createSingleNodeList(self) {
      const obj = new obj2(dependencyMap[4])();
      return obj.appendData(self);
    },
    getFirstListNode(callResult) {
      const tmp = callResult && callResult.first();
      return tmp;
    },
    getLastListNode(children) {
      return children.last();
    },
    parseWithFallback(Atrule, consumeRaw) {
      const self = this;
      try {
        return Atrule.call(self);
      } catch (tmp3) {
        if (self.onParseErrorThrow) {
          throw tmp3;
        } else {
          const callResult = consumeRaw.call(self, tmp);
          self.onParseErrorThrow = true;
          self.onParseError(tmp3, callResult);
          self.onParseErrorThrow = false;
          return callResult;
        }
      }
    },
    lookupNonWSType(arg0) {
      let sum = arg0;
      const scanner = this.scanner;
      const lookupTypeResult = scanner.lookupType(+sum);
      while (lookupTypeResult === WhiteSpace) {
        sum = tmp2 + 1;
        if (0 !== lookupTypeResult) {
          continue;
        } else {
          return 0;
        }
      }
      return lookupTypeResult;
    },
    eat(arg0) {
      const self = this;
      if (this.scanner.tokenType !== arg0) {
        let tokenEnd;
        let str;
        const tokenStart = self.scanner.tokenStart;
        const text = `${obj2(closure_1_1[0]).NAME[arg0]} is expected`;
        if (Ident === arg0) {
          if (self.scanner.tokenType === Function) {
            tokenEnd = self.scanner.tokenEnd - 1;
            str = "Identifier is expected but function found";
          } else {
            str = "Identifier is expected";
            tokenEnd = tokenStart;
          }
        } else if (Hash === arg0) {
          const scanner = self.scanner;
          str = text;
          tokenEnd = tokenStart;
          if (scanner.isDelim(35)) {
            const iter = self.scanner;
            iter.next();
            tokenEnd = tokenStart + 1;
            str = "Name is expected";
          }
        } else if (Percentage === arg0) {
          str = text;
          tokenEnd = tokenStart;
          if (self.scanner.tokenType === Number) {
            tokenEnd = self.scanner.tokenEnd;
            str = "Percent sign is expected";
          }
        } else {
          const source = self.scanner.source;
          str = text;
          tokenEnd = tokenStart;
          if (source.charCodeAt(self.scanner.tokenStart) === arg0) {
            tokenEnd = tokenStart + 1;
            str = text;
          }
        }
        self.error(str, tokenEnd);
      }
      const iter2 = self.scanner;
      iter2.next();
    },
    consume(Ident) {
      const scanner = this.scanner;
      const tokenValue = scanner.getTokenValue();
      this.eat(Ident);
      return tokenValue;
    },
    consumeFunctionName() {
      const str = this.scanner.source;
      const substr = str.substring(this.scanner.tokenStart, this.scanner.tokenEnd - 1);
      this.eat(Function);
      return substr;
    },
    getLocation(tokenStart, tokenStart2) {
      const self = this;
      let locationRange = null;
      if (this.needPositions) {
        const locationMap = self.locationMap;
        locationRange = locationMap.getLocationRange(tokenStart, tokenStart2, self.filename);
      }
      return locationRange;
    },
    getLocationFromList(list) {
      const self = this;
      if (this.needPositions) {
        let tokenStart;
        let tokenStart2;
        const firstListNode = self.getFirstListNode(list);
        const lastListNode = self.getLastListNode(list);
        const locationMap = self.locationMap;
        const getLocationRange = locationMap.getLocationRange;
        if (null !== firstListNode) {
          tokenStart = firstListNode.loc.start.offset - self.locationMap.startOffset;
        } else {
          tokenStart = self.scanner.tokenStart;
        }
        if (null !== lastListNode) {
          tokenStart2 = lastListNode.loc.end.offset - self.locationMap.startOffset;
        } else {
          tokenStart2 = self.scanner.tokenStart;
        }
        return getLocationRange(tokenStart, tokenStart2, self.filename);
      } else {
        return null;
      }
    },
    error(arg0, arg1) {
      let _location;
      const self = this;
      if (undefined !== arg1) {
        if (arg1 < self.scanner.source.length) {
          const locationMap2 = self.locationMap;
          _location = locationMap2.getLocation(arg1);
        }
        let str = arg0;
        const tmp6 = obj2(dependencyMap[6]);
        if (!arg0) {
          str = "Unexpected input";
        }
        const self2 = this;
        const self3 = this;
        const tmp62 = new tmp6(str, self.scanner.source, _location.offset, _location.line, _location.column);
        throw tmp62;
      }
      const locationMap = self.locationMap;
      const getLocation = locationMap.getLocation;
      if (self.scanner.eof) {
        const obj = obj2(dependencyMap[5]);
        _location = getLocation(obj.findWhiteSpaceStart(self.scanner.source, self.scanner.source.length - 1));
      } else {
        _location = getLocation(self.scanner.tokenStart);
      }
    }
  };
  tmp = new obj2(12793)();
  tmp2 = new obj2(12796)();
  if (!arg0) {
    obj = {};
  }
  const obj3 = { context: {}, scope: {}, atrule: {}, pseudo: {} };
  if (obj.parseContext) {
    let str = "string";
    for (const key10042 in obj.parseContext) {
      let tmp3 = key10042;
      let tmp4 = typeof obj.parseContext[key10042];
      if ("function" === tmp4) {
        obj3.context[key10042] = obj.parseContext[key10042];
        continue;
      } else {
        if ("string" !== tmp4) {
          continue;
        } else {
          obj2 = obj.parseContext[key10042];
          obj3.context[key10042] = function() {
            return this[closure_0]();
          };
          continue;
        }
        continue;
      }
      continue;
    }
  }
  if (obj.scope) {
    for (const key10053 in obj.scope) {
      obj3.scope[key10053] = obj.scope[key10053];
      continue;
    }
  }
  if (obj.atrule) {
    for (const key10057 in obj.atrule) {
      let tmp6 = key10057;
      let tmp7 = obj.atrule[key10057];
      if (!tmp7.parse) {
        continue;
      } else {
        obj3.atrule[key10057] = tmp7.parse;
        continue;
      }
      continue;
    }
  }
  if (obj.pseudo) {
    for (const key10063 in obj.pseudo) {
      let tmp9 = obj.pseudo[key10063];
      if (!tmp9.parse) {
        continue;
      } else {
        obj3.pseudo[key10063] = tmp9.parse;
        continue;
      }
      continue;
    }
  }
  if (obj.node) {
    for (const key10069 in obj.node) {
      obj3[key10069] = obj.node[key10069].parse;
      continue;
    }
  }
  for (const key10072 in obj3) {
    obj2[key10072] = obj3[key10072];
    continue;
  }
  return function(source, arg1) {
    obj2 = source;
    const tmp = arg1 || {};
    const onComment = tmp.onComment;
    let obj = obj2;
    obj2(dependencyMap[7])(source, obj2.scanner);
    const locationMap = obj2.locationMap;
    locationMap.setSource(source, tmp.offset, tmp.line, tmp.column);
    obj.filename = tmp.filename || "<unknown>";
    obj.needPositions = Boolean(tmp.positions);
    obj.onParseError = typeof tmp.onParseError === "function" ? tmp.onParseError : noop;
    obj.onParseErrorThrow = false;
    let BooleanResult = !("parseAtrulePrelude" in tmp);
    if (!BooleanResult) {
      const _Boolean = Boolean;
      BooleanResult = Boolean(tmp.parseAtrulePrelude);
    }
    obj.parseAtrulePrelude = BooleanResult;
    let BooleanResult1 = !("parseRulePrelude" in tmp);
    if (!BooleanResult1) {
      const _Boolean2 = Boolean;
      BooleanResult1 = Boolean(tmp.parseRulePrelude);
    }
    obj.parseRulePrelude = BooleanResult1;
    let BooleanResult2 = !("parseValue" in tmp);
    if (!BooleanResult2) {
      const _Boolean3 = Boolean;
      BooleanResult2 = Boolean(tmp.parseValue);
    }
    obj.parseValue = BooleanResult2;
    let BooleanResult3 = "parseCustomProperty" in tmp;
    if (BooleanResult3) {
      const _Boolean4 = Boolean;
      BooleanResult3 = Boolean(tmp.parseCustomProperty);
    }
    obj.parseCustomProperty = BooleanResult3;
    const context = obj.context;
    if (context.hasOwnProperty(tmp.context || "default")) {
      if (typeof onComment === "function") {
        const scanner = obj.scanner;
        scanner.forEachToken((arg0, arg1, length) => {
          if (arg0 === Comment) {
            let substr;
            const _location = obj2.getLocation(arg1, length);
            const slice = source.slice;
            const sum = arg1 + 2;
            const obj = _mod12794;
            if (obj.cmpStr(source, length - 2, length, "*/")) {
              substr = slice(sum, length - 2);
            } else {
              substr = slice(sum, length);
            }
            onComment(substr, _location);
          }
        });
      }
      obj2 = obj.context[tmp2];
      const callResult = obj2.call(obj, tmp);
      if (!obj.scanner.eof) {
        obj.error();
      }
      return callResult;
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Unknown context `" + tmp2 + "`");
      throw error;
    }
  };
};
