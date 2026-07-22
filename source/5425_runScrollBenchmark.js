// Module ID: 5425
// Function ID: 46479
// Name: runScrollBenchmark
// Dependencies: []
// Exports: useFlatListBenchmark

// Module 5425 (runScrollBenchmark)
function runScrollBenchmark(arg0, arg1, arg2, arg3) {
  return _runScrollBenchmark(...arguments);
}
async function _runScrollBenchmark(current, diff2, arg2, arg3, arg4) {
  let BooleanResult;
  if (current.current) {
    const props = current.current.props;
    let horizontal;
    if (null != props) {
      horizontal = props.horizontal;
    }
    BooleanResult = Boolean(horizontal);
    let num = 0;
    if (BooleanResult) {
      num = diff2;
    }
    let num2 = 0;
    if (!BooleanResult) {
      num2 = diff2;
    }
    function scrollNow(arg0, arg1) {
      let tmp = arg1;
      const current = arg0.current;
      if (null != current) {
        const obj = {};
        if (BooleanResult) {
          tmp = arg0;
        }
        obj.offset = tmp;
        obj.animated = false;
        current.scrollToOffset(obj);
      }
    }
    const obj = current(BooleanResult[3]);
    yield obj.autoScroll(scrollNow, 0, 0, num, num2, arg3, arg2);
    const obj2 = current(BooleanResult[3]);
    yield obj2.autoScroll(scrollNow, num, num2, 0, 0, arg3, arg2);
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ useCallback: closure_4, useEffect: closure_5, useRef: closure_6, useState: closure_7 } = arg1(dependencyMap[2]));

export const useFlatListBenchmark = function useFlatListBenchmark(arg0, arg1, arg2) {
  arg1 = arg0;
  const dependencyMap = arg1;
  let closure_2 = arg2;
  const tmp = callback2(callback5(false), 2);
  const isBenchmarkRunning = tmp[0];
  const callback2 = isBenchmarkRunning;
  const callback3 = tmp[1];
  const callback4 = startBenchmark(null);
  const items = [arg1, arg0, isBenchmarkRunning, , , ];
  ({ repeatCount: arr[3], speedMultiplier: arr[4], targetOffset: arr[5] } = arg2);
  const startBenchmark = callback3(() => {
    if (!isBenchmarkRunning) {
      const Cancellable = arg0(arg1[3]).Cancellable;
      const prototype = Cancellable.prototype;
      const cancellable = new Cancellable();
      const arg0 = cancellable;
      closure_5.current = cancellable;
      if (arg0.current) {
        if (arg0.current.props) {
          const data = arg0.current.props.data;
          let length;
          if (null != data) {
            length = data.length;
          }
          if (Number(length) <= 0) {
            const _Error = Error;
            const error = new Error(arg0(arg1[4]).ErrorMessages.dataEmptyCannotRunBenchmark);
            throw error;
          }
        }
      }
      callback(true);
      () => {
        let closure_0 = callback(async () => {
          let tmp13;
          const jSFPSMonitor = new lib(callback[5]).JSFPSMonitor();
          jSFPSMonitor.startTracking();
          let num = 0;
          if (0 < tmp2) {
            do {
              let tmp4 = closure_0;
              let tmp5 = closure_2;
              let targetOffset = closure_2.targetOffset;
              let tmp6 = closure_0;
              let num2 = closure_2.speedMultiplier;
              let tmp3 = closure_8;
              if (!num2) {
                num2 = 1;
              }
              let tmp7 = tmp4;
              let tmp8 = targetOffset;
              let tmp9 = tmp6;
              let tmp10 = num2;
              let tmp11 = yield tmp3(tmp4, targetOffset, tmp6, num2);
              num = num + 1;
              let tmp12 = closure_2;
              tmp13 = closure_2.repeatCount || 1;
            } while (num < tmp13);
          }
          const obj = { js: jSFPSMonitor.stopAndGetData(), suggestions: [], interrupted: lib.isCancelled() };
          if (!lib.isCancelled()) {
            obj.formattedString = lib(callback[6]).getFormattedString(obj);
            const obj3 = lib(callback[6]);
          }
          callback(obj);
          callback2(false);
        });
        return function runBenchmark() {
          return callback(...arguments);
        };
      }()();
    }
  }, items);
  callback4((arg0, arg1, self) => {
    if (!self.startManually) {
      let num = self.startDelayInMs;
      if (!num) {
        num = 3000;
      }
      const timeout = setTimeout(() => {
        callback();
      }, num);
      return () => {
        clearTimeout(closure_0);
        if (ref.current) {
          const current = ref.current;
          current.cancel();
        }
      };
    }
  }, []);
  return { startBenchmark, isBenchmarkRunning };
};
