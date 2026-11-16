// Module ID: 1808
// Function ID: 1809
// Dependencies: [32, 1761]
// Exports: processSVGPath

// Module 1808
import _mod1761 from "module_1761" /* 1761 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

const ERROR_MESSAGES = {
  invalidSVGPathCommand(l, arg1) {
    const json = JSON.stringify(l);
    return "Invalid SVG Path command: " + json + " " + JSON.stringify(arg1);
  },
  invalidSVGPathStart(l) {
    return "Invalid SVG Path: Path must start with \"M\" or \"m\", but found \"" + l + "\"";
  }
};
let closure_4 = {
  M(arg0, arg1) {
    let tmp2;
    let tmp3;
    [tmp2, tmp3] = arg1;
    arg0.startX = tmp2;
    arg0.curX = tmp2;
    arg0.startY = tmp3;
    arg0.curY = tmp3;
    const items = ["M", tmp2, tmp3];
    const items1 = [items];
    _slicedToArray(arg1, 2);
    return items1;
  },
  L(curX, arg1) {
    let tmp2;
    let tmp3;
    [tmp2, tmp3] = arg1;
    _slicedToArray(arg1, 2);
    curX.curX = tmp2;
    curX.curY = tmp3;
    const items = ["C", ..._mod1761.lineToCubic(curX.curX, curX.curY, tmp2, tmp3)];
    const items1 = [items];
    _mod1761;
    return items1;
  },
  Q(curX, arg1) {
    let tmp2;
    let tmp3;
    let tmp4;
    let tmp5;
    [tmp2, tmp3, tmp4, tmp5] = arg1;
    _slicedToArray(arg1, 4);
    curX.lastQuadCtrlX = tmp2;
    curX.lastQuadCtrlY = tmp3;
    curX.curX = tmp4;
    curX.curY = tmp5;
    const items = ["C", ..._mod1761.quadraticToCubic(curX.curX, curX.curY, tmp2, tmp3, tmp4, tmp5)];
    const items1 = [items];
    _mod1761;
    return items1;
  },
  C(arg0, arg1) {
    [r10006, r10007, arg0.lastCubicCtrlX, arg0.lastCubicCtrlY, arg0.curX, arg0.curY] = arg1;
    const items = ["C", ...arg1];
    const items1 = [items];
    _slicedToArray(arg1, 6);
    return items1;
  },
  A(curX, arg1) {
    const obj = _mod1761;
    const arcToCubicResult = obj.arcToCubic(curX.curX, curX.curY, arg1[0], arg1[1], arg1[2], arg1[3], arg1[4], arg1[5], arg1[6]);
    if (0 === arcToCubicResult.length) {
      return [];
    } else {
      curX.lastCubicCtrlX = arcToCubicResult[arcToCubicResult.length - 1][2];
      curX.lastCubicCtrlY = arcToCubicResult[arcToCubicResult.length - 1][3];
      curX.curX = arcToCubicResult[arcToCubicResult.length - 1][4];
      curX.curY = arcToCubicResult[arcToCubicResult.length - 1][5];
      return arcToCubicResult.map((item) => {
        const items = ["C", ...item];
        return items;
      });
    }
  },
  Z(arg0) {
    ({ startX: arg0.curX, startY: arg0.curY } = arg0);
    const items = [["Z"]];
    return items;
  }
};

export { ERROR_MESSAGES };
export const processSVGPath = (str) => {
  function normalizePath(items) {
    function absolutizePath(arr) {
      let closure_0 = 0;
      let closure_1 = 0;
      let closure_2 = 0;
      let c3 = 0;
      return arr.map((arr) => {
        let length;
        let tmp10;
        const formatted = str.toUpperCase();
        const tmp2 = arr[0] != formatted;
        const substr = arr.slice(1);
        if (tmp2) {
          if ("A" === formatted) {
            substr[5] = substr[5] + closure_0;
            substr[6] = substr[6] + closure_1;
          } else if ("V" === formatted) {
            substr[0] = substr[0] + closure_1;
          } else if ("H" === formatted) {
            substr[0] = substr[0] + closure_0;
          } else {
            let num = 0;
            if (0 < substr.length) {
              do {
                substr[num] = substr[num] + closure_0;
                let sum = num + 1;
                substr[sum] = substr[sum] + closure_1;
                num = num + 2;
                length = substr.length;
              } while (num < length);
            }
          }
        }
        if ("Z" === formatted) {
          closure_0 = closure_2;
          closure_1 = c3;
        } else if ("H" === formatted) {
          closure_0 = substr[0];
        } else if ("V" === formatted) {
          closure_1 = substr[0];
        } else if ("M" === formatted) {
          [closure_0, tmp10] = substr;
          closure_1 = tmp10;
          closure_2 = closure_0;
          c3 = tmp10;
        } else if (substr.length >= 2) {
          closure_0 = substr[substr.length - 2];
          closure_1 = substr[substr.length - 1];
        }
        items = [formatted, ...substr];
        return items;
      });
    }
    items = [];
    const obj = { curX: 0, curY: 0, startX: 0, startY: 0, lastCubicCtrlX: 0, lastCubicCtrlY: 0, lastQuadCtrlX: 0, lastQuadCtrlY: 0 };
    const tmp = absolutizePath(items);
    const iter = tmp[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let first = nextResult[0];
      let str = first;
      let items1 = [];
      let tmp3 = items1;
      let num = 0;
      let arraySpreadResult = HermesBuiltin.arraySpread(items1, nextResult.slice(1), 0);
      let tmp5 = items1;
      if ("S" === first) {
        let obj2 = items(dependencyMap[1]);
        let tmp10 = _slicedToArray(obj2.reflectControlPoint(obj.curX, obj.curY, obj.lastCubicCtrlX, obj.lastCubicCtrlY), 2);
        str = "C";
        let items2 = [, , , , , ];
        [arr4[0], arr4[1]] = tmp10;
        [arr4[2], arr4[3], arr4[4], arr4[5]] = tmp5;
        tmp5 = items2;
      } else if ("T" === `C`) {
        let obj3 = items(dependencyMap[1]);
        let tmp31 = _slicedToArray(obj3.reflectControlPoint(obj.curX, obj.curY, obj.lastQuadCtrlX, obj.lastQuadCtrlY), 2);
        str = "Q";
        let items3 = [, , , ];
        [arr8[0], arr8[1]] = tmp31;
        [arr8[2], arr8[3]] = tmp5;
        tmp5 = items3;
      }
      if ("H" === str) {
        str = "L";
        let items4 = [tmp5[0], obj.curY];
        tmp5 = items4;
      }
      if ("V" === str) {
        str = "L";
        let items5 = [obj.curX, ];
        items5[1] = tmp5[0];
        tmp5 = items5;
      }
      let push = items.push;
      let items6 = [];
      let arraySpreadResult2 = HermesBuiltin.arraySpread(items6, closure_1_4[str](obj, tmp5), 0);
      let applyResult = HermesBuiltin.apply(push, items6, items);
      let tmp25 = "Q" === str;
      if ("C" !== str) {
        ({ curX: obj.lastCubicCtrlX, curY: obj.lastCubicCtrlY } = obj);
      }
      let tmp26 = tmp25;
      if (!tmp26) {
        ({ curX: obj.lastQuadCtrlX, curY: obj.lastQuadCtrlY } = obj);
      }
      continue;
    }
    return items;
  }
  let items = [];
  const replaced = str.replace(items(1761).SEGMENT_PATTERN, function(arg0, l, str) {
    let mapped;
    const match = str.match(_mod1761.NUMBER_PATTERN);
    if (match) {
      const _Number = Number;
      mapped = match.map(Number);
    } else {
      mapped = [];
    }
    const formatted = l.toLowerCase();
    if (0 === items.length) {
      if ("m" !== formatted) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const error = new Error("[Reanimated] " + obj.invalidSVGPathStart(l));
        throw error;
      }
    }
    let num = 0;
    let str2 = formatted;
    let tmp7 = l;
    const tmp6 = "m" === formatted && mapped.length > tmp2(1761).PATH_COMMAND_LENGTHS.m;
    if (tmp6) {
      items = [l];
      const push = arr3.push;
      HermesBuiltin.arraySpread(items, mapped.slice(0, _mod1761.PATH_COMMAND_LENGTHS.m), 1);
      push(items);
      let str3 = "L";
      const m = tmp2(1761).PATH_COMMAND_LENGTHS.m;
      if ("m" === l) {
        str3 = "l";
      }
      str2 = "l";
      tmp7 = str3;
      num = m;
    }
    const diff = mapped.length - num;
    while (diff >= _mod1761.PATH_COMMAND_LENGTHS[str2]) {
      let items1 = [tmp7];
      let push2 = arr3.push;
      let arraySpreadResult2 = HermesBuiltin.arraySpread(items1, mapped.slice(num, num + tmp12(1761).PATH_COMMAND_LENGTHS[str2]), 1);
      let push2Result = push2(items1);
      let sum = num + tmp12(1761).PATH_COMMAND_LENGTHS[str2];
      num = sum;
      if (mapped.length - sum !== 0) {
        continue;
      } else {
        let str5 = "";
        return "";
      }
    }
    const error1 = new Error("[Reanimated] " + obj.invalidSVGPathCommand(tmp7, mapped.slice(num)));
    throw error1;
  });
  let obj = normalizePath(items);
  const flatMapResult = obj.flatMap((item) => item);
  return flatMapResult.join(" ");
};
