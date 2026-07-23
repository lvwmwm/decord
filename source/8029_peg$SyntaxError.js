// Module ID: 8029
// Function ID: 63736
// Name: peg$SyntaxError
// Dependencies: [65]

// Module 8029 (peg$SyntaxError)
import _toConsumableArray from "_toConsumableArray";

class peg$SyntaxError {
  constructor(arg0, arg1, arg2, arg3) {
    callResult = Error.call(this, global);
    if (Object.setPrototypeOf) {
      _Object = Object;
      tmp2 = peg$SyntaxError;
      setPrototypeOfResult = Object.setPrototypeOf(callResult, peg$SyntaxError.prototype);
    }
    callResult.expected = require;
    callResult.found = importDefault;
    callResult.location = importAll;
    callResult.name = "SyntaxError";
    return callResult;
  }
  format(arg0) {
    self = this;
    text = `Error: ${this.message}`;
    sum = text;
    if (this.location) {
      num = 0;
      parts = null;
      if (0 < global.length) {
        tmp4 = num;
        while (global[num].source !== self.location.source) {
          num = num + 1;
          parts = null;
        }
        str = global[num].text;
        parts = str.split(/\r\n|\n|\r/g);
      }
      start = self.location.start;
      offsetResult = start;
      if (self.location.source) {
        str2 = "function";
        offsetResult = start;
        if ("function" === typeof self.location.source.offset) {
          source = self.location.source;
          offsetResult = source.offset(start);
        }
      }
      str3 = ":";
      text1 = `${self.location.source}:${tmp5.line}:${tmp5.column}`;
      if (parts) {
        end = self.location.end;
        tmp7 = peg$padEnd;
        str5 = offsetResult.line;
        str6 = "";
        str7 = " ";
        tmp8 = peg$padEnd("", str5.toString().length, " ");
        num2 = 1;
        arr = parts[start.line - 1];
        if (start.line === end.line) {
          column = end.column;
        } else {
          column = arr.length + 1;
        }
        tmp9 = column - start.column || 1;
        str8 = "\n --> ";
        str9 = "\n";
        str10 = " |\n";
        str11 = " | ";
        tmp11 = peg$padEnd;
        text2 = `
 --> ${tmp6}
${tmp8} |
${tmp5.line} | ${arr}
${tmp8}`;
        str12 = "^";
        text3 = `${tmp10} | ${peg$padEnd("", start.column - 1, " ")}`;
        sum = text + (text3 + peg$padEnd("", tmp9, "^"));
      } else {
        str4 = "\n at ";
        sum = `${tmp}
 at ${tmp6}`;
      }
    }
    return sum;
  }
  static buildMessage(arg0, arg1) {
    hex = function hex(str) {
      str = str.charCodeAt(0);
      return str.charCodeAt(0).toString(16).toUpperCase();
    };
    literalEscape = function literalEscape(str) {
      str = str.replace(/\\/g, "\\\\");
      const str2 = str.replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
      const str3 = str.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0");
      const str4 = str.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t");
      const str5 = str.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n");
      const str6 = str.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r");
      return str.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (arg0) => "\\x0" + outer1_1(arg0)).replace(/[\x10-\x1F\x7F-\x9F]/g, (arg0) => "\\x" + outer1_1(arg0));
    };
    classEscape = function classEscape(str) {
      str = str.replace(/\\/g, "\\\\");
      const str2 = str.replace(/\\/g, "\\\\").replace(/\]/g, "\\]");
      const str3 = str.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^");
      const str4 = str.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-");
      const str5 = str.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0");
      const str6 = str.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t");
      const str7 = str.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n");
      const str8 = str.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r");
      return str.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (arg0) => "\\x0" + outer1_1(arg0)).replace(/[\x10-\x1F\x7F-\x9F]/g, (arg0) => "\\x" + outer1_1(arg0));
    };
    classEscape = {
      literal(text) {
            return "\"" + literalEscape(text.text) + "\"";
          },
      class: function _class(parts) {
            parts = parts.parts;
            const mapped = parts.map((arg0) => {
              if (Array.isArray(arg0)) {
                const text = `${tmp(arg0[0])}-`;
                let text1 = `${tmp(arg0[0])}-${tmp(arg0[1])}`;
              } else {
                text1 = tmp(arg0);
              }
              return text1;
            });
            let str = "";
            if (parts.inverted) {
              str = "^";
            }
            return "[" + str + mapped.join("") + "]";
          },
      any() {
            return "any character";
          },
      end() {
            return "end of input";
          },
      other(description) {
            return description.description;
          }
    };
    mapped = global.map(function describeExpectation(arg0) {
      return dependencyMap[arg0.type](arg0);
    });
    sorted = mapped.sort();
    if (mapped.length > 0) {
      num = 1;
      num2 = 1;
      num3 = 1;
      num4 = 1;
      if (1 < mapped.length) {
        do {
          sum = num3;
          if (mapped[num2 - 1] !== mapped[num2]) {
            mapped[num3] = mapped[num2];
            sum = num3 + 1;
          }
          num2 = num2 + 1;
          num3 = sum;
          num4 = sum;
        } while (num2 < mapped.length);
      }
      mapped.length = num4;
    }
    length = mapped.length;
    if (1 === length) {
      first = mapped[0];
    } else {
      num5 = 2;
      if (2 === length) {
        str3 = " or ";
        first = `${arr[0]} or ${arr[1]}`;
      } else {
        num6 = -1;
        substr = require("_toConsumableArray");
        str = ", ";
        str2 = ", or ";
        first = `${obj.join(", ")}, or ${arr[arr.length - 1]}`;
      }
    }
    str4 = "end of input";
    text = `Expected ${tmp3}`;
    if (require) {
      str5 = "\"";
      str4 = `${"\"" + literalEscape(require)}"`;
    }
    return text + " but " + str4 + " found.";
  }
}
function peg$padEnd(arg0, length, arg2) {
  let str = arg2;
  if (!arg2) {
    str = " ";
  }
  let sum1 = arg0;
  if (arg0.length <= length) {
    const diff = length - arg0.length;
    const sum = str + str.repeat(diff);
    sum1 = arg0 + sum.slice(0, diff);
  }
  return sum1;
}
(function peg$subclass(peg$SyntaxError, Error) {
  let closure_0 = peg$SyntaxError;
  class C {
    constructor() {
      this.constructor = closure_0;
      return;
    }
  }
  C.prototype = Error.prototype;
  const c = new C();
  peg$SyntaxError.prototype = c;
})(peg$SyntaxError, Error);

