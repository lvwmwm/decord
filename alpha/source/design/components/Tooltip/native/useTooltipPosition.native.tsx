// Module ID: 9417
// Function ID: 9418
// Name: useTooltipPosition
// Dependencies: [19, 558, 576, 2]

// Module 9417 (useTooltipPosition)
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTooltipPosition(width, arg1, arg2, arg3, arg4) {
  let first;
  const obj = react2;
  const cResult = obj.c(20);
  let num = 0;
  if (undefined !== arg4) {
    num = arg4;
  }
  if (null != width) {
    if (null != arg1) {
      let str4;
      let obj8;
      if ("top" === arg3) {
        str4 = "start";
      } else {
        str4 = "end";
      }
      let str5 = "center";
      let str6 = "center";
      if (tmp5 || "right" === arg3) {
        str6 = str4;
      }
      const diff = arg2.x - arg1.x;
      if (cResult[1] === num) {
        if (cResult[2] === arg1.width) {
          if (cResult[3] === str6) {
            if (cResult[4] === diff) {
              if (cResult[5] === arg2.width) {
                let tmp9;
                let obj5;
                if (cResult[6] === width.width) {
                  tmp9 = cResult[7];
                }
                if (!(tmp5 || "right" === arg3)) {
                  str5 = str4;
                }
                const diff1 = arg2.y - arg1.y;
                if (cResult[8] === num) {
                  if (cResult[9] === arg1.height) {
                    if (cResult[10] === str5) {
                      if (cResult[11] === diff1) {
                        if (cResult[12] === arg2.height) {
                          let tmp12;
                          if (cResult[13] === width.height) {
                            tmp12 = cResult[14];
                          }
                          if (cResult[15] === tmp9.adjustment) {
                            if (cResult[16] === tmp9.position) {
                              if (cResult[17] === tmp12.adjustment) {
                                let tmp14;
                                if (cResult[18] === tmp12.position) {
                                  tmp14 = cResult[19];
                                }
                                first = tmp14;
                              }
                            }
                          }
                          const obj2 = { tooltipX: tmp9.position, tooltipY: tmp12.position, adjustmentX: tmp9.adjustment, adjustmentY: tmp12.adjustment };
                          cResult[15] = tmp9.adjustment;
                          cResult[16] = tmp9.position;
                          cResult[17] = tmp12.adjustment;
                          cResult[18] = tmp12.position;
                          cResult[19] = obj2;
                          tmp14 = obj2;
                        }
                      }
                    }
                  }
                }
                const height = arg2.height;
                const height2 = width.height;
                const height3 = arg1.height;
                if ("start" === str5) {
                  obj5 = { position: diff1 - height2 - num, adjustment: 0 };
                  const obj3 = { position: diff1 - height2 - num, adjustment: 0 };
                } else if ("end" === str5) {
                  obj5 = { position: diff1 + height + num, adjustment: 0 };
                  const obj4 = { position: diff1 + height + num, adjustment: 0 };
                } else {
                  let num14;
                  const diff2 = diff1 + height / 2 - height2 / 2;
                  if (diff2 < 12) {
                    num14 = 12 - diff2;
                  } else {
                    num14 = 0;
                    if (diff2 + height2 > height3 - 12) {
                      num14 = height3 - diff2 - height2 - 12;
                    }
                  }
                  obj5 = { position: diff2 + num14, adjustment: num14 };
                }
                cResult[8] = num;
                cResult[9] = arg1.height;
                cResult[10] = str5;
                cResult[11] = diff1;
                cResult[12] = arg2.height;
                cResult[13] = width.height;
                cResult[14] = obj5;
                tmp12 = obj5;
              }
            }
          }
        }
      }
      width = arg2.width;
      const width2 = width.width;
      const width3 = arg1.width;
      if ("start" === str6) {
        obj8 = { position: diff - width2 - num, adjustment: 0 };
        const obj6 = { position: diff - width2 - num, adjustment: 0 };
      } else if ("end" === str6) {
        obj8 = { position: diff + width + num, adjustment: 0 };
        const obj7 = { position: diff + width + num, adjustment: 0 };
      } else {
        let num4;
        const diff3 = diff + width / 2 - width2 / 2;
        if (diff3 < 12) {
          num4 = 12 - diff3;
        } else {
          num4 = 0;
          if (diff3 + width2 > width3 - 12) {
            num4 = width3 - diff3 - width2 - 12;
          }
        }
        obj8 = { position: diff3 + num4, adjustment: num4 };
      }
      cResult[1] = num;
      cResult[2] = arg1.width;
      cResult[3] = str6;
      cResult[4] = diff;
      cResult[5] = arg2.width;
      cResult[6] = width.width;
      cResult[7] = obj8;
      tmp9 = obj8;
    }
    return first;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj9 = { tooltipX: 0, tooltipY: 0, adjustmentX: 0, adjustmentY: 0 };
    cResult[0] = obj9;
    first = obj9;
  } else {
    first = cResult[0];
  }
}) : (function useTooltipPosition(arg0, arg1, arg2, arg3) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  let closure_3 = arg3;
  let num = arg4;
  if (arg4 === undefined) {
    num = 0;
  }
  const items = [arg3, arg0, arg2, arg1, num];
  return react.useMemo(() => {
    size = closure_0;
    if (null != closure_0) {
      const size2 = closure_1;
      if (null != closure_1) {
        let str3;
        let obj;
        let obj6;
        if ("top" === closure_3) {
          str3 = "start";
        } else {
          str3 = "end";
        }
        let str4 = "center";
        let str5 = "center";
        if (tmp9 || "right" === tmp8) {
          str5 = str3;
        }
        const diff = styles.x - size2.x;
        const width = styles.width;
        const width2 = size.width;
        const width3 = size2.width;
        if ("start" === str5) {
          obj = { position: diff - width2 - num, adjustment: 0 };
          const obj2 = { position: diff - width2 - num, adjustment: 0 };
        } else if ("end" === str5) {
          obj = { position: diff + width + num, adjustment: 0 };
          const obj3 = { position: diff + width + num, adjustment: 0 };
        } else {
          let num3;
          const diff1 = diff + width / 2 - width2 / 2;
          if (diff1 < 12) {
            num3 = 12 - diff1;
          } else {
            num3 = 0;
            if (diff1 + width2 > width3 - 12) {
              num3 = width3 - diff1 - width2 - 12;
            }
          }
          obj = { position: diff1 + num3, adjustment: num3 };
        }
        if (!(tmp9 || "right" === tmp8)) {
          str4 = str3;
        }
        const diff2 = tmp2.y - size2.y;
        const height = tmp2.height;
        const height2 = size.height;
        const height3 = size2.height;
        if ("start" === str4) {
          obj6 = { position: diff2 - height2 - num, adjustment: 0 };
          const obj4 = { position: diff2 - height2 - num, adjustment: 0 };
        } else if ("end" === str4) {
          obj6 = { position: diff2 + height + num, adjustment: 0 };
          const obj5 = { position: diff2 + height + num, adjustment: 0 };
        } else {
          let num6;
          const diff3 = diff2 + height / 2 - height2 / 2;
          if (diff3 < 12) {
            num6 = 12 - diff3;
          } else {
            num6 = 0;
            if (diff3 + height2 > height3 - 12) {
              num6 = height3 - diff3 - height2 - 12;
            }
          }
          obj6 = { position: diff3 + num6, adjustment: num6 };
        }
        return { tooltipX: obj.position, tooltipY: obj6.position, adjustmentX: obj.adjustment, adjustmentY: obj6.adjustment };
      }
    }
    return { tooltipX: 0, tooltipY: 0, adjustmentX: 0, adjustmentY: 0 };
  }, items);
});
let size = size_mod;
const result = size.fileFinishedImporting("design/components/Tooltip/native/useTooltipPosition.native.tsx");

export default tmp2;
