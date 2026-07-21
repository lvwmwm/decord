// Module ID: 1879
// Function ID: 20890
// Name: decodeImage
// Dependencies: []

// Module 1879 (decodeImage)
const tmp = () => {
  function decodeImage(data, width, height, tabs) {
    let ctype;
    let depth;
    const result = width * height;
    const rounded = Math.ceil(width * _getBPP(tabs) / 8);
    const uint8Array = new Uint8Array(4 * result);
    const uint32Array = new Uint32Array(uint8Array.buffer);
    ({ ctype, depth } = tabs);
    const readUshort = obj.readUshort;
    const timestamp = Date.now();
    if (6 == ctype) {
      if (8 == depth) {
        let num61 = 0;
        if (0 < tmp69) {
          do {
            uint8Array[num61] = data[num61];
            let sum = num61 + 1;
            uint8Array[sum] = data[sum];
            let sum1 = num61 + 2;
            uint8Array[sum1] = data[sum1];
            let sum2 = num61 + 3;
            uint8Array[sum2] = data[sum2];
            num61 = num61 + 4;
          } while (num61 < tmp69);
        }
      }
      if (16 == depth) {
        let num64 = 0;
        if (0 < tmp69) {
          do {
            uint8Array[num64] = data[num64 << 1];
            num64 = num64 + 1;
          } while (num64 < tmp69);
        }
      }
    } else if (2 == ctype) {
      let tRNS = tabs.tabs.tRNS;
      if (null == tRNS) {
        if (8 == depth) {
          let num55 = 0;
          if (0 < result) {
            do {
              let result1 = 3 * num55;
              uint32Array[num55] = -16777216 | data[result1 + 2] << 16 | data[result1 + 1] << 8 | data[result1];
              num55 = num55 + 1;
            } while (num55 < result);
          }
        }
        if (16 == depth) {
          let num57 = 0;
          if (0 < result) {
            do {
              let result2 = 6 * num57;
              uint32Array[num57] = -16777216 | data[result2 + 4] << 16 | data[result2 + 2] << 8 | data[result2];
              num57 = num57 + 1;
            } while (num57 < result);
          }
        }
      } else {
        const first = tRNS[0];
        if (8 == depth) {
          let num48 = 0;
          if (0 < result) {
            do {
              let result3 = 3 * num48;
              let sum3 = result3 + 2;
              let sum4 = result3 + 1;
              uint32Array[num48] = -16777216 | data[sum3] << 16 | data[sum4] << 8 | data[result3];
              let tmp61 = data[result3] == first;
              let tmp57 = num48 << 2;
              if (tmp61) {
                tmp61 = data[sum4] == tmp76;
              }
              if (tmp61) {
                tmp61 = data[sum3] == tmp77;
              }
              if (tmp61) {
                uint8Array[tmp57 + 3] = 0;
              }
              num48 = num48 + 1;
            } while (num48 < result);
          }
        }
        if (16 == depth) {
          let num50 = 0;
          if (0 < result) {
            do {
              let result4 = 6 * num50;
              let sum5 = result4 + 4;
              let sum6 = result4 + 2;
              uint32Array[num50] = -16777216 | data[sum5] << 16 | data[sum6] << 8 | data[result4];
              let tmp62 = num50 << 2;
              let tmp66 = readUshort(data, result4) == first && readUshort(data, sum6) == tmp76 && readUshort(data, sum5) == tmp77;
              if (tmp66) {
                uint8Array[tmp62 + 3] = 0;
              }
              num50 = num50 + 1;
            } while (num50 < result);
          }
        }
      }
    } else if (3 == ctype) {
      const PLTE = tabs.tabs.PLTE;
      tRNS = tabs.tabs.tRNS;
      let num30 = 0;
      if (tRNS) {
        num30 = tRNS.length;
      }
      let tmp26;
      let tmp27;
      if (1 == depth) {
        let num34 = 0;
        if (0 < height) {
          do {
            let num35 = 0;
            if (0 < width) {
              do {
                let tmp32 = tmp31 + num35 << 2;
                let tmp33 = data[tmp30 + (num35 >> 3)] >> 7 - (7 & num35) & 1;
                let result5 = 3 * tmp33;
                uint8Array[tmp32] = PLTE[result5];
                uint8Array[tmp32 + 1] = PLTE[result5 + 1];
                uint8Array[tmp32 + 2] = PLTE[result5 + 2];
                let num36 = 255;
                if (tmp33 < num30) {
                  num36 = tRNS[tmp33];
                }
                uint8Array[tmp32 + 3] = num36;
                num35 = num35 + 1;
                let tmp28 = tmp32;
                let tmp29 = tmp33;
              } while (num35 < width);
            }
            num34 = num34 + 1;
            tmp26 = tmp28;
            tmp27 = tmp29;
          } while (num34 < height);
        }
      }
      if (2 == depth) {
        let tmp42 = tmp26;
        let num39 = 0;
        let tmp43 = tmp27;
        if (0 < height) {
          do {
            let num37 = 0;
            if (0 < width) {
              do {
                let tmp39 = tmp38 + num37 << 2;
                let tmp40 = data[tmp37 + (num37 >> 2)] >> 6 - ((3 & num37) << 1) & 3;
                let result6 = 3 * tmp40;
                uint8Array[tmp39] = PLTE[result6];
                uint8Array[tmp39 + 1] = PLTE[result6 + 1];
                uint8Array[tmp39 + 2] = PLTE[result6 + 2];
                let num38 = 255;
                if (tmp40 < num30) {
                  num38 = tRNS[tmp40];
                }
                uint8Array[tmp39 + 3] = num38;
                num37 = num37 + 1;
                tmp42 = tmp39;
                tmp43 = tmp40;
              } while (num37 < width);
            }
            num39 = num39 + 1;
            let tmp44 = tmp42;
            let tmp45 = tmp43;
          } while (num39 < height);
        }
      }
      if (4 == depth) {
        for (let num42 = 0; num42 < height; num42 = num42 + 1) {
          let num40 = 0;
          if (0 < width) {
            do {
              let tmp48 = tmp47 + num40 << 2;
              let tmp49 = data[tmp46 + (num40 >> 1)] >> 4 - ((1 & num40) << 2) & 15;
              let result7 = 3 * tmp49;
              uint8Array[tmp48] = PLTE[result7];
              uint8Array[tmp48 + 1] = PLTE[result7 + 1];
              uint8Array[tmp48 + 2] = PLTE[result7 + 2];
              let num41 = 255;
              if (tmp49 < num30) {
                num41 = tRNS[tmp49];
              }
              uint8Array[tmp48 + 3] = num41;
              num40 = num40 + 1;
              let tmp51 = tmp48;
              let tmp52 = tmp49;
            } while (num40 < width);
          }
        }
      }
      if (8 == depth) {
        let num44 = 0;
        if (0 < result) {
          do {
            let tmp53 = num44 << 2;
            let tmp54 = data[num44];
            let result8 = 3 * tmp54;
            uint8Array[tmp53] = PLTE[result8];
            uint8Array[tmp53 + 1] = PLTE[result8 + 1];
            uint8Array[tmp53 + 2] = PLTE[result8 + 2];
            let num43 = 255;
            if (tmp54 < num30) {
              num43 = tRNS[tmp54];
            }
            uint8Array[tmp53 + 3] = num43;
            num44 = num44 + 1;
          } while (num44 < result);
        }
      }
    } else if (4 == ctype) {
      if (8 == depth) {
        let num26 = 0;
        if (0 < result) {
          do {
            let tmp20 = num26 << 2;
            let tmp21 = num26 << 1;
            let tmp22 = data[tmp21];
            uint8Array[tmp20] = tmp22;
            uint8Array[tmp20 + 1] = tmp22;
            uint8Array[tmp20 + 2] = tmp22;
            uint8Array[tmp20 + 3] = data[tmp21 + 1];
            num26 = num26 + 1;
          } while (num26 < result);
        }
      }
      if (16 == depth) {
        let num28 = 0;
        if (0 < result) {
          do {
            let tmp23 = num28 << 2;
            let tmp24 = num28 << 2;
            let tmp25 = data[tmp24];
            uint8Array[tmp23] = tmp25;
            uint8Array[tmp23 + 1] = tmp25;
            uint8Array[tmp23 + 2] = tmp25;
            uint8Array[tmp23 + 3] = data[tmp24 + 2];
            num28 = num28 + 1;
          } while (num28 < result);
        }
      }
    } else if (0 == ctype) {
      let num = -1;
      if (tabs.tabs.tRNS) {
        num = tabs.tabs.tRNS;
      }
      let num10 = 0;
      if (0 < height) {
        do {
          let result9 = num10 * rounded;
          let result10 = num10 * width;
          if (1 == depth) {
            let num22 = 0;
            let tmp9 = tmp6;
            let num23 = 0;
            if (0 < width) {
              do {
                let result11 = 255 * (data[result9 + (num22 >>> 3)] >>> 7 - (7 & num22) & 1);
                let num24 = 255;
                if (result11 === 255 * num) {
                  num24 = 0;
                }
                uint32Array[result10 + num22] = num24 << 24 | result11 << 16 | result11 << 8 | result11;
                num22 = num22 + 1;
                tmp9 = result11;
                let tmp19 = num22;
              } while (num22 < width);
            }
          } else if (2 == depth) {
            let num19 = 0;
            tmp9 = tmp6;
            let num20 = 0;
            if (0 < width) {
              do {
                let result12 = 85 * (data[result9 + (num19 >>> 2)] >>> 6 - ((3 & num19) << 1) & 3);
                let num21 = 255;
                if (result12 === 85 * num) {
                  num21 = 0;
                }
                uint32Array[result10 + num19] = num21 << 24 | result12 << 16 | result12 << 8 | result12;
                num19 = num19 + 1;
                tmp9 = result12;
                let tmp17 = num19;
              } while (num19 < width);
            }
          } else if (4 == depth) {
            let num16 = 0;
            tmp9 = tmp6;
            let num17 = 0;
            if (0 < width) {
              do {
                let result13 = 17 * (data[result9 + (num16 >>> 1)] >>> 4 - ((1 & num16) << 2) & 15);
                let num18 = 255;
                if (result13 === 17 * num) {
                  num18 = 0;
                }
                uint32Array[result10 + num16] = num18 << 24 | result13 << 16 | result13 << 8 | result13;
                num16 = num16 + 1;
                tmp9 = result13;
                let tmp15 = num16;
              } while (num16 < width);
            }
          } else if (8 == depth) {
            let num13 = 0;
            tmp9 = tmp6;
            let num14 = 0;
            if (0 < width) {
              do {
                let tmp12 = data[result9 + num13];
                let num15 = 255;
                if (tmp12 == num) {
                  num15 = 0;
                }
                uint32Array[result10 + num13] = num15 << 24 | tmp12 << 16 | tmp12 << 8 | tmp12;
                num13 = num13 + 1;
                tmp9 = tmp12;
                let tmp13 = num13;
              } while (num13 < width);
            }
          } else {
            tmp9 = tmp6;
            if (16 == depth) {
              let num12 = 0;
              tmp9 = tmp6;
              let num68 = 0;
              if (0 < width) {
                do {
                  let tmp10 = data[result9 + (num12 << 1)];
                  let num11 = 255;
                  if (readUshort(data, result9 + (num12 << 1)) == num) {
                    num11 = 0;
                  }
                  uint32Array[result10 + num12] = num11 << 24 | tmp10 << 16 | tmp10 << 8 | tmp10;
                  num12 = num12 + 1;
                  tmp9 = tmp10;
                  let tmp11 = num12;
                } while (num12 < width);
              }
            }
          }
          num10 = num10 + 1;
          let tmp6 = tmp9;
        } while (num10 < height);
      }
    }
    return uint8Array;
  }
  function _decompress(size, arr3, width, height) {
    const timestamp = Date.now();
    const uint8Array = new Uint8Array((Math.ceil(width * _getBPP(size) / 8) + 1 + size.interlace) * height);
    if (size.tabs.CgBI) {
      let tmp4 = callback(arr3, uint8Array);
    } else {
      tmp4 = _inflate(arr3, uint8Array);
    }
    const timestamp1 = Date.now();
    if (0 == size.interlace) {
      _filterZero(tmp4, size, 0, width, height);
      let tmp38 = tmp4;
    } else {
      tmp38 = tmp4;
      if (1 == size.interlace) {
        ({ width, height } = size);
        const tmp46 = _getBPP(size);
        const _Math2 = Math;
        const rounded = Math.ceil(width * tmp46 / 8);
        const _Uint8Array = Uint8Array;
        const uint8Array1 = new Uint8Array(height * rounded);
        const items = [];
        const items1 = [];
        let num9 = 0;
        let num8 = 0;
        do {
          let tmp7 = ["<string:14876672>", "<string:16908288>", "<string:65470464>", "<string:65470464>", "<string:65470464>", "<string:552599552>", "isArray"][num8];
          let tmp8 = tmp53[num8];
          let sum = items[num8];
          let num = 0;
          let num2 = 0;
          while (sum < height) {
            sum = sum + tmp7;
            num = num + 1;
            num2 = num;
          }
          let sum1 = items1[num8];
          let num3 = 0;
          let num4 = 0;
          while (sum1 < width) {
            sum1 = sum1 + tmp8;
            num3 = num3 + 1;
            num4 = num3;
          }
          let _Math = Math;
          let rounded1 = Math.ceil(num4 * tmp46 / 8);
          let tmp12 = closure_6;
          let tmp13 = tmp4;
          let tmp14 = size;
          let tmp15 = num9;
          let tmp16 = num4;
          let tmp17 = num2;
          let tmp18 = closure_6(tmp4, size, num9, num4, num2);
          let sum8 = items[num8];
          let num5 = 0;
          let tmp20 = tmp22;
          let tmp21 = tmp23;
          while (sum8 < height) {
            let sum7 = items1[num8];
            let sum6 = num9 + num5 * rounded1 << 3;
            let tmp26 = tmp20;
            let num6 = tmp21;
            let tmp27 = sum6;
            let tmp28 = tmp20;
            let tmp29 = tmp21;
            let tmp30 = sum7;
            if (sum7 < width) {
              do {
                if (1 == tmp46) {
                  let sum2 = sum8 * rounded + (sum7 >> 3);
                  uint8Array1[sum2] = uint8Array1[sum2] | (tmp4[sum6 >> 3] >> 7 - (7 & sum6) & 1) << 7 - (7 & sum7);
                }
                if (2 == tmp46) {
                  let sum3 = sum8 * rounded + (sum7 >> 2);
                  uint8Array1[sum3] = uint8Array1[sum3] | (tmp4[sum6 >> 3] >> 6 - (7 & sum6) & 3) << 6 - ((3 & sum7) << 1);
                }
                if (4 == tmp46) {
                  let sum4 = sum8 * rounded + (sum7 >> 1);
                  uint8Array1[sum4] = uint8Array1[sum4] | (tmp4[sum6 >> 3] >> 4 - (7 & sum6) & 15) << 4 - ((1 & sum7) << 2);
                }
                if (tmp46 >= 8) {
                  let sum5 = sum8 * rounded + sum7 * tmp47;
                  let num7 = 0;
                  tmp26 = sum5;
                  num6 = 0;
                  if (0 < tmp47) {
                    do {
                      uint8Array1[sum5 + num7] = tmp4[(sum6 >> 3) + num7];
                      num7 = num7 + 1;
                      tmp26 = sum5;
                      num6 = num7;
                    } while (num7 < tmp47);
                  }
                }
                sum6 = sum6 + tmp46;
                sum7 = sum7 + tmp8;
                tmp27 = sum6;
                tmp28 = tmp26;
                tmp29 = num6;
                tmp30 = sum7;
              } while (sum7 < width);
            }
            num5 = num5 + 1;
            sum8 = sum8 + tmp7;
            let tmp35 = tmp30;
            let tmp36 = tmp27;
            tmp20 = tmp28;
            tmp21 = tmp29;
            let tmp22 = tmp28;
            let tmp23 = tmp29;
          }
          let sum9 = num9;
          if (num4 * num2 != 0) {
            sum9 = num9 + num2 * (1 + rounded1);
          }
          num8 = num8 + 1;
          num9 = sum9;
          tmp38 = uint8Array1;
        } while (num8 < 7);
      }
    }
    return tmp38;
  }
  function _inflate(arr2, uint8Array) {
    uint8Array = new Uint8Array(arr2.buffer, 2, arr2.length - 6);
    return callback(uint8Array, uint8Array);
  }
  function _getBPP(depth) {
    return [15189782894321462000000000000000000000000000000000000000000000000000000000000000000, -0.0000000000000004363332115256034, -0.0000000000000000000000000000000000000000000000000000000000000000000000000003251811658649702, null, null, null, null][depth.ctype] * depth.depth;
  }
  function _filterZero(arg0, depth) {
    const tmp = _getBPP(depth);
    const rounded = Math.ceil(arg3 * tmp / 8);
    const rounded1 = Math.ceil(tmp / 8);
    if (arg0[arg2] > 1) {
      arg0[arg2] = [][tmp4 - 2];
    }
    if (3 == arg0[arg2]) {
      let sum = rounded1;
      if (rounded1 < rounded) {
        do {
          arg0[sum + 1] = arg0[sum + 1] + (arg0[sum + 1 - rounded1] >>> 1) & 255;
          sum = sum + 1;
        } while (sum < rounded);
      }
    }
    for (let num3 = 0; num3 < arg4; num3 = num3 + 1) {
      let sum1 = arg2 + num3 * rounded;
      let sum2 = sum1 + num3 + 1;
      let tmp8 = arg0[sum2 - 1];
      if (0 == tmp8) {
        for (let num11 = 0; num11 < rounded; num11 = num11 + 1) {
          arg0[sum1 + num11] = arg0[sum2 + num11];
        }
      } else if (1 == tmp8) {
        let num9 = 0;
        let num10 = 0;
        if (0 < rounded1) {
          do {
            arg0[sum1 + num9] = arg0[sum2 + num9];
            num9 = num9 + 1;
            num10 = num9;
          } while (num9 < rounded1);
        }
        if (num10 < rounded) {
          do {
            arg0[sum1 + num10] = arg0[sum2 + num10] + arg0[sum1 + num10 - rounded1];
            num10 = num10 + 1;
          } while (num10 < rounded);
        }
      } else if (2 == tmp8) {
        for (let num8 = 0; num8 < rounded; num8 = num8 + 1) {
          arg0[sum1 + num8] = arg0[sum2 + num8] + arg0[sum1 + num8 - rounded];
        }
      } else if (3 == tmp8) {
        let num6 = 0;
        let num7 = 0;
        if (0 < rounded1) {
          do {
            arg0[sum1 + num6] = arg0[sum2 + num6] + (arg0[sum1 + num6 - rounded] >>> 1);
            num6 = num6 + 1;
            num7 = num6;
          } while (num6 < rounded1);
        }
        if (num7 < rounded) {
          do {
            arg0[sum1 + num7] = arg0[sum2 + num7] + (arg0[sum1 + num7 - rounded] + arg0[sum1 + num7 - rounded1] >>> 1);
            num7 = num7 + 1;
          } while (num7 < rounded);
        }
      } else {
        let num4 = 0;
        let num5 = 0;
        if (0 < rounded1) {
          do {
            let tmp10 = closure_7;
            let sum3 = sum1 + num4;
            arg0[sum3] = arg0[sum2 + num4] + closure_7(0, arg0[sum1 + num4 - rounded], 0);
            num4 = num4 + 1;
            num5 = num4;
          } while (num4 < rounded1);
        }
        if (num5 < rounded) {
          do {
            let tmp12 = closure_7;
            let sum4 = sum1 + num5;
            arg0[sum4] = arg0[sum2 + num5] + closure_7(arg0[sum1 + num5 - rounded1], arg0[sum1 + num5 - rounded], arg0[sum1 + num5 - rounded1 - rounded]);
            num5 = num5 + 1;
          } while (num5 < rounded);
        }
      }
    }
    return arg0;
  }
  function _paeth(arg0, arg1, arg2) {
    let tmp = arg0;
    let tmp2 = arg2;
    const diff = arg0 + arg1 - arg2;
    const diff1 = diff - arg0;
    const diff2 = diff - arg1;
    const diff3 = diff - arg2;
    if (diff1 * diff1 > diff2 * diff2) {
      if (diff2 * diff2 <= diff3 * diff3) {
        tmp2 = arg1;
      }
      tmp = tmp2;
    }
    return tmp;
  }
  function _IHDR(arr2, sum2, arg2) {
    arg2.width = obj.readUint(arr2, sum2);
    const sum = sum2 + 4;
    arg2.height = obj.readUint(arr2, sum);
    const sum1 = sum + 4;
    arg2.depth = arr2[sum1];
    sum2 = sum1 + 1;
    arg2.ctype = arr2[sum2];
    const sum3 = sum2 + 1;
    arg2.compress = arr2[sum3];
    const sum4 = sum3 + 1;
    arg2.filter = arr2[sum4];
    arg2.interlace = arr2[sum4 + 1];
  }
  function _copyTile(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
    const bound = Math.min(arg1, arg4);
    const bound1 = Math.min(arg2, arg5);
    for (let num = 0; num < bound1; num = num + 1) {
      let tmp13 = tmp3;
      let tmp14 = tmp4;
      let tmp15 = tmp5;
      let tmp16 = tmp6;
      let tmp17 = tmp7;
      let tmp18 = tmp8;
      let tmp19 = tmp9;
      let tmp20 = tmp10;
      let tmp21 = tmp11;
      let tmp22 = tmp12;
      let num2 = 0;
      if (0 < bound) {
        while (true) {
          if (arg6 >= 0) {
            if (arg7 >= 0) {
              let tmp23 = num * arg1 + num2 << 2;
              let tmp24 = (arg7 + num) * arg4 + arg6 + num2 << 2;
              if (0 == arg8) {
                arg3[tmp24] = arg0[tmp23];
                arg3[tmp24 + 1] = arg0[tmp23 + 1];
                arg3[tmp24 + 2] = arg0[tmp23 + 2];
                arg3[tmp24 + 3] = arg0[tmp23 + 3];
                let tmp25 = tmp13;
                let tmp26 = tmp14;
                let tmp27 = tmp15;
                let tmp28 = tmp16;
                let tmp29 = tmp17;
                let tmp30 = tmp18;
                let tmp31 = tmp19;
                let tmp32 = tmp20;
                let tmp33 = tmp21;
                let tmp34 = tmp22;
              } else if (1 == arg8) {
                let result = 0.00392156862745098 * arg0[tmp23 + 3];
                let result1 = arg0[tmp23] * result;
                let result2 = arg0[tmp23 + 1] * result;
                let result3 = arg0[tmp23 + 2] * result;
                let sum = tmp24 + 3;
                let result4 = 0.00392156862745098 * arg3[sum];
                let result5 = arg3[tmp24] * result4;
                let sum1 = tmp24 + 1;
                let result6 = arg3[sum1] * result4;
                let sum2 = tmp24 + 2;
                let result7 = arg3[sum2] * result4;
                let diff = 1 - result;
                let sum3 = result + result4 * diff;
                let num3 = 0;
                if (0 !== sum3) {
                  num3 = 1 / sum3;
                }
                arg3[sum] = 255 * sum3;
                arg3[tmp24] = (result1 + result5 * diff) * num3;
                arg3[sum1] = (result2 + result6 * diff) * num3;
                arg3[sum2] = (result3 + result7 * diff) * num3;
                tmp25 = result;
                tmp26 = result1;
                tmp27 = result2;
                tmp28 = result3;
                tmp29 = result4;
                tmp30 = result5;
                tmp31 = result6;
                tmp32 = result7;
                tmp33 = diff;
                tmp34 = sum3;
              } else if (2 == arg8) {
                let tmp35 = arg0[tmp23 + 3];
                let tmp36 = arg0[tmp23];
                let tmp37 = arg0[tmp23 + 1];
                let tmp38 = arg0[tmp23 + 2];
                let sum4 = tmp24 + 3;
                let tmp40 = arg3[sum4];
                let tmp41 = arg3[tmp24];
                let sum5 = tmp24 + 1;
                let tmp43 = arg3[sum5];
                let sum6 = tmp24 + 2;
                let tmp45 = arg3[sum6];
                if (tmp35 == tmp40) {
                  if (tmp36 == tmp41) {
                    if (tmp37 == tmp43) {
                      if (tmp38 == tmp45) {
                        arg3[tmp24] = 0;
                        arg3[sum5] = 0;
                        arg3[sum6] = 0;
                        arg3[sum4] = 0;
                        tmp25 = tmp35;
                        tmp26 = tmp36;
                        tmp27 = tmp37;
                        tmp28 = tmp38;
                        tmp29 = tmp40;
                        tmp30 = tmp41;
                        tmp31 = tmp43;
                        tmp32 = tmp45;
                        tmp33 = tmp21;
                        tmp34 = tmp22;
                      }
                    }
                  }
                }
                arg3[tmp24] = tmp36;
                arg3[sum5] = tmp37;
                arg3[sum6] = tmp38;
                arg3[sum4] = tmp35;
                tmp25 = tmp35;
                tmp26 = tmp36;
                tmp27 = tmp37;
                tmp28 = tmp38;
                tmp29 = tmp40;
                tmp30 = tmp41;
                tmp31 = tmp43;
                tmp32 = tmp45;
                tmp33 = tmp21;
                tmp34 = tmp22;
              } else {
                tmp25 = tmp13;
                tmp26 = tmp14;
                tmp27 = tmp15;
                tmp28 = tmp16;
                tmp29 = tmp17;
                tmp30 = tmp18;
                tmp31 = tmp19;
                tmp32 = tmp20;
                tmp33 = tmp21;
                tmp34 = tmp22;
                if (3 == arg8) {
                  let tmp61 = arg0[tmp23 + 3];
                  let tmp62 = arg0[tmp23];
                  let tmp63 = arg0[tmp23 + 1];
                  let tmp64 = arg0[tmp23 + 2];
                  let tmp65 = arg3[tmp24 + 3];
                  let tmp66 = arg3[tmp24];
                  let tmp67 = arg3[tmp24 + 1];
                  let tmp68 = arg3[tmp24 + 2];
                  if (tmp61 == tmp65) {
                    if (tmp62 == tmp66) {
                      if (tmp63 == tmp67) {
                        tmp25 = tmp61;
                        tmp26 = tmp62;
                        tmp27 = tmp63;
                        tmp28 = tmp64;
                        tmp29 = tmp65;
                        tmp30 = tmp66;
                        tmp31 = tmp67;
                        tmp32 = tmp68;
                        tmp33 = tmp21;
                        tmp34 = tmp22;
                      }
                    }
                  }
                  tmp26 = tmp62;
                  tmp27 = tmp63;
                  tmp28 = tmp64;
                  tmp29 = tmp65;
                  tmp30 = tmp66;
                  tmp31 = tmp67;
                  tmp32 = tmp68;
                  tmp33 = tmp21;
                  tmp34 = tmp22;
                  tmp25 = tmp61;
                  if (tmp61 < 220) {
                    tmp25 = tmp61;
                    tmp26 = tmp62;
                    tmp27 = tmp63;
                    tmp28 = tmp64;
                    tmp29 = tmp65;
                    tmp30 = tmp66;
                    tmp31 = tmp67;
                    tmp32 = tmp68;
                    tmp33 = tmp21;
                    tmp34 = tmp22;
                    if (tmp65 > 20) {
                      let flag = false;
                      return false;
                    }
                  }
                }
              }
              num2 = num2 + 1;
              tmp13 = tmp25;
              tmp14 = tmp26;
              tmp15 = tmp27;
              tmp16 = tmp28;
              tmp17 = tmp29;
              tmp18 = tmp30;
              tmp19 = tmp31;
              tmp20 = tmp32;
              tmp21 = tmp33;
              tmp22 = tmp34;
              let tmp59 = tmp23;
              let tmp60 = tmp24;
              let tmp3 = tmp25;
              let tmp4 = tmp26;
              let tmp5 = tmp27;
              let tmp6 = tmp28;
              let tmp7 = tmp29;
              let tmp8 = tmp30;
              let tmp9 = tmp31;
              let tmp10 = tmp32;
              let tmp11 = tmp33;
              let tmp12 = tmp34;
              if (num2 >= bound) {
                break;
              }
            }
          }
          tmp23 = (-arg7 + num) * arg1 - arg6 + num2 << 2;
          tmp24 = num * arg4 + num2 << 2;
        }
      }
    }
    return true;
  }
  let obj = {
    nextZero(arr2, sum2) {
      let tmp4;
      let tmp = sum2;
      let tmp2 = sum2;
      if (0 != arr2[sum2]) {
        do {
          let sum = tmp + 1;
          tmp = sum;
          tmp2 = sum;
          tmp4 = arr2[sum];
        } while (0 != tmp4);
      }
      return tmp2;
    },
    readUshort(arr2, sum2) {
      return arr2[sum2] << 8 | arr2[sum2 + 1];
    },
    writeUshort(uint8Array, sum40, arg2) {
      uint8Array[sum40] = arg2 >> 8 & 255;
      uint8Array[sum40 + 1] = 255 & arg2;
    },
    readUint(arr2, sum2) {
      return 16777216 * arr2[sum2] + (arr2[sum2 + 1] << 16 | arr2[sum2 + 2] << 8 | arr2[sum2 + 3]);
    },
    writeUint(uint8Array, writeUintResult16, height) {
      uint8Array[writeUintResult16] = height >> 24 & 255;
      uint8Array[writeUintResult16 + 1] = height >> 16 & 255;
      uint8Array[writeUintResult16 + 2] = height >> 8 & 255;
      uint8Array[writeUintResult16 + 3] = 255 & height;
    },
    readASCII(arr2, sum2, sum) {
      let num = 0;
      let str = "";
      let str2 = "";
      if (0 < sum) {
        do {
          let _String = String;
          str = `${String.fromCharCode(arr2[sum2 + num])}`;
          num = num + 1;
          str2 = str;
        } while (num < sum);
      }
      return str2;
    },
    writeASCII(uint8Array, writeUintResult16, IEND) {
      let length;
      let num = 0;
      if (0 < IEND.length) {
        do {
          let sum = writeUintResult16 + num;
          uint8Array[sum] = IEND.charCodeAt(num);
          num = num + 1;
          length = IEND.length;
        } while (num < length);
      }
    },
    readBytes(arr2, sum2, uint) {
      const items = [];
      for (let num = 0; num < uint; num = num + 1) {
        let arr = items.push(arr2[sum2 + num]);
      }
      return items;
    },
    pad(arg0) {
      let text = arg0;
      if (arg0.length < 2) {
        text = `0${arg0}`;
      }
      return text;
    },
    readUTF8(arr2, sum, length) {
      let str = "";
      let num = 0;
      if (0 < length) {
        do {
          let tmp = str;
          let tmp2 = closure_0;
          let tmp4 = arr2;
          let tmp5 = sum;
          let str2 = arr2[sum + num];
          str = `${"%" + tmp3(str2.toString(16))}`;
          num = num + 1;
          let tmp6 = length;
        } while (num < length);
      }
      return decodeURIComponent(str);
    }
  };
  let closure_1 = () => {
    function C(arg0, arg1) {
      const v = obj.v;
      for (let num = 0; num <= arg1; num = num + 1) {
        v[num] = 0;
      }
      for (let num2 = 1; num2 < length; num2 = num2 + 2) {
        let tmp = arg0[num2];
        v[tmp] = v[tmp] + 1;
      }
      const m = obj.m;
      v[0] = 0;
      let num3 = 0;
      for (let num4 = 1; num4 <= arg1; num4 = num4 + 1) {
        num3 = num3 + v[num4 - 1] << 1;
        m[num4] = num3;
      }
      for (let num5 = 0; num5 < length; num5 = num5 + 2) {
        let tmp2 = arg0[num5 + 1];
        if (0 != tmp2) {
          arg0[num5] = m[tmp2];
          m[tmp2] = m[tmp2] + 1;
        }
      }
    }
    function t(arg0, arg1, arg2) {
      for (let num = 0; num < length; num = num + 2) {
        let sum = num + 1;
        if (0 != arg0[sum]) {
          let tmp3 = arg0[sum];
          let tmp4 = num >> 1 << 4 | tmp3;
          let diff = arg1 - tmp3;
          let tmp6 = arg0[num] << diff;
          let sum1 = tmp6 + (1 << diff);
          let sum2 = tmp6;
          let tmp9 = tmp4;
          let tmp10 = tmp6;
          let tmp11 = sum1;
          if (tmp6 != sum1) {
            do {
              arg2[tmp[sum2] >>> 15 - arg1] = tmp4;
              sum2 = sum2 + 1;
              let tmp12 = tmp4;
              let tmp13 = sum1;
              let tmp14 = sum2;
            } while (sum2 != sum1);
          }
        }
      }
    }
    function g(arg0, arg1) {
      let length;
      let num = 0;
      if (0 < arg0.length) {
        do {
          arg0[num] = tmp[arg0[num] << arg1 - arg0[num + 1]] >>> tmp2;
          num = num + 2;
          length = arg0.length;
        } while (num < length);
      }
    }
    function F(arg0, arg1, arg2) {
      return (arg0[arg1 >>> 3] | arg0[1 + (arg1 >>> 3)] << 8) >>> (7 & arg1) & (1 << arg2) - 1;
    }
    function s(arg0, arg1, arg2) {
      return (arg0[arg1 >>> 3] | arg0[1 + (arg1 >>> 3)] << 8 | arg0[2 + (arg1 >>> 3)] << 16) >>> (7 & arg1) & (1 << arg2) - 1;
    }
    function w(arg0, arg1) {
      return (arg0[arg1 >>> 3] | arg0[1 + (arg1 >>> 3)] << 8 | arg0[2 + (arg1 >>> 3)] << 16) >>> (7 & arg1);
    }
    function H(arg0, arg1) {
      if (arg1 <= arg0.length) {
        return arg0;
      } else {
        const _Uint8Array = Uint8Array;
        const _Math = Math;
        const uint8Array = new Uint8Array(Math.max(length << 1, arg1));
        const result = uint8Array.set(arg0, 0);
        return uint8Array;
      }
    }
    function B(arg0, arg1, arg2, arg3, arg4, arg5) {
      let sum1;
      let tmp = arg4;
      let num = 0;
      let tmp5 = arg4;
      if (0 < arg2) {
        do {
          let tmp6 = closure_6;
          let tmp7 = arg0[closure_6(undefined, arg3, tmp) & arg1];
          let sum = tmp + (15 & tmp7);
          let tmp9 = tmp7 >>> 4;
          if (tmp9 <= 15) {
            arg5[num] = tmp9;
            sum1 = num + 1;
            let tmp16 = sum;
            let tmp17 = tmp2;
            let tmp18 = tmp3;
            let tmp19 = tmp4;
          } else {
            if (16 === tmp9) {
              let tmp13 = closure_4;
              let num3 = 3 + closure_4(arg3, sum, 2);
              let sum2 = sum + 2;
              let num2 = arg5[num - 1];
            } else if (17 === tmp9) {
              let tmp12 = closure_4;
              num3 = 3 + closure_4(arg3, sum, 3);
              sum2 = sum + 3;
              num2 = 0;
            } else {
              sum2 = sum;
              num2 = 0;
              num3 = 0;
              if (18 === tmp9) {
                let tmp11 = closure_4;
                num3 = 11 + closure_4(arg3, sum, 7);
                sum2 = sum + 7;
                num2 = 0;
              }
            }
            let sum3 = num + num3;
            let sum4 = num;
            tmp16 = sum2;
            tmp17 = num2;
            tmp18 = num3;
            tmp19 = sum3;
            sum1 = num;
            if (num < sum3) {
              do {
                arg5[sum4] = num2;
                sum4 = sum4 + 1;
                tmp16 = sum2;
                tmp17 = num2;
                tmp18 = num3;
                sum1 = sum4;
                tmp19 = sum3;
              } while (sum4 < sum3);
            }
          }
          tmp = tmp16;
          num = sum1;
          let tmp2 = tmp17;
          let tmp3 = tmp18;
          let tmp4 = tmp19;
          tmp5 = tmp16;
        } while (sum1 < arg2);
      }
      return tmp5;
    }
    function d(arg0, arg1, arg2, arg3) {
      let num = 0;
      let num2 = 0;
      let num3 = 0;
      let num4 = 0;
      if (0 < arg2) {
        do {
          let tmp2 = arg0[num2 + arg1];
          arg3[num2 << 1] = 0;
          arg3[1 + (num2 << 1)] = tmp2;
          if (tmp2 > num) {
            num = tmp2;
          }
          num2 = num2 + 1;
          num3 = num;
          num4 = num2;
        } while (num2 < arg2);
      }
      if (num4 < arg3.length >>> 1) {
        do {
          arg3[num4 << 1] = 0;
          arg3[1 + (num4 << 1)] = 0;
          num4 = num4 + 1;
        } while (num4 < tmp);
      }
      return num3;
    }
    const obj = {};
    const uint16Array = new Uint16Array(16);
    obj.m = uint16Array;
    const uint16Array1 = new Uint16Array(16);
    obj.v = uint16Array1;
    obj.d = [];
    obj.o = [];
    obj.z = [];
    const uint16Array2 = new Uint16Array(32);
    obj.B = uint16Array2;
    obj.p = [];
    obj.w = [];
    const uint32Array = new Uint32Array(32);
    obj.h = uint32Array;
    const uint16Array3 = new Uint16Array(512);
    obj.g = uint16Array3;
    obj.s = [];
    const uint16Array4 = new Uint16Array(32);
    obj.A = uint16Array4;
    obj.t = [];
    const uint16Array5 = new Uint16Array(32768);
    obj.k = uint16Array5;
    obj.c = [];
    obj.a = [];
    const uint16Array6 = new Uint16Array(32768);
    obj.n = uint16Array6;
    obj.e = [];
    const uint16Array7 = new Uint16Array(512);
    obj.C = uint16Array7;
    obj.b = [];
    const uint16Array8 = new Uint16Array(32768);
    obj.i = uint16Array8;
    const uint32Array1 = new Uint32Array(286);
    obj.r = uint32Array1;
    const uint32Array2 = new Uint32Array(30);
    obj.f = uint32Array2;
    const uint32Array3 = new Uint32Array(19);
    obj.l = uint32Array3;
    const uint32Array4 = new Uint32Array(15000);
    obj.u = uint32Array4;
    const uint16Array9 = new Uint16Array(65536);
    obj.q = uint16Array9;
    const uint16Array10 = new Uint16Array(32768);
    obj.j = uint16Array10;
    () => {
      let num2;
      class A {
        constructor(arg0, arg1, arg2) {
          tmp = +arg1;
          diff = tmp - 1;
          if (0 != tmp) {
            do {
              arr = arg0.push(0, arg2);
              tmp4 = +diff;
              diff = tmp4 - 1;
            } while (0 != tmp4);
          }
          return;
        }
      }
      let num = 0;
      do {
        let tmp = (2863311530 & num) >>> 1 | (1431655765 & num) << 1;
        let tmp2 = (3435973836 & tmp) >>> 2 | (858993459 & tmp) << 2;
        let tmp3 = (4042322160 & tmp2) >>> 4 | (252645135 & tmp2) << 4;
        let tmp4 = (4278255360 & tmp3) >>> 8 | (16711935 & tmp3) << 8;
        let tmp5 = closure_0;
        closure_0.i[num] = (tmp4 >>> 16 | tmp4 << 16) >>> 17;
        num = num + 1;
        num2 = 0;
      } while (num < 32768);
      do {
        let tmp6 = closure_0;
        let tmp7 = closure_0;
        let tmp8 = closure_0;
        closure_0.B[num2] = closure_0.o[num2] << 3 | closure_0.z[num2];
        let tmp9 = closure_0;
        let tmp10 = closure_0;
        let tmp11 = closure_0;
        closure_0.h[num2] = closure_0.p[num2] << 4 | closure_0.w[num2];
        num2 = num2 + 1;
      } while (num2 < 32);
      A(obj.s, 144, 8);
      A(obj.s, 112, 9);
      A(obj.s, 24, 7);
      A(obj.s, 8, 8);
      C(obj.s, 9);
      t(obj.s, 9, obj.g);
      g(obj.s, 9);
      A(obj.t, 32, 5);
      C(obj.t, 5);
      t(obj.t, 5, obj.A);
      g(obj.t, 5);
      A(obj.b, 19, 0);
      A(obj.c, 286, 0);
      A(obj.e, 30, 0);
      A(obj.a, 320, 0);
    }();
    return function v(buffer) {
      let arr;
      let sum5;
      let tmp14;
      let _Uint8Array = arg1;
      _Uint8Array = Uint8Array;
      if (3 == buffer[0]) {
        if (0 == buffer[1]) {
          if (!_Uint8Array) {
            const prototype3 = _Uint8Array.prototype;
            _Uint8Array = new.target;
            _Uint8Array = new.target;
            _Uint8Array = new _Uint8Array(0);
          }
          return _Uint8Array;
        }
      }
      let _Uint8Array1 = _Uint8Array;
      if (null == _Uint8Array) {
        const prototype = _Uint8Array.prototype;
        _Uint8Array1 = new _Uint8Array(buffer.length >>> 2 << 3);
      }
      let num3 = 0;
      let num4 = 0;
      let num5 = 0;
      let num6 = 0;
      let num7 = 0;
      let num8 = 0;
      let num9 = 0;
      do {
        let tmp13 = closure_5;
        tmp14 = closure_5(buffer, num9, 1);
        let tmp15 = closure_5(buffer, num9 + 1, 2);
        let sum = num9 + 3;
        if (0 !== tmp15) {
          let tmp41 = _Uint8Array1;
          if (tmp2) {
            let tmp42 = closure_7;
            tmp41 = closure_7(_Uint8Array1, num8 + 131072);
          }
          if (1 === tmp15) {
            let tmp43 = closure_0;
            let g = closure_0.g;
            let tmp44 = closure_0;
            let A = closure_0.A;
            num6 = 511;
            num7 = 31;
          }
          let tmp45 = tmp41;
          let sum2 = num8;
          let tmp47 = sum;
          let tmp48 = tmp8;
          let tmp49 = tmp9;
          let tmp50 = tmp10;
          if (2 === tmp15) {
            _Uint8Array = closure_4;
            _Uint8Array = closure_4(buffer, sum, 5) + 257;
            _Uint8Array = closure_4(buffer, sum + 5, 5) + 1;
            _Uint8Array = closure_4(buffer, sum + 10, 4) + 4;
            _Uint8Array = sum + 14;
            let num10 = 0;
            do {
              let tmp51 = closure_0;
              closure_0.b[num10] = 0;
              let tmp52 = closure_0;
              closure_0.b[num10 + 1] = 0;
              num10 = num10 + 2;
            } while (num10 < 38);
            let num11 = 1;
            let num12 = 0;
            let num13 = 1;
            let num14 = 0;
            if (0 < _Uint8Array) {
              do {
                let tmp53 = closure_4;
                let tmp54 = closure_4(buffer, _Uint8Array + 3 * num12, 3);
                let tmp55 = closure_0;
                let tmp56 = closure_0;
                closure_0.b[1 + (closure_0.d[num12] << 1)] = tmp54;
                if (tmp54 > num11) {
                  num11 = tmp54;
                }
                num12 = num12 + 1;
                num13 = num11;
                let tmp8 = tmp54;
                num14 = num12;
              } while (num12 < _Uint8Array);
            }
            let tmp57 = closure_1;
            let tmp58 = closure_0;
            let tmp59 = closure_1(closure_0.b, num13);
            let tmp60 = closure_2;
            let tmp61 = closure_0;
            let tmp62 = closure_0;
            let tmp63 = closure_2(closure_0.b, num13, closure_0.C);
            let tmp64 = closure_0;
            let k = closure_0.k;
            let tmp65 = closure_0;
            let n = closure_0.n;
            let tmp66 = closure_8;
            let tmp67 = closure_0;
            let tmp68 = closure_0;
            let tmp69 = buffer;
            tmp47 = closure_8(closure_0.C, (1 << num13) - 1, _Uint8Array + _Uint8Array, buffer, _Uint8Array + 3 * _Uint8Array, closure_0.a);
            let tmp70 = closure_9;
            let tmp71 = closure_0;
            let tmp72 = closure_0;
            let num15 = 0;
            let tmp73 = _Uint8Array;
            let tmp74 = closure_9(closure_0.a, 0, _Uint8Array, closure_0.c);
            num6 = (1 << tmp74) - 1;
            let tmp75 = closure_0;
            let tmp76 = closure_0;
            let tmp77 = _Uint8Array;
            let tmp78 = _Uint8Array;
            let tmp79 = closure_9(closure_0.a, _Uint8Array, _Uint8Array, closure_0.e);
            num7 = (1 << tmp79) - 1;
            let tmp80 = closure_0;
            let tmp81 = closure_1(closure_0.c, tmp74);
            let tmp82 = closure_0;
            let tmp83 = closure_2(closure_0.c, tmp74, k);
            let tmp84 = closure_0;
            let tmp85 = closure_1(closure_0.e, tmp79);
            let tmp86 = closure_0;
            let tmp87 = closure_2(closure_0.e, tmp79, n);
            let tmp6 = num13;
            let tmp7 = num14;
            tmp48 = tmp8;
            tmp45 = tmp41;
            g = k;
            A = n;
            num3 = _Uint8Array;
            num4 = _Uint8Array;
            num5 = _Uint8Array;
            sum2 = num8;
            tmp49 = tmp9;
            tmp50 = tmp10;
          }
          while (true) {
            let tmp88 = closure_6;
            let tmp89 = g[closure_6(undefined, buffer, tmp47) & num6];
            let sum1 = tmp47 + (15 & tmp89);
            let tmp91 = tmp89 >>> 4;
            let tmp92 = tmp45;
            _Uint8Array = sum2;
            _Uint8Array = tmp49;
            _Uint8Array = tmp50;
            if (tmp91 >>> 8 === 0) {
              _Uint8Array = +sum2;
              sum2 = _Uint8Array + 1;
              tmp45[_Uint8Array] = tmp91;
              tmp47 = sum1;
              // continue
            } else {
              arr = tmp45;
              let tmp28 = g;
              let tmp29 = A;
              let tmp30 = num3;
              let tmp31 = num4;
              let tmp32 = num5;
              let tmp33 = num6;
              let tmp34 = num7;
              sum5 = sum2;
              num9 = sum1;
              let tmp35 = tmp6;
              let tmp36 = tmp7;
              let tmp37 = tmp48;
              let tmp38 = tmp49;
              let tmp39 = tmp50;
              let sum4 = tmp11;
              let tmp40 = tmp12;
              _Uint8Array = tmp91;
              if (256 === tmp91) {
                break;
              } else {
                _Uint8Array = sum2 + tmp91 - 254;
                _Uint8Array = sum1;
                if (tmp91 > 264) {
                  _Uint8Array = closure_0;
                  _Uint8Array = closure_0.B[tmp91 - 257];
                  _Uint8Array = closure_4;
                  _Uint8Array = sum2 + (_Uint8Array >>> 3);
                  _Uint8Array = _Uint8Array + closure_4(buffer, sum1, 7 & _Uint8Array);
                  _Uint8Array = sum1 + (7 & _Uint8Array);
                }
                _Uint8Array = closure_6;
                _Uint8Array = A[closure_6(undefined, buffer, _Uint8Array) & num7];
                _Uint8Array = _Uint8Array + (15 & _Uint8Array);
                _Uint8Array = closure_0;
                _Uint8Array = closure_0.h[_Uint8Array >>> 4];
                _Uint8Array = closure_5;
                _Uint8Array = _Uint8Array >>> 4;
                _Uint8Array = _Uint8Array + closure_5(buffer, _Uint8Array, 15 & _Uint8Array);
                _Uint8Array = _Uint8Array + (15 & _Uint8Array);
                _Uint8Array = tmp45;
                if (tmp2) {
                  _Uint8Array = closure_7;
                  _Uint8Array = closure_7(tmp45, sum2 + 131072);
                }
                tmp45 = _Uint8Array;
                sum2 = _Uint8Array;
                tmp47 = _Uint8Array;
                tmp49 = _Uint8Array;
                tmp50 = _Uint8Array;
                if (_Uint8Array >= _Uint8Array) {
                  continue;
                } else {
                  do {
                    _Uint8Array = +_Uint8Array;
                    _Uint8Array = _Uint8Array + 1;
                    _Uint8Array[_Uint8Array] = _Uint8Array[_Uint8Array - _Uint8Array];
                    _Uint8Array = +_Uint8Array;
                    _Uint8Array = _Uint8Array + 1;
                    _Uint8Array[_Uint8Array] = _Uint8Array[_Uint8Array - _Uint8Array];
                    _Uint8Array = +_Uint8Array;
                    _Uint8Array = _Uint8Array + 1;
                    _Uint8Array[_Uint8Array] = _Uint8Array[_Uint8Array - _Uint8Array];
                    _Uint8Array = +_Uint8Array;
                    _Uint8Array = _Uint8Array + 1;
                    _Uint8Array[_Uint8Array] = _Uint8Array[_Uint8Array - _Uint8Array];
                    tmp45 = _Uint8Array;
                    g = tmp93;
                    A = tmp94;
                    num3 = tmp95;
                    num4 = tmp96;
                    num5 = tmp97;
                    num6 = tmp98;
                    num7 = tmp99;
                    sum2 = _Uint8Array;
                    tmp47 = _Uint8Array;
                    tmp6 = _Uint8Array;
                    tmp7 = _Uint8Array;
                    tmp48 = _Uint8Array;
                    tmp50 = _Uint8Array;
                    tmp49 = _Uint8Array;
                  } while (_Uint8Array < _Uint8Array);
                  // continue
                }
                continue;
              }
            }
          }
        } else {
          _Uint8Array = 7 & sum;
          let sum3 = sum;
          if (_Uint8Array) {
            sum3 = sum + (8 - _Uint8Array);
          }
          sum4 = 4 + (sum3 >>> 3);
          let tmp19 = buffer[sum4 - 4] | buffer[sum4 - 3] << 8;
          let obj = _Uint8Array1;
          if (tmp2) {
            let tmp20 = closure_7;
            obj = closure_7(_Uint8Array1, num8 + tmp19);
          }
          let prototype2 = _Uint8Array.prototype;
          let tmp21 = new.target;
          let tmp22 = new.target;
          let tmp23 = tmp19;
          let _Uint8Array2 = new _Uint8Array(buffer.buffer, buffer.byteOffset + sum4, tmp19);
          let tmp25 = _Uint8Array2;
          let result = obj.set(_Uint8Array2, num8);
          num9 = sum4 + tmp19 << 3;
          sum5 = num8 + tmp19;
          arr = obj;
          tmp28 = g;
          tmp29 = A;
          tmp30 = num3;
          tmp31 = num4;
          tmp32 = num5;
          tmp33 = num6;
          tmp34 = num7;
          tmp35 = tmp6;
          tmp36 = tmp7;
          tmp37 = tmp8;
          tmp38 = tmp9;
          tmp39 = tmp10;
          tmp40 = tmp19;
        }
        g = tmp28;
        A = tmp29;
        num3 = tmp30;
        num4 = tmp31;
        num5 = tmp32;
        num6 = tmp33;
        num7 = tmp34;
        tmp6 = tmp35;
        tmp7 = tmp36;
        tmp8 = tmp37;
        let tmp9 = tmp38;
        let tmp10 = tmp39;
        let tmp11 = sum4;
        let tmp12 = tmp40;
        _Uint8Array1 = arr;
        num8 = sum5;
      } while (0 === tmp14);
      _Uint8Array = arr;
      if (arr.length != sum5) {
        _Uint8Array = arr.slice(0, sum5);
      }
      return _Uint8Array;
    };
  }();
  obj = {
    decode(arg0) {
      let obj;
      let readUint;
      let readUshort;
      const uint8Array = new Uint8Array(arg0);
      let sum = uint8Array;
      const arr2 = uint8Array;
      let num = 8;
      ({ readUshort, readUint } = obj);
      const size = { tabs: {}, frames: [] };
      const tmp3 = size;
      const uint8Array1 = new Uint8Array(uint8Array.length);
      let num2 = 0;
      while (arr2[num2] == [null, null, null, null, null, null, null, null][num2]) {
        sum = num2 + 1;
        num2 = sum;
        if (sum < 8) {
          continue;
        } else {
          let tmp6 = num;
          let tmp7 = sum;
          let num3 = 4;
          let num4 = 1;
          let num5 = 2;
          let tmp8 = null;
          let num6 = 1000;
          let num7 = 24;
          let num8 = 25;
          let num9 = 12;
          let num10 = 16;
          let num11 = 22;
          let num12 = 20;
          let num13 = 100;
          let str = "tEXt";
          let num14 = 3;
          let num15 = 100000;
          let num16 = 6;
          let str2 = "IEND";
          let str3 = "bKGD";
          let str4 = "sRGB";
          let str5 = "gAMA";
          let str6 = "tRNS";
          let str7 = "hIST";
          let str8 = "PLTE";
          let str9 = "iTXt";
          let str10 = "zTXt";
          let str11 = "cHRM";
          let str12 = "pHYs";
          let str13 = "fdAT";
          let str14 = "fcTL";
          let str15 = "acTL";
          let str16 = "IDAT";
          let str17 = "CgBI";
          let str18 = "iCCP";
          let str19 = "IHDR";
          let num17 = 0;
          let num18 = 0;
          let num19 = 0;
          if (num < arr2.length) {
            while (true) {
              let tmp15 = tmp2;
              let tmp16 = sum;
              let tmp17 = num;
              let uint = obj.readUint(arr2, num);
              let sum1 = num + 4;
              let tmp20 = sum1;
              let aSCII = obj.readASCII(arr2, sum1, 4);
              let tmp22 = aSCII;
              let sum2 = sum1 + 4;
              if ("IHDR" == aSCII) {
                sum = _IHDR;
                sum = sum2;
                sum = size;
                sum = _IHDR(arr2, sum2, tmp3);
                let uint8Array2 = arr3;
                let sum3 = num17;
                let sum4 = num18;
                let num20 = sum;
                let tmp28 = tmp9;
                let tmp29 = tmp10;
                let tmp30 = tmp11;
                let tmp31 = tmp12;
                let tmp32 = tmp13;
                let tmp33 = tmp14;
              } else {
                sum = aSCII;
                if ("iCCP" == tmp22) {
                  sum = sum2;
                  sum = sum2;
                  if (0 != arr2[sum2]) {
                    do {
                      sum = sum + 1;
                      sum = arr2[sum];
                    } while (0 != sum);
                  }
                  sum = tmp2;
                  sum = sum2;
                  sum = obj.readASCII(arr2, sum2, sum - sum2);
                  sum = arr2[sum + 1];
                  sum = uint;
                  sum = arr2.slice(sum + 2, sum2 + uint);
                  sum = null;
                  sum = _inflate;
                  sum = _inflate(sum);
                  sum = size;
                  sum = aSCII;
                  tmp3.tabs[tmp22] = sum;
                  uint8Array2 = arr3;
                  sum3 = num17;
                  sum4 = num18;
                  num20 = sum;
                  tmp28 = tmp9;
                  tmp29 = tmp10;
                  tmp30 = tmp11;
                  tmp31 = tmp12;
                  tmp32 = tmp13;
                  tmp33 = tmp14;
                } else {
                  sum = aSCII;
                  if ("CgBI" == tmp22) {
                    sum = size;
                    sum = aSCII;
                    sum = sum2;
                    tmp3.tabs[tmp22] = arr2.slice(sum2, sum2 + 4);
                    uint8Array2 = arr3;
                    sum3 = num17;
                    sum4 = num18;
                    num20 = sum;
                    tmp28 = tmp9;
                    tmp29 = tmp10;
                    tmp30 = tmp11;
                    tmp31 = tmp12;
                    tmp32 = tmp13;
                    tmp33 = tmp14;
                  } else {
                    sum = aSCII;
                    if ("IDAT" == tmp22) {
                      sum = uint;
                      let num27 = 0;
                      let num28 = 0;
                      if (0 < uint) {
                        do {
                          sum = sum2;
                          uint8Array1[num17 + num27] = arr2[sum2 + num27];
                          num27 = num27 + 1;
                          sum = uint;
                          num28 = num27;
                        } while (num27 < uint);
                      }
                      sum = uint;
                      sum3 = num17 + uint;
                      num20 = num28;
                      uint8Array2 = arr3;
                      sum4 = num18;
                      tmp28 = tmp9;
                      tmp29 = tmp10;
                      tmp30 = tmp11;
                      tmp31 = tmp12;
                      tmp32 = tmp13;
                      tmp33 = tmp14;
                    } else {
                      sum = aSCII;
                      if ("acTL" == tmp22) {
                        sum = size;
                        sum = aSCII;
                        obj = {};
                        sum = sum2;
                        obj.num_frames = readUint(arr2, sum2);
                        obj.num_plays = readUint(arr2, sum2 + 4);
                        tmp3.tabs[tmp22] = obj;
                        let _Uint8Array = Uint8Array;
                        sum = new.target;
                        sum = new.target;
                        uint8Array2 = new Uint8Array(arr2.length);
                        sum3 = num17;
                        sum4 = num18;
                        num20 = sum;
                        tmp28 = tmp9;
                        tmp29 = tmp10;
                        tmp30 = tmp11;
                        tmp31 = tmp12;
                        tmp32 = tmp13;
                        tmp33 = tmp14;
                      } else {
                        sum = aSCII;
                        if ("fcTL" == tmp22) {
                          let num25 = num18;
                          if (0 != num18) {
                            sum = size;
                            sum = tmp3.frames[tmp3.frames.length - 1];
                            sum = _decompress;
                            sum = tmp3;
                            sum.data = _decompress(size, arr3.slice(0, num18), sum.rect.width, sum.rect.height);
                            num25 = 0;
                          }
                          obj = {};
                          sum = sum2;
                          obj.x = readUint(arr2, sum2 + 12);
                          obj.y = readUint(arr2, sum2 + 16);
                          obj.width = readUint(arr2, sum2 + 4);
                          obj.height = readUint(arr2, sum2 + 8);
                          sum = readUshort(arr2, sum2 + 22);
                          let obj1 = { rect: obj };
                          let num26 = 100;
                          sum = readUshort(arr2, sum2 + 20);
                          if (0 != sum) {
                            num26 = sum;
                          }
                          sum = sum / num26;
                          obj1.delay = 1000 * sum;
                          sum = sum2;
                          obj1.dispose = arr2[sum2 + 24];
                          obj1.blend = arr2[sum2 + 25];
                          sum = size;
                          let frames = tmp3.frames;
                          sum = frames.push(obj1);
                          uint8Array2 = arr3;
                          sum3 = num17;
                          sum4 = num25;
                          num20 = sum;
                          tmp28 = sum;
                          tmp29 = tmp10;
                          tmp30 = tmp11;
                          tmp31 = tmp12;
                          tmp32 = tmp13;
                          tmp33 = tmp14;
                        } else {
                          sum = aSCII;
                          if ("fdAT" == tmp22) {
                            sum = uint;
                            let num23 = 0;
                            let num24 = 0;
                            if (0 < uint - 4) {
                              do {
                                sum = sum2;
                                arr3[num18 + num23] = arr2[sum2 + num23 + 4];
                                num23 = num23 + 1;
                                sum = uint;
                                num24 = num23;
                                sum = uint - 4;
                              } while (num23 < sum);
                            }
                            sum = uint;
                            sum4 = num18 + (uint - 4);
                            num20 = num24;
                            uint8Array2 = arr3;
                            sum3 = num17;
                            tmp28 = tmp9;
                            tmp29 = tmp10;
                            tmp30 = tmp11;
                            tmp31 = tmp12;
                            tmp32 = tmp13;
                            tmp33 = tmp14;
                          } else {
                            sum = aSCII;
                            if ("pHYs" == tmp22) {
                              sum = size;
                              sum = aSCII;
                              sum = tmp2;
                              sum = sum2;
                              let items = [obj.readUint(arr2, sum2), obj.readUint(arr2, sum2 + 4), arr2[sum2 + 8]];
                              tmp3.tabs[tmp22] = items;
                              uint8Array2 = arr3;
                              sum3 = num17;
                              sum4 = num18;
                              num20 = sum;
                              tmp28 = tmp9;
                              tmp29 = tmp10;
                              tmp30 = tmp11;
                              tmp31 = tmp12;
                              tmp32 = tmp13;
                              tmp33 = tmp14;
                            } else {
                              sum = aSCII;
                              if ("cHRM" == tmp22) {
                                sum = size;
                                sum = aSCII;
                                tmp3.tabs[tmp22] = [];
                                let num22 = 0;
                                do {
                                  sum = size;
                                  sum = aSCII;
                                  let arr10 = tmp3.tabs[tmp22];
                                  sum = tmp2;
                                  sum = sum2;
                                  sum = arr10.push(obj.readUint(arr2, sum2 + 4 * num22));
                                  num22 = num22 + 1;
                                  uint8Array2 = arr3;
                                  sum3 = num17;
                                  sum4 = num18;
                                  tmp28 = tmp9;
                                  tmp29 = tmp10;
                                  tmp30 = tmp11;
                                  tmp31 = tmp12;
                                  tmp32 = tmp13;
                                  tmp33 = tmp14;
                                  num20 = num22;
                                } while (num22 < 8);
                              } else {
                                sum = aSCII;
                                if ("tEXt" != tmp22) {
                                  sum = aSCII;
                                  if ("zTXt" != tmp22) {
                                    sum = aSCII;
                                    if ("iTXt" == tmp22) {
                                      let tmp79 = size;
                                      let tmp80 = aSCII;
                                      if (null == tmp3.tabs[tmp22]) {
                                        let tmp81 = size;
                                        let tmp82 = aSCII;
                                        tmp3.tabs[tmp22] = {};
                                      }
                                      let tmp83 = sum2;
                                      let tmp84 = sum2;
                                      let tmp85 = tmp2;
                                      let tmp86 = sum;
                                      let nextZeroResult = obj.nextZero(arr2, sum2);
                                      let aSCII1 = obj.readASCII(arr2, sum2, nextZeroResult - sum2);
                                      let sum5 = nextZeroResult + 1;
                                      let tmp90 = sum5;
                                      let tmp91 = arr2[sum5 + 1];
                                      let sum6 = sum5 + 2;
                                      let tmp93 = sum6;
                                      let nextZeroResult1 = obj.nextZero(arr2, sum6);
                                      let aSCII2 = obj.readASCII(arr2, sum6, nextZeroResult1 - sum6);
                                      let sum7 = nextZeroResult1 + 1;
                                      let tmp97 = sum7;
                                      let nextZeroResult2 = obj.nextZero(arr2, sum7);
                                      let uTF8 = obj.readUTF8(arr2, sum7, nextZeroResult2 - sum7);
                                      sum = uint;
                                      sum = nextZeroResult2 + 1;
                                      sum = uint - (sum - sum2);
                                      if (0 == arr2[sum5]) {
                                        sum = tmp2;
                                        sum = obj.readUTF8(arr2, sum, sum);
                                      } else {
                                        sum = _inflate;
                                        let arr8 = _inflate(arr2.slice(sum, sum + sum));
                                        sum = tmp2;
                                        sum = obj.readUTF8(arr8, 0, arr8.length);
                                      }
                                      sum = size;
                                      sum = aSCII;
                                      tmp3.tabs[tmp22][aSCII1] = sum;
                                      tmp32 = sum;
                                      uint8Array2 = arr3;
                                      sum3 = num17;
                                      sum4 = num18;
                                      num20 = sum;
                                      tmp28 = tmp9;
                                      tmp29 = nextZeroResult2;
                                      tmp30 = aSCII1;
                                      tmp31 = sum;
                                      tmp33 = tmp14;
                                    } else {
                                      sum = aSCII;
                                      if ("PLTE" == tmp22) {
                                        let tmp73 = size;
                                        let tmp74 = aSCII;
                                        let tmp75 = tmp2;
                                        let tmp76 = sum;
                                        let tmp77 = sum2;
                                        let tmp78 = uint;
                                        tmp3.tabs[tmp22] = obj.readBytes(arr2, sum2, uint);
                                        uint8Array2 = arr3;
                                        sum3 = num17;
                                        sum4 = num18;
                                        num20 = sum;
                                        tmp28 = tmp9;
                                        tmp29 = tmp10;
                                        tmp30 = tmp11;
                                        tmp31 = tmp12;
                                        tmp32 = tmp13;
                                        tmp33 = tmp14;
                                      } else {
                                        sum = aSCII;
                                        if ("hIST" == tmp22) {
                                          let tmp65 = size;
                                          let result = tmp3.tabs.PLTE.length / 3;
                                          let tmp67 = aSCII;
                                          tmp3.tabs[tmp22] = [];
                                          let num21 = 0;
                                          uint8Array2 = arr3;
                                          sum3 = num17;
                                          sum4 = num18;
                                          num20 = 0;
                                          tmp28 = tmp9;
                                          tmp29 = tmp10;
                                          tmp30 = tmp11;
                                          tmp31 = tmp12;
                                          tmp32 = tmp13;
                                          tmp33 = result;
                                          if (0 < result) {
                                            do {
                                              let tmp68 = size;
                                              let tmp69 = aSCII;
                                              let arr7 = tmp3.tabs[tmp22];
                                              let tmp70 = sum;
                                              let tmp71 = sum2;
                                              let arr = arr7.push(readUshort(arr2, sum2 + 2 * num21));
                                              num21 = num21 + 1;
                                              uint8Array2 = arr3;
                                              sum3 = num17;
                                              sum4 = num18;
                                              tmp28 = tmp9;
                                              tmp29 = tmp10;
                                              tmp30 = tmp11;
                                              tmp31 = tmp12;
                                              tmp32 = tmp13;
                                              tmp33 = result;
                                              num20 = num21;
                                            } while (num21 < result);
                                          }
                                        } else {
                                          sum = aSCII;
                                          if ("tRNS" == tmp22) {
                                            let tmp54 = size;
                                            if (3 == tmp3.ctype) {
                                              let tmp59 = size;
                                              let tmp60 = aSCII;
                                              let tmp61 = tmp2;
                                              let tmp62 = sum;
                                              let tmp63 = sum2;
                                              let tmp64 = uint;
                                              tmp3.tabs[tmp22] = obj.readBytes(arr2, sum2, uint);
                                              uint8Array2 = arr3;
                                              sum3 = num17;
                                              sum4 = num18;
                                              num20 = sum;
                                              tmp28 = tmp9;
                                              tmp29 = tmp10;
                                              tmp30 = tmp11;
                                              tmp31 = tmp12;
                                              tmp32 = tmp13;
                                              tmp33 = tmp14;
                                            } else {
                                              sum = size;
                                              if (0 == tmp3.ctype) {
                                                let tmp55 = size;
                                                let tmp56 = aSCII;
                                                let tmp57 = sum;
                                                let tmp58 = sum2;
                                                tmp3.tabs[tmp22] = readUshort(arr2, sum2);
                                                uint8Array2 = arr3;
                                                sum3 = num17;
                                                sum4 = num18;
                                                num20 = sum;
                                                tmp28 = tmp9;
                                                tmp29 = tmp10;
                                                tmp30 = tmp11;
                                                tmp31 = tmp12;
                                                tmp32 = tmp13;
                                                tmp33 = tmp14;
                                              } else {
                                                sum = size;
                                                uint8Array2 = arr3;
                                                sum3 = num17;
                                                sum4 = num18;
                                                num20 = sum;
                                                tmp28 = tmp9;
                                                tmp29 = tmp10;
                                                tmp30 = tmp11;
                                                tmp31 = tmp12;
                                                tmp32 = tmp13;
                                                tmp33 = tmp14;
                                                if (2 == tmp3.ctype) {
                                                  sum = size;
                                                  sum = aSCII;
                                                  sum = sum2;
                                                  let items1 = [readUshort(arr2, sum2), readUshort(arr2, sum2 + 2), readUshort(arr2, sum2 + 4)];
                                                  tmp3.tabs[tmp22] = items1;
                                                  uint8Array2 = arr3;
                                                  sum3 = num17;
                                                  sum4 = num18;
                                                  num20 = sum;
                                                  tmp28 = tmp9;
                                                  tmp29 = tmp10;
                                                  tmp30 = tmp11;
                                                  tmp31 = tmp12;
                                                  tmp32 = tmp13;
                                                  tmp33 = tmp14;
                                                }
                                              }
                                            }
                                          } else {
                                            sum = aSCII;
                                            if ("gAMA" == tmp22) {
                                              let tmp49 = size;
                                              let tmp50 = aSCII;
                                              let tmp51 = tmp2;
                                              let tmp52 = sum;
                                              let tmp53 = sum2;
                                              tmp3.tabs[tmp22] = obj.readUint(arr2, sum2) / 100000;
                                              uint8Array2 = arr3;
                                              sum3 = num17;
                                              sum4 = num18;
                                              num20 = sum;
                                              tmp28 = tmp9;
                                              tmp29 = tmp10;
                                              tmp30 = tmp11;
                                              tmp31 = tmp12;
                                              tmp32 = tmp13;
                                              tmp33 = tmp14;
                                            } else {
                                              sum = aSCII;
                                              if ("sRGB" == tmp22) {
                                                let tmp45 = size;
                                                let tmp46 = aSCII;
                                                let tmp47 = sum;
                                                let tmp48 = sum2;
                                                tmp3.tabs[tmp22] = arr2[sum2];
                                                uint8Array2 = arr3;
                                                sum3 = num17;
                                                sum4 = num18;
                                                num20 = sum;
                                                tmp28 = tmp9;
                                                tmp29 = tmp10;
                                                tmp30 = tmp11;
                                                tmp31 = tmp12;
                                                tmp32 = tmp13;
                                                tmp33 = tmp14;
                                              } else {
                                                sum = aSCII;
                                                if ("bKGD" == tmp22) {
                                                  let tmp34 = size;
                                                  if (0 != tmp3.ctype) {
                                                    sum = size;
                                                    if (4 != tmp3.ctype) {
                                                      sum = size;
                                                      if (2 != tmp3.ctype) {
                                                        let tmp35 = size;
                                                        if (6 != tmp3.ctype) {
                                                          let tmp36 = size;
                                                          uint8Array2 = arr3;
                                                          sum3 = num17;
                                                          sum4 = num18;
                                                          num20 = sum;
                                                          tmp28 = tmp9;
                                                          tmp29 = tmp10;
                                                          tmp30 = tmp11;
                                                          tmp31 = tmp12;
                                                          tmp32 = tmp13;
                                                          tmp33 = tmp14;
                                                          if (3 == tmp3.ctype) {
                                                            sum = size;
                                                            sum = aSCII;
                                                            sum = sum2;
                                                            tmp3.tabs[tmp22] = arr2[sum2];
                                                            uint8Array2 = arr3;
                                                            sum3 = num17;
                                                            sum4 = num18;
                                                            num20 = sum;
                                                            tmp28 = tmp9;
                                                            tmp29 = tmp10;
                                                            tmp30 = tmp11;
                                                            tmp31 = tmp12;
                                                            tmp32 = tmp13;
                                                            tmp33 = tmp14;
                                                          }
                                                        }
                                                      }
                                                      let tmp37 = size;
                                                      let tmp38 = aSCII;
                                                      let tmp39 = sum;
                                                      let tmp40 = sum2;
                                                      let items2 = [readUshort(arr2, sum2), readUshort(arr2, sum2 + 2), readUshort(arr2, sum2 + 4)];
                                                      tmp3.tabs[tmp22] = items2;
                                                      uint8Array2 = arr3;
                                                      sum3 = num17;
                                                      sum4 = num18;
                                                      num20 = sum;
                                                      tmp28 = tmp9;
                                                      tmp29 = tmp10;
                                                      tmp30 = tmp11;
                                                      tmp31 = tmp12;
                                                      tmp32 = tmp13;
                                                      tmp33 = tmp14;
                                                    }
                                                  }
                                                  let tmp41 = size;
                                                  let tmp42 = aSCII;
                                                  let tmp43 = sum;
                                                  let tmp44 = sum2;
                                                  let items3 = [readUshort(arr2, sum2)];
                                                  tmp3.tabs[tmp22] = items3;
                                                  uint8Array2 = arr3;
                                                  sum3 = num17;
                                                  sum4 = num18;
                                                  num20 = sum;
                                                  tmp28 = tmp9;
                                                  tmp29 = tmp10;
                                                  tmp30 = tmp11;
                                                  tmp31 = tmp12;
                                                  tmp32 = tmp13;
                                                  tmp33 = tmp14;
                                                } else {
                                                  let tmp24 = aSCII;
                                                  uint8Array2 = arr3;
                                                  sum3 = num17;
                                                  sum4 = num18;
                                                  num20 = sum;
                                                  tmp28 = tmp9;
                                                  tmp29 = tmp10;
                                                  tmp30 = tmp11;
                                                  tmp31 = tmp12;
                                                  tmp32 = tmp13;
                                                  tmp33 = tmp14;
                                                  let arr4 = arr3;
                                                  num19 = num18;
                                                  if ("IEND" == tmp22) {
                                                    break;
                                                  }
                                                }
                                                break;
                                              }
                                              break;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                sum = size;
                                sum = aSCII;
                                if (null == tmp3.tabs[tmp22]) {
                                  sum = size;
                                  sum = aSCII;
                                  tmp3.tabs[tmp22] = {};
                                }
                                sum = tmp2;
                                sum = sum2;
                                sum = obj.nextZero(arr2, sum2);
                                sum = obj.readASCII(arr2, sum2, sum - sum2);
                                sum = uint;
                                sum = sum2 + uint - sum - 1;
                                sum = aSCII;
                                if ("tEXt" == tmp22) {
                                  sum = tmp2;
                                  sum = obj.readASCII(arr2, sum + 1, sum);
                                } else {
                                  sum = _inflate;
                                  let arr9 = _inflate(arr2.slice(sum + 2, sum + 2 + sum));
                                  sum = tmp2;
                                  sum = obj.readUTF8(arr9, 0, arr9.length);
                                }
                                sum = size;
                                sum = aSCII;
                                tmp3.tabs[tmp22][sum] = sum;
                                tmp32 = sum;
                                uint8Array2 = arr3;
                                sum3 = num17;
                                sum4 = num18;
                                num20 = sum;
                                tmp28 = tmp9;
                                tmp29 = sum;
                                tmp30 = sum;
                                tmp31 = sum;
                                tmp33 = tmp14;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              sum = sum2;
              sum = uint;
              sum = sum2 + uint;
              sum = tmp2;
              sum = obj.readUint(arr2, sum);
              sum = sum + 4;
              num = sum;
              let arr3 = uint8Array2;
              num17 = sum3;
              num18 = sum4;
              sum = num20;
              let tmp9 = tmp28;
              let tmp10 = tmp29;
              let tmp11 = tmp30;
              let tmp12 = tmp31;
              let tmp13 = tmp32;
              let tmp14 = tmp33;
              arr4 = uint8Array2;
              num19 = sum4;
              if (sum >= arr2.length) {
                break;
              }
            }
          }
          if (0 != num19) {
            sum = size;
            sum = tmp3.frames[tmp3.frames.length - 1];
            sum = _decompress;
            sum = tmp3;
            sum.data = _decompress(size, arr4.slice(0, num19), sum.rect.width, sum.rect.height);
          }
          sum = _decompress;
          sum = size;
          sum = uint8Array1;
          size.data = _decompress(tmp3, tmp5, size.width, size.height);
          delete r0.compress;
          delete r0.interlace;
          delete r0.filter;
          return size;
        }
      }
      throw "The input is not a PNG file!";
    },
    toRGBA8(img) {
      let height;
      let width;
      ({ width, height } = img);
      if (null == img.tabs.acTL) {
        const items = [decodeImage(img.data, width, height, img).buffer];
        return items;
      } else {
        const items1 = [];
        if (null == img.frames[0].data) {
          img.frames[0].data = img.data;
        }
        const result = width * height * 4;
        const _Uint8Array = Uint8Array;
        const uint8Array = new Uint8Array(result);
        const _Uint8Array2 = Uint8Array;
        const uint8Array1 = new Uint8Array(result);
        const _Uint8Array3 = Uint8Array;
        const uint8Array2 = new Uint8Array(result);
        let num4 = 0;
        if (0 < img.frames.length) {
          do {
            let tmp18 = img.frames[num4];
            let x = tmp18.rect.x;
            let y = tmp18.rect.y;
            let width2 = tmp18.rect.width;
            let height2 = tmp18.rect.height;
            let tmp19 = closure_2;
            let tmp20 = width2;
            let tmp21 = height2;
            let tmp22 = img;
            let tmp23 = closure_2(tmp18.data, width2, height2, img);
            if (0 != num4) {
              let num6 = 0;
              let num5 = 0;
              if (0 < result) {
                do {
                  uint8Array2[num6] = uint8Array[num6];
                  num6 = num6 + 1;
                  num5 = num6;
                } while (num6 < result);
              }
            }
            if (0 == tmp18.blend) {
              let tmp34 = closure_9;
              let tmp35 = tmp23;
              let tmp36 = width2;
              let tmp37 = height2;
              let tmp38 = uint8Array;
              let tmp39 = width;
              let tmp40 = height;
              let tmp41 = x;
              let tmp42 = y;
              let num8 = 0;
              let tmp43 = closure_9(tmp23, width2, height2, tmp7, width, height, x, y, 0);
            } else if (1 == tmp18.blend) {
              let tmp24 = closure_9;
              let tmp25 = tmp23;
              let tmp26 = width2;
              let tmp27 = height2;
              let tmp28 = uint8Array;
              let tmp29 = width;
              let tmp30 = height;
              let tmp31 = x;
              let tmp32 = y;
              let num7 = 1;
              let tmp33 = closure_9(tmp23, width2, height2, tmp7, width, height, x, y, 1);
            }
            let buffer = uint8Array.buffer;
            let arr = items1.push(buffer.slice(0));
            let num9 = num5;
            if (0 != tmp18.dispose) {
              if (1 == tmp18.dispose) {
                let tmp45 = closure_9;
                let tmp46 = uint8Array1;
                let tmp47 = width2;
                let tmp48 = height2;
                let tmp49 = uint8Array;
                let tmp50 = width;
                let tmp51 = height;
                let tmp52 = x;
                let tmp53 = y;
                let num11 = 0;
                let tmp54 = closure_9(tmp12, width2, height2, tmp7, width, height, x, y, 0);
                num9 = num5;
              } else {
                num9 = num5;
                if (2 == tmp18.dispose) {
                  let num10 = 0;
                  num9 = 0;
                  if (0 < result) {
                    do {
                      uint8Array[num10] = uint8Array2[num10];
                      num10 = num10 + 1;
                      num9 = num10;
                    } while (num10 < result);
                  }
                }
              }
            }
            num4 = num4 + 1;
            num5 = num9;
          } while (num4 < img.frames.length);
        }
        return items1;
      }
    },
    _paeth,
    _copyTile,
    _bin: obj
  };
  return obj;
}();
() => {
  function addErr(arg0, arg1, arg2, arg3) {
    arg1[arg2] = arg1[arg2] + (arg0[0] * arg3 >> 4);
    const sum = arg2 + 1;
    arg1[sum] = arg1[sum] + (arg0[1] * arg3 >> 4);
    const sum1 = arg2 + 2;
    arg1[sum1] = arg1[sum1] + (arg0[2] * arg3 >> 4);
    const sum2 = arg2 + 3;
    arg1[sum2] = arg1[sum2] + (arg0[3] * arg3 >> 4);
  }
  function N(arg0) {
    return Math.max(0, Math.min(255, arg0));
  }
  function D(arg0, arg1) {
    const diff = arg0[0] - arg1[0];
    const diff1 = arg0[1] - arg1[1];
    const diff2 = arg0[2] - arg1[2];
    const diff3 = arg0[3] - arg1[3];
    return diff * diff + diff1 * diff1 + diff2 * diff2 + diff3 * diff3;
  }
  function dither(arg0, arg1, arg2, arg3, buffer) {
    let length2;
    let num = arg6;
    if (null == arg6) {
      num = 1;
    }
    const items = [];
    for (let num2 = 0; num2 < length; num2 = num2 + 1) {
      let tmp = arg3[num2];
      let items1 = [tmp >>> 0 & 255, tmp >>> 8 & 255, tmp >>> 16 & 255, tmp >>> 24 & 255];
      let arr = items.push(items1);
    }
    let num3 = 0;
    if (0 < arg3.length) {
      do {
        let num4 = 4294967295;
        let num5 = 0;
        let num6 = 0;
        let num7 = 4294967295;
        let num8 = 0;
        let num9 = 0;
        if (0 < length) {
          do {
            let tmp5 = closure_7;
            let tmp6 = closure_7(items[num3], items[num6]);
            let tmp7 = num6 != num3 && tmp6 < num4;
            if (tmp7) {
              num4 = tmp6;
              num5 = num6;
            }
            num6 = num6 + 1;
            num7 = num4;
            num8 = num5;
            let tmp3 = tmp6;
            num9 = num6;
          } while (num6 < length);
        }
        let _Math = Math;
        let result = Math.sqrt(num7) / 2;
        [][num3] = ~~result * result;
        num3 = num3 + 1;
        let tmp9 = num8;
        let tmp10 = num9;
        let tmp4 = tmp3;
      } while (num3 < length);
    }
    const uint32Array = new Uint32Array(buffer.buffer);
    const int16Array = new Int16Array(arg1 * arg2 * 4);
    const items2 = ["isArray", "paddingHorizontal", "no", "op", "__initData", "style", "filter", "style", "Array", "height", "Text", "View", "i", "Array", "isArray", "accessibilityRole"];
    let num10 = 0;
    if (0 < items2.length) {
      do {
        items2[num10] = 255 * ((items2[num10] + 0.5) / 16 - 0.5);
        num10 = num10 + 1;
        let tmp14 = num10;
        length2 = items2.length;
      } while (num10 < length2);
    }
    for (let num11 = 0; num11 < arg2; num11 = num11 + 1) {
      let tmp16 = tmp4;
      let tmp17 = tmp15;
      let num12 = 0;
      if (0 < arg1) {
        do {
          let result1 = 4 * (num11 * arg1 + num12);
          if (2 != num) {
            let tmp21 = closure_6;
            let items3 = [closure_6(arg0[result1] + int16Array[result1]), , , ];
            let sum = result1 + 1;
            items3[1] = closure_6(arg0[sum] + int16Array[sum]);
            let sum1 = result1 + 2;
            items3[2] = closure_6(arg0[sum1] + int16Array[sum1]);
            let sum2 = result1 + 3;
            items3[3] = closure_6(arg0[sum2] + int16Array[sum2]);
            let tmp19 = tmp16;
            let items4 = items3;
          } else {
            tmp19 = items2[4 * (3 & num11) + (3 & num12)];
            let tmp20 = closure_6;
            items4 = [closure_6(arg0[result1] + tmp19), closure_6(arg0[result1 + 1] + tmp19), closure_6(arg0[result1 + 2] + tmp19), closure_6(arg0[result1 + 3] + tmp19)];
          }
          let num13 = 0;
          let num14 = 0;
          let num15 = 16777215;
          let num16 = 0;
          let num17 = 0;
          let num18 = 16777215;
          if (0 < length) {
            do {
              let tmp25 = closure_7;
              let tmp26 = closure_7(items4, items[num14]);
              if (tmp26 < num15) {
                num13 = num14;
                num15 = tmp26;
              }
              num14 = num14 + 1;
              num16 = num13;
              num18 = num15;
              tmp17 = tmp26;
              num17 = num14;
            } while (num14 < length);
          }
          let tmp27 = items[num16];
          let items5 = [items4[0] - tmp27[0], items4[1] - tmp27[1], items4[2] - tmp27[2], items4[3] - tmp27[3]];
          let tmp28 = tmp17;
          if (1 == num) {
            if (num12 != arg1 - 1) {
              let tmp29 = closure_5;
              let tmp30 = items5;
              let tmp31 = int16Array;
              let num19 = 7;
              let tmp32 = closure_5(items5, tmp13, result1 + 4, 7);
            }
            if (num11 != arg2 - 1) {
              if (0 != num12) {
                let tmp33 = closure_5;
                let tmp34 = items5;
                let tmp35 = int16Array;
                let num20 = 3;
                let tmp36 = closure_5(items5, tmp13, result1 + 4 * arg1 - 4, 3);
              }
              let tmp37 = closure_5;
              let tmp38 = items5;
              let tmp39 = int16Array;
              let num21 = 5;
              let tmp40 = closure_5(items5, tmp13, result1 + 4 * arg1, 5);
              if (num12 != arg1 - 1) {
                let tmp41 = closure_5;
                let tmp42 = items5;
                let tmp43 = int16Array;
                let num22 = 1;
                let tmp44 = closure_5(items5, tmp13, result1 + 4 * arg1 + 4, 1);
              }
            }
          }
          let tmp45 = result1 >> 2;
          arg5[tmp45] = num16;
          uint32Array[tmp45] = arg3[num16];
          num12 = num12 + 1;
          tmp16 = tmp19;
          let tmp46 = result1;
          let tmp47 = num16;
          let tmp48 = num17;
          tmp4 = tmp19;
          let tmp49 = items4;
          let tmp50 = num18;
          let tmp15 = tmp17;
          let tmp51 = items5;
        } while (num12 < arg1);
      }
    }
  }
  function _main(frames, height, height) {
    let obj = arg4;
    if (null == arg4) {
      obj = {};
    }
    const crc = crc.crc;
    const writeUint = closure_1.writeUint;
    const writeUshort = closure_1.writeUshort;
    const writeASCII = closure_1.writeASCII;
    let writeUintResult16 = frames.frames.length > 1;
    let num = 0;
    if (writeUintResult16) {
      num = 20;
    }
    const sum = 33 + num;
    let sum1 = sum;
    if (null != obj.sRGB) {
      sum1 = sum + 13;
    }
    let sum2 = sum1;
    if (null != obj.pHYs) {
      sum2 = sum1 + 21;
    }
    let sum3 = sum2;
    if (null != obj.iCCP) {
      const deflateResult = globalThis.pako.deflate(obj.iCCP);
      sum3 = sum2 + (21 + deflateResult.length + 4);
    }
    let flag = false;
    let sum4 = sum3;
    if (3 == frames.ctype) {
      let flag2 = false;
      let num8 = 0;
      let flag3 = false;
      if (0 < frames.plte.length) {
        do {
          if (frames.plte[num8] >>> 24 !== 255) {
            flag2 = true;
          }
          num8 = num8 + 1;
          flag3 = flag2;
        } while (num8 < length);
      }
      let num9 = 0;
      const result = 3 * length;
      if (flag3) {
        num9 = 8 + length + 4;
      }
      sum4 = sum3 + (8 + result + 4 + num9);
      flag = flag3;
    }
    let tmp9 = sum4;
    let num14 = 0;
    let tmp10 = sum4;
    if (0 < frames.frames.length) {
      do {
        let sum5 = tmp9;
        if (writeUintResult16) {
          sum5 = tmp9 + 38;
        }
        let sum6 = sum5 + (frames.frames[num14].cimg.length + 12);
        let sum7 = sum6;
        if (0 != num14) {
          sum7 = sum6 + 4;
        }
        num14 = num14 + 1;
        tmp9 = sum7;
        tmp10 = sum7;
      } while (num14 < frames.frames.length);
    }
    const uint8Array = new Uint8Array(tmp10 + 12);
    let num15 = 0;
    do {
      uint8Array[num15] = [null, null, null, null, null, null, null, null][num15];
      num15 = num15 + 1;
    } while (num15 < 8);
    writeUint(uint8Array, 8, 13);
    writeASCII(uint8Array, 12, "IHDR");
    writeUint(uint8Array, 16, height);
    writeUint(uint8Array, 20, height);
    uint8Array[24] = frames.depth;
    uint8Array[25] = frames.ctype;
    uint8Array[26] = 0;
    uint8Array[27] = 0;
    uint8Array[28] = 0;
    writeUint(uint8Array, 29, crc(uint8Array, 12, 17));
    let num16 = 33;
    if (null != obj.sRGB) {
      writeUint(uint8Array, 33, 1);
      writeASCII(uint8Array, 37, "sRGB");
      uint8Array[41] = obj.sRGB;
      writeUint(uint8Array, 42, crc(uint8Array, 37, 5));
      num16 = 46;
    }
    let sum14 = num16;
    if (null != obj.iCCP) {
      const sum8 = 13 + arr.length;
      writeUint(uint8Array, num16, sum8);
      const sum9 = num16 + 4;
      writeASCII(uint8Array, sum9, "iCCP");
      const sum10 = sum9 + 4;
      writeASCII(uint8Array, sum10, "ICC profile");
      const sum11 = sum10 + 11 + 2;
      const result1 = uint8Array.set(arr, sum11);
      const sum12 = sum11 + arr.length;
      const sum13 = sum8 + 4;
      writeUint(uint8Array, sum12, crc(uint8Array, sum12 - sum13, sum13));
      sum14 = sum12 + 4;
    }
    let sum20 = sum14;
    if (null != obj.pHYs) {
      writeUint(uint8Array, sum14, 9);
      const sum15 = sum14 + 4;
      writeASCII(uint8Array, sum15, "pHYs");
      const sum16 = sum15 + 4;
      writeUint(uint8Array, sum16, obj.pHYs[0]);
      const sum17 = sum16 + 4;
      writeUint(uint8Array, sum17, obj.pHYs[1]);
      const sum18 = sum17 + 4;
      uint8Array[sum18] = obj.pHYs[2];
      const sum19 = sum18 + 1;
      writeUint(uint8Array, sum19, crc(uint8Array, sum19 - 13, 13));
      sum20 = sum19 + 4;
    }
    let sum25 = sum20;
    if (writeUintResult16) {
      writeUint(uint8Array, sum20, 8);
      const sum21 = sum20 + 4;
      writeASCII(uint8Array, sum21, "acTL");
      const sum22 = sum21 + 4;
      writeUint(uint8Array, sum22, frames.frames.length);
      const sum23 = sum22 + 4;
      let num25 = 0;
      if (null != obj.loop) {
        num25 = obj.loop;
      }
      writeUint(uint8Array, sum23, num25);
      const sum24 = sum23 + 4;
      writeUint(uint8Array, sum24, crc(uint8Array, sum24 - 12, 12));
      sum25 = sum24 + 4;
    }
    let sum32 = sum25;
    if (3 == frames.ctype) {
      writeUintResult16 = writeUint(uint8Array, sum25, 3 * length3);
      writeUintResult16 = sum25 + 4;
      writeUintResult16 = writeASCII(uint8Array, writeUintResult16, "PLTE");
      writeUintResult16 = writeUintResult16 + 4;
      for (let num26 = 0; num26 < length3; num26 = num26 + 1) {
        let tmp56 = frames.plte[num26];
        let sum26 = writeUintResult16 + 3 * num26;
        uint8Array[sum26] = 255 & tmp56;
        uint8Array[sum26 + 1] = tmp56 >>> 8 & 255;
        uint8Array[sum26 + 2] = tmp56 >>> 16 & 255;
      }
      const sum27 = writeUintResult16 + 3 * length3;
      writeUint(uint8Array, sum27, crc(uint8Array, sum27 - 3 * frames.plte.length - 4, 3 * frames.plte.length + 4));
      const sum28 = sum27 + 4;
      sum32 = sum28;
      if (flag) {
        writeUint(uint8Array, sum28, length3);
        const sum29 = sum28 + 4;
        writeASCII(uint8Array, sum29, "tRNS");
        const sum30 = sum29 + 4;
        for (let num27 = 0; num27 < length3; num27 = num27 + 1) {
          uint8Array[sum30 + num27] = frames.plte[num27] >>> 24 & 255;
        }
        const sum31 = sum30 + length3;
        writeUint(uint8Array, sum31, crc(uint8Array, sum31 - length3 - 4, length3 + 4));
        sum32 = sum31 + 4;
      }
    }
    let sum49 = sum32;
    let num28 = 0;
    let num29 = 0;
    let tmp68 = sum32;
    if (0 < frames.frames.length) {
      do {
        let tmp69 = frames.frames[num28];
        let sum45 = sum49;
        let sum35 = num29;
        if (writeUintResult16) {
          let writeUintResult20 = writeUint(uint8Array, sum49, 26);
          let sum33 = sum49 + 4;
          let writeASCIIResult7 = writeASCII(uint8Array, sum33, "fcTL");
          let sum34 = sum33 + 4;
          let tmp76 = +num29;
          sum35 = tmp76 + 1;
          let writeUintResult21 = writeUint(uint8Array, sum34, tmp76);
          let sum36 = sum34 + 4;
          let writeUintResult22 = writeUint(uint8Array, sum36, tmp69.rect.width);
          let sum37 = sum36 + 4;
          let writeUintResult23 = writeUint(uint8Array, sum37, tmp69.rect.height);
          let sum38 = sum37 + 4;
          let writeUintResult24 = writeUint(uint8Array, sum38, tmp69.rect.x);
          let sum39 = sum38 + 4;
          let writeUintResult25 = writeUint(uint8Array, sum39, tmp69.rect.y);
          let sum40 = sum39 + 4;
          let writeUshortResult = writeUshort(uint8Array, sum40, arg3[num28]);
          let sum41 = sum40 + 2;
          let writeUshortResult1 = writeUshort(uint8Array, sum41, 1000);
          let sum42 = sum41 + 2;
          uint8Array[sum42] = tmp69.dispose;
          let sum43 = sum42 + 1;
          uint8Array[sum43] = tmp69.blend;
          let sum44 = sum43 + 1;
          let writeUintResult26 = writeUint(uint8Array, sum44, crc(uint8Array, sum44 - 30, 30));
          sum45 = sum44 + 4;
        }
        let cimg = tmp69.cimg;
        let length2 = cimg.length;
        let tmp94 = 0 == num28;
        let num30 = 4;
        if (tmp94) {
          num30 = 0;
        }
        let writeUintResult27 = writeUint(uint8Array, sum45, length2 + num30);
        let sum46 = sum45 + 4;
        let str7 = "fdAT";
        if (tmp94) {
          str7 = "IDAT";
        }
        let writeASCIIResult8 = writeASCII(uint8Array, sum46, str7);
        let sum47 = sum46 + 4;
        let sum48 = sum47;
        num29 = sum35;
        if (0 != num28) {
          writeUintResult16 = +sum35;
          num29 = writeUintResult16 + 1;
          writeUintResult16 = writeUint(uint8Array, sum47, writeUintResult16);
          sum48 = sum47 + 4;
        }
        writeUintResult16 = uint8Array.set(cimg, sum48);
        writeUintResult16 = sum48 + length2;
        writeUintResult16 = writeUint(uint8Array, writeUintResult16, crc(uint8Array, sum46, writeUintResult16 - sum46));
        sum49 = writeUintResult16 + 4;
        num28 = num28 + 1;
        tmp68 = sum49;
      } while (num28 < frames.frames.length);
    }
    writeUintResult16 = writeUint(uint8Array, tmp68, 0);
    writeUintResult16 = tmp68 + 4;
    writeUintResult16 = writeASCII(uint8Array, writeUintResult16, "IEND");
    writeUintResult16 = writeUintResult16 + 4;
    writeUintResult16 = writeUint(uint8Array, writeUintResult16, crc(uint8Array, writeUintResult16 - 4, 4));
    return uint8Array.buffer;
  }
  function compressPNG(frames) {
    let length;
    let num = 0;
    if (0 < frames.frames.length) {
      do {
        let tmp = frames.frames[num];
        let width = tmp.rect.width;
        let height = tmp.rect.height;
        let _Uint8Array = Uint8Array;
        let tmp2 = new.target;
        let tmp3 = new.target;
        let uint8Array = new Uint8Array(height * tmp.bpl + height);
        let tmp5 = uint8Array;
        let tmp6 = closure_14;
        let tmp7 = height;
        let tmp8 = arg1;
        let tmp9 = arg2;
        tmp.cimg = closure_14(tmp.img, height, tmp.bpp, tmp.bpl, uint8Array, arg1, arg2);
        num = num + 1;
        length = frames.frames.length;
      } while (num < length);
    }
  }
  function compress(arg0, arg1, arg2, arg3, arg4) {
    let length2;
    let length5;
    let length6;
    let length8;
    let first = arg4[0];
    let num = 255;
    let num2 = 0;
    let num3 = 255;
    if (0 < arg0.length) {
      do {
        let _Uint8Array = Uint8Array;
        let tmp6 = new.target;
        let tmp7 = new.target;
        let uint8Array = new Uint8Array(arg0[num2]);
        let tmp8 = uint8Array;
        let length = uint8Array.length;
        let tmp9 = num;
        let num5 = 0;
        let tmp10 = num;
        let num6 = 0;
        if (0 < length) {
          do {
            tmp9 = tmp9 & uint8Array[num5 + 3];
            num5 = num5 + 4;
            tmp10 = tmp9;
            num6 = num5;
          } while (num5 < length);
        }
        num2 = num2 + 1;
        num = tmp10;
        let num4 = num6;
        num3 = tmp10;
      } while (num2 < arg0.length);
    }
    const items = [];
    let num7 = 0;
    if (0 < arg0.length) {
      do {
        let _Uint8Array2 = Uint8Array;
        let tmp21 = new.target;
        let tmp22 = new.target;
        let uint8Array1 = new Uint8Array(arg0[num7]);
        let tmp23 = uint8Array1;
        let _Uint32Array = Uint32Array;
        let tmp24 = new.target;
        let tmp25 = new.target;
        let uint32Array = new Uint32Array(uint8Array1.buffer);
        let tmp27 = uint32Array;
        let num8 = 0;
        if (first) {
          num8 = 1;
        }
        if (0 != num7) {
          if (!tmp3) {
            if (!first) {
              if (1 != num7) {
                let num11 = 2;
              }
              let num12 = 0;
              let num13 = 0;
              let sum1 = arg1;
              let sum2 = arg2;
              let num14 = 0;
              let num15 = 1000000000;
              let num16 = 0;
              let tmp42 = tmp18;
              let tmp43 = tmp20;
              let num17 = 0;
              let num18 = 0;
              let tmp44 = arg1;
              let tmp45 = arg2;
              let num19 = 0;
              let num20 = 1000000000;
              let num21 = 0;
              let tmp46 = tmp18;
              let tmp47 = tmp20;
              if (0 < num11) {
                do {
                  let _Uint8Array3 = Uint8Array;
                  let tmp48 = new.target;
                  let uint8Array2 = new Uint8Array(arg0[num7 - 1 - num16]);
                  let _Uint32Array2 = Uint32Array;
                  let tmp50 = new.target;
                  let tmp51 = new.target;
                  let uint32Array1 = new Uint32Array(arg0[num7 - 1 - num16]);
                  let tmp53 = uint32Array1;
                  let tmp54 = tmp43;
                  let tmp55 = arg1;
                  let tmp56 = arg2;
                  let num22 = -1;
                  let num23 = -1;
                  let num24 = 0;
                  let num25 = arg1;
                  let num26 = arg2;
                  let num27 = -1;
                  let num28 = -1;
                  let num29 = 0;
                  let tmp57 = tmp43;
                  if (0 < arg2) {
                    do {
                      let tmp58 = tmp55;
                      let tmp59 = tmp56;
                      let tmp60 = num22;
                      let tmp61 = num23;
                      let num30 = 0;
                      let tmp62 = tmp55;
                      let tmp63 = tmp56;
                      let tmp64 = num22;
                      let tmp65 = num23;
                      let num31 = 0;
                      if (0 < arg1) {
                        do {
                          let sum = num24 * arg1 + num30;
                          let tmp67 = tmp58;
                          let tmp68 = tmp59;
                          let tmp69 = tmp60;
                          let tmp70 = tmp61;
                          if (uint32Array[sum] != uint32Array1[sum]) {
                            let tmp71 = tmp58;
                            if (num30 < tmp58) {
                              tmp71 = num30;
                            }
                            let tmp72 = tmp60;
                            if (num30 > tmp60) {
                              tmp72 = num30;
                            }
                            let tmp73 = tmp59;
                            if (num24 < tmp59) {
                              tmp73 = num24;
                            }
                            let tmp74 = tmp61;
                            if (num24 > tmp61) {
                              tmp74 = num24;
                            }
                            tmp70 = tmp74;
                            tmp67 = tmp71;
                            tmp68 = tmp73;
                            tmp69 = tmp72;
                          }
                          num30 = num30 + 1;
                          tmp58 = tmp67;
                          tmp59 = tmp68;
                          tmp60 = tmp69;
                          tmp61 = tmp70;
                          tmp62 = tmp67;
                          tmp63 = tmp68;
                          tmp64 = tmp69;
                          tmp65 = tmp70;
                          tmp54 = sum;
                          num31 = num30;
                        } while (num30 < arg1);
                      }
                      num24 = num24 + 1;
                      tmp55 = tmp62;
                      tmp56 = tmp63;
                      num22 = tmp64;
                      num23 = tmp65;
                      tmp42 = num31;
                      num25 = tmp62;
                      num26 = tmp63;
                      num27 = tmp64;
                      num28 = tmp65;
                      tmp57 = tmp54;
                      num29 = num24;
                    } while (num24 < arg2);
                  }
                  let tmp75 = tmp42;
                  if (-1 == num27) {
                    num25 = 0;
                    num26 = 0;
                    num27 = 0;
                    num28 = 0;
                  }
                  let tmp76 = num25;
                  let tmp77 = num26;
                  if (tmp2) {
                    let diff = num25;
                    if (!(1 & ~num25)) {
                      diff = num25 - 1;
                    }
                    let diff1 = num26;
                    if (!(1 & ~num26)) {
                      diff1 = num26 - 1;
                    }
                    tmp77 = diff1;
                    tmp76 = diff;
                  }
                  let result = (num27 - tmp76 + 1) * (num28 - tmp77 + 1);
                  if (result < num15) {
                    sum1 = num27 - tmp76 + 1;
                    sum2 = num28 - tmp77 + 1;
                    num12 = tmp76;
                    num13 = tmp77;
                    num14 = num16;
                    num15 = result;
                  }
                  num16 = num16 + 1;
                  tmp43 = tmp57;
                  num17 = num12;
                  num18 = num13;
                  tmp44 = sum1;
                  tmp45 = sum2;
                  num19 = num14;
                  num20 = num15;
                  let tmp12 = uint32Array1;
                  let tmp13 = tmp76;
                  let tmp14 = tmp77;
                  let tmp15 = num27;
                  let tmp16 = num28;
                  let tmp17 = num29;
                  tmp46 = tmp42;
                  let tmp19 = result;
                  tmp47 = tmp57;
                  num21 = num16;
                } while (num16 < num11);
              }
              let _Uint8Array4 = Uint8Array;
              let tmp81 = new.target;
              let tmp82 = new.target;
              let uint8Array3 = new Uint8Array(arg0[num7 - 1 - num19]);
              let tmp84 = uint8Array3;
              if (1 == num19) {
                items[num7 - 1].dispose = 2;
              }
              let _Uint8Array5 = Uint8Array;
              let tmp85 = new.target;
              let tmp86 = new.target;
              let uint8Array4 = new Uint8Array(tmp44 * tmp45 * 4);
              let tmp88 = uint8Array4;
              let tmp89 = closure_0;
              let tmp90 = uint8Array3;
              let tmp91 = arg1;
              let tmp92 = arg2;
              let tmp93 = uint8Array4;
              let tmp94 = tmp44;
              let tmp95 = tmp45;
              let num32 = 0;
              let tmp96 = closure_0(tmp84, arg1, arg2, uint8Array4, tmp44, tmp45, -num17, -num18, 0);
              let tmp97 = closure_0;
              let tmp98 = uint8Array1;
              let tmp99 = arg1;
              first = arg2;
              first = uint8Array4;
              first = tmp44;
              first = tmp45;
              let num33 = 3;
              let num34 = 0;
              if (closure_0(tmp23, arg1, arg2, uint8Array4, tmp44, tmp45, -num17, -num18, 3)) {
                num34 = 1;
              }
              if (1 === num34) {
                first = closure_13;
                let obj = { x: num17, y: num18, width: tmp44, height: tmp45 };
                first = uint8Array1;
                first = arg1;
                first = arg2;
                first = uint8Array4;
                first = obj;
                first = closure_13(tmp23, arg1, arg2, tmp88, obj);
                let substr = uint8Array4;
                let num9 = num17;
                let num10 = num18;
                let tmp29 = tmp44;
                let tmp30 = tmp45;
                num8 = num34;
                first = num11;
                first = num19;
                first = num20;
                first = num21;
                first = uint8Array3;
                let tmp31 = tmp12;
                let tmp32 = tmp13;
                let tmp33 = tmp14;
                let tmp34 = tmp15;
                let tmp35 = tmp16;
                let tmp36 = tmp17;
                let tmp37 = tmp46;
                let tmp38 = tmp19;
                let tmp39 = tmp47;
              } else {
                first = closure_0;
                first = uint8Array1;
                first = arg1;
                first = arg2;
                first = uint8Array4;
                first = tmp44;
                first = tmp45;
                let num35 = 0;
                first = closure_0(tmp23, arg1, arg2, tmp88, tmp44, tmp45, -num17, -num18, 0);
                substr = uint8Array4;
                num9 = num17;
                num10 = num18;
                tmp29 = tmp44;
                tmp30 = tmp45;
                num8 = num34;
                first = num11;
                first = num19;
                first = num20;
                first = num21;
                first = uint8Array3;
                tmp31 = tmp12;
                tmp32 = tmp13;
                tmp33 = tmp14;
                tmp34 = tmp15;
                tmp35 = tmp16;
                tmp36 = tmp17;
                tmp37 = tmp46;
                tmp38 = tmp19;
                tmp39 = tmp47;
              }
            }
          }
          num11 = 1;
        } else {
          substr = uint8Array1.slice(0);
          num9 = 0;
          num10 = 0;
          tmp29 = arg1;
          tmp30 = arg2;
          tmp31 = tmp12;
          tmp32 = tmp13;
          tmp33 = tmp14;
          tmp34 = tmp15;
          tmp35 = tmp16;
          tmp36 = tmp17;
          tmp37 = tmp18;
          tmp38 = tmp19;
          tmp39 = tmp20;
        }
        obj = {};
        obj = { x: num9, y: num10, width: tmp29, height: tmp30 };
        obj.rect = obj;
        obj.img = substr;
        obj.blend = num8;
        obj.dispose = 0;
        first = items.push(obj);
        num7 = num7 + 1;
        tmp12 = tmp31;
        tmp13 = tmp32;
        tmp14 = tmp33;
        tmp15 = tmp34;
        tmp16 = tmp35;
        tmp17 = tmp36;
        let tmp18 = tmp37;
        tmp19 = tmp38;
        let tmp20 = tmp39;
      } while (num7 < arg0.length);
    }
    if (first) {
      for (let num36 = 0; num36 < items.length; num36 = num36 + 1) {
        first = items[num36];
        if (1 != first.blend) {
          let rect = first.rect;
          let rect2 = items[num36 - 1].rect;
          let _Math3 = Math;
          first = Math.min(rect.x, rect2.x);
          let _Math4 = Math;
          first = Math.min(rect.y, rect2.y);
          let obj1 = { x: first, y: first };
          let _Math5 = Math;
          obj1.width = Math.max(rect.x + rect.width, rect2.x + rect2.width) - first;
          let _Math6 = Math;
          obj1.height = Math.max(rect.y + rect.height, rect2.y + rect2.height) - first;
          items[num36 - 1].dispose = 1;
          if (num36 - 1 !== 0) {
            first = _updateFrame;
            first = arg0;
            first = arg1;
            first = arg2;
            first = items;
            first = obj1;
            first = tmp2;
            first = _updateFrame(arg0, arg1, arg2, items, num36 - 1, obj1, tmp2);
          }
          first = _updateFrame;
          first = arg0;
          first = arg1;
          first = arg2;
          first = items;
          first = num36;
          first = obj1;
          first = tmp2;
          first = _updateFrame(arg0, arg1, arg2, items, num36, obj1, tmp2);
          first = obj1;
        }
      }
    }
    if (1 != arg0.length) {
      let num37 = 0;
      if (0 < items.length) {
        do {
          first = items[num37];
          first = first.rect.width * first.rect.height;
          num37 = num37 + 1;
          length2 = items.length;
        } while (num37 < length2);
      }
    }
    const obj2 = {};
    const items1 = [];
    const items2 = [];
    if (0 != arg3) {
      const items3 = [];
      let num41 = 0;
      if (0 < items.length) {
        do {
          first = items3.push(items[num41].img.buffer);
          num41 = num41 + 1;
          length5 = items.length;
        } while (num41 < length5);
      }
      let num42 = 0;
      let num43 = 0;
      let num44 = 0;
      if (0 < items3.length) {
        do {
          num42 = num42 + items3[num43].byteLength;
          num43 = num43 + 1;
          num44 = num42;
          length6 = items3.length;
        } while (num43 < length6);
      }
      const _Uint8Array7 = Uint8Array;
      first = new.target;
      first = new.target;
      first = num44;
      first = new Uint8Array(num44);
      let num45 = 0;
      let num46 = 0;
      if (0 < items3.length) {
        do {
          let _Uint8Array8 = Uint8Array;
          first = new.target;
          first = new.target;
          let uint8Array5 = new Uint8Array(items3[num45]);
          first = uint8Array5;
          let length7 = uint8Array5.length;
          let num47 = 0;
          if (0 < length7) {
            do {
              let num48 = uint8Array5[num47];
              let num49 = uint8Array5[num47 + 1];
              let num50 = uint8Array5[num47 + 2];
              first = uint8Array5[num47 + 3];
              if (0 == first) {
                num48 = 0;
                num49 = 0;
                num50 = 0;
              }
              first[num46 + num47] = num48;
              first[num46 + num47 + 1] = num49;
              first[num46 + num47 + 2] = num50;
              first[num46 + num47 + 3] = first;
              num47 = num47 + 4;
              first = num48;
              first = num49;
              first = num50;
            } while (num47 < length7);
          }
          num46 = num46 + length7;
          num45 = num45 + 1;
        } while (num45 < items3.length);
      }
      first = quantize;
      first = quantize(first.buffer, arg3);
      let num51 = 0;
      if (0 < first.plte.length) {
        do {
          first = items1.push(first.plte[num51].est.rgba);
          num51 = num51 + 1;
          length8 = first.plte.length;
        } while (num51 < length8);
      }
      let num52 = 0;
      let num53 = 0;
      num4 = 0;
      if (0 < items.length) {
        do {
          first = items[num52];
          let length9 = first.img.length;
          let _Uint8Array9 = Uint8Array;
          first = new.target;
          first = new.target;
          first = new Uint8Array(first.inds.buffer, num53 >> 2, length9 >> 2);
          first = items2.push(first);
          let _Uint8Array10 = Uint8Array;
          first = new.target;
          first = new.target;
          first = num53;
          first = length9;
          first = new Uint8Array(first.abuf, num53, length9);
          first = num53;
          if (tmp5) {
            first = closure_8;
            first = items1;
            first = closure_8(first.img, first.rect.width, first.rect.height, items1, first, first);
          }
          let img = first.img;
          first = img.set(first);
          num53 = num53 + length9;
          num52 = num52 + 1;
          num4 = num52;
        } while (num52 < items.length);
      }
    } else {
      first = null;
      let num40 = 0;
      if (0 < items.length) {
        do {
          first = items[num40];
          let _Uint32Array3 = Uint32Array;
          first = new.target;
          first = new.target;
          let uint32Array2 = new Uint32Array(first.img.buffer);
          first = uint32Array2;
          let width = first.rect.width;
          let length3 = uint32Array2.length;
          let _Uint8Array6 = Uint8Array;
          first = new.target;
          first = new.target;
          first = length3;
          first = new Uint8Array(length3);
          first = items2.push(first);
          let num38 = 0;
          let num39 = 0;
          if (0 < length3) {
            while (true) {
              first = uint32Array2[num38];
              if (0 != num38) {
                if (first == uint32Array2[num38 - 1]) {
                  first[num38] = first[num38 - 1];
                  num38 = num38 + 1;
                  num39 = num38;
                  if (num38 >= length3) {
                    break;
                  }
                }
              }
              if (num38 > width) {
                if (first == uint32Array2[num38 - width]) {
                  first[num38] = first[num38 - width];
                }
              }
              first = obj2[first];
              if (null != first) {
                first[num38] = first;
              } else {
                let length4 = items1.length;
                obj2[first] = length4;
                first = items1.push(first);
                first = length4;
                num39 = num38;
                first = length4;
                if (items1.length >= 300) {
                  break;
                }
              }
              break;
            }
          }
          num40 = num40 + 1;
          num4 = num39;
        } while (num40 < items.length);
      }
    }
    first = length10 <= 256 && 0 == tmp4;
    let num54 = 8;
    if (first) {
      let num55 = 1;
      if (length10 > 2) {
        let num56 = 2;
        if (length10 > 4) {
          let num58 = 8;
          if (length10 <= 16) {
            num58 = 4;
          }
          num56 = num58;
        }
        num55 = num56;
      }
      const _Math = Math;
      num54 = Math.max(num55, arg4[3]);
    }
    let num59 = 6;
    let num60 = 0;
    let num61 = 6;
    if (0 < items.length) {
      while (true) {
        first = items[num60];
        let x = first.rect.x;
        let y = first.rect.y;
        let width2 = first.rect.width;
        let height = first.rect.height;
        let img2 = first.img;
        let _Uint32Array4 = Uint32Array;
        first = new.target;
        first = new Uint32Array(img2.buffer);
        first = 4 * width2;
        if (length10 <= 256) {
          if (0 == tmp4) {
            let _Math2 = Math;
            first = Math.ceil(num54 * width2 / 8);
            let _Uint8Array12 = Uint8Array;
            first = new.target;
            first = new.target;
            first = new Uint8Array(first * height);
            first = items2[num60];
            let num66 = 0;
            let num67 = first;
            let num68 = 0;
            if (0 < height) {
              do {
                first = num66 * first;
                first = num66 * width2;
                if (8 == num54) {
                  let num72 = 0;
                  num67 = 0;
                  if (0 < width2) {
                    do {
                      first[first + num72] = first[first + num72];
                      num72 = num72 + 1;
                      num67 = num72;
                    } while (num72 < width2);
                  }
                } else if (4 == num54) {
                  let num71 = 0;
                  num67 = 0;
                  if (0 < width2) {
                    do {
                      first = first + (num71 >> 1);
                      first[first] = first[first] | first[first + num71] << 4 - 4 * (1 & num71);
                      num71 = num71 + 1;
                      num67 = num71;
                    } while (num71 < width2);
                  }
                } else if (2 == num54) {
                  let num70 = 0;
                  num67 = 0;
                  if (0 < width2) {
                    do {
                      first = first + (num70 >> 2);
                      first[first] = first[first] | first[first + num70] << 6 - 2 * (3 & num70);
                      num70 = num70 + 1;
                      num67 = num70;
                    } while (num70 < width2);
                  }
                } else if (1 == num54) {
                  let num69 = 0;
                  num67 = 0;
                  if (0 < width2) {
                    do {
                      first = first + (num69 >> 3);
                      first[first] = first[first] | first[first + num69] << 7 - (7 & num69);
                      num69 = num69 + 1;
                      num67 = num69;
                    } while (num69 < width2);
                  }
                }
                num66 = num66 + 1;
                num4 = first;
                first = num67;
                num68 = num66;
              } while (num66 < height);
            }
            first = num4;
            first = num68;
            let num62 = 3;
            let num63 = 1;
            first.img = first;
            first.bpl = first;
            first.bpp = num63;
            num60 = num60 + 1;
            num59 = num62;
            num4 = first;
            num61 = num62;
            if (num60 >= items.length) {
              break;
            }
          }
        }
        num62 = num59;
        first = num4;
        first = img2;
        num63 = 4;
        if (0 == tmp11) {
          num62 = num59;
          first = num4;
          first = img2;
          num63 = 4;
          if (1 == items.length) {
            let _Uint8Array11 = Uint8Array;
            first = new.target;
            first = new.target;
            first = new Uint8Array(width2 * height * 3);
            first = width2 * height;
            let num64 = 0;
            let num65 = 0;
            if (0 < first) {
              do {
                first = 3 * num64;
                first = 4 * num64;
                first[first] = img2[first];
                first[first + 1] = img2[first + 1];
                first[first + 2] = img2[first + 2];
                num64 = num64 + 1;
                num65 = num64;
              } while (num64 < first);
            }
            first = 3 * width2;
            first = num65;
            num62 = 2;
            num63 = 3;
          }
        }
      }
    }
    const obj3 = { ctype: num61, depth: num54, plte: items1, frames: items };
    return obj3;
  }
  function _updateFrame(arg0, arg1, arg2, items, arg4, height, arg6) {
    let _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array(arg0[arg4 - 1]);
    const uint32Array = new Uint32Array(arg0[arg4 - 1]);
    _Uint8Array = null;
    if (arg4 + 1 < arg0.length) {
      const prototype = _Uint8Array.prototype;
      _Uint8Array = new _Uint8Array(arg0[arg4 + 1]);
    }
    const _Uint8Array1 = new _Uint8Array(arg0[arg4]);
    const uint32Array1 = new Uint32Array(_Uint8Array1.buffer);
    let tmp9 = arg1;
    let tmp10 = arg2;
    let num = -1;
    let num2 = -1;
    let num3 = 0;
    let num4 = arg1;
    let num5 = arg2;
    let num6 = -1;
    let num7 = -1;
    if (0 < height.height) {
      do {
        let tmp11 = tmp9;
        let tmp12 = tmp10;
        let tmp13 = num;
        let tmp14 = num2;
        let num8 = 0;
        let tmp15 = tmp9;
        let tmp16 = tmp10;
        let tmp17 = num;
        let tmp18 = num2;
        if (0 < height.width) {
          do {
            let sum = height.x + num8;
            let sum1 = height.y + num3;
            let sum2 = sum1 * arg1 + sum;
            let tmp22 = uint32Array1[sum2];
            let tmp23 = 0 == tmp22;
            if (!tmp23) {
              let tmp24 = 0 == items[arg4 - 1].dispose && uint32Array[sum2] == tmp22;
              if (tmp24) {
                let tmp25 = null == _Uint8Array || 0 != _Uint8Array[4 * sum2 + 3];
                tmp24 = tmp25;
              }
              tmp23 = tmp24;
            }
            let tmp26 = tmp11;
            let tmp27 = tmp12;
            let tmp28 = tmp13;
            let tmp29 = tmp14;
            if (!tmp23) {
              let tmp30 = tmp11;
              if (sum < tmp11) {
                tmp30 = sum;
              }
              let tmp31 = tmp13;
              if (sum > tmp13) {
                tmp31 = sum;
              }
              let tmp32 = tmp12;
              if (sum1 < tmp12) {
                tmp32 = sum1;
              }
              let tmp33 = tmp14;
              if (sum1 > tmp14) {
                tmp33 = sum1;
              }
              tmp29 = tmp33;
              tmp26 = tmp30;
              tmp27 = tmp32;
              tmp28 = tmp31;
            }
            num8 = num8 + 1;
            tmp11 = tmp26;
            tmp12 = tmp27;
            tmp13 = tmp28;
            tmp14 = tmp29;
            tmp15 = tmp26;
            tmp16 = tmp27;
            tmp17 = tmp28;
            tmp18 = tmp29;
            let tmp34 = sum;
            let tmp35 = sum1;
            let tmp36 = sum2;
            let tmp37 = tmp22;
          } while (num8 < height.width);
        }
        num3 = num3 + 1;
        tmp9 = tmp15;
        tmp10 = tmp16;
        num = tmp17;
        num2 = tmp18;
        num4 = tmp15;
        num5 = tmp16;
        num6 = tmp17;
        num7 = tmp18;
      } while (num3 < height.height);
    }
    if (-1 == num6) {
      num4 = 0;
      num5 = 0;
      num6 = 0;
      num7 = 0;
    }
    let tmp38 = num4;
    let tmp39 = num5;
    if (arg6) {
      let diff = num4;
      if (!(1 & ~num4)) {
        diff = num4 - 1;
      }
      let diff1 = num5;
      if (!(1 & ~num5)) {
        diff1 = num5 - 1;
      }
      tmp39 = diff1;
      tmp38 = diff;
    }
    const size = { x: tmp38, y: tmp39, width: num6 - tmp38 + 1, height: num7 - tmp39 + 1 };
    items[arg4].rect = size;
    items[arg4].blend = 1;
    const uint8Array1 = new Uint8Array(size.width * size.height * 4);
    items[arg4].img = uint8Array1;
    if (0 == items[arg4 - 1].dispose) {
      callback(uint8Array, arg1, arg2, tmp42.img, size.width, size.height, -size.x, -size.y, 0);
      _prepareDiff(tmp7, arg1, arg2, tmp42.img, size);
    } else {
      callback(tmp7, arg1, arg2, tmp42.img, size.width, size.height, -size.x, -size.y, 0);
    }
  }
  function _prepareDiff(arg0, arg1, arg2, img, size) {
    callback(arg0, arg1, arg2, img, size.width, size.height, -size.x, -size.y, 2);
  }
  function _filterZero(buffer, arg1, arg2, arg3, set) {
    const items = [];
    let items1 = [];
    if (-1 != arg5) {
      const items2 = [arg5];
      items1 = items2;
    } else {
      let tmp = arg1 * arg3 > 500000;
      if (!tmp) {
        tmp = 1 == arg2;
      }
      if (tmp) {
        items1 = [0.229];
      }
    }
    if (arg6) {
      const obj = { level: 0 };
      const tmp2 = obj;
    }
    if (set.length > 10000000) {
      const _window = window;
      if (null != window.UZIP) {
        const _window2 = window;
        let pako = window.UZIP;
      }
      const _Date = Date;
      const timestamp = Date.now();
      for (let num5 = 0; num5 < items1.length; num5 = num5 + 1) {
        for (let num6 = 0; num6 < arg1; num6 = num6 + 1) {
          let tmp7 = _filterLine;
          let tmp8 = set;
          let tmp9 = buffer;
          let tmp10 = num6;
          let tmp11 = arg3;
          let tmp12 = arg2;
          let tmp13 = _filterLine(set, buffer, num6, arg3, arg2, items1[num5]);
        }
        let arr = items.push(pako.deflate(set, tmp2));
      }
      let num7 = 1000000000;
      let num8 = 0;
      let tmp16;
      if (0 < items.length) {
        do {
          if (items[num8].length < num7) {
            num7 = items[num8].length;
            let tmp15 = num8;
          }
          num8 = num8 + 1;
          tmp16 = tmp15;
        } while (num8 < items.length);
      }
      return items[tmp16];
    }
    pako = globalThis.pako;
  }
  function _filterLine(set, buffer, arg2, arg3, arg4, arg5) {
    const result = arg2 * arg3;
    const sum = result + arg2;
    set[sum] = arg5;
    const sum1 = sum + 1;
    if (0 == arg5) {
      if (arg3 < 500) {
        for (let num18 = 0; num18 < arg3; num18 = num18 + 1) {
          set[sum1 + num18] = buffer[result + num18];
        }
      } else {
        const _Uint8Array = Uint8Array;
        const uint8Array = new Uint8Array(buffer.buffer, result, arg3);
        const result1 = set.set(uint8Array, sum1);
      }
    } else if (1 == arg5) {
      for (let num14 = 0; num14 < arg4; num14 = num14 + 1) {
        set[sum1 + num14] = buffer[result + num14];
      }
      let sum2 = arg4;
      if (arg4 < arg3) {
        do {
          set[sum1 + sum2] = buffer[result + sum2] - buffer[result + sum2 - arg4] + 256 & 255;
          sum2 = sum2 + 1;
        } while (sum2 < arg3);
      }
    } else if (0 == arg2) {
      for (let num8 = 0; num8 < arg4; num8 = num8 + 1) {
        set[sum1 + num8] = buffer[result + num8];
      }
      if (2 == arg5) {
        let sum3 = arg4;
        if (arg4 < arg3) {
          do {
            set[sum1 + sum3] = buffer[result + sum3];
            sum3 = sum3 + 1;
          } while (sum3 < arg3);
        }
      }
      if (3 == arg5) {
        let sum4 = arg4;
        if (arg4 < arg3) {
          do {
            set[sum1 + sum4] = buffer[result + sum4] - (buffer[result + sum4 - arg4] >> 1) + 256 & 255;
            sum4 = sum4 + 1;
          } while (sum4 < arg3);
        }
      }
      if (4 == arg5) {
        let sum6 = arg4;
        if (arg4 < arg3) {
          do {
            let tmp15 = closure_2;
            let sum5 = sum1 + sum6;
            set[sum5] = buffer[result + sum6] - closure_2(buffer[result + sum6 - arg4], 0, 0) + 256 & 255;
            sum6 = sum6 + 1;
          } while (sum6 < arg3);
        }
      }
    } else {
      if (2 == arg5) {
        for (let num3 = 0; num3 < arg3; num3 = num3 + 1) {
          set[sum1 + num3] = buffer[result + num3] + 256 - buffer[result + num3 - arg3] & 255;
        }
      }
      if (3 == arg5) {
        for (let num5 = 0; num5 < arg4; num5 = num5 + 1) {
          set[sum1 + num5] = buffer[result + num5] + 256 - (buffer[result + num5 - arg3] >> 1) & 255;
        }
        let sum7 = arg4;
        if (arg4 < arg3) {
          do {
            set[sum1 + sum7] = buffer[result + sum7] + 256 - (buffer[result + sum7 - arg3] + buffer[result + sum7 - arg4] >> 1) & 255;
            sum7 = sum7 + 1;
          } while (sum7 < arg3);
        }
      }
      if (4 == arg5) {
        for (let num7 = 0; num7 < arg4; num7 = num7 + 1) {
          let tmp7 = callback2;
          let sum8 = sum1 + num7;
          let sum9 = buffer[result + num7] + 256;
          set[sum8] = sum9 - callback2(0, buffer[result + num7 - arg3], 0) & 255;
        }
        let sum12 = arg4;
        if (arg4 < arg3) {
          do {
            let tmp11 = closure_2;
            let sum10 = sum1 + sum12;
            let sum11 = buffer[result + sum12] + 256;
            set[sum10] = sum11 - closure_2(buffer[result + sum12 - arg4], buffer[result + sum12 - arg3], buffer[result + sum12 - arg4 - arg3]) & 255;
            sum12 = sum12 + 1;
          } while (sum12 < arg3);
        }
      }
    }
  }
  function quantize(arg0, arg1, arg2) {
    const timestamp = Date.now();
    const uint8Array = new Uint8Array(arg0);
    const substr = uint8Array.slice(0);
    const uint32Array = new Uint32Array(substr.buffer);
    const tmp4 = getKDtree(substr, arg1);
    const first = tmp4[0];
    const uint32Array1 = new Uint32Array(length);
    const uint8Array1 = new Uint8Array(uint32Array1.buffer);
    for (let num = 0; num < length; num = num + 1) {
      uint32Array1[num] = arr2[num].est.rgba;
    }
    const uint8Array2 = new Uint8Array(length2 >> 2);
    if (tmp4[1].length <= 60) {
      findNearest(uint8Array, uint8Array2, uint8Array1);
      remap(uint8Array2, uint32Array, uint32Array1);
    } else if (uint8Array.length < 32000000) {
      for (let num6 = 0; num6 < length2; num6 = num6 + 4) {
        let tmp21 = getNearest;
        let tmp22 = first;
        let tmp23 = getNearest(first, 0.00392156862745098 * uint8Array[num6], 0.00392156862745098 * uint8Array[num6 + 1], 0.00392156862745098 * uint8Array[num6 + 2], 0.00392156862745098 * uint8Array[num6 + 3]);
        let tmp24 = num6 >> 2;
        uint8Array2[tmp24] = tmp23.ind;
        uint32Array[tmp24] = tmp23.est.rgba;
      }
    } else {
      for (let num2 = 0; num2 < length2; num2 = num2 + 4) {
        let result = 0.00392156862745098 * uint8Array[num2];
        let result1 = 0.00392156862745098 * uint8Array[num2 + 1];
        let result2 = 0.00392156862745098 * uint8Array[num2 + 2];
        let result3 = 0.00392156862745098 * uint8Array[num2 + 3];
        let rect = first;
        let tmp13 = first;
        if (first.left) {
          do {
            let tmp14 = closure_22;
            let tmp15 = result;
            let tmp16 = result1;
            let tmp17 = result2;
            let tmp18 = result3;
            let tmp19 = closure_22(rect.est, result, result1, result2, result3) <= 0 ? rect.left : rect.right;
            rect = tmp19;
            tmp13 = tmp19;
          } while (tmp19.left);
        }
        let tmp20 = num2 >> 2;
        uint8Array2[tmp20] = tmp13.ind;
        uint32Array[tmp20] = tmp13.est.rgba;
      }
    }
    let num7 = 0;
    let num8 = 1000000000;
    if (arg2) {
      const tmp30 = kmeans(uint8Array, uint8Array2, uint8Array1);
      while (tmp30 / num8 <= 0.997) {
        num7 = num7 + 1;
        let num11 = 10;
        num8 = tmp30;
        if (num7 >= 10) {
          break;
        }
      }
      for (let num12 = 0; num12 < length; num12 = num12 + 1) {
        arr2[num12].est.rgba = uint32Array1[num12];
      }
      remap(uint8Array2, uint32Array, uint32Array1);
    } else {
      num7 = 0;
      num8 = 1000000000;
    }
    return { abuf: substr.buffer, inds: uint8Array2, plte: tmp4[1] };
  }
  function remap(uint8Array2, uint32Array, uint32Array1) {
    let length;
    let num = 0;
    if (0 < uint8Array2.length) {
      do {
        uint32Array[num] = uint32Array1[uint8Array2[num]];
        num = num + 1;
        length = uint8Array2.length;
      } while (num < length);
    }
  }
  function kmeans(uint8Array, uint8Array2, uint8Array1) {
    let length;
    let length2;
    const uint32Array = new Uint32Array(4 * tmp);
    const uint32Array1 = new Uint32Array(tmp);
    let num = 0;
    if (0 < uint8Array.length) {
      do {
        let tmp4 = uint8Array2[num >>> 2];
        let result = 4 * tmp4;
        uint32Array1[tmp4] = uint32Array1[tmp4] + 1;
        uint32Array[result] = uint32Array[result] + uint8Array[num];
        let sum = result + 1;
        uint32Array[sum] = uint32Array[sum] + uint8Array[num + 1];
        let sum1 = result + 2;
        uint32Array[sum1] = uint32Array[sum1] + uint8Array[num + 2];
        let sum2 = result + 3;
        uint32Array[sum2] = uint32Array[sum2] + uint8Array[num + 3];
        num = num + 4;
        length = uint8Array.length;
      } while (num < length);
    }
    let num2 = 0;
    if (0 < uint8Array1.length) {
      do {
        let _Math = Math;
        uint8Array1[num2] = Math.round(uint32Array[num2] / uint32Array1[num2 >>> 2]);
        num2 = num2 + 1;
        length2 = uint8Array1.length;
      } while (num2 < length2);
    }
    return findNearest(uint8Array, uint8Array2, uint8Array1);
  }
  function findNearest(uint8Array, uint8Array2, uint8Array1) {
    const items = [];
    let num = 0;
    if (0 < uint8Array1.length >>> 2) {
      do {
        let result = 4 * num;
        let tmp10 = tmp3;
        let num2 = 0;
        let num3 = 1000000000;
        let num4 = 0;
        let num5 = 1000000000;
        let num6 = 0;
        let tmp11 = tmp3;
        if (tmp2) {
          do {
            let tmp12 = num2;
            let tmp13 = num3;
            if (num != num4) {
              let result1 = 4 * num4;
              let diff = tmp6 - uint8Array1[result1];
              let diff1 = tmp7 - uint8Array1[result1 + 1];
              let diff2 = tmp8 - uint8Array1[result1 + 2];
              let diff3 = tmp9 - uint8Array1[result1 + 3];
              let sum = diff * diff + diff1 * diff1 + diff2 * diff2 + diff3 * diff3;
              tmp12 = num2;
              tmp10 = sum;
              tmp13 = num3;
              if (sum < num3) {
                tmp12 = num4;
                tmp13 = sum;
                tmp10 = sum;
              }
            }
            num4 = num4 + 1;
            num2 = tmp12;
            num3 = tmp13;
            num5 = tmp13;
            tmp11 = tmp10;
            num6 = num4;
          } while (num4 < tmp);
        }
        let _Math = Math;
        items[num] = 0.5 * Math.sqrt(num5);
        items[num] = items[num] * items[num];
        num = num + 1;
        let tmp20 = num6;
        let tmp3 = tmp11;
        let tmp4 = tmp11;
      } while (num < tmp);
    }
    let num7 = 0;
    let num8 = 0;
    let num9 = 0;
    if (0 < uint8Array.length) {
      do {
        let tmp21 = uint8Array[num8];
        let tmp22 = uint8Array[num8 + 1];
        let tmp23 = uint8Array[num8 + 2];
        let tmp24 = uint8Array[num8 + 3];
        let tmp25 = num8 >>> 2;
        let tmp26 = uint8Array2[tmp25];
        let result2 = 4 * tmp26;
        let diff4 = tmp21 - uint8Array1[result2];
        let diff5 = tmp22 - uint8Array1[result2 + 1];
        let diff6 = tmp23 - uint8Array1[result2 + 2];
        let diff7 = tmp24 - uint8Array1[result2 + 3];
        let sum1 = diff4 * diff4 + diff5 * diff5 + diff6 * diff6 + diff7 * diff7;
        let tmp33 = tmp26;
        let tmp34 = tmp4;
        let tmp35 = sum1;
        if (sum1 > items[tmp26]) {
          let tmp42 = tmp26;
          let tmp43 = sum1;
          let num10 = 0;
          tmp33 = tmp26;
          tmp35 = sum1;
          let num11 = 0;
          tmp34 = tmp4;
          if (tmp2) {
            while (true) {
              let result3 = 4 * num10;
              let diff8 = tmp21 - uint8Array1[result3];
              let diff9 = tmp22 - uint8Array1[result3 + 1];
              let diff10 = tmp23 - uint8Array1[result3 + 2];
              let diff11 = tmp24 - uint8Array1[result3 + 3];
              let sum2 = diff8 * diff8 + diff9 * diff9 + diff10 * diff10 + diff11 * diff11;
              if (sum2 >= tmp43) {
                num10 = num10 + 1;
                tmp33 = tmp42;
                tmp35 = tmp43;
                tmp34 = sum2;
                let tmp45 = num10;
                if (num10 >= tmp) {
                  break;
                }
              } else {
                tmp42 = num10;
                tmp43 = sum2;
                tmp33 = num10;
                tmp35 = sum2;
                let tmp44 = num10;
                tmp34 = sum2;
                if (sum2 < items[num10]) {
                  break;
                }
              }
              break;
            }
          }
        }
        uint8Array2[tmp25] = tmp33;
        num7 = num7 + tmp35;
        num8 = num8 + 4;
        tmp4 = tmp34;
        num9 = num7;
      } while (num8 < uint8Array.length);
    }
    return num9 / (uint8Array.length >>> 2);
  }
  function getKDtree(substr, arg1) {
    let length;
    let num = arg2;
    if (null == arg2) {
      num = 0.0001;
    }
    const uint32Array = new Uint32Array(substr.buffer);
    let obj = { i1: substr.length, bst: stats(substr, obj.i0, obj.i1), est: estats(obj.bst) };
    const items = [obj];
    if (items.length < arg1) {
      while (true) {
        let num2 = 0;
        let num3 = 0;
        let num4 = 0;
        let num5 = 0;
        let num6 = 0;
        if (0 < items.length) {
          do {
            if (items[num4].est.L > num2) {
              num2 = items[num4].est.L;
              num3 = num4;
            }
            num4 = num4 + 1;
            num5 = num2;
            num6 = num3;
          } while (num4 < items.length);
        }
        if (num5 < num) {
          break;
        } else {
          let tmp7 = items[num6];
          let tmp8 = splitPixels;
          let tmp9 = substr;
          let tmp10 = uint32Array;
          let tmp11 = splitPixels(substr, uint32Array, tmp7.i0, tmp7.i1, tmp7.est.e, tmp7.est.eMq255);
          if (tmp7.i0 < tmp11) {
            if (tmp7.i1 > tmp11) {
              obj = { <string:3311599331>: 0, <string:2542227793>: 0, <string:1464976738>: "100%", 866c7c763a3e0c2b57ef52eebbfa2db5: "10%", isArray: "angle", <string:3932422144>: 180, <string:877967286>: null, i0: tmp7.i0, i1: tmp11 };
              let tmp12 = stats;
              obj.bst = stats(substr, obj.i0, obj.i1);
              let tmp13 = estats;
              obj.est = estats(obj.bst);
              obj = { <string:3311599331>: 0, <string:2542227793>: 0, <string:1464976738>: "100%", 866c7c763a3e0c2b57ef52eebbfa2db5: "10%", isArray: "angle", <string:3932422144>: 180, <string:877967286>: null, i0: tmp11, i1: tmp7.i1 };
              let obj1 = { R: [], m: [], N: tmp7.bst.N - obj.bst.N };
              obj.bst = obj1;
              let num7 = 0;
              do {
                obj.bst.R[num7] = tmp7.bst.R[num7] - obj.bst.R[num7];
                num7 = num7 + 1;
                let num8 = 0;
              } while (num7 < 16);
              do {
                obj.bst.m[num8] = tmp7.bst.m[num8] - obj.bst.m[num8];
                num8 = num8 + 1;
              } while (num8 < 4);
              let tmp4 = estats;
              obj.est = estats(obj.bst);
              tmp7.left = obj;
              tmp7.right = obj;
              items[num6] = obj;
              let arr = items.push(obj);
            }
            let tmp2 = obj;
            let tmp3 = obj;
            if (items.length >= arg1) {
              break;
            }
          }
          tmp7.est.L = 0;
          obj = tmp2;
          obj = tmp3;
        }
      }
    }
    const sorted = items.sort((bst, bst2) => bst2.bst.N - bst.bst.N);
    let num9 = 0;
    if (0 < items.length) {
      do {
        items[num9].ind = num9;
        num9 = num9 + 1;
        length = items.length;
      } while (num9 < length);
    }
    const items1 = [obj, items];
    return items1;
  }
  function getNearest(first, arg1, arg2, arg3, arg4) {
    let left;
    let right;
    if (null == first.left) {
      const q = first.est.q;
      const diff = arg1 - q[0];
      const diff1 = arg2 - q[1];
      const diff2 = arg3 - q[2];
      const diff3 = arg4 - q[3];
      first.tdst = diff * diff + diff1 * diff1 + diff2 * diff2 + diff3 * diff3;
      return first;
    } else {
      const tmp25 = planeDst(first.est, arg1, arg2, arg3, arg4);
      ({ left: right, right: left } = first);
      if (tmp25 > 0) {
        ({ right, left } = first);
      }
      const tmp7 = getNearest(right, arg1, arg2, arg3, arg4);
      if (tmp7.tdst <= tmp25 * tmp25) {
        return tmp7;
      } else {
        const tmp14 = getNearest(left, arg1, arg2, arg3, arg4);
        let tmp15 = tmp7;
        if (tmp14.tdst < tmp7.tdst) {
          tmp15 = tmp14;
        }
        return tmp15;
      }
    }
  }
  function planeDst(est, arg1, arg2, arg3, arg4) {
    const e = est.e;
    return e[0] * arg1 + e[1] * arg2 + e[2] * arg3 + e[3] * arg4 - est.eMq;
  }
  function splitPixels(substr, uint32Array, i0, i1, arg4, eMq255) {
    let tmp21;
    let diff = i1 - 4;
    let sum1 = i0;
    let tmp3 = i0;
    if (i0 < diff) {
      while (true) {
        let tmp4 = vecDot;
        let tmp5 = sum1;
        let tmp6 = sum1;
        if (vecDot(substr, sum1, arg4) <= eMq255) {
          do {
            let sum = tmp5 + 4;
            let tmp8 = closure_24;
            tmp5 = sum;
            tmp6 = sum;
            let tmp9 = closure_24(substr, sum, arg4);
          } while (tmp9 <= eMq255);
        }
        let tmp10 = vecDot;
        let tmp11 = diff;
        let tmp12 = diff;
        if (vecDot(substr, diff, arg4) > eMq255) {
          do {
            let diff1 = tmp11 - 4;
            let tmp14 = closure_24;
            tmp11 = diff1;
            tmp12 = diff1;
            let tmp15 = closure_24(substr, diff1, arg4);
          } while (tmp15 > eMq255);
        }
        tmp3 = tmp6;
        if (tmp6 >= tmp12) {
          break;
        } else {
          let tmp16 = tmp12 >> 2;
          uint32Array[tmp6 >> 2] = uint32Array[tmp16];
          uint32Array[tmp16] = uint32Array[tmp6 >> 2];
          sum1 = tmp6 + 4;
          diff = tmp12 - 4;
          tmp3 = sum1;
          if (sum1 >= diff) {
            break;
          }
        }
      }
    }
    let tmp17 = tmp3;
    let tmp18 = tmp3;
    if (vecDot(substr, tmp3, arg4) > eMq255) {
      do {
        let diff2 = tmp17 - 4;
        let tmp20 = closure_24;
        tmp17 = diff2;
        tmp18 = diff2;
        tmp21 = closure_24(substr, diff2, arg4);
      } while (tmp21 > eMq255);
    }
    return tmp18 + 4;
  }
  function vecDot(substr, diff, arg2) {
    return substr[diff] * arg2[0] + substr[diff + 1] * arg2[1] + substr[diff + 2] * arg2[2] + substr[diff + 3] * arg2[3];
  }
  function stats(substr, i0, i1) {
    let sum = i0;
    const R = [];
    const m = ["<string:1010630658>", "<string:1246494722>", "<string:3003122491>", "<string:352322212>"];
    const N = i1 - i0 >> 2;
    if (i0 < i1) {
      do {
        let result = 0.00392156862745098 * substr[sum];
        let result1 = 0.00392156862745098 * substr[sum + 1];
        let result2 = 0.00392156862745098 * substr[sum + 2];
        let result3 = 0.00392156862745098 * substr[sum + 3];
        m[0] = m[0] + result;
        m[1] = m[1] + result1;
        m[2] = m[2] + result2;
        m[3] = m[3] + result3;
        R[0] = R[0] + result * result;
        R[1] = R[1] + result * result1;
        R[2] = R[2] + result * result2;
        R[3] = R[3] + result * result3;
        R[5] = R[5] + result1 * result1;
        R[6] = R[6] + result1 * result2;
        R[7] = R[7] + result1 * result3;
        R[10] = R[10] + result2 * result2;
        R[11] = R[11] + result2 * result3;
        R[15] = R[15] + result3 * result3;
        sum = sum + 4;
      } while (sum < i1);
    }
    R[4] = R[1];
    R[8] = R[2];
    R[9] = R[6];
    R[12] = R[3];
    R[13] = R[7];
    R[14] = R[11];
    return { R, m, N };
  }
  function estats(bst) {
    let N;
    let R;
    let m;
    ({ R, m, N } = bst);
    const first = m[0];
    let num = 0;
    if (0 != N) {
      num = 1 / N;
    }
    const items = [R[0] - first * first * num, R[1] - first * m[1] * num, R[2] - first * m[2] * num, R[3] - first * m[3] * num, R[4] - m[1] * first * num, R[5] - m[1] * m[1] * num, R[6] - m[1] * m[2] * num, R[7] - m[1] * m[3] * num, R[8] - m[2] * first * num, R[9] - m[2] * m[1] * num, R[10] - m[2] * m[2] * num, R[11] - m[2] * m[3] * num, R[12] - m[3] * first * num, R[13] - m[3] * m[1] * num, R[14] - m[3] * m[2] * num, R[15] - m[3] * m[3] * num];
    let obj = closure_4;
    const items1 = [Math.random(), Math.random(), Math.random(), Math.random()];
    let tmp5 = items1;
    let num2 = 0;
    if (0 != N) {
      const multVecResult = obj.multVec(items, items1);
      const _Math = Math;
      const sqrtResult = Math.sqrt(obj.dot(multVecResult, multVecResult));
      let smlResult = obj.sml(1 / sqrtResult, multVecResult);
      let tmp9 = sqrtResult;
      let num5 = 0;
      const sum = num5 + 1;
      tmp5 = smlResult;
      num2 = tmp9;
      while (sum < 16) {
        let multVecResult1 = obj.multVec(items, smlResult);
        let _Math2 = Math;
        let sqrtResult1 = Math.sqrt(obj.dot(multVecResult1, multVecResult1));
        let smlResult1 = obj.sml(1 / sqrtResult1, multVecResult1);
        smlResult = smlResult1;
        tmp9 = sqrtResult1;
        num5 = sum;
        if (0 == sum) {
          continue;
        } else {
          let _Math3 = Math;
          smlResult = smlResult1;
          tmp9 = sqrtResult1;
          num5 = sum;
          tmp5 = smlResult1;
          num2 = tmp11;
          if (Math.abs(sqrtResult1 - tmp11) < 0.000000001) {
            break;
          }
        }
        continue;
      }
    }
    const items2 = [first * num, m[1] * num, m[2] * num, m[3] * num];
    obj = { Cov: items, q: items2, e: tmp5, L: num2 };
    obj.eMq255 = obj.dot(obj.sml(255, items2), tmp5);
    obj.eMq = obj.dot(tmp5, items2);
    const tmp15 = Math.round(255 * items2[3]) << 24;
    const tmp16 = Math.round(255 * items2[2]) << 16;
    obj.rgba = (tmp15 | tmp16 | Math.round(255 * items2[1]) << 8 | Math.round(255 * items2[0])) >>> 0;
    return obj;
  }
  ({ _copyTile: closure_0, _bin: closure_1, _paeth: closure_2 } = tmp);
  const uint32Array = new Uint32Array(256);
  let num = 0;
  let tmp2 = num;
  let num2 = 0;
  do {
    do {
      let tmp3 = tmp2 >>> 1;
      let tmp4 = 1 & tmp2 ? 3988292384 ^ tmp3 : tmp3;
      num2 = num2 + 1;
      tmp2 = tmp4;
    } while (num2 < 8);
    uint32Array[num] = tmp4;
    num = num + 1;
  } while (num < 256);
}();

export default tmp;
