// Module ID: 12860
// Function ID: 12861
// Name: anPlusB
// Dependencies: [12833]

// Module 12860 (anPlusB)
import tokenize from "tokenize" /* 12833 */;

function consumeB(type, arg1, fn) {
  let tmp = arg1;
  if (null !== type) {
    let tmp3 = arg1;
    if (type.type === WhiteSpace) {
      const sum = tmp3 + 1;
      const tmp6 = fn(sum);
      tmp = sum;
      while (null !== tmp6) {
        tmp3 = sum;
        if (tmp6.type === WhiteSpace) {
          continue;
        } else {
          tmp3 = sum;
          tmp = sum;
          if (tmp6.type !== Comment) {
            break;
          }
        }
        continue;
      }
    } else {
      tmp3 = arg1;
      tmp = arg1;
    }
  }
  const iter = fn(tmp);
  if (null === iter) {
    return arg1;
  } else {
    let tmp26 = tmp;
    let flag = false;
    let iter2 = iter;
    if (iter.type !== Number) {
      let tmp13 = null !== iter;
      let tmp10 = tmp13 && iter.type === Delim;
      if (tmp10) {
        const value = iter.value;
        tmp10 = value.charCodeAt(0) === 43;
      }
      if (!tmp10) {
        const tmp11 = c8;
        if (tmp13) {
          tmp13 = iter.type === Delim;
        }
        if (tmp13) {
          const value2 = iter.value;
          tmp13 = value2.charCodeAt(0) === tmp11;
        }
        if (!tmp13) {
          return arg1;
        }
      }
      const sum1 = tmp + 1;
      const tmp15 = fn(sum1);
      let tmp16 = sum1;
      if (null !== tmp15) {
        let tmp18 = sum1;
        if (tmp15.type === WhiteSpace) {
          const sum2 = tmp18 + 1;
          const tmp21 = fn(sum2);
          tmp16 = sum2;
          while (null !== tmp21) {
            tmp18 = sum2;
            if (tmp21.type === WhiteSpace) {
              continue;
            } else {
              tmp18 = sum2;
              tmp16 = sum2;
              if (tmp21.type !== Comment) {
                break;
              }
            }
            continue;
          }
        } else {
          tmp18 = sum1;
          tmp16 = sum1;
        }
      }
      const tmp24 = fn(tmp16);
      tmp26 = tmp16;
      flag = true;
      iter2 = tmp24;
      if (null === tmp24) {
        tmp26 = tmp16;
        flag = true;
        iter2 = tmp24;
        if (tmp24.type !== tmp37) {
          return 0;
        }
      }
    }
    if (!flag) {
      const value3 = iter2.value;
      const charCodeAtResult = value3.charCodeAt(0);
      if (43 !== charCodeAtResult) {
        if (charCodeAtResult !== c8) {
          return 0;
        }
      }
    }
    let num7 = 1;
    if (flag) {
      num7 = 0;
    }
    let num8 = 0;
    if (iter2) {
      let sum3;
      const value4 = iter2.value;
      const charCodeAtResult1 = value4.charCodeAt(num7);
      if (43 === charCodeAtResult1) {
        num8 = 0;
        if (!flag) {
          sum3 = num7 + 1;
        }
      } else {
        sum3 = num7;
      }
      if (sum3 >= iter2.value.length) {
        num8 = tmp26 + 1;
      } else {
        tokenize;
        const value5 = iter2.value;
        num8 = 0;
        while (tmp35(value5.charCodeAt(sum3))) {
          sum3 = sum3 + 1;
          break;
        }
      }
    }
    return num8;
  }
}
const Delim = tokenize.TYPE.Delim;
const WhiteSpace = tokenize.TYPE.WhiteSpace;
const Comment = tokenize.TYPE.Comment;
const Ident = tokenize.TYPE.Ident;
const Number = tokenize.TYPE.Number;
const Dimension = tokenize.TYPE.Dimension;
let c8 = 45;
let c9 = true;

