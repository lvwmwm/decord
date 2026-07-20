// Module ID: 8017
// Function ID: 63610
// Name: peg$SyntaxError
// Dependencies: []

// Module 8017 (peg$SyntaxError)
function peg$SyntaxError(message, expected, found, location) {
  this.message = message;
  this.expected = expected;
  this.found = found;
  this.location = location;
  this.name = "SyntaxError";
  if ("function" === typeof Error.captureStackTrace) {
    const _Error = Error;
    Error.captureStackTrace(tmp, peg$SyntaxError);
  }
}
function peg$subclass(peg$SyntaxError, Error) {
  class ctor {
    constructor() {
      this.constructor = peg$SyntaxError;
      return;
    }
  }
  ctor.prototype = Error.prototype;
  const ctor = new ctor();
  peg$SyntaxError.prototype = ctor;
}(peg$SyntaxError, Error);
peg$SyntaxError.buildMessage = (arg0, arg1) => {
  let length;
  function hex(str) {
    str = str.charCodeAt(0);
    return str.charCodeAt(0).toString(16).toUpperCase();
  }
  function literalEscape(str) {
    str = str.replace(/\\/g, "\\\\");
    const str2 = str.replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
    const str3 = str.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0");
    const str4 = str.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t");
    const str5 = str.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n");
    const str6 = str.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r");
    return str.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (arg0) => "\\x0" + callback(arg0)).replace(/[\x10-\x1F\x7F-\x9F]/g, (arg0) => "\\x" + callback(arg0));
  }
  function classEscape(str) {
    str = str.replace(/\\/g, "\\\\");
    const str2 = str.replace(/\\/g, "\\\\").replace(/\]/g, "\\]");
    const str3 = str.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^");
    const str4 = str.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-");
    const str5 = str.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0");
    const str6 = str.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t");
    const str7 = str.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n");
    const str8 = str.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r");
    return str.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (arg0) => "\\x0" + callback(arg0)).replace(/[\x10-\x1F\x7F-\x9F]/g, (arg0) => "\\x" + callback(arg0));
  }
  const arr = new Array(arg0.length);
  let num = 0;
  if (0 < arg0.length) {
    do {
      let tmp = arg0[num];
      arr[num] = obj[tmp.type](tmp);
      num = num + 1;
      length = arg0.length;
    } while (num < length);
  }
  const sorted = arr.sort();
  if (arr.length > 0) {
    let num3 = 1;
    let num4 = 1;
    let num5 = 1;
    if (1 < arr.length) {
      do {
        let sum = num4;
        if (arr[num3 - 1] !== arr[num3]) {
          arr[num4] = arr[num3];
          sum = num4 + 1;
        }
        num3 = num3 + 1;
        num4 = sum;
        num5 = sum;
      } while (num3 < arr.length);
    }
    arr.length = num5;
  }
  if (1 === arr.length) {
    let first = arr[0];
  } else if (2 === length2) {
    first = `${arr[0]} or ${arr[1]}`;
  } else {
    const substr = arr.slice(0, -1);
    first = `${obj2.join(", ")}, or ${arr[arr.length - 1]}`;
  }
  let str4 = "end of input";
  const text = `Expected ${tmp4}`;
  if (arg1) {
    str4 = `${"\"" + literalEscape(arg1)}"`;
  }
  return text + " but " + str4 + " found.";
};

