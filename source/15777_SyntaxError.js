// Module ID: 15777
// Function ID: 120731
// Name: SyntaxError
// Dependencies: []

// Module 15777 (SyntaxError)
arg5.default = () => {
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
  function peg$subclass(SyntaxError, Error) {
    class ctor {
      constructor() {
        this.constructor = SyntaxError;
        return;
      }
    }
    ctor.prototype = Error.prototype;
    const ctor = new ctor();
    SyntaxError.prototype = ctor;
  }(SyntaxError, Error);
  return {
    SyntaxError,
    parse(arg0) {
      const SyntaxError = arg0;
      function peg$fail(arg0) {
        if (closure_70 >= closure_73) {
          if (closure_70 > closure_73) {
            closure_73 = closure_70;
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
            let tmp3 = closure_78;
            tmp = closure_78();
            let tmp4 = closure_1;
          } while (tmp !== closure_1);
        }
        let tmp5 = items;
        if (items !== obj) {
          tmp5 = peg$c1(items);
        }
        return tmp5;
      }
      function peg$parsemessageFormatElement() {
        let tmp = function peg$parsemessageTextElement() {
          let tmp;
          const items = [];
          const tmp2 = callback6();
          if (tmp2 !== closure_1) {
            const tmp5 = callback8();
            if (tmp5 !== closure_1) {
              const tmp9 = callback6();
              let tmp3 = tmp9;
              if (tmp9 !== closure_1) {
                const items1 = [tmp2, tmp5, tmp9];
                let tmp12 = items1;
                tmp3 = tmp9;
              }
              if (tmp12 !== closure_1) {
                let tmp15 = items;
                if (tmp12 !== closure_1) {
                  while (true) {
                    let arr = items.push(tmp12);
                    let tmp19 = callback6;
                    let tmp18 = tmp;
                    let tmp20 = callback6();
                    let tmp21 = closure_1;
                    let tmp22 = tmp3;
                    if (tmp20 !== closure_1) {
                      let tmp23 = callback8;
                      let tmp24 = callback8();
                      let tmp25 = closure_1;
                      let tmp26 = tmp24;
                      tmp22 = tmp3;
                      if (tmp24 !== closure_1) {
                        let tmp27 = callback6;
                        let tmp28 = callback6();
                        let tmp29 = closure_1;
                        let tmp30 = tmp24;
                        tmp22 = tmp28;
                        if (tmp28 !== closure_1) {
                          let items2 = [tmp20, tmp24, tmp28];
                          tmp12 = items2;
                          let tmp31 = tmp24;
                          tmp22 = tmp28;
                          let tmp32 = closure_1;
                          tmp3 = tmp22;
                          tmp15 = items;
                          if (tmp12 === closure_1) {
                            break;
                          }
                        }
                      }
                    }
                    tmp = tmp18;
                    tmp12 = closure_3;
                  }
                }
              } else {
                tmp15 = closure_3;
              }
              let tmp34 = tmp15;
              if (tmp15 !== closure_1) {
                tmp34 = callback(tmp15);
              }
              if (tmp34 === closure_1) {
                let substr = callback5();
                if (substr !== closure_1) {
                  substr = closure_0.substring(tmp37, tmp);
                }
                tmp34 = substr;
                const tmp37 = tmp;
              }
              let tmp44 = tmp34;
              if (tmp34 !== closure_1) {
                tmp44 = callback2(tmp34);
              }
              return tmp44;
            }
          }
          tmp12 = closure_3;
        }();
        if (tmp === obj) {
          tmp = function peg$parseargumentElement() {
            if (123 === closure_0.charCodeAt(tmp)) {
              let tmp4 = closure_8;
              let tmp = tmp + 1;
            } else {
              tmp4 = closure_1;
              if (0 === closure_75) {
                callback4(closure_9);
                tmp4 = tmp2;
              }
            }
            if (tmp4 !== closure_1) {
              if (callback6() !== closure_1) {
                let tmp13 = callback7();
                if (tmp13 === closure_1) {
                  const items = [];
                  if (regex.test(closure_0.charAt(tmp))) {
                    let charAtResult = closure_0.charAt(tmp);
                    tmp = tmp + 1;
                  } else {
                    charAtResult = closure_1;
                    if (0 === closure_75) {
                      callback4(closure_7);
                      charAtResult = tmp15;
                    }
                  }
                  if (charAtResult !== closure_1) {
                    let substr = items;
                    if (charAtResult !== closure_1) {
                      do {
                        let arr = items.push(charAtResult);
                        let tmp28 = closure_6;
                        let tmp29 = closure_0;
                        let tmp30 = closure_70;
                        if (closure_6.test(closure_0.charAt(closure_70))) {
                          let tmp36 = closure_0;
                          let tmp37 = closure_70;
                          charAtResult = closure_0.charAt(closure_70);
                          let tmp38 = closure_70;
                          closure_70 = closure_70 + 1;
                        } else {
                          let tmp32 = closure_75;
                          charAtResult = closure_1;
                          if (0 === closure_75) {
                            let tmp33 = closure_76;
                            let tmp34 = closure_7;
                            let tmp35 = closure_76(closure_7);
                            charAtResult = tmp31;
                          }
                        }
                        let tmp39 = closure_1;
                        substr = items;
                      } while (charAtResult !== closure_1);
                    }
                  } else {
                    substr = closure_3;
                  }
                  if (substr !== closure_1) {
                    substr = closure_0.substring(tmp78, tmp);
                  }
                  tmp13 = substr;
                  const tmp78 = tmp;
                }
                if (tmp13 !== closure_1) {
                  if (callback6() !== closure_1) {
                    if (44 === closure_0.charCodeAt(tmp)) {
                      let tmp51 = closure_11;
                      tmp = tmp + 1;
                    } else {
                      tmp51 = closure_1;
                      if (0 === closure_75) {
                        callback4(closure_12);
                        tmp51 = tmp49;
                      }
                    }
                    if (tmp51 !== closure_1) {
                      const tmp58 = callback6();
                      if (tmp58 !== closure_1) {
                        const tmp61 = function peg$parseelementFormat() {
                          let arr = tmp;
                          if (closure_0.substr(tmp, 6) === closure_16) {
                            let tmp4 = closure_16;
                            let tmp = tmp + 6;
                          } else {
                            tmp4 = closure_1;
                            if (0 === closure_75) {
                              callback5(closure_17);
                              tmp4 = tmp2;
                            }
                          }
                          if (tmp4 === closure_1) {
                            arr = closure_0;
                            arr = tmp;
                            arr = closure_18;
                            if (closure_0.substr(tmp, 4) === closure_18) {
                              let tmp11 = closure_18;
                              tmp = tmp + 4;
                            } else {
                              tmp11 = closure_1;
                              if (0 === closure_75) {
                                callback5(closure_19);
                                tmp11 = tmp9;
                              }
                            }
                            if (tmp11 !== closure_1) {
                              tmp4 = tmp11;
                            } else if (closure_0.substr(tmp, 4) === closure_20) {
                              let tmp22 = closure_20;
                              tmp = tmp + 4;
                            } else {
                              tmp22 = closure_1;
                              if (0 === closure_75) {
                                callback5(closure_21);
                                tmp22 = tmp20;
                              }
                            }
                          }
                          if (tmp4 !== closure_1) {
                            if (callback8() !== closure_1) {
                              if (44 === closure_0.charCodeAt(tmp)) {
                                let tmp36 = closure_11;
                                tmp = tmp + 1;
                              } else {
                                tmp36 = closure_1;
                                if (0 === closure_75) {
                                  callback5(closure_12);
                                  tmp36 = tmp34;
                                }
                              }
                              if (tmp36 !== closure_1) {
                                const tmp43 = callback8();
                                if (tmp43 !== closure_1) {
                                  const tmp46 = callback9();
                                  if (tmp46 !== closure_1) {
                                    const items = [tmp36, tmp43, tmp46];
                                    let tmp48 = items;
                                  }
                                  if (tmp48 === closure_1) {
                                    tmp48 = closure_10;
                                  }
                                  if (tmp48 !== closure_1) {
                                    let tmp30 = callback(tmp4, tmp48);
                                  } else {
                                    tmp = arr;
                                    tmp30 = closure_3;
                                  }
                                }
                              }
                              tmp48 = closure_3;
                              const tmp31 = tmp;
                            }
                            if (tmp30 === closure_1) {
                              arr = tmp;
                              arr = closure_0;
                              arr = tmp;
                              arr = closure_23;
                              if (closure_0.substr(tmp, 6) === closure_23) {
                                let tmp55 = closure_23;
                                tmp = tmp + 6;
                              } else {
                                tmp55 = closure_1;
                                if (0 === closure_75) {
                                  callback5(closure_24);
                                  tmp55 = tmp53;
                                }
                              }
                              if (tmp55 !== closure_1) {
                                if (callback8() !== closure_1) {
                                  if (44 === closure_0.charCodeAt(tmp)) {
                                    let tmp68 = closure_11;
                                    tmp = tmp + 1;
                                  } else {
                                    tmp68 = closure_1;
                                    if (0 === closure_75) {
                                      callback5(closure_12);
                                      tmp68 = tmp66;
                                    }
                                  }
                                  if (tmp68 !== closure_1) {
                                    if (callback8() !== closure_1) {
                                      const tmp77 = callback7();
                                      if (tmp77 !== closure_1) {
                                        let tmp63 = callback2(tmp77);
                                      }
                                    }
                                  }
                                  tmp = arr;
                                  tmp63 = closure_3;
                                }
                                if (tmp63 === closure_1) {
                                  arr = tmp;
                                  arr = closure_0;
                                  arr = tmp;
                                  arr = closure_26;
                                  if (closure_0.substr(tmp, 13) === closure_26) {
                                    let tmp83 = closure_26;
                                    tmp = tmp + 13;
                                  } else {
                                    tmp83 = closure_1;
                                    if (0 === closure_75) {
                                      callback5(closure_27);
                                      tmp83 = tmp81;
                                    }
                                  }
                                  if (tmp83 !== closure_1) {
                                    if (callback8() !== closure_1) {
                                      if (44 === closure_0.charCodeAt(tmp)) {
                                        let tmp96 = closure_11;
                                        arr = tmp;
                                        tmp = tmp + 1;
                                      } else {
                                        tmp96 = closure_1;
                                        if (0 === closure_75) {
                                          callback5(closure_12);
                                          tmp96 = tmp94;
                                        }
                                      }
                                      arr = closure_1;
                                      if (tmp96 !== closure_1) {
                                        arr = callback8;
                                        arr = closure_1;
                                        if (callback8() !== closure_1) {
                                          arr = callback7;
                                          arr = callback7();
                                          arr = closure_1;
                                          if (arr !== closure_1) {
                                            arr = callback3;
                                            let tmp91 = callback3(arr);
                                          }
                                        }
                                      }
                                      tmp = arr;
                                      tmp91 = closure_3;
                                    }
                                    arr = closure_1;
                                    if (tmp91 !== closure_1) {
                                      tmp63 = tmp91;
                                    } else {
                                      arr = tmp;
                                      arr = closure_0;
                                      arr = tmp;
                                      arr = closure_29;
                                      if (closure_0.substr(tmp, 6) === closure_29) {
                                        arr = closure_29;
                                        arr = tmp;
                                        tmp = tmp + 6;
                                      } else {
                                        arr = closure_75;
                                        arr = closure_1;
                                        if (0 === closure_75) {
                                          arr = callback5;
                                          arr = closure_30;
                                          arr = callback5(closure_30);
                                        }
                                      }
                                      arr = closure_1;
                                      if (arr !== closure_1) {
                                        arr = callback8;
                                        arr = closure_1;
                                        if (callback8() !== closure_1) {
                                          arr = closure_0;
                                          arr = tmp;
                                          if (44 === closure_0.charCodeAt(tmp)) {
                                            arr = closure_11;
                                            arr = tmp;
                                            tmp = tmp + 1;
                                          } else {
                                            arr = closure_75;
                                            arr = closure_1;
                                            if (0 === closure_75) {
                                              arr = callback5;
                                              arr = closure_12;
                                              arr = callback5(closure_12);
                                            }
                                          }
                                          arr = closure_1;
                                          if (arr !== closure_1) {
                                            arr = callback8;
                                            arr = closure_1;
                                            if (callback8() !== closure_1) {
                                              const items1 = [];
                                              arr = callback6;
                                              arr = callback6();
                                              arr = closure_1;
                                              if (arr !== closure_1) {
                                                arr = closure_1;
                                                arr = items1;
                                                if (arr !== closure_1) {
                                                  do {
                                                    arr = items1.push(arr);
                                                    arr = closure_79;
                                                    arr = closure_79();
                                                    arr = closure_1;
                                                    arr = items1;
                                                  } while (arr !== closure_1);
                                                }
                                              } else {
                                                arr = closure_3;
                                              }
                                              arr = closure_1;
                                              if (arr !== closure_1) {
                                                arr = callback4;
                                                arr = callback4(arr);
                                              } else {
                                                tmp = arr;
                                                arr = closure_3;
                                              }
                                            } else {
                                              tmp = arr;
                                              arr = closure_3;
                                            }
                                          } else {
                                            tmp = arr;
                                            arr = closure_3;
                                          }
                                        } else {
                                          tmp = arr;
                                          arr = closure_3;
                                        }
                                      } else {
                                        tmp = arr;
                                        arr = closure_3;
                                      }
                                    }
                                  }
                                  tmp = arr;
                                  tmp91 = closure_3;
                                }
                                tmp30 = tmp63;
                              }
                              tmp = arr;
                              tmp63 = closure_3;
                            }
                            return tmp30;
                          }
                          tmp = arr;
                          tmp30 = closure_3;
                        }();
                        if (tmp61 !== closure_1) {
                          const items1 = [tmp51, tmp58, tmp61];
                          let tmp60 = items1;
                        } else {
                          tmp = tmp46;
                          tmp60 = closure_3;
                        }
                      }
                      if (tmp60 === closure_1) {
                        tmp60 = closure_10;
                      }
                      if (tmp60 !== closure_1) {
                        if (callback6() !== closure_1) {
                          if (125 === closure_0.charCodeAt(tmp)) {
                            let tmp71 = closure_13;
                            tmp = tmp + 1;
                          } else {
                            tmp71 = closure_1;
                            if (0 === closure_75) {
                              callback4(closure_14);
                              tmp71 = tmp69;
                            }
                          }
                          if (tmp71 !== closure_1) {
                            let tmp11 = callback3(tmp13, tmp60);
                          } else {
                            tmp11 = closure_3;
                          }
                        }
                      }
                      tmp11 = closure_3;
                    }
                    tmp = tmp46;
                    tmp60 = closure_3;
                  }
                }
                tmp11 = closure_3;
              }
              return tmp11;
            }
            tmp11 = closure_3;
          }();
        }
        return tmp;
      }
      function peg$parseoptionalFormatPattern(self) {
        if (peg$parse_() !== obj) {
          if (61 === self.charCodeAt(closure_70)) {
            let tmp8 = closure_32;
            closure_70 = closure_70 + 1;
          } else {
            tmp8 = obj;
            if (0 === closure_75) {
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
              substr = self.substring(tmp3, closure_70);
            }
            if (substr === obj) {
              substr = peg$parsechars();
            }
            if (substr !== obj) {
              if (peg$parse_() !== obj) {
                if (123 === self.charCodeAt(closure_70)) {
                  let tmp30 = closure_8;
                  closure_70 = closure_70 + 1;
                } else {
                  tmp30 = obj;
                  if (0 === closure_75) {
                    peg$fail(closure_9);
                    tmp30 = tmp28;
                  }
                }
                if (tmp30 !== obj) {
                  if (peg$parse_() !== obj) {
                    const tmp39 = peg$parsemessageFormatPattern();
                    if (tmp39 !== obj) {
                      if (peg$parse_() !== obj) {
                        if (125 === self.charCodeAt(closure_70)) {
                          let tmp47 = closure_13;
                          closure_70 = closure_70 + 1;
                        } else {
                          tmp47 = obj;
                          if (0 === closure_75) {
                            peg$fail(closure_14);
                            tmp47 = tmp45;
                          }
                        }
                        if (tmp47 !== obj) {
                          let tmp2 = peg$c33(substr, tmp39);
                        } else {
                          closure_70 = tmp;
                          tmp2 = obj;
                        }
                      }
                    }
                  }
                }
                closure_70 = tmp;
                tmp2 = obj;
              }
            }
            closure_70 = tmp;
            tmp2 = obj;
          }
          closure_70 = tmp3;
          substr = obj;
        } else {
          closure_70 = tmp;
          tmp2 = obj;
        }
        return tmp2;
      }
      function peg$parsepluralStyle() {
        if (arg0.substr(closure_70, 7) === closure_35) {
          let tmp4 = closure_35;
          closure_70 = closure_70 + 7;
        } else {
          tmp4 = obj;
          if (0 === closure_75) {
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
              tmp14 = closure_10;
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
                      let tmp27 = closure_79;
                      tmp22 = closure_79();
                      let tmp28 = closure_1;
                      tmp24 = items;
                    } while (tmp22 !== closure_1);
                  }
                } else {
                  tmp24 = obj;
                }
                if (tmp24 !== obj) {
                  let tmp18 = peg$c37(tmp14, tmp24);
                } else {
                  closure_70 = tmp;
                  tmp18 = obj;
                }
              } else {
                closure_70 = tmp;
                tmp18 = obj;
              }
            } else {
              closure_70 = tmp;
              tmp18 = obj;
            }
            return tmp18;
          }
        }
        closure_70 = tmp;
        tmp14 = obj;
      }
      function peg$parsews() {
        closure_75 = closure_75 + 1;
        const items = [];
        if (regex.test(arg0.charAt(closure_70))) {
          let charAtResult = arg0.charAt(closure_70);
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
              let tmp13 = closure_40;
              let tmp14 = closure_0;
              let tmp15 = closure_70;
              if (closure_40.test(closure_0.charAt(closure_70))) {
                let tmp21 = closure_0;
                let tmp22 = closure_70;
                charAtResult = closure_0.charAt(closure_70);
                let tmp23 = closure_70;
                closure_70 = closure_70 + 1;
              } else {
                let tmp17 = closure_75;
                charAtResult = closure_1;
                if (0 === closure_75) {
                  let tmp18 = closure_76;
                  let tmp19 = closure_41;
                  let tmp20 = closure_76(closure_41);
                  charAtResult = tmp16;
                }
              }
              let tmp24 = closure_1;
              tmp10 = items;
            } while (charAtResult !== closure_1);
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
            let tmp4 = closure_81;
            tmp2 = closure_81();
            let tmp5 = closure_1;
          } while (tmp2 !== closure_1);
        }
        if (items !== obj) {
          items = arg0.substring(closure_70, closure_70);
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
        if (regex2.test(arg0.charAt(closure_70))) {
          let charAtResult = arg0.charAt(closure_70);
          closure_70 = closure_70 + 1;
        } else {
          charAtResult = obj;
          if (0 === closure_75) {
            peg$fail(closure_44);
            charAtResult = tmp;
          }
        }
        return charAtResult;
      }
      function peg$parsehexDigit() {
        if (regex3.test(arg0.charAt(closure_70))) {
          let charAtResult = arg0.charAt(closure_70);
          closure_70 = closure_70 + 1;
        } else {
          charAtResult = obj;
          if (0 === closure_75) {
            peg$fail(closure_46);
            charAtResult = tmp;
          }
        }
        return charAtResult;
      }
      function peg$parsenumber(self) {
        if (48 === self.charCodeAt(closure_70)) {
          let tmp3 = closure_47;
          closure_70 = closure_70 + 1;
        } else {
          tmp3 = obj;
          if (0 === closure_75) {
            peg$fail(closure_48);
            tmp3 = tmp;
          }
        }
        if (tmp3 === obj) {
          if (regex4.test(self.charAt(closure_70))) {
            let charAtResult = self.charAt(closure_70);
            closure_70 = closure_70 + 1;
          } else {
            charAtResult = obj;
            if (0 === closure_75) {
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
                let tmp23 = closure_83;
                tmp20 = closure_83();
                let tmp24 = closure_1;
              } while (tmp20 !== closure_1);
            }
            if (items !== obj) {
              const items1 = [charAtResult, items];
              let substr = items1;
            } else {
              closure_70 = tmp31;
              substr = obj;
            }
          } else {
            closure_70 = tmp31;
            substr = obj;
          }
          if (substr !== obj) {
            substr = self.substring(tmp31, closure_70);
          }
          tmp3 = substr;
        }
        let tmp29 = tmp3;
        if (tmp3 !== obj) {
          tmp29 = peg$c50(tmp3);
        }
        return tmp29;
      }
      function peg$parsechar(self) {
        if (regex5.test(self.charAt(closure_70))) {
          let charAtResult = self.charAt(closure_70);
          closure_70 = closure_70 + 1;
        } else {
          charAtResult = obj;
          if (0 === closure_75) {
            peg$fail(closure_53);
            charAtResult = tmp;
          }
        }
        if (charAtResult === obj) {
          if (self.substr(closure_70, 2) === closure_54) {
            let tmp12 = closure_54;
            closure_70 = closure_70 + 2;
          } else {
            tmp12 = obj;
            if (0 === closure_75) {
              peg$fail(closure_55);
              tmp12 = tmp10;
            }
          }
          if (tmp12 !== obj) {
            tmp12 = peg$c55();
          }
          if (tmp12 === obj) {
            if (self.substr(closure_70, 2) === closure_57) {
              let tmp22 = closure_57;
              closure_70 = closure_70 + 2;
            } else {
              tmp22 = obj;
              if (0 === closure_75) {
                peg$fail(closure_58);
                tmp22 = tmp20;
              }
            }
            if (tmp22 !== obj) {
              tmp22 = peg$c58();
            }
            if (tmp22 === obj) {
              if (self.substr(closure_70, 2) === closure_60) {
                let tmp32 = closure_60;
                closure_70 = closure_70 + 2;
              } else {
                tmp32 = obj;
                if (0 === closure_75) {
                  peg$fail(closure_61);
                  tmp32 = tmp30;
                }
              }
              if (tmp32 !== obj) {
                tmp32 = peg$c61();
              }
              if (tmp32 === obj) {
                if (self.substr(closure_70, 2) === closure_63) {
                  let tmp42 = closure_63;
                  closure_70 = closure_70 + 2;
                } else {
                  tmp42 = obj;
                  if (0 === closure_75) {
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
                  if (self.substr(closure_70, 2) === closure_66) {
                    let tmp52 = closure_66;
                    closure_70 = closure_70 + 2;
                  } else {
                    tmp52 = obj;
                    if (0 === closure_75) {
                      peg$fail(closure_67);
                      tmp52 = tmp50;
                    }
                  }
                  if (tmp52 === obj) {
                    closure_70 = tmp92;
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
                          substr = self.substring(tmp58, closure_70);
                        }
                        if (substr !== obj) {
                          let tmp76 = peg$c67(substr);
                        } else {
                          closure_70 = tmp92;
                          tmp76 = obj;
                        }
                      }
                    }
                  }
                  closure_70 = tmp58;
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
              let tmp5 = closure_86;
              tmp = closure_86();
              let tmp6 = closure_1;
              tmp2 = items;
            } while (tmp !== closure_1);
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
      const tmp = arguments.length > 1 ? arguments[1] : {};
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
      let closure_6 = /^[^ \t\n\r,.+={}#]/;
      let closure_7 = { 0: "literal", startHeight: "\\u", startExpanded: "\"\\\\u\"" };
      let closure_8 = "{";
      let closure_9 = { 0: 1, startHeight: 1, startExpanded: false };
      let closure_10 = null;
      let closure_11 = ",";
      let closure_12 = { 0: "en-150", startHeight: "en-001", startExpanded: "en-AG" };
      let closure_13 = "}";
      let closure_14 = { 0: "en-AI", startHeight: "en-001", startExpanded: "en-AT" };
      function peg$c14(id) {
        const obj = { type: "argumentElement", id };
        let tmp = arg1;
        if (arg1) {
          tmp = arg1[2];
        }
        obj.format = tmp;
        return obj;
      }
      let closure_16 = "number";
      let closure_17 = { 0: false, startHeight: false, startExpanded: false };
      let closure_18 = "date";
      let closure_19 = { 0: false, startHeight: false, startExpanded: false };
      let closure_20 = "time";
      let closure_21 = { 0: "<string:888820234>", startHeight: "<string:3461483093>", startExpanded: "<string:1376408842>" };
      function peg$c21(arg0, arg1) {
        const obj = { type: `${arg0}Format` };
        let tmp = arg1;
        if (arg1) {
          tmp = arg1[2];
        }
        obj.style = tmp;
        return obj;
      }
      let closure_23 = "plural";
      let closure_24 = { 0: null, startHeight: null, startExpanded: null };
      function peg$c24(type) {
        return { type: type.type, ordinal: false, offset: tmp, options: type.options };
      }
      let closure_26 = "selectordinal";
      let closure_27 = { 0: null, startHeight: null, startExpanded: null };
      function peg$c27(type) {
        return { type: type.type, ordinal: true, offset: tmp, options: type.options };
      }
      let closure_29 = "select";
      let closure_30 = { 0: null, startHeight: null, startExpanded: null };
      function peg$c30(options) {
        return { type: "selectFormat", options };
      }
      let closure_32 = "=";
      let closure_33 = { 0: null, startHeight: null, startExpanded: null };
      function peg$c33(substr, value) {
        return { type: "optionalFormatPattern", selector: substr, value };
      }
      let closure_35 = "offset:";
      let closure_36 = { 0: null, startHeight: null, startExpanded: null };
      function peg$c36(arg0) {
        return arg0;
      }
      function peg$c37(offset, options) {
        return { type: "pluralFormat", offset, options };
      }
      let closure_39 = { 1643106979: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007076995254249983, 571364423: "en-FI" };
      let closure_40 = /^[ \t\n\r]/;
      let closure_41 = { 0: null, startHeight: null, startExpanded: null };
      let closure_42 = { 1643106979: false, 571364423: false };
      let closure_43 = /^[0-9]/;
      let closure_44 = { 0: null, startHeight: null, startExpanded: null };
      let closure_45 = /^[0-9a-f]/i;
      let closure_46 = { 0: 1636954637935554200000000000000000000000000000000000000000000000000000000000000000000000, startHeight: 16002627251136754000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, startExpanded: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000950925368912061 };
      let closure_47 = "0";
      let closure_48 = { 0: "total", startHeight: "en-GM", startExpanded: "en-001" };
      let closure_49 = /^[1-9]/;
      let closure_50 = { 0: "en-HK", startHeight: "en-001", startExpanded: "en-IL" };
      function peg$c50(replaced) {
        return parseInt(replaced, 10);
      }
      let closure_52 = /^[^{}\\\0-\x1F \t\n\r]/;
      let closure_53 = { 0: "add", startHeight: "View", startExpanded: "accessible" };
      let closure_54 = "\\\\";
      let closure_55 = { 0: null, startHeight: null, startExpanded: null };
      function peg$c55() {
        return "\\";
      }
      let closure_57 = "\\#";
      let closure_58 = { 0: false, startHeight: false, startExpanded: false };
      function peg$c58() {
        return "\\#";
      }
      let closure_60 = "\\{";
      let closure_61 = { 0: "total", startHeight: "en-KY", startExpanded: "en-001" };
      function peg$c61() {
        return "{";
      }
      let closure_63 = "\\}";
      let closure_64 = { 0: "en-LR", startHeight: "en-001", startExpanded: "en-LS" };
      function peg$c64() {
        return "}";
      }
      let closure_66 = "\\u";
      let closure_67 = { 0: "<string:605966858>", startHeight: "<string:2438072917>", startExpanded: "<string:1376409016>" };
      function peg$c67(substr) {
        return String.fromCharCode(parseInt(substr, 16));
      }
      function peg$c68(join) {
        return join.join("");
      }
      let closure_70 = 0;
      let closure_71 = 0;
      let closure_72 = { 0: null, -2: null, 0: null };
      let closure_73 = 0;
      let closure_74 = [];
      let closure_75 = 0;
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
        if (closure_70 === arg0.length) {
          return result;
        }
      }
      if (tmp8) {
        tmp8 = closure_70 < arg0.length;
      }
      if (tmp8) {
        const result1 = peg$fail({ 1643106979: -633269916, 571364423: 1912603216 });
      }
      throw function peg$buildException(arg0, closure_74, closure_73) {
        const tmp = function peg$computePosDetails(closure_73) {
          if (closure_73 !== closure_73) {
            if (closure_73 > closure_73) {
              closure_73 = 0;
              let closure_72 = { 0: null, -2: null, 0: null };
            }
            let sum = closure_73;
            if (closure_73 < closure_73) {
              do {
                let tmp3 = closure_0;
                let charAtResult = closure_0.charAt(sum);
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
              } while (sum < closure_73);
            }
          }
          return closure_72;
        }(closure_73);
        let charAtResult = null;
        if (closure_73 < arg0.length) {
          charAtResult = arg0.charAt(closure_73);
        }
        if (null !== closure_74) {
          function cleanupExpected(arr) {
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
          }(closure_74);
        }
        let tmp5 = arg0;
        let tmp6 = null;
        tmp6 = function buildMessage(closure_74, charAtResult) {
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
            str3 = `${"\"" + function stringEscape(charAtResult) {
              function hex() { ... }
              const str = charAtResult.replace(/\\/g, "\\\\");
              const str2 = charAtResult.replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
              const str3 = charAtResult.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\x08/g, "\\b");
              const str4 = charAtResult.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\x08/g, "\\b").replace(/\t/g, "\\t");
              const str5 = charAtResult.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n");
              const str6 = charAtResult.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f");
              const str7 = charAtResult.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r");
              const str8 = charAtResult.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, () => { ... });
              const str9 = charAtResult.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, () => { ... }).replace(/[\x10-\x1F\x80-\xFF]/g, () => { ... });
              return charAtResult.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, () => { ... }).replace(/[\x10-\x1F\x80-\xFF]/g, () => { ... }).replace(/[\u0180-\u0FFF]/g, () => { ... }).replace(/[\u1080-\uFFFF]/g, () => { ... });
            }(charAtResult)}"`;
          }
          return text1 + " but " + str3 + " found.";
        }(closure_74, charAtResult);
        tmp5 = new tmp5(tmp6, closure_74, charAtResult, closure_73, tmp.line, tmp.column);
        return tmp5;
      }(null, closure_74, closure_73);
    }
  };
}();
