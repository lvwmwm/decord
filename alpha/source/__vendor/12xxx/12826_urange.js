// Module ID: 12826
// Function ID: 12827
// Name: urange
// Dependencies: [12798]

// Module 12826 (urange)
import tokenize from "tokenize" /* 12798 */;

function hexSequence(value, sum, arg2) {
  let num = 0;
  let sum1 = sum;
  let num2 = 0;
  if (sum < value.value.length) {
    while (true) {
      value = value.value;
      let charCodeAtResult = value.charCodeAt(sum1);
      if (45 === charCodeAtResult) {
        if (arg2) {
          if (0 !== num) {
            break;
          }
        }
      }
      let obj = tokenize;
      if (obj.isHexDigit(charCodeAtResult)) {
        sum = num + 1;
        if (6 < sum) {
          return 0;
        } else {
          sum1 = sum1 + 1;
          num = sum;
          num2 = sum;
        }
      } else {
        return 0;
      }
    }
    let num3 = 0;
    if (0 < hexSequence(value, sum + num + 1, false)) {
      num3 = 6;
    }
    return num3;
  }
  return num2;
}
const Ident = tokenize.TYPE.Ident;
const Delim = tokenize.TYPE.Delim;
const Number = tokenize.TYPE.Number;
const Dimension = tokenize.TYPE.Dimension;