export default function anPlusB(type, fn) {
  const tmp = type;
  if (tmp) {
    if (type.type === Number) {
      let num45 = 0;
      if (type) {
        let num47;
        const value2 = type.value;
        const charCodeAtResult = value2.charCodeAt(0);
        if (43 === charCodeAtResult) {
          num47 = 1;
        } else {
          num47 = 0;
        }
        num45 = 1;
        if (num47 < type.value.length) {
          tokenize;
          const value3 = type.value;
          num45 = 0;
          while (tmp97(value3.charCodeAt(num47))) {
            let sum = num47 + 1;
            num47 = sum;
            num45 = 1;
            if (sum >= type.value.length) {
              break;
            }
          }
        }
      }
      return num45;
    } else {
      if (type.type === Ident) {
        const value = type.value;
        if (value.charCodeAt(0) === c8) {
          const obj2 = tokenize;
          if (obj2.cmpChar(type.value, 1, 110)) {
            if (2 === type.value.length) {
              return consumeB(fn(1), 1, fn);
            } else {
              let num35 = 3;
              if (3 === type.value.length) {
                const value4 = type.value;
                let num38 = 0;
                if (value4.charCodeAt(2) === c8) {
                  const tmp117 = fn(1);
                  let num40 = 1;
                  if (null !== tmp117) {
                    let num39 = 1;
                    if (tmp117.type === WhiteSpace) {
                      const sum1 = num39 + 1;
                      const tmp79 = fn(sum1);
                      num40 = sum1;
                      while (null !== tmp79) {
                        num39 = sum1;
                        if (tmp79.type === WhiteSpace) {
                          continue;
                        } else {
                          num39 = sum1;
                          num40 = sum1;
                          if (tmp79.type !== Comment) {
                            break;
                          }
                        }
                        continue;
                      }
                    } else {
                      num39 = 1;
                      num40 = 1;
                    }
                  }
                  const iter4 = fn(num40);
                  let num41 = 0;
                  if (iter4) {
                    let num43;
                    const value5 = iter4.value;
                    const charCodeAtResult1 = value5.charCodeAt(0);
                    if (43 === charCodeAtResult1) {
                      num43 = 1;
                      num41 = 0;
                    } else {
                      num43 = 0;
                    }
                    if (num43 >= iter4.value.length) {
                      num41 = num40 + 1;
                    } else {
                      tokenize;
                      const value6 = iter4.value;
                      num41 = 0;
                      while (tmp89(value6.charCodeAt(num43))) {
                        num43 = num43 + 1;
                        break;
                      }
                    }
                  }
                  num38 = num41;
                }
                return num38;
              } else {
                const value7 = type.value;
                let num37 = 0;
                if (value7.charCodeAt(2) === c8) {
                  let num36 = 0;
                  if (type) {
                    const value8 = type.value;
                    const charCodeAtResult2 = value8.charCodeAt(num35);
                    if (43 === charCodeAtResult2) {
                      num35 = 4;
                      num36 = 0;
                    }
                    num36 = 1;
                    if (num35 < type.value.length) {
                      tokenize;
                      const value9 = type.value;
                      num36 = 0;
                      while (tmp73(value9.charCodeAt(num35))) {
                        let sum2 = num35 + 1;
                        num35 = sum2;
                        num36 = 1;
                        if (sum2 >= type.value.length) {
                          break;
                        }
                      }
                    }
                  }
                  num37 = num36;
                }
                return num37;
              }
            }
          } else {
            return 0;
          }
        }
      }
      if (type.type !== Ident) {
        let tmp5 = null !== type && type.type === Delim;
        if (tmp5) {
          const value10 = type.value;
          tmp5 = value10.charCodeAt(0) === 43;
        }
        if (type.type === Dimension) {
          let num9;
          const value11 = type.value;
          const charCodeAtResult3 = value11.charCodeAt(0);
          if (43 === charCodeAtResult3) {
            num9 = 1;
          } else {
            num9 = 0;
          }
          let tmp9 = num9;
          if (num9 < type.value.length) {
            const value12 = type.value;
            let tmp13 = num9;
            tmp9 = num9;
            const obj3 = tokenize;
            if (obj3.isDigit(value12.charCodeAt(num9))) {
              const sum3 = tmp13 + 1;
              tmp9 = sum3;
              while (sum3 < type.value.length) {
                let obj = tokenize;
                let value13 = type.value;
                tmp13 = sum3;
                tmp9 = sum3;
                if (!obj.isDigit(value13.charCodeAt(sum3))) {
                  break;
                }
              }
            }
          }
          let num10 = 0;
          if (tmp9 !== num9) {
            let num18 = 0;
            const obj4 = tokenize;
            if (obj4.cmpChar(type.value, tmp9, 110)) {
              let num17;
              const sum4 = tmp9 + 1;
              if (sum4 === type.value.length) {
                num17 = consumeB(fn(1), 1, fn);
              } else {
                const value14 = type.value;
                num17 = 0;
                if (value14.charCodeAt(sum4) === c8) {
                  let num12;
                  const sum5 = tmp9 + 2;
                  if (sum5 === type.value.length) {
                    const tmp23 = fn(1);
                    let num13 = 1;
                    if (null !== tmp23) {
                      let num14 = 1;
                      if (tmp23.type === WhiteSpace) {
                        const sum6 = num14 + 1;
                        const tmp27 = fn(sum6);
                        num13 = sum6;
                        while (null !== tmp27) {
                          num14 = sum6;
                          if (tmp27.type === WhiteSpace) {
                            continue;
                          } else {
                            num14 = sum6;
                            num13 = sum6;
                            if (tmp27.type !== Comment) {
                              break;
                            }
                          }
                          continue;
                        }
                      } else {
                        num14 = 1;
                        num13 = 1;
                      }
                    }
                    const iter = fn(num13);
                    let num15 = 0;
                    if (iter) {
                      let num16;
                      const value15 = iter.value;
                      const charCodeAtResult4 = value15.charCodeAt(0);
                      if (43 === charCodeAtResult4) {
                        num16 = 1;
                        num15 = 0;
                      } else {
                        num16 = 0;
                      }
                      if (num16 >= iter.value.length) {
                        num15 = num13 + 1;
                      } else {
                        tokenize;
                        const value16 = iter.value;
                        num15 = 0;
                        while (tmp37(value16.charCodeAt(num16))) {
                          num16 = num16 + 1;
                          break;
                        }
                      }
                    }
                    num12 = num15;
                  } else {
                    num12 = 0;
                    if (type) {
                      let sum7;
                      const value17 = type.value;
                      const charCodeAtResult5 = value17.charCodeAt(sum5);
                      if (43 === charCodeAtResult5) {
                        num12 = 0;
                        if (!tmp109) {
                          sum7 = sum5 + 1;
                        }
                      } else {
                        sum7 = sum5;
                      }
                      num12 = 1;
                      if (sum7 < type.value.length) {
                        tokenize;
                        const value18 = type.value;
                        num12 = 0;
                        while (tmp20(value18.charCodeAt(sum7))) {
                          let sum8 = sum7 + 1;
                          sum7 = sum8;
                          num12 = 1;
                          if (sum8 >= type.value.length) {
                            break;
                          }
                        }
                      }
                    }
                  }
                  num17 = num12;
                }
              }
              num18 = num17;
            }
            num10 = num18;
          }
          return num10;
        } else {
          return 0;
        }
      }
      let num20 = 0;
      let iter2 = type;
      if (type.type !== Ident) {
        iter2 = fn(1);
        num20 = 1;
      }
      if (null !== iter2) {
        const obj5 = tokenize;
        if (obj5.cmpChar(iter2.value, 0, 110)) {
          if (1 === iter2.value.length) {
            const sum9 = num20 + 1;
            return consumeB(fn(sum9), sum9, fn);
          } else {
            let num24 = 2;
            if (2 === iter2.value.length) {
              const value19 = iter2.value;
              let num27 = 0;
              if (value19.charCodeAt(1) === c8) {
                const sum10 = num20 + 1;
                const tmp115 = fn(sum10);
                let tmp51 = sum10;
                if (null !== tmp115) {
                  let tmp49 = sum10;
                  if (tmp115.type === WhiteSpace) {
                    const sum11 = tmp49 + 1;
                    const tmp53 = fn(sum11);
                    tmp51 = sum11;
                    while (null !== tmp53) {
                      tmp49 = sum11;
                      if (tmp53.type === WhiteSpace) {
                        continue;
                      } else {
                        tmp49 = sum11;
                        tmp51 = sum11;
                        if (tmp53.type !== Comment) {
                          break;
                        }
                      }
                      continue;
                    }
                  } else {
                    tmp49 = sum10;
                    tmp51 = sum10;
                  }
                }
                const iter3 = fn(tmp51);
                let num28 = 0;
                if (iter3) {
                  let num30;
                  const value20 = iter3.value;
                  const charCodeAtResult6 = value20.charCodeAt(0);
                  if (43 === charCodeAtResult6) {
                    num30 = 1;
                    num28 = 0;
                  } else {
                    num30 = 0;
                  }
                  if (num30 >= iter3.value.length) {
                    num28 = tmp51 + 1;
                  } else {
                    tokenize;
                    const value21 = iter3.value;
                    num28 = 0;
                    while (tmp63(value21.charCodeAt(num30))) {
                      num30 = num30 + 1;
                      break;
                    }
                  }
                }
                num27 = num28;
              }
              return num27;
            } else {
              const value22 = iter2.value;
              let num26 = 0;
              if (value22.charCodeAt(1) === c8) {
                let num25 = 0;
                if (iter2) {
                  const value23 = iter2.value;
                  const charCodeAtResult7 = value23.charCodeAt(num24);
                  if (43 === charCodeAtResult7) {
                    num24 = 3;
                    num25 = 0;
                  }
                  if (num24 >= iter2.value.length) {
                    num25 = num20 + 1;
                  } else {
                    tokenize;
                    const value24 = iter2.value;
                    num25 = 0;
                    while (tmp45(value24.charCodeAt(num24))) {
                      num24 = num24 + 1;
                      break;
                    }
                  }
                }
                num26 = num25;
              }
              return num26;
            }
          }
        }
      }
      return 0;
    }
  } else {
    return 0;
  }
};
