// Module ID: 12916
// Function ID: 12917
// Dependencies: [12915]
// Exports: isTraversal, parse

// Module 12916
import SelectorType from "SelectorType" /* 12915 */;

const require = globalThis.__r;
let _require, dependencyMap;

function funescape(arg0, match, arg2) {
  const diff = parseInt(match, 16) - 65536;
  let tmp2 = match;
  {
    tmp2 = match;
    if (!arg2) {
      let fromCharCodeResult;
      if (diff < 0) {
        const _String2 = String;
        fromCharCodeResult = String.fromCharCode(diff + 65536);
      } else {
        const _String = String;
        fromCharCodeResult = String.fromCharCode(diff >> 10 | 55296, 1023 & diff | 56320);
      }
      tmp2 = fromCharCodeResult;
    }
  }
  return tmp2;
}
function parseSelector(items, str, sum) {
  let charCodeAtResult3;
  let charCodeAtResult4;
  let charCodeAtResult6;
  let charCodeAtResult8;
  _require = str;
  dependencyMap = sum;
  function stripWhitespace(arg0) {
    dependencyMap = dependencyMap + arg0;
    const obj = str;
    if (dependencyMap < str.length) {
      const charCodeAtResult = obj.charCodeAt(dependencyMap);
      const tmp2 = 32 === charCodeAtResult || 9 === charCodeAtResult || 10 === charCodeAtResult || 12 === charCodeAtResult || 13 === charCodeAtResult;
      if (tmp2) {
        const sum1 = dependencyMap + 1;
        dependencyMap = sum1;
        const obj2 = str;
        while (sum1 < str.length) {
          let charCodeAtResult1 = obj2.charCodeAt(dependencyMap);
          let tmp7 = 32 === charCodeAtResult1 || 9 === charCodeAtResult1 || 10 === charCodeAtResult1 || 12 === charCodeAtResult1 || 13 === charCodeAtResult1;
          if (!tmp7) {
            break;
          }
        }
      }
    }
  }
  function readValueWithParenthesis() {
    let charCodeAtResult;
    let charCodeAtResult1;
    dependencyMap = dependencyMap + 1;
    let arr = closure_0;
    let num = 1;
    let num2 = 1;
    if (dependencyMap < closure_0.length) {
      while (true) {
        let sum1;
        let tmp8;
        let arr2 = closure_0;
        let tmp4 = closure_0;
        let obj = closure_0;
        if (40 === closure_0.charCodeAt(dependencyMap)) {
          let diff = dependencyMap - 1;
          let num3 = 0;
          let tmp7 = diff;
          tmp8 = arr2;
          let tmp9 = arr2;
          let num4 = 0;
          if (92 === arr2.charCodeAt(diff)) {
            do {
              num3 = num3 + 1;
              let diff1 = tmp7 - 1;
              tmp7 = diff1;
              tmp8 = closure_0;
              tmp9 = closure_0;
              num4 = num3;
              charCodeAtResult = closure_0.charCodeAt(diff1);
            } while (92 === charCodeAtResult);
          }
          obj = tmp9;
          tmp4 = tmp8;
          if (1 & ~num4) {
            sum1 = num + 1;
          }
          let sum2 = dependencyMap + 1;
          dependencyMap = sum2;
          arr = tmp8;
          num2 = sum1;
          if (0 >= sum1) {
            break;
          } else {
            num = sum1;
            arr = tmp8;
            num2 = sum1;
            if (sum2 >= arr2.length) {
              break;
            }
          }
        }
        let tmp15 = 41 !== arr2.charCodeAt(dependencyMap);
        let tmp16 = tmp4;
        if (!tmp15) {
          let diff2 = dependencyMap - 1;
          let num5 = 0;
          let tmp19 = diff2;
          let num6 = 0;
          if (92 === obj.charCodeAt(diff2)) {
            do {
              num5 = num5 + 1;
              let diff3 = tmp19 - 1;
              tmp19 = diff3;
              tmp4 = closure_0;
              num6 = num5;
              charCodeAtResult1 = closure_0.charCodeAt(diff3);
            } while (92 === charCodeAtResult1);
          }
          tmp15 = !(1 & ~num6);
          tmp16 = tmp4;
        }
        tmp8 = tmp16;
        sum1 = num;
        if (!tmp15) {
          sum1 = num - 1;
          tmp8 = tmp16;
        }
      }
    }
    if (num2) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Parenthesis not matched");
      throw error;
    } else {
      str = arr.slice(dependencyMap, dependencyMap - 1);
      return str.replace(re3, funescape);
    }
  }
  function ensureNotTraversal() {
    if (items2.length > 0) {
      const type = arr[arr.length - 1].type;
      if (SelectorType.SelectorType.Adjacent !== type) {
        if (SelectorType.SelectorType.Child !== type) {
          if (SelectorType.SelectorType.Descendant !== type) {
            if (SelectorType.SelectorType.Parent !== type) {
              let flag;
              if (SelectorType.SelectorType.Sibling !== type) {
                flag = false;
              }
              if (flag) {
                const _Error = Error;
                const self = this;
                const self2 = this;
                const error = new Error("Did not expect successive traversals.");
                throw error;
              }
            }
          }
        }
      }
      flag = true;
    }
  }
  function addSpecialAttribute(id, Element) {
    const obj = { type: SelectorType.SelectorType.Attribute, name: id, action: Element, value: null, namespace: null, ignoreCase: "quirks" };
    const push = items2.push;
    str = closure_0.slice(dependencyMap + 1);
    const match = str.match(re2);
    const arr = closure_0;
    if (match) {
      const first = match[0];
      dependencyMap = dependencyMap + (1 + first.length);
      obj.value = first.replace(re3, funescape);
      push(obj);
    } else {
      const _Error = Error;
      const concat = "Expected name, found ".concat;
      const self = this;
      const self2 = this;
      const error = new Error("Expected name, found ".concat(arr.slice(dependencyMap)));
      throw error;
    }
  }
  items = [];
  let items2 = items;
  stripWhitespace(0);
  let tmp2 = dependencyMap;
  if (str.length === dependencyMap) {
    return tmp2;
  } else {
    let arr13 = items;
    let arr14 = items;
    let arr15 = items;
    if (tmp2 < str.length) {
      while (true) {
        let tmp3 = dependencyMap;
        let charCodeAtResult = str.charCodeAt(dependencyMap);
        let tmp5 = arr13;
        if (32 !== charCodeAtResult) {
          if (9 !== charCodeAtResult) {
            if (10 !== charCodeAtResult) {
              if (12 !== charCodeAtResult) {
                let tmp20;
                let tmp21;
                if (13 !== charCodeAtResult) {
                  if (62 === charCodeAtResult) {
                    let tmp229 = _require;
                    let Child = require("SelectorType").SelectorType.Child;
                    if (arr13.length > 0) {
                      if (arr13[arr13.length - 1].type === tmp229(12915).SelectorType.Descendant) {
                        arr13[arr13.length - 1].type = Child;
                        let stripWhitespaceResult1 = stripWhitespace(1);
                        tmp20 = arr13;
                        tmp21 = arr14;
                      }
                    }
                    let ensureNotTraversalResult = ensureNotTraversal();
                    let obj2 = { type: Child };
                    let arr = arr13.push(obj2);
                  } else if (60 === charCodeAtResult) {
                    let tmp224 = _require;
                    let Parent = require("SelectorType").SelectorType.Parent;
                    if (arr13.length > 0) {
                      if (arr13[arr13.length - 1].type === tmp224(12915).SelectorType.Descendant) {
                        arr13[arr13.length - 1].type = Parent;
                        let stripWhitespaceResult2 = stripWhitespace(1);
                        tmp20 = arr13;
                        tmp21 = arr14;
                      }
                    }
                    let ensureNotTraversalResult1 = ensureNotTraversal();
                    let obj3 = { type: Parent };
                    let arr2 = arr13.push(obj3);
                  } else if (126 === charCodeAtResult) {
                    let tmp219 = _require;
                    let Sibling = require("SelectorType").SelectorType.Sibling;
                    if (arr13.length > 0) {
                      if (arr13[arr13.length - 1].type === tmp219(12915).SelectorType.Descendant) {
                        arr13[arr13.length - 1].type = Sibling;
                        let stripWhitespaceResult3 = stripWhitespace(1);
                        tmp20 = arr13;
                        tmp21 = arr14;
                      }
                    }
                    let ensureNotTraversalResult2 = ensureNotTraversal();
                    let obj4 = { type: Sibling };
                    let arr3 = arr13.push(obj4);
                  } else if (43 === charCodeAtResult) {
                    let tmp214 = _require;
                    let Adjacent = require("SelectorType").SelectorType.Adjacent;
                    if (arr13.length > 0) {
                      if (arr13[arr13.length - 1].type === tmp214(12915).SelectorType.Descendant) {
                        arr13[arr13.length - 1].type = Adjacent;
                        let stripWhitespaceResult4 = stripWhitespace(1);
                        tmp20 = arr13;
                        tmp21 = arr14;
                      }
                    }
                    let ensureNotTraversalResult3 = ensureNotTraversal();
                    let obj5 = { type: Adjacent };
                    let arr4 = arr13.push(obj5);
                  } else if (46 === charCodeAtResult) {
                    let addSpecialAttributeResult = addSpecialAttribute("class", require("SelectorType").AttributeAction.Element);
                    tmp20 = arr13;
                    tmp21 = arr14;
                  } else if (35 === charCodeAtResult) {
                    let addSpecialAttributeResult1 = addSpecialAttribute("id", require("SelectorType").AttributeAction.Equals);
                    tmp20 = arr13;
                    tmp21 = arr14;
                  } else if (91 === charCodeAtResult) {
                    let replaced;
                    let tmp116;
                    let stripWhitespaceResult5 = stripWhitespace(1);
                    if (124 === str.charCodeAt(dependencyMap)) {
                      let str25 = str.slice(dependencyMap + 1);
                      let match = str25.match(items2);
                      if (match) {
                        let first = match[0];
                        dependencyMap = dependencyMap + (1 + first.length);
                        replaced = first.replace(closure_3, funescape);
                        tmp116 = null;
                      } else {
                        let tmp137 = globalThis;
                        let _Error12 = Error;
                        let str26 = "Expected name, found ";
                        let concat10 = "Expected name, found ".concat;
                        let self23 = this;
                        let self24 = this;
                        let error = new Error("Expected name, found ".concat(str.slice(dependencyMap)));
                        throw error;
                      }
                    } else {
                      let slice = str.slice;
                      let tmp266 = dependencyMap;
                      if (str.startsWith("*|", dependencyMap)) {
                        let str23 = slice(tmp266 + 2);
                        let match1 = str23.match(items2);
                        if (match1) {
                          let first1 = match1[0];
                          dependencyMap = dependencyMap + (2 + first1.length);
                          replaced = first1.replace(closure_3, funescape);
                          tmp116 = "*";
                        } else {
                          let tmp127 = globalThis;
                          let _Error11 = Error;
                          let str24 = "Expected name, found ";
                          let concat9 = "Expected name, found ".concat;
                          let self21 = this;
                          let self22 = this;
                          let error1 = new Error("Expected name, found ".concat(str.slice(dependencyMap)));
                          throw error1;
                        }
                      } else {
                        let str19 = slice(tmp266);
                        let tmp103 = items2;
                        let match2 = str19.match(items2);
                        if (match2) {
                          let first2 = match2[0];
                          dependencyMap = dependencyMap + first2.length;
                          let tmp110 = closure_3;
                          let tmp111 = funescape;
                          let replaced1 = first2.replace(closure_3, funescape);
                          let tmp114 = 124 === str.charCodeAt(dependencyMap);
                          if (tmp114) {
                            tmp114 = 61 !== str.charCodeAt(dependencyMap + 1);
                          }
                          tmp116 = null;
                          replaced = replaced1;
                          if (tmp114) {
                            let str21 = str.slice(dependencyMap + 1);
                            let match3 = str21.match(tmp103);
                            if (match3) {
                              let first3 = match3[0];
                              dependencyMap = dependencyMap + (1 + first3.length);
                              replaced = first3.replace(tmp110, tmp111);
                              tmp116 = replaced1;
                            } else {
                              let tmp120 = globalThis;
                              let _Error10 = Error;
                              let str22 = "Expected name, found ";
                              let concat8 = "Expected name, found ".concat;
                              let self19 = this;
                              let self20 = this;
                              let error2 = new Error("Expected name, found ".concat(str.slice(dependencyMap)));
                              throw error2;
                            }
                          }
                        } else {
                          let tmp105 = globalThis;
                          let _Error9 = Error;
                          let str20 = "Expected name, found ";
                          let concat7 = "Expected name, found ".concat;
                          let self17 = this;
                          let self18 = this;
                          let error3 = new Error("Expected name, found ".concat(str.slice(dependencyMap)));
                          throw error3;
                        }
                      }
                    }
                    let stripWhitespaceResult6 = stripWhitespace(0);
                    let tmp145 = _require;
                    let Equals = require("SelectorType").AttributeAction.Exists;
                    let value = map.get(str.charCodeAt(dependencyMap));
                    let charCodeAt = str.charCodeAt;
                    let tmp150 = dependencyMap;
                    if (value) {
                      if (61 !== charCodeAt(tmp150 + 1)) {
                        let tmp205 = globalThis;
                        let _Error15 = Error;
                        let self29 = this;
                        let str31 = "Expected `=`";
                        let self30 = this;
                        let error4 = new Error("Expected `=`");
                        throw error4;
                      } else {
                        let stripWhitespaceResult7 = stripWhitespace(2);
                        Equals = value;
                      }
                    } else if (61 === charCodeAt(tmp150)) {
                      Equals = tmp145(12915).AttributeAction.Equals;
                      let stripWhitespaceResult8 = stripWhitespace(1);
                    }
                    let flag = null;
                    let str27 = "";
                    if ("exists" !== Equals) {
                      let replaced2;
                      let charCodeAtResult1 = str.charCodeAt(dependencyMap);
                      let tmp152 = 39 === charCodeAtResult1 || 34 === charCodeAtResult1;
                      if (tmp152) {
                        let charCodeAtResult2 = str.charCodeAt(dependencyMap);
                        sum = dependencyMap + 1;
                        let tmp178 = sum;
                        if (sum < str.length) {
                          let tmp183 = sum;
                          if (str.charCodeAt(sum) !== charCodeAtResult2) {
                            let sum1 = tmp183 + 1;
                            tmp178 = sum1;
                            while (sum1 < str.length) {
                              tmp183 = sum1;
                              if (str.charCodeAt(sum1) !== charCodeAtResult2) {
                                continue;
                              } else {
                                let diff = sum1 - 1;
                                let num7 = 0;
                                let tmp186 = diff;
                                let num8 = 0;
                                if (92 === str.charCodeAt(diff)) {
                                  do {
                                    num7 = num7 + 1;
                                    let diff1 = tmp186 - 1;
                                    tmp186 = diff1;
                                    num8 = num7;
                                    charCodeAtResult3 = str.charCodeAt(diff1);
                                  } while (92 === charCodeAtResult3);
                                }
                                tmp183 = sum1;
                                tmp178 = sum1;
                                if (1 & ~num8) {
                                  break;
                                }
                              }
                              continue;
                            }
                          } else {
                            let diff2 = sum - 1;
                            let num5 = 0;
                            let tmp180 = diff2;
                            let num6 = 0;
                            if (92 === str.charCodeAt(diff2)) {
                              do {
                                num5 = num5 + 1;
                                let diff3 = tmp180 - 1;
                                tmp180 = diff3;
                                num6 = num5;
                                charCodeAtResult4 = str.charCodeAt(diff3);
                              } while (92 === charCodeAtResult4);
                            }
                            tmp183 = sum;
                            tmp178 = sum;
                          }
                        }
                        if (str.charCodeAt(tmp178) !== charCodeAtResult2) {
                          let tmp202 = globalThis;
                          let _Error14 = Error;
                          let self27 = this;
                          let str30 = "Attribute value didn't end";
                          let self28 = this;
                          let error5 = new Error("Attribute value didn't end");
                          throw error5;
                        } else {
                          let str43 = str.slice(dependencyMap + 1, tmp178);
                          replaced2 = str43.replace(closure_3, funescape);
                          dependencyMap = tmp178 + 1;
                        }
                      } else {
                        let tmp153 = dependencyMap;
                        if (dependencyMap < str.length) {
                          let charCodeAtResult5 = str.charCodeAt(dependencyMap);
                          let tmp154 = 32 === charCodeAtResult5 || 9 === charCodeAtResult5 || 10 === charCodeAtResult5 || 12 === charCodeAtResult5 || 13 === charCodeAtResult5;
                          if (tmp154) {
                            let diff4 = dependencyMap - 1;
                            let num = 0;
                            let tmp158 = diff4;
                            let num2 = 0;
                            if (92 === str.charCodeAt(diff4)) {
                              do {
                                num = num + 1;
                                let diff5 = tmp158 - 1;
                                tmp158 = diff5;
                                num2 = num;
                                charCodeAtResult6 = str.charCodeAt(diff5);
                              } while (92 === charCodeAtResult6);
                            }
                          }
                          let sum2 = dependencyMap + 1;
                          dependencyMap = sum2;
                          while (sum2 < str.length) {
                            let charCodeAtResult7 = str.charCodeAt(dependencyMap);
                            let tmp163 = 32 === charCodeAtResult7 || 9 === charCodeAtResult7 || 10 === charCodeAtResult7 || 12 === charCodeAtResult7 || 13 === charCodeAtResult7;
                            if (tmp163) {
                              let diff6 = dependencyMap - 1;
                              let num3 = 0;
                              let tmp167 = diff6;
                              let num4 = 0;
                              if (92 === str.charCodeAt(diff6)) {
                                do {
                                  num3 = num3 + 1;
                                  let diff7 = tmp167 - 1;
                                  tmp167 = diff7;
                                  num4 = num3;
                                  charCodeAtResult8 = str.charCodeAt(diff7);
                                } while (92 === charCodeAtResult8);
                              }
                              if (1 & ~num4) {
                                break;
                              }
                            }
                            continue;
                          }
                        }
                        let str28 = str.slice(tmp153, dependencyMap);
                        replaced2 = str28.replace(closure_3, funescape);
                      }
                      let stripWhitespaceResult9 = stripWhitespace(0);
                      let tmp191 = 32 | str.charCodeAt(dependencyMap);
                      if (115 === tmp191) {
                        let stripWhitespaceResult10 = stripWhitespace(1);
                        flag = false;
                        str27 = replaced2;
                      } else {
                        flag = null;
                        str27 = replaced2;
                        if (105 === tmp191) {
                          let stripWhitespaceResult11 = stripWhitespace(1);
                          flag = true;
                          str27 = replaced2;
                        }
                      }
                    }
                    if (93 !== str.charCodeAt(dependencyMap)) {
                      let tmp199 = globalThis;
                      let _Error13 = Error;
                      let self25 = this;
                      let str29 = "Attribute selector didn't terminate";
                      let self26 = this;
                      let error6 = new Error("Attribute selector didn't terminate");
                      throw error6;
                    } else {
                      dependencyMap = dependencyMap + 1;
                      let obj6 = { type: require("SelectorType").SelectorType.Attribute, name: replaced, action: Equals, value: str27, namespace: tmp116, ignoreCase: flag };
                      let arr5 = arr14.push(obj6);
                      tmp20 = arr13;
                      tmp21 = arr14;
                    }
                  } else if (58 === charCodeAtResult) {
                    if (58 === str.charCodeAt(dependencyMap + 1)) {
                      let obj7 = { type: require("SelectorType").SelectorType.PseudoElement, name: null, data: null };
                      let push3 = arr14.push;
                      let str16 = str.slice(dependencyMap + 2);
                      let match4 = str16.match(items2);
                      if (match4) {
                        let first4 = match4[0];
                        dependencyMap = dependencyMap + (2 + first4.length);
                        let str18 = first4.replace(closure_3, funescape);
                        obj7.name = str18.toLowerCase();
                        let valueWithParenthesis = null;
                        if (40 === str.charCodeAt(dependencyMap)) {
                          valueWithParenthesis = readValueWithParenthesis();
                        }
                        obj7.data = valueWithParenthesis;
                        let push3Result = push3(obj7);
                        tmp20 = arr13;
                        tmp21 = arr14;
                      } else {
                        let tmp91 = globalThis;
                        let _Error8 = Error;
                        let str17 = "Expected name, found ";
                        let concat6 = "Expected name, found ".concat;
                        let self15 = this;
                        let self16 = this;
                        let error7 = new Error("Expected name, found ".concat(str.slice(dependencyMap)));
                        throw error7;
                      }
                    } else {
                      let str42 = str.slice(dependencyMap + 1);
                      let match5 = str42.match(items2);
                      if (match5) {
                        let first5 = match5[0];
                        dependencyMap = dependencyMap + (1 + first5.length);
                        let tmp61 = closure_3;
                        let tmp62 = funescape;
                        let str9 = first5.replace(closure_3, funescape);
                        let formatted = str9.toLowerCase();
                        let replaced3 = null;
                        if (40 === str.charCodeAt(dependencyMap)) {
                          if (set.has(formatted)) {
                            let charCodeAtResult9 = str.charCodeAt(dependencyMap + 1);
                            let tmp72 = 39 === charCodeAtResult9 || 34 === charCodeAtResult9;
                            if (tmp72) {
                              let tmp83 = globalThis;
                              let _Error7 = Error;
                              let str14 = "Pseudo-selector ";
                              let concat5 = "Pseudo-selector ".concat;
                              let str15 = " cannot be quoted";
                              let self13 = this;
                              let self14 = this;
                              let error8 = new Error("Pseudo-selector ".concat(formatted, " cannot be quoted"));
                              throw error8;
                            } else {
                              let items1 = [];
                              dependencyMap = parseSelector(items1, str, dependencyMap + 1);
                              if (41 !== str.charCodeAt(dependencyMap)) {
                                let tmp80 = globalThis;
                                let _Error6 = Error;
                                let str11 = "Missing closing parenthesis in :";
                                let concat4 = "Missing closing parenthesis in :".concat;
                                let str12 = " (";
                                let combined = "Missing closing parenthesis in :".concat(formatted, " (");
                                let str13 = ")";
                                let self11 = this;
                                let self12 = this;
                                let error9 = new Error(combined.concat(str, ")"));
                                throw error9;
                              } else {
                                dependencyMap = dependencyMap + 1;
                                replaced3 = items1;
                              }
                            }
                          } else {
                            let valueWithParenthesis2 = readValueWithParenthesis();
                            let str10 = valueWithParenthesis2;
                            if (set1.has(formatted)) {
                              let charCodeAtResult10 = valueWithParenthesis2.charCodeAt(0);
                              let tmp68 = charCodeAtResult10 === valueWithParenthesis2.charCodeAt(valueWithParenthesis2.length - 1);
                              if (tmp68) {
                                let tmp69 = 39 === charCodeAtResult10 || 34 === charCodeAtResult10;
                                tmp68 = tmp69;
                              }
                              str10 = valueWithParenthesis2;
                              if (tmp68) {
                                str10 = valueWithParenthesis2.slice(1, -1);
                              }
                            }
                            replaced3 = str10.replace(tmp61, tmp62);
                          }
                        }
                        let obj8 = { type: require("SelectorType").SelectorType.Pseudo, name: formatted, data: replaced3 };
                        let push2 = arr14.push;
                        let push2Result = push2(obj8);
                        tmp20 = arr13;
                        tmp21 = arr14;
                      } else {
                        let tmp56 = globalThis;
                        let _Error5 = Error;
                        let str8 = "Expected name, found ";
                        let concat3 = "Expected name, found ".concat;
                        let self9 = this;
                        let self10 = this;
                        let error10 = new Error("Expected name, found ".concat(str.slice(dependencyMap)));
                        throw error10;
                      }
                    }
                  } else if (44 === charCodeAtResult) {
                    let length = arr13.length;
                    if (length) {
                      length = arr13[arr13.length - 1].type === require("SelectorType").SelectorType.Descendant;
                    }
                    if (length) {
                      let arr6 = arr13.pop();
                    }
                    if (0 === arr13.length) {
                      let tmp52 = globalThis;
                      let _Error4 = Error;
                      let self7 = this;
                      let str7 = "Empty sub-selector";
                      let self8 = this;
                      let error11 = new Error("Empty sub-selector");
                      throw error11;
                    } else {
                      let arr7 = items.push(arr13);
                      items2 = [];
                      let stripWhitespaceResult12 = stripWhitespace(1);
                      tmp20 = items2;
                      tmp21 = items2;
                    }
                  } else if (str.startsWith("/*", dependencyMap)) {
                    let index = str.indexOf("*/", dependencyMap + 2);
                    if (index < 0) {
                      let tmp44 = globalThis;
                      let _Error3 = Error;
                      let self5 = this;
                      let str6 = "Comment was not terminated";
                      let self6 = this;
                      let error12 = new Error("Comment was not terminated");
                      throw error12;
                    } else {
                      dependencyMap = index + 2;
                      tmp20 = arr13;
                      tmp21 = arr14;
                      if (0 === arr14.length) {
                        let stripWhitespaceResult13 = stripWhitespace(0);
                        tmp20 = arr13;
                        tmp21 = arr14;
                      }
                    }
                  } else {
                    let str3;
                    let obj10;
                    if (42 === charCodeAtResult) {
                      dependencyMap = dependencyMap + 1;
                      str3 = "*";
                    } else if (124 === charCodeAtResult) {
                      let tmp16 = dependencyMap;
                      str3 = "";
                      if (124 === str.charCodeAt(dependencyMap + 1)) {
                        let tmp255 = _require;
                        let ColumnCombinator = require("SelectorType").SelectorType.ColumnCombinator;
                        if (arr13.length > 0) {
                          if (arr13[arr13.length - 1].type === tmp255(12915).SelectorType.Descendant) {
                            arr13[arr13.length - 1].type = ColumnCombinator;
                            let stripWhitespaceResult14 = stripWhitespace(2);
                            tmp20 = arr13;
                            tmp21 = arr14;
                          }
                        }
                        let ensureNotTraversalResult4 = ensureNotTraversal();
                        let obj = { type: ColumnCombinator };
                        let arr8 = arr13.push(obj);
                      }
                    } else {
                      let tmp253 = items2;
                      arr15 = arr13;
                      if (items2.test(str.slice(dependencyMap))) {
                        let tmp7 = dependencyMap;
                        str = str.slice(dependencyMap);
                        let match6 = str.match(tmp253);
                        if (!match6) {
                          break;
                        } else {
                          let first6 = match6[0];
                          dependencyMap = dependencyMap + first6.length;
                          let tmp14 = closure_3;
                          let tmp15 = funescape;
                          str3 = first6.replace(closure_3, funescape);
                        }
                      }
                    }
                    let tmp23 = dependencyMap;
                    let tmp24 = 124 === str.charCodeAt(dependencyMap);
                    if (tmp24) {
                      tmp24 = 124 !== str.charCodeAt(dependencyMap + 1);
                    }
                    let tmp26 = str3;
                    let tmp27 = null;
                    if (tmp24) {
                      let str5;
                      if (42 === str.charCodeAt(dependencyMap + 1)) {
                        dependencyMap = dependencyMap + 2;
                        str5 = "*";
                      } else {
                        let str41 = str.slice(dependencyMap + 1);
                        let match7 = str41.match(items2);
                        if (match7) {
                          let first7 = match7[0];
                          dependencyMap = dependencyMap + (1 + first7.length);
                          str5 = first7.replace(closure_3, funescape);
                        } else {
                          let tmp29 = globalThis;
                          let _Error2 = Error;
                          let str4 = "Expected name, found ";
                          let concat2 = "Expected name, found ".concat;
                          let self3 = this;
                          let self4 = this;
                          let error13 = new Error("Expected name, found ".concat(str.slice(dependencyMap)));
                          throw error13;
                        }
                      }
                      tmp26 = str5;
                      tmp27 = str3;
                    }
                    let push = arr14.push;
                    if ("*" === tmp26) {
                      let obj9 = { type: require("SelectorType").SelectorType.Universal, namespace: tmp27 };
                      obj10 = obj9;
                    } else {
                      obj10 = { type: require("SelectorType").SelectorType.Tag, name: tmp26, namespace: tmp27 };
                    }
                    let arr9 = push(obj10);
                    tmp20 = arr13;
                    tmp21 = arr14;
                  }
                }
                arr13 = tmp20;
                arr14 = tmp21;
                arr15 = tmp20;
              }
            }
          }
        }
        let tmp234 = 0 !== arr14.length;
        if (tmp234) {
          tmp234 = arr14[0].type === require("SelectorType").SelectorType.Descendant;
        }
        if (!tmp234) {
          let ensureNotTraversalResult5 = ensureNotTraversal();
          let obj11 = { type: require("SelectorType").SelectorType.Descendant };
          let push4 = arr14.push;
          let push4Result = push4(obj11);
        }
        let stripWhitespaceResult15 = stripWhitespace(1);
        tmp20 = arr13;
        tmp21 = arr14;
      }
      let tmp9 = globalThis;
      let _Error = Error;
      let concat = "Expected name, found ".concat;
      let tmp10 = dependencyMap;
      let self = this;
      let self2 = this;
      const error14 = new Error("Expected name, found ".concat(str.slice(dependencyMap)));
      throw error14;
    }
    const length2 = arr15.length && arr15[arr15.length - 1].type === require("SelectorType").SelectorType.Descendant;
    if (length2) {
      arr15.pop();
    }
    if (0 === arr15.length) {
      const _Error16 = Error;
      const self31 = this;
      const self32 = this;
      const error15 = new Error("Empty sub-selector");
      throw error15;
    } else {
      items.push(arr15);
      return dependencyMap;
    }
  }
}
const re2 = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
const re3 = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
let items = [126, SelectorType.AttributeAction.Element];
let items1 = [items, , , , , ];
let items2 = [94, SelectorType.AttributeAction.Start];
items1[1] = items2;
const items3 = [36, SelectorType.AttributeAction.End];
items1[2] = items3;
const items4 = [42, SelectorType.AttributeAction.Any];
items1[3] = items4;
const items5 = [33, SelectorType.AttributeAction.Not];
items1[4] = items5;
const items6 = [124, SelectorType.AttributeAction.Hyphen];
items1[5] = items6;
const map = new Map(items1);
const set = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
const set1 = new Set(["contains", "icontains"]);

export function isTraversal(type) {
  type = type.type;
  if (SelectorType.SelectorType.Adjacent !== type) {
    if (SelectorType.SelectorType.Child !== type) {
      if (SelectorType.SelectorType.Descendant !== type) {
        if (SelectorType.SelectorType.Parent !== type) {
          if (SelectorType.SelectorType.Sibling !== type) {
            if (SelectorType.SelectorType.ColumnCombinator !== type) {
              return false;
            }
          }
        }
      }
    }
  }
  return true;
}
export function parse(arr) {
  const items = [];
  const tmp = parseSelector(items, "".concat(arr), 0);
  if (tmp < arr.length) {
    const _Error = Error;
    const concat = "Unmatched selector: ".concat;
    const self = this;
    const self2 = this;
    const error = new Error("Unmatched selector: ".concat(arr.slice(tmp)));
    throw error;
  } else {
    return items;
  }
}
