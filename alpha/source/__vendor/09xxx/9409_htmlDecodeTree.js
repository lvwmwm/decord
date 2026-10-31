// Module ID: 9409
// Function ID: 9410
// Name: htmlDecodeTree
// Dependencies: [9410, 9411, 9412]
// Exports: decodeHTML, decodeHTMLAttribute, decodeHTMLStrict, decodeXML, determineBranch

// Module 9409 (htmlDecodeTree)
import uint16Array2 from "uint16Array" /* 9410 */;
import _mod9411 from "module_9411" /* 9411 */;
import decodeCodePoint from "decodeCodePoint" /* 9412 */;

const require = globalThis.__r;
let hasOwnProperty;

const decodeWithTrie2 = function decodeWithTrie(arg0, arg1) {

};
let self = this;
let tmp = this && self.__createBinding;
if (!tmp) {
  let tmp2 = globalThis;
  let _Object = Object;
  tmp = Object.create ? ((arg0, __esModule, arg2, arg3) => {
    function get() {
      return __esModule[closure_1];
    }
    let closure_0 = __esModule;
    let closure_1 = arg2;
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
    let tmp3 = ownPropertyDescriptor;
    if (tmp3) {
      let tmp4;
      if ("get" in ownPropertyDescriptor) {
        tmp4 = !__esModule.__esModule;
      } else {
        tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
      }
      tmp3 = !tmp4;
    }
    if (!tmp3) {
      ownPropertyDescriptor = { enumerable: true, get };
      const obj = { enumerable: true, get };
    }
    Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
  }) : ((arg0, arg1, arg2, arg3) => {
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    arg0[tmp] = arg1[arg2];
  });
}
let closure_2 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  const _Object2 = Object;
  tmp3 = Object.create ? ((arg0, value) => {
    const obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_3 = tmp3;
let tmp5 = self && self.__importStar || ((__esModule) => {
  const tmp = __esModule;
  if (tmp) {
    if (__esModule.__esModule) {
      return __esModule;
    }
  }
  const obj = {};
  if (null != __esModule) {
    for (const key10009 in __esModule) {
      let callResult = "default" !== key10009;
      if (callResult) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(__esModule, key10009);
      }
      if (!callResult) {
        continue;
      } else {
        let tmp6 = closure_2(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_3(obj, __esModule);
  return obj;
});
const fn = self && self.__importDefault || ((__esModule) => {
  let tmp2;
  const tmp = __esModule;
  if (!tmp) {
    tmp2 = { default: __esModule };
    const obj = { default: __esModule };
  } else {
    tmp2 = __esModule;
  }
  return tmp2;
});
let uint16Array = fn(uint16Array2);
uint16Array = fn(_mod9411);
const obj3 = { NUM: 35, SEMI: 59, EQUALS: 61, ZERO: 48, NINE: 57, LOWER_A: 97, LOWER_F: 102, LOWER_X: 120, LOWER_Z: 122, UPPER_A: 65, UPPER_F: 70, UPPER_Z: 90 };
obj3[35] = "NUM";
obj3[59] = "SEMI";
obj3[61] = "EQUALS";
obj3[48] = "ZERO";
obj3[57] = "NINE";
obj3[97] = "LOWER_A";
obj3[102] = "LOWER_F";
obj3[120] = "LOWER_X";
obj3[122] = "LOWER_Z";
obj3[65] = "UPPER_A";
obj3[70] = "UPPER_F";
obj3[90] = "UPPER_Z";
let BinTrieFlags = exports.BinTrieFlags;
if (!BinTrieFlags) {
  const obj4 = {};
  exports.BinTrieFlags = obj4;
  BinTrieFlags = obj4;
}
BinTrieFlags.VALUE_LENGTH = 49152;
BinTrieFlags[49152] = "VALUE_LENGTH";
BinTrieFlags.BRANCH_LENGTH = 16256;
BinTrieFlags[16256] = "BRANCH_LENGTH";
BinTrieFlags.JUMP_TABLE = 127;
BinTrieFlags[127] = "JUMP_TABLE";
const obj5 = { EntityStart: 0, NumericStart: 1, NumericDecimal: 2, NumericHex: 3, NamedEntity: 4 };
obj5[0] = "EntityStart";
obj5[1] = "NumericStart";
obj5[2] = "NumericDecimal";
obj5[3] = "NumericHex";
obj5[4] = "NamedEntity";
let DecodingMode = exports.DecodingMode;
if (!DecodingMode) {
  const obj6 = {};
  exports.DecodingMode = obj6;
  DecodingMode = obj6;
}
DecodingMode.Legacy = 0;
DecodingMode[0] = "Legacy";
DecodingMode.Strict = 1;
DecodingMode[1] = "Strict";
DecodingMode.Attribute = 2;
DecodingMode[2] = "Attribute";
class EntityDecoder {
  constructor(arg0, arg1, arg2) {

  }
  startEntity(arg0) {

  }
  write(str, sum) {
    const self = this;
    const state = this.state;
    if (obj5.EntityStart === state) {
      let stateNumericStartResult;
      if (str.charCodeAt(sum) === obj3.NUM) {
        self.state = obj5.NumericStart;
        self.consumed = self.consumed + 1;
        stateNumericStartResult = self.stateNumericStart(str, sum + 1);
      } else {
        self.state = obj5.NamedEntity;
        stateNumericStartResult = self.stateNamedEntity(str, sum);
      }
      return stateNumericStartResult;
    } else if (obj5.NumericStart === state) {
      return self.stateNumericStart(str, sum);
    } else if (obj5.NumericDecimal === state) {
      return self.stateNumericDecimal(str, sum);
    } else if (obj5.NumericHex === state) {
      return self.stateNumericHex(str, sum);
    } else if (obj5.NamedEntity === state) {
      return self.stateNamedEntity(str, sum);
    }
  }
  stateNumericStart(str, sum) {
    let num = -1;
    if (sum < str.length) {
      let stateNumericHexResult;
      const self = this;
      if ((32 | str.charCodeAt(sum)) === obj3.LOWER_X) {
        self.state = obj5.NumericHex;
        self.consumed = self.consumed + 1;
        stateNumericHexResult = self.stateNumericHex(str, sum + 1);
      } else {
        self.state = obj5.NumericDecimal;
        stateNumericHexResult = self.stateNumericDecimal(str, sum);
      }
      num = stateNumericHexResult;
    }
    return num;
  }
  addToNumericResult(str, arg1, arg2, arg3) {
    if (arg1 !== arg2) {
      const self = this;
      const diff = arg2 - arg1;
      const _Math = Math;
      const _parseInt = parseInt;
      const result = this.result * Math.pow(arg3, diff);
      this.result = result + parseInt(str.substr(arg1, diff), arg3);
      this.consumed = this.consumed + diff;
    }
  }
  stateNumericHex(str, sum) {
    let charCodeAtResult;
    let tmp6;
    const self = this;
    let tmp2 = sum;
    if (sum < str.length) {
      while (true) {
        charCodeAtResult = str.charCodeAt(sum);
        let tmp4 = obj3;
        let tmp5 = charCodeAtResult >= obj3.ZERO;
        tmp6 = sum;
        if (tmp5) {
          tmp5 = charCodeAtResult <= tmp4.NINE;
        }
        if (!tmp5) {
          if (charCodeAtResult < tmp4.UPPER_A) {
            if (charCodeAtResult < tmp4.LOWER_A) {
              break;
            } else if (charCodeAtResult > tmp4.LOWER_F) {
              break;
            }
          }
        }
        sum = sum + 1;
        tmp2 = sum;
      }
      self.addToNumericResult(str, sum, tmp6, 16);
      return self.emitNumericEntity(charCodeAtResult, 3);
    }
    self.addToNumericResult(str, sum, tmp2, 16);
    return -1;
  }
  stateNumericDecimal(str, sum) {
    let charCodeAtResult;
    let tmp5;
    const self = this;
    let tmp2 = sum;
    if (sum < str.length) {
      while (true) {
        charCodeAtResult = str.charCodeAt(sum);
        let tmp4 = charCodeAtResult >= obj3.ZERO;
        tmp5 = sum;
        if (tmp4) {
          tmp4 = charCodeAtResult <= obj3.NINE;
        }
        if (!tmp4) {
          break;
        } else {
          sum = sum + 1;
          tmp2 = sum;
        }
      }
      self.addToNumericResult(str, sum, tmp5, 10);
      return self.emitNumericEntity(charCodeAtResult, 2);
    }
    self.addToNumericResult(str, sum, tmp2, 10);
    return -1;
  }
  emitNumericEntity(arg0, arg1) {
    const self = this;
    if (this.consumed <= arg1) {
      const errors3 = self.errors;
      const tmp7 = null === errors3 || undefined === errors3;
      if (!tmp7) {
        const result = errors3.absenceOfDigitsInNumericCharacterReference(self.consumed);
      }
      return 0;
    } else {
      const tmp10 = obj3;
      if (arg0 === obj3.SEMI) {
        self.consumed = self.consumed + 1;
      } else if (self.decodeMode === DecodingMode.Strict) {
        return 0;
      }
      self.emitCodePoint(decodeCodePoint.replaceCodePoint(self.result), self.consumed);
      if (self.errors) {
        if (arg0 !== tmp10.SEMI) {
          const errors = self.errors;
          const result1 = errors.missingSemicolonAfterCharacterReference();
        }
        const errors2 = self.errors;
        const result2 = errors2.validateNumericCharacterReference(self.result);
      }
      return self.consumed;
    }
  }
  stateNamedEntity(str, sum) {
    let charCodeAtResult;
    const self = this;
    let sum2 = sum;
    const decodeTree = this.decodeTree;
    let tmp2 = decodeTree[this.treeIndex];
    let tmp3 = (tmp2 & BinTrieFlags.VALUE_LENGTH) >> 14;
    if (sum < str.length) {
      while (true) {
        let num;
        charCodeAtResult = str.charCodeAt(sum2);
        let _Math = Math;
        sum = self.treeIndex + Math.max(1, tmp3);
        let tmp7 = (tmp2 & BinTrieFlags.BRANCH_LENGTH) >> 7;
        let tmp8 = tmp2 & BinTrieFlags.JUMP_TABLE;
        if (0 === tmp7) {
          let num3 = -1;
          if (0 !== tmp8) {
            num3 = -1;
            if (charCodeAtResult === tmp8) {
              num3 = sum;
            }
          }
          num = num3;
        } else if (tmp8) {
          let diff = charCodeAtResult - tmp8;
          let num2 = -1;
          if (diff >= 0) {
            num2 = -1;
            if (diff < tmp7) {
              num2 = decodeTree[sum + diff] - 1;
            }
          }
          num = num2;
        } else {
          let diff1 = sum + tmp7 - 1;
          let tmp12 = sum;
          num = -1;
          if (sum <= diff1) {
            let tmp13;
            while (true) {
              let diff2;
              tmp13 = tmp12 + diff1 >>> 1;
              let tmp14 = decodeTree[tmp13];
              let sum1 = tmp12;
              if (tmp14 < charCodeAtResult) {
                sum1 = tmp13 + 1;
                diff2 = diff1;
              } else if (tmp14 <= charCodeAtResult) {
                break;
              } else {
                diff2 = tmp13 - 1;
              }
              diff1 = diff2;
              tmp12 = sum1;
              num = -1;
            }
            num = decodeTree[tmp13 + tmp7];
          }
        }
        self.treeIndex = num;
        if (self.treeIndex < 0) {
          break;
        } else {
          let tmp25 = decodeTree[self.treeIndex];
          let tmp27 = (tmp25 & BinTrieFlags.VALUE_LENGTH) >> 14;
          if (0 !== tmp27) {
            if (charCodeAtResult === obj3.SEMI) {
              return self.emitNamedEntityData(self.treeIndex, tmp27, self.consumed + self.excess);
            } else if (self.decodeMode !== DecodingMode.Strict) {
              self.result = self.treeIndex;
              self.consumed = self.consumed + self.excess;
              self.excess = 0;
            }
          }
          sum2 = sum2 + 1;
          self.excess = self.excess + 1;
          tmp3 = tmp27;
          tmp2 = tmp25;
        }
      }
      let num4 = 0;
      if (0 !== self.result) {
        if (self.decodeMode !== DecodingMode.Attribute) {
          num4 = self.emitNotTerminatedNamedEntity();
        } else {
          num4 = 0;
          if (0 !== tmp3) {
            let tmp24 = charCodeAtResult === obj3.EQUALS;
            if (!tmp24) {
              let tmp21 = charCodeAtResult >= tmp29.UPPER_A && charCodeAtResult <= tmp29.UPPER_Z;
              if (!tmp21) {
                tmp21 = charCodeAtResult >= obj3.LOWER_A && charCodeAtResult <= obj3.LOWER_Z;
              }
              if (!tmp21) {
                tmp21 = charCodeAtResult >= obj3.ZERO && charCodeAtResult <= obj3.NINE;
              }
              tmp24 = tmp21;
            }
            num4 = 0;
          }
        }
      }
      return num4;
    }
    return -1;
  }
  emitNotTerminatedNamedEntity() {
    const result = this.result;
    this.emitNamedEntityData(result, (this.decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14, this.consumed);
    const errors = this.errors;
    const tmp2 = null === errors || undefined === errors;
    if (!tmp2) {
      const result1 = errors.missingSemicolonAfterCharacterReference();
    }
    return this.consumed;
  }
  emitNamedEntityData(arg0, arg1, arg2) {
    let tmp;
    const self = this;
    const decodeTree = this.decodeTree;
    const emitCodePoint = this.emitCodePoint;
    if (1 === arg1) {
      tmp = decodeTree[arg0] & ~BinTrieFlags.VALUE_LENGTH;
    } else {
      tmp = decodeTree[arg0 + 1];
    }
    emitCodePoint(tmp, arg2);
    if (3 === arg1) {
      self.emitCodePoint(decodeTree[arg0 + 2], arg2);
    }
    return arg2;
  }
  end() {
    const self = this;
    const state = this.state;
    if (obj5.NamedEntity === state) {
      let num8 = 0;
      if (0 !== self.result) {
        if (self.decodeMode !== DecodingMode.Attribute) {
          num8 = self.emitNotTerminatedNamedEntity();
        } else {
          num8 = 0;
        }
      }
      return num8;
    } else if (obj5.NumericDecimal === state) {
      return self.emitNumericEntity(0, 2);
    } else if (obj5.NumericHex === state) {
      return self.emitNumericEntity(0, 3);
    } else if (obj5.NumericStart === state) {
      const errors = self.errors;
      const tmp3 = null === errors || undefined === errors;
      if (!tmp3) {
        const result = errors.absenceOfDigitsInNumericCharacterReference(self.consumed);
      }
      return 0;
    } else if (obj5.EntityStart === state) {
      return 0;
    }
  }
}
let c0 = "";
const _default = uint16Array.default;
Object.create(EntityDecoder.prototype);
let sum = "";
const _default2 = uint16Array.default;
Object.create(EntityDecoder.prototype);
const decodeWithTrie = decodeWithTrie2;
const decodeCodePoint_export = decodeCodePoint.default;

export const htmlDecodeTree = uint16Array.default;
export const xmlDecodeTree = uint16Array.default;
export { decodeCodePoint_export as decodeCodePoint };
export const replaceCodePoint = require("decodeCodePoint").replaceCodePoint;
export const fromCodePoint = require("decodeCodePoint").fromCodePoint;
export { EntityDecoder };
export function determineBranch(entityTrie, trieCurrent, arg2, arg3) {
  let tmp5;
  if (0 === (trieCurrent & BinTrieFlags.BRANCH_LENGTH) >> 7) {
    let num7 = -1;
    if (0 !== (trieCurrent & BinTrieFlags.JUMP_TABLE)) {
      num7 = -1;
      if (arg3 === (trieCurrent & BinTrieFlags.JUMP_TABLE)) {
        num7 = arg2;
      }
    }
    return num7;
  } else if (trieCurrent & BinTrieFlags.JUMP_TABLE) {
    const diff = arg3 - tmp2;
    let num4 = -1;
    if (diff >= 0) {
      num4 = -1;
      if (diff < (trieCurrent & BinTrieFlags.BRANCH_LENGTH) >> 7) {
        num4 = entityTrie[arg2 + diff] - 1;
      }
    }
    return num4;
  } else {
    let diff1 = arg2 + tmp - 1;
    let tmp4 = arg2;
    if (arg2 <= diff1) {
      while (true) {
        let diff2;
        tmp5 = tmp4 + diff1 >>> 1;
        let tmp6 = entityTrie[tmp5];
        let sum = tmp4;
        if (tmp6 < arg3) {
          sum = tmp5 + 1;
          diff2 = diff1;
        } else if (tmp6 <= arg3) {
          break;
        } else {
          diff2 = tmp5 - 1;
        }
        diff1 = diff2;
        tmp4 = sum;
      }
      return entityTrie[tmp5 + ((trieCurrent & BinTrieFlags.BRANCH_LENGTH) >> 7)];
    }
    return -1;
  }
}
export function decodeHTML(arr, mode) {
  let Legacy = mode;
  if (undefined === mode) {
    Legacy = DecodingMode.Legacy;
  }
  if (typeof decodeWithTrie === "function") {
    const index = arr.indexOf("&", 0);
    let index1 = index;
    let num3 = 0;
    let num4 = 0;
    if (index >= 0) {
      c0 = c0 + arr.slice(num3, index1);
      dependencyMap.startEntity(Legacy);
      const writeResult = dependencyMap.write(arr, index1 + 1);
      const obj = dependencyMap;
      while (writeResult >= 0) {
        let sum = index1 + writeResult;
        let sum1 = sum;
        if (0 === writeResult) {
          sum1 = sum + 1;
        }
        index1 = arr.indexOf("&", sum1);
        num3 = sum;
        num4 = sum;
      }
      num4 = index1 + obj.end();
    }
    c0 = "";
    return c0 + arr.slice(num4);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
export function decodeHTMLAttribute(arr) {
  if (typeof decodeWithTrie === "function") {
    const index = arr.indexOf("&", 0);
    let index1 = index;
    let num3 = 0;
    let num4 = 0;
    if (index >= 0) {
      c0 = c0 + arr.slice(num3, index1);
      dependencyMap.startEntity(tmp);
      const writeResult = dependencyMap.write(arr, index1 + 1);
      const obj = dependencyMap;
      while (writeResult >= 0) {
        let sum = index1 + writeResult;
        let sum1 = sum;
        if (0 === writeResult) {
          sum1 = sum + 1;
        }
        index1 = arr.indexOf("&", sum1);
        num3 = sum;
        num4 = sum;
      }
      num4 = index1 + obj.end();
    }
    c0 = "";
    return c0 + arr.slice(num4);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
export function decodeHTMLStrict(arr) {
  if (typeof decodeWithTrie === "function") {
    const index = arr.indexOf("&", 0);
    let index1 = index;
    let num3 = 0;
    let num4 = 0;
    if (index >= 0) {
      c0 = c0 + arr.slice(num3, index1);
      dependencyMap.startEntity(tmp);
      const writeResult = dependencyMap.write(arr, index1 + 1);
      const obj = dependencyMap;
      while (writeResult >= 0) {
        let sum = index1 + writeResult;
        let sum1 = sum;
        if (0 === writeResult) {
          sum1 = sum + 1;
        }
        index1 = arr.indexOf("&", sum1);
        num3 = sum;
        num4 = sum;
      }
      num4 = index1 + obj.end();
    }
    c0 = "";
    return c0 + arr.slice(num4);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
export function decodeXML(arr) {
  if (typeof decodeWithTrie === "function") {
    const index = arr.indexOf("&", 0);
    let index1 = index;
    let num3 = 0;
    let num4 = 0;
    if (index >= 0) {
      c0 = c0 + arr.slice(num3, index1);
      dependencyMap.startEntity(tmp);
      const writeResult = dependencyMap.write(arr, index1 + 1);
      const obj = dependencyMap;
      while (writeResult >= 0) {
        let sum = index1 + writeResult;
        let sum1 = sum;
        if (0 === writeResult) {
          sum1 = sum + 1;
        }
        index1 = arr.indexOf("&", sum1);
        num3 = sum;
        num4 = sum;
      }
      num4 = index1 + obj.end();
    }
    c0 = "";
    return c0 + arr.slice(num4);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
