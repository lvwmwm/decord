// Module ID: 12521
// Function ID: 12522
// Name: dollarmathPlugin
// Dependencies: [98, 99]
// Exports: default, dollarmathPlugin

// Module 12521 (dollarmathPlugin)
import _inherits from "_inherits" /* 98 */;
import _setPrototypeOf from "_setPrototypeOf" /* 99 */;

let regex, set;

function _wrapRegExp() {
  class BabelRegExp {
    constructor(arg0, arg1, arg2) {
      let value = arg2;
      const RegExpResult = RegExp(arg0, arg1);
      const obj = weakMap;
      set = weakMap.set;
      if (!arg2) {
        value = obj.get(arg0);
      }
      const result = set(RegExpResult, value);
      return _setPrototypeOf(RegExpResult, _wrapRegExp.prototype);
    }
    exec(arg0) {
      const self = this;
      const exec = regex.exec;
      const callResult = exec.call(self, arg0);
      if (callResult) {
        const value = weakMap.get(self);
        const _Object = Object;
        const keys = Object.keys(value);
        const _Object2 = Object;
        callResult.groups = keys.reduce((acc, item) => {
          if (typeof _undefined[item] === "number") {
            acc[item] = callResult[_undefined[item]];
          } else {
            let num3 = 0;
            let tmp = callResult;
            if (undefined === callResult[_undefined[item][0]]) {
              let num2 = 0;
              num3 = 0;
              tmp = tmp5;
              if (1 < _undefined[item].length) {
                const sum = num2 + 1;
                num3 = sum;
                tmp = callResult;
                while (undefined === callResult[_undefined[item][sum]]) {
                  num2 = sum;
                  num3 = sum;
                  tmp = tmp3;
                  if (sum + 1 >= arr.length) {
                    break;
                  }
                }
              }
            }
            acc[item] = tmp[_undefined[item][num3]];
          }
          return acc;
        }, Object.create(null));
        const indices = callResult.indices;
        const obj = weakMap;
        if (indices) {
          const value2 = obj.get(self);
          const _Object3 = Object;
          const keys1 = Object.keys(value2);
          const _Object4 = Object;
          indices.groups = keys1.reduce((acc, item) => {
            if (typeof _undefined[item] === "number") {
              acc[item] = callResult[_undefined[item]];
            } else {
              let num3 = 0;
              let tmp = callResult;
              if (undefined === callResult[_undefined[item][0]]) {
                let num2 = 0;
                num3 = 0;
                tmp = tmp5;
                if (1 < _undefined[item].length) {
                  const sum = num2 + 1;
                  num3 = sum;
                  tmp = callResult;
                  while (undefined === callResult[_undefined[item][sum]]) {
                    num2 = sum;
                    num3 = sum;
                    tmp = tmp3;
                    if (sum + 1 >= arr.length) {
                      break;
                    }
                  }
                }
              }
              acc[item] = tmp[_undefined[item][num3]];
            }
            return acc;
          }, Object.create(null));
        }
      }
      return callResult;
    }
  }
  _wrapRegExp = function _wrapRegExp(arg0, arg1) {
    let value = arg1;
    const prototype = _wrapRegExp.prototype;
    const RegExpResult = RegExp(arg0, undefined);
    const obj = weakMap;
    set = weakMap.set;
    const tmp2 = _wrapRegExp;
    if (!arg1) {
      value = obj.get(arg0);
    }
    Object.create(prototype);
    const result = set(RegExpResult, value);
    const tmp6 = _setPrototypeOf(RegExpResult, tmp2.prototype);
    return tmp6;
  };
  regex = RegExp.prototype;
  weakMap = new WeakMap();
  let tmp2 = regex(BabelRegExp, RegExp);
  BabelRegExp.prototype[Symbol.replace] = function(arg0, str) {
    let closure_1;
    const self = this;
    regex = str;
    if (typeof str === "string") {
      const tmp3 = weakMap;
      weakMap = weakMap.get(self);
      let tmp5 = globalThis;
      const _Symbol2 = Symbol;
      const obj2 = regex[Symbol.replace];
      return obj2.call(self, arg0, str.replace(/\$<([^>]+)(>|$)/g, (arg0, arg1, arg2) => {
        str = "";
        if ("" === arg2) {
          return arg0;
        } else {
          const _Array = Array;
          if (Array.isArray(closure_1[arg1])) {
            str = `$${obj.join("$")}`;
          } else if (typeof closure_1[arg1] === "number") {
            str = `$${obj}`;
          }
          return str;
        }
      }));
    } else if (typeof str === "function") {
      let tmp = regex;
      const _Symbol = Symbol;
      const obj = regex[Symbol.replace];
      return obj.call(self, arg0, function() {
        let tmp7;
        if (typeof arguments[arguments.length - 1] !== "object") {
          const slice = [].slice;
          const callResult = slice.call(arguments);
          let tmp = self;
          const push = callResult.push;
          const value = weakMap.get(self);
          let c1 = value;
          const _Object = Object;
          const keys = Object.keys(value);
          const _Object2 = Object;
          const tmp5 = null;
          const arr = push(keys.reduce((acc, item) => {
            if (typeof _undefined[item] === "number") {
              acc[item] = callResult[_undefined[item]];
            } else {
              let num3 = 0;
              let tmp = callResult;
              if (undefined === callResult[_undefined[item][0]]) {
                let num2 = 0;
                num3 = 0;
                tmp = tmp5;
                if (1 < _undefined[item].length) {
                  const sum = num2 + 1;
                  num3 = sum;
                  tmp = callResult;
                  while (undefined === callResult[_undefined[item][sum]]) {
                    num2 = sum;
                    num3 = sum;
                    tmp = tmp3;
                    if (sum + 1 >= arr.length) {
                      break;
                    }
                  }
                }
              }
              acc[item] = tmp[_undefined[item][num3]];
            }
            return acc;
          }, Object.create(null)));
          tmp7 = callResult;
        } else {
          tmp7 = arguments;
        }
        return str.apply(this, tmp7);
      });
    } else {
      let tmp7 = globalThis;
      const _Symbol3 = Symbol;
      const obj3 = regex[Symbol.replace];
      return obj3.call(self, arg0, str);
    }
  };
  return _wrapRegExp(...arguments);
}
function dollarmathPlugin(inline, arg1) {
  const math_inline = (arg0, arg1) => {
    let rendererResult;
    const str = arg0[arg1].content;
    const trimmed = str.trim();
    try {
      const obj = { displayMode: closure_0.displayMode };
      rendererResult = merged.renderer(trimmed, obj);
    } catch (tmp6) {
      const utils = closure_0.utils;
      const _HermesInternal = HermesInternal;
      rendererResult = utils.escapeHtml("" + trimmed + ":" + tmp6.message);
    }
    let str4 = "block";
    const tmp9 = closure_0;
    if (closure_0.inline) {
      str4 = "inline";
    }
    let str5 = "span";
    if (closure_0.displayMode) {
      str5 = "div";
    }
    let str6 = "\n";
    if (closure_0.inline) {
      str6 = "";
    }
    const info = arg0[arg1].info;
    let str7 = "";
    if (info) {
      const _HermesInternal2 = HermesInternal;
      str7 = "id=\"" + info + "\" ";
    }
    const items = ["<" + str5 + " " + str7 + "class=\"math " + str4 + "\">", , , ];
    let str10 = "";
    if (tmp9.hasLabel) {
      const _HermesInternal3 = HermesInternal;
      str10 = "" + merged.labelRenderer(info);
    }
    items[1] = str10;
    items[2] = rendererResult;
    items[3] = "</" + str5 + ">";
    const found = items.filter((item) => item);
    return found.join(str6) + str6;
  };
  let obj = {
    renderer(trimmed) {
      const utils = inline.utils;
      return utils.escapeHtml(trimmed);
    }
  };
  const merged = Object.assign(Object.assign(obj, closure_3), arg1);
  const ruler = inline.inline.ruler;
  ruler.before("escape", "math_inline", function math_inline_dollar_rule(src, arg1) {
    src = src.src;
    if (36 !== src.charCodeAt(src.pos)) {
      return false;
    } else {
      if (!merged.allow_space) {
        const utils = src.md.utils;
        const src2 = src.src;
        if (utils.isWhiteSpace(src2.charCodeAt(src.pos + 1))) {
          return false;
        }
      }
      if (!merged.allow_digits) {
        const str = src.src;
        const str2 = str.charAt(src.pos - 1);
        if (str2) {
          if ("" !== str2.trim()) {
            const _isNaN = isNaN;
            const _Number = Number;
            if (!isNaN(Number(str2))) {
              return false;
            }
          }
        }
      }
      const pos = src.pos;
      let num4 = 0;
      if (pos >= 0) {
        let diff = pos - 1;
        const src3 = src.src;
        let num7 = 0;
        num4 = 0;
        if (92 === src3.charCodeAt(diff)) {
          const sum = num7 + 1;
          num4 = sum;
          while (0 <= diff) {
            let diff1 = diff - 1;
            let src4 = src.src;
            num7 = sum;
            diff = diff1;
            num4 = sum;
            if (92 !== src4.charCodeAt(diff1)) {
              break;
            }
          }
        }
      }
      let tmp6 = 0 !== num4;
      if (0 !== num4) {
        tmp6 = num4 % 2 !== 0;
      }
      if (tmp6) {
        return false;
      } else {
        let double_inline = tmp23.double_inline;
        if (double_inline) {
          const src5 = src.src;
          double_inline = 36 === src5.charCodeAt(src.pos + 1);
        }
        let flag4 = false;
        if (double_inline) {
          flag4 = true;
        }
        let num11 = 0;
        const sum1 = src.pos + 1;
        if (flag4) {
          num11 = 1;
        }
        let sum2 = sum1 + num11;
        let str4 = "$";
        let flag6 = false;
        const src1 = src.src;
        const index = src1.indexOf(`$`, sum2);
        let sum4 = sum2;
        while (-1 !== index) {
          let sum5;
          let flag7;
          let num16 = 0;
          if (index >= 0) {
            let diff2 = index - 1;
            let src6 = src.src;
            let num15 = 0;
            num16 = 0;
            if (92 === src6.charCodeAt(diff2)) {
              let sum3 = num15 + 1;
              num16 = sum3;
              while (0 <= diff2) {
                let diff3 = diff2 - 1;
                let src7 = src.src;
                num15 = sum3;
                diff2 = diff3;
                num16 = sum3;
                if (92 !== src7.charCodeAt(diff3)) {
                  break;
                }
              }
            }
          }
          let tmp16 = 0 !== num16;
          if (0 !== num16) {
            tmp16 = num16 % 2 !== 0;
          }
          if (tmp16) {
            sum4 = index + 1;
            sum5 = index;
            flag7 = flag6;
          } else {
            if (flag4) {
              let src8 = src.src;
              if (36 !== src8.charCodeAt(index + 1)) {
                sum4 = index + 1;
                sum5 = index;
                flag7 = flag6;
              }
            }
            sum5 = index;
            if (flag4) {
              sum5 = index + 1;
            }
            flag7 = true;
          }
          sum2 = sum4;
          flag6 = flag7;
          if (!flag6) {
            continue;
          } else if (flag7) {
            let tmp18 = merged;
            if (!merged.allow_space) {
              let src9 = src.src;
              let utils2 = src.md.utils;
              if (utils2.isWhiteSpace(src9.charCodeAt(sum5 - 1))) {
                return false;
              }
            }
            if (!tmp18.allow_digits) {
              let str5 = src.src;
              let str6 = str5.charAt(sum5 + 1);
              if (str6) {
                let str7 = "";
                if ("" !== str6.trim()) {
                  let tmp19 = globalThis;
                  let _isNaN2 = isNaN;
                  let _Number2 = Number;
                  if (!isNaN(Number(str6))) {
                    return false;
                  }
                }
              }
            }
            let src10 = src.src;
            let substr = src10.slice(src.pos + 1, sum5);
            if (flag4) {
              let src11 = src.src;
              substr = src11.slice(src.pos + 2, sum5 - 1);
            }
            if (substr) {
              let tmp21 = arg1;
              if (!tmp21) {
                let str8 = "math_inline";
                let push = src.push;
                if (flag4) {
                  str8 = "math_inline_double";
                }
                let str9 = "math";
                let arr = push(str8, "math", 0);
                arr.content = substr;
                if (flag4) {
                  str4 = "$$";
                }
                arr.markup = str4;
              }
              src.pos = sum5 + 1;
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
        return false;
      }
    }
  });
  const ruler2 = inline.block.ruler;
  ruler2.before("fence", "math_block", function math_block_dollar_rule(blkIndent, startLine, arg2, arg3) {
    let end;
    let end2;
    let label;
    let label2;
    let reversed1;
    let reversed3;
    let tmp18;
    let tmp6;
    const sum = blkIndent.bMarks[startLine] + blkIndent.tShift[startLine];
    if (blkIndent.sCount[startLine] - blkIndent.blkIndent >= 4) {
      return false;
    } else if (sum + 2 > blkIndent.eMarks[startLine]) {
      return false;
    } else {
      const src = blkIndent.src;
      if (36 == src.charCodeAt(sum)) {
        const src2 = blkIndent.src;
        if (36 == src2.charCodeAt(sum + 1)) {
          const src1 = blkIndent.src;
          const str16 = src1.slice(sum, blkIndent.eMarks[startLine]);
          label = undefined;
          end = tmp2;
          let flag = false;
          if (str16.trim().length > 3) {
            const trimmed = str16.trim();
            if (trimmed.endsWith("$$")) {
              const diff = tmp2 - 2;
              end = diff - (str16.length - str16.trim().length);
              flag = true;
            } else {
              end = tmp2;
              flag = false;
              if (merged.allow_labels) {
                const parts = str16.split("");
                const reversed = parts.reverse();
                const str3 = reversed.join("");
                const match = str3.match(_wrapRegExp(/^\s*\)([^)$\r\n]+?)\(\s*\${2}/, { label: 1 }));
                if (match) {
                  let obj2;
                  if (match.groups) {
                    const obj = { label: reversed1.join(""), end: blkIndent.eMarks[startLine] - (tmp6 + match[0].length) };
                    const str4 = match.groups.label;
                    const parts1 = str4.split("");
                    reversed1 = parts1.reverse();
                    obj2 = obj;
                    tmp6 = match.index || 0;
                  }
                  end = tmp2;
                  flag = false;
                  if (undefined !== obj2.label) {
                    ({ label, end } = obj2);
                    flag = true;
                  }
                }
                obj2 = { end: blkIndent.eMarks[startLine] };
              }
            }
          }
          if (!flag) {
            if (!merged.allow_labels) {
              const value = weakMap.get(blkIndent);
              if (undefined !== value) {
                if (startLine > value.startLine) {
                  if (startLine < value.lastLine) {
                    if (arg2 > value.lastLine + 1) {
                      const lastLine = value.lastLine;
                      const src3 = blkIndent.src;
                      src3.slice(blkIndent.bMarks[lastLine] + blkIndent.tShift[lastLine], blkIndent.eMarks[lastLine]);
                    }
                    return false;
                  }
                }
              }
            }
          }
          label2 = label;
          let tmp12 = startLine;
          end2 = end;
          let flag2 = flag;
          if (!flag2) {
            let tmp13 = startLine;
            label2 = label;
            tmp12 = startLine;
            end2 = end;
            flag2 = flag;
            if (startLine + 1 < arg2) {
              const sum1 = tmp13 + 1;
              const src4 = blkIndent.src;
              const str9 = src4.slice(blkIndent.bMarks[sum1] + blkIndent.tShift[sum1], blkIndent.eMarks[sum1]);
              const trimmed1 = str9.trim();
              while (!trimmed1.endsWith("$$")) {
                label2 = label;
                tmp12 = sum1;
                end2 = tmp15;
                flag2 = flag;
                if ("" != str9.trim()) {
                  if (merged.allow_labels) {
                    let parts2 = str9.split("");
                    let reversed2 = parts2.reverse();
                    let str10 = reversed2.join("");
                    let match1 = str10.match(_wrapRegExp(/^\s*\)([^)$\r\n]+?)\(\s*\${2}/, { label: 1 }));
                    if (match1) {
                      if (match1.groups) {
                        let obj3 = { label: reversed3.join(""), end: tmp15 - (tmp18 + match1[0].length) };
                        let str11 = match1.groups.label;
                        let parts3 = str11.split("");
                        reversed3 = parts3.reverse();
                        tmp18 = match1.index || 0;
                        let obj4 = obj3;
                        if (undefined !== obj4.label) {
                          ({ label: label2, end: end2 } = obj4);
                          flag2 = true;
                          tmp12 = sum1;
                        }
                      }
                    }
                    obj4 = { end: tmp15 };
                  }
                  tmp13 = sum1;
                  label2 = label;
                  tmp12 = sum1;
                  end2 = tmp15;
                  flag2 = flag;
                }
              }
              const diff1 = tmp15 - 2;
              end2 = diff1 - (str9.length - str9.trim().length);
              flag2 = true;
              label2 = label;
              tmp12 = sum1;
            }
          }
          if (flag2) {
            let num2 = 0;
            if (flag2) {
              num2 = 1;
            }
            blkIndent.line = tmp12 + num2;
            let str12 = "math_block";
            const push = blkIndent.push;
            if (label2) {
              str12 = "math_block_label";
            }
            const arr = push(str12, "math", 0);
            arr.block = true;
            const src5 = blkIndent.src;
            const str14 = src5.slice(sum + 2, end2);
            arr.content = str14.trim();
            arr.markup = "$$";
            const items = [startLine, blkIndent.line];
            arr.map = items;
            if (label2) {
              let labelNormalizerResult = label2;
              const obj16 = merged;
              if (merged.labelNormalizer) {
                labelNormalizerResult = obj16.labelNormalizer(label2);
              }
              arr.info = labelNormalizerResult;
            }
            return true;
          } else {
            const tmp21 = !merged.allow_labels && tmp12 > startLine;
            if (tmp21) {
              const obj5 = { startLine, lastLine: tmp12 };
              const result = weakMap.set(blkIndent, obj5);
            }
            return false;
          }
        }
      }
      return false;
    }
  });
  inline = { displayMode: false, inline: true };
  inline.renderer.rules.math_inline = math_inline;
  inline = { displayMode: true, inline: true };
  inline.renderer.rules.math_inline_double = math_inline;
  inline = { displayMode: true };
  inline.renderer.rules.math_block = math_inline;
  inline = { displayMode: true, hasLabel: true };
  inline.renderer.rules.math_block_label = math_inline;
}
let closure_3 = {
  allow_space: true,
  allow_digits: true,
  double_inline: true,
  allow_labels: true,
  labelNormalizer(label2) {
    return label2.replace(/[\s]+/g, "-");
  },
  labelRenderer(info) {
    return "<a href=\"#" + info + "\" class=\"mathlabel\" title=\"Permalink to this equation\">\u00B6</a>";
  }
};
let weakMap = new WeakMap();

export default dollarmathPlugin;
export { dollarmathPlugin };
