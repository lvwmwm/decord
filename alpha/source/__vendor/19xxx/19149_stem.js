// Module ID: 19149
// Function ID: 19150
// Name: stem
// Dependencies: []
// Exports: stem

// Module 19149 (stem)
const uint8Array = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]);
const uint8Array1 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]);
const uint8Array2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
const uint8Array3 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
let uint16Array = new Uint16Array(128);

export function stem(str) {
  let flag3;
  let sum6;
  if (str.length < 3) {
    return str;
  } else {
    let num19;
    if (str.length <= 6) {
      switch (str) {
        case "skis":
        {
          return "ski";
        }
        case "skies":
        {
          return "sky";
        }
        case "dying":
        {
          return "die";
        }
        case "lying":
        {
          return "lie";
        }
        case "tying":
        {
          return "tie";
        }
        case "idly":
        {
          return "idl";
        }
        case "gently":
        {
          return "gentl";
        }
        case "ugly":
        {
          return "ugli";
        }
        case "early":
        {
          return "earli";
        }
        case "only":
        {
          return "onli";
        }
        case "singly":
        {
          return "singl";
        }
        case "sky":
        {
          return str;
        }
        case "news":
        {
          return str;
        }
        case "howe":
        {
          return str;
        }
        case "atlas":
        {
          return str;
        }
        case "cosmos":
        {
          return str;
        }
        case "bias":
        {
          return str;
        }
        case "andes":
        {
          return str;
        }
      }
    }
    let num3 = 0;
    if (39 === str.charCodeAt(0)) {
      num3 = 1;
    }
    let diff = str.length - num3;
    if (diff >= uint16Array.length) {
      const _Uint16Array = Uint16Array;
      const self = this;
      const self2 = this;
      uint16Array = new Uint16Array(diff + 1);
    }
    let num9 = 0;
    if (0 < diff) {
      do {
        let charCodeAtResult = str.charCodeAt(num9 + num3);
        if (121 !== charCodeAtResult) {
          uint16Array[num9] = charCodeAtResult;
        } else if (0 === num9) {
          uint16Array[num9] = 89;
        } else {
          let _Math = Math;
        }
        num9 = num9 + 1;
      } while (num9 < diff);
    }
    const diff1 = diff - 1;
    if (39 === uint16Array[diff1]) {
      diff = diff1;
    }
    let tmp9 = diff >= 2;
    if (2 <= diff) {
      tmp9 = 39 === uint16Array[diff - 2];
    }
    if (tmp9) {
      tmp9 = 115 === uint16Array[diff - 1];
    }
    let diff2 = diff;
    if (tmp9) {
      diff2 = diff - 2;
    }
    let num12 = 0;
    if (0 < diff2) {
      const _Math2 = Math;
      let num13 = 0;
      num12 = 0;
      if (!uint8Array[Math.min(Math, uint16Array[0], 127)]) {
        const sum = num13 + 1;
        num12 = sum;
        while (sum < diff2) {
          let _Math3 = Math;
          num13 = sum;
          num12 = sum;
          if (uint8Array[Math.min(Math, uint16Array[sum], 127)]) {
            break;
          }
        }
      }
    }
    let sum1 = num12;
    if (num12 < diff2) {
      sum1 = num12 + 1;
    }
    if (5 <= diff2) {
      if (103 === uint16Array[0]) {
        if (101 === uint16Array[1]) {
          if (110 === uint16Array[2]) {
            if (101 === uint16Array[3]) {
              num19 = 5;
            }
            let tmp20 = num19;
            if (num19 < diff2) {
              const _Math6 = Math;
              let tmp22 = num19;
              tmp20 = num19;
              if (!uint8Array[Math.min(Math, uint16Array[num19], 127)]) {
                const sum2 = tmp22 + 1;
                tmp20 = sum2;
                while (sum2 < diff2) {
                  let _Math7 = Math;
                  tmp22 = sum2;
                  tmp20 = sum2;
                  if (uint8Array[Math.min(Math, uint16Array[sum2], 127)]) {
                    break;
                  }
                }
              }
            }
            let tmp25 = tmp20;
            if (tmp20 < diff2) {
              const _Math8 = Math;
              let tmp27 = tmp20;
              tmp25 = tmp20;
              if (uint8Array[Math.min(Math, uint16Array[tmp20], 127)]) {
                const sum3 = tmp27 + 1;
                tmp25 = sum3;
                while (sum3 < diff2) {
                  let _Math9 = Math;
                  tmp27 = sum3;
                  tmp25 = sum3;
                  if (!uint8Array[Math.min(Math, uint16Array[sum3], 127)]) {
                    break;
                  }
                }
              }
            }
            let sum4 = tmp25;
            if (tmp25 < diff2) {
              sum4 = tmp25 + 1;
            }
            let tmp31 = diff2;
            if (3 <= diff2) {
              let diff7;
              const diff3 = diff2 - 1;
              if (115 === uint16Array[diff3]) {
                let diff4;
                let diff6;
                if (4 <= diff2) {
                  diff4 = diff2 - 2;
                  if (101 === uint16Array[diff4]) {
                    diff7 = diff4;
                  }
                }
                const diff5 = diff2 - 2;
                if (101 === uint16Array[diff5]) {
                  if (105 === uint16Array[diff2 - 3]) {
                    let num39 = 1;
                    if (5 <= diff2) {
                      num39 = 2;
                    }
                    diff6 = diff2 - num39;
                  }
                  diff4 = diff6;
                }
                diff6 = diff2;
                const tmp36 = 117 !== uint16Array[diff5] && 115 !== uint16Array[diff5] && sum1 < diff3;
                if (tmp36) {
                  diff6 = diff3;
                }
              } else {
                diff7 = diff2;
                const tmp32 = 100 === uint16Array[diff3] && 101 === uint16Array[diff2 - 2] && 105 === uint16Array[diff2 - 3];
                if (tmp32) {
                  let num33 = 1;
                  if (5 <= diff2) {
                    num33 = 2;
                  }
                  diff7 = diff2 - num33;
                }
              }
              tmp31 = diff7;
            }
            if (6 === tmp31) {
              if (105 === uint16Array[0]) {
                if (110 === uint16Array[1]) {
                  if (110 === uint16Array[2]) {
                    if (105 === uint16Array[3]) {
                      let str14 = "";
                      let str15 = "";
                      let num217 = 0;
                      if (0 < tmp31) {
                        do {
                          let _String2 = String;
                          str14 = `${String.fromCharCode(tmp2[num217])}`;
                          num217 = num217 + 1;
                          str15 = str14;
                        } while (num217 < tmp31);
                      }
                      return str15;
                    }
                  }
                }
              }
            }
            let tmp38 = tmp31;
            if (2 <= tmp31) {
              tmp38 = tmp31;
              if (121 === uint16Array[tmp31 - 1]) {
                const diff8 = tmp31 - 2;
                tmp38 = tmp31;
                if (108 === uint16Array[diff8]) {
                  tmp38 = diff8;
                }
              }
            }
            let flag = false;
            let tmp40 = tmp31;
            if (3 <= tmp38) {
              let num78;
              let flag2;
              let tmp45;
              const diff9 = tmp38 - 3;
              if (101 === uint16Array[diff9]) {
                if (101 === uint16Array[tmp38 - 2]) {
                  const diff10 = tmp38 - 1;
                  if (100 === uint16Array[diff10]) {
                    let tmp59 = tmp31;
                    if (num19 + 3 <= tmp38) {
                      tmp59 = diff10;
                    }
                    tmp45 = tmp59;
                    flag2 = false;
                  }
                  flag = flag2;
                  tmp40 = tmp45;
                }
              }
              const diff11 = tmp38 - 2;
              if (101 !== uint16Array[diff11]) {
                num78 = -1;
                if (105 === uint16Array[diff9]) {
                  num78 = -1;
                  if (110 === uint16Array[diff11]) {
                    num78 = -1;
                    if (103 === uint16Array[tmp38 - 1]) {
                      num78 = diff9;
                    }
                  }
                }
              } else {
                num78 = diff11;
              }
              let tmp43 = num78 >= 0;
              if (0 <= num78) {
                tmp43 = sum1 <= num78;
              }
              let tmp44 = tmp31;
              if (tmp43) {
                tmp43 = num78 >= 2;
                tmp44 = num78;
              }
              flag2 = false;
              tmp45 = tmp44;
              if (tmp43) {
                const diff12 = tmp44 - 1;
                if (116 !== uint16Array[diff12]) {
                  if (108 !== uint16Array[diff12]) {
                    if (122 === uint16Array[diff12]) {
                      flag2 = flag3;
                      tmp45 = sum6;
                    }
                    const diff13 = tmp44 - 2;
                    if (uint16Array[diff13] !== uint16Array[diff12]) {
                      let tmp50 = num19 >= tmp44;
                      if (tmp44 <= num19) {
                        let tmp52 = tmp44 >= 2;
                        if (2 <= tmp44) {
                          const _Math11 = Math;
                          tmp52 = uint8Array[Math.min(Math, uint16Array[diff13], 127)];
                        }
                        if (tmp52) {
                          let tmp53 = 2 === tmp44;
                          if (2 === tmp44) {
                            const _Math12 = Math;
                            tmp53 = !uint8Array[Math.min(Math, uint16Array[diff12], 127)];
                          }
                          if (!tmp53) {
                            let tmp55 = tmp44 >= 3;
                            if (3 <= tmp44) {
                              const _Math13 = Math;
                              tmp55 = !uint8Array[Math.min(Math, uint16Array[tmp44 - 3], 127)];
                            }
                            if (tmp55) {
                              const _Math14 = Math;
                              tmp55 = !uint8Array1[Math.min(Math, uint16Array[diff12], 127)];
                            }
                            tmp53 = tmp55;
                          }
                          tmp52 = tmp53;
                        }
                        tmp50 = tmp52;
                      }
                      let flag4 = false;
                      let sum5 = tmp44;
                      if (tmp50) {
                        uint16Array[tmp44] = 101;
                        sum5 = tmp44 + 1;
                        flag4 = true;
                      }
                      flag3 = flag4;
                      sum6 = sum5;
                    } else {
                      const _Math10 = Math;
                      flag3 = false;
                      sum6 = diff12;
                    }
                  }
                }
                uint16Array[tmp44] = 101;
                sum6 = tmp44 + 1;
                flag3 = true;
              }
            }
            let tmp61 = tmp60;
            if (3 <= tmp40) {
              const diff14 = tmp40 - 1;
              tmp61 = 89 === uint16Array[diff14] || 121 === uint16Array[diff14];
            }
            if (tmp61) {
              const _Math15 = Math;
              tmp61 = !uint8Array[Math.min(Math, uint16Array[tmp40 - 2], 127)];
            }
            if (tmp61) {
              uint16Array[tmp40 - 1] = 105;
              flag = true;
            }
            let flag5 = flag;
            let diff22 = tmp40;
            if (num19 + 2 <= tmp40) {
              const diff15 = tmp40 - 1;
              if (108 === uint16Array[diff15]) {
                const sum7 = num19 + 6;
                let tmp114 = tmp40 >= sum7;
                if (sum7 <= tmp40) {
                  tmp114 = 97 === uint16Array[tmp40 - 2];
                }
                if (tmp114) {
                  tmp114 = 110 === uint16Array[tmp40 - 3];
                }
                if (tmp114) {
                  tmp114 = 111 === uint16Array[tmp40 - 4];
                }
                if (tmp114) {
                  tmp114 = 105 === uint16Array[tmp40 - 5];
                }
                if (tmp114) {
                  tmp114 = 116 === uint16Array[tmp40 - 6];
                }
                flag5 = flag;
                diff22 = tmp40;
                if (tmp114) {
                  if (7 <= tmp40) {
                    let tmp116;
                    let diff17;
                    if (97 === uint16Array[tmp40 - 7]) {
                      let tmp117 = tmp40;
                      if (num19 + 7 <= tmp40) {
                        const diff16 = tmp40 - 4;
                        uint16Array[diff16 - 1] = 101;
                        flag = true;
                        tmp117 = diff16;
                      }
                      tmp116 = flag;
                      diff17 = tmp117;
                    }
                    flag5 = tmp116;
                    diff22 = diff17;
                  }
                  diff17 = tmp40 - 2;
                  tmp116 = flag;
                }
              } else if (110 === uint16Array[diff15]) {
                const sum8 = num19 + 5;
                let tmp109 = tmp40 >= sum8;
                if (sum8 <= tmp40) {
                  tmp109 = 111 === uint16Array[tmp40 - 2];
                }
                if (tmp109) {
                  tmp109 = 105 === uint16Array[tmp40 - 3];
                }
                if (tmp109) {
                  tmp109 = 116 === uint16Array[tmp40 - 4];
                }
                if (tmp109) {
                  tmp109 = 97 === uint16Array[tmp40 - 5];
                }
                flag5 = flag;
                diff22 = tmp40;
                if (tmp109) {
                  let diff19;
                  if (7 <= tmp40) {
                    if (122 === uint16Array[tmp40 - 6]) {
                      let flag11;
                      if (105 === uint16Array[tmp40 - 7]) {
                        let flag12 = flag;
                        let tmp111 = tmp40;
                        if (num19 + 7 <= tmp40) {
                          const diff18 = tmp40 - 4;
                          uint16Array[diff18 - 1] = 101;
                          flag12 = true;
                          tmp111 = diff18;
                        }
                        flag11 = flag12;
                        diff19 = tmp111;
                      }
                      flag5 = flag11;
                      diff22 = diff19;
                    }
                  }
                  diff19 = tmp40 - 2;
                  uint16Array[diff19 - 1] = 101;
                  flag11 = true;
                }
              } else if (114 === uint16Array[diff15]) {
                flag5 = flag;
                diff22 = tmp40;
                if (num19 + 4 <= tmp40) {
                  let tmp105;
                  let flag10;
                  const diff20 = tmp40 - 2;
                  if (101 === uint16Array[diff20]) {
                    let tmp107 = tmp40;
                    const tmp106 = 122 === uint16Array[tmp40 - 3] && 105 === uint16Array[tmp40 - 4];
                    if (tmp106) {
                      tmp107 = diff15;
                    }
                    tmp105 = tmp107;
                    flag10 = flag;
                  } else {
                    flag10 = flag;
                    tmp105 = tmp40;
                    const tmp104 = 111 === uint16Array[diff20] && 116 === uint16Array[tmp40 - 3] && 97 === uint16Array[tmp40 - 4];
                    if (tmp104) {
                      uint16Array[diff15 - 1] = 101;
                      flag10 = true;
                      tmp105 = diff15;
                    }
                  }
                  flag5 = flag10;
                  diff22 = tmp105;
                }
              } else if (115 === uint16Array[diff15]) {
                const sum9 = num19 + 7;
                let tmp99 = tmp40 >= sum9;
                if (sum9 <= tmp40) {
                  tmp99 = 115 === uint16Array[tmp40 - 2];
                }
                if (tmp99) {
                  tmp99 = 101 === uint16Array[tmp40 - 3];
                }
                if (tmp99) {
                  tmp99 = 110 === uint16Array[tmp40 - 4];
                }
                if (tmp99) {
                  const diff21 = tmp40 - 5;
                  let tmp101 = 108 === uint16Array[diff21] && 117 === uint16Array[tmp40 - 6] && 102 === uint16Array[tmp40 - 7];
                  if (!tmp101) {
                    tmp101 = 115 === uint16Array[diff21] && 117 === uint16Array[tmp40 - 6] && 111 === uint16Array[tmp40 - 7];
                    const tmp102 = 115 === uint16Array[diff21] && 117 === uint16Array[tmp40 - 6] && 111 === uint16Array[tmp40 - 7];
                  }
                  if (!tmp101) {
                    tmp101 = 101 === uint16Array[diff21] && 118 === uint16Array[tmp40 - 6] && 105 === uint16Array[tmp40 - 7];
                    const tmp103 = 101 === uint16Array[diff21] && 118 === uint16Array[tmp40 - 6] && 105 === uint16Array[tmp40 - 7];
                  }
                  tmp99 = tmp101;
                }
                flag5 = flag;
                diff22 = tmp40;
                if (tmp99) {
                  diff22 = tmp40 - 4;
                  flag5 = flag;
                }
              } else if (109 === uint16Array[diff15]) {
                const sum10 = num19 + 5;
                let tmp97 = tmp40 >= sum10;
                if (sum10 <= tmp40) {
                  tmp97 = 115 === uint16Array[tmp40 - 2];
                }
                if (tmp97) {
                  tmp97 = 105 === uint16Array[tmp40 - 3];
                }
                if (tmp97) {
                  tmp97 = 108 === uint16Array[tmp40 - 4];
                }
                if (tmp97) {
                  tmp97 = 97 === uint16Array[tmp40 - 5];
                }
                flag5 = flag;
                diff22 = tmp40;
                if (tmp97) {
                  diff22 = tmp40 - 3;
                  flag5 = flag;
                }
              } else {
                flag5 = flag;
                diff22 = tmp40;
                if (105 === uint16Array[diff15]) {
                  const diff23 = tmp40 - 2;
                  if (99 === uint16Array[diff23]) {
                    const sum11 = num19 + 4;
                    let tmp93 = tmp40 >= sum11;
                    if (sum11 <= tmp40) {
                      const diff24 = tmp40 - 4;
                      tmp93 = 101 === uint16Array[diff24] || 97 === uint16Array[diff24];
                      const tmp95 = 101 === uint16Array[diff24] || 97 === uint16Array[diff24];
                    }
                    if (tmp93) {
                      tmp93 = 110 === uint16Array[tmp40 - 3];
                    }
                    flag5 = flag;
                    diff22 = tmp40;
                    if (tmp93) {
                      uint16Array[diff15] = 101;
                      flag5 = true;
                      diff22 = tmp40;
                    }
                  } else if (103 === uint16Array[diff23]) {
                    const sum12 = num19 + 3;
                    let tmp91 = tmp40 >= sum12;
                    if (sum12 <= tmp40) {
                      tmp91 = tmp40 >= 4;
                    }
                    if (tmp91) {
                      tmp91 = 103 === uint16Array[diff23];
                    }
                    if (tmp91) {
                      tmp91 = 111 === uint16Array[tmp40 - 3];
                    }
                    if (tmp91) {
                      tmp91 = 108 === uint16Array[tmp40 - 4];
                    }
                    flag5 = flag;
                    diff22 = tmp40;
                    if (tmp91) {
                      flag5 = flag;
                      diff22 = diff15;
                    }
                  } else if (116 === uint16Array[diff23]) {
                    const sum13 = num19 + 5;
                    let tmp81 = tmp40 >= sum13;
                    if (sum13 <= tmp40) {
                      tmp81 = 105 === uint16Array[tmp40 - 3];
                    }
                    flag5 = flag;
                    diff22 = tmp40;
                    if (tmp81) {
                      let flag8;
                      let tmp84;
                      const diff25 = tmp40 - 4;
                      if (108 === uint16Array[diff25]) {
                        let diff27;
                        if (6 <= tmp40) {
                          if (105 === uint16Array[tmp40 - 5]) {
                            let tmp87;
                            if (98 === uint16Array[tmp40 - 6]) {
                              let flag9 = flag;
                              let tmp88 = tmp40;
                              if (num19 + 6 <= tmp40) {
                                const diff26 = tmp40 - 3;
                                uint16Array[diff26 - 2] = 108;
                                uint16Array[diff26 - 1] = 101;
                                flag9 = true;
                                tmp88 = diff26;
                              }
                              tmp87 = flag9;
                              diff27 = tmp88;
                            }
                            flag8 = tmp87;
                            tmp84 = diff27;
                          }
                        }
                        diff27 = tmp40;
                        const tmp85 = 108 === uint16Array[diff25] && 97 === uint16Array[tmp40 - 5];
                        if (tmp85) {
                          diff27 = tmp40 - 3;
                        }
                        tmp87 = flag;
                      } else {
                        flag8 = flag;
                        tmp84 = tmp40;
                        const tmp83 = 118 === uint16Array[diff25] && 105 === uint16Array[tmp40 - 5];
                        if (tmp83) {
                          uint16Array[diff23 - 1] = 101;
                          flag8 = true;
                          tmp84 = diff23;
                        }
                      }
                      flag5 = flag8;
                      diff22 = tmp84;
                    }
                  } else {
                    flag5 = flag;
                    diff22 = tmp40;
                    const tmp66 = 108 === uint16Array[diff23] && tmp40 >= 3;
                    if (tmp66) {
                      let tmp79;
                      let tmp69;
                      const diff28 = tmp40 - 3;
                      if (98 === uint16Array[diff28]) {
                        let flag6;
                        if (4 <= tmp40) {
                          if (97 === uint16Array[tmp40 - 4]) {
                            let flag7 = flag;
                            if (num19 + 4 <= tmp40) {
                              uint16Array[diff15] = 101;
                              flag7 = true;
                            }
                            flag6 = flag7;
                          }
                          tmp79 = flag6;
                          tmp69 = tmp40;
                        }
                        flag6 = flag;
                        if (num19 + 3 <= tmp40) {
                          uint16Array[diff15] = 101;
                          flag6 = true;
                        }
                      } else {
                        if (108 === uint16Array[diff28]) {
                          let tmp77;
                          if (5 <= tmp40) {
                            if (117 === uint16Array[tmp40 - 4]) {
                              if (102 === uint16Array[tmp40 - 5]) {
                                let tmp78 = tmp40;
                                if (num19 + 5 <= tmp40) {
                                  tmp78 = diff23;
                                }
                                tmp77 = tmp78;
                              }
                              tmp69 = tmp77;
                            }
                          }
                          const sum14 = num19 + 4;
                          let tmp76 = tmp40 >= sum14;
                          if (sum14 <= tmp40) {
                            tmp76 = 97 === uint16Array[tmp40 - 4];
                          }
                          tmp77 = tmp40;
                          if (tmp76) {
                            tmp77 = diff23;
                          }
                        } else if (115 === uint16Array[diff28]) {
                          let tmp73;
                          if (6 <= tmp40) {
                            if (115 === uint16Array[tmp40 - 4]) {
                              if (101 === uint16Array[tmp40 - 5]) {
                                if (108 === uint16Array[tmp40 - 6]) {
                                  let tmp74 = tmp40;
                                  if (num19 + 6 <= tmp40) {
                                    tmp74 = diff23;
                                  }
                                  tmp73 = tmp74;
                                }
                                tmp69 = tmp73;
                              }
                            }
                          }
                          const sum15 = num19 + 5;
                          let tmp72 = tmp40 >= sum15;
                          if (sum15 <= tmp40) {
                            tmp72 = 117 === uint16Array[tmp40 - 4];
                          }
                          if (tmp72) {
                            tmp72 = 111 === uint16Array[tmp40 - 5];
                          }
                          tmp73 = tmp40;
                          if (tmp72) {
                            tmp73 = diff23;
                          }
                        } else {
                          if (5 <= tmp40) {
                            if (116 === uint16Array[diff28]) {
                              if (110 === uint16Array[tmp40 - 4]) {
                                if (101 === uint16Array[tmp40 - 5]) {
                                  let tmp70 = tmp40;
                                  if (num19 + 5 <= tmp40) {
                                    tmp70 = diff23;
                                  }
                                  tmp69 = tmp70;
                                }
                              }
                            }
                          }
                          const _Math16 = Math;
                          tmp69 = tmp40;
                          if (uint8Array2[Math.min(Math, uint16Array[diff28], 127)]) {
                            tmp69 = diff23;
                          }
                        }
                        tmp79 = flag;
                      }
                      flag5 = tmp79;
                      diff22 = tmp69;
                    }
                  }
                }
              }
            }
            let tmp119 = flag5;
            let diff30 = diff22;
            if (num19 + 3 <= diff22) {
              if (108 === uint16Array[diff22 - 1]) {
                const diff29 = diff22 - 3;
                if (99 === uint16Array[diff29]) {
                  const sum16 = num19 + 4;
                  let tmp137 = diff22 >= sum16;
                  if (sum16 <= diff22) {
                    tmp137 = 105 === uint16Array[diff22 - 4];
                  }
                  if (tmp137) {
                    tmp137 = 97 === uint16Array[diff22 - 2];
                  }
                  tmp119 = flag5;
                  diff30 = diff22;
                  if (tmp137) {
                    diff30 = diff22 - 2;
                    tmp119 = flag5;
                  }
                } else if (102 === uint16Array[diff29]) {
                  tmp119 = flag5;
                  diff30 = diff22;
                  if (117 === uint16Array[diff22 - 2]) {
                    tmp119 = flag5;
                    diff30 = diff29;
                  }
                } else {
                  tmp119 = flag5;
                  diff30 = diff22;
                  const tmp131 = 110 === uint16Array[diff29] && diff22 >= num19 + 6 && 97 === uint16Array[diff22 - 2] && 111 === uint16Array[diff22 - 4] && 105 === uint16Array[diff22 - 5] && 116 === uint16Array[diff22 - 6];
                  if (tmp131) {
                    if (7 <= diff22) {
                      let tmp133;
                      let diff32;
                      if (97 === uint16Array[diff22 - 7]) {
                        let flag13 = flag5;
                        let tmp134 = diff22;
                        if (num19 + 7 <= diff22) {
                          const diff31 = diff22 - 4;
                          uint16Array[diff31 - 1] = 101;
                          flag13 = true;
                          tmp134 = diff31;
                        }
                        tmp133 = flag13;
                        diff32 = tmp134;
                      }
                      tmp119 = tmp133;
                      diff30 = diff32;
                    }
                    diff32 = diff22 - 2;
                    tmp133 = flag5;
                  }
                }
              } else if (101 === uint16Array[diff22 - 1]) {
                const diff33 = diff22 - 2;
                if (122 === uint16Array[diff33]) {
                  const sum17 = num19 + 5;
                  let tmp129 = diff22 >= sum17;
                  if (sum17 <= diff22) {
                    tmp129 = 105 === uint16Array[diff22 - 3];
                  }
                  if (tmp129) {
                    tmp129 = 108 === uint16Array[diff22 - 4];
                  }
                  if (tmp129) {
                    tmp129 = 97 === uint16Array[diff22 - 5];
                  }
                  tmp119 = flag5;
                  diff30 = diff22;
                  if (tmp129) {
                    diff30 = diff22 - 3;
                    tmp119 = flag5;
                  }
                } else if (116 === uint16Array[diff33]) {
                  const sum18 = num19 + 5;
                  let tmp127 = diff22 >= sum18;
                  if (sum18 <= diff22) {
                    tmp127 = 97 === uint16Array[diff22 - 3];
                  }
                  if (tmp127) {
                    tmp127 = 99 === uint16Array[diff22 - 4];
                  }
                  if (tmp127) {
                    tmp127 = 105 === uint16Array[diff22 - 5];
                  }
                  tmp119 = flag5;
                  diff30 = diff22;
                  if (tmp127) {
                    diff30 = diff22 - 3;
                    tmp119 = flag5;
                  }
                } else {
                  tmp119 = flag5;
                  diff30 = diff22;
                  const tmp125 = 118 === uint16Array[diff33] && diff22 >= sum4 + 5 && 105 === uint16Array[diff22 - 3] && 116 === uint16Array[diff22 - 4] && 97 === uint16Array[diff22 - 5];
                  if (tmp125) {
                    diff30 = diff22 - 5;
                    tmp119 = flag5;
                  }
                }
              } else if (105 === uint16Array[diff22 - 1]) {
                const sum19 = num19 + 5;
                let tmp123 = diff22 >= sum19;
                if (sum19 <= diff22) {
                  tmp123 = 116 === uint16Array[diff22 - 2];
                }
                if (tmp123) {
                  tmp123 = 105 === uint16Array[diff22 - 3];
                }
                if (tmp123) {
                  tmp123 = 99 === uint16Array[diff22 - 4];
                }
                if (tmp123) {
                  tmp123 = 105 === uint16Array[diff22 - 5];
                }
                tmp119 = flag5;
                diff30 = diff22;
                if (tmp123) {
                  diff30 = diff22 - 3;
                  tmp119 = flag5;
                }
              } else {
                tmp119 = flag5;
                diff30 = diff22;
                if (115 === uint16Array[diff22 - 1]) {
                  const sum20 = num19 + 4;
                  let tmp121 = diff22 >= sum20;
                  if (sum20 <= diff22) {
                    tmp121 = 115 === uint16Array[diff22 - 2];
                  }
                  if (tmp121) {
                    tmp121 = 101 === uint16Array[diff22 - 3];
                  }
                  if (tmp121) {
                    tmp121 = 110 === uint16Array[diff22 - 4];
                  }
                  tmp119 = flag5;
                  diff30 = diff22;
                  if (tmp121) {
                    diff30 = diff22 - 4;
                    tmp119 = flag5;
                  }
                }
              }
            }
            let diff35 = diff30;
            if (sum4 + 2 <= diff30) {
              if (110 === uint16Array[diff30 - 1]) {
                const sum21 = sum4 + 3;
                let tmp172 = diff30 >= sum21;
                if (sum21 <= diff30) {
                  tmp172 = 111 === uint16Array[diff30 - 2];
                }
                if (tmp172) {
                  tmp172 = 105 === uint16Array[diff30 - 3];
                }
                if (tmp172) {
                  const diff34 = diff30 - 4;
                  tmp172 = 115 === uint16Array[diff34] || 116 === uint16Array[diff34];
                  const tmp174 = 115 === uint16Array[diff34] || 116 === uint16Array[diff34];
                }
                diff35 = diff30;
                if (tmp172) {
                  diff35 = diff30 - 3;
                }
              } else if (108 === uint16Array[diff30 - 1]) {
                const diff36 = diff30 - 2;
                diff35 = diff30;
                if (97 === uint16Array[diff36]) {
                  diff35 = diff36;
                }
              } else if (114 === uint16Array[diff30 - 1]) {
                const diff37 = diff30 - 2;
                diff35 = diff30;
                if (101 === uint16Array[diff37]) {
                  diff35 = diff37;
                }
              } else if (99 === uint16Array[diff30 - 1]) {
                const diff38 = diff30 - 2;
                diff35 = diff30;
                if (105 === uint16Array[diff38]) {
                  diff35 = diff38;
                }
              } else if (109 === uint16Array[diff30 - 1]) {
                const sum22 = sum4 + 3;
                let tmp167 = diff30 >= sum22;
                if (sum22 <= diff30) {
                  tmp167 = 115 === uint16Array[diff30 - 2];
                }
                if (tmp167) {
                  tmp167 = 105 === uint16Array[diff30 - 3];
                }
                diff35 = diff30;
                if (tmp167) {
                  diff35 = diff30 - 3;
                }
              } else if (105 === uint16Array[diff30 - 1]) {
                const sum23 = sum4 + 3;
                let tmp165 = diff30 >= sum23;
                if (sum23 <= diff30) {
                  tmp165 = 116 === uint16Array[diff30 - 2];
                }
                if (tmp165) {
                  tmp165 = 105 === uint16Array[diff30 - 3];
                }
                diff35 = diff30;
                if (tmp165) {
                  diff35 = diff30 - 3;
                }
              } else if (115 === uint16Array[diff30 - 1]) {
                const sum24 = sum4 + 3;
                let tmp163 = diff30 >= sum24;
                if (sum24 <= diff30) {
                  tmp163 = 117 === uint16Array[diff30 - 2];
                }
                if (tmp163) {
                  tmp163 = 111 === uint16Array[diff30 - 3];
                }
                diff35 = diff30;
                if (tmp163) {
                  diff35 = diff30 - 3;
                }
              } else if (116 === uint16Array[diff30 - 1]) {
                const sum25 = sum4 + 3;
                let tmp153 = diff30 >= sum25;
                if (sum25 <= diff30) {
                  tmp153 = 110 === uint16Array[diff30 - 2];
                }
                diff35 = diff30;
                if (tmp153) {
                  const diff39 = diff30 - 3;
                  let tmp155 = diff39;
                  if (97 !== uint16Array[diff39]) {
                    let tmp156 = diff30;
                    if (101 === uint16Array[diff39]) {
                      let tmp157 = diff39;
                      if (4 <= diff30) {
                        const diff40 = diff30 - 4;
                        tmp157 = diff39;
                        if (109 === uint16Array[diff40]) {
                          let tmp160;
                          if (5 <= diff30) {
                            const diff41 = diff30 - 5;
                            if (101 === uint16Array[diff41]) {
                              let tmp161 = diff30;
                              if (sum4 + 5 <= diff30) {
                                tmp161 = diff41;
                              }
                              tmp160 = tmp161;
                            }
                            tmp157 = tmp160;
                          }
                          tmp160 = diff30;
                          if (sum4 + 4 <= diff30) {
                            tmp160 = diff40;
                          }
                        }
                      }
                      tmp156 = tmp157;
                    }
                    tmp155 = tmp156;
                  }
                  diff35 = tmp155;
                }
              } else {
                diff35 = diff30;
                if (101 === uint16Array[diff30 - 1]) {
                  const diff42 = diff30 - 2;
                  if (99 === uint16Array[diff42]) {
                    const sum26 = sum4 + 4;
                    let tmp149 = diff30 >= sum26;
                    if (sum26 <= diff30) {
                      tmp149 = 110 === uint16Array[diff30 - 3];
                    }
                    if (tmp149) {
                      const diff43 = diff30 - 4;
                      tmp149 = 97 === uint16Array[diff43] || 101 === uint16Array[diff43];
                    }
                    diff35 = diff30;
                    if (tmp149) {
                      diff35 = diff30 - 4;
                    }
                  } else if (108 === uint16Array[diff42]) {
                    const sum27 = sum4 + 4;
                    let tmp145 = diff30 >= sum27;
                    if (sum27 <= diff30) {
                      tmp145 = 98 === uint16Array[diff30 - 3];
                    }
                    if (tmp145) {
                      const diff44 = diff30 - 4;
                      tmp145 = 97 === uint16Array[diff44] || 105 === uint16Array[diff44];
                    }
                    diff35 = diff30;
                    if (tmp145) {
                      diff35 = diff30 - 4;
                    }
                  } else if (116 === uint16Array[diff42]) {
                    const sum28 = sum4 + 3;
                    let tmp143 = diff30 >= sum28;
                    if (sum28 <= diff30) {
                      tmp143 = 97 === uint16Array[diff30 - 3];
                    }
                    diff35 = diff30;
                    if (tmp143) {
                      diff35 = diff30 - 3;
                    }
                  } else {
                    const sum29 = sum4 + 3;
                    let tmp140 = diff30 >= sum29;
                    if (sum29 <= diff30) {
                      tmp140 = 118 === uint16Array[diff42] || 122 === uint16Array[diff42];
                      const tmp141 = 118 === uint16Array[diff42] || 122 === uint16Array[diff42];
                    }
                    if (tmp140) {
                      tmp140 = 105 === uint16Array[diff30 - 3];
                    }
                    diff35 = diff30;
                    if (tmp140) {
                      diff35 = diff30 - 3;
                    }
                  }
                }
              }
            }
            const sum30 = num19 + 1;
            let tmp176 = diff35 >= sum30;
            if (sum30 <= diff35) {
              const sum31 = sum4 + 1;
              let tmp187 = diff35 >= sum31;
              let tmp177 = tmp187;
              if (sum31 <= diff35) {
                tmp177 = 108 === uint16Array[diff35 - 1];
              }
              if (tmp177) {
                tmp177 = 108 === uint16Array[diff35 - 2];
              }
              if (!tmp177) {
                const diff45 = diff35 - 1;
                let tmp179 = 101 === uint16Array[diff45];
                if (tmp179) {
                  if (sum31 > diff35) {
                    let tmp181 = diff45 >= 2;
                    if (2 <= diff45) {
                      const _Math17 = Math;
                      tmp181 = uint8Array[Math.min(Math, uint16Array[diff45 - 2], 127)];
                    }
                    if (tmp181) {
                      let tmp182 = 2 === diff45;
                      if (2 === diff45) {
                        const _Math18 = Math;
                        tmp182 = !uint8Array[Math.min(Math, uint16Array[diff45 - 1], 127)];
                      }
                      if (!tmp182) {
                        let tmp184 = diff45 >= 3;
                        if (3 <= diff45) {
                          const _Math19 = Math;
                          tmp184 = !uint8Array[Math.min(Math, uint16Array[diff45 - 3], 127)];
                        }
                        if (tmp184) {
                          const _Math20 = Math;
                          tmp184 = !uint8Array1[Math.min(Math, uint16Array[diff45 - 1], 127)];
                        }
                        tmp182 = tmp184;
                      }
                      tmp181 = tmp182;
                    }
                    tmp187 = !tmp181;
                  }
                  tmp179 = tmp187;
                }
                tmp177 = tmp179;
              }
              tmp176 = tmp177;
            }
            let diff46 = diff35;
            if (tmp176) {
              diff46 = diff35 - 1;
            }
            if (tmp119) {
              let str12 = "";
              let num215 = 0;
              let str13 = "";
              if (0 < diff46) {
                do {
                  let num216 = 121;
                  let _String = String;
                  if (89 !== uint16Array[num215]) {
                    num216 = uint16Array[num215];
                  }
                  str12 = str12 + fromCharCode(num216);
                  num215 = num215 + 1;
                  str13 = str12;
                } while (num215 < diff46);
              }
              return str13;
            } else {
              return str.slice(num3, num3 + diff46);
            }
          }
        }
      }
      if (97 === uint16Array[0]) {
        if (114 === uint16Array[1]) {
          if (115 === uint16Array[2]) {
            if (101 === uint16Array[3]) {
              num19 = 5;
            }
          }
        }
      }
    }
    if (6 <= diff2) {
      if (99 === uint16Array[0]) {
        if (111 === uint16Array[1]) {
          if (109 === uint16Array[2]) {
            if (109 === uint16Array[3]) {
              if (117 === uint16Array[4]) {
                num19 = 6;
              }
            }
          }
        }
      }
    }
    let tmp15 = sum1;
    if (sum1 < diff2) {
      const _Math4 = Math;
      let tmp17 = sum1;
      tmp15 = sum1;
      if (uint8Array[Math.min(Math, uint16Array[sum1], 127)]) {
        const sum32 = tmp17 + 1;
        tmp15 = sum32;
        while (sum32 < diff2) {
          let _Math5 = Math;
          tmp17 = sum32;
          tmp15 = sum32;
          if (!uint8Array[Math.min(Math, uint16Array[sum32], 127)]) {
            break;
          }
        }
      }
    }
    num19 = tmp15;
    if (tmp15 < diff2) {
      num19 = tmp15 + 1;
    }
  }
}
