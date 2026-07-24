// Module ID: 15960
// Function ID: 123337
// Name: SyntaxError
// Dependencies: []

// Module 15960 (SyntaxError)
arg5.default = (() => {
  class SyntaxError {
    constructor(arg0, arg1, arg2, arg3, arg4, arg5) {
      this.message = arg0;
      this.expected = arg1;
      this.found = arg2;
      this.offset = arg3;
      this.line = arg4;
      this.column = arg5;
      this.name = "SyntaxError";
      return;
    }
  }
  (function peg$subclass(SyntaxError, Error) {
    let closure_0 = SyntaxError;
    class ctor {
      constructor() {
        this.constructor = closure_0;
        return;
      }
    }
    ctor.prototype = Error.prototype;
    ctor = new ctor();
    SyntaxError.prototype = ctor;
  })(SyntaxError, Error);
  return {
    SyntaxError,
    parse(arg0) {
      let closure_0 = arg0;
      function peg$fail(arg0) {
        if (c70 >= closure_73) {
          if (c70 > closure_73) {
            closure_73 = c70;
            let arr = [];
          }
          arr = arr.push(arg0);
        }
      }
      function peg$parsestart() {
        return peg$parsemessageFormatPattern();
      }
      function peg$parsemessageFormatPattern() {
        const items = [];
        let tmp = peg$parsemessageFormatElement();
        if (tmp !== obj) {
          do {
            let arr = items.push(tmp);
            let tmp3 = peg$parsemessageFormatElement;
            tmp = peg$parsemessageFormatElement();
            let tmp4 = obj;
          } while (tmp !== obj);
        }
        let tmp5 = items;
        if (items !== obj) {
          tmp5 = peg$c1(items);
        }
        return tmp5;
      }
      function peg$parsemessageFormatElement() {
        let tmp = (function peg$parsemessageTextElement() {
          let outer1_70;
          const items = [];
          const tmp2 = outer1_82();
          if (tmp2 !== outer1_1) {
            const tmp5 = outer1_87();
            if (tmp5 !== outer1_1) {
              const tmp9 = outer1_82();
              let tmp3 = tmp9;
              if (tmp9 !== outer1_1) {
                const items1 = [tmp2, tmp5, tmp9];
                let tmp12 = items1;
                tmp3 = tmp9;
              }
              if (tmp12 !== outer1_1) {
                let tmp15 = items;
                if (tmp12 !== outer1_1) {
                  while (true) {
                    let arr = items.push(tmp12);
                    let tmp19 = outer1_82;
                    let tmp18 = outer1_70;
                    let tmp20 = outer1_82();
                    let tmp21 = outer1_1;
                    let tmp22 = tmp3;
                    if (tmp20 !== outer1_1) {
                      let tmp23 = outer1_87;
                      let tmp24 = outer1_87();
                      let tmp25 = outer1_1;
                      let tmp26 = tmp24;
                      tmp22 = tmp3;
                      if (tmp24 !== outer1_1) {
                        let tmp27 = outer1_82;
                        let tmp28 = outer1_82();
                        let tmp29 = outer1_1;
                        let tmp30 = tmp24;
                        tmp22 = tmp28;
                        if (tmp28 !== outer1_1) {
                          let items2 = [tmp20, tmp24, tmp28];
                          tmp12 = items2;
                          let tmp31 = tmp24;
                          tmp22 = tmp28;
                          let tmp32 = outer1_1;
                          tmp3 = tmp22;
                          tmp15 = items;
                          if (tmp12 === outer1_1) {
                            break;
                          }
                        }
                      }
                    }
                    outer1_70 = tmp18;
                    tmp12 = outer1_3;
                  }
                }
              } else {
                tmp15 = outer1_3;
              }
              let tmp34 = tmp15;
              if (tmp15 !== outer1_1) {
                tmp34 = outer1_4(tmp15);
              }
              if (tmp34 === outer1_1) {
                let substr = outer1_81();
                if (substr !== outer1_1) {
                  substr = outer1_0.substring(tmp37, outer1_70);
                }
                tmp34 = substr;
                tmp37 = outer1_70;
              }
              let tmp44 = tmp34;
              if (tmp34 !== outer1_1) {
                tmp44 = outer1_5(tmp34);
              }
              return tmp44;
            }
          }
          tmp12 = outer1_3;
        })();
        if (tmp === obj) {
          tmp = (function peg$parseargumentElement() {
            if (123 === outer1_0.charCodeAt(outer1_70)) {
              let tmp4 = outer1_8;
              outer1_70 = outer1_70 + 1;
            } else {
              tmp4 = outer1_1;
              if (0 === outer1_75) {
                outer1_76(outer1_9);
                tmp4 = tmp2;
              }
            }
            if (tmp4 !== outer1_1) {
              if (outer1_82() !== outer1_1) {
                let tmp13 = outer1_85();
                if (tmp13 === outer1_1) {
                  let items = [];
                  if (outer1_6.test(outer1_0.charAt(outer1_70))) {
                    let charAtResult = outer1_0.charAt(outer1_70);
                    outer1_70 = outer1_70 + 1;
                  } else {
                    charAtResult = outer1_1;
                    if (0 === outer1_75) {
                      outer1_76(outer1_7);
                      charAtResult = tmp15;
                    }
                  }
                  if (charAtResult !== outer1_1) {
                    let substr = items;
                    if (charAtResult !== outer1_1) {
                      do {
                        let arr = items.push(charAtResult);
                        let tmp28 = outer1_6;
                        let tmp29 = outer1_0;
                        let tmp30 = outer1_70;
                        if (outer1_6.test(outer1_0.charAt(outer1_70))) {
                          let tmp36 = outer1_0;
                          let tmp37 = outer1_70;
                          charAtResult = outer1_0.charAt(outer1_70);
                          let tmp38 = outer1_70;
                          outer1_70 = outer1_70 + 1;
                        } else {
                          let tmp32 = outer1_75;
                          charAtResult = outer1_1;
                          if (0 === outer1_75) {
                            let tmp33 = outer1_76;
                            let tmp34 = outer1_7;
                            let tmp35 = outer1_76(outer1_7);
                            charAtResult = tmp31;
                          }
                        }
                        let tmp39 = outer1_1;
                        substr = items;
                      } while (charAtResult !== outer1_1);
                    }
                  } else {
                    substr = outer1_3;
                  }
                  if (substr !== outer1_1) {
                    substr = outer1_0.substring(tmp78, outer1_70);
                  }
                  tmp13 = substr;
                  tmp78 = outer1_70;
                }
                if (tmp13 !== outer1_1) {
                  if (outer1_82() !== outer1_1) {
                    if (44 === outer1_0.charCodeAt(outer1_70)) {
                      let tmp51 = outer1_11;
                      outer1_70 = outer1_70 + 1;
                    } else {
                      tmp51 = outer1_1;
                      if (0 === outer1_75) {
                        outer1_76(outer1_12);
                        tmp51 = tmp49;
                      }
                    }
                    if (tmp51 !== outer1_1) {
                      const tmp58 = outer1_82();
                      if (tmp58 !== outer1_1) {
                        const tmp61 = (function peg$parseelementFormat() {
                          let arr = outer2_70;
                          if (outer2_0.substr(outer2_70, 6) === outer2_16) {
                            let tmp4 = outer2_16;
                            outer2_70 = outer2_70 + 6;
                          } else {
                            tmp4 = outer2_1;
                            if (0 === outer2_75) {
                              outer2_76(outer2_17);
                              tmp4 = tmp2;
                            }
                          }
                          if (tmp4 === outer2_1) {
                            arr = outer2_0;
                            arr = outer2_70;
                            arr = outer2_18;
                            if (outer2_0.substr(outer2_70, 4) === outer2_18) {
                              let tmp11 = outer2_18;
                              outer2_70 = outer2_70 + 4;
                            } else {
                              tmp11 = outer2_1;
                              if (0 === outer2_75) {
                                outer2_76(outer2_19);
                                tmp11 = tmp9;
                              }
                            }
                            if (tmp11 !== outer2_1) {
                              tmp4 = tmp11;
                            } else if (outer2_0.substr(outer2_70, 4) === outer2_20) {
                              let tmp22 = outer2_20;
                              outer2_70 = outer2_70 + 4;
                            } else {
                              tmp22 = outer2_1;
                              if (0 === outer2_75) {
                                outer2_76(outer2_21);
                                tmp22 = tmp20;
                              }
                            }
                          }
                          if (tmp4 !== outer2_1) {
                            if (outer2_82() !== outer2_1) {
                              if (44 === outer2_0.charCodeAt(outer2_70)) {
                                let tmp36 = outer2_11;
                                outer2_70 = outer2_70 + 1;
                              } else {
                                tmp36 = outer2_1;
                                if (0 === outer2_75) {
                                  outer2_76(outer2_12);
                                  tmp36 = tmp34;
                                }
                              }
                              if (tmp36 !== outer2_1) {
                                const tmp43 = outer2_82();
                                if (tmp43 !== outer2_1) {
                                  const tmp46 = outer2_87();
                                  if (tmp46 !== outer2_1) {
                                    const items = [tmp36, tmp43, tmp46];
                                    let tmp48 = items;
                                  }
                                  if (tmp48 === outer2_1) {
                                    tmp48 = outer2_10;
                                  }
                                  if (tmp48 !== outer2_1) {
                                    let tmp30 = outer2_22(tmp4, tmp48);
                                  } else {
                                    outer2_70 = arr;
                                    tmp30 = outer2_3;
                                  }
                                }
                              }
                              tmp48 = outer2_3;
                              const tmp31 = outer2_70;
                            }
                            if (tmp30 === outer2_1) {
                              arr = outer2_70;
                              arr = outer2_0;
                              arr = outer2_70;
                              arr = outer2_23;
                              if (outer2_0.substr(outer2_70, 6) === outer2_23) {
                                let tmp55 = outer2_23;
                                outer2_70 = outer2_70 + 6;
                              } else {
                                tmp55 = outer2_1;
                                if (0 === outer2_75) {
                                  outer2_76(outer2_24);
                                  tmp55 = tmp53;
                                }
                              }
                              if (tmp55 !== outer2_1) {
                                if (outer2_82() !== outer2_1) {
                                  if (44 === outer2_0.charCodeAt(outer2_70)) {
                                    let tmp68 = outer2_11;
                                    outer2_70 = outer2_70 + 1;
                                  } else {
                                    tmp68 = outer2_1;
                                    if (0 === outer2_75) {
                                      outer2_76(outer2_12);
                                      tmp68 = tmp66;
                                    }
                                  }
                                  if (tmp68 !== outer2_1) {
                                    if (outer2_82() !== outer2_1) {
                                      const tmp77 = outer2_80();
                                      if (tmp77 !== outer2_1) {
                                        let tmp63 = outer2_25(tmp77);
                                      }
                                    }
                                  }
                                  outer2_70 = arr;
                                  tmp63 = outer2_3;
                                }
                                if (tmp63 === outer2_1) {
                                  arr = outer2_70;
                                  arr = outer2_0;
                                  arr = outer2_70;
                                  arr = outer2_26;
                                  if (outer2_0.substr(outer2_70, 13) === outer2_26) {
                                    let tmp83 = outer2_26;
                                    outer2_70 = outer2_70 + 13;
                                  } else {
                                    tmp83 = outer2_1;
                                    if (0 === outer2_75) {
                                      outer2_76(outer2_27);
                                      tmp83 = tmp81;
                                    }
                                  }
                                  if (tmp83 !== outer2_1) {
                                    if (outer2_82() !== outer2_1) {
                                      if (44 === outer2_0.charCodeAt(outer2_70)) {
                                        let tmp96 = outer2_11;
                                        arr = outer2_70;
                                        outer2_70 = outer2_70 + 1;
                                      } else {
                                        tmp96 = outer2_1;
                                        if (0 === outer2_75) {
                                          outer2_76(outer2_12);
                                          tmp96 = tmp94;
                                        }
                                      }
                                      arr = outer2_1;
                                      if (tmp96 !== outer2_1) {
                                        arr = outer2_82;
                                        arr = outer2_1;
                                        if (outer2_82() !== outer2_1) {
                                          arr = outer2_80;
                                          arr = outer2_80();
                                          arr = outer2_1;
                                          if (arr !== outer2_1) {
                                            arr = outer2_28;
                                            let tmp91 = outer2_28(arr);
                                          }
                                        }
                                      }
                                      outer2_70 = arr;
                                      tmp91 = outer2_3;
                                    }
                                    arr = outer2_1;
                                    if (tmp91 !== outer2_1) {
                                      tmp63 = tmp91;
                                    } else {
                                      arr = outer2_70;
                                      arr = outer2_0;
                                      arr = outer2_70;
                                      arr = outer2_29;
                                      if (outer2_0.substr(outer2_70, 6) === outer2_29) {
                                        arr = outer2_29;
                                        arr = outer2_70;
                                        outer2_70 = outer2_70 + 6;
                                      } else {
                                        arr = outer2_75;
                                        arr = outer2_1;
                                        if (0 === outer2_75) {
                                          arr = outer2_76;
                                          arr = outer2_30;
                                          arr = outer2_76(outer2_30);
                                        }
                                      }
                                      arr = outer2_1;
                                      if (arr !== outer2_1) {
                                        arr = outer2_82;
                                        arr = outer2_1;
                                        if (outer2_82() !== outer2_1) {
                                          arr = outer2_0;
                                          arr = outer2_70;
                                          if (44 === outer2_0.charCodeAt(outer2_70)) {
                                            arr = outer2_11;
                                            arr = outer2_70;
                                            outer2_70 = outer2_70 + 1;
                                          } else {
                                            arr = outer2_75;
                                            arr = outer2_1;
                                            if (0 === outer2_75) {
                                              arr = outer2_76;
                                              arr = outer2_12;
                                              arr = outer2_76(outer2_12);
                                            }
                                          }
                                          arr = outer2_1;
                                          if (arr !== outer2_1) {
                                            arr = outer2_82;
                                            arr = outer2_1;
                                            if (outer2_82() !== outer2_1) {
                                              const items1 = [];
                                              arr = outer2_79;
                                              arr = outer2_79();
                                              arr = outer2_1;
                                              if (arr !== outer2_1) {
                                                arr = outer2_1;
                                                arr = items1;
                                                if (arr !== outer2_1) {
                                                  do {
                                                    arr = items1.push(arr);
                                                    arr = outer2_79;
                                                    arr = outer2_79();
                                                    arr = outer2_1;
                                                    arr = items1;
                                                  } while (arr !== outer2_1);
                                                }
                                              } else {
                                                arr = outer2_3;
                                              }
                                              arr = outer2_1;
                                              if (arr !== outer2_1) {
                                                arr = outer2_31;
                                                arr = outer2_31(arr);
                                              } else {
                                                outer2_70 = arr;
                                                arr = outer2_3;
                                              }
                                            } else {
                                              outer2_70 = arr;
                                              arr = outer2_3;
                                            }
                                          } else {
                                            outer2_70 = arr;
                                            arr = outer2_3;
                                          }
                                        } else {
                                          outer2_70 = arr;
                                          arr = outer2_3;
                                        }
                                      } else {
                                        outer2_70 = arr;
                                        arr = outer2_3;
                                      }
                                    }
                                  }
                                  outer2_70 = arr;
                                  tmp91 = outer2_3;
                                }
                                tmp30 = tmp63;
                              }
                              outer2_70 = arr;
                              tmp63 = outer2_3;
                            }
                            return tmp30;
                          }
                          outer2_70 = arr;
                          tmp30 = outer2_3;
                        })();
                        if (tmp61 !== outer1_1) {
                          let items1 = [tmp51, tmp58, tmp61];
                          let tmp60 = items1;
                        } else {
                          outer1_70 = tmp46;
                          tmp60 = outer1_3;
                        }
                      }
                      if (tmp60 === outer1_1) {
                        tmp60 = outer1_10;
                      }
                      if (tmp60 !== outer1_1) {
                        if (outer1_82() !== outer1_1) {
                          if (125 === outer1_0.charCodeAt(outer1_70)) {
                            let tmp71 = outer1_13;
                            outer1_70 = outer1_70 + 1;
                          } else {
                            tmp71 = outer1_1;
                            if (0 === outer1_75) {
                              outer1_76(outer1_14);
                              tmp71 = tmp69;
                            }
                          }
                          if (tmp71 !== outer1_1) {
                            let tmp11 = outer1_15(tmp13, tmp60);
                          } else {
                            outer1_70 = tmp;
                            tmp11 = outer1_3;
                          }
                        }
                      }
                      outer1_70 = tmp;
                      tmp11 = outer1_3;
                    }
                    outer1_70 = tmp46;
                    tmp60 = outer1_3;
                  }
                }
                outer1_70 = tmp;
                tmp11 = outer1_3;
              }
              return tmp11;
            }
            outer1_70 = tmp;
            tmp11 = outer1_3;
          })();
        }
        return tmp;
      }
      function peg$parseoptionalFormatPattern() {
        if (peg$parse_() !== obj) {
          if (61 === closure_0.charCodeAt(c70)) {
            let tmp8 = c32;
            c70 = c70 + 1;
          } else {
            tmp8 = obj;
            if (0 === c75) {
              peg$fail(closure_33);
              tmp8 = tmp6;
            }
          }
          if (tmp8 !== obj) {
            const tmp15 = peg$parsenumber();
            if (tmp15 !== obj) {
              const items = [tmp8, tmp15];
              let substr = items;
            }
            if (substr !== obj) {
              substr = closure_0.substring(tmp3, c70);
            }
            if (substr === obj) {
              substr = peg$parsechars();
            }
            if (substr !== obj) {
              if (peg$parse_() !== obj) {
                if (123 === closure_0.charCodeAt(c70)) {
                  let tmp30 = c8;
                  c70 = c70 + 1;
                } else {
                  tmp30 = obj;
                  if (0 === c75) {
                    peg$fail(closure_9);
                    tmp30 = tmp28;
                  }
                }
                if (tmp30 !== obj) {
                  if (peg$parse_() !== obj) {
                    const tmp39 = peg$parsemessageFormatPattern();
                    if (tmp39 !== obj) {
                      if (peg$parse_() !== obj) {
                        if (125 === closure_0.charCodeAt(c70)) {
                          let tmp47 = c13;
                          c70 = c70 + 1;
                        } else {
                          tmp47 = obj;
                          if (0 === c75) {
                            peg$fail(closure_14);
                            tmp47 = tmp45;
                          }
                        }
                        if (tmp47 !== obj) {
                          let tmp2 = peg$c33(substr, tmp39);
                        } else {
                          c70 = tmp;
                          tmp2 = obj;
                        }
                      }
                    }
                  }
                }
                c70 = tmp;
                tmp2 = obj;
              }
            }
            c70 = tmp;
            tmp2 = obj;
          }
          c70 = tmp3;
          substr = obj;
        } else {
          c70 = tmp;
          tmp2 = obj;
        }
        return tmp2;
      }
      function peg$parsepluralStyle() {
        if (closure_0.substr(c70, 7) === c35) {
          let tmp4 = c35;
          c70 = c70 + 7;
        } else {
          tmp4 = obj;
          if (0 === c75) {
            peg$fail(closure_36);
            tmp4 = tmp2;
          }
        }
        if (tmp4 !== obj) {
          if (peg$parse_() !== obj) {
            const tmp12 = peg$parsenumber();
            if (tmp12 !== obj) {
              let tmp14 = peg$c36(tmp12);
            }
            if (tmp14 === obj) {
              tmp14 = c10;
            }
            if (tmp14 !== obj) {
              if (peg$parse_() !== obj) {
                const items = [];
                let tmp22 = peg$parseoptionalFormatPattern();
                if (tmp22 !== obj) {
                  let tmp24 = items;
                  if (tmp22 !== obj) {
                    do {
                      let arr = items.push(tmp22);
                      let tmp27 = peg$parseoptionalFormatPattern;
                      tmp22 = peg$parseoptionalFormatPattern();
                      let tmp28 = obj;
                      tmp24 = items;
                    } while (tmp22 !== obj);
                  }
                } else {
                  tmp24 = obj;
                }
                if (tmp24 !== obj) {
                  let tmp18 = peg$c37(tmp14, tmp24);
                } else {
                  c70 = tmp;
                  tmp18 = obj;
                }
              } else {
                c70 = tmp;
                tmp18 = obj;
              }
            } else {
              c70 = tmp;
              tmp18 = obj;
            }
            return tmp18;
          }
        }
        c70 = tmp;
        tmp14 = obj;
      }
      function peg$parsews() {
        closure_75 = closure_75 + 1;
        const items = [];
        if (regex.test(closure_0.charAt(closure_70))) {
          let charAtResult = closure_0.charAt(closure_70);
          closure_70 = closure_70 + 1;
        } else {
          charAtResult = obj;
          if (0 === closure_75) {
            peg$fail(closure_41);
            charAtResult = tmp;
          }
        }
        if (charAtResult !== obj) {
          let tmp10 = items;
          if (charAtResult !== obj) {
            do {
              let arr = items.push(charAtResult);
              let tmp13 = regex;
              let tmp14 = closure_0;
              let tmp15 = closure_70;
              if (regex.test(closure_0.charAt(closure_70))) {
                let tmp21 = closure_0;
                let tmp22 = closure_70;
                charAtResult = closure_0.charAt(closure_70);
                let tmp23 = closure_70;
                closure_70 = closure_70 + 1;
              } else {
                let tmp17 = closure_75;
                charAtResult = obj;
                if (0 === closure_75) {
                  let tmp18 = peg$fail;
                  let tmp19 = closure_41;
                  let tmp20 = peg$fail(closure_41);
                  charAtResult = tmp16;
                }
              }
              let tmp24 = obj;
              tmp10 = items;
            } while (charAtResult !== obj);
          }
        } else {
          tmp10 = obj;
        }
        closure_75 = closure_75 - 1;
        if (tmp10 === obj) {
          if (0 === closure_75) {
            peg$fail(closure_39);
          }
        }
        return tmp10;
      }
      function peg$parse_() {
        closure_75 = closure_75 + 1;
        let items = [];
        let tmp2 = peg$parsews();
        if (tmp2 !== obj) {
          do {
            let arr = items.push(tmp2);
            let tmp4 = peg$parsews;
            tmp2 = peg$parsews();
            let tmp5 = obj;
          } while (tmp2 !== obj);
        }
        if (items !== obj) {
          items = closure_0.substring(c70, c70);
        }
        closure_75 = closure_75 - 1;
        if (items === obj) {
          if (0 === closure_75) {
            peg$fail(closure_42);
          }
        }
        return items;
      }
      function peg$parsedigit() {
        if (regex2.test(closure_0.charAt(closure_70))) {
          let charAtResult = closure_0.charAt(closure_70);
          closure_70 = closure_70 + 1;
        } else {
          charAtResult = obj;
          if (0 === c75) {
            peg$fail(closure_44);
            charAtResult = tmp;
          }
        }
        return charAtResult;
      }
      function peg$parsehexDigit() {
        if (regex3.test(closure_0.charAt(closure_70))) {
          let charAtResult = closure_0.charAt(closure_70);
          closure_70 = closure_70 + 1;
        } else {
          charAtResult = obj;
          if (0 === c75) {
            peg$fail(closure_46);
            charAtResult = tmp;
          }
        }
        return charAtResult;
      }
      function peg$parsenumber() {
        if (48 === closure_0.charCodeAt(c70)) {
          let tmp3 = c47;
          c70 = c70 + 1;
        } else {
          tmp3 = obj;
          if (0 === c75) {
            peg$fail(closure_48);
            tmp3 = tmp;
          }
        }
        if (tmp3 === obj) {
          if (regex4.test(closure_0.charAt(c70))) {
            let charAtResult = closure_0.charAt(c70);
            c70 = c70 + 1;
          } else {
            charAtResult = obj;
            if (0 === c75) {
              peg$fail(closure_50);
              charAtResult = tmp8;
            }
          }
          if (charAtResult !== obj) {
            const items = [];
            let tmp20 = peg$parsedigit();
            if (tmp20 !== obj) {
              do {
                let arr = items.push(tmp20);
                let tmp23 = peg$parsedigit;
                tmp20 = peg$parsedigit();
                let tmp24 = obj;
              } while (tmp20 !== obj);
            }
            if (items !== obj) {
              const items1 = [charAtResult, items];
              let substr = items1;
            } else {
              c70 = tmp31;
              substr = obj;
            }
          } else {
            c70 = tmp31;
            substr = obj;
          }
          if (substr !== obj) {
            substr = closure_0.substring(tmp31, c70);
          }
          tmp3 = substr;
        }
        let tmp29 = tmp3;
        if (tmp3 !== obj) {
          tmp29 = peg$c50(tmp3);
        }
        return tmp29;
      }
      function peg$parsechar() {
        if (regex5.test(closure_0.charAt(c70))) {
          let charAtResult = closure_0.charAt(c70);
          c70 = c70 + 1;
        } else {
          charAtResult = obj;
          if (0 === c75) {
            peg$fail(closure_53);
            charAtResult = tmp;
          }
        }
        if (charAtResult === obj) {
          if (closure_0.substr(c70, 2) === c54) {
            let tmp12 = c54;
            c70 = c70 + 2;
          } else {
            tmp12 = obj;
            if (0 === c75) {
              peg$fail(closure_55);
              tmp12 = tmp10;
            }
          }
          if (tmp12 !== obj) {
            tmp12 = peg$c55();
          }
          if (tmp12 === obj) {
            if (closure_0.substr(c70, 2) === c57) {
              let tmp22 = c57;
              c70 = c70 + 2;
            } else {
              tmp22 = obj;
              if (0 === c75) {
                peg$fail(closure_58);
                tmp22 = tmp20;
              }
            }
            if (tmp22 !== obj) {
              tmp22 = peg$c58();
            }
            if (tmp22 === obj) {
              if (closure_0.substr(c70, 2) === c60) {
                let tmp32 = c60;
                c70 = c70 + 2;
              } else {
                tmp32 = obj;
                if (0 === c75) {
                  peg$fail(closure_61);
                  tmp32 = tmp30;
                }
              }
              if (tmp32 !== obj) {
                tmp32 = peg$c61();
              }
              if (tmp32 === obj) {
                if (closure_0.substr(c70, 2) === c63) {
                  let tmp42 = c63;
                  c70 = c70 + 2;
                } else {
                  tmp42 = obj;
                  if (0 === c75) {
                    peg$fail(closure_64);
                    tmp42 = tmp40;
                  }
                }
                if (tmp42 !== obj) {
                  tmp42 = peg$c64();
                }
                if (tmp42 !== obj) {
                  tmp32 = tmp42;
                } else {
                  if (closure_0.substr(c70, 2) === c66) {
                    let tmp52 = c66;
                    c70 = c70 + 2;
                  } else {
                    tmp52 = obj;
                    if (0 === c75) {
                      peg$fail(closure_67);
                      tmp52 = tmp50;
                    }
                  }
                  if (tmp52 === obj) {
                    c70 = tmp92;
                  }
                  const tmp60 = peg$parsehexDigit();
                  if (tmp60 !== obj) {
                    const tmp63 = peg$parsehexDigit();
                    if (tmp63 !== obj) {
                      const tmp66 = peg$parsehexDigit();
                      if (tmp66 !== obj) {
                        const tmp69 = peg$parsehexDigit();
                        if (tmp69 !== obj) {
                          const items = [tmp60, tmp63, tmp66, tmp69];
                          let substr = items;
                        }
                        if (substr !== obj) {
                          substr = closure_0.substring(tmp58, c70);
                        }
                        if (substr !== obj) {
                          let tmp76 = peg$c67(substr);
                        } else {
                          c70 = tmp92;
                          tmp76 = obj;
                        }
                      }
                    }
                  }
                  c70 = tmp58;
                  substr = obj;
                }
              }
              tmp22 = tmp32;
            }
            tmp12 = tmp22;
          }
          charAtResult = tmp12;
        }
        return charAtResult;
      }
      function peg$parsechars() {
        const items = [];
        let tmp = peg$parsechar();
        if (tmp !== obj) {
          let tmp2 = items;
          if (tmp !== obj) {
            do {
              let arr = items.push(tmp);
              let tmp5 = peg$parsechar;
              tmp = peg$parsechar();
              let tmp6 = obj;
              tmp2 = items;
            } while (tmp !== obj);
          }
        } else {
          tmp2 = obj;
        }
        let tmp7 = tmp2;
        if (tmp2 !== obj) {
          tmp7 = peg$c68(tmp2);
        }
        return tmp7;
      }
      let tmp = arguments.length > 1 ? arguments[1] : {};
      let obj = {};
      obj = { start: peg$parsestart };
      function peg$c1(elements) {
        return { type: "messageFormatPattern", elements };
      }
      function peg$c3(arg0) {
        let str = "";
        let num = 0;
        let str2 = "";
        if (0 < arg0.length) {
          do {
            let arr = arg0[num];
            let length2 = arr.length;
            let sum = str;
            let num2 = 0;
            let tmp2 = str;
            if (0 < length2) {
              do {
                sum = sum + arr[num2];
                num2 = num2 + 1;
                tmp2 = sum;
              } while (num2 < length2);
            }
            num = num + 1;
            str = tmp2;
            str2 = tmp2;
          } while (num < length);
        }
        return str2;
      }
      function peg$c4(value) {
        return { type: "messageTextElement", value };
      }
      const re6 = /^[^ \t\n\r,.+={}#]/;
      let closure_7 = { type: "class", value: "[^ \\t\\n\\r,.+={}#]", description: "[^ \\t\\n\\r,.+={}#]" };
      let c8 = "{";
      let closure_9 = { type: "literal", value: "{", description: "\"{\"" };
      let c10 = null;
      let c11 = ",";
      let closure_12 = { type: "literal", value: ",", description: "\",\"" };
      let c13 = "}";
      let closure_14 = { type: "literal", value: "}", description: "\"}\"" };
      function peg$c14(id) {
        const obj = { type: "argumentElement", id };
        let tmp = arg1;
        if (arg1) {
          tmp = arg1[2];
        }
        obj.format = tmp;
        return obj;
      }
      const number = "number";
      let closure_17 = { type: "literal", value: "number", description: "\"number\"" };
      let closure_19 = { type: "literal", value: "date", description: "\"date\"" };
      const time = "time";
      let closure_21 = { type: "literal", value: "time", description: "\"time\"" };
      function peg$c21(arg0, arg1) {
        const obj = { type: `${arg0}Format` };
        let tmp = arg1;
        if (arg1) {
          tmp = arg1[2];
        }
        obj.style = tmp;
        return obj;
      }
      const plural = "plural";
      let closure_24 = { type: "literal", value: "plural", description: "\"plural\"" };
      function peg$c24(type) {
        return { type: type.type, ordinal: false, offset: tmp, options: type.options };
      }
      const selectordinal = "selectordinal";
      let closure_27 = { type: "literal", value: "selectordinal", description: "\"selectordinal\"" };
      function peg$c27(type) {
        return { type: type.type, ordinal: true, offset: tmp, options: type.options };
      }
      const select = "select";
      let closure_30 = { type: "literal", value: "select", description: "\"select\"" };
      function peg$c30(options) {
        return { type: "selectFormat", options };
      }
      let c32 = "=";
      let closure_33 = { type: "literal", value: "=", description: "\"=\"" };
      function peg$c33(substr, value) {
        return { type: "optionalFormatPattern", selector: substr, value };
      }
      let c35 = "offset:";
      let closure_36 = { type: "literal", value: "offset:", description: "\"offset:\"" };
      function peg$c36(arg0) {
        return arg0;
      }
      function peg$c37(offset, options) {
        return { type: "pluralFormat", offset, options };
      }
      let closure_39 = { type: "other", description: "whitespace" };
      const re40 = /^[ \t\n\r]/;
      let closure_41 = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" };
      let closure_42 = { type: "other", description: "optionalWhitespace" };
      const re43 = /^[0-9]/;
      let closure_44 = { type: "class", value: "[0-9]", description: "[0-9]" };
      const re45 = /^[0-9a-f]/i;
      let closure_46 = { type: "class", value: "[0-9a-f]i", description: "[0-9a-f]i" };
      let c47 = "0";
      let closure_48 = { type: "literal", value: "0", description: "\"0\"" };
      const re49 = /^[1-9]/;
      let closure_50 = { type: "class", value: "[1-9]", description: "[1-9]" };
      function peg$c50(replaced) {
        return parseInt(replaced, 10);
      }
      const re52 = /^[^{}\\\0-\x1F \t\n\r]/;
      let closure_53 = { type: "class", value: "[^{}\\\\\\0-\\x1F\u007F \\t\\n\\r]", description: "[^{}\\\\\\0-\\x1F\u007F \\t\\n\\r]" };
      let c54 = "\\\\";
      let closure_55 = { type: "literal", value: "\\\\", description: "\"\\\\\\\\\"" };
      function peg$c55() {
        return "\\";
      }
      let c57 = "\\#";
      let closure_58 = { type: "literal", value: "\\#", description: "\"\\\\#\"" };
      function peg$c58() {
        return "\\#";
      }
      let c60 = "\\{";
      let closure_61 = { type: "literal", value: "\\{", description: "\"\\\\{\"" };
      function peg$c61() {
        return "{";
      }
      let c63 = "\\}";
      let closure_64 = { type: "literal", value: "\\}", description: "\"\\\\}\"" };
      function peg$c64() {
        return "}";
      }
      let c66 = "\\u";
      let closure_67 = { type: "literal", value: "\\u", description: "\"\\\\u\"" };
      function peg$c67(substr) {
        return String.fromCharCode(parseInt(substr, 16));
      }
      function peg$c68(join) {
        return join.join("");
      }
      let c70 = 0;
      let c71 = 0;
      let closure_72 = { line: 1, column: 1, seenCR: false };
      let c73 = 0;
      let closure_74 = [];
      let c75 = 0;
      if ("startRule" in tmp) {
        if (tmp.startRule in obj) {
          peg$parsestart = obj[tmp.startRule];
        } else {
          const _Error = Error;
          const error = new Error("Can't start parsing from rule \"" + tmp.startRule + "\".");
          throw error;
        }
      }
      const result = peg$parsestart();
      let tmp8 = result !== obj;
      if (tmp8) {
        if (c70 === arg0.length) {
          return result;
        }
      }
      if (tmp8) {
        tmp8 = c70 < arg0.length;
      }
      if (tmp8) {
        const result1 = peg$fail({ type: "end", description: "end of input" });
      }
      throw (function peg$buildException(arg0, closure_74, c73) {
        const tmp = (function peg$computePosDetails(c73) {
          if (outer1_71 !== c73) {
            if (outer1_71 > c73) {
              outer1_71 = 0;
              const outer1_72 = { line: 1, column: 1, seenCR: false };
            }
            let sum = outer1_71;
            if (outer1_71 < c73) {
              do {
                let tmp3 = outer1_0;
                let charAtResult = outer1_0.charAt(sum);
                let tmp5 = sum;
                if ("\n" === charAtResult) {
                  if (!tmp.seenCR) {
                    tmp.line = tmp.line + 1;
                  }
                  tmp.column = 1;
                  tmp.seenCR = false;
                } else {
                  if ("\r" !== charAtResult) {
                    if ("\u2028" !== charAtResult) {
                      if ("\u2029" !== charAtResult) {
                        tmp.column = tmp.column + 1;
                        tmp.seenCR = false;
                      }
                    }
                  }
                  tmp.line = tmp.line + 1;
                  tmp.column = 1;
                  tmp.seenCR = true;
                }
                sum = sum + 1;
              } while (sum < c73);
            }
            outer1_71 = c73;
          }
          return outer1_72;
        })(c73);
        let charAtResult = null;
        if (c73 < closure_0.length) {
          charAtResult = closure_0.charAt(c73);
        }
        if (null !== closure_74) {
          (function cleanupExpected(arr) {
            let sum;
            const sorted = arr.sort((description, description2) => {
              let num = -1;
              if (description.description >= description2.description) {
                let num2 = 0;
                if (description.description > description2.description) {
                  num2 = 1;
                }
                num = num2;
              }
              return num;
            });
            let num = 1;
            if (1 < arr.length) {
              do {
                if (arr[num - 1] === arr[num]) {
                  let spliceResult = arr.splice(num, 1);
                  sum = num;
                } else {
                  sum = num + 1;
                }
                num = sum;
              } while (sum < arr.length);
            }
          })(closure_74);
        }
        let tmp5 = closure_0;
        let tmp6 = null;
        tmp6 = (function buildMessage(closure_74, charAtResult) {
          let length;
          const arr = new Array(closure_74.length);
          let num = 0;
          if (0 < closure_74.length) {
            do {
              arr[num] = closure_74[num].description;
              num = num + 1;
              length = closure_74.length;
            } while (num < length);
          }
          if (closure_74.length > 1) {
            const substr = arr.slice(0, -1);
            let text = `${obj.join(", ")} or ${arr[closure_74.length - 1]}`;
          } else {
            text = arr[0];
          }
          let str3 = "end of input";
          const text1 = `Expected ${tmp}`;
          if (charAtResult) {
            str3 = `${"\"" + (function stringEscape(charAtResult) {
              function hex() { ... }
              let str = charAtResult.replace(/\\/g, "\\\\");
              const str2 = charAtResult.replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
              const str3 = charAtResult.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\x08/g, "\\b");
              const str4 = charAtResult.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\x08/g, "\\b").replace(/\t/g, "\\t");
              const str5 = charAtResult.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n");
              const str6 = charAtResult.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f");
              const str7 = charAtResult.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r");
              const str8 = charAtResult.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, () => { ... });
              const str9 = charAtResult.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, () => { ... }).replace(/[\x10-\x1F\x80-\xFF]/g, () => { ... });
              return charAtResult.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, () => { ... }).replace(/[\x10-\x1F\x80-\xFF]/g, () => { ... }).replace(/[\u0180-\u0FFF]/g, () => { ... }).replace(/[\u1080-\uFFFF]/g, () => { ... });
            })(charAtResult)}"`;
          }
          return text1 + " but " + str3 + " found.";
        })(closure_74, charAtResult);
        tmp5 = new tmp5(tmp6, closure_74, charAtResult, c73, tmp.line, tmp.column);
        return tmp5;
      })(null, closure_74, c73);
    }
  };
})();