export default {
  SyntaxError: peg$SyntaxError,
  parse: function peg$parse(str) {
    let obj = arg1;
    const peg$SyntaxError = str;
    function peg$literalExpectation(matrix, arg1) {
      const obj = { "Null": 51500800, "Null": 56348928, "Null": 53526272, text: matrix };
      return obj;
    }
    function peg$classExpectation(items, arg1, arg2) {
      const obj = { GuildsNodeType: true, temporaryFilename: true, renderSettingSearchResultItem: true, onClickManagePremiumGuild: true, parts: items };
      return obj;
    }
    function peg$computePosDetails(arg0) {
      let tmp8;
      if (items1[arg0]) {
        return tmp;
      } else {
        const diff = arg0 - 1;
        let tmp4 = diff;
        let sum = diff;
        if (!items1[diff]) {
          do {
            let diff1 = tmp4 - 1;
            let tmp7 = closure_49;
            tmp4 = diff1;
            sum = diff1;
            tmp8 = closure_49[diff1];
          } while (!tmp8);
        }
        const obj = {};
        ({ line: obj.line, column: obj.column } = items1[sum]);
        if (sum < arg0) {
          do {
            let tmp10 = closure_0;
            let tmp11 = sum;
            if (10 === closure_0.charCodeAt(sum)) {
              obj.line = obj.line + 1;
              obj.column = 1;
            } else {
              obj.column = obj.column + 1;
            }
            sum = sum + 1;
          } while (sum < arg0);
        }
        items1[arg0] = obj;
        return obj;
      }
    }
    function peg$computeLocation(closure_50, closure_502) {
      const tmp = peg$computePosDetails(closure_50);
      const tmp2 = peg$computePosDetails(closure_502);
      const start = { offset: closure_50, line: tmp.line, column: tmp.column };
      const end = { offset: closure_502, line: tmp2.line, column: tmp2.column };
      return { start, end };
    }
    function peg$fail(arg0) {
      if (closure_48 >= closure_50) {
        if (closure_48 > closure_50) {
          closure_50 = closure_48;
          let arr = [];
        }
        arr = arr.push(arg0);
      }
    }
    function peg$parsetransformList() {
      const items = [];
      let tmp2 = peg$parsewsp();
      if (tmp2 !== obj) {
        do {
          let arr = items.push(tmp2);
          let tmp4 = closure_66;
          tmp2 = closure_66();
          let tmp5 = closure_1;
        } while (tmp2 !== closure_1);
      }
      if (items !== obj) {
        let tmp8 = peg$parsetransforms();
        if (tmp8 === obj) {
          tmp8 = null;
        }
        if (tmp8 !== obj) {
          const items1 = [];
          let tmp12 = peg$parsewsp();
          if (tmp12 !== obj) {
            do {
              arr = items1.push(tmp12);
              let tmp15 = closure_66;
              tmp12 = closure_66();
              let tmp16 = closure_1;
            } while (tmp12 !== closure_1);
          }
          if (items1 !== obj) {
            let tmp6 = peg$c0(tmp8);
          } else {
            let closure_48 = tmp;
            tmp6 = obj;
          }
        } else {
          closure_48 = tmp;
          tmp6 = obj;
        }
      } else {
        closure_48 = tmp;
        tmp6 = obj;
      }
      return tmp6;
    }
    function peg$parsetransforms() {
      const tmp2 = peg$parsetransform();
      if (tmp2 !== obj) {
        const items = [];
        let tmp5 = peg$parsecommaWsp();
        if (tmp5 !== obj) {
          do {
            let arr = items.push(tmp5);
            let tmp8 = closure_60;
            tmp5 = closure_60();
            let tmp9 = closure_1;
          } while (tmp5 !== closure_1);
        }
        if (items !== obj) {
          const tmp12 = peg$parsetransforms();
          if (tmp12 !== obj) {
            let tmp3 = peg$c1(tmp2, tmp12);
          }
        }
        let closure_48 = tmp;
        tmp3 = obj;
      } else {
        closure_48 = tmp;
        tmp3 = obj;
      }
      if (tmp3 === obj) {
        tmp3 = peg$parsetransform();
      }
      return tmp3;
    }
    function peg$parsetransform(self) {
      let arr2 = closure_48;
      if (self.substr(closure_48, 6) === closure_4) {
        let tmp4 = closure_4;
        closure_48 = closure_48 + 6;
      } else {
        tmp4 = obj;
        if (0 === closure_52) {
          peg$fail(closure_5);
          tmp4 = tmp2;
        }
      }
      if (tmp4 !== obj) {
        const items = [];
        let tmp11 = peg$parsewsp();
        if (tmp11 !== obj) {
          do {
            let arr = items.push(tmp11);
            let tmp14 = closure_66;
            tmp11 = closure_66();
            let tmp15 = closure_1;
          } while (tmp11 !== closure_1);
        }
        if (items !== obj) {
          if (40 === self.charCodeAt(closure_48)) {
            let tmp21 = closure_6;
            closure_48 = closure_48 + 1;
          } else {
            tmp21 = obj;
            if (0 === closure_52) {
              peg$fail(closure_7);
              tmp21 = tmp19;
            }
          }
          if (tmp21 !== obj) {
            const items1 = [];
            let tmp28 = peg$parsewsp();
            if (tmp28 !== obj) {
              do {
                arr = items1.push(tmp28);
                let tmp31 = closure_66;
                tmp28 = closure_66();
                let tmp32 = closure_1;
              } while (tmp28 !== closure_1);
            }
            if (items1 !== obj) {
              const tmp35 = peg$parsenumber();
              if (tmp35 !== obj) {
                if (peg$parsecommaWsp() !== obj) {
                  const tmp40 = peg$parsenumber();
                  if (tmp40 !== obj) {
                    if (peg$parsecommaWsp() !== obj) {
                      const tmp45 = peg$parsenumber();
                      if (tmp45 !== obj) {
                        if (peg$parsecommaWsp() !== obj) {
                          const tmp50 = peg$parsenumber();
                          if (tmp50 !== obj) {
                            if (peg$parsecommaWsp() !== obj) {
                              const tmp55 = peg$parsenumber();
                              if (tmp55 !== obj) {
                                if (peg$parsecommaWsp() !== obj) {
                                  const tmp60 = peg$parsenumber();
                                  if (tmp60 !== obj) {
                                    const items2 = [];
                                    let tmp63 = peg$parsewsp();
                                    if (tmp63 !== obj) {
                                      do {
                                        let arr1 = items2.push(tmp63);
                                        let tmp66 = closure_66;
                                        tmp63 = closure_66();
                                        let tmp67 = closure_1;
                                      } while (tmp63 !== closure_1);
                                    }
                                    if (items2 !== obj) {
                                      if (41 === self.charCodeAt(closure_48)) {
                                        let tmp73 = closure_8;
                                        closure_48 = closure_48 + 1;
                                      } else {
                                        tmp73 = obj;
                                        if (0 === closure_52) {
                                          peg$fail(closure_9);
                                          tmp73 = tmp71;
                                        }
                                      }
                                      if (tmp73 !== obj) {
                                        let tmp9 = peg$c8(tmp35, tmp40, tmp45, tmp50, tmp55, tmp60);
                                      } else {
                                        closure_48 = arr2;
                                        tmp9 = obj;
                                      }
                                    } else {
                                      closure_48 = arr2;
                                      tmp9 = obj;
                                    }
                                  } else {
                                    closure_48 = arr2;
                                    tmp9 = obj;
                                  }
                                } else {
                                  closure_48 = arr2;
                                  tmp9 = obj;
                                }
                              } else {
                                closure_48 = arr2;
                                tmp9 = obj;
                              }
                            } else {
                              closure_48 = arr2;
                              tmp9 = obj;
                            }
                          } else {
                            closure_48 = arr2;
                            tmp9 = obj;
                          }
                        } else {
                          closure_48 = arr2;
                          tmp9 = obj;
                        }
                      } else {
                        closure_48 = arr2;
                        tmp9 = obj;
                      }
                    } else {
                      closure_48 = arr2;
                      tmp9 = obj;
                    }
                  } else {
                    closure_48 = arr2;
                    tmp9 = obj;
                  }
                } else {
                  closure_48 = arr2;
                  tmp9 = obj;
                }
              } else {
                closure_48 = arr2;
                tmp9 = obj;
              }
            } else {
              closure_48 = arr2;
              tmp9 = obj;
            }
          } else {
            closure_48 = arr2;
            tmp9 = obj;
          }
        } else {
          closure_48 = arr2;
          tmp9 = obj;
        }
      } else {
        closure_48 = arr2;
        tmp9 = obj;
      }
      let tmp86 = tmp9 === obj;
      if (!tmp86) {
        if (!tmp86) {
          if (tmp86) {
            arr2 = function peg$parserotate() {
              if (closure_0.substr(tmp87, 6) === closure_17) {
                let tmp4 = closure_17;
                let tmp87 = tmp87 + 6;
              } else {
                tmp4 = closure_1;
                if (0 === closure_52) {
                  callback3(closure_18);
                  tmp4 = tmp2;
                }
              }
              if (tmp4 !== closure_1) {
                const items = [];
                let tmp11 = callback6();
                if (tmp11 !== closure_1) {
                  do {
                    let arr = items.push(tmp11);
                    let tmp14 = closure_66;
                    tmp11 = closure_66();
                    let tmp15 = closure_1;
                  } while (tmp11 !== closure_1);
                }
                if (items !== closure_1) {
                  if (40 === closure_0.charCodeAt(tmp87)) {
                    let tmp21 = closure_6;
                    tmp87 = tmp87 + 1;
                  } else {
                    tmp21 = closure_1;
                    if (0 === closure_52) {
                      callback3(closure_7);
                      tmp21 = tmp19;
                    }
                  }
                  if (tmp21 !== closure_1) {
                    const items1 = [];
                    let tmp28 = callback6();
                    if (tmp28 !== closure_1) {
                      do {
                        arr = items1.push(tmp28);
                        let tmp31 = closure_66;
                        tmp28 = closure_66();
                        let tmp32 = closure_1;
                      } while (tmp28 !== closure_1);
                    }
                    if (items1 !== closure_1) {
                      const tmp35 = callback4();
                      if (tmp35 !== closure_1) {
                        if (callback5() !== closure_1) {
                          const tmp41 = callback4();
                          if (tmp41 !== closure_1) {
                            if (callback5() !== closure_1) {
                              const tmp46 = callback4();
                              if (tmp46 !== closure_1) {
                                let tmp48 = callback2(tmp41, tmp46);
                              }
                              if (tmp48 === closure_1) {
                                tmp48 = null;
                              }
                              if (tmp48 !== closure_1) {
                                const items2 = [];
                                let tmp53 = callback6();
                                if (tmp53 !== closure_1) {
                                  do {
                                    let arr1 = items2.push(tmp53);
                                    let tmp56 = closure_66;
                                    tmp53 = closure_66();
                                    let tmp57 = closure_1;
                                  } while (tmp53 !== closure_1);
                                }
                                if (items2 !== closure_1) {
                                  if (41 === closure_0.charCodeAt(tmp87)) {
                                    let tmp63 = closure_8;
                                    tmp87 = tmp87 + 1;
                                  } else {
                                    tmp63 = closure_1;
                                    if (0 === closure_52) {
                                      callback3(closure_9);
                                      tmp63 = tmp61;
                                    }
                                  }
                                  if (tmp63 !== closure_1) {
                                    let tmp9 = callback(tmp35, tmp48);
                                  } else {
                                    tmp87 = tmp;
                                    tmp9 = closure_1;
                                  }
                                } else {
                                  tmp87 = tmp;
                                  tmp9 = closure_1;
                                }
                              } else {
                                tmp87 = tmp;
                                tmp9 = closure_1;
                              }
                            }
                          }
                        }
                        tmp48 = closure_1;
                        const tmp37 = tmp87;
                      } else {
                        tmp87 = tmp;
                        tmp9 = closure_1;
                      }
                    } else {
                      tmp87 = tmp;
                      tmp9 = closure_1;
                    }
                  } else {
                    tmp87 = tmp;
                    tmp9 = closure_1;
                  }
                } else {
                  tmp87 = tmp;
                  tmp9 = closure_1;
                }
              } else {
                tmp87 = tmp;
                tmp9 = closure_1;
              }
              return tmp9;
            }();
            arr2 = obj;
            tmp86 = arr2 === obj;
            tmp9 = arr2;
          }
          if (!tmp86) {
            if (!tmp86) {
              return tmp9;
            } else {
              arr2 = closure_48;
              arr2 = self;
              arr2 = closure_48;
              arr2 = closure_23;
              if (self.substr(closure_48, 5) === closure_23) {
                arr2 = closure_23;
                arr2 = closure_48;
                closure_48 = closure_48 + 5;
              } else {
                arr2 = closure_52;
                arr2 = obj;
                if (0 === closure_52) {
                  arr2 = peg$fail;
                  arr2 = closure_24;
                  arr2 = peg$fail(closure_24);
                }
              }
              arr2 = obj;
              if (arr2 !== obj) {
                const items3 = [];
                arr2 = peg$parsewsp;
                arr2 = peg$parsewsp();
                arr2 = obj;
                if (arr2 !== obj) {
                  do {
                    arr2 = items3.push(arr2);
                    arr2 = closure_66;
                    arr2 = closure_66();
                    arr2 = closure_1;
                  } while (arr2 !== closure_1);
                }
                arr2 = obj;
                if (items3 !== obj) {
                  arr2 = self;
                  arr2 = closure_48;
                  if (40 === self.charCodeAt(closure_48)) {
                    arr2 = closure_6;
                    arr2 = closure_48;
                    closure_48 = closure_48 + 1;
                  } else {
                    arr2 = closure_52;
                    arr2 = obj;
                    if (0 === closure_52) {
                      arr2 = peg$fail;
                      arr2 = closure_7;
                      arr2 = peg$fail(closure_7);
                    }
                  }
                  arr2 = obj;
                  if (arr2 !== obj) {
                    const items4 = [];
                    arr2 = peg$parsewsp;
                    arr2 = peg$parsewsp();
                    arr2 = obj;
                    if (arr2 !== obj) {
                      do {
                        arr2 = items4.push(arr2);
                        arr2 = closure_66;
                        arr2 = closure_66();
                        arr2 = closure_1;
                      } while (arr2 !== closure_1);
                    }
                    arr2 = obj;
                    if (items4 !== obj) {
                      arr2 = peg$parsenumber;
                      arr2 = peg$parsenumber();
                      arr2 = obj;
                      if (arr2 !== obj) {
                        const items5 = [];
                        arr2 = peg$parsewsp;
                        arr2 = peg$parsewsp();
                        arr2 = obj;
                        if (arr2 !== obj) {
                          do {
                            arr2 = items5.push(arr2);
                            arr2 = closure_66;
                            arr2 = closure_66();
                            arr2 = closure_1;
                          } while (arr2 !== closure_1);
                        }
                        arr2 = obj;
                        if (items5 !== obj) {
                          arr2 = self;
                          arr2 = closure_48;
                          if (41 === self.charCodeAt(closure_48)) {
                            arr2 = closure_8;
                            arr2 = closure_48;
                            closure_48 = closure_48 + 1;
                          } else {
                            arr2 = closure_52;
                            arr2 = obj;
                            if (0 === closure_52) {
                              arr2 = peg$fail;
                              arr2 = closure_9;
                              arr2 = peg$fail(closure_9);
                            }
                          }
                          arr2 = obj;
                          if (arr2 !== obj) {
                            arr2 = peg$c23;
                            arr2 = peg$c23(arr2);
                          } else {
                            closure_48 = arr2;
                            arr2 = obj;
                          }
                        } else {
                          closure_48 = arr2;
                          arr2 = obj;
                        }
                      } else {
                        closure_48 = arr2;
                        arr2 = obj;
                      }
                    } else {
                      closure_48 = arr2;
                      arr2 = obj;
                    }
                  } else {
                    closure_48 = arr2;
                    arr2 = obj;
                  }
                } else {
                  closure_48 = arr2;
                  arr2 = obj;
                }
              } else {
                closure_48 = arr2;
                arr2 = obj;
              }
            }
          } else {
            arr2 = closure_48;
            arr2 = self;
            arr2 = closure_48;
            arr2 = closure_20;
            if (self.substr(closure_48, 5) === closure_20) {
              arr2 = closure_20;
              arr2 = closure_48;
              closure_48 = closure_48 + 5;
            } else {
              arr2 = closure_52;
              arr2 = obj;
              if (0 === closure_52) {
                arr2 = peg$fail;
                arr2 = closure_21;
                arr2 = peg$fail(closure_21);
              }
            }
            arr2 = obj;
            if (arr2 !== obj) {
              const items6 = [];
              arr2 = peg$parsewsp;
              arr2 = peg$parsewsp();
              arr2 = obj;
              if (arr2 !== obj) {
                do {
                  arr2 = items6.push(arr2);
                  arr2 = closure_66;
                  arr2 = closure_66();
                  arr2 = closure_1;
                } while (arr2 !== closure_1);
              }
              arr2 = obj;
              if (items6 !== obj) {
                arr2 = self;
                arr2 = closure_48;
                if (40 === self.charCodeAt(closure_48)) {
                  arr2 = closure_6;
                  arr2 = closure_48;
                  closure_48 = closure_48 + 1;
                } else {
                  arr2 = closure_52;
                  arr2 = obj;
                  if (0 === closure_52) {
                    arr2 = peg$fail;
                    arr2 = closure_7;
                    arr2 = peg$fail(closure_7);
                  }
                }
                arr2 = obj;
                if (arr2 !== obj) {
                  const items7 = [];
                  arr2 = peg$parsewsp;
                  arr2 = peg$parsewsp();
                  arr2 = obj;
                  if (arr2 !== obj) {
                    do {
                      arr2 = items7.push(arr2);
                      arr2 = closure_66;
                      arr2 = closure_66();
                      arr2 = closure_1;
                    } while (arr2 !== closure_1);
                  }
                  arr2 = obj;
                  if (items7 !== obj) {
                    arr2 = peg$parsenumber;
                    arr2 = peg$parsenumber();
                    arr2 = obj;
                    if (arr2 !== obj) {
                      const items8 = [];
                      arr2 = peg$parsewsp;
                      arr2 = peg$parsewsp();
                      arr2 = obj;
                      if (arr2 !== obj) {
                        do {
                          arr2 = items8.push(arr2);
                          arr2 = closure_66;
                          arr2 = closure_66();
                          arr2 = closure_1;
                        } while (arr2 !== closure_1);
                      }
                      arr2 = obj;
                      if (items8 !== obj) {
                        arr2 = self;
                        arr2 = closure_48;
                        if (41 === self.charCodeAt(closure_48)) {
                          arr2 = closure_8;
                          arr2 = closure_48;
                          closure_48 = closure_48 + 1;
                        } else {
                          arr2 = closure_52;
                          arr2 = obj;
                          if (0 === closure_52) {
                            arr2 = peg$fail;
                            arr2 = closure_9;
                            arr2 = peg$fail(closure_9);
                          }
                        }
                        arr2 = obj;
                        if (arr2 !== obj) {
                          arr2 = peg$c20;
                          arr2 = peg$c20(arr2);
                        } else {
                          closure_48 = arr2;
                          arr2 = obj;
                        }
                      } else {
                        closure_48 = arr2;
                        arr2 = obj;
                      }
                    } else {
                      closure_48 = arr2;
                      arr2 = obj;
                    }
                  } else {
                    closure_48 = arr2;
                    arr2 = obj;
                  }
                } else {
                  closure_48 = arr2;
                  arr2 = obj;
                }
              } else {
                closure_48 = arr2;
                arr2 = obj;
              }
            } else {
              closure_48 = arr2;
              arr2 = obj;
            }
            arr2 = obj;
            arr2 = arr2 === obj;
          }
        } else {
          arr2 = closure_48;
          arr2 = self;
          arr2 = closure_48;
          arr2 = closure_14;
          if (self.substr(closure_48, 5) === closure_14) {
            arr2 = closure_14;
            arr2 = closure_48;
            closure_48 = closure_48 + 5;
          } else {
            arr2 = closure_52;
            arr2 = obj;
            if (0 === closure_52) {
              arr2 = peg$fail;
              arr2 = closure_15;
              arr2 = peg$fail(closure_15);
            }
          }
          arr2 = obj;
          if (arr2 !== obj) {
            const items9 = [];
            arr2 = peg$parsewsp;
            arr2 = peg$parsewsp();
            arr2 = obj;
            if (arr2 !== obj) {
              do {
                arr2 = items9.push(arr2);
                arr2 = closure_66;
                arr2 = closure_66();
                arr2 = closure_1;
              } while (arr2 !== closure_1);
            }
            arr2 = obj;
            if (items9 !== obj) {
              arr2 = self;
              arr2 = closure_48;
              if (40 === self.charCodeAt(closure_48)) {
                arr2 = closure_6;
                arr2 = closure_48;
                closure_48 = closure_48 + 1;
              } else {
                arr2 = closure_52;
                arr2 = obj;
                if (0 === closure_52) {
                  arr2 = peg$fail;
                  arr2 = closure_7;
                  arr2 = peg$fail(closure_7);
                }
              }
              arr2 = obj;
              if (arr2 !== obj) {
                const items10 = [];
                arr2 = peg$parsewsp;
                arr2 = peg$parsewsp();
                arr2 = obj;
                if (arr2 !== obj) {
                  do {
                    arr2 = items10.push(arr2);
                    arr2 = closure_66;
                    arr2 = closure_66();
                    arr2 = closure_1;
                  } while (arr2 !== closure_1);
                }
                arr2 = obj;
                if (items10 !== obj) {
                  arr2 = peg$parsenumber;
                  arr2 = peg$parsenumber();
                  arr2 = obj;
                  if (arr2 !== obj) {
                    arr2 = peg$parsecommaWspNumber;
                    arr2 = peg$parsecommaWspNumber();
                    arr2 = obj;
                    if (arr2 === obj) {
                      arr2 = null;
                    }
                    arr2 = obj;
                    if (arr2 !== obj) {
                      const items11 = [];
                      arr2 = peg$parsewsp;
                      arr2 = peg$parsewsp();
                      arr2 = obj;
                      if (arr2 !== obj) {
                        do {
                          arr2 = items11.push(arr2);
                          arr2 = closure_66;
                          arr2 = closure_66();
                          arr2 = closure_1;
                        } while (arr2 !== closure_1);
                      }
                      arr2 = obj;
                      if (items11 !== obj) {
                        arr2 = self;
                        arr2 = closure_48;
                        if (41 === self.charCodeAt(closure_48)) {
                          arr2 = closure_8;
                          arr2 = closure_48;
                          closure_48 = closure_48 + 1;
                        } else {
                          arr2 = closure_52;
                          arr2 = obj;
                          if (0 === closure_52) {
                            arr2 = peg$fail;
                            arr2 = closure_9;
                            arr2 = peg$fail(closure_9);
                          }
                        }
                        arr2 = obj;
                        if (arr2 !== obj) {
                          arr2 = peg$c14;
                          arr2 = peg$c14(arr2, arr2);
                        } else {
                          closure_48 = arr2;
                          arr2 = obj;
                        }
                      } else {
                        closure_48 = arr2;
                        arr2 = obj;
                      }
                    } else {
                      closure_48 = arr2;
                      arr2 = obj;
                    }
                  } else {
                    closure_48 = arr2;
                    arr2 = obj;
                  }
                } else {
                  closure_48 = arr2;
                  arr2 = obj;
                }
              } else {
                closure_48 = arr2;
                arr2 = obj;
              }
            } else {
              closure_48 = arr2;
              arr2 = obj;
            }
          } else {
            closure_48 = arr2;
            arr2 = obj;
          }
          arr2 = obj;
          arr2 = arr2 === obj;
        }
      } else {
        let tmp87 = closure_48;
        if (self.substr(closure_48, 9) === closure_11) {
          let tmp93 = closure_11;
          closure_48 = closure_48 + 9;
        } else {
          tmp93 = obj;
          if (0 === closure_52) {
            peg$fail(closure_12);
            tmp93 = tmp91;
          }
        }
        if (tmp93 !== obj) {
          const items12 = [];
          arr2 = peg$parsewsp;
          arr2 = peg$parsewsp();
          arr2 = obj;
          if (arr2 !== obj) {
            do {
              arr2 = items12.push(arr2);
              arr2 = closure_66;
              arr2 = closure_66();
              arr2 = closure_1;
            } while (arr2 !== closure_1);
          }
          arr2 = obj;
          if (items12 !== obj) {
            arr2 = self;
            arr2 = closure_48;
            if (40 === self.charCodeAt(closure_48)) {
              arr2 = closure_6;
              arr2 = closure_48;
              closure_48 = closure_48 + 1;
            } else {
              arr2 = closure_52;
              arr2 = obj;
              if (0 === closure_52) {
                arr2 = peg$fail;
                arr2 = closure_7;
                arr2 = peg$fail(closure_7);
              }
            }
            arr2 = obj;
            if (arr2 !== obj) {
              const items13 = [];
              arr2 = peg$parsewsp;
              arr2 = peg$parsewsp();
              arr2 = obj;
              if (arr2 !== obj) {
                do {
                  arr2 = items13.push(arr2);
                  arr2 = closure_66;
                  arr2 = closure_66();
                  arr2 = closure_1;
                } while (arr2 !== closure_1);
              }
              arr2 = obj;
              if (items13 !== obj) {
                arr2 = peg$parsenumber;
                arr2 = peg$parsenumber();
                arr2 = obj;
                if (arr2 !== obj) {
                  arr2 = peg$parsecommaWspNumber;
                  arr2 = peg$parsecommaWspNumber();
                  arr2 = obj;
                  if (arr2 === obj) {
                    arr2 = null;
                  }
                  arr2 = obj;
                  if (arr2 !== obj) {
                    const items14 = [];
                    arr2 = peg$parsewsp;
                    arr2 = peg$parsewsp();
                    arr2 = obj;
                    if (arr2 !== obj) {
                      do {
                        arr2 = items14.push(arr2);
                        arr2 = closure_66;
                        arr2 = closure_66();
                        arr2 = closure_1;
                      } while (arr2 !== closure_1);
                    }
                    arr2 = obj;
                    if (items14 !== obj) {
                      arr2 = self;
                      arr2 = closure_48;
                      if (41 === self.charCodeAt(closure_48)) {
                        arr2 = closure_8;
                        arr2 = closure_48;
                        closure_48 = closure_48 + 1;
                      } else {
                        arr2 = closure_52;
                        arr2 = obj;
                        if (0 === closure_52) {
                          arr2 = peg$fail;
                          arr2 = closure_9;
                          arr2 = peg$fail(closure_9);
                        }
                      }
                      arr2 = obj;
                      if (arr2 !== obj) {
                        arr2 = peg$c11;
                        let tmp99 = peg$c11(arr2, arr2);
                      } else {
                        closure_48 = tmp87;
                        tmp99 = obj;
                      }
                    } else {
                      closure_48 = tmp87;
                      tmp99 = obj;
                    }
                  } else {
                    closure_48 = tmp87;
                    tmp99 = obj;
                  }
                } else {
                  closure_48 = tmp87;
                  tmp99 = obj;
                }
              } else {
                closure_48 = tmp87;
                tmp99 = obj;
              }
            } else {
              closure_48 = tmp87;
              tmp99 = obj;
            }
          } else {
            closure_48 = tmp87;
            tmp99 = obj;
          }
        } else {
          closure_48 = tmp87;
          tmp99 = obj;
        }
        tmp87 = obj;
        arr2 = tmp99 === obj;
        arr2 = tmp99;
      }
    }
    function peg$parsenumber() {
      let tmp2 = peg$parsesign();
      if (tmp2 === obj) {
        tmp2 = null;
      }
      if (tmp2 !== obj) {
        const tmp4 = function peg$parsefloatingPointConstant() {
          closure_52 = closure_52 + 1;
          let tmp2 = callback6();
          if (tmp2 === closure_1) {
            tmp2 = null;
          }
          if (tmp2 !== closure_1) {
            if (46 === closure_0.charCodeAt(tmp20)) {
              let tmp8 = closure_36;
              let tmp20 = tmp20 + 1;
            } else {
              tmp8 = closure_1;
              if (0 === closure_52) {
                callback4(closure_37);
                tmp8 = tmp6;
              }
            }
            if (tmp8 !== closure_1) {
              const tmp15 = callback6();
              if (tmp15 !== closure_1) {
                let tmp3 = callback3(tmp2, tmp15);
              }
            }
            tmp20 = tmp;
            tmp3 = closure_1;
          } else {
            tmp20 = tmp;
            tmp3 = closure_1;
          }
          if (tmp3 !== closure_1) {
            closure_52 = closure_52 - 1;
            if (tmp3 === closure_1) {
              if (0 === closure_52) {
                callback4(closure_35);
              }
            }
            if (tmp3 !== closure_1) {
              let tmp41 = callback5();
              if (tmp41 === closure_1) {
                tmp41 = null;
              }
              if (tmp41 !== closure_1) {
                const items = [tmp3, tmp41];
                let tmp39 = items;
              } else {
                tmp20 = tmp;
                tmp39 = closure_1;
              }
            } else {
              tmp20 = tmp;
              tmp39 = closure_1;
            }
            let tmp45 = tmp39;
            if (tmp39 !== closure_1) {
              tmp45 = callback(tmp39);
            }
            if (tmp45 === closure_1) {
              const tmp50 = callback6();
              if (tmp50 !== closure_1) {
                const tmp53 = callback5();
                if (tmp53 !== closure_1) {
                  const items1 = [tmp50, tmp53];
                  let tmp55 = items1;
                }
                let tmp57 = tmp55;
                if (tmp55 !== closure_1) {
                  tmp57 = callback2(tmp55);
                }
                tmp45 = tmp57;
              }
              tmp55 = closure_1;
              const tmp48 = tmp20;
            }
            return tmp45;
          } else {
            const tmp61 = callback6();
            if (tmp61 === closure_1) {
              tmp20 = tmp59;
            }
            if (46 === closure_0.charCodeAt(tmp20)) {
              let tmp22 = closure_36;
              tmp20 = tmp20 + 1;
            } else {
              tmp22 = closure_1;
              if (0 === closure_52) {
                callback4(closure_37);
                tmp22 = tmp20;
              }
            }
            if (tmp22 !== closure_1) {
              let tmp28 = callback2(tmp61);
            } else {
              tmp20 = tmp59;
              tmp28 = closure_1;
            }
          }
        }();
        if (tmp4 !== obj) {
          const items = [tmp2, tmp4];
          let tmp3 = items;
        } else {
          let closure_48 = tmp;
          tmp3 = obj;
        }
      } else {
        closure_48 = tmp;
        tmp3 = obj;
      }
      let tmp6 = tmp3;
      if (tmp3 !== obj) {
        tmp6 = peg$c24(tmp3);
      }
      if (tmp6 === obj) {
        let tmp8 = peg$parsesign();
        if (tmp8 === obj) {
          tmp8 = null;
        }
        if (tmp8 !== obj) {
          const tmp12 = peg$parsedigitSequence();
          let tmp14 = tmp12;
          if (tmp12 !== obj) {
            tmp14 = peg$c30(tmp12);
          }
          if (tmp14 !== obj) {
            const items1 = [tmp8, tmp14];
            let tmp10 = items1;
          } else {
            closure_48 = tmp20;
            tmp10 = obj;
          }
        } else {
          closure_48 = tmp20;
          tmp10 = obj;
        }
        let tmp18 = tmp10;
        if (tmp10 !== obj) {
          tmp18 = peg$c25(tmp10);
        }
        tmp6 = tmp18;
      }
      return tmp6;
    }
    function peg$parsecommaWspNumber() {
      if (peg$parsecommaWsp() !== obj) {
        const tmp3 = peg$parsenumber();
        if (tmp3 !== obj) {
          let tmp5 = peg$c26(tmp3);
        }
        return tmp5;
      }
      tmp5 = obj;
    }
    function peg$parsecommaWsp() {
      const items = [];
      let tmp2 = peg$parsewsp();
      if (tmp2 !== obj) {
        let tmp3 = items;
        if (tmp2 !== obj) {
          do {
            let arr = items.push(tmp2);
            let tmp6 = closure_66;
            tmp2 = closure_66();
            let tmp7 = closure_1;
            tmp3 = items;
          } while (tmp2 !== closure_1);
        }
      } else {
        tmp3 = obj;
      }
      if (tmp3 !== obj) {
        let tmp10 = peg$parsecomma();
        if (tmp10 === obj) {
          tmp10 = null;
        }
        if (tmp10 !== obj) {
          const items1 = [];
          let tmp14 = peg$parsewsp();
          if (tmp14 !== obj) {
            do {
              arr = items1.push(tmp14);
              let tmp17 = closure_66;
              tmp14 = closure_66();
              let tmp18 = closure_1;
            } while (tmp14 !== closure_1);
          }
          if (items1 !== obj) {
            const items2 = [tmp3, tmp10, items1];
            let tmp8 = items2;
          } else {
            let closure_48 = tmp;
            tmp8 = obj;
          }
        } else {
          closure_48 = tmp;
          tmp8 = obj;
        }
      } else {
        closure_48 = tmp;
        tmp8 = obj;
      }
      if (tmp8 === obj) {
        const tmp22 = peg$parsecomma();
        if (tmp22 !== obj) {
          const items3 = [];
          let tmp25 = peg$parsewsp();
          if (tmp25 !== obj) {
            do {
              let arr1 = items3.push(tmp25);
              let tmp28 = closure_66;
              tmp25 = closure_66();
              let tmp29 = closure_1;
            } while (tmp25 !== closure_1);
          }
          if (items3 !== obj) {
            const items4 = [tmp22, items3];
            tmp8 = items4;
          } else {
            closure_48 = tmp20;
            tmp8 = obj;
          }
        } else {
          closure_48 = tmp20;
          tmp8 = obj;
        }
      }
      return tmp8;
    }
    function peg$parsecomma() {
      if (44 === arg0.charCodeAt(closure_48)) {
        let tmp3 = closure_30;
        closure_48 = closure_48 + 1;
      } else {
        tmp3 = obj;
        if (0 === closure_52) {
          peg$fail(closure_31);
          tmp3 = tmp;
        }
      }
      return tmp3;
    }
    function peg$parseexponent() {
      if (regex.test(arg0.charAt(closure_48))) {
        let charAtResult = arg0.charAt(closure_48);
        closure_48 = closure_48 + 1;
      } else {
        charAtResult = obj;
        if (0 === closure_52) {
          peg$fail(closure_40);
          charAtResult = tmp2;
        }
      }
      if (charAtResult !== obj) {
        let tmp13 = peg$parsesign();
        if (tmp13 === obj) {
          tmp13 = null;
        }
        if (tmp13 !== obj) {
          const tmp17 = peg$parsedigitSequence();
          if (tmp17 !== obj) {
            const items = [charAtResult, tmp13, tmp17];
            let tmp11 = items;
          }
        }
        closure_48 = tmp;
        tmp11 = obj;
      } else {
        closure_48 = tmp;
        tmp11 = obj;
      }
      let tmp19 = tmp11;
      if (tmp11 !== obj) {
        tmp19 = peg$c39(tmp11);
      }
      return tmp19;
    }
    function peg$parsesign() {
      if (regex2.test(arg0.charAt(closure_48))) {
        let charAtResult = arg0.charAt(closure_48);
        closure_48 = closure_48 + 1;
      } else {
        charAtResult = obj;
        if (0 === closure_52) {
          peg$fail(closure_43);
          charAtResult = tmp;
        }
      }
      return charAtResult;
    }
    function peg$parsedigitSequence() {
      const items = [];
      let tmp = peg$parsedigit();
      if (tmp !== obj) {
        let tmp2 = items;
        if (tmp !== obj) {
          do {
            let arr = items.push(tmp);
            let tmp5 = closure_65;
            tmp = closure_65();
            let tmp6 = closure_1;
            tmp2 = items;
          } while (tmp !== closure_1);
        }
      } else {
        tmp2 = obj;
      }
      return tmp2;
    }
    function peg$parsedigit() {
      if (regex3.test(arg0.charAt(closure_48))) {
        let charAtResult = arg0.charAt(closure_48);
        closure_48 = closure_48 + 1;
      } else {
        charAtResult = obj;
        if (0 === closure_52) {
          peg$fail(closure_45);
          charAtResult = tmp;
        }
      }
      return charAtResult;
    }
    function peg$parsewsp() {
      if (regex4.test(arg0.charAt(closure_48))) {
        let charAtResult = arg0.charAt(closure_48);
        closure_48 = closure_48 + 1;
      } else {
        charAtResult = obj;
        if (0 === closure_52) {
          peg$fail(closure_47);
          charAtResult = tmp;
        }
      }
      return charAtResult;
    }
    if (undefined === arg1) {
      obj = {};
    }
    obj = {};
    obj = { transformList: peg$parsetransformList };
    function peg$c0(arg0) {
      return arg0;
    }
    function peg$c1(arg0, arg1) {
      let tmp10;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const first = arg0[0];
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = arg1;
      const items = [first * tmp5 + arg0[1] * tmp8, first * tmp6 + arg0[1] * tmp9, first * tmp7 + arg0[1] * tmp10 + arg0[2], arg0[3] * tmp5 + arg0[4] * tmp8, arg0[3] * tmp6 + arg0[4] * tmp9, arg0[3] * tmp7 + arg0[4] * tmp10 + arg0[5]];
      return items;
    }
    let closure_4 = "matrix";
    let closure_5 = peg$literalExpectation("matrix", false);
    let closure_6 = "(";
    let closure_7 = peg$literalExpectation("(", false);
    let closure_8 = ")";
    let closure_9 = peg$literalExpectation(")", false);
    function peg$c8(arg0, arg1, arg2, arg3, arg4, arg5) {
      const items = [arg0, arg2, arg4, arg1, arg3, arg5];
      return items;
    }
    let closure_11 = "translate";
    let closure_12 = peg$literalExpectation("translate", false);
    function peg$c11(arr2, arr22) {
      let num = arr22;
      const items = ["getViewManagerConfig", "hasViewManagerConfig", arr2, 0, 1];
      if (!arr22) {
        num = 0;
      }
      items[5] = num;
      return items;
    }
    let closure_14 = "scale";
    let closure_15 = peg$literalExpectation("scale", false);
    function peg$c14(arg0, arg1) {
      let tmp = arg1;
      const items = [arg0, 0, 0, 0, , ];
      if (null === arg1) {
        tmp = arg0;
      }
      items[4] = tmp;
      items[5] = 0;
      return items;
    }
    let closure_17 = "rotate";
    let closure_18 = peg$literalExpectation("rotate", false);
    function peg$c17(arg0, arg1) {
      const cosResult = Math.cos(closure_53 * arg0);
      const sinResult = Math.sin(closure_53 * arg0);
      if (null !== arg1) {
        const first = arg1[0];
        const items = [cosResult, -sinResult, cosResult * -first + -sinResult * -arg1[1] + first, sinResult, cosResult, sinResult * -first + cosResult * -arg1[1] + arg1[1]];
        return items;
      } else {
        const items1 = [cosResult, -sinResult, 0, sinResult, cosResult, 0];
        return items1;
      }
    }
    let closure_20 = "skewX";
    let closure_21 = peg$literalExpectation("skewX", false);
    function peg$c20(arr2) {
      const items = [24573934974154670000000000000000000000000000000000000000000000000000000000000, Math.tan(closure_53 * arr2), 0, 0, 1, 0];
      return items;
    }
    let closure_23 = "skewY";
    let closure_24 = peg$literalExpectation("skewY", false);
    function peg$c23(arr2) {
      const items = ["r", "isArray", "alignItems", Math.tan(closure_53 * arr2), 1, 0];
      return items;
    }
    function peg$c24(join) {
      return parseFloat(join.join(""));
    }
    function peg$c25(join) {
      return parseInt(join.join(""));
    }
    function peg$c26(arg0) {
      return arg0;
    }
    function peg$c27(arg0, arg1) {
      const items = [arg0, arg1];
      return items;
    }
    let closure_30 = ",";
    let closure_31 = peg$literalExpectation(",", false);
    function peg$c30(join) {
      return join.join("");
    }
    function peg$c31(join) {
      return join.join("");
    }
    function peg$c32(join) {
      return join.join("");
    }
    let closure_35 = { 1643106979: "optionNameToAutocompleteQueries", 571364423: "buttonText" };
    let closure_36 = ".";
    let closure_37 = peg$literalExpectation(".", false);
    function peg$c36(join, join2) {
      let joined = null;
      if (join) {
        joined = join.join("");
      }
      const items = [joined, ".", join2.join("")];
      return items.join("");
    }
    let closure_39 = /^[eE]/;
    let closure_40 = peg$classExpectation([], false, false);
    function peg$c39(arg0) {
      const items = [arg0[0], arg0[1], arg0[2].join("")];
      return items.join("");
    }
    let closure_42 = /^[+\-]/;
    let closure_43 = peg$classExpectation([null, null], false, false);
    let closure_44 = /^[0-9]/;
    const items = [["baseline", "<string:44582978>"]];
    let closure_45 = peg$classExpectation(items, false, false);
    let closure_46 = /^[ \t\r\n]/;
    let closure_47 = peg$classExpectation([], false, false);
    let closure_48 = 0;
    const items1 = [{ activeStageIcon: "innocent", fetchDirectoryCounts: "innocent" }];
    let closure_50 = 0;
    let closure_51 = [];
    let closure_52 = 0;
    if ("startRule" in obj) {
      if (obj.startRule in obj) {
        peg$parsetransformList = obj[obj.startRule];
      } else {
        const _Error = Error;
        const error = new Error("Can't start parsing from rule \"" + obj.startRule + "\".");
        throw error;
      }
    }
    let closure_53 = Math.PI / 180;
    const result = peg$parsetransformList();
    let tmp7 = result !== obj;
    if (tmp7) {
      if (closure_48 === str.length) {
        return result;
      }
    }
    if (tmp7) {
      tmp7 = closure_48 < str.length;
    }
    if (tmp7) {
      const obj1 = { type: "end" };
      const result1 = peg$fail(obj1);
    }
    let charAtResult = null;
    if (closure_50 < str.length) {
      charAtResult = str.charAt(closure_50);
    }
    if (closure_50 < str.length) {
      let result2 = peg$computeLocation(closure_50, closure_50 + 1);
    } else {
      result2 = peg$computeLocation(closure_50, closure_50);
    }
    throw new peg$SyntaxError(peg$SyntaxError.buildMessage(closure_51, charAtResult), closure_51, charAtResult, result2);
  }
};
