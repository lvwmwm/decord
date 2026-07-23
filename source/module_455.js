// Module ID: 455
// Function ID: 6073
// Dependencies: []

// Module 455
const obj = {
  centroidDimension(touchBank, arg1, arg2, arg3) {
    let tmp2;
    touchBank = touchBank.touchBank;
    let tmp = null;
    if (1 === touchBank.numberActiveTouches) {
      tmp = touchBank.touchBank[touchBank.indexOfSingleActiveTouch];
    }
    if (null !== tmp) {
      let num4 = 0;
      let num5 = 0;
      if (tmp8) {
        if (!arg3) {
          if (arg3) {
            if (!arg2) {
              const currentPageY = tmp.currentPageY;
            }
          }
          if (!arg3) {
            if (arg2) {
              let previousPageY2 = tmp.previousPageX;
            }
          }
          previousPageY2 = tmp.previousPageY;
        }
        const currentPageX2 = tmp.currentPageX;
      }
      tmp8 = tmp.touchActive && tmp.currentTimeStamp > arg1;
    } else {
      num5 = 0;
      let num2 = 0;
      let num3 = 0;
      let num = 0;
      num4 = 0;
      if (0 < touchBank.length) {
        while (true) {
          tmp2 = touchBank[num];
          let tmp3 = num2;
          let tmp4 = num3;
          if (null != tmp2) {
            tmp3 = num2;
            tmp4 = num3;
            if (tmp2.touchActive) {
              tmp3 = num2;
              tmp4 = num3;
              if (tmp2.currentTimeStamp >= arg1) {
                break;
              }
            }
          }
          num = num + 1;
          num2 = tmp3;
          num3 = tmp4;
          num4 = tmp3;
          num5 = tmp4;
        }
        if (!arg3) {
          if (arg3) {
            if (!arg2) {
              const sum = num2 + tmp2.currentPageY;
              const sum1 = num3 + 1;
            }
          }
          if (!arg3) {
            if (arg2) {
              let previousPageY = tmp2.previousPageX;
            }
          }
          previousPageY = tmp2.previousPageY;
        }
        const currentPageX = tmp2.currentPageX;
      }
    }
    if (num5 > 0) {
      let noCentroid = num4 / num5;
    } else {
      noCentroid = obj.noCentroid;
    }
    return noCentroid;
  },
  currentCentroidXOfTouchesChangedAfter(touchBank) {
    return obj.centroidDimension(touchBank, arg1, true, true);
  },
  currentCentroidYOfTouchesChangedAfter(touchBank) {
    return obj.centroidDimension(touchBank, arg1, false, true);
  },
  previousCentroidXOfTouchesChangedAfter(touchBank) {
    return obj.centroidDimension(touchBank, arg1, true, false);
  },
  previousCentroidYOfTouchesChangedAfter(touchBank) {
    return obj.centroidDimension(touchBank, arg1, false, false);
  },
  currentCentroidX(touchBank) {
    return obj.centroidDimension(touchBank, 0, true, true);
  },
  currentCentroidY(touchBank) {
    return obj.centroidDimension(touchBank, 0, false, true);
  },
  noCentroid: -1
};
arg5.default = obj;