export default function urange(type, fn) {
  if (null !== type) {
    if (type.type === Ident) {
      const obj8 = tokenize;
      if (obj8.cmpChar(type.value, 0, 117)) {
        const iter = fn(1);
        if (null === iter) {
          return 0;
        } else {
          let tmp3 = null !== iter && iter.type === Delim;
          if (tmp3) {
            const value = iter.value;
            tmp3 = value.charCodeAt(0) === 43;
          }
          if (tmp3) {
            const iter6 = fn(2);
            let num39 = 0;
            if (null !== iter6) {
              let num41;
              if (iter6.type === tmp80) {
                let num55;
                let num52 = 0;
                let num53 = 0;
                let num54 = 0;
                if (0 >= iter6.value.length) {
                  num55 = num54;
                } else {
                  let num58;
                  while (true) {
                    let value2 = iter6.value;
                    let charCodeAtResult = value2.charCodeAt(num53);
                    if (45 === charCodeAtResult) {
                      if (0 !== num52) {
                        break;
                      }
                    }
                    let obj6 = tokenize;
                    num55 = 0;
                    if (obj6.isHexDigit(charCodeAtResult)) {
                      let sum = num52 + 1;
                      num55 = 0;
                      if (6 >= sum) {
                        num53 = num53 + 1;
                        num52 = sum;
                        num54 = sum;
                      }
                    }
                  }
                  let sum1 = num52 + 1;
                  let num56 = 0;
                  let num57 = 0;
                  if (sum1 >= iter6.value.length) {
                    num58 = num57;
                  } else {
                    const value3 = iter6.value;
                    num58 = 0;
                    const charCodeAtResult1 = value3.charCodeAt(sum1);
                    const obj7 = tokenize;
                    while (obj7.isHexDigit(charCodeAtResult1)) {
                      let sum2 = num56 + 1;
                      num58 = 0;
                      if (6 < sum2) {
                        break;
                      } else {
                        sum1 = sum1 + 1;
                        num56 = sum2;
                        num57 = sum2;
                        break;
                      }
                    }
                  }
                  let num59 = 0;
                  if (0 < num58) {
                    num59 = 6;
                  }
                  num55 = num59;
                }
                let num60 = 0;
                if (num55) {
                  const iter9 = fn(3);
                  let tmp73 = null !== iter9 && iter9.type === Delim;
                  if (tmp73) {
                    const value4 = iter9.value;
                    tmp73 = value4.charCodeAt(0) === 63;
                  }
                  let num64 = 3;
                  let num65 = 3;
                  if (!tmp73) {
                    num60 = num65;
                  } else {
                    const sum3 = num55 + 1;
                    num60 = 0;
                    while (6 >= sum3) {
                      let sum4 = num64 + 1;
                      let iter10 = fn(sum4);
                      let tmp78 = null !== iter10;
                      if (tmp78) {
                        tmp78 = iter10.type === Delim;
                      }
                      if (tmp78) {
                        let value5 = iter10.value;
                        tmp78 = value5.charCodeAt(0) === 63;
                      }
                      num64 = sum4;
                      num55 = sum3;
                      num65 = sum4;
                      break;
                    }
                  }
                }
                num41 = num60;
              } else {
                let tmp52 = null !== iter6 && iter6.type === Delim;
                if (tmp52) {
                  const value6 = iter6.value;
                  tmp52 = value6.charCodeAt(0) === 63;
                }
                num41 = 0;
                if (tmp52) {
                  let num49;
                  const iter7 = fn(3);
                  let tmp53 = null !== iter7 && iter7.type === Delim;
                  if (tmp53) {
                    const value7 = iter7.value;
                    tmp53 = value7.charCodeAt(0) === 63;
                  }
                  let num46 = 3;
                  let num47 = 1;
                  let num48 = 3;
                  if (!tmp53) {
                    num49 = num48;
                  } else {
                    const sum5 = num47 + 1;
                    num49 = 0;
                    while (6 >= sum5) {
                      let sum6 = num46 + 1;
                      let iter8 = fn(sum6);
                      let tmp58 = null !== iter8;
                      if (tmp58) {
                        tmp58 = iter8.type === Delim;
                      }
                      if (tmp58) {
                        let value8 = iter8.value;
                        tmp58 = value8.charCodeAt(0) === 63;
                      }
                      num46 = sum6;
                      num47 = sum5;
                      num48 = sum6;
                      break;
                    }
                  }
                  num41 = num49;
                }
              }
              num39 = num41;
            }
            return num39;
          } else if (iter.type === Number) {
            const value9 = iter.value;
            if (value9.charCodeAt(0) === 43) {
              let num21;
              let num18 = 0;
              let num19 = 1;
              let num20 = 0;
              if (1 >= iter.value.length) {
                num21 = num20;
              } else {
                let num24;
                while (true) {
                  let value10 = iter.value;
                  let charCodeAtResult2 = value10.charCodeAt(num19);
                  if (45 === charCodeAtResult2) {
                    if (0 !== num18) {
                      break;
                    }
                  }
                  let obj3 = tokenize;
                  num21 = 0;
                  if (obj3.isHexDigit(charCodeAtResult2)) {
                    let sum7 = num18 + 1;
                    num21 = 0;
                    if (6 >= sum7) {
                      num19 = num19 + 1;
                      num18 = sum7;
                      num20 = sum7;
                    }
                  }
                }
                let sum8 = 1 + num18 + 1;
                let num22 = 0;
                let num23 = 0;
                if (sum8 >= iter.value.length) {
                  num24 = num23;
                } else {
                  const value11 = iter.value;
                  num24 = 0;
                  const charCodeAtResult3 = value11.charCodeAt(sum8);
                  const obj4 = tokenize;
                  while (obj4.isHexDigit(charCodeAtResult3)) {
                    let sum9 = num22 + 1;
                    num24 = 0;
                    if (6 < sum9) {
                      break;
                    } else {
                      sum8 = sum8 + 1;
                      num22 = sum9;
                      num23 = sum9;
                      break;
                    }
                  }
                }
                let num25 = 0;
                if (0 < num24) {
                  num25 = 6;
                }
                num21 = num25;
              }
              let num26 = 0;
              if (0 !== num21) {
                const iter11 = fn(2);
                let num37 = 2;
                if (null !== iter11) {
                  if (iter11.type !== Dimension) {
                    let num31;
                    if (iter11.type !== tmp4) {
                      num31 = 0;
                      if (num21) {
                        const iter4 = fn(2);
                        let tmp38 = null !== iter4 && iter4.type === Delim;
                        if (tmp38) {
                          const value12 = iter4.value;
                          tmp38 = value12.charCodeAt(0) === 63;
                        }
                        let num29 = 2;
                        let num30 = 2;
                        if (!tmp38) {
                          num31 = num30;
                        } else {
                          const sum10 = num21 + 1;
                          num31 = 0;
                          while (6 >= sum10) {
                            let sum11 = num29 + 1;
                            let iter5 = fn(sum11);
                            let tmp43 = null !== iter5;
                            if (tmp43) {
                              tmp43 = iter5.type === Delim;
                            }
                            if (tmp43) {
                              let value13 = iter5.value;
                              tmp43 = value13.charCodeAt(0) === 63;
                            }
                            num29 = sum11;
                            num21 = sum10;
                            num30 = sum11;
                            break;
                          }
                        }
                      }
                    }
                    num37 = num31;
                  }
                  const value14 = iter11.value;
                  let num32 = 0;
                  if (value14.charCodeAt(0) === 45) {
                    let num33;
                    let num35 = 0;
                    let num34 = 1;
                    let num36 = 0;
                    if (1 >= iter11.value.length) {
                      num33 = num36;
                    } else {
                      const value15 = iter11.value;
                      num33 = 0;
                      const charCodeAtResult4 = value15.charCodeAt(num34);
                      const obj5 = tokenize;
                      while (obj5.isHexDigit(charCodeAtResult4)) {
                        let sum12 = num35 + 1;
                        num33 = 0;
                        if (6 < sum12) {
                          break;
                        } else {
                          num34 = num34 + 1;
                          num35 = sum12;
                          num36 = sum12;
                          break;
                        }
                      }
                    }
                    num32 = 0;
                    if (num33) {
                      num32 = 3;
                    }
                  }
                  num31 = num32;
                }
                num26 = num37;
              }
              return num26;
            } else {
              return 0;
            }
          } else {
            let num14 = 0;
            if (iter.type === Dimension) {
              const value16 = iter.value;
              num14 = 0;
              if (value16.charCodeAt(0) === 43) {
                let num3;
                let num71 = 0;
                let num72 = 1;
                let num73 = 0;
                if (1 >= iter.value.length) {
                  num3 = num73;
                } else {
                  let num6;
                  while (true) {
                    let value17 = iter.value;
                    let charCodeAtResult5 = value17.charCodeAt(num72);
                    if (45 === charCodeAtResult5) {
                      if (0 !== num71) {
                        break;
                      }
                    }
                    let obj = tokenize;
                    num3 = 0;
                    if (obj.isHexDigit(charCodeAtResult5)) {
                      let sum13 = num71 + 1;
                      num3 = 0;
                      if (6 >= sum13) {
                        num72 = num72 + 1;
                        num71 = sum13;
                        num73 = sum13;
                      }
                    }
                  }
                  let sum14 = 1 + num71 + 1;
                  let num4 = 0;
                  let num5 = 0;
                  if (sum14 >= iter.value.length) {
                    num6 = num5;
                  } else {
                    const value18 = iter.value;
                    num6 = 0;
                    const charCodeAtResult6 = value18.charCodeAt(sum14);
                    const obj2 = tokenize;
                    while (obj2.isHexDigit(charCodeAtResult6)) {
                      let sum15 = num4 + 1;
                      num6 = 0;
                      if (6 < sum15) {
                        break;
                      } else {
                        sum14 = sum14 + 1;
                        num4 = sum15;
                        num5 = sum15;
                        break;
                      }
                    }
                  }
                  let num7 = 0;
                  if (0 < num6) {
                    num7 = 6;
                  }
                  num3 = num7;
                }
                let num8 = 0;
                if (num3) {
                  const iter2 = fn(2);
                  let tmp18 = null !== iter2 && iter2.type === Delim;
                  if (tmp18) {
                    const value19 = iter2.value;
                    tmp18 = value19.charCodeAt(0) === 63;
                  }
                  let num12 = 2;
                  let num13 = 2;
                  if (!tmp18) {
                    num8 = num13;
                  } else {
                    const sum16 = num3 + 1;
                    num8 = 0;
                    while (6 >= sum16) {
                      let sum17 = num12 + 1;
                      let iter3 = fn(sum17);
                      let tmp23 = null !== iter3;
                      if (tmp23) {
                        tmp23 = iter3.type === Delim;
                      }
                      if (tmp23) {
                        let value20 = iter3.value;
                        tmp23 = value20.charCodeAt(0) === 63;
                      }
                      num12 = sum17;
                      num3 = sum16;
                      num13 = sum17;
                      break;
                    }
                  }
                }
                num14 = num8;
              }
            }
            return num14;
          }
        }
      }
    }
  }
  return 0;
};
