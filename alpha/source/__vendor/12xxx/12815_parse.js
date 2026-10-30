// Module ID: 12815
// Function ID: 12816
// Name: parse
// Dependencies: [12816]

// Module 12815 (parse)
import SyntaxError from "SyntaxError" /* 12816 */;

let uint32Array;
function readMultiplierRange(eat) {
  let num;
  eat.eat(123);
  let pos = eat.pos;
  let tmp2 = pos;
  if (pos < eat.str.length) {
    const str = eat.str;
    const charCodeAtResult = str.charCodeAt(pos);
    tmp2 = pos;
    while (charCodeAtResult >= 48) {
      tmp2 = pos;
      if (charCodeAtResult > 57) {
        break;
      } else {
        pos = pos + 1;
        tmp2 = pos;
        if (pos >= eat.str.length) {
          break;
        }
      }
    }
  }
  if (eat.pos === tmp2) {
    eat.error("Expect a number");
  }
  const substringToPosResult = eat.substringToPos(tmp2);
  let substringToPosResult1 = substringToPosResult;
  if (44 === eat.charCode()) {
    eat.pos = eat.pos + 1;
    substringToPosResult1 = null;
    if (125 !== eat.charCode()) {
      let pos2 = eat.pos;
      let tmp8 = pos2;
      if (pos2 < eat.str.length) {
        const str3 = eat.str;
        const charCodeAtResult1 = str3.charCodeAt(pos2);
        tmp8 = pos2;
        while (charCodeAtResult1 >= 48) {
          tmp8 = pos2;
          if (charCodeAtResult1 > 57) {
            break;
          } else {
            pos2 = pos2 + 1;
            tmp8 = pos2;
            if (pos2 >= eat.str.length) {
              break;
            }
          }
        }
      }
      if (eat.pos === tmp8) {
        eat.error("Expect a number");
      }
      substringToPosResult1 = eat.substringToPos(tmp8);
    }
  }
  eat.eat(125);
  const range = { min: Number(substringToPosResult), max: num };
  num = 0;
  if (substringToPosResult1) {
    const _Number = Number;
    num = Number(substringToPosResult1);
  }
  return range;
}
function maybeMultiplied(charCode, term) {
  let flag;
  let range;
  const charCodeResult = charCode.charCode();
  if (42 === charCodeResult) {
    charCode.pos = charCode.pos + 1;
    range = { min: 0, max: 0 };
    flag = false;
  } else if (43 === charCodeResult) {
    charCode.pos = charCode.pos + 1;
    range = { min: 1, max: 0 };
    flag = false;
  } else {
    let tmp2;
    if (63 === charCodeResult) {
      charCode.pos = charCode.pos + 1;
      range = { min: 0, max: 1 };
      flag = false;
    } else if (35 === charCodeResult) {
      let range1;
      charCode.pos = charCode.pos + 1;
      if (charCode.charCode() === 123) {
        range1 = readMultiplierRange(charCode);
      } else {
        range1 = { min: 1, max: 0 };
      }
      flag = true;
      range = range1;
    } else {
      tmp2 = null;
      if (123 === charCodeResult) {
        range = readMultiplierRange(charCode);
        flag = false;
      }
    }
    let tmp6 = term;
    if (null !== tmp2) {
      tmp2.term = term;
      tmp6 = tmp2;
    }
    return tmp6;
  }
  const range2 = { type: "Multiplier", comma: flag, min: range.min, max: range.max, term: null };
  tmp2 = range2;
}
function readImplicitGroup(pos) {
  let str;
  const items = [];
  const obj = {};
  pos = pos.pos;
  let iter = peek(pos);
  let tmp = null;
  let tmp2 = pos;
  let tmp3 = null;
  while (iter) {
    let pos2 = pos;
    let tmp7 = tmp;
    if ("Spaces" !== iter.type) {
      if ("Combinator" === iter.type) {
        let tmp10 = null !== tmp && "Combinator" !== tmp.type;
        if (!tmp10) {
          pos.pos = pos;
          let errorResult = pos.error("Unexpected combinator");
        }
        obj[iter.value] = true;
      } else {
        let tmp8 = null !== tmp && "Combinator" !== tmp.type;
        if (tmp8) {
          obj[" "] = true;
          let arr = items.push({ type: "Combinator", value: " " });
        }
      }
      let arr2 = items.push(iter);
      pos2 = pos.pos;
      tmp7 = iter;
    }
    iter = peek(pos);
    pos = pos2;
    tmp = tmp7;
    tmp2 = pos2;
    tmp3 = tmp7;
  }
  const tmp14 = null !== tmp3 && "Combinator" === tmp3.type;
  if (tmp14) {
    pos.pos = pos.pos - tmp2;
    pos.error("Unexpected combinator");
  }
  const obj2 = { type: "Group", terms: items, combinator: str, disallowEmpty: false, explicit: false };
  const keys = Object.keys(obj);
  const sorted = keys.sort((arg0, arg1) => closure_1_3[arg0] - closure_1_3[arg1]);
  str = undefined;
  while (sorted.length > 0) {
    let arr5 = sorted.shift();
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;
    if (0 < items.length) {
      do {
        let iter2 = items[num2];
        let tmp19 = num;
        let tmp20 = num2;
        if ("Combinator" === iter2.type) {
          let diff1;
          let num5;
          if (iter2.value === arr5) {
            let diff = num;
            if (-1 === num) {
              diff = num2 - 1;
            }
            let spliceResult = items.splice(num2, 1);
            diff1 = num2 - 1;
            num5 = diff;
          } else {
            let tmp21 = -1 !== num;
            if (-1 !== num) {
              tmp21 = num2 - num > 1;
            }
            diff1 = num2;
            if (tmp21) {
              let splice = items.splice;
              let obj3 = { type: "Group", terms: items.slice(num, num2), combinator: arr5, disallowEmpty: false, explicit: false };
              let spliceResult1 = splice(num, num2 - num, obj3);
              diff1 = num + 1;
            }
            num5 = -1;
          }
          tmp19 = num5;
          tmp20 = diff1;
        }
        num2 = tmp20 + 1;
        num = tmp19;
        num3 = tmp19;
        num4 = num2;
      } while (num2 < items.length);
    }
    let length = -1 !== num3;
    if (-1 !== num3) {
      length = sorted.length;
    }
    if (length) {
      let splice2 = items.splice;
      let obj4 = { type: "Group", terms: items.slice(num3, num4), combinator: arr5, disallowEmpty: false, explicit: false };
      let splice2Result = splice2(num3, num4 - num3, obj4);
    }
    str = arr5;
  }
  if (!str) {
    str = " ";
  }
  return obj2;
}
function peek(charCode) {
  const charCodeResult = charCode.charCode();
  if (charCodeResult < 128) {
    if (1 === uint32Array[charCodeResult]) {
      let tmp79;
      let pos6 = charCode.pos;
      let tmp72 = pos6;
      if (pos6 < charCode.str.length) {
        const str17 = charCode.str;
        const charCodeAtResult = str17.charCodeAt(pos6);
        tmp72 = pos6;
        while (charCodeAtResult < 128) {
          tmp72 = pos6;
          if (0 === uint32Array[charCodeAtResult]) {
            break;
          } else {
            pos6 = pos6 + 1;
            tmp72 = pos6;
            if (pos6 >= charCode.str.length) {
              break;
            }
          }
        }
      }
      if (charCode.pos === tmp72) {
        charCode.error("Expect a keyword");
      }
      const substringToPosResult = charCode.substringToPos(tmp72);
      if (40 === charCode.charCode()) {
        charCode.pos = charCode.pos + 1;
        tmp79 = { type: "Function", name: substringToPosResult };
        const obj2 = { type: "Function", name: substringToPosResult };
      } else {
        const obj3 = { type: "Keyword", name: substringToPosResult };
        tmp79 = maybeMultiplied(charCode, obj3);
      }
      return tmp79;
    }
  }
  if (93 !== charCodeResult) {
    if (91 === charCodeResult) {
      charCode.eat(91);
      const tmp70 = readImplicitGroup(charCode);
      charCode.eat(93);
      tmp70.explicit = true;
      const tmp67 = maybeMultiplied;
      if (33 === charCode.charCode()) {
        charCode.pos = charCode.pos + 1;
        tmp70.disallowEmpty = true;
      }
      return tmp67(charCode, tmp70);
    } else if (60 === charCodeResult) {
      let tmp55;
      if (39 === charCode.nextCharCode()) {
        charCode.eat(60);
        charCode.eat(39);
        let pos5 = charCode.pos;
        let tmp58 = pos5;
        if (pos5 < charCode.str.length) {
          const str15 = charCode.str;
          const charCodeAtResult1 = str15.charCodeAt(pos5);
          tmp58 = pos5;
          while (charCodeAtResult1 < 128) {
            tmp58 = pos5;
            if (0 === uint32Array[charCodeAtResult1]) {
              break;
            } else {
              pos5 = pos5 + 1;
              tmp58 = pos5;
              if (pos5 >= charCode.str.length) {
                break;
              }
            }
          }
        }
        if (charCode.pos === tmp58) {
          charCode.error("Expect a keyword");
        }
        const substringToPosResult1 = charCode.substringToPos(tmp58);
        charCode.eat(39);
        charCode.eat(62);
        const obj4 = { type: "Property", name: substringToPosResult1 };
        tmp55 = maybeMultiplied(charCode, obj4);
      } else {
        charCode.eat(60);
        let pos2 = charCode.pos;
        let tmp24 = pos2;
        if (pos2 < charCode.str.length) {
          const str8 = charCode.str;
          const charCodeAtResult2 = str8.charCodeAt(pos2);
          tmp24 = pos2;
          while (charCodeAtResult2 < 128) {
            tmp24 = pos2;
            if (0 === uint32Array[charCodeAtResult2]) {
              break;
            } else {
              pos2 = pos2 + 1;
              tmp24 = pos2;
              if (pos2 >= charCode.str.length) {
                break;
              }
            }
          }
        }
        if (charCode.pos === tmp24) {
          charCode.error("Expect a keyword");
        }
        const substringToPosResult2 = charCode.substringToPos(tmp24);
        let text = substringToPosResult2;
        const tmp28 = 40 === charCode.charCode() && 41 === charCode.nextCharCode();
        if (tmp28) {
          charCode.pos = charCode.pos + 2;
          text = `${tmp27}()`;
        }
        let tmp31 = null;
        if (91 === charCode.charCodeAt(charCode.findWsEnd(charCode.pos))) {
          charCode.substringToPos(charCode.findWsEnd(charCode.pos));
          charCode.eat(91);
          let num21 = 1;
          let num14 = 1;
          if (45 === charCode.charCode()) {
            charCode.peek();
            num14 = -1;
          }
          if (-1 === num14) {
            let result1;
            let result;
            let tmp52;
            if (8734 === charCode.charCode()) {
              charCode.peek();
              result1 = null;
            }
            charCode.substringToPos(charCode.findWsEnd(charCode.pos));
            charCode.eat(44);
            charCode.substringToPos(charCode.findWsEnd(charCode.pos));
            if (8734 === charCode.charCode()) {
              charCode.peek();
              result = null;
            } else {
              if (45 === charCode.charCode()) {
                charCode.peek();
                num21 = -1;
              }
              let pos4 = charCode.pos;
              let tmp45 = pos4;
              const _Number2 = Number;
              if (pos4 < charCode.str.length) {
                const str13 = charCode.str;
                const charCodeAtResult3 = str13.charCodeAt(pos4);
                tmp45 = pos4;
                while (charCodeAtResult3 >= 48) {
                  tmp45 = pos4;
                  if (charCodeAtResult3 > 57) {
                    break;
                  } else {
                    pos4 = pos4 + 1;
                    tmp45 = pos4;
                    if (pos4 >= charCode.str.length) {
                      break;
                    }
                  }
                }
              }
              if (charCode.pos === tmp45) {
                charCode.error("Expect a number");
              }
              result = num21 * _Number2(charCode.substringToPos(tmp45));
            }
            charCode.eat(93);
            if (null !== result1) {
              const range = { type: "Range", min: result1, max: result };
              tmp52 = range;
            } else {
              tmp52 = null;
            }
            tmp31 = tmp52;
          }
          let pos3 = charCode.pos;
          let tmp34 = pos3;
          const _Number = Number;
          if (pos3 < charCode.str.length) {
            const str11 = charCode.str;
            const charCodeAtResult4 = str11.charCodeAt(pos3);
            tmp34 = pos3;
            while (charCodeAtResult4 >= 48) {
              tmp34 = pos3;
              if (charCodeAtResult4 > 57) {
                break;
              } else {
                pos3 = pos3 + 1;
                tmp34 = pos3;
                if (pos3 >= charCode.str.length) {
                  break;
                }
              }
            }
          }
          if (charCode.pos === tmp34) {
            charCode.error("Expect a number");
          }
          result1 = num14 * _Number(charCode.substringToPos(tmp34));
        }
        charCode.eat(62);
        const obj5 = { type: "Type", name: text, opts: tmp31 };
        tmp55 = maybeMultiplied(charCode, obj5);
      }
      return tmp55;
    } else if (124 === charCodeResult) {
      let sum;
      const substringToPos = charCode.substringToPos;
      if (124 === charCode.nextCharCode()) {
        sum = charCode.pos + 2;
      } else {
        sum = charCode.pos + 1;
      }
      const obj6 = { type: "Combinator", value: substringToPos(sum) };
      return obj6;
    } else if (38 === charCodeResult) {
      charCode.pos = charCode.pos + 1;
      charCode.eat(38);
      return { type: "Combinator", value: "&&" };
    } else if (44 === charCodeResult) {
      charCode.pos = charCode.pos + 1;
      return { type: "Comma" };
    } else if (39 === charCodeResult) {
      const str1 = charCode.str;
      const index = str1.indexOf("'", charCode.pos + 1);
      const tmp17 = maybeMultiplied;
      if (-1 === index) {
        charCode.pos = charCode.str.length;
        charCode.error("Expect an apostrophe");
      }
      const obj7 = { type: "String", value: charCode.substringToPos(index + 1) };
      return tmp17(charCode, obj7);
    } else {
      if (32 !== charCodeResult) {
        if (9 !== charCodeResult) {
          if (10 !== charCodeResult) {
            if (13 !== charCodeResult) {
              if (12 !== charCodeResult) {
                if (64 === charCodeResult) {
                  let tmp11;
                  const nextCharCodeResult = charCode.nextCharCode();
                  if (nextCharCodeResult < 128) {
                    if (1 === uint32Array[nextCharCodeResult]) {
                      charCode.pos = charCode.pos + 1;
                      let pos = charCode.pos;
                      let tmp12 = pos;
                      if (pos < charCode.str.length) {
                        const str4 = charCode.str;
                        const charCodeAtResult5 = str4.charCodeAt(pos);
                        tmp12 = pos;
                        while (charCodeAtResult5 < 128) {
                          tmp12 = pos;
                          if (0 === uint32Array[charCodeAtResult5]) {
                            break;
                          } else {
                            pos = pos + 1;
                            tmp12 = pos;
                            if (pos >= charCode.str.length) {
                              break;
                            }
                          }
                        }
                      }
                      if (charCode.pos === tmp12) {
                        charCode.error("Expect a keyword");
                      }
                      tmp11 = { type: "AtKeyword", name: charCode.substringToPos(tmp12) };
                      const obj8 = { type: "AtKeyword", name: charCode.substringToPos(tmp12) };
                    }
                    return tmp11;
                  }
                  const peekResult4 = charCode.peek();
                  tmp11 = null;
                  if ("" !== peekResult4) {
                    tmp11 = { type: "Token", value: peekResult4 };
                    const obj9 = { type: "Token", value: peekResult4 };
                  }
                } else if (42 !== charCodeResult) {
                  if (43 !== charCodeResult) {
                    if (63 !== charCodeResult) {
                      if (35 !== charCodeResult) {
                        if (33 !== charCodeResult) {
                          if (123 === charCodeResult) {
                            charCode.nextCharCode();
                            const peekResult5 = charCode.peek();
                            let tmp7 = null;
                            if ("" !== peekResult5) {
                              tmp7 = { type: "Token", value: peekResult5 };
                              const obj10 = { type: "Token", value: peekResult5 };
                            }
                            return tmp7;
                          } else {
                            const peekResult6 = charCode.peek();
                            let tmp4 = null;
                            if ("" !== peekResult6) {
                              tmp4 = { type: "Token", value: peekResult6 };
                              const obj = { type: "Token", value: peekResult6 };
                            }
                            return tmp4;
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
      const obj11 = { type: "Spaces", value: charCode.substringToPos(charCode.findWsEnd(charCode.pos)) };
      return obj11;
    }
  }
}
if (typeof Uint32Array === "function") {
  const _Uint32Array = Uint32Array;
  const self = this;
  let num = 128;
  const self2 = this;
  uint32Array = new Uint32Array(128);
} else {
  const _Array = Array;
  const self3 = this;
  let num4 = 128;
  const self4 = this;
  uint32Array = new Array(128);
}
let num2 = 0;
do {
  let _String = String;
  let obj = /[a-zA-Z0-9\-]/;
  let tmp2 = num2;
  let num3 = 0;
  if (obj.test(String.fromCharCode(num2))) {
    num3 = 1;
  }
  uint32Array[num2] = num3;
  num2 = num2 + 1;
} while (num2 < 128);
let closure_3 = { " ": 1, "&&": 2, "||": 3, "|": 4 };
let obj2 = new SyntaxError("[a&&<b>#|<'c'>*||e() f{2} /,(% g#{1,2} h{2,})]!");
const implicitGroup = readImplicitGroup(obj2);
if (obj2.pos !== "[a&&<b>#|<'c'>*||e() f{2} /,(% g#{1,2} h{2,})]!".length) {
  let str = "Unexpected input";
  let errorResult = obj2.error("Unexpected input");
}
let tmp5 = 1 === implicitGroup.terms.length;
if (tmp5) {
  tmp5 = "Group" === implicitGroup.terms[0].type;
}
if (tmp5) {
  let first = implicitGroup.terms[0];
}

export default function parse(arg0) {
  const obj = new SyntaxError(arg0);
  const tmp = readImplicitGroup(obj);
  if (obj.pos !== arg0.length) {
    obj.error("Unexpected input");
  }
  let first = tmp;
  const tmp3 = 1 === tmp.terms.length && "Group" === tmp.terms[0].type;
  if (tmp3) {
    first = tmp.terms[0];
  }
  return first;
};
