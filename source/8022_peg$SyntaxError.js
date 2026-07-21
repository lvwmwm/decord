// Module ID: 8022
// Function ID: 63676
// Name: peg$SyntaxError
// Dependencies: []

// Module 8022 (peg$SyntaxError)
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
        text3 = `${tmp10} | ${closure_2("", start.column - 1, " ")}`;
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
      return str.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (arg0) => "\\x0" + callback(arg0)).replace(/[\x10-\x1F\x7F-\x9F]/g, (arg0) => "\\x" + callback(arg0));
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
      return str.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (arg0) => "\\x0" + callback(arg0)).replace(/[\x10-\x1F\x7F-\x9F]/g, (arg0) => "\\x" + callback(arg0));
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
      return closure_0[arg0.type](arg0);
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
        substr = require("module_0");
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
let closure_0 = require(dependencyMap[0]);
function peg$subclass(peg$SyntaxError, Error) {
  let closure_0 = peg$SyntaxError;
  class C {
    constructor() {
      this.constructor = peg$SyntaxError;
      return;
    }
  }
  C.prototype = Error.prototype;
  const c = new C();
  peg$SyntaxError.prototype = c;
}(peg$SyntaxError, Error);

export default {
  StartRules: [null],
  SyntaxError: peg$SyntaxError,
  parse: function peg$parse(str) {
    let obj = arg1;
    let closure_0 = str;
    function peg$literalExpectation(text, arg1) {
      return { text };
    }
    function peg$classExpectation(items, arg1, arg2) {
      const obj = { -220423012: "<string:2731409409>", -1100837713: "<string:18612225>", -409314618: "<string:474030736>", 1586135030: "<string:285213132>", parts: items };
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
            let tmp11 = closure_0;
            let tmp12 = diff;
            if (10 === closure_0.charCodeAt(diff)) {
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
      let obj = { source: grammarSource, start: obj, end: obj };
      obj = { offset: closure_53, line: tmp.line, column: tmp.column };
      obj = { offset: closure_532, line: tmp2.line, column: tmp2.column };
      if (undefined) {
        obj.start = grammarSource.offset(obj.start);
        obj.end = grammarSource.offset(obj.end);
      }
      return obj;
    }
    function peg$fail(arg0) {
      if (tmp >= closure_53) {
        if (tmp > closure_53) {
          closure_53 = tmp;
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
          const tmp = tmp4;
          tmp10 = obj;
        }
        if (tmp10 !== obj) {
          do {
            let arr = items.push(tmp10);
            let tmp14 = closure_60;
            let tmp13 = closure_50;
            let tmp16 = closure_58;
            let tmp15 = closure_60();
            let tmp17 = closure_58();
            let tmp18 = closure_1;
            if (tmp17 !== closure_1) {
              let items2 = [tmp15, tmp17];
              tmp10 = items2;
            } else {
              closure_50 = tmp13;
              tmp10 = closure_1;
            }
            let tmp19 = closure_1;
          } while (tmp10 !== closure_1);
        }
        let tmp3 = peg$f0(tmp2, items);
        const tmp4 = tmp;
        const tmp6 = peg$parse_();
      } else {
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
    function peg$parsefunction(self) {
      closure_55 = closure_55 + 1 + 1;
      peg$parse_();
      if (self.substr(tmp, 7) === closure_3) {
        let tmp5 = closure_3;
        let tmp = tmp + 7;
      } else {
        tmp5 = obj;
        if (0 === closure_55) {
          peg$fail(closure_20);
          tmp5 = tmp3;
        }
      }
      if (tmp5 !== obj) {
        peg$parse_();
        const tmp14 = peg$parseNUM();
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
                          if (41 === self.charCodeAt(tmp)) {
                            let tmp62 = closure_4;
                            tmp = tmp + 1;
                          } else {
                            tmp62 = obj;
                            if (0 === closure_55) {
                              peg$fail(closure_21);
                              tmp62 = tmp60;
                            }
                          }
                          if (tmp62 !== obj) {
                            peg$parse_();
                            let tmp10 = peg$f1(tmp14, tmp19, tmp24, tmp29, tmp34, tmp39, tmp44, tmp49, tmp54);
                          } else {
                            tmp10 = obj;
                          }
                        } else {
                          tmp10 = obj;
                        }
                      } else {
                        tmp10 = obj;
                      }
                    } else {
                      tmp10 = obj;
                    }
                  } else {
                    tmp10 = obj;
                  }
                } else {
                  tmp10 = obj;
                }
              } else {
                tmp10 = obj;
              }
            } else {
              tmp10 = obj;
            }
          } else {
            tmp10 = obj;
          }
        } else {
          tmp10 = obj;
        }
      } else {
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
        if (self.substr(tmp, 10) === closure_5) {
          let tmp94 = closure_5;
          tmp = tmp + 10;
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
            tmp = self;
            if (41 === self.charCodeAt(tmp)) {
              tmp = closure_4;
              tmp = tmp + 1;
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
              tmp = tmp86;
              tmp = peg$f2;
              tmp = peg$f2(tmp, tmp);
            } else {
              tmp = tmp86;
              tmp = obj;
            }
          } else {
            tmp = tmp86;
            tmp = obj;
          }
        } else {
          tmp = tmp86;
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
        tmp = peg$parse_;
        tmp = peg$parse_();
        tmp = self;
        tmp = closure_6;
        if (self.substr(tmp, 6) === closure_6) {
          tmp = closure_6;
          tmp = tmp + 6;
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
            tmp = self;
            if (41 === self.charCodeAt(tmp)) {
              tmp = closure_4;
              tmp = tmp + 1;
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
              tmp = peg$f3;
              tmp = peg$f3(tmp, tmp);
            } else {
              tmp = obj;
            }
          } else {
            tmp = obj;
          }
        } else {
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
        tmp = function peg$parserotate() {
          closure_55 = closure_55 + 1;
          callback5();
          if (closure_0.substr(tmp, 7) === closure_7) {
            let tmp5 = closure_7;
            let tmp = tmp + 7;
          } else {
            tmp5 = closure_1;
            if (0 === closure_55) {
              callback3(closure_27);
              tmp5 = tmp3;
            }
          }
          if (tmp5 !== closure_1) {
            callback5();
            const tmp14 = callback6();
            if (tmp14 !== closure_1) {
              closure_55 = closure_55 + 1;
              callback4();
              const tmp21 = callback6();
              if (tmp21 !== closure_1) {
                callback4();
                const tmp27 = callback6();
                if (tmp27 !== closure_1) {
                  tmp = tmp17;
                  let tmp23 = callback2(tmp21, tmp27);
                } else {
                  tmp = tmp17;
                  tmp23 = closure_1;
                }
              } else {
                tmp = tmp17;
                tmp23 = closure_1;
              }
              closure_55 = closure_55 - 1;
              if (tmp23 === closure_1) {
                if (0 === closure_55) {
                  callback3(closure_28);
                }
              }
              if (tmp23 === closure_1) {
                tmp23 = null;
              }
              callback5();
              if (41 === closure_0.charCodeAt(tmp)) {
                let tmp43 = closure_4;
                tmp = tmp + 1;
              } else {
                tmp43 = closure_1;
                if (0 === closure_55) {
                  callback3(closure_21);
                  tmp43 = tmp41;
                }
              }
              if (tmp43 !== closure_1) {
                callback5();
                let tmp10 = callback(tmp14, tmp23);
              } else {
                tmp10 = closure_1;
              }
            } else {
              tmp10 = closure_1;
            }
          } else {
            tmp10 = closure_1;
          }
          closure_55 = closure_55 - 1;
          if (tmp10 === closure_1) {
            if (0 === closure_55) {
              callback3(closure_26);
            }
          }
          return tmp10;
        }();
        tmp = obj;
        tmp84 = tmp === obj;
        tmp10 = tmp;
      }
      if (tmp84) {
        tmp = closure_55;
        closure_55 = closure_55 + 1;
        tmp = peg$parse_;
        tmp = peg$parse_();
        tmp = self;
        tmp = closure_8;
        if (self.substr(tmp, 6) === closure_8) {
          tmp = closure_8;
          tmp = tmp + 6;
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
            tmp = self;
            if (41 === self.charCodeAt(tmp)) {
              tmp = closure_4;
              tmp = tmp + 1;
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
              tmp = peg$f6;
              tmp = peg$f6(tmp);
            } else {
              tmp = obj;
            }
          } else {
            tmp = obj;
          }
        } else {
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
        tmp = peg$parse_;
        tmp = peg$parse_();
        tmp = self;
        tmp = closure_9;
        if (self.substr(tmp, 6) === closure_9) {
          tmp = closure_9;
          tmp = tmp + 6;
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
            tmp = self;
            if (41 === self.charCodeAt(tmp)) {
              tmp = closure_4;
              tmp = tmp + 1;
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
              tmp = peg$f7;
              tmp = peg$f7(tmp);
            } else {
              tmp = obj;
            }
          } else {
            tmp = obj;
          }
        } else {
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
      closure_55 = closure_55 + 1;
      const items = [];
      const charAtResult = arg0.charAt(closure_50);
      if (regex.test(charAtResult)) {
        closure_50 = closure_50 + 1;
        let tmp4 = charAtResult;
      } else {
        tmp4 = obj;
        if (0 === closure_55) {
          peg$fail(closure_34);
          tmp4 = tmp2;
        }
      }
      if (tmp4 !== obj) {
        do {
          let arr = items.push(tmp4);
          let tmp10 = closure_0;
          let tmp11 = closure_50;
          let charAtResult1 = closure_0.charAt(closure_50);
          let tmp13 = closure_12;
          if (closure_12.test(charAtResult1)) {
            let tmp19 = closure_50;
            closure_50 = closure_50 + 1;
            tmp4 = charAtResult1;
          } else {
            let tmp15 = closure_55;
            tmp4 = closure_1;
            if (0 === closure_55) {
              let tmp16 = closure_57;
              let tmp17 = closure_34;
              let tmp18 = closure_57(closure_34);
              tmp4 = tmp14;
            }
          }
          let tmp20 = closure_1;
        } while (tmp4 !== closure_1);
      }
      const diff = closure_55 - 1;
      closure_55 = diff;
      if (0 === diff) {
        peg$fail(closure_33);
      }
      return items;
    }
    function peg$parse_() {
      closure_55 = closure_55 + 1;
      const items = [];
      const charAtResult = arg0.charAt(closure_50);
      if (regex2.test(charAtResult)) {
        closure_50 = closure_50 + 1;
        let tmp4 = charAtResult;
      } else {
        tmp4 = obj;
        if (0 === closure_55) {
          peg$fail(closure_36);
          tmp4 = tmp2;
        }
      }
      if (tmp4 !== obj) {
        do {
          let arr = items.push(tmp4);
          let tmp10 = closure_0;
          let tmp11 = closure_50;
          let charAtResult1 = closure_0.charAt(closure_50);
          let tmp13 = closure_13;
          if (closure_13.test(charAtResult1)) {
            let tmp19 = closure_50;
            closure_50 = closure_50 + 1;
            tmp4 = charAtResult1;
          } else {
            let tmp15 = closure_55;
            tmp4 = closure_1;
            if (0 === closure_55) {
              let tmp16 = closure_57;
              let tmp17 = closure_36;
              let tmp18 = closure_57(closure_36);
              tmp4 = tmp14;
            }
          }
          let tmp20 = closure_1;
        } while (tmp4 !== closure_1);
      }
      const diff = closure_55 - 1;
      closure_55 = diff;
      if (0 === diff) {
        peg$fail(closure_35);
      }
      return items;
    }
    function peg$parseNUM(self) {
      let charAtResult4 = tmp;
      if (regex3.test(self.charAt(tmp))) {
        let tmp = tmp + 1;
      } else if (0 === closure_55) {
        peg$fail(closure_37);
      }
      const items = [];
      const charAtResult = self.charAt(tmp);
      if (regex4.test(charAtResult)) {
        tmp = tmp + 1;
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
          let tmp17 = closure_0;
          let tmp18 = closure_50;
          let charAtResult1 = closure_0.charAt(closure_50);
          let tmp20 = closure_15;
          if (closure_15.test(charAtResult1)) {
            let tmp26 = closure_50;
            closure_50 = closure_50 + 1;
            tmp11 = charAtResult1;
          } else {
            let tmp22 = closure_55;
            tmp11 = closure_1;
            if (0 === closure_55) {
              let tmp23 = closure_57;
              let tmp24 = closure_38;
              let tmp25 = closure_57(closure_38);
              tmp11 = tmp21;
            }
          }
          let tmp27 = closure_1;
        } while (tmp11 !== closure_1);
      }
      if (46 === self.charCodeAt(tmp)) {
        let tmp30 = closure_10;
        tmp = tmp + 1;
      } else {
        tmp30 = obj;
        if (0 === closure_55) {
          peg$fail(closure_39);
          tmp30 = tmp28;
        }
      }
      if (tmp30 !== obj) {
        const items1 = [];
        const charAtResult2 = self.charAt(tmp);
        if (regex4.test(charAtResult2)) {
          tmp = tmp + 1;
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
              let tmp51 = closure_0;
              let tmp52 = closure_50;
              let charAtResult3 = closure_0.charAt(closure_50);
              let tmp54 = closure_15;
              if (closure_15.test(charAtResult3)) {
                let tmp60 = closure_50;
                closure_50 = closure_50 + 1;
                tmp42 = charAtResult3;
              } else {
                let tmp56 = closure_55;
                tmp42 = closure_1;
                if (0 === closure_55) {
                  let tmp57 = closure_57;
                  let tmp58 = closure_38;
                  let tmp59 = closure_57(closure_38);
                  tmp42 = tmp55;
                }
              }
              let tmp61 = closure_1;
              tmp48 = items1;
            } while (tmp42 !== closure_1);
          }
        } else {
          tmp48 = obj;
        }
        if (tmp48 !== obj) {
          const items2 = [items, tmp30, tmp48];
          let tmp35 = items2;
        } else {
          tmp = tmp7;
          tmp35 = obj;
        }
      } else {
        tmp = tmp7;
        tmp35 = obj;
      }
      if (tmp35 === obj) {
        const items3 = [];
        charAtResult4 = self;
        charAtResult4 = tmp;
        charAtResult4 = self.charAt(tmp);
        charAtResult4 = regex4;
        if (regex4.test(charAtResult4)) {
          tmp = tmp + 1;
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
              let tmp73 = closure_0;
              let tmp74 = closure_50;
              let charAtResult5 = closure_0.charAt(closure_50);
              let tmp76 = closure_15;
              if (closure_15.test(charAtResult5)) {
                let tmp82 = closure_50;
                closure_50 = closure_50 + 1;
                tmp65 = charAtResult5;
              } else {
                let tmp78 = closure_55;
                tmp65 = closure_1;
                if (0 === closure_55) {
                  let tmp79 = closure_57;
                  let tmp80 = closure_38;
                  let tmp81 = closure_57(closure_38);
                  tmp65 = tmp77;
                }
              }
              let tmp83 = closure_1;
              tmp35 = items3;
            } while (tmp65 !== closure_1);
          }
        } else {
          tmp35 = obj;
        }
      }
      if (tmp35 !== obj) {
        let items5 = tmp;
        if (101 === self.charCodeAt(tmp)) {
          let tmp88 = closure_11;
          tmp = tmp + 1;
        } else {
          tmp88 = obj;
          if (0 === closure_55) {
            peg$fail(closure_40);
            tmp88 = tmp86;
          }
        }
        if (tmp88 !== obj) {
          const charAtResult6 = self.charAt(tmp);
          if (regex3.test(charAtResult6)) {
            charAtResult4 = tmp;
            tmp = tmp + 1;
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
          charAtResult4 = self;
          charAtResult4 = tmp;
          charAtResult4 = self.charAt(tmp);
          charAtResult4 = regex4;
          if (regex4.test(charAtResult4)) {
            charAtResult4 = tmp;
            tmp = tmp + 1;
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
                charAtResult4 = closure_0;
                charAtResult4 = closure_50;
                charAtResult4 = closure_0.charAt(closure_50);
                charAtResult4 = closure_15;
                if (closure_15.test(charAtResult4)) {
                  charAtResult4 = closure_50;
                  closure_50 = closure_50 + 1;
                } else {
                  charAtResult4 = closure_55;
                  charAtResult4 = closure_1;
                  if (0 === closure_55) {
                    charAtResult4 = closure_57;
                    charAtResult4 = closure_38;
                    charAtResult4 = closure_57(closure_38);
                  }
                }
                charAtResult4 = closure_1;
                charAtResult4 = items4;
              } while (charAtResult4 !== closure_1);
            }
          } else {
            charAtResult4 = obj;
          }
          charAtResult4 = obj;
          if (charAtResult4 !== obj) {
            items5 = [tmp88, charAtResult4, charAtResult4];
          } else {
            tmp = items5;
          }
        } else {
          tmp = items5;
        }
        tmp = charAtResult4;
        charAtResult4 = peg$f8;
        charAtResult4 = peg$f8();
      } else {
        tmp = charAtResult4;
        return obj;
      }
    }
    obj = {};
    const peg$SyntaxError = obj;
    if (undefined === arg1) {
      obj = {};
    }
    const peg$padEnd = obj.grammarSource;
    obj = { start: peg$parsestart };
    let closure_3 = "matrix(";
    let closure_4 = ")";
    let closure_5 = "translate(";
    let closure_6 = "scale(";
    let closure_7 = "rotate(";
    let closure_8 = "skewX(";
    let closure_9 = "skewY(";
    let closure_10 = ".";
    let closure_11 = "e";
    let closure_12 = /^[ \t\n\r,]/;
    let closure_13 = /^[ \t\n\r]/;
    let closure_14 = /^[+\-]/;
    let closure_15 = /^[0-9]/;
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
    let closure_34 = peg$classExpectation(["CONVERSATION_HAS_MORE_EXPIRATION_MS", 65205663640709140000000000000000000000000000000000000000000000000000000000000000000000000000, -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004509391987199782, 15193332984792478000000000000000000000000000000000000000000000000000000000000000000, 22895504.145245645], false, false);
    let closure_35 = peg$otherExpectation("whitespace");
    let closure_36 = peg$classExpectation([true, true, true, true], false, false);
    let closure_37 = peg$classExpectation([], false, false);
    const items = [[]];
    let closure_38 = peg$classExpectation(items, false, false);
    let closure_39 = peg$literalExpectation(".", false);
    let closure_40 = peg$literalExpectation("e", false);
    function peg$f0(arg0, items) {
      let tmp = arg0;
      if (!Array.isArray(arg0)) {
        items = [arg0];
        tmp = items;
      }
      arg0 = tmp;
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
      return parseFloat(arg0.substring(tmp, tmp));
    }
    const tmp = obj.peg$currPos | 0;
    const items1 = [{}];
    let closure_53 = tmp;
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
      const obj1 = { peg$result: result, peg$currPos: tmp, peg$FAILED: obj, peg$maxFailExpected: closure_54, peg$maxFailPos: closure_53 };
      return obj1;
    } else {
      let tmp8 = result !== obj;
      if (tmp8) {
        if (tmp === str.length) {
          return result;
        }
      }
      if (tmp8) {
        tmp8 = tmp < str.length;
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
      const prototype2 = peg$SyntaxError.prototype;
      const tmp26 = new peg$SyntaxError(peg$SyntaxError.buildMessage(closure_54, charAtResult), closure_54, charAtResult, result2);
      throw tmp26;
    }
  }
};