export default {
  StartRules: ["start"],
  SyntaxError: peg$SyntaxError,
  parse: function peg$parse(str) {
    let obj = arg1;
    let closure_0 = str;
    function peg$literalExpectation(text, arg1) {
      const obj = { type: "literal", text, ignoreCase: false };
      return obj;
    }
    function peg$classExpectation(items, arg1, arg2) {
      const obj = { type: "class", parts: items, inverted: false, ignoreCase: false };
      return obj;
    }
    function peg$otherExpectation(matrix) {
      return { type: "other", description: matrix };
    }
    function peg$computePosDetails(arg0) {
      if (items1[arg0]) {
        return tmp;
      } else {
        if (arg0 >= items1.length) {
          let diff = items1.length - 1;
        } else {
          const diff1 = arg0 - 1;
          let tmp5 = diff1;
          diff = diff1;
          if (!items1[diff1]) {
            const diff2 = tmp5 - 1;
            tmp5 = diff2;
            diff = diff2;
          }
        }
        const obj = {};
        ({ line: obj.line, column: obj.column } = items1[diff]);
        if (diff < arg0) {
          do {
            let tmp11 = str;
            let tmp12 = diff;
            if (10 === str.charCodeAt(diff)) {
              obj.line = obj.line + 1;
              obj.column = 1;
            } else {
              obj.column = obj.column + 1;
            }
            diff = diff + 1;
          } while (diff < arg0);
        }
        items1[arg0] = obj;
        return obj;
      }
    }
    function peg$computeLocation(closure_53, closure_532) {
      const tmp = peg$computePosDetails(closure_53);
      const tmp2 = peg$computePosDetails(closure_532);
      obj = { source: grammarSource, start: obj, end: obj };
      obj = { offset: closure_53, line: tmp.line, column: tmp.column };
      obj = { offset: closure_532, line: tmp2.line, column: tmp2.column };
      if (undefined) {
        obj.start = grammarSource.offset(obj.start);
        obj.end = grammarSource.offset(obj.end);
      }
      return obj;
    }
    function peg$fail(arg0) {
      if (closure_50 >= closure_53) {
        if (closure_50 > closure_53) {
          closure_53 = closure_50;
          let arr = [];
        }
        arr = arr.push(arg0);
      }
    }
    function peg$parsestart() {
      closure_55 = closure_55 + 1 + 1;
      const tmp2 = peg$parsefunction();
      if (tmp2 !== obj) {
        const items = [];
        const tmp8 = peg$parsefunction();
        if (tmp8 !== obj) {
          const items1 = [tmp6, tmp8];
          let tmp10 = items1;
        } else {
          let closure_50 = tmp4;
          tmp10 = obj;
        }
        if (tmp10 !== obj) {
          do {
            let arr = items.push(tmp10);
            let tmp14 = peg$parse_;
            let tmp13 = closure_50;
            let tmp16 = peg$parsefunction;
            let tmp15 = peg$parse_();
            let tmp17 = peg$parsefunction();
            let tmp18 = obj;
            if (tmp17 !== obj) {
              let items2 = [tmp15, tmp17];
              tmp10 = items2;
            } else {
              closure_50 = tmp13;
              tmp10 = obj;
            }
            let tmp19 = obj;
          } while (tmp10 !== obj);
        }
        let closure_51 = tmp;
        let tmp3 = peg$f0(tmp2, items);
        tmp4 = closure_50;
        tmp6 = peg$parse_();
      } else {
        closure_50 = tmp;
        tmp3 = obj;
      }
      closure_55 = closure_55 - 1;
      if (tmp3 === obj) {
        if (0 === closure_55) {
          peg$fail(closure_17);
        }
      }
      closure_55 = closure_55 - 1;
      if (tmp3 === obj) {
        if (0 === closure_55) {
          peg$fail(closure_16);
        }
      }
      return tmp3;
    }
    function peg$parsefunction() {
      closure_55 = closure_55 + 1 + 1;
      let tmp = closure_50;
      peg$parse_();
      if (str.substr(closure_50, 7) === c3) {
        let tmp5 = c3;
        closure_50 = closure_50 + 7;
      } else {
        tmp5 = obj;
        if (0 === closure_55) {
          peg$fail(closure_20);
          tmp5 = tmp3;
        }
      }
      if (tmp5 !== obj) {
        peg$parse_();
        let tmp14 = peg$parseNUM();
        if (tmp14 !== obj) {
          peg$parsespaceOrComma();
          const tmp19 = peg$parseNUM();
          if (tmp19 !== obj) {
            peg$parsespaceOrComma();
            const tmp24 = peg$parseNUM();
            if (tmp24 !== obj) {
              peg$parsespaceOrComma();
              const tmp29 = peg$parseNUM();
              if (tmp29 !== obj) {
                peg$parsespaceOrComma();
                const tmp34 = peg$parseNUM();
                if (tmp34 !== obj) {
                  peg$parsespaceOrComma();
                  const tmp39 = peg$parseNUM();
                  if (tmp39 !== obj) {
                    peg$parsespaceOrComma();
                    const tmp44 = peg$parseNUM();
                    if (tmp44 !== obj) {
                      peg$parsespaceOrComma();
                      const tmp49 = peg$parseNUM();
                      if (tmp49 !== obj) {
                        peg$parsespaceOrComma();
                        const tmp54 = peg$parseNUM();
                        if (tmp54 !== obj) {
                          peg$parse_();
                          if (41 === str.charCodeAt(closure_50)) {
                            let tmp62 = c4;
                            closure_50 = closure_50 + 1;
                          } else {
                            tmp62 = obj;
                            if (0 === closure_55) {
                              peg$fail(closure_21);
                              tmp62 = tmp60;
                            }
                          }
                          if (tmp62 !== obj) {
                            peg$parse_();
                            let closure_51 = tmp;
                            let tmp10 = peg$f1(tmp14, tmp19, tmp24, tmp29, tmp34, tmp39, tmp44, tmp49, tmp54);
                          } else {
                            closure_50 = tmp;
                            tmp10 = obj;
                          }
                        } else {
                          closure_50 = tmp;
                          tmp10 = obj;
                        }
                      } else {
                        closure_50 = tmp;
                        tmp10 = obj;
                      }
                    } else {
                      closure_50 = tmp;
                      tmp10 = obj;
                    }
                  } else {
                    closure_50 = tmp;
                    tmp10 = obj;
                  }
                } else {
                  closure_50 = tmp;
                  tmp10 = obj;
                }
              } else {
                closure_50 = tmp;
                tmp10 = obj;
              }
            } else {
              closure_50 = tmp;
              tmp10 = obj;
            }
          } else {
            closure_50 = tmp;
            tmp10 = obj;
          }
        } else {
          closure_50 = tmp;
          tmp10 = obj;
        }
      } else {
        closure_50 = tmp;
        tmp10 = obj;
      }
      closure_55 = closure_55 - 1;
      if (tmp10 === obj) {
        if (0 === closure_55) {
          peg$fail(closure_19);
        }
      }
      let tmp84 = tmp10 === obj;
      if (tmp84) {
        closure_55 = closure_55 + 1;
        peg$parse_();
        if (str.substr(closure_50, 10) === c5) {
          let tmp94 = c5;
          closure_50 = closure_50 + 10;
        } else {
          tmp94 = obj;
          if (0 === closure_55) {
            peg$fail(closure_23);
            tmp94 = tmp92;
          }
        }
        if (tmp94 !== obj) {
          tmp = peg$parse_;
          tmp = peg$parse_();
          tmp = peg$parseNUM;
          tmp = peg$parseNUM();
          tmp = obj;
          if (tmp !== obj) {
            tmp = peg$parsespaceOrComma;
            tmp = peg$parsespaceOrComma();
            tmp = peg$parseNUM;
            tmp = peg$parseNUM();
            tmp = obj;
            if (tmp === obj) {
              tmp = null;
            }
            tmp = peg$parse_;
            tmp = peg$parse_();
            tmp = str;
            tmp = closure_50;
            if (41 === str.charCodeAt(closure_50)) {
              tmp = c4;
              tmp = closure_50;
              closure_50 = closure_50 + 1;
            } else {
              tmp = closure_55;
              tmp = obj;
              if (0 === closure_55) {
                tmp = peg$fail;
                tmp = closure_21;
                tmp = peg$fail(closure_21);
              }
            }
            tmp = obj;
            if (tmp !== obj) {
              tmp = peg$parse_;
              tmp = peg$parse_();
              closure_51 = tmp86;
              tmp = peg$f2;
              tmp = peg$f2(tmp, tmp);
            } else {
              closure_50 = tmp86;
              tmp = obj;
            }
          } else {
            closure_50 = tmp86;
            tmp = obj;
          }
        } else {
          closure_50 = tmp86;
          tmp = obj;
        }
        tmp = closure_55;
        closure_55 = closure_55 - 1;
        tmp = obj;
        if (tmp === obj) {
          tmp = closure_55;
          if (0 === closure_55) {
            tmp = peg$fail;
            tmp = closure_22;
            tmp = peg$fail(closure_22);
          }
        }
        tmp = obj;
        tmp84 = tmp === obj;
        tmp10 = tmp;
      }
      if (tmp84) {
        tmp = closure_55;
        closure_55 = closure_55 + 1;
        tmp = closure_50;
        tmp = peg$parse_;
        tmp = peg$parse_();
        tmp = str;
        tmp = closure_50;
        tmp = c6;
        if (str.substr(closure_50, 6) === c6) {
          tmp = c6;
          tmp = closure_50;
          closure_50 = closure_50 + 6;
        } else {
          tmp = closure_55;
          tmp = obj;
          if (0 === closure_55) {
            tmp = peg$fail;
            tmp = closure_25;
            tmp = peg$fail(closure_25);
          }
        }
        tmp = obj;
        if (tmp !== obj) {
          tmp = peg$parse_;
          tmp = peg$parse_();
          tmp = peg$parseNUM;
          tmp = peg$parseNUM();
          tmp = obj;
          if (tmp !== obj) {
            tmp = peg$parsespaceOrComma;
            tmp = peg$parsespaceOrComma();
            tmp = peg$parseNUM;
            tmp = peg$parseNUM();
            tmp = obj;
            if (tmp === obj) {
              tmp = null;
            }
            tmp = peg$parse_;
            tmp = peg$parse_();
            tmp = str;
            tmp = closure_50;
            if (41 === str.charCodeAt(closure_50)) {
              tmp = c4;
              tmp = closure_50;
              closure_50 = closure_50 + 1;
            } else {
              tmp = closure_55;
              tmp = obj;
              if (0 === closure_55) {
                tmp = peg$fail;
                tmp = closure_21;
                tmp = peg$fail(closure_21);
              }
            }
            tmp = obj;
            if (tmp !== obj) {
              tmp = peg$parse_;
              tmp = peg$parse_();
              closure_51 = tmp;
              tmp = peg$f3;
              tmp = peg$f3(tmp, tmp);
            } else {
              closure_50 = tmp;
              tmp = obj;
            }
          } else {
            closure_50 = tmp;
            tmp = obj;
          }
        } else {
          closure_50 = tmp;
          tmp = obj;
        }
        tmp = closure_55;
        closure_55 = closure_55 - 1;
        tmp = obj;
        if (tmp === obj) {
          tmp = closure_55;
          if (0 === closure_55) {
            tmp = peg$fail;
            tmp = closure_24;
            tmp = peg$fail(closure_24);
          }
        }
        tmp = obj;
        tmp84 = tmp === obj;
        tmp10 = tmp;
      }
      if (tmp84) {
        tmp = (function peg$parserotate() {
          closure_55 = closure_55 + 1;
          outer1_60();
          if (outer1_0.substr(closure_50, 7) === outer1_7) {
            let tmp5 = outer1_7;
            closure_50 = closure_50 + 7;
          } else {
            tmp5 = outer1_1;
            if (0 === closure_55) {
              outer1_57(outer1_27);
              tmp5 = tmp3;
            }
          }
          if (tmp5 !== outer1_1) {
            outer1_60();
            const tmp14 = outer1_61();
            if (tmp14 !== outer1_1) {
              closure_55 = closure_55 + 1;
              outer1_59();
              const tmp21 = outer1_61();
              if (tmp21 !== outer1_1) {
                outer1_59();
                const tmp27 = outer1_61();
                if (tmp27 !== outer1_1) {
                  let closure_51 = tmp17;
                  let tmp23 = outer1_46(tmp21, tmp27);
                } else {
                  closure_50 = tmp17;
                  tmp23 = outer1_1;
                }
              } else {
                closure_50 = tmp17;
                tmp23 = outer1_1;
              }
              closure_55 = closure_55 - 1;
              if (tmp23 === outer1_1) {
                if (0 === closure_55) {
                  outer1_57(outer1_28);
                }
              }
              if (tmp23 === outer1_1) {
                tmp23 = null;
              }
              outer1_60();
              if (41 === outer1_0.charCodeAt(closure_50)) {
                let tmp43 = outer1_4;
                closure_50 = closure_50 + 1;
              } else {
                tmp43 = outer1_1;
                if (0 === closure_55) {
                  outer1_57(outer1_21);
                  tmp43 = tmp41;
                }
              }
              if (tmp43 !== outer1_1) {
                outer1_60();
                closure_51 = tmp;
                let tmp10 = outer1_45(tmp14, tmp23);
              } else {
                closure_50 = tmp;
                tmp10 = outer1_1;
              }
            } else {
              closure_50 = tmp;
              tmp10 = outer1_1;
            }
          } else {
            closure_50 = tmp;
            tmp10 = outer1_1;
          }
          closure_55 = closure_55 - 1;
          if (tmp10 === outer1_1) {
            if (0 === closure_55) {
              outer1_57(outer1_26);
            }
          }
          return tmp10;
        })();
        tmp = obj;
        tmp84 = tmp === obj;
        tmp10 = tmp;
      }
      if (tmp84) {
        tmp = closure_55;
        closure_55 = closure_55 + 1;
        tmp = closure_50;
        tmp = peg$parse_;
        tmp = peg$parse_();
        tmp = str;
        tmp = closure_50;
        tmp = c8;
        if (str.substr(closure_50, 6) === c8) {
          tmp = c8;
          tmp = closure_50;
          closure_50 = closure_50 + 6;
        } else {
          tmp = closure_55;
          tmp = obj;
          if (0 === closure_55) {
            tmp = peg$fail;
            tmp = closure_30;
            tmp = peg$fail(closure_30);
          }
        }
        tmp = obj;
        if (tmp !== obj) {
          tmp = peg$parse_;
          tmp = peg$parse_();
          tmp = peg$parseNUM;
          tmp = peg$parseNUM();
          tmp = obj;
          if (tmp !== obj) {
            tmp = peg$parse_;
            tmp = peg$parse_();
            tmp = str;
            tmp = closure_50;
            if (41 === str.charCodeAt(closure_50)) {
              tmp = c4;
              tmp = closure_50;
              closure_50 = closure_50 + 1;
            } else {
              tmp = closure_55;
              tmp = obj;
              if (0 === closure_55) {
                tmp = peg$fail;
                tmp = closure_21;
                tmp = peg$fail(closure_21);
              }
            }
            tmp = obj;
            if (tmp !== obj) {
              tmp = peg$parse_;
              tmp = peg$parse_();
              closure_51 = tmp;
              tmp = peg$f6;
              tmp = peg$f6(tmp);
            } else {
              closure_50 = tmp;
              tmp = obj;
            }
          } else {
            closure_50 = tmp;
            tmp = obj;
          }
        } else {
          closure_50 = tmp;
          tmp = obj;
        }
        tmp = closure_55;
        closure_55 = closure_55 - 1;
        tmp = obj;
        if (tmp === obj) {
          tmp = closure_55;
          if (0 === closure_55) {
            tmp = peg$fail;
            tmp = closure_29;
            tmp = peg$fail(closure_29);
          }
        }
        tmp = obj;
        tmp84 = tmp === obj;
        tmp10 = tmp;
      }
      if (tmp84) {
        tmp = closure_55;
        closure_55 = closure_55 + 1;
        tmp = closure_50;
        tmp = peg$parse_;
        tmp = peg$parse_();
        tmp = str;
        tmp = closure_50;
        tmp = c9;
        if (str.substr(closure_50, 6) === c9) {
          tmp = c9;
          tmp = closure_50;
          closure_50 = closure_50 + 6;
        } else {
          tmp = closure_55;
          tmp = obj;
          if (0 === closure_55) {
            tmp = peg$fail;
            tmp = closure_32;
            tmp = peg$fail(closure_32);
          }
        }
        tmp = obj;
        if (tmp !== obj) {
          tmp = peg$parse_;
          tmp = peg$parse_();
          tmp = peg$parseNUM;
          tmp = peg$parseNUM();
          tmp = obj;
          if (tmp !== obj) {
            tmp = peg$parse_;
            tmp = peg$parse_();
            tmp = str;
            tmp = closure_50;
            if (41 === str.charCodeAt(closure_50)) {
              tmp = c4;
              tmp = closure_50;
              closure_50 = closure_50 + 1;
            } else {
              tmp = closure_55;
              tmp = obj;
              if (0 === closure_55) {
                tmp = peg$fail;
                tmp = closure_21;
                tmp = peg$fail(closure_21);
              }
            }
            tmp = obj;
            if (tmp !== obj) {
              tmp = peg$parse_;
              tmp = peg$parse_();
              closure_51 = tmp;
              tmp = peg$f7;
              tmp = peg$f7(tmp);
            } else {
              closure_50 = tmp;
              tmp = obj;
            }
          } else {
            closure_50 = tmp;
            tmp = obj;
          }
        } else {
          closure_50 = tmp;
          tmp = obj;
        }
        tmp = closure_55;
        closure_55 = closure_55 - 1;
        tmp = obj;
        tmp10 = tmp;
        if (tmp === obj) {
          tmp = closure_55;
          tmp10 = tmp;
          if (0 === closure_55) {
            tmp = peg$fail;
            tmp = closure_31;
            tmp = peg$fail(closure_31);
            tmp10 = tmp;
          }
        }
      }
      closure_55 = closure_55 - 1;
      if (tmp10 === obj) {
        tmp = closure_55;
        if (0 === closure_55) {
          tmp = peg$fail;
          tmp = closure_18;
          tmp = peg$fail(closure_18);
        }
      }
      return tmp10;
    }
    function peg$parsespaceOrComma() {
      diff = diff + 1;
      const items = [];
      const charAtResult = str.charAt(closure_50);
      if (regex.test(charAtResult)) {
        closure_50 = closure_50 + 1;
        let tmp4 = charAtResult;
      } else {
        tmp4 = obj;
        if (0 === diff) {
          peg$fail(closure_34);
          tmp4 = tmp2;
        }
      }
      if (tmp4 !== obj) {
        do {
          let arr = items.push(tmp4);
          let tmp10 = str;
          let tmp11 = closure_50;
          let charAtResult1 = str.charAt(closure_50);
          let tmp13 = regex;
          if (regex.test(charAtResult1)) {
            let tmp19 = closure_50;
            closure_50 = closure_50 + 1;
            tmp4 = charAtResult1;
          } else {
            let tmp15 = diff;
            tmp4 = obj;
            if (0 === diff) {
              let tmp16 = peg$fail;
              let tmp17 = closure_34;
              let tmp18 = peg$fail(closure_34);
              tmp4 = tmp14;
            }
          }
          let tmp20 = obj;
        } while (tmp4 !== obj);
      }
      diff = diff - 1;
      if (0 === diff) {
        peg$fail(closure_33);
      }
      return items;
    }
    function peg$parse_() {
      diff = diff + 1;
      const items = [];
      const charAtResult = str.charAt(closure_50);
      if (regex2.test(charAtResult)) {
        closure_50 = closure_50 + 1;
        let tmp4 = charAtResult;
      } else {
        tmp4 = obj;
        if (0 === diff) {
          peg$fail(closure_36);
          tmp4 = tmp2;
        }
      }
      if (tmp4 !== obj) {
        do {
          let arr = items.push(tmp4);
          let tmp10 = str;
          let tmp11 = closure_50;
          let charAtResult1 = str.charAt(closure_50);
          let tmp13 = regex2;
          if (regex2.test(charAtResult1)) {
            let tmp19 = closure_50;
            closure_50 = closure_50 + 1;
            tmp4 = charAtResult1;
          } else {
            let tmp15 = diff;
            tmp4 = obj;
            if (0 === diff) {
              let tmp16 = peg$fail;
              let tmp17 = closure_36;
              let tmp18 = peg$fail(closure_36);
              tmp4 = tmp14;
            }
          }
          let tmp20 = obj;
        } while (tmp4 !== obj);
      }
      diff = diff - 1;
      if (0 === diff) {
        peg$fail(closure_35);
      }
      return items;
    }
    function peg$parseNUM() {
      if (regex3.test(str.charAt(charAtResult4))) {
        charAtResult4 = charAtResult4 + 1;
      } else if (0 === closure_55) {
        peg$fail(closure_37);
      }
      const items = [];
      const charAtResult = str.charAt(charAtResult4);
      if (regex4.test(charAtResult)) {
        charAtResult4 = charAtResult4 + 1;
        let tmp11 = charAtResult;
      } else {
        tmp11 = obj;
        if (0 === closure_55) {
          peg$fail(closure_38);
          tmp11 = tmp9;
        }
      }
      if (tmp11 !== obj) {
        do {
          let arr = items.push(tmp11);
          let tmp17 = str;
          let tmp18 = charAtResult4;
          let charAtResult1 = str.charAt(charAtResult4);
          let tmp20 = regex4;
          if (regex4.test(charAtResult1)) {
            let tmp26 = charAtResult4;
            charAtResult4 = charAtResult4 + 1;
            tmp11 = charAtResult1;
          } else {
            let tmp22 = closure_55;
            tmp11 = obj;
            if (0 === closure_55) {
              let tmp23 = peg$fail;
              let tmp24 = closure_38;
              let tmp25 = peg$fail(closure_38);
              tmp11 = tmp21;
            }
          }
          let tmp27 = obj;
        } while (tmp11 !== obj);
      }
      if (46 === str.charCodeAt(charAtResult4)) {
        let tmp30 = c10;
        charAtResult4 = charAtResult4 + 1;
      } else {
        tmp30 = obj;
        if (0 === closure_55) {
          peg$fail(closure_39);
          tmp30 = tmp28;
        }
      }
      if (tmp30 !== obj) {
        const items1 = [];
        const charAtResult2 = str.charAt(charAtResult4);
        if (regex4.test(charAtResult2)) {
          charAtResult4 = charAtResult4 + 1;
          let tmp42 = charAtResult2;
        } else {
          tmp42 = obj;
          if (0 === closure_55) {
            peg$fail(closure_38);
            tmp42 = tmp40;
          }
        }
        if (tmp42 !== obj) {
          let tmp48 = items1;
          if (tmp42 !== obj) {
            do {
              arr = items1.push(tmp42);
              let tmp51 = str;
              let tmp52 = charAtResult4;
              let charAtResult3 = str.charAt(charAtResult4);
              let tmp54 = regex4;
              if (regex4.test(charAtResult3)) {
                let tmp60 = charAtResult4;
                charAtResult4 = charAtResult4 + 1;
                tmp42 = charAtResult3;
              } else {
                let tmp56 = closure_55;
                tmp42 = obj;
                if (0 === closure_55) {
                  let tmp57 = peg$fail;
                  let tmp58 = closure_38;
                  let tmp59 = peg$fail(closure_38);
                  tmp42 = tmp55;
                }
              }
              let tmp61 = obj;
              tmp48 = items1;
            } while (tmp42 !== obj);
          }
        } else {
          tmp48 = obj;
        }
        if (tmp48 !== obj) {
          const items2 = [items, tmp30, tmp48];
          let tmp35 = items2;
        } else {
          charAtResult4 = tmp7;
          tmp35 = obj;
        }
      } else {
        charAtResult4 = tmp7;
        tmp35 = obj;
      }
      if (tmp35 === obj) {
        const items3 = [];
        charAtResult4 = str;
        charAtResult4 = str.charAt(charAtResult4);
        charAtResult4 = regex4;
        if (regex4.test(charAtResult4)) {
          charAtResult4 = charAtResult4 + 1;
          let tmp65 = charAtResult4;
        } else {
          tmp65 = obj;
          if (0 === closure_55) {
            peg$fail(closure_38);
            tmp65 = tmp63;
          }
        }
        if (tmp65 !== obj) {
          tmp35 = items3;
          if (tmp65 !== obj) {
            do {
              let arr1 = items3.push(tmp65);
              let tmp73 = str;
              let tmp74 = charAtResult4;
              let charAtResult5 = str.charAt(charAtResult4);
              let tmp76 = regex4;
              if (regex4.test(charAtResult5)) {
                let tmp82 = charAtResult4;
                charAtResult4 = charAtResult4 + 1;
                tmp65 = charAtResult5;
              } else {
                let tmp78 = closure_55;
                tmp65 = obj;
                if (0 === closure_55) {
                  let tmp79 = peg$fail;
                  let tmp80 = closure_38;
                  let tmp81 = peg$fail(closure_38);
                  tmp65 = tmp77;
                }
              }
              let tmp83 = obj;
              tmp35 = items3;
            } while (tmp65 !== obj);
          }
        } else {
          tmp35 = obj;
        }
      }
      if (tmp35 !== obj) {
        let items5 = charAtResult4;
        if (101 === str.charCodeAt(charAtResult4)) {
          let tmp88 = e;
          charAtResult4 = charAtResult4 + 1;
        } else {
          tmp88 = obj;
          if (0 === closure_55) {
            peg$fail(closure_40);
            tmp88 = tmp86;
          }
        }
        if (tmp88 !== obj) {
          const charAtResult6 = str.charAt(charAtResult4);
          if (regex3.test(charAtResult6)) {
            charAtResult4 = charAtResult4 + 1;
            charAtResult4 = charAtResult6;
          } else {
            charAtResult4 = obj;
            if (0 === closure_55) {
              charAtResult4 = peg$fail;
              charAtResult4 = closure_37;
              charAtResult4 = peg$fail(closure_37);
              charAtResult4 = tmp98;
            }
          }
          charAtResult4 = obj;
          if (charAtResult4 === obj) {
            charAtResult4 = null;
          }
          const items4 = [];
          charAtResult4 = str;
          charAtResult4 = str.charAt(charAtResult4);
          charAtResult4 = regex4;
          if (regex4.test(charAtResult4)) {
            charAtResult4 = charAtResult4 + 1;
          } else {
            charAtResult4 = closure_55;
            charAtResult4 = obj;
            if (0 === closure_55) {
              charAtResult4 = peg$fail;
              charAtResult4 = closure_38;
              charAtResult4 = peg$fail(closure_38);
            }
          }
          charAtResult4 = obj;
          if (charAtResult4 !== obj) {
            charAtResult4 = obj;
            charAtResult4 = items4;
            if (charAtResult4 !== obj) {
              do {
                charAtResult4 = items4.push(charAtResult4);
                charAtResult4 = str;
                charAtResult4 = str.charAt(charAtResult4);
                charAtResult4 = regex4;
                if (regex4.test(charAtResult4)) {
                  charAtResult4 = charAtResult4 + 1;
                } else {
                  charAtResult4 = closure_55;
                  charAtResult4 = obj;
                  if (0 === closure_55) {
                    charAtResult4 = peg$fail;
                    charAtResult4 = closure_38;
                    charAtResult4 = peg$fail(closure_38);
                  }
                }
                charAtResult4 = obj;
                charAtResult4 = items4;
              } while (charAtResult4 !== obj);
            }
          } else {
            charAtResult4 = obj;
          }
          charAtResult4 = obj;
          if (charAtResult4 !== obj) {
            items5 = [tmp88, charAtResult4, charAtResult4];
          } else {
            charAtResult4 = items5;
          }
        } else {
          charAtResult4 = items5;
        }
        charAtResult4 = peg$f8;
        charAtResult4 = peg$f8();
      } else {
        return obj;
      }
    }
    obj = {};
    if (undefined === arg1) {
      obj = {};
    }
    const grammarSource = obj.grammarSource;
    obj = { start: peg$parsestart };
    let c3 = "matrix(";
    let c4 = ")";
    let c5 = "translate(";
    let c6 = "scale(";
    let c7 = "rotate(";
    let c8 = "skewX(";
    let c9 = "skewY(";
    let c10 = ".";
    const e = "e";
    const re12 = /^[ \t\n\r,]/;
    const re13 = /^[ \t\n\r]/;
    const re14 = /^[+\-]/;
    const re15 = /^[0-9]/;
    let closure_16 = peg$otherExpectation("transform functions");
    let closure_17 = peg$otherExpectation("transformFunctions");
    let closure_18 = peg$otherExpectation("transform function");
    let closure_19 = peg$otherExpectation("matrix");
    let closure_20 = peg$literalExpectation("matrix(", false);
    let closure_21 = peg$literalExpectation(")", false);
    let closure_22 = peg$otherExpectation("translate");
    let closure_23 = peg$literalExpectation("translate(", false);
    let closure_24 = peg$otherExpectation("scale");
    let closure_25 = peg$literalExpectation("scale(", false);
    let closure_26 = peg$otherExpectation("rotate");
    let closure_27 = peg$literalExpectation("rotate(", false);
    let closure_28 = peg$otherExpectation("x, y");
    let closure_29 = peg$otherExpectation("skewX");
    let closure_30 = peg$literalExpectation("skewX(", false);
    let closure_31 = peg$otherExpectation("skewY");
    let closure_32 = peg$literalExpectation("skewY(", false);
    let closure_33 = peg$otherExpectation("space or comma");
    let closure_34 = peg$classExpectation([" ", "\t", "\n", "\r", ","], false, false);
    let closure_35 = peg$otherExpectation("whitespace");
    let closure_36 = peg$classExpectation([" ", "\t", "\n", "\r"], false, false);
    let closure_37 = peg$classExpectation(["+", "-"], false, false);
    let items = [["0", "9"]];
    let closure_38 = peg$classExpectation(items, false, false);
    let closure_39 = peg$literalExpectation(".", false);
    let closure_40 = peg$literalExpectation("e", false);
    function peg$f0(arg0, items) {
      let tmp = arg0;
      if (!Array.isArray(arg0)) {
        items = [arg0];
        tmp = items;
      }
      let closure_0 = tmp;
      const item = items.forEach((arg0) => {
        const push = tmp.push;
        if (Array.isArray(arg0[1])) {
          push.apply(tmp, tmp(arg0[1]));
        } else {
          push(arg0[1]);
        }
      });
      return tmp;
    }
    function peg$f1(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
      const matrix = [arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8];
      return { matrix };
    }
    function peg$f2(translate, arg1) {
      if (null == arg1) {
        let obj = { translate };
      } else {
        obj = {};
        const items = [translate, arg1];
        obj.translate = items;
      }
      return obj;
    }
    function peg$f3(scale, scaleY) {
      if (null == scaleY) {
        let obj = { scale };
        let items = obj;
      } else {
        obj = { scaleX: scale };
        items = [obj, ];
        obj = { scaleY };
        items[1] = obj;
      }
      return items;
    }
    function peg$f4(arg0, arg1) {
      if (null !== arg1) {
        let obj = {};
        const _HermesInternal2 = HermesInternal;
        obj.rotate = "" + arg0 + "deg";
        let items = obj;
      } else {
        obj = {};
        const _HermesInternal = HermesInternal;
        obj.rotate = "" + arg0 + "deg";
        items = [obj];
      }
      return items;
    }
    function peg$f5(arg0, arg1) {
      const items = [arg0, arg1];
      return items;
    }
    function peg$f6(arg0) {
      const items = [{ skewX: "" + arg0 + "deg" }];
      return items;
    }
    function peg$f7(arg0) {
      const items = [{ skewY: "" + arg0 + "deg" }];
      return items;
    }
    function peg$f8() {
      return parseFloat(str.substring(closure_51, closure_50));
    }
    let closure_50 = tmp;
    let closure_51 = tmp;
    let items1 = [{ line: 1, column: 1 }];
    let closure_53 = closure_50;
    let closure_54 = obj.peg$maxFailExpected || [];
    let closure_55 = obj.peg$silentFails | 0;
    if (obj.startRule) {
      if (obj.startRule in obj) {
        peg$parsestart = obj[obj.startRule];
      } else {
        const _Error = Error;
        const error = new Error("Can't start parsing from rule \"" + obj.startRule + "\".");
        throw error;
      }
    }
    const result = peg$parsestart();
    if (obj.peg$library) {
      const obj1 = { peg$result: result, peg$currPos: closure_50, peg$FAILED: obj, peg$maxFailExpected: closure_54, peg$maxFailPos: closure_53 };
      return obj1;
    } else {
      let tmp8 = result !== obj;
      if (tmp8) {
        if (closure_50 === str.length) {
          return result;
        }
      }
      if (tmp8) {
        tmp8 = closure_50 < str.length;
      }
      if (tmp8) {
        const obj2 = { type: "end" };
        const result1 = peg$fail(obj2);
      }
      let charAtResult = null;
      if (closure_53 < str.length) {
        charAtResult = str.charAt(closure_53);
      }
      if (closure_53 < str.length) {
        let result2 = peg$computeLocation(closure_53, closure_53 + 1);
      } else {
        result2 = peg$computeLocation(closure_53, closure_53);
      }
      const prototype2 = obj.prototype;
      let tmp26 = new obj(obj.buildMessage(closure_54, charAtResult), closure_54, charAtResult, result2);
      throw tmp26;
    }
  }
};
