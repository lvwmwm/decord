// Module ID: 5428
// Function ID: 46503
// Name: runScrollBenchmark
// Dependencies: [5406, 5359, 31, 5424, 5356, 5425, 5423]
// Exports: useFlatListBenchmark

// Module 5428 (runScrollBenchmark)
import asyncGeneratorStep from "asyncGeneratorStep";
import _slicedToArray from "_slicedToArray";
import result from "result";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function runScrollBenchmark(arg0, arg1, arg2, arg3) {
  return _runScrollBenchmark(...arguments);
}
async function _runScrollBenchmark(arg0, arg1, arg2, arg3, arg4) {
  let closure_0 = arg0;
  let c1;
  if (arg0.current) {
    const props = arg0.current.props;
    let horizontal;
    if (null != props) {
      horizontal = props.horizontal;
    }
    const BooleanResult = Boolean(horizontal);
    c1 = BooleanResult;
    let num = 0;
    if (BooleanResult) {
      num = arg1;
    }
    let num2 = 0;
    if (!BooleanResult) {
      num2 = arg1;
    }
    function scrollNow(arg0, arg1) {
      let tmp = arg1;
      const current = ref.current;
      if (null != current) {
        const obj = {};
        if (c1) {
          tmp = arg0;
        }
        obj.offset = tmp;
        obj.animated = false;
        current.scrollToOffset(obj);
      }
    }
    let obj = outer2_0(outer2_1[3]);
    yield obj.autoScroll(scrollNow, 0, 0, num, num2, arg3, arg2);
    const obj2 = outer2_0(outer2_1[3]);
    yield obj2.autoScroll(scrollNow, num, num2, 0, 0, arg3, arg2);
  }
}
({ useCallback: closure_4, useEffect: closure_5, useRef: closure_6, useState: closure_7 } = result);

export const useFlatListBenchmark = function useFlatListBenchmark(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let asyncGeneratorStep = arg2;
  const tmp = isBenchmarkRunning(callback4(false), 2);
  isBenchmarkRunning = tmp[0];
  const callback2 = tmp[1];
  const callback3 = startBenchmark(null);
  const items = [arg1, arg0, isBenchmarkRunning, , , ];
  ({ repeatCount: arr[3], speedMultiplier: arr[4], targetOffset: arr[5] } = arg2);
  startBenchmark = callback2(() => {
    if (!isBenchmarkRunning) {
      const Cancellable = callback(5424).Cancellable;
      const prototype = Cancellable.prototype;
      const cancellable = new Cancellable();
      closure_5.current = cancellable;
      if (cancellable.current) {
        if (cancellable.current.props) {
          const data = cancellable.current.props.data;
          let length;
          if (null != data) {
            length = data.length;
          }
          if (Number(length) <= 0) {
            const _Error = Error;
            const error = new Error(callback(5356).ErrorMessages.dataEmptyCannotRunBenchmark);
            throw error;
          }
        }
      }
      callback2(true);
      (() => {
        let closure_0 = callback(async () => {
          let tmp13;
          const jSFPSMonitor = new lib(5425).JSFPSMonitor();
          jSFPSMonitor.startTracking();
          let num = 0;
          if (0 < tmp2) {
            do {
              let tmp4 = cancellable;
              let tmp5 = outer3_2;
              let targetOffset = outer3_2.targetOffset;
              let tmp6 = lib;
              let num2 = outer3_2.speedMultiplier;
              let tmp3 = outer4_8;
              if (!num2) {
                num2 = 1;
              }
              let tmp7 = tmp4;
              let tmp8 = targetOffset;
              let tmp9 = tmp6;
              let tmp10 = num2;
              let tmp11 = yield tmp3(tmp4, targetOffset, tmp6, num2);
              num = num + 1;
              let tmp12 = outer3_2;
              tmp13 = outer3_2.repeatCount || 1;
            } while (num < tmp13);
          }
          const obj = { js: jSFPSMonitor.stopAndGetData(), suggestions: [], interrupted: lib.isCancelled() };
          if (!lib.isCancelled()) {
            obj.formattedString = lib(5423).getFormattedString(obj);
            const obj3 = lib(5423);
          }
          outer3_1(obj);
          outer3_4(false);
        });
        return function runBenchmark() {
          return callback(...arguments);
        };
      })()();
    }
  }, items);
  callback3(() => {
    if (!asyncGeneratorStep.startManually) {
      let num = asyncGeneratorStep.startDelayInMs;
      if (!num) {
        num = 3000;
      }
      const timeout = setTimeout(() => {
        outer1_6();
      }, num);
      return () => {
        clearTimeout(closure_0);
        if (outer1_5.current) {
          const current = outer1_5.current;
          current.cancel();
        }
      };
    }
  }, []);
  return { startBenchmark, isBenchmarkRunning };
};
