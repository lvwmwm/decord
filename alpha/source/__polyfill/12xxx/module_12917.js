// Module ID: 12917
// Function ID: 12918
// Dependencies: [12915]
// Exports: stringify

// Module 12917
import SelectorType from "SelectorType" /* 12915 */;

const f102988 = (arr) => {
  const mapped = arr.map(stringifyToken);
  return mapped.join("");
};
function stringifyToken(type, arg1, arg2) {
  type = type.type;
  if (SelectorType.SelectorType.Child === type) {
    let str56 = " > ";
    if (0 === arg1) {
      str56 = "> ";
    }
    return str56;
  } else if (SelectorType.SelectorType.Parent === type) {
    let str55 = " < ";
    if (0 === arg1) {
      str55 = "< ";
    }
    return str55;
  } else if (SelectorType.SelectorType.Sibling === type) {
    let str54 = " ~ ";
    if (0 === arg1) {
      str54 = "~ ";
    }
    return str54;
  } else if (SelectorType.SelectorType.Adjacent === type) {
    let str53 = " + ";
    if (0 === arg1) {
      str53 = "+ ";
    }
    return str53;
  } else if (SelectorType.SelectorType.Descendant === type) {
    return " ";
  } else if (SelectorType.SelectorType.ColumnCombinator === type) {
    let str51 = " || ";
    if (0 === arg1) {
      str51 = "|| ";
    }
    return str51;
  } else if (SelectorType.SelectorType.Universal === type) {
    if ("*" === type.namespace) {
      let str49;
      if (arg1 + 1 < arg2.length) {
        str49 = "";
      }
      return str49;
    }
    const concat29 = "".concat;
    str49 = "".concat(getNamespace(type.namespace), "*");
  } else if (SelectorType.SelectorType.Tag === type) {
    const concat25 = "".concat;
    const combined = "".concat(getNamespace(type.namespace));
    const name = type.name;
    let num37 = 0;
    let str45 = "";
    let num38 = 0;
    let str46 = "";
    let num39 = 0;
    const concat26 = combined.concat;
    const obj9 = set2;
    if (0 < name.length) {
      do {
        let text = str45;
        let sum = num38;
        if (obj9.has(name.charCodeAt(num37))) {
          let concat27 = "".concat;
          let combined1 = "".concat(name.slice(num38, num37), "\\");
          let concat28 = combined1.concat;
          text = `${concat28(arr9.charAt(num37))}`;
          sum = num37 + 1;
        }
        num37 = num37 + 1;
        str45 = text;
        num38 = sum;
        str46 = text;
        num39 = sum;
      } while (num37 < name.length);
    }
    let sum1 = name;
    if (str46.length > 0) {
      sum1 = str46 + name.slice(num39);
    }
    return concat26(sum1);
  } else if (SelectorType.SelectorType.PseudoElement === type) {
    const name1 = type.name;
    let num29 = 0;
    let str37 = "";
    let num30 = 0;
    let str38 = "";
    let num31 = 0;
    const concat19 = "::".concat;
    const obj8 = set2;
    if (0 < name1.length) {
      do {
        let text1 = str37;
        let sum2 = num30;
        if (obj8.has(name1.charCodeAt(num29))) {
          let concat20 = "".concat;
          let combined2 = "".concat(name1.slice(num30, num29), "\\");
          let concat21 = combined2.concat;
          text1 = `${concat21(arr8.charAt(num29))}`;
          sum2 = num29 + 1;
        }
        num29 = num29 + 1;
        str37 = text1;
        num30 = sum2;
        str38 = text1;
        num31 = sum2;
      } while (num29 < name1.length);
    }
    let sum3 = name1;
    if (str38.length > 0) {
      sum3 = str38 + name1.slice(num31);
    }
    let str39 = "";
    const concat22 = concat19(sum3).concat;
    concat19(sum3);
    if (null !== type.data) {
      const data = type.data;
      let num32 = 0;
      let str40 = "";
      let num33 = 0;
      let str41 = "";
      let num34 = 0;
      const concat33 = "(".concat;
      const obj11 = set1;
      if (0 < data.length) {
        do {
          let text2 = str40;
          let sum4 = num33;
          if (obj11.has(data.charCodeAt(num32))) {
            let concat23 = "".concat;
            let combined3 = "".concat(data.slice(num33, num32), "\\");
            let concat24 = combined3.concat;
            text2 = `${concat24(arr11.charAt(num32))}`;
            sum4 = num32 + 1;
          }
          num32 = num32 + 1;
          str40 = text2;
          num33 = sum4;
          str41 = text2;
          num34 = sum4;
        } while (num32 < data.length);
      }
      let sum5 = data;
      if (str41.length > 0) {
        sum5 = str41 + data.slice(num34);
      }
      str39 = concat33(sum5, ")");
    }
    return concat22(str39);
  } else if (SelectorType.SelectorType.Pseudo === type) {
    const name2 = type.name;
    let num21 = 0;
    let str28 = "";
    let num22 = 0;
    let str29 = "";
    let num23 = 0;
    const concat13 = ":".concat;
    const obj6 = set2;
    if (0 < name2.length) {
      do {
        let text3 = str28;
        let sum6 = num22;
        if (obj6.has(name2.charCodeAt(num21))) {
          let concat14 = "".concat;
          let combined4 = "".concat(name2.slice(num22, num21), "\\");
          let concat15 = combined4.concat;
          text3 = `${concat15(arr6.charAt(num21))}`;
          sum6 = num21 + 1;
        }
        num21 = num21 + 1;
        str28 = text3;
        num22 = sum6;
        str29 = text3;
        num23 = sum6;
      } while (num21 < name2.length);
    }
    let sum7 = name2;
    if (str29.length > 0) {
      sum7 = str29 + name2.slice(num23);
    }
    let str30 = "";
    const concat16 = concat13(sum7).concat;
    concat13(sum7);
    if (null !== type.data) {
      let joined;
      const concat32 = "(".concat;
      if (typeof type.data === "string") {
        const data1 = type.data;
        let num24 = 0;
        let str31 = "";
        let num25 = 0;
        let str32 = "";
        let num26 = 0;
        const obj7 = set1;
        if (0 < data1.length) {
          do {
            let text4 = str31;
            let sum8 = num25;
            if (obj7.has(data1.charCodeAt(num24))) {
              let concat17 = "".concat;
              let combined5 = "".concat(data1.slice(num25, num24), "\\");
              let concat18 = combined5.concat;
              text4 = `${concat18(arr7.charAt(num24))}`;
              sum8 = num24 + 1;
            }
            num24 = num24 + 1;
            str31 = text4;
            num25 = sum8;
            str32 = text4;
            num26 = sum8;
          } while (num24 < data1.length);
        }
        let sum9 = data1;
        if (str32.length > 0) {
          sum9 = str32 + data1.slice(num26);
        }
        joined = sum9;
      } else {
        const data2 = type.data;
        let mapped = data2.map(f102988);
        joined = mapped.join(", ");
      }
      str30 = concat32(joined, ")");
    }
    return concat16(str30);
  } else if (SelectorType.SelectorType.Attribute === type) {
    let combined10;
    if ("id" === type.name) {
      if (type.action === SelectorType.AttributeAction.Equals) {
        if ("quirks" === type.ignoreCase) {
          if (!type.namespace) {
            const value = type.value;
            let num3 = 0;
            let str5 = "";
            let num4 = 0;
            let str6 = "";
            let num5 = 0;
            const concat = "#".concat;
            const obj = set2;
            if (0 < value.length) {
              do {
                let text5 = str5;
                let sum10 = num4;
                if (obj.has(value.charCodeAt(num3))) {
                  let concat2 = "".concat;
                  let combined6 = "".concat(value.slice(num4, num3), "\\");
                  let concat3 = combined6.concat;
                  text5 = `${concat3(arr.charAt(num3))}`;
                  sum10 = num3 + 1;
                }
                num3 = num3 + 1;
                str5 = text5;
                num4 = sum10;
                str6 = text5;
                num5 = sum10;
              } while (num3 < value.length);
            }
            let sum11 = value;
            if (str6.length > 0) {
              sum11 = str6 + value.slice(num5);
            }
            return concat(sum11);
          }
        }
      }
    }
    if ("class" === type.name) {
      if (type.action === SelectorType.AttributeAction.Element) {
        if ("quirks" === type.ignoreCase) {
          if (!type.namespace) {
            const value3 = type.value;
            let num8 = 0;
            let str11 = "";
            let num9 = 0;
            let str12 = "";
            let num10 = 0;
            const concat4 = ".".concat;
            const obj2 = set2;
            if (0 < value3.length) {
              do {
                let text6 = str11;
                let sum12 = num9;
                if (obj2.has(value3.charCodeAt(num8))) {
                  let concat5 = "".concat;
                  let combined7 = "".concat(value3.slice(num9, num8), "\\");
                  let concat6 = combined7.concat;
                  text6 = `${concat6(arr2.charAt(num8))}`;
                  sum12 = num8 + 1;
                }
                num8 = num8 + 1;
                str11 = text6;
                num9 = sum12;
                str12 = text6;
                num10 = sum12;
              } while (num8 < value3.length);
            }
            let sum13 = value3;
            if (str12.length > 0) {
              sum13 = str12 + value3.slice(num10);
            }
            return concat4(sum13);
          }
        }
      }
    }
    let str13 = "";
    const concat7 = "".concat;
    const combined8 = "".concat(getNamespace(type.namespace));
    const name3 = type.name;
    let num13 = 0;
    let str15 = "";
    let num14 = 0;
    let str16 = "";
    let num15 = 0;
    const concat8 = combined8.concat;
    const obj3 = set2;
    if (0 < name3.length) {
      do {
        let text7 = str15;
        let sum14 = num14;
        if (obj3.has(name3.charCodeAt(num13))) {
          let combined9 = ``.concat(name3.slice(num14, num13), "\\");
          let concat9 = combined9.concat;
          text7 = `${concat9(arr3.charAt(num13))}`;
          sum14 = num13 + 1;
        }
        num13 = num13 + 1;
        str15 = text7;
        num14 = sum14;
        str16 = text7;
        num15 = sum14;
      } while (num13 < name3.length);
    }
    let sum15 = name3;
    if (str16.length > 0) {
      sum15 = str16 + name3.slice(num15);
    }
    const concat8Result = concat8(sum15);
    if (type.action === SelectorType.AttributeAction.Exists) {
      const concat12 = "[".concat;
      combined10 = "[".concat(concat8Result, "]");
    } else {
      const concat30 = "[".concat;
      const combined11 = "[".concat(concat8Result);
      const action = type.action;
      const concat31 = combined11.concat;
      let str17 = str13;
      if (SelectorType.AttributeAction.Equals !== action) {
        str17 = "~";
        if (SelectorType.AttributeAction.Element !== action) {
          str17 = "^";
          if (SelectorType.AttributeAction.Start !== action) {
            str17 = "$";
            if (SelectorType.AttributeAction.End !== action) {
              str17 = "*";
              if (SelectorType.AttributeAction.Any !== action) {
                str17 = "!";
                if (SelectorType.AttributeAction.Not !== action) {
                  str17 = "|";
                  if (SelectorType.AttributeAction.Hyphen !== action) {
                    if (SelectorType.AttributeAction.Exists === action) {
                      const _Error = Error;
                      const self = this;
                      const self2 = this;
                      const error = new Error("Shouldn't be here");
                      throw error;
                    }
                  }
                }
              }
            }
          }
        }
      }
      const value4 = type.value;
      let num16 = 0;
      let tmp31 = str13;
      let num17 = 0;
      let arr5 = str13;
      let num18 = 0;
      const concat10 = concat31(str17, "=\"").concat;
      concat31(str17, "=\"");
      const obj4 = set;
      if (0 < value4.length) {
        do {
          let sum16 = tmp31;
          let sum17 = num17;
          if (obj4.has(value4.charCodeAt(num16))) {
            let combined12 = str13.concat(value4.slice(num17, num16), "\\");
            sum16 = tmp31 + combined12.concat(value4.charAt(num16));
            sum17 = num16 + 1;
          }
          num16 = num16 + 1;
          tmp31 = sum16;
          num17 = sum17;
          arr5 = sum16;
          num18 = sum17;
        } while (num16 < value4.length);
      }
      let sum18 = value4;
      if (arr5.length > 0) {
        sum18 = arr5 + value4.slice(num18);
      }
      const concat11 = concat10(sum18, "\"").concat;
      concat10(sum18, "\"");
      if (null !== type.ignoreCase) {
        let str21 = " s";
        if (type.ignoreCase) {
          str21 = " i";
        }
        str13 = str21;
      }
      combined10 = concat11(str13, "]");
    }
    return combined10;
  }
}
function getNamespace(namespace) {
  let str = "";
  if (null !== namespace) {
    let str4 = "*";
    const concat3 = "".concat;
    if ("*" !== namespace) {
      let num = 0;
      let str2 = "";
      let num2 = 0;
      let str3 = "";
      let num3 = 0;
      const obj = set2;
      if (0 < namespace.length) {
        do {
          let text = str2;
          let sum = num2;
          if (obj.has(namespace.charCodeAt(num))) {
            let concat = "".concat;
            let combined = "".concat(namespace.slice(num2, num), "\\");
            let concat2 = combined.concat;
            text = `${concat2(namespace.charAt(num))}`;
            sum = num + 1;
          }
          num = num + 1;
          str2 = text;
          num2 = sum;
          str3 = text;
          num3 = sum;
        } while (num < namespace.length);
      }
      let sum1 = namespace;
      if (str3.length > 0) {
        sum1 = str3 + namespace.slice(num3);
      }
      str4 = sum1;
    }
    str = concat3(str4, "|");
  }
  return str;
}
const fn = this && this.__spreadArray || ((arg0, fnResult, arg2) => {
  let callResult1;
  let tmp4;
  const tmp = arg2;
  if (tmp) {
    let num4 = 0;
    if (0 < fnResult.length) {
      do {
        let tmp5 = !tmp4;
        let tmp7 = tmp4;
        if (!tmp7) {
          tmp5 = num4 in fnResult;
        }
        let tmp8 = tmp4;
        if (!tmp5) {
          let callResult = tmp4;
          if (!callResult) {
            let _Array = Array;
            callResult = slice.call(fnResult, 0, num4);
          }
          callResult[num4] = fnResult[num4];
          tmp8 = callResult;
        }
        num4 = num4 + 1;
        tmp4 = tmp8;
        callResult1 = tmp8;
      } while (num4 < fnResult.length);
    }
  }
  const concat = arg0.concat;
  if (!callResult1) {
    const _Array2 = Array;
    const slice2 = Array.prototype.slice;
    callResult1 = slice2.call(fnResult);
  }
  return concat(callResult1);
});
function stringify(arr) {
  const mapped = arr.map(f102988);
  return mapped.join(", ");
}
const items = ["\\", "\""];
const fnResult = fn(fn([], items, true), ["(", ")"], false);
const set = new Set(items.map((item) => item.charCodeAt(0)));
const set1 = new Set(fnResult.map((item) => item.charCodeAt(0)));
const fnResult1 = fn(fn([], fnResult, true), ["~", "^", "$", "*", "+", "!", "|", ":", "[", "]", " ", "."], false);
const set2 = new Set(fnResult1.map((item) => item.charCodeAt(0)));

export { stringify };
